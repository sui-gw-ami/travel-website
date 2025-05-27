<template>
    <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start">
      <svg class="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
      </svg>
      <p class="text-sm text-yellow-800">
        {{ $t('booking.selectedTour') }}: <strong class="font-semibold">{{ tourInfo.title }}</strong>
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    tourInfo: {
      type: Object,
      required: true
    }
  })
  </script>