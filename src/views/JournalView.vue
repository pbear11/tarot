<template>
  <div class="journal-view">
    <h1>Reflection Journal</h1>
    <form @submit.prevent="saveReflection">
      <textarea
        v-model="reflection"
        placeholder="Write your thoughts and reflections..."
        rows="10"
      ></textarea>
      <button type="submit">Save Reflection</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const readingId = route.params.id
const reflection = ref('')

const saveReflection = () => {
  // Save reflection to database
}
</script>

<style scoped>
.journal-view {
  padding: 2rem;
}

textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #8b5a5a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #6d4545;
}
</style>
