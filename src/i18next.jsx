// src/i18next.js
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nextBackend from "i18next-http-backend";  // To'g'ri import
import { initReactI18next } from 'react-i18next';

import enTranslate from "../public/Locales/en.json";
import ruTranslate from "../public/Locales/ru.json";

i18next
  .use(LanguageDetector)
  .use(i18nextBackend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslate,
      },
      ru: {
        translation: ruTranslate,
      },
    },
    fallbackLng: "en",  // Agar til topilmasa, ingliz tiliga qaytadi
    debug: true,  // Kodingizni tekshirish uchun
    interpolation: {
      escapeValue: false,  // React uchun xavfsizdir
    },
    backend: {
      // Bu backend config o'zingizning serveringizga qarab o'zgartirishingiz mumkin
      loadPath: '/locales/{{lng}}/translation.json',  // Til fayllarining manzili
    },
  });

export default i18next;
