import os

file_path = r'c:\Users\vakht\Desktop\psy\src\app\data\book-data.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Segment 1: summaryHy to summaryAz
old1 = "summaryHy: 'Հոգեբանությունը վարքագծի և մտավոր գործընթացների գիտական ուսումնասիրությունն է: Այս գլուխը հետևում է հոգեբանության էվոլյուցիային՝ Վունդտի առաջին լაბորատորիայից մինչև ժամանակակից նեյրոգիտություն:',"
new1 = old1 + "\n    summaryAz: 'Psixologiya davranış və zehni proseslərin elmi öyrənilməsidir. Bu fəsil Vundtun ilk laboratoriyasından müasir neyroelmə qədər psixologiyanın təkamülünü izləyir və əsas nəzəri perspektivləri təqdim edir.',"

if old1 in content:
    content = content.replace(old1, new1)
else:
    print("Warning: old1 not found")

# Segment 2: funFactHy to funFactAz
old2 = "funFactHy: 'Վունդտի առաջին լաբորատոր փորձը չափում էր այն ժამանակը, որը պահանჯվում էր մարդկանց ձայնը լսելուց հետո կոճակը սեղմելու համար՝ մոտ 0,1 վայրկյան:',"
new2 = old2 + "\n    funFactAz: 'Vundtun ilk laboratoriya təcrübəsi bir səs eşitdikdən sonra düyməni basmaq üçün insanların sərf etdiyi vaxtı ölçürdü — təxminən 0.1 saniyə.',"

if old2 in content:
    content = content.replace(old2, new2)
else:
    print("Warning: old2 not found")

# Segment 3: realWorldHy & keyFigures
old3 = "realWorldHy: 'Մարքեթինգային թիմերն օգտագործում են կոգնիտիվ և վარքագծային հոգեբանության սկզბունքները՝ հուզական արձագանքներ առաջացնող գովազդներ ստեղծելու համար:',"
new3 = old3 + "\n    realWorldAz: 'Marketinq komandaları emosional reaksiyalara səbəb olan reklamlar hazırlamaq üçün koqnitiv və bihevioral psixologiya prinsiplərindən istifadə edirlər.',"

if old3 in content:
    content = content.replace(old3, new3)
else:
    print("Warning: old3 not found")

# Segment 4: keyFigures
old4 = "keyFigures: ['Wilhelm Wundt', 'William James', 'Sigmund Freud', 'John Watson', 'Carl Rogers']"
new4 = ("keyFigures: ['Wilhelm Wundt', 'William James', 'Sigmund Freud', 'John Watson', 'Carl Rogers'],\n"
        "    keyFiguresKa: ['ვილჰელმ ვუნდტი', 'უილიამ ჯეიმსი', 'ზიგმუნდ ფროიდი', 'ჯონ უოტსონი', 'კარლ როჯერსი'],\n"
        "    keyFiguresRu: ['Вильгельм Вундт', 'Уильям Джеймс', 'Зигмунд Фрейд', 'Джон Уотсон', 'Карл Роджерс'],\n"
        "    keyFiguresHy: ['Վիլհելմ Վունդտ', 'Ուիլյամ Ջեյմս', 'Զիգմունդ Ֆրեյդ', 'Ջոն Ուոթսոն', 'Կարլ Ռոջերս'],\n"
        "    keyFiguresAz: ['Vilhelm Vundt', 'Uilyam Ceyms', 'Ziqmund Freyd', 'Con Uotson', 'Karl Rocers']")

if old4 in content:
    content = content.replace(old4, new4, 1) # Only first one
else:
    print("Warning: old4 not found")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
