<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { pullOptions } from '../data/options';
import { type TarotCard } from '../data/tarotCards';

const selectedCount = ref(1);
const pulledCards = ref<TarotCard[]>([]);

const selectOption = (route: string) => {
  router.push(route);
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
        <button
          v-for="option in pullOptions"
          :key="option.route"
          :class="['pull-btn', { active: selectedCount === option.count }]"
          @click="selectOption(option.route)"
        >
          <span class="icon">{{ option.icon }}</span>
          <span class="label">{{ option.label }}</span>
          <span class="desc">{{ option.description }}</span>
        </button>
      </div>
    </div>

    <!-- Guidance Text -->
    <div v-if="pulledCards.length === 0" class="guidance">
      <p>
        💫 To ensure your reading is untainted and spiritually aligned, we use a Cryptographic
        Randomness Algorithm. It draws from the inherent chaos of the physical world to determine
        your cards. We’ve removed the human 'pattern' from the code, allowing the universe's true
        synchronicity to speak through the data./p>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intent-view {
  min-height: 100vh;
  padding: 2rem 1rem;
  color: #fff;
  background-color: $black;
  width: 100vw;
  height: 100%;
  overflow: auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 15px;
  opacity: 0.95;
  font-style: italic;
}

/* Pull Type Section */
.pull-type-section {
  margin-bottom: 2.5rem;
}

.pull-type-section h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.pull-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.pull-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 1.5rem 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.pull-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
}

.pull-btn .icon {
  font-size: 1.8rem;
}

.pull-btn .label {
  font-weight: 600;
  font-size: 1rem;
}

.pull-btn .desc {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Results Section */
.results-section {
  animation: fadeIn 0.6s ease-in;
}

.results-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
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
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  border: 2px dashed rgba(255, 255, 255, 0.3);
}

.guidance p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
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
}
</style>
