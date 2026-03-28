
import os

file_path = r'c:\Users\vakht\Desktop\psy\src\app\data\book-data.ts'

def update_chapters():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # CHAPTER 5
    start_tag_5 = 'id: 5,'
    end_tag_5 = 'id: 6,'
    start_idx_5 = content.find(start_tag_5)
    end_idx_5 = content.find(end_tag_5)

    if start_idx_5 != -1 and end_idx_5 != -1:
        obj_start_5 = content.rfind('{', 0, start_idx_5)
        obj_end_5 = content.rfind('},', 0, end_idx_5) + 1

        new_obj_5 = """  {
    id: 5,
    title: "States of Consciousness",
    titleKa: "ცნობიერების მდგომარეობები",
    titleRu: "Состояния сознания",
    titleHy: "Գիտակցության վիճակներ",
    titleAz: "Şüur vəziyyətləri",
    description: "Understanding sleep, dreams, hypnosis, and psychoactive drugs.",
    descriptionKa: "ძილის, სიზმრების, ჰიპნოზისა და ფსიქოაქტიური ნივთიერებების გაგება.",
    descriptionRu: "Понимание сна, сновидений, гипноза и психоактивных веществ.",
    descriptionHy: "Քնի, երազների, հիպնոսի և հոգեակտիվ նյութերի ըմբռնում:",
    descriptionAz: "Yuxu, yuxu görmə, hipnoz və psixoaktiv maddələrin başa düşülməsi.",
    icon: "mdi:moon-waning-crescent",
    keyTopics: ["Sleep Cycles","Dreams","Hypnosis","Drugs","Meditation"],
    keyTopicsKa: ["ძილის ციკლები","სიზმრები","ჰიპნოზი","ნარკოტიკული საშუალებები","მედიტაცია"],
    keyTopicsRu: ["Циклы сна","Сновидения","Гипноз","Наркотики","Медитация"],
    keyTopicsHy: ["Քնի ցիկլեր","Երազներ","Հիպնոզ","Դեղամիჯոցներ","Մեդիտացիա"],
    keyTopicsAz: ["Yuxu dövrləri","Yuxular","Hipnoz","Dərmanlar","Meditasiya"],
    summary: "Consciousness is our awareness of ourselves and our environment. This chapter covers the biological rhythms of sleep, dream theories, and how drugs alter consciousness.",
    summaryKa: "ცნობიერება არის ჩვენი და ჩვენი გარემოს აღქმა. ეს თავი მოიცავს ძილის ბიოლოგიურ რიტმებს, სიზმრების თეორიებსა და იმას, თუ როგორ ცვლის ნივთიერებები ცნობიერებას.",
    summaryRu: "Сознание — это наше осознание себя и окружающей среды. Эта глава охватывает биологические ритмы сна, теории сновидений и то, как наркотики изменяют сознание.",
    summaryHy: "Գիտակցությունը մեր և մեր շրջապատի մասին տեղեկացվածությունն է: Այս գլուխը ներառում է քնի կենսաբանական ռիթմերը, երազների տեսությունները:",
    summaryAz: "Şüur özümüzü və ətrafımızı dərk etməkdir. Bu fəsil yuxunun bioloji ritmlərini, yuxu nəzəriyyələrini və dərmanların şüuru necə dəyişdiyini əhatə edir.",
    keyPoints: [
      "Circadian rhythm: the biological clock; regular bodily rhythms (e.g., temperature and wakefulness) that occur on a 24-hour cycle.",
      "Sleep stages: NREM-1 (light sleep, alpha waves), NREM-2 (sleep spindles), NREM-3 (deep sleep, delta waves), and REM (Rapid Eye Movement, vivid dreaming, muscle paralysis).",
      "Why we sleep: Protection, recuperation, memory consolidation, creative thinking, and supporting growth.",
      "Dream theories: Freud's wish fulfillment (manifest vs. latent content), information-processing, physiological function, neural activation, and cognitive development.",
      "Hypnosis: a social interaction in which one person suggests to another that certain perceptions, feelings, thoughts, or behaviors will spontaneously occur.",
      "Psychoactive drugs: Depressants (alcohol, opiates), Stimulants (caffeine, nicotine, cocaine, amphetamines), and Hallucinogens (LSD, marijuana).",
      "Tolerance, Withdrawal, and Addiction: The physiological and psychological effects of repeated drug use."
    ],
    keyPointsKa: [
      "ცირკადული რიტმი: ბიოლოგიური საათი; სხეულის რეგულარული რიტმები (მაგ., ტემპერატურა და სიფხიზლე), რომლებიც ხდება 24-საათიან ციკლში.",
      "ძილის სტადიები: NREM-1 (მსუბუქი ძილი), NREM-2 (ძილის თითისტარები), NREM-3 (ღრმა ძილი) და REM (თვალის სწრაფი მოძრაობა, სიზმრები).",
      "რატომ გვძინავს: დაცვა, აღდგენა, მეხსიერების კონსოლიდაცია, კრეატიული აზროვნება და ზრდის ხელშეწყობა.",
      "სიზმრების თეორიები: ფროიდის სურვილების ასრულება, ინფორმაციის დამუშავება, ფიზიოლოგიური ფუნქცია, ნეირონული აქტივაცია.",
      "ჰიპნოზი: სოციალური ინტერაქცია, რომლის დროსაც ერთი ადამიანი მეორეს სთავაზობს გარკვეულ აღქმებს, გრძნობებს ან ფიქრებს.",
      "ფსიქოაქტიური ნივთიერებები: დეპრესანტები (ალკოჰოლი), სტიმულატორები (კოფეინი, ნიკოტინი, კოკაინი) და ჰალუცინოგენები (LSD).",
      "ტოლერანტობა, აბსტინენცია და ადიქცია: ნივთიერებების განმეორებითი გამოყენების ფიზიოლოგიური და ფსიქოლოგიური ეფექტები."
    ],
    keyPointsRu: [
      "Циркадный ритм: биологические часы; регулярные телесные ритмы (например, температура и бодрствование), происходящие в 24-часовом цикле.",
      "Стадии сна: NREM-1 (легкий сон), NREM-2 (сонные веретена), NREM-3 (глубокий сон, дельта-волны) и REM (быстрый сон, яркие сновидения).",
      "Почему мы спим: Защита, восстановление, консолидация памяти, творческое мышление и поддержка роста.",
      "Теории сновидений: исполнение желаний по Фрейду, обработка информации, физиологическая функция, нейронная активация.",
      "Гипноз: социальное взаимодействие, при котором один человек внушает другому определенные ощущения, мысли или формы поведения.",
      "Психоактивные вещества: Депрессанты (алкоголь), Стимуляторы (кофеин, никотин, кокаин) и Галлюциногены (ЛСД, марихуана).",
      "Толерантность, Абстиненция и Зависимость: Физиологические и психологические эффекты многократного употребления наркотиков."
    ],
    keyPointsHy: [
      "Ցիրկադային ռիթմ. կենսաբանական ժամացույց. մարմնի կանոնավոր ռիթմեր, որոնք տեղի են ունենում 24-ժամյա ցիկլով:",
      "Քնի փուլերը. NREM-1 (թեթև քուն), NREM-2, NREM-3 (խորը քուն) և REM (աչքերի արագ շարժում, վառ երազներ):",
      "Ինչու ենք մենք քնում. պաշտպանություն, վերականգնում, հիշողության համախմբում, ստեղծագործական մտածողություն:",
      "Երազների տեսություններ. Ֆրեյդի ցանկությունների իրականացում, տեղեկատվության մշակում, ֆիზიոլոգիական գործառույթ:",
      "Հիպնոզ. սոციալական փոխազդեցություն, որտեղ մի անձը մյուսին առաջարկում է որոշակի ընկալումներ կամ մտքեր:",
      "Հոգեակտիվ դեղամիջոցներ. դեպրեսանտներ (ալկոհոլ), խթանիչներ (կոֆեին, նիկոտին) և հալյուցինոգեններ (LSD):",
      "Հանդուրժողականություն և կախվածություն. թմրամիջոցների բազմակի օգտագործման ֆիზიոլոգիական ազդեցությունները:"
    ],
    keyPointsAz: [
      "Sirkad ritm: bioloji saat; 24 saatlıq dövr ərzində baş verən müntəzəm bədən ritmləri (məsələn, temperatur və oyanıqlıq).",
      "Yuxu mərhələləri: NREM-1 (yüngül yuxu), NREM-2, NREM-3 (dərin yuxu) və REM (sürətli göz hərəkəti, parlaq yuxular).",
      "Niyə yatırıq: Qorunma, bərpa, yaddaşın möhkəmlənməsi, yaradıcı düşüncə və böyümənin dəstəklənməsi.",
      "Yuxu nəzəriyyələri: Freydin istəklərin yerinə yetirilməsi, məlumatın emalı, fizioloji funksiya, neyral aktivləşmə.",
      "Hipnoz: bir insanın digərinə müəyyən qavrayışların, hisslərin və ya davranışların kortəbii baş verəcəyini təklif etdiyi sosial qarşılıqlı təsir.",
      "Psixoaktiv maddələr: Depressantlar (alkoqol), Stimulyatorlar (kofein, nikotin, kokain) və Hallüsinogenlər (LSD).",
      "Tolerantlıq, Geri çəkilmə və Asılılıq: təkrar dərman istifadəsinin fizioloji və psixoloji təsirləri."
    ],
    funFact: "While you sleep, your brain is highly active, especially during REM sleep. Your brain actually paralyzes your muscles during REM to prevent you from acting out your dreams!",
    funFactKa: "სანამ გძინავთ, თქვენი ტვინი ძალიან აქტიურია, განსაკუთრებით REM ძილის დროს. REM ძილის დროს თქვენი ტვინი ახდენს კუნთების პარალიზებას, რათა არ იმოძრაოთ სიზმრების შესაბამისად!",
    funFactRu: "Пока вы спите, ваш мозг активно работает, особенно во время быстрого сна. Мозг фактически парализует ваши мышцы, чтобы вы не могли физически воплощать свои сны!",
    funFactHy: "Քնած ժամանակ ձեր ուղեղը շատ ակտիվ է, հատկապես REM քնի ժամանակ: Ձեր ուղեղը փաստացի կաթվածահար է անում ձեր մկանները:",
    funFactAz: "Siz yatarkən beyniniz çox aktivdir, xüsusən də REM yuxusu zamanı. Beyniniz yuxularınızı fiziki olaraq həyata keçirməyinizə mane olmaq üçün REM zamanı əzələlərinizi iflic edir!",
    realWorld: "Understanding sleep hygiene (like avoiding blue light before bed) can significantly improve cognitive performance and overall health.",
    realWorldKa: "ძილის ჰიგიენის გაგებამ (მაგალითად, ძილის წინ ლურჯი შუქის თავიდან აცილება) შეიძლება მნიშვნელოვნად გააუმჯობესოს კოგნიტური შესრულება და ჯანმრთელობა.",
    realWorldRu: "Понимание гигиены сна (например, отказ от синего света перед сном) может значительно улучшить когнитивные способности и общее состояние здоровья.",
    realWorldHy: "Քնի հիგიենայի ըմբռնումը (օրինակ՝ քնելուց առաջ կապույտ լույսից խուսափելը) կարող է զգալիորեն բարելավել ճանաჩողական աշխատանքը:",
    realWorldAz: "Yuxu gigiyenasını başa düşmək (yatmazdan əvvəl mavi işıqdan qaçmaq kimi) idrak performansını və ümumi sağlamlığı əhəmiyyətli dərəcədə yaxşılaşdıra bilər.",
    keyFigures: ["Sigmund Freud","Ernest Hilgard","William James"],
    keyFiguresKa: ["ზიგმუნდ ფროიდი", "ერნესტ ჰილგარდი", "უილიამ ჯეიმსი"],
    keyFiguresRu: ["Зигмунд Фрейд", "Эрнест Хилгард", "Уильям Джеймс"],
    keyFiguresHy: ["Զիգմունդ Ֆրեյդ", "Էռնեստ Հիլգարդ", "Ուիլյամ Ջեյմս"],
    keyFiguresAz: ["Ziqmund Freyd", "Ernest Hilqard", "Uilyam Ceyms"]
  }"""
        content = content[:obj_start_5] + new_obj_5 + content[obj_end_5:]

    # CHAPTER 6
    start_tag_6 = 'id: 6,'
    end_tag_6 = 'id: 7,'
    start_idx_6 = content.find(start_tag_6)
    end_idx_6 = content.find(end_tag_6)

    if start_idx_6 != -1 and end_idx_6 != -1:
        obj_start_6 = content.rfind('{', 0, start_idx_6)
        obj_end_6 = content.rfind('},', 0, end_idx_6) + 1

        new_obj_6 = """  {
    id: 6,
    title: "Learning",
    titleKa: "სწავლა",
    titleRu: "Научение",
    titleHy: "Ուսուցում",
    titleAz: "Öyrənmə",
    description: "Classical conditioning, operant conditioning, and observational learning.",
    descriptionKa: "კლასიკური განპირობებულობა, ოპერანტული განპირობებულობა და დაკვირვებით სწავლა.",
    descriptionRu: "Классическое обусловливание, оперантное обусловливание и научение через наблюдение.",
    descriptionHy: "Դասական պայմանավորվածություն և դիտողական ուսուցում:",
    descriptionAz: "Klassik şərtlənmə, operant şərtlənmə və müşahidə yolu ilə öyrənmə.",
    icon: "mdi:school-outline",
    keyTopics: ["Classical Conditioning","Operant Conditioning","Observational Learning","Cognitive Processes"],
    keyTopicsKa: ["კლასიკური განპირობებულობა","ოპერანტული განპირობებულობა","დაკვირვებით სწავლა","კოგნიტური პროცესები"],
    keyTopicsRu: ["Классическое обусловливание","Оперантное обусловливание","Научение через наблюдение","Когнитивные процессы"],
    keyTopicsHy: ["Դասական պայմանավորվածություն","Օպերանտային պայմանավորվածություն","Դիտողական ուսուցում"],
    keyTopicsAz: ["Klassik Şərtlənmə","Operant Şərtlənmə","Müşahidə yolu ilə öyrənmə","Koqnitiv proseslər"],
    summary: "Learning is a relatively permanent change in behavior due to experience. Key paradigms include Pavlov's classical conditioning, Skinner's operant conditioning, and Bandura's social learning theory.",
    summaryKa: "სწავლა არის ქცევის შედარებით მუდმივი ცვლილება გამოცდილების შედეგად. ძირითადი პარადიგმებია პავლოვს კლასიკური განპირობებულობა, სკინერის ოპერანტული განპირობებულობა და ბანდურას სოციალური სწავლის თეორია.",
    summaryRu: "Научение — это относительно стабильное изменение поведения в результате опыта. Основные парадигмы включают классическое обусловливание Павлова, оперантное обусловливание Скиннера и теорию социального научения Бандуры.",
    summaryHy: "Ուսուցումը վարքագծի համեմատաբար մշտական ​​փոփոխություն է փորձի շնորհիվ: Հիմնական պարադիգմները ներառում են Պավլովի դասական պայմանավորվածությունը:",
    summaryAz: "Öyrənmə təcrübə sayəsində davranışda baş verən nisbətən daimi dəyişiklikdir. Əsas paradiqmalara Pavlovun klassik şərtlənməsi, Skinnerin operant şərtlənməsi və Banduranın sosial öyrənmə nəzəriyyəsi daxildir.",
    keyPoints: [
      "Classical Conditioning: process of associating two stimuli (Pavlov's dogs: bell + food = salivation). Elements: Unconditioned Stimulus (US), Unconditioned Response (UR), Conditioned Stimulus (CS), Conditioned Response (CR).",
      "Operant Conditioning: behavior is strengthened by reinforcement or diminished by punishment (Skinner's Box).",
      "Reinforcement schedules: Continuous vs. Partial (fixed-ratio, variable-ratio, fixed-interval, variable-interval). Variable-ratio results in the highest response rate.",
      "Positive vs. Negative Reinforcement: Positive (adding a reward); Negative (removing something unpleasant). Both increase behavior.",
      "Punishment: Positive punishment (adding an unpleasant stimulus); Negative punishment (taking away a desirable stimulus). Both decrease behavior.",
      "Observational Learning: learning by watching others (Bandura's Bobo doll experiment). Involves modeling and vicarious reinforcement.",
      "Cognitive Learning: latent learning, insight learning, and the role of cognitive maps (Edward Tolman)."
    ],
    keyPointsKa: [
      "კლასიკური განპირობებულობა: ორი სტიმულის ასოცირების პროცესი (პავლოვს ძაღლები). ელემენტები: უპირობო სტიმული, უპირობო რეაქცია, პირობითი სტიმული, პირობითი რეაქცია.",
      "ოპერანტული განპირობებულობა: ქცევა ძლიერდება განმტკიცებით ან მცირდება დასჯით (სკინერის ყუთი).",
      "განმტკიცების განრიგი: უწყვეტი და ნაწილობრივი (ფიქსირებული პროპორცია, ცვლადი პროპორცია). ცვლადი პროპორცია ყველაზე მაღალ შედეგს იძლევა.",
      "დადებითი და უარყოფითი განმტკიცება: დადებითი (ჯილდოს დამატება); უარყოფითი (უსიამოვნოს მოცილება). ორივე ზრდის ქცევას.",
      "დასჯა: დადებითი დასჯა (უსიამოვნო სტიმულის დამატება); უარყოფითი დასჯა (სასურველი სტიმულის წართმევა). ორივე ამცირებს ქცევას.",
      "დაკვირვებით სწავლა: სწავლა სხვების ყურებით (ბანდურას ექსპერიმენტი ბობო თოჯინით).",
      "კოგნიტური სწავლება: ლატენტური სწავლა, ინსაიტ-სწავლა და კოგნიტური რუკების როლი."
    ],
    keyPointsRu: [
      "Классическое обусловливание: процесс ассоциации двух стимулов (собаки Павлова). Элементы: Безусловный стимул (БС), Безусловная реакция (БР), Условный стимул (УС), Условная реакция (УР).",
      "Оперантное обусловливание: поведение усиливается подкреплением или ослабляется наказанием (Ящик Скиннера).",
      "Графики подкрепления: Непрерывное против Частичного (фиксированное соотношение, переменное соотношение). Переменное соотношение дает самую высокую скорость реагирования.",
      "Положительное и Отрицательное подкрепление: Положительное (добавление награды); Отрицательное (удаление неприятного). Оба усиливают поведение.",
      "Наказание: Положительное наказание (неприятный стимул); Отрицательное наказание (лишение желаемого). Оба ослабляют поведение.",
      "Научение через наблюдение: обучение путем наблюдения за другими (эксперимент Бандуры с куклой Бобо).",
      "Когнитивное научение: латентное научение, научение через инсайт и роль когнитивных карт."
    ],
    keyPointsHy: [
      "Դասական պայմանավորվածություն. երկու խթանների ասոցացման գործընթաց (Պավլովի շներ):",
      "Օպերանտային պայմանավորվածություն. վարքագիծն ուժեղանում է ամրապնդմամբ կամ նվազում պատժով (Սկինների տուփ):",
      "Ամրապնդման ժամանակացույցեր. շարունակական ընդդեմ մասնակի: Փոփոխական հարաբերակցությունը տալիս է ամենաբարձր արդյունքը:",
      "Դրական և բացասական ամրապնդում. երկուսն էլ մեծացնում են վարքագիծը:",
      "Պատիժ. դրական պատիժ (տհաճ խթանի ավելացում), բացասական պատիժ (ցանկալի խթանի հեռացում):",
      "Դիտողական ուսուցում. սովորել՝ դիտելով ուրիշներին (Բանդուրայի Բոբո տիկնիկի փորձը):",
      "Ճանաչողական ուսուցում. լատենտային ուսուցում, ինսայթ ուսուցում:"
    ],
    keyPointsAz: [
      "Klassik Şərtlənmə: iki stimulun əlaqələndirilməsi prosesi (Pavlovun itləri: zəng + yemək = tüpürcək ifrazı).",
      "Operant Şərtlənmə: davranış möhkəmləndirmə ilə güclənir və ya cəza ilə azalır (Skinner qutusu).",
      "Möhkəmləndirmə cədvəlləri: Davamlı və ya Qismən. Dəyişən nisbətli cədvəl ən yüksək cavab sürətinə səbəb olur.",
      "Müsbət və Mənfi Möhkəmləndirmə: Müsbət (mükafat əlavə etmək); Mənfi (xoşagəlməz bir şeyi çıxarmaq). Hər ikisi davranışı artırır.",
      "Cəza: Müsbət cəza (xoşagəlməz stimul əlavə etmək); Mənfi cəza (arzuolunan stimulu götürmək). Hər ikisi davranışı azaldır.",
      "Müşahidə yolu ilə öyrənmə: başqalarını izləməklə öyrənmə (Banduranın Bobo gəlincik təcrübəsi).",
      "Koqnitiv Öyrənmə: latent öyrənmə, insayt öyrənmə və koqnitiv xəritələrin rolu."
    ],
    funFact: "Pigeons can be trained to recognize individual human faces and even identify cancer symptoms in X-rays using operant conditioning principles.",
    funFactKa: "მტრედების გაწვრთნა შესაძლებელია ადამიანის სახეების ამოსაცნობად და რენტგენის სურათებზე კიბოს სიმპტომების იდენტიფიცირებისთვისაც კი, ოპერანტული განპირობებულობის პრინციპების გამოყენებით.",
    funFactRu: "Голубей можно научить узнавать лица людей и даже выявлять симптомы рака на рентгеновских снимках, используя принципы оперантного обусловливания.",
    funFactHy: "Աղավնիները կարող են վարժեցվել ճանաչելու մարդկանց դեմքերը և նույնիսկ բացահայտել քաղցկեղի ախտանիշները ռենտգենյան ճառագայթների միջոցով:",
    funFactAz: "Göyərçinlər operant şərtlənmə prinsiplərindən istifadə edərək insan üzlərini tanımaq və hətta rentgen şüalarında xərçəng əlamətlərini aşkar etmək üçün öyrədilə bilər.",
    realWorld: "Marketers often use classical conditioning by pairing their products with pleasant music or attractive images, hoping you'll transfer those positive feelings to the product.",
    realWorldKa: "მარკეტოლოგები ხშირად იყენებენ კლასიკურ განპირობებულობას თავიანთი პროდუქტების სასიამოვნო მუსიკასთან ან მიმზიდველ სურათებთან დაკავშირებით.",
    realWorldRu: "Маркетологи часто используют классическое обусловливание, сочетая свои продукты с приятной музыкой или привлекательными изображениями.",
    realWorldHy: "Մարքեթոլոգները հաճախ օգտագործում են դասական պայմանավորվածություն՝ իրենց արտադրանքը զուգակցելով հաճելի երաժշտության կամ գրավիչ պատկերների հետ:",
    realWorldAz: "Marketoloqlar tez-tez məhsullarını xoş musiqi və ya cəlbedici şəkillərlə birləşdirərək klassik şərtlənmədən istifadə edirlər.",
    keyFigures: ["Ivan Pavlov","B.F. Skinner","Albert Bandura","John B. Watson"],
    keyFiguresKa: ["ივანე პავლოვი", "ბ.ფ. სკინერი", "ალბერტ ბანდურა", "ჯონ ბ. უოტსონი"],
    keyFiguresRu: ["Иван Павлов", "Б.Ф. Скиннер", "Альберт Бандура", "Джон Б. Уотсон"],
    keyFiguresHy: ["Իվան Պավլով", "Բ.Ֆ. Սկիներ", "Ալբերտ Բանդուրա", "Ջոն Բ. Ուոթսոն"],
    keyFiguresAz: ["İvan Pavlov", "B.F. Skinner", "Albert Bandura", "Con B. Uotson"]
  }"""
        content = content[:obj_start_6] + new_obj_6 + content[obj_end_6:]

    # CHAPTER 7
    start_tag_7 = 'id: 7,'
    end_tag_7 = 'id: 8,'
    start_idx_7 = content.find(start_tag_7)
    end_idx_7 = content.find(end_tag_7)

    if start_idx_7 != -1 and end_idx_7 != -1:
        obj_start_7 = content.rfind('{', 0, start_idx_7)
        obj_end_7 = content.rfind('},', 0, end_idx_7) + 1

        new_obj_7 = """  {
    id: 7,
    title: "Memory",
    titleKa: "მეხსიერება",
    titleRu: "Память",
    titleHy: "Հիշողություն",
    titleAz: "Yaddaş",
    description: "How we encode, store, and retrieve information.",
    descriptionKa: "როგორ ხდება ინფორმაციის კოდირება, შენახვა და აღდგენა.",
    descriptionRu: "Как мы кодируем, храним и извлекаем информацию.",
    descriptionHy: "Ինչպես ենք մենք կոդավորում, պահում և առբերում տեղեկատվությունը:",
    descriptionAz: "Məlumatı necə kodlayırıq, saxlayırıq və bərpa edirik.",
    icon: "mdi:brain-freeze-outline",
    keyTopics: ["Encoding","Storage","Retrieval","Forgetting","Memory Construction"],
    keyTopicsKa: ["კოდირება","შენახვა","აღდგენა","დავიწყება","მეხსიერების კონსტრუირება"],
    keyTopicsRu: ["Кодирование","Хранение","Извлечение","Забывание","Конструирование памяти"],
    keyTopicsHy: ["Կոդավորում","Պահպանում","Առբերում","Մոռացում","Հիշողության կառուցում"],
    keyTopicsAz: ["Kodlaşdırma","Saxlama","Bərpa","Unutma","Yaddaşın qurulması"],
    summary: "Memory is any indication that learning has persisted over time. It involves a three-stage model: sensory memory, short-term memory, and long-term memory.",
    summaryKa: "მეხსიერება არის ნებისმიერი მტკიცებულება იმისა, რომ სწავლა შენარჩუნებულია დროთა განმავლობაში. იგი მოიცავს სამეტაპიან მოდელს: სენსორულ, ხანმოკლე და ხანგრძლივ მეხსიერებას.",
    summaryRu: "Память — это любое свидетельство того, что научение сохраняется во времени. Она включает трехстадийную модель: сенсорная память, кратковременная память и долговременная память.",
    summaryHy: "Հիշողությունը ուսուցման պահպանման ցանկացած ցուցում է ժամանակի ընթացքում: Այն ներառում է երեք փուլով մոդել:",
    summaryAz: "Yaddaş öyrənmənin zamanla davam etdiyinin hər hansı bir göstəricisidir. Üç mərhələli modeli əhatə edir: duyğu yaddaşı, qısამüddətli yaddaş və uzunmüddətli yaddaş.",
    keyPoints: [
      "Three-stage model (Atkinson-Shiffrin): Sensory Memory (immediate, brief) → Short-term/Working Memory (active processing, 7+/-2 chunks) → Long-term Memory (permanent storage).",
      "Explicit Memory (declarative): conscious recall of facts (semantic) and events (episodic). Processed in the hippocampus.",
      "Implicit Memory (non-declarative): skills and procedures (procedural). Processed in the cerebellum and basal ganglia.",
      "Encoding strategies: Chunking, Mnemonics, Hierarchies, and the Spacing Effect (spaced study is better than cramming).",
      "Retrieval cues: Context-dependent memory (better recall in same environment) and State-dependent memory (better recall when in same state/mood).",
      "Forgetting: Encoding failure, storage decay, or retrieval failure (proactive vs. retroactive interference).",
      "Memory construction: we don't just 'replay' memories; we reconstruct them. Misinformation effect: incorporating misleading information into one's memory of an event."
    ],
    keyPointsKa: [
      "სამეტაპიანი მოდელი (ატკინსონ-შიფრინი): სენსორული მეხსიერება → ხანმოკლე/სამუშაო მეხსიერება → ხანგრძლივი მეხსიერება.",
      "ექსპლიციტური მეხსიერება: ფაქტების (სემანტიკური) და მოვლენების (ეპიზოდური) გაცნობიერებული გახსენება. მუშავდება ჰიპოკამპში.",
      "იმპლიციტური მეხსიერება: უნარები და პროცედურები. მუშავდება ნათხემსა და ბაზალურ განგლიებში.",
      "კოდირების სტრატეგიები: დაჯგუფება (ჩანქინგი), მნემონიკა, იერარქიები და განაწილების ეფექტი.",
      "აღდგენის მინიშნებები: კონტექსტზე დამოკიდებული და მდგომარეობაზე დამოკიდებული მეხსიერება.",
      "დავიწყება: კოდირების ჩავარდნა, შენახვის გაცვეთა ან აღდგენის ჩავარდნა (პროაქტიული და რეტროაქტიული ინტერფერენცია).",
      "მეხსიერების კონსტრუირება: ჩვენ არ ვუკრავთ მეხსიერებას ჩანაწერის მსგავსად, ჩვენ ვახდენთ მის რეკონსტრუქციას."
    ],
    keyPointsRu: [
      "Трехстадийная модель (Эткинсон-Шиффрин): Сенсорная память → Кратковременная/Рабочая память → Долговременная память.",
      "Эксплицитная память (декларативная): сознательное вспоминание фактов (семантическая) и событий (эпизодическая). Обрабатывается в гиппокампе.",
      "Имплицитная память (недекларативная): навыки и процедуры (процедурная). Обрабатывается в мозжечке и базальных ганглиях.",
      "Стратегии кодирования: Чанкинг (группировка), Мнемоника, Иерархии и Эффект распределения.",
      "Признаки извлечения: Контекстно-зависимая память и Состояние-зависимая память.",
      "Забывание: Ошибка кодирования, распад хранилища или ошибка извлечения (проактивная и ретроактивная интерференция).",
      "Конструирование памяти: мы не просто «воспроизводим» воспоминания; мы реконструируем их. Эффект дезинформации."
    ],
    keyPointsHy: [
      "Երեք փուլով մոդել (Ատկինսոն-Շիֆրին). Սենսորային հիշողություն → Կարճաժամկետ/աշխատանքային հիշողություն → Երկարաժամկետ հիշողություն:",
      "Էքսպլիցիտ հիշողություն. փաստերի (սեմանտիկ) և իրադարձությունների (էպիզոդիկ) գիտակցված վերհիշում:",
      "Իմպլիցիտ հիշողություն. հմտություններ և ընթացակարգեր:",
      "Կոդավորման ռազմավարություններ. խմբավորում, մնեմոնիկա և տարածության էֆեկտ:",
      "Առբերման հուշումներ. համատեքստից կախված հիշողություն և վիճակից կախված հիշողություն:",
      "Մոռացում. կոդավորման ձախողում (պրոակտիվ ընդդեմ ռետროակտիվ միջամտության):",
      "Հիշողության կառուցում. մենք ընդամենը չենք «վերարտադրում» հիշողությունները. մենք վերակառուցում ենք դրանք:"
    ],
    keyPointsAz: [
      "Üç mərhələli model (Atkinson-Shiffrin): Duyğu Yaddaşı → Qısamüddətli/İşçi Yaddaş → Uzunmüddətli Yaddaş.",
      "Açıq Yaddaş (deklarativ): faktların (semantik) və hadisələrin (epizodik) şüurlu şəkildə xatırlanması. Hipokampusda emal olunur.",
      "Gizli Yaddaş (qeyri-deklarativ): bacarıqlar və prosedurlar (prosedur yaddaşı). Beyincik və bazal qanqlialarda emal olunur.",
      "Kodlaşdırma strategiyaları: Qruplaşdırma (Chunking), Mnemonika, İyerarxiyalar və Boşluq Effekti.",
      "Bərpa işarələri: Kontekstdən asılı yaddaş və Vəziyyətdən asılı yaddaş.",
      "Unutma: Kodlaşdırma xətası, saxlama pozulması və ya bərpa xətası (proaktiv və ya retroaktiv müdaxilə).",
      "Yaddaşın qurulması: biz xatirələri sadəcə 'təkrar etmirik'; biz onları yenidən qururuq. Dezinformasiya effekti."
    ],
    funFact: "Your long-term memory has a virtually unlimited capacity. However, every time you retrieve a memory, you alter it slightly — memory is more like a Wikipedia page that can be edited than a static video recording.",
    funFactKa: "თქვენს ხანგრძლივ მეხსიერებას პრაქტიკულად შეუზღუდავი ტევადობა აქვს. თუმცა, ყოველ ჯერზე, როდესაც მეხსიერებიდან რამეს აღადგენთ, მას ოდნავ ცვლით.",
    funFactRu: "Ваша долговременная память имеет практически неограниченную емкость. Однако каждый раз, когда вы извлекаете воспоминание, вы его немного изменяете.",
    funFactHy: "Ձեր երկարաժամկետ հիշողությունը գործնականում անսահմանափակ հզորություն ունի:",
    funFactAz: "Uzunmüddətli yaddaşınız faktiki olaraq məhdudiyyətsiz tutuma malikdir. Bununla belə, hər dəfə bir xatirəni bərpa etdikdə, onu bir az dəyişirsiniz — yaddaş statik video yazıdan daha çox redaktə edilə bilən Wikipedia səhifəsinə bənzəyir.",
    realWorld: "To ace your exams, use the 'Testing Effect' and 'Spaced Practice.' Testing yourself frequently and spreading your study sessions over several days is much more effective than one long cramming session.",
    realWorldKa: "გამოცდების წარმატებით ჩასაბარებლად გამოიყენეთ 'ტესტირების ეფექტი' და 'განაწილებული პრაქტიკა'.",
    realWorldRu: "Чтобы успешно сдать экзамены, используйте «эффект тестирования» и «распределенную практику».",
    realWorldHy: "Քննությունները հաջողությամբ հանձնելու համար օգտագործեք «թեստավորման էֆեկտը» և «տարածված պրակտիկան»:",
    realWorldAz: "İmtahanlarda müvəffəqiyyət qazanmaq üçün 'Sınaq Effekti' və 'Aralıqlı Təcrübə'dən istifadə edin.",
    keyFigures: ["Hermann Ebbinghaus","Elizabeth Loftus","George Miller"],
    keyFiguresKa: ["ჰერმანებინგჰაუსი", "ელიზაბეტ ლოფტუსი", "ჯორჯ მილერი"],
    keyFiguresRu: ["Герман Эббингауз", "Элизабет Лофтус", "Джордж Миллер"],
    keyFiguresHy: ["Հերման Էբինգհաուս", "Էլիզաբեթ Լոֆտուս", "Ջորջ Միլլեր"],
    keyFiguresAz: ["Hermann Ebbinghaus", "Elizabeth Loftus", "George Miller"]
  }"""
        content = content[:obj_start_7] + new_obj_7 + content[obj_end_7:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully updated Chapters 5, 6, and 7")

if __name__ == "__main__":
    update_chapters()
