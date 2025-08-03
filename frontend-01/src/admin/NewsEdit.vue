<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">{{ isEdit ? '编辑新闻' : '新增新闻' }}</h2>

    <form @submit.prevent="submit">
      <div class="mb-4">
        <label class="block mb-1">标题</label>
        <input v-model="news.title" class="w-full border px-3 py-2 rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1">内容</label>
        <textarea v-model="news.content" rows="6" class="w-full border px-3 py-2 rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1">类型</label>
        <select v-model="news.category" class="w-full border px-3 py-2 rounded" required>
          <option value="国内">国内</option>
          <option value="国外">国外</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block mb-1">发布日期</label>
        <input type="date" v-model="news.date" class="w-full border px-3 py-2 rounded" required />
      </div>

      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        提交
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const isEdit = !!route.params.id

const news = ref({
  title: '',
  content: '',
  category: '国内',
  date: ''
})

onMounted(async () => {
  if (isEdit) {
    const res = await axios.get(`/api/admin/news/${route.params.id}`)
    news.value = res.data
  }
})

const submit = async () => {
  if (isEdit) {
    await axios.put(`/api/admin/news/${route.params.id}`, news.value)
  } else {
    await axios.post('/api/admin/news', news.value)
  }
  router.push('/manage/newsList')
}
</script>
