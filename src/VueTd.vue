<template>
    <td v-on:click="AddCell">{{td.value}}</td>
</template>

<script>
  import $ from 'jquery';
    export default {
        name: "VueTd",
      methods:{
          AddCell(e){
            // console.log(this.td);
            // var tr = this.data[this.td.id_row-1];
            // console.log(tr);
            // tr.push({id_row:this.td.id_row,id_col: tr.id_col+1,value:12});

          },
        AddTd(e){
          console.log(e.clientX);
          // $('<div>',{
          //   id: 'ver',
          //   innerHTML: 'a',
          //   css: {
          //     position: 'absolute',
          //     borderLeft: '2px solid green',
          //     height: 20,
          //     left: e.clientX,
          //     top: e.clientY
          //   }
          // }).appendTo('body');
        },
        Up(e){
          console.log(e.clientX);
        }
      },
      props: ['td','data']
    }
</script>

<style scoped>
  td{
    height: 20px;
  }
</style>
