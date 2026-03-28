const fs = require('fs');
const lines = fs.readFileSync('c:/Users/vakht/Desktop/psy/cleaned_full.ts', 'utf8').split('\n');

// Find all "id": lines in FACTS section (7530-8445)
console.log('=== FACTS section id lines (7530-8445) ===');
for (let i = 7529; i < 8445; i++) {
  const l = lines[i].replace(/\r$/, '');
  const m = l.match(/^\s+"id":\s*(\d+)/);
  if (m) {
    console.log('Line ' + (i + 1) + ': id=' + m[1]);
  }
}

console.log('\n=== STORIES section id lines (8447-8976) ===');
for (let i = 8446; i < 8976; i++) {
  const l = lines[i].replace(/\r$/, '');
  const m = l.match(/^\s+"id":\s*(\d+)/);
  if (m) {
    console.log('Line ' + (i + 1) + ': id=' + m[1]);
  }
}

console.log('\n=== MEMORY_CARDS section id lines (8978-9315) ===');
for (let i = 8977; i < 9315; i++) {
  const l = lines[i].replace(/\r$/, '');
  const m = l.match(/^\s+"id":\s*(\d+)/);
  if (m) {
    console.log('Line ' + (i + 1) + ': id=' + m[1]);
  }
}
