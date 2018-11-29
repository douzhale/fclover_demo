<template>
  <div class="foot">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
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
    height: 300px;
    width: 100%;
  }
</style>
