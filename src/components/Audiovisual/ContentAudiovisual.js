import styles from '../../styles/components/ContentLinks.module.css';
import { useTranslation } from "react-i18next";

function ContentAudiovisual(){

    const { t } = useTranslation();

    return(
        <div>
            <div className={styles.introDiv}>
                    <div className={styles.flexDiv}>
                    <div className={styles.drawImg} id={styles.somosAlgo}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://instagram.com/curtasomosalgo' target='_blank' rel="noopener noreferrer">
                            {t("audiovisual.somosAlgo")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.fitTrack}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://www.figma.com/proto/zxMUrCh7GsqKeHIQN0Pg5l?node-id=0-1&t=otN8lK9XmDXJ5hbo-6' target='_blank' rel="noopener noreferrer">
                            {t("audiovisual.fitTrack")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.youtube}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://youtube.com/@GaPastore' target='_blank' rel="noopener noreferrer">
                            {t("audiovisual.youtube")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContentAudiovisual;