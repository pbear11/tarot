<script lang="ts">
export default {
  name: 'DeckView',
}
</script>

<template>
  <div class="deck-view">
    <router-view />
  </div>
</template>

<style scoped>
.deck-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
