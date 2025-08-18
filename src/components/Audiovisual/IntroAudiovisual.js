import styles from '../../styles/components/Intro.module.css';
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';

function IntroAudiovisual(){

    const { t } = useTranslation();

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.introText + " oswald-geral"} 
                dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(t("audiovisual.intro"))}}/>
            </div>
        </div>
    )

}

export default IntroAudiovisual;