import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resource";

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // 若當前語言沒有對應的翻譯則使用這個語言
    lng: savedLanguage, //預設語言
    resources, //引入字典檔
    ns: ["namespace1", "translation"],
    interpolation: {
      // 是否要讓字詞 escaped 來防止 xss 攻擊，因為 React.js 已經做了，這裡設成 false
      escapeValue: false,
    },
  });

export default i18n;