<template>
<tbody class="club-entry">
  <tr>
    <th>{{entry.time}}</th>
    <th>{{entry.club}}</th>
    <th>{{entry.position}}</th>
  </tr>
  <tr>
    <td colspan="3">
      <table id="lenovo-idea-elite-club">
        <tbody>
          <tr v-for="item in entry.detail">
            <td>{{item.time}}</td>
            <td colspan="2">{{item.event}}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</template>

<script>
  export default {
    name: 'ClubEntry',
    props: {
      entry: Object
    }
  }
</script>
