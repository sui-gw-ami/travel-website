import { createI18n } from 'vue-i18n'

const messages = {
  cn: {
    app: {
      inbound: '入境旅游',
      outbound: '出境旅游',
      // services: '服务介绍',
      news: '旅游资讯',
      contact: '联系我们',
      // login: ' 登 录 ',
      welcome: '欢迎来自全球的游客探索中国的美丽风光与文化遗产！',
      featuredTours: '精选行程',
      applyNow: '立即预约',
    },
    booking: {
      title: '预约信息',
      selectedTour: '所选行程',
      name: '姓名：',
      gender: '性别：',
      personCount: '出行人数：',
      email: '邮箱：',
      phone: '联系电话：',
      wechat: '微信：',
      note: '备注：',
      male: '男',
      female: '女',
      submit: '提交',
      successMessage: '提交成功，我们将尽快与您联系。',
      errors: {
        nameRequired: '请输入姓名',
        genderRequired: '请选择性别',
        personCountRequired: '请输入出行人数',
        personCountInvalid: '请输正确的人数',
        phoneRequired: '请输入电话号码',
        phoneInvalid: '请输入有效的电话号码',
        emailInvalid: '请输入有效的邮箱地址',
      },
      submit: {
        submitting: "提交中...",
        submissionError: "提交失败",
        OK: "OK",
        submissionFailed: "提交失败，请重新提交",
      },
      success: {
        title: "预订成功",
        message: "感谢您的预订，",
        referenceId: "您的预订编号",
        emailSent: "我们已发送邮件通知工作人员处理。"
      }
    },
    contact: {
      title: '联系我们',
      email: '邮箱',
      phone: '电话',
      address: '地址：中国北京市旅游路88号',
      wechatTitle: '微信公众号 / 微信',
      wechatDesc: '欢迎关注我们的官方公众号，获取最新旅游资讯。',
    },
    footer: {
      aboutDesc: '我们致力于向全球游客展示中国的自然风光与文化魅力。',
      companyName: '小猪陪你 全球旅行',
      rights: '保留所有权利。',
    },
    form: {
      required: "(必填)",
      optional: "(选填)"
    },
    tour: {
      day: "第{day}天",
      time: "时间",
      transport: "交通",
      meals: "用餐",
      hotel: "住宿",
      description: "详细介绍"
    }
  },
  jp: {
    app: {
      inbound: 'インバウンド観光',
      outbound: 'アウトバウンド観光',
      // services: 'サービス紹介',
      news: '旅行ニュース',
      contact: '問い合わせ',
      // login: 'ログイン',
      welcome: '世界中の旅行者の皆様、中国の美しい風景と文化遺産をご体験ください！',
      applyNow: '予約',
    },
    booking: {
      title: '予約情報',
      selectedTour: 'ツアー',
      name: 'お名前：',
      gender: '性別：',
      personCount: '参加人数：',
      email: 'メールアドレス：',
      phone: '電話番号：',
      wechat: 'WeChat：',
      note: '備考：',
      male: '男性',
      female: '女性',
      submit: '送信',
      successMessage: '送信が成功しました。できるだけ早くご連絡いたします。',
      errors: {
        nameRequired: '氏名を入力してください',
        genderRequired: '性別を選択してください',
        personCountRequired: '参加人数を入力してください',
        phoneRequired: '電話番号を入力してください',
        phoneInvalid: '有効な電話番号を入力してください',
        emailInvalid: '有効なメールアドレスを入力してください',
        personCountInvalid: '正しい人数を入力してください（最低1人）',
      },
    },
       
    contact: {
      title: 'お問い合わせ',
      email: 'メール',
      phone: '電話番号',
      address: '住所：中国北京市観光通り88番地',
      // 无需微信信息
    },
    footer: {
      aboutDesc: '私たちは世界中の旅行者に中国の自然の美しさと文化の魅力を紹介しています。',
      companyName: 'ピッギーと共に世界旅行へ',
      rights: '全著作権所有。',
    },
    form: {
      required: "(必須)",
      optional: "(任意)"
    },
  },
  ru: {
    app: {
      inbound: 'Въездной туризм',
      outbound: 'Выездной туризм',
      // services: 'Описание услуг',
      news: 'Новости туризма',
      contact: 'Связаться с нами',
      // login: 'Войти',
      welcome: 'Добро пожаловать, путешественники со всего мира! Исследуйте живописные пейзажи и культурное наследие Китая!',
      applyNow: 'бронировать',
    },
    booking: {
      title: 'Информация для бронирования',
      selectedTour: 'Выбранный тур',
      name: 'Имя：',
      gender: 'Пол：',
      personCount: 'Количество человек：',
      email: 'Электронная почта：',
      phone: 'Телефон：',
      wechat: 'WeChat：',
      note: 'Примечание：',
      male: 'Мужской',
      female: 'Женский',
      submit: 'Отправить',
      successMessage: 'Успешно отправлено. Мы свяжемся с вами как можно скорее.',
      errors: {
        nameRequired: 'Пожалуйста, введите имя',
        genderRequired: 'Пожалуйста, выберите пол',
        personCountRequired: 'Пожалуйста, введите количество участников',
        phoneRequired: 'Пожалуйста, введите номер телефона',
        phoneInvalid: 'Пожалуйста, введите действительный номер телефона',
        emailInvalid: 'Пожалуйста, введите действительный адрес электронной почты',
        personCountInvalid: 'Пожалуйста, введите корректное количество (не менее 1)',
      },
    },    
    contact: {
      title: 'Связаться с нами',
      email: 'Электронная почта',
      phone: 'Телефон',
      address: 'Адрес: г. Пекин, Туристическая улица, 88, Китай',
      // 无需微信信息
    },
    footer: {
      aboutDesc: 'Мы стремимся показать туристам со всего мира природную красоту и культурное богатство Китая.',
      companyName: 'Путешествия с Поросёнком по миру',
      rights: 'Все права защищены.',
    },
    form: {
      required: "(обязательно)",
      optional: "(необязательно)"
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
