import os

file_path = r'c:\Users\vakht\Desktop\psy\src\app\data\book-data.ts'
with open(file_path, 'rb') as f:
    content = f.read()

# Marker for Chapter 2 titleHy
marker_ch2_title = b"titleHy: '"
start_title = content.find(marker_ch2_title, content.find(b"id: 2"))
if start_title != -1:
    end_title = content.find(b"',", start_title)
    if end_title != -1:
        old_segment = content[start_title:end_title+2]
        new_segment = old_segment + b"\n    titleAz: 'Psixologiyada T\xc4\x99dqiqat Metodlar\xc4\xb1',"
        content = content.replace(old_segment, new_segment, 1)

# Marker for Chapter 2 descriptionHy
marker_ch2_desc = b"descriptionHy: '"
start_desc = content.find(marker_ch2_desc, content.find(b"id: 2"))
if start_desc != -1:
    end_desc = content.find(b"',", start_desc)
    if end_desc != -1:
        old_segment = content[start_desc:end_desc+2]
        new_segment = old_segment + b"\n    descriptionAz: 'Psixoloqlar\xc4\xb1n t\xc4\x99dqiqat aparma \xc3\xbcsullar\xc4\xb1: eksperimentl\xc4\x99r, m\xc3\xbcsahid\xc4\x99l\xc4\x99r, sor\xc4\x9fular v\xc4\x99 etika.',"
        content = content.replace(old_segment, new_segment, 1)

# Marker for Chapter 2 keyTopicsHy
marker_ch2_topics = b"keyTopicsHy: ["
start_topics = content.find(marker_ch2_topics, content.find(b"id: 2"))
if start_topics != -1:
    end_topics = content.find(b"]," , start_topics)
    if end_topics != -1:
        old_segment = content[start_topics:end_topics+2]
        new_segment = old_segment + b"\n    keyTopicsAz: ['Elmi Metod', 'Eksperimental Dizayn', 'Korrelyasiya v\xc4\x99 S\xc4\x99b\xc4\x99b-N\xc4\x99tic\xc4\x99', 'T\xc4\x9dqiqatda Etika'],"
        content = content.replace(old_segment, new_segment, 1)

# Marker for Chapter 2 summaryHy
marker_ch2_summary = b"summaryHy: '"
start_summary = content.find(marker_ch2_summary, content.find(b"id: 2"))
if start_summary != -1:
    end_summary = content.find(b"',", start_summary)
    if end_summary != -1:
        old_segment = content[start_summary:end_summary+2]
        new_segment = old_segment + b"\n    summaryAz: 'Bu f\xc4\x99sil psixoloqlar\xc4\xb1n davran\xc4\xb1\xc5\x9f\xc4\xb1 elmi \xc5\x9f\xc4\x99kild\xc4\x99 \xc3\xb6yr\xc4\x99nm\xc4\x99k \xc3\xbc\xc3\xa7\xc3\xbcn istifad\xc4\x99 etdikl\xc4\x99ri al\xc4\x99tl\xc4\x99ri \xc4\x99hat\xc4\x99 edir. D\xc4\x99yi\xc5\x9f\xc4\x99nl\xc4\x99r, n\xc4\x99zar\xc4\x99t qruplar\xc4\xb1 v\xc4\x99 qo\xc5\x9fa kor t\xc4\x99dqiqatlar haqq\xc4\xb1nda m\xc4\x99lumat \xc4\x99ld\xc4\x99 edin.',"
        content = content.replace(old_segment, new_segment, 1)

# Marker for Chapter 2 keyPointsHy
marker_ch2_points = b"keyPointsHy: ["
start_points = content.find(marker_ch2_points, content.find(b"id: 2"))
if start_points != -1:
    end_points = content.find(b"]," , start_points)
    if end_points != -1:
        old_segment = content[start_points:end_points+2]
        new_segment = old_segment + b"\n    keyPointsAz: ['Elmi metod: M\xc3\xbcsahid\xc4\x99 -> Hipotez -> Eksperiment -> M\xc4\x99lumatlar\xc4\xb1n T\xc4\x99hlili.', 'As\xc4\xb1l\xc4\xb1 v\xc4\x99 as\xc4\xb1l\xc4\xb1 olmayan d\xc4\x99yi\xc5\x9f\xc4\x99nl\xc4\x99r.', 'Korrelyasiya s\xc4\x99b\xc4\x99b-n\xc4\x99tic\xc4\x99 \xc4\x99laq\xc4\x99si dem\xc4\x99k deyil.', 'Etik qaydalar: m\xc4\x99lumatland\xc4\xb1r\xc4\xb1lm\xc4\xb1\xc5\x9f raz\xc4\xb1l\xc4\xb1q, m\xc4\x99xfiilik.'],"
        content = content.replace(old_segment, new_segment, 1)

# Marker for Chapter 2 funFactHy
marker_ch2_funfact = b"funFactHy: '"
start_funfact = content.find(marker_ch2_funfact, content.find(b"id: 2"))
if start_funfact != -1:
    end_funfact = content.find(b"',", start_funfact)
    if end_funfact != -1:
        old_segment = content[start_funfact:end_funfact+2]
        new_segment = old_segment + b"\n    funFactAz: 'Plasebo effekti, h\xc4\x99tta h\xc4\x99b yaln\xc4\xb1z \xc5\x9f\xc4\x99k\xc4\x99rd\xc4\x99n ibar\xc4\x99t olsa bel\xc4\x99, a\xc4\x9fr\xc4\xb1lar\xc4\xb1 30%-\xc4\x99 q\xc4\x99d\xc4\x99r azalda bil\xc4\x99r.',"
        content = content.replace(old_segment, new_segment, 1)

# Marker for Chapter 2 realWorldHy
marker_ch2_realworld = b"realWorldHy: '"
start_realworld = content.find(marker_ch2_realworld, content.find(b"id: 2"))
if start_realworld != -1:
    end_realworld = content.find(b"',", start_realworld)
    if end_realworld != -1:
        old_segment = content[start_realworld:end_realworld+2]
        new_segment = old_segment + b"\n    realWorldAz: 'Qo\xc5\x9fa kor s\xc4\xb1naqlar n\xc4\x99 h\xc4\x99kimin, n\xc4\x99 d\xc4\x99 x\xc4\x99st\xc4\x99nin kimin \xc4\x99sl d\xc4\x99rman\xc4\xb1 ald\xc4\xb1\xc4\x9f\xc4\xb1n\xc4\xb1 bilm\xc4\x99m\xc4\x99sini t\xc4\x99min ed\xc4\x99r\xc4\x99k x\xc4\x99st\xc4\x99l\xc4\x99ri qeyri-effektiv m\xc3\xbcalic\xc4\x99l\xc4\x99rd\xc4\x99n qoruyur.',"
        content = content.replace(old_segment, new_segment, 1)

# Marker for Chapter 2 keyFigures
marker_ch2_figures = b"keyFigures: ['Francis Bacon', 'Karl Popper', 'Stanley Milgram']"
if marker_ch2_figures in content:
    # We need to make sure we hit the second one
    last_pos = content.rfind(marker_ch2_figures)
    old_segment = content[last_pos:last_pos+len(marker_ch2_figures)]
    new_segment = (old_segment + b",\n    keyFiguresKa: ['\xe1\x83\xa4\xe1\x83\xa0\xe1\x83\x94\xe1\x83\x9d\xe1\x83\xa1\xe1\x83\x98\xe1\x83\xa1 \xe1\x83\x91\xe1\x83\x94\xe1\x83\x99\xe1\x83\x9d\xe1\x83\x9c\xe1\x83\x98', '\xe1\x83\x99\xe1\x83\x90\xe1\x83\xa0\xe1\x83\x9a \xe1\x83\xbf\xe1\x83\x9d\xe1\x83\x9a\xe1\x83\x94\xe1\x83\xa0\xe1\x83\x98', '\xe1\x83\xa1\xe1\x83\xa2\xe1\x83\x94\xe1\x83\x9c\xe1\x83\x9a\xe1\x83\x98 \xe1\x83\x9b\xe1\x83\x98\xe1\x83\x9a\xe1\x83\x92\xe1\x83\xa0\xe1\x83\x94\xe1\x83\x9b\xe1\x83\x98'],\n"
                   b"    keyFiguresRu: ['\xd0\xa4\xd1\x80\xd1\x8d\xd0\xbd\xd1\x81\xd0\xb8\xd1\x81 \xd0\x91\xd1\x8d\xd0\xba\xd0\xbe\xd0\xbd', '\xd0\x9a\xd0\xb0\xd1\x80\xd0\xbb \xd0\x9f\xd0\xbe\xd0\xbf\xd0\xbf\xd0\xb5\xd1\x80', '\xd0\xa1\xd1\x82\xd0\xb5\xd0\xbd\xd0\xbb\xd0\xb8 \xd0\x9c\xd0\xb8\xd0\xbb\xd0\xb3\xd1\x80\xd1\x8d\xd0\xbc'],\n"
                   b"    keyFiguresHy: ['\xd5\x8b\xd6\x80\xd5\xa5\xd5\xb6\xd5\xbd\xd5\xab\xd5\xbd \xd4\xb2\xd5\xa5\xd5\xaf\xd5\xb8\xd5\xb6', '\xd4\xba\xd5\xa1\xd6\x80\xd5\xac \xd5\x8a\xd5\xb8\xd5\xba\xd5\xa5\xd6\x80', '\xd5\x8d\xd5\xa9\xd5\xa5\xd5\xb6\xd5\xac\xd5\xab \xd5\x84\xd5\xab\xd5\xac\xd5\xa3\xd6\x80\xd5\xa5\xd5\xb4'],\n"
                   b"    keyFiguresAz: ['Frensis Bekon', 'Karl Popper', 'Stenli Milqrem']")
    content = content[:last_pos] + new_segment + content[last_pos+len(marker_ch2_figures):]

with open(file_path, 'wb') as f:
    f.write(content)
