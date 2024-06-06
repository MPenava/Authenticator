import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    ns: ["common", "layout"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${import.meta.env.VITE_APP_BASENAME}/locales/{{lng}}/{{ns}}.json`,
    },
  });

export { i18n };
