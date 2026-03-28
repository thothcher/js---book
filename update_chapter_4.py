
import os

file_path = r'c:\Users\vakht\Desktop\psy\src\app\data\book-data.ts'

def update_chapter_4():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    start_tag = 'id: 4,'
    end_tag = 'id: 5,'

    start_idx = content.find(start_tag)
    end_idx = content.find(end_tag)

    if start_idx == -1 or end_idx == -1:
        print("Could not find chapter 4 or 5")
        return

    obj_start = content.rfind('{', 0, start_idx)
    obj_end = content.rfind('},', 0, end_idx) + 1

    new_obj = """  {
    id: 4,
    title: "Sensation and Perception",
    titleKa: "შეგრძნება და აღქმა",
    titleRu: "Ощущение и восприятие",
    titleHy: "Սենսացիա և ընկալում",
    titleAz: "Hiss və qavrayış",
    description: "How our senses detect stimuli and our brain interprets them.",
    descriptionKa: "როგორ ამოიცნობს ჩვენი გრძნობები სტიმულს და ჩვენი ტვინი განმარტავს მათ.",
    descriptionRu: "Как наши органы чувств обнаруживают стимулы, а мозг их интерпретирует.",
    descriptionHy: "Ինჩպես է მერ զგაიარანները հაიტნაბერუმ գրգռիչները և մեր ուղեղը մեկնաբանում դրանք:",
    descriptionAz: "Hisslərimiz stimulları necə qəbul edir və beynimiz onları necə şərh edir.",
    icon: "mdi:eye-outline",
    keyTopics: ["Vision","Hearing","Other Senses","Perceptual Organization","Illusions"],
    keyTopicsKa: ["ხედვა","სმენა","სხვა გრძნობები","აღქმის ორგანიზაცია","ილუზიები"],
    keyTopicsRu: ["Зрение","Слух","Другие чувства","Перцептивная организация","Иллюзии"],
    keyTopicsHy: ["Տեսիլք","Լսողություն","Այլ զգայարաններ","Ընկալման կազմակերպություն","Պատրանքներ"],
    keyTopicsAz: ["Görmə","Eşitmə","Digər Hisslər","Qavrama təşkilatı","İllüziyalar"],
    summary: "Sensation is the process by which our sensory receptors detect stimuli; perception is how the brain interprets this. Covers visual processing, Gestalt principles, and perceptual illusions.",
    summaryKa: "შეგრძნება არის პროცესი, რომლის დროსაც ჩვენი სენსორული რეცეპტორები აღიქვამენ სტიმულებს; აღქმა კი არის ის, თუ როგორ განმარტავს ამას ტვინი. მოიცავს ვიზუალურ დამუშავებას, გეშტალტის პრინციპებსა და პერცეფციულ ილუზიებს.",
    summaryRu: "Ощущение — это процесс, посредством которого наши сенсорные рецепторы обнаруживают стимулы; восприятие — то, как мозг интерпретирует это. Охватывает визуальную обработку, принципы Гештальта и перцептивные иллюзии.",
    summaryHy: "Զգայությունը այն գործընթացն է, որի միջոցով մեր զգայական ռեցեպտորները հայտնաբերում են գրգռիչները. ընկալումն այն է, թե ինչպես է ուղեղը մեկնաբանում դա: Ներառում է տեսողական մշակումը, Գեշտալտ սկզბუნքները և ընկալման պատրանքները:",
    summaryAz: "Duyğu, hiss orqanlarımızın stimulları aşkar etdiyi prosesdir; qavrayış beynin bunu necə şərh etməsidir. Vizual emal, Geştalt prinsipləri və qavrayış illüziyalarını əhatə edir.",
    keyPoints: [
      "Sensation vs. Perception: Sensation is bottom-up (data-driven); perception is top-down (expectation-driven).",
      "Absolute threshold: the minimum stimulus intensity needed to detect a stimulus 50% of the time. Difference threshold (Weber's Law): the minimum difference between two stimuli required for detection.",
      "Visual system: Light enters the cornea, passes through the pupil and lens, and hits the retina (rods for low light, cones for color/detail).",
      "Auditory system: Sound waves enter the ear canal, vibrate the eardrum, move the ossicles, and reach the cochlea (where transduction happens).",
      "Perceptual organization (Gestalt): we organize sensations into meaningful wholes (proximity, similarity, continuity, closure).",
      "Depth perception: Binocular cues (retinal disparity) and monocular cues (linear perspective, interposition, relative size).",
      "Perceptual set: a mental predisposition to perceive one thing and not another, shaped by experience and context."
    ],
    keyPointsKa: [
      "შეგრძნება აღქმის წინააღმდეგ: შეგრძნება არის ქვემოდან ზევით (მონაცემებზე დაფუძნებული); აღქმა არის ზემოდან ქვევით (მოლოდინზე დაფუძნებული).",
      "აბსოლუტური ზღურბლი: სტიმულის მინიმალური ინტენსივობა, რომელიც საჭიროა სტიმულის აღმოსაჩენად დროის 50%-ში. სხვაობის ზღურბლი (ვებერის კანონი).",
      "ვიზუალური სისტემა: სინათლე ხვდება რქოვანაში, გადის გუგასა და ბროლში და აღწევს ბადურას (ჩხირები დაბალი განათებისთვის, კოლბები ფერისთვის).",
      "სმენის სისტემა: ბგერითი ტალღები შედის ყურის არხში, არხევს დაფის აპკს და აღწევს ლოკოკინას (სადაც ხდება ტრანსდუქცია).",
      "პერცეფციული ორგანიზაცია (გეშტალტი): ჩვენ ვაორგანიზებთ შეგრძნებებს მნიშვნელობის მქონე მთლიანობებად (სიახლოვე, მსგავსება, უწყვეტობა, შეკვრა).",
      "სიღრმის აღქმა: ბინოკულარული ნიშნები (რეტინალური დისპარატულობა) და მონოკულარული ნიშნები (ხაზოვანი პერსპექტივა, ინტერპოზიცია).",
      "პერცეფციული განწყობა: ფსიქიკური წინასწარგანწყობა აღვიქვათ ერთი რამ და არა სხვა, რაც ფორმირდება გამოცდილებითა და კონტექსტით."
    ],
    keyPointsRu: [
      "Ощущение против Восприятия: Ощущение идет снизу вверх (на основе данных); восприятие — сверху вниз (на основе ожиданий).",
      "Абсолютный порог: минимальная интенсивность стимула, необходимая для его обнаружения в 50% случаев. Разностный порог (Закон Вебера).",
      "Зрительная система: Свет входит через роговицу, проходит через зрачок и хрусталик, попадает на сетчатку (палочки для слабого света, колбочки для цвета).",
      "Слуховая система: Звуковые волны входят в ушной канал, вибрируют барабанную перепонку и достигают улитки (где происходит трансдукция).",
      "Перцептивная организация (Гештальт): мы организуем ощущения в осмысленные целые образы (близость, сходство, непрерывность, замкнутость).",
      "Восприятие глубины: Бинокулярные признаки (ретинальная диспарность) и монокулярные признаки (линейная перспектива, интерпозиция).",
      "Перцептивная установка: ментальная предрасположенность воспринимать одно, а не другое, сформированная опытом и контекстом."
    ],
    keyPointsHy: [
      "Զգայությունն ընդդեմ ընկալման. զգայությունը ներքևից վերև է (տվյալների վրա հիմնված). ընկալումը վերևից ներքև է (սպասումների վրա հիմնված):",
      "Բացարձակ շեմ. խթանի նվազագույն ինտենսիվությունը, որն անհրաժեշտ է այն հայտնաբերելու համար ժամանակի 50%-ում: Տարբերության շեմ (Վեբերի օրենք):",
      "Տեսողական համակարգ. լույսը մտնում է եղջերաթաղանթ, անցնում բիբի և ոսպնյակի միջով և հարվածում ցանցաթաղանթին:",
      "Լսողական համակարգ. ձայնային ալիքները թրթռում են թմբկաթաղանթը և հասնում խխունջին (որտեղ տեղի է ունենում տրանսդուկցիան):",
      "Ընկալման կազմակերպում (Գեշտալտ). մենք կազմակերպում ենք զգայությունները իմաստալից ամբողջությունների մեջ (մոտիկություն, ნմանություն):",
      "Խորության ընկալում. բինոկուլյար հուշումներ և մոնոկուլյար հուշումներ (գծային հեռանկար, հարաբերական չափ):",
      "Ընկալման հավաքածու. մտավոր հակվածություն՝ ընկալելու մի բան և ոչ մյուսը՝ ձևավորված փորձով և համատեքստով:"
    ],
    keyPointsAz: [
      "Duyğu və Qavrayış: Duyğu aşağıdan yuxarıdır (məlumat əsaslı); qavrayış yuxarıdan aşağıdır (gözlənti əsaslı).",
      "Mütləq hədd: stimulu 50% hallarda aşkar etmək üçün lazım olan minimum intensivlik. Fərq həddi (Veber qanunu).",
      "Vizual sistem: İşıq buynuz qişaya daxil olur, bəbək və büllurdan keçir və torlu qişaya (retina) çatır.",
      "Eşitmə sistemi: Səs dalğaları qulaq kanalına daxil olur, təbil pərdəsini titrədir və ilbizə (kokleaya) çatır.",
      "Qavrayış təşkili (Geştalt): biz duyğuları mənalı bütövlər halında təşkil edirik (yaxınlıq, oxşarlıq, davamlılıq, qapalılıq).",
      "Dərinlik qavrayışı: Binokulyar işarələr (retinal bərabərsizlik) ve monokulyar işarələr (xətti perspektiv, nisbi ölçü).",
      "Qavrayış dəsti: təcrübə və kontekstlə formalaşan, bir şeyi qavrayıb digərini qavramamağa dair zehni meyl."
    ],
    funFact: "The mantis shrimp has 16 color-receptive cones in its eyes, while humans only have 3. It can see colors that we can't even imagine, including ultraviolet and polarized light.",
    funFactKa: "მანტისის კიბოსნაირს აქვს 16 ფერის აღმქმელი კოლბა თვალებში, მაშინ როდესაც ადამიანებს მხოლოდ 3 გვაქვს. მას შეუძლია დაინახოს ფერები, რომლებიც ჩვენ წარმოგვიდგენია, ულტრაიისფერი და პოლარიზებული სინათლის ჩათვლით.",
    funFactRu: "У рака-богомола в глазах 16 цветовых колбочек, тогда как у человека их всего 3. Он может видеть цвета, которые мы даже не можем себе представить, включая ультрафиолетовый и поляризованный свет.",
    funFactHy: "Մանտիս ծովախեցգետինն իր աչքերում ունի 16 գունային ընկալիչ կոն, մինչդեռ մարդիկ ունեն ընդամենը 3: Այն կարող է տեսնել գույներ, որոնք մենք չենք էլ կարող պատկերացնել:",
    funFactAz: "Mantis krevetinin gözündə 16 rəng qəbul edən konus var, insanlarda isə cəmi 3-dür. O, bizim təsəvvür edə bilmədiyimiz rəngləri, o cümlədən ultrabənövşəyi və qütbləşmiş işığı görə bilir.",
    realWorld: "UI/UX design relies heavily on Gestalt principles. For example, grouping related buttons close together (proximity) helps users understand they perform similar functions.",
    realWorldKa: "UI/UX დიზაინი დიდწილად ეყრდნობა გეშტალტის პრინციპებს. მაგალითად, დაკავშირებული ღილაკების ერთად დაჯგუფება (სიახლოვე) მომხმარებელს ეხმარება გაიგოს, რომ ისინი მსგავს ფუნქციებს ასრულებენ.",
    realWorldRu: "UI/UX-дизайн в значительной степени опирается на принципы Гештальта. Например, группировка связанных кнопок рядом (близость) помогает пользователям понять, что они выполняют схожие функции.",
    realWorldHy: "UI/UX դիզայնը մեծապես հիմնված է Գեշտալտ սկզბունքների վրա: Օրինակ՝ հարակից կոճակների խմբավորումը միասին օգნում է օգտվողներին հասկանալ, որ նրանք նմանատիպ գործառույთներ են կատարում:",
    realWorldAz: "UI/UX dizaynı Geştalt prinsiplərinə çox söykənir. Məsəslən, əlaqəli düymələri bir-birinə yaxın qruplaşdırmaq (yaxınlıq) istifadəçilərə onların oxşar funksiyalarını yerინე yetirdiyini anlamağa kömək edir.",
    keyFigures: ["Gustav Fechner","David Hubel","Torsten Wiesel","Max Wertheimer"],
    keyFiguresKa: ["გუსტავ ფეხნერი", "დევიდ ჰუბელი", "ტორსტენ ვიზელი", "მაქს ვერტჰაიმერი"],
    keyFiguresRu: ["Густав Фехнер", "Дэвид Хьюбел", "Торстен Визель", "Макс Вертгеймер"],
    keyFiguresHy: ["Գուստավ Ֆեխներ", "Դեյվիդ Հյուբել", "Տորստեն Վիզել", "Մաքս Վերտհայմեր"],
    keyFiguresAz: ["Gustav Fexner", "Devid Hubel", "Torsten Vizel", "Maks Vertheimer"]
  }"""

    updated_content = content[:obj_start] + new_obj + content[obj_end:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("Successfully updated Chapter 4")

if __name__ == "__main__":
    update_chapter_4()
