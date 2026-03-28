const fs = require('fs');

const tsFilePath = './src/app/data/quizzes.ts';
const jsonFilePath = './ch4.json';

try {
  let tsCode = fs.readFileSync(tsFilePath, 'utf8');
  let jsonData = fs.readFileSync(jsonFilePath, 'utf8');

  // Format the JSON data slightly so it looks ok inside the TS array
  let jsObjectString = jsonData;

  // The quizzes array ends with:
  //   }
  // ];
  // We want to insert the new object before the final closing brace/bracket structure.

  // Find the last occurrence of   }\n];
  const targetEnd = /  \}\n\];/g;
  const match = tsCode.match(targetEnd);

  if (!match) {
    console.log("Could not find the end of the quizzes array. Aborting.");
    process.exit(1);
  }

  const closingBrace = match[match.length - 1]; // "  }\n];"
  const insertionPoint = tsCode.lastIndexOf(closingBrace);

  const before = tsCode.slice(0, insertionPoint);
  const after = tsCode.slice(insertionPoint + 3);  // keep "\n];"

  // Construct the new content
  const newCode = `${before}  },\n  ${jsObjectString}${after}`;

  fs.writeFileSync(tsFilePath, newCode, 'utf8');
  console.log("Successfully appended Chapter 4!");

} catch (e) {
  console.error("Error:", e);
}
