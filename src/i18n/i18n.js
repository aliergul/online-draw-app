import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from "./locales/tr.json";
import en from "./locales/en.json";

const resources = {
    tr: {
      translation: tr,
    },
    en: {
      translation: en,
    },
  };

i18n
  .use(HttpBackend) // Dil dosyalarını yüklemek için
  .use(LanguageDetector) // Kullanıcının dilini algılamak için
  .use(initReactI18next) // React ile entegrasyon için
  .init({
    fallbackLng: 'tr', // Dil bulunamazsa varsayılan dil
    debug: true, // Debug modunu etkinleştirmek için
    interpolation: {
      escapeValue: false, // React zaten XSS korumasına sahip
    },
    resources
  });

export default i18n;
