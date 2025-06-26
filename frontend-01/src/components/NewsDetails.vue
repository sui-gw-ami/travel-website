<template>
  <div class="max-w-7xl mx-auto font-source py-6">
    <nav class="h-[100px] w-ful">
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <RouterLink to="/" class="flex items-left space-x-2">
          <img src="/image/logo/logo.png" alt="Logo" class="h-12" />
        </RouterLink>
        <div class="flex space-x-6">
          <LanguageDropdown />
        </div>
      </div>
    </nav>
    <div class="border-t"></div>
    <div v-if="news">
      <h3 class="text-xl">{{ news.title }}</h3>
      <div class="flex space-x-3">      
        <p class="text-gray-500 mb-2">{{ news.time }}</p>
        <p class="text-gray-500 mb-2">来源：{{ news.from }}</p>
        <p class="text-gray-500 mb-2">发布于：{{ news.releaseAddress }}</p>
      </div>

      
      <p class="mt-4 text-gray-700">这里是新闻内容（可从后台加载）</p>
    </div>
    <div v-else>
      <p class="text-gray-500">新闻不存在</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import LanguageDropdown from './LanguageDropdown.vue'

const route = useRoute()
const newsId = route.params.id

const mockData = [
  { id: 1, time: 20250623, releaseAddress:'大连', from:'大连文化旅游局', title: '国内新闻一' },
  { id: 2, time: 20250623, title: '国内新闻二' },
  { id: 3, time: 20250623, title: '国内新闻三' },
  { id: 4, time: 20250623, title: '国内新闻三' },
  { id: 5, time: 20250623, title: '国内新闻三' },
  { id: 6, time: 20250623, title: '国内新闻三' },
]

const news = ref(null)

onMounted(() => {
  news.value = mockData.find(item => item.id === Number(newsId))
})
</script>
