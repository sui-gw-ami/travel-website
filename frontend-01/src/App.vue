<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeroVideo from './components/HeroVideo.vue'
import InboundNews from './components/InboundNews.vue'
import OutboundNews from './components/OutboundNews.vue'
import SocialMediaSection from './components/SocialMediaSection.vue'
import SocialList from './components/SocialList.vue'
import Footer from './components/Footer.vue'
import Timezone from './components/Timezone.vue'

const route = useRoute()

// 不显示主页模块的页面名称
const excludedRoutes = ['NewsDetails', 'CompanyInfo', 'Terms', 'Privacy']

// 当前是否需要隐藏主页模块
const shouldHideMainContent = computed(() => {
  return (route.name && excludedRoutes.includes(route.name)) || route.path.startsWith('/manage')
})
</script>

<template>
  <div>
    <router-view />

    <template v-if="!shouldHideMainContent">
      <HeroVideo />
      <Timezone />
      <InboundNews />
      <OutboundNews />
      <SocialMediaSection />
    </template>

    <SocialList />
    <Footer />
  </div>
</template>
