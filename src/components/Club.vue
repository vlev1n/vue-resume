<template>
<section id="club">
  <SectionTitle icon="users" title="社团任职" />
  <table class="club-table">
    <ClubEntry v-for="item in entries" :entry="item" />
  </table>
</section>
</template>

<script>
import entries from './entries/club.js'
import SectionTitle from './SectionTitle.vue'
import ClubEntry from './ClubEntry.vue'
export default {
  name: 'Club',
  components: {
    SectionTitle,
    ClubEntry
  },
  data: () => {
    return {
      entries: entries
    }
  }
}
</script>

<style media="screen" lang="sass">
@import variables.sass
#lenovo-idea-elite-club
  border-spacing: inherit
  @media screen and (max-width: $mobile)
    border-spacing: 0 .5rem
  > tbody > tr > td
    @media screen and (max-width: $mobile)
      display: table-row
</style>
