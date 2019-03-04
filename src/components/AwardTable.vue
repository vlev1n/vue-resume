<template>
<table class="award-table">
  <caption>{{title}}</caption>
  <tbody v-if="type==='prize'">
    <PrizeEntry v-for="item in entries" :entry="item" />
  </tbody>
  <tbody v-else-if="type==='honor'">
    <HonorEntry v-for="item in entries" :entry="item" />
  </tbody>
</table>
</template>

<script>
import PrizeEntry from './PrizeEntry.vue'
import HonorEntry from './HonorEntry.vue'
export default {
  name: 'AwardTable',
  components: {
    PrizeEntry,
    HonorEntry
  },
  props: {
    title: String,
    type: String,
    entries: Array
  }
}
</script>
