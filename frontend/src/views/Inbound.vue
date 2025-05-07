<template>
  <div class="max-w-7xl mx-auto px-4 py-0">
    <div class="flex gap-6">
      <!-- 左侧导航栏 -->
      <aside class="w-64 sticky top-24 h-fit p-0 bg-[#FFF8E1] border border-yellow-200 shadow-md rounded-lg">
        <h2 class="text-lg  text-[#6B4F1D] flex items-center mb-1 border-b border-yellow-300 p-1 pb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-[#FBC02D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          行程导航
        </h2>

        <ul class="space-y-0 pt-0">
          <li v-for="tour in tours" :key="tour.id" class="border-b border-yellow-200 last:border-none">
            <a
              href="#"
              class="block py-2 px-3 transition-all duration-200 hover:bg-[#FFECB3] hover:text-[#6B4F1D]"
              :class="{'bg-[#FFE082] text-[#6B4F1D] shadow-inner': selectedId === tour.id
              }"
              @click.prevent="selectTour(tour.id)"
            >
              {{ tour.title }}
            </a>
          </li>
        </ul>
      </aside>

      <!-- 右侧内容部分 -->
      <main class="flex-1 p-1">
        <div class="border border-yellow-200 rounded-xl shadow-sm bg-white flex flex-col">
          <!-- 标题部分 -->
          <div class="relative top-0 px-6 py-4 border-b border-yellow-100 bg-white">
            <h2 class="text-2xl font-bold mb-2 text-[#6B4F1D]">{{ selectedTour.title }}</h2>
            <p class="text-gray-700 mb-4">{{ selectedTour.summary }}</p>
            <!-- 预定按钮 -->
            <button
              class="absolute right-6 bottom-4 bg-yellow-500 text-white py-1 px-4 rounded-lg hover:bg-yellow-600 transition"
              @click="applyNow"
            >
            立即预约
            </button>
          </div>
          <div class="px-6 py-4 space-y-4 flex-1">
            <TourDetails :items="selectedTour.days" :defaultExpanded="true" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TourDetails from '@/views/inbound/InBoundTourDetails.vue'
import data from '@/assets/data/dalianTours.json'

const tours = ref(data.dalianTours)
const selectedId = ref(tours.value[0]?.id || null)

const selectedTour = computed(() =>
  tours.value.find((t) => t.id === selectedId.value)
)

function selectTour(id) {
  selectedId.value = id
}

</script>

