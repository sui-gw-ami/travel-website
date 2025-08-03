<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">新闻管理</h1>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        @click="goToCreate"
      >
        新建新闻
      </button>
    </div>

    <table class="w-full border">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-4 py-2">标题</th>
          <th class="border px-4 py-2">类型</th>
          <th class="border px-4 py-2">发布日期</th>
          <th class="border px-4 py-2">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="news in newsList" :key="news.id">
          <td class="border px-4 py-2">{{ news.title }}</td>
          <td class="border px-4 py-2">{{ news.domestic ? '国内' : '国外' }}</td>
          <td class="border px-4 py-2">{{ news.date }}</td>
          <td class="border px-4 py-2">
            <button class="text-blue-500 mr-2" @click="editNews(news.id)">编辑</button>
            <button class="text-red-500" @click="deleteNews(news.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const newsList = ref([])

const fetchNews = async () => {
  const res = await axios.get('/api/news')
  newsList.value = res.data
}

const editNews = (id) => {
  router.push(`/manage/news/edit/${id}`)
}

const deleteNews = async (id) => {
  if (confirm('确定要删除吗？')) {
    await axios.delete(`/api/news/${id}`)
    await fetchNews()
  }
}

const goToCreate = () => {
  router.push('/manage/news/create')
}

onMounted(fetchNews)
</script>
