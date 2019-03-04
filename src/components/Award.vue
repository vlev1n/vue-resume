<template>
<section id="award">
  <SectionTitle icon="award" title="奖项荣誉" />
  <AwardTable type="prize" :entries="academic" title="学术类" />
  <AwardTable type="prize" :entries="idea" title="创新创业类" />
  <AwardTable type="honor" :entries="other" title="其他荣誉" />
</section>
</template>

<script>
import entries from './entries/award.js'
import SectionTitle from './SectionTitle.vue'
import AwardTable from './AwardTable.vue'
export default {
  name: 'Award',
  components: {
    SectionTitle,
    AwardTable
  },
  data: () => {
    return {
      academic: entries.academic,
      idea: entries.idea,
      other: entries.other
    }
  }
}
</script>
