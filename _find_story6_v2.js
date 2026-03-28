const fs = require('fs');
const data = fs.readFileSync('c:/Users/vakht/Desktop/psy/_old_book_data.ts', 'utf8');
const lines = data.split('\n');

// Find STORIES array
let storiesStart = -1;
let storiesEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const STORIES')) storiesStart = i;
  if (storiesStart >= 0 && storiesEnd < 0 && lines[i].trim() === '];' && i > storiesStart) storiesEnd = i;
}
console.log('STORIES: line', storiesStart + 1, 'to', storiesEnd + 1);

// Find Story 6 in the STORIES array
const storiesBlock = lines.slice(storiesStart, storiesEnd + 1).join('\n');
const story6Idx = storiesBlock.indexOf("title: 'The Marshmallow Test'");
if (story6Idx < 0) {
  console.log('Story 6 not found in STORIES');
} else {
  // Find the { before it
  let start = storiesBlock.lastIndexOf('{', story6Idx);
  // Find matching }
  let braceCount = 0;
  let end = start;
  for (let i = start; i < storiesBlock.length; i++) {
    if (storiesBlock[i] === '{') braceCount++;
    if (storiesBlock[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        end = i + 1;
        break;
      }
    }
  }

  const story6 = storiesBlock.substring(start, end);
  console.log('\n=== STORY 6 ===');
  console.log(story6);

  // Check fields
  const fields = ['content:', 'contentKa:', 'contentHy:', 'contentRu:', 'contentAz:',
                   'moral:', 'moralKa:', 'moralHy:', 'moralRu:', 'moralAz:',
                   'titleKa:', 'titleRu:', 'titleHy:', 'titleAz:'];
  console.log('\n=== Fields ===');
  fields.forEach(f => {
    console.log(f, story6.includes(f) ? 'YES' : 'NO');
  });
}
