<template>
<section id="internship">
  <SectionTitle icon="address-card" title="实习经验" />
  <table class="internship-table">
    <InternshipEntry v-for="item in entries" :entry="item" />
  </table>
</section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import InternshipEntry from './InternshipEntry.vue'
export default {
  name: 'Internship',
  components: {
    SectionTitle,
    InternshipEntry
  },
  data: () => {
    return {
      entries: [{
        'time': '2017.07 - 2017.08',
        'company': '联想（北京）有限公司济南分公司',
        'dept': '市场推广部',
        'position': '市场推广实习生',
        'address': '济南市历下区泉城路17号华能大厦',
        'detail': '暑期实习。团队共7人，制作联想小新系列笔记本电脑在校园中的品牌推广方案。主要负责平面设计、舞台效果设计。期间使用Sketch Up制作了电脑形状的舞台，使用Unreal Engine 4制作了夜间舞台效果视频，并美化方案PPT。'
      }]
    }
  }
}
</script>
