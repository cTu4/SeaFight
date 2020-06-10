<template>
    <div>
      <table border="1">
        <tr v-for="tr in bot_data">
          <td v-for="td in tr"  :class="td.class" v-on:click="shut($event,td)">
          </td>
        </tr>
      </table>
    </div>
</template>

<script>

  function kick(data,th) {
    var id_tr = Math.floor(Math.random() * Math.floor(9));
    var id_td = Math.floor(Math.random() * Math.floor(9));
      if (data[id_tr][id_td].class !== 'shut' && data[id_tr][id_td].class !== 'kill') {
        th.$emit('back_shut',id_tr,id_td);
        if(data[id_tr][id_td].class==='kill'){
          kick(data,th);
        }
      }
      else {
        kick(data,th);
      }
     }
    export default {
        name: "FloatBoard",
        props: ['bot_data','user_data'],
        methods:{
          shut(e,td){
            console.log(td);
            if( td.class!=='shut' && td.class!=='kill'){
              if (td.class==='full'){
                this.bot_data[td.id_row][td.id_col].class='kill';
              }
              else{
                this.bot_data[td.id_row][td.id_col].class='shut';
                kick(this.user_data,this);

              }
            }




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
