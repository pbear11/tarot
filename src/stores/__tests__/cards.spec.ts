import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useCardStore } from '../cards';

describe('Card Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('getRandomCard', () => {
    it('should return a valid tarot card', () => {
      const store = useCardStore();
      const card = store.getRandomCard();

      expect(card).toBeDefined();
      expect(card).toHaveProperty('id');
      expect(card).toHaveProperty('name');
      expect(card).toHaveProperty('arcana');
      expect(['Major', 'Minor']).toContain(card.arcana);
    });

    it('should return different cards on multiple calls (probabilistic)', () => {
      const store = useCardStore();
      const cardIds: number[] = [];

      // Draw 10 cards and check we get at least some variety
      for (let i = 0; i < 10; i++) {
        const card = store.getRandomCard();
        cardIds.push(card.id);
      }

      // With 78 cards, getting the same card 10 times is extremely unlikely
      const uniqueIds = [...new Set(cardIds)];
      expect(uniqueIds.length).toBeGreaterThan(1);
    });
  });

  describe('getReverseState', () => {
    it('should return a boolean', () => {
      const store = useCardStore();
      const result = store.getReverseState();

      expect(typeof result).toBe('boolean');
    });

    it('should return both true and false over multiple calls (probabilistic)', () => {
      const store = useCardStore();
      const results: boolean[] = [];

      // Call multiple times to get both values
      for (let i = 0; i < 20; i++) {
        results.push(store.getReverseState());
      }

      // Should get both true and false with high probability
      const hasTrue = results.includes(true);
      const hasFalse = results.includes(false);
      expect(hasTrue && hasFalse).toBe(true);
    });
  });

  describe('getThreeCards', () => {
    it('should return three cards with past, present, and future', async () => {
      const store = useCardStore();
      const result = await store.getThreeCards();

      expect(result).toHaveProperty('pastCard');
      expect(result).toHaveProperty('presentCard');
      expect(result).toHaveProperty('futureCard');
    });

    it('should return cards with required interpretation properties', async () => {
      const store = useCardStore();
      const { pastCard, presentCard, futureCard } = await store.getThreeCards();

      // All cards should be defined
      expect(pastCard).toBeDefined();
      expect(presentCard).toBeDefined();
      expect(futureCard).toBeDefined();

      // Check pastCard structure
      expect(pastCard).toHaveProperty('id');
      expect(pastCard).toHaveProperty('name');
      expect(pastCard).toHaveProperty('past');
      expect(pastCard).toHaveProperty('present');
      expect(pastCard).toHaveProperty('future');

      // Check position data structure
      expect(pastCard?.past).toHaveProperty('love');
      expect(pastCard?.past).toHaveProperty('career');
      expect(pastCard?.past).toHaveProperty('life');

      // Check reading structure
      expect(pastCard?.past.love).toHaveProperty('upright');
      expect(pastCard?.past.love).toHaveProperty('reversed');
    });

    it('should return three different cards', async () => {
      const store = useCardStore();
      const { pastCard, presentCard, futureCard } = await store.getThreeCards();

      const ids = [pastCard?.id, presentCard?.id, futureCard?.id];
      const uniqueIds = [...new Set(ids)];

      // All three cards should have different IDs
      expect(uniqueIds.length).toBe(3);
    });
  });

  describe('card data integrity', () => {
    it('should have valid interpretation strings', async () => {
      const store = useCardStore();
      const { pastCard } = await store.getThreeCards();

      expect(pastCard).toBeDefined();

      // Check that interpretations are non-empty strings
      expect(typeof pastCard?.past.love.upright).toBe('string');
      expect(pastCard?.past.love.upright.length).toBeGreaterThan(0);
      expect(typeof pastCard?.past.love.reversed).toBe('string');
      expect(pastCard?.past.love.reversed.length).toBeGreaterThan(0);
    });

    it('should have all required card metadata', async () => {
      const store = useCardStore();
      const { presentCard } = await store.getThreeCards();

      expect(presentCard).toBeDefined();
      expect(presentCard).toHaveProperty('vibe');
      expect(presentCard).toHaveProperty('description');
      expect(presentCard).toHaveProperty('url');
      expect(typeof presentCard?.vibe).toBe('string');
      expect(typeof presentCard?.description).toBe('string');
      expect(typeof presentCard?.url).toBe('string');
    });

    it('each position card should have correct interpretation structure', async () => {
      const store = useCardStore();
      const { pastCard, presentCard, futureCard } = await store.getThreeCards();

      // Past card should have past interpretations
      expect(pastCard).toBeDefined();
      expect(pastCard?.past).toHaveProperty('love');
      expect(pastCard?.past).toHaveProperty('career');
      expect(pastCard?.past).toHaveProperty('life');

      // Present card should have present interpretations
      expect(presentCard).toBeDefined();
      expect(presentCard?.present).toHaveProperty('love');
      expect(presentCard?.present).toHaveProperty('career');
      expect(presentCard?.present).toHaveProperty('life');

      // Future card should have future interpretations
      expect(futureCard).toBeDefined();
      expect(futureCard?.future).toHaveProperty('love');
      expect(futureCard?.future).toHaveProperty('career');
      expect(futureCard?.future).toHaveProperty('life');
    });
  });
});
