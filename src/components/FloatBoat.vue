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
          }
      },
      data(){
          return {
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
          botdata(){
            var arr = [
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
              ]];
            return arr;
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
  .wrapper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
