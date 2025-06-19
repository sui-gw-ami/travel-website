<template>
  <div class="bg-white py-8 px-4">
    <div class="max-w-7xl mx-auto space-y-8">
      <div>
        <h3 class="text-center font-inter text-6xl tracking-widest mb-4 text-Languages-textblue">SNS</h3>
      </div>
      
      <!-- YouTube 区域 -->
      <div>
        <div class="flex items-center justify-start">
          <img src="/image/sns/youtube.png" alt="Logo" class="h-10 mb-4 px-2" />
          <h3 class="font-abril text-3xl tracking-wider mb-4 text-Languages-textblue">YOUTUBE</h3>
          <h3 class="font-inter text-md tracking-widest mb-2 px-4 text-Languages-textblue">@Xiaozhupeini</h3>
        </div>

        <div class="flex space-x-8 overflow-x-auto pb-2">
          <!-- 视频项（预留3个） -->
                     <div
            v-for="n in 3"
            :key="'ins-' + n"
            class="flex w-96 h-56 bg-gray-200 rounded-xl items-center justify-center"
          >
          </div>
          <!-- <div v-for="video in videos" :key="video.id" class="flex items-center space-x-20">
            <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank" class="block w-96">
              <img :src="video.thumbnail" class="w-full h-auto rounded" />
            </a>
          </div> -->
        </div>
      </div>

      <!-- Instagram 区域 -->
      <div>
        <div class="flex items-center justify-start">
          <img src="/image/sns/ins.png" alt="Logo" class="h-10 mb-4 px-2" />
          <h3 class="font-abril text-3xl tracking-wider mb-4 text-Languages-textblue">INSTAGRAM</h3>
          <h3 class="font-inter text-md tracking-widest mb-2 px-4 text-Languages-textblue">@Xiaozhupeini</h3>
        </div>
        <div class="flex h-96 space-x-2 overflow-x-auto pb-2">
          <!-- 视频项（预留3个） -->
          <div
            v-for="id in embedIds"
            :key="id"
            class="block h-[500px] bg-gray-200 items-start"
          >
            <iframe
              :src="`https://www.instagram.com/p/${id}/embed`"
              width="100%"
              height="450"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
              allow="encrypted-media"
              class="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videos = ref([])

// youtubeID
const API_KEY = 'AIzaSyA5Z0D-TorjiNf2ht8yJrPxcdWmVIMkW6g' 
const CHANNEL_ID = 'UCqMg-BJ0Zs93kg3pDmqZZ0g'

// INS视频ID
const embedIds = [
  'DK4nlJ8TNft',
  'BEVf9_rP_6q',
  'DH3PpUItTZH'
]

onMounted(async () => {
  try {
    const res = await fetch('/api/youtube/videos');
    const data = await res.json();
    console.log(data); // 包含 videoId、title、thumbnail 等
    videos.value = data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url
    }))
  } catch (error) {
    console.error('获取 YouTube 视频失败', error)
  }
})
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
