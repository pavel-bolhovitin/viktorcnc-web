'use client';
import { useEffect } from 'react';
import { trackEvent } from '@/services/firebase/firebase';

export default function ClientInit() {
  useEffect(() => {
    trackEvent('test_1');
  }, []);
  return null;
}
