<template>
  <section class="p-6">
    <div class="relative flex items-center justify-center">
      <!-- 左按钮 -->
      <button
        @click="prev"
        class="absolute left-0 z-20 bg-white shadow rounded-full p-2 hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- 轮播主体 -->
      <div class="flex items-center justify-center w-full overflow-hidden">
        <div
          v-for="(item, index) in visibleItems"
          :key="item.id"
          class="mx-3 transform transition-transform duration-300 cursor-pointer"
          :class="{
            'w-[600px] z-20 scale-100 -mx-6 shadow-xl': index === 1,
            'w-[400px] z-10 scale-95 opacity-70': index !== 1
          }"
          @click="goToDetail(item.id)"
        >
          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="w-[600px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- 右按钮 -->
      <button
        @click="next"
        class="absolute right-0 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const internationalNews = ref([
  { id: 101, title: '国外新闻一', imageUrl: '/image/news/new1.png' },
  { id: 102, title: '国外新闻二', imageUrl: '/image/news/new2.png' },
  { id: 103, title: '国外新闻三', imageUrl: '/image/news/new3.png' },
])

const currentIndex = ref(0)

const visibleItems = computed(() => {
  const list = internationalNews.value
  const len = list.length

  return [
    list[(currentIndex.value + len - 1) % len], // 左边
    list[currentIndex.value % len],             // 中间
    list[(currentIndex.value + 1) % len]        // 右边
  ]
})

function prev() {
  const len = internationalNews.value.length
  currentIndex.value = (currentIndex.value - 1 + len) % len
}

function next() {
  const len = internationalNews.value.length
  currentIndex.value = (currentIndex.value + 1) % len
}

function goToDetail(id) {
  router.push(`/news/${id}`)
}
</script>
