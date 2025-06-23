<template>
  <div>
    <!-- 其他组件 -->
    
    <!-- 国内新闻部分：标题列表 -->
    <section class="max-w-4xl mx-auto p-6">
      <div class="flex items-center justify-start">
        <h2 class="text-2xl font-inter text-Languages-textblue mb-4">NEWS</h2>
        <p class=" font-source mb-3 px-4">/热点新闻</p>
      </div>
      <ul>
        <li
          v-for="item in domesticNews"
          :key="item.id"
          class="py-2 border-b cursor-pointer hover:text-blue-600"
          @click="goToDetail(item.id)"
        >
          <div class ="flex items-center">
            <p class="mt-2 text-sm text-center">{{ item.time }}</p>
            <p class="mt-2 text-md text-center text-Languages-textblue px-4">{{ item.title }}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const domesticNews = ref([
  { id: 1, time:20250623, title: '国内新闻一' },
  { id: 2, time:20250623, title: '国内新闻二' },
  { id: 3, time:20250623, title: '国内新闻三' },
  { id: 4, time:20250623, title: '国内新闻三' },
  { id: 5, time:20250623, title: '国内新闻三' },
])

function goToDetail(id) {
  router.push(`/news/${id}`)
}
</script>
