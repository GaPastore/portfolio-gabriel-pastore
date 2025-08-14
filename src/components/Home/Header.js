import styles from '../../styles/components/Home/Header.module.css';
import DOMPurify from 'dompurify';

import { useTranslation } from 'react-i18next';

function Header(){

  const { t } = useTranslation();

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.holderImg}>
                    <div className={styles.profileImg}></div>
                </div>
                <div className={"oswald-geral " + styles.introText} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(t("home.header.mainTxt"))}}></div>
            </div>
        </div>
    )

}

export default Header;