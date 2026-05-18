'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function NotFound() {
  const { t } = useTranslation('common');

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <span className='text-6xl font-bold opacity-20'>404</span>
      <span className='text-xl opacity-40'>{t('notFound.title')}</span>
      <Link href='/' className='text-sm underline opacity-60'>
        {t('notFound.backHome')}
      </Link>
    </div>
  );
}
