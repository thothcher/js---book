const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const files = fs.readdirSync(dir);

const preservedJsonFiles = new Set([
  'package.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.spec.json',
  'angular.json',
  'package-lock.json',
  'ch1_4.json' // Wait, the user explicitly said "like ch1_4.json" meaning ch1_4.json should be deleted.
]);

// Let's reset the set to exactly what the user requested:
const exactPreservedJsonFiles = new Set([
  'package.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.spec.json',
  'angular.json'
]);

let deleted = 0;
for(const file of files) {
  if (file.endsWith('.json') && !exactPreservedJsonFiles.has(file)) {
      fs.unlinkSync(path.join(dir, file));
      console.log('Deleted json:', file);
      deleted++;
  } else if (file.match(/^(extract_|patch_|apply_).*\.js$/)) {
      fs.unlinkSync(path.join(dir, file));
      console.log('Deleted js:', file);
      deleted++;
  }
}
console.log('Cleanup complete. Total deleted:', deleted);
