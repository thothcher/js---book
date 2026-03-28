const fs = require('fs');

// This script fixes the quizzes.ts by properly nesting all questions
// The problem: the initial script searched FORWARD for { after finding an id,
// missing the opening brace that was BEFORE the id. This caused new questions
// to be placed at the wrong nesting depth.

// Strategy: Use regex to extract the entire file's data via Function constructor,
// identify what quiz IDs exist and check structure

let content = fs.readFileSync('src/app/data/quizzes.ts', 'utf8');

// Extract the raw array definition by finding the assignment
const arrayStart = content.indexOf('Quiz[] = [');
const arrayEnd = content.lastIndexOf('];');

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('Could not find QUIZZES array bounds');
  process.exit(1);
}

// We'll use a custom parser approach:
// 1. Walk through the quizzes.ts and find each `questions: [` section
// 2. Match braces to find where the questions array ends
// 3. Check if there are question objects AFTER the array but BEFORE the next quiz

// Actually, simplest approach:
// 1. Find all quiz blocks by their `id: 'q{N}'` markers
// 2. For each quiz, find its `questions: [` and match brackets
// 3. Find all q{N}_{M} question ids and check if they're inside the questions array
// 4. If not, extract them and rebuild

// Let me use a completely different approach: eval the data
// First, strip the TypeScript import and export
let jsContent = content.replace(/import\s.*from\s.*;\s*/g, '');
jsContent = jsContent.replace(/export\s+const\s+QUIZZES:\s*Quiz\[\]\s*=\s*/, 'const QUIZZES = ');

try {
  // Use Function to safely evaluate
  const fn = new Function(jsContent + '\nreturn QUIZZES;');
  const quizzes = fn();
  console.log(`Parsed ${quizzes.length} quiz objects`);

  // Check: some "quizzes" may actually be misplaced questions
  const validQuizzes = [];
  const orphanQuestions = {}; // chapterId -> questions[]

  for (const item of quizzes) {
    if (item.questions && Array.isArray(item.questions)) {
      // Valid quiz object
      validQuizzes.push(item);
    } else if (item.id && item.id.match(/^q\d+_\d+$/)) {
      // This is a question object incorrectly at the quiz level
      const match = item.id.match(/^q(\d+)_(\d+)$/);
      const chapterId = parseInt(match[1]);
      if (!orphanQuestions[chapterId]) orphanQuestions[chapterId] = [];
      orphanQuestions[chapterId].push(item);
    } else {
      console.log('Unknown item:', JSON.stringify(item).slice(0, 100));
    }
  }

  console.log(`Valid quizzes: ${validQuizzes.length}`);
  console.log(`Orphan question chapters: ${Object.keys(orphanQuestions).sort((a,b) => a-b).join(', ')}`);

  for (const [ch, qs] of Object.entries(orphanQuestions)) {
    console.log(`  Ch ${ch}: ${qs.length} orphans (${qs.map(q => q.id).join(', ')})`);
  }

  // Merge orphan questions into the correct quizzes
  for (const quiz of validQuizzes) {
    const chId = quiz.chapterId;
    if (orphanQuestions[chId]) {
      quiz.questions.push(...orphanQuestions[chId]);
      delete orphanQuestions[chId];
    }
  }

  // Check for any remaining orphans
  const remaining = Object.keys(orphanQuestions);
  if (remaining.length > 0) {
    console.error('Remaining orphans without a quiz:', remaining);
  }

  // Verify
  for (const quiz of validQuizzes) {
    const qCount = quiz.questions.length;
    if (qCount !== 10) {
      console.log(`WARNING: Quiz ${quiz.id} (ch${quiz.chapterId}) has ${qCount} questions`);
    }
  }

  // Regenerate the file
  function escapeStr(s) {
    return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  }

  function jsonStr(s) {
    return JSON.stringify(s);
  }

  let output = `import { Quiz } from './types';\n\nexport const QUIZZES: Quiz[] = [\n`;

  for (let qi = 0; qi < validQuizzes.length; qi++) {
    const quiz = validQuizzes[qi];
    output += `  {\n`;
    output += `    id: '${quiz.id}',\n`;
    output += `    chapterId: ${quiz.chapterId},\n`;
    output += `    title: '${escapeStr(quiz.title)}',\n`;
    output += `    titleKa: '${escapeStr(quiz.titleKa)}',\n`;
    output += `    questions: [\n`;

    for (let i = 0; i < quiz.questions.length; i++) {
      const q = quiz.questions[i];
      output += `      {\n`;
      output += `        id: '${q.id}',\n`;
      output += `        question: ${jsonStr(q.question)},\n`;
      output += `        questionKa: ${jsonStr(q.questionKa)},\n`;
      output += `        options: ${jsonStr(q.options)},\n`;
      output += `        optionsKa: ${jsonStr(q.optionsKa)},\n`;
      output += `        correctIndex: ${q.correctIndex},\n`;
      output += `        explanation: ${jsonStr(q.explanation)},\n`;
      output += `        explanationKa: ${jsonStr(q.explanationKa)}\n`;
      output += `      }${i < quiz.questions.length - 1 ? ',' : ''}\n`;
    }

    output += `    ]\n`;
    output += `  }${qi < validQuizzes.length - 1 ? ',' : ''}\n`;
  }

  output += `];\n`;

  fs.writeFileSync('src/app/data/quizzes.ts', output, 'utf8');
  console.log(`\nFile regenerated with ${validQuizzes.length} quizzes, ${validQuizzes.reduce((s, q) => s + q.questions.length, 0)} total questions`);

} catch (e) {
  console.error('Parse error:', e.message);
  // If eval fails, need a different approach
}
