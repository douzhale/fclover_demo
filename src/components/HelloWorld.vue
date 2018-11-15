<template>
  <div class="hello">
    <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="../assets/img1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img2.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img3.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img4.jpg"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
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
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        on: {
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            console.log(swiper.activeIndex);
            this.$store.dispatch('changeSlideIndex',swiper.activeIndex)
          }
        }
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
  height: 100%;
}
</style>
