<template>
  <div class="theme-outbound">
    <div class="max-w-7xl mx-auto px-4 py-0.5"> <!-- 增加垂直间距 -->
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- 左侧导航栏优化 -->
        <aside class="w-full lg:w-64 sticky top-24 h-fit bg-outbound-light/80 border border-outbound-primary/30 shadow-lg rounded-xl overflow-hidden backdrop-blur-sm">
          <div class="bg-gradient-to-r from-outbound-primary/10 to-outbound-primary/5 px-4 py-3 border-b border-outbound-primary/20">
            <h2 class="text-lg font-semibold text-outbound-primary flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-outbound-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              {{ $t('app.featuredTours') }}
            </h2>
          </div>

          <ul class="divide-y divide-outbound-primary/20">
            <li v-for="group in outboundTours" :key="group.country">
              <!-- 一级：国家 -->
              <div class="font-semibold text-outbound-primary px-4 py-2.5 bg-outbound-primary/10 border-t border-outbound-primary/15">
                {{ group.country }}
              </div>
              <!-- 二级：该国家的所有 tour -->
              <ul class="divide-y divide-outbound-primary/15">
                <li v-for="tour in group.tours" :key="tour.id">
                  <router-link
                    :to="`/outbound/${tour.id}`"
                    class="block pl-6 pr-4 py-2 transition-colors duration-200"
                    :class="{
                      'bg-outbound-primary/8 text-outbound-primary font-semibold': selectedId === tour.id,
                      'text-gray-700 hover:bg-outbound-primary/5 hover:text-outbound-primary': selectedId !== tour.id
                    }"
                  >
                    <div class="flex items-center">
                      <span class="truncate">{{ tour.title }}</span>

                      <!-- 热门标签 -->
                      <span 
                        v-if="tour.hot" 
                        class="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                      >
                      Hot
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
            </li>
          </ul>
        </aside>

        <!-- 右侧内容优化 -->
        <main class="flex-1">
          <div class="border border-outbound-primary/15 rounded-xl shadow-sm bg-white/95 backdrop-blur-sm overflow-hidden">
            <!-- 标题部分 -->
            <div class="relative bg-gradient-to-r from-outbound-primary/30 to-outbound-primary/15 px-6 py-5 border-b border-outbound-primary/15">
              <div class="pr-28">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ selectedTour.title }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ selectedTour.summary }}</p>
              </div>
              <RouterLink
                @click="applyNow"
                class="absolute right-6 bottom-4 bg-gradient-to-r from-outbound-primary to-outbound-primary/80 hover:from-outbound-primary/90 hover:to-outbound-primary/90 text-white font-medium py-1.5 px-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {{ $t('app.applyNow') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </RouterLink>
            </div>

            <!-- 行程详情 -->
            <div class="px-6 py-3">
              <TourDetails 
                :items="selectedTour.days" 
                :defaultExpanded="true"
                class="border-t border-outbound-primary/10 pt-4"
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
import TourDetails from '@/views/outbound/OutBoundTourDetails.vue'
import outboundData from '@/assets/data/outboundTours.json'

const route = useRoute()
const router = useRouter()

const outboundTours = ref(outboundData.outboundTours.map(group => ({
  ...group,
  tours: group.tours.map(tour => ({
    ...tour,
    hot: tour.tags?.includes('hot') || false
  }))
})))

const flatTours = computed(() =>
  outboundTours.value.flatMap(group => group.tours)
)

const selectedId = ref(null)

const selectedTour = computed(() =>
  flatTours.value.find(t => t.id === selectedId.value) || flatTours.value[0]
)

watch(
  () => route.params.id,
  async (newId) => {
    const validTour = flatTours.value.find(t => t.id === newId)
    selectedId.value = validTour ? newId : flatTours.value[0]?.id
    
    if (!validTour && flatTours.value.length > 0) {
      router.replace(`/outbound/${flatTours.value[0].id}`)
    }
    
    await nextTick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { immediate: true }
)

const applyNow = () => {
  router.push(`/booking/outbound/${selectedId.value}`)
}
</script>

<style scoped>
/* 优化滚动条 */
aside ul {
  scrollbar-width: thin;
  scrollbar-color: theme('colors.outbound.primary/30') transparent;
}
aside ul::-webkit-scrollbar-thumb {
  background-color: theme('colors.outbound.primary/30');
  &:hover {
    background-color: theme('colors.outbound.primary/50');
  }
}

/* 路由链接过渡效果 */
.router-link-active {
  transition: all 0.2s ease;
}
</style>