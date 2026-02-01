<script setup lang="ts">
import { ref, type PropType } from 'vue';
import type { TarotCardType } from '../data/tarotCards';
import { useCardStore } from '../stores/cards';

const animationDuration = 0.6; // seconds

defineProps({
  card: {
    type: Object as PropType<TarotCardType>,
    required: true,
    default: () => ({}) as TarotCardType,
  },
  isReversed: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['cardPull', 'cardClose']);
const cardStore = useCardStore();

const isCardShowing = ref(false);
const transformStyle = ref(false);
const isAnimationOngoing = ref(false);
const cardReverseState = ref(false);
const currentCard = ref<TarotCardType | undefined>({} as TarotCardType);
const imageUrl = ref('');

const pullCard = async () => {
  cardReverseState.value = cardStore.getReverseState();
  currentCard.value = cardStore.getRandomCard();
  imageUrl.value = '/src' + currentCard.value?.url;
  emit('cardPull', currentCard.value, cardReverseState.value);
};

const reverse = () => {
  if (isAnimationOngoing.value) return;
  transformStyle.value = !transformStyle.value;
  isAnimationOngoing.value = true;

  setTimeout(() => {
    if (isCardShowing.value) {
      emit('cardClose');
    } else {
      pullCard();
    }
    isCardShowing.value = !isCardShowing.value;
  }, animationDuration * 500);

  setTimeout(() => {
    isAnimationOngoing.value = false;
  }, animationDuration * 1000);
};
</script>

<template>
  <div class="tarot-card-wrapper" :class="{ transformAnimation: transformStyle }">
    <div class="tarot-card" @click="reverse">
      <!-- Card Front -->
      <div class="card-front">
        <div class="card-header">
          <div class="card-corner card-corner-top-left">✦</div>
          <div class="card-corner card-corner-top-right">✦</div>
        </div>

        <div class="card-content">
          <h2 class="card-title">{{ card.name }}</h2>
          <p class="card-arcana">
            {{ card.arcana }}<span v-if="card.suit"> • {{ card.suit }}</span>
          </p>
        </div>

        <div class="card-footer">
          <div class="card-corner card-corner-bottom-left">✦</div>
          <div class="card-corner card-corner-bottom-right">✦</div>
        </div>
      </div>
      <!-- Card Back (Image) -->
      <div class="card-back" v-if="isCardShowing">
        <img
          :style="{ transform: cardReverseState ? 'rotate(180deg)' : '' }"
          :src="imageUrl"
          :alt="card.name"
          class="card-back-image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tarot-card-wrapper {
  perspective: 1200px;
  height: 100%;
  cursor: pointer;
}

.tarot-card {
  position: relative;
  height: 100%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin: 20px;
  cursor: pointer;
  transition:
    transform 0.6s ease-in-out,
    box-shadow 0.6s ease-in-out;
}

.tarot-card-wrapper.transformAnimation .tarot-card {
  transform: rotateY(180deg);
}

/* Card Front - Terminal Style */
.card-front {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  background: $terminal-dark;
  justify-content: space-between;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow:
    0 0 30px $terminal-green-glow,
    0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba($terminal-green, 0.3);
  font-family: $font-family-mono;
}

/* Scanline effect */
.card-front::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  pointer-events: none;
  z-index: 10;
}

/* Grid pattern overlay */
.card-front::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 50% 50%, rgba($terminal-green, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.card-back {
  position: absolute;
  top: 0;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transform: scaleX(-1);
}

.card-header,
.card-footer {
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.card-corner {
  font-size: 1.2rem;
  color: $terminal-green;
  opacity: 0.5;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px $terminal-green-glow;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
  flex: 1;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: $terminal-green;
  text-shadow: 0 0 15px $terminal-green-glow;
  text-align: center;
  letter-spacing: 1px;
}

.card-arcana {
  font-size: 0.85rem;
  color: $terminal-gray;
  margin: 0;
  font-style: normal;
  letter-spacing: 0.5px;
}

/* Hover Effect */
.tarot-card-wrapper:hover .card-corner {
  opacity: 1;
  text-shadow: 0 0 12px $terminal-green-glow;
}

.tarot-card-wrapper:hover {
  transform: scale(1.03);
}

.tarot-card-wrapper:hover .card-front {
  box-shadow:
    0 0 40px rgba($terminal-green, 0.3),
    0 30px 80px rgba(0, 0, 0, 0.6);
  border-color: $terminal-green;
}

.tarot-card-wrapper:hover .card-title {
  text-shadow: 0 0 20px $terminal-green-glow;
}

/* Responsive */
@media (max-width: 768px) {
  .card-title {
    font-size: 1.2rem;
  }

  .card-front {
    padding: 1rem;
  }

  .card-corner {
    font-size: 1rem;
  }
}

/* iPad styles */
@media (min-width: 769px) and (max-width: 1024px) {
  .card-title {
    font-size: 1.4rem;
  }
}
</style>
