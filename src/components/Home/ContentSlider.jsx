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

    const totalItems = 10;
    const step = 100 / totalItems;

    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextItem = () => {
        setIsTransitioning(true);
        setActiveIndex(activeIndex + 1);
    }

    const prevItem = () => {
        if(activeIndex === 0) {
            setIsTransitioning(false);
            setActiveIndex(5);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                    setActiveIndex(4);
                })
            })
        }
        else {
            setIsTransitioning(true);
            setActiveIndex(activeIndex - 1);
        }

    }

    const handleTransitionEnd = () => {
        if (activeIndex >= 5) {
            setIsTransitioning(false); 
            setActiveIndex(0);
        }
    };

    const slidesData = [
        { id: 0, textKey: "home.contentSlider.slideGames", link: "/ciencia_da_computacao" },
        { id: 1, textKey: "home.contentSlider.slideDrawings", link: "/desenhos" },
        { id: 2, textKey: "home.contentSlider.slideDev", link: "/ciencia_da_computacao" },
        { id: 3, textKey: "home.contentSlider.slideYoutube", link: "/audiovisual" },
        { id: 4, textKey: "home.contentSlider.slideSomosAlgo", link: "/audiovisual" },

        { id: 5, textKey: "home.contentSlider.slideGames", link: "/ciencia_da_computacao" },
        { id: 6, textKey: "home.contentSlider.slideDrawings", link: "/desenhos" },
        { id: 7, textKey: "home.contentSlider.slideDev", link: "/ciencia_da_computacao" },
        { id: 8, textKey: "home.contentSlider.slideYoutube", link: "/audiovisual" },
        { id: 9, textKey: "home.contentSlider.slideSomosAlgo", link: "/audiovisual" },
    ];

    return(
        <div className={styles.box}>
            <div className={styles.slider}>
                <div className={`${styles.sliderBox} ${styles.animClass}`}  onTransitionEnd={handleTransitionEnd} 
                style={{ transform: `translateX(-${activeIndex * step}%)`, 
                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'}}>
                    {slidesData.map((item, index) => {

                        const isActive = index === activeIndex || index === (activeIndex + 5) % 10
                        
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