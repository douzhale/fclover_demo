<template>
  <div class="foot">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    name: 'foot',
    data () {
      return {
        msg: 'Welcome to Foot'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foot{
    height: 60px;
  }
</style>
