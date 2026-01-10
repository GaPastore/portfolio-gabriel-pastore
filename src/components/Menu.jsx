import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Home/Menu.module.css';
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

function Menu(){

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };

    const [menuHidden, setMenuHidden] = useState(false);
    
    const toggleButton = () => {
        setMenuHidden(!menuHidden);
    };

    const [lngHidden, setLngHidden] = useState(false);
    
    const toggleLngButton = () => {
        setLngHidden(!lngHidden);
    };

    const classesText = styles.menuText + " oswald-geral";

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    const homeOnClick = () => {
        scrollTop()
        window.location.replace("/portfolio-gabriel-pastore")
    }

    return(
        <div>
            <div className={`${styles.menuBg} ${menuHidden ? styles.visible : ''}`}></div>
            <div className={`${styles.menuBox} ${menuHidden ? styles.visible : ''}`}>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/" onClick={homeOnClick}>{t("menu.homeButton")}</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/audiovisual" onClick={scrollTop}>{t("menu.avButton")}</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/ciencia_da_computacao" onClick={scrollTop}>{t("menu.ccButton")}</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/desenhos" onClick={scrollTop}>{t("menu.drawButton")}</Link>
                </button>
                {/*<button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/shot" onClick={scrollTop}>SHOT</Link>
                </button>*/}
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/contato" onClick={scrollTop}>{t("menu.contButton")}</Link>
                </button>
            </div>
            <div className={styles.menuBt} onClick={toggleButton}>
                <div className={`${styles.top} ${menuHidden ? styles.open : ''}`}></div>
                <div className={`${styles.bottom} ${menuHidden ? styles.open : ''}`}></div>
            </div>
            <div className={styles.languageDiv}>
                <div className={styles.first}>
                    <div className={styles.dropBt + " oswald-plus"} onClick={toggleLngButton}>{t("menu.lngButton")}</div>            
                    <div className={`${styles.dropContent} ${lngHidden ? styles.lngOpen : ''}`}>
                        <button className={`${styles.dropBt} ${" oswald-geral"}`} onClick={() => {changeLanguage("pt"); toggleLngButton()}}>PT-BR</button>
                        <button className={`${styles.dropBt} ${" oswald-geral"}`} onClick={() => {changeLanguage("en"); toggleLngButton()}}>EN-US</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;