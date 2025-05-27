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
    <SelectedTourNotice v-if="tourInfo" :tour-info="tourInfo" />

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

      <!-- 邮箱（所有用户） -->
      <FormField field-name="email" :error="errors.email" :required="!isChinese">
        <input 
          v-model="form.email"
          @input="validateField('email', form.email)"
          type="email"
          :class="inputClass(errors.email)"
        />
      </FormField>

      <!-- 中文用户专属字段 --> 
      <template v-if="isChinese">
        <FormField field-name="phone" :error="errors.phone">
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

      <!-- 备注 -->
      <FormField field-name="note">
        <textarea 
          v-model="form.note"
          rows="3"
          :class="inputClass(errors.note)"
        ></textarea>
      </FormField>

      <!-- 提交按钮 -->
      <SubmitButton 
        :is-submitting="isSubmitting"
        @submit="handleSubmit"
      />

      <!-- 错误提示模态框 -->
      <ErrorModal 
        v-if="showSubmitError"
        :message="submitError"
        @close="showSubmitError = false"
      />
      
      <!-- 成功提示模态框 -->
      <SuccessModal 
        v-if="showSuccess"
        :message="successMessage"
        @close="goBack"
      >
        <template #extra>
          <p class="text-sm text-gray-600 mt-2">
            {{ $t('booking.success.emailSent') }}
          </p>
        </template>
      </SuccessModal>
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
import SelectedTourNotice from '@/components/booking/SelectedTourNotice.vue'
import SubmitButton from '@/components/booking/SubmitButton.vue'

// 组合式函数导入
import useFormValidation from '@/composables/useFormValidation'
import useBookingApi from '@/composables/useBookingApi'
import useTourInfo from '@/composables/useTourInfo'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()

// 表单数据
const form = reactive({
  name: '',
  gender: '',
  personCount: 1,
  phone: '',
  wechat: '',
  email: '',
  note: ''
})

// 获取旅游信息
const { tourInfo } = useTourInfo(route.params.id)

// 表单验证逻辑
const { errors, validateField, validateForm } = useFormValidation(form, locale, t)

// 提交状态和错误处理
const isSubmitting = ref(false)
const showSubmitError = ref(false)
const submitError = ref('')

// 成功状态
const showSuccess = ref(false)
const successMessage = ref('')

// 判断是否是中文用户
const isChinese = computed(() => locale.value === 'cn')

// 输入框样式
function inputClass(error) {
  return [
    'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition',
    error ? 'border-red-500' : ''
  ]
}

// API操作
const { submitBooking, sendNotification } = useBookingApi()

// 提交处理
async function handleSubmit() {
  if (!validateForm()) return
  
  isSubmitting.value = true

  try {
    // 提交预订
    await submitBooking({
      ...form,
      tourId: route.params.id,
      tourTitle: tourInfo.value?.title
    })
    
    // 发送通知
    await sendNotification(form)
    
    // 显示成功消息
    showSuccess.value = true
    successMessage.value = t('booking.success.message', {
      name: form.name,
      id: generateBookingId()
    })
  } catch (error) {
    submitError.value = error.message || t('booking.submit.submissionFailed')
    showSubmitError.value = true
  } finally {
    isSubmitting.value = false
  }
}

// 生成预订ID
function generateBookingId() {
  return `BK-${Date.now().toString(36).toUpperCase()}`
}

// 返回上一页
function goBack() {
  showSuccess.value = false
  router.back()
}
</script>

<style scoped>

</style>