<template>
  <div>
    <!-- 国外新闻部分：图片展示 -->
    <section class="max-w-7xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">国外新闻</h2>
      <div class="flex space-x-4 overflow-x-auto">
        <div
          v-for="item in internationalNews"
          :key="item.id"
          class="flex-shrink-0 w-48 cursor-pointer"
          @click="goToDetail(item.id)"
        >
          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="w-full h-32 object-cover rounded"
          />
          <p class="mt-2 text-sm text-center">{{ item.title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const internationalNews = ref([
  { id: 101, title: '国外新闻一', imageUrl: '/images/news1.jpg' },
  { id: 102, title: '国外新闻二', imageUrl: '/images/news2.jpg' },
  { id: 103, title: '国外新闻三', imageUrl: '/images/news3.jpg' },
])

function goToDetail(id) {
  router.push(`/news/${id}`)
}
</script>
