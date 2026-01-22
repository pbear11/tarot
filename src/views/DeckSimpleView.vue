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
    <div class="simple-wrapper">
      <tarot-card @cardPull="handleCardPulled" @cardClose="clearValue" />
    </div>
    <!-- Explanation part -->
    <div class="reading flex-col align-center" v-if="isCardDrawn">
      <div class="reading-container flex-col align-center">
        <div class="reading-title flex-row align-center">
          <div>
            {{ currentCard.name || 'No card drawn yet' }}
          </div>

          <div class="reversed-badge" v-if="isReversed">Reversed</div>
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

        <div class="reading-explanation flex-col" v-if="selectedQuestion">
          <div class="explanation-title">
            <span class="bold"
              >{{ selectedQuestion.charAt(0).toUpperCase() + selectedQuestion.slice(1) }}:</span
            >
          </div>
          <div class="explanation-text">
            {{ getInterpretation() }}
          </div>
        </div>

        <div class="reading-basic-explanation flex-col" v-else>
          <div class="summary-label">
            Summary:
            <span class="summary-text">
              {{
                typeof (isReversed ? currentCard.reversed : currentCard.upright) === 'string'
                  ? isReversed
                    ? currentCard.reversed
                    : currentCard.upright
                  : (isReversed ? currentCard.reversed : currentCard.upright).summary
              }}
            </span>
          </div>
          <div class="yes-or-no-title">
            Yes or No:
            <span class="summary-text">
              {{
                currentCard.yesNo
                  ? isReversed
                    ? currentCard.yesNo.reversed
                    : currentCard.yesNo.upright
                  : 'N/A'
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.simple {
  height: 100vh;
  justify-content: space-between;
}
.simple-wrapper {
  width: 37vh;
  height: 50vh;
  margin-top: 3vh;
}
.reading {
  width: 100vw;
  height: 36vh;
  background: $light-black;
  color: $gray-light;
  padding: 24px;
  .reading-container {
    max-width: 500px;
  }
  .reading-title {
    font-weight: 600;
    font-size: $font-size-xl;
    margin-bottom: 16px;
    width: 100%;
    justify-content: space-evenly;
  }

  .reversed-badge {
    display: inline-block;
    padding: 4px 12px;
    background-color: #f0f0f0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: $gray-light;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .question-buttons {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;

    .question-btn {
      padding: 10px 20px;
      border: 1px solid #ddd;
      background-color: #fff;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      font-size: $font-size-base;
      transition: all 0.2s ease;
      color: #333;

      &:hover {
        border-color: #999;
        background-color: #fafafa;
      }

      &.active {
        background-color: #333;
        color: #fff;
        border-color: #333;
      }
    }
  }

  .reading-explanation {
    margin-top: 18px;
    padding: 16px;
    background-color: $light-black;
    border-radius: 8px;
    border-left: 3px solid #333;

    .explanation-title {
      font-size: $font-size-lg;
      font-weight: 600;
    }

    .explanation-text {
      line-height: 1.7;
      color: $gray-light;
      font-size: 15px;
    }
  }

  .reading-basic-explanation {
    margin-top: 16px;
    padding: 20px;
    border-radius: 8px;

    .summary-label {
      font-weight: 600;
      margin-bottom: 8px;
      font-size: $font-size-base;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .summary-text {
      line-height: 1.7;
      color: $gray-light;
      font-size: $font-size-base;
      text-transform: none;
    }
  }
}
@media (min-width: 769px) {
  .reading-explanation {
    width: 500px;
  }
}
</style>
