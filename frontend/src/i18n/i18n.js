import { createI18n } from 'vue-i18n'

const messages = {
  cn: {
    app: {
      inbound: '入境旅游',
      outbound: '出境旅游',
      services: '服务介绍',
      news: '旅游资讯',
      contact: '联系我们',
      // login: ' 登 录 ',
      welcome: '欢迎来自全球的游客探索中国的美丽风光与文化遗产！',
    },
    footer: {
      aboutTitle: '关于我们',
      aboutDesc: '我们是一家专注于出入境旅游服务的专业机构，致力于为客户打造安全、便捷且难忘的旅行体验。\n我们提供一站式的出境游服务，包括签证代办、机票预订、地接安排及中文导游等，全面满足多样化的旅行需求，让每一次出行都安心无忧。',
      quickLinks: '快速导航',
      contact: '联系我们',
      address: '中国大连市旅游路88号',
      companyName: '中国旅游推广平台',
      rights: '保留所有权利。',
    }
  },
  jp: {
    app: {
      inbound: 'インバウンド観光',
      outbound: 'アウトバウンド観光',
      services: 'サービス紹介',
      news: '旅行ニュース',
      contact: '問い合わせ',
      // login: 'ログイン',
      welcome: '世界中の旅行者の皆様、中国の美しい風景と文化遺産をご体験ください！',
    },
    footer: {
      aboutTitle: '私たちについて',
      aboutDesc: '中国の自然と文化の魅力を世界中の旅行者に紹介します。',
      quickLinks: 'クイックリンク',
      contact: 'お問い合わせ',
      address: '中国北京市観光通り88番地',
      companyName: '中国観光プロモーションプラットフォーム',
      rights: '全著作権所有。',
    }
  },
  ru: {
    app: {
      inbound: 'Въездной туризм',
      outbound: 'Выездной туризм',
      services: 'Описание услуг',
      news: 'Новости туризма',
      contact: 'Связаться с нами',
      // login: 'Войти',
      welcome: 'Добро пожаловать, путешественники со всего мира! Исследуйте живописные пейзажи и культурное наследие Китая!',
    },
    footer: {
      aboutTitle: 'О нас',
      aboutDesc: 'Мы представляем красоту природы и культуру Китая туристам со всего мира.',
      quickLinks: 'Быстрые ссылки',
      contact: 'Контакты',
      address: 'г. Пекин, Туристическая улица, д. 88, Китай',
      companyName: 'Платформа по продвижению туризма Китая',
      rights: 'Все права защищены.',
    }
  },
  // en: {
  //   app: {
  //     inbound: 'Inbound Tourism',
  //     outbound: 'Outbound Tourism',
  //     services: 'Services',
  //     news: 'Travel News',
  //     contact: 'Contract Us',
  //     login: ' Login ',
  //     welcome: 'Welcome travelers from around the world to explore China’s scenic beauty and cultural heritage!',
  //   },
  // },
}

const i18n = createI18n({
  legacy: false,
  locale: 'cn',
  fallbackLocale: 'jp',
  messages,
})

export default i18n
