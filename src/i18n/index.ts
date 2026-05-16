import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { defaultLng, defaultNS, namespaces, supportedLangs } from './config';

export * from './config';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLng,
    supportedLngs: supportedLangs,
    detection: {
      lookupLocalStorage: STORAGE_KEYS.language,
      order: [
        'localStorage',
        'path',
        'querystring',
        'hash',
        'cookie',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'subdomain',
      ],
    },
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
