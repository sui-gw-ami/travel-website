<template>
  <div class="theme-inbound">
    <div class="max-w-7xl mx-auto px-4 py-0.5">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- 左侧导航栏 - 使用入境主题色 -->
        <aside class="w-full lg:w-64 sticky top-24 h-fit bg-inbound-light border border-inbound-primary/20 shadow-lg rounded-lg overflow-hidden">
          <div class="bg-inbound-primary/10 px-4 py-3 border-b border-inbound-primary/20">
            <h2 class="text-lg font-medium text-inbound-secondary flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-inbound-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
              {{ $t('app.featuredTours') }}
            </h2>
          </div>

          <ul class="divide-y divide-inbound-primary/10">
            <li v-for="tour in tours" :key="tour.id">
              <router-link
                :to="`/inbound/${tour.id}`"
                class="block px-4 py-2 transition-colors duration-200 hover:bg-inbound-light/50"
                :class="{
                  'bg-inbound-primary/10 text-inbound-secondary font-medium': selectedId === tour.id,
                  'text-gray-800': selectedId !== tour.id
                }"
              >
                <div class="flex items-center">
                  <span class="truncate">{{ tour.title }}</span>
                  <span 
                    v-if="tour.hot" 
                    class="ml-auto bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                  >
                    {{ $t('inbound.hotBadge') }}
                  </span>
                  <!-- 箭头 -->
                  <svg
                    v-if="selectedId === tour.id"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 ml-auto text-outbound-primary"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </router-link>
            </li>
          </ul>
        </aside>

        <!-- 右侧内容部分 - 入境主题色 -->
        <main class="flex-1">
          <div class="border border-inbound-primary/20 rounded-xl shadow-sm bg-white overflow-hidden">
            <!-- 标题部分 -->
            <div class="relative bg-gradient-to-r from-inbound-light to-inbound-light/50 px-6 py-5 border-b border-inbound-primary/20">
              <div class="pr-28">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ selectedTour.title }}</h2>
                <p class="text-gray-700">{{ selectedTour.summary }}</p>
              </div>
              <RouterLink
                :to="`/booking/${selectedTour.id}`"
                class="absolute right-6 bottom-4 bg-gradient-to-r from-inbound-primary to-inbound-primary/80 hover:from-inbound-primary/80 hover:to-inbound-primary text-white font-medium py-1.5 px-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {{ $t('app.applyNow') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </RouterLink>
            </div>

            <!-- 行程详情 -->
            <div class="px-6 py-4">
              <TourDetails 
                :items="selectedTour.days" 
                :defaultExpanded="true"
                class="border-t border-inbound-primary/10 pt-4"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TourDetails from '@/views/inbound/InBoundTourDetails.vue'
import data from '@/assets/data/dalianTours.json'

const route = useRoute()
const router = useRouter()

const tours = ref(data.dalianTours.map(tour => ({
  ...tour,
  hot: tour.tags?.includes('hot') || false
})))

const selectedId = ref(null)

const selectedTour = computed(() => 
  tours.value.find((t) => t.id === selectedId.value) || tours.value[0]
)

watch(
  () => route.params.id,
  async (newId) => {
    const validTour = tours.value.find(t => t.id === newId)
    selectedId.value = validTour ? newId : tours.value[0]?.id
    
    if (!validTour && tours.value.length > 0) {
      router.replace(`/inbound/${tours.value[0].id}`)
    }
    
    await nextTick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { immediate: true }
)
</script>

<style scoped>
/* 自定义滚动条（入境主题色） */
aside ul {
  scrollbar-width: thin;
  scrollbar-color: theme('colors.inbound.primary') transparent;
}
aside ul::-webkit-scrollbar {
  width: 6px;
}
aside ul::-webkit-scrollbar-thumb {
  background-color: theme('colors.inbound.primary');
  border-radius: 3px;
}

/* 路由链接过渡效果 */
.router-link-active {
  transition: all 0.2s ease;
}
</style>