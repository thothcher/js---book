$path = "src/app/data/book-data.ts"
$content = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)

# Chapter 11 Quiz
$content[569] = "    id: 'ch11-quiz', chapterId: 11, title: 'Personality — Quiz', titleKa: 'პიროვნება — ქვიზი',"

# Questions 1-5
$content[571] = "        { id: 'q11-1', question: 'Freud''s id operates on:', questionKa: 'ფროიდის იდი მოქმედებს:', options: ['Reality principle', 'Pleasure principle', 'Moral principle', 'Social principle'], optionsKa: ['რეალობის პრინციპი', 'სიამოვნების პრინციპი', 'მორალური პრინციპი', 'სოციალური პრინციპი'], correctIndex: 1, explanation: 'Id seeks immediate gratification.', explanationKa: 'იდი მიისწრაფვის დაუყოვნებლივი დაკმაყოფილებისკენ.' },"
$content[572] = "        { id: 'q11-2', question: 'Big Five excludes:', questionKa: 'დიდი ხუთეული არ მოიცავს:', options: ['Openness', 'Conscientiousness', 'Intelligence', 'Neuroticism'], optionsKa: ['ღიაობა', 'კეთილსინდისიერება', 'ინტელექტი', 'ნევროტიზმი'], correctIndex: 2, explanation: 'Intelligence is not a Big Five trait.', explanationKa: 'ინტელექტი არ არის დიდი ხუთეულის თვისება.' },"
$content[573] = "        { id: 'q11-3', question: 'Rogers emphasized:', questionKa: 'როჯერსმა ხაზი გაუსვა:', options: ['Defense mechanisms', 'Unconditional positive regard', 'Conditioning', 'Dream analysis'], optionsKa: ['დაცვითი მექანიზმები', 'უპირობო დადებითი დამოკიდებულება', 'კონდიცირება (განპირობებულობა)', 'სიზმრების ანალიზი'], correctIndex: 1, explanation: 'Unconditional positive regard is essential.', explanationKa: 'უპირობო დადებითი დამოკიდებულება აუცილებელია.' },"
$content[574] = "        { id: 'q11-4', question: 'Projection means:', questionKa: 'პროექცია ნიშნავს:', options: ['Denying reality', 'Attributing own feelings to others', 'Returning to earlier stage', 'Channeling impulses'], optionsKa: ['რეალობის უარყოფა', 'საკუთარი გრძნობების სხვებისთვის მიწერა', 'ადრეულ ეტაპზე დაბრუნება', 'იმპულსების წარმართვა'], correctIndex: 1, explanation: 'Projecting unacceptable feelings onto others.', explanationKa: 'მიუღებელი გრძნობების სხვებისთვის მიწერა.' },"
$content[575] = "        { id: 'q11-5', question: 'Self-efficacy refers to:', questionKa: 'თვითეფექტიანობა ნიშნავს:', options: ['Self-esteem', 'Belief in ability to succeed', 'Personality type', 'Intelligence'], optionsKa: ['', '', '', ''], correctIndex: 1, explanation: 'Belief in capability to perform.', explanationKa: 'რწმენა საკუთარი შესაძლებლობისა.' },"

[System.IO.File]::WriteAllLines($path, $content, [System.Text.Encoding]::UTF8)
