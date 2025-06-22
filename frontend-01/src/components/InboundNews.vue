<template>
  <div>
    <!-- 其他组件 -->
    
    <!-- 国内新闻部分：标题列表 -->
    <section class="max-w-7xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">国内新闻</h2>
      <ul>
        <li
          v-for="item in domesticNews"
          :key="item.id"
          class="py-2 border-b cursor-pointer hover:text-blue-600"
          @click="goToDetail(item.id)"
        >
          {{ item.title }}
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
  { id: 1, title: '国内新闻一' },
  { id: 2, title: '国内新闻二' },
  { id: 3, title: '国内新闻三' },
])

function goToDetail(id) {
  router.push(`/news/${id}`)
}
</script>
