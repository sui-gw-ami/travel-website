<template>
  <div class="max-w-full sm:max-w-7xl mx-auto font-source py-4 sm:py-6 px-4">
    <!-- 导航栏 -->
    <nav class="h-[80px] sm:h-[100px] w-full">
      <div class="max-w-full sm:max-w-7xl mx-auto py-2 flex justify-between items-center">
        <RouterLink to="/" class="flex items-center space-x-2">
          <img src="/image/logo/logo.png" alt="Logo" class="h-10 sm:h-12" />
        </RouterLink>
        <div class="flex space-x-4 sm:space-x-6">
          <LanguageDropdown />
        </div>
      </div>
    </nav>

    <div class="border-t my-4"></div>

    <!-- 主体内容 -->
    <div class="grid grid-cols-12 gap-4 sm:gap-6 sm:ml-[100px]">
      <!-- 左侧主新闻内容 -->
      <div class="col-span-12 md:col-span-9">
        <div v-if="news">
          <h3 class="text-2xl sm:text-3xl mb-4 leading-snug">{{ news.title }}</h3>
          <div class="flex flex-col sm:flex-row flex-wrap text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4 mb-4">
            <p>{{ formatDate(news.time) }}</p>
            <p v-if="news.from">{{ $t('newsDetal.from') }}{{ news.from }}</p>
            <p v-if="news.releaseAddress">{{ $t('newsDetal.releaseAddress') }}{{ news.releaseAddress }}</p>
          </div>

          <!-- 动态图文内容 -->
          <div class="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
            <template v-for="(block, index) in news.content" :key="index">
              <p
                v-if="block.type === 'text'"
                class="text-base sm:text-lg"
                v-html="block.value"
              ></p>
              <img
                v-else-if="block.type === 'image'"
                :src="block.value"
                alt=""
                class="w-full rounded-xl shadow"
              />
            </template>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-500">{{ $t('error.newNotExist') }}</p>
        </div>
      </div>

      <!-- 右侧热门新闻 -->
      <div class="col-span-12 md:col-span-3 mt-6 md:mt-0">
        <h4 class="text-lg sm:text-xl font-semibold font-source mb-4">
          {{ $t('newsDetal.hotNews') }}
        </h4>
        <ul class="space-y-2 text-blue-700">
          <li v-for="item in hotList" :key="item.id">
            <RouterLink
              :to="`/news/${item.id}`"
              class="hover:underline text-sm sm:text-base block font-source"
            >
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import LanguageDropdown from './LanguageDropdown.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const route = useRoute()
const news = ref(null)
const hotList = ref([])

onMounted(() => {
  fetchNews(route.params.id)
  fetchHotNews()
})

watch(() => route.params.id, (newId) => {
  fetchNews(newId)
})

async function fetchNews(id) {
  try {
    const res = await axios.get(`/api/news/${id}`)
    news.value = res.data
  } catch (error) {
    console.error(t('error.failedToGetNew'), error)
  }
}

async function fetchHotNews() {
  try {
    const hotRes = await axios.get('/api/news/hot')
    hotList.value = hotRes.data
  } catch (error) {
    console.error(t('error.failedToGetHotNew'), error)
  }
}

function formatDate(time) {
  const str = time.toString()
  return `${str.slice(0, 4)}-${str.slice(4, 6)}-${str.slice(6, 8)}`
}
</script>
