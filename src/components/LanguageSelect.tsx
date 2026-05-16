'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { supportedLangs } from '@/i18n/config';
import { getLocalesSelfDisplayNames } from '@/i18n/utils';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const selfDisplayNames = Object.fromEntries(
  Object.entries(getLocalesSelfDisplayNames([...supportedLangs])).sort(([, a], [, b]) =>
    a.localeCompare(b),
  ),
);

export type LanguageSelectProps = {
  className?: string;
};

export function LanguageSelect({ className }: LanguageSelectProps) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lng: string) => {
    localStorage.setItem(STORAGE_KEYS.language, lng);
    const segments = pathname.split('/');
    segments[1] = lng;
    router.push(segments.join('/') + window.location.hash);
  };

  return (
    <Select value={i18n.language} onValueChange={changeLang}>
      <SelectTrigger className={cn('capitalize', className)}>
        <SelectValue />
      </SelectTrigger>

      <SelectContent position='popper'>
        {Object.entries(selfDisplayNames).map(([locale, name]) => (
          <SelectItem key={locale} value={locale} className='capitalize'>
            {name} <span className='uppercase'>{`(${locale})`}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
