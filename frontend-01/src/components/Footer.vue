<template>
  <footer class="bg-footer text-gray-500 py-8">
    <!-- 上方 Logo 和联系方式 -->
    <div
      class="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-6 sm:space-y-0"
    >
      <!-- 左侧 Logo -->
      <img
        src="/image/logo/footer-logo.png"
        alt="Logo"
        class="h-32 sm:h-52 px-6 sm:px-12"
      />

      <!-- 右侧社交和邮箱 -->
      <div>
        <div
          class="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-2"
        >
          <img
            src="/image/sns/footer-weChat.png"
            alt="WeChat"
            class="h-20 sm:h-28 px-2"
          />
          <img
            src="/image/sns/footer-line.png"
            alt="Line"
            class="h-20 sm:h-28 px-2"
          />
        </div>
        <div class="text-center sm:text-right font-inter tracking-widest font-bold mt-4 sm:mt-2">
          <p>Email: ONO@tripmaker.cc</p>
        </div>
      </div>
    </div>

    <!-- 下方版权信息 -->
    <div class="container mx-auto px-3 text-center font-inter text-sm sm:text-base mt-6">
      <p>
        {{ new Date().getFullYear() }} Dalian Wenyuan International Travel Agency
        Co., Ltd.
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>
