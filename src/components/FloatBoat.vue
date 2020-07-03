<template>
  <div>
    <h1>Морской бой</h1>
    <div class="flex">

      <user-field :data="userdata" ></user-field>
      <bot-field :bot_data="botdata" :arr_coord_user="arr_coord_user" :user_data="userdata" v-on:back_shut="shut"></bot-field>
    </div>
    <div class="flex">
      <button v-on:click="">Начать игру</button>
      <button v-on:click="restart">Рестарт</button>
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
        tr=number[0];
        td=number[1];
      }
    }
    return [Number(tr),Number(td)];
  }
  function DelAround(cell,arr_coord) {
    var check = arr_coord.indexOf(Number(String(cell.id_row-1)+String(cell.id_col-1)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row)+String(cell.id_col-1)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row+1)+String(cell.id_col-1)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row-1)+String(cell.id_col)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row)+String(cell.id_col)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row+1)+String(cell.id_col)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row-1)+String(cell.id_col+1)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row)+String(cell.id_col+1)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
    check = arr_coord.indexOf(Number(String(cell.id_row+1)+String(cell.id_col+1)));
    if (check!==-1){
      arr_coord.splice(check,1);
    }
  }
  function GetFillFields(coord,lenght,arr_vector,arr_coord) {  //  координаты и длина корабля
    var rnd = Math.floor(Math.random() * arr_vector.length);
    var del = 0;
    var vector =  arr_vector[rnd];
    var res = [];
    switch (vector) {
      case 0:{
        if (arr_coord.indexOf(Number(String(coord[0]-lenght+1)+String(coord[1])))!==-1){
          for(var i=0;i<lenght;i++){
              res.push({
                id_row: coord[0]-i,
                id_col: coord[1],
                id: coord,
                boat: lenght,
                vector: vector,
                class: 'full'
              });
            DelAround(res[i],arr_coord);
          }
        }
        else {
          arr_vector.splice(rnd,1);
           res = GetFillFields(coord,lenght,arr_vector,arr_coord);
        }
        return res;


      }
      case 1:{
        console.log(Number(String(coord[0]===0?99:coord[0])+String(coord[1]+lenght-1)));
        if (arr_coord.indexOf(Number(String(coord[0]===0?99:coord[0])+String(coord[1]+lenght-1)))!==-1){ // при coord[0]===0 работает неправильно
          for(var i=0;i<lenght;i++){
            res.push({
              id_row: coord[0],
              id_col: coord[1]+i,
              id: coord,
              boat: lenght,
              vector: vector,
              class: 'full'
            });
            DelAround(res[i],arr_coord);

          }

        }
        else {
          arr_vector.splice(rnd,1);
          res = GetFillFields(coord,lenght,arr_vector,arr_coord);
        }
        return res;

      }
      case 2:{
        if (arr_coord.indexOf(Number(String(coord[0]+lenght-1)+String(coord[1])))!==-1){
          for(var i=0;i<lenght;i++){
            res.push({
              id_row: coord[0]+i,
              id_col: coord[1],
              id: coord,
              boat: lenght,
              vector: vector,
              class: 'full'
            });
            DelAround(res[i],arr_coord);

          }
        }
        else {
          arr_vector.splice(rnd,1);
          res = GetFillFields(coord,lenght,arr_vector,arr_coord);
        }
        return res;

      }
      case 3:{

        if (arr_coord.indexOf(Number(String(coord[0])+String(coord[1]-lenght+1)))!==-1){
          for(var i=0;i<lenght;i++){
            res.push({
              id_row: coord[0],
              id_col: coord[1]-i,
              id: coord,
              boat: lenght,
              vector: vector,
              class: 'full'
            });
            DelAround(res[i],arr_coord);

          }

        }
        else {
          arr_vector.splice(rnd,1);
          res = GetFillFields(coord,lenght,arr_vector,arr_coord);
        }
        return res;

      }

    }

  }





  function GetAllFields(arr_coord,arr_boats_lenght) {
    var res = [];
    arr_boats_lenght.forEach(function (boat_lenght) {
      var arr_vector=[0,1,2,3];     // 0 - top; 1 - right; 2 - bot; 3 - left
      var rand = Math.floor(Math.random() * arr_coord.length);
      var coord = GetCoord(arr_coord[rand]);      // получаем координаты из массива
      var boat_fields = GetFillFields(coord,boat_lenght,arr_vector,arr_coord);
      boat_fields.forEach(function (item) {
        res.push(item);
      });
    });
    return res;
  }


  function CreateBoat() {
    var arr = [];
    var res = [];
    var arr_boats_lenght=[4,3,3,2,2,2,1,1,1,1];
    for (var i=0;i<100;i++){
      arr.push(i);
    }
    var boats = GetAllFields(arr,arr_boats_lenght);
    for (var i = 0;i<10;i++){
      res[i]=[];
      for (var k=0;k<10;k++){
        res[i].push({id_row:i,id_col:k,class:'empty'});
      }
    }
    console.log(boats);
  boats.forEach(function (item) {
    res[item.id_row][item.id_col]=item;
  });
    return res;
  }
    export default {
        name: "FloatBoat",
      methods:{
          shut(tr,td){
            if(this.userdata[tr][td].class==='full'){
              this.userdata[tr][td].class = 'kill';
            }
            else{
              this.userdata[tr][td].class = 'shut';
            }
          },
        restart(){
            this.botdata=CreateBoat();
            this.userdata=CreateBoat();
        }
      },
      data(){
          var arr1 = CreateBoat();
          var arr2 = CreateBoat();
          return {
            botdata:arr1,
            userdata: arr2

          }
      },
        computed:{
            arr_coord_user(){
              var arr_coord = [];
              for (var i=0;i<100;i++){
                arr_coord.push(i);
              }
              return arr_coord;
            }
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
  .flex{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  button{
    background: #2c3e50;
    color: aliceblue;
    width: 100px;
    height: 30px;
    box-shadow:  2px 2px 10px #2c3e50;
    cursor: pointer;
    border:none;
    border-radius: 10px;
  }
</style>
