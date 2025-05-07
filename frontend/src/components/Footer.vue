<template>
 <footer class="bg-gray-100 text-gray-600 py-10 mt-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- 关于我们 -->
      <div>
        <h3 class="text-lg font-semibold mb-3">{{ $t('footer.aboutTitle') }}</h3>
        <p class="text-sm">{{ $t('footer.aboutDesc') }}</p>
      </div>

      <!-- 快速导航 -->
      <div>
        <h3 class="text-lg font-semibold mb-3">{{ $t('footer.quickLinks') }}</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#inbound" class="hover:underline">{{ $t('app.inbound') }}</a></li>
          <li><a href="#outbound" class="hover:underline">{{ $t('app.outbound') }}</a></li>
          <li><a href="#services" class="hover:underline">{{ $t('app.services') }}</a></li>
        </ul>
      </div>

      <!-- 联系方式 -->
      <div>
        <h3 class="text-lg font-semibold mb-3">{{ $t('footer.contact') }}</h3>
        <p class="text-sm"> info@example.com</p>
        <p class="text-sm">📞 +86 123 456 7890</p>
        <p class="text-sm">📍 {{ $t('footer.address') }}</p>
      </div>
    </div>
    <div class="mt-6 text-center text-md text-gray-600">
      {{ $t('footer.aboutDesc') }}
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
