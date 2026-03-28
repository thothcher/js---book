const fs = require('fs');
const data = fs.readFileSync('c:/Users/vakht/Desktop/psy/_old_book_data.ts', 'utf8');

// Find Story 6 (Marshmallow Test) - look for the STORIES array and Story id:6
const storiesIdx = data.indexOf('export const STORIES');
console.log('STORIES at char:', storiesIdx);

if (storiesIdx > 0) {
  const storiesData = data.substring(storiesIdx);
  // Find id: 6 with title Marshmallow
  const story6Idx = storiesData.indexOf("title: 'The Marshmallow Test'");
  if (story6Idx > 0) {
    // Go back to find the start of the object
    const startSearch = storiesData.lastIndexOf('{', story6Idx);
    // Find the end - look for the next "}, {" or "}]"
    let braceCount = 0;
    let endIdx = startSearch;
    for (let i = startSearch; i < storiesData.length; i++) {
      if (storiesData[i] === '{') braceCount++;
      if (storiesData[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }

    const story6 = storiesData.substring(startSearch, endIdx);
    console.log('\n=== STORY 6 (length: ' + story6.length + ') ===');
    console.log(story6.substring(0, 500));
    console.log('\n... middle ...\n');
    console.log(story6.substring(story6.length - 500));

    // Check if it has moral, contentKa, etc
    const fields = ['content:', 'contentKa:', 'contentHy:', 'contentRu:', 'contentAz:',
                     'moral:', 'moralKa:', 'moralHy:', 'moralRu:', 'moralAz:',
                     'titleKa:', 'titleRu:', 'titleHy:', 'titleAz:'];
    console.log('\n=== Fields present ===');
    fields.forEach(f => {
      console.log(f, story6.includes(f) ? 'YES' : 'NO');
    });
  }
}
