export const defaultNS = 'common';
export const defaultLng = 'en';

export const supportedLangs = ['en', 'ru', 'lv', 'et', 'lt', 'pl'] as const;
export type Language = (typeof supportedLangs)[number];

export const namespaces = ['common', 'ui'] as const;
export type Namespace = (typeof namespaces)[number];
