<template>
  <div>
    <button v-on:click="AddColumn">Add column</button>
    <button v-on:click="AddRow">Add row</button>
    <table border="1">
      <vue-tr v-for="tr in data" :tr=tr :data=data>
      </vue-tr>
    </table>
  </div>
</template>

<script>
  import tr from './VueTr.vue'
  import td from './VueTd.vue'

  export default {

    data(){
      return {
        data: [
          [{
            id_row: 1,
            id_col: 1,
            value: 1
          },
          {
            id_row: 1,
            id_col: 2,
            value: 2
          }],
          [{
            id_row: 2,
            id_col: 1,
            value: 3
          },
          {
            id_row: 2,
            id_col: 2,
            value: 4
          }],
          [{
            id_row: 3,
            id_col: 1,
            value: 5
          },
          {
            id_row: 3,
            id_col: 2,
            value: 6
          }]
        ]
        }
    },
    computed:{
    },
    methods:{
      AddColumn(){
        this.data.forEach(function (item,i) {
          item.push({id_row:i+1,id_col:item.length+1, value:''});
        });
        console.log(this.data);
      },
      AddRow(){
        var col = this.data[0].length;
        this.data.push([]);
        for (var i = 0; i<col;i++){
          this.data[this.data.length-1].push({id_row:this.data.length,id_col:i+1,value:''});
        }
        console.log(this.data);
      }
    },
    components:{
        VueTr: tr,
        VueTd: td
    }
    }
</script>

<style scoped>
  table{
    width: 80%;
    background: #2c3e50;
    color: aliceblue;
  }
  td:hover{
    background: #2c3e70;
  }
</style>
