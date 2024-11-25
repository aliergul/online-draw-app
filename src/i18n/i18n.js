import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "./locales/tr.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    },
  },
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
