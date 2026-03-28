
import fs from 'fs';

let content = fs.readFileSync('C:/Users/vakht/Desktop/psy/src/app/data/book-data.ts', 'utf8');

const updates = [
  {
    old: `    funFact: "During REM sleep, your brain paralyzes your voluntary muscles (atonia) so you don't physically act out your dreams. When this system fails, people develop REM Sleep Behavior Disorder and may punch, kick, or jump out of bed while dreaming.",
    realWorld: "Understanding sleep stages has transformed shift work policies. Many hospitals and airlines now mandate minimum rest periods because research proved that sleep-deprived professionals make as many errors as intoxicated ones.",
    keyFigures: ["Sigmund Freud","J. Allan Hobson","Ernest Hilgard","William Dement"]`,
    new: `    funFact: "During REM sleep, your brain paralyzes your voluntary muscles (atonia) so you don't physically act out your dreams. When this system fails, people develop REM Sleep Behavior Disorder and may punch, kick, or jump out of bed while dreaming.",
    funFactKa: "REM ძილის დროს თქვენი ტვინი პარალიზებას უკეთებს თქვენს ნებაყოფლობით კუნთებს (ატონია), რათა ფიზიკურად არ განახორციელოთ თქვენი სიზმრები.",
    funFactRu: "Во время быстрого сна мозг парализует мышцы (атония), чтобы вы не могли совершать движения во сне.",
    funFactHy: "REM քնի ժամանակ ձեր ուղեղը կաթվածահար է անում ձեր կամավոր մկանները (ատոնիա), որպեսզի դուք ֆիզիկապես չարտահայտեք ձեր երազները:",
    funFactAz: "REM yuxusu zamanı beyniniz iradi əzələlərinizi iflic edir (atoniya) ki, yuxularınızı fiziki olaraq həyata keçirməyəsiniz.",
    realWorld: "Understanding sleep stages has transformed shift work policies. Many hospitals and airlines now mandate minimum rest periods because research proved that sleep-deprived professionals make as many errors as intoxicated ones.",
    realWorldKa: "ძილის სტადიების გაგებამ შეცვალა ცვლებში მუშაობის პოლიტიკა. ბევრი საავადმყოფო და ავიაკომპანია ახლა მოითხოვს დასვენების მინიმალურ პერიოდს.",
    realWorldRu: "Понимание стадий сна изменило график работы во многих отраслях, например, в медицине и авиации.",
    realWorldHy: "Քնի փուլերի ըմբռնումը փոխელ է հერթափոխային աշխատանքի քաղաքაკანობას: Շատ հիվանդանոցներ և ավիաընկերություններ այժմ պահանջում են հանգստի նվազագույն ժամանակահատվածներ:",
    realWorldAz: "Yuxu mərhələlərini başa düşmək növbəli iş siyasətini dəyişdirdi. Bir çox xəstəxanalar və aviaşirkətlər artıq minimum istirahət müddətlərini tələb edirlər.",
    keyFigures: ["Sigmund Freud","J. Allan Hobson","Ernest Hilgard","William Dement"],
    keyFiguresKa: ["ზიგმუნდ ფროიდი","ჯ. ალან ჰობსონი","ერნესტ ჰილგარდი","უილიამ დემენტი"],
    keyFiguresRu: ["Зигмунд Фрейд","Дж. Аллан Хобсон","Эрнест Хилгард","Уильям Демент"],
    keyFiguresHy: ["Զիգմունդ Ֆրոյդ","Ջ. Ալան Հոբսոն","Էռնեստ Հիլգարդ","Ուիլյամ Դեմենտ"],
    keyFiguresAz: ["Ziqmund Freyd","C. Allan Hobson","Ernest Hilqard","Vilyam Dement"]`
  },
  {
    old: `    funFact: "Slot machines use a variable-ratio reinforcement schedule — the same principle Skinner discovered makes behavior hardest to extinguish. This is why gambling can be so addictive: you never know when the next reward will come.",
    realWorld: "Dog trainers use operant conditioning (clicker training = positive reinforcement). Advertisers pair products with pleasant images (classical conditioning). Social media \\"likes\\" use variable-ratio reinforcement to keep you scrolling.",
    keyFigures: ["Ivan Pavlov","B.F. Skinner","Albert Bandura","John Watson","Edward Thorndike"]`,
    new: `    funFact: "Slot machines use a variable-ratio reinforcement schedule — the same principle Skinner discovered makes behavior hardest to extinguish. This is why gambling can be so addictive: you never know when the next reward will come.",
    funFactKa: "სათამაშო აპარატები იყენებენ ცვლად-შეფარდებით განმტკიცების განრიგს. სწორედ ამიტომ არის აზარტული თამაშები ასეთი დამოკიდებულების გამომწვევი.",
    funFactRu: "Игровые автоматы используют режим подкрепления с переменным соотношением - тот же принцип, который делает поведение самым трудноискоренимым.",
    funFactHy: "Խաղային ավտոմատներն օգտագործում են փոփոխական հարաբերակցությամբ ամրապնդման ժամանակացույց՝ նույն սկզბունքը, որը Սքիները պարզել էր, որ վարքագիծն ամենադժվարն է մարել:",
    funFactAz: "Slot maşınları dəyişən nisbətli gücləndirmə cədvəlindən istifadə edirlər - Skinnerin daxil etdiyi eyni prinsip davranışı söndürməyi ən çətinləşdirir.",
    realWorld: "Dog trainers use operant conditioning (clicker training = positive reinforcement). Advertisers pair products with pleasant images (classical conditioning). Social media \\"likes\\" use variable-ratio reinforcement to keep you scrolling.",
    realWorldKa: "ძაღლების გამწვრთნელები იყენებენ ოპერანტულ კონდიცირებას. რეკლამები კი პროდუქტს სასიამოვნო სურათებთან აკავშირებენ (კლასიკური კონდიცირება).",
    realWorldRu: "Дрессировщики собак используют оперантное обусловливание. Рекламодатели связывают продукты с приятными образами (классическое кондиционирование).",
    realWorldHy: "Շների վարժեցնողներն օգտագործում են օպերանտային պայմանավորում: Գովազդատուները ապրանքները զուգակցում են հաճելի պատկերների հետ (դասական պայմանավորում):",
    realWorldAz: "İt təlimçiləri operant kondisionerdən istifadə edirlər. Reklamçılar məhsulları xoş şəkillərlə əlaqələndirirlər (klassik kondisioner).",
    keyFigures: ["Ivan Pavlov","B.F. Skinner","Albert Bandura","John Watson","Edward Thorndike"],
    keyFiguresKa: ["ივანე პავლოვი","ბ.ფ. სკინერი","ალბერტ ბანდურა","ჯონ უოტსონი","ედუარდ თორნდაიკი"],
    keyFiguresRu: ["Иван Павлов","Б.Ф. Скиннер","Альберт Бандура","Джон Уотсон","Эдвард Торндайк"],
    keyFiguresHy: ["Իվան Պավլով","Բ.Ֆ. Սքիներ","Ալբերտ Բանդուրա","Ջոն Ուոթսոն","Էդուարդ Թորնդայք"],
    keyFiguresAz: ["İvan Pavlov","B.F. Skinner","Albert Bandura","Con Uotson","Eduard Torndayk"]`
  },
  {
    old: `    funFact: "The \\"Google effect\\" (digital amnesia) is a real phenomenon: people are less likely to remember information they know they can easily look up online. Your brain outsources memory storage to your phone!",
    realWorld: "Spaced repetition (reviewing at increasing intervals) is the single most effective study technique. Apps like Anki use it. Cramming the night before works for short-term recall but fades within days.",
    keyFigures: ["Hermann Ebbinghaus","Elizabeth Loftus","George Miller","Endel Tulving","Alan Baddeley"]`,
    new: `    funFact: "The \\"Google effect\\" (digital amnesia) is a real phenomenon: people are less likely to remember information they know they can easily look up online. Your brain outsources memory storage to your phone!",
    funFactKa: "„Google-ის ეფექტი“ (ციფრული ამნეზია) რეალური ფენომენია: ადამიანებს უფრო ნაკლებად ახსოვთ ინფორმაცია, რომელიც იციან, რომ ინტერნეტში ადვილად მოიძებნება.",
    funFactRu: "«Эффект Google» (цифровая амнезия) — реальный феномен: люди хуже запоминают информацию, если знают, что её можно легко найти в интернете.",
    funFactHy: "«Google-ի էֆեկտը» (թվային ամնեզիա) իրական երևույթ է. մարդիկ ավելի քիչ հավանական է, որ հիշեն տեղեկատվությունը, որը նրանք գիտեն, որ կարող են հեշտությամբ գտնել առցանց:",
    funFactAz: "\"Google effekti\" (rəqəmsal amneziya) real bir fenomendir: insanlar internetdə asanlıqla baxa biləcəklərini bildikləri məlumatı daha az yadda saxlayırlar.",
    realWorld: "Spaced repetition (reviewing at increasing intervals) is the single most effective study technique. Apps like Anki use it. Cramming the night before works for short-term recall but fades within days.",
    realWorldKa: "ინტერვალური გამეორება ყველაზე ეფექტური სასწავლო ტექნიკაა. ისეთ აპლიკაციებს, როგორიცაა Anki, ის საფუძვლად უდევს.",
    realWorldRu: "Интервальные повторения — самый эффективный метод обучения. Приложения вроде Anki используют именно эту стратегию.",
    realWorldHy: "Տարածված կրკնությունը (աճող ընდմიջումներով վերանայումը) ուսումնասირության ամենաարդյունավետ մեթոդն է: Anki-ի նման հավելվածներն օգտագործում են այն:",
    realWorldAz: "Aralıqlı təkrar ən effektiv təhsil texnikasıdır. Anki kimi proqramlar ondan istifadə edir.",
    keyFigures: ["Hermann Ebbinghaus","Elizabeth Loftus","George Miller","Endel Tulving","Alan Baddeley"],
    keyFiguresKa: ["ჰერმანებინჰაუზი","ელიზაბეტ ლოფტუსი","ჯორჯ მილერი","ენდელ ტულვინგი","ალან ბედლი"],
    keyFiguresRu: ["Герман Эббингауз","Элизабет Лофтус","Джордж Миллер","Эндел Тулвинг","Алан Бэддели"],
    keyFiguresHy: ["Հերման Էբինգհաուզ","Էլիզաբեթ Լոֆտուս","Ջորջ Միլլեր","Էնդել Տուլվինգ","Ալան Բեդելի"],
    keyFiguresAz: ["Herman Ebbinqaus","Elizabet Loftus","Corc Miller","Endel Tulvinq","Alan Beddeli"]`
  },
  {
    old: `    funFact: "The \\"Dunning-Kruger effect\\" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!",
    realWorld: "Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making — his work reshaped economics and public policy.",
    keyFigures: ["Alfred Binet","Charles Spearman","Howard Gardner","Robert Sternberg","Noam Chomsky","Daniel Kahneman"]`,
    new: `    funFact: "The \\"Dunning-Kruger effect\\" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!",
    funFactKa: "„დანინგ-კრიუგერის ეფექტი“ გვიჩვენებს, რომ ნაკლებად კომპეტენტური ადამიანები ყველაზე მეტად აფასებენ თავიანთ შესაძლებლობებს.",
    funFactRu: "Эффект Даннинга-Крюгера: люди с низкой квалификацией склонны сильно переоценивать свои способности.",
    funFactHy: "«Դանինգ-Կրյուգերի էֆեկտը» ցույց է տալիս, որ հմտության մեջ նվազագույն իրազեկություն ունեցող մարդիկ հակված են ամենաշատը գերագնահատել իրենց կարողությունները:",
    funFactAz: "\"Dunning-Kruger effekti\" göstərir ki, hər hansı bir bacarıqda ən az səriştəsi olan insanlar öz qabiliyyətlərini ən çox qiymətləndirməyə meyllidirlər.",
    realWorld: "Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making — his work reshaped economics and public policy.",
    realWorldKa: "კოგნიტური მიკერძოება ყველაზე მოქმედებს: ექიმებზე, მოსამართლეებზე. დანიელ კანემანმა მიიღო ნობელის პრემია სწორედ ამის კვლევისთვის.",
    realWorldRu: "Когнитивные искажения влияют на всех: врачей, судей, инвесторов. Даниэль Канеман получил Нобелевскую премию, показав, как эти ошибки формируют экономику.",
    realWorldHy: "Ճանաչողական կողմնակալությունները ազդում են բոլորի վրա՝ բժիշկների, դատավորների, ներդրողների: Դանիել Կանեմանը Նոբելյան մրցանակ է ստացել՝ ցույց տալով, թե ինչպես են մտածողության սխալները հանգեցնում կանխատեսելի սխალների որոշումների կայացման մեջ:",
    realWorldAz: "Koqnitiv qərəzlər hər kəsə təsir edir: həkimlərə, hakimlərə, investorlara. Daniel Kaneman düşüncədəki sistematik qərəzlərin qərar qəbulunda proqnozlaşdırıla bilən səhvlərə necə gətirib çıxardığını göstərdiyinə görə Nobel mükafatı qazandı.",
    keyFigures: ["Alfred Binet","Charles Spearman","Howard Gardner","Robert Sternberg","Noam Chomsky","Daniel Kahneman"],
    keyFiguresKa: ["ალფრედ ბინე","ჩარლზ სპირმენი","ჰოვარდ გარდნერი","რობერტ სტენბერგი","ნოამ ჩომსკი","დანიელ კანემანი"],
    keyFiguresRu: ["Альфред Бине","Чарльз Спирмен","Говард Гарднер","Роберт Стернберг","Ноам Хомский","Даниэль Канеман"],
    keyFiguresHy: ["Ալֆրեդ Բինե","Չարլզ Սփիրմեն","Հովարդ Գարդներ","Ռոբերտ Ստերնբերգ","Նոամ Չոմսկի","Դանիել Կանեման"],
    keyFiguresAz: ["Alfred Bine","Charlz Spirmen","Hovard Qardner","Robert Sternberq","Noam Chomski","Daniel Kaneman"]`
  }
];

// Perform replacements
updates.forEach(u => {
  if (content.indexOf(u.old) === -1) {
    console.error('FAILED to find fragment: ' + u.old.substring(0, 50) + '...');
  } else {
    content = content.replace(u.old, u.new);
  }
});

fs.writeFileSync('C:/Users/vakht/Desktop/psy/src/app/data/book-data.ts', content, 'utf8');
console.log('Update complete.');
