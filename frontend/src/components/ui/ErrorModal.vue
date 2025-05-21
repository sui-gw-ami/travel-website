<template>
    <div class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
        <div class="flex items-start">
          <svg class="w-6 h-6 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
          </svg>
          <div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">{{ $t('booking.submit.submissionError') }}</h3>
            <p class="text-gray-600">{{ message }}</p>
            <p class="text-sm text-yellow-600 mt-2">{{ $t('booking.submit.submissionFailed') }}</p>
          </div>
        </div>
        <div class="mt-4 flex justify-end space-x-3">
          <button
            @click="$emit('close')"
            class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            {{ $t('booking.submit.OK') }}
          </button>
        </div>
      </div>
    </div>
  </template>