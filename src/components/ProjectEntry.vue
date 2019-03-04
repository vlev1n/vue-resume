<template>
  <tbody class="project-record">
    <tr>
      <th>{{entry.time}}</th>
      <th v-if="entry.project.link"><a :href="entry.project.link">{{entry.project.name}}</a></th>
      <th v-else>{{entry.project.name}}</th>
    </tr>
    <tr v-if="entry.footnote">
      <!-- <th colspan="2" class="link" @click="$emit('open-dialog', entry.footnote.link)">{{entry.footnote.text}}</th> -->
      <th colspan="2"><a :href="entry.footnote.link">{{entry.footnote.text}}</a></th>
    </tr>
    <tr>
      <td colspan="2">{{entry.detail}}</td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'ProjectEntry',
    props: {
      entry: Object
    }
  }
</script>
