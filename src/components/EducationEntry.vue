<template>
  <tbody class="education-entry">
    <tr>
      <th>{{entry.time}}</th>
      <th>{{entry.school}}</th>
      <th>{{entry.course}}</th>
    </tr>
    <tr>
      <td colspan="3">{{entry.detail}}</td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'EducationEntry',
    props: {
      entry: Object
    }
  }
</script>
