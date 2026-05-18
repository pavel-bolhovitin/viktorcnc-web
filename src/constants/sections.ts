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
  { key: 'serviceLinks.cncMilling', href: `#${SECTION_IDS.services}` },
  { key: 'serviceLinks.cncTurning', href: `#${SECTION_IDS.services}` },
  { key: 'serviceLinks.reverseEngineering', href: `#${SECTION_IDS.services}` },
  { key: 'serviceLinks.cadModeling', href: `#${SECTION_IDS.services}` },
  { key: 'serviceLinks.batchProduction', href: `#${SECTION_IDS.services}` },
] as const;

export const NAV_LINKS = [
  { key: 'nav.services', icon: 'Services', href: `#${SECTION_IDS.services}` },
  { key: 'nav.gallery', icon: 'Gallery', href: `#${SECTION_IDS.gallery}` },
  { key: 'nav.workshop', icon: 'Workshop', href: `#${SECTION_IDS.facility}` },
  { key: 'nav.about', icon: 'About', href: `#${SECTION_IDS.founder}` },
  { key: 'nav.process', icon: 'Process', href: `#${SECTION_IDS.process}` },
  { key: 'nav.faq', icon: 'FAQ', href: `#${SECTION_IDS.faq}` },
  { key: 'nav.contact', icon: 'Contact', href: `#${SECTION_IDS.contact}` },
] as const;
