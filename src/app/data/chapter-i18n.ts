import { Lang } from '../services/language.service';
import { CHAPTERS } from './chapters';

/**
 * Get a localized chapter field. Falls back to English.
 * Reads data directly from CHAPTERS to avoid duplication.
 */
export function chapterText(
  chapterId: number,
  field: 'title' | 'description' | 'keyTopics' | 'summary' | 'keyPoints' | 'funFact' | 'realWorld',
  lang: Lang
): string | string[] {
  const ch = CHAPTERS.find(c => c.id === chapterId);
  if (!ch) return '';

  const kaField = `${field}Ka` as keyof typeof ch;

  if (lang === 'ka' && ch[kaField] != null) {
    return ch[kaField] as string | string[];
  }

  // For en and any other language, fall back to the English field
  const val = ch[field as keyof typeof ch];
  return (val as string | string[]) ?? '';
}
