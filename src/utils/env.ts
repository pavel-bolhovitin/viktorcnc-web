const phone = process.env.NEXT_PUBLIC_PHONE ?? '';

export const env = {
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'ViktorCNC',
  email: process.env.NEXT_PUBLIC_EMAIL ?? '',
  phone,
  phoneHref: `tel:${phone}`,
  whatsappHref: `https://wa.me/${phone.replace(/\D/g, '')}`,
};
