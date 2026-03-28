
import fs from 'fs';

const path = 'C:/Users/vakht/Desktop/psy/src/app/data/book-data.ts';
let content = fs.readFileSync(path, 'utf8');

function updateChapter(id, funFactObj, realWorldObj, keyFiguresObj) {
    const searchStr = `id: ${id},`;
    let startIdx = content.indexOf(searchStr);
    if (startIdx === -1) {
        console.error(`Chapter ${id} not found`);
        return;
    }

    let endIdx = content.indexOf('  },', startIdx);
    if (endIdx === -1) {
        endIdx = content.indexOf('  }', startIdx);
    }

    let chapterBlock = content.substring(startIdx, endIdx);

    const funFactRegex = /funFact: ".*?",/s;
    const funFactReplacement = `funFact: "${funFactObj.en}",
    funFactKa: "${funFactObj.ka}",
    funFactRu: "${funFactObj.ru}",
    funFactHy: "${funFactObj.hy}",
    funFactAz: "${funFactObj.az}",`;
    chapterBlock = chapterBlock.replace(funFactRegex, funFactReplacement);

    const realWorldRegex = /realWorld: ".*?",/s;
    const realWorldReplacement = `realWorld: "${realWorldObj.en}",
    realWorldKa: "${realWorldObj.ka}",
    realWorldRu: "${realWorldObj.ru}",
    realWorldHy: "${realWorldObj.hy}",
    realWorldAz: "${realWorldObj.az}",`;
    chapterBlock = chapterBlock.replace(realWorldRegex, realWorldReplacement);

    const keyFiguresRegex = /keyFigures: \[.*\]/s;
    const keyFiguresReplacement = `keyFigures: ${JSON.stringify(keyFiguresObj.en)},
    keyFiguresKa: ${JSON.stringify(keyFiguresObj.ka)},
    keyFiguresRu: ${JSON.stringify(keyFiguresObj.ru)},
    keyFiguresHy: ${JSON.stringify(keyFiguresObj.hy)},
    keyFiguresAz: ${JSON.stringify(keyFiguresObj.az)}`;
    chapterBlock = chapterBlock.replace(keyFiguresRegex, keyFiguresReplacement);

    content = content.substring(0, startIdx) + chapterBlock + content.substring(endIdx);
}

// Chapter 9
updateChapter(9,
    {
        en: "The \"visual cliff\" experiment showed that infants as young as 6 months have depth perception — they refuse to crawl onto a glass surface that appears to be a drop-off, even when their mothers call them.",
        ka: "„ვიზუალური კლდის“ ექსპერიმენტმა აჩვენა, რომ 6 თვის ჩვილებსაც კი აქვთ სიღრმის აღქმა.",
        ru: "Эксперимент с «зрительным обрывом» показал, что у младенцев уже в 6 месяцев есть восприятие глубины.",
        hy: "«Վիզուալ ժայռի» փորձը ցույც տվեց, որ նույნիսկ 6 ամսական նորածիններն ունեն խորության ընկալում:",
        az: "\"Vizual uçurum\" təcrübəsi göstərdi ki, 6 aylıq körpələrdə dərinlik qavrayışı var - onlar hətta anaları çağırsa da, eniş kimi görünən şüşə səthdə sürünməkdən imtina edirlər."
    },
    {
        en: "Understanding attachment styles (secure, anxious, avoidant) helps explain how early childhood experiences with caregivers shape our adult romantic relationships and emotional resilience.",
        ka: "მიჯაჭვულობის სტილის (უსაფრთხო, შფოთვითი, არიდებადი) გაგება ხსნის ბავშვობის გავლენას ზრდასრულობის ურთიერთობებზე.",
        ru: "Понимание типов привязанности (надежный, тревожный, избегающий) объясняет, как детский опыт влияет на отношения взрослых.",
        hy: "Կապվածության ոճերի (ապահով, անհանգիստ, խուսափողական) ըմբռնումն օգնում է բացատրել, թե ինչպես են վաղ մանկության փորձառությունները ձևավորում մեր չափահաս ռոմանտիկ հարաբերությունները:",
        az: "Bağlanma üslublarını (təhlükəsiz, narahat, qaçınan) başa düşmək, baxıcılarla erkən uşaqlıq təcrübələrinin böyüklərdəki romantik münasibətlərimizi və emosional möhkəmliyimizi necə formalaşdırdığını izah etməyə kömək edir."
    },
    {
        en: ["Jean Piaget","Erik Erikson","Lev Vygotsky","Lawrence Kohlberg","Mary Ainsworth"],
        ka: ["ჟან პიაჟე","ერიკ ერიკსონი","ლევ ვიგოტსკი","ლოურენს კოლბერგი","მერი ეინსვორთი"],
        ru: ["Жан Пиаже","Эрик Эриксон","Лев Выготский","Лоуренс Кольберг","Мэри Эйнсворт"],
        hy: ["Ժան Պիաժե","Էրիկ Էրիկսոն","Լև Վիգոտսկի","Լոուրենս Կոլբերգ","Մերի Էյնսվորթ"],
        az: ["Jan Piaje","Erik Erikson","Lev Viqotski","Lourens Kolberq","Meri Einsvort"]
    }
);

// Chapter 10
updateChapter(10,
    {
        en: "The \"marshmallow test\" showed that preschoolers who could delay gratification (wait for a second marshmallow) had better life outcomes decades later, including higher SAT scores and lower BMI.",
        ka: "„ზეფირის ტესტმა“ აჩვენა, რომ სკოლამდელი ასაკის ბავშვებს, რომლებსაც შეეძლოთ სიამოვნების გადავადება, ათწლეულების შემდეგ უკეთესი ცხოვრებისეული შედეგები ჰქონდათ.",
        ru: "«Зефирный тест» показал, что дети, способные отложить удовольствие, через десятилетия добивались больших успехов в жизни.",
        hy: "«Մարշմելոուի թեստը» ցույց տվեց, որ նախադպրոցականները, ովքեր կարող էին հետաձգել գոհունակությունը, տասնամյակներ անց ունեցել են կյանքի ավելի լավ արդյունքներ:",
        az: "\"Zefir testi\" göstərdi ki, həzzi təxirə sala bilən (ikinci zefiri gözləyən) məktəbəqədər uşaqlar onilliklər sonra daha yaxşı həyat nəticələrinə, o cümlədən daha yüksək SAT ballarına və daha aşağı BMI-ə malik olublar."
    },
    {
        en: "Companies like Google use Maslow's hierarchy to design workplaces: free food (physiological), job security (safety), team activities (belonging), recognition programs (esteem), and \"20% time\" for passion projects (self-actualization).",
        ka: "ისეთი კომპანიები, როგორიცაა Google, იყენებენ მასლოუს იერარქიას სამუშაო ადგილების შესაქმნელად: უფასო საკვები, სამუშაოს უსაფრთხოება.",
        ru: "Компании вроде Google используют иерархию Маслоу для организации работы: бесплатное питание, безопасность, командный дух.",
        hy: "Google-ի նման ընկերությունները օգտագործում են Մասլոուի հիերարխիան աշխատատեղեր նախագծելու համար՝ անվճար սնունդ, աշխատանքի անվտանգություն, թիմային գործունեություն:",
        az: "Google kimi şirkətlər iş yerlərini layihələndirmək üçün Maslow iyerarxiyasından istifadə edirlər: pulsuz yemək (fizioloji), iş təhlükəsizliyi (təhlükəsizlik), komanda fəaliyyətləri (aidiyyət), tanınma proqramları (hörmət) və ehtiras layihələri üçün \"20% vaxt\" (özünü reallaşdırma)."
    },
    {
        en: ["Abraham Maslow","William James","Walter Cannon","Stanley Schachter","Paul Ekman","Daniel Goleman"],
        ka: ["აბრაამ მასლოუ","უილიამ ჯეიმსი","უოლტერ კენონი","სტენლი შახტერი","პოლ ეკმანი","დანიელ გოულმანი"],
        ru: ["Абрахам Маслоу","Уильям Джеймс","Уолтер Кеннон","Стэнли Шехтер","Пол Экман","Дэниел Гоулман"],
        hy: ["Աբրահամ Մասլոու","Ուիլյամ Ջեյմս","Ուոլտեր Քենոն","Ստենլի Շախտեր","Պոլ Էկման","Դանիել Գոուլման"],
        az: ["Abraham Maslou","Vilyam Ceyms","Valter Kannon","Stenli Shaxter","Pol Ekman","Daniel Qoleman"]
    }
);

// Chapter 11
updateChapter(11,
    {
        en: "The Myers-Briggs Type Indicator (MBTI) is used by 88% of Fortune 500 companies, yet most personality psychologists consider it scientifically unreliable. The Big Five is the gold standard in research.",
        ka: "Myers-Briggs-ის ტესტს იყენებს Fortune 500 კომპანიების 88%, თუმცა ფსიქოლოგების უმეტესობა მას მეცნიერულად არასანდოდ მიიჩნევს.",
        ru: "Тест Майерс-Бриггс (MBTI) используют 88% компаний Fortune 500, хотя психологи считают его ненаучным. Золотой стандарт — «Большая пятерка».",
        hy: "Myers-Briggs Type Indicator-ը (MBTI) օգտագործվում է Fortune 500 ընկերությունների 88%-ի կողմից, սակայն հոգեբանների մեծ մասը այն համարում է գիտականորեն անվստահելի:",
        az: "Myers-Briggs Tip Göstəricisi (MBTI) Fortune 500 şirkətlərinin 88%-i tərəfindən istifadə olunur, lakin əksər şəxsiyyət psixoloqları bunu elmi baxımdan etibarsız hesab edirlər. Böyük Beşlik tədqiqatda qızıl standartdır."
    },
    {
        en: "Recruiters use Big Five assessments because Conscientiousness is the strongest personality predictor of job performance across all occupations. Agreeableness predicts teamwork, and Openness predicts creativity.",
        ka: "რეკრუტერები იყენებენ „დიდი ხუთეულის“ შეფასებებს, რადგან კეთილსინდისიერება სამუშაოს შესრულების ყველაზე ძლიერი პროგნოზირებადია.",
        ru: "Рекрутеры используют тесты «Большой пятерки», так как добросовестность — лучший предиктор успеха в любой работе.",
        hy: "Ռեկրուտերներն օգտագործում են Մեծ հնգյակի գնահատումները, քանի որ բարեխղճությունը աշխատանքի կատարողականի ամենաძლიერ անհատական ​​կանխատեսողն է բոլոր մասնագիտությունների գծով:",
        az: "İşə götürənlər Böyük Beşlik qiymətləndirmələrindən istifadə edirlər, çünki Vicdanlılıq bütün peşələr üzrə iş performansının ən güclü şəxsiyyət göstəricisidir."
    },
    {
        en: ["Sigmund Freud","Carl Jung","Alfred Adler","Carl Rogers","Gordon Allport","Hans Eysenck"],
        ka: ["ზიგმუნდ ფროიდი","კარლ იუნგი","ალფრედ ადლერი","კარლ როჯერსი","გორდონ ოლპორტი","ჰანს აიზენკი"],
        ru: ["Зигмунд Фрейд","Карл Юнг","Альфред Адлер","Карл Роджерс","Гордон Олпорт","Ганс Айзенк"],
        hy: ["Զիգմունդ Ֆրոյդ","Կարլ Յունգ","Ալֆրեդ Ադլեր","Կարլ Ռոջերս","Գորդոն Օլպորտ","Հանս Այզենկ"],
        az: ["Ziqmund Freyd","Karl Yunq","Alfred Adler","Karl Rocers","Qordon Allport","Hans Ayzenk"]
    }
);

// Chapter 12
updateChapter(12,
    {
        en: "Zimbardo's Stanford Prison Experiment (1971) was meant to last 2 weeks but was stopped after just 6 days because \"guards\" became sadistic and \"prisoners\" showed signs of psychological breakdown.",
        ka: "ზიმბარდოს სტენფორდის ციხის ექსპერიმენტი (1971) უნდა გაგრძელებულიყო 2 კვირა, მაგრამ შეწყდა 6 დღის შემდეგ.",
        ru: "Стэнфордский тюремный эксперимент Зимбардо (1971) должен был длиться 2 недели, но был остановлен через 6 дней из-за жестокости «охранников».",
        hy: "Զիմբարդոյի Սթենֆորդի բանտային փորձը (1971) պետք է տևեր 2 շաբաթ, բայց դադարեցվեց ընդամենը 6 օր հետո:",
        az: "Zimbardonun Stenford Həbsxana Təcrübəsi (1971) 2 həftə davam etməli idi, lakin cəmi 6 gündən sonra dayandırıldı, çünki \"mühafizəçilər\" sadistləşdi və \"məhbuslar\" psixoloji pozğunluq əlamətləri göstərdilər."
    },
    {
        en: "Understanding conformity and obedience explains everything from workplace culture (\"nobody questions the boss\") to historical atrocities. Modern organizations use these insights to create psychological safety.",
        ka: "კონფორმულობისა და მორჩილების გაგება ხსნის ყველაფერს - სამუშაო კულტურიდან ისტორიულ სისასტიკეებამდე.",
        ru: "Понимание конформизма и послушания объясняет всё: от корпоративной культуры до исторических трагедий.",
        hy: "Համապատասխանության և հնազանդության ըմբռնումը բացատրում է ամեն ինչ՝ աշխատանքային մշակույթից մինչև պատմական վայրագություններ:",
        az: "Uyğunluq və itaətkarlığı başa düşmək iş yeri mədəniyyətindən (\"heç kim müdirə sual vermir\") tarixi vəhşiliklərə qədər hər şeyi izah edir."
    },
    {
        en: ["Solomon Asch","Stanley Milgram","Philip Zimbardo","Leon Festinger","Muzafer Sherif"],
        ka: ["სოლომონ აში","სტენლი მილგრამი","ფილიპ ზიმბარდო","ლეონ ფესტინგერი","მუზაფერ შერიფი"],
        ru: ["Соломон Аш","Стэнли Милгрэм","Филипп Зимбардо","Леон Фестингер","Музафер Шериф"],
        hy: ["Սոլոմոն Աշ","Ստենլի Միլգրեմ","Ֆիլիպ Զիմբարդո","Լեոն Ֆեստինգեր","Մուզաֆեր Շերիֆ"],
        az: ["Solomon Ash","Stenli Milqram","Filip Zimbardo","Leon Festinger","Muzafer Sherif"]
    }
);

fs.writeFileSync(path, content, 'utf8');
console.log('Batch 3 update complete.');
