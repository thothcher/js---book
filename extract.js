const fs = require('fs');
const ts = require('typescript');

const fileContent = fs.readFileSync('src/app/data/book-data.ts', 'utf-8');

// A slightly naive but simple AST extraction
const sourceFile = ts.createSourceFile(
  'book-data.ts',
  fileContent,
  ts.ScriptTarget.Latest,
  true
);

let extractedNodes = [];

function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.text === 'CHAPTERS') {
    if (node.initializer && ts.isArrayLiteralExpression(node.initializer)) {
      // Get the first 4 elements
      for (let i = 0; i < 4 && i < node.initializer.elements.length; i++) {
        extractedNodes.push(node.initializer.elements[i]);
      }
    }
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const outputText = extractedNodes.map(node => printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)).join(',\n\n');

fs.writeFileSync('ch1_4.json', '[\n' + outputText + '\n]', 'utf-8');
console.log('Saved 4 chapters to ch1_4.json');
