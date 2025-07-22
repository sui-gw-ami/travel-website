<template>
  <div class="font-source">
    <!-- 导航栏容器（宽度限制保留） -->
    <div class="mx-auto py-6 px-4">
      <nav class="h-[100px] w-full">
        <div class="max-w-7xl mx-auto py-2 flex justify-between items-center">
          <RouterLink to="/" class="flex items-center space-x-2">
            <img src="/image/logo/logo.png" alt="Logo" class="h-12" />
          </RouterLink>
          <div class="flex space-x-6">
            <LanguageDropdown />
          </div>
        </div>
      </nav>
      <div class="border-t my-4"></div>
    </div>

    <!-- ❗ intro-page 移出 max-w 限制，独立铺满 -->
    <div class="intro-page">
      <div class="overlay">
        <div class="company-intro">
          <p v-html="info.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import LanguageDropdown from './LanguageDropdown.vue'
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { useLanguageStore } from '@/stores/language'

const info = ref({ title: '', content: '' })
const langStore = useLanguageStore()

async function fetchCompanyInfo(lang) {
  try {
    const { data } = await axios.get(`/api/company/info?lang=${lang}`)
    info.value = data
  } catch (error) {
    console.error('获取公司信息失败:', error)
  }
}

onMounted(() => {
  fetchCompanyInfo(langStore.currentLanguage.code)
})

watch(
  () => langStore.currentLanguage.code,
  (newLang) => {
    fetchCompanyInfo(newLang)
  }
)
</script>


<style scoped>
.intro-page {
  background-image: url('/image/other/aboutus.png');
  background-repeat: no-repeat;
  background-size:cover; /* ✅ 缩小比例（你可改为 600px） */
  background-position: right top; /* ✅ 靠右对齐 */
  background-attachment: scroll;
  min-height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 320px 20px 100px 20px;
  box-sizing: border-box;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.85); /* 白色半透明背景 */
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  text-align: justify;
}

.company-intro h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #f36;
}

.company-intro p {
  font-size: 1.5rem;
  line-height: 1.8;
  color: #333;
}
</style>
