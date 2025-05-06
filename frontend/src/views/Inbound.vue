<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex">
      <!-- 左侧导航栏 -->
      <aside class="w-64 sticky top-24 h-fit p-4 bg-gray-50 border-r">
        <ul>
          <li v-for="tour in tours" :key="tour.id">
            <a
              href="#"
              class="block py-1 px-2 hover:text-yellow-500 transition rounded"
              :class="{
                'bg-yellow-100 text-yellow-700 font-semibold': selectedId === tour.id
              }"
              @click.prevent="selectTour(tour.id)"
            >
              {{ tour.title }}
            </a>
          </li>
        </ul>
      </aside>

      <!-- 内容部分 -->
      <main class="flex-1 p-6">
        <section
          v-if="selectedTour"
          :id="selectedTour.id"
          class="mb-12"
        >
          <h2 class="text-2xl font-bold mb-4">{{ selectedTour.title }}</h2>
          <p class="mb-6 text-gray-700">{{ selectedTour.summary }}</p>

          <TourDetails :items="selectedTour.days" :defaultExpanded="true" />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TourDetails from '@/views/inbound/TourDetails.vue'
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

