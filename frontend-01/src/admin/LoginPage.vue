<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">后台登录</h2>

      <form @submit.prevent="onLogin" class="space-y-4">
        <div>
          <label class="block text-gray-700">用户名</label>
          <input
            v-model="form.username"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700">密码</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
          :disabled="loading"
        >
          {{ loading ? '登录中...' : '登录' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const form = ref({
  username: '',
  password: ''
})
const loading = ref(false)
const error = ref('')

const onLogin = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await axios.post('/api/auth/login', form.value)
    localStorage.setItem('jwtToken', res.data.token)
    router.push('/manage/newsList')
  } catch (err) {
    error.value = '用户名或密码错误'
  } finally {
    loading.value = false
  }
}
</script>
