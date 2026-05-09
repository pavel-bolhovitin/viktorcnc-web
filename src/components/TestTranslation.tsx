'use client';
import { useTranslation } from 'react-i18next';

export function TestTranslation() {
  const { t } = useTranslation('common');
  return <p className='p-4 text-muted-foreground'>{t('loading')}</p>;
}
