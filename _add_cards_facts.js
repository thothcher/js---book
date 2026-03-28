const fs = require('fs');

// ============ ADD MEMORY CARDS ============
let cardsContent = fs.readFileSync('src/app/data/memory-cards.ts', 'utf8');

const newCards = [
  { id: 101, term: 'for...of', definition: 'Loop that iterates over values of iterable objects', termKa: 'for...of', definitionKa: 'ციკლი, რომელიც იტერირებადი ობიექტების მნიშვნელობებზე გადის', category: 'ციკლები' },
  { id: 102, term: 'Nested Loop', definition: 'A loop inside another loop', termKa: 'ჩადგმული ციკლი', definitionKa: 'ციკლი სხვა ციკლის შიგნით', category: 'ციკლები' },
  { id: 103, term: 'Infinite Loop', definition: 'A loop whose condition never becomes false', termKa: 'უსასრულო ციკლი', definitionKa: 'ციკლი, რომლის პირობა არასოდეს ხდება false', category: 'ციკლები' },
  { id: 104, term: 'Loop Counter', definition: 'Variable that tracks loop iterations (e.g., let i = 0)', termKa: 'ციკლის მრიცხველი', definitionKa: 'ცვლადი, რომელიც ციკლის იტერაციებს ითვლის (მაგ., let i = 0)', category: 'ციკლები' },
  { id: 105, term: 'includes()', definition: 'Checks if array or string contains a specified value', termKa: 'includes()', definitionKa: 'ამოწმებს მასივი ან სტრინგი შეიცავს თუ არა მითითებულ მნიშვნელობას', category: 'მასივები' },
  { id: 106, term: 'flat()', definition: 'Creates a new array with sub-arrays flattened by one level', termKa: 'flat()', definitionKa: 'ახალ მასივს ქმნის ქვემასივების ერთი დონით გასწორებით', category: 'მასივები' },
  { id: 107, term: 'flatMap()', definition: 'Maps each element then flattens the result by one level', termKa: 'flatMap()', definitionKa: 'ყოველ ელემენტს ამუშავებს შემდეგ შედეგს ერთი დონით ასწორებს', category: 'მასივები' },
  { id: 108, term: 'Array.isArray()', definition: 'Returns true if the value is an array', termKa: 'Array.isArray()', definitionKa: 'true-ს აბრუნებს თუ მნიშვნელობა მასივია', category: 'მასივები' },
  { id: 109, term: 'concat()', definition: 'Merges two or more arrays into a new array', termKa: 'concat()', definitionKa: 'ორ ან მეტ მასივს ახალ მასივში აერთიანებს', category: 'მასივები' },
  { id: 110, term: 'every()', definition: 'Tests whether all elements pass a condition', termKa: 'every()', definitionKa: 'ამოწმებს ყველა ელემენტი გაივლის თუ არა პირობას', category: 'მასივები' },
  { id: 111, term: 'some()', definition: 'Tests whether at least one element passes a condition', termKa: 'some()', definitionKa: 'ამოწმებს ერთი ელემენტი მაინც გაივლის თუ არა პირობას', category: 'მასივები' },
  { id: 112, term: 'findIndex()', definition: 'Returns the index of the first element passing a test', termKa: 'findIndex()', definitionKa: 'პირველი ელემენტის ინდექსს აბრუნებს, რომელიც ტესტს გაივლის', category: 'მასივები' },
  { id: 113, term: 'Default Parameter', definition: 'Function parameter with a preset fallback value', termKa: 'ნაგულისხმევი პარამეტრი', definitionKa: 'ფუნქციის პარამეტრი წინასწარ მითითებული სათადარიგო მნიშვნელობით', category: 'ფუნქციები' },
  { id: 114, term: 'Rest Parameter (...args)', definition: 'Collects remaining arguments into an array', termKa: 'Rest პარამეტრი (...args)', definitionKa: 'დარჩენილ არგუმენტებს მასივში აგროვებს', category: 'ფუნქციები' },
  { id: 115, term: 'IIFE', definition: 'Immediately Invoked Function Expression — runs as soon as defined', termKa: 'IIFE', definitionKa: 'დაუყოვნებლივ გამოძახებადი ფუნქციის გამოსახულება — განსაზღრვისთანავე სრულდება', category: 'ფუნქციები' },
  { id: 116, term: 'Recursion', definition: 'A function that calls itself to solve smaller subproblems', termKa: 'რეკურსია', definitionKa: 'ფუნქცია, რომელიც საკუთარ თავს იძახებს მცირე ქვეპრობლემების გადასაჭრელად', category: 'ფუნქციები' },
  { id: 117, term: 'Pure Function', definition: 'Function that always returns the same result for same inputs, no side effects', termKa: 'სუფთა ფუნქცია', definitionKa: 'ფუნქცია, რომელიც ერთი და იგივე შეყვანისთვის ყოველთვის ერთსა და იმავეს აბრუნებს, გვერდითი ეფექტების გარეშე', category: 'ფუნქციები' },
  { id: 118, term: 'Higher-Order Function', definition: 'Function that takes or returns another function', termKa: 'მაღალი რიგის ფუნქცია', definitionKa: 'ფუნქცია, რომელიც სხვა ფუნქციას იღებს ან აბრუნებს', category: 'ფუნქციები' },
  { id: 119, term: 'Object.keys()', definition: 'Returns an array of an object\'s property names', termKa: 'Object.keys()', definitionKa: 'ობიექტის თვისებების სახელების მასივს აბრუნებს', category: 'ობიექტები' },
  { id: 120, term: 'Object.values()', definition: 'Returns an array of an object\'s property values', termKa: 'Object.values()', definitionKa: 'ობიექტის თვისებების მნიშვნელობების მასივს აბრუნებს', category: 'ობიექტები' },
  { id: 121, term: 'Object.entries()', definition: 'Returns an array of [key, value] pairs', termKa: 'Object.entries()', definitionKa: '[გასაღებ, მნიშვნელობა] წყვილების მასივს აბრუნებს', category: 'ობიექტები' },
  { id: 122, term: 'Object.freeze()', definition: 'Prevents modification of an object\'s properties', termKa: 'Object.freeze()', definitionKa: 'ობიექტის თვისებების შეცვლას კრძალავს', category: 'ობიექტები' },
  { id: 123, term: 'Object.assign()', definition: 'Copies properties from source objects to a target object', termKa: 'Object.assign()', definitionKa: 'წყაროს ობიექტებიდან სამიზნე ობიექტზე თვისებებს კოპირებს', category: 'ობიექტები' },
  { id: 124, term: 'Optional Chaining (?.)', definition: 'Safely accesses nested properties without errors', termKa: 'Optional Chaining (?.)', definitionKa: 'ჩადგმულ თვისებებზე უსაფრთხოდ წვდომა შეცდომის გარეშე', category: 'ობიექტები' },
  { id: 125, term: 'Nullish Coalescing (??)', definition: 'Returns right operand when left is null or undefined', termKa: 'Nullish Coalescing (??)', definitionKa: 'მარჯვენა ოპერანდს აბრუნებს როცა მარცხენა null ან undefined არის', category: 'ობიექტები' },
  { id: 126, term: 'querySelectorAll()', definition: 'Returns a NodeList of all elements matching a CSS selector', termKa: 'querySelectorAll()', definitionKa: 'CSS სელექტორთან თანხვედრი ყველა ელემენტის NodeList-ს აბრუნებს', category: 'DOM' },
  { id: 127, term: 'removeChild()', definition: 'Removes a child element from the DOM', termKa: 'removeChild()', definitionKa: 'შვილი ელემენტს DOM-იდან შლის', category: 'DOM' },
  { id: 128, term: 'Event Delegation', definition: 'Using a parent listener to handle events on child elements', termKa: 'ივენთ დელეგაცია', definitionKa: 'მშობელი მსმენელის გამოყენება შვილი ელემენტების ივენთების დასამუშავებლად', category: 'DOM' },
  { id: 129, term: 'event.preventDefault()', definition: 'Prevents the default browser action for an event', termKa: 'event.preventDefault()', definitionKa: 'ივენთისთვის ბრაუზერის ნაგულისხმევ მოქმედებას კრძალავს', category: 'DOM' },
  { id: 130, term: 'event.stopPropagation()', definition: 'Stops the event from bubbling up the DOM tree', termKa: 'event.stopPropagation()', definitionKa: 'ივენთის DOM ხეში ზემოთ ბაბლინგს აჩერებს', category: 'DOM' },
  { id: 131, term: 'dataset', definition: 'Property to access custom data-* attributes', termKa: 'dataset', definitionKa: 'თვისება custom data-* ატრიბუტებზე წვდომისთვის', category: 'DOM' },
  { id: 132, term: 'requestAnimationFrame()', definition: 'Schedules a function to run before the next repaint', termKa: 'requestAnimationFrame()', definitionKa: 'ფუნქციას შემდეგ ხელახალ ხატვამდე დაგეგმავს', category: 'DOM' },
  { id: 133, term: 'Promise.all()', definition: 'Resolves when all promises complete, rejects if any fails', termKa: 'Promise.all()', definitionKa: 'გადაიწყვეტება ყველა promise-ის დასრულებისას, უარყოფს თუ რომელიმე ჩავარდება', category: 'API' },
  { id: 134, term: 'Promise.race()', definition: 'Resolves or rejects with the first settled promise', termKa: 'Promise.race()', definitionKa: 'გადაიწყვეტება ან უარყოფს პირველ დასრულებულ promise-ით', category: 'API' },
  { id: 135, term: 'Promise.allSettled()', definition: 'Waits for all promises to settle (resolve or reject)', termKa: 'Promise.allSettled()', definitionKa: 'ელოდება ყველა promise-ის დასრულებას (გადაწყვეტა ან უარყოფა)', category: 'API' },
  { id: 136, term: 'AbortController', definition: 'Object used to cancel fetch requests', termKa: 'AbortController', definitionKa: 'ობიექტი fetch მოთხოვნების გასაუქმებლად', category: 'API' },
  { id: 137, term: 'response.json()', definition: 'Parses the response body as JSON', termKa: 'response.json()', definitionKa: 'პასუხის სხეულს JSON-ად აანალიზებს', category: 'API' },
  { id: 138, term: 'HTTP Status Codes', definition: '200=OK, 201=Created, 400=BadRequest, 404=NotFound, 500=ServerError', termKa: 'HTTP სტატუს კოდები', definitionKa: '200=OK, 201=შექმნილი, 400=ცუდი მოთხოვნა, 404=ვერ მოიძებნა, 500=სერვერის შეცდომა', category: 'API' },
  { id: 139, term: 'removeItem()', definition: 'Removes a specific key-value pair from web storage', termKa: 'removeItem()', definitionKa: 'კონკრეტულ გასაღებ-მნიშვნელობის წყვილს ვებ storage-დან შლის', category: 'Storage' },
  { id: 140, term: 'clear()', definition: 'Removes all data from web storage', termKa: 'clear()', definitionKa: 'ვებ storage-დან ყველა მონაცემს შლის', category: 'Storage' },
  { id: 141, term: 'JSON.parse()', definition: 'Parses a JSON string to a JavaScript value', termKa: 'JSON.parse()', definitionKa: 'JSON სტრინგს JavaScript-ის მნიშვნელობად აანალიზებს', category: 'Storage' },
  { id: 142, term: 'static', definition: 'Class method that belongs to the class itself, not instances', termKa: 'static', definitionKa: 'კლასის მეთოდი, რომელიც თავად კლასს ეკუთვნის, არა ინსტანციებს', category: 'OOP' },
  { id: 143, term: 'getter (get)', definition: 'Method accessed as a property without parentheses', termKa: 'getter (get)', definitionKa: 'მეთოდი, რომელსაც თვისების მსგავსად ფრჩხილების გარეშე წვდები', category: 'OOP' },
  { id: 144, term: 'setter (set)', definition: 'Method triggered when assigning a value to a property', termKa: 'setter (set)', definitionKa: 'მეთოდი, რომელიც თვისებისთვის მნიშვნელობის მინიჭებისას ირთვება', category: 'OOP' },
  { id: 145, term: 'instanceof', definition: 'Operator that checks if an object is an instance of a class', termKa: 'instanceof', definitionKa: 'ოპერატორი, რომელიც ამოწმებს ობიექტი კლასის ინსტანციაა თუ არა', category: 'OOP' },
  { id: 146, term: 'Method Overriding', definition: 'Child class redefines a method inherited from the parent', termKa: 'მეთოდის გადაფარვა', definitionKa: 'შვილი კლასი მშობლისგან მემკვიდრეობით მიღებულ მეთოდს ხელახლა განსაზღვრავს', category: 'OOP' },
  { id: 147, term: 'Factory Pattern', definition: 'Function that creates and returns objects', termKa: 'Factory შაბლონი', definitionKa: 'ფუნქცია, რომელიც ობიექტებს ქმნის და აბრუნებს', category: 'OOP' },
  { id: 148, term: 'Method Chaining', definition: 'Calling multiple methods in sequence by returning this', termKa: 'მეთოდების ჯაჭვი', definitionKa: 'მრავალი მეთოდის თანმიმდევრულად გამოძახება this-ის დაბრუნებით', category: 'OOP' },
  { id: 149, term: 'Composition', definition: 'Building complex objects by combining simpler ones', termKa: 'კომპოზიცია', definitionKa: 'რთული ობიექტების აგება მარტივების კომბინირებით', category: 'OOP' },
  { id: 150, term: 'Abstraction', definition: 'Hiding complexity and showing only necessary details', termKa: 'აბსტრაქცია', definitionKa: 'სირთულის დამალვა და მხოლოდ საჭირო დეტალების ჩვენება', category: 'OOP' }
];

// Find the closing bracket of the last card and closing bracket of the array
const lastCardStr = "category: 'ობიექტები' }";
const lastIdx = cardsContent.lastIndexOf(lastCardStr);
const insertPos = lastIdx + lastCardStr.length;

let cardsStr = '';
for (const c of newCards) {
  cardsStr += `,\n  { id: ${c.id}, term: ${JSON.stringify(c.term)}, definition: ${JSON.stringify(c.definition)}, termKa: ${JSON.stringify(c.termKa)}, definitionKa: ${JSON.stringify(c.definitionKa)}, category: ${JSON.stringify(c.category)} }`;
}

cardsContent = cardsContent.slice(0, insertPos) + cardsStr + cardsContent.slice(insertPos);
fs.writeFileSync('src/app/data/memory-cards.ts', cardsContent, 'utf8');
console.log(`Added ${newCards.length} memory cards (total 150)`);

// ============ ADD FACTS ============
let factsContent = fs.readFileSync('src/app/data/facts-data.ts', 'utf8');

const newFacts = [
  { id: 51, text: 'The ES6 (ES2015) specification is the biggest update in JavaScript history, introducing classes, arrow functions, Promises, modules, and more.', textKa: 'ES6 (ES2015) სპეციფიკაცია JavaScript-ის ისტორიაში ყველაზე დიდი განახლებაა — შემოვიდა კლასები, arrow ფუნქციები, Promise-ები, მოდულები და სხვა.', source: 'ECMA', category: 'ისტორია', icon: 'mdi:star-four-points-outline' },
  { id: 52, text: 'An empty array [] is truthy in JavaScript, even though it looks like "nothing".', textKa: 'ცარიელი მასივი [] JavaScript-ში truthy-ა, მიუხედავად იმისა, რომ "არაფერს" ჰგავს.', source: 'Language', category: 'ენა', icon: 'mdi:check-circle-outline' },
  { id: 53, text: 'You can swap two variables without a temp variable: [a, b] = [b, a].', textKa: 'ორი ცვლადის გადანაცვლება დროებითი ცვლადის გარეშე შეიძლება: [a, b] = [b, a].', source: 'Language', category: 'ენა', icon: 'mdi:swap-horizontal-bold' },
  { id: 54, text: 'The void operator evaluates an expression and returns undefined.', textKa: 'void ოპერატორი გამოსახულებას ამოწმებს და undefined-ს აბრუნებს.', source: 'Language', category: 'ენა', icon: 'mdi:close-circle-outline' },
  { id: 55, text: 'Deno, created by Node.js founder Ryan Dahl in 2020, is a secure runtime for JavaScript and TypeScript.', textKa: 'Deno, შექმნილი Node.js-ის ფუძემდებლის რაიან დალის მიერ 2020 წელს, JavaScript-ისა და TypeScript-ის უსაფრთხო გაშვების გარემოა.', source: 'History', category: 'ისტორია', icon: 'mdi:shield-outline' },
  { id: 56, text: 'JavaScript strings are immutable — methods like toUpperCase() return new strings.', textKa: 'JavaScript-ის სტრინგები უცვლელია — toUpperCase()-ს მსგავსი მეთოდები ახალ სტრინგებს აბრუნებენ.', source: 'Language', category: 'ენა', icon: 'mdi:lock-check-outline' },
  { id: 57, text: 'The Array.from() method creates an array from array-like or iterable objects.', textKa: 'Array.from() მეთოდი მასივის მსგავსი ან იტერირებადი ობიექტებიდან მასივს ქმნის.', source: 'Language', category: 'ენა', icon: 'mdi:format-list-bulleted' },
  { id: 58, text: 'console.time() and console.timeEnd() can measure how long code takes to execute.', textKa: 'console.time() და console.timeEnd() კოდის შესრულების ხანგრძლივობის გაზომვა შეუძლია.', source: 'DevTools', category: 'ბრაუზერი', icon: 'mdi:timer-outline' },
  { id: 59, text: 'The MutationObserver API can watch for changes to the DOM and react to them.', textKa: 'MutationObserver API-ს შეუძლია DOM-ში ცვლილებების დაკვირვება და მათზე რეაგირება.', source: 'Web APIs', category: 'ბრაუზერი', icon: 'mdi:eye-outline' },
  { id: 60, text: 'ES2023 introduced Array.prototype.toSorted(), toReversed(), and toSpliced() — non-mutating versions.', textKa: 'ES2023-ში შემოვიდა Array.prototype.toSorted(), toReversed() და toSpliced() — არამუტაციური ვერსიები.', source: 'ECMA', category: 'ენა', icon: 'mdi:new-box' },
  { id: 61, text: 'JavaScript WeakMap and WeakSet hold weak references that do not prevent garbage collection.', textKa: 'JavaScript-ის WeakMap და WeakSet სუსთ მითითებებს ინახავენ, რომლებიც ნაგვის შეგროვებას არ აფერხებენ.', source: 'Language', category: 'ენა', icon: 'mdi:recycle' },
  { id: 62, text: 'The Intersection Observer API detects when elements enter or leave the viewport.', textKa: 'Intersection Observer API ადგენს ელემენტები ხილულ არეში შემოდიან თუ გამოდიან.', source: 'Web APIs', category: 'ბრაუზერი', icon: 'mdi:crop-free' },
  { id: 63, text: 'JavaScript Proxy objects let you intercept and customize operations on objects.', textKa: 'JavaScript-ის Proxy ობიექტები ობიექტებზე ოპერაციების ჩარევისა და მორგების საშუალებას იძლევა.', source: 'Language', category: 'ენა', icon: 'mdi:shield-half-full' },
  { id: 64, text: 'Symbols, added in ES6, are unique and immutable primitive values often used as object property keys.', textKa: 'Symbol-ები, ES6-ში დამატებული, უნიკალური და უცვლელი პრიმიტიული მნიშვნელობებია, ხშირად ობიექტის თვისების გასაღებებად გამოიყენება.', source: 'Language', category: 'ენა', icon: 'mdi:key-variant' },
  { id: 65, text: 'Electron.js allows building desktop applications using JavaScript, HTML, and CSS.', textKa: 'Electron.js JavaScript-ის, HTML-ისა და CSS-ის გამოყენებით დესკტოპ აპლიკაციების შექმნის საშუალებას იძლევა.', source: 'Ecosystem', category: 'ეკოსისტემა', icon: 'mdi:monitor' },
  { id: 66, text: 'React, Angular, and Vue are the three most popular JavaScript frameworks/libraries.', textKa: 'React, Angular და Vue JavaScript-ის სამი ყველაზე პოპულარული ფრეიმვორკი/ბიბლიოთეკაა.', source: 'Ecosystem', category: 'ეკოსისტემა', icon: 'mdi:apps' },
  { id: 67, text: 'The queueMicrotask() function adds a microtask that runs before the next event loop tick.', textKa: 'queueMicrotask() ფუნქცია მიკროტასკს ამატებს, რომელიც ივენთ ლუპის შემდეგ ტიკამდე სრულდება.', source: 'Runtime', category: 'წარმადობა', icon: 'mdi:lightning-bolt' },
  { id: 68, text: 'JavaScript can run on servers (Node.js), mobile (React Native), IoT devices, and even robots.', textKa: 'JavaScript სერვერებზე (Node.js), მობილურზე (React Native), IoT მოწყობილობებზე და რობოტებზეც კი მუშაობს.', source: 'Ecosystem', category: 'ეკოსისტემა', icon: 'mdi:devices' },
  { id: 69, text: 'The structuredClone() function creates a deep copy of objects, including nested ones.', textKa: 'structuredClone() ფუნქცია ობიექტების ღრმა ასლს ქმნის, ჩადგმულების ჩათვლით.', source: 'Language', category: 'ენა', icon: 'mdi:content-copy' },
  { id: 70, text: 'JavaScript Temporal API (Stage 3) will replace the confusing Date object with a modern date/time system.', textKa: 'JavaScript Temporal API (Stage 3) დამაბნეველ Date ობიექტს თანამედროვე თარიღის/დროის სისტემით ჩაანაცვლებს.', source: 'ECMA', category: 'ენა', icon: 'mdi:calendar-today' },
  { id: 71, text: 'The Web Audio API lets you create, manipulate, and play audio directly in the browser.', textKa: 'Web Audio API ბრაუზერში პირდაპირ აუდიოს შექმნის, მანიპულირებისა და დაკვრის საშუალებას იძლევა.', source: 'Web APIs', category: 'ბრაუზერი', icon: 'mdi:music-note' },
  { id: 72, text: 'Tagged template literals let you process template literal strings with a custom function.', textKa: 'Tagged template literals-ით შეგიძლიათ template literal სტრინგების custom ფუნქციით დამუშავება.', source: 'Language', category: 'ენა', icon: 'mdi:tag-outline' },
  { id: 73, text: 'Error types in JavaScript include TypeError, ReferenceError, SyntaxError, and RangeError.', textKa: 'JavaScript-ში შეცდომის ტიპებია: TypeError, ReferenceError, SyntaxError და RangeError.', source: 'Language', category: 'ენა', icon: 'mdi:alert-circle-outline' },
  { id: 74, text: 'The Clipboard API allows reading and writing to the system clipboard programmatically.', textKa: 'Clipboard API სისტემის ბუფერში პროგრამულად წაკითხვისა და ჩაწერის საშუალებას იძლევა.', source: 'Web APIs', category: 'ბრაუზერი', icon: 'mdi:clipboard-text-outline' },
  { id: 75, text: 'Bun is a fast JavaScript runtime created in 2022, written in Zig for performance.', textKa: 'Bun სწრაფი JavaScript გაშვების გარემოა, შექმნილი 2022 წელს, წარმადობისთვის Zig-ზე დაწერილი.', source: 'Ecosystem', category: 'ეკოსისტემა', icon: 'mdi:rocket-launch-outline' },
  { id: 76, text: 'The delete operator removes a property from an object but does not affect local variables.', textKa: 'delete ოპერატორი ობიექტიდან თვისებას შლის, მაგრამ ლოკალურ ცვლადებზე გავლენას არ ახდენს.', source: 'Language', category: 'ენა', icon: 'mdi:delete-outline' },
  { id: 77, text: 'Performance.now() provides sub-millisecond timestamps for precise performance measurements.', textKa: 'Performance.now() სუბ-მილიწამიან ტაიმსტემპებს იძლევა ზუსტი წარმადობის გაზომვისთვის.', source: 'DevTools', category: 'წარმადობა', icon: 'mdi:chart-timeline-variant' },
  { id: 78, text: 'The Web Workers API allows running JavaScript in background threads without blocking the UI.', textKa: 'Web Workers API ფონურ ნაკადებში JavaScript-ის გაშვების საშუალებას იძლევა UI-ის დაბლოკვის გარეშე.', source: 'Web APIs', category: 'წარმადობა', icon: 'mdi:cog-outline' },
  { id: 79, text: 'CSS-in-JS libraries like styled-components use tagged template literals to style React components.', textKa: 'CSS-in-JS ბიბლიოთეკები, როგორიცაა styled-components, tagged template literals-ს იყენებენ React კომპონენტების სტილისთვის.', source: 'Ecosystem', category: 'ეკოსისტემა', icon: 'mdi:palette-outline' },
  { id: 80, text: 'The globalThis object provides a standard way to access the global object across environments.', textKa: 'globalThis ობიექტი გლობალური ობიექტის სტანდარტულ წვდომას უზრუნველყოფს ყველა გარემოში.', source: 'Language', category: 'ენა', icon: 'mdi:earth' }
];

const lastFactStr = "icon: 'mdi:wifi-off' }";
const factLastIdx = factsContent.lastIndexOf(lastFactStr);
const factInsertPos = factLastIdx + lastFactStr.length;

let factsStr = '';
for (const f of newFacts) {
  factsStr += `,\n  { id: ${f.id}, text: ${JSON.stringify(f.text)}, textKa: ${JSON.stringify(f.textKa)}, source: ${JSON.stringify(f.source)}, category: ${JSON.stringify(f.category)}, icon: ${JSON.stringify(f.icon)} }`;
}

factsContent = factsContent.slice(0, factInsertPos) + factsStr + factsContent.slice(factInsertPos);
fs.writeFileSync('src/app/data/facts-data.ts', factsContent, 'utf8');
console.log(`Added ${newFacts.length} facts (total 80)`);
