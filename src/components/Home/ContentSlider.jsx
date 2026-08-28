import useState from 'react-usestateref';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import styles from "../../styles/components/Home/ContentSlider.module.css"
import DOMPurify from 'dompurify';

import { useTranslation } from 'react-i18next';

function ContentSlider(){

    const { t } = useTranslation();
    
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    const [disabled, setDisabled] = useState(false);

    const totalItems = 15;
    const step = 100 / totalItems;

    const [activeIndex, setActiveIndex] = useState(5);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextItem = () => {
        setIsTransitioning(true);
        setActiveIndex(activeIndex + 1);
    }

    const prevItem = () => {
        setIsTransitioning(true);
        setActiveIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = (e) => {
        if (e.target !== e.currentTarget) return;
        if (activeIndex >= 10) {
            setIsTransitioning(false); 
            setActiveIndex((prev) => prev - 5);
        }
        else if (activeIndex < 5) {
            setIsTransitioning(false);
            setActiveIndex((prev) => prev + 5);
        }
    };

    const slidesData = []

    for(let i = 0; i <= 10 ; i += 5) {
        slidesData.push({ id: i+0, textKey: "home.contentSlider.slideGames", link: "/ciencia_da_computacao" });
        slidesData.push({ id: i+1, textKey: "home.contentSlider.slideDrawings", link: "/desenhos" });
        slidesData.push({ id: i+2, textKey: "home.contentSlider.slideDev", link: "/ciencia_da_computacao" });
        slidesData.push({ id: i+3, textKey: "home.contentSlider.slideYoutube", link: "/audiovisual" });
        slidesData.push({ id: i+4, textKey: "home.contentSlider.slideSomosAlgo", link: "/audiovisual" });
    }

    return(
        <div className={styles.box}>
            <div className={styles.slider}>
                <div className={`${styles.sliderBox} ${styles.animClass}`}  onTransitionEnd={handleTransitionEnd} 
                style={{ transform: `translateX(-${activeIndex * step}%)`, 
                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'}}>
                    {slidesData.map((item, index) => {

                        const isActive = (index % 5) === (activeIndex % 5);
                        
                        return(
                            <div key={index} 
                            className={`${styles.sliderContent} ${isActive ? styles.active : styles.inactive}`} 
                            data-index={item.id}>
                                <div className={styles.sliderOverlay}></div>
                                <div className={styles.sliderInside + " oswald-geral"}>
                                    <span 
                                    dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t(item.textKey))}}>
                                    </span>
                                    <Link className={styles.link} to={item.link} onClick={scrollTop}>
                                    {t("home.contentSlider.clickHere")}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.buttonBox}>
                <div onClick={disabled ? () => {} : prevItem} id={styles.leftButton}></div>
                <div onClick={disabled ? () => {} : nextItem} id={styles.rightButton}></div>
            </div>
        </div>
    )
}

export default ContentSlider;