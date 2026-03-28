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
    console.log('Reading book-data.ts');
    let content = fs.readFileSync('src/app/data/book-data.ts', 'utf8');

    // Add properties to interfaces via regex
    const langSuffixes = ['Ru', 'Hy', 'Az'];
    const langsLower = ['ru', 'hy', 'az'];

    // Chapter: add titleKa... we should also update chapter-i18n.ts ... but chapter-i18n.ts is what is used? wait, yes.
    // Replace 'titleKa: string;' with 'titleKa: string; titleRu?: string; titleHy?: string; titleAz?: string;'
    function addLangProps(content, prop) {
        return content.replace(
            new RegExp(`${prop}Ka(\\??):\\s*(string(\\[\\])?);`, 'g'),
            `${prop}Ka$1: $2;\n  ${prop}Ru?: $2;\n  ${prop}Hy?: $2;\n  ${prop}Az?: $2;`
        );
    }

    content = addLangProps(content, 'title');
    content = addLangProps(content, 'description');
    content = addLangProps(content, 'keyTopics');
    content = addLangProps(content, 'question');
    content = addLangProps(content, 'options');
    content = addLangProps(content, 'explanation');
    content = addLangProps(content, 'text');
    content = addLangProps(content, 'content');
    content = addLangProps(content, 'moral');
    
    // Memory card has no translations?
    content = content.replace(
        /term: string;\n\s*definition: string;/g,
        'term: string;\n  termKa?: string;\n  termRu?: string;\n  termHy?: string;\n  termAz?: string;\n  definition: string;\n  definitionKa?: string;\n  definitionRu?: string;\n  definitionHy?: string;\n  definitionAz?: string;'
    );
     // Psychologist? inside book-data.ts it doesn't have ANY.
    
    fs.writeFileSync('src/app/data/book-data.ts', content, 'utf8');
    console.log('Done mapping interfaces in book-data');
}
start();
