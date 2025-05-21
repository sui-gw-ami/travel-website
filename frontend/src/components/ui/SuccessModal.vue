<template>
    <Transition name="fade">
      <div class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-md">
          <!-- 头部 -->
          <div class="bg-yellow-50 p-4 flex items-center">
            <svg class="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
          </div>
          
          <!-- 内容 -->
          <div class="p-6">
            <p class="text-gray-700">{{ message }}</p>
            <slot name="extra"></slot>
          </div>
  
          <!-- 底部 -->
          <div class="bg-gray-50 px-4 py-3 flex justify-end">
            <button
              @click="$emit('close')"
              class="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </template>