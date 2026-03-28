import os

file_path = r'c:\Users\vakht\Desktop\psy\src\app\data\book-data.ts'
with open(file_path, 'rb') as f:
    content = f.read()

# Marker for summaryHy
marker1 = b"summaryHy: '"
start1 = content.find(marker1)
if start1 != -1:
    end1 = content.find(b"',", start1)
    if end1 != -1:
        old_segment = content[start1:end1+2]
        new_segment = old_segment + b"\n    summaryAz: 'Psixologiya davran\xc4\xb1\xc5\x9f v\xc4\x99 zehni prosesl\xc4\x99rin elmi \xc3\xb6yr\xc4\x99nilm\xc4\x99sidir. Bu f\xc4\x99sil Vundtun ilk laboratoriyas\xc4\xb1ndan m\xc3\xbcazir neyroelm\xc4\x99 q\xc4\x99d\xc4\x99r psixologiyan\xc4\xb1n t\xc4\x99kam\xc3\xbcl\xc3\xbcn\xc3\xbc izl\xc4\x99yir v\xc4\x99 \xc4\x99sas n\xc4\x99z\xc4\x99ri perspektivl\xc4\x99ri t\xc4\x99qdim edir.',"
        content = content.replace(old_segment, new_segment, 1)
        print("Patched summaryHy")

# Marker for funFactHy
marker2 = b"funFactHy: '"
start2 = content.find(marker2)
if start2 != -1:
    end2 = content.find(b"',", start2)
    if end2 != -1:
        old_segment = content[start2:end2+2]
        new_segment = old_segment + b"\n    funFactAz: 'Vundtun ilk laboratoriya t\xc4\x99cr\xc3\xbcb\xc4\x99si bir s\xc4\x99s e\xc5\x9fitdikd\xc4\x99n sonra d\xc3\xbcym\xc4\x99ni basmaq \xc3\xbc\xc3\xa7\xc3\xbcn insanlar\xc4\xb1n s\xc4\x99rf etdiyi vaxt\xc4\xb1 \xc3\xb6l\xc3\xa7\xc3\xbcrdi \xe2\x80\x94 t\xc4\x99xmin\xc4\x99n 0.1 saniy\xc4\x99.',"
        content = content.replace(old_segment, new_segment, 1)
        print("Patched funFactHy")

# Marker for realWorldHy
marker3 = b"realWorldHy: '"
start3 = content.find(marker3)
if start3 != -1:
    end3 = content.find(b"',", start3)
    if end3 != -1:
        old_segment = content[start3:end3+2]
        new_segment = old_segment + b"\n    realWorldAz: 'Marketinq komandalar\xc4\xb1 emosional reaksiyalara s\xc4\x99b\xc4\x99b olan reklamlar haz\xc4\xb1rlamaq \xc3\xbc\xc3\xa7\xc3\xbcn koqnitiv v\xc4\x99 bihevioral psixologiya prinsipl\xc4\x99rind\xc4\x99n istifad\xc4\x99 edirl\xc4\x99r.',"
        content = content.replace(old_segment, new_segment, 1)
        print("Patched realWorldHy")

with open(file_path, 'wb') as f:
    f.write(content)
