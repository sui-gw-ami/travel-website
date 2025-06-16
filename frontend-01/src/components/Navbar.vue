<template>
    <nav class="fixed top-0 left-0 w-full z-50 bg-transparent  text-white">
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <RouterLink to="/" class="flex items-left space-x-2">
        <img src="/image/logo/logo.png" alt="Logo" class="h-12" />
      </RouterLink>
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:underline">首页</a></li>
          <li><a href="#" class="hover:underline">新闻</a></li>
          <li><a href="#" class="hover:underline">行程</a></li>
          <li><a href="#" class="hover:underline">联系我们</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  // 暂无逻辑
  </script>
  
  <style scoped>
  /* 可选额外样式 */
  </style>
  