<template>
  <div class="bg-yellow-400 relative overflow-visible">
    <!-- 图片层 -->
    <div class="max-w-6xl mx-auto px-4 py-2 relative">
      <img
        src="/image/other/pig.png"
        alt="Logo"
        class="h-20 sm:h-32 absolute bottom-[-40px] sm:bottom-[-55px] left-0"
      />
    </div>

    <!-- 时间文字区域 -->
    <div
      class="max-w-7xl mx-auto px-2 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center font-source text-sm sm:text-base space-y-2 sm:space-y-0"
    >
      <!-- 左侧：日本时间，避免与图片重叠 -->
      <p class="sm:pl-48 pt-5 leading-snug">
        {{ $t('timeDeff.title') }}
      </p>
      
      <!-- 右侧：北京时间 -->
      <p class="whitespace-nowrap">
        {{ $t('timeDeff.chinaNow') }}{{ beijingTime }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 创建响应式时间
const beijingTime = ref(getFormattedTime())

// 每秒更新
setInterval(() => {
  beijingTime.value = getFormattedTime()
}, 1000)

// 格式化北京时间为 HH:mm
function getFormattedTime() {
  const now = new Date()
  return now.toLocaleTimeString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>
