<template>
  <section id="certificate">
    <SectionTitle icon="graduation-cap" title="获得证书" />
    <table class="volunteering-table">
      <CertificateEntry v-for="(item,index) in entries" :key="index" :entry="item" />
    </table>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue"
import CertificateEntry from "./CertificateEntry.vue"
export default {
  name: "Certificate",
  components: {
    SectionTitle,
    CertificateEntry
  },
  data: () => {
    return {
      entries: [
        {
          time: "2019.05",
          exam: "ETS托业考试（TOEIC）",
          grade: "955分"
        },
        {
          time: "2019.05",
          exam: "高等学校英语专业八级（TEM-8）",
          grade: "良好"
        },
        {
          time: "2018.09",
          exam: "全国计算机等级考试二级Web程序设计",
          grade: "优秀"
        }
      ]
    }
  }
}
</script>
