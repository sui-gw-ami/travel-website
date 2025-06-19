<template>
    <div class="relative h-[540px] overflow-hidden">
      <video autoplay muted loop class="absolute w-full h-[540px] object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <!-- 图层区域 -->
      <div class="relative px-60 top-80 overflow-visible group flex  items-center">
        
        <!-- footer-weChat.png 悬停时向上浮出 -->
        <img
          src="/image/sns/footer-weChat.png"
          alt="WeChat QR"
          class="absolute z-30 h-40 object-cover 
                opacity-0 transform translate-y-10 
                transition-all duration-500 
                group-hover:opacity-100 group-hover:-translate-y-28"
        />

        <!-- LetsGo 默认图 -->
        <img
          src="/image/other/LetsGo.png"
          alt="Logo"
          class="absolute z-10 h-10 object-cover 
                transition-opacity duration-100 
                group-hover:opacity-0"
        />

        <!-- LetsGo1 悬停图 -->
        <img
          src="/image/other/LetsGo1.png"
          alt="Logo Hover"
          class="absolute z-10 h-10 object-cover 
                opacity-0 transition-opacity duration-300 
                group-hover:opacity-100"
        />
      </div>


    </div>
  </template>
  
  <script setup>
  </script>