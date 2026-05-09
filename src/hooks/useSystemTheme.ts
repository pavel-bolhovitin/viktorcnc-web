'use client';

import { useEffect, useState } from 'react';

export type SystemTheme = 'light' | 'dark';

export function useSystemTheme(): SystemTheme {
  const [theme, setTheme] = useState<SystemTheme>(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return theme;
}
