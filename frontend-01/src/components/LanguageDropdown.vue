<template>
        <!-- 右侧语言下拉 -->
    <div class="w-40 relative font-Source font-bold flex justify-center">
        <button
            @click="toggleDropdown"
            class="max-w-full flex items-center border border-blue-700 text-Languages-textblue px-3 py-1 rounded-full text-sm hover:bg-blue-300"
        >
            <img
            v-if="currentLanguage.flag"
            :src="currentLanguage.flag"
            class="w-4 h-4 mr-2 rounded-full"
            alt=""
            />
            <span class="truncate">{{ currentLanguage.label }}</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-if="dropdownOpen" class="absolute right-0  w-40 bg-white border border-blue-700 rounded-md shadow-md z-10">
            <div
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang)"
            :class="[
                'px-4 py-1 flex items-center cursor-pointer',
                currentLanguage.code === lang.code
                ? 'bg-Languages-deepblue text-Languages-textwhite'
                : 'hover:bg-Languages-lightblue text-Languages-textblue'
            ]"

            >
            <span>{{ lang.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const currentLanguage = ref({
  code: 'zh',
  label: '🌐LANGUAGE',
  selected: false,
})

const selectLanguage = (lang) => {
  currentLanguage.value = lang
  currentLanguage.selected = true
  dropdownOpen.value = false
  // TODO: 这里可以加上切换语言的逻辑，例如调用 i18n
}

  // 点击外部关闭下拉框
  document.addEventListener('click', (e) => {
    const target = e.target
    if (!target.closest('.relative')) {
      dropdownOpen.value = false
    }
  })

  const languages = [
    { code: 'zh', label: '中文(简体)', flag: 'https://flagcdn.com/w40/cn.png' },
    { code: 'ja', label: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
    { code: 'ru', label: 'Россия', flag: 'https://flagcdn.com/w40/ru.png' },
  ]
</script>
