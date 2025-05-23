<template>
  <div class="space-y-4">
    <div
      v-for="(day, index) in items"
      :key="index"
      class="border border-outbound-primary/20 rounded-xl shadow-sm overflow-hidden transition-all"
    >
      <!-- 标题按钮 -->
      <button
        class="w-full flex justify-between items-center px-5 py-3 bg-outbound-light hover:bg-outbound-primary/10 transition-colors duration-200 text-left"
        @click="toggle(index)"
      >
        <span class="font-semibold text-base text-outbound-secondary">
          {{ $t('tour.day', { day: index + 1 }) }}：{{ day.place }}
        </span>
        <!-- 图标使用出境主题色 -->
        <svg
          :class="{ 'rotate-90': isOpen(index) }"
          class="w-5 h-5 text-outbound-primary transition-transform duration-200 transform"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- 展开内容 -->
      <div v-show="isOpen(index)" class="bg-white px-5 py-4 border-t border-outbound-primary/10 text-sm space-y-2 text-gray-700">
        <p class="flex items-start gap-2">
          <span class="font-semibold text-outbound-secondary">{{ $t('tour.time') }}：</span>
          {{ day.time }}
        </p>
        <p>
          <span class="font-semibold text-outbound-secondary">{{ $t('tour.transport') }}：</span>
          {{ day.transport }}
        </p>
        <p>
          <span class="font-semibold text-outbound-secondary">{{ $t('tour.meals') }}：</span>
          {{ day.meals }}
        </p>
        <p>
          <span class="font-semibold text-outbound-secondary">{{ $t('tour.hotel') }}：</span>
          {{ day.hotel }}
        </p>
        <p>
          <span class="font-semibold text-outbound-secondary">{{ $t('tour.description') }}：</span>
          {{ day.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  defaultExpanded: {
    type: Boolean,
    default: true
  }
})

const expanded = ref(props.items.map(() => props.defaultExpanded))

watch(
  () => props.items,
  (newItems) => {
    expanded.value = newItems.map(() => props.defaultExpanded)
  },
  { immediate: true }
)

function toggle(index) {
  expanded.value[index] = !expanded.value[index]
}

function isOpen(index) {
  return expanded.value[index]
}
</script>