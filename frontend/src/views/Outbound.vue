<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <div class="flex gap-6">
      <!-- 左侧导航 -->
      <aside class="w-72 sticky top-24 h-fit bg-white border border-blue-100 shadow rounded-xl p-3">
        <div v-for="country in countries" :key="country.name" class="mb-3">
          <button
            class="w-full text-left px-4 py-2 font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition"
            @click="toggleCountry(country.name)"
          >
            {{ country.name }}
          </button>
          <ul
            v-show="expandedCountry === country.name"
            class="mt-2 ml-2 space-y-1 transition-all duration-300"
          >
            <li
              v-for="tour in country.tours"
              :key="tour.id"
              class="border-l-2 border-blue-300 pl-2"
            >
              <a
                href="#"
                class="block px-2 py-1 rounded hover:bg-blue-100 transition"
                :class="{ 'bg-blue-200 font-semibold text-blue-800': selectedId === tour.id }"
                @click.prevent="selectTour(tour.id)"
              >
                {{ tour.title }}
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <!-- 内容展示区 -->
      <main class="flex-1">
        <div
          v-if="selectedTour"
          class="border border-blue-100 rounded-xl shadow bg-white flex flex-col"
        >
          <!-- 固定标题区 -->
          <div class="relative top-0 px-6 py-4 border-b border-yellow-100 bg-white">
            <h2 class="text-2xl font-bold mb-2 text-[#6B4F1D]">{{ selectedTour.title }}</h2>
            <p class="text-gray-700 mb-4">{{ selectedTour.summary }}</p>
            <button
              class="absolute right-6 bottom-4 bg-yellow-500 text-white py-1 px-4 rounded-lg hover:bg-yellow-600 transition"
              @click="applyNow"
            >
            立即预约
            </button>
          </div>

          <!-- 每日行程 -->
          <div class="px-6 py-6 space-y-4">
            <TourDetails :items="selectedTour.days" :defaultExpanded="true" />
          </div>
        </div>
        <div v-else class="text-center text-gray-400 mt-12 text-lg">
          请选择一个行程查看详情
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TourDetails from '@/views/outbound/OutBoundTourDetails.vue'
import outboundData from '@/assets/data/outboundTours.json'

const countries = ref(outboundData.countries)
const expandedCountry = ref(null)
const selectedId = ref(null)

const toggleCountry = (name) => {
  expandedCountry.value = expandedCountry.value === name ? null : name
}

const selectTour = (id) => {
  selectedId.value = id
}

const selectedTour = computed(() => {
  for (const country of countries.value) {
    const found = country.tours.find((t) => t.id === selectedId.value)
    if (found) return found
  }
  return null
})
</script>
