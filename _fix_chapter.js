const fs = require('fs');

async function translateText(text, targetLang) {
  if (!text) return text;
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const json = await response.json();
    return json[0].map(item => item[0]).join('');
  } catch (error) {
    console.error(`Translation failed for: ${text.substring(0, 20)}... to ${targetLang}`, error);
    return text;
  }
}

async function start() {
    const filePath = 'src/app/data/chapter-i18n.ts';
    let content = fs.readFileSync(filePath, 'utf8');

    const startStr = 'export const CHAPTER_I18N: Record<number, ChapterI18n> = ';
    const startIndex = content.indexOf(startStr);
    
    let objectStr = content.substring(startIndex + startStr.length);
    
    // In chapter-i18n, there is an `export function chapterText` below the object.
    const endStr = 'export function chapterText';
    const endIndex = objectStr.indexOf(endStr);
    
    let remainder = '';
    if (endIndex !== -1) {
        remainder = objectStr.substring(endIndex);
        objectStr = objectStr.substring(0, endIndex);
    }

    let lastBrace = objectStr.lastIndexOf(';');
    if (lastBrace !== -1) {
        objectStr = objectStr.substring(0, lastBrace);
    }
    
    const fn = new Function('return ' + objectStr);
    const data = fn();
    
    const langs = ['ka', 'ru', 'hy', 'az'];
    const stringProps = ['title', 'description', 'summary', 'funFact', 'realWorld'];
    const arrayProps = ['keyTopics', 'keyPoints'];
    
    for (const [key, chapter] of Object.entries(data)) {
        console.log(`Chapter ${key}`);
        for (const prop of stringProps) {
            if (chapter[prop] && chapter[prop].en) {
                const enText = chapter[prop].en;
                for (const lang of langs) {
                    if (!chapter[prop][lang] || chapter[prop][lang] === enText) {
                        console.log(`  - ${prop} -> ${lang}`);
                        chapter[prop][lang] = await translateText(enText, lang);
                        await new Promise(r => setTimeout(r, 200));
                    }
                }
            }
        }
        for (const prop of arrayProps) {
            if (chapter[prop] && chapter[prop].en && Array.isArray(chapter[prop].en)) {
                const enList = chapter[prop].en;
                for (const lang of langs) {
                    if (!chapter[prop][lang] || JSON.stringify(chapter[prop][lang]) === JSON.stringify(enList) || chapter[prop][lang].length !== enList.length || chapter[prop][lang][0] === enList[0]) {
                        console.log(`  - ${prop} (array) -> ${lang}`);
                        const trans = [];
                        for (const item of enList) {
                            trans.push(await translateText(item, lang));
                            await new Promise(r => setTimeout(r, 200));
                        }
                        chapter[prop][lang] = trans;
                    }
                }
            }
        }
    }
    
    const filePre = content.substring(0, startIndex + startStr.length);
    fs.writeFileSync(filePath, filePre + JSON.stringify(data, null, 2) + ';\n\n' + remainder, 'utf8');
    console.log("Done");
}

start();
