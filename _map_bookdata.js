const fs = require('fs');
const data = fs.readFileSync('c:/Users/vakht/Desktop/psy/src/app/data/book-data.ts', 'utf8');
const lines = data.split('\n');

// Find all "id": lines and their context to understand the structure
console.log('Total lines:', lines.length);
console.log('');

// Find all export const lines (actual and embedded)
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (/^\s*export const\s/.test(l)) {
    console.log('Line ' + (i+1) + ': ' + l.substring(0, 80));
  }
}

console.log('\n--- Looking for closing ]; ---');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '];') {
    console.log('Line ' + (i+1) + ': ];');
  }
}

console.log('\n--- All "id": lines in FACTS region (307+) ---');
let section = null;
for (let i = 306; i < lines.length; i++) {
  const l = lines[i].trim();
  if (l.startsWith('export const FACTS')) section = 'FACTS';
  if (l.startsWith('export const STORIES') && !lines[i-1]?.includes('qiymə')) section = 'STORIES_REAL';
  if (l.startsWith('export const MEMORY_CARDS') && !lines[i-1]?.includes('mars')) section = 'MC_REAL';

  if (l.match(/^"id":\s*\d+/)) {
    console.log('Line ' + (i+1) + ': ' + section + ' ' + l.substring(0, 30));
  }
}
