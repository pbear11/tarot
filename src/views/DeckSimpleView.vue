<script lang="ts">
import TarotCard from '@/components/TarotCard.vue';
import { defineComponent } from 'vue';
import type { TarotCardType } from '../data/tarotCards';

export default defineComponent({
  name: 'DeckSimpleView',
  components: {
    'tarot-card': TarotCard,
  },
  methods: {
    handleCardPulled(card: TarotCardType) {
      console.log('Card pulled in DeckSimpleView:', card);
    },
  },
});
</script>
<template>
  <div class="simple">
    <tarot-card @cardPulled="handleCardPulled" />
  </div>
</template>
