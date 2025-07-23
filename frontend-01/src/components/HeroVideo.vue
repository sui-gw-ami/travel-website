<template>
  <div class="relative h-[400px] sm:h-[600px] overflow-hidden">
    <!-- 视频背景 -->
    <video autoplay muted loop class="absolute w-full h-full object-cover">
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    <!-- 导航栏（视频上方） -->
    <nav class="absolute top-0 left-0 w-full z-20 bg-transparent text-white">
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <RouterLink to="/" class="flex items-left space-x-2">
          <img src="/image/logo/logo.png" alt="Logo" class="h-8 sm:h-12" />
        </RouterLink>
        <div class="flex space-x-4 sm:space-x-6">
          <LanguageDropdown />
        </div>
      </div>
    </nav>

    <!-- 悬停按钮 -->
    <div class="relative px-8 sm:px-72 top-64 sm:top-96 overflow-visible flex justify-center sm:justify-start">
      <div class="relative group">
        <!-- LetsGo.png -->
        <img
          src="/image/other/LetsGo.png"
          alt="Logo"
          class="peer h-8 sm:h-10 object-cover relative z-10 hover:opacity-0"
        />

        <!-- LetsGo1.png（悬停时显示） -->
        <img
          src="/image/other/LetsGo1.png"
          alt="Logo Hover"
          class="absolute top-0 left-0 h-8 sm:h-10 object-cover 
                opacity-0 transition-opacity duration-300 
                peer-hover:opacity-100"
        />

        <!-- 扫码图（悬停时浮出） -->
        <img
          src="/image/sns/scan-line.png"
          alt="WeChat QR"
          class="absolute left-0 top-[-120px] sm:top-[-145px] w-[120px] sm:w-[166px] object-cover 
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
