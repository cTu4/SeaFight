<template>
  <div class="wrapper">
    <div class="boat1" v-on:mousedown="DragStart" v-on:mouseup="DragEnd"></div>
    <table-war></table-war>
  </div>
</template>

<script>
  //import $ from 'jquery';
  import table from './components/Fight'
    export default {
        name: "BoatWar",
      components:{
          TableWar: table
      },
      methods:{
          DragStart(e){
            var boat = $(e.target);
            boat.draggable();

            $('td').droppable({
              drop: function(e) {
                console.log(e.target);

                $(e.target).append($('<div>',{
                  css:{
                    background: 'url("src/image/boat1.png") no-repeat',
                    BackgroundSize: 'contain',
                    height: 30,
                  }
                }));
                $('td').css({height: 47});
                boat.remove();un dev

              },
              activate: function() {

              },
              deactivate: function() {
                $('td').css("border", "").css("background-color", "");
              },
              over: function() {

              },
              out: function() {
                $('td').css("border", "").css("background-color", "");
              }
            });
            //
            // var boat = $(e.target)[0];
            //
            // boat.ondragstart = function() {
            //   return false;
            // };
            //
            // function getCoords(elem) {   // кроме IE8-
            //   var box = elem.getBoundingClientRect();
            //   return {
            //     top: box.top + pageYOffset,
            //     left: box.left + pageXOffset
            //   };
            // }
            //
            // var coords = getCoords(boat);
            // var shiftX = e.pageX - coords.left;
            // var shiftY = e.pageY - coords.top;
            //
            // boat.style.position = 'absolute';
            // document.body.appendChild(boat);
            // moveAt(e);
            //
            // boat.style.zIndex = 1000; // над другими элементами
            //
            // function moveAt(e) {
            //   boat.style.left = e.pageX - shiftX + 'px';
            //   boat.style.top = e.pageY - shiftY + 'px';
            // }
            //
            // document.onmousemove = function(e) {
            //   moveAt(e);
            // };
            //
            // boat.onmouseup = function() {
            //   document.onmousemove = null;
            //   boat.onmouseup = null;
            // };
          },
        DragEnd(e){

        }
      }
    }
</script>

<style scoped>
  .boat1{
    height: 40px;
    width: 40px;
    background: url("image/boat1.png") no-repeat;
    background-size: contain;
  }
</style>
