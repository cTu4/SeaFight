<template>
  <div>
    <h1>Морской бой</h1>
    <div class="wrapper">
      <user-field :data="userdata" ></user-field>
      <bot-field :bot_data="botdata" :user_data="userdata" v-on:back_shut="shut"></bot-field>
    </div>
  </div>

</template>

<script>
  import botfield from './BotField'
  import userfield from './UserField'
  function GetCoord(number) {
    var tr,td;
    switch(number){
      case 0:
      {
        tr=0;
        td=0;
        break;
      }
      case 1:
      {
        tr=0;
        td=1;
        break;
      }
      case 2:
      {
        tr=0;
        td=2;
        break;
      }
      case 3:
      {
        tr=0;
        td=3;
        break;
      }
      case 4:
      {
        tr=0;
        td=4;
        break;
      }
      case 5:
      {
        tr=0;
        td=5;
        break;
      }
      case 6:
      {
        tr=0;
        td=6;
        break;
      }
      case 7:
      {
        tr=0;
        td=7;
        break;
      }
      case 8:
      {
        tr=0;
        td=8;
        break;
      }
      case 9:
      {
        tr=0;
        td=9;
        break;
      }
      default:
      {
        number=number+'';
        tr=rnd[0];
        td=rnd[1];
      }
    }
    return [tr,td];
  }


  function GetBoats(arr,sum) {
    var res = [];
    var rand = Math.floor(Math.random() * arr.length);
    var coord = GetCoord(rand);
    var vector = Math.floor(Math.random() * 3);  // { 0 _ top  }, { 1 _ left  }, { 2 _ bot  }, { 0 _ right  }
    // проверка на движение

    // расстановка корабля удалить из arr координаты корабля

    // удалить координаты около корабля

    res.push(arr[rand]);
    arr.splice(rand,1);
    return res;
  }
  function CreateBoat() {
    var arr_use,arr = [];
    for (var i=0;i<100;i++){
      arr.push(i);
    }
    arr_boats.forEach(function (item) {
      var tr,td=0;
      var rnd = GetBoats(arr,item);

      console.log(tr,td,arr);
    });


  }
    export default {
        name: "FloatBoat",
      methods:{
          shut(tr,td){
            //CreateBoat();
            if(this.userdata[tr][td].class==='full'){
              this.userdata[tr][td].class = 'kill';
            }
            else{
              this.userdata[tr][td].class = 'shut';
            }
          }
      },
      data(){
          return {
            botdata:[
              [
                {id_row:1,id_col:1, class: 'empty'},
                {id_row:1,id_col:2, class: 'empty'},
                {id_row:1,id_col:3, class: 'empty'},
                {id_row:1,id_col:4, class: 'empty'},
                {id_row:1,id_col:5, class: 'empty'},
                {id_row:1,id_col:6, class: 'empty'},
                {id_row:1,id_col:7, class: 'empty'},
                {id_row:1,id_col:8, class: 'full'},
                {id_row:1,id_col:9, class: 'empty'},
                {id_row:1,id_col:10, class: 'empty'}
              ],
              [
                {id_row:2,id_col:1, class: 'empty'},
                {id_row:2,id_col:2, class: 'full'},
                {id_row:2,id_col:3, class: 'empty'},
                {id_row:2,id_col:4, class: 'full'},
                {id_row:2,id_col:5, class: 'empty'},
                {id_row:2,id_col:6, class: 'empty'},
                {id_row:2,id_col:7, class: 'empty'},
                {id_row:2,id_col:8, class: 'empty'},
                {id_row:2,id_col:9, class: 'empty'},
                {id_row:2,id_col:10, class: 'empty'}
              ],
              [
                {id_row:3,id_col:1, class: 'empty'},
                {id_row:3,id_col:2, class: 'empty'},
                {id_row:3,id_col:3, class: 'empty'},
                {id_row:3,id_col:4, class: 'empty'},
                {id_row:3,id_col:5, class: 'empty'},
                {id_row:3,id_col:6, class: 'empty'},
                {id_row:3,id_col:7, class: 'empty'},
                {id_row:3,id_col:8, class: 'empty'},
                {id_row:3,id_col:9, class: 'empty'},
                {id_row:3,id_col:10, class: 'empty'}
              ],
              [
                {id_row:4,id_col:1, class: 'empty'},
                {id_row:4,id_col:2, class: 'empty'},
                {id_row:4,id_col:3, class: 'empty'},
                {id_row:4,id_col:4, class: 'empty'},
                {id_row:4,id_col:5, class: 'full'},
                {id_row:4,id_col:6, class: 'full'},
                {id_row:4,id_col:7, class: 'empty'},
                {id_row:4,id_col:8, class: 'full'},
                {id_row:4,id_col:9, class: 'full'},
                {id_row:4,id_col:10, class: 'full'},

              ],
              [
                {id_row:5,id_col:1, class: 'empty'},
                {id_row:5,id_col:2, class: 'full'},
                {id_row:5,id_col:3, class: 'empty'},
                {id_row:5,id_col:4, class: 'empty'},
                {id_row:5,id_col:5, class: 'empty'},
                {id_row:5,id_col:6, class: 'empty'},
                {id_row:5,id_col:7, class: 'empty'},
                {id_row:5,id_col:8, class: 'empty'},
                {id_row:5,id_col:9, class: 'empty'},
                {id_row:5,id_col:10, class: 'empty'}
              ],
              [
                {id_row:6,id_col:1, class: 'empty'},
                {id_row:6,id_col:2, class: 'full'},
                {id_row:6,id_col:3, class: 'empty'},
                {id_row:6,id_col:4, class: 'full'},
                {id_row:6,id_col:5, class: 'full'},
                {id_row:6,id_col:6, class: 'empty'},
                {id_row:6,id_col:7, class: 'empty'},
                {id_row:6,id_col:8, class: 'empty'},
                {id_row:6,id_col:9, class: 'full'},
                {id_row:6,id_col:10, class: 'empty'}
              ],
              [
                {id_row:7,id_col:1, class: 'empty'},
                {id_row:7,id_col:2, class: 'full'},
                {id_row:7,id_col:3, class: 'empty'},
                {id_row:7,id_col:4, class: 'empty'},
                {id_row:7,id_col:5, class: 'empty'},
                {id_row:7,id_col:6, class: 'empty'},
                {id_row:7,id_col:7, class: 'empty'},
                {id_row:7,id_col:8, class: 'empty'},
                {id_row:7,id_col:9, class: 'empty'},
                {id_row:7,id_col:10, class: 'empty'}
              ],
              [
                {id_row:8,id_col:1, class: 'empty'},
                {id_row:8,id_col:2, class: 'empty'},
                {id_row:8,id_col:3, class: 'empty'},
                {id_row:8,id_col:4, class: 'empty'},
                {id_row:8,id_col:5, class: 'empty'},
                {id_row:8,id_col:6, class: 'empty'},
                {id_row:8,id_col:7, class: 'empty'},
                {id_row:8,id_col:8, class: 'empty'},
                {id_row:8,id_col:9, class: 'empty'},
                {id_row:8,id_col:10, class: 'empty'}
              ],
              [
                {id_row:9,id_col:1, class: 'empty'},
                {id_row:9,id_col:2, class: 'full'},
                {id_row:9,id_col:3, class: 'full'},
                {id_row:9,id_col:4, class: 'full'},
                {id_row:9,id_col:5, class: 'full'},
                {id_row:9,id_col:6, class: 'empty'},
                {id_row:9,id_col:7, class: 'empty'},
                {id_row:9,id_col:8, class: 'empty'},
                {id_row:9,id_col:9, class: 'full'},
                {id_row:9,id_col:10, class: 'empty'}
              ],
              [
                {id_row:10,id_col:1, class: 'empty'},
                {id_row:10,id_col:2, class: 'empty'},
                {id_row:10,id_col:3, class: 'empty'},
                {id_row:10,id_col:4, class: 'empty'},
                {id_row:10,id_col:5, class: 'empty'},
                {id_row:10,id_col:6, class: 'empty'},
                {id_row:10,id_col:7, class: 'empty'},
                {id_row:10,id_col:8, class: 'empty'},
                {id_row:10,id_col:9, class: 'full'},
                {id_row:10,id_col:10, class: 'empty'}
              ]],
            userdata: [
              [
                {id_row:1,id_col:1, class: 'empty'},
                {id_row:1,id_col:2, class: 'empty'},
                {id_row:1,id_col:3, class: 'empty'},
                {id_row:1,id_col:4, class: 'empty'},
                {id_row:1,id_col:5, class: 'empty'},
                {id_row:1,id_col:6, class: 'empty'},
                {id_row:1,id_col:7, class: 'empty'},
                {id_row:1,id_col:8, class: 'full'},
                {id_row:1,id_col:9, class: 'empty'},
                {id_row:1,id_col:10, class: 'empty'}
              ],
              [
                {id_row:2,id_col:1, class: 'empty'},
                {id_row:2,id_col:2, class: 'full'},
                {id_row:2,id_col:3, class: 'empty'},
                {id_row:2,id_col:4, class: 'full'},
                {id_row:2,id_col:5, class: 'empty'},
                {id_row:2,id_col:6, class: 'empty'},
                {id_row:2,id_col:7, class: 'empty'},
                {id_row:2,id_col:8, class: 'empty'},
                {id_row:2,id_col:9, class: 'empty'},
                {id_row:2,id_col:10, class: 'empty'}
              ],
              [
                {id_row:3,id_col:1, class: 'empty'},
                {id_row:3,id_col:2, class: 'empty'},
                {id_row:3,id_col:3, class: 'empty'},
                {id_row:3,id_col:4, class: 'empty'},
                {id_row:3,id_col:5, class: 'empty'},
                {id_row:3,id_col:6, class: 'empty'},
                {id_row:3,id_col:7, class: 'empty'},
                {id_row:3,id_col:8, class: 'empty'},
                {id_row:3,id_col:9, class: 'empty'},
                {id_row:3,id_col:10, class: 'empty'}
              ],
              [
                {id_row:4,id_col:1, class: 'empty'},
                {id_row:4,id_col:2, class: 'empty'},
                {id_row:4,id_col:3, class: 'empty'},
                {id_row:4,id_col:4, class: 'empty'},
                {id_row:4,id_col:5, class: 'full'},
                {id_row:4,id_col:6, class: 'full'},
                {id_row:4,id_col:7, class: 'empty'},
                {id_row:4,id_col:8, class: 'full'},
                {id_row:4,id_col:9, class: 'full'},
                {id_row:4,id_col:10, class: 'full'},

              ],
              [
                {id_row:5,id_col:1, class: 'empty'},
                {id_row:5,id_col:2, class: 'full'},
                {id_row:5,id_col:3, class: 'empty'},
                {id_row:5,id_col:4, class: 'empty'},
                {id_row:5,id_col:5, class: 'empty'},
                {id_row:5,id_col:6, class: 'empty'},
                {id_row:5,id_col:7, class: 'empty'},
                {id_row:5,id_col:8, class: 'empty'},
                {id_row:5,id_col:9, class: 'empty'},
                {id_row:5,id_col:10, class: 'empty'}
              ],
              [
                {id_row:6,id_col:1, class: 'empty'},
                {id_row:6,id_col:2, class: 'full'},
                {id_row:6,id_col:3, class: 'empty'},
                {id_row:6,id_col:4, class: 'full'},
                {id_row:6,id_col:5, class: 'full'},
                {id_row:6,id_col:6, class: 'empty'},
                {id_row:6,id_col:7, class: 'empty'},
                {id_row:6,id_col:8, class: 'empty'},
                {id_row:6,id_col:9, class: 'full'},
                {id_row:6,id_col:10, class: 'empty'}
              ],
              [
                {id_row:7,id_col:1, class: 'empty'},
                {id_row:7,id_col:2, class: 'full'},
                {id_row:7,id_col:3, class: 'empty'},
                {id_row:7,id_col:4, class: 'empty'},
                {id_row:7,id_col:5, class: 'empty'},
                {id_row:7,id_col:6, class: 'empty'},
                {id_row:7,id_col:7, class: 'empty'},
                {id_row:7,id_col:8, class: 'empty'},
                {id_row:7,id_col:9, class: 'empty'},
                {id_row:7,id_col:10, class: 'empty'}
              ],
              [
                {id_row:8,id_col:1, class: 'empty'},
                {id_row:8,id_col:2, class: 'empty'},
                {id_row:8,id_col:3, class: 'empty'},
                {id_row:8,id_col:4, class: 'empty'},
                {id_row:8,id_col:5, class: 'empty'},
                {id_row:8,id_col:6, class: 'empty'},
                {id_row:8,id_col:7, class: 'empty'},
                {id_row:8,id_col:8, class: 'empty'},
                {id_row:8,id_col:9, class: 'empty'},
                {id_row:8,id_col:10, class: 'empty'}
              ],
              [
                {id_row:9,id_col:1, class: 'empty'},
                {id_row:9,id_col:2, class: 'full'},
                {id_row:9,id_col:3, class: 'full'},
                {id_row:9,id_col:4, class: 'full'},
                {id_row:9,id_col:5, class: 'full'},
                {id_row:9,id_col:6, class: 'empty'},
                {id_row:9,id_col:7, class: 'empty'},
                {id_row:9,id_col:8, class: 'empty'},
                {id_row:9,id_col:9, class: 'full'},
                {id_row:9,id_col:10, class: 'empty'}
              ],
              [
                {id_row:10,id_col:1, class: 'empty'},
                {id_row:10,id_col:2, class: 'empty'},
                {id_row:10,id_col:3, class: 'empty'},
                {id_row:10,id_col:4, class: 'empty'},
                {id_row:10,id_col:5, class: 'empty'},
                {id_row:10,id_col:6, class: 'empty'},
                {id_row:10,id_col:7, class: 'empty'},
                {id_row:10,id_col:8, class: 'empty'},
                {id_row:10,id_col:9, class: 'full'},
                {id_row:10,id_col:10, class: 'empty'}
              ]]
          }
      },
        computed:{

        },
        components:{
          BotField: botfield,
          UserField: userfield
        }
    }
</script>

<style scoped>
  h1{
    display: flex;
    justify-content: center;
  }
  .wrapper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
