<script lang="ts">
import TarotCard from '@/components/TarotCard.vue';
import { defineComponent } from 'vue';
import type { QuestionType, TarotCardType } from '../data/tarotCards';
import { questionTypes } from '../data/tarotCards';

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
      selectedQuestion: null as QuestionType,
      questionTypes,
    };
  },
  methods: {
    handleCardPulled(card: TarotCardType, isReversed: boolean) {
      this.currentCard = card;
      this.isReversed = isReversed;
      this.isCardDrawn = true;
      this.selectedQuestion = null;
    },
    clearValue() {
      this.currentCard = {} as TarotCardType;
      this.isCardDrawn = false;
      this.selectedQuestion = null;
    },
    selectQuestion(question: QuestionType) {
      this.selectedQuestion = question;
    },
    getInterpretation(): string {
      if (!this.currentCard || !this.selectedQuestion) {
        return '';
      }

      const cardData = this.isReversed ? this.currentCard.reversed : this.currentCard.upright;

      if (typeof cardData === 'string') {
        return cardData;
      }

      return cardData[this.selectedQuestion] || '';
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

      <div class="question-buttons flex-row">
        <button
          v-for="question in questionTypes"
          :key="question"
          @click="selectQuestion(question as QuestionType)"
          :class="['question-btn', { active: selectedQuestion === question }]"
        >
          {{ question.charAt(0).toUpperCase() + question.slice(1) }}
        </button>
      </div>

      <div class="card-explanation flex-col" v-if="selectedQuestion">
        <div class="explanation-title">
          <span class="bold"
            >{{ selectedQuestion.charAt(0).toUpperCase() + selectedQuestion.slice(1) }}:</span
          >
        </div>
        <div class="explanation-text">
          {{ getInterpretation() }}
        </div>
      </div>

      <div class="card-basic-explanation flex-row" v-else>
        <div>
          {{
            typeof (isReversed ? currentCard.reversed : currentCard.upright) === 'string'
              ? isReversed
                ? currentCard.reversed
                : currentCard.upright
              : (isReversed ? currentCard.reversed : currentCard.upright).summary
          }}
        </div>
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
  max-width: 600px;

  .card-name {
    font-weight: bold;
    font-size: $font-size-xl;
    margin-bottom: 20px;
  }

  .question-buttons {
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;

    .question-btn {
      padding: 8px 16px;
      border: 2px solid #ccc;
      background-color: #fff;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        border-color: #999;
        background-color: #f5f5f5;
      }

      &.active {
        background-color: #333;
        color: #fff;
        border-color: #333;
      }
    }
  }

  .card-explanation {
    margin-top: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-left: 4px solid #333;
    border-radius: 4px;

    .explanation-title {
      margin-bottom: 10px;
      font-size: $font-size-lg;
    }

    .explanation-text {
      line-height: 1.6;
      color: #555;
    }
  }

  .card-basic-explanation {
    margin-top: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 4px;

    .bold {
      min-width: fit-content;
    }
  }
}
</style>
