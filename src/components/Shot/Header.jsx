import React, { useState } from 'react';
import styles from '../../styles/components/Home/Header.module.css';

function Header(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.holderImg}>
                    <div className={styles.profileImg}></div>
                </div>
                <div className={"oswald-geral " + styles.introText}>
                    Possuo conhecimento em áreas da tecnologia voltadas ao desenvolvimento de softwares, 
                    desenvolvimento de sites e design gráfico. Em 2014 tive a oportunidade de estudar na
                    escola SAGA, na qual fiz o curso Start e aprendi muito sobre design gráfico, 
                    principalmente sobre edição audiovisual, edição de imagens e arte vetorial. Atualmente
                    cursando Ciência da Computação na Universidade São Judas Tadeu, estou em contato com o
                    mundo da programação desde 2018, quando iniciei o curso técnico de Informática juntamente 
                    ao Ensino Médio na escola ENIAC.
                </div>
            </div>
        </div>
    )

}

export default Header;