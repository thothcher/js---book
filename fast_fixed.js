const fs = require('fs');

async function translateText(text, targetLang) {
  if (!text) return text;
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.status);
    const json = await response.json();
    return json[0].map(item => item[0]).join('');
  } catch (error) {
    console.log(`Fail ${targetLang}`);
    return text;
  }
}

async function start() {
    let content = fs.readFileSync('src/app/data/book-data.ts', 'utf8');
    const sections = ['CHAPTERS', 'QUIZZES', 'FACTS', 'STORIES', 'MEMORY_CARDS'];
    const langs = ['Ka', 'Ru', 'Hy', 'Az'];
    const langsLower = ['ka', 'ru', 'hy', 'az'];

    function extract(arrName, content) {
        const startStr = `export const ${arrName}: `;
        const startIndex = content.indexOf(startStr);
        if (startIndex === -1) return null;
        const assignStart = content.indexOf('=', startIndex);
        const bracketStart = content.indexOf('[', assignStart);
        let depth = 0; let endIndex = -1; let inString = false; let escape = false;
        for (let i = bracketStart; i < content.length; i++) {
            const char = content[i];
            if (escape) { escape = false; continue; }
            if (char === '\\') { escape = true; continue; }
            if (char === "'" || char === '"' || char === '`') {
                if (!inString) inString = char;
                else if (inString === char) inString = false;
            }
            if (!inString) {
                if (char === '[') depth++;
                if (char === ']') { depth--; if (depth === 0) { endIndex = i + 1; break; } }
            }
        }
        return { prefix: content.substring(startIndex, bracketStart), arrayStr: content.substring(bracketStart, endIndex), startIndex, endIndex };
    }

    for (const section of sections) {
        let content = fs.readFileSync("src/app/data/book-data.ts", "utf8");
        let ext = extract(section, content);
        if (!ext) continue;
        console.log('Doing', section);
        let data = (new Function('return ' + ext.arrayStr))();

        let actions = [];
        const queueTranslate = (obj, prop, langLower, defaultText) => {
            if (langLower === 'ka' && obj[prop] && obj[prop].length > 5) return; // skip if ka exists
            if (!obj[prop] || obj[prop] === defaultText) {
                actions.push(async () => {
                    let t = await translateText(defaultText, langLower);
                    obj[prop] = t;
                });
            }
        };

        const queueArrayTranslate = (obj, prop, langLower, defaultArr) => {
            if (langLower === 'ka' && obj[prop] && obj[prop].length === defaultArr.length && obj[prop][0] !== defaultArr[0]) return;
            if (!obj[prop] || obj[prop].length !== defaultArr.length || obj[prop][0] === defaultArr[0]) {
                obj[prop] = new Array(defaultArr.length).fill('');
                defaultArr.forEach((text, i) => {
                    actions.push(async () => {
                        let t = await translateText(text, langLower);
                        obj[prop][i] = t;
                    });
                });
            }
        };

        for (let item of data) {
            if (section === 'CHAPTERS') {
                ['title', 'description'].forEach(p => {
                    if (item[p]) langsLower.forEach((ll, i) => queueTranslate(item, p + langs[i], ll, item[p]));
                });
                ['keyTopics'].forEach(p => {
                    if (item[p]) langsLower.forEach((ll, i) => queueArrayTranslate(item, p + langs[i], ll, item[p]));
                });
            } else if (section === 'QUIZZES') {
                if (item.title) langsLower.forEach((ll, i) => queueTranslate(item, 'title' + langs[i], ll, item.title));
                if (item.questions) {
                    for (let q of item.questions) {
                        ['question', 'explanation'].forEach(p => {
                            if (q[p]) langsLower.forEach((ll, i) => queueTranslate(q, p + langs[i], ll, q[p]));
                        });
                        if (q.options) {
                            langsLower.forEach((ll, i) => queueArrayTranslate(q, 'options' + langs[i], ll, q.options));
                        }
                    }
                }
            } else if (section === 'FACTS') {
                if (item.text) langsLower.forEach((ll, i) => queueTranslate(item, 'text' + langs[i], ll, item.text));
            } else if (section === 'STORIES') {
                ['title', 'content', 'moral'].forEach(p => {
                    if (item[p]) langsLower.forEach((ll, i) => queueTranslate(item, p + langs[i], ll, item[p]));
                });
            } else if (section === 'MEMORY_CARDS') {
                ['term', 'definition'].forEach(p => {
                    if (item[p]) langsLower.forEach((ll, i) => queueTranslate(item, p + langs[i], ll, item[p]));
                });
            }
        }

        console.log('Promises for', section, actions.length);
        while (actions.length > 0) {
            const chunk = actions.splice(0, 30);
            await Promise.all(chunk.map(f => f()));
            process.stdout.write('.');
            await new Promise(r => setTimeout(r, 600)); // wait 600ms between chunks
        }
        console.log('\nUpdated', section);

        let newContent = fs.readFileSync('src/app/data/book-data.ts', 'utf8');
        let newExt = extract(section, newContent);
        newContent = newContent.substring(0, newExt.startIndex) + newExt.prefix + JSON.stringify(data, null, 2) + newContent.substring(newExt.endIndex);
        fs.writeFileSync('src/app/data/book-data.ts', newContent, 'utf8');
    }
}
start();
