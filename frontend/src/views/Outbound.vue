<template>
    <div class="flex flex-col min-h-screen">
      <!-- 导航栏 -->
      <Navbar />

      <!-- 主内容区 -->
      <main class="max-w-screen-xl w-full mx-auto px-4 sm:px-6 py-10 space-y-16">
        <!-- 入境旅游 -->
        <section id="inbound">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">入境旅游</h2>
          <p class="text-gray-600">欢迎来自全球的游客探索中国的美丽风光与文化遗产！</p>
        </section>
  
        <!-- 出境旅游 -->
        <section id="outbound">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">出境旅游</h2>
          <p class="text-gray-600">为中国游客推荐世界各地值得一游的目的地和旅行服务。</p>
        </section>
  
        <!-- 服务介绍 -->
        <section id="services">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">服务介绍</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>签证办理</li>
            <li>导游预约</li>
            <li>行程定制</li>
          </ul>
        </section>
  
        <!-- 旅游资讯 -->
        <section id="news">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">旅游资讯</h2>
          <ul class="space-y-2 text-gray-600">
            <li>📌 2025年旅游趋势预测</li>
            <li>📌 新开放城市签证免签公告</li>
            <li>📌 境外旅行安全提示</li>
          </ul>
        </section>
      </main>
  
      <!-- 页脚 -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  
  <style>
  html {
    scroll-behavior: smooth;
  }
  </style>
  