<template>
  <div class="bg-white py-8 px-4">
    <div class="max-w-7xl mx-auto space-y-8">
      <div>
        <h3 class="text-center text-xl font-semibold mb-4 text-red-600">SNS</h3>
      </div>
      
      <!-- YouTube 区域 -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-red-600">SNS</h3>
        <div class="flex space-x-4 overflow-x-auto pb-2">
          <!-- 视频项（预留3个） -->
          <div
            v-for="n in 3"
            :key="'yt-' + n"
            class="min-w-[400px] h-[200px] bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center"
          >
            <span class="text-gray-500">YouTube 视频 {{ n }}</span>
          </div>
        </div>
      </div>

      <!-- Instagram 区域 -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-pink-500">Instagram 最新视频</h3>
        <div class="flex space-x-4 overflow-x-auto pb-2">
          <!-- 视频项（预留3个） -->
          <div
            v-for="n in 3"
            :key="'ins-' + n"
            class="min-w-[300px] h-[170px] bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center"
          >
            <span class="text-gray-500">Instagram 视频 {{ n }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 后续接 API 或 props 传入内容
</script>

<style scoped>
/* 可选：横向滚动美化 */
::-webkit-scrollbar {
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
</style>
