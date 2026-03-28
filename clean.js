const fs = require('fs');
const content = fs.readFileSync('src/app/data/book-data.ts', 'utf8');

function extractJsonArray(startPattern) {
    const startIndex = content.indexOf(startPattern);
    if (startIndex === -1) return null;
    const bracketIndex = content.indexOf(' = [', startIndex);
    let depth = 0; let inString = false; let escape = false;
    for (let i = bracketIndex + 3; i < content.length; i++) {
        const char = content[i];
        if (escape) { escape = false; continue; }
        if (char === '\\') { escape = true; continue; }
        if (char === '\"') { inString = !inString; continue; }
        if (!inString) {
            if (char === '[') { depth++; }
            if (char === ']') {
                depth--;
                if (depth === 0) return content.substring(startIndex, i + 1);
            }
        }
    }
    return null;
}

const chapters = extractJsonArray('export const CHAPTERS: Chapter[]');
const quizzes = extractJsonArray('export const QUIZZES: Quiz[]');
const facts = extractJsonArray('export const FACTS: Fact[]');
const stories = extractJsonArray('export const STORIES: Story[]');
const cards = extractJsonArray('export const MEMORY_CARDS: MemoryCard[]');

console.log('Chapters length:', chapters?.length);
console.log('Quizzes length:', quizzes?.length);
console.log('Facts length:', facts?.length);
console.log('Stories length:', stories?.length);
console.log('Cards length:', cards?.length);

const imports = content.substring(0, content.indexOf('export interface Chapter'));
const interfaces = content.substring(content.indexOf('export interface Chapter'), content.indexOf('export const CHAPTERS: Chapter[]'));

fs.writeFileSync('cleaned.ts', imports + '\n' + interfaces + '\n' + chapters + ';\n\n' + quizzes + ';\n\n' + facts + ';\n\n' + stories + ';\n\n' + cards + ';\n\n', 'utf8');
console.log('Wrote to cleaned.ts');
