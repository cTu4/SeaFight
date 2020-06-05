<template>
    <tr>
      <vue-td v-on:click="AddTr" v-for="td in tr" :td=td :data=data>
      </vue-td>
    </tr>
</template>

<script>
  import td from './VueTd.vue'

  export default {
        name: "VueTr",
    props: ['tr','data'],
    methods:{
      AddTr(e){
        alert('sss');
      }
    },
    components: {
          VueTd: td
    }
    }
</script>

<style scoped>

</style>
