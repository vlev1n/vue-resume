<template>
  <section class="skill-group">
    <h3 :class="`skill-group-title icon-${icon}`">{{title}}</h3>
    <SkillEntry v-for="item in src" :entry="item" />
  </section>
</template>

<script>
import SkillEntry from './SkillEntry.vue'

export default {
  name: 'SkillGroup',
  components: {
    SkillEntry
  },
  props: {
    icon: String,
    title: String,
    src: Array
  }
}
</script>

<style media="screen" lang="sass">
.skill-group-title
  margin: .25rem
  text-align: center
  font-size: 1.25rem
  font-weight: normal
</style>
