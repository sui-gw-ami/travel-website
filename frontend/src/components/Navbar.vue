<template>
  <header class="bg-white shadow-md sticky top-0 z-50 w-full">
    <div class="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-left space-x-2">
        <img :src="currentLogo" alt="Logo" class="h-24" />
      </RouterLink>

      <!-- Desktop Menu -->
      <nav  class="hidden md:flex space-x-9 text-gray-700 font-medium text-lg items-end h-20">
        <RouterLink
        v-for="item in navItems" :key="item.label" :to="item.to"
          :class="[
            'px-3 py-2 rounded font-medium transition hover:text-yellow-500',
            $route.path === item.to ? 'text-yellow-500 font-bold' : ''
          ]"
        >
          {{ $t(item.label) }}
        </RouterLink>
      </nav>
        <div class="hidden md:flex items-end space-x-4 h-16">
        <LanguageDropdown class="ml-4" />
        <!-- 登录暂时不需要
        <button class="w-24 bg-yellow-500 text-white text-md px-3 py-2 rounded hover:bg-yellow-600 transition">
          {{ $t('app.login') }}
        </button> -->
      </div>

    </div>
    <nav class="border-b-1 border-gray-200"></nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageDropdown from './LanguageDropdown.vue'

const isOpen = ref(false)

const { locale } = useI18n()
const logos = {
  cn: '/image/logo/logo-cn.png',
  jp: '/image/logo/logo-jp.png',
  ru: '/image/logo/logo-ru.png',
// en: '/image/logo/logo-en.png',
}
// 动态绑定当前 logo
const currentLogo = computed(() => logos[locale.value] || logos['zh'])

const activeSection = ref('') // 当前激活的锚点

const navItems = [
  { label: 'app.inbound', to: '/inbound', type: 'link' },
  { label: 'app.outbound', to: '/outbound', type: 'link' },
  { label: 'app.news', to: '/news', type: 'link' },
  // { label: 'app.services', to: '/services', type: 'link' },
  { label: 'app.contact', to: '/contact', type: 'link' }
]

const navigateAndClose = (id) => {
  scrollTo(id)
  isOpen.value = false
}
</script>
