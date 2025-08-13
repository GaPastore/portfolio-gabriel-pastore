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
                    <Link to="/portfolio-gabriel-pastore" onClick={homeOnClick}>{t("menu.homeButton")}</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/audiovisual" onClick={scrollTop}>{t("menu.avButton")}</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/ciencia_da_computacao" onClick={scrollTop}>{t("menu.ccButton")}</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/desenhos" onClick={scrollTop}>{t("menu.drawButton")}</Link>
                </button>
                {/*<button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/shot" onClick={scrollTop}>SHOT</Link>
                </button>*/}
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/contato" onClick={scrollTop}>{t("menu.contButton")}</Link>
                </button>
            </div>
            <div className={styles.menuBt} onClick={toggleButton}>
                <div className={`${styles.top} ${menuHidden ? styles.open : ''}`}></div>
                <div className={`${styles.bottom} ${menuHidden ? styles.open : ''}`}></div>
            </div>
            <div className={styles.languageDiv}>
                <div className={styles.dropBt + " oswald-plus"}>{t("menu.lngButton")}</div>
                <div className={styles.dropContent}>
                    <button className={styles.dropBt + " oswald-geral"} onClick={() => changeLanguage("pt")}>PT-BR</button>
                    <button className={styles.dropBt  + " oswald-geral"} onClick={() => changeLanguage("en")}>EN-US</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;