$path = "src/app/data/book-data.ts"
$content = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)
$content[554] = "    id: 'ch10-quiz', chapterId: 10, title: 'Motivation and Emotion — Quiz', titleKa: 'მოტივაცია და ემოცია — ქვიზი',"
[System.IO.File]::WriteAllLines($path, $content, [System.Text.Encoding]::UTF8)
