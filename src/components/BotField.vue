<template>
    <div>
      <table border="1">
        <tr v-for="tr in bot_data">
          <td v-for="td in tr"  v-on:click="shut($event,td)">
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
  function kick(data,th) {
    var id_tr = Math.floor(Math.random() * Math.floor(9));
    var id_td = Math.floor(Math.random() * Math.floor(9));
    console.log(id_tr,id_td);
      if (data[id_tr][id_td].class !== 'shut' && data[id_tr][id_td].class !== 'kill') {
        th.$emit('back_shut',id_tr,id_td);
      }
      else {
        kick(data,th);
      }
     }
    export default {
        name: "FloatBoard",
        props: ['bot_data','user_data'],
        methods:{
          shut(e,td,emit){
             if (td.class==='full'){
                 $(e.target).addClass('kill');
             }
             else{
               $(e.target).addClass('shut');
             }
            kick(this.user_data,this);



          },
          click(e){
            $(e.target).css({background: 'grey'});

          },
          draw(e){

          }
        },
        computed:{

        }
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
  .kill{
    background: red;
  }
  .shut{
    background: cadetblue;
  }
</style>
