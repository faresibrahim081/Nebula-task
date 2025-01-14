import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en },
//       ar: { translation: ar },
//     },
//     lng: 'en', // اللغة الافتراضية
//     fallbackLng: 'en', // اللغة البديلة إذا لم تكن الترجمة متوفرة
//     interpolation: {
//       escapeValue: false, // React يقوم بالهروب من النصوص تلقائيًا
//     },
//   });
