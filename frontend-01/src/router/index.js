import { createRouter, createWebHistory } from 'vue-router'
import NewsDetails from '@/components/NewsDetails.vue'
// import Inbound from '@/views/Inbound.vue'
// import Outbound from '@/views/Outbound.vue'
// import News from '@/views/News.vue'
// import Services from '@/views/Services.vue'
// import Contact from '@/views/Contact.vue'
// import Booking from '@/views/Booking.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/news/:id', name: 'NewsDetails', component: NewsDetails, props: true},
    // { path: '/inbound', name: 'Inbound', component: Inbound },
    // { path: '/outbound', name: 'Outbound', component: Outbound },
    // { path: '/news', name: 'News', component: News },
    // { path: '/services', name: 'Services', component: Services },
    // { path: '/contact', name: 'Contact', component: Contact },
    // { path: '/inbound/:id', name: 'InboundTourDetail', component: Inbound, props: true},
    // { path: '/outbound/:id', name: 'OutboundTourDetail', component: Outbound, props: true},
    // { path: '/booking/:id', name: 'Booking', component: Booking, props: true},
  ]
})
