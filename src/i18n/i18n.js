import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";
import translationPT from "./pt.json";

import headerPtPath from '../assets/texts/pt/header.php'
import headerEnPath from '../assets/texts/en/header.php'
import slideGamesPtPath from '../assets/texts/pt/slideGames.php'
import slideGamesEnPath from '../assets/texts/en/slideGames.php'
import slideDrawingsPtPath from '../assets/texts/pt/slideDrawings.php'
import slideDrawingsEnPath from '../assets/texts/en/slideDrawings.php'
import slideDevPtPath from '../assets/texts/pt/slideDev.php'
import slideDevEnPath from '../assets/texts/en/slideDev.php'
import slideYoutubePtPath from '../assets/texts/pt/slideYoutube.php'
import slideYoutubeEnPath from '../assets/texts/en/slideYoutube.php'
import slideSomosAlgoPtPath from '../assets/texts/pt/slideSomosAlgo.php'
import slideSomosAlgoEnPath from '../assets/texts/en/slideSomosAlgo.php'


export const initI18n = async () => {
  const [headerPt, headerEn, slideGamesPt, slideGamesEn, 
    slideDrawingsPt, slideDrawingsEn, slideDevPt, slideDevEn,
    slideYoutubePt, slideYoutubeEn, slideSomosAlgoPt, slideSomosAlgoEn] = await Promise.all([
    fetch(headerPtPath).then(res => res.text()),
    fetch(headerEnPath).then(res => res.text()),
    fetch(slideGamesPtPath).then(res => res.text()),
    fetch(slideGamesEnPath).then(res => res.text()),
    fetch(slideDrawingsPtPath).then(res => res.text()),
    fetch(slideDrawingsEnPath).then(res => res.text()),
    fetch(slideDevPtPath).then(res => res.text()),
    fetch(slideDevEnPath).then(res => res.text()),
    fetch(slideYoutubePtPath).then(res => res.text()),
    fetch(slideYoutubeEnPath).then(res => res.text()),
    fetch(slideSomosAlgoPtPath).then(res => res.text()),
    fetch(slideSomosAlgoEnPath).then(res => res.text()),
  ]);

  await i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            ...translationEN,
            home: {
              ...translationEN.home,
              header: {
                ...translationEN.home.header,
                mainTxt: headerEn
              },
              contentSlider : {
                ...translationEN.home.contentSlider,
                slideGames: slideGamesEn,
                slideDrawings: slideDrawingsEn,
                slideDev: slideDevEn,
                slideYoutube: slideYoutubeEn,
                slideSomosAlgo: slideSomosAlgoEn
              }
            }
          }
        },
        pt: {
          translation: {
            ...translationPT,
            home: {
              ...translationPT.home,
              header: {
                ...translationPT.home.header,
                mainTxt: headerPt
              },
              contentSlider : {
                ...translationPT.home.contentSlider,
                slideGames: slideGamesPt,
                slideDrawings: slideDrawingsPt,
                slideDev: slideDevPt,
                slideYoutube: slideYoutubePt,
                slideSomosAlgo: slideSomosAlgoPt
              }
            }
          }
        }
      },
      fallbackLng: "pt",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
    });

    return i18n;

};
