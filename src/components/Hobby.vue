<template>
  <section id="hobby">
  <SectionTitle icon="gamepad" title="兴趣爱好" />
  <ul class="hobby-list">
    <li v-for="item in src" :class="`hobby-entry icon-${item.icon}`">{{item.hobbyName}}</li>
  </ul>
  </section>
</template>

<script>
  import entries from './entries/hobby.js'
  import SectionTitle from './SectionTitle.vue'
  export default {
    name: 'Hobby',
    components: {
      SectionTitle
    },
    data: () => {
      return {
        src: entries
      }
    }
  }
</script>

<style media="screen" lang="sass">
.hobby-list
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-auto-flow: row
  grid-gap: 1rem 0
  padding: 0

.hobby-entry
  list-style-type: none
  display: grid
  grid-auto-flow: row
  grid-gap: .25rem
  justify-items: center
  align-items: center
  &::before
    display: flex
    justify-content: center
    align-items: center
    box-sizing: border-box
    width: 4rem
    height: 4rem
    border: thin solid white
    border-radius: 10%
    font-size: 2rem
</style>
