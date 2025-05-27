<template>
    <div class="mb-4">
      <!-- 标签行 -->
      <div class="flex items-center justify-between mb-1">
        <label class="text-sm font-medium flex items-center gap-1" :class="labelClass">
          <span v-if="icon" class="text-yellow-600">
            <component :is="icon" class="w-4 h-4" />
          </span>
          {{ $t(`booking.${fieldName}`) }}
        </label>
        
        <!-- 必填提示 - 根据语言自动调整位置 -->
        <span 
          class="text-xs whitespace-nowrap"
          :class="required ? 'text-red-500' : 'text-gray-400'"
        >
          {{ required ? $t('form.required') : $t('form.optional') }}
        </span>
      </div>
  
      <!-- 输入区域 -->
      <div class="relative">
        <slot>
          <input
            v-bind="$attrs"
            class="form-field-input"
            :class="{ '!border-red-500': error}"
          >
        </slot>
  
        <!-- 错误图标 -->
        <svg 
          v-if="error" 
          class="w-5 h-5 text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
        </svg>
      </div>
  
      <!-- 错误提示 -->
      <p v-if="error" class="mt-1 text-sm text-red-500 flex items-start">
        <svg class="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
        </svg>
        {{ error }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n'
  
  const props = defineProps({
    fieldName: { // 使用语言文件的键名而非直接文本
      type: String,
      required: true
    },
    error: String,
    required: Boolean,
    helpTextKey: String, // 对应语言文件的帮助文本键
    icon: Object
  })
  
  const { locale } = useI18n()
  
  const labelClass = 'text-gray-700'
  </script>
  
  <style scoped>
  .form-field-input {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200;
  }
  </style>