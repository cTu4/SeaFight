<template>
  <div>
    <table border="1" >
      <tr v-for="tr in data">
        <td v-for="td in tr" :class="td.class">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
      name: "UserField",
      props: ['data'],
    }
</script>

<style scoped>
  div{
    min-width: 500px;
    height: 500px;
    margin: 20px;
  }
  table{
    width: 100%;
    height: 100%;
    background: cornsilk;
  }
  td{
    cursor: pointer;
  }
  .full{
    background: grey;
  }
  .kill{
    background: red;
  }
  .shut{
    background: cadetblue;
  }

</style>
