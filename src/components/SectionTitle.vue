<template>
  <h2 :class="`section-title icon-${icon}`">{{title}}</h2>
</template>

<script>
  export default {
    name: 'SectionTitle',
    props: {
      title: String,
      icon: String
    }
  }
</script>

<style media="screen" lang="sass">
@import './variables.sass'
.section-title
  display: grid
  grid-auto-flow: column
  grid-gap: .25rem
  justify-content: start
  align-items: center
  margin: .5rem 0
  padding: 0 0 .5rem 0
  font-size: 1.25rem
  &::before
    display: flex
    justify-content: center
    align-items: center
    box-sizing: border-box
    width: 2rem
    height: 2rem
    border-radius: 50%
    font-size: smaller

aside
  .section-title
    &::before
      background: white
      color: $dark-bg

main
  .section-title
    border-bottom: thin solid $dark-bg
    &::before
      background: $dark-bg
      color: white
</style>
