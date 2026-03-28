import fs from 'fs';
import path from 'path';

// Note: To use this script, you would need an OpenAI API key and the 'openai' package
// npm install openai
//
// Then run:
// OPENAI_API_KEY="your-key" node generate_quizzes.js

import OpenAI from 'openai';

// This script generates 15 questions per chapter in 4 languages.
// We only do Chapter 1 in this example, modify the chapters array to run more.

const chaptersToGenerate = [1]; // Change this to [1, 2, 3, ..., 16] when you're ready
const QUESTIONS_PER_CHAPTER = 15;

const openai = new OpenAI();

async function generateQuizzes() {
  const quizzes = [];

  for (const chapterId of chaptersToGenerate) {
    console.log(`Generating quiz for Chapter ${chapterId}...`);

    const prompt = `
      Please generate ${QUESTIONS_PER_CHAPTER} multiple-choice questions for Chapter ${chapterId} of a psychology book.
      Output format strictly as a JSON array of objects with this structure (no markdown fences, just JSON):
      [
        {
          "id": "q1_1",
          "question": "English question?",
          "questionKa": "Georgian question?",
          "questionRu": "Russian question?",
          "questionHy": "Armenian question?",
          "options": ["Op1", "Op2", "Op3", "Op4"],
          "optionsKa": ["Ka Op1", "Ka Op2", "Ka Op3", "Ka Op4"],
          "optionsRu": ["Ru Op1", "Ru Op2", "Ru Op3", "Ru Op4"],
          "optionsHy": ["Hy Op1", "Hy Op2", "Hy Op3", "Hy Op4"],
          "correctIndex": 0, // 0 to 3
          "explanation": "English explanation",
          "explanationKa": "Georgian explanation",
          "explanationRu": "Russian explanation",
          "explanationHy": "Armenian explanation"
        }
      ]
    `;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [{ role: "user", content: prompt }]
      });

      const questions = JSON.parse(response.choices[0].message.content.trim());

      quizzes.push({
        id: `q${chapterId}`,
        chapterId: chapterId,
        title: `Chapter ${chapterId} Quiz`,
        titleKa: `თავი ${chapterId}-ის ქვიზი`, // Add correct i18n titles here
        titleRu: `Викторина по главе ${chapterId}`,
        titleHy: `Գլուխ ${chapterId} - ի Վիկտորինան`,
        questions: questions
      });

      console.log(`Successfully generated Chapter ${chapterId}`);

    } catch (e) {
      console.error(`Failed to generate Chapter ${chapterId}:`, e);
    }
  }

  // Save the result or append to quizzes.ts
  fs.writeFileSync(
    path.join(__dirname, 'quizzes_generated.json'),
    JSON.stringify(quizzes, null, 2),
    'utf-8'
  );
  console.log('Done! Generated JSON written to quizzes_generated.json');
}

generateQuizzes();
