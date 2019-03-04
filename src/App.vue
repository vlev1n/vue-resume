<template>
<div id="app">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <ExpandButton @expand="toggleAside" :class="`icon-${dir}-open`" />
  <Aside :class="{expanded: isExpanded}" />
  <Main @expand="toggleAside" />
  <!-- <Dialog :innerHTML="'<p>辣鸡</p>'" /> -->
  <!-- <Dialog><img src="./assets/funny.png" alt="滑稽" width="50%" /></Dialog> -->
  <!-- <Dialog><Note /></Dialog> -->
  <Dialog inner="note" :autoOpen="true" />
</div>
</template>

<script>
import './css/fontello.css'
import ExpandButton from './components/ExpandButton.vue'
import Aside from './components/Aside.vue'
import Main from './components/Main.vue'
import Dialog from './components/Dialog.vue'
import Note from './components/Note.vue'
export default {
  name: 'app',
  components: {
    ExpandButton,
    Dialog,
    Aside,
    Main,
    Note
  },
  data: () => {
    return {
      isExpanded: false,
      dirFlag: true,
      dir: 'right'
    }
  },
  methods: {
    toggleAside: function () {
      this.isExpanded = !this.isExpanded
      this.dir = this.dirFlag ? 'left' : 'right'
      this.dirFlag = !this.dirFlag
    },
    // show: function () {
    //   console.log('received!')
    // }
  }
}
</script>

<style lang="sass">
@import './components/variables.sass'
body
  display: flex
  justify-content: center
  margin: 0
  background: whitesmoke

#app
  @media screen and (min-width: $mobile)
    display: grid
    grid-auto-flow: column
    grid-template-columns: 1fr 2fr
    justify-content: center
    max-width: 1024px

aside, main
  box-sizing: border-box
  padding: 1rem

table, ul
  line-height: 1.6rem

table
  width: 100%
  border-spacing: 1rem .5rem

caption
  font-size: 1.25rem

th
  text-align: left
  @media screen and (max-width: $mobile)
    display: table-row
  > a, &.link
    text-decoration: none
    color: inherit
    &::after
      margin-left: .25rem
      font-family: 'fontello'
      font-weight: normal
      content: '\E80A'
      // content: '\E808'
      color: $dark-bg

td
  color: $light-minor
  @media screen and (max-width: $mobile)
    display: table-row

.phone-only
  @media screen and (min-width: $mobile)
    display: none
// #app
//   font-family: 'Avenir', Helvetica, Arial, sans-serif
//   -webkit-font-smoothing: antialiased
//   -moz-osx-font-smoothing: grayscale
</style>
