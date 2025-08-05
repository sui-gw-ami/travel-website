<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">{{ isEdit ? '编辑新闻' : '新增新闻' }}</h2>

    <!-- 基本信息 -->
    <div class="mb-4">
      <label>标题：</label>
      <input v-model="news.title" class="border px-2 py-1 w-full" />
    </div>

    <div class="mb-4">
      <label>类型：</label>
      <input v-model="news.news_type" type="number" class="border px-2 py-1 w-full" />
    </div>

    <div class="mb-4">
      <label>封面图：</label>
      <input type="file" @change="uploadCover" />
      <div v-if="news.show_image">
        <img :src="news.show_image" class="w-40 mt-2" />
      </div>
    </div>

    <!-- 内容编辑 -->
    <div>
      <h3 class="text-lg font-bold mb-2">新闻内容</h3>
      <div v-for="(item, index) in contentList" :key="index" class="border p-2 mb-2">
        <div v-if="item.content_type === 'text'">
          <textarea v-model="item.content" rows="3" class="w-full border p-1"></textarea>
        </div>
        <div v-else>
          <input type="file" @change="uploadImage($event, index)" />
          <div v-if="item.content">
            <img :src="item.content" class="w-40 mt-2" />
          </div>
        </div>
        <button @click="removeContent(index)" class="bg-red-500 text-white px-2 py-1 mt-2 rounded">删除</button>
      </div>

      <div class="space-x-2 mt-2">
        <button @click="addText" class="bg-gray-500 text-white px-2 py-1 rounded">添加文字</button>
        <button @click="addImage" class="bg-gray-500 text-white px-2 py-1 rounded">添加图片</button>
      </div>
    </div>

    <!-- 保存 -->
    <div class="mt-4">
      <button @click="saveNews" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'NewsEdit',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const isEdit = Vue.ref(false)
    const newsId = Vue.ref(null)

    const news = Vue.reactive({
      title: '',
      news_type: '',
      show_image: '',
    })

    const contentList = Vue.ref([])

    const loadNews = async () => {
      if (route.params.id) {
        isEdit.value = true
        newsId.value = route.params.id
        const res = await axios.get(`/api/news/${newsId.value}`)
        Object.assign(news, res.data.news)
        contentList.value = res.data.contents
      }
    }

    const addText = () => {
      contentList.value.push({ content_type: 'text', content: '' })
    }

    const addImage = () => {
      contentList.value.push({ content_type: 'image', content: '' })
    }

    const removeContent = (index) => {
      contentList.value.splice(index, 1)
    }

    const uploadCover = async (event) => {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      const res = await axios.post(`/api/news/uploadCover`, formData)
      news.show_image = res.data.url
    }

    const uploadImage = async (event, index) => {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      const res = await axios.post(`/api/news/${newsId.value}/uploadImage`, formData)
      contentList.value[index].content = res.data.url
    }

    const saveNews = async () => {
      let id = newsId.value
      if (isEdit.value) {
        await axios.put(`/api/news/${id}`, news)
      } else {
        const res = await axios.post(`/api/news`, news)
        id = res.data.newsId
        newsId.value = id
      }
      await axios.post(`/api/news/${id}/content`, contentList.value)
      router.push('/manage/newsList')
    }

    Vue.onMounted(loadNews)

    return { isEdit, news, contentList, addText, addImage, removeContent, uploadCover, uploadImage, saveNews }
  }
}
</script>
