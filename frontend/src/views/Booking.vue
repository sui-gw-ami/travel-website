<template>
    <div class="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-2xl shadow-md border border-yellow-200">
      <h2 class="text-xl font-semibold text-yellow-700">
        {{ $t('booking.title') }}
      </h2>
  
      <div v-if="tourInfo" class="bg-yellow-50 p-4 rounded">
        <p class="text-sm text-yellow-900">
            {{ $t('booking.selectedTour') }}: <strong>{{ tourInfo.title }}</strong>
        </p>
      </div>
  
      <form @submit.prevent="handleSubmit" class="space-y-4">
  
        <!-- 中文用户(姓名) -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">{{ $t('booking.name') }} <span class="text-red-500 font-semibold">*</span></label>
          <input v-model="form.name" required type="text"
            :class="inputClass(errors.name)"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
      
        <!-- 性别 -->
        <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">{{ $t('booking.gender') }} <span class="text-red-500 font-semibold">*</span></label>
            <select v-model="form.gender" required :class="inputClass(errors.gender)">
                <option value=""></option>
                <option value="male">{{ $t('booking.male') }}</option>
                <option value="female">{{ $t('booking.female') }}</option>
            </select>
            <p v-if="errors.gender" class="text-red-500 text-sm mt-1">{{ errors.gender }}</p>
        </div>

        <!-- 人数 -->
        <div>
            <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.personCount') }} <span class="text-red-500 font-semibold">*</span></label>
            <input v-model="form.personCount" required type="number" min="1"
                :class="inputClass(errors.personCount)" />
            <p v-if="errors.personCount" class="text-red-500 text-sm mt-1">{{ errors.personCount}}</p>
        </div>

        <!-- 中文用户(电话，微信，邮箱) -->
        <div v-if="isChinese">
          <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.phone') }} <span class="text-red-500 font-semibold">*</span></label>
          <input v-model="form.phone" required type="text"
            :class="inputClass(errors.phone)"
          />
          <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>

          <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.wechat') }}</label>
          <input v-model="form.wechat" type="text" class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-yellow-300" />

          <label class="block mb-1 text-gray-700">{{ $t('booking.email') }}</label>
          <input
            v-model="form.email" type="email"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
      
        <!-- 国外用户（邮箱） -->
        <div v-else>
          <label class="block mb-1 text-gray-700">{{ $t('booking.email') }} <span class="text-red-500 font-semibold">*</span></label>
          <input
            v-model="form.email" type="email"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- 备注 -->
        <div>
          <label class="block mb-1 text-gray-700">{{ $t('booking.note') }}</label>
          <textarea v-model="form.note" rows="3" class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"></textarea>
        </div>

        <div class="flex justify-end">
          <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded transition">
            {{ $t('app.applyNow') }}
          </button>
        </div>
      </form>
  
      <!-- 弹窗提示 -->
      <div v-if="showSuccess" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-xl shadow-lg text-left">
          <p class="text-yellow-700 text-lg font-semibold">{{ $t('booking.success') }}</p>
          <button @click="goBack" class="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded">
            {{ $t('booking.back') }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import data from '@/assets/data/dalianTours.json'
  
  const route = useRoute()
  const router = useRouter()
  const { locale, t } = useI18n()
  const tourId = route.params.id
  const tourInfo = data.dalianTours.find(t => t.id === tourId)
  
  const errors = reactive({})
  const showSuccess = ref(false)
  
  const isChinese = computed(() => locale.value === 'cn')
  
  const form = reactive({
    name: '',
    firstName: '',
    lastName: '',
    gender: '',
    personCount: 1,
    phone: '',
    wechat: '',
    email: '',
    note: ''
})

  function inputClass(error) {
    return [
      'w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300',
      error ? 'border-red-500' : ''
    ]
  }
  function handleSubmit() {
  // 清空错误提示（用赋值方式，不用 delete）
  for (const key in errors) {
    errors[key] = ''
  }

  // 中文用户校验
  if (!form.name.trim()) {
    errors.name = t('booking.errors.nameRequired')
  }

  if (!form.gender) {
    errors.gender = t('booking.errors.genderRequired')
  }

  if (!form.personCount || form.personCount < 1) {
    errors.personCount = t('booking.errors.participantsInvalid')
  }

  if (isChinese.value) {
    if (!form.phone.trim()) {
      errors.phone = t('booking.errors.phoneRequired')
    } else if (!/^1[3-9]\d{9}$/.test(form.phone)) {
      errors.phone = t('booking.errors.phoneInvalid')
    }
  } else {
    if (!form.email.trim()) {
      errors.email = t('booking.errors.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = t('booking.errors.emailInvalid')
    }
  }

  // 提交判断
  const hasError = Object.values(errors).some(val => val)
  if (!hasError) {
    showSuccess.value = true
  }
}

  
  function goBack() {
      showSuccess.value = false
      Object.keys(form).forEach(k => form[k] = '') // 清空表单
      router.back()
    }
  </script>
  