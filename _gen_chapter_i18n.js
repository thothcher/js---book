/**
 * Generates chapter-i18n.ts from the existing book-data.ts
 * Extracts Ka fields and creates a structured i18n map.
 * Run: node _gen_chapter_i18n.js
 */
const fs = require('fs');
const path = require('path');

// We need to parse the TS file to extract chapter data
// Since it's basically JS-compatible, let's extract the CHAPTERS array directly
let tsContent = fs.readFileSync(path.join(__dirname, 'src/app/data/book-data.ts'), 'utf8');

// Use regex to find the CHAPTERS array content
const chaptersMatch = tsContent.match(/export const CHAPTERS: Chapter\[\] = (\[[\s\S]*?\]);/);
if (!chaptersMatch) {
  console.error('Could not find CHAPTERS array in book-data.ts');
  process.exit(1);
}

let CHAPTERS;
try {
  // We use eval on the array literal string. To handle potential TS types or other issues,
  // we can try to make it more JSON-like if needed, but usually eval() on a JS array literal works.
  CHAPTERS = eval(chaptersMatch[1]);
} catch(e) {
  console.error('Failed to parse CHAPTERS array:', e.message);
  // Fallback: simple manual cleanup of common TS hurdles if eval fails
  try {
    let cleanArray = chaptersMatch[1]
      .replace(/:\s*\w+,/g, ',') // remove type annotations if any
      .replace(/<.*?>/g, '');    // remove generics
    CHAPTERS = eval(cleanArray);
  } catch(e2) {
    console.error('Failed to parse CHAPTERS array even after cleanup:', e2.message);
    process.exit(1);
  }
}

console.log(`Found ${CHAPTERS.length} chapters`);

// Build the i18n entries
const lines = [];
lines.push(`import { Lang } from '../services/language.service';`);
lines.push(``);
lines.push(`interface ChapterI18n {`);
lines.push(`  title: Record<Lang, string>;`);
lines.push(`  description: Record<Lang, string>;`);
lines.push(`  keyTopics: Record<Lang, string[]>;`);
lines.push(`  summary: Record<Lang, string>;`);
lines.push(`  keyPoints: Record<Lang, string[]>;`);
lines.push(`  funFact: Record<Lang, string>;`);
lines.push(`  realWorld: Record<Lang, string>;`);
lines.push(`}`);
lines.push(``);
lines.push(`export const CHAPTER_I18N: Record<number, ChapterI18n> = {`);

for (const ch of CHAPTERS) {
  const esc = (s) => (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const escArr = (arr) => (arr || []).map(s => `'${esc(s)}'`).join(', ');

  lines.push(`  ${ch.id}: {`);
  lines.push(`    title: { en: '${esc(ch.title)}', ka: '${esc(ch.titleKa)}', ru: '${esc(ch.titleRu)}', hy: '${esc(ch.titleHy)}', az: '${esc(ch.titleAz)}' },`);
  lines.push(`    description: { en: '${esc(ch.description)}', ka: '${esc(ch.descriptionKa)}', ru: '${esc(ch.descriptionRu)}', hy: '${esc(ch.descriptionHy)}', az: '${esc(ch.descriptionAz)}' },`);
  lines.push(`    keyTopics: {`);
  lines.push(`      en: [${escArr(ch.keyTopics)}],`);
  lines.push(`      ka: [${escArr(ch.keyTopicsKa)}],`);
  lines.push(`      ru: [${escArr(ch.keyTopicsRu)}],`);
  lines.push(`      hy: [${escArr(ch.keyTopicsHy)}],`);
  lines.push(`      az: [${escArr(ch.keyTopicsAz)}],`);
  lines.push(`    },`);
  lines.push(`    summary: { en: '${esc(ch.summary)}', ka: '${esc(ch.summaryKa)}', ru: '${esc(ch.summaryRu)}', hy: '${esc(ch.summaryHy)}', az: '${esc(ch.summaryAz)}' },`);
  lines.push(`    keyPoints: {`);
  lines.push(`      en: [${escArr(ch.keyPoints)}],`);
  lines.push(`      ka: [${escArr(ch.keyPointsKa)}],`);
  lines.push(`      ru: [${escArr(ch.keyPointsRu)}],`);
  lines.push(`      hy: [${escArr(ch.keyPointsHy)}],`);
  lines.push(`      az: [${escArr(ch.keyPointsAz)}],`);
  lines.push(`    },`);
  lines.push(`    funFact: { en: '${esc(ch.funFact)}', ka: '${esc(ch.funFactKa)}', ru: '${esc(ch.funFactRu)}', hy: '${esc(ch.funFactHy)}', az: '${esc(ch.funFactAz)}' },`);
  lines.push(`    realWorld: { en: '${esc(ch.realWorld)}', ka: '${esc(ch.realWorldKa)}', ru: '${esc(ch.realWorldRu)}', hy: '${esc(ch.realWorldHy)}', az: '${esc(ch.realWorldAz)}' },`);
  lines.push(`  },`);
}

lines.push(`};`);
lines.push(``);
lines.push(`/** Get a localized chapter field. Falls back to English. */`);
lines.push(`export function chapterText(chapterId: number, field: keyof ChapterI18n, lang: Lang): string | string[] {`);
lines.push(`  const data = CHAPTER_I18N[chapterId];`);
lines.push(`  if (!data) return '';`);
lines.push(`  const val = data[field];`);
lines.push(`  return (val as Record<Lang, string | string[]>)[lang] ?? (val as Record<Lang, string | string[]>)['en'];`);
lines.push(`}`);

const outPath = path.join(__dirname, 'src/app/data/chapter-i18n.ts');
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log(`Written to ${outPath}`);
