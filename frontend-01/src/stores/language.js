import { defineStore } from 'pinia'
import i18n from '@/i18n/i18n'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // 从 localStorage 初始化
  const currentLanguage = ref({
    code: localStorage.getItem('lang') || 'zh',
    label: '🌐LANGUAGE'
  })

  function setLanguage(lang) {
    currentLanguage.value = lang
    localStorage.setItem('lang', lang.code)        // 持久化
    i18n.global.locale.value = lang.code           // 同步 i18n
  }

  return {
    currentLanguage,
    setLanguage
  }
})
