const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/data/book-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('export const CHAPTERS: Chapter[\\n  {', 'export const CHAPTERS: Chapter[] = [\n  {');
content = content.replace('export const CHAPTERS: Chapter[\\\\n  {', 'export const CHAPTERS: Chapter[] = [\n  {');
content = content.replace('export const CHAPTERS: Chapter[\\n', 'export const CHAPTERS: Chapter[] = [\n');

if (content.includes('Ð')) {
    console.log('Detected latin1 mangled UTF-8 text, attempting to fix...');
    try {
        content = Buffer.from(content, 'latin1').toString('utf8');
    } catch(e) {
        console.error('Failed to fix encoding', e);
    }
} else {
    console.log('No mangled UTF-8 text detected, characters look ok.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed syntax in book-data.ts');
