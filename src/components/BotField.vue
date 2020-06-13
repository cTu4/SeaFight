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
  // var arr_coord = [];
  // for (var i=0;i<100;i++){
  //   arr_coord.push(i);
  // }
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


  function FullKill(data,td,arr_coord) {
    var new_row,new_col = 0;
    var count = 0;
    console.log(arr_coord,data);
    data.forEach(function (tr) {
      tr.forEach(function (item) {
          if(item.id===td.id && item.class==="kill"){
            count++;
          }
      })
    });
    if (count === td.boat){
      var del = 0;
      var id_row=td.id[0];
      var id_col=td.id[1];
      switch(td.vector){
        case (0):{
          for (var i=0;i<td.boat;i++){
            for (var k=-1;k<=1;k++){
              for(var g=-1;g<=1;g++){
                new_row=id_row+k-i;
                new_col =id_col+g;
                if (typeof data[new_row]!=="undefined" && typeof data[new_row][new_col]!=="undefined")
                {
                  data[new_row][new_col].class='shut';
                  if (typeof arr_coord!=="undefined"){
                    del = arr_coord.indexOf(Number(String(new_row)+String(new_col)));
                    if(del!==-1){
                      arr_coord.splice(del,1);
                    }
                  }
                }
              }
            }
          }
          for (var i = 0;i<td.boat;i++){
            data[id_row-i][id_col].class='kill';
          }
          break;
        }
        case (1):{
          for (var i=0;i<td.boat;i++){
            for (var k=-1;k<=1;k++){
              for(var g=-1;g<=1;g++){
                new_row=id_row+k;
                new_col =id_col+g+i;
                if (typeof data[new_row]!=="undefined" && typeof data[new_row][new_col]!=="undefined")
                {
                  data[new_row][new_col].class='shut';
                  if (typeof arr_coord!=="undefined"){
                    del = arr_coord.indexOf(Number(String(new_row)+String(new_col)));
                    if(del!==-1){
                      arr_coord.splice(del,1);
                    }
                  }
                }
              }
            }
          }
          for (var i = 0;i<td.boat;i++){
            data[id_row][id_col+i].class='kill';
          }
          break;
        }
        case (2):{
          for (var i=0;i<td.boat;i++){
            for (var k=-1;k<=1;k++){
              for(var g=-1;g<=1;g++){
                new_row=id_row+k+i;
                new_col =id_col+g;
                if (typeof data[new_row]!=="undefined" && typeof data[new_row][new_col]!=="undefined")
                {
                  data[new_row][new_col].class='shut';
                  if (typeof arr_coord!=="undefined"){
                    del = arr_coord.indexOf(Number(String(new_row)+String(new_col)));
                    if(del!==-1){
                      arr_coord.splice(del,1);
                    }
                  }
                }
              }
            }

          }
          for (var i = 0;i<td.boat;i++){
            data[id_row+i][id_col].class='kill';
          }
          break;
        }
        case (3):{
          for (var i=0;i<td.boat;i++){
            for (var k=-1;k<=1;k++){
              for(var g=-1;g<=1;g++){
                if (typeof data[id_row+k]!=="undefined" && typeof data[id_row+k][id_col+g-i]!=="undefined")
                {
                  data[id_row+k][id_col+g-i].class='shut';
                }
                new_row=id_row+k;
                new_col =id_col+g-i;
                if (typeof data[new_row]!=="undefined" && typeof data[new_row][new_col]!=="undefined")
                {
                  data[new_row][new_col].class='shut';
                  if (typeof arr_coord!=="undefined"){
                    del = arr_coord.indexOf(Number(String(new_row)+String(new_col)));
                    if(del!==-1){
                      arr_coord.splice(del,1);
                    }
                  }
                }
              }
            }
          }
          for (var i = 0;i<td.boat;i++){
            data[id_row][id_col-i].class='kill';
          }
          break;
        }
      }
      console.log(data);

    }
  }
  var win_bot = 0;
  var win_user = 0;
  function kick(data,th,arr_coord) {
    var rand =Math.floor(Math.random() * arr_coord.length);
    var coord = GetCoord(arr_coord[rand]);
    arr_coord.splice(rand,1);
    if (data[coord[0]][coord[1]].class !== 'shut' && data[coord[0]][coord[1]].class !== 'kill') {
        th.$emit('back_shut',coord[0],coord[1]);

        console.log(data[coord[0]][coord[1]]);
        FullKill(data,data[coord[0]][coord[1]],arr_coord);
        if(data[coord[0]][coord[1]].class==='kill'){
          win_bot++;
          if (win_bot===20) {
            setTimeout(function () {
              alert('You Died!')
            }, 500);
          }
          kick(data,th,arr_coord);
        }
      }

     }
    export default {
        name: "FloatBoard",
        props: ['bot_data','user_data', 'arr_coord_user'],
        methods:{
          shut(e,td){
            console.log(this.arr_coord_user);
            if( td.class!=='shut' && td.class!=='kill'){
              if (td.class==='full'){
                this.bot_data[td.id_row][td.id_col].class='kill';
                FullKill(this.bot_data,td);
                win_user++;
                if(win_user===20){
                  setTimeout(function (){alert('You WIN!')},500);
                }
              }
              else{
                this.bot_data[td.id_row][td.id_col].class='shut';
                kick(this.user_data,this,this.arr_coord_user);

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
  }
  .kill{
    background: red;
  }
  .shut{
    background: cadetblue;
  }
</style>
