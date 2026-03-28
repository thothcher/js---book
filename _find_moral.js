const fs = require('fs');

// Read book_0a17835_fixed.ts  and find Story 6 (Marshmallow Test) fields
const data = fs.readFileSync('c:/Users/vakht/Desktop/psy/book_0a17835_fixed.ts', 'utf8');

// Find Story 6 in the Stories section
const idx = data.indexOf("'The Marshmallow Test'");
if (idx < 0) {
  console.log("Not found with single quotes, trying double...");
  const idx2 = data.indexOf('"The Marshmallow Test"');
  console.log("Double quote result:", idx2);
}

// Try searching for the title differently
const marsIdx = data.indexOf('Marshmallow Test');
console.log('Found Marshmallow Test at:', marsIdx);

// Get 200 chars before and 5000 after
if (marsIdx > 0) {
  const chunk = data.substring(marsIdx - 100, marsIdx + 6000);

  // Find moral field
  const moralMatch = chunk.match(/moral:\s*['"](.*?)['"]\s*,/);
  if (moralMatch) {
    console.log('\nmoral:', moralMatch[1].substring(0, 200));
  } else {
    console.log('\nmoral not found in chunk');
  }

  // Show first 500 chars of chunk
  console.log('\n--- Chunk start ---');
  console.log(chunk.substring(0, 500));
  console.log('\n--- After content field ---');
  // Find where content ends (after the marshmallow content)
  const contentEnd = chunk.indexOf('appear.');
  if (contentEnd > 0) {
    console.log(chunk.substring(contentEnd, contentEnd + 500));
  }
}
