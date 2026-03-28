const fs = require('fs');

const tsFilePath = './src/app/data/quizzes.ts';
const jsonFilePath = './ch6.json';

try {
  let tsCode = fs.readFileSync(tsFilePath, 'utf8');
  let jsonData = fs.readFileSync(jsonFilePath, 'utf8');

  let jsObjectString = jsonData;

  const targetEnd = /\}\s*\];/g;
  const match = tsCode.match(targetEnd);

  if (!match) {
    console.log("Could not find the end of the quizzes array. Aborting.");
    process.exit(1);
  }

  const closingBrace = match[match.length - 1];
  const insertionPoint = tsCode.lastIndexOf(closingBrace);

  const before = tsCode.slice(0, insertionPoint);

  const newCode = `${before}},\n  ${jsObjectString}\n];`;

  fs.writeFileSync(tsFilePath, newCode, 'utf8');
  console.log("Successfully appended Chapter 6!");

} catch (e) {
  console.error("Error:", e);
}
