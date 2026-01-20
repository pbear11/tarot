import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { tarotCards } from '../data/tarotCards';

export const useCardState = defineStore('cards', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
    console.log(tarotCards);
  }

  return { count, doubleCount, increment };
});
