import { KeyFigure } from './book-data';

export function getPsychologistText(person: KeyFigure, lang: string): { name: string; contribution: string; details: string; field: string } {
  const suffix = lang === 'en' ? '' : lang.charAt(0).toUpperCase() + lang.slice(1);
  const p = person as unknown as Record<string, unknown>;
  return {
    name: person.name,
    contribution: (suffix && p['contribution' + suffix] as string) || person.contribution,
    details: (suffix && p['details' + suffix] as string) || person.details,
    field: (suffix && p['field' + suffix] as string) || person.field,
  };
}

export const PSYCHOLOGIST_I18N = {
  en: {
    title: 'Famous Psychologists',
    contribution: 'Contribution',
    details: 'Details',
    field: 'Field'
  },
  ka: {
    title: 'ცნობილი ფსიქოლოგები',
    contribution: 'წვლილი',
    details: 'დეტალები',
    field: 'სფერო'
  },
  ru: {
    title: 'Известные психологи',
    contribution: 'Вклад',
    details: 'Детали',
    field: 'Область'
  },
  hy: {
    title: 'Հայտնի հոգեբաններ',
    contribution: 'Ավանդ',
    details: 'Մանրամասներ',
    field: 'Ոլորտ'
  }
};
