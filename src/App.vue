<template>
  <div id="app">
    <Head></Head>
    <router-view/>
    <!-- <Foot></Foot> -->
  </div>
</template>

<script>
import Home from "./components/Home";
import Foot from "./components/Foot.vue";
import Head from "./components/Head.vue";
export default {
  name: "App",
  components: { Foot, Head }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app {
  height: 100%;
}
</style>
