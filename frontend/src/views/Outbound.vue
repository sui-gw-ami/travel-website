<template>
  <div class="flex flex-col lg:flex-row gap-6 px-4 py-6 max-w-7xl mx-auto">
    <!-- 左侧导航栏：按国家分类 -->
    <aside class="w-full lg:w-64 sticky top-24 h-fit bg-[#FFFDE7] border border-yellow-200 shadow-md rounded-lg">
      <h2 class="text-lg text-[#F57F17] p-3 border-b border-yellow-300 flex items-center gap-2">
        🌍 出境导航
      </h2>
      <ul class="space-y-0">
        <li v-for="group in outboundTours" :key="group.country" class="border-b border-yellow-100">
          <div class="font-bold text-[#8D6E63] px-3 py-2 bg-yellow-50">{{ group.country }}</div>
          <ul>
            <li v-for="tour in group.tours" :key="tour.id">
              <router-link
                :to="`/outbound/${tour.id}`"
                class="block py-2 px-4 hover:bg-yellow-100 transition"
                :class="{'bg-yellow-200 text-[#4E342E] shadow-inner': selectedId === tour.id}"
              >
                {{ tour.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>

    <!-- 右侧内容 -->
    <main class="flex-1 space-y-6">
      <section v-if="selectedTour">
        <h1 class="text-2xl font-bold text-[#6D4C41] mb-4">{{ selectedTour.title }}</h1>
        <p class="text-[#5D4037] mb-2">{{ selectedTour.summary }}</p>

        <TourDetails :items="selectedTour.days" :defaultExpanded="true" />

        <div class="mt-6 text-right">
          <button class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded shadow">
            立即预约
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TourDetails from '@/views/outbound/OutBoundTourDetails.vue'
import outboundData from '@/assets/data/outboundTours.json'

const route = useRoute()
const router = useRouter()

const outboundTours = ref(outboundData.outboundTours)

const flatTours = computed(() =>
  outboundTours.value.flatMap(group => group.tours)
)

const selectedId = ref(null)

const selectedTour = computed(() =>
  flatTours.value.find(t => t.id === selectedId.value)
)

watch(
  () => route.params.id,
  (newId) => {
    if (newId && flatTours.value.find(t => t.id === newId)) {
      selectedId.value = newId
    } else {
      selectedId.value = flatTours.value[0]?.id
      router.replace(`/outbound/${selectedId.value}`)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { immediate: true }
)
</script>
