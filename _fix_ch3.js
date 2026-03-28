// Fix book-data.ts by removing the bad partial ch3 edit
const fs = require('fs');
const path = 'src/app/data/book-data.ts';
let content = fs.readFileSync(path, 'utf8');

// Find the end of chapter 2 and the start of QUIZZES
const ch2End = "    keyFigures: ['Francis Bacon', 'Karl Popper', 'Stanley Milgram']\n  }";
const quizzesStart = "export const QUIZZES: Quiz[] = [";

const ch2Idx = content.indexOf(ch2End);
const quizIdx = content.indexOf(quizzesStart);

if (ch2Idx === -1 || quizIdx === -1) {
  console.error('Could not find markers. ch2End:', ch2Idx, 'quizIdx:', quizIdx);
  process.exit(1);
}

// Replace everything between ch2End and quizzesStart with proper closing
const before = content.substring(0, ch2Idx + ch2End.length);
const after = content.substring(quizIdx);

content = before + '\n];\n\n' + after;
fs.writeFileSync(path, content, 'utf8');
console.log('Fixed book-data.ts - removed broken ch3 fragment');
console.log('File size:', content.length, 'chars');
