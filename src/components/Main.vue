<template>
  <main>
    <Name />
    <Intention />
    <Education />
    <Certificate />
    <Project @open-dialog="$emit('open-dialog', $event)" />
    <MidwayNote @expand="$emit('expand')" />
    <Internship />
    <Club />
    <Volunteering />
    <Award />
    <Note />
  </main>
</template>

<script>
import Name from './Name.vue'
import Intention from './Intention.vue'
import Certificate from './Certificate.vue'
import Education from './Education.vue'
import Project from './Project.vue'
import Internship from './Internship.vue'
import Club from './Club.vue'
import Volunteering from './Volunteering.vue'
import Award from './Award.vue'
import MidwayNote from './MidwayNote.vue'
import Note from './Note.vue'
export default {
  name: 'Main',
  components: {
    Name,
    Intention,
    Certificate,
    Education,
    Project,
    Internship,
    Club,
    Volunteering,
    Award,
    MidwayNote,
    Note
  }
}
</script>

<style media="screen" lang="sass">
@import './variables.sass'
main
  background: $light-bg
  color: $light-major
  @media screen and (max-width: $mobile)
    height: 100vh
    overflow: scroll
#education, #project, #internship
  td
    text-indent: 2em
.note
  padding: .5rem
  border: thin solid $note-major
  border-radius: .5rem
  background: $note-bg
  color: $note-major
</style>
