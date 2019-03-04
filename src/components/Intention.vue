<template>
<section id="intention">
  <SectionTitle icon="id-card" title="求职意向" />
  <ul>
    <li class="icon-briefcase">Web前端</li>
    <li class="icon-location">北京、青岛、济南</li>
    <li class="icon-graduation-cap">2019年6月毕业</li>
  </ul>
</section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
export default {
  name: 'Intention',
  components: {
    SectionTitle
  }
}
</script>

<style media="screen" lang="sass">
@import variables.sass
#intention
  > ul
    list-style: none
    padding-left: 0
    display: grid
    grid-auto-flow: column
    @media screen and (max-width: $mobile)
      grid-auto-flow: row
      justify-content: center
    grid-gap: 1rem
    width: 100%
    > li
      &::before
        margin-right: .5rem
        color: $dark-bg
</style>
