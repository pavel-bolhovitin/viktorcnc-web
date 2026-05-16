import { supportedLangs } from '@/i18n/config';
import { I18nProvider } from '@/i18n/I18nProvider';

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  return <I18nProvider lng={lang}>{children}</I18nProvider>;
}
