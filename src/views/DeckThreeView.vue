<script setup lang="ts">
import TarotCard from '@/components/TarotCard.vue';
import { ref } from 'vue';
import type { TarotCardType } from '../data/tarotCards';
import { tarotCards } from '../data/tarotCards';

const drawnCards = ref<{ card: TarotCardType; isReversed: boolean }[]>([]);
const cardPositions = ref(['Past', 'Present', 'Future']);
const isDrawing = ref(false);

const getRandomCard = (): TarotCardType => {
  return tarotCards[Math.floor(Math.random() * tarotCards.length)];
};

const getReverseState = (): boolean => {
  return Math.random() > 0.5;
};

const drawThreeCards = () => {
  if (isDrawing.value) return;

  isDrawing.value = true;
  drawnCards.value = [];

  // Draw cards with staggered animation
  cardPositions.value.forEach((_, index) => {
    setTimeout(() => {
      drawnCards.value.push({
        card: getRandomCard(),
        isReversed: getReverseState(),
      });
    }, index * 300); // Stagger each card by 300ms
  });

  setTimeout(() => {
    isDrawing.value = false;
  }, 1000);
};

const clearCards = () => {
  drawnCards.value = [];
};
</script>

<template>
  <div class="deck-three-view">
    <!-- Header -->
    <div class="header">
      <h1>🔮 Three Card Spread</h1>
      <p class="subtitle">Past • Present • Future</p>
    </div>

    <!-- Draw Button -->
    <div class="button-container">
      <button
        v-if="drawnCards.length === 0"
        @click="drawThreeCards"
        :disabled="isDrawing"
        class="draw-btn"
      >
        {{ isDrawing ? 'Drawing...' : 'Draw Three Cards' }}
      </button>
      <button v-else @click="clearCards" class="clear-btn">Clear & Draw Again</button>
    </div>

    <!-- Cards Display -->
    <div v-if="drawnCards.length > 0" class="cards-grid">
      <div v-for="(item, index) in drawnCards" :key="index" class="card-column">
        <div class="card-wrapper">
          <div :class="['card-display', { reversed: item.isReversed }]">
            <TarotCard :card="item.card" :isReversed="item.isReversed" />
          </div>
        </div>
      </div>
    </div>

    <!-- Interpretation Section -->
    <div v-if="drawnCards.length > 0" class="interpretation">
      <h2>💡 Reading</h2>
      <div class="interpretation-grid">
        <div
          v-for="(item, index) in drawnCards"
          :key="'interpretation-' + index"
          class="interpretation-card"
        >
          <h4>{{ cardPositions[index] }}</h4>
          <p class="interpretation-text">
            {{
              typeof (item.isReversed ? item.card.reversed : item.card.upright) === 'string'
                ? item.isReversed
                  ? item.card.reversed
                  : item.card.upright
                : (item.isReversed ? item.card.reversed : item.card.upright).summary
            }}
          </p>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <p>✨ Click the button above to begin your three-card spread</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.deck-three-view {
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: #fff;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  letter-spacing: 2px;
}

/* Button Container */
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.draw-btn,
.clear-btn {
  padding: 12px 40px;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #ffd700;
  border-radius: 8px;
  background: linear-gradient(135deg, #ffd700, #daa520);
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.clear-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-color: #667eea;
  color: #fff;
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.card-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.position-label {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffd700;
}

.card-wrapper {
  perspective: 1000px;
}

.card-display {
  width: 200px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(255, 215, 0, 0.3);
  }

  &.reversed {
    transform: rotate(180deg);
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  text-align: center;

  .card-name {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: #fff;
  }

  .card-arcana {
    margin: 0.25rem 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .reversed-badge {
    display: inline-block;
    padding: 4px 12px;
    background-color: #e74c3c;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }
}

/* Interpretation Section */
.interpretation {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
}

.interpretation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.interpretation-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #ffd700;

  h4 {
    color: #ffd700;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .interpretation-text {
    line-height: 1.8;
    color: #e0e0e0;
    margin: 0;
  }
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  opacity: 0.8;
  font-size: 1.2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-display {
    width: 180px;
    height: 270px;
  }

  .interpretation-grid {
    grid-template-columns: 1fr;
  }
}
</style>
