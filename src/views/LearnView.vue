<template>
  <div class="learn-view">
    <h1>Card Encyclopedia</h1>
    <div class="search-bar">
      <input type="text" placeholder="Search cards..." v-model="searchQuery" />
    </div>
    <div class="cards-grid">
      <!-- Card meanings and interpretations -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')

// Filter and display card meanings
</script>

<style scoped>
.learn-view {
  padding: 2rem;
}

.search-bar {
  margin-bottom: 2rem;
}

.search-bar input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
