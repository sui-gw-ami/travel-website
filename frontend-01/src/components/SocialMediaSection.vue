<template>
  <div class="bg-white py-8 px-4">
    <div class="max-w-7xl mx-auto space-y-8">

      <!-- 标题 -->
      <div>
        <h3 class="text-center font-inter text-6xl tracking-widest mb-4 text-Languages-textblue">SNS</h3>
      </div>

      <!-- ✅ YouTube 区域 -->
      <div>
        <div class="flex items-center justify-start">
          <img src="/image/sns/youtube.png" alt="Logo" class="h-10 mb-4 px-2" />
          <h3 class="font-abril text-3xl tracking-wider mb-4 text-Languages-textblue">YOUTUBE</h3>
          <h3 class="font-inter text-md tracking-widest mb-2 px-4 text-Languages-textblue">@Xiaozhupeini</h3>
        </div>

        <div class="flex space-x-4 overflow-x-auto pb-2">
          <div
            v-for="video in videos"
            :key="video.id"
            class="w-96 flex-shrink-0 rounded-lg shadow overflow-hidden hover:shadow-lg transition"
          >
            <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-auto" />
            </a>
            <!-- <div class="p-2">
              <p class="text-sm text-gray-700">{{ video.title }}</p>
            </div> -->
          </div>
        </div>
      </div>

      <!-- ✅ Instagram 区域 -->
      <div>
        <div class="flex items-center justify-start">
          <img src="/image/sns/ins.png" alt="Logo" class="h-10 mb-4 px-2" />
          <h3 class="font-abril text-3xl tracking-wider mb-4 text-Languages-textblue">INSTAGRAM</h3>
          <h3 class="font-inter text-md tracking-widest mb-2 px-4 text-Languages-textblue">@Xiaozhupeini</h3>
        </div>
        <div class="flex h-96 space-x-4 overflow-x-auto pb-2">
          <div
            v-for="insvideo in insvideos"
            :key="insvideo.embedId"
            class="block w-[300px] flex-shrink-0"
          >
            <a :href="insvideo.postUrl" target="_blank">
              <img
                :src="insvideo.thumbnailUrl || '/image/placeholder.png'"
                class="rounded shadow"
              />
            </a>
            <!-- 可选显示 caption -->
            <!-- <p class="text-xs mt-1">{{ p.caption }}</p> -->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const videos = ref([])
const insvideos = ref([])

// Instagram 视频 ID
const embedIds = [
  'DK4nlJ8TNft',
  'BEVf9_rP_6q',
  ' '
]

onMounted(async () => {
  try {
    // 获取 YouTube 视频
    const youtubeRes = await axios.get('/api/youtube/latest')
    const youtubeData = youtubeRes.data
    videos.value = youtubeData.map(item => ({
      id: item.videoId,
      title: item.title,
      thumbnail: item.thumbnailUrl
    }))
  } catch (error) {
    console.error(t('error.failedToGetYoutube'), error)
  }

  try {
    // 获取 Instagram embedId 列表
    const res = await axios.get('/api/instagram')
    insvideos.value = res.data
  } catch (err) {
    console.error(t('error.failedToGetTikTok'), err)
  }
})
</script>

<style scoped>
::-webkit-scrollbar {
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
</style>
