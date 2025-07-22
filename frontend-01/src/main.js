import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import i18n from './i18n/i18n'
import 'flowbite'
import { createPinia } from 'pinia'



// 设置初始语言
const savedLang = localStorage.getItem('lang') || 'zh'
i18n.global.locale.value = savedLang
createApp(App).use(router).use(i18n).use(createPinia()).mount('#app')
