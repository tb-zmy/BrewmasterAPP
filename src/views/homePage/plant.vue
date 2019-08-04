<template>
  <div class="plant">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
         <a href="#">
            <img :src="item" class="pic">
        </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination dot"></div>
    </div>
  </div>
</template>

<script>

import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: 'plant',
  data(){
    return{
      banner:[]
    }
  },
  created(){
    setTimeout(()=>{
    let arr=[
      "https://img08.jiuxian.com/bill/2019/0801/b5bfe5087d2a47158bbfd530d19db9a8.jpg",
      "https://img08.jiuxian.com/bill/2019/0801/c61ea92218d541d894c5c2db4d17a954.jpg",
      "https://img07.jiuxian.com/bill/2019/0801/4caf3ae489594e9181394036f6ccf86f.jpg",
      "https://img08.jiuxian.com/bill/2019/0801/4d3346b5a6474c4c823a28d4a8613ec0.jpg",
      "https://img09.jiuxian.com/bill/2019/0801/9bae3d570ecf4538b749a2a955a145da.jpg",
      "https://img10.jiuxian.com/bill/2019/0801/97b816ddb30940c2bb234444848001af.jpg",
      "https://img10.jiuxian.com/bill/2019/0801/0721a85f2a5a45599e3fe2c3d3727acb.jpg",
      "https://img08.jiuxian.com/bill/2019/0801/c61ea92218d541d894c5c2db4d17a954.jpg",
    ];
    this.banner=arr;
    },500);
  },
  watch:{
    banner(){
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  components: {
    
  }
}
</script>
<style>
    .plant{
        width: 100%;
        height: 1.92rem;
        background-color: bisque;
        position: absolute;
        top: 0;
    }
    .swiper-container {
        width: 100%;
        height: 1.92rem;
    }
    img{
      width: 100%;
      height: 1.92rem;
    }
</style>

