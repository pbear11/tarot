<script setup lang="ts">
import { computed, ref } from 'vue';
import { positionInterpretations, type Category, type Position } from '../data/positionInterpretations';
import type { TarotCardType } from '../data/tarotCards';
import { tarotCards } from '../data/tarotCards';

interface DrawnCard {
  card: TarotCardType;
  isReversed: boolean;
  isRevealed: boolean;
  imageUrl: string;
  position: Position;
}

type ReadingCategory = Category;

const categories: { id: ReadingCategory; label: string; icon: string }[] = [
  { id: 'love', label: 'Love', icon: '♥' },
  { id: 'career', label: 'Career', icon: '◆' },
  { id: 'life', label: 'Life Overall', icon: '✦' },
  { id: 'ex', label: 'Ex Connection', icon: '⚡' },
];

const drawnCards = ref<DrawnCard[]>([]);
const positions: Position[] = ['past', 'present', 'future'];
const positionLabels: Record<Position, string> = {
  past: 'Past',
  present: 'Present',
  future: 'Future',
};
const selectedCardIndex = ref<number | null>(null);
const selectedCategory = ref<ReadingCategory | null>(null);
const isDrawing = ref(false);

const getRandomCard = (): TarotCardType => {
  const index = Math.floor(Math.random() * tarotCards.length);
  return tarotCards[index] as TarotCardType;
};

const getReverseState = (): boolean => Math.random() > 0.5;

const loadCardImage = async (card: TarotCardType): Promise<string> => {
  const module = await import(`../${card.url}`);
  return module.default;
};

const selectCategory = async (category: ReadingCategory) => {
  if (isDrawing.value) return;

  isDrawing.value = true;
  selectedCategory.value = category;
  drawnCards.value = [];
  selectedCardIndex.value = null;

  for (const position of positions) {
    const card = getRandomCard();
    const imageUrl = await loadCardImage(card);
    drawnCards.value.push({
      card,
      isReversed: getReverseState(),
      isRevealed: false,
      imageUrl,
      position,
    });
  }

  isDrawing.value = false;
};

const revealCard = (index: number) => {
  const item = drawnCards.value[index];
  if (item && !item.isRevealed) {
    item.isRevealed = true;
  }
  selectedCardIndex.value = index;
};

const resetReading = () => {
  drawnCards.value = [];
  selectedCardIndex.value = null;
  selectedCategory.value = null;
};

const drawAgain = () => {
  if (selectedCategory.value) {
    selectCategory(selectedCategory.value);
  }
};

const selectedCard = computed(() => {
  if (selectedCardIndex.value === null) return null;
  return drawnCards.value[selectedCardIndex.value];
});

const getInterpretation = (item: DrawnCard): string => {
  if (!selectedCategory.value) return '';

  const positionData = positionInterpretations.find((p) => p.id === item.card.id);
  if (!positionData) return '';

  const reading = positionData[item.position][selectedCategory.value];

  // Handle optional ex category - fallback to general message if not available
  if (!reading || (!reading.upright && !reading.reversed)) {
    return 'This card speaks to your journey with profound wisdom. Take a moment to reflect on what this card means to you in this context.';
  }

  return item.isReversed ? reading.reversed : reading.upright;
};

const categoryLabel = computed(() => {
  return categories.find((c) => c.id === selectedCategory.value)?.label || '';
});
</script>

<template>
  <div class="deck-three-view flex-col align-center">
    <!-- Category Selection (when no reading started) -->
    <div v-if="drawnCards.length === 0" class="category-section flex-col align-center">
      <div class="section-title">Choose Your Reading</div>
      <div class="category-buttons">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectCategory(cat.id)"
          :disabled="isDrawing"
          class="category-btn"
        >
          <span class="cat-icon">{{ cat.icon }}</span>
          <span class="cat-label">{{ cat.label }}</span>
        </button>
      </div>
      <div class="category-hint">Select a category for your past, present, future spread</div>
    </div>

    <!-- Cards Section (after category selected) -->
    <div v-else class="cards-section flex-col align-center">
      <div class="reading-type">{{ categoryLabel }} Reading</div>

      <!-- Cards Row -->
      <div class="cards-row">
        <div
          v-for="(item, index) in drawnCards"
          :key="index"
          :class="['card-slot', { selected: selectedCardIndex === index, revealed: item.isRevealed }]"
          @click="revealCard(index)"
        >
          <div class="position-label">{{ positionLabels[item.position] }}</div>
          <div class="card-container">
            <!-- Card Back (unrevealed) -->
            <div v-if="!item.isRevealed" class="card-back">
              <div class="card-back-design">
                <span class="card-symbol">✦</span>
                <span class="click-hint">tap</span>
              </div>
            </div>
            <!-- Card Front (revealed) -->
            <div v-else class="card-front">
              <img
                :src="item.imageUrl"
                :alt="item.card.name"
                :style="{ transform: item.isReversed ? 'rotate(180deg)' : '' }"
              />
            </div>
          </div>
          <div class="card-name" v-if="item.isRevealed">
            {{ item.card.name }}
            <span v-if="item.isReversed" class="reversed-badge">Rev</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Reading Section -->
    <div class="reading flex-col align-center" v-if="drawnCards.length > 0">
      <div class="reading-container flex-col align-center">
        <!-- Card Selection Buttons -->
        <div class="card-buttons flex-row">
          <button
            v-for="(item, index) in drawnCards"
            :key="'btn-' + index"
            @click="revealCard(index)"
            :class="['card-btn', { active: selectedCardIndex === index, revealed: item.isRevealed }]"
          >
            {{ positionLabels[item.position] }}
          </button>
        </div>

        <!-- Selected Card Info -->
        <div v-if="selectedCard" class="reading-explanation flex-col">
          <div class="reading-title flex-row align-center">
            <div>{{ selectedCard.card.name }}</div>
            <div class="reversed-tag" v-if="selectedCard.isReversed">Reversed</div>
          </div>
          <div class="position-context">{{ positionLabels[selectedCard.position] }} · {{ categoryLabel }}</div>
          <div class="explanation-text">
            {{ getInterpretation(selectedCard) }}
          </div>
        </div>

        <!-- Hint when no card selected -->
        <div v-else class="reading-hint">
          Tap a card above to reveal its meaning
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons flex-row">
          <button @click="drawAgain" class="refresh-btn">
            ↻ Draw Again
          </button>
          <button @click="resetReading" class="reset-btn">
            ← New Reading
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.deck-three-view {
  height: 100vh;
  justify-content: space-between;
  background: $terminal-black;
}

/* Category Selection Section */
.category-section {
  flex: 1;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 24px;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: $terminal-green;
  font-family: $font-family-mono;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px $terminal-green-glow;
}

.category-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 32px;
  min-width: 120px;
  border: 1px solid rgba($terminal-green, 0.3);
  border-radius: 8px;
  background: rgba($terminal-green, 0.05);
  color: $terminal-green-dim;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: $font-family-mono;

  .cat-icon {
    font-size: 1.8rem;
    opacity: 0.7;
    transition: all 0.25s ease;
  }

  .cat-label {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  &:hover:not(:disabled) {
    background: rgba($terminal-green, 0.15);
    border-color: $terminal-green;
    color: $terminal-green;
    box-shadow: 0 0 25px $terminal-green-glow;
    transform: translateY(-2px);

    .cat-icon {
      opacity: 1;
      text-shadow: 0 0 15px $terminal-green-glow;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.category-hint {
  font-size: 0.75rem;
  color: $terminal-gray;
  font-family: $font-family-mono;
  letter-spacing: 0.5px;
}

/* Cards Section - Top */
.cards-section {
  flex: 1;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 16px;
}

.reading-type {
  font-size: 0.85rem;
  font-weight: 600;
  color: $terminal-cyan;
  font-family: $font-family-mono;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 16px;
  border: 1px solid rgba($terminal-cyan, 0.3);
  border-radius: 4px;
  background: rgba($terminal-cyan, 0.08);
}

/* Cards Row */
.cards-row {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.card-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &.selected .card-container {
    border-color: $terminal-green;
    box-shadow: 0 0 20px $terminal-green-glow;
  }

  &.selected .position-label {
    color: $terminal-green;
  }
}

.position-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: $terminal-gray;
  font-family: $font-family-mono;
}

.card-container {
  width: 90px;
  height: 135px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba($terminal-green, 0.3);
  background: $terminal-dark;
  transition: all 0.2s ease;
}

.card-back {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-back-design {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .card-symbol {
    color: $terminal-green;
    font-size: 1.5rem;
    opacity: 0.5;
  }

  .click-hint {
    font-size: 0.6rem;
    color: $terminal-gray;
    font-family: $font-family-mono;
  }
}

.card-front {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-name {
  font-size: 0.65rem;
  color: $terminal-green-dim;
  text-align: center;
  max-width: 90px;
  font-family: $font-family-mono;
  display: flex;
  align-items: center;
  gap: 4px;
}

.reversed-badge {
  font-size: 0.5rem;
  color: $terminal-red;
  border: 1px solid rgba($terminal-red, 0.5);
  padding: 1px 4px;
  border-radius: 2px;
}

/* Reading Section - Bottom */
.reading {
  width: 100vw;
  min-height: 40vh;
  background: $terminal-dark;
  color: $terminal-green-dim;
  padding: 24px;
  font-family: $font-family-mono;
  border-top: 1px solid rgba($terminal-green, 0.2);

  .reading-container {
    max-width: 500px;
    width: 100%;
  }
}

.card-buttons {
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;

  .card-btn {
    padding: 10px 18px;
    border: 1px solid rgba($terminal-green, 0.3);
    background-color: rgba($terminal-green, 0.05);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    color: $terminal-green-dim;
    font-family: inherit;

    &:hover {
      border-color: $terminal-green;
      background-color: rgba($terminal-green, 0.1);
      color: $terminal-green;
    }

    &.active {
      background-color: rgba($terminal-green, 0.15);
      color: $terminal-green;
      border-color: $terminal-green;
      text-shadow: 0 0 8px $terminal-green-glow;
    }

    &:not(.revealed) {
      opacity: 0.5;
    }
  }
}

.reading-title {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 4px;
  gap: 12px;
  color: $terminal-green;
  text-shadow: 0 0 10px $terminal-green-glow;
}

.reversed-tag {
  display: inline-block;
  padding: 4px 10px;
  border: 1px solid rgba($terminal-red, 0.5);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  color: $terminal-red;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.reading-explanation {
  padding: 16px;
  background-color: rgba($terminal-green, 0.03);
  border-radius: 6px;
  border-left: 3px solid $terminal-green;
  margin-bottom: 16px;

  .explanation-text {
    line-height: 1.7;
    color: $terminal-gray;
    font-size: 14px;
  }
}

.position-context {
  font-size: 0.75rem;
  color: $terminal-cyan;
  font-family: $font-family-mono;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
  opacity: 0.8;
}

.reading-hint {
  color: $terminal-gray;
  font-size: 0.9rem;
  padding: 20px;
  text-align: center;
}

.action-buttons {
  gap: 12px;
  margin-top: 8px;
}

.refresh-btn {
  padding: 10px 20px;
  border: 1px solid rgba($terminal-cyan, 0.4);
  background: rgba($terminal-cyan, 0.1);
  color: $terminal-cyan;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba($terminal-cyan, 0.2);
    border-color: $terminal-cyan;
    box-shadow: 0 0 15px rgba($terminal-cyan, 0.3);
  }
}

.reset-btn {
  padding: 10px 20px;
  border: 1px solid rgba($terminal-gray, 0.4);
  background: rgba($terminal-gray, 0.05);
  color: $terminal-gray;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba($terminal-gray, 0.15);
    border-color: $terminal-gray;
    color: $terminal-green-dim;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .category-btn {
    padding: 16px 24px;
    min-width: 100px;

    .cat-icon {
      font-size: 1.5rem;
    }

    .cat-label {
      font-size: 0.8rem;
    }
  }

  .card-container {
    width: 80px;
    height: 120px;
  }

  .card-name {
    max-width: 80px;
    font-size: 0.55rem;
  }

  .cards-row {
    gap: 8px;
  }

  .reading {
    padding: 16px;
  }

  .card-btn {
    padding: 8px 14px;
    font-size: 0.8rem;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;

    .refresh-btn,
    .reset-btn {
      width: 100%;
    }
  }
}

@media (min-width: 769px) {
  .card-container {
    width: 110px;
    height: 165px;
  }

  .card-name {
    max-width: 110px;
  }
}
</style>
