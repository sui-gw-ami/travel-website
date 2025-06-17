import { Languages } from 'lucide-vue-next';

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
        footer: '#fec400',
        // 入境主题色
        Languages: {
          textblue: '#264f95',  
          textwhite: '#ffffff',
          deepblue: '#264f95', 
          lightblue: '#c2d6f7'       
        },
        // 出境主题色
        outbound: {
          primary: '#2563eb',    // blue-600
          secondary: '#ea580c',  // orange-600 
          light: '#dbeafe'       // blue-50
        }
      },
      fontFamily: {
        Abril: ['"Abril"', 'sans-serif'],
        Source: ['"Source"', 'sans-serif'],
        Inter9: ['"Inter9"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}