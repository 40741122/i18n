import { useTranslation } from "react-i18next";
import {useNavigate} from 'react-router-dom';

export default function SecondPage() {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
 
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng)
  }

  return (
  <>
    <h1>{t("learn")}</h1>;
    <button onClick={() => changeLanguage("tw")}>中文</button>
    <button onClick={() => changeLanguage("en")}>English</button>
    <button onClick={() => {
      navigate('/')
    }}>回主頁</button>
  </>)
} 