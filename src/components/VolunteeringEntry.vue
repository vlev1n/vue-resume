<template>
  <tr className="volunteering-entry">
    <td>{{entry.time}}</td>
    <td>{{entry.event}}</td>
    <td>{{entry.position}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'VolunteeringEntry',
    props: {
      entry: Object
    }
  }
</script>
