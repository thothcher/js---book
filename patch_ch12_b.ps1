$path = "src/app/data/book-data.ts"
$content = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)

# Questions 6-10
$content[591] = "        { id: 'q12-6', question: 'Stereotype is a:', questionKa: 'სტერეოტიპი არის:', options: ['Belief about a group', 'Feeling toward a group', 'Action against a group', 'Law'], optionsKa: ['რწმენა ჯგუფის შესახებ', 'გრძნობა ჯგუფის მიმართ', 'მოქმედება ჯგუფის წინააღმდეგ', 'კანონი'], correctIndex: 0, explanation: 'Generalized belief about a group.', explanationKa: 'განზოგადებული რწმენა ჯგუფის შესახებ.' },"
$content[592] = "        { id: 'q12-7', question: 'Prejudice is a:', questionKa: 'ცრურწმენა არის:', options: ['Belief', 'Attitude', 'Behavior', 'Fact'], optionsKa: ['რწმენა', 'განწყობა', 'ქცევა', 'ფაქტი'], correctIndex: 1, explanation: 'Unjustifiable negative attitude.', explanationKa: 'გაუმართლებელი უარყოფითი განწყობა.' },"
$content[593] = "        { id: 'q12-8', question: 'Discrimination is a:', questionKa: 'დისკრიმინაცია არის:', options: ['Belief', 'Attitude', 'Behavior', 'Thought'], optionsKa: ['რწმენა', 'განწყობა', 'ქცევა', 'აზრი'], correctIndex: 2, explanation: 'Negative behavior toward a group.', explanationKa: 'უარყოფითი ქცევა ჯგუფის მიმართ.' },"
$content[594] = "        { id: 'q12-9', question: 'Bystander effect means:', questionKa: 'გარეშე დამსწრის ეფექტი ნიშნავს:', options: ['Helping quickly', 'Less likely to help when others are present', 'Calling police', 'Group hug'], optionsKa: ['სწრაფი დახმარება', 'დახმარების ნაკლები ალბათობა სხვების თანდასწრებით', 'პოლიციის გამოძახება', 'ჯგუფური ჩახუტება'], correctIndex: 1, explanation: 'Diffusion of responsibility.', explanationKa: 'პასუხისმგებლობის დიფუზია.' },"
$content[595] = "        { id: 'q12-10', question: 'Milgram studied:', questionKa: 'მილგრემმა შეისწავლა:', options: ['Obedience', 'Love', 'Hunger', 'Dreams'], optionsKa: ['მორჩილება', 'სიყვარული', 'შიმშილი', 'სიზმრები'], correctIndex: 0, explanation: 'Classic study on obedience to authority.', explanationKa: 'მორჩილების კლასიკური კვლევა.' }"

[System.IO.File]::WriteAllLines($path, [System.Text.Encoding]::UTF8)
