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
  
    <!-- 中文用户 -->
    <div v-if="isDomestic">
      <label class="block mb-1 text-sm font-medium text-gray-700">{{ $t('booking.name') }} *</label>
      <input v-model="form.name" type="text"
        :class="inputClass(errors.name)"
        placeholder="张三" />
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>

      <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.phone') }} *</label>
      <input v-model="form.phone" type="text"
        :class="inputClass(errors.phone)"
        placeholder="13812345678" />
      <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>

      <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.wechat') }}</label>
      <input v-model="form.wechat" type="text" class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-yellow-300" />
    </div>

    <!-- 外国用户 -->
    <div v-else>
      <label class="block mb-1 text-sm font-medium text-gray-700">{{ $t('booking.firstName') }} *</label>
      <input v-model="form.firstName" type="text"
        :class="inputClass(errors.firstName)" />
      <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>

      <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.lastName') }} *</label>
      <input v-model="form.lastName" type="text"
        :class="inputClass(errors.lastName)" />
      <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>

      <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.email') }} *</label>
      <input v-model="form.email" type="email"
        :class="inputClass(errors.email)"
        placeholder="example@mail.com" />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>
  
            <!-- 性别 -->
        <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">{{ $t('booking.gender') }} *</label>
            <select v-model="form.gender" :class="inputClass(errors.gender)">
                <option value="">{{ $t('booking.selectGender') }}</option>
                <option value="male">{{ $t('booking.male') }}</option>
                <option value="female">{{ $t('booking.female') }}</option>
            </select>
            <p v-if="errors.gender" class="text-red-500 text-sm mt-1">{{ errors.gender }}</p>
        </div>

        <!-- 人数 -->
        <div>
            <label class="block mb-1 mt-4 text-sm font-medium text-gray-700">{{ $t('booking.personCount') }} *</label>
            <input v-model.number="form.personCount" type="number" min="1"
                :class="inputClass(errors.personCount)" />
            <p v-if="errors.personCount" class="text-red-500 text-sm mt-1">{{ errors.personCount}}</p>
        </div>
        <!-- 电话 -->
        <div>
          <label class="block mb-1 text-gray-700">{{ $t('booking.phone') }} <span v-if="isChinese">*</span></label>
          <input
            v-model="form.phone"
            :required="isChinese"
            type="text"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
  
        <!-- 邮箱 -->
        <div>
          <label class="block mb-1 text-gray-700">{{ $t('booking.email') }} <span v-if="!isChinese">*</span></label>
          <input
            v-model="form.email"
            :required="!isChinese"
            type="email"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
  
        <!-- 微信 -->
        <div>
          <label class="block mb-1 text-gray-700">{{ $t('booking.wechat') }}</label>
          <input v-model="form.wechat" type="text" class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300" />
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
        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
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
  
  const form = ref({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    wechat: '',
    note: '',
    gender: '',
    participants: 1
})
  
    function inputClass(error) {
    return [
        'w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300',
        error ? 'border-red-500' : ''
    ]
    }
  function handleSubmit() {
    Object.keys(errors).forEach(k => delete errors[k])

    if (isDomestic.value) {
        if (!form.name.trim()) errors.name = t('booking.errors.nameRequired')
        if (!/^1[3-9]\d{9}$/.test(form.phone)) errors.phone = t('booking.errors.phoneInvalid')
    } else {
        if (!form.firstName.trim()) errors.firstName = t('booking.errors.firstNameRequired')
        if (!form.lastName.trim()) errors.lastName = t('booking.errors.lastNameRequired')
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = t('booking.errors.emailInvalid')
    }

    if (!form.gender) errors.gender = t('booking.errors.genderRequired')
    if (!Number.isInteger(form.participants) || form.personCount< 1) {
        errors.personCount= t('booking.errors.participantsInvalid')
    }

    if (Object.keys(errors).length === 0) {
        showSuccess.value = true
    }
  }
  
  function goBack() {
    showSuccess.value = false
    router.back()
  }
  </script>
  