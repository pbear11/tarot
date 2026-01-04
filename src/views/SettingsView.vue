<template>
  <div class="settings-view">
    <h1>Settings</h1>

    <div class="settings-group">
      <h2>Tone</h2>
      <label>
        <input type="radio" v-model="tone" value="empathic" />
        Empathic
      </label>
      <label>
        <input type="radio" v-model="tone" value="mystical" />
        Mystical
      </label>
      <label>
        <input type="radio" v-model="tone" value="direct" />
        Direct
      </label>
    </div>

    <div class="settings-group">
      <h2>Reversals</h2>
      <label>
        <input type="checkbox" v-model="useReversals" />
        Include reversed card interpretations
      </label>
    </div>

    <div class="settings-group">
      <h2>Privacy</h2>
      <label>
        <input type="checkbox" v-model="saveReadings" />
        Save reading history
      </label>
      <label>
        <input type="checkbox" v-model="shareInsights" />
        Allow sharing of anonymous insights
      </label>
    </div>

    <button @click="saveSettings">Save Settings</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tone = ref('empathic')
const useReversals = ref(true)
const saveReadings = ref(true)
const shareInsights = ref(false)

const saveSettings = () => {
  // Save settings to local storage or database
}
</script>

<style scoped>
.settings-view {
  padding: 2rem;
  max-width: 600px;
}

.settings-group {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ddd;
}

.settings-group h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

label {
  display: block;
  margin-bottom: 0.75rem;
  cursor: pointer;
}

input[type='radio'],
input[type='checkbox'] {
  margin-right: 0.5rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #8b5a5a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #6d4545;
}
</style>
