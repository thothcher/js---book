const fs = require('fs');

let content = fs.readFileSync('src/app/data/quizzes.ts', 'utf8');

// Find the misplaced block: everything from the first misplaced question to the end of the array
// The valid structure ends with ch21's questions array ] and quiz object }, then the main array ]
// The misplaced questions are AFTER the ch21 quiz's closing

// Strategy: Find the last properly structured quiz (ch21) ending and remove everything between
// it and the final array closing ]; Then insert those questions into the right quiz blocks.

// First, let's find ch20 and ch21 quiz blocks and get their questions arrays properly
// Then rebuild the file by removing misplaced content and inserting into the right places

// Parse current valid questions for each chapter
function getExistingQuestions(content, chapterId) {
  const regex = new RegExp(`id: 'q${chapterId}_(\\d+)'`, 'g');
  const matches = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    matches.push(parseInt(m[1]));
  }
  return matches;
}

// Check which chapters have all 10 questions inside their questions arrays
// and which have questions outside
for (let ch = 2; ch <= 21; ch++) {
  const qIds = getExistingQuestions(content, ch);
  const max = Math.max(...qIds);
  console.log(`Ch ${ch}: questions ${qIds.join(',')}, max=${max}, count=${qIds.length}`);
}

// The problem is q20_6-q20_10 and q21_6-q21_10 are placed at the top level
// Let me find the misplaced block and remove it, then re-insert properly

// Find the closing of ch21's questions array
// Pattern: after q21_5's closing }, there should be ] (closing questions array), } (closing ch21 quiz)
// then the misplaced questions start

// Let's find the misplaced questions block
const ch21QuizEnd = content.indexOf("id: 'q21',");
// Find the closing of ch21 quiz questions array
let ch21QuestionsStart = content.indexOf("questions: [", ch21QuizEnd);

// Find q21_5 and collect all questions from q21_5 onwards that are INSIDE the questions array
// Then find q21_10 or the last correct question

// Better approach: find what should be the end of the array and what actually follows
// Look for pattern: after the ch21 quiz closing `}`, there should only be `\n];` or similar

// Find end of ch21 quiz block (the one with id: 'q21')
// Navigate from q21 quiz to end of its questions array

function findQuizEnd(content, quizIdStr) {
  const idx = content.indexOf(quizIdStr);
  if (idx === -1) return -1;

  // Find the opening { of this quiz object (search backward)
  let searchBack = idx;
  while (searchBack > 0 && content[searchBack] !== '{') searchBack--;

  // Now match braces to find the closing }
  let braceCount = 0;
  for (let i = searchBack; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    if (braceCount === 0) return i;
  }
  return -1;
}

const ch21End = findQuizEnd(content, "id: 'q21'");
console.log(`\nCh21 quiz ends at position ${ch21End}`);
console.log(`After ch21 end: "${content.slice(ch21End + 1, ch21End + 50).replace(/\n/g, '\\n')}"`);

// Everything between ch21End+1 and the closing ]; of QUIZZES array is misplaced
// Find the closing ];
const closingArr = content.lastIndexOf('];');
console.log(`Array closing at: ${closingArr}`);

// Extract the misplaced content
const misplacedContent = content.slice(ch21End + 1, closingArr).trim();
if (misplacedContent.startsWith(',')) {
  console.log(`\nMisplaced content starts with comma, length: ${misplacedContent.length}`);
} else if (misplacedContent === '') {
  console.log(`\nNo misplaced content found! The questions may be inside the quiz blocks already.`);
} else {
  console.log(`\nMisplaced content: "${misplacedContent.slice(0, 100)}..."`);
}

// Remove misplaced content
content = content.slice(0, ch21End + 1) + '\n];' + content.slice(closingArr + 2);

// Now check that q20_6 through q20_10 are already in ch20 quiz or need to be added
const ch20Questions = getExistingQuestions(content, 20);
const ch21Questions = getExistingQuestions(content, 21);
console.log(`\nAfter removal - Ch20 questions: ${ch20Questions.join(',')}`);
console.log(`After removal - Ch21 questions: ${ch21Questions.join(',')}`);

// We need to add the missing questions back into the correct locations
// Define the questions for ch20 (6-10) and ch21 (6-10)
const ch20NewQs = [
  { id: 'q20_6', question: "What does super() do in a child class constructor?", questionKa: "რას აკეთებს super() შვილი კლასის კონსტრუქტორში?", options: ["Creates a new instance","Calls the parent class constructor","Makes the class static","Defines a private field"], optionsKa: ["ახალ ინსტანციას ქმნის","მშობელი კლასის კონსტრუქტორს იძახებს","კლასს სტატიკურს ხდის","პრივატულ ველს განსაზღვრავს"], correctIndex: 1, explanation: "super() calls the parent class constructor, which must be called before using 'this' in a child constructor.", explanationKa: "super() მშობელი კლასის კონსტრუქტორს იძახებს, რომელიც უნდა გამოიძახოს შვილ კონსტრუქტორში 'this'-ის გამოყენებამდე." },
  { id: 'q20_7', question: "How do you declare a private field in JavaScript?", questionKa: "როგორ გამოაცხადებთ პრივატულ ველს JavaScript-ში?", options: ["private name","_name","#name","protected name"], optionsKa: ["private name","_name","#name","protected name"], correctIndex: 2, explanation: "Private fields use the # prefix: #name. They are only accessible within the class body.", explanationKa: "პრივატული ველები # პრეფიქსს იყენებენ: #name. მხოლოდ კლასის სხეულის შიგნით არის ხელმისაწვდომი." },
  { id: 'q20_8', question: "What is method overriding?", questionKa: "რა არის მეთოდის გადაფარვა?", options: ["Calling a parent method","Redefining a parent method in a child class","Adding parameters to a method","Making a method private"], optionsKa: ["მშობელი მეთოდის გამოძახება","მშობელი მეთოდის ხელახალი განსაზღვრა შვილ კლასში","მეთოდისთვის პარამეტრების დამატება","მეთოდის პრივატულად გადაქცევა"], correctIndex: 1, explanation: "Method overriding means a child class provides its own implementation of a method inherited from the parent.", explanationKa: "მეთოდის გადაფარვა ნიშნავს, რომ შვილი კლასი მშობლისგან მემკვიდრეობით მიღებული მეთოდის საკუთარ იმპლემენტაციას იძლევა." },
  { id: 'q20_9', question: "Can a child class access parent private fields (#)?", questionKa: "შეუძლია თუ არა შვილ კლასს მშობლის პრივატულ ველებზე (#) წვდომა?", options: ["Yes, always","No, private fields are only accessible in the defining class","Yes, with super","Only with extends"], optionsKa: ["დიახ, ყოველთვის","არა, პრივატული ველები მხოლოდ განმსაზღვრელ კლასში ხელმისაწვდომია","დიახ, super-ით","მხოლოდ extends-ით"], correctIndex: 1, explanation: "Private fields (#) cannot be accessed by child classes — they are truly private to the defining class.", explanationKa: "პრივატული ველები (#) შვილ კლასებისთვის მიუწვდომელია — ისინი ნამდვილად პრივატულია განმსაზღვრელ კლასში." },
  { id: 'q20_10', question: "What is the _ prefix convention used for?", questionKa: "რისთვის გამოიყენება _ პრეფიქსის კონვენცია?", options: ["It makes fields truly private","It signals that a field/method is intended for internal use","It is required by JavaScript","It prevents inheritance"], optionsKa: ["ველებს ნამდვილად პრივატულს ხდის","სიგნალიზებს, რომ ველი/მეთოდი შიდა გამოყენებისთვისაა","JavaScript მოითხოვს","მემკვიდრეობას კრძალავს"], correctIndex: 1, explanation: "The _ prefix is a convention (not enforced) signaling that a property is intended for internal use only.", explanationKa: "_ პრეფიქსი კონვენციაა (არა იძულებითი), რომელიც სიგნალიზებს რომ თვისება მხოლოდ შიდა გამოყენებისთვისაა." }
];

const ch21NewQs = [
  { id: 'q21_6', question: "What is the Factory pattern?", questionKa: "რა არის Factory შაბლონი?", options: ["A class that extends another","A function/method that creates and returns objects","A way to delete objects","A sorting algorithm"], optionsKa: ["კლასი რომელიც სხვას აფართოებს","ფუნქცია/მეთოდი, რომელიც ობიექტებს ქმნის და აბრუნებს","ობიექტების წაშლის გზა","სორტირების ალგორითმი"], correctIndex: 1, explanation: "The Factory pattern uses a function or method to create objects, abstracting away the new keyword.", explanationKa: "Factory შაბლონი ფუნქციას ან მეთოდს იყენებს ობიექტების შესაქმნელად, new საკვანძო სიტყვის აბსტრაჰირებით." },
  { id: 'q21_7', question: "What is separation of concerns in OOP?", questionKa: "რა არის პასუხისმგებლობის გამიჯვნა OOP-ში?", options: ["Putting all code in one class","Each class handles one specific responsibility","Using only private fields","Avoiding inheritance"], optionsKa: ["ყველა კოდის ერთ კლასში მოთავსება","თითოეული კლასი ერთ კონკრეტულ პასუხისმგებლობას ასრულებს","მხოლოდ პრივატული ველების გამოყენება","მემკვიდრეობის თავიდან აცილება"], correctIndex: 1, explanation: "Separation of concerns means each class should have a single, well-defined responsibility.", explanationKa: "პასუხისმგებლობის გამიჯვნა ნიშნავს, რომ თითოეულ კლასს ერთი, კარგად განსაზღვრული პასუხისმგებლობა უნდა ჰქონდეს." },
  { id: 'q21_8', question: "How does method chaining work?", questionKa: "როგორ მუშაობს მეთოდების ჯაჭვური შეკავშირება?", options: ["By using callbacks","By returning 'this' from each method","By using async/await","By nesting functions"], optionsKa: ["callback-ების გამოყენებით","თითოეული მეთოდიდან 'this'-ის დაბრუნებით","async/await-ის გამოყენებით","ფუნქციების ჩადგმით"], correctIndex: 1, explanation: "Method chaining works by returning 'this' from methods, allowing consecutive calls like obj.a().b().c().", explanationKa: "მეთოდების ჯაჭვი მუშაობს მეთოდებიდან 'this'-ის დაბრუნებით, რაც ზედიზედ გამოძახებას იძლევა: obj.a().b().c()." },
  { id: 'q21_9', question: "What is the benefit of using private fields in a BankAccount class?", questionKa: "რა სარგებელი აქვს BankAccount კლასში პრივატული ველების გამოყენებას?", options: ["Faster performance","Prevents direct access to the balance, enforcing validation","Reduces memory usage","Enables inheritance"], optionsKa: ["მეტი წარმადობა","ბალანსზე პირდაპირ წვდომას კრძალავს, ვალიდაციას აიძულებს","მეხსიერების მოხმარების შემცირება","მემკვიდრეობის საშუალება"], correctIndex: 1, explanation: "Private fields like #balance prevent direct modification, forcing use of validated methods like deposit() and withdraw().", explanationKa: "პრივატული ველები, როგორიცაა #balance, პირდაპირ მოდიფიკაციას კრძალავს, ვალიდირებული მეთოდების (deposit(), withdraw()) გამოყენებას აიძულებს." },
  { id: 'q21_10', question: "When should you prefer composition over inheritance?", questionKa: "როდის უნდა ამჯობინოთ კომპოზიცია მემკვიდრეობას?", options: ["Always","When objects need shared behavior without being the same type","Never, inheritance is always better","Only for arrays"], optionsKa: ["ყოველთვის","როცა ობიექტებს საერთო ქცევა სჭირდებათ ერთი ტიპის გარეშე","არასოდეს, მემკვიდრეობა ყოველთვის უკეთესია","მხოლოდ მასივებისთვის"], correctIndex: 1, explanation: "Composition is preferred when classes need to share behavior without a strict 'is-a' relationship.", explanationKa: "კომპოზიცია სასურველია როცა კლასებს ქცევის გაზიარება სჭირდებათ მკაცრი 'არის-ა' ურთიერთობის გარეშე." }
];

// Function to insert questions after a specific q*_5 inside the questions array
function insertAfterQ5(content, chapterId, newQuestions) {
  const q5Id = `id: 'q${chapterId}_5'`;
  const q5Idx = content.indexOf(q5Id);
  if (q5Idx === -1) {
    console.log(`Could not find ${q5Id}`);
    return content;
  }

  // Find the { that opens this question object (search backward from the id)
  let openBrace = q5Idx;
  while (openBrace > 0 && content[openBrace] !== '{') openBrace--;

  // Match braces from the opening {
  let braceCount = 0;
  let closeBrace = openBrace;
  for (; closeBrace < content.length; closeBrace++) {
    if (content[closeBrace] === '{') braceCount++;
    if (content[closeBrace] === '}') braceCount--;
    if (braceCount === 0) break;
  }

  // Build new questions text
  let newQText = '';
  for (const q of newQuestions) {
    newQText += `,\n      {\n`;
    newQText += `        id: '${q.id}',\n`;
    newQText += `        question: ${JSON.stringify(q.question)},\n`;
    newQText += `        questionKa: ${JSON.stringify(q.questionKa)},\n`;
    newQText += `        options: ${JSON.stringify(q.options)},\n`;
    newQText += `        optionsKa: ${JSON.stringify(q.optionsKa)},\n`;
    newQText += `        correctIndex: ${q.correctIndex},\n`;
    newQText += `        explanation: ${JSON.stringify(q.explanation)},\n`;
    newQText += `        explanationKa: ${JSON.stringify(q.explanationKa)}\n`;
    newQText += `      }`;
  }

  content = content.slice(0, closeBrace + 1) + newQText + content.slice(closeBrace + 1);
  return content;
}

// Only add if missing
if (!ch20Questions.includes(6)) {
  content = insertAfterQ5(content, 20, ch20NewQs);
  console.log('Added ch20 questions 6-10');
}
if (!ch21Questions.includes(6)) {
  content = insertAfterQ5(content, 21, ch21NewQs);
  console.log('Added ch21 questions 6-10');
}

fs.writeFileSync('src/app/data/quizzes.ts', content, 'utf8');
console.log('\nDone! File fixed.');

// Verify
const finalContent = fs.readFileSync('src/app/data/quizzes.ts', 'utf8');
for (let ch = 1; ch <= 21; ch++) {
  const qIds = getExistingQuestions(finalContent, ch);
  if (qIds.length !== 10) {
    console.log(`WARNING: Ch ${ch} has ${qIds.length} questions: ${qIds.join(',')}`);
  }
}
console.log('Verification complete - all chapters should have 10 questions each');
