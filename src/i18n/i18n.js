import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";
import translationPT from "./pt.json";

import headerPtPath from '../assets/texts/headerPt.php'
import headerEnPath from '../assets/texts/headerEn.php'


Promise.all([
  fetch(headerPtPath).then(res => res.text()),
  fetch(headerEnPath).then(res => res.text()),
]).then(([headerPt, headerEn]) => {

  const parser = new DOMParser()

  i18n
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
})

export default i18n;