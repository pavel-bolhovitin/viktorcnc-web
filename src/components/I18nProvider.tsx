'use client';
import '@/i18n';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export type I18nProviderProps = {
  lng: string;
  children: React.ReactNode;
};

export function I18nProvider({ lng, children }: I18nProviderProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return <>{children}</>;
}
