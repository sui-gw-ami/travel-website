<template>
  <div class="bg-white border-t py-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
      
      <!-- 左侧链接 -->
      <div class="text-sm text-blue-700 flex space-x-4">
        <a href="#" class="hover:underline">关于我们</a>
        <span>|</span>
        <a href="#" class="hover:underline">常见问题</a>
      </div>

      <!-- 中间社交图标 -->
      <div class="flex space-x-5">
        <div
          v-for="icon in socialIcons"
          :key="icon.alt"
          class="relative w-20 h-20 rounded-full overflow-hidden cursor-pointer group"
        >
          <!-- 默认图 -->
          <img
            :src="icon.default"
            :alt="icon.alt"
            class="w-20 h-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
          />
          <!-- hover 图 -->
          <img
            :src="icon.hover"
            :alt="icon.alt + ' hover'"
            class="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>


      <!-- 右侧语言下拉 -->
      <div class="relative inline-block">
        <button
          @click="toggleDropdown"
          class="w-50 flex items-center border border-blue-700 text-Languages-textblue font-bold px-3 py-1 rounded-full text-sm hover:bg-blue-300"
        >
           {{ currentLanguage.label }}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-36 bg-white border border-blue-700 rounded-md shadow-md z-10">
          <div
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang)"
            :class="[
              'px-4 py-1 flex items-center cursor-pointer',
              currentLanguage.code === lang.code
                ? 'bg-Languages-deepblue'
                : 'hover:bg-Languages-lightblue'
            ]"

          >
            <span>{{ lang.label }}</span>
          </div>
        </div>
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
})

const selectLanguage = (lang) => {
  currentLanguage.value = lang
  dropdownOpen.value = false
  // TODO: 这里可以加上切换语言的逻辑，例如调用 i18n
}

const languages = [
  { code: 'zh', label: '中文'},
  { code: 'ja', label: '日本語',},
  { code: 'ru', label: 'Русский'},
]

const socialIcons = [
  {
    alt: '微博',
    default: '/image/sns/social/shipinhao.png',
    hover: '/image/sns/social/shipinhao-hover.png',
  },
  {
    alt: '小红书',
    default: '/image/sns/social/xiaohongshu.png',
    hover: '/image/sns/social/xiaohongshu-hover.png',
  },
  {
    alt: 'Facebook',
    default: '/image/sns/social/facebook.png',
    hover: '/image/sns/social/facebook-hover.png',
  },
  {
    alt: 'Twitter',
    default: '/image/sns/social/x.png',
    hover: '/image/sns/social/x-hover.png',
  },
  {
    alt: 'YouTube',
    default: '/image/sns/social/youtube.png',
    hover: '/image/sns/social/youtube-hover.png',
  },
  {
    alt: 'Instagram',
    default: '/image/sns/social/ins.png',
    hover: '/image/sns/social/ins-hover.png',
  },
]

</script>

<style scoped>
/* 可选：点击外部关闭下拉框，或做得更完善 */
</style>
