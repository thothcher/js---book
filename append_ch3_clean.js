const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src', 'app', 'data', 'quizzes.ts');
const jsonFilePath = path.join(__dirname, 'ch3.json');

try {
  let tsData = fs.readFileSync(tsFilePath, 'utf8');
  let chData = fs.readFileSync(jsonFilePath, 'utf8');

  let formattedJson = JSON.stringify(JSON.parse(chData), null, 2);
  formattedJson = formattedJson.split('\n').map(line => '  ' + line).join('\n');

  if (tsData.includes('  }\n];')) {
    tsData = tsData.replace('  }\n];', '  },\n' + formattedJson.trim() + '\n];');
    fs.writeFileSync(tsFilePath, tsData);
    console.log('Successfully appended Chapter 3!');
  } else {
      console.log('Could not find standard ending pattern.');
  }
} catch(e) {
  console.error('Error:', e);
}
