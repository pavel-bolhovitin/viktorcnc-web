'use client';

import { getAnalytics, logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { app } from '@/services/firebase/firebase';

export default function ClientInit() {
  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, 'test_event');
  }, []);
  return null;
}
