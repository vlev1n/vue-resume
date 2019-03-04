<template>
  <section id="name">
    <h1>殷师哲</h1>
    <small class="icon-tag">乐观</small>
    <small class="icon-tag">95后</small>
  </section>
</template>

<script>
  export default {
    name: 'Name'
  }
</script>

<style media="screen" lang="sass">
#name
  display: grid
  grid-auto-flow: column
  grid-gap: 1rem
  justify-content: start
  align-items: center
  > h1
    margin: 1rem 0
    font-size: 2rem
    font-weight: normal
  > small
    padding: .2rem
    border: thin solid dimgray
    border-radius: .2rem
</style>
