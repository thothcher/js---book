const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'data', 'quizzes.ts');

try {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove quotes around object keys like "id": or 'id': to id:
  content = content.replace(/(['"])(\w+)\1\s*:/g, '$2:');

  // 2. Change numeric chapter IDs to formatted string IDs (e.g. id: 13, to id: 'q13',)
  content = content.replace(/\bid:\s*(\d+)\s*,/g, "id: 'q$1',");

  // Handle case where chapter id already stringified as "2" instead of "q2"
  content = content.replace(/\bid:\s*['"](\d+)['"]\s*,/g, "id: 'q$1',");

  // 3. Change hyphenated question IDs to underscored string IDs (e.g. id: '13-1' to id: 'q13_1')
  content = content.replace(/\bid:\s*['"]?(\d+)[-_](\d+)['"]?/g, "id: 'q$1_$2'");

  // 4. In previous JSONs the question key was "text:", we need to change it to "question:"
  content = content.replace(/\btext:/g, 'question:');
  content = content.replace(/\btextKa:/g, 'questionKa:');
  content = content.replace(/\btextRu:/g, 'questionRu:');
  content = content.replace(/\btextHy:/g, 'questionHy:');

  // 5. Write the cleaned content back
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully reformatted quizzes.ts!');
} catch (err) {
  console.error('Error processing the file:', err);
}
