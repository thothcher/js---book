const fs = require('fs');

const bookData = fs.readFileSync('c:/Users/vakht/Desktop/psy/src/app/data/book-data.ts', 'utf8');
const cleanedFull = fs.readFileSync('c:/Users/vakht/Desktop/psy/cleaned_full.ts', 'utf8');
const cl = cleanedFull.split('\n').map(l => l.replace(/\r$/, ''));

// Keep header (interfaces + CHAPTERS, QUIZZES, PSYCHOLOGISTS)
const bookLines = bookData.split('\n');
const header = bookLines.slice(0, 306).join('\n');

// === FACTS ===
// Facts 1-34: lines 7530-7905 (0-indexed: 7529-7904)
const facts1to34 = cl.slice(7529, 7904).join('\n');

// Fact 35: lines 7906-7914 (0-indexed: 7905-7913), but line 7914 (0-indexed 7913) has corruption
// Let's get lines 7906-7913 (0-indexed 7905-7912) which are clean
const fact35start = cl.slice(7905, 7912).join('\n');
// Line 7913 (0-indexed 7912) is: "textHy": "Պիdelays..."
const fact35textHy = cl[7912]; // Should be clean
// Line 7914 (0-indexed 7913) is corrupted textAz - truncate before 'export const'
const corruptedLine = cl[7913];
const cutIdx = corruptedLine.indexOf('export const STORIES');
const fixedTextAz = corruptedLine.substring(0, cutIdx).replace(/ə$/, 'ətləndiririk.') + '"';
// The object needs to be closed:
const fact35 = fact35start + '\n' + fact35textHy + '\n' + '    "textAz": "Pik-end qaydası: Biz təcrübələri əsasən onların ən gərgin anına və bitməsinə görə qiymətləndiririk."' + '\n  }';

const factsBlock = 'export const FACTS: Fact[] = [\n' + facts1to34 + ',\n' + fact35 + '\n];\n';

// === STORIES ===
// Stories 1-5: lines 8449-8548 (0-indexed: 8448-8547)
const stories1to5 = cl.slice(8448, 8547).join('\n');

// Story 6 needs reconstruction. Parts:
// Story 6 start: lines 8549-8554 (0-indexed 8548-8553)
// Line 8554 (0-indexed 8553) has: "content": "...marsexport const MEMORY_CARDS..."
// After the embedded MEMORY_CARDS (ending around line 8890), the rest of Story 6 continues

// Let's get Story 6's fields before the corruption
const story6Header = cl.slice(8548, 8553).join('\n');
// Line 8553 is the corrupted content line

// The full content of Story 6 about "The Marshmallow Test" exists elsewhere in the STORIES section
// At lines 8891-8896 we have contentHy continuation, titleAz, contentRu, contentAz for Story 6
// Actually, let me find the exact content for story 6

// Look for the full "content" for The Marshmallow Test in the FACTS section where it was embedded
// Story id:6 in FACTS section starts at line 8016 (0-indexed 8015)
// Let me check that entry
console.log('Story 6 in FACTS section:');
console.log('Line 8017:', cl[8016].substring(0, 80));
console.log('Line 8018:', cl[8017].substring(0, 80));
console.log('Line 8019:', cl[8018].substring(0, 80));
console.log('Line 8020:', cl[8019].substring(0, 80));
console.log('Line 8021:', cl[8020].substring(0, 80));
console.log('Line 8022:', cl[8021].substring(0, 80));

// Let me find the content for "The Marshmallow Test" from the FACTS-embedded STORIES copy
// The FACTS-embedded copy of Story 6 starts with "content": at line 8021
// It's ALSO corrupted (has export const MEMORY_CARDS embedded)
// So we need to get content from somewhere else...

// Actually the "contentRu" and "contentAz" for Story 6 ARE available after the embedded MEMORY_CARDS
// at lines ~8891+. Let me check what's available there.

// Let me find the line with "titleAz": "Marshmallow Testi" in STORIES section
let marshmallowFields = {};
for (let i = 8870; i < 8900; i++) {
  if (cl[i].includes('titleAz') || cl[i].includes('contentRu') || cl[i].includes('contentAz') || cl[i].includes('contentHy')) {
    console.log('Line ' + (i+1) + ': ' + cl[i].substring(0, 80));
  }
}

// The content in English for Story 6 is about the Marshmallow Test. The truncated version is:
// "In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment..."
// We can get the full English content from the FACTS-embedded version at lines 8016-8021,
// but that's also truncated.

// Actually, let's look at a different approach: the contentRu version (8893) has the full Russian content
// We can also find contentKa for Story 6. Let's find all fields:

// Story 6 fields in STORIES section:
// Line 8549-8554: id, title, titleKa, chapterId, icon, content(truncated)
// After embedded MEMORY_CARDS:
// Armenian text continuation, titleAz, contentRu, contentAz, }, then Story 7+

// The English "content" field is the one that's corrupted. We need to reconstruct it.
// From the truncated text: "In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment. He brought preschool children, typically 4 to 5 years old, into a room one at a time. On the table sat a single mars[TRUNCATED]"

// But wait - in the FACTS section's embedded copy of stories, at line 8364, Story 7 starts,
// and at line 8016 Story 6 starts. Let me check between lines 8016 and 8022 for the full content
// But line 8021 also has the same corruption.

// The simplest approach: translate from Russian or find it from elsewhere.
// Actually let me check if there's a complete version in the FACTS embedded section at lines 8016-8022

