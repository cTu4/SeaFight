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
      data(){
        return{
          options:
            {
              dropzoneSelector: 'td',
              draggableSelector: 'td',
              handlerSelector: null,
              reactivityEnabled: true,
              multipleDropzonesItemsDraggingEnabled: true,
              showDropzoneAreas: true,
              onDrop: function(event) {},
              onDragstart: function(event) {},
              onDragenter: function(event) {},
              onDragover: function(event) {},
              onDragend: function(event) {}
            }
        }
      }
    }
</script>

<style scoped>
  div{
    min-width: 400px;
    height: 400px;
    margin: 20px;
    box-shadow:  2px 2px 10px #2c3e50;

  }
  table{
    width: 100%;
    height: 100%;
    background: cornsilk;
  }
  td{
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  .full{
    background: black;
  }
  .kill{
    background: red;
  }
  .shut{
    background: cadetblue;
  }

</style>
