<template>
  <tr class="award-entry">
    <td>{{entry.time}}</td>
    <td>{{entry.awardName}}</td>
    <td>{{entry.prize}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'PrizeEntry',
    props: {
      entry: Object
    }
  }
</script>
