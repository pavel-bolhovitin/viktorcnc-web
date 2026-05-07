export const SECTION_IDS = {
  services: 'services',
  gallery: 'gallery',
  facility: 'facility',
  founder: 'founder',
  process: 'process',
  faq: 'faq',
  contact: 'contact',
} as const;

export const SERVICE_LINKS = [
  { label: 'CNC Milling', href: `#${SECTION_IDS.services}` },
  { label: 'CNC Turning', href: `#${SECTION_IDS.services}` },
  { label: 'Reverse Engineering', href: `#${SECTION_IDS.services}` },
  { label: 'CAD Modeling', href: `#${SECTION_IDS.services}` },
  { label: 'Batch Production', href: `#${SECTION_IDS.services}` },
] as const;

export const NAV_LINKS = [
  { label: 'Services', href: `#${SECTION_IDS.services}` },
  { label: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { label: 'Workshop', href: `#${SECTION_IDS.facility}` },
  { label: 'About', href: `#${SECTION_IDS.founder}` },
  { label: 'Process', href: `#${SECTION_IDS.process}` },
  { label: 'FAQ', href: `#${SECTION_IDS.faq}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
] as const;
