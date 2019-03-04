<template>
  <tr className="certificate-entry">
    <td>{{entry.time}}</td>
    <td>{{entry.exam}}</td>
    <td>{{entry.grade}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'CertificateEntry',
    props: {
      entry: Object
    }
  }
</script>
