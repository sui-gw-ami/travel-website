<template>
  <div class="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-2xl shadow-lg border border-yellow-100">
    <!-- 标题区 -->
    <div class="text-center">
      <h2 class="text-2xl font-bold text-yellow-700">
        {{ $t('booking.title') }}
      </h2>
      <div class="w-16 h-1 mx-auto bg-yellow-400 mt-2 rounded-full"></div>
    </div>

    <!-- 已选行程提示 -->
    <div v-if="tourInfo" class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start">
      <svg class="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
      </svg>
      <p class="text-sm text-yellow-800">
        {{ $t('booking.selectedTour') }}: <strong class="font-semibold">{{ tourInfo.title }}</strong>
      </p>
    </div>

    <!-- 表单主体 -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- 姓名 -->
      <FormField field-name="name" :error="errors.name" required>
        <input 
          v-model="form.name" 
          @input="validateField('name', form.name)"
          type="text"
          :class="inputClass(errors.name)"
        />
      </FormField>

      <!-- 性别 -->
      <FormField field-name="gender" :error="errors.gender" required>
        <select 
          v-model="form.gender" 
          @change="validateField('gender', form.gender)"
          :class="inputClass(errors.gender)"
        >
          <option value="" disabled></option>
          <option value="male">{{ $t('booking.male') }}</option>
          <option value="female">{{ $t('booking.female') }}</option>
        </select>
      </FormField>

      <!-- 人数 -->
      <FormField field-name="personCount" :error="errors.personCount" required>
        <input 
          v-model.number="form.personCount"
          @input="validateField('personCount', form.personCount)"
          type="number" 
          min="1"
          :class="inputClass(errors.personCount)"
        />
      </FormField>

      <!-- 中文用户专属字段 --> 
      <template v-if="isChinese">
        <FormField field-name="phone" :error="errors.phone" required>
          <input 
            v-model="form.phone"
            @input="validateField('phone', form.phone)"
            type="tel"
            :class="inputClass(errors.phone)"
          />
        </FormField>

        <FormField field-name="wechat" :error="errors.wechat">
          <input 
            v-model="form.wechat"
            @input="validateField('wechat', form.wechat)"
            type="text"
            :class="inputClass(errors.wechat)"
          />
        </FormField>
      </template>

      <!-- 邮箱（所有用户） -->
      <FormField field-name="email" :error="errors.email" :required="!isChinese">
        <input 
          v-model="form.email"
          @input="validateField('email', form.email)"
          type="email"
          :class="inputClass(errors.email)"
        />
      </FormField>

      <!-- 备注 -->
      <FormField field-name="note">
        <textarea 
          v-model="form.note"
          rows="3"
          :class="inputClass(errors.note)"
        ></textarea>
      </FormField>
      <!--提交按钮-->
      <button 
        type="submit" 
        :disabled="isSubmitting"
        class="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300"
        :class="{
          'hover:shadow-lg': !isSubmitting,
          'opacity-70 cursor-not-allowed': isSubmitting
        }"
      >
        <span v-if="!isSubmitting">{{ $t('app.applyNow') }}</span>
        <span v-else class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ $t('app.submitting') }}
        </span>
      </button>
      <ErrorModal 
        v-if="showSubmitError"
        :message="submitError"
        @close="showSubmitError = false"
      />
    </form>
  </div>  
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import FormField from '@/components/ui/FormField.vue'
import ErrorModal from '@/components/ui/ErrorModal.vue'
import SuccessModal from '@/components/ui/SuccessModal.vue'

import data from '@/assets/data/dalianTours.json'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()

// 数据获取
const tourId = route.params.id
const tourInfo = data.dalianTours.find(t => t.id === tourId)

const form = reactive({
  name: '',
  gender: '',
  personCount: 1,
  phone: '',
  wechat: '',
  email: '',
  note: ''
})

const errors = reactive({})
const showSuccess = ref(false)
const isChinese = computed(() => locale.value === 'cn')

function inputClass(error) {
    return [
      'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition',
      error ? 'border-red-500' : ''
    ]
  }
  function validateField(fieldName, value) {
  switch(fieldName) {
    case 'name':
      errors.name = value.trim() ? '' : t('booking.errors.nameRequired')
      break
    case 'gender':
      errors.gender = value ? '' : t('booking.errors.genderRequired')
      break
    case 'personCount':
      if (value === '' || value === null || value === undefined) {
          errors.personCount = t('booking.errors.personCountRequired')
        } else if (Number(value) < 1) {
          errors.personCount = t('booking.errors.personCountInvalid')
        } else {
          errors.personCount = ''
        }
        break
    case 'phone':
      if (isChinese.value) {
        errors.phone = value.trim() ? (/^1[3-9]\d{9}$/.test(value) ? '' : t('booking.errors.phoneInvalid')) 
        : t('booking.errors.phoneRequired')
      }
      break
    case 'email':
      if (!isChinese.value) {
        errors.email = value.trim() ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : t('booking.errors.emailInvalid')) 
        : t('booking.errors.emailRequired')
      }
      break
  }
}

const isSubmitting = ref(false)
const showSubmitError = ref(false)
const submitError = ref('')

async function handleSubmit() {
  // 提交前验证所有字段
  Object.keys(form).forEach(key => validateField(key, form[key]))
  
  // 如果存在验证错误，阻止提交
  if (Object.values(errors).some(Boolean)) {
    return // 错误已经显示在对应字段下方
  }

  isSubmitting.value = true

  try {
    // 模拟API调用（替换为实际请求）
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    
    if (!response.ok) throw new Error(await response.text())
    
    // 提交成功
    showSuccess.value = true
  } catch (error) {
    console.error('提交失败:', error)
    submitError.value = error.message || t('booking.submit.submissionFailed')
    showSubmitError.value = true
  } finally {
    isSubmitting.value = false
  }

  // 模拟API提交函数
  // async function submitFormData(formData) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // 模拟90%成功率
  //       if (Math.random() > 0.1) {
  //         resolve()
  //       } else {
  //         reject(new Error(t('app.networkError')))
  //       }
  //     }, 1500) // 模拟网络延迟
  //   })
  // }
}

function goBack() {
  showSuccess.value = false
  router.back()
}
</script>

<style scoped>

</style>