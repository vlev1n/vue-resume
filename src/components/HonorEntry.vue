<template>
  <tr class="award-entry">
    <td>{{entry.time}}</td>
    <td>{{entry.detail}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'HonorEntry',
    props: {
      entry: Object
    }
  }
</script>
