const fs = require('fs');

// Read all sources
const bookData = fs.readFileSync('c:/Users/vakht/Desktop/psy/src/app/data/book-data.ts', 'utf8');
const bl = bookData.split('\n');

// Read book_0a17835_fixed.ts for the full Marshmallow Test English content
const fixedBook = fs.readFileSync('c:/Users/vakht/Desktop/psy/book_0a17835_fixed.ts', 'utf8');
const marsStart = fixedBook.indexOf("In the late 1960s and early 1970s, Stanford psychologist Walter Mischel");
const marsRaw = fixedBook.substring(marsStart);
// Find end of the content value - it ends with ', ' or '," followed by contentKa
const marsEnd = marsRaw.indexOf("',");
const marsContent = marsRaw.substring(0, marsEnd)
  .replace(/\\u2014/g, '\u2014')
  .replace(/\\n/g, '\\n')  // keep as \n in source
  .replace(/\\'/g, "'");

console.log('=== Marshmallow content length:', marsContent.length);
console.log('=== First 100 chars:', marsContent.substring(0, 100));
console.log('=== Last 100 chars:', marsContent.substring(marsContent.length - 100));

// Now find the contentKa for Story 6 about Marshmallow Test
// We need contentKa, contentHy (from the continuation after embedded MEMORY_CARDS)
// Also need moral, moralKa, moralHy, moralRu, moralAz, titleHy, titleRu

// Check what fields Story entries have from Story 1 (lines 1224-1257)
console.log('\n=== Story 1 fields ===');
for (let i = 1223; i < 1263; i++) {
  const l = bl[i].trim();
  if (l.startsWith('"') && l.includes(':')) {
    const key = l.split(':')[0].replace(/"/g, '');
    console.log('  ' + key);
  }
}

// Check what fields are in the continuation of Story 6 (after embedded MEMORY_CARDS)
// Lines 1667-1672 in book-data.ts
console.log('\n=== Story 6 continuation (lines 1667-1675) ===');
for (let i = 1666; i < 1675; i++) {
  console.log('Line ' + (i+1) + ': ' + bl[i].substring(0, 100));
}
