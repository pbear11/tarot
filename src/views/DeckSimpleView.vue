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
  min-height: 36vh;
  background: $terminal-dark;
  color: $terminal-green-dim;
  padding: 24px;
  font-family: $font-family-mono;
  border-top: 1px solid rgba($terminal-green, 0.2);

  .reading-container {
    max-width: 500px;
  }

  .reading-title {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 16px;
    width: 100%;
    justify-content: space-evenly;
    color: $terminal-green;
    text-shadow: 0 0 10px $terminal-green-glow;
  }

  .reversed-badge {
    display: inline-block;
    padding: 4px 10px;
    background-color: transparent;
    border: 1px solid rgba($terminal-red, 0.5);
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    color: $terminal-red;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .question-buttons {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;

    .question-btn {
      padding: 10px 18px;
      border: 1px solid rgba($terminal-green, 0.3);
      background-color: rgba($terminal-green, 0.05);
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      color: $terminal-green-dim;
      font-family: inherit;

      &:hover {
        border-color: $terminal-green;
        background-color: rgba($terminal-green, 0.1);
        color: $terminal-green;
        box-shadow: 0 0 15px rgba($terminal-green, 0.2);
      }

      &.active {
        background-color: rgba($terminal-green, 0.15);
        color: $terminal-green;
        border-color: $terminal-green;
        text-shadow: 0 0 8px $terminal-green-glow;
      }
    }
  }

  .reading-explanation {
    margin-top: 18px;
    padding: 16px;
    background-color: rgba($terminal-green, 0.03);
    border-radius: 6px;
    border-left: 3px solid $terminal-green;

    .explanation-title {
      font-size: 1rem;
      font-weight: 600;
      color: $terminal-cyan;
      margin-bottom: 8px;
    }

    .explanation-text {
      line-height: 1.7;
      color: $terminal-gray;
      font-size: 14px;
    }
  }

  .reading-basic-explanation {
    margin-top: 16px;
    padding: 16px;
    border-radius: 6px;
    background: rgba($terminal-green, 0.03);
    border-left: 3px solid $terminal-green;

    .summary-label,
    .yes-or-no-title {
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $terminal-cyan;
    }

    .yes-or-no-title {
      margin-top: 12px;
    }

    .summary-text {
      line-height: 1.7;
      color: $terminal-gray;
      font-size: 0.9rem;
      text-transform: none;
      font-weight: 400;
    }
  }
}

@media (min-width: 769px) {
  .reading-explanation {
    width: 500px;
  }
}
</style>
