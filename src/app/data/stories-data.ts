import { Story } from './types';

export const STORIES: Story[] = [
  {
    id: 1,
    title: 'JavaScript Was Created in 10 Days',
    titleKa: 'JavaScript 10 დღეში შეიქმნა',
    chapterId: 1,
    icon: 'mdi:language-javascript',
    content: 'In May 1995, Brendan Eich was hired by Netscape Communications to create a scripting language for the Netscape Navigator browser. The company wanted a language that could make web pages interactive.',
    contentKa: '1995 წლის მაისში, ბრენდან აიკი Netscape Communications-მა დაიქირავა Navigator ბრაუზერისთვის სკრიპტინგის ენის შესაქმნელად. კომპანიას სურდა ენა, რომელიც ვებ-გვერდებს ინტერაქტიულს გახდიდა.\n\nაიკმა წარმოუდგენელი გამოწვევა მიიღო — შექმნა ახალი პროგრამირების ენა მხოლოდ 10 დღეში. მენეჯმენტს სურდა, რომ ენა Java-ს ჰგავდეს (რადგან Java იმ პერიოდში ძალიან პოპულარული იყო), მაგრამ ამავდროულად მარტივი ყოფილიყო დამწყები პროგრამისტებისთვის.\n\nაიკმა Scheme-ის ფუნქციური პროგრამირება, Self-ის პროტოტიპული მემკვიდრეობა და Java-ს სინტაქსი გააერთიანა. შედეგი იყო ენა, რომელსაც თავდაპირველად Mocha ერქვა, შემდეგ LiveScript გადაარქვეს, და ბოლოს JavaScript დაარქვეს — მარკეტინგული მიზეზით, რადგან Java-ს პოპულარობით სარგებლობა სურდათ.\n\nმიუხედავად იმისა, რომ ენა ძალიან სწრაფად შეიქმნა და ბევრი „უცნაურობა" ჰქონდა, JavaScript-მა მსოფლიოში ყველაზე პოპულარული პროგრამირების ენის სტატუსი მოიპოვა. დღეს ის ვებ-დეველოპმენტის ქვაკუთხედია და ყოველწლიურად განვითარებას განაგრძობს.',
    moral: 'Great things can emerge under extreme pressure and tight deadlines.',
    moralKa: 'დიდი რაღაცეები შეიძლება შეიქმნას ექსტრემალური ზეწოლისა და მჭიდრო ვადების პირობებშიც. JavaScript-ის ისტორია გვასწავლის, რომ სრულყოფილების მოლოდინში დროის კარგვა არ ღირს — შეიძლება შეიქმნა რაღაც, გააუმჯობესო მოგვიანებით.'
  },
  {
    id: 2,
    title: 'The Browser Wars',
    titleKa: 'ბრაუზერების ომი',
    chapterId: 12,
    icon: 'mdi:sword-cross',
    content: 'In the mid-1990s, Netscape and Microsoft fought for browser dominance, each shipping incompatible JavaScript features.',
    contentKa: '1990-იანების შუა პერიოდში, Netscape Navigator და Microsoft Internet Explorer-ი ბრაუზერების ბაზრისთვის სასტიკ ბრძოლას აწარმოებდნენ. ეს პერიოდი „ბრაუზერების ომის" სახელით არის ცნობილი.\n\nNetscape-მა JavaScript შექმნა 1995 წელს, ხოლო Microsoft-მა თავისი ვერსია შექმნა — JScript, რომელიც თითქმის იგივე იყო, მაგრამ სუბტილური განსხვავებებით. დეველოპერებს უწევდათ ერთი და იგივე კოდის ორი ვერსიის წერა სხვადასხვა ბრაუზერისთვის.\n\nეს ქაოსი გახდა მიზეზი ECMAScript სტანდარტის შექმნისა 1997 წელს — ECMA International-მა JavaScript-ის სტანდარტიზაცია განახორციელა, რათა ყველა ბრაუზერში ერთნაირად ემუშავა.\n\nMicrosoft-მა საბოლოოდ მოიგო ომი — Internet Explorer-მა ბაზრის 95%-ზე მეტი დაიკავა 2003 წლისთვის. მაგრამ ეს „მონოპოლია" ინოვაციის შეჩერებას ნიშნავდა. IE6 წლების განმავლობაში არ განახლებულა.\n\n2004 წელს Mozilla Firefox-მა გამოჩნდა, 2008 წელს Google Chrome-მა, და ბრაუზერების ახალი ომი დაიწყო — ამჯერად უკეთესი სტანდარტების მხარდაჭერით. დღეს Chrome, Firefox, Safari და Edge ერთ სტანდარტს მისდევენ.',
    moral: 'Standardization matters — when platforms compete without shared standards, developers and users suffer.',
    moralKa: 'სტანდარტიზაცია მნიშვნელოვანია. როდესაც პლატფორმები საერთო სტანდარტის გარეშე კონკურენციას აწარმოებენ, განიცდიან დეველოპერებიც და მომხმარებლებიც.'
  },
  {
    id: 3,
    title: 'Node.js: JavaScript Leaves the Browser',
    titleKa: 'Node.js: JavaScript ბრაუზერიდან გადის',
    chapterId: 16,
    icon: 'mdi:nodejs',
    content: 'In 2009, Ryan Dahl presented Node.js at JSConf EU, allowing JavaScript to run on the server side for the first time.',
    contentKa: '2009 წელს, რაიან დალმა JSConf EU კონფერენციაზე Node.js წარადგინა და JavaScript-ის სამყარო სამუდამოდ შეცვალა.\n\nდალი იმ პერიოდში ფრუსტრირებული იყო სერვერის მხარის პროგრამირების მდგომარეობით. ტრადიციული სერვერები, როგორიცაა Apache, ყოველ კავშირს ცალკე ნაკადს (thread) უნიშნავდნენ, რაც ათასობით ერთდროული მომხმარებლის დროს ნელი ხდებოდა.\n\nდალმა Google-ის V8 JavaScript ძრავი (Chrome-ისთვის შექმნილი) აიღო და სერვერის გარემოს ადაპტირება გაუკეთა. Node.js-ის ინოვაცია იყო ასინქრონული, არა-ბლოკირებადი I/O მოდელი — ერთი ნაკადი მრავალ კავშირს ერთდროულად ამუშავებდა.\n\nNode.js-ის წარმატებამ npm (Node Package Manager) შექმნა, რომელიც დღეს მსოფლიოში ყველაზე დიდი პროგრამული ბიბლიოთეკების რეესტრია — 2 მილიონზე მეტი პაკეტით.\n\nNode.js-ის შემდეგ JavaScript ფულ-სტეკ ენა გახდა: ერთი ენით შეგიძლია ფრონტენდიც და ბექენდიც დაწერო. Netflix, PayPal, Uber, LinkedIn — ყველა ისინი Node.js-ს იყენებენ.',
    moral: 'Innovation often comes from rethinking existing tools for new purposes.',
    moralKa: 'ინოვაცია ხშირად არსებული ინსტრუმენტების ახალი მიზნებისთვის გადააზრებით მოდის. რაიან დალმა არ შექმნა ახალი ენა — მან არსებული ენა ახალ გარემოში გადაიტანა.'
  },
  {
    id: 4,
    title: 'The ES6 Revolution',
    titleKa: 'ES6 რევოლუცია',
    chapterId: 8,
    icon: 'mdi:rocket-launch-outline',
    content: 'In 2015, ECMAScript 6 (ES2015) was released, transforming JavaScript from a simple scripting language into a modern programming language.',
    contentKa: '2015 წელს ECMAScript 6 (ES2015) გამოვიდა და JavaScript-ი საფუძვლიანად შეცვალა. ეს იყო ენის ისტორიაში ყველაზე მნიშვნელოვანი განახლება ES5-ის (2009) შემდეგ.\n\nES6-მ შემოიტანა:\n• Arrow ფუნქციები (=>) — მოკლე და ელეგანტური ფუნქციების სინტაქსი\n• let და const — ბლოკ-სკოპის ცვლადები var-ის ნაცვლად\n• Template Literals — სტრინგების ინტერპოლაცია backtick-ებით\n• Destructuring — ობიექტებისა და მასივების მარტივი „დაშლა"\n• Promise-ები — ასინქრონული კოდის მართვის ახალი გზა\n• Class სინტაქსი — ობიექტ-ორიენტირებული პროგრამირების თანამედროვე სינტაქსი\n• Modules (import/export) — კოდის მოდულარიზაცია\n\nES6-მდე JavaScript-ს ხშირად „სათამაშო ენას" უწოდებდნენ. ES6-ის შემდეგ ის სერიოზულ, თანამედროვე პროგრამირების ენად იქცა.\n\nES6-ის გამოსვლის შემდეგ, TC39 კომიტეტმა ყოველწლიური განახლების ციკლი დააწესა. ყოველ წელს JavaScript-ს ახალი ფუნქციები ემატება, რაც მას მუდმივად განვითარებად ენას ხდის.',
    moral: 'Even established technologies can be revolutionized with the right improvements.',
    moralKa: 'დამკვიდრებული ტექნოლოგიებიც კი შეიძლება რევოლუციურად შეიცვალოს სწორი გაუმჯობესებებით. ES6-მ აჩვენა, რომ არასოდესაა გვიან ენის გადატვირთვა.'
  },
  {
    id: 5,
    title: 'The Rise of Modern Frameworks',
    titleKa: 'თანამედროვე ფრეიმვორკების აღზევება',
    chapterId: 1,
    icon: 'mdi:puzzle-outline',
    content: 'From jQuery to React, Angular, and Vue — the evolution of JavaScript frameworks changed how we build web applications.',
    contentKa: 'JavaScript-ის ფრეიმვორკების ისტორია ვებ-დეველოპმენტის ევოლუციის ამბავია.\n\n2006 წელს jQuery გამოჩნდა და DOM-თან მუშაობა გაამარტივა. „Write less, do more" იყო მისი დევიზი. jQuery-მ ბრაუზერებს შორის თავსებადობის პრობლემა გადაჭრა.\n\n2010 წელს Google-მა AngularJS წარმოადგინა — პირველი სრულფასოვანი SPA (Single Page Application) ფრეიმვორკი. მან two-way data binding და dependency injection შემოიტანა.\n\n2013 წელს Facebook-მა React გამოუშვა — ბიბლიოთეკა, რომელმაც ვირტუალური DOM და კომპონენტებზე დაფუძნებული არქიტექტურა შემოიტანა. React-მა UI-ს მშენებლობის მიდგომა რადიკალურად შეცვალა.\n\n2014 წელს ევან იუმ Vue.js შექმნა — მსუბუქი, მოქნილი ფრეიმვორკი, რომელმაც Angular-ისა და React-ის საუკეთესო იდეები გააერთიანა.\n\n2016 წელს Google-მა Angular (ვერსია 2+) გამოუშვა — AngularJS-ის სრული გადაწერა TypeScript-ზე, რომელიც უფრო მოდულარული და მაღალი წარმადობით გამოირჩეოდა.\n\nდღეს React, Angular და Vue „სამ დიდ ფრეიმვორკს" უწოდებენ. ახლახან Svelte, Solid და Astro-ც პოპულარობას იძენენ, რაც JavaScript-ის ეკოსისტემის უწყვეტ ინოვაციას აჩვენებს.',
    moral: 'The JavaScript ecosystem thrives because the community keeps innovating and building on each others ideas.',
    moralKa: 'JavaScript-ის ეკოსისტემა აყვავდება, რადგან საზოგადოება მუდმივად ინოვაციას ახდენს და ერთმანეთის იდეებს აშენებს. კონკურენცია უკეთეს ინსტრუმენტებს ქმნის.'
  }
];
