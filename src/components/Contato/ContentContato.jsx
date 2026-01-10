import styles from '../../styles/components/Contato/Content.module.css';

import { useTranslation } from 'react-i18next';

function ContentContato(){
  
  const { t } = useTranslation();

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.socialBox}>
                    <div id={styles.linkedin} className={styles.profileImg}></div>
                    <a className={"oswald-plus " + styles.introText} href='https://www.linkedin.com/in/gabriel-pastore-b11506206/' target='_blank' rel="noopener noreferrer">
                        Gabriel Pastore - Linkedin 🔗
                    </a>
                    <div id={styles.instagram} className={styles.profileImg}></div>
                    <a className={"oswald-plus " + styles.introText} href='https://www.instagram.com/pastore_drawing' target='_blank' rel="noopener noreferrer">
                        @pastore_drawing - Instagram {t("contact.drawings")} 🔗
                    </a>
                    <div id={styles.github} className={styles.profileImg}></div>
                    <a className={"oswald-plus " + styles.introText} href='https://github.com/GaPastore' target='_blank' rel="noopener noreferrer">
                        GaPastore - GitHub 🔗
                    </a>
                    <div id={styles.itchIo} className={styles.profileImg}></div>
                    <a className={"oswald-plus " + styles.introText} href='https://gapastore.itch.io/' target='_blank' rel="noopener noreferrer">
                        GaPastore - itch.io 🔗
                    </a>
                </div>
            </div>
        </div>
    )

}

export default ContentContato;