/**
 * Fix book-data.ts from 0a17835 commit.
 * The file is UTF-16LE. The corruption is:
 * 1. "export const FACTS/STORIES/MEMORY_CARDS" got concatenated mid-string
 * 2. Armenian text leaked outside quotes at line ~4340
 * Fix: split at those boundaries, close previous structures, start new export.
 */
const fs = require('fs');

let content = fs.readFileSync('book_0a17835.ts', 'utf16le');
const lines = content.split('\n');

let result = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  const trimmed = line.trim();

  // Pattern 1: A line inside data that contains "export const FACTS/STORIES/MEMORY_CARDS"
  // embedded mid-string. Split: close previous structure, then start new export.
  const exportIdx = line.indexOf('export const FACTS');
  const exportIdx2 = line.indexOf('export const STORIES');
  const exportIdx3 = line.indexOf('export const MEMORY_CARDS');
  const foundExportIdx = [exportIdx, exportIdx2, exportIdx3].filter(x => x > -1);

  if (foundExportIdx.length > 0 && !trimmed.startsWith('export const')) {
    // Content before the export is corrupted/truncated string
    const minIdx = Math.min(...foundExportIdx);
    const exportPart = line.substring(minIdx).trim();

    // Close previous structures
    result.push('      }');
    result.push('    ]');
    result.push('  }');
    result.push('];');
    result.push('');
    // Start new export
    result.push(exportPart);
    i++;
    continue;
  }

  // Pattern 2: Line starts with ] followed by non-JS text (Armenian/Cyrillic leaked from string)
  if (trimmed.startsWith(']') && trimmed.length > 5 && !trimmed.startsWith('];') && !trimmed.startsWith('],') && !trimmed.startsWith('] }') && !trimmed.match(/^\]\s*$/)) {
    // Check next meaningful line
    let nextIdx = i + 1;
    while (nextIdx < lines.length && lines[nextIdx].trim() === '') nextIdx++;

    const nextLine = nextIdx < lines.length ? lines[nextIdx].trim() : '';

    if (nextLine.startsWith('"titleAz"') || nextLine.startsWith('"contentRu"')) {
      // We're inside a story object - Armenian contentHy leaked out.
      // Just emit closing bracket and move to next properties
      result.push('    "contentHy": "TRUNCATED"');
      i++;
      continue;
    } else {
      // Generic: just emit the bracket
      result.push('];');
      i++;
      continue;
    }
  }

  result.push(line);
  i++;
}

const fixed = result.join('\n');
// Write as UTF-8
fs.writeFileSync('book_0a17835_fixed.ts', fixed, 'utf8');
console.log('Written book_0a17835_fixed.ts (' + result.length + ' lines)');
