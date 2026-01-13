<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TarotCard } from '../data/tarotCards'

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
    }
  },
  methods: {
    reverse() {
      // Logic to open a modal or expand card info can be added here
      console.log(`Card Info for ${this.card.name} opened.`)
      this.reversed = !this.reversed
    },
  },
})
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
          <div class="card-image">{{ card.image }}</div>
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

      <!-- Card Info (Back) -->
      <div class="card-info">
        <div class="info-content">
          <div :class="['meaning-box', { reversed: isReversed }]">
            <p v-if="!isReversed" class="meaning-label">✨ Upright</p>
            <p v-else class="meaning-label">🔄 Reversed</p>
            <p class="meaning-text">{{ isReversed ? card.reversed : card.upright }}</p>
          </div>
          <p class="description">{{ card.description }}</p>
        </div>
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
  width: 30vw;
  height: 45vw;
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

.card-front,
.card-info {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(102, 126, 234, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* Card Front */
.card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  justify-content: space-between;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
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

/* Card Info (Back) */
.card-info {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 2rem;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
}

.card-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.03) 10px,
    transparent 10px,
    transparent 20px
  );
  pointer-events: none;
  border-radius: 20px;
}

.info-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.meaning-box {
  background: rgba(102, 126, 234, 0.2);
  border: 2px solid rgba(102, 126, 234, 0.5);
  border-radius: 12px;
  padding: 1.2rem;
  backdrop-filter: blur(10px);
}

.meaning-box.reversed {
  background: rgba(255, 107, 107, 0.2);
  border-color: rgba(255, 107, 107, 0.5);
}

.meaning-label {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}

.meaning-text {
  font-size: 1rem;
  margin: 0;
  color: #fff;
  line-height: 1.6;
}

.description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
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
