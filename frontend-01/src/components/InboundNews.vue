<template>
  <div>
    <!-- 国内新闻部分：标题列表 -->
    <section class="max-w-full sm:max-w-4xl mx-auto p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-start space-y-2 sm:space-y-0">
        <h2 class="text-xl sm:text-2xl font-inter text-Languages-textblue">NEWS</h2>
        <p class="font-source text-sm sm:text-base px-0 sm:px-4">
          {{ $t('inbound.hotNews') }}
        </p>
      </div>

      <div class="h-0.5 bg-gray-400 mb-2"></div>

      <!-- 滚动容器 -->
      <div class="max-h-48 sm:max-h-60 overflow-y-auto">
        <ul>
          <li
            v-for="item in domesticNews"
            :key="item.id"
            class="py-2 border-b cursor-pointer hover:text-blue-600"
            @click="goToDetail(item.id)"
          >
            <div class="flex flex-col sm:flex-row sm:items-center">
              <p class="text-xs sm:text-sm text-gray-600 text-left sm:text-center">
                {{ item.time }}
              </p>
              <p class="mt-1 sm:mt-2 text-sm sm:text-md text-left sm:text-center text-Languages-textblue sm:px-4 hover:text-blue-600">
                {{ item.title }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const domesticNews = ref([])

async function fetchNews() {
  try {
    const { data } = await axios.get('/api/news/insideNews')
    domesticNews.value = data
  } catch (error) {
    console.error('获取新闻失败:', error)
  }
}

function goToDetail(id) {
  router.push({ name: 'NewsDetails', params: { id } })
}

onMounted(() => {
  fetchNews()
})
</script>
