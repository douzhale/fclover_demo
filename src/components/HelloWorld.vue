<template>
  <div class="hello">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/img1.jpg" style="width: 100%;height: 100%"></swiper-slide>
      <swiper-slide><img src="../assets/img2.jpg" style="width: 100%;height: 100%"></swiper-slide>
      <swiper-slide><img src="../assets/img3.jpg" style="width: 100%;height: 100%"></swiper-slide>
      <swiper-slide><img src="../assets/img4.jpg" style="width: 100%;height: 100%"></swiper-slide>
    </swiper>
    <div class="swiper-button-next"></div>   <!--下一项-->
    <div class="swiper-button-prev"></div>   <!-- 上一项-->
    <div class="swiper-pagination"></div>     <!--标页码-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      swiperOption: {
        //swiper3
        autoplay: false,
        speed: 1000,
        direction: "vertical",
        mousewheel: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable :true,
        // }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello,
.swiper-container {
  height: 100%;
}
.swiper-slide img {
  width: 100%;
}
</style>
