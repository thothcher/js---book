const fs = require('fs');

const data = fs.readFileSync('src/app/data/quizzes.ts', 'utf8');
const newChapter = JSON.parse(fs.readFileSync('ch16.json', 'utf8'));

// Format JSON
let jsObjectString = JSON.stringify(newChapter, null, 2);

// Remove quotes around keys
jsObjectString = jsObjectString.replace(/"([^"]+)":/g, '$1:');

// Regex for the end of the quizzes array
const targetEnd = /\}\s*\];/g;

if (targetEnd.test(data)) {
  const newData = data.replace(targetEnd, `},\n  ${jsObjectString}\n];`);

  fs.writeFileSync('src/app/data/quizzes.ts', newData, 'utf8');
  console.log('Successfully appended Chapter 16!');
} else {
  console.log('Could not find the end of the array.');
}
