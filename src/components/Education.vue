<template>
  <section id="education">
    <SectionTitle icon="graduation-cap" title="教育背景"/>
    <table className="education-table">
      <UniversityIntro />
      <EducationEntry v-for="item in entries" :entry="item" />
    </table>
  </section>
</template>

<script>
  import entries from './entries/education.js'
  import SectionTitle from './SectionTitle.vue'
  import UniversityIntro from './UniversityIntro.vue'
  import EducationEntry from './EducationEntry.vue'
  export default {
    name: 'Education',
    components: {
      SectionTitle,
      UniversityIntro,
      EducationEntry
    },
    data: () => {
      return {
        entries: entries
      }
    }
  }
</script>
