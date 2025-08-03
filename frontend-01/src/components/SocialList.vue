<template>
  <div class="bg-white border-t py-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end px-4 sm:px-6 space-y-4 md:space-y-0">

      <!-- 左侧链接 -->
      <div class="text-sm sm:text-md text-Languages-textblue flex space-x-2 font-source">
        <router-link to="/aboutUs" class="hover:underline">{{ $t('footer.aboutUs') }}</router-link>
      </div>

      <!-- 中间社交图标 -->
      <div class="flex flex-wrap justify-center gap-3 sm:gap-5">
        <a
          v-for="icon in socialIcons"
          :key="icon.key"
          :href="links[icon.key]"
          target="_blank"
          rel="noopener"
          class="relative w-12 h-12 sm:w-20 sm:h-20 rounded-full overflow-hidden cursor-pointer group"
        >
          <!-- 默认图 -->
          <img
            loading="lazy"
            :src="icon.default"
            class="w-12 h-12 sm:w-20 sm:h-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
          />
          <!-- hover 图 -->
          <img
            loading="lazy"
            :src="icon.hover"
            class="w-12 h-12 sm:w-20 sm:h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>

      <!-- 右侧语言下拉 -->
      <LanguageDropdown class="hidden md:block" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LanguageDropdown from './LanguageDropdown.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const links = ref({})
const loading = ref(true)
const error = ref(null)

const socialIcons = [
  { key: 'shipinhao', default: '/image/sns/social/shipinhao.png', hover: '/image/sns/social/shipinhao-hover.png' },
  { key: 'xiaohongshu', default: '/image/sns/social/xiaohongshu.png', hover: '/image/sns/social/xiaohongshu-hover.png' },
  { key: 'facebook', default: '/image/sns/social/facebook.png', hover: '/image/sns/social/facebook-hover.png' },
  { key: 'x', default: '/image/sns/social/x.png', hover: '/image/sns/social/x-hover.png' },
  { key: 'youtube', default: '/image/sns/social/youtube.png', hover: '/image/sns/social/youtube-hover.png' },
  { key: 'ins', default: '/image/sns/social/ins.png', hover: '/image/sns/social/ins-hover.png' },
  { key: 'vk', default: '/image/sns/social/vk.png', hover: '/image/sns/social/vk-hover.png' },
]

onMounted(async () => {
  try {
    const response = await fetch('/data/socialLinks.json')
    if (!response.ok) throw new Error(t('error.networkError'))
    links.value = await response.json()
  } catch (err) {
    error.value = err
    console.error(t('error.uploadSnsError'), err)
  } finally {
    loading.value = false
  }
})
</script>
