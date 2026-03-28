const fs = require('fs');

const data = fs.readFileSync('src/app/data/quizzes.ts', 'utf8');
const newChapter = JSON.parse(fs.readFileSync('ch13.json', 'utf8'));

const jsObjectString = JSON.stringify(newChapter, null, 2).replace(/"([^"]+)":/g, '$1:');

// Regex to find the END of the quizzes array regardless of whitespace
const targetEnd = /\}\s*\];/g;
const match = targetEnd.exec(data);

if (match) {
  const matchIndex = match.index; // index of the '}'
  const before = data.substring(0, matchIndex);

  const newCode = `${before}},\n  ${jsObjectString}\n];`;

  fs.writeFileSync('src/app/data/quizzes.ts', newCode, 'utf8');
  console.log('Successfully appended Chapter 13!');
} else {
  console.error('Could not find the end of the quizzes array. Aborting.');
}
