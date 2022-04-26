<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"v-for="item in list" :key="item.id">
        <img :src="item.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
export default {
  name: "Carousel",
  props:['list'],
  watch:{
    list:{
      immediate:true,
      handler(){
        const mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>