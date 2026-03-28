const fs = require('fs');

async function translate(text, to) {
    if (!text) return text;
    try {
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + to + '&dt=t&q=' + encodeURIComponent(text);
        const res = await fetch(url);
        const data = await res.json();
        return data[0].map(x => x[0]).join('');
    } catch(e) {
        console.error('Translation failed for:', text, e);
        return text;
    }
}

async function run() {
    let src = fs.readFileSync('src/app/data/psychologist-i18n.ts', 'utf8');
    
    // Grab everything from the record start until the next export
    let startIdx = src.indexOf('export const PSYCHOLOGIST_TRANSLATIONS: Record<string, any> = {');
    let contentAfterStart = src.substring(startIdx);
    let endIdx = contentAfterStart.indexOf('export function ');
    
    let dictStr = contentAfterStart.substring(0, endIdx).replace('export const PSYCHOLOGIST_TRANSLATIONS: Record<string, any> = ', '');
    // Remove the trailing semicolon
    dictStr = dictStr.trim().replace(/;$/, '');
    
    const fn = new Function('return ' + dictStr + ';');
    let data = fn();

    // Check if az is missing
    if (!data.az) data.az = {};
    if (!data.ru) data.ru = {};
    if (!data.hy) data.hy = {};
    if (!data.ka) data.ka = {};

    const englishData = data.en;
    for (const [key, value] of Object.entries(englishData)) {
        console.log('Processing:', key);
        for (const targetLang of ['ka', 'ru', 'hy', 'az']) {
            if (!data[targetLang][key]) data[targetLang][key] = {};
            
            const tgt = data[targetLang][key];
            if (!tgt.name || tgt.name === key || (targetLang === 'ka' && tgt.name === key)) {
                tgt.name = await translate(key, targetLang);
            }
            if (!tgt.contribution || tgt.contribution === value.contribution) {
                tgt.contribution = await translate(value.contribution, targetLang);
            }
            if (!tgt.details || tgt.details === value.details) {
                tgt.details = await translate(value.details, targetLang);
            }
        }
    }

    // Convert back
    const lines = [
        "import { Psychologist } from './book-data';",
        "",
        "export const PSYCHOLOGIST_TRANSLATIONS: Record<string, any> = " + JSON.stringify(data, null, 2) + ";",
        "",
        "export function getPsychologistText(psychologist: Psychologist, lang: string): { name: string, contribution: string, details: string } {",
        "  const translations = PSYCHOLOGIST_TRANSLATIONS[lang] || PSYCHOLOGIST_TRANSLATIONS['en'];",
        "  return translations[psychologist.name] || PSYCHOLOGIST_TRANSLATIONS['en'][psychologist.name];",
        "}"
    ];
    
    fs.writeFileSync('src/app/data/psychologist-i18n.ts', lines.join('\n'), 'utf8');
    console.log('psychologist-i18n.ts done');
}
run();
