<template>
  <div id="app">
    <Head></Head>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Foot from './components/Foot.vue'
  import Head from './components/Head.vue'
export default {
  name: 'App',
  components: {Foot,Head}
}
</script>

<style>

 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
