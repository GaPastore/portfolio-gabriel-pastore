import useState from 'react-usestateref';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from "../../styles/components/Home/ContentSlider.module.css"

function ContentSlider() {

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

    window.onload = () => {

        divRef.current.style.animationDelay = '0s'
        divRef.current.style.animationDirection = 'normal'
        divRef.current.classList.add('next')
        varSlide()
        setnIndex(0)
        
    }

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
                            Meu currículo inclui o desenvolvimento de alguns jogos de pequeno porte, um desses exemplos
                            é o Micescape: um jogo 2D desenvolvido em Unity com elementos de terror. Para ver esse e mais
                            projetos, <Link className={styles.link} to="/ciencia_da_computacao" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="1">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Há muitos anos tenho como hobby as artes, principalmente através de desenhos - sejam eles físicos
                            ou digitais. Se você quer ver algumas das artes digitais que já fiz durante o tempo, <Link className={styles.link} to="/desenhos" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="2">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Desde 2018 tenho estudado programação e outras questões relacionadas à informática, com diversos projetos para demonstração de minhas habilidades. O melhor exemplo para
                            isso é esse site: todo seu planejamento e desenvolvimento foi feito por mim. 
                            Para acessar esses projetos, <Link className={styles.link} to="/ciencia_da_computacao" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="3">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Desde que comecei a estudar na área de audiovisual, tenho como hobby a edição de imagens e vídeos, produzindo 
                            para amigos, faculdade, trabalho ou apenas para mim. Um exemplo 
                            desses projetos é um canal do YouTube em que posto vídeos para me divertir e 
                            testar minhas habilidades como editor. Para acessá-lo ou ver outros projetos em audiovisual, <Link className={styles.link} to="/audiovisual" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="4">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Conforme meus estudos em audiovisual e programação avançaram, 
                            desenvolvi elementos visuais, logos e interfaces para diversos projetos. Isso pode ser 
                            visto no Instagram de "Somos Algo?", em que desenvolvi as artes e vídeos de cada post. Para ver esse e mais projetos em audiovisual, <Link className={styles.link} to="/audiovisual" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="5">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Meu currículo inclui o desenvolvimento de alguns jogos de pequeno porte, um desses exemplos
                            é o Micescape: um jogo 2D desenvolvido em Unity com elementos de terror. Para ver esse e mais
                            projetos, <Link className={styles.link} to="/ciencia_da_computacao" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="6">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Há muitos anos tenho como hobby as artes, principalmente através de desenhos - sejam eles físicos
                            ou digitais. Se você quer ver algumas das artes digitais que já fiz durante o tempo, <Link className={styles.link} to="/desenhos" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="7">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Desde 2018 tenho estudado programação e outras questões relacionadas à informática, possuindo
                            diversos projetos acadêmicos para demonstração de minhas habilidades. Para acessar esses
                            projetos, <Link className={styles.link} to="/ciencia_da_computacao" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="8">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Desde que comecei a estudar na área de audiovisual, tenho como hobby a edição de imagens e vídeos, produzindo 
                            para amigos, faculdade, trabalho ou apenas para mim. Um exemplo 
                            desses projetos é um canal do YouTube em que posto vídeos para me divertir e 
                            testar minhas habilidades como editor. Para acessá-lo ou ver outros projetos em audiovisual, <Link className={styles.link} to="/audiovisual" onClick={scrollTop}>clique aqui.</Link>
                        </div>
                    </div>
                    <div className={styles.sliderContent} data-index="9">
                        <div className={styles.sliderOverlay}></div>
                        <div className={styles.sliderInside  + " oswald-geral"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum ante eget quam 
                            condimentum pretium. Fusce aliquam fringilla dui ut venenatis. Mauris tristique 
                            mattis ligula eu viverra. Morbi justo purus, luctus et imperdiet nec, accumsan in 
                            ex. Donec ut nibh et risus consequat venenatis sed a est. In rhoncus, nunc at faucibus 
                            pulvinar, ex nisl aliquet elit, eu porta nunc urna id urna. Fusce at ipsum euismod, 
                            iaculis mauris id, facilisis turpis. Nulla ac dapibus quam, ut vulputate leo. Pellentesque 
                            nec ultricies sem, et vulputate lacus. Cras at ultricies ipsum. Cras id consequat erat.
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