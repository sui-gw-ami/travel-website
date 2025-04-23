<template>
  <swiper
    :modules="[Autoplay, Pagination]"
    :loop="true"
    :autoplay="{ delay: 4000 }"
    :pagination="{ clickable: true }"
    class="w-full h-64 sm:h-96 relative"
  >
    <swiper-slide v-for="(item, index) in slides" :key="index" class="relative">
      <img :src="item.image" class="w-full h-full object-cover" />
      <div class="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded text-sm sm:text-lg">
        {{ item.title }}
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const slides = [
  { image: '/assets/images/logo.png', title: '长城 · 热门景点' },
  { image: '/assets/images/logo.png', title: '上海 · 国际都市魅力' },
  { image: '/assets/images/logo.png', title: '云南 · 民族风情之旅' }
]
</script>
