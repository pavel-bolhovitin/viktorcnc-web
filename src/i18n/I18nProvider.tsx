'use client';
import '@/i18n';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { defaultLng, supportedLangs } from '@/i18n/config';
import { LangSwitchBanner } from './LangSwitchBanner';
import { getLocaleDisplayName } from './utils';

export type I18nProviderProps = {
  lng: string;
  children: React.ReactNode;
};

export function I18nProvider({ lng, children }: I18nProviderProps) {
  const { i18n } = useTranslation();
  const [urlLang, setUrlLang] = useState<string | null>(null);
  const { t } = useTranslation('ui', { lng: urlLang ?? defaultLng });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.language);

    if (stored && (supportedLangs as readonly string[]).includes(stored)) {
      if (i18n.language !== stored) {
        i18n.changeLanguage(stored);
      }
      if (stored !== lng) {
        setUrlLang(lng);
      }
    } else {
      if (i18n.language !== lng) {
        i18n.changeLanguage(lng);
      }
    }
  }, [lng, i18n]);

  const switchToUrl = () => {
    if (!urlLang) return;
    localStorage.setItem(STORAGE_KEYS.language, urlLang);
    i18n.changeLanguage(urlLang);
    setUrlLang(null);
  };

  const localeDisplayName = getLocaleDisplayName(urlLang ?? defaultLng);

  return (
    <>
      {urlLang && (
        <LangSwitchBanner
          switchLabel={localeDisplayName}
          onSwitch={switchToUrl}
          onDismiss={() => setUrlLang(null)}
        >
          {t('switchPrompt')} {localeDisplayName}?
        </LangSwitchBanner>
      )}
      {children}
    </>
  );
}
