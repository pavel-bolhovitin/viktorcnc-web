'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import i18n from '@/i18n';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${i18n.language}`);
  }, [router]);
  return null;
}
