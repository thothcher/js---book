const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src', 'app', 'data', 'quizzes.ts');
const jsonFilePath = path.join(__dirname, 'ch2.json');

try {
  let tsData = fs.readFileSync(tsFilePath, 'utf8');
  let ch2Data = fs.readFileSync(jsonFilePath, 'utf8');

  // Format json to match standard indent
  let formattedJson = JSON.stringify(JSON.parse(ch2Data), null, 2);
  // Indent everything by 2 spaces
  formattedJson = formattedJson.split('\n').map(line => '  ' + line).join('\n');

  // Cleanly replace the closing bracket.
  // Look for the end of the array `];`
  if (tsData.includes('  }\n];')) {
    tsData = tsData.replace('  }\n];', '  },\n' + formattedJson.trim() + '\n];');
    fs.writeFileSync(tsFilePath, tsData);
    console.log('Successfully appended Chapter 2!');
  } else {
      console.log('Could not find standard ending pattern.');
  }
} catch(e) {
  console.error('Error:', e);
}
