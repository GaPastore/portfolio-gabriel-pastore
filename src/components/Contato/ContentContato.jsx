import styles from '../../styles/components/Contato/Content.module.css';
import { useTranslation } from 'react-i18next';

import linkedinSvg from '../../assets/misc/linkedin.svg?url';
import instagramSvg from '../../assets/misc/instagram.svg?url';
import githubSvg from '../../assets/misc/github.svg?url';
import itchIoSvg from '../../assets/misc/itch-io.svg?url';
import behanceSvg from '../../assets/misc/behance.svg?url';

function ContentContato(){
  const { t } = useTranslation();

  const socialLinks = [
    {
      id: 'linkedin',
      svg: linkedinSvg,
      iconId: 'linkedin',
      text: 'Gabriel Pastore - Linkedin 🔗',
      url: 'https://www.linkedin.com/in/gabriel-pastore-b11506206/',
    },
    {
      id: 'instagram',
      svg: instagramSvg,
      iconId: 'instagram',
      text: `@pastore_drawing - Instagram ${t("contact.drawings")} 🔗`,
      url: 'https://www.instagram.com/pastore_drawing',
    },
    {
      id: 'github',
      svg: githubSvg,
      iconId: 'github',
      text: 'GaPastore - GitHub 🔗',
      url: 'https://github.com/GaPastore',
    },
    {
      id: 'itch-io',
      svg: itchIoSvg,
      iconId: 'itch-io',
      text: 'GaPastore - itch.io 🔗',
      url: 'https://gapastore.itch.io/',
    },
    {
      id: 'behance',
      svg: behanceSvg,
      iconId: 'behance',
      text: 'GaPastore - Behance 🔗',
      url: 'https://www.behance.net/gapastore',
    },
  ];

  return(
    <div>
      <div className={styles.introDiv}>
        <div className={styles.socialBox}>
          {socialLinks.map((item) => (
            <a
              key={item.id}
              className={"oswald-plus " + styles.socialItem}
              href={item.url}
              target='_blank'
              rel="noopener noreferrer"
            >
              <svg className={styles.profileImg}>
                <use href={`${item.svg}#${item.iconId}`} />
              </svg>
              <span className={styles.introText}>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentContato;