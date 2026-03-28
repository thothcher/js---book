/**
 * Script to insert chapters 3-16 and 16 psychologists into book-data.ts
 *
 * Sources:
 * - Chapters: cleaned_full.ts (chapters 3-16 with Ka/Ru/Hy/Az translations for title/desc/keyTopics)
 * - Psychologists: book_0a17835_fixed.ts (16 psychologists with EN-only data + Wikipedia photos)
 */
const fs = require('fs');
const path = require('path');

const BOOK_DATA_PATH = path.join(__dirname, 'src', 'app', 'data', 'book-data.ts');
const CLEANED_PATH = path.join(__dirname, 'cleaned_full.ts');
const OLD_BOOK_PATH = path.join(__dirname, 'book_0a17835_fixed.ts');

// ── Step 1: Parse chapters from cleaned_full.ts ──
function parseChapters() {
  const src = fs.readFileSync(CLEANED_PATH, 'utf8');
  // Extract CHAPTERS array
  const startMarker = 'export const CHAPTERS: Chapter[] = [';
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) throw new Error('Cannot find CHAPTERS start in cleaned_full.ts');

  // Find the matching closing ];
  let depth = 0;
  let arrayStart = -1;
  for (let i = startIdx + startMarker.length - 1; i < src.length; i++) {
    if (src[i] === '[') { depth++; arrayStart = i; break; }
  }

  let end = -1;
  for (let i = arrayStart + 1; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
  }

  if (end === -1) throw new Error('Cannot find CHAPTERS array end');

  const arrayContent = src.substring(arrayStart, end + 1);
  // Use Function constructor to safely parse (it's a JS array literal)
  const chapters = new Function('return ' + arrayContent)();
  console.log(`Parsed ${chapters.length} chapters from cleaned_full.ts`);
  return chapters;
}

// ── Step 2: Parse psychologists from book_0a17835_fixed.ts ──
function parsePsychologists() {
  const src = fs.readFileSync(OLD_BOOK_PATH, 'utf8');
  const startMarker = 'export const PSYCHOLOGISTS: Psychologist[] = [';
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) throw new Error('Cannot find PSYCHOLOGISTS start in old book');

  let depth = 0;
  let arrayStart = -1;
  for (let i = startIdx + startMarker.length - 1; i < src.length; i++) {
    if (src[i] === '[') { depth++; arrayStart = i; break; }
  }

  let end = -1;
  for (let i = arrayStart + 1; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
  }

  if (end === -1) throw new Error('Cannot find PSYCHOLOGISTS array end');

  const arrayContent = src.substring(arrayStart, end + 1);
  const psychologists = new Function('return ' + arrayContent)();
  console.log(`Parsed ${psychologists.length} psychologists from book_0a17835_fixed.ts`);
  return psychologists;
}

// ── Step 3: Format a chapter as TypeScript ──
function formatChapter(ch) {
  const lines = [];
  lines.push('  {');
  lines.push(`    id: ${ch.id},`);
  lines.push(`    title: ${JSON.stringify(ch.title)},`);
  lines.push(`    titleKa: ${JSON.stringify(ch.titleKa)},`);
  if (ch.titleRu) lines.push(`    titleRu: ${JSON.stringify(ch.titleRu)},`);
  if (ch.titleHy) lines.push(`    titleHy: ${JSON.stringify(ch.titleHy)},`);
  if (ch.titleAz) lines.push(`    titleAz: ${JSON.stringify(ch.titleAz)},`);
  lines.push(`    description: ${JSON.stringify(ch.description)},`);
  lines.push(`    descriptionKa: ${JSON.stringify(ch.descriptionKa)},`);
  if (ch.descriptionRu) lines.push(`    descriptionRu: ${JSON.stringify(ch.descriptionRu)},`);
  if (ch.descriptionHy) lines.push(`    descriptionHy: ${JSON.stringify(ch.descriptionHy)},`);
  if (ch.descriptionAz) lines.push(`    descriptionAz: ${JSON.stringify(ch.descriptionAz)},`);
  lines.push(`    icon: ${JSON.stringify(ch.icon)},`);
  lines.push(`    keyTopics: ${JSON.stringify(ch.keyTopics)},`);
  lines.push(`    keyTopicsKa: ${JSON.stringify(ch.keyTopicsKa)},`);
  if (ch.keyTopicsRu) lines.push(`    keyTopicsRu: ${JSON.stringify(ch.keyTopicsRu)},`);
  if (ch.keyTopicsHy) lines.push(`    keyTopicsHy: ${JSON.stringify(ch.keyTopicsHy)},`);
  if (ch.keyTopicsAz) lines.push(`    keyTopicsAz: ${JSON.stringify(ch.keyTopicsAz)},`);
  lines.push(`    summary: ${JSON.stringify(ch.summary)},`);

  // keyPoints
  lines.push(`    keyPoints: [`);
  ch.keyPoints.forEach((kp, i) => {
    const comma = i < ch.keyPoints.length - 1 ? ',' : '';
    lines.push(`      ${JSON.stringify(kp)}${comma}`);
  });
  lines.push(`    ],`);

  lines.push(`    funFact: ${JSON.stringify(ch.funFact)},`);
  lines.push(`    realWorld: ${JSON.stringify(ch.realWorld)},`);

  if (ch.keyFigures && ch.keyFigures.length > 0) {
    lines.push(`    keyFigures: ${JSON.stringify(ch.keyFigures)}`);
  }

  lines.push('  }');
  return lines.join('\n');
}

// ── Step 4: Format a psychologist as TypeScript ──
function formatPsychologist(p) {
  const lines = [];
  lines.push('  {');
  lines.push(`    name: ${JSON.stringify(p.name)},`);
  lines.push(`    years: ${JSON.stringify(p.years)},`);
  lines.push(`    photo: ${JSON.stringify(p.photo)},`);
  lines.push(`    nationality: ${JSON.stringify(p.nationality)},`);
  lines.push(`    contribution: ${JSON.stringify(p.contribution)},`);
  lines.push(`    details: ${JSON.stringify(p.details)},`);
  lines.push(`    field: ${JSON.stringify(p.field)}`);
  lines.push('  }');
  return lines.join('\n');
}

// ── Step 5: Insert data into book-data.ts ──
function main() {
  let content = fs.readFileSync(BOOK_DATA_PATH, 'utf8');
  console.log(`book-data.ts: ${content.length} chars, ${content.split('\n').length} lines`);

  // Normalize line endings to \n for consistent processing
  const originalHasCRLF = content.includes('\r\n');
  content = content.replace(/\r\n/g, '\n');

  // Get chapters 3-16 from cleaned_full.ts
  const allChapters = parseChapters();
  const newChapters = allChapters.filter(ch => ch.id >= 3);
  console.log(`Will insert ${newChapters.length} chapters (ids: ${newChapters.map(c => c.id).join(', ')})`);

  // Get 16 psychologists
  const psychologists = parsePsychologists();

  // Format chapters 3-16
  const chaptersText = newChapters.map(ch => formatChapter(ch)).join(',\n');

  // Format psychologists
  const psychologistsText = psychologists.map(p => formatPsychologist(p)).join(',\n');

  // ── Insert chapters: find the end of chapter 2 (before ]; of CHAPTERS array) ──
  // Look for the pattern: closing of chapter 2 object + end of array
  const chaptersEndPattern = /(\n  \}\n)\];(\n\nexport const QUIZZES)/;
  const chaptersMatch = content.match(chaptersEndPattern);
  if (!chaptersMatch) {
    // Try to find it more flexibly
    const altIdx = content.indexOf('];\n\nexport const QUIZZES');
    if (altIdx === -1) throw new Error('Cannot find CHAPTERS array end before QUIZZES');
    // Insert before the ];
    const insertAt = altIdx;
    content = content.substring(0, insertAt) + ',\n' + chaptersText + '\n];\n\nexport const QUIZZES' + content.substring(altIdx + '];\n\nexport const QUIZZES'.length);
  } else {
    // Insert between last chapter closing } and ];
    const insertPoint = chaptersMatch.index + chaptersMatch[1].length;
    content = content.substring(0, chaptersMatch.index) +
              chaptersMatch[1].replace('\n]', '') + ',\n' + chaptersText + '\n];' +
              chaptersMatch[2] + content.substring(chaptersMatch.index + chaptersMatch[0].length);
  }

  console.log('Chapters inserted');

  // ── Insert psychologists: find end of Wundt entry before ]; before MemoryCard ──
  const psychEndPattern = /(\n  \}\n)\];(\n\n\nexport interface MemoryCard|\n\nexport interface MemoryCard)/;
  const psychMatch = content.match(psychEndPattern);
  if (!psychMatch) {
    // Flexible approach: find `export interface MemoryCard` and work backwards
    const memCardIdx = content.indexOf('export interface MemoryCard');
    if (memCardIdx === -1) throw new Error('Cannot find MemoryCard interface');
    // Find the ]; before it
    const beforeMemCard = content.substring(0, memCardIdx);
    const lastCloseBracket = beforeMemCard.lastIndexOf('];');
    if (lastCloseBracket === -1) throw new Error('Cannot find PSYCHOLOGISTS array end');
    // Insert before ];
    content = content.substring(0, lastCloseBracket) + ',\n' + psychologistsText + '\n' + content.substring(lastCloseBracket);
  } else {
    const insertPoint = psychMatch.index + psychMatch[1].length;
    content = content.substring(0, psychMatch.index) +
              psychMatch[1].replace('\n]', '') + ',\n' + psychologistsText + '\n];' +
              psychMatch[2] + content.substring(psychMatch.index + psychMatch[0].length);
  }

  console.log('Psychologists inserted');

  // Restore original line endings if needed
  if (originalHasCRLF) {
    content = content.replace(/\n/g, '\r\n');
  }

  fs.writeFileSync(BOOK_DATA_PATH, content, 'utf8');
  console.log(`\nDone! book-data.ts: ${content.length} chars`);

  // Verify by counting
  const chapterMatches = content.match(/^\s+id: \d+,$/gm);
  const psychMatches = content.match(/^\s+name: '/gm);
  console.log(`Chapter entries (id lines): ${chapterMatches ? chapterMatches.length : 0}`);
  console.log(`Psychologist entries (name lines): ${psychMatches ? psychMatches.length : 0}`);
}

main();
