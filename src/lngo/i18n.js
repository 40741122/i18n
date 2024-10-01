import i18n from "i18next";
import resources from "./resource";

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .init({
    resources,
    lng: savedLanguage, // 預設語言
    fallbackLng: 'en', // 若當前語言沒有對應的翻譯則使用這個語言
    interpolation: {
      escapeValue: false, // React 已經做了 xss 保護，不需要這裡再次 escape
    },
  });

export default i18n;