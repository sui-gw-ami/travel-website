<template>
  <div class="bg-white py-6 px-2 sm:py-8 sm:px-4">
    <div class="max-w-7xl mx-auto space-y-6 sm:space-y-8">

      <!-- 标题 -->
      <div>
        <h3 class="text-center font-inter text-3xl sm:text-6xl tracking-widest mb-4 text-Languages-textblue">
          SNS
        </h3>
      </div>

      <!-- ✅ YouTube 区域 -->
      <div>
        <div class="flex flex-wrap items-center justify-start text-center sm:text-left">
          <img src="/image/sns/youtube.png" alt="Logo" class="h-8 sm:h-10 mb-2 sm:mb-4 px-2" />
          <h3 class="font-abril text-xl sm:text-3xl tracking-wider mb-2 sm:mb-4 text-Languages-textblue">YOUTUBE</h3>
          <h3 class="font-inter text-sm sm:text-md tracking-widest mb-1 sm:mb-2 px-4 text-Languages-textblue">@Xiaozhupeini</h3>
        </div>

        <!-- 横向视频滑动 -->
        <div class="flex space-x-4 overflow-x-auto snap-x snap-mandatory pb-2">
          <div
            v-for="video in videos"
            :key="video.id"
            class="flex-none min-w-full sm:min-w-[350px] sm:w-[350px] rounded-lg shadow overflow-hidden hover:shadow-lg transition snap-center"
          >
            <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-auto" />
            </a>
          </div>
        </div>
      </div>

      <!-- ✅ Instagram 区域 -->
      <div>
        <div class="flex flex-wrap items-center justify-start text-center sm:text-left">
          <img src="/image/sns/ins.png" alt="Logo" class="h-8 sm:h-10 mb-2 sm:mb-4 px-2" />
          <h3 class="font-abril text-xl sm:text-3xl tracking-wider mb-2 sm:mb-4 text-Languages-textblue">INSTAGRAM</h3>
          <h3 class="font-inter text-sm sm:text-md tracking-widest mb-1 sm:mb-2 px-4 text-Languages-textblue">@Xiaozhupeini</h3>
        </div>

        <!-- 横向视频滑动 -->
        <div class="flex h-64 sm:h-96 space-x-4 overflow-x-auto snap-x snap-mandatory pb-2">
          <div
            v-for="insvideo in insvideos"
            :key="insvideo.embedId"
            class="flex-none min-w-full sm:min-w-[300px] sm:w-[300px] rounded shadow snap-center"
          >
            <a :href="insvideo.postUrl" target="_blank">
              <img
                :src="insvideo.thumbnailUrl || '/image/placeholder.png'"
                class="rounded w-full h-auto"
              />
            </a>
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

onMounted(async () => {
  try {
    const youtubeRes = await axios.get('/api/youtube/latest')
    videos.value = youtubeRes.data.map(item => ({
      id: item.videoId,
      title: item.title,
      thumbnail: item.thumbnailUrl
    }))
  } catch (error) {
    console.error(t('error.failedToGetYoutube'), error)
  }

  try {
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
