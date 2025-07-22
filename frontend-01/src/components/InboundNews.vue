<template>
  <div>
    <!-- 国内新闻部分：标题列表 -->
    <section class="max-w-4xl mx-auto p-6">
      <div class="flex items-center justify-start">
        <h2 class="text-2xl font-inter text-Languages-textblue mb-4">NEWS</h2>
        <p class="font-source mb-3 px-4">{{ $t('inbound.hotNews') }}</p>
      </div>

      <div class="h-0.5 bg-gray-400 mb-2"></div>

      <!-- ✅ 加了滚动容器 -->
      <div class="max-h-60 overflow-y-auto">
        <ul>
          <li
            v-for="item in domesticNews"
            :key="item.id"
            class="py-2 border-b-2 cursor-pointer hover:text-blue-600"
            @click="goToDetail(item.id)"
          >
            <div class="flex items-center">
              <p class="mt-2 text-sm text-center">{{ item.time }}</p>
              <p class="mt-2 text-md text-center text-Languages-textblue px-4 hover:text-blue-600">
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
import { ref ,onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const domesticNews = ref([])

async function fetchNews() {
  try {
    const { data } = await axios.get('/api/news/insideNews') // ✅ 请求后端接口
    domesticNews.value = data
  } catch (error) {
    console.error('获取新闻失败:', error)
  }
}

function goToDetail(id) {
   router.push({ name: 'NewsDetails', params: { id } });
}

onMounted(() => {
  fetchNews()
})
</script>
