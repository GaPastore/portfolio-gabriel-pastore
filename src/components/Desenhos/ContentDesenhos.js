import React, { useState } from 'react';
import styles from '../../styles/components/ContentLinks.module.css';
import desenhos from '../../styles/components/Desenhos/Drawings.module.css'

function Content(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.flexDiv}>
                    <div className={desenhos.drawImg} id={desenhos.tcd}></div>
                    <div className={desenhos.drawImg} id={desenhos.joshua}></div>
                    <div className={desenhos.drawImg} id={desenhos.nika}></div>
                    <div className={desenhos.drawImg} id={desenhos.homemAranha}></div>
                    <div className={desenhos.drawImg} id={desenhos.yamato}></div>
                    <div className={desenhos.drawImg} id={desenhos.shinji}></div>
                    <div className={desenhos.drawImg} id={desenhos.bill}></div>
                    <div className={desenhos.drawImg} id={desenhos.kirby}></div>
                    <div className={desenhos.drawImg} id={desenhos.kiraQueen}></div>
                    <div className={desenhos.drawImg} id={desenhos.deltarune}></div>
                    <div className={desenhos.drawImg} id={desenhos.jotaro}></div>
                </div>
            </div>
        </div>
    )

}

export default Content;