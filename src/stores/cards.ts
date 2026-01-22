import { defineStore } from 'pinia';
import { ref } from 'vue';
import { tarotCards, type TarotCardType } from '../data/tarotCards';

export const useCardStore = defineStore('cards', () => {
  const count = ref(0);
  function getRandomCard() {
    const randomIndex =
      (crypto.getRandomValues(new Uint32Array(1))[0] as number) % tarotCards.length;
    return tarotCards[randomIndex] as TarotCardType;
  }
  function getReverseState() {
    const isReversed = (crypto.getRandomValues(new Uint8Array(1))[0] as number) > 127;
    return isReversed;
  }

  return { count, getRandomCard, getReverseState };
});
