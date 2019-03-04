<template>
  <button id="expand-button" @click="$emit('expand')"></button>
</template>

<script>
  export default {
    name: 'ExpandButton'
  }
</script>

<style media="screen" lang="sass">
  @import './variables.sass'
  #expand-button
    @media screen and (min-width: $mobile)
      display: none
    @media screen and (max-width: $mobile)
      position: fixed
      top: 50%
      left: 0
      transform: none
      z-index: 1
      box-sizing: border-box
      width: 2rem
      height: 4rem
      border: 0
      border-radius: 0 2rem 2rem 0
      background: $highlight
      opacity: .75
      color: white
</style>
