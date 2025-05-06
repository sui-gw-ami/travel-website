<template>
  <div class="max-w-4xl min-h-screen mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-6">{{ $t('contact.title') }}</h1>

    <div class="space-y-4 text-base">
      <p>📧 {{ $t('contact.email') }}: info@example.com</p>
      <p>📞 {{ $t('contact.phone') }}: +86 123 456 7890</p>
      <p>📍 {{ $t('contact.address') }}</p>
    </div>

    <!-- 仅中国显示微信和公众号 -->
    <div v-if="locale === 'cn'" class="mt-8 space-y-4">
      <h2 class="text-xl font-semibold">{{ $t('contact.wechatTitle') }}</h2>
      <p>{{ $t('contact.wechatDesc') }}</p>
      <div class="w-40">
        <img src="" alt="WeChat QR" class="w-full rounded shadow" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<style scoped>
html {
    scroll-behavior: smooth;
  }
</style>
