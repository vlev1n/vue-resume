<template>
<!-- <aside :class="{expand: isExpanded}"> -->
<aside>
  <Profile />
  <Skill />
  <Hobby />
</aside>
</template>

<script>
import Profile from './Profile.vue'
import Skill from './Skill.vue'
import Hobby from './Hobby.vue'
export default {
  name: 'Aside',
  components: {
    Profile,
    Skill,
    Hobby
  },
  // props: {
  //   isexpanded: Boolean
  // }
}
</script>

<style media="screen" lang="sass">
@import './variables.sass'
aside
  background: $dark-bg
  color: $dark-major
  @media screen and (max-width: $mobile)
    position: absolute
    height: 100vh
    overflow: scroll
    transition: transform .5s ease
    transform: translateX(-100%)
    &.expanded
      transform: translateX(0)
</style>
