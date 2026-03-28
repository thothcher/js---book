const fs = require('fs');

// 1. Read current book-data.ts
const bookData = fs.readFileSync('c:/Users/vakht/Desktop/psy/src/app/data/book-data.ts', 'utf8');
const bl = bookData.split('\n');

// 2. Read old book-data.ts from git for Story 6 and Fact 35 reference
const oldData = fs.readFileSync('c:/Users/vakht/Desktop/psy/_old_book_data.ts', 'utf8');

// ============================================
// HEADER: lines 1-306 (interfaces + CHAPTERS/QUIZZES/PSYCHOLOGISTS)
// ============================================
const header = bl.slice(0, 306).join('\n');

// ============================================
// FACTS: entries 1-34 are clean (lines 308-682), entry 35 needs fixing
// ============================================
// Lines 308-682: "export const FACTS..." + entries 1-34
const factsHeader = bl[307]; // "export const FACTS: Fact[] = ["
const facts1to34 = bl.slice(308, 683).join('\n'); // entries 1-34 with trailing comma

// Entry 35: lines 684-692, but line 692 (textAz) is corrupted
const fact35Clean = bl.slice(683, 691).join('\n'); // lines 684-691 (id through textHy)
// Line 692 has textAz corrupted. The actual Az translation should be:
const fact35textAz = '    "textAz": "Pik-end qaydası: Biz təcrübələri əsasən onların ən gərgin anına və bitməsinə görə qiymətləndiririk."';

const factsBlock = factsHeader + '\n' + facts1to34 + ',\n' + fact35Clean + '\n' + fact35textAz + '\n  }\n];';

// ============================================
// STORIES: entries 1-5 clean (lines 1223-1324), entry 6 needs reconstruction, entries 7-10 clean
// ============================================
const storiesHeader = bl[1222]; // "export const STORIES: Story[] = ["

// Stories 1-5: lines 1225-1324
const stories1to5 = bl.slice(1223, 1324).join('\n');

// Story 6 reconstruction: get content and moral from old data, get translations from continuation
const story6Idx = oldData.indexOf('Marshmallow Test');
const story6Start = oldData.lastIndexOf('{', story6Idx);
let bc = 0;
let story6End = story6Start;
for (let i = story6Start; i < oldData.length && i < story6Start + 20000; i++) {
  if (oldData[i] === '{') bc++;
  if (oldData[i] === '}') {
    bc--;
    if (bc === 0) { story6End = i + 1; break; }
  }
}
const story6Old = oldData.substring(story6Start, story6End);

// Extract fields from old story6
function extractField(obj, field) {
  // Handle single-quoted JS format: field: 'value',
  const re = new RegExp(field + ":\\s*'((?:[^'\\\\]|\\\\.|'')*)'");
  const m = obj.match(re);
  return m ? m[1] : null;
}

const s6content = extractField(story6Old, 'content');
const s6contentKa = extractField(story6Old, 'contentKa');
const s6moral = extractField(story6Old, 'moral');
const s6moralKa = extractField(story6Old, 'moralKa');

console.log('Story 6 content length:', s6content ? s6content.length : 'NOT FOUND');
console.log('Story 6 moral:', s6moral ? s6moral.substring(0, 80) : 'NOT FOUND');
console.log('Story 6 contentKa:', s6contentKa ? 'found (' + s6contentKa.length + ' chars)' : 'NOT FOUND');
console.log('Story 6 moralKa:', s6moralKa ? 'found (' + s6moralKa.length + ' chars)' : 'NOT FOUND');

// Get translations from the continuation in book-data.ts (lines 1667-1671)
// Line 1668: titleAz
// Line 1669: contentRu
// Line 1670: contentAz
const titleAzLine = bl[1667].trim(); // "titleAz": "Marshmallow Testi",
const contentRuLine = bl[1668].trim(); // "contentRu": "...",
const contentAzLine = bl[1669].trim(); // "contentAz": "..."

// Now build Story 6 as JSON format (double quotes like rest of file)
// Escape content for JSON double-quote format
function escapeForJson(val) {
  if (!val) return '';
  return val
    .replace(/\\u2014/g, '\u2014')  // Convert unicode escapes
    .replace(/\\'/g, "'")           // Unescape single quotes
    .replace(/"/g, '\\"');          // Escape double quotes for JSON
}

const s6contentEscaped = escapeForJson(s6content);
const s6moralEscaped = escapeForJson(s6moral);
const s6contentKaEscaped = escapeForJson(s6contentKa);
const s6moralKaEscaped = escapeForJson(s6moralKa);

const story6Block = `  {
    "id": 6,
    "title": "The Marshmallow Test",
    "titleKa": "მარშმელოუს ტესტი",
    "chapterId": 10,
    "icon": "mdi:cookie-outline",
    "content": "${s6contentEscaped}",
    "contentKa": "${s6contentKaEscaped}",
    "moral": "${s6moralEscaped}",
    "moralKa": "${s6moralKaEscaped}",
    ${titleAzLine}
    ${contentRuLine}
    ${contentAzLine}
  }`;

// Stories 7-10: lines 1673-1752
const stories7to10 = bl.slice(1671, 1752).join('\n');

const storiesBlock = storiesHeader + '\n' + stories1to5 + ',\n' + story6Block + ',\n' + stories7to10;

// ============================================
// MEMORY_CARDS: fully clean (lines 1754-2091)
// ============================================
const mcBlock = bl.slice(1753, 2092).join('\n');

// ============================================
// BUILD FINAL FILE
// ============================================
const result = header + '\n\n' + factsBlock + '\n\n' + storiesBlock + '\n\n' + mcBlock + '\n';

// Validate basic structure
const resultLines = result.split('\n');
console.log('\nResult total lines:', resultLines.length);

// Check for 'export const' lines
let exportLines = [];
for (let i = 0; i < resultLines.length; i++) {
  if (resultLines[i].match(/^export const /)) {
    exportLines.push('Line ' + (i + 1) + ': ' + resultLines[i].substring(0, 60));
  }
}
console.log('\nExport lines:');
exportLines.forEach(l => console.log(l));

// Check for stray 'export const' inside strings
let strayExports = [];
for (let i = 0; i < resultLines.length; i++) {
  if (resultLines[i].includes('export const') && !resultLines[i].match(/^export const/)) {
    strayExports.push('Line ' + (i + 1) + ': ' + resultLines[i].substring(0, 80));
  }
}
if (strayExports.length > 0) {
  console.log('\nWARNING: Stray "export const" found in strings:');
  strayExports.forEach(l => console.log(l));
} else {
  console.log('\nNo stray "export const" found - CLEAN!');
}

// Check ]; count
let closingBrackets = 0;
for (let i = 0; i < resultLines.length; i++) {
  if (resultLines[i].trim() === '];') closingBrackets++;
}
console.log('\nClosing ]; count:', closingBrackets, '(expected 6)');

// Write the file
fs.writeFileSync('c:/Users/vakht/Desktop/psy/src/app/data/book-data.ts', result, 'utf8');
console.log('\nFile written successfully!');
console.log('Last 5 lines:');
for (let i = resultLines.length - 6; i < resultLines.length; i++) {
  console.log((i + 1) + ': ' + resultLines[i].substring(0, 80));
}
