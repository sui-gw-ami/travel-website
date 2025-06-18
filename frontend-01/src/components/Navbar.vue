<template>
    <nav class="fixed top-0 left-0 w-full z-50 bg-transparent  text-white">
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <RouterLink to="/" class="flex items-left space-x-2">
        <img src="/image/logo/logo.png" alt="Logo" class="h-12" />
      </RouterLink>
        <div class="flex space-x-6">
          <LanguageDropdown  />
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
    import LanguageDropdown from './LanguageDropdown.vue'
  </script>
  
  <style scoped>
  /* 可选额外样式 */
  </style>
  