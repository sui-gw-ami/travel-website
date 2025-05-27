import {reactive, computed } from 'vue'

export default function useFormValidation(form, locale, t) {
  const errors = reactive({})
  
  const isChinese = computed(() => locale.value === 'cn')

  function validateField(fieldName, value) {
    switch(fieldName) {
      case 'name':
        errors.name = value.trim() ? '' : t('booking.errors.nameRequired')
        break
      case 'gender':
        errors.gender = value ? '' : t('booking.errors.genderRequired')
        break
      case 'personCount':
        if (value === '' || value === null || value === undefined) {
          errors.personCount = t('booking.errors.personCountRequired')
        } else if (Number(value) < 1) {
          errors.personCount = t('booking.errors.personCountInvalid')
        } else {
          errors.personCount = ''
        }
        break
      case 'phone':
        if (isChinese.value && value.trim()) {
          errors.phone = (/^1[3-9]\d{9}$/.test(value)) ? '' : t('booking.errors.phoneInvalid')
        }
        break
      case 'email':
        if (!isChinese.value) {
          errors.email = value.trim() ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : t('booking.errors.emailInvalid')) 
          : t('booking.errors.emailRequired')
        }
        break
        
        // 新增：中文环境下检查至少填写了电话或邮箱
        if (isChinese.value) {
            validateChineseContact()
          }
          break
    }
  }

    // 验证中文用户至少填写一种联系方式
    function validateChineseContact() {
        if (!isChinese.value) return
        
        const hasPhone = form.phone.trim()
        const hasEmail = form.email.trim()
        
        if (!hasPhone && !hasEmail) {
          errors.phone = t('booking.errors.contactRequired')
          errors.email = t('booking.errors.contactRequired')
        } else {
            errors.phone = ''
            errors.email = ''
        }
      }

  function validateForm() {
    Object.keys(form).forEach(key => validateField(key, form[key]))
    return !Object.values(errors).some(Boolean)
  }

  return {
    errors,
    validateField,
    validateForm
  }
}