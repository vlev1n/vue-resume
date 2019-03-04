<template>
  <section id="volunteering">
    <SectionTitle icon="handshake-o" title="志愿者经历"/>
    <table class="volunteering-table">
      <tbody>
        <VolunteeringEntry v-for="item in entries" :entry="item"/>
      </tbody>
    </table>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import VolunteeringEntry from './VolunteeringEntry.vue'
export default {
  name: 'Volunteering',
  components: {
    SectionTitle,
    VolunteeringEntry
  },
  data: () => {
    return {
      entries: [{
        'time': '2018.05',
        'event': '上海合作组织成员国元首理事会第18次会议',
        'position': '主会场安检通道翻译'
      }, {
        'time': '2016.05',
        'event': '中国海洋大学优秀青年志愿者称号',
      }, {
        'time': '2015.10',
        'event': '中国青岛海洋国际高峰论坛',
        'position': '即墨北站接待来宾'
      }]
    }
  }
}
</script>
