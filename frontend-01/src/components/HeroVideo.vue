<template>
    <div class="relative h-[540px] overflow-hidden">
      <video autoplay muted loop class="absolute w-full h-[540px] object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
       <!-- ✅ 导航栏放在视频上方，不固定 -->
    <nav class="absolute top-0 left-0 w-full z-20 bg-transparent text-white">
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <RouterLink to="/" class="flex items-left space-x-2">
          <img src="/image/logo/logo.png" alt="Logo" class="h-12" />
        </RouterLink>
        <div class="flex space-x-6">
          <LanguageDropdown />
        </div>
      </div>
    </nav>

      <!-- 图层区域 -->
      <div class="relative px-72 top-80 overflow-visible flex items-center">
        <!-- 👇 一个容器包裹所有：peer 和被控制对象 -->
        <div class="relative group">
          <!-- peer 元素：LetsGo.png -->
          <img
            src="/image/other/LetsGo.png"
            alt="Logo"
            class="peer h-10 object-cover relative z-10 hover:opacity-0"
          />

          <!-- LetsGo1.png（悬停时显示） -->
          <img
            src="/image/other/LetsGo1.png"
            alt="Logo Hover"
            class="absolute top-0 left-0 h-10 object-cover 
                  opacity-0 transition-opacity duration-300 
                  peer-hover:opacity-100"
          />

          <!-- footer-weChat.png（悬停时浮出） -->
          <img
            src="/image/sns/footer-weChat.png"
            alt="WeChat QR"
            class="absolute left-0 top-[-145px] w-[166px] object-cover 
                  opacity-0 transform translate-y-10 
                  transition-all duration-500 
                  peer-hover:opacity-100 peer-hover:translate-y-[-20px]"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
      import LanguageDropdown from './LanguageDropdown.vue'
  </script>