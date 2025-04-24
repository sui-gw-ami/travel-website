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

import dalian from '@/assets/image/dalian.jpg'
import japan from '@/assets/image/riben.jpg'
import hanguo from '@/assets/image/hanguo.jpg'

const slides = [
  { image: dalian, title: '大连· 热门景点' },
  { image: japan, title: '日本 · 国际都市' },
  { image: hanguo, title: '韩国 · 现代之旅' }
]
</script>
