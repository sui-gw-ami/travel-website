<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">新闻管理</h2>
    <div class="mb-4">
      <button @click="goCreate" class="bg-blue-500 text-white px-4 py-2 rounded">新增新闻</button>
    </div>
    <table class="min-w-full border">
      <thead>
        <tr class="bg-gray-100">
          <th class="border px-4 py-2">ID</th>
          <th class="border px-4 py-2">标题</th>
          <th class="border px-4 py-2">类型</th>
          <th class="border px-4 py-2">发布时间</th>
          <th class="border px-4 py-2">浏览量</th>
          <th class="border px-4 py-2">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="news in newsList" :key="news.id">
          <td class="border px-4 py-2">{{ news.id }}</td>
          <td class="border px-4 py-2">{{ news.title }}</td>
          <td class="border px-4 py-2">{{ news.news_type }}</td>
          <td class="border px-4 py-2">{{ formatDate(news.time) }}</td>
          <td class="border px-4 py-2">{{ news.views }}</td>
          <td class="border px-4 py-2 space-x-2">
            <button @click="editNews(news.id)" class="bg-green-500 text-white px-2 py-1 rounded">编辑</button>
            <button @click="deleteNews(news.id)" class="bg-red-500 text-white px-2 py-1 rounded">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'NewsList',
  setup() {
    const router = useRouter()
    const newsList = Vue.ref([])

    const loadNews = async () => {
      const res = await axios.get('/api/news')
      newsList.value = res.data
    }

    const goCreate = () => {
      router.push('/manage/news/create')
    }

    const editNews = (id) => {
      router.push(`/manage/news/edit/${id}`)
    }

    const deleteNews = async (id) => {
      if (confirm('确定删除这条新闻吗？')) {
        await axios.delete(`/api/news/${id}`)
        await loadNews()
      }
    }

    const formatDate = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleString()
    }

    Vue.onMounted(loadNews)

    return { newsList, goCreate, editNews, deleteNews, formatDate }
  }
}
</script>
