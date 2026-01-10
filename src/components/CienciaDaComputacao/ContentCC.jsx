import styles from '../../styles/components/ContentLinks.module.css';
import { useTranslation } from "react-i18next";

function ContentCC(){

    const { t } = useTranslation();

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.flexDiv}>
                    <div className={styles.drawImg} id={styles.chronolight}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://mutoustudios.itch.io/chronolight' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.chronolight")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.micescape}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://mutoustudios.itch.io/micescape' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.micescape")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.iconomonster}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://github.com/GaPastore/a3-icon-generator/tree/main' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.iconomonster")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.imageasy}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://github.com/GiuliaNogoliver/estruturas_matematicas/tree/branch-final' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.imageasy")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.curriculumAI}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://github.com/Curriculum-Vitae-AI' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.curriculumAI")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.greenPrint}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://github.com/GaPastore/A3-Java' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.greenPrint")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.equacionando}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://gapastore.itch.io/equacionando' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.equacionando")}
                        </a>
                    </div>
                    <div className={styles.drawImg} id={styles.theDomeOfHope}>
                        <a className={styles.imgBox + " oswald-geral"} href='https://gapastore.itch.io/the-dome-of-hope' target='_blank' rel="noopener noreferrer">
                            {t("computerScience.theDomeOfHope")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContentCC;