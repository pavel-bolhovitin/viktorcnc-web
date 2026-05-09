import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { defaultLng, defaultNS, namespaces } from './config';

export * from './config';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: defaultLng,
    fallbackLng: defaultLng,
    defaultNS,
    ns: namespaces,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // React escapes by default, double-escaping not needed
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
