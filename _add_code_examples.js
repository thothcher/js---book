const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/app/data/chapters.ts');
let content = fs.readFileSync(file, 'utf8');

const codeExamples = {
  1: [
    { title: 'Hello World', titleKa: 'გამარჯობა სამყარო', code: `console.log("Hello, World!");
// Output: Hello, World!

let name = "JavaScript";
console.log(typeof name); // "string"
console.log(typeof 42);   // "number"
console.log(typeof true);  // "boolean"`, output: 'Hello, World!\nstring\nnumber\nboolean' },
    { title: 'Variables & Types', titleKa: 'ცვლადები და ტიპები', code: `let age = 25;          // can be reassigned
const PI = 3.14159;    // cannot be reassigned
var oldStyle = "avoid"; // function-scoped (legacy)

console.log(age, PI, oldStyle);`, output: '25 3.14159 avoid' },
  ],
  2: [
    { title: 'If / Else', titleKa: 'If / Else პირობები', code: `let score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else {
  console.log("Keep trying!");
}`, output: 'Good job!' },
    { title: 'Switch Statement', titleKa: 'Switch ოპერატორი', code: `let day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("Regular day");
}`, output: 'Start of the week' },
    { title: 'Ternary Operator', titleKa: 'ტერნარული ოპერატორი', code: `let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status);`, output: 'adult' },
  ],
  3: [
    { title: 'Math Object', titleKa: 'Math ობიექტი', code: `console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.7));   // 4
console.log(Math.ceil(4.2));    // 5
console.log(Math.random());     // 0.xxx...
console.log(Math.max(1, 5, 3)); // 5`, output: '5\n4\n5\n0.xxx...\n5' },
    { title: 'String Methods', titleKa: 'სტრიქონის მეთოდები', code: `let text = "Hello, JavaScript!";

console.log(text.length);           // 18
console.log(text.toUpperCase());     // HELLO, JAVASCRIPT!
console.log(text.includes("Java")); // true
console.log(text.slice(7, 17));      // JavaScript
console.log(text.split(", "));       // ["Hello", "JavaScript!"]`, output: '18\nHELLO, JAVASCRIPT!\ntrue\nJavaScript\n["Hello", "JavaScript!"]' },
  ],
  4: [
    { title: 'For Loop', titleKa: 'For ციკლი', code: `for (let i = 1; i <= 5; i++) {
  console.log("Step " + i);
}`, output: 'Step 1\nStep 2\nStep 3\nStep 4\nStep 5' },
    { title: 'While & Do-While', titleKa: 'While და Do-While', code: `let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}
console.log("Go!");`, output: 'Countdown: 3\nCountdown: 2\nCountdown: 1\nGo!' },
    { title: 'For...of Loop', titleKa: 'For...of ციკლი', code: `let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}`, output: 'apple\nbanana\ncherry' },
  ],
  5: [
    { title: 'Array Methods', titleKa: 'მასივის მეთოდები', code: `let nums = [3, 1, 4, 1, 5, 9];

console.log(nums.length);       // 6
nums.push(2);                    // add to end
console.log(nums.pop());        // remove from end: 2
console.log(nums.includes(4));  // true
console.log(nums.indexOf(5));   // 4
console.log(nums.sort());       // [1, 1, 3, 4, 5, 9]`, output: '6\n2\ntrue\n4\n[1, 1, 3, 4, 5, 9]' },
    { title: 'Map, Filter, Reduce', titleKa: 'Map, Filter, Reduce', code: `let prices = [10, 25, 50, 100, 5];

let doubled = prices.map(p => p * 2);
console.log(doubled); // [20, 50, 100, 200, 10]

let expensive = prices.filter(p => p > 20);
console.log(expensive); // [25, 50, 100]

let total = prices.reduce((sum, p) => sum + p, 0);
console.log(total);  // 190`, output: '[20, 50, 100, 200, 10]\n[25, 50, 100]\n190' },
  ],
  6: [
    { title: 'Function Declaration', titleKa: 'ფუნქციის გამოცხადება', code: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("STEP"));

// Arrow function
const add = (a, b) => a + b;
console.log(add(3, 7));`, output: 'Hello, STEP!\n10' },
    { title: 'Default Parameters & Rest', titleKa: 'ნაგულისხმევი პარამეტრები', code: `function createUser(name, role = "student") {
  return { name, role };
}

console.log(createUser("Ana"));
console.log(createUser("Luka", "admin"));

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`, output: '{ name: "Ana", role: "student" }\n{ name: "Luka", role: "admin" }\n10' },
  ],
  7: [
    { title: 'Object Basics', titleKa: 'ობიექტის საფუძვლები', code: `let student = {
  name: "Nino",
  age: 20,
  courses: ["JS", "HTML", "CSS"],
  greet() {
    return "Hi, I'm " + this.name;
  }
};

console.log(student.name);      // Nino
console.log(student.greet());   // Hi, I'm Nino
console.log(student.courses[0]); // JS`, output: 'Nino\nHi, I\'m Nino\nJS' },
    { title: 'Destructuring', titleKa: 'დესტრუქტურიზაცია', code: `let { name, age } = { name: "Luka", age: 22 };
console.log(name, age); // Luka 22

let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]

// Spread operator
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }`, output: 'Luka 22\n1\n[3, 4, 5]\n{ a: 1, b: 2, c: 3 }' },
  ],
  8: [
    { title: 'DOM Selection', titleKa: 'DOM ელემენტის არჩევა', code: `// Select elements
let title = document.querySelector("h1");
let buttons = document.querySelectorAll(".btn");
let main = document.getElementById("app");

// Change content
title.textContent = "Hello DOM!";
title.style.color = "blue";

// Add class
title.classList.add("active");
title.classList.toggle("hidden");`, output: '// Modifies the page directly' },
    { title: 'Create & Append Elements', titleKa: 'ელემენტის შექმნა', code: `let list = document.querySelector("ul");

let item = document.createElement("li");
item.textContent = "New item";
item.className = "list-item";

list.appendChild(item);

// Remove an element
// item.remove();`, output: '// Adds <li> to the <ul>' },
  ],
  9: [
    { title: 'Event Listeners', titleKa: 'ივენთ ლისენერები', code: `let btn = document.querySelector("#myBtn");

btn.addEventListener("click", function(event) {
  console.log("Button clicked!");
  console.log("Target:", event.target.tagName);
});

// With arrow function
btn.addEventListener("mouseover", () => {
  btn.style.background = "lightblue";
});`, output: '// Button clicked!\n// Target: BUTTON' },
    { title: 'Event Delegation', titleKa: 'ივენთის დელეგაცია', code: `// Instead of adding listener to each <li>,
// add one to the parent <ul>
let list = document.querySelector("ul");

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
    console.log("Toggled:", e.target.textContent);
  }
});`, output: '// Toggled: item text' },
  ],
  10: [
    { title: 'Template Literals', titleKa: 'შაბლონური ლიტერალები', code: `let name = "STEP";
let year = 2025;

// Template literal with backticks
let msg = \`Welcome to \${name} Academy!
Year: \${year}
Sum: \${2 + 3}\`;

console.log(msg);

// Tagged template (advanced)
let items = ["JS", "HTML", "CSS"];
console.log(\`Courses: \${items.join(", ")}\`);`, output: 'Welcome to STEP Academy!\nYear: 2025\nSum: 5\nCourses: JS, HTML, CSS' },
    { title: 'Symbol & Iterators', titleKa: 'Symbol და იტერატორები', code: `let id = Symbol("id");
let user = { [id]: 1, name: "Ana" };

console.log(user[id]);  // 1
console.log(user.name); // Ana

// Symbols are unique
console.log(Symbol("x") === Symbol("x")); // false`, output: '1\nAna\nfalse' },
  ],
  11: [
    { title: 'Error Handling', titleKa: 'შეცდომების დამუშავება', code: `try {
  let result = JSON.parse("invalid json");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Always runs");
}

// Custom error
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.log(e.message);
}`, output: 'Error: Unexpected token i in JSON\nAlways runs\nCannot divide by zero' },
  ],
  12: [
    { title: 'Callbacks & setTimeout', titleKa: 'Callback ფუნქციები', code: `console.log("Start");

setTimeout(() => {
  console.log("After 1 second");
}, 1000);

console.log("End");

// Output order: Start, End, After 1 second
// (because setTimeout is asynchronous)`, output: 'Start\nEnd\nAfter 1 second' },
    { title: 'Promises', titleKa: 'Promise (დაპირებები)', code: `function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve({ id: 1, name: "Data" });
      else reject(new Error("Failed to fetch"));
    }, 500);
  });
}

fetchData(true)
  .then(data => console.log("Got:", data))
  .catch(err => console.log("Error:", err.message));`, output: 'Got: { id: 1, name: "Data" }' },
    { title: 'Async / Await', titleKa: 'Async / Await', code: `async function loadUser() {
  try {
    let response = await fetch("/api/user");
    let user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}

// Cleaner than .then() chains!
loadUser();`, output: '// { id: 1, name: "..." }' },
  ],
  13: [
    { title: 'localStorage', titleKa: 'ლოკალური საცავი', code: `// Save data
localStorage.setItem("theme", "dark");
localStorage.setItem("user", JSON.stringify({ name: "Ana" }));

// Read data
let theme = localStorage.getItem("theme");
console.log(theme); // "dark"

let user = JSON.parse(localStorage.getItem("user"));
console.log(user.name); // "Ana"

// Remove
localStorage.removeItem("theme");`, output: 'dark\nAna' },
    { title: 'sessionStorage & Cookies', titleKa: 'sessionStorage და Cookies', code: `// sessionStorage - cleared when tab closes
sessionStorage.setItem("tab_id", "abc123");

// Check storage
console.log(sessionStorage.getItem("tab_id"));

// Cookie (basic)
document.cookie = "lang=ka; max-age=86400";
console.log(document.cookie);`, output: 'abc123\nlang=ka' },
  ],
  14: [
    { title: 'Fetch API', titleKa: 'Fetch API', code: `// GET request
async function getUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();
  console.log(users.length + " users loaded");
  console.log(users[0].name);
}

getUsers();

// POST request
async function createPost() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello", body: "World" })
  });
  let data = await res.json();
  console.log("Created post #" + data.id);
}`, output: '10 users loaded\nLeanne Graham' },
  ],
  15: [
    { title: 'ES6 Classes', titleKa: 'ES6 კლასები', code: `class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.name} says \${this.sound}!\`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
  }

  fetch(item) {
    return \`\${this.name} fetches the \${item}\`;
  }
}

let dog = new Dog("Rex");
console.log(dog.speak());
console.log(dog.fetch("ball"));`, output: 'Rex says Woof!\nRex fetches the ball' },
  ],
  16: [
    { title: 'ES6 Modules', titleKa: 'ES6 მოდულები', code: `// math.js - Named exports
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export const PI = 3.14159;

// app.js - Import
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
console.log(PI);              // 3.14159

// Default export
// export default class Calculator { ... }
// import Calculator from './Calculator.js';`, output: '8\n6\n3.14159' },
  ],
  17: [
    { title: 'Regular Expressions', titleKa: 'რეგულარული გამოსახულებები', code: `let email = "user@step.ge";
let emailPattern = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i;
console.log(emailPattern.test(email)); // true

let text = "Call 555-1234 or 555-5678";
let phones = text.match(/\\d{3}-\\d{4}/g);
console.log(phones); // ["555-1234", "555-5678"]

let cleaned = "  Hello   World  ".replace(/\\s+/g, " ").trim();
console.log(cleaned); // "Hello World"`, output: 'true\n["555-1234", "555-5678"]\nHello World' },
  ],
  18: [
    { title: 'Map & Set', titleKa: 'Map და Set', code: `// Map - key-value pairs (any type as key)
let scores = new Map();
scores.set("Ana", 95);
scores.set("Luka", 88);
console.log(scores.get("Ana"));  // 95
console.log(scores.size);        // 2

// Set - unique values only
let tags = new Set(["js", "html", "js", "css"]);
console.log(tags.size);     // 3 (no duplicate "js")
console.log(tags.has("js")); // true
tags.add("react");
console.log([...tags]); // ["js", "html", "css", "react"]`, output: '95\n2\n3\ntrue\n["js", "html", "css", "react"]' },
  ],
  19: [
    { title: 'Closures', titleKa: 'ჩახურვები (Closures)', code: `function createCounter() {
  let count = 0; // private variable

  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; }
  };
}

let counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1`, output: '1\n2\n1\n1' },
    { title: 'Higher-Order Functions', titleKa: 'მაღალი რიგის ფუნქციები', code: `// Function that returns a function
function multiplier(factor) {
  return (number) => number * factor;
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Function that takes a function
function applyTo(arr, fn) {
  return arr.map(fn);
}
console.log(applyTo([1, 2, 3], double)); // [2, 4, 6]`, output: '10\n15\n[2, 4, 6]' },
  ],
  20: [
    { title: 'Web Performance', titleKa: 'ვებ წარმადობა', code: `// Debounce - wait before executing
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

let search = debounce((query) => {
  console.log("Searching:", query);
}, 300);

// Only the last call fires after 300ms pause
search("J");
search("Ja");
search("JavaScript");`, output: 'Searching: JavaScript' },
    { title: 'Lazy Loading', titleKa: 'Lazy Loading', code: `// Intersection Observer for lazy loading
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
      console.log("Loaded:", img.alt);
    }
  });
});

// Observe all lazy images
document.querySelectorAll("img[data-src]")
  .forEach(img => observer.observe(img));`, output: '// Loaded: image alt text' },
  ],
  21: [
    { title: 'Testing with Jest', titleKa: 'ტესტირება Jest-ით', code: `// sum.js
function sum(a, b) {
  return a + b;
}

// sum.test.js
describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("returns number type", () => {
    expect(typeof sum(1, 2)).toBe("number");
  });
});`, output: 'PASS  sum.test.js\n  sum\n    ✓ adds 1 + 2 to equal 3\n    ✓ adds negative numbers\n    ✓ returns number type' },
  ],
};

// Read and modify chapters.ts
const lines = content.split('\n');
let result = [];
let chapterId = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Track which chapter we're in
  const idMatch = line.match(/^\s+id:\s*(\d+)/);
  if (idMatch) {
    chapterId = parseInt(idMatch[1]);
  }

  // Find keyFigures lines and append codeExamples after
  if (line.match(/^\s+keyFigures:/) && chapterId && codeExamples[chapterId]) {
    result.push(line);
    // Check if keyFigures spans to next line
    if (!line.includes(']')) {
      // multi-line keyFigures - skip until closing bracket
      while (i + 1 < lines.length && !lines[i + 1].includes(']')) {
        i++;
        result.push(lines[i]);
      }
      if (i + 1 < lines.length) {
        i++;
        result.push(lines[i]); // the closing ] line
      }
    }

    // Now add codeExamples
    const examples = codeExamples[chapterId];
    let exStr = '    codeExamples: [\n';
    examples.forEach((ex, idx) => {
      exStr += '      { ';
      exStr += `title: ${JSON.stringify(ex.title)}`;
      if (ex.titleKa) exStr += `, titleKa: ${JSON.stringify(ex.titleKa)}`;
      exStr += `, code: ${JSON.stringify(ex.code)}`;
      if (ex.output) exStr += `, output: ${JSON.stringify(ex.output)}`;
      exStr += ' }';
      if (idx < examples.length - 1) exStr += ',';
      exStr += '\n';
    });
    exStr += '    ]';

    // Add comma to the keyFigures line if needed
    const lastLine = result[result.length - 1];
    if (!lastLine.trimEnd().endsWith(',')) {
      result[result.length - 1] = lastLine.replace(/(\s*)$/, ',$1');
    }

    result.push(exStr);
  } else {
    result.push(line);
  }
}

fs.writeFileSync(file, result.join('\n'), 'utf8');
console.log('Added code examples to all 21 chapters');
