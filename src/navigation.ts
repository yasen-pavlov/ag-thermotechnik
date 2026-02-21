import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Über Uns',
      href: getPermalink('/ueber-uns'),
    },
    {
      text: 'Produkte',
      links: [
        { text: 'Alle Produkte', href: getPermalink('/produkte') },
        { text: 'Wärmepumpen', href: getPermalink('/produkte/waermepumpen') },
        { text: 'Gaskessel', href: getPermalink('/produkte/gaskessel') },
        { text: 'Biomassekessel', href: getPermalink('/produkte/biomassekessel') },
        { text: 'Solarwarmwasserbereiter', href: getPermalink('/produkte/solarwarmwasserbereiter') },
        { text: 'Fußbodenheizung', href: getPermalink('/produkte/fussbodenheizung') },
        { text: 'Heizkörper', href: getPermalink('/produkte/heizkoerper') },
        { text: 'Ventilatorkonvektoren', href: getPermalink('/produkte/ventilatorkonvektoren') },
        { text: 'Klimaanlage', href: getPermalink('/produkte/klimaanlage') },
        { text: 'Intelligente Steuerung', href: getPermalink('/produkte/intelligente-steuerung') },
        { text: 'Belüftung', href: getPermalink('/produkte/belueftung') },
      ],
    },
    {
      text: 'Dienstleistungen',
      links: [
        { text: 'Alle Dienstleistungen', href: getPermalink('/dienstleistungen') },
        { text: 'Beratung', href: getPermalink('/dienstleistungen/beratung') },
        { text: 'Konzept und Planung', href: getPermalink('/dienstleistungen/konzept-und-planung') },
        { text: 'Energie- und Kostenoptimierung', href: getPermalink('/dienstleistungen/energie-kostenoptimierung') },
        { text: 'Lieferung', href: getPermalink('/dienstleistungen/lieferung') },
        { text: 'Installation', href: getPermalink('/dienstleistungen/installation') },
        { text: 'Reparatur und Sanierung', href: getPermalink('/dienstleistungen/reparatur-sanierung') },
        { text: 'Service und Wartung', href: getPermalink('/dienstleistungen/service-wartung') },
      ],
    },
    {
      text: 'Projekte',
      href: getPermalink('/projekte'),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
  actions: [
    {
      text: 'Anrufen',
      href: 'tel:+4917638208475',
      icon: 'tabler:phone',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Produkte',
      links: [
        { text: 'Wärmepumpen', href: getPermalink('/produkte/waermepumpen') },
        { text: 'Gaskessel', href: getPermalink('/produkte/gaskessel') },
        { text: 'Fußbodenheizung', href: getPermalink('/produkte/fussbodenheizung') },
        { text: 'Klimaanlage', href: getPermalink('/produkte/klimaanlage') },
        { text: 'Alle Produkte', href: getPermalink('/produkte') },
      ],
    },
    {
      title: 'Dienstleistungen',
      links: [
        { text: 'Beratung', href: getPermalink('/dienstleistungen/beratung') },
        { text: 'Installation', href: getPermalink('/dienstleistungen/installation') },
        { text: 'Service und Wartung', href: getPermalink('/dienstleistungen/service-wartung') },
        { text: 'Alle Dienstleistungen', href: getPermalink('/dienstleistungen') },
      ],
    },
    {
      title: 'Unternehmen',
      links: [
        { text: 'Über Uns', href: getPermalink('/ueber-uns') },
        { text: 'Projekte', href: getPermalink('/projekte') },
        { text: 'Kontakt', href: getPermalink('/kontakt') },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: '+49 176 38 208 475', href: 'tel:+4917638208475' },
        { text: 'info@agthermotechnik.de', href: 'mailto:info@agthermotechnik.de' },
        { text: 'Am Trippelsberg 92, 40589 Düsseldorf', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/impressum') },
    { text: 'Datenschutz', href: getPermalink('/datenschutz') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} A&G Thermotechnik GmbH. Alle Rechte vorbehalten.
  `,
};
