<template>
  <div class="bg-white border-t py-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end px-6 space-y-4 md:space-y-0">
      
      <!-- 左侧链接 -->
      <div class="text-md text-Languages-textblue flex space-x-2 font-source">
        <a href="#" class="hover:underline">关于我们</a>
      </div>

      <!-- 中间社交图标 -->
      <div class="flex space-x-5">
        <a
          v-for="icon in socialIcons"
          :key="icon.key"
          :href="links[icon.key]"
          target="_blank"
          rel="noopener"
          class="relative w-20 h-20 rounded-full overflow-hidden cursor-pointer group"
        >
          <!-- 默认图 -->
          <img
            loading="lazy"
            :src="icon.default"
            class="w-20 h-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
          />
          <!-- hover 图 -->
          <img
            loading="lazy"
            :src="icon.hover"
            class="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>


      <!-- 右侧语言下拉 -->
      <LanguageDropdown  />
    </div>
  </div>
</template>

<script setup>
import { ref,computed, onMounted } from 'vue'
import LanguageDropdown from './LanguageDropdown.vue'

const links = ref({})
const loading = ref(true)
const error = ref(null)

const socialIcons = [
  {
    key: 'shipinhao',
    default: '/image/sns/social/shipinhao.png',
    hover: '/image/sns/social/shipinhao-hover.png',
  },
  {
    key: 'xiaohongshu',
    default: '/image/sns/social/xiaohongshu.png',
    hover: '/image/sns/social/xiaohongshu-hover.png',
  },
  {
    key: 'facebook',
    default: '/image/sns/social/facebook.png',
    hover: '/image/sns/social/facebook-hover.png',
  },
  {
    key: 'x',
    default: '/image/sns/social/x.png',
    hover: '/image/sns/social/x-hover.png',
  },
  {
    key: 'youtube',
    default: '/image/sns/social/youtube.png',
    hover: '/image/sns/social/youtube-hover.png',
  },
  {
    key: 'ins',
    default: '/image/sns/social/ins.png',
    hover: '/image/sns/social/ins-hover.png',
  },
]

onMounted(async () => {
  try {
    const response = await fetch('/data/socialLinks.json')
    if (!response.ok) throw new Error('网络响应不正常')
    links.value = await response.json()
  } catch (err) {
    error.value = err
    console.error('加载社交链接失败:', err)
  } finally {
    loading.value = false
  }
})

</script>

<style scoped>
/* 可选：点击外部关闭下拉框，或做得更完善 */
</style>
