import plainHeader from '../../styles/components/PlainHeader.module.css'
import vignette from '../../styles/components/Vignette.module.css'
import Bg from '../../assets/misc/youtube.png'

import { useTranslation } from 'react-i18next';

function HeaderAudiovisual(){

  const { t } = useTranslation();

    const urls = [
      {
        id: 1,
        content: Bg
      }
    ];

    return(
        <div>
            <div className={plainHeader.header}>
                <div className={plainHeader.headerText + " oswald-plus"}>{t("menu.avButton")}</div>
                <div className={vignette.vignette}></div>
                <div className={plainHeader.headerImage} style={{backgroundImage: `url(${urls[0].content})`}}></div>
            </div>
            
          </div>
    )
}

export default HeaderAudiovisual;