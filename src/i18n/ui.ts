export const languages = { fr: 'FR', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    'meta.title': 'Antoine Pollet — Développeur freelance',
    'meta.description':
      'Antoine Pollet — développeur freelance. Portfolio de projets web et mobile.',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.lang': 'Langue',
    'hero.kicker': 'Développeur freelance',
    'hero.lead':
      "Je conçois et développe des applications web et mobile, du prototype au produit en production. Voici une sélection de projets sur lesquels j'ai travaillé.",
    'hero.portfolio': 'portfolio',
    'projects.title': 'Projets',
    'projects.count': (n: number) => `${n} ${n > 1 ? 'projets' : 'projet'}`,
    'projects.empty': 'Bientôt disponible.',
    'contact.title': 'Contact',
    'contact.lead': 'Un projet en tête ? Écrivez-moi.',
    'project.back': 'Retour aux projets',
    'project.year': 'Année',
    'project.stack': 'Stack',
    'project.links': 'Liens',
    'project.gallery': 'Captures',
    'project.prev': 'Précédent',
    'project.next': 'Suivant',
    'placeholder.label': 'Capture à venir',
    'link.website': 'Site web',
    'link.appStore': 'App Store',
    'link.playStore': 'Play Store',
    'link.github': 'GitHub',
    'footer.role': 'Développeur freelance',
    '404.title': 'Page introuvable',
    '404.lead': "La page que vous cherchez n'existe pas ou a été déplacée.",
    '404.back': "Retour à l'accueil",
  },
  en: {
    'meta.title': 'Antoine Pollet — Freelance developer',
    'meta.description':
      'Antoine Pollet — freelance developer. A portfolio of web and mobile projects.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.lang': 'Language',
    'hero.kicker': 'Freelance developer',
    'hero.lead':
      "I design and build web and mobile applications, from prototype to product in production. Here is a selection of projects I've worked on.",
    'hero.portfolio': 'portfolio',
    'projects.title': 'Projects',
    'projects.count': (n: number) => `${n} ${n > 1 ? 'projects' : 'project'}`,
    'projects.empty': 'Coming soon.',
    'contact.title': 'Contact',
    'contact.lead': 'Have a project in mind? Get in touch.',
    'project.back': 'Back to projects',
    'project.year': 'Year',
    'project.stack': 'Stack',
    'project.links': 'Links',
    'project.gallery': 'Screenshots',
    'project.prev': 'Previous',
    'project.next': 'Next',
    'placeholder.label': 'Screenshot coming soon',
    'link.website': 'Website',
    'link.appStore': 'App Store',
    'link.playStore': 'Play Store',
    'link.github': 'GitHub',
    'footer.role': 'Freelance developer',
    '404.title': 'Page not found',
    '404.lead': "The page you're looking for doesn't exist or has moved.",
    '404.back': 'Back to home',
  },
} as const;

type Keys = keyof (typeof ui)['fr'];

export function t<K extends Keys>(lang: Lang, key: K): (typeof ui)['fr'][K] {
  return ui[lang][key] as (typeof ui)['fr'][K];
}

/** "/en/projects/x/" -> "/projects/x/" */
export function stripLang(path: string): string {
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

/** Prefix a language-neutral path for the given language. */
export function localizePath(path: string, lang: Lang): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? p : `/${lang}${p}`;
}

export function switchLangPath(path: string, lang: Lang): string {
  return localizePath(stripLang(path), lang);
}

export const kanjiNumerals = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
