'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { defaultLng } from '@/i18n';

export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${defaultLng}`);
  }, [router]);
  return null;
}
