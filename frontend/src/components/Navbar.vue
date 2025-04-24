<template>
  <header class="bg-white shadow-md sticky top-0 z-50 w-full">
    <div class="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-left space-x-2">
        <img :src="currentLogo" alt="Logo" class="h-20" />
      </RouterLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-9 text-gray-700 font-medium text-lg items-end h-20">
         <a href="#inbound" 
         @click.prevent="scrollTo('#inbound')" 
         class="px-3 py-2 rounded hover:bg-yellow-100 transition">{{ $t('app.inbound') }}</a>
        <a href="#outbound" 
        @click.prevent="scrollTo('#outbound')" 
        class="px-3 py-2 rounded hover:bg-yellow-60 transition">{{ $t('app.outbound') }}</a>
        <a href="#news" 
        @click.prevent="scrollTo('#news')" 
        class="px-3 py-2 rounded hover:bg-yellow-80 transition">{{ $t('app.news') }}</a>
        <a href="#services" 
        @click.prevent="scrollTo('#services')" 
        class="px-3 py-2 rounded hover:bg-yellow-100 transition">{{ $t('app.services') }}</a>
      </nav>
        <div class="hidden md:flex items-end space-x-4 h-16">
        <LanguageDropdown class="ml-4" />
        <button class="w-24 bg-yellow-500 text-white text-md px-3 py-2 rounded hover:bg-yellow-600 transition">
          {{ $t('app.login') }}
        </button>

      </div>

    </div>
    <nav class="border-b-2 border-yellow-400"></nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageDropdown from './LanguageDropdown.vue'

const isOpen = ref(false)

const { locale } = useI18n()
const logos = {
  zh: '/image/logo/logo-cn.png',
  en: '/image/logo/logo-en.png',
  ja: '/image/logo/logo-cn.png',
  ko: '/image/logo/logo-en.png'
}
// 动态绑定当前 logo
const currentLogo = computed(() => logos[locale.value] || logos['zh'])
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
