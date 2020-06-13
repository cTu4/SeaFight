import Vue from 'vue'
import VueDraggable from 'vue-draggable'
//import App from './SmartTable.vue'
import App from './components/FloatBoat';
Vue.use(VueDraggable);
new Vue({
  el: '#app',
   render: h => h(App)
});
