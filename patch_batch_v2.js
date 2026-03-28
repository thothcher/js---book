
import fs from 'fs';

const path = 'C:/Users/vakht/Desktop/psy/src/app/data/book-data.ts';
let content = fs.readFileSync(path, 'utf8');

// Function to replace the block after a specific title or id
function updateChapter(id, funFactObj, realWorldObj, keyFiguresObj) {
    const searchStr = `id: ${id},`;
    let startIdx = content.indexOf(searchStr);
    if (startIdx === -1) {
        console.error(`Chapter ${id} not found`);
        return;
    }

    // Find the end of this chapter object
    let endIdx = content.indexOf('  },', startIdx);
    if (endIdx === -1) {
        // Try the last chapter format if it doesn't have a trailing comma
        endIdx = content.indexOf('  }', startIdx);
    }

    let chapterBlock = content.substring(startIdx, endIdx);

    // Replace funFact block
    const funFactRegex = /funFact: ".*?",/s;
    const funFactReplacement = `funFact: "${funFactObj.en}",
    funFactKa: "${funFactObj.ka}",
    funFactRu: "${funFactObj.ru}",
    funFactHy: "${funFactObj.hy}",
    funFactAz: "${funFactObj.az}",`;
    chapterBlock = chapterBlock.replace(funFactRegex, funFactReplacement);

    // Replace realWorld block
    const realWorldRegex = /realWorld: ".*?",/s;
    const realWorldReplacement = `realWorld: "${realWorldObj.en}",
    realWorldKa: "${realWorldObj.ka}",
    realWorldRu: "${realWorldObj.ru}",
    realWorldHy: "${realWorldObj.hy}",
    realWorldAz: "${realWorldObj.az}",`;
    chapterBlock = chapterBlock.replace(realWorldRegex, realWorldReplacement);

    // Replace keyFigures block
    const keyFiguresRegex = /keyFigures: \[.*\]/s;
    const keyFiguresReplacement = `keyFigures: ${JSON.stringify(keyFiguresObj.en)},
    keyFiguresKa: ${JSON.stringify(keyFiguresObj.ka)},
    keyFiguresRu: ${JSON.stringify(keyFiguresObj.ru)},
    keyFiguresHy: ${JSON.stringify(keyFiguresObj.hy)},
    keyFiguresAz: ${JSON.stringify(keyFiguresObj.az)}`;
    chapterBlock = chapterBlock.replace(keyFiguresRegex, keyFiguresReplacement);

    content = content.substring(0, startIdx) + chapterBlock + content.substring(endIdx);
}

// Chapter 5
updateChapter(5,
    {
        en: "During REM sleep, your brain paralyzes your voluntary muscles (atonia) so you don't physically act out your dreams. When this system fails, people develop REM Sleep Behavior Disorder and may punch, kick, or jump out of bed while dreaming.",
        ka: "REM ძილის დროს თქვენი ტვინი პარალიზებას უკეთებს თქვენს ნებაყოფლობით კუნთებს (ატონია), რათა ფიზიკურად არ განახორციელოთ თქვენი სიზმრები.",
        ru: "Во время быстрого сна мозг парализует мышцы (атония), чтобы вы не могли совершать движения во сне.",
        hy: "REM քնի ժամանակ ձեր ուղեղը կաթվածահար է անում ձեր կամավոր մկանները (ատոնիա), որպեսզի դուք ֆիզիկապես չարտահայտեք ձեր երազները:",
        az: "REM yuxusu zamanı beyniniz iradi əzələlərinizi iflic edir (atoniya) ki, yuxularınızı fiziki olaraq həyata keçirməyəsiniz."
    },
    {
        en: "Understanding sleep stages has transformed shift work policies. Many hospitals and airlines now mandate minimum rest periods because research proved that sleep-deprived professionals make as many errors as intoxicated ones.",
        ka: "ძილის სტადიების გაგებამ შეცვალა ცვლებში მუშაობის პოლიტიკა. ბევრი საავადმყოფო და ავიაკომპანია ახლა მოითხოვს დასვენების მინიმალურ პერიოდს.",
        ru: "Понимание стадий сна изменило график работы во многих отраслях, например, в медицине и авиации.",
        hy: "Քնի փուլերի ըմբռնումը փոխել է հերթափոխային աշխատանքի քաղաքականությունը: Շատ հիվանդանոցներ և ավիաընկერություններ այժմ պահանջում են հանգստի նվազագույն ժամանակահատվածներ:",
        az: "Yuxu mərhələlərini başa düşmək növbəli iş siyasətini dəyişdirdi. Bir çox xəstəxanalar və aviaşirkətlər artıq minimum istirahət müddətlərini tələb edirlər."
    },
    {
        en: ["Sigmund Freud","J. Allan Hobson","Ernest Hilgard","William Dement"],
        ka: ["ზიგმუნდ ფროიდი","ჯ. ალან ჰობსონი","ერნესტ ჰილგარდი","უილიამ დემენტი"],
        ru: ["Зигмунд Фрейд","Дж. Аллан Хобсон","Эрнест Хилгард","Уильям Демент"],
        hy: ["Զիգմունդ Ֆրոյդ","Ջ. Ալան Հոբսոն","Էռնեստ Հիլգարդ","Ուիլյամ Դեմենտ"],
        az: ["Ziqmund Freyd","C. Allan Hobson","Ernest Hilqard","Vilyam Dement"]
    }
);

// Chapter 6
updateChapter(6,
    {
        en: "Slot machines use a variable-ratio reinforcement schedule — the same principle Skinner discovered makes behavior hardest to extinguish. This is why gambling can be so addictive: you never know when the next reward will come.",
        ka: "სათამაშო აპარატები იყენებენ ცვლად-შეფარდებით განმტკიცების განრიგს. სწორედ ამიტომ არის აზარტული თამაშები ასეთი დამოკიდებულების გამომწვევი.",
        ru: "Игровые автоматы используют режим подкрепления с переменным соотношением - тот же принцип, который делает поведение самым трудноискоренимым.",
        hy: "Խաղային ավտոմատներն օգտագործում են փոփոխական հարաբերակցությամբ ամրապնդման ժամանակացույց՝ նույն սկզբունքը, որը Սքիները պարզել էր, որ վարքագիծն ամենադժվարն է մարել:",
        az: "Slot maşınları dəyişən nisbətli gücləndirmə cədvəlindən istifadə edirlər - Skinnerin daxil etdiyi eyni prinsip davranışı söndürməyi ən çətinləşdirir."
    },
    {
        en: "Dog trainers use operant conditioning (clicker training = positive reinforcement). Advertisers pair products with pleasant images (classical conditioning). Social media \"likes\" use variable-ratio reinforcement to keep you scrolling.",
        ka: "ძაღლების გამწვრთნელები იყენებენ ოპერანტულ კონდიცირებას. რეკლამები კი პროდუქტს სასიამოვნო სურათებთან აკავშირებენ (კლასიკური კონდიცირება).",
        ru: "Дрессировщики собак используют оперантное обусловливание. Рекламодатели связывают продукты с приятными образами (классическое кондиционирование).",
        hy: "Շների վարժեցնողներն օգտագործում են օպերանտային պայմանավորում: Գովազդատուները ապրանքները զուգակցում են հաճելի պատկերների հետ (դասական պայմանավորում):",
        az: "İt təlimçiləri operant kondisionerdən istifadə edirlər. Reklamçılar məhsulları xoş şəkillərlə əlaqələndirirlər (klassik kondisioner)."
    },
    {
        en: ["Ivan Pavlov","B.F. Skinner","Albert Bandura","John Watson","Edward Thorndike"],
        ka: ["ივანე პავლოვი","ბ.ფ. სკინერი","ალბერტ ბანდურა","ჯონ უოტსონი","ედუარდ თორნდაიკი"],
        ru: ["Иван Павлов","Б.Ф. Скиннер","Альберт Бандура","Джон Уотсон","Эдвард Торндайк"],
        hy: ["Իվան Պավլով","Բ.Ֆ. Սքիներ","Ալբերտ Բանդուրա","Ջոն Ուոթսոն","Էդուարդ Թորնդայք"],
        az: ["İvan Pavlov","B.F. Skinner","Albert Bandura","Con Uotson","Eduard Torndayk"]
    }
);

// Chapter 7
updateChapter(7,
    {
        en: "The \"Google effect\" (digital amnesia) is a real phenomenon: people are less likely to remember information they know they can easily look up online. Your brain outsources memory storage to your phone!",
        ka: "„Google-ის ეფექტი“ (ციფრული ამნეზია) რეალური ფენომენია: ადამიანებს უფრო ნაკლებად ახსოვთ ინფორმაცია, რომელიც იციან, რომ ინტერნეტში ადვილად მოიძებნება.",
        ru: "«Эффект Google» (цифровая амнезия) — реальный феномен: люди хуже запоминают информацию, если знают, что её можно легко найти в интернете.",
        hy: "«Google-ի էֆեկտը» (թվային ամնեզիա) իրական երևույթ է. մարդիկ ավելի քիչ հավանական է, որ հիշեն տեղեկատվությունը, որը նրանք գիտեն, որ կարող են հեշտությամբ գտնել առցանց:",
        az: "\"Google effekti\" (rəqəmsal amneziya) real bir fenomendir: insanlar internetdə asanlıqla baxa biləcəklərini bildikləri məlumatı daha az yadda saxlayırlar."
    },
    {
        en: "Spaced repetition (reviewing at increasing intervals) is the single most effective study technique. Apps like Anki use it. Cramming the night before works for short-term recall but fades within days.",
        ka: "ინტერვალური გამეორება ყველაზე ეფექტური სასწავლო ტექნიკაა. ისეთ აპლიკაციებს, როგორიცაა Anki, ის საფუძვლად უდევს.",
        ru: "Интервальные повторения — самый эффективный метод обучения. Приложения вроде Anki используют именно эту стратегию.",
        hy: "Տարածված կրկնությունը (աճող ընդմიջումներով վերանայումը) ուսումնասირության ամենաարդյუნավետ մեთոդն է: Anki-ի նման հավելվածներն օգտագործում են այն:",
        az: "Aralıqlı təkrar ən effektiv təhsil texnikasıdır. Anki kimi proqramlar ondan istifadə edir."
    },
    {
        en: ["Hermann Ebbinghaus","Elizabeth Loftus","George Miller","Endel Tulving","Alan Baddeley"],
        ka: ["ჰერმანებინჰაუზი","ელიზაბეტ ლოფტუსი","ჯორჯ მილერი","ენდელ ტულვინგი","ალან ბედლი"],
        ru: ["Герман Эббингауз","Элизабет Лофтус","Джордж Миллер","Эндел Тулвинг","Алан Бэддели"],
        hy: ["Հերման Էբինգհաուզ","Էլիզաբեթ Լոֆտուս","Ջորջ Միլլեր","Էնդել Տուլվինգ","Ալան Բեդելի"],
        az: ["Herman Ebbinqaus","Elizabet Loftus","Corc Miller","Endel Tulvinq","Alan Beddeli"]
    }
);

// Chapter 8
updateChapter(8,
    {
        en: "The \"Dunning-Kruger effect\" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!",
        ka: "„დანინგ-კრიუგერის ეფექტი“ გვიჩვენებს, რომ ნაკლებად კომპეტენტური ადამიანები ყველაზე მეტად აფასებენ თავიანთ შესაძლებლობებს.",
        ru: "Эффект Даннинга-Крюгера: люди с низкой квалификацией склонны сильно переоценивать свои способности.",
        hy: "«Դանինգ-Կրյուգերի էֆեկտը» ցույց է տալիս, որ հմտության մեջ նվազագույն իրազեկություն ունեցող մարդիկ հակված են ամենաշატը գերագնահատել իրենց կարողությունները:",
        az: "\"Dunning-Kruger effekti\" göstərir ki, hər hansı bir bacarıqda ən az səriştəsi olan insanlar öz qabiliyyətlərini ən çox qiymətləndirməyə meyllidirlər."
    },
    {
        en: "Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making — his work reshaped economics and public policy.",
        ka: "კოგნიტური მიკერძოება ყველაზე მოქმედებს: ექიმებზე, მოსამართლეებზე. დანიელ კანემანმა მიიღო ნობელის პრემია სწორედ ამის კვლევისთვის.",
        ru: "Когнитивные искажения влияют на всех: врачей, судей, инвесторов. Даниэль Канеман получил Нобелевскую премию, показав, как эти ошибки формируют экономику.",
        hy: "Ճանաչողական կողմնակալությունները ազդում են բոլորի վրա՝ բժիշկների, դատավորների, ներդրողների: Դանիել Կանեմանը Նոբելյան մրցանակ է ստացել՝ ցույց տալով, թե ինչպես են մտածողության սխალները հանգեցնում կանխատեսելի սխალների որոշումների կայացման մեջ:",
        az: "Koqnitiv qərəzlər hər kəsə təsir edir: həkimlərə, hakimlərə, investorlara. Daniel Kaneman düşüncədəki sistematik qərəzlərin qərar qəbulunda proqnozlaşdırıla bilən səhvlərə necə gətirib çıxardığını göstərdiyinə görə Nobel mükafatı qazandı."
    },
    {
        en: ["Alfred Binet","Charles Spearman","Howard Gardner","Robert Sternberg","Noam Chomsky","Daniel Kahneman"],
        ka: ["ალფრედ ბინე","ჩარლზ სპირმენი","ჰოვარდ გარდნერი","რობერტ სტენბერგი","ნოამ ჩომსკი","დანიელ კანემანი"],
        ru: ["Альфред Бине","Чарльз Спирмен","Говард Гарднер","Роберт Стернберг","Ноам Хомский","Даниэль Канеман"],
        hy: ["Ալֆրեդ Բինե","Չարլզ Սփիրմեն","Հովարդ Գարդներ","Ռոբերտ Ստերնբերգ","Նոամ Չոմսկի","Դանիել Կանեման"],
        az: ["Alfred Bine","Charlz Spirmen","Hovard Qardner","Robert Sternberq","Noam Chomski","Daniel Kaneman"]
    }
);

fs.writeFileSync(path, content, 'utf8');
console.log('Batch update complete.');
