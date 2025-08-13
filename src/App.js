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
    <Router>
      <Menu/>
      <Routes>
        <Route path='/portfolio-gabriel-pastore' element={<Home />} />
        <Route path='/portfolio-gabriel-pastore/audiovisual' element={<Audiovisual />} />
        <Route path='/portfolio-gabriel-pastore/ciencia_da_computacao' element={<CienciaDaComputacao />} />
        <Route path='/portfolio-gabriel-pastore/desenhos' element={<Desenhos />} />
        <Route path='/portfolio-gabriel-pastore/shot' element={<Shot />} />
        <Route path='/portfolio-gabriel-pastore/contato' element={<Contato />} />
      </Routes>
    </Router>
  );

}

export default App;
