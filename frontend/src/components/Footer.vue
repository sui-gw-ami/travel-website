<template>
  <footer class="bg-gray-100 text-gray-600 py-4 mt-8">
    <div class="text-sm text-gray-400 text-center mt-6">
    © {{ year }} {{ $t('footer.companyName') }}. {{ $t('footer.rights') }}
  </div>
    <div class="mt-6 text-center text-md text-gray-600">
      {{ $t('footer.aboutDesc') }}
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
