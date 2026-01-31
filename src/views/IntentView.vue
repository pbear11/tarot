<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { pullOptions } from '../data/options';
import type { TarotCardType } from '../data/tarotCards';

const selectedCount = ref(1);
const pulledCards = ref<TarotCardType[]>([]);

const selectOption = (route: string, isDisabled: boolean) => {
  if (!isDisabled) {
    router.push(route);
  }
};
</script>

<template>
  <div class="intent-view">
    <!-- Header Section -->
    <div class="header">
      <h1>🔮 Set Your Intention</h1>
      <p class="subtitle">What guidance do you seek from the cards?</p>
    </div>

    <!-- Pull Type Selection -->
    <div class="pull-type-section">
      <h3>Choose Your Reading</h3>
      <div class="pull-options">
        <div v-for="option in pullOptions" :key="option.route" class="pull-btn-wrapper">
          <button
            :class="[
              'pull-btn',
              { active: selectedCount === option.count, disabled: option.disabled },
            ]"
            @click="selectOption(option.route, option.disabled)"
            :disabled="option.disabled"
          >
            <span class="icon">{{ option.icon }}</span>
            <span class="label">{{ option.label }}</span>
            <span class="desc">{{ option.description }}</span>
          </button>
          <div v-if="option.disabled" class="coming-soon-badge">Coming Soon</div>
        </div>
      </div>
    </div>

    <!-- Guidance Text -->
    <div v-if="pulledCards.length === 0" class="guidance">
      <p>
        💫 To ensure your reading is untainted and spiritually aligned, we use a Cryptographic
        Randomness Algorithm. It draws from the inherent chaos of the physical world to determine
        your cards. We've removed the human 'pattern' from the code, allowing the universe's true
        synchronicity to speak through the data.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intent-view {
  min-height: 100vh;
  padding: 2rem 1rem;
  color: $terminal-green-dim;
  background-color: $terminal-black;
  width: 100vw;
  height: 100%;
  overflow: auto;
  font-family: $font-family-mono;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: $terminal-green;
  text-shadow: 0 0 20px $terminal-green-glow;
  font-weight: 700;
}

.subtitle {
  font-size: 14px;
  color: $terminal-gray;
  font-style: normal;
  letter-spacing: 0.5px;
}

/* Pull Type Section */
.pull-type-section {
  margin-bottom: 2.5rem;
}

.pull-type-section h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: $terminal-cyan;
  font-weight: 500;
  letter-spacing: 1px;
}

.pull-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.pull-btn-wrapper {
  position: relative;
}

.pull-btn {
  background: rgba($terminal-green, 0.05);
  border: 1px solid rgba($terminal-green, 0.3);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  color: $terminal-green-dim;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  width: 100%;
  font-family: inherit;

  &:hover:not(.disabled) {
    background: rgba($terminal-green, 0.1);
    border-color: $terminal-green;
    box-shadow: 0 0 20px rgba($terminal-green, 0.2);
    transform: translateY(-2px);

    .label {
      color: $terminal-green;
      text-shadow: 0 0 10px $terminal-green-glow;
    }
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: rgba($terminal-gray, 0.05);
    border-color: rgba($terminal-gray, 0.2);
  }

  .icon {
    font-size: 1.8rem;
    filter: grayscale(100%) brightness(1.5);
  }

  .label {
    font-weight: 600;
    font-size: 1rem;
    color: $terminal-green;
    transition: all 0.2s ease;
  }

  .desc {
    font-size: 0.75rem;
    color: $terminal-gray;
  }
}

.coming-soon-badge {
  position: absolute;
  top: -10px;
  right: 10px;
  background: $terminal-dark;
  color: $terminal-yellow;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  border: 1px solid rgba($terminal-yellow, 0.3);
  font-family: inherit;
}

/* Results Section */
.results-section {
  animation: fadeIn 0.6s ease-in;
}

.results-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: $terminal-green;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Guidance Section */
.guidance {
  text-align: center;
  margin-top: 3rem;
  padding: 1.5rem;
  background: rgba($terminal-green, 0.03);
  border-radius: 8px;
  border: 1px dashed rgba($terminal-green, 0.2);
  border-left: 3px solid $terminal-green;
}

.guidance p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: $terminal-gray;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }

  .cards-container {
    grid-template-columns: 1fr;
  }

  .pull-options {
    grid-template-columns: 1fr;
  }

  .card {
    height: 300px;
  }

  .card-image {
    font-size: 4rem;
  }

  .pull-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .coming-soon-badge {
    top: -8px;
    right: 5px;
    font-size: 0.65rem;
    padding: 3px 8px;
  }
}
</style>
