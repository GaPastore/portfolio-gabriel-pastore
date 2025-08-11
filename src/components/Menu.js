import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Home/Menu.module.css';

function Menu(){

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
                    <Link to="/portfolio-gabriel-pastore" onClick={homeOnClick}>PÁGINA INICIAL</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/audiovisual" onClick={scrollTop}>PROJETOS EM AUDIOVISUAL</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/ciencia_da_computacao" onClick={scrollTop}>CIÊNCIA DA COMPUTAÇÃO</Link>
                </button>
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/desenhos" onClick={scrollTop}>DESENHOS</Link>
                </button>
                {/*<button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/shot" onClick={scrollTop}>SHOT</Link>
                </button>*/}
                <button className={`${classesText} ${menuHidden ? styles.visible : ''}`} onClick={toggleButton}>
                    <Link to="/portfolio-gabriel-pastore/contato" onClick={scrollTop}>CONTATO</Link>
                </button>
            </div>
            <div className={styles.menuBt} onClick={toggleButton}>
                <div className={`${styles.top} ${menuHidden ? styles.open : ''}`}></div>
                <div className={`${styles.bottom} ${menuHidden ? styles.open : ''}`}></div>
            </div>
        </div>
    )
}

export default Menu;