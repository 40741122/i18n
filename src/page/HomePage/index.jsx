import { useTranslation } from "react-i18next";
import {useNavigate} from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const {t, i18n} = useTranslation();
  const {t: tn } = useTranslation("namespace1");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng)
  }

  // 檢測該翻譯存不存在
  console.log(i18n.exists("test")) 

  // 新增固定語言的函式
  const tw = i18n.getFixedT("tw");
  console.log(tw("test"))

  // 當前使用的語言
  console.log(i18n.language)

  // 當前已加載的語言
  console.log(i18n.languages)

  // 最後解析出來的語言
  console.log(i18n.resolvedLanguage)

  // 檢查namespace是否載入成功
  console.log(i18n.hasLoadedNamespace("namespace1"))

  return (
  <>
    <h1>{t("test")}</h1>
    <h1>{tn("welcome")}</h1>
    <button onClick={() => changeLanguage("tw")}>中文</button>
    <button onClick={() => changeLanguage("en")}>English</button>
    <button onClick={() => {
      navigate('/2')
    }}>到第二頁</button>
  </>)
} 