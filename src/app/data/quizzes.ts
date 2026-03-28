import { Quiz } from './types';

export const QUIZZES: Quiz[] = [
  {
    id: 'q1',
    chapterId: 1,
    title: 'Introduction to JavaScript',
    titleKa: 'JavaScript-ის შესავალი',
    questions: [
      {
        id: 'q1_1',
        question: "Who created JavaScript and in what year?",
        questionKa: "ვინ შექმნა JavaScript და რომელ წელს?",
        options: ["Tim Berners-Lee, 1991","Brendan Eich, 1995","James Gosling, 1995","Guido van Rossum, 1991"],
        optionsKa: ["ტიმ ბერნერს-ლი, 1991","ბრენდან აიკი, 1995","ჯეიმს გოსლინგი, 1995","გვიდო ვან როსუმი, 1991"],
        correctIndex: 1,
        explanation: "Brendan Eich created JavaScript in 1995 at Netscape in just 10 days.",
        explanationKa: "ბრენდან აიკმა შექმნა JavaScript 1995 წელს Netscape-ში სულ რაღაც 10 დღეში."
      },
      {
        id: 'q1_2',
        question: "Which keyword declares a block-scoped variable?",
        questionKa: "რომელი საკვანძო სიტყვა აცხადებს ბლოკ-სკოპის ცვლადს?",
        options: ["var","let","const","function"],
        optionsKa: ["var","let","const","function"],
        correctIndex: 1,
        explanation: "let declares a block-scoped variable, unlike var which is function-scoped.",
        explanationKa: "let აცხადებს ბლოკ-სკოპის ცვლადს, var-ისგან განსხვავებით, რომელიც ფუნქცია-სკოპისაა."
      },
      {
        id: 'q1_3',
        question: "What does typeof null return in JavaScript?",
        questionKa: "რას აბრუნებს typeof null JavaScript-ში?",
        options: ["\"null\"","\"undefined\"","\"object\"","\"boolean\""],
        optionsKa: ["\"null\"","\"undefined\"","\"object\"","\"boolean\""],
        correctIndex: 2,
        explanation: "typeof null returns \"object\" — this is a well-known JavaScript bug from its early days.",
        explanationKa: "typeof null აბრუნებს \"object\"-ს — ეს JavaScript-ის ცნობილი ბაგია თავიდანვე."
      },
      {
        id: 'q1_4',
        question: "Which console method is used for warning messages?",
        questionKa: "რომელი კონსოლის მეთოდი გამოიყენება გაფრთხილებისთვის?",
        options: ["console.log()","console.error()","console.warn()","console.info()"],
        optionsKa: ["console.log()","console.error()","console.warn()","console.info()"],
        correctIndex: 2,
        explanation: "console.warn() outputs warning messages, usually displayed in yellow in the browser.",
        explanationKa: "console.warn() გამოიტანს გაფრთხილების შეტყობინებებს, ჩვეულებრივ ყვითელი ფერით."
      },
      {
        id: 'q1_5',
        question: "What was JavaScript originally called?",
        questionKa: "რა ერქვა JavaScript-ს თავდაპირველად?",
        options: ["JScript","ECMAScript","LiveScript","JavaWeb"],
        optionsKa: ["JScript","ECMAScript","LiveScript","JavaWeb"],
        correctIndex: 2,
        explanation: "JavaScript was originally called Mocha, then LiveScript, before being renamed to JavaScript.",
        explanationKa: "JavaScript-ს თავდაპირველად Mocha ერქვა, შემდეგ LiveScript, ბოლოს JavaScript-ად გადაარქვეს."
      },
      {
        id: 'q1_6',
        question: "What is the difference between let and var?",
        questionKa: "რა განსხვავებაა let-სა და var-ს შორის?",
        options: ["let is function-scoped, var is block-scoped","let is block-scoped, var is function-scoped","They are identical","let cannot be reassigned"],
        optionsKa: ["let ფუნქცია-სკოპისაა, var ბლოკ-სკოპისაა","let ბლოკ-სკოპისაა, var ფუნქცია-სკოპისაა","ისინი იდენტურია","let-ს ხელახალი მინიჭება არ შეიძლია"],
        correctIndex: 1,
        explanation: "let is block-scoped (limited to the block where declared), while var is function-scoped.",
        explanationKa: "let ბლოკ-სკოპისაა (შეზღუდულია იმ ბლოკით, სადაც გამოცხადდა), ხოლო var ფუნქცია-სკოპისაა."
      },
      {
        id: 'q1_7',
        question: "Which of these is NOT a primitive data type in JavaScript?",
        questionKa: "რომელი არ არის პრიმიტიული მონაცემთა ტიპი JavaScript-ში?",
        options: ["Symbol","Array","BigInt","Boolean"],
        optionsKa: ["Symbol","Array","BigInt","Boolean"],
        correctIndex: 1,
        explanation: "Array is an object type, not a primitive. The 7 primitives are: String, Number, Boolean, null, undefined, Symbol, and BigInt.",
        explanationKa: "Array ობიექტის ტიპია, არა პრიმიტიული. 7 პრიმიტივია: String, Number, Boolean, null, undefined, Symbol და BigInt."
      },
      {
        id: 'q1_8',
        question: "What does console.table() do?",
        questionKa: "რას აკეთებს console.table()?",
        options: ["Creates a table element in DOM","Displays array/object data as a formatted table","Saves data to localStorage","Creates a database table"],
        optionsKa: ["DOM-ში ცხრილის ელემენტს ქმნის","მასივის/ობიექტის მონაცემებს ფორმატირებულ ცხრილად აჩვენებს","მონაცემებს localStorage-ში ინახავს","მონაცემთა ბაზის ცხრილს ქმნის"],
        correctIndex: 1,
        explanation: "console.table() displays arrays and objects as formatted, sortable tables in the developer console.",
        explanationKa: "console.table() მასივებს და ობიექტებს ფორმატირებულ, დასორტირებად ცხრილებად აჩვენებს კონსოლში."
      },
      {
        id: 'q1_9',
        question: "What value does typeof undefined return?",
        questionKa: "რა მნიშვნელობას აბრუნებს typeof undefined?",
        options: ["\"null\"","\"undefined\"","\"object\"","\"void\""],
        optionsKa: ["\"null\"","\"undefined\"","\"object\"","\"void\""],
        correctIndex: 1,
        explanation: "typeof undefined correctly returns the string \"undefined\".",
        explanationKa: "typeof undefined სწორად აბრუნებს სტრინგს \"undefined\"."
      },
      {
        id: 'q1_10',
        question: "What does const prevent?",
        questionKa: "რას კრძალავს const?",
        options: ["Changing object properties","Reassignment of the variable","Both reassignment and property changes","Nothing, it is the same as let"],
        optionsKa: ["ობიექტის თვისებების შეცვლას","ცვლადის ხელახალ მინიჭებას","ხელახალ მინიჭებასაც და თვისებების შეცვლასაც","არაფერს, ის let-ის იდენტურია"],
        correctIndex: 1,
        explanation: "const prevents reassignment of the variable binding, but object properties can still be modified.",
        explanationKa: "const ცვლადის ხელახალ მინიჭებას კრძალავს, მაგრამ ობიექტის თვისებების შეცვლა მაინც შეიძლება."
      }
    ]
  },
  {
    id: 'q2',
    chapterId: 2,
    title: 'Control Flow',
    titleKa: 'მართვის ნაკადი',
    questions: [
      {
        id: 'q2_1',
        question: "What does Number(\"\") return?",
        questionKa: "რას აბრუნებს Number(\"\")?",
        options: ["NaN","0","undefined","null"],
        optionsKa: ["NaN","0","undefined","null"],
        correctIndex: 1,
        explanation: "Number(\"\") returns 0. An empty string converts to zero.",
        explanationKa: "Number(\"\") აბრუნებს 0-ს. ცარიელი სტრინგი ნულად კონვერტირდება."
      },
      {
        id: 'q2_2',
        question: "Which value is NOT falsy in JavaScript?",
        questionKa: "რომელი მნიშვნელობა არ არის falsy JavaScript-ში?",
        options: ["0","\"\"","\"false\"","null"],
        optionsKa: ["0","\"\"","\"false\"","null"],
        correctIndex: 2,
        explanation: "The string \"false\" is truthy because it is a non-empty string.",
        explanationKa: "სტრინგი \"false\" truthy-ა, რადგან ის არაცარიელი სტრინგია."
      },
      {
        id: 'q2_3',
        question: "What is the result of: 5 === \"5\"?",
        questionKa: "რა არის შედეგი: 5 === \"5\"?",
        options: ["true","false","undefined","TypeError"],
        optionsKa: ["true","false","undefined","TypeError"],
        correctIndex: 1,
        explanation: "Strict equality (===) checks both value and type. 5 is number, \"5\" is string.",
        explanationKa: "მკაცრი ტოლობა (===) ამოწმებს მნიშვნელობასაც და ტიპსაც. 5 რიცხვია, \"5\" სტრინგი."
      },
      {
        id: 'q2_4',
        question: "What does the ternary operator look like?",
        questionKa: "როგორ გამოიყურება ტერნარული ოპერატორი?",
        options: ["if ? then : else","condition ? trueVal : falseVal","condition && trueVal || falseVal","switch(condition)"],
        optionsKa: ["if ? then : else","condition ? trueVal : falseVal","condition && trueVal || falseVal","switch(condition)"],
        correctIndex: 1,
        explanation: "The ternary operator syntax is: condition ? valueIfTrue : valueIfFalse.",
        explanationKa: "ტერნარული ოპერატორის სინტაქსია: პირობა ? მნიშვნელობაTrue : მნიშვნელობაFalse."
      },
      {
        id: 'q2_5',
        question: "When is switch preferred over if/else?",
        questionKa: "როდის სჯობს switch-ის გამოყენება if/else-ის ნაცვლად?",
        options: ["For range checks","For multiple specific value comparisons","For boolean conditions","For loop control"],
        optionsKa: ["დიაპაზონის შემოწმებისთვის","რამდენიმე კონკრეტული მნიშვნელობის შედარებისთვის","ბულიანი პირობებისთვის","ციკლის მართვისთვის"],
        correctIndex: 1,
        explanation: "Switch is ideal when checking a variable against multiple specific values.",
        explanationKa: "switch იდეალურია, როცა ცვლადს რამდენიმე კონკრეტულ მნიშვნელობას ვადარებთ."
      },
      {
        id: 'q2_6',
        question: "What does Number(true) return?",
        questionKa: "რას აბრუნებს Number(true)?",
        options: ["0","1","NaN","\"true\""],
        optionsKa: ["0","1","NaN","\"true\""],
        correctIndex: 1,
        explanation: "Number(true) returns 1. Boolean true converts to 1, false to 0.",
        explanationKa: "Number(true) აბრუნებს 1-ს. Boolean true 1-ად, false 0-ად კონვერტირდება."
      },
      {
        id: 'q2_7',
        question: "What does the ?? (nullish coalescing) operator do?",
        questionKa: "რას აკეთებს ?? (nullish coalescing) ოპერატორი?",
        options: ["Returns left if falsy","Returns right if left is null or undefined","Compares two values","Negates a boolean"],
        optionsKa: ["მარცხენას აბრუნებს თუ falsy-ა","მარჯვენას აბრუნებს თუ მარცხენა null ან undefined-ია","ორ მნიშვნელობას ადარებს","ბულიანს უარყოფს"],
        correctIndex: 1,
        explanation: "The ?? operator returns the right operand only when the left is null or undefined, unlike || which triggers on any falsy value.",
        explanationKa: "?? ოპერატორი მარჯვენა ოპერანდს მხოლოდ მაშინ აბრუნებს, როცა მარცხენა null ან undefined-ია."
      },
      {
        id: 'q2_8',
        question: "What happens if no case matches in a switch and there is no default?",
        questionKa: "რა ხდება თუ switch-ში არცერთი case არ ემთხვევა და default არ არის?",
        options: ["An error is thrown","Nothing happens, execution continues","It returns undefined","The first case runs"],
        optionsKa: ["შეცდომა ისვრის","არაფერი ხდება, შესრულება გრძელდება","undefined-ს აბრუნებს","პირველი case სრულდება"],
        correctIndex: 1,
        explanation: "If no case matches and there is no default clause, the switch block is simply skipped.",
        explanationKa: "თუ არცერთი case არ ემთხვევა და default არ არის, switch ბლოკი უბრალოდ გამოიტოვება."
      },
      {
        id: 'q2_9',
        question: "Which operator has higher precedence: && or ||?",
        questionKa: "რომელ ოპერატორს აქვს უფრო მაღალი პრიორიტეტი: && თუ ||?",
        options: ["|| has higher precedence","&& has higher precedence","They have equal precedence","It depends on the context"],
        optionsKa: ["||-ს აქვს მეტი პრიორიტეტი","&&-ს აქვს მეტი პრიორიტეტი","თანაბარი პრიორიტეტი აქვთ","კონტექსტზეა დამოკიდებული"],
        correctIndex: 1,
        explanation: "Logical AND (&&) has higher precedence than logical OR (||).",
        explanationKa: "ლოგიკურ AND-ს (&&) უფრო მაღალი პრიორიტეტი აქვს ვიდრე ლოგიკურ OR-ს (||)."
      },
      {
        id: 'q2_10',
        question: "What is short-circuit evaluation?",
        questionKa: "რა არის short-circuit შეფასება?",
        options: ["Evaluating all operands always","Stopping evaluation as soon as result is determined","A type of loop","Converting types automatically"],
        optionsKa: ["ყველა ოპერანდის ყოველთვის შეფასება","შეფასების შეწყვეტა შედეგის დადგენისთანავე","ციკლის ტიპი","ტიპების ავტომატური კონვერტაცია"],
        correctIndex: 1,
        explanation: "Short-circuit evaluation stops as soon as the result is determined: false && x skips x, true || x skips x.",
        explanationKa: "Short-circuit შეფასება ჩერდება შედეგის დადგენისთანავე: false && x - x-ს გამოტოვებს, true || x - x-ს გამოტოვებს."
      }
    ]
  },
  {
    id: 'q3',
    chapterId: 3,
    title: 'Math & Strings',
    titleKa: 'მათემატიკა და სტრინგები',
    questions: [
      {
        id: 'q3_1',
        question: "What range does Math.random() generate?",
        questionKa: "რა დიაპაზონს აგენერირებს Math.random()?",
        options: ["0 to 100","1 to 10","0 (inclusive) to 1 (exclusive)","0 to 1 (both inclusive)"],
        optionsKa: ["0-დან 100-მდე","1-დან 10-მდე","0 (ჩათვლით) 1-მდე (არაჩათვლით)","0-დან 1-მდე (ორივე ჩათვლით)"],
        correctIndex: 2,
        explanation: "Math.random() returns a number >= 0 and < 1.",
        explanationKa: "Math.random() აბრუნებს რიცხვს >= 0 და < 1."
      },
      {
        id: 'q3_2',
        question: "What does Math.floor(4.9) return?",
        questionKa: "რას აბრუნებს Math.floor(4.9)?",
        options: ["5","4","4.9","NaN"],
        optionsKa: ["5","4","4.9","NaN"],
        correctIndex: 1,
        explanation: "Math.floor() always rounds down to the nearest integer.",
        explanationKa: "Math.floor() ყოველთვის ქვემოთ ამრგვალებს უახლოეს მთელ რიცხვამდე."
      },
      {
        id: 'q3_3',
        question: "Which method converts a string to uppercase?",
        questionKa: "რომელი მეთოდი გარდაქმნის სტრინგს ზედა რეგისტრში?",
        options: ["toUpper()","toUpperCase()","upper()","capitalize()"],
        optionsKa: ["toUpper()","toUpperCase()","upper()","capitalize()"],
        correctIndex: 1,
        explanation: "toUpperCase() converts all characters in the string to uppercase.",
        explanationKa: "toUpperCase() სტრინგის ყველა სიმბოლოს ზედა რეგისტრში გარდაქმნის."
      },
      {
        id: 'q3_4',
        question: "What syntax do template literals use?",
        questionKa: "რა სინტაქსს იყენებენ template literals?",
        options: ["Single quotes ''","Double quotes \"\"","Backticks ``","Parentheses ()"],
        optionsKa: ["ერთმაგი ბრჭყალები ''","ორმაგი ბრჭყალები \"\"","ბექთიქები ``","ფრჩხილები ()"],
        correctIndex: 2,
        explanation: "Template literals use backtick characters (`) and allow ${expression} interpolation.",
        explanationKa: "Template literals ბექთიქებს (`) იყენებს და ${expression} ინტერპოლაციას იძლევა."
      },
      {
        id: 'q3_5',
        question: "Are strings mutable or immutable in JavaScript?",
        questionKa: "სტრინგები ცვალებადია თუ უცვლელი JavaScript-ში?",
        options: ["Mutable","Immutable","Both","Depends on declaration"],
        optionsKa: ["ცვალებადი","უცვლელი","ორივე","დეკლარაციიდან გამომდინარე"],
        correctIndex: 1,
        explanation: "Strings are immutable in JavaScript. String methods return new strings.",
        explanationKa: "სტრინგები უცვლელია JavaScript-ში. სტრინგის მეთოდები ახალ სტრინგებს აბრუნებენ."
      },
      {
        id: 'q3_6',
        question: "What does Math.abs(-7) return?",
        questionKa: "რას აბრუნებს Math.abs(-7)?",
        options: ["-7","7","0","NaN"],
        optionsKa: ["-7","7","0","NaN"],
        correctIndex: 1,
        explanation: "Math.abs() returns the absolute (positive) value of a number.",
        explanationKa: "Math.abs() რიცხვის აბსოლუტურ (დადებით) მნიშვნელობას აბრუნებს."
      },
      {
        id: 'q3_7',
        question: "What does \"hello\".includes(\"ell\") return?",
        questionKa: "რას აბრუნებს \"hello\".includes(\"ell\")?",
        options: ["true","false","1","\"ell\""],
        optionsKa: ["true","false","1","\"ell\""],
        correctIndex: 0,
        explanation: "\"hello\".includes(\"ell\") returns true because \"ell\" is found within \"hello\".",
        explanationKa: "\"hello\".includes(\"ell\") true-ს აბრუნებს, რადგან \"ell\" \"hello\"-ში მოიძებნა."
      },
      {
        id: 'q3_8',
        question: "What does \"JavaScript\".slice(0, 4) return?",
        questionKa: "რას აბრუნებს \"JavaScript\".slice(0, 4)?",
        options: ["\"Java\"","\"JavaS\"","\"Jav\"","\"avaS\""],
        optionsKa: ["\"Java\"","\"JavaS\"","\"Jav\"","\"avaS\""],
        correctIndex: 0,
        explanation: "slice(0, 4) extracts characters from index 0 to 3 (4 is exclusive), giving \"Java\".",
        explanationKa: "slice(0, 4) ინდექს 0-დან 3-მდე სიმბოლოებს ამოიღებს (4 ექსკლუზიურია), რაც \"Java\"-ს იძლევა."
      },
      {
        id: 'q3_9',
        question: "How do you generate a random integer from 1 to 10?",
        questionKa: "როგორ გენერირებთ შემთხვევით მთელ რიცხვს 1-დან 10-მდე?",
        options: ["Math.random() * 10","Math.floor(Math.random() * 10) + 1","Math.ceil(Math.random() * 10) + 1","Math.round(Math.random()) * 10"],
        optionsKa: ["Math.random() * 10","Math.floor(Math.random() * 10) + 1","Math.ceil(Math.random() * 10) + 1","Math.round(Math.random()) * 10"],
        correctIndex: 1,
        explanation: "Math.floor(Math.random() * 10) + 1 gives a random integer from 1 to 10 inclusive.",
        explanationKa: "Math.floor(Math.random() * 10) + 1 შემთხვევით მთელ რიცხვს 1-დან 10-ის ჩათვლით იძლევა."
      },
      {
        id: 'q3_10',
        question: "What does \"Hello World\".split(\" \") return?",
        questionKa: "რას აბრუნებს \"Hello World\".split(\" \")?",
        options: ["\"Hello World\"","[\"Hello\", \"World\"]","[\"H\",\"e\",\"l\",\"l\",\"o\",\" \",\"W\",\"o\",\"r\",\"l\",\"d\"]","[\"Hello World\"]"],
        optionsKa: ["\"Hello World\"","[\"Hello\", \"World\"]","[\"H\",\"e\",\"l\",\"l\",\"o\",\" \",\"W\",\"o\",\"r\",\"l\",\"d\"]","[\"Hello World\"]"],
        correctIndex: 1,
        explanation: "split(\" \") splits the string at each space, creating an array of words.",
        explanationKa: "split(\" \") სტრინგს ყოველ სფეისზე ყოფს, სიტყვების მასივს ქმნის."
      }
    ]
  },
  {
    id: 'q4',
    chapterId: 4,
    title: 'Loops',
    titleKa: 'ციკლები',
    questions: [
      {
        id: 'q4_1',
        question: "Which loop always executes at least once?",
        questionKa: "რომელი ციკლი სრულდება მინიმუმ ერთხელ ყოველთვის?",
        options: ["while","for","do...while","for...in"],
        optionsKa: ["while","for","do...while","for...in"],
        correctIndex: 2,
        explanation: "do...while checks the condition after the loop body, so it runs at least once.",
        explanationKa: "do...while პირობას ტანის შემდეგ ამოწმებს, ამიტომ მინიმუმ ერთხელ სრულდება."
      },
      {
        id: 'q4_2',
        question: "What does the break statement do in a loop?",
        questionKa: "რას აკეთებს break ციკლში?",
        options: ["Skips to next iteration","Exits the loop completely","Pauses the loop","Restarts the loop"],
        optionsKa: ["გადადის შემდეგ იტერაციაზე","მთლიანად გამოდის ციკლიდან","აპაუზებს ციკლს","თავიდან იწყებს ციკლს"],
        correctIndex: 1,
        explanation: "break immediately exits the loop, stopping all further iterations.",
        explanationKa: "break მაშინვე გამოდის ციკლიდან და აჩერებს ყველა შემდეგ იტერაციას."
      },
      {
        id: 'q4_3',
        question: "What are the three parts of a for loop?",
        questionKa: "for ციკლის სამი ნაწილი რომელია?",
        options: ["start, end, step","init, condition, increment","begin, test, update","declare, check, change"],
        optionsKa: ["დასაწყისი, დასასრული, ნაბიჯი","ინიციალიზაცია, პირობა, ინკრემენტი","დაწყება, ტესტი, განახლება","დეკლარაცია, შემოწმება, ცვლილება"],
        correctIndex: 1,
        explanation: "A for loop has: initialization, condition, and increment/update expression.",
        explanationKa: "for ციკლს აქვს: ინიციალიზაცია, პირობა და ინკრემენტი/განახლება."
      },
      {
        id: 'q4_4',
        question: "What does continue do in a loop?",
        questionKa: "რას აკეთებს continue ციკლში?",
        options: ["Exits loop","Skips current iteration and moves to next","Pauses execution","Repeats current iteration"],
        optionsKa: ["გამოდის ციკლიდან","გამოტოვებს მიმდინარე იტერაციას","აჩერებს შესრულებას","იმეორებს მიმდინარე იტერაციას"],
        correctIndex: 1,
        explanation: "continue skips the rest of the current iteration and jumps to the next one.",
        explanationKa: "continue გამოტოვებს მიმდინარე იტერაციის დარჩენილ ნაწილს და შემდეგზე გადადის."
      },
      {
        id: 'q4_5',
        question: "How many times does this loop run: for(let i=0; i<5; i++)?",
        questionKa: "რამდენჯერ სრულდება ეს ციკლი: for(let i=0; i<5; i++)?",
        options: ["4","5","6","Infinite"],
        optionsKa: ["4","5","6","უსასრულო"],
        correctIndex: 1,
        explanation: "i starts at 0 and runs while i < 5: iterations for i = 0, 1, 2, 3, 4 = 5 times.",
        explanationKa: "i იწყება 0-დან და სრულდება სანამ i < 5: i = 0, 1, 2, 3, 4 = 5-ჯერ."
      },
      {
        id: 'q4_6',
        question: "What will a for loop \"for(let i=0; i<3; i++)\" execute how many times?",
        questionKa: "for ციკლი \"for(let i=0; i<3; i++)\" რამდენჯერ შესრულდება?",
        options: ["2","3","4","Infinite"],
        optionsKa: ["2","3","4","უსასრულოდ"],
        correctIndex: 1,
        explanation: "The loop runs for i=0, i=1, i=2 (three iterations), then i becomes 3 and the condition i<3 is false.",
        explanationKa: "ციკლი სრულდება i=0, i=1, i=2 (სამი იტერაცია), შემდეგ i ხდება 3 და i<3 პირობა false-ია."
      },
      {
        id: 'q4_7',
        question: "What does the continue statement do inside a loop?",
        questionKa: "რას აკეთებს continue ოპერატორი ციკლში?",
        options: ["Exits the loop","Skips to the next iteration","Restarts the loop from the beginning","Pauses execution"],
        optionsKa: ["ციკლიდან გამოდის","შემდეგ იტერაციაზე გადადის","ციკლს თავიდან იწყებს","შესრულებას აჩერებს"],
        correctIndex: 1,
        explanation: "continue skips the remaining code in the current iteration and moves to the next one.",
        explanationKa: "continue მიმდინარე იტერაციაში დანარჩენ კოდს გამოტოვებს და შემდეგზე გადადის."
      },
      {
        id: 'q4_8',
        question: "Which loop guarantees at least one execution of the body?",
        questionKa: "რომელი ციკლი უზრუნველყოფს სხეულის ერთხელ მაინც შესრულებას?",
        options: ["for","while","do...while","for...of"],
        optionsKa: ["for","while","do...while","for...of"],
        correctIndex: 2,
        explanation: "do...while executes the body first, then checks the condition.",
        explanationKa: "do...while ჯერ სხეულს ასრულებს, შემდეგ ამოწმებს პირობას."
      },
      {
        id: 'q4_9',
        question: "What causes an infinite loop?",
        questionKa: "რა იწვევს უსასრულო ციკლს?",
        options: ["Using break","A condition that never becomes false","Using continue","Declaring a counter"],
        optionsKa: ["break-ის გამოყენება","პირობა, რომელიც არასოდეს ხდება false","continue-ის გამოყენება","მრიცხველის გამოცხადება"],
        correctIndex: 1,
        explanation: "An infinite loop occurs when the loop condition always remains true.",
        explanationKa: "უსასრულო ციკლი ხდება, როცა ციკლის პირობა ყოველთვის true რჩება."
      },
      {
        id: 'q4_10',
        question: "What does for...of iterate over?",
        questionKa: "რაზე გადის for...of?",
        options: ["Object keys","Object values only","Values of iterable objects (arrays, strings)","Class methods"],
        optionsKa: ["ობიექტის გასაღებებზე","მხოლოდ ობიექტის მნიშვნელობებზე","იტერირებადი ობიექტების (მასივები, სტრინგები) მნიშვნელობებზე","კლასის მეთოდებზე"],
        correctIndex: 2,
        explanation: "for...of iterates over values of iterable objects like arrays, strings, Maps, and Sets.",
        explanationKa: "for...of იტერირებადი ობიექტების (მასივები, სტრინგები, Map, Set) მნიშვნელობებზე გადის."
      }
    ]
  },
  {
    id: 'q5',
    chapterId: 5,
    title: 'Arrays',
    titleKa: 'მასივები',
    questions: [
      {
        id: 'q5_1',
        question: "What is the index of the first element in an array?",
        questionKa: "რა არის მასივის პირველი ელემენტის ინდექსი?",
        options: ["1","0","-1","undefined"],
        optionsKa: ["1","0","-1","undefined"],
        correctIndex: 1,
        explanation: "JavaScript arrays are zero-indexed, so the first element is at index 0.",
        explanationKa: "JavaScript-ის მასივები ნულიდან იწყება, პირველი ელემენტის ინდექსი 0-ია."
      },
      {
        id: 'q5_2',
        question: "Which method adds an element to the end of an array?",
        questionKa: "რომელი მეთოდი ამატებს ელემენტს მასივის ბოლოში?",
        options: ["unshift()","push()","pop()","shift()"],
        optionsKa: ["unshift()","push()","pop()","shift()"],
        correctIndex: 1,
        explanation: "push() adds one or more elements to the end of an array.",
        explanationKa: "push() ამატებს ერთ ან მეტ ელემენტს მასივის ბოლოში."
      },
      {
        id: 'q5_3',
        question: "What does splice() do?",
        questionKa: "რას აკეთებს splice()?",
        options: ["Copies a portion","Adds/removes elements at any position","Sorts the array","Joins arrays"],
        optionsKa: ["აკოპირებს ნაწილს","ნებისმიერ პოზიციაზე ამატებს/შლის","ასორტირებს მასივს","აერთიანებს მასივებს"],
        correctIndex: 1,
        explanation: "splice() can add, remove, or replace elements at any position in an array.",
        explanationKa: "splice() შეუძლია ელემენტების დამატება, წაშლა ან ჩანაცვლება ნებისმიერ პოზიციაზე."
      },
      {
        id: 'q5_4',
        question: "Does slice() modify the original array?",
        questionKa: "ცვლის თუ არა slice() ორიგინალ მასივს?",
        options: ["Yes, always","No, it returns a copy","Only with 2 arguments","Only for objects"],
        optionsKa: ["დიახ, ყოველთვის","არა, ის ასლს აბრუნებს","მხოლოდ 2 არგუმენტით","მხოლოდ ობიექტებისთვის"],
        correctIndex: 1,
        explanation: "slice() returns a shallow copy of a portion of an array without modifying the original.",
        explanationKa: "slice() აბრუნებს მასივის ნაწილის ასლს ორიგინალის შეცვლის გარეშე."
      },
      {
        id: 'q5_5',
        question: "What does typeof [] return?",
        questionKa: "რას აბრუნებს typeof []?",
        options: ["\"array\"","\"object\"","\"list\"","\"undefined\""],
        optionsKa: ["\"array\"","\"object\"","\"list\"","\"undefined\""],
        correctIndex: 1,
        explanation: "In JavaScript, arrays are objects, so typeof [] returns \"object\".",
        explanationKa: "JavaScript-ში მასივები ობიექტებია, ამიტომ typeof [] აბრუნებს \"object\"-ს."
      },
      {
        id: 'q5_6',
        question: "What does [1,2,3].includes(2) return?",
        questionKa: "რას აბრუნებს [1,2,3].includes(2)?",
        options: ["1","true","false","2"],
        optionsKa: ["1","true","false","2"],
        correctIndex: 1,
        explanation: "includes() returns true if the array contains the specified value.",
        explanationKa: "includes() true-ს აბრუნებს თუ მასივი შეიცავს მითითებულ მნიშვნელობას."
      },
      {
        id: 'q5_7',
        question: "What does Array.isArray([1,2]) return?",
        questionKa: "რას აბრუნებს Array.isArray([1,2])?",
        options: ["true","false","\"array\"","\"object\""],
        optionsKa: ["true","false","\"array\"","\"object\""],
        correctIndex: 0,
        explanation: "Array.isArray() is the reliable way to check if a value is an array — returns true for arrays.",
        explanationKa: "Array.isArray() სანდო გზაა მნიშვნელობის მასივობის შესამოწმებლად — მასივებისთვის true-ს აბრუნებს."
      },
      {
        id: 'q5_8',
        question: "What does splice(1, 2) do to [a, b, c, d]?",
        questionKa: "რას უკეთებს splice(1, 2) მასივს [a, b, c, d]?",
        options: ["Removes a and b","Removes b and c","Adds 2 elements at index 1","Returns [a, d]"],
        optionsKa: ["შლის a-ს და b-ს","შლის b-ს და c-ს","ინდექს 1-ზე 2 ელემენტს ამატებს","აბრუნებს [a, d]"],
        correctIndex: 1,
        explanation: "splice(1, 2) starts at index 1 and removes 2 elements (b and c), leaving [a, d].",
        explanationKa: "splice(1, 2) ინდექს 1-დან იწყებს და 2 ელემენტს შლის (b და c), რჩება [a, d]."
      },
      {
        id: 'q5_9',
        question: "What does [1,2].concat([3,4]) return?",
        questionKa: "რას აბრუნებს [1,2].concat([3,4])?",
        options: ["[1,2,3,4]","[[1,2],[3,4]]","[1,2,[3,4]]","Error"],
        optionsKa: ["[1,2,3,4]","[[1,2],[3,4]]","[1,2,[3,4]]","შეცდომა"],
        correctIndex: 0,
        explanation: "concat() merges arrays into a new flat array without modifying the originals.",
        explanationKa: "concat() მასივებს ახალ ბრტყელ მასივში აერთიანებს ორიგინალების შეცვლის გარეშე."
      },
      {
        id: 'q5_10',
        question: "What does .length return for an empty array []?",
        questionKa: "რას აბრუნებს .length ცარიელი მასივისთვის []?",
        options: ["undefined","null","0","-1"],
        optionsKa: ["undefined","null","0","-1"],
        correctIndex: 2,
        explanation: "An empty array has a length of 0.",
        explanationKa: "ცარიელ მასივს სიგრძე 0 აქვს."
      }
    ]
  },
  {
    id: 'q6',
    chapterId: 6,
    title: 'Nested Arrays',
    titleKa: 'ჩადგმული მასივები',
    questions: [
      {
        id: 'q6_1',
        question: "How do you access the element at row 1, column 2 of a matrix?",
        questionKa: "როგორ მივწვდებით მატრიცის 1 რიგის, 2 სვეტის ელემენტს?",
        options: ["matrix[1, 2]","matrix[1][2]","matrix(1)(2)","matrix{1}{2}"],
        optionsKa: ["matrix[1, 2]","matrix[1][2]","matrix(1)(2)","matrix{1}{2}"],
        correctIndex: 1,
        explanation: "Nested array access uses chained bracket notation: matrix[row][column].",
        explanationKa: "ჩადგმულ მასივში წვდომისთვის ხდება ჯაჭვური ფრჩხილების გამოყენება: matrix[row][column]."
      },
      {
        id: 'q6_2',
        question: "What is [[1,2],[3,4]] an example of?",
        questionKa: "რის მაგალითია [[1,2],[3,4]]?",
        options: ["Object","2D array","Set","Map"],
        optionsKa: ["ობიექტი","2D მასივი","Set","Map"],
        correctIndex: 1,
        explanation: "This is a 2D array (array of arrays), also called a matrix.",
        explanationKa: "ეს 2D მასივია (მასივების მასივი), ასევე ცნობილი როგორც მატრიცა."
      },
      {
        id: 'q6_3',
        question: "What method flattens a nested array?",
        questionKa: "რომელი მეთოდი აბრტყელებს ჩადგმულ მასივს?",
        options: ["flatten()","flat()","spread()","merge()"],
        optionsKa: ["flatten()","flat()","spread()","merge()"],
        correctIndex: 1,
        explanation: "flat() flattens nested arrays by one level by default (or more with depth argument).",
        explanationKa: "flat() აბრტყელებს ჩადგმულ მასივს ერთი დონით (ან მეტით depth არგუმენტით)."
      },
      {
        id: 'q6_4',
        question: "How many loops do you typically need to iterate a 2D array?",
        questionKa: "რამდენი ციკლი გჭირდება 2D მასივის გასავლელად?",
        options: ["1","2","3","Depends on size"],
        optionsKa: ["1","2","3","ზომაზეა დამოკიდებული"],
        correctIndex: 1,
        explanation: "You need 2 nested loops: outer for rows, inner for columns.",
        explanationKa: "გჭირდება 2 ჩადგმული ციკლი: გარე რიგებისთვის, შიდა სვეტებისთვის."
      },
      {
        id: 'q6_5',
        question: "What is a practical use of 2D arrays?",
        questionKa: "რა არის 2D მასივების პრაქტიკული გამოყენება?",
        options: ["Only mathematical calculations","Game boards and spreadsheets","Only image processing","Only sorting data"],
        optionsKa: ["მხოლოდ მათემატიკური გამოთვლები","სათამაშო დაფები და ელცხრილები","მხოლოდ სურათების დამუშავება","მხოლოდ მონაცემთა სორტირება"],
        correctIndex: 1,
        explanation: "Game boards (chess, tic-tac-toe), spreadsheets, and pixel grids all use 2D arrays.",
        explanationKa: "სათამაშო დაფები (ჭადრაკი, ტიკ-ტაკ-ტო), ელცხრილები და პიქსელთა ბადეები 2D მასივებს იყენებს."
      },
      {
        id: 'q6_6',
        question: "What does [[1,2],[3,4]].flat() return?",
        questionKa: "რას აბრუნებს [[1,2],[3,4]].flat()?",
        options: ["[[1,2],[3,4]]","[1,2,3,4]","[[1,2,3,4]]","Error"],
        optionsKa: ["[[1,2],[3,4]]","[1,2,3,4]","[[1,2,3,4]]","შეცდომა"],
        correctIndex: 1,
        explanation: "flat() flattens nested arrays by one level, creating [1,2,3,4].",
        explanationKa: "flat() ჩადგმულ მასივებს ერთი დონით ასწორებს, ქმნის [1,2,3,4]."
      },
      {
        id: 'q6_7',
        question: "How do you access the element 5 in [[1,2],[3,[4,5]]]?",
        questionKa: "როგორ მიწვდებით ელემენტ 5-ს [[1,2],[3,[4,5]]]-ში?",
        options: ["arr[1][1][1]","arr[2][1]","arr[1][2]","arr[1][1]"],
        optionsKa: ["arr[1][1][1]","arr[2][1]","arr[1][2]","arr[1][1]"],
        correctIndex: 0,
        explanation: "arr[1] is [3,[4,5]], arr[1][1] is [4,5], arr[1][1][1] is 5.",
        explanationKa: "arr[1] არის [3,[4,5]], arr[1][1] არის [4,5], arr[1][1][1] არის 5."
      },
      {
        id: 'q6_8',
        question: "What does the spread operator do with nested arrays?",
        questionKa: "რას აკეთებს spread ოპერატორი ჩადგმულ მასივებთან?",
        options: ["Deep copies everything","Only shallow copies the top level","Flattens all levels","Converts to object"],
        optionsKa: ["ყველაფერს ღრმად კოპირებს","მხოლოდ ზედა დონეს ზედაპირულად კოპირებს","ყველა დონეს ასწორებს","ობიექტად გარდაქმნის"],
        correctIndex: 1,
        explanation: "Spread creates a shallow copy — nested arrays still reference the same objects.",
        explanationKa: "Spread ზედაპირულ ასლს ქმნის — ჩადგმული მასივები მაინც იმავე ობიექტებზე მიუთითებს."
      },
      {
        id: 'q6_9',
        question: "What is flatMap() equivalent to?",
        questionKa: "flatMap() რის ექვივალენტია?",
        options: ["map() then flat()","flat() then map()","filter() then map()","reduce() then flat()"],
        optionsKa: ["map() შემდეგ flat()","flat() შემდეგ map()","filter() შემდეგ map()","reduce() შემდეგ flat()"],
        correctIndex: 0,
        explanation: "flatMap() is equivalent to calling map() followed by flat(1) in a single step.",
        explanationKa: "flatMap() ექვივალენტია map()-ის, შემდეგ flat(1)-ის ერთ ნაბიჯად გამოძახების."
      },
      {
        id: 'q6_10',
        question: "What is a matrix in programming?",
        questionKa: "რა არის მატრიცა პროგრამირებაში?",
        options: ["A 1D array","A 2D array (array of arrays)","A string of numbers","An object with arrays"],
        optionsKa: ["ერთგანზომილებიანი მასივი","ორგანზომილებიანი მასივი (მასივების მასივი)","რიცხვების სტრინგი","მასივებიანი ობიექტი"],
        correctIndex: 1,
        explanation: "A matrix is a 2D array — an array of arrays, forming rows and columns.",
        explanationKa: "მატრიცა არის 2D მასივი — მასივების მასივი, რომელიც რიგებსა და სვეტებს ქმნის."
      }
    ]
  },
  {
    id: 'q7',
    chapterId: 7,
    title: 'Functions',
    titleKa: 'ფუნქციები',
    questions: [
      {
        id: 'q7_1',
        question: "What keyword is used to declare a function?",
        questionKa: "რომელი საკვანძო სიტყვა გამოიყენება ფუნქციის გამოსაცხადებლად?",
        options: ["func","def","function","fn"],
        optionsKa: ["func","def","function","fn"],
        correctIndex: 2,
        explanation: "The function keyword declares a function in JavaScript.",
        explanationKa: "function საკვანძო სიტყვა გამოიყენება ფუნქციის გამოსაცხადებლად JavaScript-ში."
      },
      {
        id: 'q7_2',
        question: "What does return do inside a function?",
        questionKa: "რას აკეთებს return ფუნქციის შიგნით?",
        options: ["Continues to next line","Sends a value back and stops execution","Only stops execution","Prints to console"],
        optionsKa: ["ნაგრძობს შემდეგ ხაზს","აბრუნებს მნიშვნელობას და აჩერებს","მხოლოდ ჩერდება","კონსოლში ბეჭდავს"],
        correctIndex: 1,
        explanation: "return sends a value back to the caller and immediately stops function execution.",
        explanationKa: "return აბრუნებს მნიშვნელობას გამომძახებელთან და აჩერებს ფუნქციის შესრულებას."
      },
      {
        id: 'q7_3',
        question: "What are parameters in a function?",
        questionKa: "რა არის პარამეტრები ფუნქციაში?",
        options: ["Values passed when calling","Placeholder variables in definition","Return values","Global variables"],
        optionsKa: ["გამოძახებისას გადაცემული მნიშვნელობები","განსაზღვრებაში ჩანაცვლების ცვლადები","დაბრუნებული მნიშვნელობები","გლობალური ცვლადები"],
        correctIndex: 1,
        explanation: "Parameters are placeholder names in the function definition. Arguments are actual values.",
        explanationKa: "პარამეტრები არის ჩანაცვლების სახელები ფუნქციის განსაზღვრებაში. არგუმენტები კი ფაქტობრივი მნიშვნელობებია."
      },
      {
        id: 'q7_4',
        question: "Can variables inside a function be accessed outside?",
        questionKa: "ფუნქციის შიგნით ცვლადებზე წვდომა შესაძლებელია გარედან?",
        options: ["Yes, always","No, they are locally scoped","Only with var","Only with let"],
        optionsKa: ["დიახ, ყოველთვის","არა, ისინი ლოკალურ სკოპშია","მხოლოდ var-ით","მხოლოდ let-ით"],
        correctIndex: 1,
        explanation: "Variables declared inside functions are locally scoped and not accessible outside.",
        explanationKa: "ფუნქციის შიგნით გამოცხადებული ცვლადები ლოკალურ სკოპშია და გარედან მიუწვდომელია."
      },
      {
        id: 'q7_5',
        question: "Functions in JavaScript are called \"first-class ___\".",
        questionKa: "JavaScript-ში ფუნქციებს „პირველი კლასის ___\" ეწოდებათ.",
        options: ["Objects","Citizens","Variables","Types"],
        optionsKa: ["ობიექტები","მოქალაქეები","ცვლადები","ტიპები"],
        correctIndex: 1,
        explanation: "Functions are \"first-class citizens\" — they can be stored, passed, and returned like any value.",
        explanationKa: "ფუნქციები „პირველი კლასის მოქალაქეებია\" — მათი შენახვა, გადაცემა და დაბრუნება შეიძლება."
      },
      {
        id: 'q7_6',
        question: "What is the difference between parameters and arguments?",
        questionKa: "რა განსხვავებაა პარამეტრებსა და არგუმენტებს შორის?",
        options: ["They are the same thing","Parameters are in definition, arguments are actual values passed","Arguments are in definition, parameters are passed","Parameters are for arrow functions only"],
        optionsKa: ["ისინი ერთი და იგივეა","პარამეტრები განსაზღვრებაშია, არგუმენტები გადაცემული მნიშვნელობებია","არგუმენტები განსაზღვრებაშია, პარამეტრები გადაეცემა","პარამეტრები მხოლოდ arrow ფუნქციებისთვისაა"],
        correctIndex: 1,
        explanation: "Parameters are variables listed in function definition; arguments are actual values passed when calling.",
        explanationKa: "პარამეტრები ფუნქციის განსაზღვრებაში ჩამოთვლილი ცვლადებია; არგუმენტები — გამოძახებისას გადაცემული მნიშვნელობები."
      },
      {
        id: 'q7_7',
        question: "What are default parameters?",
        questionKa: "რა არის ნაგულისხმევი პარამეტრები?",
        options: ["Parameters that must always be provided","Parameters with preset values used when no argument is passed","Parameters that cannot be changed","The first parameter in a function"],
        optionsKa: ["პარამეტრები, რომლებიც ყოველთვის უნდა მიეცეს","წინასწარ დაყენებული მნიშვნელობის პარამეტრები, როცა არგუმენტი არ გადაეცემა","პარამეტრები, რომელთა შეცვლა არ შეიძლება","ფუნქციის პირველი პარამეტრი"],
        correctIndex: 1,
        explanation: "Default parameters provide fallback values: function greet(name = \"World\") uses \"World\" if no name is passed.",
        explanationKa: "ნაგულისხმევი პარამეტრები სათადარიგო მნიშვნელობებს იძლევა: function greet(name = \"World\") \"World\"-ს იყენებს თუ არ გადაეცა."
      },
      {
        id: 'q7_8',
        question: "Are function declarations hoisted?",
        questionKa: "ჰოისტ ხდება თუ არა ფუნქციის გამოცხადებები?",
        options: ["No, never","Yes, both declarations and expressions","Yes, but only function declarations, not expressions","Only with let"],
        optionsKa: ["არა, არასოდეს","დიახ, გამოცხადებებიც და გამოსახულებებიც","დიახ, მაგრამ მხოლოდ ფუნქციის გამოცხადებები, არა გამოსახულებები","მხოლოდ let-ით"],
        correctIndex: 2,
        explanation: "Function declarations are hoisted (can be called before declaration), but function expressions are not.",
        explanationKa: "ფუნქციის გამოცხადებები ჰოისტ ხდება (გამოძახება შეიძლება გამოცხადებამდე), მაგრამ გამოსახულებები — არა."
      },
      {
        id: 'q7_9',
        question: "What does a void function return?",
        questionKa: "რას აბრუნებს void ფუნქცია?",
        options: ["null","0","undefined","false"],
        optionsKa: ["null","0","undefined","false"],
        correctIndex: 2,
        explanation: "A function without a return statement (void) implicitly returns undefined.",
        explanationKa: "ფუნქცია return ოპერატორის გარეშე (void) იმპლიციტურად undefined-ს აბრუნებს."
      },
      {
        id: 'q7_10',
        question: "What is function scope?",
        questionKa: "რა არის ფუნქციის სკოუპი?",
        options: ["Variables accessible everywhere","Variables declared inside a function are only accessible within it","Variables shared between functions","The function name"],
        optionsKa: ["ყველგან ხელმისაწვდომი ცვლადები","ფუნქციის შიგნით გამოცხადებული ცვლადები მხოლოდ მის შიგნით არის ხელმისაწვდომი","ფუნქციებს შორის გაზიარებული ცვლადები","ფუნქციის სახელი"],
        correctIndex: 1,
        explanation: "Variables declared inside a function are locally scoped — they cannot be accessed outside the function.",
        explanationKa: "ფუნქციის შიგნით გამოცხადებული ცვლადები ლოკალური სკოუპისაა — ფუნქციის გარეთ მიუწვდომელია."
      }
    ]
  },
  {
    id: 'q8',
    chapterId: 8,
    title: 'Advanced Functions',
    titleKa: 'მოწინავე ფუნქციები',
    questions: [
      {
        id: 'q8_1',
        question: "What is the correct arrow function syntax?",
        questionKa: "რა არის arrow ფუნქციის სწორი სინტაქსი?",
        options: ["(a, b) -> a + b","(a, b) => a + b","function(a, b) => a + b","(a, b) >> a + b"],
        optionsKa: ["(a, b) -> a + b","(a, b) => a + b","function(a, b) => a + b","(a, b) >> a + b"],
        correctIndex: 1,
        explanation: "Arrow functions use the => syntax: (params) => expression.",
        explanationKa: "Arrow ფუნქციები => სინტაქსს იყენებს: (პარამეტრები) => გამოსახულება."
      },
      {
        id: 'q8_2',
        question: "What does map() return?",
        questionKa: "რას აბრუნებს map()?",
        options: ["Modified original array","A new transformed array","A single value","Boolean"],
        optionsKa: ["შეცვლილ ორიგინალ მასივს","ახალ ტრანსფორმირებულ მასივს","ერთ მნიშვნელობას","ბულიანს"],
        correctIndex: 1,
        explanation: "map() creates a new array by applying a function to each element.",
        explanationKa: "map() ქმნის ახალ მასივს, ყოველ ელემენტზე ფუნქციის გამოყენებით."
      },
      {
        id: 'q8_3',
        question: "What does filter() do?",
        questionKa: "რას აკეთებს filter()?",
        options: ["Sorts elements","Returns elements passing a condition","Removes duplicates","Combines arrays"],
        optionsKa: ["ასორტირებს ელემენტებს","აბრუნებს პირობის გამვლელ ელემენტებს","შლის დუბლიკატებს","აერთიანებს მასივებს"],
        correctIndex: 1,
        explanation: "filter() returns a new array with only elements that pass the condition.",
        explanationKa: "filter() აბრუნებს ახალ მასივს მხოლოდ იმ ელემენტებით, რომლებიც პირობას აკმაყოფილებს."
      },
      {
        id: 'q8_4',
        question: "What does reduce() do?",
        questionKa: "რას აკეთებს reduce()?",
        options: ["Reduces array size","Accumulates values into one result","Removes elements","Reverses the array"],
        optionsKa: ["მასივის ზომას ამცირებს","მნიშვნელობებს ერთ შედეგში აგროვებს","ელემენტებს შლის","მასივს აბრუნებს"],
        correctIndex: 1,
        explanation: "reduce() executes a reducer function on each element, resulting in a single output value.",
        explanationKa: "reduce() ყოველ ელემენტზე არედუქტორ ფუნქციას ასრულებს, შედეგად ერთ მნიშვნელობას იძლევა."
      },
      {
        id: 'q8_5',
        question: "What is a callback function?",
        questionKa: "რა არის callback ფუნქცია?",
        options: ["A function that calls itself","A function passed as argument to another function","A function that returns a function","A function without parameters"],
        optionsKa: ["ფუნქცია რომელიც საკუთარ თავს იძახებს","ფუნქცია რომელიც არგუმენტად გადაეცემა სხვა ფუნქციას","ფუნქცია რომელიც ფუნქციას აბრუნებს","ფუნქცია პარამეტრების გარეშე"],
        correctIndex: 1,
        explanation: "A callback is a function passed as an argument to another function, to be called later.",
        explanationKa: "Callback არის ფუნქცია, რომელიც სხვა ფუნქციას არგუმენტად გადაეცემა."
      },
      {
        id: 'q8_6',
        question: "What does arrow function NOT have that regular functions do?",
        questionKa: "რა არ აქვს arrow ფუნქციას, რაც ჩვეულებრივ ფუნქციას აქვს?",
        options: ["Parameters","Return value","Its own \"this\" binding","Access to variables"],
        optionsKa: ["პარამეტრები","დაბრუნების მნიშვნელობა","საკუთარი \"this\" ბაინდინგი","ცვლადებზე წვდომა"],
        correctIndex: 2,
        explanation: "Arrow functions do not have their own \"this\" — they inherit it from the enclosing scope.",
        explanationKa: "Arrow ფუნქციებს საკუთარი \"this\" არ აქვთ — მშობელი სკოუპიდან იღებენ."
      },
      {
        id: 'q8_7',
        question: "What does [1,2,3].find(x => x > 1) return?",
        questionKa: "რას აბრუნებს [1,2,3].find(x => x > 1)?",
        options: ["[2,3]","2","1","true"],
        optionsKa: ["[2,3]","2","1","true"],
        correctIndex: 1,
        explanation: "find() returns the first element that satisfies the condition. 2 is the first number > 1.",
        explanationKa: "find() პირველ ელემენტს აბრუნებს, რომელიც პირობას აკმაყოფილებს. 2 პირველი რიცხვია > 1."
      },
      {
        id: 'q8_8',
        question: "What does [1,2,3].every(x => x > 0) return?",
        questionKa: "რას აბრუნებს [1,2,3].every(x => x > 0)?",
        options: ["true","false","[1,2,3]","3"],
        optionsKa: ["true","false","[1,2,3]","3"],
        correctIndex: 0,
        explanation: "every() returns true if ALL elements pass the test. All elements are > 0, so it returns true.",
        explanationKa: "every() true-ს აბრუნებს თუ ყველა ელემენტი ტესტს გაივლის. ყველა > 0-ია, ამიტომ true."
      },
      {
        id: 'q8_9',
        question: "What does [1,2,3].reduce((sum, x) => sum + x, 0) return?",
        questionKa: "რას აბრუნებს [1,2,3].reduce((sum, x) => sum + x, 0)?",
        options: ["[1,2,3]","0","6","3"],
        optionsKa: ["[1,2,3]","0","6","3"],
        correctIndex: 2,
        explanation: "reduce accumulates: 0+1=1, 1+2=3, 3+3=6. Final result is 6.",
        explanationKa: "reduce აგროვებს: 0+1=1, 1+2=3, 3+3=6. საბოლოო შედეგი 6-ია."
      },
      {
        id: 'q8_10',
        question: "What is method chaining with array methods?",
        questionKa: "რა არის მეთოდების ჯაჭვური გამოძახება მასივის მეთოდებთან?",
        options: ["Using one method per line","Calling multiple methods in sequence: arr.filter().map().reduce()","Assigning methods to variables","Nesting arrays"],
        optionsKa: ["ერთი მეთოდი ხაზზე","მრავალი მეთოდის თანმიმდევრულად გამოძახება: arr.filter().map().reduce()","მეთოდების ცვლადებში მინიჭება","მასივების ჩადგმა"],
        correctIndex: 1,
        explanation: "Method chaining calls multiple methods in sequence, each operating on the result of the previous.",
        explanationKa: "მეთოდების ჯაჭვი მრავალ მეთოდს თანმიმდევრულად იძახებს, თითოეული წინას შედეგზე მუშაობს."
      }
    ]
  },
  {
    id: 'q9',
    chapterId: 9,
    title: 'Objects',
    titleKa: 'ობიექტები',
    questions: [
      {
        id: 'q9_1',
        question: "How do you create an object literal?",
        questionKa: "როგორ ვქმნით ობიექტს ლიტერალით?",
        options: ["new Object[]","{ key: value }","[ key: value ]","Object(key, value)"],
        optionsKa: ["new Object[]","{ key: value }","[ key: value ]","Object(key, value)"],
        correctIndex: 1,
        explanation: "Object literals use curly braces with key-value pairs: { key: value }.",
        explanationKa: "ობიექტის ლიტერალი ფიგურულ ფრჩხილებს იყენებს: { key: value }."
      },
      {
        id: 'q9_2',
        question: "What are the two ways to access object properties?",
        questionKa: "ობიექტის თვისებებზე წვდომის ორი გზა რა არის?",
        options: ["() and []",". and []","-> and .",":: and ."],
        optionsKa: ["() და []",". და []","-> და .",":: და ."],
        correctIndex: 1,
        explanation: "Dot notation (obj.key) and bracket notation (obj[\"key\"]) both access properties.",
        explanationKa: "წერტილით (obj.key) და ფრჩხილებით (obj[\"key\"]) ორივე თვისებებზე წვდომას იძლევა."
      },
      {
        id: 'q9_3',
        question: "What does Object.keys() return?",
        questionKa: "რას აბრუნებს Object.keys()?",
        options: ["Object values","Array of property names","Number of properties","A copy of the object"],
        optionsKa: ["ობიექტის მნიშვნელობებს","თვისებების სახელების მასივს","თვისებების რაოდენობას","ობიექტის ასლს"],
        correctIndex: 1,
        explanation: "Object.keys() returns an array of the object's own enumerable property names.",
        explanationKa: "Object.keys() აბრუნებს ობიექტის თვისებების სახელების მასივს."
      },
      {
        id: 'q9_4',
        question: "What is a method in an object?",
        questionKa: "რა არის მეთოდი ობიექტში?",
        options: ["A nested object","A function stored as a property","A numeric property","An array property"],
        optionsKa: ["ჩადგმული ობიექტი","ფუნქცია შენახული თვისებად","რიცხვითი თვისება","მასივის თვისება"],
        correctIndex: 1,
        explanation: "Methods are functions stored as properties of an object.",
        explanationKa: "მეთოდები არის ფუნქციები, რომლებიც ობიექტის თვისებებად ინახება."
      },
      {
        id: 'q9_5',
        question: "Which loop iterates over object property keys?",
        questionKa: "რომელი ციკლი ობიექტის თვისებების გასაღებებს ივლის?",
        options: ["for","for...of","for...in","while"],
        optionsKa: ["for","for...of","for...in","while"],
        correctIndex: 2,
        explanation: "for...in iterates over all enumerable property keys of an object.",
        explanationKa: "for...in ივლის ობიექტის ყველა ჩამონათვალურ თვისების გასაღებს."
      },
      {
        id: 'q9_6',
        question: "What does Object.values({a:1, b:2}) return?",
        questionKa: "რას აბრუნებს Object.values({a:1, b:2})?",
        options: ["[\"a\",\"b\"]","[1,2]","[[\"a\",1],[\"b\",2]]","{a:1,b:2}"],
        optionsKa: ["[\"a\",\"b\"]","[1,2]","[[\"a\",1],[\"b\",2]]","{a:1,b:2}"],
        correctIndex: 1,
        explanation: "Object.values() returns an array of the object property values.",
        explanationKa: "Object.values() ობიექტის თვისებების მნიშვნელობების მასივს აბრუნებს."
      },
      {
        id: 'q9_7',
        question: "What does Object.entries({x:1}) return?",
        questionKa: "რას აბრუნებს Object.entries({x:1})?",
        options: ["[\"x\"]","[1]","[[\"x\",1]]","{x:1}"],
        optionsKa: ["[\"x\"]","[1]","[[\"x\",1]]","{x:1}"],
        correctIndex: 2,
        explanation: "Object.entries() returns an array of [key, value] pairs.",
        explanationKa: "Object.entries() [გასაღებ, მნიშვნელობა] წყვილების მასივს აბრუნებს."
      },
      {
        id: 'q9_8',
        question: "When should you use bracket notation obj[\"key\"] instead of dot notation obj.key?",
        questionKa: "როდის უნდა გამოიყენოთ ფრჩხილი obj[\"key\"] წერტილის obj.key ნაცვლად?",
        options: ["Always","When the key is stored in a variable","When the key is a number","Never, they are identical"],
        optionsKa: ["ყოველთვის","როცა გასაღები ცვლადში ინახება","როცა გასაღები რიცხვია","არასოდეს, ისინი იდენტურია"],
        correctIndex: 1,
        explanation: "Use bracket notation when the property key is dynamic (stored in a variable) or has special characters.",
        explanationKa: "ფრჩხილი გამოიყენეთ როცა თვისების გასაღები დინამიურია (ცვლადში ინახება) ან სპეციალური სიმბოლოები აქვს."
      },
      {
        id: 'q9_9',
        question: "What does the \"this\" keyword refer to inside an object method?",
        questionKa: "თის (this) საკვანძო სიტყვა რას მიუთითებს ობიექტის მეთოდში?",
        options: ["The global window","The function itself","The object the method belongs to","undefined"],
        optionsKa: ["გლობალურ window-ს","თავად ფუნქციას","ობიექტს, რომელსაც მეთოდი ეკუთვნის","undefined-ს"],
        correctIndex: 2,
        explanation: "Inside an object method, \"this\" refers to the object that owns the method.",
        explanationKa: "ობიექტის მეთოდის შიგნით \"this\" ობიექტზე მიუთითებს, რომელსაც მეთოდი ეკუთვნის."
      },
      {
        id: 'q9_10',
        question: "What does Object.freeze() do?",
        questionKa: "რას აკეთებს Object.freeze()?",
        options: ["Deletes all properties","Prevents modification of existing properties and adding new ones","Makes a deep copy","Converts to array"],
        optionsKa: ["ყველა თვისებას შლის","არსებული თვისებების შეცვლას და ახლის დამატებას კრძალავს","ღრმა ასლს ქმნის","მასივად გარდაქმნის"],
        correctIndex: 1,
        explanation: "Object.freeze() makes an object immutable — you cannot add, remove, or modify properties.",
        explanationKa: "Object.freeze() ობიექტს უცვლელს ხდის — თვისებების დამატება, წაშლა ან შეცვლა არ შეიძლება."
      }
    ]
  },
  {
    id: 'q10',
    chapterId: 10,
    title: 'Date & Time',
    titleKa: 'თარიღი და დრო',
    questions: [
      {
        id: 'q10_1',
        question: "What index does January have in JavaScript Date?",
        questionKa: "რა ინდექსი აქვს იანვარს JavaScript Date-ში?",
        options: ["1","0","12","-1"],
        optionsKa: ["1","0","12","-1"],
        correctIndex: 1,
        explanation: "JavaScript months are zero-indexed: January = 0, December = 11.",
        explanationKa: "JavaScript-ში თვეები 0-იდან იწყება: იანვარი = 0, დეკემბერი = 11."
      },
      {
        id: 'q10_2',
        question: "What does setTimeout() do?",
        questionKa: "რას აკეთებს setTimeout()?",
        options: ["Runs code immediately","Runs code once after a delay","Runs code repeatedly","Stops execution"],
        optionsKa: ["კოდს მაშინვე ასრულებს","კოდს ერთხელ ასრულებს დაყოვნების შემდეგ","კოდს განმეორებით ასრულებს","შესრულებას აჩერებს"],
        correctIndex: 1,
        explanation: "setTimeout(fn, ms) executes the function once after the specified delay.",
        explanationKa: "setTimeout(fn, ms) ფუნქციას ერთხელ ასრულებს მითითებული დაყოვნების შემდეგ."
      },
      {
        id: 'q10_3',
        question: "How do you stop a setInterval timer?",
        questionKa: "როგორ აჩერებთ setInterval ტაიმერს?",
        options: ["stop()","clearTimeout()","clearInterval()","break"],
        optionsKa: ["stop()","clearTimeout()","clearInterval()","break"],
        correctIndex: 2,
        explanation: "clearInterval(id) stops the repeated execution started by setInterval.",
        explanationKa: "clearInterval(id) აჩერებს setInterval-ის განმეორებით შესრულებას."
      },
      {
        id: 'q10_4',
        question: "What does new Date() create?",
        questionKa: "რას ქმნის new Date()?",
        options: ["A string","A number","A Date object with current date/time","An empty date"],
        optionsKa: ["სტრინგს","რიცხვს","Date ობიექტს მიმდინარე თარიღით","ცარიელ თარიღს"],
        correctIndex: 2,
        explanation: "new Date() creates a Date object representing the current date and time.",
        explanationKa: "new Date() ქმნის Date ობიექტს მიმდინარე თარიღითა და დროით."
      },
      {
        id: 'q10_5',
        question: "What is the time unit in setTimeout/setInterval?",
        questionKa: "რა დროის ერთეულია setTimeout/setInterval-ში?",
        options: ["Seconds","Milliseconds","Minutes","Microseconds"],
        optionsKa: ["წამები","მილიწამები","წუთები","მიკროწამები"],
        correctIndex: 1,
        explanation: "Both setTimeout and setInterval accept time in milliseconds (1000ms = 1 second).",
        explanationKa: "ორივე setTimeout და setInterval დროს მილიწამებში იღებს (1000ms = 1 წამი)."
      },
      {
        id: 'q10_6',
        question: "Why is getMonth() confusing for beginners?",
        questionKa: "რატომ აბნევს getMonth() დამწყებებს?",
        options: ["It returns the month name","Months are 0-indexed (Jan=0, Dec=11)","It needs a parameter","It returns a string"],
        optionsKa: ["თვის სახელს აბრუნებს","თვეები 0-ინდექსირებულია (იანვ=0, დეკ=11)","პარამეტრი სჭირდება","სტრინგს აბრუნებს"],
        correctIndex: 1,
        explanation: "getMonth() returns 0-11, not 1-12. January is 0, December is 11.",
        explanationKa: "getMonth() 0-11-ს აბრუნებს, არა 1-12-ს. იანვარი 0-ია, დეკემბერი 11."
      },
      {
        id: 'q10_7',
        question: "How do you stop a setTimeout from executing?",
        questionKa: "როგორ აჩერებთ setTimeout-ის შესრულებას?",
        options: ["clearInterval()","clearTimeout()","stopTimeout()","cancelTimer()"],
        optionsKa: ["clearInterval()","clearTimeout()","stopTimeout()","cancelTimer()"],
        correctIndex: 1,
        explanation: "clearTimeout(timerId) cancels a timeout that was set with setTimeout().",
        explanationKa: "clearTimeout(timerId) setTimeout()-ით დაყენებულ ტაიმაუტს აუქმებს."
      },
      {
        id: 'q10_8',
        question: "What does Date.now() return?",
        questionKa: "რას აბრუნებს Date.now()?",
        options: ["Current date string","Milliseconds since Jan 1, 1970","Current year","A Date object"],
        optionsKa: ["მიმდინარე თარიღის სტრინგი","მილიწამები 1970 წლის 1 იანვრიდან","მიმდინარე წელი","Date ობიექტი"],
        correctIndex: 1,
        explanation: "Date.now() returns the number of milliseconds elapsed since the Unix epoch (Jan 1, 1970).",
        explanationKa: "Date.now() Unix epoch-იდან (1970/1/1) გასულ მილიწამთა რაოდენობას აბრუნებს."
      },
      {
        id: 'q10_9',
        question: "What is the return value of setInterval()?",
        questionKa: "რას აბრუნებს setInterval()?",
        options: ["undefined","A timer ID number","A Promise","The function result"],
        optionsKa: ["undefined","ტაიმერის ID ნომერს","Promise-ს","ფუნქციის შედეგს"],
        correctIndex: 1,
        explanation: "setInterval() returns a numeric timer ID that can be used with clearInterval() to stop it.",
        explanationKa: "setInterval() რიცხვით ტაიმერის ID-ს აბრუნებს, რომელიც clearInterval()-ით შეჩერებისთვის გამოიყენება."
      },
      {
        id: 'q10_10',
        question: "What method converts a Date to a human-readable string?",
        questionKa: "რომელი მეთოდი გარდაქმნის Date-ს ადამიანისთვის წაკითხვად სტრინგად?",
        options: ["toString()","parse()","valueOf()","getTime()"],
        optionsKa: ["toString()","parse()","valueOf()","getTime()"],
        correctIndex: 0,
        explanation: "toString() converts a Date object to a human-readable string representation.",
        explanationKa: "toString() Date ობიექტს ადამიანისთვის წაკითხვად სტრინგად გარდაქმნის."
      }
    ]
  },
  {
    id: 'q11',
    chapterId: 11,
    title: 'Sorting Algorithms',
    titleKa: 'სორტირების ალგორითმები',
    questions: [
      {
        id: 'q11_1',
        question: "What is the time complexity of Bubble Sort?",
        questionKa: "რა არის Bubble Sort-ის დროითი კომპლექსურობა?",
        options: ["O(n)","O(n log n)","O(n²)","O(1)"],
        optionsKa: ["O(n)","O(n log n)","O(n²)","O(1)"],
        correctIndex: 2,
        explanation: "Bubble Sort has O(n²) time complexity in the average and worst case.",
        explanationKa: "Bubble Sort-ს O(n²) დროითი კომპლექსურობა აქვს საშუალო და უარეს შემთხვევაში."
      },
      {
        id: 'q11_2',
        question: "How does Array.sort() sort by default?",
        questionKa: "როგორ ასორტირებს Array.sort() ნაგულისხმევად?",
        options: ["Numerically","By string value","Randomly","By length"],
        optionsKa: ["რიცხვულად","სტრინგის მნიშვნელობით","შემთხვევითად","სიგრძით"],
        correctIndex: 1,
        explanation: "sort() converts elements to strings and sorts lexicographically by default.",
        explanationKa: "sort() ელემენტებს სტრინგებად გარდაქმნის და ლექსიკოგრაფიულად ასორტირებს."
      },
      {
        id: 'q11_3',
        question: "How to sort numbers correctly with sort()?",
        questionKa: "როგორ ვასორტირებთ რიცხვებს სწორად sort()-ით?",
        options: ["sort()","sort(numeric)","sort((a, b) => a - b)","sort(Number)"],
        optionsKa: ["sort()","sort(numeric)","sort((a, b) => a - b)","sort(Number)"],
        correctIndex: 2,
        explanation: "A custom comparator (a, b) => a - b sorts numbers in ascending order.",
        explanationKa: "პერსონალური კომპარატორი (a, b) => a - b რიცხვებს ზრდადობით ასორტირებს."
      },
      {
        id: 'q11_4',
        question: "Does sort() modify the original array?",
        questionKa: "ცვლის თუ არა sort() ორიგინალ მასივს?",
        options: ["No, returns new array","Yes, it mutates in place","Only with comparator","Only for strings"],
        optionsKa: ["არა, ახალს აბრუნებს","დიახ, ადგილზე ცვლის","მხოლოდ კომპარატორით","მხოლოდ სტრინგებისთვის"],
        correctIndex: 1,
        explanation: "sort() modifies the original array in place (it mutates).",
        explanationKa: "sort() ორიგინალ მასივს ადგილზე ცვლის (მუტაციაა)."
      },
      {
        id: 'q11_5',
        question: "What does Bubble Sort do in each pass?",
        questionKa: "რას აკეთებს Bubble Sort ყოველ გავლაზე?",
        options: ["Finds minimum element","Swaps adjacent elements if in wrong order","Splits array in half","Inserts elements in position"],
        optionsKa: ["მინიმალურ ელემენტს პოულობს","მოსაზღვრე ელემენტებს ცვლის არასწორი რიგის შემთხვევაში","მასივს ორად ყოფს","ელემენტებს პოზიციაზე ჩასვამს"],
        correctIndex: 1,
        explanation: "Bubble Sort compares and swaps adjacent elements, \"bubbling\" largest elements to the end.",
        explanationKa: "Bubble Sort ადარებს და ცვლის მოსაზღვრე ელემენტებს, უდიდესს ბოლოში „ატივტივებს\"."
      },
      {
        id: 'q11_6',
        question: "What is the time complexity of Bubble Sort?",
        questionKa: "რა არის Bubble Sort-ის დროითი სირთულე?",
        options: ["O(n)","O(n log n)","O(n²)","O(1)"],
        optionsKa: ["O(n)","O(n log n)","O(n²)","O(1)"],
        correctIndex: 2,
        explanation: "Bubble Sort has O(n²) time complexity due to nested loops comparing each pair.",
        explanationKa: "Bubble Sort-ს O(n²) დროითი სირთულე აქვს ჩადგმული ციკლების გამო."
      },
      {
        id: 'q11_7',
        question: "What does [10,2,1].sort() return?",
        questionKa: "რას აბრუნებს [10,2,1].sort()?",
        options: ["[1,2,10]","[10,2,1]","[1,10,2]","[2,1,10]"],
        optionsKa: ["[1,2,10]","[10,2,1]","[1,10,2]","[2,1,10]"],
        correctIndex: 2,
        explanation: "sort() converts to strings by default, so \"1\" < \"10\" < \"2\" alphabetically.",
        explanationKa: "sort() ნაგულისხმევად სტრინგებად გარდაქმნის, ამიტომ \"1\" < \"10\" < \"2\" ანბანურად."
      },
      {
        id: 'q11_8',
        question: "Which sorting method is built into modern JS engines?",
        questionKa: "რომელი სორტირების მეთოდი არის ჩაშენებული თანამედროვე JS ძრავებში?",
        options: ["Bubble Sort","Quick Sort","Timsort","Merge Sort"],
        optionsKa: ["Bubble Sort","Quick Sort","Timsort","Merge Sort"],
        correctIndex: 2,
        explanation: "Modern JS engines (V8, SpiderMonkey) use Timsort, a hybrid of merge sort and insertion sort.",
        explanationKa: "თანამედროვე JS ძრავები (V8, SpiderMonkey) Timsort-ს იყენებენ — merge sort-ისა და insertion sort-ის ჰიბრიდი."
      },
      {
        id: 'q11_9',
        question: "Does sort() mutate the original array?",
        questionKa: "ცვლის თუ არა sort() ორიგინალ მასივს?",
        options: ["No, it returns a new array","Yes, it modifies in place","Only with a comparator","Only for numbers"],
        optionsKa: ["არა, ახალ მასივს აბრუნებს","დიახ, ადგილობრივად ცვლის","მხოლოდ შემდარებლით","მხოლოდ რიცხვებისთვის"],
        correctIndex: 1,
        explanation: "sort() modifies the original array in place. Use toSorted() (ES2023) for a non-mutating version.",
        explanationKa: "sort() ორიგინალ მასივს ადგილობრივად ცვლის. toSorted() (ES2023) არამუტაციური ვერსიაა."
      },
      {
        id: 'q11_10',
        question: "How do you sort numbers in descending order?",
        questionKa: "როგორ ალაგებთ რიცხვებს კლებადობით?",
        options: ["arr.sort()","arr.sort((a,b) => b - a)","arr.sort((a,b) => a - b)","arr.reverse().sort()"],
        optionsKa: ["arr.sort()","arr.sort((a,b) => b - a)","arr.sort((a,b) => a - b)","arr.reverse().sort()"],
        correctIndex: 1,
        explanation: "arr.sort((a,b) => b - a) sorts numbers in descending order by reversing the comparison.",
        explanationKa: "arr.sort((a,b) => b - a) რიცხვებს კლებადობით ალაგებს შედარების შებრუნებით."
      }
    ]
  },
  {
    id: 'q12',
    chapterId: 12,
    title: 'Introduction to DOM',
    titleKa: 'DOM-ის შესავალი',
    questions: [
      {
        id: 'q12_1',
        question: "What does DOM stand for?",
        questionKa: "რას ნიშნავს DOM?",
        options: ["Data Object Model","Document Object Model","Document Oriented Method","Dynamic Object Mapping"],
        optionsKa: ["Data Object Model","Document Object Model","Document Oriented Method","Dynamic Object Mapping"],
        correctIndex: 1,
        explanation: "DOM stands for Document Object Model — a tree representation of an HTML document.",
        explanationKa: "DOM ნიშნავს Document Object Model — HTML დოკუმენტის ხისმაგვარი წარმოდგენა."
      },
      {
        id: 'q12_2',
        question: "Which method selects an element by CSS selector?",
        questionKa: "რომელი მეთოდი ირჩევს ელემენტს CSS სელექტორით?",
        options: ["getElementById()","querySelector()","getElementsByName()","selectElement()"],
        optionsKa: ["getElementById()","querySelector()","getElementsByName()","selectElement()"],
        correctIndex: 1,
        explanation: "querySelector() selects the first element matching a CSS selector.",
        explanationKa: "querySelector() ირჩევს პირველ ელემენტს, რომელიც CSS სელექტორს შეესაბამება."
      },
      {
        id: 'q12_3',
        question: "How do you attach a click event to a button?",
        questionKa: "როგორ მივაბამთ ღილაკს click მოვლენას?",
        options: ["btn.click(handler)","btn.addEventListener(\"click\", handler)","btn.onclick = handler()","btn.setEvent(\"click\")"],
        optionsKa: ["btn.click(handler)","btn.addEventListener(\"click\", handler)","btn.onclick = handler()","btn.setEvent(\"click\")"],
        correctIndex: 1,
        explanation: "addEventListener(\"click\", handler) is the standard way to attach events.",
        explanationKa: "addEventListener(\"click\", handler) არის მოვლენების მიბმის სტანდარტული გზა."
      },
      {
        id: 'q12_4',
        question: "What is the difference between textContent and innerHTML?",
        questionKa: "რა განსხვავებაა textContent-სა და innerHTML-ს შორის?",
        options: ["No difference","textContent is plain text, innerHTML parses HTML","innerHTML is plain text, textContent parses HTML","textContent is faster only"],
        optionsKa: ["განსხვავება არ არის","textContent ტექსტია, innerHTML HTML-ს პარსავს","innerHTML ტექსტია, textContent HTML-ს პარსავს","textContent მხოლოდ უფრო სწრაფია"],
        correctIndex: 1,
        explanation: "textContent sets/gets plain text, while innerHTML sets/gets HTML markup.",
        explanationKa: "textContent ტექსტს ადგენს/იღებს, innerHTML კი HTML მარკაპს."
      },
      {
        id: 'q12_5',
        question: "Who created the DOM standard?",
        questionKa: "ვინ შექმნა DOM სტანდარტი?",
        options: ["Brendan Eich","W3C","Google","Mozilla"],
        optionsKa: ["ბრენდან აიკი","W3C","Google","Mozilla"],
        correctIndex: 1,
        explanation: "The DOM is a W3C standard, separate from JavaScript itself.",
        explanationKa: "DOM არის W3C სტანდარტი, JavaScript-ისგან განცალკევებული."
      },
      {
        id: 'q12_6',
        question: "What is the difference between textContent and innerHTML?",
        questionKa: "რა განსხვავებაა textContent-სა და innerHTML-ს შორის?",
        options: ["No difference","textContent returns only text, innerHTML returns HTML markup too","innerHTML is faster","textContent can set HTML tags"],
        optionsKa: ["განსხვავება არ არის","textContent მხოლოდ ტექსტს აბრუნებს, innerHTML HTML მარქაფსაც","innerHTML უფრო სწრაფია","textContent HTML ტეგების დაყენება შეუძლია"],
        correctIndex: 1,
        explanation: "textContent gets/sets only text (strips HTML), while innerHTML preserves HTML tags.",
        explanationKa: "textContent მხოლოდ ტექსტს იღებს/აყენებს (HTML-ს შლის), ხოლო innerHTML HTML ტეგებს ინახავს."
      },
      {
        id: 'q12_7',
        question: "What does querySelectorAll() return?",
        questionKa: "რას აბრუნებს querySelectorAll()?",
        options: ["A single element","An array","A NodeList","A string"],
        optionsKa: ["ერთ ელემენტს","მასივს","NodeList-ს","სტრინგს"],
        correctIndex: 2,
        explanation: "querySelectorAll() returns a NodeList of all elements matching the CSS selector.",
        explanationKa: "querySelectorAll() CSS სელექტორთან თანხვედრი ყველა ელემენტის NodeList-ს აბრუნებს."
      },
      {
        id: 'q12_8',
        question: "What does event.preventDefault() do?",
        questionKa: "რას აკეთებს event.preventDefault()?",
        options: ["Stops event bubbling","Prevents the default browser action","Removes the event listener","Reloads the page"],
        optionsKa: ["ივენთ ბაბლინგს აჩერებს","ბრაუზერის ნაგულისხმევ მოქმედებას კრძალავს","ივენთ მსმენელს შლის","გვერდს გადატვირთს"],
        correctIndex: 1,
        explanation: "preventDefault() stops the browser default action, like form submission or link navigation.",
        explanationKa: "preventDefault() ბრაუზერის ნაგულისხმევ მოქმედებას აჩერებს, მაგ. ფორმის submit-ს ან ბმულზე გადასვლას."
      },
      {
        id: 'q12_9',
        question: "Which method adds an element to the DOM?",
        questionKa: "რომელი მეთოდი ამატებს ელემენტს DOM-ში?",
        options: ["createElement()","appendChild()","querySelector()","addEventListener()"],
        optionsKa: ["createElement()","appendChild()","querySelector()","addEventListener()"],
        correctIndex: 1,
        explanation: "appendChild() adds a child element to a parent node in the DOM.",
        explanationKa: "appendChild() მშობელ ნოდს შვილი ელემენტს ამატებს DOM-ში."
      },
      {
        id: 'q12_10',
        question: "What does event.target refer to?",
        questionKa: "რას მიუთითებს event.target?",
        options: ["The parent element","The element that triggered the event","The document","The window"],
        optionsKa: ["მშობელ ელემენტს","ელემენტს, რომელმაც ივენთი გამოიწვია","დოკუმენტს","ფანჯარას"],
        correctIndex: 1,
        explanation: "event.target refers to the actual element that was clicked or triggered the event.",
        explanationKa: "event.target მიუთითებს ელემენტზე, რომელზეც მართლა მოხდა დაჭერა ან ივენთის გამოწვევა."
      }
    ]
  },
  {
    id: 'q13',
    chapterId: 13,
    title: 'DOM classList',
    titleKa: 'DOM classList',
    questions: [
      {
        id: 'q13_1',
        question: "What does classList.toggle() do?",
        questionKa: "რას აკეთებს classList.toggle()?",
        options: ["Always adds class","Always removes class","Adds if missing, removes if present","Checks if class exists"],
        optionsKa: ["ყოველთვის ამატებს კლასს","ყოველთვის შლის კლასს","ამატებს თუ არ აქვს, შლის თუ აქვს","ამოწმებს კლასის არსებობას"],
        correctIndex: 2,
        explanation: "toggle() adds the class if it is not present, removes it if it is.",
        explanationKa: "toggle() ამატებს კლასს თუ არ არსებობს, შლის თუ უკვე აქვს."
      },
      {
        id: 'q13_2',
        question: "Which method checks if an element has a class?",
        questionKa: "რომელი მეთოდი ამოწმებს ელემენტს კლასის არსებობას?",
        options: ["classList.has()","classList.contains()","classList.check()","classList.includes()"],
        optionsKa: ["classList.has()","classList.contains()","classList.check()","classList.includes()"],
        correctIndex: 1,
        explanation: "classList.contains(\"className\") returns true if the element has that class.",
        explanationKa: "classList.contains(\"className\") true-ს აბრუნებს, თუ ელემენტს ეს კლასი აქვს."
      },
      {
        id: 'q13_3',
        question: "Why is classList better than className?",
        questionKa: "რატომ არის classList className-ზე უკეთესი?",
        options: ["It is faster","It manages multiple classes safely","It supports animations","It is newer only"],
        optionsKa: ["უფრო სწრაფია","უსაფრთხოდ მართავს რამდენიმე კლასს","ანიმაციებს უჭერს მხარს","მხოლოდ უფრო ახალია"],
        correctIndex: 1,
        explanation: "classList provides add/remove/toggle methods that safely manage multiple classes without string manipulation.",
        explanationKa: "classList add/remove/toggle მეთოდებს იძლევა, რომლებიც უსაფრთხოდ მართავს კლასებს."
      },
      {
        id: 'q13_4',
        question: "What is a common use of classList.toggle()?",
        questionKa: "classList.toggle()-ის გავრცელებული გამოყენება რა არის?",
        options: ["Sorting data","Dark/light mode switch","API calls","Array manipulation"],
        optionsKa: ["მონაცემთა სორტირება","მუქი/ნათელი მოდის გადართვა","API ქოლები","მასივის მანიპულაცია"],
        correctIndex: 1,
        explanation: "classList.toggle() is commonly used for theme switching, navbar toggles, and accordions.",
        explanationKa: "classList.toggle() ხშირად გამოიყენება თემის გადართვისთვის, ნავბარისა და აკორდიონებისთვის."
      },
      {
        id: 'q13_5',
        question: "How do you add a CSS class to an element?",
        questionKa: "როგორ ვამატებთ CSS კლასს ელემენტს?",
        options: ["el.class = \"name\"","el.classList.add(\"name\")","el.addStyle(\"name\")","el.css(\"name\")"],
        optionsKa: ["el.class = \"name\"","el.classList.add(\"name\")","el.addStyle(\"name\")","el.css(\"name\")"],
        correctIndex: 1,
        explanation: "classList.add(\"className\") adds the specified class to the element.",
        explanationKa: "classList.add(\"className\") მითითებულ კლასს ამატებს ელემენტს."
      },
      {
        id: 'q13_6',
        question: "What does classList.toggle(\"active\") do if active class already exists?",
        questionKa: "რას აკეთებს classList.toggle(\"active\") თუ active კლასი უკვე არსებობს?",
        options: ["Adds it again","Removes it","Does nothing","Throws error"],
        optionsKa: ["ხელახლა ამატებს","შლის","არაფერს აკეთებს","შეცდომას ისვრის"],
        correctIndex: 1,
        explanation: "toggle() removes the class if it exists, adds it if it does not.",
        explanationKa: "toggle() კლასს შლის თუ არსებობს, ამატებს თუ არ არსებობს."
      },
      {
        id: 'q13_7',
        question: "How do you check if an element has a specific class?",
        questionKa: "როგორ ამოწმებთ ელემენტს აქვს თუ არა კონკრეტული კლასი?",
        options: ["element.hasClass(\"name\")","element.classList.contains(\"name\")","element.className == \"name\"","element.class(\"name\")"],
        optionsKa: ["element.hasClass(\"name\")","element.classList.contains(\"name\")","element.className == \"name\"","element.class(\"name\")"],
        correctIndex: 1,
        explanation: "classList.contains(\"name\") returns true if the element has that class.",
        explanationKa: "classList.contains(\"name\") true-ს აბრუნებს თუ ელემენტს ეს კლასი აქვს."
      },
      {
        id: 'q13_8',
        question: "What is the advantage of classList over className?",
        questionKa: "რა უპირატესობა აქვს classList-ს className-ზე?",
        options: ["classList is faster","classList allows adding/removing individual classes without affecting others","className cannot read classes","classList works only in modern browsers"],
        optionsKa: ["classList უფრო სწრაფია","classList ინდივიდუალური კლასების დამატება/წაშლას იძლევა სხვებზე ზემოქმედების გარეშე","className კლასების წაკითხვა არ შეუძლია","classList მხოლოდ თანამედროვე ბრაუზერებში მუშაობს"],
        correctIndex: 1,
        explanation: "classList provides methods to manage individual classes without overwriting the entire class string.",
        explanationKa: "classList ინდივიდუალური კლასების მართვის მეთოდებს იძლევა მთელი კლასის სტრინგის გადაწერის გარეშე."
      },
      {
        id: 'q13_9',
        question: "What does toggle(\"dark\", true) do?",
        questionKa: "რას აკეთებს toggle(\"dark\", true)?",
        options: ["Toggles as normal","Forces adding the class","Forces removing the class","Throws error"],
        optionsKa: ["ჩვეულებრივად გადართავს","იძულებით ამატებს კლასს","იძულებით შლის კლასს","შეცდომას ისვრის"],
        correctIndex: 1,
        explanation: "The second boolean parameter forces: true always adds, false always removes.",
        explanationKa: "მეორე boolean პარამეტრი იძულებით: true ყოველთვის ამატებს, false ყოველთვის შლის."
      },
      {
        id: 'q13_10',
        question: "How can you dynamically change a CSS custom property?",
        questionKa: "როგორ შეცვლით CSS custom property-ს დინამიურად?",
        options: ["element.style.setProperty(\"--color\", \"red\")","element.css(\"--color\", \"red\")","element.setStyle(\"--color\", \"red\")","document.setVariable(\"--color\", \"red\")"],
        optionsKa: ["element.style.setProperty(\"--color\", \"red\")","element.css(\"--color\", \"red\")","element.setStyle(\"--color\", \"red\")","document.setVariable(\"--color\", \"red\")"],
        correctIndex: 0,
        explanation: "style.setProperty() can set CSS custom properties (variables) dynamically on elements.",
        explanationKa: "style.setProperty() ელემენტებზე CSS custom properties-ს (ცვლადებს) დინამიურად აყენებს."
      }
    ]
  },
  {
    id: 'q14',
    chapterId: 14,
    title: 'Interactive DOM',
    titleKa: 'ინტერაქტიული DOM',
    questions: [
      {
        id: 'q14_1',
        question: "Which method creates a new HTML element?",
        questionKa: "რომელი მეთოდი ქმნის ახალ HTML ელემენტს?",
        options: ["document.newElement()","document.createElement()","document.addElement()","new HTMLElement()"],
        optionsKa: ["document.newElement()","document.createElement()","document.addElement()","new HTMLElement()"],
        correctIndex: 1,
        explanation: "document.createElement(\"tag\") creates a new DOM element.",
        explanationKa: "document.createElement(\"tag\") ახალ DOM ელემენტს ქმნის."
      },
      {
        id: 'q14_2',
        question: "How do you add a created element to the page?",
        questionKa: "როგორ ვამატებთ შექმნილ ელემენტს გვერდზე?",
        options: ["element.show()","parent.appendChild(element)","document.display(element)","element.attach()"],
        optionsKa: ["element.show()","parent.appendChild(element)","document.display(element)","element.attach()"],
        correctIndex: 1,
        explanation: "appendChild() adds a child element to a parent node in the DOM.",
        explanationKa: "appendChild() შვილ ელემენტს ამატებს მშობელ კვანძს DOM-ში."
      },
      {
        id: 'q14_3',
        question: "What is SweetAlert2?",
        questionKa: "რა არის SweetAlert2?",
        options: ["A CSS framework","A library for styled dialog boxes","A JavaScript engine","A testing tool"],
        optionsKa: ["CSS ფრეიმვორკი","სტილიზებული დიალოგის ბიბლიოთეკა","JavaScript ძრავა","ტესტირების ინსტრუმენტი"],
        correctIndex: 1,
        explanation: "SweetAlert2 replaces native browser dialogs with beautiful, customizable popups.",
        explanationKa: "SweetAlert2 ბრაუზერის ნატიურ დიალოგებს ლამაზი, კონფიგურირებადი პოპაპებით ცვლის."
      },
      {
        id: 'q14_4',
        question: "What is event delegation?",
        questionKa: "რა არის event delegation?",
        options: ["Attaching events to each child","Attaching event to parent and using bubbling","Removing all events","Stopping event propagation"],
        optionsKa: ["ყოველ შვილზე მოვლენის მიმაგრება","მშობელზე მოვლენის მიმაგრება და bubbling-ის გამოყენება","ყველა მოვლენის წაშლა","მოვლენის გავრცელების შეჩერება"],
        correctIndex: 1,
        explanation: "Event delegation attaches a single listener to a parent to handle events on children.",
        explanationKa: "Event delegation მშობელზე ერთ მსმენელს მიამაგრებს შვილების მოვლენების დასამუშავებლად."
      },
      {
        id: 'q14_5',
        question: "What can power a game loop in the browser?",
        questionKa: "რამ შეიძლება უზრუნველყოს game loop ბრაუზერში?",
        options: ["for loop","setInterval / requestAnimationFrame","while(true)","setTimeout only once"],
        optionsKa: ["for ციკლი","setInterval / requestAnimationFrame","while(true)","setTimeout მხოლოდ ერთხელ"],
        correctIndex: 1,
        explanation: "setInterval or requestAnimationFrame provide repeated execution for game loops.",
        explanationKa: "setInterval ან requestAnimationFrame განმეორებით შესრულებას უზრუნველყოფს."
      },
      {
        id: 'q14_6',
        question: "What is event delegation?",
        questionKa: "რა არის ივენთ დელეგაცია?",
        options: ["Attaching events to every element","Attaching one event listener to a parent to handle child events","Removing all event listeners","Using setTimeout with events"],
        optionsKa: ["ყოველ ელემენტზე ივენთის მიმაგრება","ერთი ივენთ მსმენელის მშობელზე მიმაგრება შვილი ელემენტების ივენთების დასამუშავებლად","ყველა ივენთ მსმენელის წაშლა","setTimeout-ის ივენთებთან გამოყენება"],
        correctIndex: 1,
        explanation: "Event delegation attaches one listener to a parent element, using event.target to identify which child was clicked.",
        explanationKa: "ივენთ დელეგაცია ერთ მსმენელს მშობელ ელემენტზე ამაგრებს, event.target-ით ადგენს რომელ შვილზე მოხდა დაჭერა."
      },
      {
        id: 'q14_7',
        question: "What does document.createElement(\"div\") do?",
        questionKa: "რას აკეთებს document.createElement(\"div\")?",
        options: ["Selects an existing div","Creates a new div element in memory","Appends a div to the page","Removes a div from the page"],
        optionsKa: ["არსებულ div-ს ირჩევს","ახალ div ელემენტს ქმნის მეხსიერებაში","გვერდზე div-ს ამატებს","გვერდიდან div-ს შლის"],
        correctIndex: 1,
        explanation: "createElement() creates a new element in memory — it still needs to be appended to the DOM.",
        explanationKa: "createElement() ახალ ელემენტს მეხსიერებაში ქმნის — ჯერ კიდევ DOM-ში მიმაგრება სჭირდება."
      },
      {
        id: 'q14_8',
        question: "What is requestAnimationFrame used for?",
        questionKa: "რისთვის გამოიყენება requestAnimationFrame?",
        options: ["Making API requests","Creating smooth 60fps animations","Downloading images","Sorting arrays"],
        optionsKa: ["API მოთხოვნების გაკეთება","გლუვი 60fps ანიმაციების შექმნა","სურათების ჩამოტვირთვა","მასივების სორტირება"],
        correctIndex: 1,
        explanation: "requestAnimationFrame() syncs with the browser refresh rate for smooth, efficient animations.",
        explanationKa: "requestAnimationFrame() ბრაუზერის განახლების სიხშირეს სინქრონიზდება გლუვი, ეფექტური ანიმაციებისთვის."
      },
      {
        id: 'q14_9',
        question: "What does the dataset property access?",
        questionKa: "რაზე აქვს წვდომა dataset თვისებას?",
        options: ["CSS classes","Custom data-* attributes","Event listeners","Local storage"],
        optionsKa: ["CSS კლასებზე","Custom data-* ატრიბუტებზე","ივენთ მსმენელებზე","ლოკალურ storage-ზე"],
        correctIndex: 1,
        explanation: "The dataset property provides read/write access to custom data-* attributes on elements.",
        explanationKa: "dataset თვისება ელემენტებზე custom data-* ატრიბუტების წაკითხვა/ჩაწერის წვდომას იძლევა."
      },
      {
        id: 'q14_10',
        question: "Which SweetAlert2 method shows a confirmation dialog?",
        questionKa: "SweetAlert2-ის რომელი მეთოდი აჩვენებს დადასტურების დიალოგს?",
        options: ["Swal.alert()","Swal.fire() with confirmButton","Swal.confirm()","Swal.show()"],
        optionsKa: ["Swal.alert()","Swal.fire() confirmButton-ით","Swal.confirm()","Swal.show()"],
        correctIndex: 1,
        explanation: "Swal.fire() with showCancelButton and confirmButtonText options creates a confirmation dialog.",
        explanationKa: "Swal.fire() showCancelButton და confirmButtonText ოფციებით დადასტურების დიალოგს ქმნის."
      }
    ]
  },
  {
    id: 'q15',
    chapterId: 15,
    title: 'Input & File Handling',
    titleKa: 'Input და ფაილების მუშაობა',
    questions: [
      {
        id: 'q15_1',
        question: "Which event fires when a key is released?",
        questionKa: "რომელი მოვლენა სრულდება ღილაკის გაშვებისას?",
        options: ["keydown","keypress","keyup","keyrelease"],
        optionsKa: ["keydown","keypress","keyup","keyrelease"],
        correctIndex: 2,
        explanation: "keyup fires when a keyboard key is released.",
        explanationKa: "keyup სრულდება, როცა კლავიატურის ღილაკი უშვებენ."
      },
      {
        id: 'q15_2',
        question: "What API reads file contents in the browser?",
        questionKa: "რომელი API კითხულობს ფაილის შემცველობას ბრაუზერში?",
        options: ["File API","FileReader","FileSystem","ReadFile"],
        optionsKa: ["File API","FileReader","FileSystem","ReadFile"],
        correctIndex: 1,
        explanation: "FileReader reads file contents as text, data URL, or array buffer.",
        explanationKa: "FileReader ფაილის შემცველობას კითხულობს ტექსტად, data URL-ად ან array buffer-ად."
      },
      {
        id: 'q15_3',
        question: "What does the regex test() method return?",
        questionKa: "რას აბრუნებს regex-ის test() მეთოდი?",
        options: ["The match","An array","true or false","Index of match"],
        optionsKa: ["შესაბამისობას","მასივს","true ან false","შესაბამისობის ინდექსს"],
        correctIndex: 2,
        explanation: "test() returns true if the pattern matches the string, false otherwise.",
        explanationKa: "test() true-ს აბრუნებს თუ პატერნი სტრინგს შეესაბამება, წინააღმდეგ შემთხვევაში false-ს."
      },
      {
        id: 'q15_4',
        question: "What does Base64 encoding do?",
        questionKa: "რას აკეთებს Base64 კოდირება?",
        options: ["Encrypts data","Converts binary to ASCII text","Compresses files","Hashes data"],
        optionsKa: ["მონაცემებს შიფრავს","ბინარულს ASCII ტექსტად გარდაქმნის","ფაილებს კომპრესირებს","მონაცემებს ჰეშირებს"],
        correctIndex: 1,
        explanation: "Base64 encodes binary data as an ASCII string for safe text-based transmission.",
        explanationKa: "Base64 ბინარულ მონაცემებს ASCII სტრინგად კოდირებს უსაფრთხო ტრანსფერისთვის."
      },
      {
        id: 'q15_5',
        question: "Which regex pattern matches an email address?",
        questionKa: "რომელი regex პატერნი ემთხვევა ელ-ფოსტას?",
        options: ["/email/","/[a-z]@[a-z]/","/\\S+@\\S+\\.\\S+/","/[0-9]+/"],
        optionsKa: ["/email/","/[a-z]@[a-z]/","/\\S+@\\S+\\.\\S+/","/[0-9]+/"],
        correctIndex: 2,
        explanation: "The pattern /\\S+@\\S+\\.\\S+/ is a basic email validation regex.",
        explanationKa: "/\\S+@\\S+\\.\\S+/ ელ-ფოსტის ვალიდაციის ბაზისური regex პატერნია."
      },
      {
        id: 'q15_6',
        question: "Which event fires on every keystroke in an input field?",
        questionKa: "რომელი ივენთი ირთვება ყოველ კლავიშზე input ველში?",
        options: ["click","change","input","submit"],
        optionsKa: ["click","change","input","submit"],
        correctIndex: 2,
        explanation: "The \"input\" event fires on every value change, including typing, pasting, and deleting.",
        explanationKa: "\"input\" ივენთი ყოველი მნიშვნელობის ცვლილებისას ირთვება — აკრეფა, ჩასმა, წაშლა."
      },
      {
        id: 'q15_7',
        question: "What does FileReader.readAsDataURL() produce?",
        questionKa: "რას ქმნის FileReader.readAsDataURL()?",
        options: ["A file path","A base64-encoded data URL","A Blob","A Buffer"],
        optionsKa: ["ფაილის გზას","Base64-კოდირებულ data URL-ს","Blob-ს","Buffer-ს"],
        correctIndex: 1,
        explanation: "readAsDataURL() produces a base64-encoded data URL that can be used as img src for preview.",
        explanationKa: "readAsDataURL() base64-კოდირებულ data URL-ს ქმნის, რომელიც img src-ად შეიძლება გამოიყენოთ."
      },
      {
        id: 'q15_8',
        question: "What does the regex flag \"g\" mean?",
        questionKa: "რას ნიშნავს regex-ის \"g\" ფლაგი?",
        options: ["Group","Global (find all matches)","Greedy","Generate"],
        optionsKa: ["ჯგუფი","გლობალური (ყველა თანხვედრის პოვნა)","ხარბი","გენერირება"],
        correctIndex: 1,
        explanation: "The \"g\" flag makes the regex search for all matches, not just the first one.",
        explanationKa: "\"g\" ფლაგი regex-ს ყველა თანხვედრის ძიებას უბრძანებს, არა მხოლოდ პირველის."
      },
      {
        id: 'q15_9',
        question: "Which regex method returns true/false?",
        questionKa: "Regex-ის რომელი მეთოდი აბრუნებს true/false-ს?",
        options: ["match()","test()","replace()","search()"],
        optionsKa: ["match()","test()","replace()","search()"],
        correctIndex: 1,
        explanation: "test() returns true if the pattern matches the string, false otherwise.",
        explanationKa: "test() true-ს აბრუნებს თუ შაბლონი სტრინგს ემთხვევა, false-ს — თუ არა."
      },
      {
        id: 'q15_10',
        question: "What does /^\\d{3}-\\d{4}$/ validate?",
        questionKa: "რას ამოწმებს /^\\d{3}-\\d{4}$/?",
        options: ["Email address","A pattern like 123-4567","IP address","URL"],
        optionsKa: ["ელ-ფოსტის მისამართს","შაბლონს, როგორიცაა 123-4567","IP მისამართს","URL-ს"],
        correctIndex: 1,
        explanation: "This regex matches exactly 3 digits, a dash, and 4 digits (like a phone number format).",
        explanationKa: "ეს regex ზუსტად 3 ციფრს, ტირეს და 4 ციფრს ემთხვევა (ტელეფონის ფორმატი)."
      }
    ]
  },
  {
    id: 'q16',
    chapterId: 16,
    title: 'API & Network',
    titleKa: 'API და ქსელი',
    questions: [
      {
        id: 'q16_1',
        question: "What does JSON stand for?",
        questionKa: "რას ნიშნავს JSON?",
        options: ["Java Standard Object Notation","JavaScript Object Notation","JavaScript Online Network","JSON Script Object Naming"],
        optionsKa: ["Java Standard Object Notation","JavaScript Object Notation","JavaScript Online Network","JSON Script Object Naming"],
        correctIndex: 1,
        explanation: "JSON stands for JavaScript Object Notation.",
        explanationKa: "JSON ნიშნავს JavaScript Object Notation-ს."
      },
      {
        id: 'q16_2',
        question: "What does JSON.parse() do?",
        questionKa: "რას აკეთებს JSON.parse()?",
        options: ["Object to string","String to object","String to number","Object to array"],
        optionsKa: ["ობიექტს სტრინგად","სტრინგს ობიექტად","სტრინგს რიცხვად","ობიექტს მასივად"],
        correctIndex: 1,
        explanation: "JSON.parse() converts a JSON string into a JavaScript object.",
        explanationKa: "JSON.parse() JSON სტრინგს JavaScript ობიექტად გარდაქმნის."
      },
      {
        id: 'q16_3',
        question: "What does fetch() return?",
        questionKa: "რას აბრუნებს fetch()?",
        options: ["Data directly","A Promise","An array","An error"],
        optionsKa: ["პირდაპირ მონაცემებს","Promise-ს","მასივს","შეცდომას"],
        correctIndex: 1,
        explanation: "fetch() returns a Promise that resolves to a Response object.",
        explanationKa: "fetch() Promise-ს აბრუნებს, რომელიც Response ობიექტით რეზოლვდება."
      },
      {
        id: 'q16_4',
        question: "Which HTTP method is used to create new data?",
        questionKa: "რომელი HTTP მეთოდი გამოიყენება ახალი მონაცემის შესაქმნელად?",
        options: ["GET","POST","DELETE","PATCH"],
        optionsKa: ["GET","POST","DELETE","PATCH"],
        correctIndex: 1,
        explanation: "POST is the HTTP method used to create new resources on the server.",
        explanationKa: "POST არის HTTP მეთოდი, რომელიც სერვერზე ახალი რესურსის შექმნას ემსახურება."
      },
      {
        id: 'q16_5',
        question: "How do you read JSON from a fetch response?",
        questionKa: "როგორ წავიკითხოთ JSON fetch პასუხიდან?",
        options: ["response.data","response.json()","response.text()","response.parse()"],
        optionsKa: ["response.data","response.json()","response.text()","response.parse()"],
        correctIndex: 1,
        explanation: "response.json() parses the response body as JSON.",
        explanationKa: "response.json() პასუხის body-ს JSON-ად პარსავს."
      },
      {
        id: 'q16_6',
        question: "What is the correct Content-Type header for sending JSON?",
        questionKa: "რა არის სწორი Content-Type header JSON-ის გაგზავნისთვის?",
        options: ["text/html","application/json","text/json","application/x-json"],
        optionsKa: ["text/html","application/json","text/json","application/x-json"],
        correctIndex: 1,
        explanation: "application/json is the standard MIME type for JSON data.",
        explanationKa: "application/json არის JSON მონაცემების სტანდარტული MIME ტიპი."
      },
      {
        id: 'q16_7',
        question: "What HTTP status code means \"Not Found\"?",
        questionKa: "რომელი HTTP სტატუს კოდი ნიშნავს \"ვერ მოიძებნა\"?",
        options: ["200","400","404","500"],
        optionsKa: ["200","400","404","500"],
        correctIndex: 2,
        explanation: "404 means the requested resource was not found on the server.",
        explanationKa: "404 ნიშნავს, რომ მოთხოვნილი რესურსი სერვერზე ვერ მოიძებნა."
      },
      {
        id: 'q16_8',
        question: "What does fetch() return?",
        questionKa: "რას აბრუნებს fetch()?",
        options: ["JSON data directly","A Promise that resolves to a Response","An XMLHttpRequest","A string"],
        optionsKa: ["პირდაპირ JSON მონაცემებს","Promise-ს, რომელიც Response-ად გადაიწყვეტება","XMLHttpRequest-ს","სტრინგს"],
        correctIndex: 1,
        explanation: "fetch() returns a Promise that resolves to a Response object, which you then process with .json().",
        explanationKa: "fetch() Promise-ს აბრუნებს, რომელიც Response ობიექტად გადაიწყვეტება, შემდეგ .json()-ით ამუშავებთ."
      },
      {
        id: 'q16_9',
        question: "What is CORS?",
        questionKa: "რა არის CORS?",
        options: ["A JavaScript library","Cross-Origin Resource Sharing — security mechanism for cross-domain requests","A data format","A CSS feature"],
        optionsKa: ["JavaScript ბიბლიოთეკა","Cross-Origin Resource Sharing — უსაფრთხოების მექანიზმი cross-domain მოთხოვნებისთვის","მონაცემთა ფორმატი","CSS ფუნქცია"],
        correctIndex: 1,
        explanation: "CORS is a browser security mechanism that restricts which domains can make requests to your server.",
        explanationKa: "CORS ბრაუზერის უსაფრთხოების მექანიზმია, რომელიც ზღუდავს რომელ დომენებს შეუძლიათ სერვერზე მოთხოვნები."
      },
      {
        id: 'q16_10',
        question: "How do you send data with a POST request using fetch?",
        questionKa: "როგორ აგზავნით მონაცემებს POST მოთხოვნით fetch-ის გამოყენებით?",
        options: ["fetch(url, data)","fetch(url, { method: \"POST\", body: JSON.stringify(data) })","fetch.post(url, data)","fetch(url).post(data)"],
        optionsKa: ["fetch(url, data)","fetch(url, { method: \"POST\", body: JSON.stringify(data) })","fetch.post(url, data)","fetch(url).post(data)"],
        correctIndex: 1,
        explanation: "fetch() takes a second argument with method, headers, and body for POST requests.",
        explanationKa: "fetch() მეორე არგუმენტად method, headers და body-ს იღებს POST მოთხოვნებისთვის."
      }
    ]
  },
  {
    id: 'q17',
    chapterId: 17,
    title: 'Async Programming',
    titleKa: 'ასინქრონული პროგრამირება',
    questions: [
      {
        id: 'q17_1',
        question: "What are the three states of a Promise?",
        questionKa: "Promise-ის სამი მდგომარეობა რომელია?",
        options: ["start, run, end","pending, fulfilled, rejected","open, closed, error","waiting, done, failed"],
        optionsKa: ["start, run, end","pending, fulfilled, rejected","open, closed, error","waiting, done, failed"],
        correctIndex: 1,
        explanation: "A Promise is pending (waiting), fulfilled (success), or rejected (error).",
        explanationKa: "Promise არის pending (მოლოდინი), fulfilled (წარმატება) ან rejected (შეცდომა)."
      },
      {
        id: 'q17_2',
        question: "What does async keyword do before a function?",
        questionKa: "რას აკეთებს async ფუნქციის წინ?",
        options: ["Makes it faster","Makes it return a Promise","Makes it synchronous","Makes it private"],
        optionsKa: ["აჩქარებს","Promise-ის დაბრუნებას უზრუნველყოფს","სინქრონულს ხდის","პრივატულს ხდის"],
        correctIndex: 1,
        explanation: "An async function always returns a Promise.",
        explanationKa: "async ფუნქცია ყოველთვის Promise-ს აბრუნებს."
      },
      {
        id: 'q17_3',
        question: "What does await do?",
        questionKa: "რას აკეთებს await?",
        options: ["Skips the Promise","Pauses until Promise settles","Cancels the Promise","Creates a new Promise"],
        optionsKa: ["Promise-ს გამოტოვებს","პაუზას აკეთებს Promise-ის დასრულებამდე","Promise-ს აუქმებს","ახალ Promise-ს ქმნის"],
        correctIndex: 1,
        explanation: "await pauses async function execution until the Promise resolves or rejects.",
        explanationKa: "await აპაუზებს async ფუნქციის შესრულებას Promise-ის რეზოლვამდე ან რეჯექტამდე."
      },
      {
        id: 'q17_4',
        question: "Which method handles Promise errors?",
        questionKa: "რომელი მეთოდი ამუშავებს Promise-ის შეცდომებს?",
        options: [".then()",".catch()",".finally()",".error()"],
        optionsKa: [".then()",".catch()",".finally()",".error()"],
        correctIndex: 1,
        explanation: ".catch() handles rejection/errors in a Promise chain.",
        explanationKa: ".catch() ამუშავებს Promise-ის ჯაჭვის შეცდომებს."
      },
      {
        id: 'q17_5',
        question: "What was \"callback hell\"?",
        questionKa: "რა იყო \"callback hell\"?",
        options: ["Too many variables","Deeply nested callbacks making code unreadable","An error type","A JavaScript engine"],
        optionsKa: ["ძალიან ბევრი ცვლადი","ღრმად ჩადგმული callback-ები კოდს წაუკითხავს ხდიდა","შეცდომის ტიპი","JavaScript ძრავა"],
        correctIndex: 1,
        explanation: "Callback hell refers to deeply nested callbacks that create pyramid-shaped, unreadable code.",
        explanationKa: "Callback hell ღრმად ჩადგმულ callback-ებს ნიშნავს, რომლებიც პირამიდისმაგვარ წაუკითხავ კოდს ქმნიდა."
      },
      {
        id: 'q17_6',
        question: "What are the three states of a Promise?",
        questionKa: "რა არის Promise-ის სამი მდგომარეობა?",
        options: ["start, middle, end","pending, fulfilled, rejected","open, closed, error","waiting, done, failed"],
        optionsKa: ["დასაწყისი, შუალედი, დასასრული","pending, fulfilled, rejected","ღია, დახურული, შეცდომა","მოლოდინი, დასრულებული, ჩავარდნილი"],
        correctIndex: 1,
        explanation: "A Promise is pending initially, then becomes either fulfilled (resolved) or rejected.",
        explanationKa: "Promise თავდაპირველად pending-ია, შემდეგ ხდება fulfilled (გადაწყვეტილი) ან rejected (უარყოფილი)."
      },
      {
        id: 'q17_7',
        question: "What does Promise.all() do?",
        questionKa: "რას აკეთებს Promise.all()?",
        options: ["Runs promises one by one","Waits for ALL promises to resolve, or rejects if any fails","Returns the fastest promise","Cancels all promises"],
        optionsKa: ["Promise-ებს სათითაოდ აშვებს","ყველა Promise-ის გადაწყვეტას ელოდება, ან უარყოფს თუ რომელიმე ჩავარდება","ყველაზე სწრაფ Promise-ს აბრუნებს","ყველა Promise-ს აუქმებს"],
        correctIndex: 1,
        explanation: "Promise.all() runs promises in parallel and resolves when all complete, or rejects on the first failure.",
        explanationKa: "Promise.all() Promise-ებს პარალელურად აშვებს და გადაიწყვეტება ყველას დასრულებისას, ან უარყოფს პირველ ჩავარდნაზე."
      },
      {
        id: 'q17_8',
        question: "What does the \"await\" keyword do?",
        questionKa: "რას აკეთებს \"await\" საკვანძო სიტყვა?",
        options: ["Creates a new Promise","Pauses the async function until the Promise resolves","Rejects a Promise","Runs code synchronously"],
        optionsKa: ["ახალ Promise-ს ქმნის","ასინქრონულ ფუნქციას აჩერებს Promise-ის გადაწყვეტამდე","Promise-ს უარყოფს","კოდს სინქრონულად აშვებს"],
        correctIndex: 1,
        explanation: "await pauses the execution of an async function until the Promise settles.",
        explanationKa: "await ასინქრონული ფუნქციის შესრულებას აჩერებს Promise-ის დასრულებამდე."
      },
      {
        id: 'q17_9',
        question: "Where can you use the await keyword?",
        questionKa: "სად შეიძლება await საკვანძო სიტყვის გამოყენება?",
        options: ["Anywhere","Only inside async functions","Only in callbacks","Only with setTimeout"],
        optionsKa: ["ყველგან","მხოლოდ async ფუნქციების შიგნით","მხოლოდ callback-ებში","მხოლოდ setTimeout-თან"],
        correctIndex: 1,
        explanation: "await can only be used inside functions declared with the async keyword (or top-level in modules).",
        explanationKa: "await მხოლოდ async საკვანძო სიტყვით გამოცხადებულ ფუნქციებში (ან მოდულების ზედა დონეზე) შეიძლება."
      },
      {
        id: 'q17_10',
        question: "How do you handle errors with async/await?",
        questionKa: "როგორ ამუშავებთ შეცდომებს async/await-ით?",
        options: [".catch() only","try/catch block",".then() only","No error handling needed"],
        optionsKa: ["მხოლოდ .catch()","try/catch ბლოკით","მხოლოდ .then()","შეცდომების მართვა არ სჭირდება"],
        correctIndex: 1,
        explanation: "With async/await, wrap your code in try/catch to handle errors cleanly.",
        explanationKa: "async/await-ით კოდი try/catch-ში უნდა გახვიოთ შეცდომების სუფთა მართვისთვის."
      }
    ]
  },
  {
    id: 'q18',
    chapterId: 18,
    title: 'Storage',
    titleKa: 'Storage მექანიზმები',
    questions: [
      {
        id: 'q18_1',
        question: "When is localStorage data cleared?",
        questionKa: "როდის იშლება localStorage-ის მონაცემები?",
        options: ["When browser closes","When tab closes","Only when explicitly cleared","After 24 hours"],
        optionsKa: ["ბრაუზერის დახურვისას","ჩანართის დახურვისას","მხოლოდ აშკარა წაშლისას","24 საათის შემდეგ"],
        correctIndex: 2,
        explanation: "localStorage persists until explicitly cleared with removeItem() or clear().",
        explanationKa: "localStorage ინახება სანამ removeItem()-ით ან clear()-ით აშკარად არ წაიშლება."
      },
      {
        id: 'q18_2',
        question: "When is sessionStorage data cleared?",
        questionKa: "როდის იშლება sessionStorage-ის მონაცემები?",
        options: ["Never","When the tab/window closes","After 1 hour","When browser restarts"],
        optionsKa: ["არასდროს","ჩანართის/ფანჯრის დახურვისას","1 საათის შემდეგ","ბრაუზერის გადატვირთვისას"],
        correctIndex: 1,
        explanation: "sessionStorage is cleared when the browser tab or window is closed.",
        explanationKa: "sessionStorage იშლება ბრაუზერის ჩანართის ან ფანჯრის დახურვისას."
      },
      {
        id: 'q18_3',
        question: "Which method saves data to localStorage?",
        questionKa: "რომელი მეთოდი ინახავს მონაცემს localStorage-ში?",
        options: ["localStorage.save()","localStorage.setItem()","localStorage.put()","localStorage.add()"],
        optionsKa: ["localStorage.save()","localStorage.setItem()","localStorage.put()","localStorage.add()"],
        correctIndex: 1,
        explanation: "localStorage.setItem(key, value) stores data as a key-value pair.",
        explanationKa: "localStorage.setItem(key, value) მონაცემს key-value წყვილად ინახავს."
      },
      {
        id: 'q18_4',
        question: "What are Cookies primarily used for?",
        questionKa: "Cookies ძირითადად რისთვის გამოიყენება?",
        options: ["Client-side storage only","Server-client communication and session management","Encrypting data","Running JavaScript"],
        optionsKa: ["მხოლოდ კლიენტურ შენახვისთვის","სერვერ-კლიენტ კომუნიკაციისა და სესიების სამართავად","მონაცემთა დაშიფვრისთვის","JavaScript-ის გასაშვებად"],
        correctIndex: 1,
        explanation: "Cookies are sent with HTTP requests and used for sessions, authentication, and preferences.",
        explanationKa: "Cookies HTTP მოთხოვნებთან ერთად იგზავნება და სესიების, ავთენტიფიკაციისა და პარამეტრებისთვის გამოიყენება."
      },
      {
        id: 'q18_5',
        question: "Should sensitive data be stored in localStorage?",
        questionKa: "უნდა შეინახოს სენსიტიური მონაცემი localStorage-ში?",
        options: ["Yes, it is encrypted","Yes, it is safe","No, it is not encrypted","Only if using HTTPS"],
        optionsKa: ["დიახ, დაშიფრულია","დიახ, უსაფრთხოა","არა, არ არის დაშიფრული","მხოლოდ HTTPS-ზე"],
        correctIndex: 2,
        explanation: "localStorage is not encrypted and is vulnerable to XSS. Never store passwords or tokens there.",
        explanationKa: "localStorage არ არის დაშიფრული და XSS-ის მიმართ მოწყვლადია. არასდროს შეინახოთ პაროლები."
      },
      {
        id: 'q18_6',
        question: "What is the storage limit of localStorage in most browsers?",
        questionKa: "რა არის localStorage-ის ლიმიტი ბრაუზერების უმეტესობაში?",
        options: ["4 KB","5-10 MB","100 MB","Unlimited"],
        optionsKa: ["4 KB","5-10 MB","100 MB","შეუზღუდავი"],
        correctIndex: 1,
        explanation: "localStorage typically allows 5-10 MB per origin in most modern browsers.",
        explanationKa: "localStorage ჩვეულებრივ 5-10 MB-ს იძლევა ორიჯინზე თანამედროვე ბრაუზერების უმეტესობაში."
      },
      {
        id: 'q18_7',
        question: "How do you store an object in localStorage?",
        questionKa: "როგორ ინახავთ ობიექტს localStorage-ში?",
        options: ["localStorage.setItem(\"key\", obj)","localStorage.setItem(\"key\", JSON.stringify(obj))","localStorage.setObject(\"key\", obj)","localStorage.store(obj)"],
        optionsKa: ["localStorage.setItem(\"key\", obj)","localStorage.setItem(\"key\", JSON.stringify(obj))","localStorage.setObject(\"key\", obj)","localStorage.store(obj)"],
        correctIndex: 1,
        explanation: "localStorage stores strings only. Use JSON.stringify() to convert objects to strings first.",
        explanationKa: "localStorage მხოლოდ სტრინგებს ინახავს. JSON.stringify()-ით ობიექტი ჯერ სტრინგად უნდა გარდაქმნათ."
      },
      {
        id: 'q18_8',
        question: "When is sessionStorage cleared?",
        questionKa: "როდის იშლება sessionStorage?",
        options: ["After 24 hours","When the browser tab/window is closed","Only manually with clear()","After 1 hour"],
        optionsKa: ["24 საათის შემდეგ","ბრაუზერის ჩანართის/ფანჯრის დახურვისას","მხოლოდ ხელით clear()-ით","1 საათის შემდეგ"],
        correctIndex: 1,
        explanation: "sessionStorage data is cleared when the tab or window is closed.",
        explanationKa: "sessionStorage მონაცემები იშლება ჩანართის ან ფანჯრის დახურვისას."
      },
      {
        id: 'q18_9',
        question: "How much data can a cookie store?",
        questionKa: "რამდენი მონაცემის შენახვა შეუძლია cookie-ს?",
        options: ["4 KB","5 MB","10 MB","1 MB"],
        optionsKa: ["4 KB","5 MB","10 MB","1 MB"],
        correctIndex: 0,
        explanation: "Cookies are limited to about 4 KB per cookie, much less than localStorage.",
        explanationKa: "Cookies დაახლოებით 4 KB-ით არის შეზღუდული — ბევრად ნაკლები ვიდრე localStorage."
      },
      {
        id: 'q18_10',
        question: "What is the security concern with storing tokens in localStorage?",
        questionKa: "რა არის უსაფრთხოების პრობლემა localStorage-ში ტოკენების შენახვისას?",
        options: ["Data expires too quickly","Vulnerable to XSS attacks — any script can read it","Too much storage used","Cookies are always better"],
        optionsKa: ["მონაცემები ძალიან სწრაფად იწურება","XSS შეტევებისთვის მოწყვლადი — ნებისმიერ სკრიპტს შეუძლია წაკითხვა","ძალიან ბევრი storage გამოიყენება","Cookies ყოველთვის უკეთესია"],
        correctIndex: 1,
        explanation: "localStorage is accessible by any JavaScript on the page, making it vulnerable to XSS attacks.",
        explanationKa: "localStorage გვერდზე ნებისმიერი JavaScript-ისთვის ხელმისაწვდომია, რაც XSS შეტევებისთვის მოწყვლადს ხდის."
      }
    ]
  },
  {
    id: 'q19',
    chapterId: 19,
    title: 'OOP Basics',
    titleKa: 'OOP-ის საფუძვლები',
    questions: [
      {
        id: 'q19_1',
        question: "What is a class in JavaScript?",
        questionKa: "რა არის კლასი JavaScript-ში?",
        options: ["A variable type","A blueprint for creating objects","A built-in function","A CSS selector"],
        optionsKa: ["ცვლადის ტიპი","ობიექტების შექმნის ნახაზი","ჩაშენებული ფუნქცია","CSS სელექტორი"],
        correctIndex: 1,
        explanation: "A class is a blueprint/template for creating objects with shared structure and behavior.",
        explanationKa: "კლასი არის ობიექტების შექმნის ნახაზი/შაბლონი საერთო სტრუქტურით და ქცევით."
      },
      {
        id: 'q19_2',
        question: "When does constructor() run?",
        questionKa: "როდის სრულდება constructor()?",
        options: ["When class is defined","When new instance is created","When a method is called","On page load"],
        optionsKa: ["კლასის განსაზღვრისას","ახალი ინსტანცის შექმნისას","მეთოდის გამოძახებისას","გვერდის ჩატვირთვისას"],
        correctIndex: 1,
        explanation: "constructor() runs automatically when you create a new instance with \"new\".",
        explanationKa: "constructor() ავტომატურად სრულდება, როცა \"new\"-ით ახალ ინსტანციას ქმნით."
      },
      {
        id: 'q19_3',
        question: "What does \"this\" refer to inside a class?",
        questionKa: "რას მიუთითებს \"this\" კლასის შიგნით?",
        options: ["The class itself","The current instance","The parent class","The global object"],
        optionsKa: ["თავად კლასს","მიმდინარე ინსტანციას","მშობელ კლასს","გლობალურ ობიექტს"],
        correctIndex: 1,
        explanation: "\"this\" inside a class refers to the specific instance that was created.",
        explanationKa: "\"this\" კლასის შიგნით მიუთითებს კონკრეტულ შექმნილ ინსტანციაზე."
      },
      {
        id: 'q19_4',
        question: "What are the four pillars of OOP?",
        questionKa: "OOP-ის ოთხი ბურჯი რომელია?",
        options: ["Class, Object, Method, Property","Abstraction, Encapsulation, Inheritance, Polymorphism","Create, Read, Update, Delete","Public, Private, Protected, Static"],
        optionsKa: ["კლასი, ობიექტი, მეთოდი, თვისება","აბსტრაქცია, ინკაფსულაცია, მემკვიდრეობა, პოლიმორფიზმი","შექმნა, წაკითხვა, განახლება, წაშლა","Public, Private, Protected, Static"],
        correctIndex: 1,
        explanation: "The four pillars are Abstraction, Encapsulation, Inheritance, and Polymorphism.",
        explanationKa: "ოთხი ბურჯია: აბსტრაქცია, ინკაფსულაცია, მემკვიდრეობა და პოლიმორფიზმი."
      },
      {
        id: 'q19_5',
        question: "Are JavaScript classes true classes or syntactic sugar?",
        questionKa: "JavaScript-ის კლასები ნამდვილი კლასებია თუ სინტაქსური შაქარი?",
        options: ["True classes like Java","Syntactic sugar over prototypes","Both equally","Neither"],
        optionsKa: ["ნამდვილი კლასები Java-ს მსგავსი","სინტაქსური შაქარი პროტოტიპებზე","ორივე თანაბრად","არცერთი"],
        correctIndex: 1,
        explanation: "JavaScript classes are syntactic sugar — they still use prototype-based inheritance internally.",
        explanationKa: "JavaScript-ის კლასები სინტაქსური შაქარია — შინაგანად მაინც პროტოტიპულ მემკვიდრეობას იყენებს."
      },
      {
        id: 'q19_6',
        question: "What does the \"static\" keyword mean in a class?",
        questionKa: "რას ნიშნავს \"static\" საკვანძო სიტყვა კლასში?",
        options: ["The method cannot be changed","The method belongs to the class, not instances","The method runs automatically","The method is private"],
        optionsKa: ["მეთოდის შეცვლა არ შეიძლება","მეთოდი კლასს ეკუთვნის, არა ინსტანციებს","მეთოდი ავტომატურად სრულდება","მეთოდი პრივატულია"],
        correctIndex: 1,
        explanation: "Static methods belong to the class itself and are called as ClassName.method(), not instance.method().",
        explanationKa: "Static მეთოდები თავად კლასს ეკუთვნის და ClassName.method()-ით გამოიძახება, არა instance.method()-ით."
      },
      {
        id: 'q19_7',
        question: "What is a getter in a class?",
        questionKa: "რა არის getter კლასში?",
        options: ["A regular method","A method accessed like a property using get keyword","A constructor parameter","A private field"],
        optionsKa: ["ჩვეულებრივი მეთოდი","get საკვანძო სიტყვით თვისების მსგავსად ხელმისაწვდომი მეთოდი","კონსტრუქტორის პარამეტრი","პრივატული ველი"],
        correctIndex: 1,
        explanation: "A getter is defined with get keyword and accessed like a property: obj.name instead of obj.name().",
        explanationKa: "Getter get საკვანძო სიტყვით განისაზღვრება და თვისების მსგავსად ხელმისაწვდომია: obj.name, არა obj.name()."
      },
      {
        id: 'q19_8',
        question: "What does instanceof check?",
        questionKa: "რას ამოწმებს instanceof?",
        options: ["If variable is defined","If an object was created by a specific class","If two objects are equal","If a class exists"],
        optionsKa: ["ცვლადი განსაზღვრულია თუ არა","ობიექტი კონკრეტული კლასის მიერ არის თუ არა შექმნილი","ორი ობიექტი ტოლია თუ არა","კლასი არსებობს თუ არა"],
        correctIndex: 1,
        explanation: "instanceof checks if an object was created from a specific class (or its parent class).",
        explanationKa: "instanceof ამოწმებს ობიექტი კონკრეტული კლასის (ან მისი მშობელი კლასის) მიერ არის თუ არა შექმნილი."
      },
      {
        id: 'q19_9',
        question: "What happens if you forget to use \"new\" when creating a class instance?",
        questionKa: "რა ხდება თუ \"new\"-ს დაივიწყებთ კლასის ინსტანციის შექმნისას?",
        options: ["It works normally","A TypeError is thrown","It returns undefined","It creates a global object"],
        optionsKa: ["ნორმალურად მუშაობს","TypeError ისვრის","undefined-ს აბრუნებს","გლობალურ ობიექტს ქმნის"],
        correctIndex: 1,
        explanation: "Classes in JavaScript require the new keyword. Calling a class without new throws a TypeError.",
        explanationKa: "JavaScript-ში კლასები new საკვანძო სიტყვას მოითხოვენ. კლასის new-ს გარეშე გამოძახება TypeError-ს ისვრის."
      },
      {
        id: 'q19_10',
        question: "What are the four pillars of OOP?",
        questionKa: "რა არის OOP-ის ოთხი საყრდენი?",
        options: ["Variables, Functions, Loops, Arrays","Abstraction, Encapsulation, Inheritance, Polymorphism","Create, Read, Update, Delete","HTML, CSS, JS, DOM"],
        optionsKa: ["ცვლადები, ფუნქციები, ციკლები, მასივები","აბსტრაქცია, ინკაფსულაცია, მემკვიდრეობა, პოლიმორფიზმი","შექმნა, წაკითხვა, განახლება, წაშლა","HTML, CSS, JS, DOM"],
        correctIndex: 1,
        explanation: "The four pillars of OOP are Abstraction, Encapsulation, Inheritance, and Polymorphism.",
        explanationKa: "OOP-ის ოთხი საყრდენია: აბსტრაქცია, ინკაფსულაცია, მემკვიდრეობა და პოლიმორფიზმი."
      }
    ]
  },
  {
    id: 'q20',
    chapterId: 20,
    title: 'OOP Advanced',
    titleKa: 'OOP მოწინავე',
    questions: [
      {
        id: 'q20_1',
        question: "What does extends do?",
        questionKa: "რას აკეთებს extends?",
        options: ["Copies an object","Creates a child class inheriting from parent","Adds a method","Exports a class"],
        optionsKa: ["ობიექტს აკოპირებს","შვილ კლასს ქმნის მშობლის მემკვიდრეობით","მეთოდს ამატებს","კლასს ექსპორტს"],
        correctIndex: 1,
        explanation: "extends creates a child class that inherits properties and methods from a parent class.",
        explanationKa: "extends ქმნის შვილ კლასს, რომელიც მშობლის თვისებებსა და მეთოდებს იმკვიდრებს."
      },
      {
        id: 'q20_2',
        question: "What does super() do in a child class?",
        questionKa: "რას აკეთებს super() შვილ კლასში?",
        options: ["Creates new parent","Calls parent constructor","Deletes parent","Overrides parent"],
        optionsKa: ["ახალ მშობელს ქმნის","მშობლის კონსტრუქტორს იძახებს","მშობელს შლის","მშობელს ეწინააღმდეგება"],
        correctIndex: 1,
        explanation: "super() calls the parent class constructor from within the child class.",
        explanationKa: "super() მშობელი კლასის კონსტრუქტორს იძახებს შვილი კლასის შიგნიდან."
      },
      {
        id: 'q20_3',
        question: "How do you declare a private field in a class?",
        questionKa: "როგორ გამოვაცხადოთ private ველი კლასში?",
        options: ["private fieldName","_fieldName","#fieldName","this.private.fieldName"],
        optionsKa: ["private fieldName","_fieldName","#fieldName","this.private.fieldName"],
        correctIndex: 2,
        explanation: "Private fields use # prefix: #fieldName. They are only accessible inside the class.",
        explanationKa: "Private ველები # პრეფიქსს იყენებს: #fieldName. ისინი მხოლოდ კლასის შიგნით ხელმისაწვდომია."
      },
      {
        id: 'q20_4',
        question: "Can a child class override a parent method?",
        questionKa: "შეუძლია თუ არა შვილ კლასს მშობლის მეთოდის გადაფარვა?",
        options: ["No, never","Yes, by defining a method with the same name","Only with super","Only with override keyword"],
        optionsKa: ["არა, არასდროს","დიახ, იგივე სახელის მეთოდის განსაზღვრით","მხოლოდ super-ით","მხოლოდ override-ით"],
        correctIndex: 1,
        explanation: "Child classes can override parent methods by defining a method with the same name.",
        explanationKa: "შვილი კლასები მშობლის მეთოდს გადაფარავენ იგივე სახელის მეთოდის განსაზღვრით."
      },
      {
        id: 'q20_5',
        question: "What does encapsulation mean in OOP?",
        questionKa: "რას ნიშნავს ინკაფსულაცია OOP-ში?",
        options: ["Making everything public","Hiding internal state and exposing only necessary methods","Creating many classes","Using inheritance"],
        optionsKa: ["ყველაფრის საჯარო გახდა","შიდა მდგომარეობის დამალვა და საჭირო მეთოდების გამოფენა","ბევრი კლასის შექმნა","მემკვიდრეობის გამოყენება"],
        correctIndex: 1,
        explanation: "Encapsulation hides internal data/state and exposes only what is necessary through methods.",
        explanationKa: "ინკაფსულაცია მალავს შიდა მონაცემებს და მხოლოდ საჭირო მეთოდებს აჩვენებს."
      },
      {
        id: 'q20_6',
        question: "What does super() do in a child class constructor?",
        questionKa: "რას აკეთებს super() შვილი კლასის კონსტრუქტორში?",
        options: ["Creates a new instance","Calls the parent class constructor","Makes the class static","Defines a private field"],
        optionsKa: ["ახალ ინსტანციას ქმნის","მშობელი კლასის კონსტრუქტორს იძახებს","კლასს სტატიკურს ხდის","პრივატულ ველს განსაზღვრავს"],
        correctIndex: 1,
        explanation: "super() calls the parent class constructor, which must be called before using 'this' in a child constructor.",
        explanationKa: "super() მშობელი კლასის კონსტრუქტორს იძახებს, რომელიც უნდა გამოიძახოს შვილ კონსტრუქტორში 'this'-ის გამოყენებამდე."
      },
      {
        id: 'q20_7',
        question: "How do you declare a private field in JavaScript?",
        questionKa: "როგორ გამოაცხადებთ პრივატულ ველს JavaScript-ში?",
        options: ["private name","_name","#name","protected name"],
        optionsKa: ["private name","_name","#name","protected name"],
        correctIndex: 2,
        explanation: "Private fields use the # prefix: #name. They are only accessible within the class body.",
        explanationKa: "პრივატული ველები # პრეფიქსს იყენებენ: #name. მხოლოდ კლასის სხეულის შიგნით არის ხელმისაწვდომი."
      },
      {
        id: 'q20_8',
        question: "What is method overriding?",
        questionKa: "რა არის მეთოდის გადაფარვა?",
        options: ["Calling a parent method","Redefining a parent method in a child class","Adding parameters to a method","Making a method private"],
        optionsKa: ["მშობელი მეთოდის გამოძახება","მშობელი მეთოდის ხელახალი განსაზღვრა შვილ კლასში","მეთოდისთვის პარამეტრების დამატება","მეთოდის პრივატულად გადაქცევა"],
        correctIndex: 1,
        explanation: "Method overriding means a child class provides its own implementation of a method inherited from the parent.",
        explanationKa: "მეთოდის გადაფარვა ნიშნავს, რომ შვილი კლასი მშობლისგან მემკვიდრეობით მიღებული მეთოდის საკუთარ იმპლემენტაციას იძლევა."
      },
      {
        id: 'q20_9',
        question: "Can a child class access parent private fields (#)?",
        questionKa: "შეუძლია თუ არა შვილ კლასს მშობლის პრივატულ ველებზე (#) წვდომა?",
        options: ["Yes, always","No, private fields are only accessible in the defining class","Yes, with super","Only with extends"],
        optionsKa: ["დიახ, ყოველთვის","არა, პრივატული ველები მხოლოდ განმსაზღვრელ კლასში ხელმისაწვდომია","დიახ, super-ით","მხოლოდ extends-ით"],
        correctIndex: 1,
        explanation: "Private fields (#) cannot be accessed by child classes — they are truly private to the defining class.",
        explanationKa: "პრივატული ველები (#) შვილ კლასებისთვის მიუწვდომელია — ისინი ნამდვილად პრივატულია განმსაზღვრელ კლასში."
      },
      {
        id: 'q20_10',
        question: "What is the _ prefix convention used for?",
        questionKa: "რისთვის გამოიყენება _ პრეფიქსის კონვენცია?",
        options: ["It makes fields truly private","It signals that a field/method is intended for internal use","It is required by JavaScript","It prevents inheritance"],
        optionsKa: ["ველებს ნამდვილად პრივატულს ხდის","სიგნალიზებს, რომ ველი/მეთოდი შიდა გამოყენებისთვისაა","JavaScript მოითხოვს","მემკვიდრეობას კრძალავს"],
        correctIndex: 1,
        explanation: "The _ prefix is a convention (not enforced) signaling that a property is intended for internal use only.",
        explanationKa: "_ პრეფიქსი კონვენციაა (არა იძულებითი), რომელიც სიგნალიზებს რომ თვისება მხოლოდ შიდა გამოყენებისთვისაა."
      }
    ]
  },
  {
    id: 'q21',
    chapterId: 21,
    title: 'OOP Practice',
    titleKa: 'OOP პრაქტიკა',
    questions: [
      {
        id: 'q21_1',
        question: "In a Shape hierarchy, what would Circle extend?",
        questionKa: "Shape იერარქიაში, Circle რას გააფართოვებს?",
        options: ["Object","Shape","Circle","Math"],
        optionsKa: ["Object","Shape","Circle","Math"],
        correctIndex: 1,
        explanation: "Circle extends Shape as it is a more specific type of shape.",
        explanationKa: "Circle Shape-ს აფართოებს, რადგან ის ფიგურის უფრო სპეციფიკური ტიპია."
      },
      {
        id: 'q21_2',
        question: "Why use private fields for a bank balance?",
        questionKa: "რატომ ვიყენებთ private ველებს საბანკო ბალანსისთვის?",
        options: ["Faster performance","Prevents direct external modification","Required by syntax","For better logging"],
        optionsKa: ["უფრო სწრაფი წარმადობა","პირდაპირ გარე ცვლილებას ხელს უშლის","სინტაქსი მოითხოვს","უკეთესი ლოგინგისთვის"],
        correctIndex: 1,
        explanation: "Private fields prevent unauthorized direct access to sensitive data like balances.",
        explanationKa: "Private ველები სენსიტიურ მონაცემებზე (ბალანსი) უნებართვო პირდაპირ წვდომას ხელს უშლის."
      },
      {
        id: 'q21_3',
        question: "What is method chaining?",
        questionKa: "რა არის მეთოდების ჯაჭვი?",
        options: ["Calling methods in a loop","Returning this to allow consecutive method calls","Inheriting methods","Private method calls"],
        optionsKa: ["მეთოდების ციკლში გამოძახება","this-ის დაბრუნება ზედიზედ გამოძახებისთვის","მეთოდების მემკვიდრეობა","პრივატული მეთოდების გამოძახება"],
        correctIndex: 1,
        explanation: "Method chaining returns \"this\" from methods, allowing obj.method1().method2().method3().",
        explanationKa: "მეთოდების ჯაჭვი \"this\"-ს აბრუნებს, რაც obj.method1().method2().method3() იძლევა."
      },
      {
        id: 'q21_4',
        question: "Which OOP principle lets a parent reference work with child types?",
        questionKa: "რომელი OOP პრინციპი მშობლის რეფერენსს შვილ ტიპებთან მუშაობის უფლებას აძლევს?",
        options: ["Abstraction","Encapsulation","Inheritance","Polymorphism"],
        optionsKa: ["აბსტრაქცია","ინკაფსულაცია","მემკვიდრეობა","პოლიმორფიზმი"],
        correctIndex: 3,
        explanation: "Polymorphism allows objects of different types to be treated through a common interface.",
        explanationKa: "პოლიმორფიზმი საშუალებას აძლევს სხვადასხვა ტიპის ობიექტებს საერთო ინტერფეისით იმოქმედონ."
      },
      {
        id: 'q21_5',
        question: "What makes OOP code more maintainable?",
        questionKa: "რა ხდის OOP კოდს უფრო მოვლებადს?",
        options: ["Using global variables","Organizing code into classes with clear responsibilities","Writing longer functions","Avoiding inheritance"],
        optionsKa: ["გლობალური ცვლადების გამოყენება","კოდის ორგანიზება კლასებში მკაფიო პასუხისმგებლობით","გრძელი ფუნქციების წერა","მემკვიდრეობის თავიდან აცილება"],
        correctIndex: 1,
        explanation: "OOP improves maintainability by organizing code into focused classes with clear single responsibilities.",
        explanationKa: "OOP მოვლებადობას აუმჯობესებს კოდის ორგანიზებით მკაფიო პასუხისმგებლობის მქონე კლასებში."
      },
      {
        id: 'q21_6',
        question: "What is the Factory pattern?",
        questionKa: "რა არის Factory შაბლონი?",
        options: ["A class that extends another","A function/method that creates and returns objects","A way to delete objects","A sorting algorithm"],
        optionsKa: ["კლასი რომელიც სხვას აფართოებს","ფუნქცია/მეთოდი, რომელიც ობიექტებს ქმნის და აბრუნებს","ობიექტების წაშლის გზა","სორტირების ალგორითმი"],
        correctIndex: 1,
        explanation: "The Factory pattern uses a function or method to create objects, abstracting away the new keyword.",
        explanationKa: "Factory შაბლონი ფუნქციას ან მეთოდს იყენებს ობიექტების შესაქმნელად, new საკვანძო სიტყვის აბსტრაჰირებით."
      },
      {
        id: 'q21_7',
        question: "What is separation of concerns in OOP?",
        questionKa: "რა არის პასუხისმგებლობის გამიჯვნა OOP-ში?",
        options: ["Putting all code in one class","Each class handles one specific responsibility","Using only private fields","Avoiding inheritance"],
        optionsKa: ["ყველა კოდის ერთ კლასში მოთავსება","თითოეული კლასი ერთ კონკრეტულ პასუხისმგებლობას ასრულებს","მხოლოდ პრივატული ველების გამოყენება","მემკვიდრეობის თავიდან აცილება"],
        correctIndex: 1,
        explanation: "Separation of concerns means each class should have a single, well-defined responsibility.",
        explanationKa: "პასუხისმგებლობის გამიჯვნა ნიშნავს, რომ თითოეულ კლასს ერთი, კარგად განსაზღვრული პასუხისმგებლობა უნდა ჰქონდეს."
      },
      {
        id: 'q21_8',
        question: "How does method chaining work?",
        questionKa: "როგორ მუშაობს მეთოდების ჯაჭვური შეკავშირება?",
        options: ["By using callbacks","By returning 'this' from each method","By using async/await","By nesting functions"],
        optionsKa: ["callback-ების გამოყენებით","თითოეული მეთოდიდან 'this'-ის დაბრუნებით","async/await-ის გამოყენებით","ფუნქციების ჩადგმით"],
        correctIndex: 1,
        explanation: "Method chaining works by returning 'this' from methods, allowing consecutive calls like obj.a().b().c().",
        explanationKa: "მეთოდების ჯაჭვი მუშაობს მეთოდებიდან 'this'-ის დაბრუნებით, რაც ზედიზედ გამოძახებას იძლევა: obj.a().b().c()."
      },
      {
        id: 'q21_9',
        question: "What is the benefit of using private fields in a BankAccount class?",
        questionKa: "რა სარგებელი აქვს BankAccount კლასში პრივატული ველების გამოყენებას?",
        options: ["Faster performance","Prevents direct access to the balance, enforcing validation","Reduces memory usage","Enables inheritance"],
        optionsKa: ["მეტი წარმადობა","ბალანსზე პირდაპირ წვდომას კრძალავს, ვალიდაციას აიძულებს","მეხსიერების მოხმარების შემცირება","მემკვიდრეობის საშუალება"],
        correctIndex: 1,
        explanation: "Private fields like #balance prevent direct modification, forcing use of validated methods like deposit() and withdraw().",
        explanationKa: "პრივატული ველები, როგორიცაა #balance, პირდაპირ მოდიფიკაციას კრძალავს, ვალიდირებული მეთოდების (deposit(), withdraw()) გამოყენებას აიძულებს."
      },
      {
        id: 'q21_10',
        question: "When should you prefer composition over inheritance?",
        questionKa: "როდის უნდა ამჯობინოთ კომპოზიცია მემკვიდრეობას?",
        options: ["Always","When objects need shared behavior without being the same type","Never, inheritance is always better","Only for arrays"],
        optionsKa: ["ყოველთვის","როცა ობიექტებს საერთო ქცევა სჭირდებათ ერთი ტიპის გარეშე","არასოდეს, მემკვიდრეობა ყოველთვის უკეთესია","მხოლოდ მასივებისთვის"],
        correctIndex: 1,
        explanation: "Composition is preferred when classes need to share behavior without a strict 'is-a' relationship.",
        explanationKa: "კომპოზიცია სასურველია როცა კლასებს ქცევის გაზიარება სჭირდებათ მკაცრი 'არის-ა' ურთიერთობის გარეშე."
      }
    ]
  }
];
