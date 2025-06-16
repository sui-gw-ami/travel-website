/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        bg:{
          foot: '#fbfbfb'
        },
        // 入境主题色
        inbound: {
          primary: '#d97706',    // amber-600
          secondary: '#78350f',  // 深棕
          light: '#fef3c7'       // amber-50
        },
        // 出境主题色
        outbound: {
          primary: '#2563eb',    // blue-600
          secondary: '#ea580c',  // orange-600 
          light: '#dbeafe'       // blue-50
        }
      },
      fontFamily: {
        sans: [
          // 中文
          'PingFang SC',        // macOS 中文
          'Microsoft YaHei',    // Windows 中文
          'Noto Sans SC',       // Android/Linux 中文
          
          // 日文
          'Hiragino Kaku Gothic Pro', // macOS 日文
          'Meiryo',             // Windows 日文
          'Noto Sans JP',       // Android/Linux 日文
          
          // 韩文
          'Apple SD Gothic Neo', // macOS 韩文
          'Malgun Gothic',       // Windows 韩文
          'Noto Sans KR',        // Android/Linux 韩文
          
          // 英文字体
          'Arial',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}