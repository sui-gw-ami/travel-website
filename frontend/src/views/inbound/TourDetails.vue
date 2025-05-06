<template>
  <div class="space-y-4">
    <div v-for="(day, index) in items" :key="index" class="border rounded-lg shadow-sm">
      <button
        class="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition text-left"
        @click="toggle(index)"
      >
        <span class="font-semibold text-base">第{{ index + 1 }}天：{{ day.title }}</span>
        <svg
          :class="{'transform rotate-180': isOpen(index)}"
          class="w-5 h-5 text-gray-500 transition-transform"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-show="isOpen(index)" class="px-4 py-3 bg-white border-t text-sm space-y-2">
        <p><strong>地点：</strong>{{ day.place }}</p>
        <p><strong>交通：</strong>{{ day.transport }}</p>
        <p><strong>时间：</strong>{{ day.time }}</p>
        <p><strong>详细介绍：</strong>{{ day.description }}</p>
        <p><strong>用餐：</strong>{{ day.meals }}</p>
        <p><strong>住宿：</strong>{{ day.hotel }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

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

// 切换展开/折叠状态
function toggle(index) {
  expanded.value[index] = !expanded.value[index]
}

// 判断某个行程是否展开
function isOpen(index) {
  return expanded.value[index]
}
</script>
