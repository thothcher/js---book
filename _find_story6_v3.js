const fs = require('fs');
const data = fs.readFileSync('c:/Users/vakht/Desktop/psy/_old_book_data.ts', 'utf8');

const idx = data.indexOf('Marshmallow Test');
console.log('Marshmallow at char:', idx);

if (idx > 0) {
  const start = data.lastIndexOf('{', idx);
  let bc = 0;
  let end = start;
  for (let i = start; i < data.length && i < start + 20000; i++) {
    if (data[i] === '{') bc++;
    if (data[i] === '}') {
      bc--;
      if (bc === 0) {
        end = i + 1;
        break;
      }
    }
  }

  const story6 = data.substring(start, end);
  console.log('Story 6 length:', story6.length);

  // Write full story6 to temp file for inspection
  fs.writeFileSync('c:/Users/vakht/Desktop/psy/_story6_old.txt', story6, 'utf8');
  console.log('Written to _story6_old.txt');

  // Check fields
  ['content:', 'contentKa:', 'contentHy:', 'contentRu:', 'contentAz:',
   'moral:', 'moralKa:', 'moralHy:', 'moralRu:', 'moralAz:',
   'titleKa:', 'titleRu:', 'titleHy:', 'titleAz:'].forEach(f => {
    console.log(f, story6.includes(f) ? 'YES' : 'NO');
  });
}
