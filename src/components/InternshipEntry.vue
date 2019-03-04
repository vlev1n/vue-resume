<template>
  <tbody class="internship-entry">
    <tr>
      <th>{{entry.time}}</th>
      <th>{{entry.company}}</th>
      <th>{{entry.dept}}</th>
    </tr>
    <tr>
      <th>{{entry.position}}</th>
      <th colspan="2">{{entry.address}}</th>
    </tr>
    <tr>
      <td colspan="3">{{entry.detail}}</td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'InternshipEntry',
    props: {
      entry: Object
    }
  }
</script>
