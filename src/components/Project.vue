<template>
<section id="project">
  <SectionTitle icon="fork" title="项目经验" />
  <table class="project-table">
    <ProjectEntry v-for="item in entries" :key="item.index" :entry="item" @open-dialog="$emit('open-dialog', $event)" />
  </table>
</section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import ProjectEntry from './ProjectEntry.vue'
export default {
  name: 'Project',
  components: {
    SectionTitle,
    ProjectEntry
  },
  data: () => {
    return {
      entries: [{
        'time': '2018.05 - 2018.07',
        'project': {
          'name': '微信小程序“背单词连连看”',
          'link': './mini-program-qrcode.html'
        },
        'footnote': {
          'text': '获得2018中国高校计算机大赛微信小程序应用开发赛华东赛区一等奖',
          'link': './mini-program.html'
        },
        'detail': '独立开发本程序，针对用户学习时间更加碎片化、中高水平用户巩固记忆两个需求而设计，改变传统的“选择题”式的背单词方式，通过给定字母，激励用户主动回忆与联想，能够优先计算生词、自动填写已掌握单词、实时查词、动态调整剩余时间。基于小程序MINA框架，使用node.js与正则表达式配合处理词库，使用ES6的Set数据结构缓存词库，使用Ajax请求有道API实现查词，使用canvas实现学习进度条与logo。程序应用面向对象思想，设计简洁，体积轻巧，源码仅21KB，即使手机较慢、网速不佳，也能流畅使用。上线至今累计用户5.6千人。'
      }, {
        'time': '2017.12 - 2018.01',
        'project': {
          'name': '总督楼全景APP',
          'link': './guest-house-app.html'
        },
        'detail': '本程序为“移动Web开发技术基础”结课设计。利用300余张不同角度渲染的建筑图片，结合移动端touch事件，实时计算用户在屏幕上滑动的方向和距离。由于视觉暂留效应，用户滑动屏幕即可获得建筑的3D形象。APP使用HBuilder封装，可运行于Android 4.4及以上平台。'
      }, {
        'time': '2018.07至今',
        'project': {
          'name': '移动Web开发课程网站'
        },
        'detail': '目前使用node.js + Express + MongoDB开发，并开发配套小程序（云开发）和APP，预计实现在线预览作业代码、在线答题等功能。'
      }],
      inner: '',
      autoOpen: false
    }
  }
}
</script>
