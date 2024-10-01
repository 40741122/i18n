import logo from './logo.svg';
import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from './page/HomePage';
import SecondPage from './page/SecondPage';
import HomePageO from './page/HomePageO';
import SecondPageO from './page/SecondPageO';
import './lng/i18n'
import './lngo/i18n'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="2" element={<SecondPage />} />
        <Route path='o1' element={<HomePageO />} />
        <Route path="o2" element={<SecondPageO />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
