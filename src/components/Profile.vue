<template>
  <section id="profile">
    <img src="../assets/avatar-aliyun.jpg" alt="滑稽" />
    <ul>
      <li v-for="item in src" :key="item.index" :class="`icon-${item.icon}`">{{item.text}}</li>
    </ul>
  </section>
</template>

<script>
  import entries from './entries/profile.js'
  export default {
    name: 'Profile',
    data: () => {
      return {
        src: entries
      }
    }
  }
</script>

<style media="screen" lang="sass">
@import variables.sass
#profile
  display: grid
  grid-auto-flow: row
  justify-items: center
  > ul
    padding: 0
    list-style-type: none
    > li
      line-height: 2rem
      &::before
        margin: 0 1rem 0 0
  > img
    width: 50%
</style>
