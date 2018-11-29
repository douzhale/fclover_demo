<template>
  
  <div class="section" ref="section">
    <div
      class="container"
      :style="{'transition':hasTransition?'all 1000ms ease':'','transform': `translate3d(0px,-${isFoot?(fullPage*sliderHeight+300):(fullPage*sliderHeight)}px,0px)`}"
    >
      <div
        v-for="(item,index) in bannerList"
        :style="{'background-image':`url(${item.url})`,'padding-top':index===0?'61px':0}"
      ></div>
      <Foot></Foot>
    </div>
    <div class="pagenation">
      <div
        v-for="(item,index) in bannerList"
        :class="fullPage==index?'color':''"
        @click="pageInfo(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import Foot from "./Foot";
export default {
  name: "Home",
  data() {
    return {
      sliderHeight: 0,
      fullPage: 0,
      isScroll: false,
      hasTransition: true,
      isFoot: false,
      bannerList: [
        {
          url: require("../assets/img1.jpg")
        },
        {
          url: require("../assets/img2.jpg")
        },
        {
          url: require("../assets/img3.jpg")
        },
        {
          url: require("../assets/img4.jpg")
        }
      ]
    };
  },
  components: {
    Foot
  },
  mounted() {
    this.sliderHeight = this.$refs.section.offsetHeight;
    if (document.addEventListener) {
      document.addEventListener("DOMMouseScroll", this.scroll, false);
    }
    window.onmousewheel = document.onmousewheel = this.scroll;
    window.onresize = () => {
      this.sliderHeight = this.$refs.section.offsetHeight;
      this.hasTransition = false;
    };
  },
    methods: {
    pageInfo(index) {
      this.fullPage = index;
      this.$store.dispatch("changeSlideIndex", index);
    },
    scroll(e) {
      this.hasTransition = true;
      e = e || window.event;
      if (this.isScroll) {
        return false;
      }
      if (e.wheelDelta < 0) {
        if (this.fullPage >= this.bannerList.length - 1) {
          this.isFoot = true;
          return false;
        }
        this.isScroll = true;
        this.pageInfo(this.fullPage + 1);
        setTimeout(() => {
          this.isScroll = false;
        }, 1000);
      } else {
        if (this.fullPage <= 0) {
          return false;
        }
        this.isScroll = true;
        this.pageInfo(this.isFoot ? this.fullPage : this.fullPage - 1);
        this.isFoot = false;
        setTimeout(() => {
          this.isScroll = false;
        }, 1000);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  height: 100%;
  overflow: hidden;
}
.container {
  height: 100%;
  position: relative;
  transform: translate3d(0px, 0px, 0px);
}
.container > div {
  background: center/cover no-repeat;
  height: 100%;
  box-sizing: border-box;
  background-clip: content-box;
}
.pagenation {
  position: fixed;
  top: 40%;
  right: 20px;
}
.pagenation > div {
  width: 15px;
  height: 15px;
  background: #ccc;
  border-radius: 50%;
  margin-bottom: 15px;
}
.pagenation > div.color {
  background: rgb(52, 128, 226);
}
</style>
