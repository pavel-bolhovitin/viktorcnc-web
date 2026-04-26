const phone = process.env.NEXT_PUBLIC_PHONE ?? '';

export const env = {
  email: process.env.NEXT_PUBLIC_EMAIL ?? '',
  phone,
  phoneHref: `tel:${phone}`,
  whatsappHref: `https://wa.me/${phone.replace(/\D/g, '')}`,
};
