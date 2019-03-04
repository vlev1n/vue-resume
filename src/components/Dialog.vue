<template lang="html">
  <section id="dialog-group" v-show="isOpen">
  <!-- <section id="dialog" v-html="innerHTML"> -->
    <div id="dialog-backdrop"></div>
    <div id="dialog-box">
      <button type="button" class="icon-cancel" @click="isOpen = !isOpen"></button>
      <!-- <slot></slot> -->
      <Note v-if="inner === 'note'" />
      <img v-else src="inner" alt="">
    </div>
  </section>
</template>

<script>
import Note from './Note.vue'
export default {
  name: 'Dialog',
  components: {
    Note
  },
  props: {
    inner: String,
    autoOpen: Boolean
  },
  data: function () {
    return {
      isOpen: this.autoOpen
    }
  },
  methods: {
    open () {
      console.log('received')
      this.isOpen = true
    }
  }
}
</script>

<style lang="sass">
@import variables.sass
#dialog-group
  position: fixed
  top: 0
  left: 0
  // z-index: 2
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, .5)
#dialog-box
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  border-radius: .5rem
  background: $note-bg
  @media screen and (max-width: $mobile)
    width: 90%
  > button
    position: absolute
    top: 0
    right: 0
    transform: translate(50%, -50%)
    box-sizing: border-box
    width: 2rem
    height: 2rem
    border: 0
    border-radius: 50%
    background: $note-major
    color: $note-bg
  > ul
    border: 0
</style>
