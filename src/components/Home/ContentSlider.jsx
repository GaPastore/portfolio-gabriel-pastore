import useState from 'react-usestateref';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import styles from "../../styles/components/Home/ContentSlider.module.css"
import DOMPurify from 'dompurify';

import { useTranslation } from 'react-i18next';

function ContentSlider(){

  const { t } = useTranslation();

    const [nIndex, setnIndex] = useState(null);
    const [disabled, setDisabled] = useState(false);
    
    const divRef = useRef();

    const slide = document.getElementsByClassName(styles.sliderContent);

    function setInactive(value) {
        slide[value].classList.remove(styles.active)
        slide[value].classList.add(styles.inactive)
    }

    function setActive(v1, v2) {
        slide[v1].classList.remove(styles.inactive)
        slide[v1].classList.add(styles.active)
        slide[v2].classList.remove(styles.inactive)
        slide[v2].classList.add(styles.active)
    }

    const varSlide = () => {

        for(let i = 0; i < slide.length; i++) {
            setInactive(i)
        }

        if(divRef.current.classList.contains('next')) {

            if(nIndex === null) {
                setActive(1, 6)
            }
            else {
                var v1 = (((nIndex % 10) / 2) + 2) % 5
                var v2 = ((((nIndex % 10) / 2) + 2) % 5) + 5

                setActive(v1, v2)
            }

        }
        else if(divRef.current.classList.contains('prev')) {
            
            if(nIndex === null) {
                setActive(4, 9)
            }
            else {
                var v1 = (nIndex % 10) / 2
                var v2 = ((nIndex % 10) / 2) + 5  

                setActive(v1, v2)
            }

        }
        
    }

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {

        divRef.current.style.animationDelay = '0s'
        divRef.current.style.animationDirection = 'normal'
        divRef.current.classList.add('next')
        varSlide()
        setnIndex(0)
        
    }, [])

    const animReset = () => {

        divRef.current.classList.remove(styles.animClass)
        void divRef.current.offsetWidth
        divRef.current.classList.add(styles.animClass)

    }

    const switchPrev = () => {
        divRef.current.style.animationDelay = '-' + (((10 - nIndex) % 10) + 1) + 's'
    }

    const switchNext = () => {
        divRef.current.style.animationDelay = '-' + (nIndex % 10) + 's'
    }

    const prevItem = () => {

        divRef.current.classList.add('prev')
        divRef.current.classList.remove('next')

        if(divRef.current.style.animationDirection === 'normal'){
            animReset()
            switchPrev()
        }

        varSlide()

        divRef.current.style.animationDirection = 'reverse'
        divRef.current.style.animationPlayState = 'running'
        setDisabled(true)

        setTimeout(() => {
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.style.pointerEvents = 'auto'
            setnIndex((nIndex) => (nIndex - 2 + slide.length) % slide.length)
            setDisabled(false)
        }, 1995)

    };

    const nextItem = () => {

        divRef.current.classList.add('next')
        divRef.current.classList.remove('prev')

        if(divRef.current.style.animationDirection === 'reverse'){
            animReset()
            switchNext()
        }

        varSlide()

        divRef.current.style.animationDirection = 'normal'
        divRef.current.style.animationPlayState = 'running'
        setDisabled(true)

        setTimeout(() => {
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.style.pointerEvents = 'auto'
            setnIndex((nIndex) => (nIndex + 2) % slide.length)
            setDisabled(false)
        }, 1995)

    };

    return(
        <div className={styles.box}>
            <div className={styles.slider}>
                <div ref={divRef} className={styles.sliderBox + " " + styles.animClass}>
                    <div className={styles.sliderContent} data-index="0">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideGames"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/ciencia_da_computacao" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="1">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideDrawings"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/desenhos" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="2">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideDev"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/ciencia_da_computacao" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="3">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideYoutube"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/audiovisual" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="4">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideSomosAlgo"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/audiovisual" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="5">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideGames"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/ciencia_da_computacao" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="6">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideDrawings"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/desenhos" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="7">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideDev"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/ciencia_da_computacao" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="8">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideYoutube"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/audiovisual" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="9">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            <span dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("home.contentSlider.slideSomosAlgo"))}}></span>
                            <Link className={styles.link} to="/portfolio-gabriel-pastore/audiovisual" onClick={scrollTop}>{t("home.contentSlider.clickHere")}</Link>
                        </div>
                    </div>
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