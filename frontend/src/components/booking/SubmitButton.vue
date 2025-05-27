<template>
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
        {{ $t('booking.submit.submitting') }}
      </span>
    </button>
  </template>
  
  <script setup>
  defineProps({
    isSubmitting: {
      type: Boolean,
      default: false
    }
  })
  </script>