import { defineStore } from 'pinia';
import { ref } from 'vue';
import { positionInterpretations } from '../data/positionInterpretations';
import { tarotCards, type TarotCardType } from '../data/tarotCards';

export const useCardStore = defineStore('cards', () => {
  const count = ref(0);
  let remainingCardsIdList = positionInterpretations;
  function getRandomCard() {
    const randomIndex =
      (crypto.getRandomValues(new Uint32Array(1))[0] as number) % tarotCards.length;
    return tarotCards[randomIndex] as TarotCardType;
  }
  function getReverseState() {
    const isReversed = (crypto.getRandomValues(new Uint8Array(1))[0] as number) > 127;
    return isReversed;
  }
  async function getThreeCards() {
    const presentCard = await getPresentCard();
    const pastCard = await getPastCard();
    const futureCard = await getFutureCard();
    return { presentCard, pastCard, futureCard };
  }
  async function getPresentCard() {
    const randomIndex = (crypto.getRandomValues(new Uint32Array(1))[0] as number) % remainingCardsIdList.length;
    remainingCardsIdList.splice(randomIndex, 1);
    return remainingCardsIdList[randomIndex];
  }
  async function getPastCard() {
    const randomIndex = (crypto.getRandomValues(new Uint32Array(1))[0] as number) % remainingCardsIdList.length;
    remainingCardsIdList.splice(randomIndex, 1);
    return remainingCardsIdList[randomIndex];
  }
  async function getFutureCard() {
    const randomIndex = (crypto.getRandomValues(new Uint32Array(1))[0] as number) % remainingCardsIdList.length;
    remainingCardsIdList.splice(randomIndex, 1);
    return remainingCardsIdList[randomIndex];
  }
  async function resetCards() {
    remainingCardsIdList = positionInterpretations;
  }

  return { count, getRandomCard, getReverseState, resetCards, getThreeCards };
});
