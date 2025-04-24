import { createApp } from 'vue'
import { computed } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import i18n from './i18n/i18n'
import 'flowbite'




createApp(App).use(computed).use(router).use(i18n).mount('#app')
