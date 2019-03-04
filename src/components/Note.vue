<template>
  <ul class="note footnote">
    <li v-for="item in entries" :class="{'phone-only': item.phoneOnly}" v-html="item.str"></li>
  </ul>
</template>

<script>
import note from './entries/note.js'
export default {
  name: 'Note',
  data: () => {
    return {
      entries: note
    }
  }
}
</script>

<style media="screen" lang="sass">
  .footnote
    padding-left: 2rem !important
    > li
      margin: .5rem 0
      > a
        text-decoration: none
        font-weight: bold
        &:link, &:visited
          color: darkturquoise
</style>
