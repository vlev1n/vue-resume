<template>
<transition name="fade">
  <section class="note midway-note" v-if="show">
    <small>下文与岗位关联度较低，所以您的选择是</small>
    <button @click="closePage" id="close-window" type="button">关闭页面</button>
    <button @click="$emit('expand')" class="phone-only" type="button">打开侧边栏</button>
    <button @click="show = !show" type="button">继续浏览</button>
  </section>
</transition>
</template>

<script>
export default {
  name: 'MidwayNote',
  data: () => {
    return {
      show: true
    }
  },
  methods: {
    closePage: function () {
      window.location.href = './closed.html'
    }
  }
}
</script>

<style media="screen" lang="sass">
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
@import './variables.sass'
.midway-note
  display: grid
  grid-template-columns: repeat(3 / auto)
  @media screen and (min-width: $mobile)
    grid-template-columns: repeat(2 / auto)
  grid-auto-flow: row
  grid-gap: .5rem
  > small
    grid-column: 1 / 4
    @media screen and (min-width: $mobile)
      grid-column: 1 / 3
    justify-self: center
  > button
    border: 0
    border-radius: .5rem
    background: $note-major
    color: $note-bg
</style>
