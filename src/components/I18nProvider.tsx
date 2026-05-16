'use client';
import '@/i18n';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { supportedLangs } from '@/i18n/config';
import { Button } from './ui/button';

const langLabel: Record<string, string> = {
  ru: 'Русский',
  en: 'English',
};

const switchPrompt: Record<string, string> = {
  ru: 'Switch to',
  en: 'Переключить на',
};

export type I18nProviderProps = {
  lng: string;
  children: React.ReactNode;
};

export function I18nProvider({ lng, children }: I18nProviderProps) {
  const { i18n } = useTranslation();
  const [urlLang, setUrlLang] = useState<string | null>(null);

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

  return (
    <>
      {urlLang && (
        <div className='fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-lg border border-border bg-card px-4 py-2 text-sm text-card-foreground shadow-md'>
          <span>
            {switchPrompt[i18n.language]} {langLabel[urlLang]}?
          </span>
          <Button size='sm' variant='outline' onClick={switchToUrl}>
            {langLabel[urlLang]}
          </Button>
          <button
            type='button'
            onClick={() => setUrlLang(null)}
            className='text-muted-foreground hover:text-foreground'
          >
            <X size={14} />
          </button>
        </div>
      )}
      {children}
    </>
  );
}
