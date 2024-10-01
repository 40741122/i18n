import {useNavigate} from 'react-router-dom';
import i18n from '../../lngo/i18n';
import { useState } from 'react';

export default function HomePageO() {
  const navigate = useNavigate();
  const [lng, setLng] =useState(localStorage.getItem('i18nextlLng'))

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setLng(lng)
  };

  return (
  <>
    <h1>{i18n.t('test')}</h1>
    <button onClick={() => switchLanguage('en')}>English</button>
    <button onClick={() => switchLanguage('tw')}>中文</button>
    <button onClick={() => {
      navigate('/o2')
    }}>到第二頁</button>
  </>)
} 