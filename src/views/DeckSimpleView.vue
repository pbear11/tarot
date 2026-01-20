<script lang="ts">
import TarotCard from '@/components/TarotCard.vue';
import { defineComponent } from 'vue';
import type { TarotCardType } from '../data/tarotCards';

export default defineComponent({
  name: 'DeckSimpleView',
  components: {
    'tarot-card': TarotCard,
  },
  data() {
    return {
      currentCard: {} as TarotCardType,
      isReversed: false,
      isCardDrawn: false,
    };
  },
  methods: {
    handleCardPulled(card: TarotCardType, isReversed: boolean) {
      this.currentCard = card;
      this.isReversed = isReversed;
      this.isCardDrawn = true;
    },
    clearValue() {
      this.currentCard = {} as TarotCardType;
      this.isCardDrawn = false;
    },
  },
});
</script>
<template>
  <div class="simple flex-col align-center">
    <tarot-card class="mt-50" @cardPull="handleCardPulled" @cardClose="clearValue" />
    <div class="card flex-col align-center" v-if="isCardDrawn">
      <div class="card-name">
        {{ currentCard.name || 'No card drawn yet' }}
      </div>
      <div class="card-basic-explanation flex-row">
        <div class="bold mr-5">Basic explanation:</div>
        <div>{{ isReversed ? currentCard.reversed : currentCard.upright }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.simple {
  height: 100vh;
}
.card {
  margin-top: 40px;
  .card-name {
    font-weight: bold;
    font-size: $font-size-xl;
    margin-bottom: 10px;
  }
}
</style>
