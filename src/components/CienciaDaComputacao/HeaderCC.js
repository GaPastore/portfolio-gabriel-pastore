import plainHeader from '../../styles/components/PlainHeader.module.css'
import vignette from '../../styles/components/Vignette.module.css'
import Bg from '../../assets/misc/portfolio-cc.mp4'

import { useTranslation } from 'react-i18next';

function HeaderCC(){

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
                <div className={plainHeader.headerText + " oswald-plus"}>{t("menu.ccButton")}</div>
                <div className={vignette.vignette}></div>
                <div className={plainHeader.headerImage}><video preload='auto' autoPlay={true} loop='loop'><source src={Bg} type='video/mp4'/></video></div>
            </div>
            
          </div>
    )
}

export default HeaderCC;