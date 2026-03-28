const fs = require('fs');
const path = 'c:/Users/vakht/Desktop/psy/src/app/data/book-data.ts';
let content = fs.readFileSync(path, 'utf8');

function replaceChapter(id, newObjectText) {
    const marker = 'id: ' + id + ',';
    const startIdx = content.indexOf(marker);
    if (startIdx === -1) {
        console.error('Could not find chapter ' + id);
        return false;
    }
    const openBrace = content.lastIndexOf('{', startIdx);
    
    // Find matching closing brace for this specific object
    let braceCount = 1;
    let closeBrace = -1;
    for (let i = openBrace + 1; i < content.length; i++) {
        if (content[i] === '{') braceCount++;
        if (content[i] === '}') braceCount--;
        if (braceCount === 0) {
            closeBrace = i;
            break;
        }
    }

    if (closeBrace === -1) {
        console.error('Could not find closing brace for chapter ' + id);
        return false;
    }

    content = content.substring(0, openBrace) + newObjectText + content.substring(closeBrace + 1);
    return true;
}

const ch14 =   {
    id: 14,
    title: "Psychological Disorders",
    titleKa: "ფსიქოლოგიური დარღვევები",
    titleRu: "Психологические расстройства",
    titleHy: "Հոգեբանական խանգარումներ",
    titleAz: "Psixoloji Pozğunluqlar",
    description: "Understanding abnormal behavior and mental illness.",
    descriptionKa: "არანორმალური ქცევისა და ფსიქიკური დაავადებების გაგება.",
    descriptionRu: "Понимание ненормального поведения и психических заболеваний.",
    descriptionHy: "Հասկանալ աննորմալ վարքագիծը և հոգեկան հիվանդությունները:",
    descriptionAz: "Anormal davranış və psixi xəstəlikləri başa düşmək.",
    icon: "mdi:emoticon-confused-outline",
    keyTopics: ["DSM-5","Anxiety Disorders","Mood Disorders","Schizophrenia","Personality Disorders"],
    keyTopicsKa: ["DSM-5","შფოთვითი აშლილობები","განწყობის აშლილობები","შიზოფრენია","პიროვნების აშლილობები"],
    keyTopicsRu: ["DSM-5","Тревожные расстройства","Аффективные расстройства","Шизофрения","Расстройства личности"],
    keyTopicsHy: ["DSM-5","Տագնապային խանգարումներ","Տրամադրության խանգարումներ","Շիზոֆրենիա","Անհատականության խանգարումներ"],
    keyTopicsAz: ["DSM-5","Anksiyete pozğunluqları","Əhval pozğunluqları","Şizofreniya","Şəxsiyyət pozğunluqları"],
    summary: "Psychological disorders cause significant distress or impairment. Covers anxiety, mood disorders, schizophrenia, and personality disorders with biological and social causes.",
    summaryKa: "ფსიქოლოგიური დარღვევები იწვევს მნიშვნელოვან დისტრესს ან ფუნქციონირების დარღვევას. მოიცავს შფოთვას, გუნება-განწყობის დარღვევებს, შიზოფრენიას და პიროვნების აშლილობებს.",
    summaryRu: "Психологические расстройства вызывают значительный дистресс или нарушение функционирования. Охватывает тревожные расстройства, расстройства настроения, шизофрению и расстройства личности.",
    summaryHy: "Հոգեբանական խանգարումները զգալի անհանգստություն կամ գործառույթների խանգարում են առաջացնում: Ներառում է տագնապային, տրամադրության խանգարումները, շիզոֆրենիան և անհատականության խանգարումները:",
    summaryAz: "Psixoloji pozğunluqlar əhəmiyyətli dərəcədə narahatlığa və ya fəaliyyətin pozulmasına səbəb olur. Anksiyete, əhval pozğunluqları, şizofreniya və şəxsiyyət pozğunluqlarını əhatə edir.",
    keyPoints: [
      "A psychological disorder is a pattern of thoughts, feelings, or behaviors that is deviant, distressful, and dysfunctional (the \"3 D's\"). Context and culture matter in defining \"abnormal.\"",
      "The DSM-5 (Diagnostic and Statistical Manual) is the standard classification system. It categorizes disorders by symptoms, not causes, and is used for diagnosis and insurance.",
      "Anxiety disorders (most common): Generalized Anxiety Disorder (persistent worry), Panic Disorder (sudden intense fear attacks), Phobias (irrational fear of specific things), OCD (obsessive thoughts + compulsive rituals), PTSD (after trauma).",
      "Mood disorders: Major Depressive Disorder (persistent sadness, loss of interest, lasting 2+ weeks) and Bipolar Disorder (alternating episodes of mania and depression). Depression is the leading cause of disability worldwide.",
      "Schizophrenia: a severe disorder involving positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, social withdrawal). Dopamine hypothesis: excess dopamine activity in certain brain pathways.",
      "Personality disorders: enduring, inflexible patterns. Antisocial PD (disregard for others' rights, lack of empathy), Borderline PD (unstable relationships and emotions), Narcissistic PD (grandiosity, need for admiration).",
      "The diathesis-stress model: disorders result from a genetic/biological predisposition (diathesis) + environmental triggers (stress). Neither alone is usually sufficient."
    ],
    keyPointsKa: [
      "ფსიქოლოგიური აშლილობა: აზრების, გრძნობების ან ქცევის პატერნი, რომელიც არის დევიანტური, დისტრესული და დისფუნქციური (3 D).",
      "DSM-5: ფსიქიკური აშლილობის კლასიფიკაციის სტანდარტული სისტემა. აჯგუფებს დარღვევებს სიმპტომების და არა მიზეზების მიხედვით.",
      "შფოთვითი დარღვევები: GAD (მუდმივი შფოთვა), პანიკური აშლილობა, ფობიები, OCD და PTSD (ტრავმის შემდეგ).",
      "გუნება-განწყობის დარღვევები: დეპრესია (ხანგრძლივი სევდა) და ბიპოლარული აშლილობა (მანიისა და დეპრესიის მონაცვლეობა).",
      "შიზოფრენია: მძიმე დარღვევა, რომელიც მოიცავს ჰალუცინაციებს, დელუზიებსა და არაკოჰერენტულ მეტყველებას. დოფამინის ჰიპოთეზა.",
      "პიროვნების დარღვევები: ანტისოციალური (სხვების უფლებების უგულებელყოფა), მოსაზღვრე (Borderline) და ნარცისული აშლილობები.",
      "დიათეზა-სტრესის მოდელი: აშლილობა გენეტიკური წინასწარგანწყობისა და გარემო სტრესორების კომბინაციის შედეგია."
    ],
    keyPointsRu: [
      "Психологическое расстройство: паттерн мыслей или поведения, который является девиантным, дистрессовым и дисфункциональным (3 D).",
      "DSM-5: стандартная система классификации психических расстройств. Категоризирует расстройства по симптомам.",
      "Тревожные расстройства: ГТР (постоянная тревога), паническое расстройство, фобии, ОКР и ПТСР.",
      "Расстройства настроения: депрессия (стойкая грусть, потеря интереса) и биполярное расстройство (смена мании и депрессии).",
      "Шизофрения: тяжелое расстройство, включающее галлюцинации, бред и дезорганизованную речь. Дофаминовая гипотеза.",
      "Расстройства личности: антисоциальное (игнорирование прав других), пограничное и нарциссическое.",
      "Модель диатеза-стресса: расстройства возникают из-за сочетания генетической предрасположенности и стрессовых факторов среды."
    ],
    keyPointsHy: [
      "Հոգեբանական խանգարում. մտքերի կամ վարքագծի օրինաչափություն, որը դևիանտ է, դիսթրեսային և դիսֆունկցիոնալ (3 D):",
      "DSM-5. հոգեկան խանգարումների դասակարգման ստանդարտ համակարգ: Խանգարումները դասակարգում է ըստ ախտանիշների:",
      "Տագնապային խանգարումներ. ԳԱԽ (մշտական ​​անհանգստություն), աշխատանքային խանգարում, ֆոբիաներ, ՕԿԽ և ՀՍՍԽ:",
      "Տրամադրության խանգարումներ. դեպրեսիա (մշտական ​​տխրություն) և բիպոլյար խանգարում (մանիայի և դեպրեսիայի հերթագայում):",
      "Շիզոֆրենիա. ծանր խանգարում, որը ներառում է հալյուցինացիաներ, զառանցանքներ և ապակազմակերպված խոսք:",
      "Անհատականության խանգարումներ. հակասոցիալական, սահմանային և նարցիսիստական:",
      "Դիաթեզ-սթրես մոդել. խանգարումները գենետիկ հակվածության և շրջակա միջավայրի սթրեսների արդյունք են:"
    ],
    keyPointsAz: [
      "Psixoloji pozğunluq: Deviant, stresli və disfunksional fikir və ya davranış nümunəsidir (3 D).",
      "DSM-5 (Diaqnostik və Statistik Təlimat) standart təsnifat sistemidir. Pozğunluqları səbəblərinə görə deyil, simptomlarına görə qruplaşdırır.",
      "Anksiyete pozğunluqları: Ümumi Anksiyete (daimi narahatlıq), Panik Pozğunluq, Fobiyalar, OKP (OCD) və Travma sonrası stress (PTSD).",
      "Əhval pozğunluqları: Böyük Depressiv Pozğunluq (daimi kədər) və Bipolyar Pozğunluq (maniya və depressiya epizodlarının növbələşməsi).",
      "Şizofreniya: Hallüsinasiyalar, sayıqlamalar və nitq pozğunluğunu əhatə edən ağır pozğunluq. Dopamin hipotezi.",
      "Şəxsiyyət pozğunluqları: Antisosial PD (başqalarının hüquqlarına etinasızlıq), Borderline PD (qeyri-sabitlik) və Narsisistik PD.",
      "Diatez-stress modeli: Pozğunluqlar genetik meyil (diatez) və ekoloji tətikləyicilərin (stress) birləşməsi nəticəsində yaranır."
    ],
    funFact: "About 1 in 5 adults experiences a mental health condition in any given year. Depression and anxiety cost the global economy  trillion annually in lost productivity — yet most disorders are highly treatable with proper intervention.",
    funFactKa: "ზრდასრულთა დაახლოებით 20% ყოველწლიურად განიცდის ფსიქიკურ პრობლემას. დეპრესია და შფოთვა გლობალურ ეკონომიკას ყოველწლიურად 1 ტრილიონ დოლარს უჯდება პროდუქტიულობის დაკარგვის გამო.",
    funFactRu: "Примерно 1 из 5 взрослых ежегодно сталкивается с психическими проблемами. Депрессия и тревога обходятся мировой экономике в 1 триллион долларов в год из-за потери производительности.",
    funFactHy: "Յուրաքանչյուր 5 մեծահասակից մոտավորապես 1-ը ամեն տարի հոգեկան առողջության հետ կապված խնդիրներ է ունենում: Դեպրեսիան և տագնապը ամեն տարի 1 տրիլիոն դոլար են արժենում համաշխարհային տնտեսությանը:",
    funFactAz: "Hər il hər 5 yetkindən 1-i psixi sağlamlıq problemi yaşayır. Depressiya və anksiyete, məhsuldarlıq itkisi səbəbindən hər il qlobal iqtisadiyyata 1 trilyon dollara başa gəlir.",
    realWorld: "Mental health awareness has significantly reduced stigma, but barriers to care remain. Early identification and access to evidence-based treatments (like CBT or medication) lead to the best long-term outcomes for those living with disorders.",
    realWorldKa: "ფსიქიკური ჯანმრთელობის შესახებ ცნობიერების ამაღლებამ მნიშვნელოვნად შეამცირა სტიგმა. ადრეული იდენტიფიკაცია და მკურნალობაზე წვდომა საუკეთესო შედეგების გარანტიაა.",
    realWorldRu: "Повышение осведомленности о психическом здоровье снижает стигматизацию. Раннее выявление и доступ к лечению (КПТ, медикаменты) обеспечивают лучшие долгосрочные результаты.",
    realWorldHy: "Հոգեկան առողջության մասին իրազեկվածության բարձրացումը զգալիորեն նվազեցրել է ստիგման: Վաղ հայտնաբերումը և բուժման հասանելիությունը լավագույն արդյունքների գրավականն են:",
    realWorldAz: "Psixi sağlamlıq haqqında məlumatlılığın artması stiqmanı xeyli azaldıb, lakin qulluq üçün maneələr hələ də qalmaqdadır. Erkən müəyyənləşdirmə və sübuta əsaslanan müalicələrə çıxış ən yaxşı nəticələrə gətirib çıxarır.",
    keyFigures: ["David Rosenhan","Emil Kraepelin","Aaron Beck","Irving Gottesman"],
    keyFiguresKa: ["დევიდ როზენჰანი", "ემილ კრეპელინი", "აარონ ბეკი", "ირვინგ გოტესმანი"],
    keyFiguresRu: ["Дэвид Розенхан", "Эмиль Крепелин", "Аарон Бек", "Ирвинг Готтесман"],
    keyFiguresHy: ["Դեյվիդ Ռոզենհան", "Էմիլ Կրեպելին", "Աարոն Բեկ", "Իրվինգ Գոտեսման"],
    keyFiguresAz: ["David Rosenhan", "Emil Kraepelin", "Aaron Beck", "Irving Gottesman"]
  };

const ch15 =   {
    id: 15,
    title: "Therapy and Treatment",
    titleKa: "თერაპია და მკურნალობა",
    titleRu: "Терапия и лечение",
    titleHy: "Թերապիա և բուժում",
    titleAz: "Terapiya və Müalicə",
    description: "Different approaches to psychological treatment.",
    descriptionKa: "ფსიქოლოგიური მკურნალობის სხვადასხვა მიდგომები.",
    descriptionRu: "Различные подходы к психологическому лечению.",
    descriptionHy: "Հոգեբանական բուժման տարբեր մոտեցումներ:",
    descriptionAz: "Psixoloji müalicəyə müxtəlif yanaşmalar.",
    icon: "mdi:meditation",
    keyTopics: ["Psychotherapy","CBT","Humanistic Therapy","Pharmacotherapy","Evidence-Based Practice"],
    keyTopicsKa: ["ფსიქოთერაპია","CBT","ჰუმანისტური თერაპია","ფარმაკოთერაპია","მტკიცებულებებზე დაფუძნებული პრაქტიკა"],
    keyTopicsRu: ["Психотерапия","КПТ","Гуманистическая терапия","Фармакотерапия","Доказательная практика"],
    keyTopicsHy: ["Հոգեթերապիա","ԿՎԹ","Հումանիստական ​​թերապիա","Դեղորայքային բուჟում","Ապացուցողական პրაქտիկա"],
    keyTopicsAz: ["Psixoterapiya","KDP (CBT)","Humanist Terapiya","Farmakoterapiya","Sübuta əsaslanan təcrübə"],
    summary: "Treatment of disorders ranges from psychological therapy to biomedical approaches. Covers psychoanalysis, CBT, humanistic therapy, and medications like antidepressants.",
    summaryKa: "დარღვევების მკურნალობა მოიცავს ფსიქოლოგიურ თერაპიასა და ბიოსამედიცინო მიდგომებს. მოიცავს ფსიქოანალიზს, CBT-ს, ჰუმანისტურ თერაპიასა და მედიკამენტოზურ მკურნალობას.",
    summaryRu: "Лечение расстройств варьируется от психологической терапии до биомедицинских подходов. Охватывает психоанализ, КПТ, гуманистическую терапию и медикаменты.",
    summaryHy: "Խանգարումների բուժումը տատանվում է հոგեբանական թերապիայից մինչև բիոբժշկական մոտեցումներ: Ներառում է հոգեվերլուծությունը, ԿՎԹ-ն և դեղորայքային բուժումը:",
    summaryAz: "Pozğunluqların müalicəsi psixoloji terapiyadan biotibbi yanaşmalara qədər uzanır. Psixoanaliz, KDP (CBT), humanist terapiya və antidepresanlar kimi dərmanları əhatə edir.",
    keyPoints: [
      "Psychotherapy vs. Biomedical therapy. Psychotherapy involves psychological techniques; biomedical therapy involves medications or procedures. Many clinicians use an eclectic approach (combining multiple methods).",
      "Psychoanalysis (Freud): Aims to release repressed feelings through free association and dream analysis. Modern psychodynamic therapy focuses on childhood experiences and the therapeutic relationship.",
      "Humanistic therapy (Rogers): Client-centered therapy using unconditional positive regard, empathy, and genuineness. Focuses on self-actualization and personal growth here and now.",
      "Behavior therapy: Uses principles of classical and operant conditioning. Exposure therapy (for phobias) and systematic desensitization help eliminate unwanted responses. Aversion therapy pairs bad habits with negative stimuli.",
      "Cognitive therapy (Beck & Ellis): Teaches people new, more adaptive ways of thinking. Cognitive-Behavioral Therapy (CBT) combines cognitive and behavioral techniques and is currently the most research-supported therapy.",
      "Biomedical treatments: Antipsychotics (dopamine blockers), Antianxiety drugs (depress central nervous system), Antidepressants (increase serotonin/norepinephrine), and Mood stabilizers (Lithium). ECT (electroconvulsive therapy) is still used for severe depression.",
      "Therapeutic lifestyle change: Exercise, nutrition, sleep, social connection, and light exposure are effective in reducing depression and anxiety symptoms."
    ],
    keyPointsKa: [
      "ფსიქოთერაპია vs ბიოსამედიცინო თერაპია. ეკლექტიკური მიდგომა: მეთოდების კომბინაცია.",
      "ფსიქოანალიზი (ფროიდი): თავისუფალი ასოციაციები და სიზმრების ანალიზი.",
      "ჰუმანისტური თერაპია (როჯერსი): კლიენტზე ორიენტირებული თერაპია, ემპათია და უპირობო პოზიტიური დამოკიდებულება.",
      "ბიჰევიორალური თერაპია: ექსპოზიციური თერაპია (ფობიებისთვის) და სისტემური დესენსიბილიზაცია.",
      "კოგნიტურ-ბიჰევიორალური თერაპია (CBT): აზროვნებისა და ქცევის პატერნების შეცვლა. ყველაზე პოპულარული თანამედროვე მეთოდი.",
      "ბიოსამედიცინო მკურნალობა: ანტიფსიქოტიკები, ანტიდეპრესანტები, ლითიუმი და ECT (მძიმე დეპრესიისას).",
      "ცხოვრების წესი: ვარჯიში, ძილი და სოციალური კავშირები როგორც თერაპიული ელემენტები."
    ],
    keyPointsRu: [
      "Психотерапия против биомедицинской терапии. Эклектический подход: сочетание методов.",
      "Психоанализ (Фрейд): свободные ассоциации и анализ сновидений.",
      "Гуманистическая терапия (Роджерс): клиент-центрированная терапия, эмпатия и принятие.",
      "Поведенческая терапия: экспозиционная терапия (для фобий) и систематическая десенсибилизация.",
      "Когнитивно-поведенческая терапия (КПТ): изменение паттернов мышления и поведения.",
      "Биомедицинское лечение: антипсихотики, антидепрессанты, стабилизаторы настроения и ЭСТ.",
      "Изменение образа жизни: физическая активность, сон и питание как форма терапии."
    ],
    keyPointsHy: [
      "Հոգեթերապիա ընդդեմ բիոբժշկական թերապիայի: Էկլեկտիկ մոտեցում. մեթոդների համակցություն:",
      "Հոգեվերլուծություն (Ֆրեյդ). ազատ ասոციացիաներ և երազների վերլուծություն:",
      "Հումանիստական ​​թերապիա (Ռոջերս). հաճախորդակենտրոն թերապիա, էմպաթիա:",
      "Վարքային թերაპիա. էքսպոզիցիոն թերապիա (ֆոբիաների դեպքում) და սիստեմատիկ դեսենսիբիլիզացիա:",
      "Կոգնիտիվ-վարքային թերապիա (ԿՎԹ). մտածողության և վարքի փոփոխություն:",
      "Բիոբժշկական բուժում. հակապսիխոտիկներ, հակադեպրեսանտներ, լիթիում և Էլեկտրացնցումային թերապիա:",
      "Կենսակերպի փոփոխություն. մարզումներ, քուն և սնունդ՝ որպես թերապիա:"
    ],
    keyPointsAz: [
      "Psixoterapiya biotibbi terapiyaya qarşı. Bir çox həkim eklektik yanaşmadan (çoxsaylı üsulların birləşməsi) istifadə edir.",
      "Psixoanaliz (Freud): Azad assosiasiya və yuxu analizi vasitəsilə basdırılmış hissləri sərbəst buraxmağı hədəfləyir.",
      "Humanist terapiya (Rogers): Empatiya və səmimiyyətdən istifadə edən müştəri mərkəzli terapiya. Özünü reallaşdırmağa fokuslanır.",
      "Davranış terapiyası: Klassik və operant şərtlənmə prinsiplərindən istifadə edir. Ekspozisiya terapiyası və sistematik desensitizasiya.",
      "Koqnitiv terapiya (Beck və Ellis): İnsanlara düşünməyin daha adaptiv yollarını öyrədir. Koqnitiv-Davranış Terapiyası (KDP/CBT) hazırda ən çox araşdırma dəstəyi alan terapiyadır.",
      "Biotibbi müalicələr: Antipsixotiklər, Antianksiyete dərmanları, Antidepresanlar və Əhval stabilizatorları (Litium).",
      "Terapevtik həyat tərzi dəyişikliyi: İdman, qidalanma, yuxu və sosial əlaqə depressiya və anksiyete simptomlarını azaltmaqda təsirlidir."
    ],
    funFact: "Approximately 80% of psychotherapy clients report feeling better than those who do not go to therapy. Research shows that for mild-to-moderate depression, organized exercise can be as effective as antidepressant medication.",
    funFactKa: "ფსიქოთერაპიის კლიენტების 80% აღნიშნავს მდგომარეობის გაუმჯობესებას. ზომიერი დეპრესიის დროს ვარჯიში შეიძლება ისეთივე ეფექტური იყოს, როგორც მედიკამენტები.",
    funFactRu: "Около 80% клиентов психотерапии сообщают об улучшении состояния. При легкой и умеренной депрессии спорт может быть столь же эффективен, как антидепрессанты.",
    funFactHy: "Հոգեթերապիայի հաճախորդների 80%-ը նշում է վիճակի բարելավում: Թեթև դեպրեսիայի դեպքում մարզումները կարող են նույնքան արդյունավետ լինել, որքան դեղամիջոցները:",
    funFactAz: "Psixoterapiya müştərilərinin təxminən 80%-i terapiyaya getməyənlərə nisbətən özlərini daha yaxşı hiss etdiklərini bildirirlər. Araşdırmalar göstərir ki, orta dərəcəli depressiya üçün idman antidepresanlar qədər təsirli ola bilər.",
    realWorld: "Finding the right therapist is a collaborative process. The 'therapeutic alliance' (the bond between therapist and client) is often the single most important predictor of successful treatment, regardless of the specific technique used.",
    realWorldKa: "თერაპევტის სწორად შერჩევა თანამშრომლობითი პროცესია. „თერაპიული ალიანსი“ (კავშირი თერაპევტსა და კლიენტს შორის) წარმატებული მკურნალობის ყველაზე მნიშვნელოვანი წინაპირობაა.",
    realWorldRu: "Выбор терапевта — совместный процесс. «Терапевтический альянс» (связь между терапевтом и клиентом) — главный предиктор успеха лечения.",
    realWorldHy: "Թերապևտի ընտրությունը համատեղ գործընթաց է: «Թերապևտիկ դաշինքը» բուժման հաջողության հիմնական գործոնն է:",
    realWorldAz: "Düzgün terapevt tapmaq əməkdaşlıq prosesidir. \"Terapevtik ittifaq\" (terapevt və müştəri arasındakı bağ) istifadə edilən texnikadan asılı olmayaraq uğurlu müalicənin ən vacib proqnozlaşdırıcısıdır.",
    keyFigures: ["Sigmund Freud","Carl Rogers","B.F. Skinner","Aaron Beck","Albert Ellis"],
    keyFiguresKa: ["ზიგმუნდ ფროიდი", "კარლ როჯერსი", "ბ.ფ. სკინერი", "აარონ ბეკი", "ალბერტ ელისი"],
    keyFiguresRu: ["Зигмунд Фрейд", "Карл Роджерс", "Б.Ф. Скиннер", "Аарон Бек", "Альберт Эллис"],
    keyFiguresHy: ["Զիգմունդ Ֆրեյդ", "Կարլ Ռոջերս", "Բ. Ֆ. Սկիներ", "Աարոն Բեկ", "Ալբերտ Էլիս"],
    keyFiguresAz: ["Ziqmund Freyd", "Karl Rocers", "B.F. Skinner", "Aaron Beck", "Albert Ellis"]
  };

const ch16 =   {
    id: 16,
    title: "Industrial and Applied Psychology",
    titleKa: "ინდუსტრიული და გამოყენებითი ფსიქოლოგია",
    titleRu: "Индустриальная и прикладная психология",
    titleHy: "Ինդուստրիալ և կիրառական հոგեբանություն",
    titleAz: "Sənaye və Tətbiqi Psixologiya",
    description: "How psychology is applied in workplaces and everyday life.",
    descriptionKa: "როგორ გამოიყენება ფსიქოლოგია სამუშაო ადგილებზე და ყოველდღიურ ცხოვრებაში.",
    descriptionRu: "Как психология применяется на рабочем месте и в повседневной жизни.",
    descriptionHy: "Ինչպես է հոգեբանությունը կիրառվում աշխատավայրում և առօրյա կյանքում:",
    descriptionAz: "Psixologiyanın iş yerlərində və gündəlik həyatda necə tətbiq olunduğu.",
    icon: "mdi:briefcase-check-outline",
    keyTopics: ["Organizational Behavior","Human Factors","Environmental Psychology","Legal Psychology","Forensic Psychology"],
    keyTopicsKa: ["ორგანიზაციული ქცევა","ადამიანური ფაქტორები","გარემოს ფსიქოლოგია","იურიდიული ფსიქოლოგია","სასამართლო ფსიქოლოგია"],
    keyTopicsRu: ["Организационное поведение","Человеческие факторы","Экологическая психология","Юридическая психология","Судебная психология"],
    keyTopicsHy: ["Կազմակերպչական վարքագიծ","Մարդկային გործონներ","Էկոլոգիական հոგեბանություն","Իრავაბანական հոგებანություն","Դատական ​​հոգեբանություն"],
    keyTopicsAz: ["Təşkilati Davranış","İnsan Faktorları","Ətraf Mühit Psixologiyası","Hüquq Psixologiyası","Məhkəmə Psixologiyası"],
    summary: "Applied psychology uses research to solve practical problems. Includes Industrial-Organizational (I-O) psychology, human factors, and forensic psychology.",
    summaryKa: "გამოყენებითი ფსიქოლოგია იყენებს კვლევებს პრაქტიკული პრობლემების გადასაჭრელად. მოიცავს ინდუსტრიულ-ორგანიზაციულ (I-O) ფსიქოლოგიას, ერგონომიკასა და სასამართლო ფსიქოლოგიას.",
    summaryRu: "Прикладная психология использует исследования для решения практических задач. Включает индустриально-организационную (I-O) психологию, человеческие факторы и судебную психологию.",
    summaryHy: "Կիրառական հոգեբանությունն օգտագործում է հետազოტությունները գործնական խնդիրների լუծման համար: Ներառում է ինդուստրիալ-կազմակերպչական (I-O) հոგեբանությունը և դատական ​​հոգեբանությունը:",
    summaryAz: "Tətbiqi psixologiya praktiki problemləri həll etmək üçün araşdırmalardan istifadə edir. Sənaye-Təşkilati (I-O) psixologiya, insan faktorları və məhkəmə psixologiyasını əhatə edir.",
    keyPoints: [
      "Industrial-Organizational (I-O) psychology: Focuses on workplace behavior. Industrial (personnel) psychology deals with hiring and training. Organizational psychology deals with culture, leadership, and motivation.",
      "Human Factors (Engineering) Psychology: Designing machines and environments to fit human abilities and prevent errors (e.g., intuitive app interfaces or cockpit designs).",
      "Environmental Psychology: Studies how the physical environment (noise, light, green space) affects human behavior and well-being.",
      "Forensic Psychology: Intersection of psychology and the legal system. Includes jury selection, competency to stand trial, and criminal profiling.",
      "Sports Psychology: Applies psychological principles to improve performance, motivation, and recovery in athletes.",
      "Educational Psychology: Focuses on how people learn and the best teaching methods. Deals with learning disabilities and classroom management.",
      "The goal of all applied fields is to bridge the gap between scientific theory and real-world benefit for individuals and society."
    ],
    keyPointsKa: [
      "I-O ფსიქოლოგია: ფოკუსირებულია სამუშაო გარემოსა და თანამშრომელთა ქცევაზე.",
      "ადამიანური ფაქტორები: მანქანებისა და გარემოს დიზაინი ადამიანის შესაძლებლობების შესაბამისად.",
      "გარემოს ფსიქოლოგია: როგორ მოქმედებს სივრცე (განათება, ხმაური) ჩვენს კეთილდღეობაზე.",
      "სასამართლო ფსიქოლოგია: ფსიქოლოგია იურიდიულ სისტემაში (პროფაილინგი, ექსპერტიზა).",
      "სპორტის ფსიქოლოგია: აუმჯობესებს ათლეტების მოტივაციასა და შედეგებს.",
      "განათლების ფსიქოლოგია: სწავლის პროცესებისა და მეთოდების ოპტიმიზაცია.",
      "გამოყენებითი დარგების მიზანია თეორიული ცოდნის გამოყენება რეალური პრობლემების მოსაგვარებლად."
    ],
    keyPointsRu: [
      "I-O психология: фокус на поведении на рабочем месте, найме и лидерстве.",
      "Человеческие факторы: проектирование техники и интерфейсов под возможности человека.",
      "Экологическая психология: влияние физической среды (свет, шум) на поведение.",
      "Судебная психология: психология в юридической системе (суд, профилирование).",
      "Спортивная психология: повышение мотивации и результатов атлетов.",
      "Педагогическая психология: изучение того, как люди учатся, и оптимизация обучения.",
      "Цель прикладной психологии — решение реальных проблем людей и общества."
    ],
    keyPointsHy: [
      "I-O հոգեբանություն. կենտրոնանում է աշխատավայրում վարքագծի, հավաքագրման և առաջնորդության վրա:",
      "Մարդկային գործոններ. մեքենաների և միջավայրի նախագծում՝ մարդկային կարողություններին համապատասխան:",
      "Էկոլոգիական հոգեբանություն. ֆիզիկական միջավայրի (լույս, աղմուկ) ազդեցությունը մեզ վրա:",
      "Դատական ​​հոգեբանություն. հոգեբանությունը իրավական համակարգում (փորձաքննություն):",
      "Սպորտային հոգեբանություն. մարզիկների մոտիվացիայի և արդյունքների բարելավում:",
      "Կրթական հոգեբանություն. ուսուցման լավագույն մեթոդների մշակում:",
      "Կիրառական ոլորտների նպատակը գիտական ​​տեսությունը իրական օգուտի վերածելն է:"
    ],
    keyPointsAz: [
      "Sənaye-Təşkilati (I-O) psixologiya: İş yeri davranışına diqqət yetirir. Kadr seçimi, təlim, liderlik və motivasiya ilə məşğul olur.",
      "İnsan Faktorları (Mühəndislik) Psixologiyası: Maşınların və mühitlərin insan qabiliyyətlərinə uyğun dizayn edilməsi (məsələn, intuitiv proqram interfeysləri).",
      "Ətraf Mühit Psixologiyası: Fiziki mühitin (səs-küy, işıq, yaşıl sahə) insan davranışına və rifahına necə təsir etdiyini öyrənir.",
      "Məhkəmə Psixologiyası: Psixologiya və hüquq sisteminin kəsişməsi. Cinayətkarın profilinin çıxarılması və məhkəmə ekspertizasını əhatə edir.",
      "İdman Psixologiyası: Atletlərdə performansı, motivasiyanı və bərpanı yaxşılaşdırmaq üçün psixoloji prinsipləri tətbiq edir.",
      "Təhsil Psixologiyası: İnsanların necə öyrəndiyinə və ən yaxşı tədris üsullarına diqqət yetirir.",
      "Bütün tətbiqi sahələrin məqsədi elmi nəზორიო-თეორიული ცოდნის რეალურ სარგებლად ქცევაა."
    ],
    funFact: "The 'Hawthorne Effect' occurs when people improve or modify an aspect of their behavior in response to their awareness of being observed. This found that worker productivity increased just by showing interest in them, regardless of physical changes like lighting.",
    funFactKa: "„ჰოთორნის ეფექტი“ - ადამიანები აუმჯობესებენ ქცევას, როცა იციან, რომ მათ აკვირდებიან. პროდუქტიულობა იზრდება მხოლოდ იმიტომ, რომ მათ მიმართ ინტერესს იჩენენ.",
    funFactRu: "«Хоторнский эффект»: люди работают лучше, когда знают, что за ними наблюдают. Продуктивность растёт просто от внимания к сотрудникам.",
    funFactHy: "«Հոթորնի էֆեկտ». մարդիկ ավելի լավ են աշխատում, երբ գիտեն, որ իրենց դիտարկում են: Արտադրողականությունը բարձրանում է միայն ուշադրության շնորհիվ:",
    funFactAz: "\"Hawthorne Effect\" (Houtorn effekti): İnsanlar müşahidə olunduqlarını bildikdə davranışlarını yaxşılaşdırırlar. Bu, işçilərin məhsuldarlığının sadəcə onlara maraq göstərməklə artdığını aşkar etdi.",
    realWorld: "I-O psychologists are increasingly involved in remote work design and workplace diversity. In any career, applying basic psychology (like active listening or time management) can significantly boost professional success.",
    realWorldKa: "I-O ფსიქოლოგები სულ უფრო მეტად არიან ჩართულნი დისტანციური მუშაობის დიზაინსა და მრავალფეროვნების მართვაში. ნებისმიერ კარიერაში ფსიქოლოგიის გამოყენება წარმატების საწინდარია.",
    realWorldRu: "I-O психологи активно занимаются организацией удалённой работы. Применение психологии (активное слушание, тайм-менеджмент) помогает в любой профессии.",
    realWorldHy: "I-O հոգեբանները ակտիվորեն զբաղվում են հեռավար աշխատանքի կազմակերպմամբ: Հոգեբանության կիրառումը օգნում է ցանկացած մասնագիտության մեջ:",
    realWorldAz: "I-O psixoloqları məsafədən işin dizaynı və iş yerində müxtəlifliklə getdikcə daha çox məşğul olurlar. Hər hansı bir karyerada təməl psixologiyanı tətbiq etmək peşəkar uğuru artıra bilər.",
    keyFigures: ["Hugo Münsterberg","Frederick Taylor","Lillian Gilbreth","Elton Mayo"],
    keyFiguresKa: ["ჰუგო მიუნსტერბერგი", "ფრედერიკ ტეილორი", "ლილიან გილბრეტი", "ელტონ მეიო"],
    keyFiguresRu: ["Гуго Мюнстерберг", "Фредерик Тейлор", "Лиллиан Гилбрет", "Элтон Мэйо"],
    keyFiguresHy: ["Հյუգո Մյունստերբերգ", "Ֆրեդერიკ Թեյլոր", "Լիլիան Գիլբրեթ", "Էլթոն Մեյո"],
    keyFiguresAz: ["Hugo Münsterberq", "Frederik Taylor", "Lillian Gilbreth", "Elton Mayo"]
  };

if (replaceChapter(16, ch16)) {
  if (replaceChapter(15, ch15)) {
    if (replaceChapter(14, ch14)) {
       fs.writeFileSync(path, content, 'utf8');
       console.log('Chapters 14, 15, and 16 updated successfully');
    }
  }
}