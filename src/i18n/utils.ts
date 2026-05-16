export function getLocaleDisplayNamesInLocale(
  locales: string[],
  inLocale: string,
): Record<string, string> {
  try {
    const formatter = new Intl.DisplayNames(inLocale, { type: 'language' });
    return Object.fromEntries(
      locales.map((locale) => [locale, formatter.of(locale) ?? locale]),
    );
  } catch {
    return Object.fromEntries(locales.map((locale) => [locale, locale]));
  }
}

export function getLocaleDisplayName(locales: string) {
  return getLocaleDisplayNamesInLocale([locales], locales)[locales];
}
