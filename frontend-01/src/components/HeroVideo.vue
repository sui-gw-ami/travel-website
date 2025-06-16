<template>
    <div class="relative h-screen overflow-hidden">
      <video autoplay muted loop class="absolute w-full h-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div class="relative z-10 h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h2 class="text-4xl md:text-6xl font-bold mb-4">{{ $t('hero.title') }}</h2>
        <p class="text-xl md:text-2xl">{{ $t('hero.subtitle') }}</p>
      </div>
      <div >
        <p class="text-xl md:text-2xl">{{ $t('hero.subtitle') }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>