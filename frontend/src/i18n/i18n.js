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
      aboutDesc: '我们致力于向全球游客展示中国的自然风光与文化魅力。',
      companyName: '小猪陪你 全球旅行',
      rights: '保留所有权利。',
    },
    contact: {
      title: '联系我们',
      email: '邮箱',
      phone: '电话',
      address: '地址：中国北京市旅游路88号',
      wechatTitle: '微信公众号 / 微信',
      wechatDesc: '欢迎关注我们的官方公众号，获取最新旅游资讯。',
    },
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
      aboutDesc: '私たちは世界中の旅行者に中国の自然の美しさと文化の魅力を紹介しています。',
      companyName: 'ピッギーと共に世界旅行へ',
      rights: '全著作権所有。',
    },
    contact: {
      title: 'お問い合わせ',
      email: 'メール',
      phone: '電話番号',
      address: '住所：中国北京市観光通り88番地',
      // 无需微信信息
    },
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
      aboutDesc: 'Мы стремимся показать туристам со всего мира природную красоту и культурное богатство Китая.',
      companyName: 'Путешествия с Поросёнком по миру',
      rights: 'Все права защищены.',
    },
    contact: {
      title: 'Связаться с нами',
      email: 'Электронная почта',
      phone: 'Телефон',
      address: 'Адрес: г. Пекин, Туристическая улица, 88, Китай',
      // 无需微信信息
    },
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
