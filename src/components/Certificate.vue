<template>
  <section id="certificate">
    <SectionTitle icon="graduation-cap" title="获得证书"/>
    <table className="volunteering-table">
      <CertificateEntry v-for="item in entries" :entry="item" />
    </table>
  </section>
</template>

<script>
  import SectionTitle from './SectionTitle.vue'
  import CertificateEntry from './CertificateEntry.vue'
  export default {
    name: 'Certificate',
    components: {
      SectionTitle,
      CertificateEntry
    },
    data: () => {
      return {
        entries: [{
          'time': '2018.09',
          'exam': '全国计算机等级考试二级Web程序设计',
          'grade': '优秀'
        }, {
          'time': '2017.04',
          'exam': '高等学校英语专业四级（TEM-4）',
          'grade': '良好'
        }]
      }
    }
  }
</script>
