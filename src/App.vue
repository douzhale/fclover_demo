<template>
  <div id="app">
    <Head></Head>
    <div class="container">
      <router-view/>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
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
.container{
  height: calc(100% - 121px);
  overflow: hidden;
}
</style>
