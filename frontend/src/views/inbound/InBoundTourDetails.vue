<template>
  <div class="space-y-4">
    <div
      v-for="(day, index) in items"
      :key="index"
      class="border border-yellow-200 rounded-xl shadow-sm overflow-hidden transition-all"
    >
      <!-- 标题按钮 -->
      <button
        class="w-full flex justify-between items-center px-5 py-2 bg-[#FFF8E1] hover:bg-[#FFE082] transition-colors duration-200 text-left"
        @click="toggle(index)"
      >
        <span class="font-semibold text-base text-[#6B4F1D]">
          第{{ index + 1 }}天：{{ day.place }}
        </span>
        <!-- 简洁图标：右箭头，展开后向下 -->
        <svg
          :class="{ 'rotate-90': isOpen(index) }"
          class="w-5 h-5 text-yellow-600 transition-transform duration-200 transform"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- 展开内容 -->
      <div v-show="isOpen(index)" class="bg-white px-5 py-4 border-t border-yellow-100 text-sm space-y-2 text-gray-700">
        <p class="flex items-start gap-2"><span class="font-semibold text-[#6B4F1D]">时间：</span>{{ day.time }}</p>
        <p><span class="font-semibold text-[#6B4F1D]">交通：</span>{{ day.transport }}</p>
        <p><span class="font-semibold text-[#6B4F1D]">用餐：</span>{{ day.meals }}</p>
        <p><span class="font-semibold text-[#6B4F1D]">住宿：</span>{{ day.hotel }}</p>
        <p><span class="font-semibold text-[#6B4F1D]">详细介绍：</span>{{ day.description }}</p>
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
  { immediate: true } // 首次加载时也执行
)

// 切换展开/折叠状态
function toggle(index) {
  expanded.value[index] = !expanded.value[index]
}

// 判断某个行程是否展开
function isOpen(index) {
  return expanded.value[index]
}
</script>
