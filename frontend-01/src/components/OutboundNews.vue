<template>
  <section class="p-4 sm:p-6">
    <div class="relative flex items-center justify-center">
      <!-- 左按钮 -->
      <button
        @click="prev"
        class="absolute left-0 z-20 bg-white shadow rounded-full p-1 sm:p-2 hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- 轮播主体 -->
      <div class="flex items-center justify-center w-full overflow-hidden">
        <div
          v-for="(item, index) in visibleItems"
          :key="item.id"
          class="mx-1 sm:mx-3 transform transition-transform duration-300 cursor-pointer"
          :class="{
            'w-[250px] h-[150px] sm:w-[600px] sm:h-[400px] z-20 scale-100 sm:scale-100 -mx-2 sm:-mx-6 shadow-xl': index === 1,
            'w-[200px] h-[120px] sm:w-[400px] sm:h-[300px] z-10 scale-90 opacity-70': index !== 1
          }"
          @click="goToDetail(item.id)"
        >
          <img
            :src="`http://localhost:8080/${item.showImage}`"
            :alt="item.title"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- 右按钮 -->
      <button
        @click="next"
        class="absolute right-0 z-10 bg-white shadow rounded-full p-1 sm:p-2 hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const router = useRouter()
const internationalNews = ref([])

async function fetchNews() {
  try {
    const { data } = await axios.get('/api/news/outsideNews')
    internationalNews.value = data
  } catch (error) {
    console.error(t('error.failedToGetNew'), error)
  }
}

function goToDetail(id) {
  router.push({ name: 'NewsDetails', params: { id } })
}

onMounted(() => {
  fetchNews()
})

const currentIndex = ref(0)

const visibleItems = computed(() => {
  const list = internationalNews.value
  const len = list.length
  if (len === 0) return []

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
</script>
