import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Inbound from '@/views/Inbound.vue'
import Outbound from '@/views/Outbound.vue'
import News from '@/views/News.vue'
import Services from '@/views/Services.vue'
import Contact from '@/views/Contact.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/inbound', name: 'Inbound', component: Inbound },
    { path: '/outbound', name: 'Outbound', component: Outbound },
    { path: '/news', name: 'News', component: News },
    { path: '/services', name: 'Services', component: Services },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/inbound/:id', name: 'InboundTourDetail', component: Inbound, props: true},
    { path: '/outbound/:id', name: 'OutboundTourDetail', component: Outbound, props: true},
  ]
})
