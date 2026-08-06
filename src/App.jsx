import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import "./i18n/i18n";
import Home from './pages/Home';
import Audiovisual from './pages/Audiovisual';
import CienciaDaComputacao from './pages/CienciaDaComputacao';
import Desenhos from './pages/Desenhos';
import Shot from './pages/Shot';
import Contato from './pages/Contato';
import Menu from './components/Menu';

function App() {

  
  const { t, i18n } = useTranslation();

  useEffect(()=>{
      const savedLang = localStorage.getItem("lang");
      if (savedLang) {
          i18n.changeLanguage(savedLang);
      }
  },[])

  return (
    <Router basename="/portfolio-gabriel-pastore">
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/audiovisual' element={<Audiovisual />} />
        <Route path='/ciencia_da_computacao' element={<CienciaDaComputacao />} />
        <Route path='/desenhos' element={<Desenhos />} />
        <Route path='/shot' element={<Shot />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </Router>
  );

}

export default App;
