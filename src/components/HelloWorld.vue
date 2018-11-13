<template>
  <div class="hello">
    <div class="swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/img1.jpg" style="width: 100%;height: 100%"></swiper-slide>
      <swiper-slide><img src="../assets/img2.jpg" style="width: 100%;height: 100%"></swiper-slide>
      <swiper-slide><img src="../assets/img3.jpg" style="width: 100%;height: 100%"></swiper-slide>
      <swiper-slide><img src="../assets/img4.jpg" style="width: 100%;height: 100%"></swiper-slide>
    </swiper>
    </div>
  <!--  <div class="swiper-scrollbar"></div>     &lt;!&ndash;滚动条&ndash;&gt;
    <div class="swiper-button-next"></div>   &lt;!&ndash;下一项&ndash;&gt;
    <div class="swiper-button-prev"></div>   &lt;!&ndash; 上一项&ndash;&gt;-->
    <div class="swiper-pagination"></div>     <!--标页码-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop:true,
        //设定初始化时slide的索引
        initialSlide:0,
        //自动播放
        // autoplay:true,
    /*    autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },*/
        autoplay: false,
        mousewheel: true,
        // 设置轮播
       /* effect : 'flip',*/
        //滑动速度
        speed:800,
        //滑动方向
        direction : 'vertical',
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function(){
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
        //左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        }
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
