import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import english from "./translations/english";
import spanish from "./translations/spanish";

const locale = Intl.DateTimeFormat().resolvedOptions().locale;
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      // en: {
      //   translations: english,
      //  },
      es: {
        translations: spanish,
      },
    },

    lng: locale,
    fallbackLng: "es",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;