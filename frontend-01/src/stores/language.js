import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref({
    code: 'zh',
    label: '🌐LANGUAGE'
  })

  function setLanguage(lang) {
    currentLanguage.value = lang
  }

  return {
    currentLanguage,
    setLanguage
  }
})
