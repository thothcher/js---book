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
    let src = fs.readFileSync('src/app/i18n/translations.ts', 'utf8');
    let objStr = src.substring(src.indexOf('{'));
    const fn = new Function('return ' + objStr + ';');
    let TRANSLATIONS = fn();

    for (const key of Object.keys(TRANSLATIONS)) {
        if (!TRANSLATIONS[key].az) {
            console.log('Translating to az:', TRANSLATIONS[key].en);
            TRANSLATIONS[key].az = await translate(TRANSLATIONS[key].en, 'az');
        }
    }

    const lines = [];
    lines.push('export const TRANSLATIONS: Record<string, Record<string, string>> = {');
    for (const key of Object.keys(TRANSLATIONS)) {
        lines.push(`  '${key}': ${JSON.stringify(TRANSLATIONS[key])},`);
    }
    lines.push('};');
    
    fs.writeFileSync('src/app/i18n/translations.ts', lines.join('\n'), 'utf8');
    console.log('translations.ts done');
}
run();
