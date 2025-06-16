<template>
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <h3 class="text-2xl font-bold mb-6">{{ $t('news') }}</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-4 shadow rounded" v-for="i in 3" :key="i">
            <h4 class="text-lg font-semibold">示例新闻标题 {{ i }}</h4>
            <p class="text-gray-600 text-sm mt-2">这里是新闻内容摘要。</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>