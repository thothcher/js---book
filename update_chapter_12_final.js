const fs = require('fs');
const path = 'c:/Users/vakht/Desktop/psy/src/app/data/book-data.ts';
let content = fs.readFileSync(path, 'utf8');

const id12Old = 'id: 12,';
const id12Start = content.indexOf(id12Old);
const id13Old = 'id: 13,';
const id13Start = content.indexOf(id13Old);

if (id12Start === -1 || id13Start === -1) {
    console.error('Could not find chapter markers');
    process.exit(1);
}

// Find the object start/end
const objStart = content.lastIndexOf('{', id12Start);
const objEnd = content.lastIndexOf('}', id13Start);

const newObj =   {
    id: 12,
    title: "Social Psychology",
    titleKa: "სოციალური ფსიქოლოგია",
    titleRu: "Социальная Психология",
    titleHy: "Սոցիալական հոգեբանություն",
    titleAz: "Sosial Psixologiya",
    description: "How others influence our thoughts, feelings, and behavior.",
    descriptionKa: "როგორ ახდენენ სხვები გავლენას ჩვენს აზრებზე, გრძნობებსა და ქცევაზე.",
    descriptionRu: "Как другие влияют на наши мысли, чувства и поведение.",
    descriptionHy: "Ինչպես են ուրիշներն ազդում մერ մտքերի, զգացմունքների և վարքի վրա:",
    descriptionAz: "Başqalarının düşüncələrimizə, hisslərimizə və davranışlarımıza necə təsir etdiyi.",
    icon: "mdi:account-group-outline",
    keyTopics: ["Conformity","Obedience","Attitudes","Group Behavior","Prejudice"],
    keyTopicsKa: ["კონფორმულობა","მორჩილება","დამოკიდებულებები","ჯგუფური ქცევა","ცრურწმენა"],
    keyTopicsRu: ["Соответствие","Послушание","Отношения","Групповое поведение","Предрассудки"],
    keyTopicsHy: ["Համապատասխանություն","Հնազանդություն","Վերաբերմունքներ","Խմբային վարքագիծ","Նախապաշարմունք"],
    keyTopicsAz: ["Uyğunluq","İtaət","Münasibətlər","Qrup Davranışı","Qərəz"],
    summary: "Social psychology studies how people think about, influence, and relate to each other. Covers conformity, obedience, cognitive dissonance, group behavior, and prejudice.",
    summaryKa: "სოციალური ფსიქოლოგია შეისწავლის, თუ როგორ ფიქრობენ ადამიანები ერთმანეთზე, როგორ ახდენენ გავლენას და როგორ უკავშირდებიან ერთმანეთს.",
    summaryRu: "Социальная психология изучает, как люди думают друг о друге, влияют друг на друга и относятся друг к другу. Охватывает конформизм, послушание, когнитивный диссонанс.",
    summaryHy: "Սոցիալական հոգեբանությունը ուսումնասիրում է, թե ինչպես են մարդիկ մտածում, ազդում և հարաբერվում միմյանց հետ: Ներառում է համապատասխանությունը, հնազանդությունը:",
    summaryAz: "Sosial psixologiya insanların bir-biri haqqında necə düşündüyünü, bir-birinə necə təsir etdiyini və münasibət qurduğunu öyrənir. Uyğunluq, itaət və qərəzləri əhatə edir.",
    keyPoints: [
      "Attribution theory: We explain others' behavior using dispositional (personality) or situational (environment) attributions. The fundamental attribution error: we overestimate personality and underestimate situations when judging others.",
      "Conformity (Asch): People agree with an obviously wrong answer to match the group about 37% of the time. Increases with group size (up to ~5) and unanimity.",
      "Obedience (Milgram): 65% of participants delivered what they believed were lethal electric shocks when instructed by an authority figure. Authority, proximity, and legitimacy increased obedience.",
      "Cognitive dissonance (Festinger): When our actions contradict our beliefs, we feel discomfort and change our attitudes to match our behavior. Explains why hazing rituals increase group loyalty.",
      "Group phenomena: Social facilitation (performing better on easy tasks when watched), Social loafing (working less in groups), Groupthink (cohesive groups suppress dissent), Deindividuation (anonymity reduces self-awareness).",
      "Prejudice involves stereotypes (beliefs), prejudice (attitudes), and discrimination (behaviors). Reduced through intergroup contact when groups have equal status and share common goals.",
      "Bystander effect (Darley & Latané): The more people present, the less likely anyone is to help. Caused by diffusion of responsibility and pluralistic ignorance."
    ],
    keyPointsKa: [
      "ატრიბუციის თეორია: ფუნდამენტური ატრიბუციის შეცდომა (პიროვნების გადაფასება).",
      "კონფორმულობა (აში): ჯგუფთან შეთანხმება 37%-ში, მაშინაც კი, როცა პასუხი აშკარად მცდარია.",
      "მორჩილება (მილგრემი): 65% მზად იყო მიეყენებინა „ლეტალური“ შოკი ავტორიტეტის მითითებით.",
      "კოგნიტური დისონანსი (ფესტინგერი): დისკომფორტი, როცა ქმედებები ეწინააღმდეგება რწმენას.",
      "ჯგუფური ფენომენები: სოციალური ფასილიტაცია, სოციალური ლოუფინგი, ჯგუფური აზროვნება.",
      "ცრურწმენა და დისკრიმინაცია: შემცირება შესაძლებელია კონტაქტის ჰიპოთეზით.",
      "მოწმის ეფექტი: პასუხისმგებლობის დიფუზია - მეტი ადამიანი ნიშნავს ნაკლებ დახმარებას."
    ],
    keyPointsRu: [
      "Теория атрибуции: фундаментальная ошибка атрибуции (переоценка личности).",
      "Конформизм (Аш): 37% соглашаются с заведомо ложным мнением группы.",
      "Послушание (Милгрэм): 65% нанесли «смертельный» удар током по приказу авторитета.",
      "Когнитивный диссонанс (Фестингер): дискомфорт при противоречии действий и убеждений.",
      "Групповые феномены: социальная фасилитация, социальная леность, огруппление мышления.",
      "Предрассудки и дискриминение: стереотипы (убеждения) → предрассудки (чувства).",
      "Эффект свидетеля: диффузия ответственности — чем больше людей, тем меньше помощи."
    ],
    keyPointsHy: [
      "Ատրիբուցիայի տեսություն. ատրիբուցիայի հիմնարար սխալ (անհատականության չափազանցում):",
      "Համապատասխանություն (Աշ). մարդկանց 37%-ը համաձայնում է խմբի սխալ կարწիքի հետ:",
      "Հնազանդություն (Միլգրեմ). 65%-ը պատրաստ էր «մահացու» հարված հասցնել հեղինაკության հրահանգով:",
      "Ճանաչողական դիսոնանს (Ֆեստինգեր). անհանგստություն հակասական համոზմունքների դեპքում:",
      "Խմբային երևույթներ. սոციալական ֆասილიտացիա, սոციալական լոֆինգ:",
      "Նախապաշարմունք և խտրականություն. կարծրատիպեր → նախապաշարմունքներ:",
      "Ականատեսի էֆեկտ. պատասխანատվության դիֆուზիա. որքան շატ մարդ, այնքան քիչ օգնություն:"
    ],
    keyPointsAz: [
      "Attribusiya nəzəriyyəsi: Başqalarının davranışını izah edərkən şəxsiyyəti həddindən artıq qiymətləndirib, vəziyyəti (situasiyanı) isə lazımınca qiymətləndirməmək (fundaemntal attribusiya xətası).",
      "Konformluq (Asch): İnsanlar qrupla uyğunlaşmaq üçün 37% hallarda aşkar səhv cavabla razılaşırlar.",
      "İtaət (Milgram): İştirakçıların 65%-i avtoritet fiqur tərəfindən tapşırıldıqda \"ölümcül\" elektrik şoku tətbiq etmişdir.",
      "Koqnitiv dissonans (Festinger): Hərəkətlərimiz inanclarımıza zidd olduqda hiss etdiyimiz narahatlıq.",
      "Qrup fenomenləri: Sosial asanlaşdırma (izlənildikdə daha yaxşı işləmək), Sosial tənbəllik (qrupda daha az işləmək), Qrup təfəkkürü (Groupthink).",
      "Qərəzlilik sterotipləri (inancları), qərəzləri (münasibətləri) və ayrı-seçkiliyi (davranışları) əhatə edir.",
      "Şahid effekti (Bystander effect): Nə qədər çox insan varsa, kömək ehtimalı bir o qədər azdır (məsuliyyətin diffuziyası)."
    ],
    funFact: "Zimbardo's Stanford Prison Experiment (1971) was meant to last 2 weeks but was stopped after just 6 days because \"guards\" became sadistic and \"prisoners\" showed signs of psychological breakdown — demonstrating the power of situational forces on behavior.",
    funFactKa: "ზიმბარდოს სტენფორდის ციხის ექსპერიმენტი (1971) მხოლოდ 6 დღე გაგრძელდა, რადგან „გუშაგები“ სადისტები გახდნენ, „პატიმრებს“ კი ფსიქოლოგიური აშლილობა დაეწყოთ.",
    funFactRu: "Стэнфордский тюремный эксперимент Зимбардо (1971) длился всего 6 дней из-за жестокости «охранников» и срывов «заключенных».",
    funFactHy: "Զիմբարդոյի Սթենֆորդի բանտային փորձը (1971) տևեց ընդամենը 6 օր «թիկնაპահների» դաժանության և «բանտարկյալների» հոգեկան խանგարումների պատճარով:",
    funFactAz: "Zimbardo-nun Stenford Həbsxana Eksperimenti (1971) 2 həftə davam etməli idi, lakin cəmi 6 gündən sonra dayandırıldı; çünki situasiya \"mühafizəçilər\"-i sadistə çevirmişdi.",
    realWorld: "Understanding conformity and obedience explains everything from workplace culture (\"nobody questions the boss\") to historical atrocities. Modern organizations use these insights to create psychological safety — environments where people feel safe to speak up.",
    realWorldKa: "კონფორმულობისა და მორჩილების გაგება ხსნის ყველაფერს - სამუშაო კულტურიდან ისტორიულ სისასტიკემდე. თანამედროვე ორგანიზაციები ამას იყენებენ „ფსიქოლოგიური უსაფრთხოების“ შესაქმნელად.",
    realWorldRu: "Понимание конформизма и послушания объясняет всё: от корпоративной культуры до исторических зверств. Это знание помогает создавать «психологическую безопасность».",
    realWorldHy: "Համապատասխանության և հնազանդության ըմբռնումը բացատրում է ամեն ինչ՝ աշխատանքային մշակույթից մինչև պատմական վայրագություններ:",
    realWorldAz: "Uyğunluq və itaəti başa düşmək iş yeri mədəniyyətindən tutmuş tarixi vəhşiliklərə qədər hər şeyi izah edir. Müasir təşkilatlar \"psixoloji təhlükəsizlik\" mühiti yaratmaq üçün bu məlumatlardan istifadə edirlər.",
    keyFigures: ["Solomon Asch","Stanley Milgram","Philip Zimbardo","Leon Festinger","Muzafer Sherif"],
    keyFiguresKa: ["სოლომონ აში", "სტენლი მილგრემი", "ფილიპ ზიმბარდო", "ლეონ ფესტინგერი", "მუზაფერ შერიფი"],
    keyFiguresRu: ["Соломон Аш", "Стэнли Милгрэм", "Филип Зимбардо", "Леон Фестингер", "Музафер Шериф"],
    keyFiguresHy: ["Սոլոմոն Աշ", "Ստենլի Միլգրեմ", "Ֆիლიպ Զիմբարդო", "Լեონ Ֆեստինգեր", "Մუզաֆեր Շერიֆ"],
    keyFiguresAz: ["Solomon Aş", "Stenli Milqram", "Filip Zimbardo", "Leon Festinger", "Muzafer Şerif"]
  };

content = content.substring(0, objStart) + newObj + content.substring(objEnd + 1);
fs.writeFileSync(path, content, 'utf8');
console.log('Chapter 12 updated successfully');