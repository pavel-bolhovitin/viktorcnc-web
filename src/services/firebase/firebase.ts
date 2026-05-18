import type { Analytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBK7D_GzmfWWwH1Icdjf6ZkG2DDWgmgZQM',
  authDomain: 'viktorcnc-68e48.firebaseapp.com',
  projectId: 'viktorcnc-68e48',
  storageBucket: 'viktorcnc-68e48.firebasestorage.app',
  messagingSenderId: '74231499364',
  appId: '1:74231499364:web:f3d145cdfbf28d49bded71',
  measurementId: 'G-W4L27N6HX0',
};

export const app = initializeApp(firebaseConfig);

let analytics: Analytics | null = null;

async function getAnalytics(): Promise<Analytics> {
  if (analytics) return analytics;
  const { getAnalytics: init } = await import('firebase/analytics');
  analytics = init(app);
  return analytics;
}

export async function trackEvent(
  name: string,
  params?: Record<string, unknown>,
) {
  const { logEvent } = await import('firebase/analytics');
  logEvent(await getAnalytics(), name, params);
}
