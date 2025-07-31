import { createRouter, createWebHistory } from 'vue-router'
import NewsDetails from '@/components/NewsDetails.vue'
import CompanyInfo from '@/components/CompanyInfo.vue'

import Terms from '@/views/Terms.vue'
import Privacy from '@/views/Privacy.vue'

import LoginPage from '@/admin/LoginPage.vue'
// import Outbound from '@/views/Outbound.vue'
// import News from '@/views/News.vue'
// import Services from '@/views/Services.vue'
// import Contact from '@/views/Contact.vue'
// import Booking from '@/views/Booking.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/news/:id', name: 'NewsDetails', component: NewsDetails, props: true},
    { path: '/aboutUs', name: 'CompanyInfo', component: CompanyInfo },

    { path: '/terms', name: 'Terms',component: Terms },
    { path: '/privacy',name: 'Privacy', component: Privacy },

    { path: '/manage/login',name: 'LoginPage', component: LoginPage },
    // { path: '/outbound', name: 'Outbound', component: Outbound },
    // { path: '/news', name: 'News', component: News },
    // { path: '/services', name: 'Services', component: Services },
    // { path: '/contact', name: 'Contact', component: Contact },
    // { path: '/inbound/:id', name: 'InboundTourDetail', component: Inbound, props: true},
    // { path: '/outbound/:id', name: 'OutboundTourDetail', component: Outbound, props: true},
    // { path: '/booking/:id', name: 'Booking', component: Booking, props: true},
  ],

  scrollBehavior(to, from, savedPosition) {
    // 如果浏览器有记录（前进/后退），返回记录的位置
    if (savedPosition) {
      return savedPosition
    } else {
      // 否则回到页面顶部
      return { top: 0 }
    }
  }
})
