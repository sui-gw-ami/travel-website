<template>
    <div class="relative inline-block">
      <button
        @click="isOpen = !isOpen"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-100"
      >
        <img :src="selectedLanguage.flag" alt="" class="w-5 h-4 mr-2" />
        {{ selectedLanguage.label }}
        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
  
      <div
        v-if="isOpen"
        class="absolute w-full border border-blue-700 border-t-0 rounded-b-lg overflow-hidden z-10"
      >
        <ul class="py-2 text-sm text-gray-700">
          <li v-for="language in languages" :key="language.code">
            <a href="#" @click.prevent="changeLanguage(language)" class="flex items-center px-4 py-2 hover:bg-gray-100">
              <img :src="language.flag" class="w-4 h-4 mr-2 rounded-full" alt="">
              {{ language.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { locale } = useI18n()
  const isOpen = ref(false)
  
  const languages = [
    { code: 'cn', label: '中文(简体)', flag: 'https://flagcdn.com/w40/cn.png' },
    // { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'jp', label: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
    { code: 'ru', label: 'Россия', flag: 'https://flagcdn.com/w40/ru.png' },
  ]
  
  const selectedLanguage = ref(languages.find(l => l.code === locale.value))
  
  function changeLanguage(lang) {
    locale.value = lang.code
    selectedLanguage.value = lang
    isOpen.value = false
  }
  
  // 点击外部关闭下拉框
  document.addEventListener('click', (e) => {
    const target = e.target
    if (!target.closest('.relative')) {
      isOpen.value = false
    }
  })
  </script>
  