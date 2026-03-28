$path = "src/app/data/book-data.ts"
$content = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)

# Chapter 12 Header
$content[584] = "    id: 'ch12-quiz', chapterId: 12, title: 'Social Psychology — Quiz', titleKa: 'სოციალური ფსიქოლოგია — ქვიზი',"

# Questions 1-5
$content[586] = "        { id: 'q12-1', question: 'Attribution theory explains:', questionKa: 'ატრიბუციის თეორია ხსნის:', options: ['How we judge others behavior', 'Intelligence', 'Memory', 'Vision'], optionsKa: ['როგორ განვსჯით სხვების ქცევას', 'ინტელექტი', 'მეხსიერება', 'მხედველობა'], correctIndex: 0, explanation: 'Attributing behavior to traits or situations.', explanationKa: 'ქცევის მიწერა თვისებებზე ან სიტუაციებზე.' },"
$content[587] = "        { id: 'q12-2', question: 'Conformity is:', questionKa: 'კონფორმულობა არის:', options: ['Adjusting behavior to group standards', 'Rebelling', 'Thinking independently', 'Sleeping'], optionsKa: ['ქცევის მორგება ჯგუფურ სტანდარტებთან', 'ამბოხება', 'დამოუკიდებელი აზროვნება', 'ძილი'], correctIndex: 0, explanation: 'Yielding to group pressure.', explanationKa: 'დათმობა ჯგუფური ზეწოლის წინაშე.' },"
$content[588] = "        { id: 'q12-3', question: 'Cognitive dissonance is:', questionKa: 'კოგნიტური დისონანსი არის:', options: ['Liking someone', 'Tension from conflicting thoughts', 'Clear thinking', 'Happy mood'], optionsKa: ['ვიღაცის მოწონება', 'დაძაბულობა ურთიერთგამომრიცხავი აზრებისგან', 'ნათელი აზროვნება', 'ბედნიერი განწყობა'], correctIndex: 1, explanation: 'Dissonance between attitude and behavior.', explanationKa: 'დისონანსი განწყობასა და ქცევას შორის.' },"
$content[589] = "        { id: 'q12-4', question: 'Altruism is:', questionKa: 'ალტრუიზმი არის:', options: ['Selfishness', 'Unselfish regard for others', 'Anger', 'Greed'], optionsKa: ['ეგოიზმი', 'სხვებზე უანგარო ზრუნვა', 'ბრაზი', 'სიხარბე'], correctIndex: 1, explanation: 'Helping without personal gain.', explanationKa: 'დახმარება პირადი სარგებლის გარეშე.' },"
$content[590] = "        { id: 'q12-5', question: 'Social facilitation means:', questionKa: 'სოციალური ფასილიტაცია ნიშნავს:', options: ['Improved performance in presence of others', 'Harder tasks', 'Cheating', 'Avoiding people'], optionsKa: ['შესრულების გაუმჯობესება სხვების თანდასწრებით', 'უფრო რთული დავალებები', 'თაღლითობა', 'ხალხისთვის თავის არიდება'], correctIndex: 0, explanation: 'Presence of others boosts easy tasks.', explanationKa: 'სხვების თანდასწრებით მარტივი დავალებების შესრულება უმჯობესდება.' },"

[System.IO.File]::WriteAllLines($path, $content, [System.Text.Encoding]::UTF8)
