<template>
  <header class="bg-white shadow-md sticky top-0 z-50 w-full">
    <div class="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-left space-x-2">
        <img :src="logo" alt="Logo" class="h-20" />
      </RouterLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-9 text-gray-700 font-medium text-lg items-center h-20">
        <a href="#inbound" 
         @click.prevent="scrollTo('#inbound')" 
         class="px-3 py-1 rounded hover:bg-blue-100 transition">入境旅游</a>
        <a href="#outbound" @click.prevent="scrollTo('#outbound')">出境旅游</a>
        <a href="#news" @click.prevent="scrollTo('#news')">旅游资讯</a>
        <a href="#services" @click.prevent="scrollTo('#services')">服务介绍</a>
      </nav>

      <!-- Right actions -->
      <div class="hidden md:flex items-center space-x-3">
        <select class="text-sm border border-gray-300 rounded px-2 py-1">
          <option value="zh">中文</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
        </select>
        <button class="bg-blue-500 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-600 transition">
          登录
        </button>
      </div>

      <!-- Mobile Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-600 focus:outline-none">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2 text-gray-900">
      <a href="#inbound" class="hover:text-blue-600 transition">入境旅游</a>
      <a href="#outbound" class="hover:text-blue-600 transition">出境旅游</a>
      <a href="#news" class="hover:text-blue-600 transition">旅游资讯</a>
      <a href="#services" class="hover:text-blue-600 transition">服务介绍</a>

      <div class="flex items-center space-x-2 pt-2">
        <select class="text-sm border border-gray-300 rounded px-2 py-1 flex-1">
          <option value="zh">中文</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
        </select>

        <button class="bg-blue-500 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-600 transition">
          登录
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/image/logo.png'

const isOpen = ref(false)

const scrollTo = (id) => {
  const target = document.querySelector(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateAndClose = (id) => {
  scrollTo(id)
  isOpen.value = false
}
</script>
