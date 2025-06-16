import { createI18n } from 'vue-i18n'
import zh from './zh.json'
import ja from './ja.json'
// import ru from './ru.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: { zh, ja}
})

export default i18n
