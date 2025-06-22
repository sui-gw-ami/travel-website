<script setup>
import HeroVideo from './components/HeroVideo.vue'
import InboundNews from './components/InboundNews.vue'
import OutboundNews from './components/OutboundNews.vue'
import SocialMediaSection from './components/SocialMediaSection.vue'
import SocialList from './components/SocialList.vue'
import Footer from './components/Footer.vue'
import Timezone from './components/Timezone.vue'
</script>

<template>
  <div>
    <!-- <Navbar /> -->
    <HeroVideo />
    <Timezone />
    <InboundNews />
    <OutboundNews />
    <SocialMediaSection />
    <SocialList />
    <Footer />
  </div>
</template>


<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
