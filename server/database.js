const { createClient } = require('@libsql/client');
const bcrypt = require('bcryptjs');

function createDb() {
  if (process.env.TURSO_DATABASE_URL) {
    return createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }
  const path = require('path');
  return createClient({
    url: 'file:' + path.join(__dirname, 'jslearn.db'),
  });
}

async function initDatabase() {
  const db = createDb();

  await db.executeMultiple(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      display_name TEXT NOT NULL,
      role TEXT DEFAULT 'user' CHECK(role IN ('user', 'admin')),
      email_verified INTEGER DEFAULT 0,
      subscription_status TEXT DEFAULT 'trial' CHECK(subscription_status IN ('trial', 'active', 'expired')),
      trial_start_date TEXT DEFAULT (datetime('now')),
      avatar TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      last_login TEXT
    );

    CREATE TABLE IF NOT EXISTS email_verification_codes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      code TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS password_reset_codes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      code TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS quiz_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      chapter_id INTEGER NOT NULL,
      quiz_id TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      book_id TEXT NOT NULL DEFAULT 'psy',
      completed_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS chapter_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      chapter_id INTEGER NOT NULL,
      status TEXT DEFAULT 'not_started' CHECK(status IN ('not_started', 'in_progress', 'completed')),
      book_id TEXT NOT NULL DEFAULT 'psy',
      updated_at TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, chapter_id, book_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      chapter_id INTEGER,
      color TEXT DEFAULT '#f0e6ff',
      book_id TEXT NOT NULL DEFAULT 'psy',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS memory_game_scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      level TEXT NOT NULL,
      moves INTEGER NOT NULL,
      time_seconds INTEGER NOT NULL,
      book_id TEXT NOT NULL DEFAULT 'psy',
      completed_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS user_xp (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      amount INTEGER NOT NULL,
      source TEXT NOT NULL,
      source_id TEXT,
      book_id TEXT NOT NULL DEFAULT 'psy',
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS streaks (
      user_id INTEGER PRIMARY KEY,
      current_streak INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      last_activity_date TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS badges (
      id TEXT PRIMARY KEY,
      name_en TEXT NOT NULL,
      name_ka TEXT NOT NULL,
      description_en TEXT NOT NULL,
      description_ka TEXT NOT NULL,
      icon TEXT NOT NULL,
      category TEXT NOT NULL,
      condition_type TEXT NOT NULL,
      condition_value INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS user_badges (
      user_id INTEGER NOT NULL,
      badge_id TEXT NOT NULL,
      earned_at TEXT DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, badge_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (badge_id) REFERENCES badges(id)
    );

    CREATE TABLE IF NOT EXISTS flashcards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      chapter_id INTEGER NOT NULL,
      front_en TEXT NOT NULL,
      front_ka TEXT NOT NULL,
      back_en TEXT NOT NULL,
      back_ka TEXT NOT NULL,
      category TEXT DEFAULT 'general',
      book_id TEXT NOT NULL DEFAULT 'psy'
    );

    CREATE TABLE IF NOT EXISTS user_flashcard_progress (
      user_id INTEGER NOT NULL,
      flashcard_id INTEGER NOT NULL,
      difficulty TEXT DEFAULT 'unseen',
      review_count INTEGER DEFAULT 0,
      next_review TEXT,
      last_reviewed TEXT,
      PRIMARY KEY (user_id, flashcard_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (flashcard_id) REFERENCES flashcards(id) ON DELETE CASCADE
    );
  `);

  // Seed badges if empty
  const badgeCount = await db.execute('SELECT COUNT(*) as c FROM badges');
  if (badgeCount.rows[0].c === 0) {
    const badges = [
      ['first_quiz', 'Quiz Rookie', 'პირველი ვიქტორინა', 'Complete your first quiz', 'გაიარეთ პირველი ვიქტორინა', 'mdi:help-circle', 'quiz', 'quizzes_completed', 1],
      ['quiz_5', 'Quiz Enthusiast', 'ვიქტორინის მოყვარული', 'Complete 5 quizzes', 'გაიარეთ 5 ვიქტორინა', 'mdi:clipboard-check', 'quiz', 'quizzes_completed', 5],
      ['quiz_master', 'Quiz Master', 'ვიქტორინის ოსტატი', 'Score 100% on any quiz', 'მიიღეთ 100% ნებისმიერ ვიქტორინაში', 'mdi:trophy', 'quiz', 'perfect_quiz', 1],
      ['quiz_all', 'Quiz Champion', 'ვიქტორინის ჩემპიონი', 'Complete all 16 chapter quizzes', 'გაიარეთ ყველა 16 თავის ვიქტორინა', 'mdi:trophy-variant', 'quiz', 'quizzes_completed', 16],
      ['chapter_1', 'First Chapter', 'პირველი თავი', 'Complete your first chapter', 'დაასრულეთ პირველი თავი', 'mdi:flag-checkered', 'learning', 'chapters_completed', 1],
      ['chapter_8', 'Halfway There', 'ნახევარი გზა', 'Complete 8 chapters', 'დაასრულეთ 8 თავი', 'mdi:star-half-full', 'learning', 'chapters_completed', 8],
      ['chapter_16', 'Book Complete', 'წიგნი დასრულებულია', 'Complete all 16 chapters', 'დაასრულეთ ყველა 16 თავი', 'mdi:crown', 'learning', 'chapters_completed', 16],
      ['streak_3', 'Getting Warm', 'თბება', 'Maintain a 3-day study streak', 'შეინარჩუნეთ 3-დღიანი სტრიკი', 'mdi:fire', 'streak', 'streak_days', 3],
      ['streak_7', 'On Fire', 'ცეცხლზეა', 'Maintain a 7-day study streak', 'შეინარჩუნეთ 7-დღიანი სტრიკი', 'mdi:fire-circle', 'streak', 'streak_days', 7],
      ['streak_30', 'Unstoppable', 'შეუჩერებელი', 'Maintain a 30-day study streak', 'შეინარჩუნეთ 30-დღიანი სტრიკი', 'mdi:lightning-bolt', 'streak', 'streak_days', 30],
      ['xp_100', 'XP Hunter', 'XP მონადირე', 'Earn 100 XP', 'მიიღეთ 100 XP', 'mdi:star', 'milestone', 'xp_total', 100],
      ['xp_500', 'XP Warrior', 'XP მებრძოლი', 'Earn 500 XP', 'მიიღეთ 500 XP', 'mdi:star-circle', 'milestone', 'xp_total', 500],
      ['xp_1000', 'XP Champion', 'XP ჩემპიონი', 'Earn 1000 XP', 'მიიღეთ 1000 XP', 'mdi:star-shooting', 'milestone', 'xp_total', 1000],
      ['xp_5000', 'XP Legend', 'XP ლეგენდა', 'Earn 5000 XP', 'მიიღეთ 5000 XP', 'mdi:medal', 'milestone', 'xp_total', 5000],
      ['memory_easy', 'Memory Match', 'მეხსიერების მატჩი', 'Win the easy memory game', 'მოიგეთ მეხსიერების მარტივი თამაში', 'mdi:puzzle', 'game', 'memory_game_win', 1],
      ['memory_hard', 'Memory Genius', 'მეხსიერების გენიოსი', 'Win the hard memory game', 'მოიგეთ მეხსიერების რთული თამაში', 'mdi:puzzle-check', 'game', 'memory_game_hard', 1],
      ['notes_5', 'Note Taker', 'ჩამნიშვნელი', 'Write 5 study notes', 'დაწერეთ 5 ჩანაწერი', 'mdi:notebook', 'learning', 'notes_created', 5],
      ['notes_20', 'Dedicated Writer', 'ერთგული მწერალი', 'Write 20 study notes', 'დაწერეთ 20 ჩანაწერი', 'mdi:notebook-multiple', 'learning', 'notes_created', 20],
      ['flashcard_1', 'Card Flipper', 'ბარათის მბრუნავი', 'Complete your first flashcard session', 'დაასრულეთ პირველი ფლეშქარდ სესია', 'mdi:cards', 'learning', 'flashcard_sessions', 1],
      ['flashcard_10', 'Flash Master', 'ფლეშ ოსტატი', 'Complete 10 flashcard sessions', 'დაასრულეთ 10 ფლეშქარდ სესია', 'mdi:brain', 'learning', 'flashcard_sessions', 10],
    ];
    await db.batch(
      badges.map(b => ({ sql: 'INSERT INTO badges (id, name_en, name_ka, description_en, description_ka, icon, category, condition_type, condition_value) VALUES (?,?,?,?,?,?,?,?,?)', args: b })),
      'write'
    );
  }

  // Seed flashcards if empty
  const flashcardCount = await db.execute('SELECT COUNT(*) as c FROM flashcards');
  if (flashcardCount.rows[0].c === 0) {
    const cards = [
      // Ch1: Introduction to JavaScript
      [1, 'JavaScript', 'JavaScript', 'A high-level, interpreted programming language for web development', 'მაღალი დონის, ინტერპრეტირებული პროგრამირების ენა ვებ-დეველოპმენტისთვის', 'definition'],
      [1, 'Variable (let)', 'ცვლადი (let)', 'Block-scoped variable declaration that can be reassigned', 'ბლოკ-სკოპის ცვლადის გამოცხადება, ხელახალი მინიჭება შესაძლებელია', 'definition'],
      [1, 'const', 'const', 'Declares a constant that cannot be reassigned after initialization', 'აცხადებს მუდმივას, რომელსაც ინიციალიზაციის შემდეგ ვეღარ მიანიჭებ', 'definition'],
      [1, 'console.log()', 'console.log()', 'Method to output information to the developer console', 'მეთოდი ინფორმაციის კონსოლში გამოსატანად', 'syntax'],
      [1, 'Data Types', 'მონაცემთა ტიპები', 'Primitive types: string, number, boolean, null, undefined, symbol, bigint', 'პრიმიტიული ტიპები: string, number, boolean, null, undefined, symbol, bigint', 'concept'],
      // Ch2: Control Flow
      [2, 'if/else', 'if/else', 'Conditional statement for decision making in code', 'პირობითი კონსტრუქცია გადაწყვეტილების მისაღებად კოდში', 'definition'],
      [2, 'switch', 'switch', 'Multi-branch conditional statement that matches a value against cases', 'მრავალშტოიანი პირობითი კონსტრუქცია, რომელიც მნიშვნელობას case-ებთან ამოწმებს', 'definition'],
      [2, 'Ternary Operator', 'ტერნარული ოპერატორი', 'Short if-else syntax: condition ? valueIfTrue : valueIfFalse', 'მოკლე if-else სინტაქსი: პირობა ? მნიშვნელობა_თუ_true : მნიშვნელობა_თუ_false', 'syntax'],
      [2, 'Comparison Operators', 'შედარების ოპერატორები', 'Operators that compare values: ==, ===, !=, !==, <, >, <=, >=', 'ოპერატორები მნიშვნელობების შესადარებლად: ==, ===, !=, !==, <, >, <=, >=', 'definition'],
      [2, 'Logical Operators', 'ლოგიკური ოპერატორები', 'Operators for combining conditions: && (AND), || (OR), ! (NOT)', 'ოპერატორები პირობების კომბინაციისთვის: && (და), || (ან), ! (არა)', 'definition'],
      // Ch3: Math & Strings
      [3, 'Math.random()', 'Math.random()', 'Returns a random number between 0 (inclusive) and 1 (exclusive)', 'აბრუნებს შემთხვევით რიცხვს 0-სა (ჩათვლით) და 1-ს (გარდა) შორის', 'syntax'],
      [3, 'Math.floor()', 'Math.floor()', 'Rounds a number down to the nearest integer', 'რიცხვს უახლოეს მთელ რიცხვამდე ამრგვალებს ქვემოთ', 'syntax'],
      [3, 'Template Literal', 'Template Literal', 'String syntax using backticks (`) that allows variable interpolation with ${...}', 'სტრინგის სინტაქსი backtick-ებით, რომელიც ${...} ინტერპოლაციას იძლევა', 'definition'],
      [3, 'String Methods', 'სტრინგის მეთოდები', 'Built-in methods: .toUpperCase(), .toLowerCase(), .trim(), .slice(), .includes()', 'ჩაშენებული მეთოდები: .toUpperCase(), .toLowerCase(), .trim(), .slice(), .includes()', 'concept'],
      [3, 'NaN', 'NaN', 'Special value meaning Not a Number, returned from invalid math operations', 'სპეციალური მნიშვნელობა — Not a Number, ბრუნდება არასწორი მათემატიკური ოპერაციებიდან', 'definition'],
      // Ch4: Loops
      [4, 'for loop', 'for ციკლი', 'Loop that repeats code a specified number of times: for(init; condition; increment)', 'ციკლი, რომელიც კოდს მითითებული რაოდენობით იმეორებს: for(init; პირობა; increment)', 'definition'],
      [4, 'while loop', 'while ციკლი', 'Loop that repeats while a condition is true', 'ციკლი, რომელიც მეორდება სანამ პირობა ჭეშმარიტია', 'definition'],
      [4, 'do...while', 'do...while', 'Loop that executes at least once before checking the condition', 'ციკლი, რომელიც ერთხელ მაინც სრულდება პირობის შემოწმებამდე', 'definition'],
      [4, 'break', 'break', 'Statement that exits the current loop immediately', 'ოპერატორი, რომელიც მიმდინარე ციკლიდან დაუყოვნებლივ გამოდის', 'syntax'],
      [4, 'continue', 'continue', 'Statement that skips to the next loop iteration', 'ოპერატორი, რომელიც ციკლის შემდეგ იტერაციაზე გადადის', 'syntax'],
      // Ch5: Arrays
      [5, 'Array', 'მასივი', 'Ordered collection of values stored in a single variable using [ ]', 'მნიშვნელობების დალაგებული კოლექცია ერთ ცვლადში [ ] გამოყენებით', 'definition'],
      [5, 'push() / pop()', 'push() / pop()', 'push() adds to end, pop() removes from end of an array', 'push() ბოლოს ამატებს, pop() ბოლოდან შლის', 'syntax'],
      [5, 'map()', 'map()', 'Creates a new array by transforming each element with a callback', 'ახალ მასივს ქმნის ყოველი ელემენტის callback-ით გარდაქმნით', 'definition'],
      [5, 'filter()', 'filter()', 'Creates a new array with elements that pass a test function', 'ახალ მასივს ქმნის ელემენტებით, რომლებიც ტესტ ფუნქციას გაივლიან', 'definition'],
      [5, 'forEach()', 'forEach()', 'Executes a function for each array element (no return value)', 'ფუნქციას ასრულებს მასივის ყოველი ელემენტისთვის (არ აბრუნებს მნიშვნელობას)', 'definition'],
      // Ch6: Nested Arrays
      [6, '2D Array', 'ორგანზომილებიანი მასივი', 'An array containing arrays, forming a matrix/grid structure', 'მასივი, რომელიც მასივებს შეიცავს — მატრიცული/ბადისებრი სტრუქტურა', 'definition'],
      [6, 'flat()', 'flat()', 'Creates a new array with sub-arrays flattened by a specified depth', 'ახალ მასივს ქმნის ქვემასივების მითითებული სიღრმით გასწორებით', 'syntax'],
      [6, 'Nested Loop', 'ჩადგმული ციკლი', 'A loop inside another loop, used to iterate 2D arrays', 'ციკლი სხვა ციკლის შიგნით, 2D მასივებზე იტერაციისთვის', 'concept'],
      // Ch7: Functions
      [7, 'Function', 'ფუნქცია', 'Reusable block of code that performs a specific task', 'კოდის ხელახლად გამოყენებადი ბლოკი კონკრეტული ამოცანისთვის', 'definition'],
      [7, 'Arrow Function', 'Arrow ფუნქცია', 'Concise function syntax using => introduced in ES6', 'ფუნქციის მოკლე სინტაქსი => გამოყენებით, ES6-ში შემოღებული', 'definition'],
      [7, 'return', 'return', 'Statement that sends a value back from a function and stops execution', 'ოპერატორი, რომელიც ფუნქციიდან მნიშვნელობას აბრუნებს და შესრულებას აჩერებს', 'syntax'],
      [7, 'Parameter vs Argument', 'პარამეტრი vs არგუმენტი', 'Parameter: variable in definition; Argument: actual value passed when calling', 'პარამეტრი: ცვლადი განსაზღვრებაში; არგუმენტი: ფაქტობრივი მნიშვნელობა გამოძახებისას', 'concept'],
      [7, 'Scope', 'სკოუპი', 'The context in which variables are accessible (global, function, block)', 'კონტექსტი, რომელშიც ცვლადები ხელმისაწვდომია (გლობალური, ფუნქციის, ბლოკის)', 'concept'],
      // Ch8: Advanced Functions
      [8, 'Closure', 'ქლოჟერი', 'Function that remembers and accesses variables from its outer scope', 'ფუნქცია, რომელიც იმახსოვრებს და წვდება გარე სკოუპის ცვლადებს', 'definition'],
      [8, 'Callback', 'Callback', 'A function passed as an argument to another function', 'ფუნქცია, რომელიც სხვა ფუნქციას არგუმენტად გადაეცემა', 'definition'],
      [8, 'Higher-Order Function', 'მაღალი რიგის ფუნქცია', 'Function that takes or returns another function', 'ფუნქცია, რომელიც სხვა ფუნქციას იღებს ან აბრუნებს', 'definition'],
      [8, 'Recursion', 'რეკურსია', 'A function that calls itself to solve smaller subproblems', 'ფუნქცია, რომელიც საკუთარ თავს იძახებს მცირე ქვეპრობლემების გადასაჭრელად', 'concept'],
      [8, 'Default Parameter', 'ნაგულისხმევი პარამეტრი', 'Function parameter with a preset fallback value if no argument is passed', 'ფუნქციის პარამეტრი წინასწარ მითითებული მნიშვნელობით, თუ არგუმენტი არ გადაეცა', 'syntax'],
      // Ch9: Objects
      [9, 'Object', 'ობიექტი', 'Collection of key-value pairs (properties and methods)', 'გასაღებ-მნიშვნელობის წყვილების კოლექცია (თვისებები და მეთოდები)', 'definition'],
      [9, 'Destructuring', 'დესტრუქტურიზაცია', 'Extracting values from objects/arrays into separate variables', 'ობიექტებიდან/მასივებიდან მნიშვნელობების ცალკე ცვლადებში ამოღება', 'definition'],
      [9, 'Spread Operator (...)', 'Spread ოპერატორი (...)', 'Syntax to expand iterables or copy objects/arrays', 'სინტაქსი იტერირებადების გასაშლელად ან ობიექტების/მასივების კოპირებისთვის', 'syntax'],
      [9, 'this', 'this', 'Keyword referring to the current execution context in a method', 'საკვანძო სიტყვა, რომელიც მეთოდში მიმდინარე შესრულების კონტექსტზე მიუთითებს', 'concept'],
      [9, 'JSON', 'JSON', 'JavaScript Object Notation — text format for data exchange', 'JavaScript Object Notation — ტექსტური ფორმატი მონაცემთა გაცვლისთვის', 'definition'],
      // Ch10: Date & Time
      [10, 'new Date()', 'new Date()', 'Creates a Date object representing the current date and time', 'ქმნის Date ობიექტს, რომელიც მიმდინარე თარიღსა და დროს წარმოადგენს', 'syntax'],
      [10, 'setTimeout()', 'setTimeout()', 'Executes a function once after a specified delay in milliseconds', 'ფუნქციას ერთხელ ასრულებს მითითებული დაყოვნების შემდეგ მილიწამებში', 'definition'],
      [10, 'setInterval()', 'setInterval()', 'Repeatedly executes a function at specified time intervals', 'ფუნქციას განმეორებით ასრულებს მითითებული დროის ინტერვალებით', 'definition'],
      [10, 'Date Methods', 'Date მეთოდები', 'getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()', 'getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()', 'concept'],
      // Ch11: Sorting Algorithms
      [11, 'Bubble Sort', 'Bubble Sort', 'Simple sorting algorithm that repeatedly swaps adjacent elements if out of order', 'მარტივი სორტირების ალგორითმი, რომელიც მეზობელ ელემენტებს ანაცვლებს თუ არასწორი თანმიმდევრობაა', 'concept'],
      [11, 'sort()', 'sort()', 'Built-in array method that sorts elements (by string value by default)', 'მასივის ჩაშენებული მეთოდი, ელემენტებს ალაგებს (ნაგულისხმევად სტრინგად)', 'syntax'],
      [11, 'Compare Function', 'შედარების ფუნქცია', 'Function passed to sort(): (a, b) => a - b for ascending numeric sort', 'ფუნქცია sort()-ისთვის: (a, b) => a - b ზრდადი რიცხვითი სორტირებისთვის', 'concept'],
      // Ch12: Introduction to DOM
      [12, 'DOM', 'DOM', 'Document Object Model — tree representation of HTML that JS can manipulate', 'Document Object Model — HTML-ის ხისებური წარმოდგენა, რომლის მანიპულაციაც JS-ს შეუძლია', 'definition'],
      [12, 'getElementById()', 'getElementById()', 'Selects a single HTML element by its unique ID attribute', 'HTML ელემენტს უნიკალური ID ატრიბუტით ირჩევს', 'syntax'],
      [12, 'querySelector()', 'querySelector()', 'Selects the first element matching a CSS selector', 'CSS სელექტორთან თანხვედრ პირველ ელემენტს ირჩევს', 'syntax'],
      [12, 'textContent / innerHTML', 'textContent / innerHTML', 'textContent gets/sets text; innerHTML gets/sets HTML content', 'textContent ტექსტს იღებს/აყენებს; innerHTML — HTML შინაარსს', 'definition'],
      [12, 'createElement()', 'createElement()', 'Creates a new HTML element node in memory', 'მეხსიერებაში ახალ HTML ელემენტის კვანძს ქმნის', 'syntax'],
      // Ch13: DOM classList
      [13, 'classList', 'classList', 'Object to add, remove, toggle, and check CSS classes on elements', 'ობიექტი ელემენტებზე CSS კლასების დამატება/წაშლა/გადართვისთვის', 'definition'],
      [13, 'classList.toggle()', 'classList.toggle()', 'Adds the class if missing, removes it if present', 'კლასს ამატებს თუ არ აქვს, შლის თუ აქვს', 'syntax'],
      [13, 'style property', 'style თვისება', 'Direct access to inline CSS styles: element.style.color = "red"', 'ინლაინ CSS სტილებზე პირდაპირი წვდომა: element.style.color = "red"', 'syntax'],
      // Ch14: Interactive DOM
      [14, 'addEventListener()', 'addEventListener()', 'Attaches an event handler function to an element', 'ივენთ ჰენდლერ ფუნქციას ელემენტს ამაგრებს', 'definition'],
      [14, 'Event Bubbling', 'ივენთ ბაბლინგი', 'Events propagate from the target element up through parent elements', 'ივენთები სამიზნე ელემენტიდან მშობელ ელემენტებზე ვრცელდება', 'concept'],
      [14, 'event.preventDefault()', 'event.preventDefault()', 'Prevents the default browser action for an event (e.g., form submission)', 'ივენთისთვის ბრაუზერის ნაგულისხმევ მოქმედებას აჩერებს (მაგ., ფორმის გაგზავნა)', 'syntax'],
      [14, 'Event Delegation', 'ივენთ დელეგაცია', 'Using a parent listener to handle events on dynamically created children', 'მშობელ ელემენტის მსმენელის გამოყენება დინამიური შვილი ელემენტების ივენთებისთვის', 'concept'],
      // Ch15: Input & File Handling
      [15, 'input event', 'input ივენთი', 'Fires every time the value of an input element changes', 'ირთვება ყოველ ჯერზე, როცა input ელემენტის მნიშვნელობა იცვლება', 'definition'],
      [15, 'change event', 'change ივენთი', 'Fires when an input element loses focus after its value changed', 'ირთვება როცა input ელემენტი ფოკუსს კარგავს მნიშვნელობის შეცვლის შემდეგ', 'definition'],
      [15, 'FileReader', 'FileReader', 'API for reading file contents from the user local machine', 'API მომხმარებლის ლოკალური ფაილის შიგთავსის წასაკითხად', 'definition'],
      // Ch16: API & Network
      [16, 'Fetch API', 'Fetch API', 'Modern built-in interface for making HTTP requests from the browser', 'თანამედროვე ჩაშენებული ინტერფეისი ბრაუზერიდან HTTP მოთხოვნების გასაკეთებლად', 'definition'],
      [16, 'HTTP Methods', 'HTTP მეთოდები', 'GET retrieves data, POST sends data, PUT updates, DELETE removes', 'GET მონაცემებს იღებს, POST აგზავნის, PUT ანახლებს, DELETE შლის', 'concept'],
      [16, 'JSON response', 'JSON პასუხი', 'Parse server response with response.json() to get a JavaScript object', 'სერვერის პასუხი response.json()-ით JavaScript ობიექტად აანალიზე', 'syntax'],
      [16, 'HTTP Status Codes', 'HTTP სტატუს კოდები', '200=OK, 201=Created, 400=Bad Request, 404=Not Found, 500=Server Error', '200=OK, 201=შექმნილი, 400=ცუდი მოთხოვნა, 404=ვერ მოიძებნა, 500=სერვერის შეცდომა', 'concept'],
      // Ch17: Async Programming
      [17, 'Promise', 'Promise', 'Object representing the eventual completion or failure of an async operation', 'ობიექტი, რომელიც ასინქრონული ოპერაციის საბოლოო დასრულებას ან წარუმატებლობას წარმოადგენს', 'definition'],
      [17, 'async/await', 'async/await', 'Syntax for writing asynchronous code that looks synchronous', 'სინტაქსი ასინქრონული კოდის ჩასაწერად, რომელიც სინქრონულად გამოიყურება', 'definition'],
      [17, 'then() / catch()', 'then() / catch()', 'then() handles resolved promises; catch() handles rejected promises', 'then() გადაწყვეტილ promise-ებს ამუშავებს; catch() უარყოფილებს', 'syntax'],
      [17, 'Promise.all()', 'Promise.all()', 'Resolves when all promises complete, rejects if any one fails', 'გადაიწყვეტება ყველა promise-ის დასრულებისას, უარყოფს თუ რომელიმე ჩავარდება', 'syntax'],
      // Ch18: Storage
      [18, 'localStorage', 'localStorage', 'Stores key-value data with no expiration date in the browser', 'ბრაუზერში გასაღებ-მნიშვნელობის მონაცემებს ინახავს ვადის გარეშე', 'definition'],
      [18, 'sessionStorage', 'sessionStorage', 'Stores data for one session only (cleared when tab closes)', 'მონაცემებს მხოლოდ ერთი სესიისთვის ინახავს (იშლება ჩანართის დახურვისას)', 'definition'],
      [18, 'setItem() / getItem()', 'setItem() / getItem()', 'setItem(key, value) stores data; getItem(key) retrieves it', 'setItem(key, value) ინახავს; getItem(key) იღებს', 'syntax'],
      [18, 'JSON.stringify() / parse()', 'JSON.stringify() / parse()', 'stringify() converts objects to JSON strings for storage; parse() converts back', 'stringify() ობიექტებს JSON სტრინგად გარდაქმნის შესანახად; parse() უკან გარდაქმნის', 'syntax'],
      // Ch19: OOP Basics
      [19, 'Class', 'კლასი', 'Blueprint for creating objects with shared properties and methods', 'შაბლონი ობიექტების შესაქმნელად საერთო თვისებებით და მეთოდებით', 'definition'],
      [19, 'Constructor', 'კონსტრუქტორი', 'Special method called automatically when creating a new class instance', 'სპეციალური მეთოდი, რომელიც ახალი ინსტანციის შექმნისას ავტომატურად გამოიძახება', 'definition'],
      [19, 'new keyword', 'new საკვანძო სიტყვა', 'Operator that creates a new instance of a class', 'ოპერატორი, რომელიც კლასის ახალ ინსტანციას ქმნის', 'syntax'],
      [19, 'Encapsulation', 'ინკაფსულაცია', 'Bundling data and methods together, hiding internal details', 'მონაცემების და მეთოდების შეფუთვა ერთად, შიდა დეტალების დამალვა', 'concept'],
      // Ch20: OOP Advanced
      [20, 'Inheritance (extends)', 'მემკვიდრეობა (extends)', 'Creating a child class based on a parent class to reuse code', 'შვილი კლასის შექმნა მშობელი კლასის საფუძველზე კოდის ხელახალი გამოყენებისთვის', 'definition'],
      [20, 'super', 'super', 'Keyword to call the parent class constructor or methods', 'საკვანძო სიტყვა მშობელი კლასის კონსტრუქტორის ან მეთოდების გამოსაძახებლად', 'syntax'],
      [20, 'Polymorphism', 'პოლიმორფიზმი', 'Ability of child classes to override parent methods with their own implementation', 'შვილი კლასების უნარი მშობლის მეთოდები საკუთარი იმპლემენტაციით გადაფარონ', 'concept'],
      [20, 'Private fields (#)', 'პრივატული ველები (#)', 'Class fields accessible only within the class using # prefix', 'კლასის ველები # პრეფიქსით, ხელმისაწვდომი მხოლოდ კლასის შიგნით', 'syntax'],
      [20, 'static', 'static', 'Method or property that belongs to the class itself, not its instances', 'მეთოდი ან თვისება, რომელიც თავად კლასს ეკუთვნის, არა მის ინსტანციებს', 'definition'],
      // Ch21: OOP Practice
      [21, 'getter (get)', 'getter (get)', 'Method accessed like a property without parentheses', 'მეთოდი, რომელსაც თვისების მსგავსად ფრჩხილების გარეშე წვდები', 'syntax'],
      [21, 'setter (set)', 'setter (set)', 'Method triggered when assigning a value, used for validation', 'მეთოდი, რომელიც მნიშვნელობის მინიჭებისას ირთვება, ვალიდაციისთვის', 'syntax'],
      [21, 'Factory Pattern', 'Factory შაბლონი', 'Function or method that creates and returns different object types', 'ფუნქცია ან მეთოდი, რომელიც სხვადასხვა ტიპის ობიექტებს ქმნის და აბრუნებს', 'concept'],
      [21, 'Method Chaining', 'მეთოდების ჯაჭვი', 'Pattern of calling multiple methods in sequence by returning this', 'შაბლონი — მრავალი მეთოდის თანმიმდევრულად გამოძახება this-ის დაბრუნებით', 'concept'],
      [21, 'Composition', 'კომპოზიცია', 'Building complex objects by combining simpler objects instead of inheritance', 'რთული ობიექტების აგება მარტივების კომბინირებით მემკვიდრეობის ნაცვლად', 'concept'],
    ];
    await db.batch(
      cards.map(c => ({ sql: 'INSERT INTO flashcards (chapter_id, front_en, front_ka, back_en, back_ka, category) VALUES (?,?,?,?,?,?)', args: c })),
      'write'
    );
  }

  // Create default admin user if not exists
  const adminExists = await db.execute({ sql: 'SELECT id FROM users WHERE role = ?', args: ['admin'] });
  if (adminExists.rows.length === 0) {
    const hash = bcrypt.hashSync('admin123', 10);
    await db.execute({
      sql: "INSERT INTO users (email, username, password_hash, display_name, role, subscription_status, email_verified) VALUES (?, ?, ?, ?, 'admin', 'active', 1)",
      args: ['admin@jslearn.ge', 'admin', hash, 'Administrator'],
    });
  } else {
    await db.execute({ sql: 'UPDATE users SET email_verified = 1 WHERE role = ?', args: ['admin'] });
  }

  // Create default test user for local development
  const testExists = await db.execute({ sql: "SELECT id FROM users WHERE username = ?", args: ['test'] });
  if (testExists.rows.length === 0) {
    const testHash = bcrypt.hashSync('test123', 10);
    await db.execute({
      sql: "INSERT INTO users (email, username, password_hash, display_name, role, subscription_status, email_verified) VALUES (?, ?, ?, ?, 'user', 'active', 1)",
      args: ['test@jslearn.ge', 'test', testHash, 'Test User'],
    });
  }

  // Migrations for existing databases
  try {
    await db.execute('ALTER TABLE users ADD COLUMN avatar TEXT');
  } catch (_) { /* column already exists */ }

  // Add book_id columns to existing databases
  const bookIdMigrations = [
    "ALTER TABLE quiz_progress ADD COLUMN book_id TEXT NOT NULL DEFAULT 'jslearn'",
    "ALTER TABLE chapter_progress ADD COLUMN book_id TEXT NOT NULL DEFAULT 'jslearn'",
    "ALTER TABLE notes ADD COLUMN book_id TEXT NOT NULL DEFAULT 'jslearn'",
    "ALTER TABLE memory_game_scores ADD COLUMN book_id TEXT NOT NULL DEFAULT 'jslearn'",
    "ALTER TABLE user_xp ADD COLUMN book_id TEXT NOT NULL DEFAULT 'jslearn'",
    "ALTER TABLE flashcards ADD COLUMN book_id TEXT NOT NULL DEFAULT 'jslearn'",
  ];
  for (const sql of bookIdMigrations) {
    try { await db.execute(sql); } catch (_) { /* column already exists */ }
  }

  // Recreate unique constraint on chapter_progress to include book_id
  try {
    await db.execute('CREATE UNIQUE INDEX IF NOT EXISTS idx_chapter_progress_user_chapter_book ON chapter_progress(user_id, chapter_id, book_id)');
  } catch (_) { /* index already exists */ }

  // Seed shta flashcards if not present
  const shtaFlashcardCount = await db.execute("SELECT COUNT(*) as c FROM flashcards WHERE book_id = 'shta'");
  if (shtaFlashcardCount.rows[0].c === 0) {
    const shtaCards = [
      [1, 'უხილავი ხელი', 'უხილავი ხელი', 'ადამ სმითის კონცეფცია — ბაზარი თვითრეგულირებადია ინდივიდუალური ინტერესების მეშვეობით', 'ადამ სმითის კონცეფცია — ბაზარი თვითრეგულირებადია ინდივიდუალური ინტერესების მეშვეობით', 'concept', 'shta'],
      [1, 'შრომის განაწილება', 'შრომის განაწილება', 'სპეციალიზაცია სამუშაო პროცესში, რომელიც ზრდის პროდუქტიულობას — სმითის ეკონომიკური თეორიის საფუძველი', 'სპეციალიზაცია სამუშაო პროცესში, რომელიც ზრდის პროდუქტიულობას — სმითის ეკონომიკური თეორიის საფუძველი', 'definition', 'shta'],
      [1, 'მერკანტილიზმი', 'მერკანტილიზმი', 'ეკონომიკური სისტემა, რომელიც ეფუძნებოდა ძვირფასი ლითონების დაგროვებას — სმითი აკრიტიკებდა ამ მიდგომას', 'ეკონომიკური სისტემა, რომელიც ეფუძნებოდა ძვირფასი ლითონების დაგროვებას — სმითი აკრიტიკებდა ამ მიდგომას', 'concept', 'shta'],
      [1, 'Laissez-faire', 'Laissez-faire', 'სამეურნეო თავისუფლების პრინციპი — სახელმწიფომ მინიმალურად უნდა ჩაერიოს ეკონომიკაში', 'სამეურნეო თავისუფლების პრინციპი — სახელმწიფომ მინიმალურად უნდა ჩაერიოს ეკონომიკაში', 'concept', 'shta'],
      [1, 'შრომის ღირებულების თეორია', 'შრომის ღირებულების თეორია', 'საქონლის ღირებულება განისაზღვრება მის წარმოებაზე დახარჯული შრომით', 'საქონლის ღირებულება განისაზღვრება მის წარმოებაზე დახარჯული შრომით', 'definition', 'shta'],
      [2, 'განმანათლებლობა', 'განმანათლებლობა', 'კანტის განმარტებით — ადამიანის გამოსვლა თვითგამოწვეული არასრულწლოვანებიდან, გონების თავისუფალი გამოყენება', 'კანტის განმარტებით — ადამიანის გამოსვლა თვითგამოწვეული არასრულწლოვანებიდან, გონების თავისუფალი გამოყენება', 'definition', 'shta'],
      [2, 'Sapere aude', 'Sapere aude', '"გაბედე ცოდნა!" — განმანათლებლობის დევიზი კანტის მიხედვით', '"გაბედე ცოდნა!" — განმანათლებლობის დევიზი კანტის მიხედვით', 'concept', 'shta'],
      [2, 'გონების საჯარო გამოყენება', 'გონების საჯარო გამოყენება', 'ადამიანის უფლება, საკუთარი აზრები საჯაროდ გამოხატოს — კანტის აზრით, ეს არასოდეს უნდა შეიზღუდოს', 'ადამიანის უფლება, საკუთარი აზრები საჯაროდ გამოხატოს — კანტის აზრით, ეს არასოდეს უნდა შეიზღუდოს', 'concept', 'shta'],
      [3, 'კლასთა ბრძოლა', 'კლასთა ბრძოლა', 'მარქსის თეორია — ისტორია არის ექსპლუატატორებისა და ექსპლუატირებულების ბრძოლის ისტორია', 'მარქსის თეორია — ისტორია არის ექსპლუატატორებისა და ექსპლუატირებულების ბრძოლის ისტორია', 'definition', 'shta'],
      [3, 'პროლეტარიატი', 'პროლეტარიატი', 'მუშათა კლასი, რომელიც საკუთარი შრომის ძალის გაყიდვით ცხოვრობს', 'მუშათა კლასი, რომელიც საკუთარი შრომის ძალის გაყიდვით ცხოვრობს', 'definition', 'shta'],
      [3, 'ბურჟუაზია', 'ბურჟუაზია', 'კაპიტალისტური კლასი, წარმოების საშუალებების მფლობელი', 'კაპიტალისტური კლასი, წარმოების საშუალებების მფლობელი', 'definition', 'shta'],
      [3, 'კომუნიზმი', 'კომუნიზმი', 'მარქსის იდეალი — უკლასო საზოგადოება, სადაც წარმოების საშუალებები საზოგადოებრივ საკუთრებაშია', 'მარქსის იდეალი — უკლასო საზოგადოება, სადაც წარმოების საშუალებები საზოგადოებრივ საკუთრებაშია', 'concept', 'shta'],
      [4, 'ბუნებრივი გადარჩევა', 'ბუნებრივი გადარჩევა', 'დარვინის მთავარი მექანიზმი — გარემოსთან უკეთ ადაპტირებული ორგანიზმები უფრო ხშირად გადარჩებიან', 'დარვინის მთავარი მექანიზმი — გარემოსთან უკეთ ადაპტირებული ორგანიზმები უფრო ხშირად გადარჩებიან', 'definition', 'shta'],
      [4, 'ევოლუცია', 'ევოლუცია', 'სახეობების თანდათანობითი ცვლილება თაობებს შორის მემკვიდრეობითი ვარიაციების მეშვეობით', 'სახეობების თანდათანობითი ცვლილება თაობებს შორის მემკვიდრეობითი ვარიაციების მეშვეობით', 'definition', 'shta'],
      [4, 'არსებობისთვის ბრძოლა', 'არსებობისთვის ბრძოლა', 'ორგანიზმებს შორის კონკურენცია შეზღუდული რესურსებისთვის — ევოლუციის მამოძრავებელი ძალა', 'ორგანიზმებს შორის კონკურენცია შეზღუდული რესურსებისთვის — ევოლუციის მამოძრავებელი ძალა', 'concept', 'shta'],
      [4, 'მენდელის კანონები', 'მენდელის კანონები', 'მემკვიდრეობის კანონები, რომლებიც დარვინის თეორიას გენეტიკურ საფუძველს უქმნის', 'მემკვიდრეობის კანონები, რომლებიც დარვინის თეორიას გენეტიკურ საფუძველს უქმნის', 'concept', 'shta'],
      [5, 'თავისუფლება', 'თავისუფლება', 'მილის მიხედვით — ინდივიდის უფლება, იმოქმედოს როგორც სურს, სანამ სხვებს არ აზიანებს', 'მილის მიხედვით — ინდივიდის უფლება, იმოქმედოს როგორც სურს, სანამ სხვებს არ აზიანებს', 'definition', 'shta'],
      [5, 'უტილიტარიზმი', 'უტილიტარიზმი', 'ფილოსოფიური მიმდინარეობა — მოქმედება მართებულია, თუ ის მაქსიმალურ ბედნიერებას მოაქვს მაქსიმალურ რაოდენობას', 'ფილოსოფიური მიმდინარეობა — მოქმედება მართებულია, თუ ის მაქსიმალურ ბედნიერებას მოაქვს მაქსიმალურ რაოდენობას', 'concept', 'shta'],
      [5, 'აზრის თავისუფლება', 'აზრის თავისუფლება', 'მილი ამტკიცებს, რომ ნებისმიერი აზრის ჩახშობა მავნეა საზოგადოებისთვის, თუნდაც ის მცდარი იყოს', 'მილი ამტკიცებს, რომ ნებისმიერი აზრის ჩახშობა მავნეა საზოგადოებისთვის, თუნდაც ის მცდარი იყოს', 'concept', 'shta'],
      [5, 'უმრავლესობის ტირანია', 'უმრავლესობის ტირანია', 'საფრთხე, რომ უმრავლესობა შეიძლება ჩაგრავდეს უმცირესობის აზრებსა და თავისუფლებებს', 'საფრთხე, რომ უმრავლესობა შეიძლება ჩაგრავდეს უმცირესობის აზრებსა და თავისუფლებებს', 'concept', 'shta'],
      [6, 'ლიბერალიზმი', 'ლიბერალიზმი', 'ილია ჭავჭავაძის პოლიტიკური ხედვის საფუძველი — პიროვნული თავისუფლების და განათლების მხარდაჭერა', 'ილია ჭავჭავაძის პოლიტიკური ხედვის საფუძველი — პიროვნული თავისუფლების და განათლების მხარდაჭერა', 'concept', 'shta'],
      [6, 'ეროვნული იდენტობა', 'ეროვნული იდენტობა', 'ჭავჭავაძის მთავარი თემა — ქართული კულტურისა და ენის შენარჩუნების აუცილებლობა', 'ჭავჭავაძის მთავარი თემა — ქართული კულტურისა და ენის შენარჩუნების აუცილებლობა', 'concept', 'shta'],
      [6, 'განათლება', 'განათლება', 'ილიას აზრით, ერის განვითარების უმთავრესი საშუალება და მომავლის გასაღები', 'ილიას აზრით, ერის განვითარების უმთავრესი საშუალება და მომავლის გასაღები', 'concept', 'shta'],
    ];
    await db.batch(
      shtaCards.map(c => ({ sql: 'INSERT INTO flashcards (chapter_id, front_en, front_ka, back_en, back_ka, category, book_id) VALUES (?,?,?,?,?,?,?)', args: c })),
      'write'
    );
  }

  return db;
}

module.exports = { initDatabase };
