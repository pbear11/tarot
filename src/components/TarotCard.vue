<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { TarotCard } from '../data/tarotCards';
import { getRandomCard } from '../data/tarotCards';

export default defineComponent({
  name: 'TarotCard',
  props: {
    card: {
      type: Object as PropType<TarotCard>,
      required: true,
      default: () => ({}) as TarotCard,
    },
    isReversed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      reversed: false,
      currentCard: {} as TarotCard | undefined,
    };
  },
  computed: {
    cardOrientation(): string {
      return this.reversed ? 'Reversed' : 'Upright';
    },
  },
  methods: {
    reverse() {
      // Logic to open a modal or expand card info can be added here
      this.reversed = !this.reversed;
      this.pullCard();
    },
    pullCard() {
      if (!this.reversed) return;
      // Logic to pull a new card can be added here
      this.currentCard = getRandomCard();
      console.log(this.currentCard);
    },
  },
});
</script>
<template>
  <div class="tarot-card-wrapper" :class="{ reversed: reversed }">
    <div class="tarot-card" @click="reverse">
      <!-- Card Front -->
      <div class="card-front">
        <div class="card-header">
          <div class="card-corner card-corner-top-left">✦</div>
          <div class="card-corner card-corner-top-right">✦</div>
        </div>

        <div class="card-content">
          <!-- <div class="card-image">{{ card.image }}</div> -->
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
      <div class="card-back">
        <img :src="currentCard?.url" :alt="card.name" class="card-back-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tarot-card-wrapper {
  perspective: 1200px;
  height: 400px;
  cursor: pointer;
}

.tarot-card {
  width: 30vmin;
  height: 50vmin;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
  margin: 20px;
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.tarot-card-wrapper.reversed .tarot-card {
  transform: rotateY(180deg);
}

/* Card Front */
.card-front {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  justify-content: space-between;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  border-radius: 20px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(102, 126, 234, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.card-front::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.card-header,
.card-footer {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.card-corner {
  font-size: 1.5rem;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
  flex: 1;
}

.card-image {
  font-size: 8rem;
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2));
  animation: float 3s ease-in-out infinite;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.card-arcana {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

/* Hover Effect */
.tarot-card-wrapper:hover .card-corner {
  opacity: 1;
}

.tarot-card-wrapper:hover {
  transform: scale(1.05);
}

.tarot-card-wrapper:hover .tarot-card {
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(102, 126, 234, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .tarot-card-wrapper {
    height: 350px;
  }

  .card-image {
    font-size: 6rem;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .card-front,
  .card-info {
    padding: 1rem;
  }
}
</style>
