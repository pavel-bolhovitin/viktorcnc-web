export const defaultNS = 'common';
export const defaultLng = 'en';

export const supportedLangs = ['en', 'ru'] as const;
export type Language = (typeof supportedLangs)[number];

export const namespaces = ['common'] as const;
export type Namespace = (typeof namespaces)[number];
