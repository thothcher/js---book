/**
 * Fix book-data.ts from 0a17835 commit.
 * Problem: export const FACTS/STORIES/MEMORY_CARDS got concatenated
 * into the middle of string values instead of being separate array exports.
 * Also Armenian text leaked outside of quotes near line 4340.
 */
const fs = require('fs');

let content = fs.readFileSync('book_0a17835.ts', 'utf8');
const lines = content.split('\n');

// Find the problematic patterns and fix them
let result = [];
let i = 0;
let skipUntilExport = false;
let pendingCloseBrackets = [];

while (i < lines.length) {
  const line = lines[i];
  const trimmed = line.trim();

  // Pattern 1: A line inside an array that contains "export const FACTS/STORIES/MEMORY_CARDS"
  // These should be split: close previous array, then start new export
  if (trimmed.match(/export const (FACTS|STORIES|MEMORY_CARDS)/)) {
    // Check if this line is embedded inside another structure (indented or in middle of data)
    const exportMatch = line.match(/(.*?)(export const (?:FACTS|STORIES|MEMORY_CARDS).*)/);
    if (exportMatch) {
      const before = exportMatch[1].trim();
      const exportPart = exportMatch[2];

      // If there's content before the export, it's a corrupted line
      if (before.length > 0) {
        // The content before was a truncated string value - close the object/array properly
        // Try to recover: close the current string with a quote, close the object, close the array
        // Find what we need to close based on context
        result.push('    "TRUNCATED": true');
        result.push('  }');
        result.push('];');
        result.push('');
      }
      // Now emit the export const line properly
      result.push(exportPart);
      i++;
      continue;
    }
  }

  // Pattern 2: Line starts with ] followed by Armenian/Cyrillic text (leaked from a string)
  // This is the "]R%..." or "]բ դուռը" pattern at line 4340
  if (trimmed.startsWith(']') && trimmed.length > 2 && !trimmed.startsWith('];') && !trimmed.startsWith('],')) {
    // Check if this is a closing bracket followed by garbage
    const bracketEnd = trimmed.indexOf(']');
    // Just emit the bracket and skip the rest
    // But we need to also close the previous object and the stories array properly
    // Check what comes after this line
    let nextNonEmpty = i + 1;
    while (nextNonEmpty < lines.length && lines[nextNonEmpty].trim() === '') nextNonEmpty++;

    if (nextNonEmpty < lines.length && lines[nextNonEmpty].trim().startsWith('"titleAz"')) {
      // We're in a story object and the Armenian content leaked. Fix:
      // Close the contentHy string properly, then continue
      result.push('    "TRUNCATED_HY": true');
      result.push('  },');
      // Skip this corrupted line and any following lines that are part of the leak
      // until we find the next property like "titleAz"
      i++;
      continue;
    } else {
      result.push('];');
      i++;
      continue;
    }
  }

  result.push(line);
  i++;
}

const fixed = result.join('\n');
fs.writeFileSync('book_0a17835_fixed.ts', fixed, 'utf8');
console.log('Written book_0a17835_fixed.ts');
console.log('Total lines:', result.length);
