<script lang="ts">
import TarotCard from '@/components/TarotCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    'tarot-card': TarotCard,
  },
})
</script>
<template>
  <div class="simple">
    <tarot-card />
  </div>
</template>
