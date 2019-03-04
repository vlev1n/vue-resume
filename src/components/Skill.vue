<template>
  <section id="skill">
    <SectionTitle icon="wrench" title="技能" />
    <SkillGroup icon="code" title="编程语言" :src="language" />
    <SkillGroup icon="code" title="Web相关技术" :src="library" />
    <SkillGroup icon="desktop" title="软件" :src="software" />
  </section>
</template>

<script>
import entries from './entries/skill.js'
import SectionTitle from './SectionTitle.vue'
import SkillGroup from './SkillGroup.vue'
export default {
  name: 'Skill',
  components: {
    SectionTitle,
    SkillGroup
  },
  data: () => {
    return {
      language: entries.language,
      library: entries.library,
      software: entries.software
    }
  }
}
</script>
