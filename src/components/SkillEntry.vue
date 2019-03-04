<template>
<div class="skill-entry">
  <em>{{entry.skillName}}</em>
  <progress :value="entry.proficiency" max="100"></progress>
  <ul>
    <li v-for="item in entry.detail">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'SkillEntry',
  props: {
    entry: Object
  }
}
</script>

<style lang="sass">
@import './variables.sass'
.skill-entry
  display: flex
  flex-flow: column wrap
  > progress
    width: 100%
    margin: .25rem 0
    background: navy
    &::-webkit-progress-bar
      background: $dark-minor
    &::-webkit-progress-value
      background: $dark-major
  > ul
    margin-top: 0
    padding-left: 2em
    color: $dark-minor
</style>
