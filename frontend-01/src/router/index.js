import { createRouter, createWebHistory } from 'vue-router'
import NewsDetails from '@/components/NewsDetails.vue'
import CompanyInfo from '@/components/CompanyInfo.vue'

import Terms from '@/views/Terms.vue'
import Privacy from '@/views/Privacy.vue'

import LoginPage from '@/admin/LoginPage.vue'
import NewsEdit from '@/admin/NewsEdit.vue'
import NewsList from '@/admin/NewsList.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/news/:id', name: 'NewsDetails', component: NewsDetails, props: true},
    { path: '/aboutUs', name: 'CompanyInfo', component: CompanyInfo },

    { path: '/terms', name: 'Terms',component: Terms },
    { path: '/privacy',name: 'Privacy', component: Privacy },

    { path: '/manage/login',name: 'LoginPage', component: LoginPage },
    { path: '/manage/news/create',name: 'NewsCreate', component: NewsEdit },
    { path: '/manage/news/edit/:id',name: 'NewsEdit', component: NewsEdit },
    { path: '/manage/newsList',name: 'NewsList', component: NewsList },
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
