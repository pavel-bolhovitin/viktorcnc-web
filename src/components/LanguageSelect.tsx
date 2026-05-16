'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

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
      <SelectTrigger className={cn('w-20', className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='ru'>RU</SelectItem>
        <SelectItem value='en'>EN</SelectItem>
      </SelectContent>
    </Select>
  );
}
