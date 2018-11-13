<template>
  <div class="hello">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/img1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img2.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img3.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img4.jpg"></swiper-slide>
    </swiper>

    <div class="swiper-scrollbar"></div>     <!--滚动条-->
    <div class="swiper-button-next"></div>   <!--下一项-->
    <div class="swiper-button-prev"></div>   <!-- 上一项-->
    <div class="swiper-pagination"></div>     <!--标页码-->
  </div>
</template>

<script>
import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

export default {
  name: 'HelloWorld',
  data() {
    return {
      swiperOption: {//swiper3
        autoplay: false,
        speed: 1000,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
