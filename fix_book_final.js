/**
 * Surgical fix for book-data.ts from 0a17835 commit (UTF-16LE encoded).
 *
 * Corruption points:
 * 1. Line 3512: "       export const FACTS: Fact[] = [" appears inside a quiz question
 *    - Need to close quiz question, quiz array, quizzes array, then start FACTS
 * 2. Line ~3896: mid-string "export const STORIES: Story[] = [" inside a fact's textAz
 *    - Need to close fact, facts array, then start STORIES
 * 3. Line ~4003: mid-string "export const MEMORY_CARDS: MemoryCard[] = [" inside a story content
 *    - Need to close story, stories array, then start MEMORY_CARDS
 * 4. Line ~4340: Armenian text leaked outside string quotes after "]"
 *    - Need to clean up and properly terminate the story entry
 */
const fs = require('fs');

let content = fs.readFileSync('book_0a17835.ts', 'utf16le');

// Fix 1: Replace the embedded "export const FACTS" inside quiz data
// The line before has "],\r" (closing optionsKa), but quiz question is incomplete
// We need: close the question object, close questions array, close quiz object, close QUIZZES, then export FACTS
content = content.replace(
  /        \],\r?\n       export const FACTS: Fact\[\] = \[/,
  '        ],\n        "correctIndex": 0,\n        "explanation": "TRUNCATED",\n        "explanationKa": "TRUNCATED"\n      }\n    ]\n  }\n];\n\nexport const FACTS: Fact[] = ['
);

// Fix 2: Replace embedded "export const STORIES" inside a fact's textAz value
// Pattern: textAz value is truncated, then "export const STORIES" appears
content = content.replace(
  /("textAz": "[^"]*?)export const STORIES: Story\[\] = \[/,
  '$1TRUNCATED"\n  }\n];\n\nexport const STORIES: Story[] = ['
);

// Fix 3: Replace embedded "export const MEMORY_CARDS" inside a story's content
content = content.replace(
  /("content": "[^"]*?)export const MEMORY_CARDS: MemoryCard\[\] = \[/,
  '$1TRUNCATED"\n  }\n];\n\nexport const MEMORY_CARDS: MemoryCard[] = ['
);

// Fix 4: Armenian text leaked after "]" on line ~4340
// Pattern: a line starting with "]" followed by Armenian characters, then several lines of story data
// Find the pattern: "]\r\n" followed immediately by non-JSON Armenian text, then titleAz on next meaningful line
const armenianLeakRegex = /\]\r?\n(.{2,}(?:բ|Մ|փusage|դուusage|Saw|SAT).+?)\r?\n(\s+"titleAz")/s;
// More reliable: find "]" followed by a line that doesn't start with whitespace+quote or whitespace+}
// Actually let's find it precisely:
const lines = content.split('\n');
let fixedLines = [];
let skipMode = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Check for the "]<armenian text>" pattern
  if (trimmed.startsWith(']') && trimmed.length > 10 && !trimmed.startsWith('];') && !trimmed.startsWith('],') && !trimmed.match(/^\]\s*$/)) {
    // This is the corrupted line - it should just be the closing of contentHy
    // Emit a proper contentHy close and skip this corrupted text
    fixedLines.push('    "contentHy": "TRUNCATED"');
    continue;
  }

  fixedLines.push(line);
}

content = fixedLines.join('\n');

// Write as UTF-8 (Angular/TS standard)
fs.writeFileSync('src/app/data/book-data.ts', content, 'utf8');

// Verify exports
const exportCount = (content.match(/export const/g) || []).length;
console.log('Exports found:', exportCount);
console.log('File written to src/app/data/book-data.ts');
