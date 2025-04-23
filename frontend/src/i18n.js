import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    app: {
      inbound: '入境旅游',
      outbound: '出境旅游',
      services: '服务介绍',
      news: '旅游资讯',
      login: '登录',
      welcome: '欢迎来自全球的游客探索中国的美丽风光与文化遗产！',
    },
  },
  en: {
    app: {
      inbound: 'Inbound Tourism',
      outbound: 'Outbound Tourism',
      services: 'Services',
      news: 'Travel News',
      login: 'Login',
      welcome: 'Welcome travelers from around the world to explore China’s scenic beauty and cultural heritage!',
    },
  },
  ja: {
    app: {
      inbound: 'インバウンド観光',
      outbound: 'アウトバウンド観光',
      services: 'サービス紹介',
      news: '旅行ニュース',
      login: 'ログイン',
      welcome: '世界中の旅行者の皆様、中国の美しい風景と文化遺産をご体験ください！',
    },
  },
  ko: {
    app: {
      inbound: '인바운드 관광',
      outbound: '아웃바운드 관광',
      services: '서비스 소개',
      news: '여행 소식',
      login: '로그인',
      welcome: '전 세계의 여행자 여러분, 중국의 아름다운 경관과 문화유산을 체험해보세요!',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})

export default i18n
