/**
 * Static data for Psychology and Life by Philip Zimbardo.
 */

export interface Chapter {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  description: string;
  descriptionKa: string;
  descriptionRu?: string;
  descriptionHy?: string;
  descriptionAz?: string;
  icon: string;
  keyTopics: string[];
  keyTopicsKa: string[];
  keyTopicsRu?: string[];
  keyTopicsHy?: string[];
  keyTopicsAz?: string[];
  summary: string;
  keyPoints: string[];
  funFact: string;
  realWorld: string;
  keyFigures?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionKa?: string;
  questionRu?: string;
  questionHy?: string;
  questionAz?: string;
  options: string[];
  optionsKa?: string[];
  optionsRu?: string[];
  optionsHy?: string[];
  optionsAz?: string[];
  correctIndex: number;
  explanation: string;
  explanationKa?: string;
  explanationRu?: string;
  explanationHy?: string;
  explanationAz?: string;
}

export interface Quiz {
  id: string;
  chapterId: number;
  title: string;
  titleKa?: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  questions: QuizQuestion[];
}

export interface Psychologist {
  name: string;
  years: string;
  photo: string;
  nationality: string;
  contribution: string;
  details: string;
  field: string;
}

export interface Fact {
  id: number;
  text: string;
  textKa: string;
  textRu?: string;
  textHy?: string;
  textAz?: string;
  source: string;
  category: string;
  icon: string;
}

export interface Story {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  chapterId: number;
  content: string;
  contentKa: string;
  contentRu?: string;
  contentHy?: string;
  contentAz?: string;
  moral: string;
  moralKa: string;
  moralRu?: string;
  moralHy?: string;
  moralAz?: string;
  icon: string;
}

export interface MemoryCard {
  id: number;
  term: string;
  termKa?: string;
  termRu?: string;
  termHy?: string;
  termAz?: string;
  definition: string;
  definitionKa?: string;
  definitionRu?: string;
  definitionHy?: string;
  definitionAz?: string;
  category: string;
}

/**
 * Static data for Psychology and Life by Philip Zimbardo.
 */


export interface Chapter {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  description: string;
  descriptionKa: string;
  descriptionRu?: string;
  descriptionHy?: string;
  descriptionAz?: string;
  icon: string;
  keyTopics: string[];
  keyTopicsKa: string[];
  keyTopicsRu?: string[];
  keyTopicsHy?: string[];
  keyTopicsAz?: string[];
  summary: string;
  keyPoints: string[];
  funFact: string;
  realWorld: string;
  keyFigures?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionKa?: string;
  questionRu?: string;
  questionHy?: string;
  questionAz?: string;
  options: string[];
  optionsKa?: string[];
  optionsRu?: string[];
  optionsHy?: string[];
  optionsAz?: string[];
  correctIndex: number;
  explanation: string;
  explanationKa?: string;
  explanationRu?: string;
  explanationHy?: string;
  explanationAz?: string;
}

export interface Quiz {
  id: string;
  chapterId: number;
  title: string;
  titleKa?: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  questions: QuizQuestion[];
}

export interface Psychologist {
  name: string;
  years: string;
  photo: string;
  nationality: string;
  contribution: string;
  details: string;
  field: string;
}

export interface Fact {
  id: number;
  text: string;
  textKa: string;
  textRu?: string;
  textHy?: string;
  textAz?: string;
  source: string;
  category: string;
  icon: string;
}

export interface Story {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  chapterId: number;
  content: string;
  contentKa: string;
  contentRu?: string;
  contentHy?: string;
  contentAz?: string;
  moral: string;
  moralKa: string;
  moralRu?: string;
  moralHy?: string;
  moralAz?: string;
  icon: string;
}

export interface MemoryCard {
  id: number;
  term: string;
  termKa?: string;
  termRu?: string;
  termHy?: string;
  termAz?: string;
  definition: string;
  definitionKa?: string;
  definitionRu?: string;
  definitionHy?: string;
  definitionAz?: string;
  category: string;
}


export const CHAPTERS: Chapter[] = [
  {
    "id": 1,
    "title": "What is Psychology?",
    "titleKa": "რა არის ფსიქოლოგია?",
    "description": "Introduction to the science of psychology, its history, and modern approaches.",
    "descriptionKa": "ფსიქოლოგიის მეცნიერების შესავალი, მისი ისტორია და თანამედროვე მიდგომები.",
    "icon": "mdi:head-cog-outline",
    "keyTopics": [
      "Definition of Psychology",
      "History of Psychology",
      "Modern Perspectives",
      "Research Methods"
    ],
    "keyTopicsKa": [
      "ფსიქოლოგიის განმარტება",
      "ფსიქოლოგიის ისტორია",
      "თანამედროვე პერსპექტივები",
      "კვლევის მეთოდები"
    ],
    "summary": "Psychology is the scientific study of behavior and mental processes. It explores how we think, feel, act, and interact. From Wundt's first laboratory to modern neuroscience, this chapter traces the evolution of psychology and introduces major theoretical perspectives: biological, psychodynamic, behavioral, cognitive, humanistic, and sociocultural.",
    "keyPoints": [
      "Psychology literally means \"study of the soul\" (Greek: psyche + logos) but today is defined as the scientific study of behavior and mental processes.",
      "Wilhelm Wundt opened the first psychology lab in Leipzig, Germany (1879), marking psychology's birth as a science.",
      "Structuralism (Titchener) broke consciousness into basic elements using introspection; Functionalism (James) asked what purpose mental processes serve.",
      "The six major perspectives: Biological (brain & genes), Psychodynamic (unconscious forces), Behavioral (observable actions), Cognitive (thinking & reasoning), Humanistic (free will & growth), Sociocultural (social & cultural influences).",
      "The biopsychosocial model integrates biological, psychological, and social factors to understand behavior holistically.",
      "Psychology's four goals: Describe, Explain, Predict, and Influence behavior."
    ],
    "funFact": "Wundt's first lab experiment measured the time it took people to press a button after hearing a sound — about 0.1 seconds. This \"reaction time\" research is still used in psychology and neuroscience today.",
    "realWorld": "When a marketing team designs an ad that triggers an emotional response, they're using principles from cognitive and behavioral psychology. Understanding how people perceive and process information is at the heart of advertising, UX design, and even political campaigns.",
    "keyFigures": [
      "Wilhelm Wundt",
      "William James",
      "Sigmund Freud",
      "John Watson",
      "Carl Rogers"
    ],
    "titleRu": "Что такое психология?",
    "titleHy": "Ի՞նչ է հոգեբանությունը:",
    "titleAz": "Psixologiya nədir?",
    "descriptionRu": "Введение в науку психология, ее историю и современные подходы.",
    "descriptionHy": "Ներածություն հոգեբանության գիտությանը, նրա պատմությանը և ժամանակակից մոտեցումներին:",
    "descriptionAz": "Psixologiya elminə giriş, onun tarixi və müasir yanaşmalar.",
    "keyTopicsRu": [
      "Определение психологии",
      "История психологии",
      "Современные перспективы",
      "Методы исследования"
    ],
    "keyTopicsHy": [
      "Հոգեբանության սահմանում",
      "Հոգեբանության պատմություն",
      "Ժամանակակից հեռանկարներ",
      "Հետազոտության մեթոդներ"
    ],
    "keyTopicsAz": [
      "Psixologiyanın tərifi",
      "Psixologiyanın tarixi",
      "Müasir Perspektivlər",
      "Tədqiqat Metodları"
    ]
  },
  {
    "id": 2,
    "title": "Research Methods in Psychology",
    "titleKa": "კვლევის მეთოდები ფსიქოლოგიაში",
    "description": "How psychologists conduct research: experiments, observations, surveys, and ethics.",
    "descriptionKa": "როგორ ატარებენ ფსიქოლოგები კვლევას: ექსპერიმენტები, დაკვირვებები, გამოკითხვები და ეთიკა.",
    "icon": "mdi:flask-outline",
    "keyTopics": [
      "Scientific Method",
      "Experimental Design",
      "Correlation vs. Causation",
      "Ethics in Research"
    ],
    "keyTopicsKa": [
      "სამეცნიერო მეთოდი",
      "ექსპერიმენტული დიზაინი",
      "კორელაცია მიზეზობრიობის წინააღმდეგ",
      "ეთიკა კვლევაში"
    ],
    "summary": "This chapter covers the tools psychologists use to study behavior scientifically. Learn about variables, control groups, double-blind studies, and the critical distinction between correlation and causation.",
    "keyPoints": [
      "The scientific method: Observation → Hypothesis → Experiment → Data Analysis → Conclusion → Replication.",
      "Independent variable (IV) is what the researcher manipulates; Dependent variable (DV) is what is measured.",
      "Random assignment eliminates pre-existing differences between groups, making experiments internally valid.",
      "Double-blind studies prevent both experimenter and participant biases from affecting results.",
      "Correlation does NOT equal causation. Two variables may move together without one causing the other (third-variable problem).",
      "Ethical guidelines: informed consent, right to withdraw, debriefing, confidentiality, and minimal harm. The APA code was established after controversial studies like Milgram's obedience experiment.",
      "Common methods: experiments (cause-effect), surveys (self-report), naturalistic observation (real-world), case studies (in-depth single cases), and longitudinal studies (over time)."
    ],
    "funFact": "The placebo effect is so powerful that in some studies, sugar pills reduced pain by up to 30%. This is why control groups are essential in psychological research.",
    "realWorld": "Before any new therapy or medication is approved, it must go through rigorous double-blind, placebo-controlled trials. The same research methods from this chapter protect patients from ineffective or harmful treatments.",
    "keyFigures": [
      "Francis Bacon",
      "Karl Popper",
      "Stanley Milgram"
    ],
    "titleRu": "Методы исследования в психологии",
    "titleHy": "Հետազոտության մեթոդներ հոգեբանության մեջ",
    "titleAz": "Psixologiyada Tədqiqat Metodları",
    "descriptionRu": "Как психологи проводят исследования: эксперименты, наблюдения, опросы и этика.",
    "descriptionHy": "Ինչպես են հոգեբաններն իրականացնում հետազոտություններ՝ փորձեր, դիտարկումներ, հարցումներ և էթիկա:",
    "descriptionAz": "Psixoloqlar araşdırmanı necə aparır: təcrübələr, müşahidələr, sorğular və etika.",
    "keyTopicsRu": [
      "Научный метод",
      "Экспериментальный дизайн",
      "Корреляция против причинно-следственной связи",
      "Этика в исследованиях"
    ],
    "keyTopicsHy": [
      "Գիտական ​​մեթոդ",
      "Փորձարարական դիզայն",
      "Հարաբերակցությունն ընդդեմ պատճառականության",
      "Էթիկան հետազոտության մեջ"
    ],
    "keyTopicsAz": [
      "Elmi metod",
      "Eksperimental Dizayn",
      "Korrelyasiya və Səbəb əlaqəsi",
      "Tədqiqatda Etika"
    ]
  },
  {
    "id": 3,
    "title": "Biological Bases of Behavior",
    "titleKa": "ქცევის ბიოლოგიური საფუძვლები",
    "description": "The brain, nervous system, neurons, and how biology shapes our behavior.",
    "descriptionKa": "ტვინი, ნერვული სისტემა, ნეირონები და როგორ აყალიბებს ბიოლოგია ჩვენს ქცევას.",
    "icon": "mdi:dna",
    "keyTopics": [
      "Neurons & Synapses",
      "Brain Structure",
      "Nervous System",
      "Neurotransmitters",
      "Genetics & Behavior"
    ],
    "keyTopicsKa": [
      "ნეირონები და სინაფსები",
      "ტვინის სტრუქტურა",
      "ნერვული სისტემა",
      "ნეიროტრანსმიტერები",
      "გენეტიკა და ქცევა"
    ],
    "summary": "Every thought, emotion, and action has a biological basis. This chapter explores how neurons communicate, the structure of the brain, and how genetics influence behavior.",
    "keyPoints": [
      "Neurons are the basic units of the nervous system. They communicate via electrochemical signals: electrical impulses travel down the axon, then release neurotransmitters across the synapse.",
      "Key neurotransmitters: Dopamine (reward, pleasure), Serotonin (mood, sleep), GABA (inhibition, calm), Acetylcholine (memory, muscle movement), Norepinephrine (alertness), Endorphins (pain relief).",
      "The brain has three major regions: Hindbrain (medulla, pons, cerebellum — basic survival), Midbrain (sensory relay), Forebrain (cerebral cortex — higher thinking).",
      "The cerebral cortex has four lobes: Frontal (decision-making, personality), Parietal (touch, spatial), Temporal (hearing, language), Occipital (vision).",
      "The limbic system includes the amygdala (fear, emotion), hippocampus (memory formation), and hypothalamus (hunger, thirst, temperature).",
      "Neuroplasticity: the brain can reorganize itself by forming new neural connections throughout life, especially after injury or learning.",
      "The split-brain experiments by Sperry showed that the left hemisphere specializes in language and logic, while the right hemisphere handles spatial tasks and creativity."
    ],
    "funFact": "Your brain uses about 20% of your body's energy despite being only 2% of your body weight. It generates about 20 watts of electrical power — enough to power a dim light bulb.",
    "realWorld": "Understanding neurotransmitters revolutionized psychiatry. SSRIs (like Prozac) treat depression by increasing serotonin levels in the brain. Parkinson's disease treatments target dopamine pathways.",
    "keyFigures": [
      "Roger Sperry",
      "Paul Broca",
      "Carl Wernicke",
      "Santiago Ramón y Cajal"
    ],
    "titleRu": "Биологические основы поведения",
    "titleHy": "Վարքագծի կենսաբանական հիմքերը",
    "titleAz": "Davranışın Bioloji Əsasları",
    "descriptionRu": "Мозг, нервная система, нейроны и то, как биология формирует наше поведение.",
    "descriptionHy": "Ուղեղը, նյարդային համակարգը, նեյրոնները և ինչպես է կենսաբանությունը ձևավորում մեր վարքագիծը:",
    "descriptionAz": "Beyin, sinir sistemi, neyronlar və biologiya davranışımızı necə formalaşdırır.",
    "keyTopicsRu": [
      "Нейроны и синапсы",
      "Структура мозга",
      "Нервная система",
      "Нейромедиаторы",
      "Генетика и поведение"
    ],
    "keyTopicsHy": [
      "Նեյրոններ և սինապսներ",
      "Ուղեղի կառուցվածքը",
      "Նյարդային համակարգ",
      "Նեյրոհաղորդիչներ",
      "Գենետիկա և վարքագիծ"
    ],
    "keyTopicsAz": [
      "Neyronlar və Sinapslar",
      "Beyin strukturu",
      "Sinir sistemi",
      "Nörotransmitterlər",
      "Genetika və Davranış"
    ]
  },
  {
    "id": 4,
    "title": "Sensation and Perception",
    "titleKa": "შეგრძნება და აღქმა",
    "description": "How our senses detect stimuli and our brain interprets them.",
    "descriptionKa": "როგორ ამოიცნობს ჩვენი გრძნობები სტიმულს და ჩვენი ტვინი განმარტავს მათ.",
    "icon": "mdi:eye-outline",
    "keyTopics": [
      "Vision",
      "Hearing",
      "Other Senses",
      "Perceptual Organization",
      "Illusions"
    ],
    "keyTopicsKa": [
      "ხედვა",
      "სმენა",
      "სხვა გრძნობები",
      "აღქმის ორგანიზაცია",
      "ილუზიები"
    ],
    "summary": "Sensation is the process by which our sensory receptors detect stimuli; perception is how the brain interprets this. Covers visual processing, Gestalt principles, and perceptual illusions.",
    "keyPoints": [
      "Sensation = detecting physical energy (light, sound, pressure); Perception = organizing and interpreting that sensory information into something meaningful.",
      "Absolute threshold: the minimum stimulation needed to detect a stimulus 50% of the time. Difference threshold (JND): the smallest detectable difference between two stimuli.",
      "Vision: Light enters through the cornea → pupil → lens → retina. Rods detect dim light; cones detect color. Information travels via the optic nerve to the visual cortex.",
      "Gestalt principles of perception: proximity, similarity, closure, continuity, and figure-ground. The brain fills in gaps to create coherent images.",
      "Color vision: Trichromatic theory (3 types of cones for red, green, blue) explains color mixing; Opponent-process theory (red-green, blue-yellow, black-white pairs) explains afterimages.",
      "Hearing: Sound waves → eardrum → ossicles → cochlea → hair cells → auditory nerve. Pitch is encoded by place theory (high frequencies) and frequency theory (low frequencies).",
      "Sensory adaptation: when constant stimulation leads to reduced sensitivity (e.g., you stop noticing a smell after a while)."
    ],
    "funFact": "Your eyes can distinguish about 10 million different colors, yet dogs see the world mainly in blues and yellows. The mantis shrimp, however, has 16 types of color receptors compared to our 3!",
    "realWorld": "Optical illusions are not just fun tricks — they reveal how the brain constructs reality. UX designers use Gestalt principles daily: grouping related buttons, using whitespace, and creating visual hierarchies on websites.",
    "keyFigures": [
      "Gustav Fechner",
      "Ernst Weber",
      "Max Wertheimer",
      "Hermann von Helmholtz"
    ],
    "titleRu": "Ощущение и восприятие",
    "titleHy": "Սենսացիա և ընկալում",
    "titleAz": "Hiss və qavrayış",
    "descriptionRu": "Как наши органы чувств обнаруживают стимулы, а мозг их интерпретирует.",
    "descriptionHy": "Ինչպես է մեր զգայարանները հայտնաբերում գրգռիչները և մեր ուղեղը մեկնաբանում դրանք:",
    "descriptionAz": "Hisslərimiz stimulları necə qəbul edir və beynimiz onları necə şərh edir.",
    "keyTopicsRu": [
      "Зрение",
      "Слух",
      "Другие чувства",
      "Перцептивная организация",
      "Иллюзии"
    ],
    "keyTopicsHy": [
      "Տեսիլք",
      "Լսողություն",
      "Այլ զգայարաններ",
      "Ընկալման կազմակերպություն",
      "Պատրանքներ"
    ],
    "keyTopicsAz": [
      "Görmə",
      "Eşitmə",
      "Digər Hisslər",
      "Qavrama təşkilatı",
      "İllüziyalar"
    ]
  },
  {
    "id": 5,
    "title": "States of Consciousness",
    "titleKa": "ცნობიერების მდგომარეობა",
    "description": "Sleep, dreams, hypnosis, and altered states of consciousness.",
    "descriptionKa": "ძილი, სიზმრები, ჰიპნოზი და ცნობიერების შეცვლილი მდგომარეობა.",
    "icon": "mdi:sleep",
    "keyTopics": [
      "Sleep Stages",
      "Dreams",
      "Hypnosis",
      "Meditation",
      "Psychoactive Substances"
    ],
    "keyTopicsKa": [
      "ძილის ეტაპები",
      "სიზმრები",
      "ჰიპნოზი",
      "მედიტაცია",
      "ფსიქოაქტიური ნივთიერებები"
    ],
    "summary": "Consciousness is our awareness of ourselves and environment. This chapter explores sleep cycles, theories of dreams, hypnosis, meditation, and how substances alter conscious experience.",
    "keyPoints": [
      "Consciousness exists on a continuum: from fully alert to deeply asleep, with many states in between (daydreaming, meditation, hypnosis).",
      "Sleep has two main types: NREM (stages 1–3, progressively deeper) and REM (rapid eye movement, where vivid dreaming occurs). A full cycle lasts about 90 minutes.",
      "Stage 3 (slow-wave/deep sleep) is critical for physical restoration and growth hormone release. REM sleep is vital for memory consolidation and emotional processing.",
      "Dream theories: Freud's wish fulfillment (dreams express unconscious desires), Activation-synthesis (dreams are the brain's interpretation of random neural firing), Information processing (dreams help sort daily memories).",
      "Sleep deprivation impairs attention, memory, immune function, and emotional regulation. Chronic sleep loss is linked to obesity, depression, and heart disease.",
      "Hypnosis is a state of heightened suggestibility and focused attention — it does NOT give the hypnotist control over you. It can help with pain management and some habits.",
      "Psychoactive substances work by mimicking, blocking, or altering neurotransmitter activity: stimulants (caffeine, cocaine), depressants (alcohol, barbiturates), opioids (morphine), hallucinogens (LSD, psilocybin)."
    ],
    "funFact": "During REM sleep, your brain paralyzes your voluntary muscles (atonia) so you don't physically act out your dreams. When this system fails, people develop REM Sleep Behavior Disorder and may punch, kick, or jump out of bed while dreaming.",
    "realWorld": "Understanding sleep stages has transformed shift work policies. Many hospitals and airlines now mandate minimum rest periods because research proved that sleep-deprived professionals make as many errors as intoxicated ones.",
    "keyFigures": [
      "Sigmund Freud",
      "J. Allan Hobson",
      "Ernest Hilgard",
      "William Dement"
    ],
    "titleRu": "Состояния сознания",
    "titleHy": "Գիտակցության վիճակներ",
    "titleAz": "Şüur Dövlətləri",
    "descriptionRu": "Сон, сновидения, гипноз и измененные состояния сознания.",
    "descriptionHy": "Քուն, երազներ, հիպնոս և գիտակցության փոփոխված վիճակ:",
    "descriptionAz": "Yuxu, yuxular, hipnoz və dəyişmiş şüur ​​halları.",
    "keyTopicsRu": [
      "Стадии сна",
      "Мечты",
      "Гипноз",
      "Медитация",
      "Психоактивные вещества"
    ],
    "keyTopicsHy": [
      "Քնի փուլեր",
      "Երազներ",
      "Հիպնոզ",
      "Մեդիտացիա",
      "Հոգեակտիվ նյութեր"
    ],
    "keyTopicsAz": [
      "Yuxu Mərhələləri",
      "Xəyallar",
      "Hipnoz",
      "Meditasiya",
      "Psixoaktiv maddələr"
    ]
  },
  {
    "id": 6,
    "title": "Learning",
    "titleKa": "სწავლა",
    "description": "Classical conditioning, operant conditioning, and observational learning.",
    "descriptionKa": "კლასიკური კონდიცირება, ოპერანტული კონდიცირება და დაკვირვებითი სწავლება.",
    "icon": "mdi:book-open-variant",
    "keyTopics": [
      "Classical Conditioning",
      "Operant Conditioning",
      "Reinforcement & Punishment",
      "Observational Learning"
    ],
    "keyTopicsKa": [
      "კლასიკური კონდიცირება",
      "ოპერაციული კონდიცირება",
      "განმტკიცება და დასჯა",
      "დაკვირვებითი სწავლება"
    ],
    "summary": "Learning is a relatively permanent change in behavior due to experience. Pavlov's classical conditioning, Skinner's operant conditioning, and Bandura's social learning theory are covered.",
    "keyPoints": [
      "Classical conditioning (Pavlov): Learning by association. A neutral stimulus (bell) paired with an unconditioned stimulus (food) eventually produces a conditioned response (salivation to bell alone). Key terms: UCS, UCR, CS, CR.",
      "Key phenomena in classical conditioning: acquisition, extinction (CR fades when CS presented alone), spontaneous recovery, generalization (responding to similar stimuli), and discrimination (distinguishing between stimuli).",
      "Operant conditioning (Skinner): Learning through consequences. Behaviors followed by reinforcement increase; those followed by punishment decrease.",
      "Reinforcement schedules: Fixed-ratio (every N responses), Variable-ratio (unpredictable, like slot machines — most resistant to extinction), Fixed-interval (first response after N time), Variable-interval (unpredictable time).",
      "Positive = adding something; Negative = removing something. Positive reinforcement (reward), Negative reinforcement (removing discomfort), Positive punishment (adding pain), Negative punishment (taking away privileges).",
      "Bandura's social learning theory: We learn by observing others (models). The Bobo doll experiment showed children imitate aggressive behavior they witness. Requires attention, retention, reproduction, and motivation.",
      "Learned helplessness (Seligman): When organisms learn they cannot control outcomes, they stop trying — even when escape becomes possible. Linked to depression in humans."
    ],
    "funFact": "Slot machines use a variable-ratio reinforcement schedule — the same principle Skinner discovered makes behavior hardest to extinguish. This is why gambling can be so addictive: you never know when the next reward will come.",
    "realWorld": "Dog trainers use operant conditioning (clicker training = positive reinforcement). Advertisers pair products with pleasant images (classical conditioning). Social media \"likes\" use variable-ratio reinforcement to keep you scrolling.",
    "keyFigures": [
      "Ivan Pavlov",
      "B.F. Skinner",
      "Albert Bandura",
      "John Watson",
      "Edward Thorndike"
    ],
    "titleRu": "Обучение",
    "titleHy": "Ուսուցում",
    "titleAz": "Öyrənmək",
    "descriptionRu": "Классическое обусловливание, оперантное обусловливание и обучение через наблюдение.",
    "descriptionHy": "Դասական պայմանավորում, օպերանտ պայմանավորում և դիտողական ուսուցում:",
    "descriptionAz": "Klassik kondisioner, operant kondisioner və müşahidə öyrənmə.",
    "keyTopicsRu": [
      "Классическое кондиционирование",
      "Оперантное обусловливание",
      "Подкрепление и наказание",
      "Наблюдательное обучение"
    ],
    "keyTopicsHy": [
      "Դասական կոնդիցիոներ",
      "Գործող օդափոխություն",
      "Ամրապնդում և պատիժ",
      "Դիտորդական ուսուցում"
    ],
    "keyTopicsAz": [
      "Klassik kondisioner",
      "Operant Kondisioner",
      "Gücləndirmə və Cəza",
      "Müşahidə yolu ilə öyrənmə"
    ]
  },
  {
    "id": 7,
    "title": "Memory",
    "titleKa": "მეხსიერება",
    "description": "How we encode, store, and retrieve information.",
    "descriptionKa": "როგორ ვაშიფრავთ, ვინახავთ და ვიღებთ ინფორმაციას.",
    "icon": "mdi:database-outline",
    "keyTopics": [
      "Encoding",
      "Storage",
      "Retrieval",
      "Forgetting",
      "Memory Improvement"
    ],
    "keyTopicsKa": [
      "კოდირება",
      "შენახვა",
      "მოძიება",
      "დავიწყება",
      "მეხსიერების გაუმჯობესება"
    ],
    "summary": "Memory involves encoding, storage, and retrieval. The multi-store model describes sensory, short-term, and long-term memory. Also covers forgetting curves, false memories, and improvement strategies.",
    "keyPoints": [
      "Three stages of memory: Encoding (converting information), Storage (maintaining it), Retrieval (accessing it later).",
      "Atkinson-Shiffrin model: Sensory memory (brief, <1 sec for visual) → Short-term/Working memory (20–30 sec, capacity ~7±2 items) → Long-term memory (unlimited capacity and duration).",
      "Encoding depth matters: Shallow processing (appearance, sound) produces weaker memories than deep/semantic processing (meaning). Elaborative rehearsal beats rote repetition.",
      "Types of long-term memory: Explicit/Declarative (episodic = personal events, semantic = general knowledge) and Implicit/Nondeclarative (procedural = skills, classical conditioning).",
      "Ebbinghaus's forgetting curve: we forget rapidly at first (50% within an hour), then the rate slows. Spaced repetition dramatically improves retention.",
      "Retrieval cues, context-dependent memory (same place), and state-dependent memory (same mood) all improve recall. The testing effect: retrieving information strengthens memory more than re-reading.",
      "Memory is reconstructive, not a perfect recording. Elizabeth Loftus showed that misleading questions can create false memories. Eyewitness testimony is surprisingly unreliable."
    ],
    "funFact": "The \"Google effect\" (digital amnesia) is a real phenomenon: people are less likely to remember information they know they can easily look up online. Your brain outsources memory storage to your phone!",
    "realWorld": "Spaced repetition (reviewing at increasing intervals) is the single most effective study technique. Apps like Anki use it. Cramming the night before works for short-term recall but fades within days.",
    "keyFigures": [
      "Hermann Ebbinghaus",
      "Elizabeth Loftus",
      "George Miller",
      "Endel Tulving",
      "Alan Baddeley"
    ],
    "titleRu": "Память",
    "titleHy": "Հիշողություն",
    "titleAz": "Yaddaş",
    "descriptionRu": "Как мы кодируем, храним и извлекаем информацию.",
    "descriptionHy": "Ինչպես ենք մենք կոդավորում, պահպանում և առբերում տեղեկատվությունը:",
    "descriptionAz": "Məlumatı necə kodlaşdırırıq, saxlayırıq və əldə edirik.",
    "keyTopicsRu": [
      "Кодирование",
      "Хранилище",
      "Поиск",
      "Забывчивость",
      "Улучшение памяти"
    ],
    "keyTopicsHy": [
      "Կոդավորում",
      "Պահպանում",
      "Առբերում",
      "Մոռանալով",
      "Հիշողության բարելավում"
    ],
    "keyTopicsAz": [
      "Kodlaşdırma",
      "Saxlama",
      "Axtarış",
      "Unutmaq",
      "Yaddaşın təkmilləşdirilməsi"
    ]
  },
  {
    "id": 8,
    "title": "Cognition and Intelligence",
    "titleKa": "შემეცნება და ინტელექტი",
    "description": "Thinking, problem-solving, language, and measuring intelligence.",
    "descriptionKa": "აზროვნება, პრობლემის გადაჭრა, ენა და ინტელექტის გაზომვა.",
    "icon": "mdi:lightbulb-outline",
    "keyTopics": [
      "Problem Solving",
      "Decision Making",
      "Language",
      "Intelligence Testing",
      "Creativity"
    ],
    "keyTopicsKa": [
      "პრობლემის გადაჭრა",
      "გადაწყვეტილების მიღება",
      "ენა",
      "დაზვერვის ტესტირება",
      "კრეატიულობა"
    ],
    "summary": "Cognition encompasses thinking, reasoning, problem-solving, and language. Examines heuristics and biases, theories of intelligence, IQ testing, and the nature vs. nurture debate.",
    "keyPoints": [
      "Cognition includes all mental activities: perceiving, thinking, remembering, and communicating.",
      "Problem-solving strategies: algorithms (step-by-step, guaranteed), heuristics (mental shortcuts, fast but error-prone), and insight (sudden \"aha!\" moments).",
      "Cognitive biases: Confirmation bias (seeking info that confirms beliefs), Availability heuristic (judging frequency by ease of recall), Anchoring (over-relying on first information), Framing effect (decisions change based on how options are presented).",
      "Language development: Babbling (6 mo) → One-word (12 mo) → Two-word (24 mo) → Full sentences (3–4 yrs). Chomsky argued humans have an innate Language Acquisition Device (LAD).",
      "The Sapir-Whorf hypothesis suggests that language shapes thought. The strong version (language determines thought) is mostly rejected; the weak version (language influences thought) has support.",
      "Intelligence theories: Spearman's g (general intelligence), Gardner's multiple intelligences (8 types), Sternberg's triarchic theory (analytical, creative, practical).",
      "IQ tests (Stanford-Binet, WAIS) have mean = 100, SD = 15. IQ is 50–80% heritable, but environment matters enormously — the Flynn effect shows IQ scores have risen ~3 points per decade worldwide."
    ],
    "funFact": "The \"Dunning-Kruger effect\" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!",
    "realWorld": "Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making — his work reshaped economics and public policy.",
    "keyFigures": [
      "Alfred Binet",
      "Charles Spearman",
      "Howard Gardner",
      "Robert Sternberg",
      "Noam Chomsky",
      "Daniel Kahneman"
    ],
    "titleRu": "Познание и интеллект",
    "titleHy": "Ճանաչում և բանականություն",
    "titleAz": "İdrak və İntellekt",
    "descriptionRu": "Мышление, решение проблем, язык и измерение интеллекта.",
    "descriptionHy": "Մտածողություն, խնդիրների լուծում, լեզու և ինտելեկտի չափում:",
    "descriptionAz": "Düşünmə, problem həll etmə, dil və zəkanın ölçülməsi.",
    "keyTopicsRu": [
      "Решение проблем",
      "Принятие решений",
      "Язык",
      "Тестирование интеллекта",
      "Креативность"
    ],
    "keyTopicsHy": [
      "Խնդրի լուծում",
      "Որոշումների կայացում",
      "Լեզու",
      "Հետախուզության թեստավորում",
      "Ստեղծագործականություն"
    ],
    "keyTopicsAz": [
      "Problemin həlli",
      "Qərar vermə",
      "Dil",
      "Kəşfiyyat Testi",
      "Yaradıcılıq"
    ]
  },
  {
    "id": 9,
    "title": "Human Development",
    "titleKa": "ადამიანის განვითარება",
    "description": "Physical, cognitive, and social development across the lifespan.",
    "descriptionKa": "ფიზიკური, კოგნიტური და სოციალური განვითარება მთელი ცხოვრების მანძილზე.",
    "icon": "mdi:baby-face-outline",
    "keyTopics": [
      "Piaget's Stages",
      "Attachment",
      "Erikson's Stages",
      "Moral Development",
      "Aging"
    ],
    "keyTopicsKa": [
      "პიაჟეს ეტაპები",
      "დანართი",
      "ერიქსონის სცენები",
      "მორალური განვითარება",
      "დაბერება"
    ],
    "summary": "Development is a lifelong process. Piaget described cognitive stages. Erikson outlined psychosocial crises. Bowlby and Ainsworth studied attachment. Traces changes from conception through aging.",
    "keyPoints": [
      "Nature vs. nurture is a false dichotomy: genes and environment interact continuously. Epigenetics shows that experiences can turn genes on or off.",
      "Piaget's 4 cognitive stages: Sensorimotor (0–2, object permanence), Preoperational (2–7, symbolic thinking but egocentric), Concrete operational (7–11, logical thinking), Formal operational (12+, abstract reasoning).",
      "Attachment theory (Bowlby/Ainsworth): Secure attachment (caregiver responsive) leads to healthy social development. Insecure types: avoidant, anxious-ambivalent, disorganized. Measured by the Strange Situation test.",
      "Erikson's 8 psychosocial stages span the entire lifespan: Trust vs. Mistrust (infancy), Autonomy vs. Shame (toddler), Initiative vs. Guilt (preschool), Industry vs. Inferiority (school age), Identity vs. Role Confusion (adolescence), Intimacy vs. Isolation (young adult), Generativity vs. Stagnation (middle adult), Integrity vs. Despair (late adult).",
      "Kohlberg's moral development: Preconventional (self-interest), Conventional (social norms), Postconventional (universal ethical principles). Most adults operate at the conventional level.",
      "Adolescence brings identity exploration (Erikson's \"identity crisis\"), prefrontal cortex development (not complete until ~25), and heightened emotional volatility due to hormonal changes.",
      "Aging: Fluid intelligence (processing speed) declines with age, but crystallized intelligence (accumulated knowledge) remains stable or even increases. Neuroplasticity continues throughout life."
    ],
    "funFact": "Babies can distinguish all speech sounds from all languages until about 10 months of age. After that, their brains \"prune\" unused neural pathways and specialize in their native language sounds — which is why learning a second language gets harder with age.",
    "realWorld": "Ainsworth's attachment research directly influenced childcare policies worldwide. Secure attachment in infancy predicts better relationships, higher self-esteem, and more resilience in adulthood.",
    "keyFigures": [
      "Jean Piaget",
      "Erik Erikson",
      "John Bowlby",
      "Mary Ainsworth",
      "Lawrence Kohlberg",
      "Lev Vygotsky"
    ],
    "titleRu": "Человеческое развитие",
    "titleHy": "Մարդկային զարգացում",
    "titleAz": "İnsan İnkişafı",
    "descriptionRu": "Физическое, когнитивное и социальное развитие на протяжении всей жизни.",
    "descriptionHy": "Ֆիզիկական, ճանաչողական և սոցիալական զարգացում ողջ կյանքի ընթացքում:",
    "descriptionAz": "Həyat boyu fiziki, koqnitiv və sosial inkişaf.",
    "keyTopicsRu": [
      "Этапы Пиаже",
      "Вложение",
      "Этапы Эриксона",
      "Моральное развитие",
      "Старение"
    ],
    "keyTopicsHy": [
      "Պիաժեի փուլերը",
      "Հավելված",
      "Էրիկսոնի փուլերը",
      "Բարոյական զարգացում",
      "Ծերացում"
    ],
    "keyTopicsAz": [
      "Piagetin mərhələləri",
      "Qoşma",
      "Eriksonun mərhələləri",
      "Mənəvi İnkişaf",
      "Yaşlanma"
    ]
  },
  {
    "id": 10,
    "title": "Motivation and Emotion",
    "titleKa": "მოტივაცია და ემოცია",
    "description": "What drives human behavior and the science of emotions.",
    "descriptionKa": "რა ამოძრავებს ადამიანის ქცევას და ემოციების მეცნიერებას.",
    "icon": "mdi:fire",
    "keyTopics": [
      "Maslow's Hierarchy",
      "Hunger & Eating",
      "Achievement Motivation",
      "Basic Emotions",
      "Emotional Intelligence"
    ],
    "keyTopicsKa": [
      "მასლოუს იერარქია",
      "შიმშილი და ჭამა",
      "მიღწევის მოტივაცია",
      "ძირითადი ემოციები",
      "ემოციური ინტელექტი"
    ],
    "summary": "Motivation energizes and directs behavior. Covers Maslow's hierarchy, James-Lange theory, Cannon-Bard theory, and Schachter-Singer theory of emotions.",
    "keyPoints": [
      "Motivation has three components: activation (initiating), persistence (continuing effort), and intensity (how hard you try).",
      "Drive-reduction theory: physiological needs create drives (hunger, thirst) that motivate behavior to restore homeostasis. But it can't explain curiosity or thrill-seeking.",
      "Maslow's hierarchy of needs (bottom to top): Physiological → Safety → Love/Belonging → Esteem → Self-actualization. Lower needs must be met before higher ones become motivating.",
      "Intrinsic motivation (doing something for its own sake) is more sustainable than extrinsic motivation (rewards/punishments). The overjustification effect: rewarding an already enjoyed activity can decrease intrinsic motivation.",
      "Theories of emotion: James-Lange (body reacts first, then we feel emotion), Cannon-Bard (body reaction and emotion occur simultaneously), Schachter-Singer / Two-factor (physiological arousal + cognitive label = emotion).",
      "Paul Ekman identified 6 universal facial expressions: happiness, sadness, anger, fear, surprise, and disgust. These are recognized across all cultures.",
      "Emotional intelligence (Goleman): the ability to perceive, understand, manage, and use emotions effectively. High EQ predicts better relationships, leadership, and mental health."
    ],
    "funFact": "The \"misattribution of arousal\" study showed that men who crossed a scary suspension bridge rated a female interviewer as more attractive than men who crossed a safe bridge — they mistook their fear-based arousal for romantic attraction!",
    "realWorld": "Companies like Google use Maslow's hierarchy to design workplaces: free food (physiological), job security (safety), team activities (belonging), recognition programs (esteem), and \"20% time\" for passion projects (self-actualization).",
    "keyFigures": [
      "Abraham Maslow",
      "William James",
      "Walter Cannon",
      "Stanley Schachter",
      "Paul Ekman",
      "Daniel Goleman"
    ],
    "titleRu": "Мотивация и эмоции",
    "titleHy": "Մոտիվացիա և Զգացմունք",
    "titleAz": "Motivasiya və Emosiya",
    "descriptionRu": "Что движет человеческим поведением и наука об эмоциях.",
    "descriptionHy": "Ինչն է մղում մարդու վարքը և զգացմունքների գիտությունը:",
    "descriptionAz": "İnsan davranışını və duyğular elmini idarə edən nədir.",
    "keyTopicsRu": [
      "Иерархия Маслоу",
      "Голод и еда",
      "Мотивация достижения",
      "Основные эмоции",
      "Эмоциональный интеллект"
    ],
    "keyTopicsHy": [
      "Մասլոուի հիերարխիա",
      "Սով և ուտել",
      "Ձեռքբերման մոտիվացիա",
      "Հիմնական հույզեր",
      "Զգացմունքային ինտելեկտ"
    ],
    "keyTopicsAz": [
      "Maslow iyerarxiyası",
      "Aclıq və Yemək",
      "Nailiyyət Motivasiyası",
      "Əsas Emosiyalar",
      "Emosional İntellekt"
    ]
  },
  {
    "id": 11,
    "title": "Personality",
    "titleKa": "პიროვნება",
    "description": "Theories of personality: from Freud to the Big Five.",
    "descriptionKa": "პიროვნების თეორიები: ფროიდიდან დიდ ხუთამდე.",
    "icon": "mdi:drama-masks",
    "keyTopics": [
      "Psychoanalytic Theory",
      "Humanistic Theory",
      "Trait Theory",
      "Big Five",
      "Personality Assessment"
    ],
    "keyTopicsKa": [
      "ფსიქოანალიტიკური თეორია",
      "ჰუმანისტური თეორია",
      "თვისების თეორია",
      "დიდი ხუთეული",
      "პიროვნების შეფასება"
    ],
    "summary": "Personality is our unique pattern of thinking, feeling, and behaving. From Freud's id/ego/superego to the Big Five traits (OCEAN), covers all major personality theories.",
    "keyPoints": [
      "Freud's psychoanalytic theory: Personality is shaped by unconscious conflicts between the Id (primal desires), Ego (rational mediator), and Superego (moral conscience). Defense mechanisms (repression, projection, denial) protect the ego.",
      "Freud's psychosexual stages: Oral, Anal, Phallic (Oedipus complex), Latency, Genital. Fixation at any stage can affect adult personality.",
      "Neo-Freudians (Adler, Jung, Horney) kept the unconscious but de-emphasized sexuality. Jung introduced collective unconscious and archetypes. Adler focused on inferiority complex.",
      "Humanistic approaches: Rogers emphasized unconditional positive regard and self-concept. Maslow focused on self-actualization — becoming the best version of yourself.",
      "Trait theories describe personality using stable dimensions. The Big Five (OCEAN): Openness (curiosity), Conscientiousness (organization), Extraversion (sociability), Agreeableness (cooperativeness), Neuroticism (emotional instability).",
      "The Big Five are partially heritable (~40–60%), relatively stable after age 30, and predict job performance, relationship satisfaction, and health outcomes.",
      "Personality assessment: Self-report inventories (MMPI, NEO-PI-R) have good reliability but are subject to social desirability bias. Projective tests (Rorschach, TAT) have weaker validity."
    ],
    "funFact": "The Myers-Briggs Type Indicator (MBTI) is used by 88% of Fortune 500 companies, yet most personality psychologists consider it scientifically unreliable — about 50% of people get a different result when retested. The Big Five is the gold standard in research.",
    "realWorld": "Recruiters use Big Five assessments because Conscientiousness is the strongest personality predictor of job performance across all occupations. Agreeableness predicts teamwork, and Openness predicts creativity.",
    "keyFigures": [
      "Sigmund Freud",
      "Carl Jung",
      "Alfred Adler",
      "Carl Rogers",
      "Gordon Allport",
      "Hans Eysenck"
    ],
    "titleRu": "Личность",
    "titleHy": "Անհատականություն",
    "titleAz": "Şəxsiyyət",
    "descriptionRu": "Теории личности: от Фрейда до «Большой пятерки».",
    "descriptionHy": "Անհատականության տեսություններ. Ֆրեյդից մինչև Մեծ հնգյակ.",
    "descriptionAz": "Şəxsiyyət nəzəriyyələri: Freyddən Böyük Beşliyə qədər.",
    "keyTopicsRu": [
      "Психоаналитическая теория",
      "Гуманистическая теория",
      "Теория черт",
      "Большая пятерка",
      "Оценка личности"
    ],
    "keyTopicsHy": [
      "Հոգեվերլուծական տեսություն",
      "Հումանիստական ​​տեսություն",
      "Հատկանիշների տեսություն",
      "Մեծ հնգյակ",
      "Անհատականության գնահատում"
    ],
    "keyTopicsAz": [
      "Psixoanalitik nəzəriyyə",
      "Humanist nəzəriyyə",
      "Xüsusiyyətlər nəzəriyyəsi",
      "Böyük beşlik",
      "Şəxsiyyətin qiymətləndirilməsi"
    ]
  },
  {
    "id": 12,
    "title": "Social Psychology",
    "titleKa": "სოციალური ფსიქოლოგია",
    "description": "How others influence our thoughts, feelings, and behavior.",
    "descriptionKa": "როგორ ახდენენ სხვები გავლენას ჩვენს აზრებზე, გრძნობებსა და ქცევაზე.",
    "icon": "mdi:account-group-outline",
    "keyTopics": [
      "Conformity",
      "Obedience",
      "Attitudes",
      "Group Behavior",
      "Prejudice"
    ],
    "keyTopicsKa": [
      "კონფორმულობა",
      "მორჩილება",
      "დამოკიდებულებები",
      "ჯგუფური ქცევა",
      "ცრურწმენა"
    ],
    "summary": "Social psychology studies how people think about, influence, and relate to each other. Covers conformity, obedience, cognitive dissonance, group behavior, and prejudice.",
    "keyPoints": [
      "Attribution theory: We explain others' behavior using dispositional (personality) or situational (environment) attributions. The fundamental attribution error: we overestimate personality and underestimate situations when judging others.",
      "Conformity (Asch): People agree with an obviously wrong answer to match the group about 37% of the time. Increases with group size (up to ~5) and unanimity.",
      "Obedience (Milgram): 65% of participants delivered what they believed were lethal electric shocks when instructed by an authority figure. Authority, proximity, and legitimacy increased obedience.",
      "Cognitive dissonance (Festinger): When our actions contradict our beliefs, we feel discomfort and change our attitudes to match our behavior. Explains why hazing rituals increase group loyalty.",
      "Group phenomena: Social facilitation (performing better on easy tasks when watched), Social loafing (working less in groups), Groupthink (cohesive groups suppress dissent), Deindividuation (anonymity reduces self-awareness).",
      "Prejudice involves stereotypes (beliefs), prejudice (attitudes), and discrimination (behaviors). Reduced through intergroup contact when groups have equal status and share common goals.",
      "Bystander effect (Darley & Latané): The more people present, the less likely anyone is to help. Caused by diffusion of responsibility and pluralistic ignorance."
    ],
    "funFact": "Zimbardo's Stanford Prison Experiment (1971) was meant to last 2 weeks but was stopped after just 6 days because \"guards\" became sadistic and \"prisoners\" showed signs of psychological breakdown — demonstrating the power of situational forces on behavior.",
    "realWorld": "Understanding conformity and obedience explains everything from workplace culture (\"nobody questions the boss\") to historical atrocities. Modern organizations use these insights to create psychological safety — environments where people feel safe to speak up.",
    "keyFigures": [
      "Solomon Asch",
      "Stanley Milgram",
      "Philip Zimbardo",
      "Leon Festinger",
      "Muzafer Sherif"
    ],
    "titleRu": "Социальная Психология",
    "titleHy": "Սոցիալական հոգեբանություն",
    "titleAz": "Sosial Psixologiya",
    "descriptionRu": "Как другие влияют на наши мысли, чувства и поведение.",
    "descriptionHy": "Ինչպես են ուրիշներն ազդում մեր մտքերի, զգացմունքների և վարքի վրա:",
    "descriptionAz": "Başqalarının düşüncələrimizə, hisslərimizə və davranışlarımıza necə təsir etdiyi.",
    "keyTopicsRu": [
      "Соответствие",
      "Послушание",
      "Отношения",
      "Групповое поведение",
      "Предрассудки"
    ],
    "keyTopicsHy": [
      "Համապատասխանություն",
      "Հնազանդություն",
      "Վերաբերմունքներ",
      "Խմբային վարքագիծ",
      "Նախապաշարմունք"
    ],
    "keyTopicsAz": [
      "Uyğunluq",
      "İtaət",
      "Münasibətlər",
      "Qrup Davranışı",
      "Qərəz"
    ]
  },
  {
    "id": 13,
    "title": "Stress, Health, and Coping",
    "titleKa": "სტრესი, ჯანმრთელობა და დაძლევა",
    "description": "How stress affects us and strategies to cope with it.",
    "descriptionKa": "როგორ მოქმედებს სტრესი ჩვენზე და მასთან გამკლავების სტრატეგიები.",
    "icon": "mdi:meditation",
    "keyTopics": [
      "Stress Response",
      "Stressors",
      "Coping Strategies",
      "Health Psychology",
      "Resilience"
    ],
    "keyTopicsKa": [
      "სტრესის რეაქცია",
      "სტრესორები",
      "დაძლევის სტრატეგიები",
      "ჯანმრთელობის ფსიქოლოგია",
      "გამძლეობა"
    ],
    "summary": "Stress is the body's response to demanding situations. Covers alarm/resistance/exhaustion stages, coping strategies, social support, and resilience.",
    "keyPoints": [
      "Stress is the body's response to any perceived threat or demand. Eustress (positive) helps performance; distress (negative) harms health.",
      "Selye's General Adaptation Syndrome (GAS): Alarm (fight-or-flight activated) → Resistance (body adapts to ongoing stress) → Exhaustion (resources depleted, vulnerability to illness).",
      "The fight-or-flight response: the sympathetic nervous system releases adrenaline and cortisol, increasing heart rate, blood pressure, and blood sugar. Useful for short-term threats, harmful when chronic.",
      "Major stressors: catastrophes, significant life changes (Holmes-Rahe scale), and daily hassles. Research shows daily hassles (traffic, deadlines) may affect health more than major events.",
      "Chronic stress suppresses the immune system (psychoneuroimmunology), increases risk of cardiovascular disease, contributes to depression and anxiety, and accelerates cellular aging.",
      "Coping strategies: Problem-focused coping (taking action to solve the problem) works best for controllable situations. Emotion-focused coping (managing feelings) is better for uncontrollable situations.",
      "Protective factors: Social support (the #1 buffer against stress), exercise (reduces cortisol), mindfulness and meditation (reduces amygdala reactivity), perceived control (believing you can influence outcomes), and optimism."
    ],
    "funFact": "Laughing reduces cortisol by 39% and increases endorphins by 27%. Studies show that even anticipating a funny experience can reduce stress hormones. Hospitals now use \"laughter therapy\" with positive results.",
    "realWorld": "Burnout (emotional exhaustion, depersonalization, reduced accomplishment) affects 67% of workers at some point. Companies that implement stress management programs see 25% reductions in sick days and higher productivity.",
    "keyFigures": [
      "Hans Selye",
      "Richard Lazarus",
      "Walter Cannon",
      "Martin Seligman",
      "Sheldon Cohen"
    ],
    "titleRu": "Стресс, здоровье и преодоление трудностей",
    "titleHy": "Սթրես, առողջություն և հաղթահարում",
    "titleAz": "Stress, Sağlamlıq və Mübarizə",
    "descriptionRu": "Как стресс влияет на нас и как с ним справиться.",
    "descriptionHy": "Ինչպես է սթրեսը ազդում մեզ վրա և դրա դեմ պայքարի ռազմավարություններ:",
    "descriptionAz": "Stress bizə necə təsir edir və bununla mübarizə strategiyaları.",
    "keyTopicsRu": [
      "Стрессовая реакция",
      "Стрессоры",
      "Стратегии преодоления трудностей",
      "Психология здоровья",
      "Устойчивость"
    ],
    "keyTopicsHy": [
      "Սթրեսի արձագանք",
      "Սթրեսներ",
      "Հաղթահարման ռազմավարություններ",
      "Առողջության հոգեբանություն",
      "Ճկունություն"
    ],
    "keyTopicsAz": [
      "Stress cavabı",
      "Stressorlar",
      "Mübarizə Strategiyaları",
      "Sağlamlıq Psixologiyası",
      "Dözümlülük"
    ]
  },
  {
    "id": 14,
    "title": "Psychological Disorders",
    "titleKa": "ფსიქოლოგიური დარღვევები",
    "description": "Understanding mental disorders: symptoms, causes, and classification.",
    "descriptionKa": "ფსიქიკური აშლილობის გაგება: სიმპტომები, მიზეზები და კლასიფიკაცია.",
    "icon": "mdi:stethoscope",
    "keyTopics": [
      "DSM Classification",
      "Anxiety Disorders",
      "Mood Disorders",
      "Schizophrenia",
      "Personality Disorders"
    ],
    "keyTopicsKa": [
      "DSM კლასიფიკაცია",
      "შფოთვითი დარღვევები",
      "განწყობის დარღვევები",
      "შიზოფრენია",
      "პიროვნების დარღვევები"
    ],
    "summary": "Psychological disorders cause significant distress or impairment. Covers anxiety, mood disorders, schizophrenia, and personality disorders with biological and social causes.",
    "keyPoints": [
      "A psychological disorder is a pattern of thoughts, feelings, or behaviors that is deviant, distressful, and dysfunctional (the \"3 D's\"). Context and culture matter in defining \"abnormal.\"",
      "The DSM-5 (Diagnostic and Statistical Manual) is the standard classification system. It categorizes disorders by symptoms, not causes, and is used for diagnosis and insurance.",
      "Anxiety disorders (most common): Generalized Anxiety Disorder (persistent worry), Panic Disorder (sudden intense fear attacks), Phobias (irrational fear of specific things), OCD (obsessive thoughts + compulsive rituals), PTSD (after trauma).",
      "Mood disorders: Major Depressive Disorder (persistent sadness, loss of interest, lasting 2+ weeks) and Bipolar Disorder (alternating episodes of mania and depression). Depression is the leading cause of disability worldwide.",
      "Schizophrenia: a severe disorder involving positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, social withdrawal). Dopamine hypothesis: excess dopamine activity in certain brain pathways.",
      "Personality disorders: enduring, inflexible patterns. Antisocial PD (disregard for others' rights, lack of empathy), Borderline PD (unstable relationships and emotions), Narcissistic PD (grandiosity, need for admiration).",
      "The diathesis-stress model: disorders result from a genetic/biological predisposition (diathesis) + environmental triggers (stress). Neither alone is usually sufficient."
    ],
    "funFact": "About 1 in 5 adults experiences a mental health condition in any given year. Depression and anxiety cost the global economy $1 trillion annually in lost productivity — yet most disorders are highly treatable with proper intervention.",
    "realWorld": "The shift from institutionalization to community-based mental health care (deinstitutionalization) transformed treatment. Today, early intervention programs for psychosis can reduce symptoms by 50% and dramatically improve long-term outcomes.",
    "keyFigures": [
      "Emil Kraepelin",
      "Aaron Beck",
      "David Rosenhan",
      "Thomas Szasz",
      "Kay Redfield Jamison"
    ],
    "titleRu": "Психологические расстройства",
    "titleHy": "Հոգեբանական խանգարումներ",
    "titleAz": "Psixoloji pozğunluqlar",
    "descriptionRu": "Понимание психических расстройств: симптомы, причины и классификация.",
    "descriptionHy": "Հասկանալով հոգեկան խանգարումները. ախտանիշները, պատճառները և դասակարգումը:",
    "descriptionAz": "Psixi pozğunluqları başa düşmək: simptomlar, səbəblər və təsnifat.",
    "keyTopicsRu": [
      "Классификация ДСМ",
      "Тревожные расстройства",
      "Расстройства настроения",
      "Шизофрения",
      "Расстройства личности"
    ],
    "keyTopicsHy": [
      "DSM դասակարգում",
      "Անհանգստության խանգարումներ",
      "Տրամադրության խանգարումներ",
      "Շիզոֆրենիա",
      "Անհատականության խանգարումներ"
    ],
    "keyTopicsAz": [
      "DSM təsnifatı",
      "Anksiyete pozğunluqları",
      "Əhval pozğunluqları",
      "Şizofreniya",
      "Şəxsiyyət pozğunluqları"
    ]
  },
  {
    "id": 15,
    "title": "Therapies",
    "titleKa": "თერაპიები",
    "description": "Approaches to treating psychological disorders.",
    "descriptionKa": "ფსიქოლოგიური დარღვევების მკურნალობის მიდგომები.",
    "icon": "mdi:pill",
    "keyTopics": [
      "Psychotherapy",
      "CBT",
      "Humanistic Therapy",
      "Biomedical Therapies",
      "Group Therapy"
    ],
    "keyTopicsKa": [
      "ფსიქოთერაპია",
      "CBT",
      "ჰუმანისტური თერაპია",
      "ბიოსამედიცინო თერაპია",
      "ჯგუფური თერაპია"
    ],
    "summary": "Therapy comes in many forms: psychoanalytic, CBT, humanistic, and biomedical. Compares therapeutic approaches and their effectiveness.",
    "keyPoints": [
      "Psychoanalytic/Psychodynamic therapy: explores unconscious conflicts through free association, dream analysis, and transference. Long-term, insight-oriented. Less empirically supported than CBT.",
      "Cognitive-Behavioral Therapy (CBT): identifies and changes distorted thinking patterns and maladaptive behaviors. The gold standard for anxiety and depression with strong evidence. Short-term (12–20 sessions).",
      "Beck's cognitive therapy targets cognitive distortions: all-or-nothing thinking, catastrophizing, overgeneralization, mind reading, and personalization.",
      "Humanistic therapy (Rogers's client-centered): provides unconditional positive regard, empathy, and genuineness. The therapist creates a supportive environment for self-exploration.",
      "Biomedical therapies: Antidepressants (SSRIs increase serotonin), Anti-anxiety meds (benzodiazepines), Antipsychotics (block dopamine), Mood stabilizers (lithium for bipolar). ECT (electroconvulsive therapy) remains effective for severe, treatment-resistant depression.",
      "Group therapy and family therapy leverage social support and address relationship dynamics. More cost-effective and can reduce isolation. Self-help groups (AA model) provide peer support.",
      "Evidence-based practice: combining the best research evidence, clinical expertise, and patient preferences. Not all therapies are equally effective for all disorders — matching treatment to diagnosis matters."
    ],
    "funFact": "Talking to a therapist actually changes your brain. Brain scans show that CBT produces measurable changes in activity in the prefrontal cortex and amygdala — the same regions affected by antidepressant medication.",
    "realWorld": "Teletherapy (online therapy) exploded during COVID-19 and research shows it's nearly as effective as in-person therapy for most conditions. This massively expanded access to mental health care, especially in rural areas.",
    "keyFigures": [
      "Aaron Beck",
      "Carl Rogers",
      "Albert Ellis",
      "Joseph Wolpe",
      "Sigmund Freud"
    ],
    "titleRu": "Терапия",
    "titleHy": "Թերապիաներ",
    "titleAz": "Terapiyalar",
    "descriptionRu": "Подходы к лечению психологических расстройств.",
    "descriptionHy": "Հոգեբանական խանգարումների բուժման մոտեցումներ.",
    "descriptionAz": "Psixoloji pozğunluqların müalicəsinə yanaşmalar.",
    "keyTopicsRu": [
      "Психотерапия",
      "ЗБТ",
      "Гуманистическая терапия",
      "Биомедицинская терапия",
      "Групповая терапия"
    ],
    "keyTopicsHy": [
      "Հոգեթերապիա",
      "CBT",
      "Հումանիստական ​​թերապիա",
      "Կենսաբժշկական թերապիա",
      "Խմբային թերապիա"
    ],
    "keyTopicsAz": [
      "Psixoterapiya",
      "CBT",
      "Humanist Terapiya",
      "Biotibbi Müalicələr",
      "Qrup terapiyası"
    ]
  },
  {
    "id": 16,
    "title": "Applied Psychology",
    "titleKa": "გამოყენებითი ფსიქოლოგია",
    "description": "Psychology in the real world: work, education, law, and everyday life.",
    "descriptionKa": "ფსიქოლოგია რეალურ სამყაროში: სამუშაო, განათლება, სამართალი და ყოველდღიური ცხოვრება.",
    "icon": "mdi:earth",
    "keyTopics": [
      "Industrial-Organizational Psychology",
      "Educational Psychology",
      "Forensic Psychology",
      "Positive Psychology"
    ],
    "keyTopicsKa": [
      "ინდუსტრიულ-ორგანიზაციული ფსიქოლოგია",
      "განათლების ფსიქოლოგია",
      "სასამართლო ფსიქოლოგია",
      "პოზიტიური ფსიქოლოგია"
    ],
    "summary": "Psychology applies to virtually every area of life. I/O psychology, educational psychology, forensic psychology, and positive psychology all make real-world impact.",
    "keyPoints": [
      "Industrial-Organizational (I/O) Psychology: applies psychological principles to the workplace. Covers hiring (structured interviews beat unstructured), training design, motivation, leadership, job satisfaction, and reducing turnover.",
      "Educational Psychology: studies how people learn in educational settings. Applies Piaget, Vygotsky (zone of proximal development), and learning styles research. Growth mindset (Dweck): believing intelligence is malleable improves academic performance.",
      "Forensic Psychology: intersection of psychology and law. Includes criminal profiling, eyewitness testimony research, jury selection, competency evaluations, and risk assessment for reoffending.",
      "Health Psychology: promotes healthy behaviors and prevents illness. Covers behavior change models (stages of change), adherence to medical treatment, chronic pain management, and the mind-body connection.",
      "Positive Psychology (Seligman): the scientific study of what makes life worth living. Focuses on strengths, virtues, and optimal functioning rather than pathology. Key concepts: flow (Csikszentmihalyi), grit (Duckworth), gratitude, and character strengths.",
      "Environmental Psychology: how physical environments affect behavior and well-being. Includes workspace design, urban planning, crowding effects, and noise pollution impacts.",
      "Cross-cultural psychology: understanding how culture shapes behavior, cognition, and emotion. Individualistic cultures (US, Western Europe) emphasize personal achievement; collectivistic cultures (East Asia, Latin America) emphasize group harmony."
    ],
    "funFact": "The \"IKEA effect\" (discovered by behavioral economists using psychological research) shows that people value things they built themselves 63% more than identical pre-built items — even when their creation is objectively worse!",
    "realWorld": "Seligman's positive psychology research is used by the U.S. Army's Comprehensive Soldier Fitness program, training 1.1 million soldiers in resilience skills. Schools worldwide now teach \"character strengths\" and \"growth mindset\" as part of their curriculum.",
    "keyFigures": [
      "Martin Seligman",
      "Mihaly Csikszentmihalyi",
      "Carol Dweck",
      "Angela Duckworth",
      "Hugo Münsterberg"
    ],
    "titleRu": "Прикладная психология",
    "titleHy": "Կիրառական հոգեբանություն",
    "titleAz": "Tətbiqi Psixologiya",
    "descriptionRu": "Психология в реальном мире: работа, образование, право и повседневная жизнь.",
    "descriptionHy": "Հոգեբանությունը իրական աշխարհում. աշխատանք, կրթություն, իրավունք և առօրյա կյանք:",
    "descriptionAz": "Real dünyada psixologiya: iş, təhsil, hüquq və gündəlik həyat.",
    "keyTopicsRu": [
      "Производственно-организационная психология",
      "Педагогическая психология",
      "Судебная психология",
      "Позитивная психология"
    ],
    "keyTopicsHy": [
      "Արդյունաբերական-կազմակերպչական հոգեբանություն",
      "Կրթության հոգեբանություն",
      "Դատաբժշկական հոգեբանություն",
      "Դրական հոգեբանություն"
    ],
    "keyTopicsAz": [
      "Sənaye-Təşkilati Psixologiya",
      "Təhsil Psixologiyası",
      "Məhkəmə Psixologiyası",
      "Pozitiv Psixologiya"
    ]
  }
];

export const QUIZZES: Quiz[] = [
  {
    "id": "ch1-quiz",
    "chapterId": 1,
    "title": "What is Psychology? — Quiz",
    "titleKa": "რა არის ფსიქოლოგია? — ვიქტორინა",
    "questions": [
      {
        "id": "q1-1",
        "question": "Who established the first psychology laboratory in 1879?",
        "questionKa": "ვინ დააარსა 1879 წელს პირველი ფსიქოლოგიის ლაბორატორია?",
        "options": [
          "Sigmund Freud",
          "Wilhelm Wundt",
          "William James",
          "John Watson"
        ],
        "optionsKa": [
          "ზიგმუნდ ფროიდმა",
          "ვილჰელმ ვუნდტმა",
          "უილიამ ჯეიმსმა",
          "ჯონ უოტსონმა"
        ],
        "correctIndex": 1,
        "explanation": "Wilhelm Wundt founded the first psychology lab at the University of Leipzig in 1879.",
        "explanationKa": "ვილჰელმ ვუნდტმა დააარსა პირველი ფსიქოლოგიის ლაბორატორია ლაიფციგის უნივერსიტეტში 1879 წელს.",
        "optionsRu": [
          "Зигмунд Фрейд",
          "Вильгельм Вундт",
          "Уильям Джеймс",
          "Джон Ватсон"
        ],
        "optionsHy": [
          "Զիգմունդ Ֆրեյդ",
          "Վիլհելմ Վունդտ",
          "Ուիլյամ Ջեյմս",
          "Ջոն Ուոթսոն"
        ],
        "optionsAz": [
          "Ziqmund Freyd",
          "Vilhelm Vundt",
          "William James",
          "John Watson"
        ],
        "questionAz": "1879-cu ildə ilk psixologiya laboratoriyasını kim yaradıb?",
        "explanationRu": "Вильгельм Вундт основал первую психологическую лабораторию в Лейпцигском университете в 1879 году.",
        "questionHy": "Ո՞վ հիմնեց առաջին հոգեբանական լաբորատորիան 1879 թվականին:",
        "explanationHy": "Վիլհելմ Վունդտը հիմնադրել է առաջին հոգեբանական լաբորատորիան Լայպցիգի համալսարանում 1879 թվականին:",
        "questionRu": "Кто основал первую психологическую лабораторию в 1879 году?",
        "explanationAz": "Vilhelm Vundt 1879-cu ildə Leypsiq Universitetində ilk psixologiya laboratoriyasını qurdu."
      },
      {
        "id": "q1-2",
        "question": "Psychology is best defined as the scientific study of:",
        "questionKa": "ფსიქოლოგია შესწავლის საგანია:",
        "options": [
          "The mind only",
          "Behavior and mental processes",
          "Emotions",
          "Brain chemistry"
        ],
        "optionsKa": [
          "გონება",
          "ქცევა და ფსიქიკური პროცესები",
          "ემოციები",
          "ტვინის ქიმია"
        ],
        "correctIndex": 1,
        "explanation": "Psychology is the scientific study of both behavior and mental processes.",
        "explanationKa": "ფსიქოლოგია არის ქცევისა და ფსიქიკური პროცესების შემსწავლელი მეცნიერება.",
        "optionsRu": [
          "Только разум",
          "Поведение и психические процессы",
          "Эмоции",
          "Химия мозга"
        ],
        "optionsHy": [
          "Միայն միտքը",
          "Վարքագիծ և մտավոր գործընթացներ",
          "Զգացմունքներ",
          "Ուղեղի քիմիա"
        ],
        "optionsAz": [
          "Yalnız ağıl",
          "Davranış və psixi proseslər",
          "Emosiyalar",
          "Beyin kimyası"
        ],
        "questionRu": "Психологию лучше всего определить как научное исследование:",
        "explanationRu": "Психология – это научное исследование поведения и психических процессов.",
        "explanationAz": "Psixologiya həm davranış, həm də psixi proseslərin elmi tədqiqidir.",
        "questionHy": "Հոգեբանությունը լավագույնս սահմանվում է որպես հետևյալի գիտական ​​ուսումնասիրություն.",
        "questionAz": "Psixologiya ən yaxşı elmi araşdırma kimi müəyyən edilir:",
        "explanationHy": "Հոգեբանությունը գիտական ​​ուսումնասիրություն է ինչպես վարքի, այնպես էլ մտավոր գործընթացների մասին:"
      },
      {
        "id": "q1-3",
        "question": "Which perspective emphasizes observable behavior?",
        "questionKa": "ფსიქოლოგიის რომელი მიმართულება ფოკუსირდება დაკვირვებად ქცევაზე?",
        "options": [
          "Psychoanalytic",
          "Humanistic",
          "Behavioral",
          "Cognitive"
        ],
        "optionsKa": [
          "ფსიქოანალიტიკური",
          "ჰუმანისტური",
          "ბიჰევიორისტული",
          "კოგნიტური"
        ],
        "correctIndex": 2,
        "explanation": "Behaviorism focuses on observable, measurable behaviors.",
        "explanationKa": "ბიჰევიორიზმი ფოკუსირდება დაკვირვებად, გაზომვად ქცევებზე.",
        "optionsRu": [
          "Психоаналитический",
          "гуманистический",
          "Поведенческий",
          "Когнитивный"
        ],
        "optionsHy": [
          "Հոգեվերլուծական",
          "Մարդասիրական",
          "Վարքագծային",
          "Ճանաչողական"
        ],
        "optionsAz": [
          "Psixoanalitik",
          "Humanist",
          "Davranış",
          "Koqnitiv"
        ],
        "questionRu": "Какая точка зрения подчеркивает наблюдаемое поведение?",
        "explanationHy": "Բևորիզմը կենտրոնանում է դիտարկելի, չափելի վարքագծի վրա:",
        "explanationAz": "Behaviorizm müşahidə edilə bilən, ölçülə bilən davranışlara diqqət yetirir.",
        "questionAz": "Hansı perspektiv müşahidə edilə bilən davranışı vurğulayır?",
        "questionHy": "Ո՞ր տեսակետն է ընդգծում դիտարկելի վարքագիծը:",
        "explanationRu": "Бихевиоризм фокусируется на наблюдаемом и измеримом поведении."
      },
      {
        "id": "q1-4",
        "question": "The psychoanalytic approach was developed by:",
        "questionKa": "ფსიქოანალიტიკური მიდგომა შეიმუშავა:",
        "options": [
          "Carl Rogers",
          "Sigmund Freud",
          "Abraham Maslow",
          "Ivan Pavlov"
        ],
        "optionsKa": [
          "კარლ როჯერსმა",
          "ზიგმუნდ ფროიდმა",
          "აბრაჰამ მასლოუმ",
          "ივან პავლოვმა"
        ],
        "correctIndex": 1,
        "explanation": "Sigmund Freud developed psychoanalysis.",
        "explanationKa": "ზიგმუნდ ფროიდმა შეიმუშავა ფსიქოანალიზი.",
        "optionsRu": [
          "Карл Роджерс",
          "Зигмунд Фрейд",
          "Авраам Маслоу",
          "Иван Павлов"
        ],
        "optionsHy": [
          "Կարլ Ռոջերս",
          "Զիգմունդ Ֆրեյդ",
          "Աբրահամ Մասլոու",
          "Իվան Պավլով"
        ],
        "optionsAz": [
          "Karl Rocers",
          "Ziqmund Freyd",
          "Abraham Maslow",
          "İvan Pavlov"
        ],
        "questionRu": "Психоаналитический подход был разработан:",
        "questionAz": "Psixoanalitik yanaşma aşağıdakılar tərəfindən hazırlanmışdır:",
        "questionHy": "Հոգեվերլուծական մոտեցումը մշակվել է.",
        "explanationAz": "Ziqmund Freyd psixoanalizi inkişaf etdirdi.",
        "explanationRu": "Зигмунд Фрейд разработал психоанализ.",
        "explanationHy": "Զիգմունդ Ֆրեյդը զարգացրեց հոգեվերլուծությունը:"
      },
      {
        "id": "q1-5",
        "question": "Which school used introspection as its primary method?",
        "questionKa": "რომელი სკოლა იყენებდა ინტროსპექციას, როგორც ძირითად მეთოდს?",
        "options": [
          "Functionalism",
          "Structuralism",
          "Gestalt",
          "Behaviorism"
        ],
        "optionsKa": [
          "ფუნქციონალიზმი",
          "სტრუქტურალიზმი",
          "გეშტალტი",
          "ბიჰევიორიზმი"
        ],
        "correctIndex": 1,
        "explanation": "Structuralism used introspection to analyze conscious experience.",
        "explanationKa": "სტრუქტურალიზმი იყენებდა ინტროსპექციას ცნობიერი გამოცდილების ანალიზისთვის.",
        "optionsRu": [
          "Функционализм",
          "Структурализм",
          "гештальт",
          "Бихевиоризм"
        ],
        "optionsHy": [
          "Ֆունկցիոնալիզմ",
          "Կառուցվածքալիզմ",
          "Գեշտալտ",
          "Վարքագծություն"
        ],
        "optionsAz": [
          "Funksionalizm",
          "Strukturizm",
          "Geştalt",
          "Davranışçılıq"
        ],
        "explanationRu": "Структурализм использовал самоанализ для анализа сознательного опыта.",
        "questionRu": "Какая школа использовала самоанализ в качестве основного метода?",
        "questionHy": "Ո՞ր դպրոցն է օգտագործել ներդաշնակությունը որպես հիմնական մեթոդ:",
        "explanationHy": "Structuralism-ն օգտագործեց ներդիտումը գիտակցված փորձը վերլուծելու համար:",
        "explanationAz": "Strukturizm şüurlu təcrübəni təhlil etmək üçün introspeksiyadan istifadə edirdi.",
        "questionAz": "Hansı məktəb əsas metod kimi introspeksiyadan istifadə edirdi?"
      },
      {
        "id": "q1-6",
        "question": "The humanistic perspective emphasizes:",
        "questionKa": "ჰუმანისტური მიმართულება აქცენტს აკეთებს:",
        "options": [
          "Unconscious desires",
          "Free will and self-actualization",
          "Stimulus-response",
          "Brain chemistry"
        ],
        "optionsKa": [
          "არაცნობიერ სურვილებზე",
          "თავისუფალ ნებასა და თვითრეალიზაციაზე",
          "სტიმულ-რეაქციაზე",
          "ტვინის ქიმიაზე"
        ],
        "correctIndex": 1,
        "explanation": "Humanistic psychology focuses on personal growth and free will.",
        "explanationKa": "ჰუმანისტური ფსიქოლოგია ფოკუსირდება პიროვნულ ზრდასა და თავისუფალ ნებაზე.",
        "optionsRu": [
          "Бессознательные желания",
          "Свободная воля и самореализация",
          "Стимул-реакция",
          "Химия мозга"
        ],
        "optionsHy": [
          "Անգիտակից ցանկություններ",
          "Ազատ կամք և ինքնաիրականացում",
          "Խթան-արձագանք",
          "Ուղեղի քիմիա"
        ],
        "optionsAz": [
          "Şüursuz arzular",
          "Sərbəst iradə və özünü həyata keçirmə",
          "Stimul-cavab",
          "Beyin kimyası"
        ],
        "explanationHy": "Մարդասիրական հոգեբանությունը կենտրոնանում է անձնական աճի և ազատ կամքի վրա:",
        "questionHy": "Մարդասիրական հեռանկարը շեշտում է.",
        "explanationRu": "Гуманистическая психология фокусируется на личностном росте и свободе воли.",
        "questionRu": "Гуманистический подход подчеркивает:",
        "questionAz": "Humanist perspektiv vurğulayır:",
        "explanationAz": "Humanist psixologiya şəxsi inkişafa və azad iradəyə diqqət yetirir."
      },
      {
        "id": "q1-7",
        "question": "William James is associated with:",
        "questionKa": "უილიამ ჯეიმსი ასოცირდება:",
        "options": [
          "Structuralism",
          "Functionalism",
          "Behaviorism",
          "Gestalt"
        ],
        "optionsKa": [
          "სტრუქტურალიზმთან",
          "ფუნქციონალიზმთან",
          "ბიჰევიორიზმთან",
          "გეშტალტთან"
        ],
        "correctIndex": 1,
        "explanation": "William James founded functionalism.",
        "explanationKa": "უილიამ ჯეიმსმა შემოიღო ფუნქციონალიზმი.",
        "optionsRu": [
          "Структурализм",
          "Функционализм",
          "Бихевиоризм",
          "гештальт"
        ],
        "optionsHy": [
          "Կառուցվածքալիզմ",
          "Ֆունկցիոնալիզմ",
          "Վարքագծություն",
          "Գեշտալտ"
        ],
        "optionsAz": [
          "Strukturizm",
          "Funksionalizm",
          "Davranışçılıq",
          "Geştalt"
        ],
        "questionHy": "Ուիլյամ Ջեյմսը կապված է.",
        "explanationHy": "Ուիլյամ Ջեյմսը հիմնեց ֆունկցիոնալիզմը:",
        "explanationRu": "Уильям Джеймс основал функционализм.",
        "questionRu": "Уильям Джеймс связан с:",
        "questionAz": "William James ilə əlaqələndirilir:",
        "explanationAz": "Uilyam Ceyms funksionalizmin əsasını qoydu."
      },
      {
        "id": "q1-8",
        "question": "The cognitive perspective focuses on:",
        "questionKa": "კოგნიტური მიმართულება ფოკუსირდება:",
        "options": [
          "Brain structures",
          "Mental processes like thinking and memory",
          "Social influences",
          "Childhood experiences"
        ],
        "optionsKa": [
          "ტვინის სტრუქტურებზე",
          "ფსიქიკურ პროცესებზე, როგორიცაა აზროვნება და მეხსიერება",
          "სოციალურ გავლენებზე",
          "ბავშვობის გამოცდილებებზე"
        ],
        "correctIndex": 1,
        "explanation": "Cognitive psychology studies internal mental processes.",
        "explanationKa": "კოგნიტური ფსიქოლოგია შეისწავლის ფსიქიკურ პროცესებს.",
        "optionsRu": [
          "Мозговые структуры",
          "Психические процессы, такие как мышление и память",
          "Социальные влияния",
          "Детские впечатления"
        ],
        "optionsHy": [
          "Ուղեղի կառուցվածքները",
          "Հոգեկան գործընթացներ, ինչպիսիք են մտածողությունը և հիշողությունը",
          "Սոցիալական ազդեցությունները",
          "Մանկության փորձառություններ"
        ],
        "optionsAz": [
          "Beyin strukturları",
          "Düşüncə və yaddaş kimi zehni proseslər",
          "Sosial təsirlər",
          "Uşaqlıq təcrübələri"
        ],
        "questionRu": "Когнитивный подход фокусируется на:",
        "questionHy": "Ճանաչողական տեսակետը կենտրոնանում է.",
        "explanationHy": "Կոգնիտիվ հոգեբանությունը ուսումնասիրում է ներքին հոգեկան գործընթացները:",
        "questionAz": "Koqnitiv perspektiv aşağıdakılara diqqət yetirir:",
        "explanationAz": "Koqnitiv psixologiya daxili psixi prosesləri öyrənir.",
        "explanationRu": "Когнитивная психология изучает внутренние психические процессы."
      },
      {
        "id": "q1-9",
        "question": "The biopsychosocial model includes:",
        "questionKa": "ბიოფსიქოსოციალური მოდელი მოიცავს:",
        "options": [
          "Biology only",
          "Psychology only",
          "Social factors only",
          "Biological, psychological, and social factors"
        ],
        "optionsKa": [
          "მხოლოდ ბიოლოგიას",
          "მხოლოდ ფსიქოლოგიას",
          "მხოლოდ სოციალურ ფაქტორებს",
          "ბიოლოგიურ, ფსიქოლოგიურ და სოციალურ ფაქტორებს"
        ],
        "correctIndex": 3,
        "explanation": "It integrates all three factors.",
        "explanationKa": "ის აერთიანებს სამივე ფაქტორს.",
        "optionsRu": [
          "Только биология",
          "Только психология",
          "Только социальные факторы",
          "Биологические, психологические и социальные факторы"
        ],
        "optionsHy": [
          "Միայն կենսաբանություն",
          "Միայն հոգեբանություն",
          "Միայն սոցիալական գործոններ",
          "Կենսաբանական, հոգեբանական և սոցիալական գործոններ"
        ],
        "optionsAz": [
          "Yalnız biologiya",
          "Yalnız psixologiya",
          "Yalnız sosial amillər",
          "Bioloji, psixoloji və sosial amillər"
        ],
        "questionRu": "Биопсихосоциальная модель включает в себя:",
        "questionHy": "Կենսահոգեբանական մոդելը ներառում է.",
        "questionAz": "Biopsixososial modelə aşağıdakılar daxildir:",
        "explanationHy": "Այն միավորում է բոլոր երեք գործոնները:",
        "explanationRu": "Он объединяет все три фактора.",
        "explanationAz": "O, hər üç amili birləşdirir."
      },
      {
        "id": "q1-10",
        "question": "Which is NOT a goal of psychology?",
        "questionKa": "რომელი არ არის ფსიქოლოგიის მიზანი?",
        "options": [
          "Describe behavior",
          "Explain behavior",
          "Control the economy",
          "Predict behavior"
        ],
        "optionsKa": [
          "ქცევის აღწერა",
          "ქცევის ახსნა",
          "ეკონომიკის მართვა",
          "ქცევის პროგნოზირება"
        ],
        "correctIndex": 2,
        "explanation": "The four goals are to describe, explain, predict, and influence behavior.",
        "explanationKa": "ოთხი მიზანია: აღწერა, ახსნა, პროგნოზირება და ქცევაზე ზემოქმედება.",
        "optionsRu": [
          "Опишите поведение",
          "Объясните поведение",
          "Контролируйте экономику",
          "Прогнозирование поведения"
        ],
        "optionsHy": [
          "Նկարագրեք վարքագիծը",
          "Բացատրեք վարքագիծը",
          "Վերահսկել տնտեսությունը",
          "Կանխատեսել վարքագիծը"
        ],
        "optionsAz": [
          "Davranışı təsvir edin",
          "Davranışı izah edin",
          "İqtisadiyyata nəzarət edin",
          "Davranışı proqnozlaşdırmaq"
        ],
        "explanationHy": "Չորս նպատակներն են՝ նկարագրել, բացատրել, կանխատեսել և ազդել վարքագծի վրա:",
        "explanationRu": "Четыре цели — описать, объяснить, предсказать поведение и повлиять на него.",
        "questionHy": "Ո՞րը հոգեբանության նպատակը ՉԷ:",
        "questionRu": "Что НЕ является целью психологии?",
        "explanationAz": "Dörd məqsəd davranışı təsvir etmək, izah etmək, proqnozlaşdırmaq və təsir etməkdir.",
        "questionAz": "Hansı psixologiyanın məqsədi DEYİL?"
      }
    ],
    "titleHy": "Ի՞նչ է հոգեբանությունը: - Վիկտորինան",
    "titleRu": "Что такое психология? - Контрольный опрос",
    "titleAz": "Psixologiya nədir? - Viktorina"
  },
  {
    "id": "ch2-quiz",
    "chapterId": 2,
    "title": "Research Methods — Quiz",
    "titleKa": "კვლევის მეთოდები — ვიქტორინა",
    "questions": [
      {
        "id": "q2-1",
        "question": "The variable manipulated by the researcher is the:",
        "questionKa": "მკვლევარის მიერ მანიპულირებადი ცვლადი არის:",
        "options": [
          "Dependent variable",
          "Independent variable",
          "Control variable",
          "Confounding variable"
        ],
        "optionsKa": [
          "დამოკიდებული ცვლადი",
          "დამოუკიდებელი ცვლადი",
          "საკონტროლო ცვლადი",
          "შერეული ცვლადი"
        ],
        "correctIndex": 1,
        "explanation": "The independent variable is what the researcher manipulates.",
        "explanationKa": "დამოუკიდებელი ცვლადი არის ის, რასაც მკვლევარი მანიპულირებს.",
        "optionsRu": [
          "Зависимая переменная",
          "Независимая переменная",
          "Управляющая переменная",
          "Смешивающая переменная"
        ],
        "optionsHy": [
          "Կախված փոփոխական",
          "Անկախ փոփոխական",
          "Վերահսկիչ փոփոխական",
          "Շփոթեցնող փոփոխական"
        ],
        "optionsAz": [
          "Asılı dəyişən",
          "Müstəqil dəyişən",
          "Nəzarət dəyişəni",
          "Qarışıq dəyişən"
        ],
        "questionHy": "Հետազոտողի կողմից շահարկվող փոփոխականը հետևյալն է.",
        "explanationHy": "Անկախ փոփոխականն այն է, ինչ հետազոտողը շահարկում է:",
        "explanationRu": "Независимая переменная – это то, чем манипулирует исследователь.",
        "questionRu": "Переменной, которой манипулирует исследователь, является:",
        "explanationAz": "Müstəqil dəyişən tədqiqatçının manipulyasiya etdiyi şeydir.",
        "questionAz": "Tədqiqatçı tərəfindən manipulyasiya edilən dəyişən aşağıdakılardır:"
      },
      {
        "id": "q2-2",
        "question": "A positive correlation means:",
        "questionKa": "დადებითი კორელაცია ნიშნავს:",
        "options": [
          "One causes the other",
          "As one increases the other decreases",
          "Both increase together",
          "No relationship"
        ],
        "optionsKa": [
          "ერთი იწვევს მეორეს",
          "ერთის ზრდისას მეორე მცირდება",
          "ორივე ერთად იზრდება",
          "კავშირი არ არის"
        ],
        "correctIndex": 2,
        "explanation": "Both variables move in the same direction.",
        "explanationKa": "ორივე ცვლადი ერთი მიმართულებით მოძრაობს.",
        "optionsRu": [
          "Одно вызывает другое",
          "По мере увеличения одного другое уменьшается",
          "Оба увеличиваются вместе",
          "Нет отношений"
        ],
        "optionsHy": [
          "Մեկն առաջացնում է մյուսը",
          "Քանի որ մեկը մեծանում է, մյուսը նվազում է",
          "Երկուսն էլ միասին ավելանում են",
          "Ոչ մի հարաբերություն"
        ],
        "optionsAz": [
          "Biri digərinə səbəb olur",
          "Biri artdıqca digəri azalır",
          "Hər ikisi birlikdə artır",
          "Əlaqə yoxdur"
        ],
        "questionRu": "Положительная корреляция означает:",
        "explanationRu": "Обе переменные движутся в одном направлении.",
        "explanationHy": "Երկու փոփոխականներն էլ շարժվում են նույն ուղղությամբ։",
        "questionHy": "Դրական հարաբերակցությունը նշանակում է.",
        "explanationAz": "Hər iki dəyişən eyni istiqamətdə hərəkət edir.",
        "questionAz": "Müsbət korrelyasiya o deməkdir:"
      },
      {
        "id": "q2-3",
        "question": "The placebo effect demonstrates:",
        "questionKa": "პლაცებოს ეფექტი აჩვენებს:",
        "options": [
          "Power of belief on outcomes",
          "Experiments fail",
          "Drugs never work",
          "Correlation equals causation"
        ],
        "optionsKa": [
          "რწმენის ძალას შედეგებზე",
          "ექსპერიმენტები ვერ ხერხდება",
          "წამლები არასოდეს მუშაობს",
          "კორელაცია ტოლია მიზეზობრიობის"
        ],
        "correctIndex": 0,
        "explanation": "Improvement from belief in treatment.",
        "explanationKa": "როცა ექსპერიმენტის მონაწილეები ექსპერიმენტული მანიპულაციის ჩარევის გარაშე იცვლიან ქცევას.",
        "optionsRu": [
          "Сила веры в результаты",
          "Эксперименты терпят неудачу",
          "Наркотики никогда не работают",
          "Корреляция равна причинно-следственной связи"
        ],
        "optionsHy": [
          "Արդյունքների վրա հավատքի ուժը",
          "Փորձերը ձախողվում են",
          "Թմրանյութերը երբեք չեն գործում",
          "Հարաբերակցությունը հավասար է պատճառականության"
        ],
        "optionsAz": [
          "Nəticələrə inam gücü",
          "Təcrübələr uğursuz olur",
          "Dərmanlar heç vaxt işləmir",
          "Korrelyasiya səbəbiyyətə bərabərdir"
        ],
        "explanationRu": "Улучшение от веры в лечение.",
        "questionRu": "Эффект плацебо демонстрирует:",
        "questionHy": "Պլացեբոյի էֆեկտը ցույց է տալիս.",
        "explanationHy": "Բուժման նկատմամբ հավատքի բարելավում:",
        "questionAz": "Plasebo effekti göstərir:",
        "explanationAz": "Müalicəyə inamdan yaxşılaşma."
      },
      {
        "id": "q2-4",
        "question": "Which method establishes cause and effect?",
        "questionKa": "რომელი მეთოდი ადგენს მიზეზ-შედეგობრივ კავშირს?",
        "options": [
          "Survey",
          "Case study",
          "Experiment",
          "Observation"
        ],
        "optionsKa": [
          "გამოკითხვა",
          "შემთხვევის შესწავლა",
          "ექსპერიმენტი",
          "დაკვირვება"
        ],
        "correctIndex": 2,
        "explanation": "Only experiments can establish cause-and-effect.",
        "explanationKa": "მხოლოდ ექსპერიმენტს შეუძლია მიზეზ-შედეგობრიობის დადგენა.",
        "optionsRu": [
          "Опрос",
          "Тематическое исследование",
          "Эксперимент",
          "Наблюдение"
        ],
        "optionsHy": [
          "Հարցում",
          "Գործի ուսումնասիրություն",
          "Փորձարկում",
          "Դիտարկում"
        ],
        "optionsAz": [
          "Sorğu",
          "Case study",
          "Təcrübə",
          "Müşahidə"
        ],
        "explanationHy": "Միայն փորձերը կարող են հաստատել պատճառ և հետևանք:",
        "explanationRu": "Только эксперименты могут установить причину и следствие.",
        "questionRu": "Какой метод устанавливает причину и следствие?",
        "questionHy": "Ո՞ր մեթոդն է սահմանում պատճառն ու հետևանքը:",
        "questionAz": "Hansı üsul səbəb və nəticəni müəyyən edir?",
        "explanationAz": "Yalnız təcrübələr səbəb-nəticəni müəyyən edə bilər."
      },
      {
        "id": "q2-5",
        "question": "Random assignment helps to:",
        "questionKa": "შემთხვევითი განაწილება ეხმარება:",
        "options": [
          "Increase sample",
          "Equalize groups",
          "Make results public",
          "Speed research"
        ],
        "optionsKa": [
          "ნიმუშის გაზრდას",
          "ჯგუფების გათანაბრებას",
          "შედეგების გასაჯაროებას",
          "კვლევის დაჩქარებას"
        ],
        "correctIndex": 1,
        "explanation": "Random assignment ensures groups are equivalent.",
        "explanationKa": "შემთხვევითი განაწილება უზრუნველყოფს ჯგუფების ეკვივალენტურობას.",
        "optionsRu": [
          "Увеличение выборки",
          "Уравнять группы",
          "Сделайте результаты общедоступными",
          "Исследование скорости"
        ],
        "optionsHy": [
          "Մեծացնել նմուշը",
          "Հավասարեցնել խմբերը",
          "Արդյունքները հրապարակայնացրեք",
          "Արագության հետազոտություն"
        ],
        "optionsAz": [
          "Nümunəni artırın",
          "Qrupları bərabərləşdirin",
          "Nəticələri ictimailəşdirin",
          "Sürət araşdırması"
        ],
        "questionHy": "Պատահական հանձնարարությունը օգնում է.",
        "explanationHy": "Պատահական հանձնարարությունը ապահովում է խմբերի համարժեքությունը:",
        "questionRu": "Случайное назначение помогает:",
        "explanationRu": "Случайное назначение гарантирует эквивалентность групп.",
        "explanationAz": "Təsadüfi təyinat qrupların ekvivalent olmasını təmin edir.",
        "questionAz": "Təsadüfi təyinat aşağıdakılara kömək edir:"
      },
      {
        "id": "q2-6",
        "question": "A double-blind study means:",
        "questionKa": "ორმაგი ბრმა კვლევა ნიშნავს:",
        "options": [
          "No one knows hypothesis",
          "Neither side knows assignments",
          "Two experiments run",
          "Both eyes covered"
        ],
        "optionsKa": [
          "არავინ იცის ზღვის გოჭების მიგრაციის სალდო",
          "არც ერთი მხარემ არ იცის რომელ პირობაში მოხვდნენ",
          "ორი ექსპერიმენტი მიმდინარეობს",
          "ორივე თვალი აკრულია"
        ],
        "correctIndex": 1,
        "explanation": "Neither participants nor researchers know group assignments.",
        "explanationKa": "საშუალებას გვაძლევს თავიდან ავიცილოთ ექსპერიმენტატორის მოლოდინის ეფექტი იმით, რომ არც ასისტენტმა და არც მონაწილეებმა არ იციან, რომელ პირობაში მოხვდნენ ისინი.",
        "optionsRu": [
          "Никто не знает гипотезы",
          "Ни одна из сторон не знает заданий",
          "Проводятся два эксперимента",
          "Оба глаза закрыты"
        ],
        "optionsHy": [
          "Ոչ ոք չգիտի վարկած",
          "Կողմերից ոչ մեկը չգիտի հանձնարարությունները",
          "Երկու փորձարկում է կատարվում",
          "Երկու աչքերն էլ ծածկված էին"
        ],
        "optionsAz": [
          "Heç kim hipotezi bilmir",
          "Heç bir tərəf tapşırıqları bilmir",
          "İki təcrübə aparılır",
          "Hər iki göz örtülü"
        ],
        "explanationHy": "Ոչ մասնակիցները, ոչ հետազոտողները չգիտեն խմբային առաջադրանքները:",
        "questionRu": "Двойное слепое исследование означает:",
        "questionAz": "İkiqat kor tədqiqat o deməkdir:",
        "questionHy": "Կրկնակի կույր ուսումնասիրությունը նշանակում է.",
        "explanationRu": "Ни участники, ни исследователи не знают групповых заданий.",
        "explanationAz": "Nə iştirakçılar, nə də tədqiqatçılar qrup tapşırıqlarını bilmirlər."
      },
      {
        "id": "q2-7",
        "question": "Correlation does not equal causation means:",
        "questionKa": "კორელაცია არ უდრის მიზეზობრიობაა ნიშნავს:",
        "options": [
          "Correlations are useless",
          "Being related does not mean causation",
          "All research is flawed",
          "Experiments unnecessary"
        ],
        "optionsKa": [
          "კორელაციები უსარგებლოა",
          "კავშირი არ ნიშნავს მიზეზობრიობას",
          "ყველა კვლევა ხარვეზიანია",
          "ექსპერიმენტები არ არის საჭირო"
        ],
        "correctIndex": 1,
        "explanation": "Correlation does not prove direct causation.",
        "explanationKa": "კორელაცია არ ამტკიცებს პირდაპირ მიზეზობრიობას.",
        "optionsRu": [
          "Корреляции бесполезны",
          "Связь не означает причинно-следственную связь",
          "Все исследования ошибочны",
          "Эксперименты не нужны"
        ],
        "optionsHy": [
          "Հարաբերակցություններն անօգուտ են",
          "Հարազատ լինելը չի ​​նշանակում պատճառահետևանքային կապ",
          "Բոլոր հետազոտությունները թերի են",
          "Փորձերն ավելորդ են"
        ],
        "optionsAz": [
          "Korrelyasiya faydasızdır",
          "Əlaqəli olmaq səbəb əlaqəsi demək deyil",
          "Bütün araşdırmalar səhvdir",
          "Təcrübələr lazımsızdır"
        ],
        "questionRu": "Корреляция не равна причинно-следственной связи:",
        "explanationRu": "Корреляция не доказывает прямую причинно-следственную связь.",
        "questionAz": "Korrelyasiya səbəbiyyətə bərabər deyil deməkdir:",
        "explanationAz": "Korrelyasiya birbaşa səbəb əlaqəsini sübut etmir.",
        "explanationHy": "Հարաբերակցությունը չի ապացուցում ուղղակի պատճառականությունը:",
        "questionHy": "Հարաբերակցությունը չի հավասարեցնում պատճառահետևանքային կապը նշանակում է."
      },
      {
        "id": "q2-8",
        "question": "Informed consent means participants:",
        "questionKa": "ინფორმირებული თანხმობა ნიშნავს, რომ მონაწილეები:",
        "options": [
          "Are paid well",
          "Understand and agree voluntarily",
          "Must finish the study",
          "Are students"
        ],
        "optionsKa": [
          "კარგად არიან ანაზღაურებული",
          "ესმით და ნებაყოფლობით თანხმდებიან",
          "კვლევა ბოლომდე უნდა დაასრულონ",
          "სტუდენტები არიან"
        ],
        "correctIndex": 1,
        "explanation": "Participants must understand and agree voluntarily.",
        "explanationKa": "მონაწილეებს უნდა ესმოდეთ და ნებაყოფლობით დათანხმდნენ.",
        "optionsRu": [
          "Хорошо платят",
          "Понять и согласиться добровольно",
          "Должен закончить исследование",
          "Студенты"
        ],
        "optionsHy": [
          "Լավ են վարձատրվում",
          "Հասկացեք և համաձայնվեք կամավոր",
          "Պետք է ավարտել ուսումնասիրությունը",
          "Ուսանողներ են"
        ],
        "optionsAz": [
          "Yaxşı maaş alırlar",
          "Anlayın və könüllü olaraq razılaşın",
          "Təhsili bitirməlidir",
          "Tələbədirlər"
        ],
        "questionRu": "Информированное согласие означает, что участники:",
        "explanationHy": "Մասնակիցները պետք է հասկանան և կամովին համաձայնվեն:",
        "questionAz": "Məlumatlı razılıq iştirakçılar deməkdir:",
        "questionHy": "Տեղեկացված համաձայնությունը նշանակում է մասնակիցներ.",
        "explanationRu": "Участники должны понять и согласиться добровольно.",
        "explanationAz": "İştirakçılar könüllü olaraq başa düşməli və razılaşmalıdırlar."
      },
      {
        "id": "q2-9",
        "question": "Which provides most in-depth info about one individual?",
        "questionKa": "რომელი იძლევა ყველაზე სიღრმისეულ ინფორმაციას ერთი ინდივიდის შესახებ?",
        "options": [
          "Survey",
          "Experiment",
          "Case study",
          "Correlation study"
        ],
        "optionsKa": [
          "გამოკითხვა",
          "ექსპერიმენტი",
          "შემთხვევის შესწავლა",
          "კორელაციური კვლევა"
        ],
        "correctIndex": 2,
        "explanation": "Case studies are deeply detailed.",
        "explanationKa": "შემთხვევის შესწავლა ყველაზე დეტალურია.",
        "optionsRu": [
          "Опрос",
          "Эксперимент",
          "Тематическое исследование",
          "Корреляционное исследование"
        ],
        "optionsHy": [
          "Հարցում",
          "Փորձարկում",
          "Գործի ուսումնասիրություն",
          "Հարաբերակցության ուսումնասիրություն"
        ],
        "optionsAz": [
          "Sorğu",
          "Təcrübə",
          "Case study",
          "Korrelyasiya tədqiqatı"
        ],
        "explanationAz": "Keys tədqiqatları dərin təfərrüatlıdır.",
        "explanationRu": "Тематические исследования глубоко детализированы.",
        "questionAz": "Hansı bir şəxs haqqında ən ətraflı məlumat verir?",
        "questionRu": "Какой из них предоставляет наиболее подробную информацию об одном человеке?",
        "questionHy": "Ո՞րն է տալիս առավել խորը տեղեկատվություն մեկ անձի մասին:",
        "explanationHy": "Դեպքի ուսումնասիրությունները խորապես մանրամասն են:"
      },
      {
        "id": "q2-10",
        "question": "The mean is:",
        "questionKa": "საშუალო არითმეტიკული არის:",
        "options": [
          "Most frequent score",
          "Middle score",
          "Arithmetic average",
          "Range of scores"
        ],
        "optionsKa": [
          "ყველაზე ხშირი ქულა",
          "შუალედური ქულა",
          "ყველას ჯამი გაყოფილი რაოდენობააზე",
          "ქულების დიაპაზონი"
        ],
        "correctIndex": 2,
        "explanation": "The mean is the arithmetic average.",
        "explanationKa": "საშუალო არითმეტიკული არის ყველას ჯამი გაყოფილი რაოდენობააზე.",
        "optionsRu": [
          "Самый частый результат",
          "Средний балл",
          "Среднее арифметическое",
          "Диапазон оценок"
        ],
        "optionsHy": [
          "Առավել հաճախակի միավոր",
          "Միջին միավոր",
          "Միջին թվաբանական",
          "Միավորների միջակայք"
        ],
        "optionsAz": [
          "Ən tez-tez xal",
          "Orta hesab",
          "Arifmetik orta",
          "Xalların diapazonu"
        ],
        "questionAz": "Ortası budur:",
        "explanationAz": "Orta arifmetik ortadır.",
        "questionRu": "Среднее значение:",
        "questionHy": "Միջինը հետևյալն է.",
        "explanationRu": "Среднее значение – это среднее арифметическое.",
        "explanationHy": "Միջինը թվաբանական միջինն է։"
      }
    ],
    "titleRu": "Методы исследования — Викторина",
    "titleHy": "Հետազոտության մեթոդներ — Վիկտորինա",
    "titleAz": "Tədqiqat Metodları — Viktorina"
  },
  {
    "id": "ch3-quiz",
    "chapterId": 3,
    "title": "Biological Bases — Quiz",
    "titleKa": "ბიოლოგიური საფუძვლები — ვიქტორინა",
    "questions": [
      {
        "id": "q3-1",
        "question": "The gap between two neurons is the:",
        "questionKa": "ორ ნეირონს შორის უფსკრული არის:",
        "options": [
          "Axon terminal",
          "Synapse",
          "Dendrite",
          "Myelin sheath"
        ],
        "optionsKa": [
          "აქსონის ტერმინალი",
          "სინაფსი",
          "დენდრიტი",
          "მიელინის გარსი"
        ],
        "correctIndex": 1,
        "explanation": "The synapse is the gap between neurons.",
        "explanationKa": "სინაფსი არის უფსკრული ნეირონებს შორის.",
        "optionsRu": [
          "Аксон терминал",
          "Синапс",
          "Дендрит",
          "Миелиновая оболочка"
        ],
        "optionsHy": [
          "Axon տերմինալ",
          "Սինապս",
          "Դենդրիտ",
          "Միելինային պատյան"
        ],
        "optionsAz": [
          "Axon terminalı",
          "Sinaps",
          "dendrit",
          "Miyelin qabığı"
        ],
        "explanationHy": "Սինապսը նեյրոնների միջև եղած բացն է:",
        "questionHy": "Երկու նեյրոնների միջև եղած բացը հետևյալն է.",
        "questionRu": "Разрыв между двумя нейронами – это:",
        "explanationRu": "Синапс – это щель между нейронами.",
        "questionAz": "İki neyron arasındakı boşluq:",
        "explanationAz": "Sinaps neyronlar arasındakı boşluqdur."
      },
      {
        "id": "q3-2",
        "question": "Which neurotransmitter is linked to pleasure and reward?",
        "questionKa": "რომელი ნეიროტრანსმიტერი არის დაკავშირებული სიამოვნებასთან და ჯილდოსთან?",
        "options": [
          "Serotonin",
          "GABA",
          "Dopamine",
          "Acetylcholine"
        ],
        "optionsKa": [
          "სეროტონინი",
          "GABA",
          "დოფამინი",
          "აცეტილქოლინი"
        ],
        "correctIndex": 2,
        "explanation": "Dopamine plays a key role in reward.",
        "explanationKa": "დოფამინი მნიშვნელოვან როლს თამაშობს ჯილდოს სისტემაში.",
        "optionsRu": [
          "Серотонин",
          "ГАБА",
          "Дофамин",
          "Ацетилхолин"
        ],
        "optionsHy": [
          "Սերոտոնին",
          "ԳԱԲԱ",
          "Դոպամին",
          "Ացետիլխոլին"
        ],
        "optionsAz": [
          "Serotonin",
          "GABA",
          "Dopamin",
          "Asetilkolin"
        ],
        "questionHy": "Ո՞ր նյարդահաղորդիչն է կապված հաճույքի և պարգևի հետ:",
        "questionRu": "Какой нейромедиатор связан с удовольствием и вознаграждением?",
        "questionAz": "Hansı nörotransmitter həzz və mükafatla əlaqələndirilir?",
        "explanationHy": "Դոպամինը առանցքային դեր է խաղում պարգևատրման գործում:",
        "explanationRu": "Дофамин играет ключевую роль в вознаграждении.",
        "explanationAz": "Dopamin mükafatlandırmada əsas rol oynayır."
      },
      {
        "id": "q3-3",
        "question": "The cerebral cortex has how many lobes?",
        "questionKa": "თავის ტვინის ქერქს რამდენი წილი აქვს?",
        "options": [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        "optionsKa": [
          "ორი",
          "სამი",
          "ოთხი",
          "ხუთი"
        ],
        "correctIndex": 2,
        "explanation": "Four lobes: frontal, parietal, temporal, occipital.",
        "explanationKa": "ოთხი წილი: შუბლის, თხემის, საფეთქლის, კეფის.",
        "optionsRu": [
          "Два",
          "Три",
          "Четыре",
          "Пять"
        ],
        "optionsHy": [
          "Երկու",
          "Երեք",
          "Չորս",
          "Հինգ"
        ],
        "optionsAz": [
          "iki",
          "üç",
          "dörd",
          "Beş"
        ],
        "explanationHy": "Չորս բլթեր՝ ճակատային, պարիետալ, ժամանակավոր, օքսիպիտալ:",
        "questionHy": "Քանի՞ բլթակ ունի ուղեղի կեղևը:",
        "explanationRu": "Четыре доли: лобная, теменная, височная, затылочная.",
        "questionRu": "Сколько долей имеет кора головного мозга?",
        "questionAz": "Baş beyin qabığının neçə lobu var?",
        "explanationAz": "Dörd lob: frontal, parietal, temporal, oksipital."
      },
      {
        "id": "q3-4",
        "question": "Broca's area controls:",
        "questionKa": "ბროკას არე აკონტროლებს:",
        "options": [
          "Vision",
          "Speech production",
          "Hearing",
          "Movement"
        ],
        "optionsKa": [
          "მხედველობას",
          "მეტყველების წარმოებას",
          "სმენას",
          "მოძრაობას"
        ],
        "correctIndex": 1,
        "explanation": "Broca's area controls speech production.",
        "explanationKa": "ბროკას არე აკონტროლებს მეტყველების წარმოებას.",
        "optionsRu": [
          "Зрение",
          "Речевое производство",
          "Слух",
          "Движение"
        ],
        "optionsHy": [
          "Տեսիլք",
          "Խոսքի արտադրություն",
          "Լսողություն",
          "Շարժում"
        ],
        "optionsAz": [
          "Görmə",
          "Nitq istehsalı",
          "Eşitmə",
          "Hərəkət"
        ],
        "questionRu": "Зона контроля Брока:",
        "explanationAz": "Broca bölgəsi nitq istehsalına nəzarət edir.",
        "questionAz": "Broca sahəsinə nəzarət edir:",
        "explanationRu": "Зона Брока контролирует производство речи.",
        "explanationHy": "Broca-ի տարածքը վերահսկում է խոսքի արտադրությունը:",
        "questionHy": "Broca-ի տարածքը վերահսկում է."
      },
      {
        "id": "q3-5",
        "question": "Fight-or-flight is activated by:",
        "questionKa": "ბრძოლა-ან-გაქცევა აქტივირდება:",
        "options": [
          "Parasympathetic NS",
          "Sympathetic NS",
          "Somatic NS",
          "Central NS"
        ],
        "optionsKa": [
          "პარასიმპათიკური ნერვული სისტემით",
          "სიმპათიკური ნერვული სისტემით",
          "სომატური ნერვული სისტემით",
          "ცენტრალური ნერვული სისტემით"
        ],
        "correctIndex": 1,
        "explanation": "The sympathetic nervous system activates fight-or-flight.",
        "explanationKa": "სიმპათიკური ნერვული სისტემა აქტივირებს ბრძოლა-ან-გაქცევის რეაქციას.",
        "optionsRu": [
          "Парасимпатическая НС",
          "Симпатический НС",
          "Соматический НС",
          "Центральный НС"
        ],
        "optionsHy": [
          "Պարասիմպաթիկ ՆՍ",
          "Սիմպաթիկ Ն.Ս",
          "Սոմատիկ ՆՍ",
          "Կենտրոնական ԱԱ"
        ],
        "optionsAz": [
          "Parasempatik NS",
          "Simpatik NS",
          "Somatik NS",
          "Mərkəzi NS"
        ],
        "questionAz": "Mübarizə və ya uçuş aşağıdakılar tərəfindən aktivləşdirilir:",
        "explanationRu": "Симпатическая нервная система активирует принцип «бей или беги».",
        "questionRu": "Режим «бей или беги» активируется:",
        "questionHy": "Fight-or-flight-ը ակտիվանում է հետևյալով.",
        "explanationHy": "Սիմպաթիկ նյարդային համակարգը ակտիվացնում է պայքարը կամ փախուստը:",
        "explanationAz": "Simpatik sinir sistemi döyüş və ya uçuşu aktivləşdirir."
      },
      {
        "id": "q3-6",
        "question": "Myelin sheath serves to:",
        "questionKa": "მიელინის გარსის ფუნქციაა:",
        "options": [
          "Generate neurotransmitters",
          "Speed up transmission",
          "Store memories",
          "Connect hemispheres"
        ],
        "optionsKa": [
          "ნეიროტრანსმიტერების წარმოება",
          "გადაცემის დაჩქარება",
          "მოგონებების შენახვა",
          "ნახევარსფეროების დაკავშირება"
        ],
        "correctIndex": 1,
        "explanation": "Myelin insulates axons for faster signals.",
        "explanationKa": "მიელინი იზოლირებს აქსონებს სიგნალების უფრო სწრაფი გადაცემისთვის.",
        "optionsRu": [
          "Генерировать нейротрансмиттеры",
          "Ускорить передачу",
          "Храните воспоминания",
          "Соедините полушария"
        ],
        "optionsHy": [
          "Ստեղծեք նյարդային հաղորդիչներ",
          "Արագացնել փոխանցումը",
          "Պահպանեք հիշողությունները",
          "Միացրեք կիսագնդերը"
        ],
        "optionsAz": [
          "Nörotransmitterlər yaradın",
          "Transmissiyanı sürətləndirin",
          "Xatirələri saxla",
          "Yarımkürələri birləşdirin"
        ],
        "questionAz": "Miyelin qabığı aşağıdakılara xidmət edir:",
        "questionRu": "Миелиновая оболочка служит:",
        "explanationAz": "Miyelin daha sürətli siqnallar üçün aksonları izolyasiya edir.",
        "explanationHy": "Միելինը մեկուսացնում է աքսոնները ավելի արագ ազդանշանների համար:",
        "explanationRu": "Миелин изолирует аксоны для более быстрых сигналов.",
        "questionHy": "Միելինային թաղանթը ծառայում է."
      },
      {
        "id": "q3-7",
        "question": "Hippocampus is associated with:",
        "questionKa": "ჰიპოკამპი ასოცირდება:",
        "options": [
          "Emotion regulation",
          "Memory formation",
          "Visual processing",
          "Motor control"
        ],
        "optionsKa": [
          "ემოციების რეგულაციასთან",
          "მეხსიერების ფორმირებასთან",
          "ვიზუალურ დამუშავებასთან",
          "მოტორულ კონტროლთან"
        ],
        "correctIndex": 1,
        "explanation": "The hippocampus is essential for forming memories.",
        "explanationKa": "ჰიპოკამპი აუცილებელია მოგონებების ფორმირებისთვის.",
        "optionsRu": [
          "Регулирование эмоций",
          "Формирование памяти",
          "Визуальная обработка",
          "Управление двигателем"
        ],
        "optionsHy": [
          "Զգացմունքների կարգավորում",
          "Հիշողության ձևավորում",
          "Տեսողական մշակում",
          "Շարժիչի կառավարում"
        ],
        "optionsAz": [
          "Emosiyaların tənzimlənməsi",
          "Yaddaşın formalaşması",
          "Vizual emal",
          "Motor nəzarəti"
        ],
        "questionRu": "Гиппокамп связан с:",
        "questionAz": "Hipokampus aşağıdakılarla əlaqələndirilir:",
        "questionHy": "Հիպոկամպուսը կապված է.",
        "explanationRu": "Гиппокамп необходим для формирования воспоминаний.",
        "explanationHy": "Հիպոկամպը կարևոր է հիշողությունների ձևավորման համար:",
        "explanationAz": "Hipokampus yaddaşların formalaşması üçün vacibdir."
      },
      {
        "id": "q3-8",
        "question": "Which connects the two hemispheres?",
        "questionKa": "რომელი აკავშირებს ორ ნახევარსფეროს?",
        "options": [
          "Cerebellum",
          "Corpus callosum",
          "Thalamus",
          "Hypothalamus"
        ],
        "optionsKa": [
          "ნათხემი",
          "თხელი სხეული",
          "თალამუსი",
          "ჰიპოთალამუსი"
        ],
        "correctIndex": 1,
        "explanation": "The corpus callosum connects the hemispheres.",
        "explanationKa": "თხელი სხეული აკავშირებს ნახევარსფეროებს.",
        "optionsRu": [
          "Мозжечок",
          "Мозолистое тело",
          "Таламус",
          "Гипоталамус"
        ],
        "optionsHy": [
          "Ուղեղիկ",
          "Corpus callosum",
          "Թալամուս",
          "Հիպոթալամուս"
        ],
        "optionsAz": [
          "Serebellum",
          "Korpus kallosum",
          "Talamus",
          "Hipotalamus"
        ],
        "questionHy": "Ո՞րն է միացնում երկու կիսագնդերը:",
        "explanationHy": "The corpus callosum կապում է կիսագնդերը:",
        "questionRu": "Что соединяет два полушария?",
        "explanationRu": "Мозолистое тело соединяет полушария.",
        "explanationAz": "Korpus kallosum yarımkürələri birləşdirir.",
        "questionAz": "Hansı iki yarımkürəni birləşdirir?"
      },
      {
        "id": "q3-9",
        "question": "Endorphins are chemicals that:",
        "questionKa": "ენდორფინები არის ქიმიური ნივთიერებები, რომლებიც:",
        "options": [
          "Increase pain",
          "Reduce pain and produce pleasure",
          "Cause depression",
          "Slow neurons"
        ],
        "optionsKa": [
          "ზრდიან ტკივილს",
          "ამცირებენ ტკივილს და იწვევენ სიამოვნებას",
          "იწვევენ დეპრესიას",
          "ანელებენ ნეირონებს"
        ],
        "correctIndex": 1,
        "explanation": "Endorphins are natural painkillers.",
        "explanationKa": "ენდორფინები ბუნებრივი ტკივილგამაყუჩებლებია.",
        "optionsRu": [
          "Увеличение боли",
          "Уменьшите боль и доставьте удовольствие",
          "Вызвать депрессию",
          "Медленные нейроны"
        ],
        "optionsHy": [
          "Բարձրացնել ցավը",
          "Նվազեցնել ցավը և հաճույք պատճառել",
          "Առաջացնել դեպրեսիա",
          "Դանդաղ նեյրոններ"
        ],
        "optionsAz": [
          "Ağrını artırın",
          "Ağrıları azaldın və həzz alın",
          "Depressiyaya səbəb olmaq",
          "Yavaş neyronlar"
        ],
        "questionRu": "Эндорфины – это химические вещества, которые:",
        "explanationRu": "Эндорфины — естественные обезболивающие.",
        "explanationHy": "Էնդորֆինները բնական ցավազրկողներ են:",
        "questionAz": "Endorfinlər kimyəvi maddələrdir:",
        "explanationAz": "Endorfinlər təbii ağrıkəsicilərdir.",
        "questionHy": "Էնդորֆինները քիմիական նյութեր են, որոնք."
      },
      {
        "id": "q3-10",
        "question": "Neuroplasticity is the brain's ability to:",
        "questionKa": "ნეიროპლასტიკურობა არის ტვინის უნარი:",
        "options": [
          "Remain unchanged",
          "Form new connections",
          "Only work in childhood",
          "Produce hormones"
        ],
        "optionsKa": [
          "უცვლელი დარჩეს",
          "ახალი კავშირების ჩამოყალიბება",
          "მხოლოდ ბავშვობაში მუშაობა",
          "ჰორმონების წარმოება"
        ],
        "correctIndex": 1,
        "explanation": "The brain can form new neural connections throughout life.",
        "explanationKa": "ტვინს შეუძლია ახალი ნეირონული კავშირების ჩამოყალიბება მთელი ცხოვრების მანძილზე.",
        "optionsRu": [
          "Остаться неизменным",
          "Формируйте новые связи",
          "Работа только в детстве",
          "Вырабатывают гормоны"
        ],
        "optionsHy": [
          "Մնացեք անփոփոխ",
          "Նոր կապեր ձևավորեք",
          "Աշխատեք միայն մանկության մեջ",
          "Արտադրել հորմոններ"
        ],
        "optionsAz": [
          "Dəyişmədən qalın",
          "Yeni əlaqələr yaradın",
          "Yalnız uşaqlıqda işləyin",
          "Hormonlar istehsal edin"
        ],
        "questionHy": "Նեյրոպլաստիկությունը ուղեղի կարողությունն է.",
        "explanationHy": "Ուղեղը կարող է նոր նյարդային կապեր ձևավորել ողջ կյանքի ընթացքում:",
        "explanationRu": "Мозг может формировать новые нейронные связи на протяжении всей жизни.",
        "questionRu": "Нейропластичность – это способность мозга:",
        "questionAz": "Neyroplastiklik beynin aşağıdakı qabiliyyətidir:",
        "explanationAz": "Beyin həyat boyu yeni sinir əlaqələri yarada bilər."
      }
    ],
    "titleHy": "Կենսաբանական հիմքեր — Վիկտորինա",
    "titleRu": "Биологические основы — Викторина",
    "titleAz": "Bioloji əsaslar - Viktorina"
  },
  {
    "id": "ch4-quiz",
    "chapterId": 4,
    "title": "Sensation and Perception — Quiz",
    "titleKa": "შეგრძნება და აღქმა — ვიქტორინა",
    "questions": [
      {
        "id": "q4-1",
        "question": "Minimum stimulation detected 50% of the time:",
        "questionKa": "მინიმალური სტიმულაცია, რომელიც აღმოჩენილია დროის 50%-ში:",
        "options": [
          "Difference threshold",
          "Absolute threshold",
          "Signal detection",
          "Weber's law"
        ],
        "optionsKa": [
          "განსხვავების ზღვარი",
          "აბსოლუტური ზღვარი",
          "სიგნალის აღმოჩენა",
          "ვებერის კანონი"
        ],
        "correctIndex": 1,
        "explanation": "Absolute threshold: minimum detected 50% of the time.",
        "explanationKa": "აბსოლუტური ზღვარი: მინიმალური სტიმულაცია, აღმოჩენილი დროის 50%-ში.",
        "optionsRu": [
          "Порог разницы",
          "Абсолютный порог",
          "Обнаружение сигнала",
          "закон Вебера"
        ],
        "optionsHy": [
          "Տարբերության շեմ",
          "Բացարձակ շեմ",
          "Ազդանշանի հայտնաբերում",
          "Վեբերի օրենքը"
        ],
        "optionsAz": [
          "Fərq həddi",
          "Mütləq həddi",
          "Siqnal aşkarlanması",
          "Veber qanunu"
        ],
        "questionHy": "Նվազագույն խթանումը հայտնաբերված ժամանակի 50% -ում.",
        "questionRu": "Минимальная стимуляция обнаруживается в 50% случаев:",
        "explanationRu": "Абсолютный порог: минимум обнаруживается в 50% случаев.",
        "explanationHy": "Բացարձակ շեմ. նվազագույնը հայտնաբերված է ժամանակի 50%-ում:",
        "questionAz": "Minimum stimullaşdırma zamanın 50% -də aşkar edilir:",
        "explanationAz": "Mütləq həddi: minimum zamanın 50% aşkar edilir."
      },
      {
        "id": "q4-2",
        "question": "Which Gestalt principle groups nearby objects?",
        "questionKa": "გეშტალტის რომელი პრინციპი აჯგუფებს ახლომდებარე ობიექტებს?",
        "options": [
          "Similarity",
          "Proximity",
          "Closure",
          "Continuity"
        ],
        "optionsKa": [
          "მსგავსება",
          "სიახლოვე",
          "დახურულობა",
          "უწყვეტობა"
        ],
        "correctIndex": 1,
        "explanation": "Proximity: nearby objects are grouped.",
        "explanationKa": "სიახლოვე: ახლომდებარე ობიექტები ჯგუფდება.",
        "optionsRu": [
          "Сходство",
          "Близость",
          "Закрытие",
          "Непрерывность"
        ],
        "optionsHy": [
          "Նմանություն",
          "Հարևանություն",
          "Փակում",
          "Շարունակականություն"
        ],
        "optionsAz": [
          "Oxşarlıq",
          "Yaxınlıq",
          "Bağlanma",
          "Davamlılıq"
        ],
        "explanationRu": "Близость: близлежащие объекты группируются.",
        "questionRu": "Какой принцип гештальта группирует близлежащие объекты?",
        "explanationHy": "Հարևանություն. մոտակա օբյեկտները խմբավորված են:",
        "questionHy": "Գեշտալտի ո՞ր սկզբունքն է խմբավորում մոտակա օբյեկտները:",
        "questionAz": "Hansı Gestalt prinsipi yaxınlıqdakı obyektləri qruplaşdırır?",
        "explanationAz": "Yaxınlıq: yaxınlıqdakı obyektlər qruplaşdırılıb."
      },
      {
        "id": "q4-3",
        "question": "Rods in the retina are for:",
        "questionKa": "ბადურის ჩხირები განკუთვნილია:",
        "options": [
          "Color vision",
          "Dim light vision",
          "Detail focus",
          "Depth perception"
        ],
        "optionsKa": [
          "ფერთა მხედველობისთვის",
          "სუსტ შუქში ხედვისთვის",
          "დეტალების ფოკუსირებისთვის",
          "სიღრმის აღქმისთვის"
        ],
        "correctIndex": 1,
        "explanation": "Rods function in dim light.",
        "explanationKa": "ჩხირები ფუნქციონირებენ სუსტ შუქში.",
        "optionsRu": [
          "Цветовое зрение",
          "Тусклое зрение",
          "Детальный фокус",
          "Восприятие глубины"
        ],
        "optionsHy": [
          "Գունավոր տեսողություն",
          "Թույլ լույսի տեսողություն",
          "Մանրամասների կենտրոնացում",
          "Խորության ընկալում"
        ],
        "optionsAz": [
          "Rəng görmə",
          "Zəif işıq görmə",
          "Detallara diqqət",
          "Dərinlik qavrayışı"
        ],
        "explanationHy": "Ձողերը գործում են աղոտ լույսի ներքո:",
        "questionHy": "Ցանցաթաղանթի ձողերը նախատեսված են.",
        "questionRu": "Палочки в сетчатке предназначены для:",
        "explanationRu": "Палочки функционируют при тусклом свете.",
        "questionAz": "Retinada olan çubuqlar aşağıdakılar üçündür:",
        "explanationAz": "Çubuqlar zəif işıqda işləyir."
      },
      {
        "id": "q4-4",
        "question": "Converting stimuli to neural signals is:",
        "questionKa": "სტიმულების ნერვულ სიგნალებად გარდაქმნა არის:",
        "options": [
          "Perception",
          "Transduction",
          "Accommodation",
          "Adaptation"
        ],
        "optionsKa": [
          "აღქმა",
          "ტრანსდუქცია",
          "აკომოდაცია",
          "ადაპტაცია"
        ],
        "correctIndex": 1,
        "explanation": "Transduction converts physical energy to signals.",
        "explanationKa": "ტრანსდუქცია გარდაქმნის ფიზიკურ ენერგიას სიგნალებად.",
        "optionsRu": [
          "Восприятие",
          "Трансдукция",
          "Размещение",
          "Приспособление"
        ],
        "optionsHy": [
          "Ընկալում",
          "Փոխանցում",
          "Տեղավորում",
          "Հարմարվողականություն"
        ],
        "optionsAz": [
          "Qavrama",
          "Transduksiya",
          "Yerləşdirmə",
          "Uyğunlaşma"
        ],
        "explanationHy": "Փոխակերպումը ֆիզիկական էներգիան փոխակերպում է ազդանշանների:",
        "questionHy": "Գրգռիչները նյարդային ազդանշանների վերածելը հետևյալն է.",
        "explanationRu": "Трансдукция преобразует физическую энергию в сигналы.",
        "questionRu": "Преобразование стимулов в нейронные сигналы – это:",
        "explanationAz": "Transduksiya fiziki enerjini siqnallara çevirir.",
        "questionAz": "Stimulların sinir siqnallarına çevrilməsi:"
      },
      {
        "id": "q4-5",
        "question": "Sound frequency determines:",
        "questionKa": "ხმის სიხშირე განსაზღვრავს:",
        "options": [
          "Loudness",
          "Pitch",
          "Timbre",
          "Duration"
        ],
        "optionsKa": [
          "ხმამაღლობას",
          "ტონალობას",
          "ტემბრს",
          "ხანგრძლივობას"
        ],
        "correctIndex": 1,
        "explanation": "Frequency determines pitch.",
        "explanationKa": "სიხშირე განსაზღვრავს ტონალობას.",
        "optionsRu": [
          "Громкость",
          "Подача",
          "Тембр",
          "Продолжительность"
        ],
        "optionsHy": [
          "Բարձրաձայնություն",
          "սկիպիդար",
          "Տեմբր",
          "Տևողությունը"
        ],
        "optionsAz": [
          "Səs ucalığı",
          "Pitch",
          "tembr",
          "Müddət"
        ],
        "questionHy": "Ձայնի հաճախականությունը որոշում է.",
        "explanationHy": "Հաճախականությունը որոշում է բարձրությունը:",
        "questionRu": "Частота звука определяет:",
        "explanationRu": "Частота определяет высоту звука.",
        "questionAz": "Səs tezliyi müəyyən edir:",
        "explanationAz": "Tezlik səsi müəyyənləşdirir."
      },
      {
        "id": "q4-6",
        "question": "The blind spot exists because:",
        "questionKa": "ბრმა ლაქა არსებობს, რადგან:",
        "options": [
          "No cones there",
          "No receptors where optic nerve exits",
          "Imperfect lens",
          "Light damage"
        ],
        "optionsKa": [
          "იქ კონუსები არ არის",
          "არ არის რეცეპტორები მხედველობის ნერვის გამოსვლის ადგილას",
          "არასრულყოფილი ლინზა",
          "სინათლის დაზიანება"
        ],
        "correctIndex": 1,
        "explanation": "No receptors where the optic nerve exits.",
        "explanationKa": "არ არის რეცეპტორები იქ, სადაც მხედველობის ნერვი გამოდის.",
        "optionsRu": [
          "Никаких конусов там нет",
          "Нет рецепторов в местах выхода зрительного нерва.",
          "Несовершенная линза",
          "Легкий урон"
        ],
        "optionsHy": [
          "Այնտեղ կոններ չկան",
          "Չկան ընկալիչներ, որտեղից օպտիկական նյարդը դուրս է գալիս",
          "Անկատար ոսպնյակ",
          "Թեթև վնաս"
        ],
        "optionsAz": [
          "Orada konus yoxdur",
          "Optik sinirin çıxdığı yerdə reseptorlar yoxdur",
          "Qüsursuz lens",
          "Yüngül ziyan"
        ],
        "questionRu": "Слепое пятно существует потому, что:",
        "explanationRu": "Никаких рецепторов там, где выходит зрительный нерв.",
        "questionHy": "Կույր կետը գոյություն ունի, քանի որ.",
        "explanationHy": "Չկան ընկալիչներ, որտեղից օպտիկական նյարդը դուրս է գալիս:",
        "explanationAz": "Optik sinirin çıxdığı yerdə reseptorlar yoxdur.",
        "questionAz": "Kor nöqtə ona görə yaranır:"
      },
      {
        "id": "q4-7",
        "question": "Top-down processing is guided by:",
        "questionKa": "ზემოდან-ქვემოთ დამუშავება ხელმძღვანელობს:",
        "options": [
          "Raw sensory data",
          "Expectations and prior knowledge",
          "Stimulus intensity",
          "Receptor cells"
        ],
        "optionsKa": [
          "ნედლი სენსორული მონაცემებით",
          "მოლოდინებითა და წინარე ცოდნით",
          "სტიმულის ინტენსივობით",
          "რეცეპტორული უჯრედებით"
        ],
        "correctIndex": 1,
        "explanation": "Experience and knowledge guide top-down processing.",
        "explanationKa": "გამოცდილება და ცოდნა ხელმძღვანელობს ზემოდან-ქვემოთ დამუშავებას.",
        "optionsRu": [
          "Необработанные сенсорные данные",
          "Ожидания и предварительные знания",
          "Интенсивность стимула",
          "Рецепторные клетки"
        ],
        "optionsHy": [
          "Հում զգայական տվյալներ",
          "Ակնկալիքներ և նախնական գիտելիքներ",
          "Խթանի ինտենսիվությունը",
          "Ընդունիչ բջիջներ"
        ],
        "optionsAz": [
          "Xam sensor məlumat",
          "Gözləntilər və əvvəlki biliklər",
          "Stimulun intensivliyi",
          "Reseptor hüceyrələri"
        ],
        "explanationRu": "Опыт и знания определяют обработку сверху вниз.",
        "questionHy": "Վերևից վար մշակումն առաջնորդվում է հետևյալով.",
        "questionRu": "Обработка сверху вниз руководствуется:",
        "explanationHy": "Փորձը և գիտելիքները ուղղորդում են վերևից վար մշակում:",
        "explanationAz": "Təcrübə və bilik yuxarıdan aşağıya emal bələdçisidir.",
        "questionAz": "Yuxarıdan aşağıya emal aşağıdakılarla idarə olunur:"
      },
      {
        "id": "q4-8",
        "question": "Sensory adaptation is:",
        "questionKa": "სენსორული ადაპტაცია არის:",
        "options": [
          "Learning new skills",
          "Decreased sensitivity to constant stimulus",
          "Increased pain",
          "Improved vision"
        ],
        "optionsKa": [
          "ახალი უნარების შესწავლა",
          "მუდმივ სტიმულზე მგრძნობელობის დაქვეითება",
          "ტკივილის გაძლიერება",
          "მხედველობის გაუმჯობესება"
        ],
        "correctIndex": 1,
        "explanation": "Reduced sensitivity to unchanging stimuli.",
        "explanationKa": "შემცირებული მგრძნობელობა უცვლელ სტიმულებზე.",
        "optionsRu": [
          "Обучение новым навыкам",
          "Снижение чувствительности к постоянным раздражителям.",
          "Усиление боли",
          "Улучшенное зрение"
        ],
        "optionsHy": [
          "Նոր հմտություններ սովորելը",
          "Մշտական ​​խթանների նկատմամբ զգայունության նվազում",
          "Աճող ցավ",
          "Բարելավված տեսողություն"
        ],
        "optionsAz": [
          "Yeni bacarıqların öyrənilməsi",
          "Daimi stimullara həssaslığın azalması",
          "Artan ağrı",
          "Təkmilləşdirilmiş görmə"
        ],
        "questionRu": "Сенсорная адаптация – это:",
        "explanationRu": "Снижение чувствительности к неизменным раздражителям.",
        "explanationHy": "Նվազեցված զգայունությունը անփոփոխ խթանների նկատմամբ:",
        "questionAz": "Sensor uyğunlaşma:",
        "questionHy": "Զգայական ադապտացիան հետևյալն է.",
        "explanationAz": "Dəyişməyən stimullara həssaslığın azalması."
      },
      {
        "id": "q4-9",
        "question": "Binocular depth cues require:",
        "questionKa": "ბინოკულარული სიღრმის მინიშნებები მოითხოვს:",
        "options": [
          "One eye",
          "Both eyes",
          "Hearing",
          "Touch"
        ],
        "optionsKa": [
          "ერთ თვალს",
          "ორივე თვალს",
          "სმენას",
          "შეხებას"
        ],
        "correctIndex": 1,
        "explanation": "Both eyes needed for binocular depth cues.",
        "explanationKa": "ბინოკულარული სიღრმის მინიშნებებისთვის ორივე თვალია საჭირო.",
        "optionsRu": [
          "Один глаз",
          "Оба глаза",
          "Слух",
          "Трогать"
        ],
        "optionsHy": [
          "Մեկ աչք",
          "Երկու աչքերը",
          "Լսողություն",
          "Հպեք"
        ],
        "optionsAz": [
          "Bir göz",
          "Hər iki göz",
          "Eşitmə",
          "toxunun"
        ],
        "questionAz": "Binokulyar dərinlik göstəriciləri tələb edir:",
        "explanationAz": "Hər iki göz binokulyar dərinlik işarələri üçün lazımdır.",
        "questionHy": "Երկադիտակի խորության ազդանշանները պահանջում են.",
        "explanationHy": "Երկու աչքերն էլ անհրաժեշտ են երկդիտակի խորության նշանների համար:",
        "explanationRu": "Оба глаза необходимы для бинокулярного определения глубины.",
        "questionRu": "Бинокулярные сигналы глубины требуют:"
      },
      {
        "id": "q4-10",
        "question": "Opponent-process theory explains:",
        "questionKa": "ოპონენტ-პროცესის თეორია ხსნის:",
        "options": [
          "3D vision",
          "Color via opposing pairs",
          "Smell adaptation",
          "Pain"
        ],
        "optionsKa": [
          "3D მხედველობას",
          "ფერს საპირისპირო წყვილების მეშვეობით",
          "სუნის ადაპტაციას",
          "ტკივილს"
        ],
        "correctIndex": 1,
        "explanation": "Color perception through three opposing pairs.",
        "explanationKa": "ფერის აღქმა სამი საპირისპირო წყვილის მეშვეობით.",
        "optionsRu": [
          "3D видение",
          "Цвет через противоположные пары",
          "Адаптация запаха",
          "Боль"
        ],
        "optionsHy": [
          "3D տեսլական",
          "Գույնը հակառակ զույգերի միջոցով",
          "Հոտի հարմարեցում",
          "Ցավ"
        ],
        "optionsAz": [
          "3D görmə",
          "Qarşılıqlı cütlər vasitəsilə rəngləyin",
          "Qoxuya uyğunlaşma",
          "Ağrı"
        ],
        "questionAz": "Rəqib-proses nəzəriyyəsi belə izah edir:",
        "explanationHy": "Գույնի ընկալումը երեք հակադիր զույգերի միջոցով:",
        "questionRu": "Теория противодействующего процесса объясняет:",
        "explanationRu": "Восприятие цвета через три противоположные пары.",
        "questionHy": "Հակառակորդ-գործընթացի տեսությունը բացատրում է.",
        "explanationAz": "Üç əks cüt vasitəsilə rəng qavrayışı."
      }
    ],
    "titleHy": "Սենսացիա և ընկալում — Վիկտորինա",
    "titleRu": "Ощущение и восприятие — Викторина",
    "titleAz": "Hiss və qavrayış — Viktorina"
  },
  {
    "id": "ch5-quiz",
    "chapterId": 5,
    "title": "Consciousness — Quiz",
    "titleKa": "ცნობიერება — ვიქტორინა",
    "questions": [
      {
        "id": "q5-1",
        "question": "REM sleep features:",
        "questionKa": "REM ძილის მახასიათებლებია:",
        "options": [
          "Deep relaxation",
          "Rapid eye movements and vivid dreams",
          "No brain activity",
          "Sleepwalking"
        ],
        "optionsKa": [
          "ღრმა მოდუნება",
          "სწრაფი თვალის მოძრაობები და ნათელი სიზმრები",
          "ტვინის აქტივობა არ არის",
          "ძილში სიარული"
        ],
        "correctIndex": 1,
        "explanation": "REM: rapid eye movements and vivid dreaming.",
        "explanationKa": "REM: სწრაფი თვალის მოძრაობები და ნათელი სიზმრები.",
        "optionsRu": [
          "Глубокая релаксация",
          "Быстрые движения глаз и яркие сны.",
          "Нет мозговой активности",
          "Лунатизм"
        ],
        "optionsHy": [
          "Խորը թուլացում",
          "Աչքերի արագ շարժումներ և վառ երազներ",
          "Ուղեղի ակտիվություն չկա",
          "Քնած քայլք"
        ],
        "optionsAz": [
          "Dərin istirahət",
          "Sürətli göz hərəkətləri və canlı yuxular",
          "Beyin fəaliyyəti yoxdur",
          "Yuxuda gəzinti"
        ],
        "questionRu": "Особенности быстрого сна:",
        "explanationRu": "БДГ: быстрые движения глаз и яркие сновидения.",
        "questionHy": "REM քնի առանձնահատկությունները.",
        "explanationHy": "REM. աչքերի արագ շարժումներ և վառ երազներ:",
        "explanationAz": "REM: sürətli göz hərəkətləri və canlı yuxular.",
        "questionAz": "REM yuxu xüsusiyyətləri:"
      },
      {
        "id": "q5-2",
        "question": "Freud said dreams represent:",
        "questionKa": "ფროიდის მიხედვით სიზმრები წარმოადგენს:",
        "options": [
          "Random neural firing",
          "Wish fulfillment",
          "Memory consolidation",
          "Nothing meaningful"
        ],
        "optionsKa": [
          "ნეირონების შემთხვევით აქტივაციას",
          "სურვილის შესრულებას",
          "მეხსიერების კონსოლიდაციას",
          "არაფერ მნიშვნელოვანს"
        ],
        "correctIndex": 1,
        "explanation": "Freud: dreams are disguised wish fulfillment.",
        "explanationKa": "ფროიდი: სიზმრები არის შენიღბული სურვილების შესრულება.",
        "optionsRu": [
          "Случайное нейронное срабатывание",
          "Исполнение желаний",
          "Консолидация памяти",
          "Ничего значимого"
        ],
        "optionsHy": [
          "Նյարդային պատահական կրակոց",
          "Ցանկության կատարում",
          "Հիշողության համախմբում",
          "Ոչ մի իմաստալից բան"
        ],
        "optionsAz": [
          "Təsadüfi sinir atəşi",
          "Arzunun yerinə yetirilməsi",
          "Yaddaşın konsolidasiyası",
          "Mənalı heç nə yoxdur"
        ],
        "questionHy": "Ֆրոյդն ասում էր, որ երազները ներկայացնում են.",
        "explanationHy": "Ֆրեյդ. Երազները քողարկված ցանկությունների իրականացում են:",
        "questionRu": "Фрейд говорил, что сны представляют собой:",
        "explanationRu": "Фрейд: сны — это замаскированное исполнение желаний.",
        "questionAz": "Freyd yuxuların aşağıdakıları ifadə etdiyini söylədi:",
        "explanationAz": "Freyd: yuxular gizlənmiş arzuların yerinə yetirilməsidir."
      },
      {
        "id": "q5-3",
        "question": "Circadian rhythm is approximately:",
        "questionKa": "ცირკადული რიტმი დაახლოებით არის:",
        "options": [
          "12 hours",
          "24 hours",
          "48 hours",
          "8 hours"
        ],
        "optionsKa": [
          "12 საათი",
          "24 საათი",
          "48 საათი",
          "8 საათი"
        ],
        "correctIndex": 1,
        "explanation": "Roughly 24-hour cycle.",
        "explanationKa": "დაახლოებით 24-საათიანი ციკლი.",
        "optionsRu": [
          "12 часов",
          "24 часа",
          "48 часов",
          "8 часов"
        ],
        "optionsHy": [
          "12 ժամ",
          "24 ժամ",
          "48 ժամ",
          "8 ժամ"
        ],
        "optionsAz": [
          "12 saat",
          "24 saat",
          "48 saat",
          "8 saat"
        ],
        "explanationRu": "Примерно 24-часовой цикл.",
        "explanationHy": "Մոտավորապես 24-ժամյա ցիկլ:",
        "questionHy": "Circadian ռիթմը մոտավորապես հետևյալն է.",
        "questionRu": "Циркадный ритм составляет примерно:",
        "questionAz": "Sirkadiyalı ritm təxminən belədir:",
        "explanationAz": "Təxminən 24 saatlıq dövr."
      },
      {
        "id": "q5-4",
        "question": "Sleep deprivation impairs:",
        "questionKa": "ძილის დეფიციტი აუარესებს:",
        "options": [
          "Physical strength",
          "Concentration and decisions",
          "Height",
          "Hearing"
        ],
        "optionsKa": [
          "ფიზიკურ ძალას",
          "კონცენტრაციასა და გადაწყვეტილებებს",
          "სიმაღლეს",
          "სმენას"
        ],
        "correctIndex": 1,
        "explanation": "Sleep loss impairs cognitive function.",
        "explanationKa": "ძილის დეფიციტი აუარესებს კოგნიტურ ფუნქციას.",
        "optionsRu": [
          "Физическая сила",
          "Концентрация и решения",
          "Высота",
          "Слух"
        ],
        "optionsHy": [
          "Ֆիզիկական ուժ",
          "Համակենտրոնացում և որոշումներ",
          "Բարձրություն",
          "Լսողություն"
        ],
        "optionsAz": [
          "Fiziki güc",
          "Konsentrasiya və qərarlar",
          "Hündürlük",
          "Eşitmə"
        ],
        "explanationHy": "Քնի կորուստը խաթարում է ճանաչողական գործառույթը:",
        "questionHy": "Քնի պակասը խանգարում է.",
        "explanationAz": "Yuxu itkisi koqnitiv funksiyanı pozur.",
        "questionAz": "Yuxusuzluq pozulur:",
        "questionRu": "Депривация сна ухудшает:",
        "explanationRu": "Потеря сна ухудшает когнитивные функции."
      },
      {
        "id": "q5-5",
        "question": "Activation-synthesis says dreams are:",
        "questionKa": "აქტივაცია-სინთეზის თეორიის მიხედვით სიზმრები არის:",
        "options": [
          "Unconscious wishes",
          "Brain interpreting random neural activity",
          "Supernatural",
          "Repressed memories"
        ],
        "optionsKa": [
          "არაცნობიერი სურვილები",
          "ტვინი ინტერპრეტაციას უკეთებს შემთხვევით ნეირონულ აქტივობას",
          "ზებუნებრივი",
          "ჩახშობილი მოგონებები"
        ],
        "correctIndex": 1,
        "explanation": "Brain makes sense of random neural signals.",
        "explanationKa": "ტვინი აზრს ანიჭებს შემთხვევით ნეირონულ სიგნალებს.",
        "optionsRu": [
          "Бессознательные желания",
          "Мозг интерпретирует случайную нейронную активность",
          "сверхъестественное",
          "Подавленные воспоминания"
        ],
        "optionsHy": [
          "Անգիտակից ցանկություններ",
          "Ուղեղը մեկնաբանում է պատահական նյարդային գործունեությունը",
          "Գերբնական",
          "Բռնադատված հիշողություններ"
        ],
        "optionsAz": [
          "Şüursuz arzular",
          "Beyin təsadüfi sinir fəaliyyətini şərh edir",
          "Fövqəltəbii",
          "Repressiya edilmiş xatirələr"
        ],
        "questionHy": "Ակտիվացում-սինթեզն ասում է, որ երազներն են.",
        "questionRu": "Активация-синтез утверждает, что сны – это:",
        "questionAz": "Aktivləşdirmə-sintez yuxuların belə olduğunu söyləyir:",
        "explanationRu": "Мозг воспринимает случайные нейронные сигналы.",
        "explanationHy": "Ուղեղն իմաստավորում է պատահական նյարդային ազդանշանները:",
        "explanationAz": "Beyin təsadüfi sinir siqnallarını mənalandırır."
      },
      {
        "id": "q5-6",
        "question": "Narcolepsy involves:",
        "questionKa": "ნარკოლეფსია მოიცავს:",
        "options": [
          "Inability to sleep",
          "Sudden sleep attacks",
          "Snoring",
          "Nightmares only"
        ],
        "optionsKa": [
          "ძილის უუნარობას",
          "ძილის უეცარ შეტევებს",
          "ხვრინვას",
          "მხოლოდ კოშმარებს"
        ],
        "correctIndex": 1,
        "explanation": "Sudden uncontrollable episodes of falling asleep.",
        "explanationKa": "ძილის უეცარი, უკონტროლო ეპიზოდები.",
        "optionsRu": [
          "Неспособность спать",
          "Внезапные приступы сна",
          "Храп",
          "Только кошмары"
        ],
        "optionsHy": [
          "Քնի անկարողությունը",
          "Հանկարծակի քնի հարձակումներ",
          "Խռմփոց",
          "Միայն մղձավանջներ"
        ],
        "optionsAz": [
          "Yata bilməmək",
          "Ani yuxu hücumları",
          "Xorultu",
          "Yalnız kabuslar"
        ],
        "questionRu": "Нарколепсия включает в себя:",
        "questionHy": "Նարկոլեպսիան ներառում է.",
        "questionAz": "Narkolepsiya daxildir:",
        "explanationRu": "Внезапные неконтролируемые эпизоды засыпания.",
        "explanationHy": "Հանկարծակի քնելու անկառավարելի դրվագներ.",
        "explanationAz": "Ani nəzarətsiz yuxuya getmə epizodları."
      },
      {
        "id": "q5-7",
        "question": "Hypnosis is best described as:",
        "questionKa": "ჰიპნოზი საუკეთესოდ აღიწერება, როგორც:",
        "options": [
          "Heightened suggestibility",
          "Deep sleep",
          "Unconsciousness",
          "Anesthesia"
        ],
        "optionsKa": [
          "გაძლიერებული შთაგონებადობა",
          "ღრმა ძილი",
          "უგონო მდგომარეობა",
          "ანესთეზია"
        ],
        "correctIndex": 0,
        "explanation": "Heightened suggestibility and focused attention.",
        "explanationKa": "გაძლიერებული შთაგონებადობა და ფოკუსირებული ყურადღება.",
        "optionsRu": [
          "Повышенная внушаемость",
          "Глубокий сон",
          "Бессознательное состояние",
          "Анестезия"
        ],
        "optionsHy": [
          "Բարձրացված առաջարկություն",
          "Խորը քուն",
          "Անգիտակիցություն",
          "Անզգայացում"
        ],
        "optionsAz": [
          "Gücləndirilmiş təklif",
          "Dərin yuxu",
          "Şüursuzluq",
          "Anesteziya"
        ],
        "questionHy": "Հիպնոզը լավագույնս բնութագրվում է հետևյալ կերպ.",
        "explanationHy": "Բարձրացված առաջարկություն և կենտրոնացված ուշադրություն:",
        "questionAz": "Hipnoz ən yaxşı şəkildə təsvir edilir:",
        "explanationAz": "Təklif qabiliyyətini artırdı və diqqəti cəmləşdirdi.",
        "explanationRu": "Повышенная внушаемость и сосредоточенность внимания.",
        "questionRu": "Гипноз лучше всего описать как:"
      },
      {
        "id": "q5-8",
        "question": "Melatonin regulates:",
        "questionKa": "მელატონინი არეგულირებს:",
        "options": [
          "Hunger",
          "Sleep",
          "Growth",
          "Adrenaline"
        ],
        "optionsKa": [
          "შიმშილს",
          "ძილს",
          "ზრდას",
          "ადრენალინს"
        ],
        "correctIndex": 1,
        "explanation": "Melatonin regulates the sleep-wake cycle.",
        "explanationKa": "მელატონინი არეგულირებს ძილ-ღვიძილის ციკლს.",
        "optionsRu": [
          "Голод",
          "Спать",
          "Рост",
          "Адреналин"
        ],
        "optionsHy": [
          "Սով",
          "Քնել",
          "Աճ",
          "Ադրենալին"
        ],
        "optionsAz": [
          "Aclıq",
          "yatmaq",
          "Artım",
          "Adrenalin"
        ],
        "questionRu": "Мелатонин регулирует:",
        "questionHy": "Մելատոնինը կարգավորում է.",
        "explanationHy": "Մելատոնինը կարգավորում է քուն-արթուն ցիկլը։",
        "explanationAz": "Melatonin yuxu-oyanma dövrünü tənzimləyir.",
        "explanationRu": "Мелатонин регулирует цикл сна и бодрствования.",
        "questionAz": "Melatonin tənzimləyir:"
      },
      {
        "id": "q5-9",
        "question": "Tolerance means:",
        "questionKa": "ტოლერანტობა ნიშნავს:",
        "options": [
          "You dislike it",
          "Need more for same effect",
          "Addicted",
          "No longer exists"
        ],
        "optionsKa": [
          "არ მოგწონთ",
          "მეტია საჭირო იმავე ეფექტისთვის",
          "დამოკიდებული ხართ",
          "აღარ არსებობს"
        ],
        "correctIndex": 1,
        "explanation": "Needing more to achieve the same effect.",
        "explanationKa": "მეტი საჭიროება იმავე ეფექტის მისაღწევად.",
        "optionsRu": [
          "Тебе это не нравится",
          "Нужно больше для того же эффекта",
          "С зависимостью",
          "Больше не существует"
        ],
        "optionsHy": [
          "Դուք դա չեք սիրում",
          "Նույն ազդեցության համար ավելին է պետք",
          "Կախվածություն",
          "Այլևս գոյություն չունի"
        ],
        "optionsAz": [
          "Bəyənmədin",
          "Eyni effekt üçün daha çox lazımdır",
          "Asılı",
          "Artıq yoxdur"
        ],
        "questionAz": "Tolerantlıq deməkdir:",
        "questionHy": "Հանդուրժողականություն նշանակում է.",
        "questionRu": "Толерантность означает:",
        "explanationHy": "Նույն արդյունքին հասնելու համար ավելին է պետք:",
        "explanationRu": "Для достижения того же эффекта нужно больше.",
        "explanationAz": "Eyni effekti əldə etmək üçün daha çox ehtiyac var."
      },
      {
        "id": "q5-10",
        "question": "Delta waves are associated with:",
        "questionKa": "დელტა ტალღები ასოცირდება:",
        "options": [
          "Alertness",
          "REM sleep",
          "Deep non-REM sleep",
          "Light sleep"
        ],
        "optionsKa": [
          "ფხიზლობასთან",
          "REM ძილთან",
          "ღრმა არა-REM ძილთან",
          "მსუბუქ ძილთან"
        ],
        "correctIndex": 2,
        "explanation": "Delta waves characterize deep non-REM sleep.",
        "explanationKa": "დელტა ტალღები ახასიათებს ღრმა არა-REM ძილს.",
        "optionsRu": [
          "Бдительность",
          "быстрый сон",
          "Глубокий медленный сон",
          "Легкий сон"
        ],
        "optionsHy": [
          "Զգոնություն",
          "REM քուն",
          "Խորը ոչ REM քուն",
          "Թեթև քուն"
        ],
        "optionsAz": [
          "Xəbərdarlıq",
          "REM yuxusu",
          "Dərin qeyri-REM yuxusu",
          "Yüngül yuxu"
        ],
        "questionHy": "Դելտայի ալիքները կապված են.",
        "questionRu": "Дельта-волны связаны с:",
        "questionAz": "Delta dalğaları aşağıdakılarla əlaqələndirilir:",
        "explanationHy": "Դելտա ալիքները բնութագրում են խորը ոչ REM քունը:",
        "explanationRu": "Дельта-волны характеризуют глубокий медленный сон.",
        "explanationAz": "Delta dalğaları dərin qeyri-REM yuxusunu xarakterizə edir."
      }
    ],
    "titleRu": "Сознание — Викторина",
    "titleHy": "Գիտակցություն — Վիկտորինա",
    "titleAz": "Şüur - Viktorina"
  },
  {
    "id": "ch6-quiz",
    "chapterId": 6,
    "title": "Learning — Quiz",
    "titleKa": "სწავლა — ვიქტორინა",
    "questions": [
      {
        "id": "q6-1",
        "question": "In Pavlov's experiment, the bell started as a:",
        "questionKa": "პავლოვის ექსპერიმენტში ზარი თავდაპირველად იყო:",
        "options": [
          "Conditioned stimulus",
          "Unconditioned stimulus",
          "Neutral stimulus",
          "Conditioned response"
        ],
        "optionsKa": [
          "პირობითი სტიმული",
          "უპირობო სტიმული",
          "ნეიტრალური სტიმული",
          "პირობითი რეაქცია"
        ],
        "correctIndex": 2,
        "explanation": "The bell was initially neutral.",
        "explanationKa": "ზარი თავდაპირველად ნეიტრალური იყო.",
        "optionsRu": [
          "Условный раздражитель",
          "Безусловный раздражитель",
          "Нейтральный стимул",
          "Условный ответ"
        ],
        "optionsHy": [
          "Պայմանավորված խթան",
          "Անվերապահ խթան",
          "Չեզոք խթան",
          "Պայմանավորված արձագանք"
        ],
        "optionsAz": [
          "Şərti stimul",
          "Şərtsiz stimul",
          "Neytral stimul",
          "Şərti cavab"
        ],
        "explanationHy": "Զանգը սկզբում չեզոք էր։",
        "questionHy": "Պավլովի փորձի մեջ զանգը սկսվեց հետևյալ կերպ.",
        "explanationRu": "Колокол изначально был нейтральным.",
        "questionRu": "В эксперименте Павлова колокол начинался как:",
        "questionAz": "Pavlovun təcrübəsində zəng belə başladı:",
        "explanationAz": "Zəng əvvəlcə neytral idi."
      },
      {
        "id": "q6-2",
        "question": "Negative reinforcement involves:",
        "questionKa": "უარყოფითი განმტკიცება მოიცავს:",
        "options": [
          "Punishment",
          "Adding unpleasant stimulus",
          "Removing unpleasant stimulus",
          "Ignoring behavior"
        ],
        "optionsKa": [
          "დასჯას",
          "უსიამოვნო სტიმულის დამატებას",
          "უსიამოვნო სტიმულის მოცილებას",
          "ქცევის იგნორირებას"
        ],
       export const FACTS: Fact[] = [
  {
    "id": 1,
    "text": "Your brain uses about 20% of your body's total energy, despite being only 2% of your body weight.",
    "textKa": "თქვენი ტვინი სხეულის მთლიანი ენერგიის 20%-ს მოიხმარს, მიუხედავად იმისა, რომ სხეულის წონის მხოლოდ 2%-ს შეადგენს.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "Мозг использует около 20% всей энергии вашего тела, несмотря на то, что его масса составляет всего 2% от веса вашего тела.",
    "textHy": "Ձեր ուղեղը օգտագործում է ձեր մարմնի ընդհանուր էներգիայի մոտ 20%-ը, չնայած այն կազմում է ձեր մարմնի քաշի ընդամենը 2%-ը:",
    "textAz": "Beyniniz bədən çəkinizin yalnız 2%-i olmasına baxmayaraq, bədəninizin ümumi enerjisinin təxminən 20%-ni istifadə edir."
  },
  {
    "id": 2,
    "text": "The average person has about 6,200 thoughts per day, according to a 2020 study.",
    "textKa": "საშუალო ადამიანს დღეში დაახლოებით 6,200 აზრი აქვს, 2020 წლის კვლევის მიხედვით.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:head-lightbulb-outline",
    "textRu": "Согласно исследованию 2020 года, у среднестатистического человека в день возникает около 6200 мыслей.",
    "textHy": "Ըստ 2020 թվականի ուսումնասիրության, միջին հաշվով մարդն օրական ունենում է մոտ 6200 միտք:",
    "textAz": "2020-ci il araşdırmasına görə, orta hesabla bir insanın gündə təxminən 6200 düşüncəsi var."
  },
  {
    "id": 3,
    "text": "Memories are distributed across networks of neurons, not stored in one place.",
    "textKa": "მოგონებები ნეირონების ქსელებშია განაწილებული, და არა ერთ ადგილას.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:memory",
    "textRu": "Воспоминания распределены по сетям нейронов, а не хранятся в одном месте.",
    "textHy": "Հիշողությունները բաշխվում են նեյրոնների ցանցերում, այլ ոչ թե պահվում են մեկ տեղում:",
    "textAz": "Yaddaşlar bir yerdə saxlanılmayan neyron şəbəkələri arasında paylanır."
  },
  {
    "id": 4,
    "text": "The \"doorway effect\": Walking through a doorway makes you forget what you were thinking.",
    "textKa": "\"კარის ეფექტი\": კარში გავლა გაგავიწყებინებს რაზე ფიქრობდით.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:door-open",
    "textRu": "«Эффект дверного проема»: проход через дверной проем заставляет вас забыть, о чем вы думали.",
    "textHy": "«Դռների էֆեկտ». Դռան միջով անցնելը ստիպում է մոռանալ, թե ինչ էիք մտածում:",
    "textAz": "\"Qapı effekti\": Qapıdan keçmək nə düşündüyünüzü unutdurur."
  },
  {
    "id": 5,
    "text": "We consciously process about 50 bits per second, despite senses receiving millions.",
    "textKa": "შეგნებულად წამში დაახლოებით 50 ბიტს წამში, მიუხედავად იმისა, რომ გრძნობები მილიონობით იღებს.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:eye-settings-outline",
    "textRu": "Мы сознательно обрабатываем около 50 бит в секунду, несмотря на то, что органы чувств принимают миллионы.",
    "textHy": "Մենք գիտակցաբար մշակում ենք վայրկյանում մոտ 50 բիթ, չնայած զգայարանները ստանում են միլիոններ:",
    "textAz": "Hisslərin milyonlarla qəbul etməsinə baxmayaraq, biz saniyədə təxminən 50 biti şüurlu şəkildə emal edirik."
  },
  {
    "id": 6,
    "text": "In Milgram's experiment, 65% administered what they believed were lethal shocks under authority.",
    "textKa": "მილგრამის ექსპერიმენტში 65%-მა მისცა საშიში ელექტროშოკი, რომელიც სასიკვდილოდ მიიჩნია.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:flash-alert-outline",
    "textRu": "В эксперименте Милгрэма 65% участников эксперимента применяли то, что, по их мнению, было смертельным электрошоком под руководством.",
    "textHy": "Միլգրամի փորձի ժամանակ 65%-ը կառավարել է այն, ինչ նրանք կարծում էին, որ մահացու ցնցումներ էին իշխանության ներքո:",
    "textAz": "Milgramın təcrübəsində, 65% hakimiyyət altında öldürücü şoklar olduğuna inandıqları şeyi tətbiq etdi."
  },
  {
    "id": 7,
    "text": "The placebo effect works even when people know they are taking a placebo.",
    "textKa": "პლაცებოს ეფექტი მუშაობს მაშინაც, როცა ადამიანებმა იციან, რომ პლაცებოს იღებენ.",
    "source": "Health Psychology",
    "category": "Health",
    "icon": "mdi:pill",
    "textHy": "Պլացեբոյի էֆեկտը գործում է նույնիսկ այն դեպքում, երբ մարդիկ գիտեն, որ իրենք պլացեբո են ընդունում:",
    "textRu": "Эффект плацебо работает, даже когда люди знают, что принимают плацебо.",
    "textAz": "Plasebo effekti hətta insanlar plasebo qəbul etdiklərini bilsələr də işləyir."
  },
  {
    "id": 8,
    "text": "Babies recognize their mother's voice from birth, having listened in the womb.",
    "textKa": "ჩვილები დედის ხმას დაბადებიდან ამოიცნობენ, რადგან საშვილოსნოში უსმენდნენ.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:baby-carriage",
    "textRu": "Младенцы узнают голос матери с рождения, прислушавшись к нему еще в утробе матери.",
    "textHy": "Երեխաները ճանաչում են իրենց մոր ձայնը ծննդից՝ լսելով արգանդում:",
    "textAz": "Körpələr ana bətnində dinləyərək anasının səsini doğuşdan tanıyırlar."
  },
  {
    "id": 9,
    "text": "Even forced smiling can improve your mood via the facial feedback hypothesis.",
    "textKa": "იძულებითი ღიმილიც კი შეუძლია განწყობის გაუმჯობესება, სახის უკუკავშირი არსებობის ჰიპოთეზის მიხედვით.",
    "source": "Emotion Research",
    "category": "Emotion",
    "icon": "mdi:emoticon-happy-outline",
    "textRu": "Даже вынужденная улыбка может улучшить ваше настроение благодаря гипотезе обратной связи по лицу.",
    "textHy": "Նույնիսկ հարկադիր ժպտալը կարող է բարելավել ձեր տրամադրությունը դեմքի հետադարձ կապի վարկածի միջոցով:",
    "textAz": "Hətta məcburi təbəssüm də üz rəyi hipotezi vasitəsilə əhvalınızı yaxşılaşdıra bilər."
  },
  {
    "id": 10,
    "text": "Dunning-Kruger effect: People with low knowledge overestimate competence; experts underestimate.",
    "textKa": "დანინგ-კრუგერის ეფექტი: მცირე ცოდნის მქონე ადამიანები გადააჭარბებენ კომპეტენციას, ექსპერტები კი ანაცვალებენ.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-bell-curve-cumulative",
    "textRu": "Эффект Даннинга-Крюгера: люди с низким уровнем знаний переоценивают компетентность; эксперты недооценивают.",
    "textHy": "Դանինգ-Կրյուգերի էֆեկտ. ցածր գիտելիքներ ունեցող մարդիկ գերագնահատում են իրավասությունը. փորձագետները թերագնահատում են.",
    "textAz": "Dunning-Kruger effekti: Biliyi az olan insanlar səriştəni yüksək qiymətləndirir; ekspertlər az qiymətləndirirlər."
  },
  {
    "id": 11,
    "text": "Your unconscious processes 11 million info pieces per second; conscious handles about 40.",
    "textKa": "თქვენი ქვეცნობიერება წამში 11 მილიონ ერთეულ ინფორმაციას ამუშავებს; ცნობიერება მხოლოდ 40-ს.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:head-sync-outline",
    "textHy": "Ձեր անգիտակցականը մեկ վայրկյանում մշակում է 11 միլիոն տեղեկատվական կտոր. գիտակից բռնակներ մոտ 40.",
    "textRu": "Ваше подсознание обрабатывает 11 миллионов фрагментов информации в секунду; сознание обрабатывает около 40.",
    "textAz": "Şüursuzluğunuz saniyədə 11 milyon məlumat parçasını emal edir; şüurlu tutacaqlar təxminən 40."
  },
  {
    "id": 12,
    "text": "Missing one night of sleep can impair memory by up to 40%.",
    "textKa": "ერთი ღამის ძილის გამოტოვებამ შეიძლება მეხსიერება 40%-მდე გააუარესოს.",
    "source": "Sleep Research",
    "category": "Memory",
    "icon": "mdi:power-sleep",
    "textHy": "Մեկ գիշեր չքնելը կարող է վատթարանալ հիշողությունը մինչև 40%-ով:",
    "textRu": "Отсутствие сна на одну ночь может ухудшить память до 40%.",
    "textAz": "Bir gecə yuxunu qaçırmaq yaddaşı 40%-ə qədər zəiflədə bilər."
  },
  {
    "id": 13,
    "text": "Mirror neurons fire when you act AND when you watch others act—the basis of empathy.",
    "textKa": "სარკის ნეირონები აქტიურდება, რო჊ მოქმედებთ და რო჊ სხვებს უყურებთ—ემპათიის საფუძველი.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:mirror-variant",
    "textRu": "Зеркальные нейроны активируются, когда вы действуете И когда вы наблюдаете за действиями других — основа эмпатии.",
    "textHy": "Հայելային նեյրոնները կրակում են, երբ դուք գործում եք ԵՎ երբ դիտում եք ուրիշների գործողությունները՝ կարեկցանքի հիմքը:",
    "textAz": "Güzgü neyronları siz hərəkət edəndə və başqalarının hərəkətlərini izlədiyiniz zaman işə düşür - empatiyanın əsasıdır."
  },
  {
    "id": 14,
    "text": "The Stanford Prison Experiment was stopped after 6 days of a planned 2-week run.",
    "textKa": "სტენფორდის ციხის ექსპერიმენტი დაგეგმილი 2 კვირიდან მხოლოდ 6 დღეში შეწყდა.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:shield-alert-outline",
    "textRu": "Стэнфордский тюремный эксперимент был остановлен через 6 дней запланированного двухнедельного эксперимента.",
    "textHy": "Սթենֆորդի բանտային փորձը դադարեցվել է ծրագրված 2-շաբաթյա վազքից 6 օր հետո:",
    "textAz": "Stanford Həbsxana Təcrübəsi 6 günlük planlaşdırılmış 2 həftəlik qaçışdan sonra dayandırıldı."
  },
  {
    "id": 15,
    "text": "Fear of public speaking affects ~75% of people—more common than fear of death.",
    "textKa": "საჯაროდ გამოსვლის შიში ადამიანების ~75%-ს აწუხებს—ის სიკვდილის შიშზე გავრცელებულია.",
    "source": "Clinical Psychology",
    "category": "Anxiety",
    "icon": "mdi:microphone-off",
    "textHy": "Հանրային ելույթից վախը ազդում է մարդկանց մոտ 75%-ի վրա՝ ավելի հաճախ, քան մահվան վախը:",
    "textRu": "Страх публичных выступлений затрагивает около 75% людей — чаще, чем страх смерти.",
    "textAz": "Natiqlik qorxusu insanların ~75%-nə təsir edir - ölüm qorxusundan daha çox."
  },
  {
    "id": 16,
    "text": "Halo effect: Attractive people are rated as more intelligent, kind, and competent.",
    "textKa": "ჰალოს ეფექტი: მიმზიდველ ადამიანებს უფრო გონიერად, კეთილად და კომპეტენტურად აფასებენ.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:star-circle-outline",
    "textRu": "Эффект ореола: привлекательные люди оцениваются как более умные, добрые и компетентные.",
    "textHy": "Հալո էֆեկտ. գրավիչ մարդիկ գնահատվում են որպես ավելի խելացի, բարի և գրագետ:",
    "textAz": "Halo effekti: Cazibədar insanlar daha ağıllı, xeyirxah və bacarıqlı olaraq qiymətləndirilir."
  },
  {
    "id": 17,
    "text": "Oxytocin, released during hugging and bonding, promotes trust and empathy.",
    "textKa": "ოქსიტოცინი, რომელიც გამოიყოფა ჩახუტებისას და მიბმისას, ხელს უწყობს ნდობასა და ემპათიას.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:heart-pulse",
    "textRu": "Окситоцин, выделяемый во время объятий и привязанностей, способствует доверию и сочувствию.",
    "textHy": "Օքսիտոցինը, որն ազատվում է գրկախառնության և կապի ժամանակ, խթանում է վստահությունն ու կարեկցանքը:",
    "textAz": "Qucaqlaşma və bağlanma zamanı ifraz olunan oksitosin inam və empatiya yaradır."
  },
  {
    "id": 18,
    "text": "It takes 1/10th of a second to form a first impression—and they tend to be accurate.",
    "textKa": "პირველი შთაბეჭდილების ჩამოყალიბებას წამის 1/10 სჭირდება—და ისინი ხშირად ზუსტია.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:timer-outline",
    "textHy": "Առաջին տպավորություն ստեղծելու համար անհրաժեշտ է վայրկյանի 1/10-րդ մասը, և դրանք հակված են ճշգրիտ լինելու:",
    "textRu": "Для формирования первого впечатления требуется 1/10 секунды, и оно, как правило, точное.",
    "textAz": "İlk təəssürat yaratmaq üçün saniyənin 1/10 hissəsi lazımdır və onlar dəqiq olmağa meyllidirlər."
  },
  {
    "id": 19,
    "text": "Securely attached children have better relationships and self-esteem in adulthood.",
    "textKa": "უსაფრთხოდ მიბმულ ბავშვებს მოზრდილობაში უკეთესი ურთიერთობები და თვითშეფასება აქვთ.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:human-female-boy",
    "textRu": "У детей с надежной привязанностью во взрослой жизни улучшаются отношения и повышается самооценка.",
    "textHy": "Ապահով կապված երեխաներն ավելի լավ հարաբերություններ և ինքնագնահատական ​​ունեն հասուն տարիքում:",
    "textAz": "Təhlükəsiz bağlanan uşaqlar yetkinlik dövründə daha yaxşı münasibətlərə və özünə hörmətə sahib olurlar."
  },
  {
    "id": 20,
    "text": "Zeigarnik effect: We remember uncompleted tasks better because they stay active in memory.",
    "textKa": "ზეიგარნიკის ეფექტი: დაუსრულებელ დავალებებს უკეთ ვიმახსოვრებთ, რადგან ისინი მეხსიერებაში აქტიური რჩება.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:checkbox-blank-circle-outline",
    "textRu": "Эффект Зейгарник: мы лучше запоминаем незавершенные задачи, потому что они остаются активными в памяти.",
    "textHy": "Զեյգարնիկի էֆեկտ. մենք ավելի լավ ենք հիշում չավարտված առաջադրանքները, քանի որ դրանք ակտիվ են մնում հիշողության մեջ:",
    "textAz": "Zeigarnik effekti: Tamamlanmamış işləri daha yaxşı xatırlayırıq, çünki onlar yaddaşda aktiv qalırlar."
  },
  {
    "id": 21,
    "text": "Synesthesia causes some people to see colors when hearing music or associate numbers with colors.",
    "textKa": "სინესთეზია ზოგიერთ ადამიანს აჯენს ფერებს დაინახოს მუსიკის მოსმენისას ან რიცხვები ფერებთან დააკავშიროს.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:palette-outline",
    "textRu": "Синестезия заставляет некоторых людей видеть цвета, когда они слушают музыку, или ассоциировать числа с цветами.",
    "textHy": "Սինեստեզիան ստիպում է որոշ մարդկանց տեսնել գույները երաժշտություն լսելիս կամ թվերը կապել գույների հետ:",
    "textAz": "Sinesteziya bəzi insanların musiqi eşitdikdə rəngləri görməsinə və ya rəqəmləri rənglərlə əlaqələndirməsinə səbəb olur."
  },
  {
    "id": 22,
    "text": "The brain can't feel pain—brain surgery can be performed while the patient is awake.",
    "textKa": "ტვინს ტკივილის შეგრძნება არ შეუძლია—ტვინის ოპერაცია შეიძლება პაციენტის ფხიზელობისას.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "Мозг не чувствует боли — операцию на головном мозге можно проводить, пока пациент бодрствует.",
    "textHy": "Ուղեղը չի կարող ցավ զգալ. ուղեղի վիրահատությունը կարող է իրականացվել, երբ հիվանդը արթուն է:",
    "textAz": "Beyin ağrı hiss edə bilməz - xəstə oyaq ikən beyin əməliyyatı edilə bilər."
  },
  {
    "id": 23,
    "text": "Humans can detect over 1 trillion distinct smells, far more than previously thought.",
    "textKa": "ადამიანს შეუძლია 1 ტრილიონზე მეტი განსხვავებული სუნის ამოცნობა, გაცილებით მეტი ვიდრე ვიდრე ფიქრობდნენ.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:scent",
    "textRu": "Люди могут различать более 1 триллиона различных запахов — гораздо больше, чем считалось ранее.",
    "textHy": "Մարդիկ կարող են հայտնաբերել ավելի քան 1 տրիլիոն տարբեր հոտեր, շատ ավելին, քան նախկինում ենթադրվում էր:",
    "textAz": "İnsanlar 1 trilyondan çox fərqli qoxunu aşkar edə bilirlər ki, bu da əvvəllər düşünüldüyündən qat-qat çoxdur."
  },
  {
    "id": 24,
    "text": "Cognitive Behavioral Therapy (CBT) is as effective as medication for many anxiety disorders.",
    "textKa": "კოგნიტური-ბიჰევიორალური თერაპია (CBT) ისევე ეფექტურია როგორც მედიკამენტები, ბევრი შფოთვითი აშლილობის მკურნალობისთვის.",
    "source": "Clinical Psychology",
    "category": "Health",
    "icon": "mdi:head-heart-outline",
    "textRu": "Когнитивно-поведенческая терапия (КПТ) столь же эффективна, как и лекарства, при многих тревожных расстройствах.",
    "textHy": "Ճանաչողական վարքագծային թերապիան (CBT) նույնքան արդյունավետ է, որքան դեղորայքը շատ անհանգստության խանգարումների համար:",
    "textAz": "Koqnitiv Davranış Terapiyası (CBT) bir çox narahatlıq pozğunluğu üçün dərman kimi təsirlidir."
  },
  {
    "id": 25,
    "text": "Children learn language at an extraordinary rate—about 10 new words per day between ages 2 and 6.",
    "textKa": "ბავშვები ენას არაჩვეულებრივი ტემპით სწავლობენ—დაახლოებით 10 ახალ სიტყვას დღეში 2-დან 6 წლამდე.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:message-text-outline",
    "textRu": "Дети изучают язык с необычайной скоростью — около 10 новых слов в день в возрасте от 2 до 6 лет.",
    "textHy": "Երեխաները լեզուն սովորում են արտասովոր արագությամբ՝ օրական մոտ 10 նոր բառ 2-ից 6 տարեկանում:",
    "textAz": "Uşaqlar dili qeyri-adi sürətlə öyrənirlər - 2-6 yaş arasında gündə təxminən 10 yeni söz."
  },
  {
    "id": 26,
    "text": "Stockholm syndrome: Hostages may develop emotional bonds with their captors as a survival mechanism.",
    "textKa": "სტოკჰოლმის სინდრომი: მძევლებმა შეიძლება ემოციური კავშირი განავითარონ გამტაცებელთან, როგორც გადარჩენის მექანიზმი.",
    "source": "Clinical Psychology",
    "category": "Social",
    "icon": "mdi:link-variant",
    "textRu": "Стокгольмский синдром: заложники могут развивать эмоциональные связи со своими похитителями как механизм выживания.",
    "textHy": "Ստոկհոլմի համախտանիշ. պատանդները կարող են զարգացնել հուզական կապեր իրենց առևանգողների հետ՝ որպես գոյատևման մեխանիզմ:",
    "textAz": "Stokholm sindromu: Girovlar sağ qalma mexanizmi kimi əsir götürənlərlə emosional bağlar yarada bilər."
  },
  {
    "id": 27,
    "text": "Your brain generates about 12-25 watts of electricity—enough to power a low-wattage LED bulb.",
    "textKa": "თქვენი ტვინი გამოიმუშავებს დაახლოებით 12-25 ვატ ელექტროობას—საკმარისი LED ნათურის გასანათებლად.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:lightbulb-on-outline",
    "textRu": "Ваш мозг генерирует около 12–25 Вт электроэнергии — этого достаточно для питания маломощной светодиодной лампы.",
    "textHy": "Ձեր ուղեղը արտադրում է մոտ 12-25 վտ էլեկտրաէներգիա, ինչը բավարար է ցածր հզորությամբ LED լամպը սնուցելու համար:",
    "textAz": "Beyniniz təxminən 12-25 vatt elektrik enerjisi istehsal edir ki, bu da aşağı vattlı bir LED lampanı işə salmaq üçün kifayətdir."
  },
  {
    "id": 28,
    "text": "Multitasking reduces productivity by up to 40%—your brain rapidly switches, not truly parallel-processes.",
    "textKa": "მულტიტასკინგი პროდუქტიულობას 40%-ით ამცირებს—ტვინი სწრაფად გადართავს, და არ პარალელურად ამუშავებს.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:swap-horizontal-circle-outline",
    "textRu": "Многозадачность снижает производительность до 40 % — ваш мозг быстро переключается, а не выполняет по-настоящему параллельные процессы.",
    "textHy": "Բազմաֆունկցիոնալությունը նվազեցնում է արտադրողականությունը մինչև 40%-ով. ձեր ուղեղը արագորեն փոխվում է, այլ ոչ թե իրականում զուգահեռ գործընթացներ:",
    "textAz": "Multitasking məhsuldarlığı 40%-ə qədər azaldır - beyniniz həqiqətən paralel proseslər deyil, sürətlə dəyişir."
  },
  {
    "id": 29,
    "text": "Laughter is 30 times more likely in social situations than when alone—it's primarily social.",
    "textKa": "სიცილი 30-ჯერ უფრო ხშირია სოციალურ სიტუაციებში ვიდრე მარტოობისას—ის უპირველესად სოციალური ფენომენია.",
    "source": "Social Psychology",
    "category": "Emotion",
    "icon": "mdi:emoticon-lol-outline",
    "textRu": "Смех в 30 раз чаще встречается в социальных ситуациях, чем в одиночестве — он в первую очередь социальный.",
    "textHy": "Ծիծաղը 30 անգամ ավելի հավանական է սոցիալական իրավիճակներում, քան միայնակ ժամանակ. դա հիմնականում սոցիալական է:",
    "textAz": "Gülüş sosial vəziyyətlərdə tək olandan 30 dəfə çox olur - bu, ilk növbədə sosialdır."
  },
  {
    "id": 30,
    "text": "The serial position effect: We best remember the first and last items in a list.",
    "textKa": "სერიული პოზიციის ეფექტი: სიის პირველ და ბოლო ელემენტებს საუკეთესოდ ვიმახსოვრებთ.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:format-list-numbered",
    "textRu": "Эффект последовательного положения: мы лучше всего запоминаем первый и последний элементы списка.",
    "textHy": "Սերիական դիրքի էֆեկտ. Մենք լավագույնս հիշում ենք ցուցակի առաջին և վերջին կետերը:",
    "textAz": "Serial mövqe effekti: Siyahıdakı ilk və son elementləri yaxşı xatırlayırıq."
  },
  {
    "id": 31,
    "text": "Bilingual people may delay the onset of dementia by an average of 4-5 years.",
    "textKa": "ორენოვანი ადამიანები დემენციის დაწყებას საშუალოდ 4-5 წლით აგვიანებენ.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:translate",
    "textRu": "Двуязычные люди могут отсрочить начало деменции в среднем на 4-5 лет.",
    "textHy": "Երկլեզու մարդիկ կարող են հետաձգել դեմենցիայի առաջացումը միջինը 4-5 տարով։",
    "textAz": "İkidilli insanlar demansın başlanğıcını orta hesabla 4-5 il gecikdirə bilər."
  },
  {
    "id": 32,
    "text": "Emotional memories are stored more vividly because the amygdala strengthens the memory trace.",
    "textKa": "ემოციური მოგონებები უფრო ნათლად ინახება, რადგან ამიგდალა აძლიერებს მეხსიერების კვალს.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:heart-flash",
    "textRu": "Эмоциональные воспоминания сохраняются более ярко, потому что миндалевидное тело усиливает след памяти.",
    "textHy": "Զգացմունքային հիշողություններն ավելի վառ են պահվում, քանի որ ամիգդալան ամրացնում է հիշողության հետքը:",
    "textAz": "Duygusal xatirələr daha canlı saxlanılır, çünki amigdala yaddaş izini gücləndirir."
  },
  {
    "id": 33,
    "text": "Sleep deprivation for just 17 hours impairs cognitive function as much as a blood alcohol level of 0.05%.",
    "textKa": "17 საათიანი ძილის დეფიციტი კოგნიტურ ფუნქციას ისე აუარესებს, როგორც სისხლში ალკოჰოლის დონე 0.05%.",
    "source": "Sleep Research",
    "category": "Health",
    "icon": "mdi:weather-night",
    "textRu": "Лишение сна всего на 17 часов ухудшает когнитивные функции так же, как уровень алкоголя в крови 0,05%.",
    "textHy": "Քնի պակասը ընդամենը 17 ժամվա ընթացքում խաթարում է ճանաչողական ֆունկցիան այնքան, որքան արյան մեջ ալկոհոլի մակարդակը 0,05%:",
    "textAz": "Cəmi 17 saat yuxudan məhrum olmaq idrak funksiyasını qanda 0,05% spirt səviyyəsi qədər zəiflədir."
  },
  {
    "id": 34,
    "text": "Phobias can be inherited—studies show fear responses can be passed through epigenetic changes.",
    "textKa": "ფობიები შეიძლება მემკვიდრეობით გადაიცეს—კვლევები აჩვენებს, რომ შიშის რეაქციები ეპიგენეტიკური ცვლილებებით გადაეცემა.",
    "source": "Biological Psychology",
    "category": "Anxiety",
    "icon": "mdi:spider-thread",
    "textRu": "Фобии могут передаваться по наследству: исследования показывают, что реакции страха могут передаваться через эпигенетические изменения.",
    "textHy": "Ֆոբիաները կարող են ժառանգական լինել. ուսումնասիրությունները ցույց են տալիս, որ վախի արձագանքները կարող են փոխանցվել էպիգենետիկ փոփոխությունների միջոցով:",
    "textAz": "Fobiyalar irsi ola bilər - tədqiqatlar göstərir ki, qorxu reaksiyaları epigenetik dəyişikliklərdən keçə bilər."
  },
  {
    "id": 35,
    "text": "The peak-end rule: We judge experiences mainly by their most intense moment and their ending.",
    "textKa": "პიკისა და დასასრულის წესი: გამოცდილებებს ვაფასებთ ძირითადად მათი ყველაზე ინტენსიური მომენტითა და დასასრულით.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-timeline-variant-shimmer",
    "textRu": "Правило пика-конца: мы судим о переживаниях главным образом по наиболее напряженным моментам и их окончанию.",
    "textHy": "Պիկ վերջի կանոնը.",
    "textAz": "Pik-end qaydası: Biz təcrübələri əsasən onların ən gərgin anına və bitməsinə görə qiyməexport const STORIES: Story[] = [
  {
    "id": 1,
    "title": "Pavlov's Accidental Discovery",
    "titleKa": "პავლოვის შემთხვევითი აღმოჩენა",
    "chapterId": 6,
    "icon": "mdi:bell-ring-outline",
    "content": "In the 1890s, Russian physiologist Ivan Pavlov was conducting research on the digestive systems of dogs at the Institute of Experimental Medicine in St. Petersburg. His work was meticulous—he had surgically implanted tubes in dogs' cheeks to precisely measure saliva output when food was presented.\n\nBut something unexpected kept disrupting his carefully controlled experiments. The dogs began salivating before any food appeared. They drooled when they heard the footsteps of the lab assistant. They salivated at the sight of the food bowl, or even when they heard the door open.\n\nRather than dismissing this as a nuisance, Pavlov recognized he had stumbled upon something extraordinary. He called these premature responses \"psychic secretions\" and redesigned his entire research program to study them.\n\nPavlov began systematically pairing a neutral stimulus—a metronome (often misremembered as a bell)—with the presentation of food. After repeated pairings, the dogs would salivate at the sound of the metronome alone, with no food in sight.\n\nHe documented the entire process with scientific rigor: acquisition (learning the association), extinction (unlearning it when food stops coming), spontaneous recovery (the response returning after a rest period), and generalization (responding to similar sounds).\n\nThis accidental discovery became the foundation of classical conditioning and earned Pavlov the Nobel Prize in Physiology in 1904. His work influenced generations of psychologists, from John Watson to modern neuroscientists studying how the brain forms associations.",
    "contentKa": "1890-იან წლებში, რუსი ფიზიოლოგი ივან პავლოვი ძაღლების საჭმლის სისტემას იკვლევდა სანკტ-პეტერბურგში. მან შენიშნა, რომ ძაღლები საკვებს დაიწყებდნენ საკვების გარეშე჊ — ლაბორანტის ნაბიჯების გაგონისას. პავლოვმა ამაში მეტრონომის ხმა საკვებს დაუკავშირა და აღმოაჩინა კლასიკური განპირობება.",
    "moral": "Great discoveries emerge when curious minds pay attention to the unexpected. Pavlov could have ignored the dogs' early salivation, but instead he asked \"why?\" and changed psychology forever.",
    "moralKa": "დიდი აღმოჩენები იბადება, რო჊ ცნობისმოყვარე გონება ყურადღებას მოულოდნელს მიაქცევს.",
    "moralHy": "Մեծ բացահայտումներ են առաջանում, երբ հետաքրքրասեր մտքերը ուշադրություն են դարձնում անսպասելիին: Պավլովը կարող էր անտեսել շների վաղ թքելը, բայց փոխարենը հարցրեց՝ «ինչո՞ւ»։ և ընդմիշտ փոխեց հոգեբանությունը:",
    "contentAz": "1890-cı illərdə rus fizioloqu İvan Pavlov Sankt-Peterburqdakı Eksperimental Tibb İnstitutunda itlərin həzm sistemləri ilə bağlı tədqiqatlar aparırdı. Onun işi vasvası idi - yemək təqdim olunan zaman tüpürcək ifrazını dəqiq ölçmək üçün itlərin yanaqlarına cərrahi yolla borular yerləşdirmişdi.\n\nLakin gözlənilməz bir şey onun diqqətlə idarə olunan təcrübələrini pozmağa davam etdi. Hər hansı bir qida görünməzdən əvvəl itlər tüpürcəyə başladılar. Laborantın ayaq səslərini eşidəndə ağızları sulandı. Yemək qabını görəndə, hətta qapının açıldığını eşidəndə tüpürcək axırdılar.\n\nPavlov bunu bir narahatlıq kimi rədd etmək əvəzinə, qeyri-adi bir şeylə qarşılaşdığını başa düşdü. O, bu erkən cavabları \"psixik ifrazatlar\" adlandırdı və onları öyrənmək üçün bütün tədqiqat proqramını yenidən dizayn etdi.\n\nPavlov sistematik olaraq neytral stimulu - metronomu (çox vaxt zəng kimi xatırlanır) yeməyin təqdimatı ilə birləşdirməyə başladı. Təkrarlanan cütləşmələrdən sonra itlər yalnız metronomun səsinə tüpürcək tökürdülər, heç bir yemək görünmürdü.\n\nO, bütün prosesi elmi ciddiliklə sənədləşdirdi: əldə etmə (assosiasiyanı öyrənmək), məhv olma (yemək gəlməyi dayandırdıqda onu öyrənmə), spontan bərpa (istirahət müddətindən sonra geri qayıdan reaksiya) və ümumiləşdirmə (oxşar səslərə cavab).\n\nBu təsadüfi kəşf klassik kondisionerin təməli oldu və Pavlova 1904-cü ildə Fiziologiya üzrə Nobel Mükafatı qazandırdı. Onun işi Con Uotsondan tutmuş beynin assosiasiyaları necə formalaşdırdığını öyrənən müasir nevroloqlara qədər psixoloqların nəsillərinə təsir etdi.",
    "titleAz": "Pavlovun təsadüfən kəşfi",
    "moralAz": "Maraqlı beyinlər gözlənilməzlərə diqqət yetirdikdə böyük kəşflər ortaya çıxır. Pavlov itlərin erkən tüpürcək ifrazına məhəl qoymaya bilərdi, amma bunun əvəzinə \"niyə?\" və psixologiyanı həmişəlik dəyişdi.",
    "titleRu": "Случайное открытие Павлова",
    "contentHy": "1890-ական թվականներին ռուս ֆիզիոլոգ Իվան Պավլովը Սանկտ Պետերբուրգի Էքսպերիմենտալ բժշկության ինստիտուտում ուսումնասիրություններ էր կատարում շների մարսողական համակարգերի վերաբերյալ: Նրա աշխատանքը բծախնդիր էր. նա վիրաբուժական խողովակներ էր տեղադրել շների այտերին՝ սննդի մատուցման ժամանակ թքի արտազատումը ճշգրիտ չափելու համար:\n\nԲայց ինչ-որ անսպասելի բան շարունակում էր խանգարել նրա մանրակրկիտ վերահսկվող փորձերը: Շները սկսել են թուք արտահոսել նախքան սննդի հայտնվելը: Երբ լսեցին լաբորանտի ոտնաձայները, նրանք թուլացան։ Սննդի ամանի տեսնելուց կամ նույնիսկ երբ լսում էին դռան բացումը, նրանք թքացրին։\n\nՍա անհանգստություն համարելու փոխարեն Պավլովը հասկացավ, որ պատահաբար ինչ-որ արտասովոր բանի է հանդիպել: Նա այս վաղաժամ արձագանքներն անվանեց «հոգեկան սեկրեցներ» և վերամշակեց իր ամբողջ հետազոտական ​​ծրագիրը՝ դրանք ուսումնասիրելու համար:\n\nՊավլովը սկսեց համակարգված կերպով զուգակցել չեզոք գրգռիչը՝ մետրոնոմը (հաճախ սխալ է հիշվում որպես զանգ)՝ սննդի ներկայացման հետ: Բազմիցս զուգավորումներից հետո շները թք էին գալիս մենակ մետրոնոմի ձայնից՝ առանց կերակուրի:\n\nՆա փաստագրեց ողջ գործընթացը գիտական ​​խստությամբ՝ ձեռքբերում (սովորելով ասոցիացիան), վերացում (չսովորել այն, երբ սնունդը դադարում է գալ), ինքնաբուխ վերականգնում (հանգստի շրջանից հետո վերադառնում է պատասխան) ​​և ընդհանրացում (արձագանքելով նմանատիպ հնչյուններին):\n\nԱյս պատահական հայտնագործությունը դարձավ դասական կոնդիցիոներների հիմքը և Պավլովին 1904 թվականին ստացավ Նոբելյան մրցանակ ֆիզիոլոգիայի ոլորտում: Նրա աշխատանքը ազդեց հոգեբանների սերունդների վրա՝ Ջոն Ուոթսոնից մինչև ժամանակակից նյարդաբաններ, որոնք ուսումնասիրում էին, թե ինչպես է ուղեղը ձևավորում ասոցիացիաները:",
    "moralRu": "Великие открытия происходят, когда любознательные умы обращают внимание на неожиданное. Павлов мог бы не обращать внимания на раннее слюноотделение у собак, но вместо этого спросил: «Почему?» и навсегда изменил психологию.",
    "titleHy": "Պավլովի պատահական հայտնագործությունը",
    "contentRu": "В 1890-е годы русский физиолог Иван Павлов проводил исследования пищеварительной системы собак в Институте экспериментальной медицины в Петербурге. Его работа была кропотливой: он хирургическим путем вживлял в щеки собак трубки для точного измерения выделения слюны при подаче еды.\n\nНо что-то неожиданное постоянно мешало его тщательно контролируемым экспериментам. У собак началось выделение слюны еще до того, как появилась еда. У них потекли слюни, когда они услышали шаги лаборанта. У них выделялась слюна при виде миски с едой или даже когда они слышали, как открывается дверь.\n\nВместо того чтобы счесть это неприятностью, Павлов признал, что наткнулся на нечто необычное. Он назвал эти преждевременные реакции «психическими выделениями» и перепроектировал всю свою исследовательскую программу для их изучения.\n\nПавлов начал систематически сочетать нейтральный стимул — метроном (часто ошибочно воспринимаемый как колокольчик) — с представлением еды. После повторных спариваний у собак выделялась слюна только от звука метронома, а еды не было видно.\n\nОн задокументировал весь процесс с научной строгостью: приобретение (обучение ассоциации), угасание (отмена ее, когда еда перестает поступать), спонтанное восстановление (реакция, возвращающаяся после периода отдыха) и генерализация (реакция на похожие звуки).\n\nЭто случайное открытие стало основой классической обусловленности и принесло Павлову Нобелевскую премию по физиологии в 1904 году. Его работа повлияла на поколения психологов, от Джона Ватсона до современных нейробиологов, изучающих, как мозг формирует ассоциации."
  },
  {
    "id": 2,
    "title": "The Story of Phineas Gage",
    "titleKa": "ფინეას გეიჯის ისტორია",
    "chapterId": 3,
    "icon": "fluent:brain-circuit-20-filled",
    "content": "On September 13, 1848, 25-year-old Phineas Gage was working as a railroad construction foreman in Cavendish, Vermont. His crew was blasting rock to clear a path for new rail tracks. Gage's job was to pack explosive powder into drilled holes using a specially made iron tamping rod—43 inches long, 1.25 inches in diameter, and weighing over 13 pounds.\n\nIn a moment of distraction—perhaps he turned to speak to a colleague—Gage struck the iron rod against the rock before sand had been poured as a buffer. The powder ignited. The explosion launched the iron rod like a missile straight through his skull, entering below his left cheekbone and exiting through the top of his head, landing 80 feet away.\n\nAstonishingly, Gage did not die. He was conscious within minutes, able to walk and talk. The local physician, Dr. John Harlow, treated the gruesome wound. Gage physically recovered over the following months, but something fundamental had changed.\n\nBefore the accident, Gage was described as reliable, well-balanced, and a shrewd businessman—\"the most efficient and capable foreman.\" Afterward, his personality was unrecognizable. He became profane, impulsive, disrespectful, and unable to follow through on plans. Friends said he was \"no longer Gage.\"\n\nHis case became one of the most important in neuroscience history. It provided the first strong evidence that specific brain regions—particularly the prefrontal cortex—are responsible for personality, decision-making, and social behavior. Modern neuroimaging has confirmed the rod destroyed much of his left frontal lobe, especially areas involved in emotional regulation and planning.",
    "contentKa": "1848 წელს, ფინეას გეიჯი რკინიგზის მშენებლობის ოსტატი იყო. აფეთქებისას რკინის ღერძი მის თავის ქალაში შევიდა და თავის ზემოდან გამოვიდა. გეიჯი გადარჩა, მაგრამ მისი პიროვნება სრულიად შეიცვალა. ეს შემთხვევა ნეირომეცნიერების ისტორიაში ერთ-ერთი ყველაზე მნიშვნელოვანი გახდა.",
    "moral": "The brain is the seat of personality—damage to specific areas transforms who we are. Gage's case taught us that our sense of self is rooted in biology.",
    "moralKa": "ტვინი პიროვნების სადგურია—კონკრეტული უბნების დაზიანება გვაქ჊ევს სხვა ადამიანებად.",
    "moralAz": "Beyin şəxsiyyətin oturacağıdır - xüsusi sahələrə ziyan vurmaq bizim kim olduğumuzu dəyişir. Gage-in işi bizə öyrətdi ki, mənlik duyğumuz biologiyadan qaynaqlanır.",
    "titleHy": "Ֆինեաս Գեյջի պատմությունը",
    "moralHy": "Ուղեղը անհատականության նստավայրն է. որոշակի տարածքների վնասը փոխում է մեր ով լինելը: Գեյջի դեպքը մեզ սովորեցրեց, որ մեր ինքնազգացողությունը արմատացած է կենսաբանության մեջ:",
    "moralRu": "Мозг — это вместилище личности: повреждение определенных областей меняет то, кем мы являемся. Случай Гейджа научил нас тому, что наше самоощущение коренится в биологии.",
    "titleRu": "История Финеаса Гейджа",
    "contentHy": "1848 թվականի սեպտեմբերի 13-ին 25-ամյա Ֆինես Գեյջը աշխատում էր որպես երկաթուղու շինարարության վարպետ Վերմոնտ նահանգի Քավենդիշ քաղաքում: Նրա անձնակազմը պայթեցնում էր ժայռերը՝ նոր երկաթուղային գծերի համար ճանապարհ բացելու համար: Գեյջի գործն էր պայթուցիկ փոշի փաթեթավորել փորված անցքերի մեջ՝ օգտագործելով հատուկ պատրաստված երկաթե սեղմող ձող՝ 43 դյույմ երկարությամբ, 1,25 դյույմ տրամագծով և 13 ֆունտից ավելի քաշով:\n\nՈւշադրությունը շեղված մի պահի, երևի թե նա շրջվեց, որպեսզի խոսի գործընկերոջ հետ, Գեյջը երկաթե ձողը հարվածեց ժայռին, նախքան ավազը լցնելը որպես բուֆեր: Փոշը բռնկվեց։ Պայթյունը հրթիռի պես երկաթե ձողը արձակեց ուղիղ նրա գանգի միջով, մտնելով ձախ այտոսկրի տակ և դուրս գալով գլխի վերևից՝ վայրէջք կատարելով 80 ոտնաչափ հեռավորության վրա:\n\nԶարմանալի է, որ Գեյջը չի մահացել։ Նա ուշագնաց էր րոպեների ընթացքում, կարողանում էր քայլել և խոսել: Սարսափելի վերքը բուժել է տեղի բժիշկը՝ բժիշկ Ջոն Հարլոուն։ Գեյջը ֆիզիկապես վերականգնվեց հաջորդ ամիսների ընթացքում, բայց ինչ-որ հիմնարար բան փոխվեց:\n\nԴժբախտ պատահարից առաջ Գեյջին նկարագրում էին որպես վստահելի, հավասարակշռված և խորաթափանց գործարար՝ «ամենաարդյունավետ և ընդունակ վարպետ»: Հետո նրա անձը անճանաչելի էր։ Նա դարձավ սրբապիղծ, իմպուլսիվ, անհարգալից և չկարողացավ իրականացնել պլանները: Ընկերներն ասացին, որ նա «այլևս Գեյջը չէ»:\n\nՆրա գործը դարձավ ամենակարևորներից մեկը նյարդագիտության պատմության մեջ: Այն տրամադրեց առաջին ամուր ապացույցն այն մասին, որ ուղեղի հատուկ շրջանները, հատկապես նախաճակատային կեղևը, պատասխանատու են անհատականության, որոշումների կայացման և սոցիալական վարքագծի համար: Ժամանակակից նեյրոպատկերումը հաստատել է, որ ձողը ոչնչացրել է նրա ձախ ճակատային բլթի մեծ մասը, հատկապես այն հատվածները, որոնք ներգրավված են հուզական կարգավորման և պլանավորման մեջ:",
    "contentRu": "13 сентября 1848 года 25-летний Финеас Гейдж работал бригадиром на строительстве железной дороги в Кавендише, штат Вермонт. Его команда взрывала камни, чтобы расчистить путь для новых железнодорожных путей. Работа Гейджа заключалась в том, чтобы засыпать взрывчатый порошок в просверленные отверстия с помощью специально изготовленного железного трамбовочного стержня длиной 43 дюйма, диаметром 1,25 дюйма и весом более 13 фунтов.\n\nВ момент отвлечения — возможно, он повернулся, чтобы поговорить с коллегой, — Гейдж ударил железным стержнем о камень, прежде чем в качестве буфера был насыпан песок. Порошок загорелся. В результате взрыва железный стержень, как ракета, попал прямо ему в череп, вошёл под левую скулу и вышел через макушку головы, приземлившись на расстоянии 80 футов.\n\nУдивительно, но Гейдж не умер. Через несколько минут он пришел в сознание, мог ходить и говорить. Местный врач, доктор Джон Харлоу, обработал ужасную рану. Гейдж физически выздоровел в течение следующих месяцев, но что-то фундаментальное изменилось.\n\nДо аварии Гейджа описывали как надежного, уравновешенного и проницательного бизнесмена — «самого эффективного и способного мастера». После этого его личность стала неузнаваемой. Он стал нечестивцем, импульсивным, неуважительным и неспособным довести до конца свои планы. Друзья сказали, что он «больше не Гейдж».\n\nЕго случай стал одним из самых важных в истории нейробиологии. Это стало первым убедительным доказательством того, что определенные области мозга, особенно префронтальная кора, отвечают за личность, принятие решений и социальное поведение. Современная нейровизуализация подтвердила, что стержень разрушил большую часть его левой лобной доли, особенно области, участвующие в эмоциональной регуляции и планировании.",
    "titleAz": "Phineas Gage-nin Hekayəsi",
    "contentAz": "13 sentyabr 1848-ci ildə 25 yaşlı Phineas Gage Vermont ştatının Cavendish şəhərində dəmir yolu tikintisi üzrə usta işləyirdi. Onun ekipajı yeni dəmir yolu relsləri üçün cığır açmaq üçün qaya partladıb. Gage-nin işi xüsusi hazırlanmış dəmir çubuqdan istifadə edərək qazılmış deliklərə partlayıcı toz yığmaq idi - 43 düym uzunluğunda, 1,25 düym diametrdə və 13 funtdan çox ağırlığında.\n\nDiqqətinin dağıldığı bir anda – bəlkə də həmkarı ilə danışmaq üçün çevrildi – Qeyc bufer kimi qum tökülməmişdən əvvəl dəmir çubuğu qayaya vurdu. Toz alovlandı. Partlayış dəmir çubuğu mərmi kimi birbaşa kəllə sümüyündən atıb, sol yanaq sümüyünün altına girib başının yuxarı hissəsindən çıxıb, 80 fut uzaqlığa düşüb.\n\nTəəccüblüdür ki, Gage ölmədi. Bir neçə dəqiqə ərzində huşunu itirdi, yeriyə və danışa bildi. Yerli həkim, doktor Con Harlou dəhşətli yaranı müalicə etdi. Qeyc sonrakı aylarda fiziki cəhətdən sağaldı, lakin əsaslı bir şey dəyişdi.\n\nQəzadan əvvəl Gage etibarlı, balanslı və fərasətli iş adamı - \"ən səmərəli və bacarıqlı usta\" kimi təsvir edilmişdir. Bundan sonra onun şəxsiyyəti tanınmaz hala gəldi. O, murdar, impulsiv, hörmətsiz oldu və planlarını yerinə yetirə bilmədi. Dostları onun \"artıq Gage olmadığını\" söylədilər.\n\nOnun işi nevrologiya tarixinin ən mühüm hadisələrindən birinə çevrildi. Bu, xüsusi beyin bölgələrinin, xüsusən də prefrontal korteksin şəxsiyyət, qərar qəbul etmə və sosial davranış üçün cavabdeh olduğuna dair ilk güclü sübut təqdim etdi. Müasir neyroimaging çubuqun onun sol frontal hissəsinin çox hissəsini, xüsusən də emosional tənzimləmə və planlaşdırma ilə məşğul olan sahələri məhv etdiyini təsdiqlədi."
  },
  {
    "id": 3,
    "title": "Little Albert and the White Rat",
    "titleKa": "პატარა ალბერტი და თეთრი ვირთხა",
    "chapterId": 6,
    "icon": "mdi:emoticon-cry-outline",
    "content": "In 1920, John B. Watson and Rosalie Rayner conducted one of psychology's most controversial experiments at Johns Hopkins University. Their subject was a 9-month-old infant known as \"Little Albert.\"\n\nAlbert was described as a healthy, stable baby who showed no fear of animals. Watson and Rayner presented him with a white laboratory rat, and Albert reached for it with curiosity and delight. He showed the same calm response to a rabbit, a dog, a monkey, masks, and even burning newspapers.\n\nThen the conditioning began. Each time Albert reached for the white rat, Watson struck a steel bar with a hammer directly behind the infant's head, producing a terrifying noise. Albert burst into tears.\n\nAfter just seven pairings of the rat with the loud noise, Albert's behavior had fundamentally changed. Now, the mere sight of the white rat—without any noise—caused him to cry, crawl away rapidly, and show visible distress.\n\nMore remarkably, his fear generalized. Albert became afraid of a rabbit, a dog, a fur coat, a Santa Claus mask with a white beard, and even cotton wool. Anything white and furry triggered the same terror.\n\nWatson and Rayner never \"unconditioned\" Albert's fear. The experiment was stopped when Albert's mother, a wet nurse at the hospital, left with her child. Albert's true identity remained a mystery for decades. Recent research suggests he was Douglas Merritte, who sadly died of hydrocephalus at age six.\n\nThe experiment proved that emotional responses can be learned through classical conditioning. But it also raised profound ethical questions that eventually led to strict research protections for human subjects.",
    "contentKa": "1920 წელს, ჯონ უოტსონმა და როზალი რეინერმა ჩაატარეს ერთ-ერთი ყველაზე საკამათო ექსპერიმენტი. მათ 9 თვის ჩვილს თეთრი ვირთხა აჩვენეს ხმამაულ საშინელ ხმასთან ერთად. 7 დაწყვილების შემდეგ, ალბერტი ვირთხას ხედავდა ხმის გარეშე჊. ეს ექსპერიმენტი ამტკიცებდა, რომ ემოციები შეიძლება სწავლა.",
    "moral": "Fears can be learned through association. This historic experiment also taught us the importance of ethical guidelines in research.",
    "moralKa": "შიშები შეიძლება ასოციაციით სწავლა. ეს ექსპერიმენტი ეთიკური წესების მნიშვნელობასაც გვასწავლა.",
    "moralHy": "Վախերը կարելի է սովորել ընկերակցության միջոցով: Այս պատմական փորձը նաև մեզ սովորեցրեց հետազոտության մեջ էթիկական ուղեցույցների կարևորությունը:",
    "contentHy": "1920թ.-ին Ջոն Բ. Նրանց առարկան 9 ամսական երեխա էր, որը հայտնի էր որպես «Փոքրիկ Ալբերտ»:\n\nԱլբերտը նկարագրվում էր որպես առողջ, կայուն երեխա, ով չէր վախենում կենդանիներից: Ուոթսոնն ու Ռեյները նրան սպիտակ լաբորատոր առնետ նվիրեցին, իսկ Ալբերտը հետաքրքրությամբ ու հրճվանքով ձեռքը մեկնեց նրան։ Նույն հանգիստ արձագանքը նա ցույց տվեց ճագարին, շանը, կապիկին, դիմակներին և նույնիսկ այրվող թերթերին։\n\nՀետո սկսվեց պայմանավորումը։ Ամեն անգամ, երբ Ալբերտը հասնում էր սպիտակ առնետին, Ուոթսոնը մուրճով հարվածում էր պողպատե ձողին անմիջապես երեխայի գլխի հետևում՝ առաջացնելով սարսափելի աղմուկ: Ալբերտը լաց եղավ։\n\nԸնդամենը յոթ զույգ առնետի բարձր աղմուկից հետո Ալբերտի պահվածքը հիմնովին փոխվել էր։ Այժմ սպիտակ առնետի միայն տեսարանը՝ առանց որևէ աղմուկի, ստիպեց նրան լաց լինել, արագ սողալով հեռանալ և տեսանելի անհանգստություն ցույց տալ։\n\nԱվելի ուշագրավ է, որ նրա վախն ընդհանրացավ։ Ալբերտը վախեցավ նապաստակից, շնից, մուշտակից, սպիտակ մորուքով Ձմեռ պապի դիմակից և նույնիսկ բամբակյա բուրդից։ Ցանկացած սպիտակ և մորթե բան առաջացրել է նույն սարսափը:\n\nՈւոթսոնն ու Ռեյները երբեք «անվերապահ» ​​չեն արել Ալբերտի վախը։ Փորձը դադարեցվեց, երբ Ալբերտի մայրը՝ հիվանդանոցի թաց բուժքույրը, հեռացավ իր երեխայի հետ։ Ալբերտի իրական ինքնությունը տասնամյակներ շարունակ առեղծված մնաց: Վերջին հետազոտությունները ցույց են տալիս, որ նա Դուգլաս Մերիտն էր, որը, ցավոք, մահացել է հիդրոցեֆալուսից վեց տարեկանում:\n\nՓորձը ապացուցեց, որ հուզական արձագանքները կարելի է սովորել դասական պայմանավորման միջոցով: Բայց այն նաև բարձրացրեց խորը բարոյական հարցեր, որոնք ի վերջո հանգեցրին մարդկային սուբյեկտների խիստ հետազոտական ​​պաշտպանությանը:",
    "titleAz": "Balaca Albert və Ağ Siçovul",
    "moralAz": "Qorxular birləşmə yolu ilə öyrənilə bilər. Bu tarixi təcrübə bizə tədqiqatda etik qaydaların vacibliyini də öyrətdi.",
    "titleRu": "Маленький Альберт и Белая Крыса",
    "moralRu": "Страхам можно научиться через ассоциации. Этот исторический эксперимент также научил нас важности этических принципов в исследованиях.",
    "titleHy": "Փոքրիկ Ալբերտը և Սպիտակ առնետը",
    "contentRu": "В 1920 году Джон Б. Уотсон и Розали Рейнер провели один из самых противоречивых экспериментов в области психологии в Университете Джона Хопкинса. Их объектом был 9-месячный ребенок, известный как «Маленький Альберт».\n\nАльберта описывали как здорового, стабильного ребенка, который не боялся животных. Уотсон и Рейнер подарили ему белую лабораторную крысу, и Альберт с любопытством и восторгом потянулся за ней. Он одинаково спокойно реагировал на кролика, собаку, обезьяну, маски и даже горящие газеты.\n\nПотом началось кондиционирование. Каждый раз, когда Альберт тянулся к белой крысе, Ватсон ударял молотком по стальному стержню прямо за головой младенца, производя ужасающий шум. Альберт расплакался.\n\nВсего после семи спариваний крыс с громким шумом поведение Альберта коренным образом изменилось. Теперь один лишь вид белой крысы – без всякого шума – заставлял его плакать, быстро уползать и проявлять видимое беспокойство.\n\nЧто еще более примечательно, его страх распространился. Альберт стал бояться кролика, собаки, шубы, маски Деда Мороза с белой бородой и даже ваты. Все белое и пушистое вызывало тот же ужас.\n\nУотсон и Рейнер никогда не «обезусловливали» страх Альберта. Эксперимент был остановлен, когда мать Альберта, кормилица в больнице, ушла с ребенком. Настоящая личность Альберта оставалась загадкой на протяжении десятилетий. Недавние исследования показывают, что это был Дуглас Мерритт, который, к сожалению, умер от гидроцефалии в возрасте шести лет.\n\nЭксперимент доказал, что эмоциональным реакциям можно научиться с помощью классической обусловленности. Но это также подняло глубокие этические вопросы, которые в конечном итоге привели к строгой защите исследований на людях.",
    "contentAz": "1920-ci ildə John B. Watson və Rosalie Rayner Con Hopkins Universitetində psixologiyanın ən mübahisəli təcrübələrindən birini həyata keçirdilər. Onların mövzusu \"Balaca Albert\" kimi tanınan 9 aylıq körpə idi.\n\nAlbert heyvanlardan qorxmayan sağlam, sabit bir körpə kimi təsvir edilmişdir. Watson və Rayner ona ağ laboratoriya siçovulunu təqdim etdi və Albert maraq və zövqlə ona çatdı. Dovşana, itə, meymuna, maskalara, hətta yanan qəzetlərə də eyni sakit cavabı göstərdi.\n\nSonra kondisioner başladı. Albert hər dəfə ağ siçovula çatanda, Uotson körpənin başının arxasındakı çəkiclə polad çubuqla vurur və dəhşətli səs çıxarırdı. Albert göz yaşlarına boğuldu.\n\nYüksək səs-küylə siçovulların cəmi yeddi cütləşməsindən sonra Albertin davranışı kökündən dəyişdi. İndi ağ siçovulun sadəcə görünüşü - heç bir səs-küy olmadan - onun ağlamasına, sürətlə sürünməsinə və görünən sıxıntı göstərməsinə səbəb oldu.\n\nDaha maraqlısı, onun qorxusu ümumiləşdi. Albert dovşandan, itdən, xəz paltodan, ağ saqqallı Şaxta baba maskasından, hətta pambıq yundan qorxmağa başladı. Ağ və tüklü hər şey eyni qorxuya səbəb olurdu.\n\nWatson və Rayner heç vaxt Albertin qorxusunu \"şərtsiz\" qoymurlar. Xəstəxanada yaş tibb bacısı olan Albertin anası uşağı ilə birlikdə getdikdə təcrübə dayandırıldı. Albertin əsl şəxsiyyəti onilliklər ərzində sirr olaraq qaldı. Son araşdırmalar onun 6 yaşında hidrosefalidən vəfat edən Douglas Merritte olduğunu göstərir.\n\nTəcrübə sübut etdi ki, emosional reaksiyalar klassik kondisioner vasitəsilə öyrənilə bilər. Lakin bu, həm də dərin etik suallar doğurdu ki, nəticədə insan subyektləri üçün ciddi tədqiqat qorunmasına səbəb oldu."
  },
  {
    "id": 4,
    "title": "The Invisible Gorilla",
    "titleKa": "უხილავი გორილა",
    "chapterId": 4,
    "icon": "mdi:eye-off-outline",
    "content": "In 1999, psychologists Daniel Simons and Christopher Chabris designed an experiment that would challenge our most basic assumptions about awareness. They asked participants to watch a short video of six people—three in white shirts, three in black—passing basketballs to each other.\n\nThe task was simple: count the number of passes made by the white-shirted team. Participants focused intently, tracking each throw.\n\nHalfway through the video, something extraordinary happened. A person in a full gorilla costume walked slowly into the center of the frame, faced the camera, thumped its chest, and walked out. The gorilla was visible for a full nine seconds.\n\nWhen asked afterward, roughly half the participants had absolutely no idea a gorilla had appeared. They were shocked when shown the video again. Some refused to believe it was the same video.\n\nThe experiment demonstrated what Simons and Chabris called \"inattentional blindness\"—the failure to notice fully visible but unexpected objects when our attention is focused elsewhere. It's not that our eyes didn't see the gorilla; our brain simply didn't process it because it wasn't relevant to the counting task.\n\nThis research has profound real-world implications. Radiologists can miss tumors on X-rays when focused on something else. Drivers may not see pedestrians when distracted. Eyewitnesses miss critical details during crimes.\n\nThe invisible gorilla reminds us that seeing and noticing are two fundamentally different cognitive processes, and that our confident sense of awareness is largely an illusion.",
    "contentKa": "1999 წელს, ფსიქოლოგებმა მონაწილეებს სთხოვეს ვიდეოში ბასკეტბოლის გადაცემების დათვლა დაევალა. ვიდეოში გორილას კოსტიუმში გამოწყობილი ადამიანი გაიარა, მაგრამ მონაწილეების ნახევარმა ვერ შენიშნა. ეს აჩვენებს, რომ წენა და შემჩნევა სრულიად განსხვავებული პროცესებია.",
    "moral": "Our attention is far more limited than we think. We can look directly at something and still fail to see it if our focus is elsewhere.",
    "moralKa": "ჩვენი ყურადღება გაცილებით უფრო შეზღუდულია, ვიდრე გვგონია.",
    "titleHy": "Անտեսանելի գորիլա",
    "titleRu": "Невидимая горилла",
    "titleAz": "Görünməz Qorilla",
    "moralHy": "Մեր ուշադրությունը շատ ավելի սահմանափակ է, քան կարծում ենք։ Մենք կարող ենք ուղղակիորեն նայել ինչ-որ բանի և դեռևս չտեսնել այն, եթե մեր ուշադրությունը այլ տեղ է:",
    "moralAz": "Diqqətimiz düşündüyümüzdən daha məhduddur. Biz bir şeyə birbaşa baxa bilərik və diqqətimiz başqa yerdədirsə, hələ də onu görə bilmirik.",
    "moralRu": "Наше внимание гораздо более ограничено, чем мы думаем. Мы можем смотреть прямо на что-то и все равно не видеть этого, если наше внимание сосредоточено на чем-то другом.",
    "contentHy": "1999 թվականին հոգեբաններ Դենիել Սայմոնսը և Քրիստոֆեր Չաբրիսը նախագծեցին մի փորձ, որը կվիճարկի իրազեկման վերաբերյալ մեր ամենահիմնական ենթադրությունները: Նրանք խնդրեցին մասնակիցներին դիտել մի կարճ տեսանյութ, որտեղ վեց հոգի՝ երեքը սպիտակ վերնաշապիկներով, երեքը՝ սև, բասկետբոլի գնդակներ փոխանցեցին միմյանց:\n\nԱռաջադրանքը պարզ էր՝ հաշվել սպիտակաշապիկներով կատարած փոխանցումների քանակը։ Մասնակիցները ուշադրությամբ կենտրոնացան՝ հետևելով յուրաքանչյուր նետմանը:\n\nՏեսանյութի կեսին արտառոց բան տեղի ունեցավ. Ամբողջ գորիլայի հագուստով անձը դանդաղ քայլեց դեպի կադրի կենտրոնը, դեմքով դեպի տեսախցիկը հարվածեց նրա կրծքին և դուրս եկավ: Գորիլան տեսանելի էր ամբողջ ինը վայրկյան:\n\nԵրբ հարցրին, մասնակիցների մոտավորապես կեսը բացարձակապես չէր պատկերացնում, որ գորիլա է հայտնվել: Նրանք շոկի մեջ էին, երբ նորից ցուցադրեցին տեսանյութը։ Ոմանք հրաժարվեցին հավատալ, որ դա նույն տեսանյութն է:\n\nՓորձը ցույց տվեց այն, ինչ Սիմոնսը և Չաբրիսը անվանեցին «անուշադիր կուրություն»՝ լիովին տեսանելի, բայց անսպասելի առարկաներ չնկատելու, երբ մեր ուշադրությունը կենտրոնացած է այլ տեղ: Այնպես չէ, որ մեր աչքերը չեն տեսել գորիլան. մեր ուղեղը պարզապես չի մշակել այն, քանի որ այն չի համապատասխանում հաշվելու առաջադրանքին:\n\nԱյս հետազոտությունը խորը ազդեցություն ունի իրական աշխարհի վրա: Ռադիոլոգները կարող են բաց թողնել ուռուցքները ռենտգենյան ճառագայթների վրա, երբ կենտրոնացած են այլ բանի վրա: Վարորդները կարող են չտեսնել հետիոտներին, երբ շեղվում են: Հանցագործությունների ժամանակ ականատեսները բաց են թողնում կարևոր մանրամասները.\n\nԱնտեսանելի գորիլան հիշեցնում է մեզ, որ տեսնելն ու նկատելը երկու սկզբունքորեն տարբեր ճանաչողական գործընթացներ են, և որ գիտակցության մեր վստահ զգացումը մեծ մասամբ պատրանք է:",
    "contentRu": "В 1999 году психологи Дэниел Саймонс и Кристофер Шабрис разработали эксперимент, который бросит вызов нашим самым базовым представлениям об осознанности. Они попросили участников посмотреть короткое видео, в котором шесть человек (трое в белых рубашках и трое в черных) передают друг другу баскетбольные мячи.\n\nЗадача была простая: подсчитать количество передач, сделанных белорубашечной командой. Участники сосредоточились, отслеживая каждый бросок.\n\nВ середине видео произошло нечто экстраординарное. Человек в полном костюме гориллы медленно вошел в центр кадра, повернулся к камере, постучал себя в грудь и вышел. Гориллу было видно целых девять секунд.\n\nКогда их спросили позже, примерно половина участников понятия не имела о появлении гориллы. Они были шокированы, когда им снова показали видео. Некоторые отказывались верить, что это одно и то же видео.\n\nЭксперимент продемонстрировал то, что Саймонс и Шабри назвали «слепотой по невнимательности» — неспособностью замечать полностью видимые, но неожиданные объекты, когда наше внимание сосредоточено в другом месте. Дело не в том, что наши глаза не видели гориллу; наш мозг просто не обработал это, потому что это не имело отношения к задаче подсчета.\n\nЭто исследование имеет глубокие практические последствия. Радиологи могут не заметить опухоли на рентгеновских снимках, если сосредоточивают внимание на чем-то другом. Водители могут не видеть пешеходов, когда отвлекаются. Очевидцы упускают важные детали во время преступлений.\n\nНевидимая горилла напоминает нам, что видение и замечание — это два фундаментально разных когнитивных процесса и что наше уверенное чувство осознания — во многом иллюзия.",
    "contentAz": "1999-cu ildə psixoloqlar Daniel Simons və Christopher Chabris, şüurla bağlı ən əsas fərziyyələrimizə etiraz edəcək bir təcrübə hazırladılar. Onlar iştirakçılardan altı nəfərin – üçü ağ köynəkdə, üçü qara paltarda – basketbol toplarını bir-birinə ötürdükləri qısa videoya baxmağı xahiş etdilər.\n\nTapşırıq sadə idi: ağ köynəkli komandanın ötürmələrinin sayını hesablayın. İştirakçılar hər bir atışı izləyərək diqqətlərini cəmlədilər.\n\nVideonun yarısında qeyri-adi bir şey baş verdi. Tam qorilla kostyumunda olan bir şəxs yavaş-yavaş kadrın mərkəzinə daxil oldu, kameraya üz tutdu, sinəsini döydü və çıxıb getdi. Qorilla tam doqquz saniyə göründü.\n\nDaha sonra soruşduqda, iştirakçıların təxminən yarısı qorillanın peyda olması barədə heç bir fikri yox idi. Videonu yenidən nümayiş etdirəndə şoka düşüblər. Bəziləri bunun eyni video olduğuna inanmaqdan imtina etdi.\n\nTəcrübə Simons və Çabrisin \"diqqətsiz korluq\" adlandırdıqlarını nümayiş etdirdi - diqqətimiz başqa yerə yönəldildiyində tamamilə görünən, lakin gözlənilməz cisimlərin fərqinə varmamaq. Bu, gözlərimizin qorilla görməməsi deyil; bizim beynimiz sadəcə onu emal etmədi, çünki sayma tapşırığına uyğun deyildi.\n\nBu tədqiqatın real dünya üçün dərin təsirləri var. Rentgenoloqlar başqa bir şeyə diqqət yetirdikdə X-şüalarında şişləri əldən verə bilərlər. Sürücülər diqqəti yayındırdıqda piyadaları görməyə bilər. Şahidlər cinayətlər zamanı kritik detalları qaçırırlar.\n\nGözəgörünməz qorilla bizə xatırladır ki, görmək və fərq etmək iki kökündən fərqli idrak prosesidir və bizim inamlı dərketmə duyğumuz əsasən illüziyadır."
  },
  {
    "id": 5,
    "title": "Harlow's Monkeys and the Need for Love",
    "titleKa": "ჰარლოუს მაიმუნები და სიყვარულის საჭიროება",
    "chapterId": 9,
    "icon": "mdi:heart-outline",
    "content": "In the 1950s and 60s, psychologist Harry Harlow conducted experiments at the University of Wisconsin that would forever change our understanding of love and attachment. At the time, the prevailing view—promoted by behaviorists like Watson—was that infants bonded with mothers primarily because mothers provided food.\n\nHarlow challenged this assumption by separating infant rhesus monkeys from their biological mothers and giving them two surrogate \"mothers.\" One was made of bare wire mesh with a feeding bottle attached. The other was made of soft terry cloth with no food source.\n\nIf the behaviorists were right, the babies should have preferred the wire mother who provided nourishment. But that's not what happened.\n\nThe infant monkeys spent nearly all their time clinging to the soft cloth mother. They went to the wire mother only briefly to feed, then immediately returned to the cloth surrogate. When frightened by a mechanical spider or other threats, they ran to the cloth mother for comfort, clinging desperately.\n\nEven more telling: monkeys raised with only the wire mother developed severe psychological problems. They rocked back and forth, showed signs of depression, were aggressive, and had difficulty socializing with other monkeys. Those with the cloth mother, while not perfectly adjusted, were significantly healthier emotionally.\n\nLater experiments showed that monkeys deprived of all maternal contact became profoundly disturbed as adults—unable to parent their own offspring, some refusing to nurse or even harming their babies.\n\nHarlow's work, though ethically controversial by today's standards, provided irrefutable evidence that emotional comfort, touch, and security are as fundamental as food and water for healthy development.",
    "contentKa": "1950-60-იან წლებში, ჰარი ჰარლოუმა ექსპერიმენტები ჩაატარა რეზუსის მაიმუნებზე. მან ჩვილებს ორი სუროგატი დედა მისცა: მავთულხავლოვანი საკვებით და რბილი ქსოვილიანი საკვების გარეშე. ჩვილებმა რბილ დედა აირჩიეს—ემოციური კომფორტი საკვებზე მნიშვნელოვანია.",
    "moral": "Love, comfort, and physical touch are fundamental needs that shape healthy development—not luxuries, but biological necessities.",
    "moralKa": "სიყვარული, კომფორტი და ფიზიკური შეხება ფუნდამენტური საჭიროებებია ჯანსაღი განვითარებისთვის.",
    "titleHy": "Հարլոուի կապիկները և սիրո կարիքը",
    "moralHy": "Սերը, հարմարավետությունը և ֆիզիկական հպումը հիմնարար կարիքներ են, որոնք ձևավորում են առողջ զարգացումը՝ ոչ թե շքեղություն, այլ կենսաբանական անհրաժեշտություն:",
    "moralAz": "Sevgi, rahatlıq və fiziki toxunma sağlam inkişafı formalaşdıran əsas ehtiyaclardır - lüks deyil, bioloji ehtiyaclar.",
    "moralRu": "Любовь, комфорт и физическое прикосновение — это фундаментальные потребности, которые формируют здоровое развитие — не роскошь, а биологические потребности.",
    "titleRu": "Обезьяны Харлоу и потребность в любви",
    "contentHy": "1950-ականներին և 60-ականներին հոգեբան Հարրի Հարլոուն Վիսկոնսինի համալսարանում անցկացրեց փորձեր, որոնք ընդմիշտ կփոխեին մեր պատկերացումները սիրո և կապվածության մասին: Այն ժամանակ գերակշռող տեսակետը, որը տարածվում էր Ուոթսոնի նման վարքագծողների կողմից, այն էր, որ նորածինները կապված են մայրերի հետ հիմնականում այն ​​պատճառով, որ մայրերը սնունդ են մատակարարում:\n\nՀարլոուն վիճարկել է այս ենթադրությունը՝ առանձնացնելով մանկական ռեզուս կապիկներին իրենց կենսաբանական մայրերից և նրանց տալով երկու փոխնակ «մայրեր»: Մեկը պատրաստված էր մերկ մետաղական ցանցից, որի վրա դրված էր կերակրման շիշ: Մյուսը պատրաստված էր փափուկ կտորից, առանց սննդի աղբյուրի:\n\nԵթե ​​վարքագծերը ճիշտ էին, երեխաները պետք է նախընտրեին սնուցող մորը: Բայց այդպես չի եղել:\n\nՆորածին կապիկները գրեթե ամբողջ ժամանակ անցկացնում էին փափուկ կտորի մորից կառչելով: Նրանք գնացին մետաղալար մոր մոտ միայն կարճ ժամանակով կերակրելու, հետո անմիջապես վերադարձան կտորի փոխնակին: Երբ վախեցան մեխանիկական սարդից կամ այլ սպառնալիքներից, նրանք վազեցին կտորե մոր մոտ մխիթարության համար՝ հուսահատ կառչելով։\n\nՆույնիսկ ավելի խոսուն. կապիկները, որոնք մեծացել են միայն մետաղյա մոր հետ, ծանր հոգեբանական խնդիրներ են ունեցել: Նրանք օրորվում էին հետ ու առաջ, ցույց էին տալիս դեպրեսիայի նշաններ, ագրեսիվ էին և դժվարությամբ էին շփվում այլ կապիկների հետ։ Նրանք, ովքեր շորով մոր հետ, թեև կատարյալ հարմարեցված չէին, էմոցիոնալ առումով զգալիորեն ավելի առողջ էին:\n\nԱվելի ուշ փորձերը ցույց տվեցին, որ կապիկները, որոնք զրկված էին մայրական կապից, մեծ անհանգստություն էին զգում մեծահասակների շրջանում՝ չկարողանալով դաստիարակել իրենց սերունդներին, ոմանք հրաժարվում էին կերակրել կամ նույնիսկ վնասում իրենց երեխաներին։\n\nՀարլոուի աշխատանքը, թեև այսօրվա չափանիշներով էթիկապես հակասական է, սակայն անհերքելի ապացույցներ է տվել, որ էմոցիոնալ հարմարավետությունը, հպումը և անվտանգությունը նույնքան կարևոր են, որքան սնունդն ու ջուրը առողջ զարգացման համար:",
    "contentRu": "В 1950-х и 60-х годах психолог Гарри Харлоу проводил в Университете Висконсина эксперименты, которые навсегда изменили наше понимание любви и привязанности. В то время преобладала точка зрения, которую продвигали такие бихевиористы, как Уотсон, что младенцы связаны с матерями прежде всего потому, что матери обеспечивают их едой.\n\nХарлоу бросила вызов этому предположению, отделив детенышей макак-резус от их биологических матерей и дав им двух суррогатных «матерей». Один был сделан из голой проволочной сетки с прикрепленной бутылочкой для кормления. Другой был сделан из мягкой махровой ткани без источника питания.\n\nЕсли бы бихевиористы были правы, младенцы должны были бы предпочесть проволочную мать, которая обеспечивала бы питание. Но это не то, что произошло.\n\nДетеныши обезьян почти все время проводили, цепляясь за мягкую материю. К проволочной матери они ходили ненадолго, чтобы покормить, а затем сразу же возвращались к тканевой суррогатной матери. Напуганные механическим пауком или другими угрозами, они бежали к тканевой матери в поисках утешения, отчаянно цепляясь за нее.\n\nЕще более показательно: у обезьян, выросших только с проволочной матерью, возникли серьезные психологические проблемы. Они раскачивались взад и вперед, проявляли признаки депрессии, были агрессивны и с трудом общались с другими обезьянами. Те, у кого была тканевая мать, хотя и не были идеально приспособлены, были значительно здоровее эмоционально.\n\nБолее поздние эксперименты показали, что обезьяны, лишенные всякого контакта с матерью, повзрослев, стали глубоко обеспокоены: они не могли воспитывать собственное потомство, некоторые отказывались кормить своих детей грудью или даже причиняли им вред.\n\nРабота Харлоу, хотя и противоречивая с этической точки зрения по сегодняшним стандартам, предоставила неопровержимые доказательства того, что эмоциональный комфорт, прикосновения и безопасность так же важны для здорового развития, как еда и вода.",
    "titleAz": "Harlow meymunları və sevgi ehtiyacı",
    "contentAz": "1950-60-cı illərdə psixoloq Harri Harlou Viskonsin Universitetində sevgi və bağlılıq anlayışımızı həmişəlik dəyişəcək təcrübələr apardı. O vaxtlar, Watson kimi davranışçılar tərəfindən irəli sürülən, üstünlük təşkil edən fikir, körpələrin analarla ilk növbədə qida təmin etdiyi üçün bağlanması idi.\n\nHarlou körpə rhesus meymunlarını bioloji analarından ayıraraq və onlara iki surroqat \"ana\" verərək bu fərziyyəyə qarşı çıxdı. Biri qida şüşəsi əlavə edilmiş çılpaq məftildən hazırlanmışdı. Digəri isə qida mənbəyi olmayan yumşaq terri parçadan hazırlanmışdı.\n\nDavranışçılar haqlı olsaydılar, körpələr qida verən tel anaya üstünlük verməli idilər. Amma belə olmadı.\n\nKörpə meymunlar demək olar ki, bütün vaxtlarını yumşaq parça anasına yapışaraq keçirirdilər. Onlar qidalandırmaq üçün yalnız qısa müddətə tel anaya getdilər, sonra dərhal parça surroqatına qayıtdılar. Mexanik hörümçək və ya digər təhdidlərdən qorxduqda, çarəsizcə yapışaraq rahatlıq üçün parça anasına qaçdılar.\n\nDaha çox izah edən: yalnız tel ana ilə böyüdülən meymunlarda ciddi psixoloji problemlər yarandı. Onlar irəli-geri yellənirdilər, depressiya əlamətləri göstərirdilər, aqressiv idilər və digər meymunlarla ünsiyyət qurmaqda çətinlik çəkirdilər. Paltarlı anası olanlar, mükəmməl uyğunlaşmasalar da, emosional cəhətdən əhəmiyyətli dərəcədə sağlam idilər.\n\nSonrakı təcrübələr göstərdi ki, ana ilə hər cür təmasdan məhrum olan meymunlar böyüklər kimi çox narahat olurlar - öz övladlarını yetişdirə bilmirlər, bəziləri süd verməkdən boyun qaçırır və hətta körpələrinə zərər verirdilər.\n\nHarlowun işi, bugünkü standartlara görə etik cəhətdən mübahisəli olsa da, emosional rahatlığın, toxunmanın və təhlükəsizliyin sağlam inkişaf üçün qida və su qədər əsas olduğuna dair təkzibedilməz sübutlar təqdim etdi."
  },
  {
    "id": 6,
    "title": "The Marshmallow Test",
    "titleKa": "მარშმელოუს ტესტი",
    "chapterId": 10,
    "icon": "mdi:cookie-outline",
    "content": "In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment. He brought preschool children, typically 4 to 5 years old, into a room one at a time. On the table sat a single marsexport const MEMORY_CARDS: MemoryCard[] = [
  {
    "id": 1,
    "term": "Psychology",
    "definition": "The scientific study of behavior and mental processes",
    "category": "Basics",
    "termRu": "Психология",
    "termAz": "Psixologiya",
    "definitionRu": "Научное исследование поведения и психических процессов.",
    "definitionKa": "ქცევისა და ფსიქიკური პროცესების მეცნიერული შესწავლა",
    "definitionHy": "Վարքի և մտավոր գործընթացների գիտական ​​ուսումնասիրություն",
    "termKa": "ფსიქოლოგია",
    "termHy": "Հոգեբանություն",
    "definitionAz": "Davranış və psixi proseslərin elmi tədqiqi"
  },
  {
    "id": 2,
    "term": "Neuron",
    "definition": "A nerve cell that transmits electrical and chemical signals",
    "category": "Biology",
    "termRu": "Нейрон",
    "termAz": "Neyron",
    "definitionRu": "Нервная клетка, передающая электрические и химические сигналы.",
    "definitionHy": "Նյարդային բջիջ, որը փոխանցում է էլեկտրական և քիմիական ազդանշաններ",
    "definitionKa": "ნერვული უჯრედი, რომელიც გადასცემს ელექტრულ და ქიმიურ სიგნალებს",
    "termKa": "ნეირონი",
    "termHy": "Նեյրոն",
    "definitionAz": "Elektrik və kimyəvi siqnalları ötürən sinir hüceyrəsi"
  },
  {
    "id": 3,
    "term": "Classical Conditioning",
    "definition": "Learning through association of stimuli (Pavlov)",
    "category": "Learning",
    "termRu": "Классическое кондиционирование",
    "termKa": "კლასიკური კონდიცირება",
    "termHy": "Դասական կոնդիցիոներ",
    "termAz": "Klassik kondisioner",
    "definitionHy": "Սովորում գրգռիչների միավորման միջոցով (Պավլով)",
    "definitionKa": "სწავლა სტიმულის ასოციაციის გზით (პავლოვი)",
    "definitionAz": "Qıcıqlandırıcıların assosiasiyası vasitəsilə öyrənmə (Pavlov)",
    "definitionRu": "Обучение через ассоциацию стимулов (Павлов)"
  },
  {
    "id": 4,
    "term": "Operant Conditioning",
    "definition": "Learning through consequences: reinforcement and punishment (Skinner)",
    "category": "Learning",
    "termHy": "Գործող օդափոխություն",
    "termKa": "ოპერაციული კონდიცირება",
    "termAz": "Operant Kondisioner",
    "termRu": "Оперантное обусловливание",
    "definitionRu": "Обучение через последствия: подкрепление и наказание (Скиннер)",
    "definitionKa": "სწავლა შედეგების მეშვეობით: განმტკიცება და დასჯა (სკინერი)",
    "definitionHy": "Սովորում հետևանքների միջոցով. ամրապնդում և պատիժ (Skinner)",
    "definitionAz": "Nəticələr vasitəsilə öyrənmək: gücləndirmə və cəza (Skinner)"
  },
  {
    "id": 5,
    "term": "Hippocampus",
    "definition": "Brain structure essential for forming new long-term memories",
    "category": "Biology",
    "termRu": "Гиппокамп",
    "termKa": "ჰიპოკამპი",
    "termHy": "Հիպոկամպուս",
    "definitionRu": "Структура мозга необходима для формирования новой долговременной памяти",
    "definitionKa": "ტვინის სტრუქტურა აუცილებელია ახალი გრძელვადიანი მეხსიერების ფორმირებისთვის",
    "definitionHy": "Ուղեղի կառուցվածքը կարևոր է նոր երկարաժամկետ հիշողություններ ձևավորելու համար",
    "definitionAz": "Yeni uzunmüddətli xatirələrin formalaşması üçün vacib olan beyin quruluşu",
    "termAz": "Hipokampus"
  },
  {
    "id": 6,
    "term": "Cognitive Dissonance",
    "definition": "Discomfort from holding contradictory beliefs or attitudes",
    "category": "Social",
    "termRu": "Когнитивный диссонанс",
    "termHy": "Ճանաչողական դիսոնանս",
    "definitionRu": "Дискомфорт от противоречивых убеждений или взглядов.",
    "termKa": "კოგნიტური დისონანსი",
    "definitionKa": "დისკომფორტი ურთიერთსაწინააღმდეგო რწმენის ან დამოკიდებულების შენარჩუნების გამო",
    "definitionHy": "Անհանգստություն հակասական համոզմունքների կամ վերաբերմունքի պատճառով",
    "definitionAz": "Ziddiyyətli inanclara və ya münasibətə sahib olmaqdan narahatlıq",
    "termAz": "Koqnitiv dissonans"
  },
  {
    "id": 7,
    "term": "Maslow's Hierarchy",
    "definition": "Five-level model of motivation from basic needs to self-actualization",
    "category": "Motivation",
    "termAz": "Maslow iyerarxiyası",
    "termHy": "Մասլոուի հիերարխիա",
    "termKa": "მასლოუს იერარქია",
    "termRu": "Иерархия Маслоу",
    "definitionRu": "Пятиуровневая модель мотивации от базовых потребностей до самореализации",
    "definitionKa": "მოტივაციის ხუთ დონის მოდელი ძირითადი მოთხოვნილებებიდან თვითრეალიზაციამდე",
    "definitionHy": "Հիմնական կարիքներից մինչև ինքնաիրականացում մոտիվացիայի հինգ մակարդակի մոդել",
    "definitionAz": "Əsas ehtiyaclardan özünü həyata keçirməyə qədər beş səviyyəli motivasiya modeli"
  },
  {
    "id": 8,
    "term": "Big Five (OCEAN)",
    "definition": "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
    "category": "Personality",
    "termKa": "დიდი ხუთეული (OCEAN)",
    "termHy": "Մեծ հնգյակ (OCEAN)",
    "termRu": "Большая пятерка (ОКЕАН)",
    "termAz": "Böyük beşlik (OCEAN)",
    "definitionRu": "Открытость, Добросовестность, Экстраверсия, Доброжелательность, Невротизм.",
    "definitionHy": "Բացություն, բարեխիղճություն, էքստրավերտություն, համաձայնություն, նևրոտիզմ",
    "definitionKa": "ღიაობა, კეთილსინდისიერება, ექსტრავერსია, თანხმობა, ნევროტიზმი",
    "definitionAz": "Açıqlıq, Vicdanlılıq, Ekstraversiya, Uyğunluq, Nevrotiklik"
  },
  {
    "id": 9,
    "term": "Attachment Theory",
    "definition": "The bond between infant and caregiver shaping later relationships",
    "category": "Development",
    "definitionRu": "Связь между младенцем и лицом, осуществляющим уход, формирует дальнейшие отношения",
    "termRu": "Теория привязанности",
    "termKa": "მიმაგრების თეორია",
    "termHy": "Կցվածության տեսություն",
    "definitionHy": "Երեխայի և խնամողի միջև կապը ձևավորում է հետագա հարաբերությունները",
    "definitionKa": "კავშირი ახალშობილსა და მომვლელს შორის აყალიბებს შემდგომ ურთიერთობებს",
    "termAz": "Qoşma nəzəriyyəsi",
    "definitionAz": "Körpə və baxıcı arasındakı əlaqə sonrakı münasibətləri formalaşdırır"
  },
  {
    "id": 10,
    "term": "Confirmation Bias",
    "definition": "Tendency to seek information that supports existing beliefs",
    "category": "Cognition",
    "termRu": "Предвзятость подтверждения",
    "definitionRu": "Склонность искать информацию, которая поддерживает существующие убеждения.",
    "termKa": "დადასტურების მიკერძოება",
    "termHy": "Հաստատման կողմնակալություն",
    "definitionKa": "ტენდენცია მოიძიოს ინფორმაცია, რომელიც მხარს უჭერს არსებულ რწმენას",
    "definitionHy": "Գոյություն ունեցող համոզմունքները հաստատող տեղեկատվություն փնտրելու միտում",
    "termAz": "Təsdiq qərəzi",
    "definitionAz": "Mövcud inancları dəstəkləyən məlumat axtarmaq meyli"
  },
  {
    "id": 11,
    "term": "Dopamine",
    "definition": "Neurotransmitter involved in reward, motivation, and pleasure",
    "category": "Biology",
    "termKa": "დოფამინი",
    "termRu": "Дофамин",
    "termAz": "Dopamin",
    "termHy": "Դոպամին",
    "definitionRu": "Нейромедиатор, участвующий в вознаграждении, мотивации и удовольствии.",
    "definitionKa": "ნეიროტრანსმიტერი მონაწილეობს ჯილდოში, მოტივაციაში და სიამოვნებაში",
    "definitionHy": "Նեյրոհաղորդիչը ներգրավված է պարգևատրման, մոտիվացիայի և հաճույքի մեջ",
    "definitionAz": "Mükafat, motivasiya və həzzdə iştirak edən neyrotransmitter"
  },
  {
    "id": 12,
    "term": "REM Sleep",
    "definition": "Sleep stage with rapid eye movements and vivid dreaming",
    "category": "Consciousness",
    "termRu": "Быстрый сон",
    "termKa": "REM ძილი",
    "termHy": "REM քուն",
    "definitionKa": "ძილის ეტაპი თვალის სწრაფი მოძრაობით და ნათელი ოცნებებით",
    "definitionHy": "Քնի փուլ՝ աչքերի արագ շարժումներով և վառ երազներով",
    "definitionRu": "Стадия сна с быстрыми движениями глаз и яркими сновидениями.",
    "termAz": "REM yuxusu",
    "definitionAz": "Sürətli göz hərəkətləri və canlı yuxu ilə yuxu mərhələsi"
  },
  {
    "id": 13,
    "term": "Bystander Effect",
    "definition": "Less likely to help when others are present",
    "category": "Social",
    "definitionKa": "ნაკლებად სავარაუდოა, რომ დაეხმაროს, როდესაც სხვები არიან",
    "definitionHy": "Ավելի քիչ հավանական է օգնել, երբ ուրիշները ներկա են",
    "definitionAz": "Başqaları olduqda kömək etmək ehtimalı azdır",
    "termHy": "Bystander Effect",
    "termKa": "Bystander Effect",
    "termRu": "Эффект свидетеля",
    "definitionRu": "Меньше шансов помочь, когда присутствуют другие",
    "termAz": "Baxıcı Effekti"
  },
  {
    "id": 14,
    "term": "Placebo Effect",
    "definition": "Improvement from belief in treatment rather than treatment itself",
    "category": "Research",
    "termRu": "Эффект плацебо",
    "termHy": "Պլացեբոյի էֆեկտ",
    "termKa": "პლაცებოს ეფექტი",
    "definitionHy": "Բուժման նկատմամբ հավատքի բարելավում, այլ ոչ թե ինքնին բուժման",
    "definitionKa": "გაუმჯობესება მკურნალობისადმი რწმენისგან და არა თავად მკურნალობის მიმართ",
    "definitionRu": "Улучшение от веры в лечение, а не от самого лечения",
    "termAz": "Plasebo effekti",
    "definitionAz": "Müalicənin özündən çox müalicəyə inamdan irəli gələn təkmilləşdirmə"
  },
  {
    "id": 15,
    "term": "Schema",
    "definition": "Mental framework for organizing and interpreting information",
    "category": "Cognition",
    "termRu": "Схема",
    "termHy": "Սխեման",
    "termKa": "სქემა",
    "definitionRu": "Ментальная основа для организации и интерпретации информации",
    "definitionHy": "Տեղեկատվության կազմակերպման և մեկնաբանման մտավոր շրջանակ",
    "definitionKa": "ინფორმაციის ორგანიზებისა და ინტერპრეტაციის გონებრივი ჩარჩო",
    "termAz": "Sxem",
    "definitionAz": "Məlumatı təşkil etmək və şərh etmək üçün zehni çərçivə"
  },
  {
    "id": 16,
    "term": "Amygdala",
    "definition": "Brain structure for processing emotions, especially fear",
    "category": "Biology",
    "termKa": "ამიგდალა",
    "definitionRu": "Структура мозга для обработки эмоций, особенно страха",
    "termHy": "Ամիգդալա",
    "termRu": "Миндалевидное тело",
    "definitionHy": "Ուղեղի կառուցվածքը հույզերի, հատկապես վախի մշակման համար",
    "definitionKa": "ტვინის სტრუქტურა ემოციების, განსაკუთრებით შიშის დასამუშავებლად",
    "termAz": "Amigdala",
    "definitionAz": "Duyğuların, xüsusən də qorxunun işlənməsi üçün beyin quruluşu"
  },
  {
    "id": 17,
    "term": "Self-Efficacy",
    "definition": "Belief in your ability to succeed at specific tasks (Bandura)",
    "category": "Personality",
    "definitionRu": "Вера в свою способность добиться успеха в выполнении конкретных задач (Бандура)",
    "termRu": "Самоэффективность",
    "definitionHy": "Հավատք կոնկրետ առաջադրանքներում հաջողության հասնելու ձեր ունակությանը (Բանդուրա)",
    "definitionKa": "რწმენა კონკრეტულ ამოცანებში წარმატების მისაღწევად (ბანდურა)",
    "termKa": "თვითეფექტურობა",
    "termHy": "Ինքնարդյունավետություն",
    "termAz": "Öz-özünə effektivlik",
    "definitionAz": "Müəyyən tapşırıqlarda uğur qazanmaq qabiliyyətinə inam (Bandura)"
  },
  {
    "id": 18,
    "term": "Learned Helplessness",
    "definition": "Giving up after repeated failures even when escape is possible",
    "category": "Motivation",
    "termRu": "Выученная беспомощность",
    "definitionKa": "განმეორებითი წარუმატებლობის შემდეგ დანებება მაშინაც კი, როცა გაქცევა შესაძლებელია",
    "definitionHy": "Կրկնվող անհաջողություններից հետո հանձնվելը, նույնիսկ երբ հնարավոր է փախուստը",
    "termKa": "ისწავლა უმწეობა",
    "termHy": "Սովորած անօգնականություն",
    "definitionRu": "Сдаваться после повторяющихся неудач, даже если побег возможен",
    "termAz": "Çarəsizliyi öyrəndi",
    "definitionAz": "Qaçmaq mümkün olsa belə, təkrarlanan uğursuzluqlardan sonra təslim olmaq"
  },
  {
    "id": 19,
    "term": "Transference",
    "definition": "Redirecting feelings about one person onto the therapist",
    "category": "Therapy",
    "definitionKa": "ერთი ადამიანის მიმართ გრძნობების გადამისამართება თერაპევტზე",
    "termKa": "გადაცემა",
    "termHy": "Փոխանցում",
    "termRu": "перенос",
    "definitionRu": "Перенаправление чувств к одному человеку на терапевта",
    "termAz": "Köçürmə",
    "definitionHy": "Մեկ անձի մասին զգացմունքների վերահղում թերապևտի վրա",
    "definitionAz": "Bir şəxs haqqında hissləri terapevtə yönləndirmək"
  },
  {
    "id": 20,
    "term": "Heuristic",
    "definition": "Mental shortcut for quick decisions that can lead to errors",
    "category": "Cognition",
    "definitionKa": "გონებრივი მალსახმობი სწრაფი გადაწყვეტილების მისაღებად, რამაც შეიძლება გამოიწვიოს შეცდომები",
    "definitionHy": "Մտավոր դյուրանցում արագ որոշումների համար, որոնք կարող են հանգեցնել սխալների",
    "termHy": "Էվրիստիկ",
    "termKa": "ევრისტიკული",
    "termRu": "эвристика",
    "definitionRu": "Ментальный ярлык для быстрых решений, которые могут привести к ошибкам",
    "definitionAz": "Səhvlərə səbəb ola biləcək sürətli qərarlar üçün zehni qısa yol",
    "termAz": "Evristik"
  },
  {
    "id": 21,
    "term": "Synapse",
    "definition": "The gap between neurons where neurotransmitters cross",
    "category": "Biology",
    "termAz": "Sinaps",
    "termRu": "Синапс",
    "termKa": "სინაფსი",
    "termHy": "Սինապս",
    "definitionKa": "უფსკრული ნეირონებს შორის, სადაც ნეიროტრანსმიტერები კვეთენ",
    "definitionHy": "Նեյրոնների միջև ընկած բացը, որտեղ անցնում են նեյրոհաղորդիչները",
    "definitionRu": "Зазор между нейронами, где пересекаются нейротрансмиттеры",
    "definitionAz": "Neyrotransmitterlərin keçdiyi neyronlar arasındakı boşluq"
  },
  {
    "id": 22,
    "term": "Extinction",
    "definition": "Weakening of conditioned response when reinforcement stops",
    "category": "Learning",
    "termRu": "Вымирание",
    "termAz": "Yox olma",
    "definitionKa": "განპირობებული პასუხის შესუსტება, როდესაც გაძლიერება ჩერდება",
    "definitionHy": "Պայմանավորված արձագանքի թուլացում, երբ ամրապնդումը դադարում է",
    "termKa": "გადაშენება",
    "termHy": "Անհետացում",
    "definitionRu": "Ослабление условной реакции при прекращении подкрепления",
    "definitionAz": "Möhkəmləndirmə dayandıqda şərti cavabın zəifləməsi"
  },
  {
    "id": 23,
    "term": "Superego",
    "definition": "The moral conscience in Freud's personality structure",
    "category": "Personality",
    "termKa": "სუპერეგო",
    "termHy": "Սուպերէգո",
    "termRu": "Суперэго",
    "termAz": "Supereqo",
    "definitionRu": "Моральное сознание в структуре личности Фрейда",
    "definitionHy": "Բարոյական խիղճը Ֆրեյդի անձի կառուցվածքում",
    "definitionKa": "მორალური სინდისი ფროიდის პიროვნების სტრუქტურაში",
    "definitionAz": "Freydin şəxsiyyət strukturunda əxlaqi vicdan"
  },
  {
    "id": 24,
    "term": "Neuroplasticity",
    "definition": "Brain's ability to reorganize and form new neural connections",
    "category": "Biology",
    "termAz": "Neyroplastiklik",
    "termRu": "Нейропластичность",
    "definitionRu": "Способность мозга реорганизоваться и сформировать новые нейронные связи",
    "definitionHy": "Վերակազմավորվելու և նոր նյարդային կապեր ձևավորելու ուղեղի կարողությունը",
    "definitionKa": "ტვინის რეორგანიზაციისა და ახალი ნერვული კავშირების ჩამოყალიბების უნარი",
    "definitionAz": "Beynin yenidən təşkil etmək və yeni sinir əlaqələri yaratmaq qabiliyyəti",
    "termHy": "Նեյրոպլաստիկություն",
    "termKa": "ნეიროპლასტიურობა"
  }
]բ դուռը փակվեց: Մյուսները փորձեցին ստեղծագործական ռազմավարություններ՝ փակել իրենց աչքերը, շրջվել, երգել իրենց համար, շոյել ճահճին ինչպես փոքրիկ կենդանու, կամ լիզել և հետ դնել:\n\nԵրեխաների մոտ մեկ երրորդը հասցրել է սպասել ամբողջ 15 րոպեին։ Երկու երրորդը չկարողացավ դիմադրել։\n\nՏարիներ անց Միշելը հետևեց երեխաներին՝ այժմ դեռահասների և մեծահասակների։ Արդյունքները ապշեցուցիչ էին. Երեխաները, ովքեր ավելի երկար էին սպասել, զգալիորեն ավելի բարձր միավորներ ստացան SAT-ներում (միջինում 210 միավորով), ծնողների կողմից նկարագրվեցին որպես ավելի իրավասու, ավելի լավ հաղթահարեցին սթրեսը, ավելի քիչ հավանական է չարաշահեն նյութերը և պահպանեցին ավելի առողջ մարմնի քաշը:\n\nՉորս տասնամյակ տևած հետագա ուսումնասիրությունները ցույց են տվել, որ մանկության մեջ բավարարվածությունը հետաձգելու կարողությունը ավելի լավ արդյունքներ է կանխատեսում կյանքի հաջողության գրեթե բոլոր չափորոշիչներում:\n\nԱյնուամենայնիվ, ավելի ուշ հետազոտությունները նորություն են ավելացրել: Թայլեր Ուոթսի կողմից 2018 թվականի ուսումնասիրությունը ցույց է տվել, որ սոցիալ-տնտեսական գործոնները և տնային միջավայրը մեծապես ազդում են բավարարվածությունը հետաձգելու ունակության վրա. կայուն, ռեսուրսներով հարուստ տներից երեխաները կարող են պարզապես ավելի շատ հիմքեր ունենալ վստահելու, որ երկրորդ մարշմալոն իրականում կհայտնվի:",
    "titleAz": "Marshmallow Testi",
    "contentRu": "В конце 1960-х — начале 1970-х годов психолог из Стэнфорда Уолтер Мишель начал обманчиво простой эксперимент. Он приводил детей дошкольного возраста, обычно от 4 до 5 лет, по одному в комнату. На столе лежал зефир (или печенье, или крендель — ребенок мог выбрать лакомство по своему вкусу).\n\nИсследователь сказал ребенку: «Ты можешь съесть этот зефир прямо сейчас. Но если подождешь, пока я вернусь, вместо этого ты сможешь съесть два зефира». Затем исследователь вышел из комнаты примерно на 15 минут.\n\nСкрытые камеры записали то, что произошло дальше, и отснятый материал стал одним из самых восхитительных фильмов в истории психологии. Некоторые дети съели зефир сразу же, как закрылась дверь. Другие пробовали творческие стратегии: закрывали глаза, поворачивались, напевали про себя, гладили зефир, как крошечного зверька, или облизывали его и клали обратно.\n\nОколо трети детей удалось прождать полные 15 минут. Две трети не смогли устоять.\n\nСпустя годы Мишель последовал за детьми — теперь уже подростками и взрослыми. Результаты были поразительными. Дети, которые ждали дольше, набрали значительно более высокие баллы по SAT (в среднем на 210 баллов выше), родители описывали их как более компетентных, лучше справлялись со стрессом, реже злоупотребляли психоактивными веществами и поддерживали более здоровый вес тела.\n\nПоследующие исследования, охватывающие четыре десятилетия, показали, что способность откладывать удовлетворение в детстве предсказывает лучшие результаты почти по всем показателям жизненного успеха.\n\nОднако более поздние исследования добавили нюансов. Исследование Тайлера Уоттса, проведенное в 2018 году, показало, что социально-экономические факторы и домашняя обстановка сильно влияют на способность откладывать удовлетворение — у детей из стабильных, богатых ресурсами семей просто может быть больше оснований верить в то, что второй зефир действительно появится.",
    "contentAz": "1960-cı illərin sonu və 1970-ci illərin əvvəllərində Stenford psixoloqu Valter Mişel aldadıcı sadə təcrübəyə başladı. O, adətən 4-5 yaşlı məktəbəqədər uşaqları bir-bir otağa gətirirdi. Masada tək zefir (yaxud peçenye və ya simit - uşaq öz istədiyi yeməyi seçə bilər) oturdu.\n\nTədqiqatçı uşağa deyib: \"Bu zefiri indi yeyə bilərsiniz. Amma mən qayıdana qədər gözləsəniz, onun yerinə iki zefir yeyə bilərsiniz\". Sonra tədqiqatçı təxminən 15 dəqiqə otağı tərk etdi.\n\nGizli kameralar sonra baş verənləri qeyd etdi və görüntülər psixologiyanın ən ləzzətli baxışlarından biri oldu. Bəzi uşaqlar qapı bağlanan kimi zefiri yedilər. Digərləri yaradıcı strategiyaları sınadılar: gözlərini örtdülər, ətrafa çevrildilər, öz-özünə mahnı oxudular, zefiri kiçik bir heyvan kimi oxşadılar və ya yalayıb geri qoydular.\n\nUşaqların təxminən üçdə biri tam 15 dəqiqə gözləməyi bacarıb. Üçdə ikisi müqavimət göstərə bilmədi.\n\nİllər sonra Mişel uşaqları - indi yeniyetmələr və böyüklər kimi izlədi. Nəticələr təəccüblü idi. Daha çox gözləyən uşaqlar SAT-da əhəmiyyətli dərəcədə yüksək bal topladılar (orta hesabla 210 bal daha yüksək), valideynlər tərəfindən daha bacarıqlı, streslə daha yaxşı mübarizə aparan, maddələrdən sui-istifadə etmə ehtimalı az idi və bədən çəkilərini daha sağlam saxladılar.\n\nQırx onillikləri əhatə edən təqib tədqiqatları göstərdi ki, uşaqlıqda həzzi gecikdirmək bacarığı, demək olar ki, hər bir həyat uğuru ölçüsündə daha yaxşı nəticələri proqnozlaşdırır.\n\nBununla belə, sonrakı araşdırmalar bir nüans əlavə etdi. Tyler Watts tərəfindən 2018-ci ildə aparılan bir araşdırma göstərdi ki, sosial-iqtisadi amillər və ev mühiti məmnuniyyəti gecikdirmək qabiliyyətinə güclü təsir göstərir - sabit, resursla zəngin evlərdən olan uşaqların ikinci zefirin həqiqətən görünəcəyinə inanmaq üçün daha çox səbəbi ola bilər."
  },
  {
    "id": 7,
    "title": "Kitty Genovese and Bystander Apathy",
    "titleKa": "კიტი ჯენოვეზე და თვალთმხილველის აპათია",
    "chapterId": 12,
    "icon": "mdi:account-alert-outline",
    "content": "On March 13, 1964, 28-year-old Catherine \"Kitty\" Genovese was returning to her apartment in Kew Gardens, Queens, New York, at about 3:15 AM after finishing her shift as a bar manager. As she walked from her car, she was attacked by Winston Moseley.\n\nKitty screamed for help. Lights went on in the apartment building. A neighbor yelled from a window. Moseley ran away—but returned ten minutes later to attack her again in a stairwell, where he stabbed, robbed, and ultimately killed her.\n\nThe New York Times reported that 38 witnesses watched or heard the attack and did nothing—a claim that became the defining story of urban apathy. The headline shocked the nation.\n\nPsychologists John Darley and Bibb Latané were deeply troubled by the story. Rather than simply condemning the witnesses as uncaring, they hypothesized that the very number of witnesses might have been the problem. They designed a series of experiments to test this.\n\nIn one study, participants were placed in separate rooms and communicated via intercom. When one \"participant\" (actually a recording) simulated having a seizure, those who believed they were the only one who could hear it responded quickly—85% within one minute. But when participants believed four others were also listening, only 31% responded.\n\nDarley and Latané called this the \"bystander effect\"—the finding that the presence of others reduces individual helping behavior through two mechanisms: diffusion of responsibility (\"someone else will help\") and pluralistic ignorance (\"nobody else seems concerned, so it must not be serious\").\n\nNote: Later research revealed that the original Times story was significantly exaggerated—fewer people witnessed the attack than claimed, and some did call police. But the research it inspired has been robustly confirmed.",
    "contentKa": "1964 წელს, კიტი ჯენოვეზე ნიუ-იორკში თავს დასხმულეს დროს მოიკლა. მრავალმა ესმა დაინახა, მაგრამ არავინ დაეხმარა. ფსიქოლოგებმა დარლიმ და ლატანემ აღმოაჩინეს \"თვალთმხილველის ეფექტი\"—რა჊ მეტი ადამიანია დამსწრე, მით ნაკლებად თითოეული დახმარების ალბათობა მცირდება.",
    "moral": "The more people present during an emergency, the less likely any individual is to help—a counterintuitive finding with life-saving implications.",
    "moralKa": "რა჊ მეტი ადამიანი არის საგანგაშო სიტუაციაში, მით ნაკლებადია თითოეულის დახმარება.",
    "titleRu": "Китти Дженовезе и апатия свидетеля",
    "titleHy": "Kitty Genovese և Bystander Apathy",
    "contentHy": "1964 թվականի մարտի 13-ին 28-ամյա Քեթրին «Քիթի» Ջենովեզը վերադառնում էր իր բնակարան Քու Գարդենսում, Քուինս, Նյու Յորք, ժամը 03:15-ին, բարի մենեջերի իր հերթափոխն ավարտելուց հետո: Երբ նա քայլում էր իր մեքենայից, նրա վրա հարձակվեց Ուինսթոն Մոզելին:\n\nՔիթին գոռաց օգնության համար։ Բազմաբնակարան շենքում վառվել են լույսերը. Հարևանը պատուհանից գոռաց. Մոզելին փախավ, բայց տասը րոպե անց վերադարձավ, որպեսզի նորից հարձակվի նրա վրա աստիճաններով, որտեղ նա դանակահարեց, կողոպտեց և ի վերջո սպանեց նրան:\n\nThe New York Times-ը հաղորդում է, որ 38 վկաներ դիտել կամ լսել են հարձակումը և ոչինչ չեն արել, մի պնդում, որը դարձավ քաղաքային ապատիայի որոշիչ պատմությունը: Վերնագիրը ցնցեց ազգին.\n\nՀոգեբաններ Ջոն Դարլին և Բիբ Լատանեն խորապես անհանգստացած էին այս պատմությունից: Վկաներին պարզապես չդատապարտելու փոխարեն՝ նրանք ենթադրեցին, որ խնդիրը կարող էր լինել հենց վկաների թիվը: Նրանք նախագծեցին մի շարք փորձեր՝ դա ստուգելու համար:\n\nՀետազոտություններից մեկում մասնակիցներին տեղավորել են առանձին սենյակներում և հաղորդակցվել ինտերկոմի միջոցով: Երբ «մասնակիցներից մեկը» (իրականում ձայնագրություն) նմանակում էր նոպա ունենալը, նրանք, ովքեր հավատում էին, որ միակն է, ով կարող էր դա լսել, արագ արձագանքեցին՝ 85% մեկ րոպեի ընթացքում: Բայց երբ մասնակիցները կարծում էին, որ ևս չորսը նույնպես լսում են, միայն 31%-ն է պատասխանել:\n\nԴարլին և Լատանեն սա անվանեցին «կողմնակի էֆեկտ»՝ այն բացահայտումը, որ ուրիշների ներկայությունը նվազեցնում է անհատական ​​օգնության վարքագիծը երկու մեխանիզմների միջոցով՝ պատասխանատվության բաշխում («ուրիշը կօգնի») և բազմակարծիք տգիտություն («ուրիշ ոչ ոք մտահոգված չէ, ուստի այն չպետք է լուրջ լինի»):\n\nՆշում. Հետագայում հետազոտությունները պարզեցին, որ Times-ի սկզբնական պատմությունը զգալիորեն ուռճացված էր. ավելի քիչ մարդիկ են ականատես եղել հարձակմանը, քան պնդում էին, իսկ ոմանք էլ ոստիկանություն են կանչել: Բայց նրա կողմից ոգեշնչված հետազոտությունը հաստատապես հաստատվել է:",
    "titleAz": "Kitty Genovese və Bystander Apatiyası",
    "contentAz": "13 mart 1964-cü ildə 28 yaşlı Catherine \"Kitty\" Genovese bar meneceri kimi növbəsini bitirdikdən sonra təxminən saat 3:15-də Nyu-Yorkun Kvins ştatındakı Kew Gardensdəki mənzilinə qayıdırdı. O, avtomobilindən gedərkən Uinston Mozilinin hücumuna məruz qalıb.\n\nKitty kömək üçün qışqırdı. Yaşayış binasında işıqlar yanıb. Qonşu pəncərədən qışqırdı. Moseley qaçdı, lakin on dəqiqə sonra geri qayıdıb, pilləkən boşluğunda yenidən ona hücum etdi, burada bıçaqladı, qarət etdi və nəticədə onu öldürdü.\n\nThe New York Times xəbər verir ki, 38 şahid hücumu izləyib və ya eşidib və heç nə etməyib – bu, şəhər laqeydliyinin əsas hekayəsinə çevrilib. Başlıq milləti şoka saldı.\n\nPsixoloqlar Con Darli və Bibb Latane hekayədən çox narahat idilər. Şahidləri sadəcə olaraq diqqətsiz kimi qınamaq əvəzinə, onlar fərz etdilər ki, şahidlərin çoxluğu problem ola bilərdi. Bunu yoxlamaq üçün bir sıra təcrübələr hazırladılar.\n\nBir araşdırmada iştirakçılar ayrı otaqlara yerləşdirilib və interkom vasitəsilə əlaqə saxlanılıb. Bir \"iştirakçı\" (əslində səsyazma) tutma keçirməyi simulyasiya etdikdə, bunu eşidə bilən yeganə şəxs olduğuna inananlar tez cavab verdilər - bir dəqiqə ərzində 85%. Lakin iştirakçılar dörd nəfərin də dinlədiyinə inandıqda, yalnız 31% cavab verdi.\n\nDarley və Latane bunu \"gözdən keçirmə effekti\" adlandırdılar - başqalarının mövcudluğunun iki mexanizm vasitəsilə fərdi yardım davranışını azaldacağının tapılması: məsuliyyətin yayılması (\"başqası kömək edəcək\") və plüralistik cəhalət (\"başqa heç kimi narahat etmir, ona görə də ciddi olmamalıdır\").\n\nQeyd: Sonrakı araşdırmalar orijinal Times hekayəsinin əhəmiyyətli dərəcədə şişirdildiyini ortaya qoydu - iddia ediləndən daha az adam hücumun şahidi oldu və bəziləri polisə zəng etdi. Lakin onun ilham verdiyi tədqiqat möhkəm şəkildə təsdiqləndi.",
    "contentRu": "13 марта 1964 года 28-летняя Кэтрин «Китти» Дженовезе возвращалась в свою квартиру в Кью-Гарденс, Квинс, Нью-Йорк, примерно в 3:15 утра после окончания смены в качестве менеджера бара. Когда она выходила из машины, на нее напал Уинстон Мозли.\n\nКитти звала на помощь. В многоквартирном доме зажегся свет. Сосед кричал из окна. Мозли убежал, но вернулся через десять минут, чтобы снова напасть на нее на лестничной клетке, где он нанес ей удар, ограбил и в конечном итоге убил ее.\n\nГазета New York Times сообщила, что 38 свидетелей наблюдали или слышали нападение и ничего не предприняли — это утверждение стало определяющей историей городской апатии. Заголовок шокировал нацию.\n\nПсихологи Джон Дарли и Бибб Латане были глубоко обеспокоены этой историей. Вместо того, чтобы просто осудить свидетелей как равнодушных, они предположили, что проблема могла быть в самом количестве свидетелей. Чтобы проверить это, они разработали серию экспериментов.\n\nВ одном исследовании участников поместили в отдельные комнаты и общались через интерком. Когда один «участник» (на самом деле запись) имитировал приступ, те, кто считал, что они единственные, кто мог это слышать, отреагировали быстро — 85% в течение одной минуты. Но когда участники поверили, что четверо других тоже слушают, ответил только 31%.\n\nДарли и Латане назвали это «эффектом свидетеля» — обнаружение того, что присутствие других снижает индивидуальное помогающее поведение посредством двух механизмов: распыления ответственности («кто-то другой поможет») и плюралистического невежества («никто больше не обеспокоен, поэтому это не должно быть серьезно»).\n\nПримечание. Более поздние исследования показали, что первоначальная история Times была значительно преувеличена: свидетелями нападения стало меньше людей, чем утверждалось, а некоторые все же вызвали полицию. Но исследования, которые оно вдохновило, получили убедительное подтверждение.",
    "moralHy": "Որքան շատ մարդիկ ներկա գտնվեն արտակարգ իրավիճակների ժամանակ, այնքան քիչ հավանական է, որ որևէ անհատ օգնի, դա հակաինտուիտիվ բացահայտում է, որը փրկում է կյանքին:",
    "moralRu": "Чем больше людей присутствует во время чрезвычайной ситуации, тем меньше вероятность того, что кто-то сможет помочь – а это противоречивый вывод, который может спасти жизни людей.",
    "moralAz": "Fövqəladə vəziyyət zamanı nə qədər çox insan iştirak etsə, hər hansı bir şəxsin kömək etmə ehtimalı bir o qədər az olar - bu, həyat qurtaran nəticələri olan əks-intuitiv tapıntıdır."
  },
  {
    "id": 8,
    "title": "Seligman and the Dogs Who Gave Up",
    "titleKa": "სელიგმანი და ძაღლები, რომლებმა჊ დანებდეს",
    "chapterId": 10,
    "icon": "mdi:emoticon-sad-outline",
    "content": "In 1967, Martin Seligman and Steven Maier were graduate students at the University of Pennsylvania conducting research on learning. Their experiment would accidentally reveal one of psychology's most important concepts.\n\nThe experiment had three groups of dogs. Group 1 received mild electric shocks they could stop by pressing a panel with their noses. Group 2 received the same shocks but had no way to stop them—they were \"yoked\" to Group 1, receiving the exact same pattern of shocks regardless of what they did. Group 3 received no shocks at all.\n\nLater, all three groups were placed in a shuttle box—a chamber divided by a low barrier the dogs could easily jump over. Shocks were delivered to one side, and the dogs simply needed to jump to the other side to escape.\n\nGroups 1 and 3 quickly learned to jump the barrier. But Group 2—the dogs who had previously been unable to escape—didn't even try. They lay down, whimpered, and passively accepted the shock. Two-thirds of them made no attempt to escape, even though the barrier was right there.\n\nSeligman called this \"learned helplessness\"—the state in which, after experiencing uncontrollable negative events, an organism stops trying to change its situation even when escape becomes possible.\n\nThe implications extended far beyond dogs. Seligman proposed that learned helplessness was a key model for understanding human depression. People who experience repeated failures or uncontrollable negative events may develop a pervasive belief that their actions don't matter—leading to passivity, sadness, and withdrawal.\n\nThis insight led Seligman to develop new therapeutic approaches. Crucially, he discovered that learned helplessness could be reversed through \"immunization\"—earlier experiences of mastery and control. This eventually led him to found the field of positive psychology, studying not just what makes people sick but what makes them flourish.",
    "contentKa": "1967 წელს, მარტინ სელიგმანმა ექსპერიმენტი ჩაატარა ძაღლებზე, რომლებსა჊ ელექტროშოკისგან თავის დაღწევა არ შეეძლოთ. მოგვიანებით მათ თავის დაღწევა჊ შეეძლოთ, მაგრამ არ სცადეს. სელიგმანმა ამას \"სწავლილი უძლურობა\" უწოდა და ეს დეპრესიის გაგების მოდელად იქ჊ა. მოგვიანებით მან პოზიტიური ფსიქოლოგია დააარსა.",
    "moral": "Repeated failure can teach us to stop trying—but helplessness can be unlearned. Experiences of mastery and control can reverse it.",
    "moralKa": "განმეორებულმა წარუმატებებმა შეიძლება გვასწავლოს დანებდეს, მაგრამ უძლურობას გადასწავლა შეიძლება.",
    "titleRu": "Селигман и сдавшиеся собаки",
    "moralAz": "Təkrarlanan uğursuzluqlar bizə cəhd etməyi dayandırmağı öyrədə bilər, lakin acizlik öyrənilə bilər. Ustalıq və nəzarət təcrübələri onu geri qaytara bilər.",
    "moralRu": "Повторяющиеся неудачи могут научить нас перестать пытаться, но от беспомощности можно отучиться. Опыт мастерства и контроля может обратить это вспять.",
    "moralHy": "Կրկնվող ձախողումները կարող են սովորեցնել մեզ դադարեցնել փորձերը, բայց անօգնականությունը կարող է չսովորել: Վարպետության և վերահսկողության փորձը կարող է շրջել այն:",
    "titleHy": "Սելիգմանը և շները, ովքեր հանձնվեցին",
    "contentHy": "1967թ.-ին Մարտին Սելիգմանը և Սթիվեն Մայերը Փենսիլվանիայի համալսարանի ասպիրանտներ էին, որոնք ուսումնասիրություններ էին կատարում ուսման վերաբերյալ: Նրանց փորձը պատահաբար կբացահայտեր հոգեբանության ամենակարևոր հասկացություններից մեկը:\n\nՓորձը ունեցել է շների երեք խումբ. 1-ին խումբը ստացել է թեթև էլեկտրական ցնցումներ, որոնք կարող էին դադարեցնել՝ սեղմելով վահանակը իրենց քթով: 2-րդ խումբը ստացավ նույն ցնցումները, բայց չկարողացավ դրանք կանգնեցնել. նրանք «լծվեցին» 1-ին խմբին՝ ստանալով ցնցումների ճիշտ նույն օրինաչափությունը՝ անկախ նրանց արածից: 3-րդ խումբն ընդհանրապես ցնցումներ չի ստացել:\n\nԱվելի ուշ բոլոր երեք խմբերը տեղադրվեցին մաքոքային տուփի մեջ՝ մի խցիկ, որը բաժանված էր ցածր արգելքով, որի վրայով շները հեշտությամբ կարող էին ցատկել։ Ցնցումները հասցվել են մի կողմից, և շներին պարզապես անհրաժեշտ է եղել ցատկել մյուս կողմ՝ փախչելու համար:\n\n1-ին և 3-րդ խմբերն արագ սովորեցին ցատկել արգելապատնեշը: Բայց 2-րդ խումբը՝ շները, որոնք նախկինում չէին կարողանում փախչել, նույնիսկ չփորձեցին: Նրանք պառկեցին, նվնվացին և պասիվ ընդունեցին ցնցումը։ Նրանց երկու երրորդը փախչելու փորձեր չարեցին, չնայած որ պատնեշը հենց այնտեղ էր։\n\nՍելիգմանը սա անվանեց «սովորած անօգնականություն»՝ այն վիճակը, երբ անկառավարելի բացասական իրադարձություններ ապրելուց հետո օրգանիզմը դադարում է փորձել փոխել իր իրավիճակը, նույնիսկ երբ հնարավոր է դառնում փախուստը:\n\nՀետևանքները շատ ավելի հեռու էին շներից: Սելիգմանը առաջարկեց, որ սովորած անօգնականությունը մարդկային դեպրեսիան հասկանալու հիմնական մոդելն է: Մարդիկ, ովքեր ունենում են կրկնվող անհաջողություններ կամ անկառավարելի բացասական իրադարձություններ, կարող են զարգացնել համատարած համոզմունք, որ իրենց գործողությունները նշանակություն չունեն, ինչը հանգեցնում է պասիվության, տխրության և հեռանալու:\n\nԱյս պատկերացումը ստիպեց Սելիգմանին մշակել նոր թերապևտիկ մոտեցումներ: Կարևորն այն է, որ նա բացահայտեց, որ սովորած անօգնականությունը կարող է շրջվել «իմունիզացիայի» միջոցով՝ յուրացման և վերահսկման ավելի վաղ փորձառությունների միջոցով: Սա, ի վերջո, ստիպեց նրան հիմնել դրական հոգեբանության ոլորտը՝ ուսումնասիրելով ոչ միայն այն, ինչն է մարդկանց հիվանդացնում, այլ այն, ինչը նրանց ծաղկում է դարձնում:",
    "titleAz": "Seligman və imtina edən itlər",
    "contentAz": "1967-ci ildə Martin Seligman və Steven Maier Pensilvaniya Universitetində öyrənmə üzrə tədqiqat aparan aspirant idilər. Onların təcrübəsi təsadüfən psixologiyanın ən vacib anlayışlarından birini ortaya çıxaracaqdı.\n\nTəcrübədə üç qrup it var idi. 1-ci qrup burunları ilə panelə basaraq dayandıra bildikləri yüngül elektrik şoku aldılar. 2-ci qrup eyni zərbələri aldı, lakin onları dayandırmaq üçün heç bir yol yox idi - onlar 1-ci qrupa \"boyunduruldular\" və nə etmələrindən asılı olmayaraq eyni zərbə modelini aldılar. 3-cü qrup heç bir zərbə almadı.\n\nDaha sonra hər üç qrup itlərin asanlıqla tullana bildiyi alçaq bir maneə ilə bölünmüş bir kameraya yerləşdirildi. Zərbələr bir tərəfə çatdırıldı və itlər qaçmaq üçün sadəcə digər tərəfə tullanmalı idi.\n\n1 və 3-cü qruplar sədddən tullanmağı tez öyrəndilər. Lakin 2-ci qrup - əvvəllər qaça bilməyən itlər - cəhd belə etmədilər. Onlar uzandılar, sızıldadılar və şoku passiv qəbul etdilər. Onların üçdə ikisi maneənin tam orada olmasına baxmayaraq, qaçmağa cəhd etməyib.\n\nSeliqman bunu \"öyrənilmiş çarəsizlik\" adlandırdı - orqanizmin idarəolunmaz neqativ hadisələrlə qarşılaşdıqdan sonra hətta qaçmaq mümkün olduqda belə vəziyyətini dəyişməyə cəhd etməyi dayandırdığı vəziyyət.\n\nNəticələr itlərdən çox kənara çıxdı. Seligman, öyrənilmiş çarəsizliyin insan depressiyasını anlamaq üçün əsas model olduğunu təklif etdi. Dəfələrlə uğursuzluqlar və ya idarəolunmaz neqativ hadisələrlə qarşılaşan insanlar, hərəkətlərinin heç bir əhəmiyyət kəsb etmədiyinə dair geniş bir inam inkişaf etdirə bilər - passivliyə, kədərə və geri çəkilməyə səbəb olur.\n\nBu fikir Seligmanı yeni terapevtik yanaşmalar inkişaf etdirməyə vadar etdi. Əsas odur ki, o, öyrənilmiş çarəsizliyin “immunizasiya” yolu ilə geri qaytarıla biləcəyini kəşf etdi - əvvəlki mənimsəmə və nəzarət təcrübələri. Bu, nəhayət, onu müsbət psixologiya sahəsini tapmağa vadar etdi, insanları nəinki xəstələndirdiyini, həm də onları çiçəkləndirən şeyi öyrəndi.",
    "contentRu": "В 1967 году Мартин Селигман и Стивен Майер были аспирантами Пенсильванского университета и проводили исследования в области обучения. Их эксперимент случайно раскрыл одну из самых важных концепций психологии.\n\nВ эксперименте участвовали три группы собак. Группа 1 получила легкий удар током, который они могли остановить, нажав носом на панель. Группа 2 получила те же самые потрясения, но не имела возможности их остановить — они были «привязаны» к Группе 1, получая точно такую ​​же схему потрясений, независимо от того, что они делали. Группа 3 вообще не подвергалась никаким потрясениям.\n\nПозже все три группы были помещены в челночный бокс — камеру, разделенную невысоким барьером, через который собаки могли легко перепрыгнуть. Удары наносились в одну сторону, и собакам просто нужно было перепрыгнуть на другую сторону, чтобы спастись.\n\nГруппы 1 и 3 быстро научились перепрыгивать барьер. Но группа 2 — собаки, ранее не сумевшие убежать, — даже не попыталась. Они легли, хныкали и пассивно принимали шок. Две трети из них не пытались бежать, хотя барьер был тут же.\n\nСелигман назвал это «выученной беспомощностью» — состоянием, в котором после переживания неконтролируемых негативных событий организм перестает пытаться изменить свою ситуацию, даже когда бегство становится возможным.\n\nПоследствия распространялись далеко за пределы собак. Селигман предположил, что выученная беспомощность является ключевой моделью для понимания человеческой депрессии. У людей, которые сталкиваются с повторяющимися неудачами или неконтролируемыми негативными событиями, может развиться всепроникающее убеждение, что их действия не имеют значения, что приводит к пассивности, печали и замкнутости.\n\nЭто понимание побудило Селигмана разработать новые терапевтические подходы. Что особенно важно, он обнаружил, что выученную беспомощность можно обратить вспять посредством «иммунизации» — более раннего опыта господства и контроля. В конечном итоге это привело его к созданию области позитивной психологии, изучающей не только то, что делает людей больными, но и то, что помогает им процветать."
  },
  {
    "id": 9,
    "title": "The Case of H.M.: A Life Without Memory",
    "titleKa": "H.M.-ის შემთხვევა: ცხოვრება მეხსიერების გარეშე",
    "chapterId": 7,
    "icon": "mdi:head-question-outline",
    "content": "Henry Gustav Molaison—known for decades in scientific literature only as \"H.M.\" to protect his privacy—is perhaps the most studied individual in the history of neuroscience. His story begins with tragedy and becomes a cornerstone of memory research.\n\nH.M. suffered from severe, debilitating epilepsy that began after a bicycle accident at age seven. By his mid-twenties, the seizures had become so frequent and violent that he could not hold a job or live independently.\n\nIn 1953, neurosurgeon William Beecher Scoville performed an experimental operation. He removed large portions of H.M.'s medial temporal lobes bilaterally—including most of his hippocampus on both sides.\n\nThe surgery was a medical success: the seizures were dramatically reduced. But the side effect was devastating. H.M. could no longer form new long-term memories. He could remember events from his childhood, his parents' names, and facts from before the surgery. But anything that happened after 1953 vanished within minutes.\n\nH.M. would read the same magazine over and over, enjoying it fresh each time. He could not recognize the researchers who visited him daily for years. Every day, his father's death was news to him again. He described his existence as \"like waking from a dream... every day is alone in itself.\"\n\nYet H.M.'s memory was not entirely destroyed. He could learn new motor skills—like tracing a star in a mirror—and improve with practice, even though he had no memory of having practiced. This proved that different types of memory (declarative vs. procedural) involve different brain systems.\n\nH.M. cooperated with researchers for over 50 years until his death in 2008. His brain was donated to science, sliced into 2,401 thin sections, and digitized for future study. His case single-handedly established the hippocampus as critical for memory formation and reshaped our understanding of how memories are made.",
    "contentKa": "ჰენრი მოლეიზონი (H.M.) ნეირომეცნიერების ისტორიაში ყველაზე შესწავლილი ადამიანია. 1953 წელს ეპილეფსიის სამკურნალოდ, ქირურგმა ჰიპოკამპი ამოაჭრა. კრუნჩხები შემცირდა, მაგრამ ახალი გრძელვადიანი მოგონებების ჩამოყალიბება ვერ შეძლო. მისმა შემთხვევამ დაამტკიცა, რომ ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია.",
    "moral": "The hippocampus is critical for memory formation—and different types of memory involve separate brain systems.",
    "moralKa": "ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია, და მეხსიერების სხვადასხვა ტიპები სხვადასხვა ტვინის სისტემებს იყენებს.",
    "titleRu": "Дело Х.М.: жизнь без памяти",
    "moralAz": "Hipokampus yaddaşın formalaşması üçün vacibdir və müxtəlif yaddaş növləri ayrı beyin sistemlərini əhatə edir.",
    "moralHy": "Հիպոկամպը կարևոր նշանակություն ունի հիշողության ձևավորման համար, և հիշողության տարբեր տեսակներ ներառում են ուղեղի առանձին համակարգեր:",
    "titleHy": "Հ.Մ.-ի գործը՝ կյանք առանց հիշողության",
    "moralRu": "Гиппокамп имеет решающее значение для формирования памяти, а разные типы памяти задействуют отдельные системы мозга.",
    "contentRu": "Генри Густав Молесон, десятилетиями известный в научной литературе только как «Е.М.» чтобы защитить свою частную жизнь, — пожалуй, самый изученный человек в истории нейробиологии. Его история начинается с трагедии и становится краеугольным камнем исследований памяти.\n\nХ.М. страдал от тяжелой, изнурительной эпилепсии, которая началась после велосипедной аварии в возрасте семи лет. К двадцати годам припадки стали настолько частыми и сильными, что он не мог ни работать, ни жить самостоятельно.\n\nВ 1953 году нейрохирург Уильям Бичер Сковилл провел экспериментальную операцию. Он удалил большие части медиальных височных долей Х. М. с обеих сторон, включая большую часть гиппокампа с обеих сторон.\n\nОперация прошла с медицинской точки зрения успешно: приступы резко уменьшились. Но побочный эффект был разрушительным. Х.М. больше не мог формировать новые долговременные воспоминания. Он мог вспомнить события из своего детства, имена своих родителей и факты, произошедшие до операции. Но все, что произошло после 1953 года, исчезло за считанные минуты.\n\nХ.М. читал один и тот же журнал снова и снова, каждый раз наслаждаясь его свежестью. Он не мог узнать исследователей, которые навещали его ежедневно в течение многих лет. Каждый день смерть отца снова была для него новостью. Он описывал свое существование как «как пробуждение ото сна… каждый день сам по себе одинок».\n\nИ все же память Х.М. не была полностью уничтожена. Он мог освоить новые двигательные навыки — например, рисовать звезду в зеркале — и совершенствоваться по мере практики, хотя у него не было воспоминаний о тренировках. Это доказало, что разные типы памяти (декларативная и процедурная) задействуют разные системы мозга.\n\nХ.М. сотрудничал с исследователями более 50 лет до своей смерти в 2008 году. Его мозг был передан науке, нарезан на 2401 тонкий срез и оцифрован для будущего изучения. Его случай единолично доказал, что гиппокамп играет решающую роль в формировании памяти, и изменил наше понимание того, как создаются воспоминания.",
    "contentHy": "Հենրի Գուստավ Մոլայսոնը, որը տասնամյակներ շարունակ գիտական ​​գրականության մեջ հայտնի է միայն «Հ.Մ. պաշտպանել իր գաղտնիությունը, թերևս ամենաշատ ուսումնասիրված անհատն է նյարդագիտության պատմության մեջ: Նրա պատմությունը սկսվում է ողբերգությամբ և դառնում հիշողության հետազոտության հիմնաքար:\n\nՀ.Մ. տառապում էր ծանր, թուլացնող էպիլեպսիայով, որը սկսվել էր յոթ տարեկանում հեծանվային վթարից հետո: Նրա քսան տարեկանների կեսերին նոպաներն այնքան հաճախակի ու կատաղի էին դարձել, որ նա չէր կարող աշխատանք ունենալ կամ ինքնուրույն ապրել:\n\n1953 թվականին նյարդավիրաբույժ Ուիլյամ Բիչեր Սքովիլը փորձարարական վիրահատություն է կատարել։ Նա երկկողմանի հեռացրել է Հ.Մ.-ի միջին ժամանակային բլթերի մեծ մասը՝ ներառյալ նրա հիպոկամպի մեծ մասը երկու կողմերից:\n\nՎիրահատությունը բժշկական հաջողություն ունեցավ. նոպաները կտրուկ նվազեցին: Բայց կողմնակի ազդեցությունը կործանարար էր: Հ.Մ. այլևս չէր կարող նոր երկարաժամկետ հիշողություններ ձևավորել: Նա կարող էր հիշել իր մանկության դեպքերը, ծնողների անունները և փաստեր վիրահատությունից առաջ: Բայց այն ամենը, ինչ տեղի ունեցավ 1953 թվականից հետո, անհետացավ րոպեների ընթացքում:\n\nՀ.Մ. կարդում էր նույն ամսագիրը նորից ու նորից՝ ամեն անգամ թարմ վայելելով այն: Նա չէր կարողանում ճանաչել այն հետազոտողներին, ովքեր տարիներ շարունակ այցելում էին իրեն։ Ամեն օր հոր մահը նորից նորություն էր նրա համար։ Նա նկարագրել է իր գոյությունը որպես «երազից արթնանալու նման... ամեն օր ինքնին մենակ է»:\n\nՍակայն Հ.Մ.-ի հիշողությունն ամբողջությամբ չի ոչնչացվել։ Նա կարող էր սովորել նոր շարժիչ հմտություններ, օրինակ՝ աստղին հայելու մեջ հետագծելը, և կատարելագործվել պրակտիկայի ընթացքում, թեև նա չէր հիշում, որ մարզվել է: Սա ապացուցեց, որ հիշողության տարբեր տեսակներ (դեկլարատիվ ընդդեմ ընթացակարգային) ներառում են ուղեղի տարբեր համակարգեր:\n\nՀ.Մ. Ավելի քան 50 տարի համագործակցել է հետազոտողների հետ մինչև իր մահը 2008թ.: Նրա ուղեղը նվիրաբերվել է գիտությանը, կտրատվել 2401 բարակ հատվածների և թվայնացվել հետագա ուսումնասիրության համար: Նրա դեպքը միայնակ հաստատեց հիպոկամպը որպես կարևոր նշանակություն հիշողության ձևավորման համար և վերափոխեց մեր պատկերացումները, թե ինչպես են ստեղծվում հիշողությունները:",
    "titleAz": "H.M.-nin işi: Yaddaşsız bir həyat",
    "contentAz": "Henry Gustav Molaison — onilliklər boyu elmi ədəbiyyatda yalnız \"H.M.\" kimi tanınır. şəxsi həyatını qorumaq - bəlkə də nevrologiya tarixində ən çox öyrənilmiş fərddir. Onun hekayəsi faciə ilə başlayır və yaddaş tədqiqatının təməl daşına çevrilir.\n\nH.M. yeddi yaşında velosiped qəzasından sonra başlayan ağır, zəiflədici epilepsiyadan əziyyət çəkirdi. İyirmi yaşlarının ortalarında qıcolmalar o qədər tez-tez və şiddətli olurdu ki, o, nə işlə məşğul ola, nə də müstəqil yaşaya bildi.\n\n1953-cü ildə neyrocərrah William Bicher Scoville eksperimental əməliyyat keçirdi. O, H.M.-nin medial temporal loblarının böyük hissələrini, o cümlədən hər iki tərəfdəki hipokampusunun böyük hissəsini ikitərəfli şəkildə çıxardı.\n\nƏməliyyat tibbi uğur idi: qıcolmalar kəskin şəkildə azaldı. Ancaq yan təsir dağıdıcı oldu. H.M. artıq yeni uzunmüddətli xatirələr formalaşdıra bilmirdi. Uşaqlığından baş verənləri, valideynlərinin adlarını, əməliyyatdan əvvəlki faktları xatırlaya bilirdi. Lakin 1953-cü ildən sonra baş verən hər şey bir neçə dəqiqə ərzində yox oldu.\n\nH.M. eyni jurnalı təkrar-təkrar oxuyar, hər dəfə təzədən zövq alırdı. İllər boyu ona hər gün gələn tədqiqatçıları tanıya bilmirdi. Hər gün atasının ölümü onun üçün yenidən xəbər olurdu. O, varlığını “yuxudan oyanmaq kimi... hər gün öz-özlüyündə təkdir” kimi təsvir edirdi.\n\nBununla belə, H.M.-nin yaddaşı tamamilə məhv edilməmişdir. O, güzgüdə ulduzu izləmək kimi yeni motor bacarıqlarını öyrənə və məşq etdiyini xatırlamasa da, təcrübə ilə təkmilləşə bilərdi. Bu sübut etdi ki, müxtəlif yaddaş növləri (deklarativ və prosessual) müxtəlif beyin sistemlərini əhatə edir.\n\nH.M. 2008-ci ildə ölümünə qədər 50 ildən çox tədqiqatçılarla əməkdaşlıq etdi. Onun beyni elmə verildi, 2401 nazik hissəyə kəsildi və gələcək tədqiqatlar üçün rəqəmsallaşdırıldı. Onun işi tək başına hipokampusun yaddaşın formalaşması üçün kritik olduğunu təyin etdi və xatirələrin necə qurulduğuna dair anlayışımızı yenidən formalaşdırdı."
  },
  {
    "id": 10,
    "title": "Rosenhan's \"Being Sane in Insane Places\"",
    "titleKa": "როზენჰანის \"გონიერება გიჟურ ადგილებში\"",
    "chapterId": 14,
    "icon": "mdi:hospital-building",
    "content": "In 1973, Stanford psychologist David Rosenhan published one of the most provocative and influential studies in the history of psychiatry: \"On Being Sane in Insane Places.\"\n\nRosenhan recruited eight mentally healthy volunteers—including himself, a psychology graduate student, a pediatrician, a psychiatrist, a painter, and a housewife—to present themselves at twelve different psychiatric hospitals across the United States.\n\nEach pseudo-patient reported a single symptom: they heard a voice saying \"empty,\" \"hollow,\" or \"thud.\" They gave false names and occupations but otherwise described their life histories and emotional states truthfully. All were diagnosed with psychiatric disorders (most commonly schizophrenia) and admitted.\n\nOnce inside, all pseudo-patients immediately stopped reporting any symptoms and behaved completely normally. They took notes openly, cooperated with staff, and told doctors they felt fine. Yet not a single one was identified as healthy by staff.\n\nTheir hospitalizations lasted from 7 to 52 days, averaging 19 days. When discharged, they received the diagnosis \"schizophrenia, in remission\"—meaning the label stuck even upon release.\n\nIronically, real patients often recognized the pseudo-patients were not mentally ill. \"You're not crazy. You're a journalist or a professor,\" they said. But staff never questioned the diagnoses.\n\nIn a follow-up study, Rosenhan told a hospital that pseudo-patients would attempt admission over the next three months. Staff confidently identified 41 patients as impostors. In reality, Rosenhan had sent no one.\n\nThe study's conclusion was searing: psychiatric institutions cannot reliably distinguish the sane from the insane. Diagnostic labels, once applied, color all subsequent perception and behavior of both patients and staff. The study contributed to major reforms in psychiatric diagnosis and the development of more rigorous diagnostic criteria.",
    "contentKa": "1973 წელს, სტენფორდის ფსიქოლოგმა როზენჰანმა 8 ჯანსაღი მოხალისე 12 ფსიქიატრიულ საავადმყოფოში გაგზავნა. მათ შიზოფრენია დაუსვეს და 7-დან 52 დღემდე დარჩნენ. არავინ პერსონალმა ვერ ამოიცნო ისინი ჯანსაღად. ეს კვლევამ დიაგნოსტიკის სერიოზულ რეფორმებს შეუწყო.",
    "moral": "Labels are powerful—once categorized, everything is seen through that lens. Psychiatric diagnosis must be approached with extreme rigor and humility.",
    "moralKa": "იარლიყები ძალიან ძლიერია—ერთხელ კატეგორიზებული, ყველაფერი ამ ლინზით აღიქმება.",
    "titleRu": "Розенхан «Быть ​​в здравом уме в безумных местах».",
    "moralAz": "Etiketlər güclüdür - kateqoriyalara bölündükdən sonra hər şey bu obyektivdən görünür. Psixiatrik diaqnoza həddindən artıq ciddilik və təvazökarlıqla yanaşmaq lazımdır.",
    "moralHy": "Պիտակները հզոր են. դասակարգվելուց հետո ամեն ինչ երևում է այդ ոսպնյակի միջով: Հոգեբուժական ախտորոշմանը պետք է մոտենալ ծայրահեղ խստությամբ և խոնարհությամբ:",
    "titleHy": "Ռոզենհանի «Մեղսունակ լինել խելագար վայրերում»",
    "contentHy": "1973 թվականին Սթենֆորդի հոգեբան Դեյվիդ Ռոզենհանը հրապարակեց հոգեբուժության պատմության մեջ ամենասադրիչ և ազդեցիկ հետազոտություններից մեկը՝ «Խելագար վայրերում ողջախոհ լինելու մասին»։\n\nՌոզենհանը հավաքագրեց ութ հոգեպես առողջ կամավորների, այդ թվում՝ ինքը՝ հոգեբանության ասպիրանտ, մանկաբույժ, հոգեբույժ, նկարիչ և տնային տնտեսուհի, որպեսզի ներկայանան Միացյալ Նահանգների տասներկու տարբեր հոգեբուժարաններում:\n\nՅուրաքանչյուր կեղծ հիվանդ հայտնել է մեկ ախտանիշ. նրանք լսել են մի ձայն, որն ասում էր «դատարկ», «խոռոչ» կամ «դուխ»: Նրանք կեղծ անուններ և զբաղմունքներ էին տալիս, բայց այլ կերպ ճշմարիտ նկարագրում էին իրենց կյանքի պատմությունն ու հուզական վիճակները: Բոլորի մոտ ախտորոշվել են հոգեկան խանգարումներ (առավել հաճախ՝ շիզոֆրենիա) և ընդունվել:\n\nՆերս մտնելուց հետո բոլոր պսևդո-հիվանդներն անմիջապես դադարեցրին որևէ ախտանիշ հայտնել և իրենց լիովին նորմալ պահեցին: Նրանք բացահայտ նշումներ էին անում, համագործակցում անձնակազմի հետ և բժիշկներին ասացին, որ իրենց լավ են զգում: Այնուամենայնիվ, անձնակազմի կողմից ոչ մեկը առողջ չի ճանաչվել:\n\nՆրանց հոսպիտալացումները տեւել են 7-ից 52 օր՝ միջինը 19 օր։ Դուրս գրվելիս նրանք ստացել են «շիզոֆրենիա, ռեմիսիայի մեջ» ախտորոշումը, ինչը նշանակում է, որ պիտակը կպչում է նույնիսկ ազատ արձակվելուց հետո:\n\nՃակատագրի հեգնանքով, իրական հիվանդները հաճախ ճանաչում էին, որ կեղծ հիվանդները հոգեկան հիվանդ չեն: «Դու գիժ չես, դու լրագրող ես կամ պրոֆեսոր»,- ասացին նրանք։ Բայց անձնակազմը երբեք կասկածի տակ չի դրել ախտորոշումները:\n\nՀետագա ուսումնասիրության ընթացքում Ռոզենհանը հիվանդանոցում ասաց, որ կեղծ հիվանդները կփորձեն ընդունելություն առաջիկա երեք ամիսների ընթացքում: Անձնակազմը վստահորեն հայտնաբերել է 41 հիվանդի որպես խաբեբաներ: Իրականում Ռոզենհանը ոչ ոքի չէր ուղարկել։\n\nՀետազոտության եզրակացությունը սարսափելի էր. հոգեբուժական հաստատությունները չեն կարող հուսալիորեն տարբերել ողջախոհներին խելագարներից: Ախտորոշիչ պիտակները, կիրառվելուց հետո, գունավորում են ինչպես հիվանդների, այնպես էլ անձնակազմի բոլոր հետագա ընկալումն ու վարքը: Ուսումնասիրությունը նպաստեց հոգեբուժական ախտորոշման հիմնական բարեփոխումներին և ավելի խիստ ախտորոշիչ չափանիշների մշակմանը:",
    "moralRu": "Ярлыки обладают мощной силой: после того, как они классифицированы, все можно увидеть через эту призму. К психиатрическому диагнозу необходимо подходить с предельной строгостью и смирением.",
    "titleAz": "Rosenhanın \"Dəli yerlərdə ağlı başında olmaq\"",
    "contentRu": "В 1973 году психолог из Стэнфорда Дэвид Розенхан опубликовал одно из самых провокационных и влиятельных исследований в истории психиатрии: «О том, как быть в здравом уме в безумных местах».\n\nРозенхан набрал восемь психически здоровых добровольцев, в том числе себя самого, аспиранта психологии, педиатра, психиатра, художника и домохозяйку, чтобы они явились в двенадцать различных психиатрических больниц по всей территории Соединенных Штатов.\n\nКаждый псевдопациент сообщал об одном симптоме: он слышал голос, говорящий «пусто», «пусто» или «стук». Они называли вымышленные имена и род занятий, но в остальном правдиво описывали историю своей жизни и эмоциональное состояние. У всех были диагностированы психические расстройства (чаще всего шизофрения) и госпитализированы.\n\nОказавшись внутри, все псевдопациенты сразу же перестали сообщать о каких-либо симптомах и вели себя совершенно нормально. Они открыто делали записи, сотрудничали с персоналом и говорили врачам, что чувствуют себя хорошо. Однако ни один из них не был признан персоналом здоровым.\n\nИх госпитализация длилась от 7 до 52 дней, в среднем 19 дней. При выписке им поставили диагноз «шизофрения в стадии ремиссии», то есть ярлык приклеился даже после освобождения.\n\nПо иронии судьбы, реальные пациенты часто признавали, что псевдопациенты не были психически больными. «Ты не сумасшедший. Ты журналист или профессор», — сказали они. Но сотрудники никогда не подвергали сомнению диагнозы.\n\nВ ходе последующего исследования Розенхан сообщил больнице, что псевдопациенты будут пытаться госпитализироваться в течение следующих трех месяцев. Персонал уверенно опознал 41 пациента как самозванцев. На самом деле Розенхан никого не послал.\n\nВывод исследования был ошеломляющим: психиатрические учреждения не могут достоверно отличить здравомыслящих от невменяемых. Диагностические ярлыки, однажды примененные, определяют все последующее восприятие и поведение как пациентов, так и персонала. Исследование способствовало крупным реформам в психиатрической диагностике и разработке более строгих диагностических критериев.",
    "contentAz": "1973-cü ildə Stenford psixoloqu David Rosenhan psixiatriya tarixindəki ən təxribatçı və təsirli araşdırmalardan birini nəşr etdi: \"Dəli yerlərdə ağlı başında olmaq haqqında\".\n\nRosenhan, ABŞ-da on iki müxtəlif psixiatriya xəstəxanasında özlərini təqdim etmək üçün özü, psixologiya aspirantı, pediatr, psixiatr, rəssam və ev xanımı daxil olmaqla səkkiz əqli cəhətdən sağlam könüllü işə götürdü.\n\nHər bir psevdo-xəstə tək bir simptom haqqında məlumat verdi: onlar \"boş\", \"boş\" və ya \"tünd\" deyən bir səs eşitdilər. Onlar yalançı adlar və peşələr verdilər, lakin başqa cür öz həyat tarixçələrini və emosional vəziyyətlərini doğru şəkildə təsvir etdilər. Hamısına psixiatrik pozğunluqlar (ən çox şizofreniya) diaqnozu qoyulub və qəbul edilib.\n\nİçəri daxil olduqdan sonra bütün psevdo-xəstələr dərhal hər hansı simptomları bildirməyi dayandırdılar və özlərini tamamilə normal apardılar. Onlar açıq şəkildə qeydlər apardılar, işçilərlə əməkdaşlıq etdilər və həkimlərə özlərini yaxşı hiss etdiklərini söylədilər. Bununla belə, heyət tərəfindən heç birinin sağlam olduğu müəyyən edilmədi.\n\nOnların xəstəxanaya yerləşdirilməsi orta hesabla 19 gün olmaqla 7 gündən 52 günə qədər davam edib. Buraxıldıqda, onlar \"şizofreniya, remissiyada\" diaqnozunu aldılar, yəni etiket buraxıldıqda belə yapışdırıldı.\n\nQəribədir ki, real xəstələr tez-tez psevdo-xəstələrin ruhi xəstə olmadığını tanıyırdılar. “Sən dəli deyilsən, jurnalistsən, professorsan” dedilər. Lakin işçilər heç vaxt diaqnozları şübhə altına almadılar.\n\nSonrakı araşdırmada Rosenhan bir xəstəxanaya dedi ki, psevdo-xəstələr növbəti üç ay ərzində qəbula cəhd edəcəklər. İşçilər 41 xəstəni inamla saxtakar kimi tanıyıblar. Əslində, Rosenhan heç kimi göndərməmişdi.\n\nTədqiqatın nəticəsi dəhşətli idi: psixiatriya institutları sağlam düşüncəli ilə dəlini etibarlı şəkildə ayıra bilmir. Diaqnostik etiketlər tətbiq edildikdən sonra həm xəstələrin, həm də işçilərin bütün sonrakı qavrayışlarını və davranışlarını rəngləndirir. Tədqiqat psixiatrik diaqnostikada əsas islahatlara və daha ciddi diaqnostik meyarların hazırlanmasına kömək etdi."
  }
]dir",
          "Lazımsız məşq edin"
        ],
        "explanationHy": "Մարմինը աշխատում է բնական քաշի միջակայքը պահպանելու համար:",
        "questionRu": "Теория заданного значения гласит:",
        "questionHy": "Սահմանված կետերի տեսությունն ասում է.",
        "explanationRu": "Тело работает над поддержанием естественного диапазона веса.",
        "explanationAz": "Bədən təbii çəki aralığını saxlamaq üçün çalışır.",
        "questionAz": "Set nöqtəsi nəzəriyyəsi deyir:"
      },
      {
        "id": "q10-5",
        "question": "Ekman found emotions are:",
        "questionKa": "ეკმანმა აღმოაჩინა, რომ ემოციები არის:",
        "options": [
          "Culturally unique",
          "Universal",
          "Only learned",
          "Different everywhere"
        ],
        "optionsKa": [
          "კულტურულად უნიკალური",
          "უნივერსალური",
          "მხოლოდ ნასწავლი",
          "ყველგან განსხვავებული"
        ],
        "correctIndex": 1,
        "explanation": "Basic expressions are universal.",
        "explanationKa": "ძირითადი გამოხატულებები უნივერსალურია.",
        "optionsRu": [
          "Культурно уникальный",
          "Универсальный",
          "Только узнал",
          "Везде разные"
        ],
        "optionsHy": [
          "Մշակութային եզակի",
          "Ունիվերսալ",
          "Միայն սովորել",
          "Ամենուր տարբեր"
        ],
        "optionsAz": [
          "Mədəni cəhətdən unikal",
          "Universal",
          "Yalnız öyrənildi",
          "Hər yerdə fərqli"
        ],
        "questionRu": "Экман обнаружил, что эмоции:",
        "explanationRu": "Базовые выражения универсальны.",
        "explanationHy": "Հիմնական արտահայտությունները համընդհանուր են:",
        "questionHy": "Էքմանի հայտնաբերած զգացմունքներն են.",
        "questionAz": "Ekmanın tapdığı duyğular bunlardır:",
        "explanationAz": "Əsas ifadələr universaldır."
      },
      {
        "id": "q10-6",
        "question": "Yerkes-Dodson law:",
        "questionKa": "იერქს-დოდსონის კანონი:",
        "options": [
          "More arousal better",
          "Moderate arousal optimal",
          "Low arousal best",
          "Arousal irrelevant"
        ],
        "optionsKa": [
          "მეტი აგზნება უკეთესია",
          "ზომიერი აგზნება ოპტიმალურია",
          "დაბალი აგზნება საუკეთესოა",
          "აგზნება არაარსებითია"
        ],
        "correctIndex": 1,
        "explanation": "Moderate arousal leads to optimal performance.",
        "explanationKa": "ზომიერი აგზნება იწვევს ოპტიმალურ შესრულებას.",
        "optionsRu": [
          "Чем больше возбуждения, тем лучше",
          "Умеренное возбуждение оптимально",
          "Лучше всего низкое возбуждение",
          "Возбуждение не имеет значения"
        ],
        "optionsHy": [
          "Ավելի լավ գրգռում",
          "Միջին գրգռման օպտիմալ",
          "Ցածր գրգռվածությունը լավագույնս",
          "Գրգռումը անտեղի"
        ],
        "optionsAz": [
          "Daha çox həyəcan daha yaxşıdır",
          "Orta dərəcədə oyanma optimaldır",
          "Aşağı həyəcan ən yaxşısı",
          "Oyanış əhəmiyyətsizdir"
        ],
        "questionRu": "Закон Йеркса-Додсона:",
        "explanationHy": "Չափավոր գրգռումը հանգեցնում է օպտիմալ կատարման:",
        "questionHy": "Երկես-Դոդսոնի օրենքը.",
        "explanationRu": "Умеренное возбуждение приводит к оптимальной производительности.",
        "questionAz": "Yerkes-Dodson qanunu:",
        "explanationAz": "Orta dərəcədə həyəcanlanma optimal performansa gətirib çıxarır."
      },
      {
        "id": "q10-7",
        "question": "Cannon-Bard says:",
        "questionKa": "კენონ-ბარდის თეორია ამბობს:",
        "options": [
          "Body causes emotions",
          "Emotions and arousal occur simultaneously",
          "We label arousal",
          "Emotions unnecessary"
        ],
        "optionsKa": [
          "სხეული იწვევს ემოციებს",
          "ემოციები და აგზნება ერთდროულად ხდება",
          "ჩვენ აგზნებას ვასახელებთ",
          "ემოციები არ არის საჭირო"
        ],
        "correctIndex": 1,
        "explanation": "Experience and arousal happen simultaneously.",
        "explanationKa": "განცდა და აგზნება ერთდროულად ხდება.",
        "optionsRu": [
          "Тело вызывает эмоции",
          "Эмоции и возбуждение возникают одновременно",
          "Мы называем возбуждение",
          "Эмоции не нужны"
        ],
        "optionsHy": [
          "Մարմինը զգացմունքներ է առաջացնում",
          "Զգացմունքներն ու գրգռումը տեղի են ունենում միաժամանակ",
          "Մենք պիտակավորում ենք գրգռվածությունը",
          "Զգացմունքներ ավելորդ"
        ],
        "optionsAz": [
          "Bədən duyğulara səbəb olur",
          "Duyğular və həyəcan eyni vaxtda baş verir",
          "Oyanışı etiketləyirik",
          "Lazımsız duyğular"
        ],
        "questionRu": "Кэннон-Бард говорит:",
        "explanationHy": "Փորձը և գրգռվածությունը տեղի են ունենում միաժամանակ:",
        "questionHy": "Cannon-Bard ասում է.",
        "explanationRu": "Переживание и возбуждение происходят одновременно.",
        "questionAz": "Cannon-Bard deyir:",
        "explanationAz": "Təcrübə və həyəcan eyni vaxtda baş verir."
      },
      {
        "id": "q10-8",
        "question": "Overjustification effect:",
        "questionKa": "ზედმეტი გამართლების ეფექტი:",
        "options": [
          "External rewards decrease intrinsic motivation",
          "Too much motivation fails",
          "More money more effort",
          "Emotions too strong"
        ],
        "optionsKa": [
          "გარეგანი ჯილდოები ამცირებს შინაგან მოტივაციას",
          "ზედმეტი მოტივაცია ვერ ხერხდება",
          "მეტი ფული მეტი ძალისხმევა",
          "ემოციები ძალიან ძლიერია"
        ],
        "correctIndex": 0,
        "explanation": "External rewards can reduce intrinsic motivation.",
        "explanationKa": "გარეგანმა ჯილდოებმა შეიძლება შეამციროს შინაგანი მოტივაცია.",
        "optionsRu": [
          "Внешние награды снижают внутреннюю мотивацию.",
          "Слишком большая мотивация терпит неудачу",
          "Больше денег, больше усилий",
          "Эмоции слишком сильные"
        ],
        "optionsHy": [
          "Արտաքին պարգևները նվազեցնում են ներքին մոտիվացիան",
          "Չափազանց շատ մոտիվացիա ձախողվում է",
          "Ավելի շատ գումար, ավելի շատ ջանք",
          "Զգացմունքները չափազանց ուժեղ են"
        ],
        "optionsAz": [
          "Xarici mükafatlar daxili motivasiyanı azaldır",
          "Həddindən artıq motivasiya uğursuz olur",
          "Daha çox pul, daha çox səy",
          "Emosiyalar çox güclüdür"
        ],
        "questionRu": "Эффект сверхоправдания:",
        "questionHy": "Չափազանց արդարացման ազդեցություն.",
        "explanationHy": "Արտաքին պարգևները կարող են նվազեցնել ներքին մոտիվացիան:",
        "explanationRu": "Внешние награды могут снизить внутреннюю мотивацию.",
        "questionAz": "Həddindən artıq əsaslandırma effekti:",
        "explanationAz": "Xarici mükafatlar daxili motivasiyanı azalda bilər."
      },
      {
        "id": "q10-9",
        "question": "Which theory: label arousal to identify emotions?",
        "questionKa": "რომელი თეორია: აგზნების იარლიყი ემოციების იდენტიფიცირებისთვის?",
        "options": [
          "James-Lange",
          "Cannon-Bard",
          "Schachter-Singer",
          "Evolutionary"
        ],
        "optionsKa": [
          "ჯეიმს-ლანგე",
          "კენონ-ბარდი",
          "შეხტერ-სინგერი",
          "ევოლუციური"
        ],
        "correctIndex": 2,
        "explanation": "Emotion = arousal + cognitive label.",
        "explanationKa": "ემოცია = აგზნება + კოგნიტური იარლიყი.",
        "optionsRu": [
          "Джеймс-Ланге",
          "Кэннон-Бард",
          "Шахтер-Зингер",
          "Эволюционный"
        ],
        "optionsHy": [
          "Ջեյմս-Լենգ",
          "Թնդանոթ-Բարդ",
          "Շախտեր-Սինգեր",
          "Էվոլյուցիոն"
        ],
        "optionsAz": [
          "James-Lange",
          "Cannon-Bard",
          "Schachter-Müğənni",
          "Təkamülçü"
        ],
        "explanationRu": "Эмоция = возбуждение + когнитивная метка.",
        "explanationHy": "Զգացմունք = գրգռում + ճանաչողական պիտակ:",
        "questionRu": "Какая теория: маркировать возбуждение для идентификации эмоций?",
        "questionHy": "Ո՞ր տեսությունն է՝ պիտակավորել գրգռվածությունը՝ զգացմունքները բացահայտելու համար:",
        "explanationAz": "Emosiya = həyəcan + idrak etiketi.",
        "questionAz": "Hansı nəzəriyyə: emosiyaları müəyyən etmək üçün oyanış etiketi?"
      },
      {
        "id": "q10-10",
        "question": "Maslow is known for:",
        "questionKa": "მასლოუ ცნობილია:",
        "options": [
          "Behaviorism",
          "Hierarchy of needs",
          "Psychoanalysis",
          "CBT"
        ],
        "optionsKa": [
          "ბიჰევიორიზმით",
          "მოთხოვნილებათა იერარქიით",
          "ფსიქოანალიზით",
          "კოგნიტურ-ბიჰევიორული თერაპიით"
        ],
        "correctIndex": 1,
        "explanation": "The hierarchy of needs.",
        "explanationKa": "მოთხოვნილებათა იერარქია.",
        "optionsRu": [
          "Бихевиоризм",
          "Иерархия потребностей",
          "Психоанализ",
          "ЗБТ"
        ],
        "optionsHy": [
          "Վարքագծություն",
          "Կարիքների հիերարխիա",
          "Հոգեվերլուծություն",
          "CBT"
        ],
        "optionsAz": [
          "Davranışçılıq",
          "Ehtiyaclar iyerarxiyası",
          "Psixoanaliz",
          "CBT"
        ],
        "questionRu": "Маслоу известен:",
        "explanationRu": "Иерархия потребностей.",
        "questionHy": "Մասլոուն հայտնի է հետևյալով.",
        "explanationHy": "Կարիքների հիերարխիա.",
        "questionAz": "Maslow tanınır:",
        "explanationAz": "Ehtiyacların iyerarxiyası."
      }
    ],
    "titleRu": "Мотивация и эмоции — Викторина",
    "titleAz": "Motivasiya və Emosiya - Viktorina",
    "titleHy": "Մոտիվացիա և հույզեր — Վիկտորինա"
  },
  {
    "id": "ch11-quiz",
    "chapterId": 11,
    "title": "Personality — Quiz",
    "titleKa": "პიროვნება — ვიქტორინა",
    "questions": [
      {
        "id": "q11-1",
        "question": "Freud's id operates on:",
        "questionKa": "ფროიდის იდი მოქმედებს:",
        "options": [
          "Reality principle",
          "Pleasure principle",
          "Moral principle",
          "Social principle"
        ],
        "optionsKa": [
          "რეალობის პრინციპით",
          "სიამოვნების პრინციპით",
          "მორალური პრინციპით",
          "სოციალური პრინციპით"
        ],
        "correctIndex": 1,
        "explanation": "Id seeks immediate gratification.",
        "explanationKa": "იდი ეძებს მყისიერ დაკმაყოფილებას.",
        "optionsRu": [
          "Принцип реальности",
          "Принцип удовольствия",
          "Моральный принцип",
          "Социальный принцип"
        ],
        "optionsHy": [
          "Իրականության սկզբունք",
          "Հաճույքի սկզբունք",
          "Բարոյական սկզբունք",
          "Սոցիալական սկզբունք"
        ],
        "optionsAz": [
          "Reallıq prinsipi",
          "Zövq prinsipi",
          "Mənəvi prinsip",
          "Sosial prinsip"
        ],
        "questionHy": "Ֆրեյդի id-ն գործում է.",
        "explanationRu": "Ид ищет немедленного удовлетворения.",
        "questionRu": "Ид Фрейда действует на:",
        "explanationAz": "Id dərhal məmnuniyyət axtarır.",
        "questionAz": "Freydin id-si aşağıdakılar üzərində işləyir:",
        "explanationHy": "Id-ը անհապաղ բավարարվածություն է փնտրում:"
      },
      {
        "id": "q11-2",
        "question": "Big Five excludes:",
        "questionKa": "დიდ ხუთეულში არ შედის:",
        "options": [
          "Openness",
          "Conscientiousness",
          "Intelligence",
          "Neuroticism"
        ],
        "optionsKa": [
          "გახსნილობა",
          "კეთილსინდისიერება",
          "ინტელექტი",
          "ნევროტიზმი"
        ],
        "correctIndex": 2,
        "explanation": "Intelligence is not a Big Five trait.",
        "explanationKa": "ინტელექტი არ არის დიდი ხუთეულის თვისება.",
        "optionsRu": [
          "Открытость",
          "Добросовестность",
          "Интеллект",
          "Невротизм"
        ],
        "optionsHy": [
          "Բացություն",
          "Բարեխղճություն",
          "Բանականություն",
          "Նևրոտիզմ"
        ],
        "optionsAz": [
          "Açıqlıq",
          "Vicdanlılıq",
          "Kəşfiyyat",
          "Nevrotiklik"
        ],
        "questionHy": "Մեծ հնգյակը բացառում է.",
        "questionRu": "«Большая пятерка» исключает:",
        "explanationAz": "Kəşfiyyat böyük beşlik xüsusiyyəti deyil.",
        "explanationRu": "Интеллект не входит в число черт «Большой пятерки».",
        "questionAz": "Böyük beşlik istisnalar:",
        "explanationHy": "Բանականությունը մեծ հնգյակի հատկանիշ չէ:"
      },
      {
        "id": "q11-3",
        "question": "Rogers emphasized:",
        "questionKa": "როჯერსი ხაზს უსვამდა:",
        "options": [
          "Defense mechanisms",
          "Unconditional positive regard",
          "Conditioning",
          "Dream analysis"
        ],
        "optionsKa": [
          "დაცვის მექანიზმებს",
          "უპირობო პოზიტიურ მიღებას",
          "კონდიციონირებას",
          "სიზმრების ანალიზს"
        ],
        "correctIndex": 1,
        "explanation": "Unconditional positive regard is essential.",
        "explanationKa": "უპირობო პოზიტიური მიღება აუცილებელია.",
        "optionsRu": [
          "Защитные механизмы",
          "Безоговорочный позитив",
          "Кондиционирование",
          "Анализ снов"
        ],
        "optionsHy": [
          "Պաշտպանական մեխանիզմներ",
          "Անվերապահ դրական վերաբերմունք",
          "Կոնդիցիոներ",
          "Երազանքի վերլուծություն"
        ],
        "optionsAz": [
          "Müdafiə mexanizmləri",
          "Şərtsiz müsbət münasibət",
          "Kondisioner",
          "Xəyalların təhlili"
        ],
        "explanationRu": "Безоговорочное положительное отношение имеет важное значение.",
        "explanationHy": "Անվերապահ դրական վերաբերմունքը էական է:",
        "questionHy": "Ռոջերսն ընդգծել է.",
        "questionAz": "Rogers vurğuladı:",
        "questionRu": "Роджерс подчеркнул:",
        "explanationAz": "Şərtsiz müsbət münasibət vacibdir."
      },
      {
        "id": "q11-4",
        "question": "Projection means:",
        "questionKa": "პროექცია ნიშნავს:",
        "options": [
          "Denying reality",
          "Attributing own feelings to others",
          "Returning to earlier stage",
          "Channeling impulses"
        ],
        "optionsKa": [
          "რეალობის უარყოფა",
          "საკუთარი გრძნობების სხვებზე გადატანა",
          "ადრეულ სტადიაზე დაბრუნება",
          "იმპულსების მიმართვა"
        ],
        "correctIndex": 1,
        "explanation": "Projecting unacceptable feelings onto others.",
        "explanationKa": "მიუღებელი გრძნობების სხვებზე გადატანა.",
        "optionsRu": [
          "Отрицание реальности",
          "Приписывать свои чувства другим",
          "Возвращаясь к более раннему этапу",
          "Направление импульсов"
        ],
        "optionsHy": [
          "Իրականության հերքումը",
          "Սեփական զգացմունքները ուրիշներին վերագրելը",
          "Վերադառնալով ավելի վաղ փուլին",
          "Իմպուլսների ուղղորդում"
        ],
        "optionsAz": [
          "Reallığı inkar etmək",
          "Öz hisslərini başqalarına aid etmək",
          "Əvvəlki mərhələyə qayıtmaq",
          "Kanalizasiya impulsları"
        ],
        "questionHy": "Պրոյեկցիա նշանակում է.",
        "questionAz": "Proyeksiya deməkdir:",
        "questionRu": "Проекция означает:",
        "explanationAz": "Başqalarına qəbuledilməz hissləri əks etdirmək.",
        "explanationHy": "Ուրիշների վրա անընդունելի զգացմունքների նախագծում:",
        "explanationRu": "Проецирование неприемлемых чувств на других."
      },
      {
        "id": "q11-5",
        "question": "Self-efficacy refers to:",
        "questionKa": "თვითეფექტურობა ეხება:",
        "options": [
          "Self-esteem",
          "Belief in ability to succeed",
          "Personality type",
          "Intelligence"
        ],
        "optionsKa": [
          "თვითშეფასებას",
          "წარმატების უნარის რწმენას",
          "პიროვნების ტიპს",
          "ინტელექტს"
        ],
        "correctIndex": 1,
        "explanation": "Belief in capability to perform.",
        "explanationKa": "შესრულების უნარის რწმენა.",
        "optionsRu": [
          "Самооценка",
          "Вера в способность добиться успеха",
          "Тип личности",
          "Интеллект"
        ],
        "optionsHy": [
          "Ինքնագնահատականը",
          "Հաջողության հասնելու ունակության հավատք",
          "Անհատականության տեսակը",
          "Բանականություն"
        ],
        "optionsAz": [
          "Özünə hörmət",
          "Uğur qazanmaq bacarığına inam",
          "Şəxsiyyət növü",
          "Kəşfiyyat"
        ],
        "questionRu": "Самоэффективность подразумевает:",
        "explanationAz": "İcra etmək qabiliyyətinə inam.",
        "explanationHy": "Կատարելու ունակության հավատք:",
        "explanationRu": "Вера в способность действовать.",
        "questionHy": "Ինքնարդյունավետությունը վերաբերում է.",
        "questionAz": "Öz-özünə effektivlik aşağıdakılara aiddir:"
      },
      {
        "id": "q11-6",
        "question": "Freud's stages exclude:",
        "questionKa": "ფროიდის სტადიებში არ შედის:",
        "options": [
          "Oral",
          "Anal",
          "Cognitive",
          "Phallic"
        ],
        "optionsKa": [
          "ორალური",
          "ანალური",
          "კოგნიტური",
          "ფალიკური"
        ],
        "correctIndex": 2,
        "explanation": "Cognitive is Piaget, not Freud.",
        "explanationKa": "კოგნიტური პიაჟეს ეკუთვნის, არა ფროიდს.",
        "optionsRu": [
          "Оральный",
          "Анальный",
          "Когнитивный",
          "Фаллический"
        ],
        "optionsHy": [
          "Բանավոր",
          "Անալ",
          "Ճանաչողական",
          "Ֆալիկ"
        ],
        "optionsAz": [
          "Şifahi",
          "Analiz",
          "Koqnitiv",
          "Fallik"
        ],
        "questionRu": "Стадии Фрейда исключают:",
        "explanationHy": "Կոգնիտիվը Պիաժեն է, ոչ թե Ֆրեյդը:",
        "questionHy": "Ֆրեյդի փուլերը բացառում են.",
        "explanationRu": "Когнитивность – это Пиаже, а не Фрейд.",
        "explanationAz": "Koqnitiv Piagetdir, Freyd deyil.",
        "questionAz": "Freydin mərhələləri istisna edir:"
      },
      {
        "id": "q11-7",
        "question": "Rorschach test uses:",
        "questionKa": "რორშახის ტესტი იყენებს:",
        "options": [
          "True/false",
          "Inkblots",
          "Sentences",
          "Drawings"
        ],
        "optionsKa": [
          "ჭეშმარიტი/მცდარი",
          "მელნის ლაქებს",
          "წინადადებებს",
          "ნახატებს"
        ],
        "correctIndex": 1,
        "explanation": "Ambiguous inkblots for personality assessment.",
        "explanationKa": "ორაზროვანი მელნის ლაქები პიროვნების შეფასებისთვის.",
        "optionsRu": [
          "Правда/ложь",
          "чернильные пятна",
          "Предложения",
          "Рисунки"
        ],
        "optionsHy": [
          "Ճիշտ/սուտ",
          "Թանաքի բծեր",
          "Նախադասություններ",
          "Գծանկարներ"
        ],
        "optionsAz": [
          "Doğru/yalan",
          "Mürəkkəb ləkələri",
          "Cümlələr",
          "Rəsmlər"
        ],
        "questionRu": "В тесте Роршаха используются:",
        "explanationHy": "Անհատականության գնահատման համար ոչ միանշանակ թանաքային բծեր:",
        "questionHy": "Rorschach թեստի օգտագործումը.",
        "explanationRu": "Неоднозначные чернильные пятна для оценки личности.",
        "explanationAz": "Şəxsiyyətin qiymətləndirilməsi üçün qeyri-müəyyən mürəkkəb ləkələri.",
        "questionAz": "Rorschach testindən istifadə olunur:"
      },
      {
        "id": "q11-8",
        "question": "Ego operates on:",
        "questionKa": "ეგო მოქმედებს:",
        "options": [
          "Pleasure principle",
          "Moral principle",
          "Reality principle",
          "Unconscious"
        ],
        "optionsKa": [
          "სიამოვნების პრინციპით",
          "მორალური პრინციპით",
          "რეალობის პრინციპით",
          "არაცნობიერით"
        ],
        "correctIndex": 2,
        "explanation": "Ego mediates between id and reality.",
        "explanationKa": "ეგო შუამავლობს იდსა და რეალობას შორის.",
        "optionsRu": [
          "Принцип удовольствия",
          "Моральный принцип",
          "Принцип реальности",
          "Бессознательный"
        ],
        "optionsHy": [
          "Հաճույքի սկզբունք",
          "Բարոյական սկզբունք",
          "Իրականության սկզբունք",
          "Անգիտակից վիճակում"
        ],
        "optionsAz": [
          "Zövq prinsipi",
          "Mənəvi prinsip",
          "Reallıq prinsipi",
          "Şüursuz"
        ],
        "questionRu": "Эго действует на:",
        "explanationRu": "Эго является посредником между Оно и реальностью.",
        "questionHy": "Էգոն գործում է.",
        "explanationHy": "Էգոն միջնորդում է id-ի և իրականության միջև:",
        "explanationAz": "Eqo id və reallıq arasında vasitəçilik edir.",
        "questionAz": "Eqo aşağıdakılar üzərində işləyir:"
      },
      {
        "id": "q11-9",
        "question": "Locus of control:",
        "questionKa": "კონტროლის ლოკუსი:",
        "options": [
          "Brain location",
          "Whether outcomes are internal or external",
          "Coordination",
          "Self-esteem"
        ],
        "optionsKa": [
          "ტვინის მდებარეობა",
          "შედეგები შინაგანია თუ გარეგანი",
          "კოორდინაცია",
          "თვითშეფასება"
        ],
        "correctIndex": 1,
        "explanation": "Internal vs external locus.",
        "explanationKa": "შინაგანი წინააღმდეგ გარეგანი ლოკუსი.",
        "optionsRu": [
          "Расположение мозга",
          "Являются ли результаты внутренними или внешними",
          "Координация",
          "Самооценка"
        ],
        "optionsHy": [
          "Ուղեղի գտնվելու վայրը",
          "Անկախ նրանից, թե արդյունքները ներքին են, թե արտաքին",
          "Համակարգում",
          "Ինքնագնահատականը"
        ],
        "optionsAz": [
          "Beynin yeri",
          "Nəticələrin daxili və ya xarici olmasından asılı olmayaraq",
          "Koordinasiya",
          "Özünə hörmət"
        ],
        "questionRu": "Локус контроля:",
        "questionHy": "Վերահսկողության վայր.",
        "questionAz": "Nəzarət yeri:",
        "explanationRu": "Внутренний и внешний локус.",
        "explanationHy": "Ներքին ընդդեմ արտաքին լոկուս.",
        "explanationAz": "Daxili və xarici lokus."
      },
      {
        "id": "q11-10",
        "question": "Adler proposed:",
        "questionKa": "ადლერმა შემოგვთავაზა:",
        "options": [
          "Collective unconscious",
          "Inferiority complex",
          "Self-actualization",
          "Operant conditioning"
        ],
        "optionsKa": [
          "კოლექტიური არაცნობიერი",
          "არასრულფასოვნების კომპლექსი",
          "თვითრეალიზაცია",
          "ოპერანტული კონდიციონირება"
        ],
        "correctIndex": 1,
        "explanation": "Inferiority feelings motivate growth.",
        "explanationKa": "არასრულფასოვნების გრძნობა ზრდას აღძრავს.",
        "optionsRu": [
          "Коллективное бессознательное",
          "Комплекс неполноценности",
          "Самореализация",
          "Оперантное обусловливание"
        ],
        "optionsHy": [
          "Կոլեկտիվ անգիտակից",
          "Անլիարժեքության բարդույթ",
          "Ինքնաակտիվացում",
          "Գործող կոնդիցիոներ"
        ],
        "optionsAz": [
          "Kollektiv şüursuz",
          "Aşağılıq kompleksi",
          "Özünü reallaşdırma",
          "Operativ kondisioner"
        ],
        "questionHy": "Ադլերն առաջարկեց.",
        "questionRu": "Адлер предложил:",
        "explanationHy": "Անլիարժեքության զգացումը խթանում է աճը:",
        "explanationRu": "Чувство неполноценности мотивирует рост.",
        "explanationAz": "Aşağılıq hissləri böyüməyə təkan verir.",
        "questionAz": "Adler təklif etdi:"
      }
    ],
    "titleHy": "Անհատականություն — Վիկտորինա",
    "titleRu": "Личность — Викторина",
    "titleAz": "Şəxsiyyət - Viktorina"
  },
  {
    "id": "ch12-quiz",
    "chapterId": 12,
    "title": "Social Psychology — Quiz",
    "titleKa": "სოციალური ფსიქოლოგია — ვიქტორინა",
    "questions": [
      {
        "id": "q12-1",
        "question": "Asch tested conformity with:",
        "questionKa": "აშმა კონფორმიზმი შეამოწმა:",
        "options": [
          "Colors",
          "Line lengths",
          "Sounds",
          "Weights"
        ],
        "optionsKa": [
          "ფერებით",
          "ხაზების სიგრძეებით",
          "ხმებით",
          "წონებით"
        ],
        "correctIndex": 1,
        "explanation": "Participants conformed about line lengths.",
        "explanationKa": "მონაწილეები ხაზების სიგრძეებზე ეთანხმებოდნენ.",
        "optionsRu": [
          "Цвета",
          "Длины линий",
          "Звуки",
          "Веса"
        ],
        "optionsHy": [
          "Գույներ",
          "Գծերի երկարությունները",
          "Հնչում է",
          "Կշիռներ"
        ],
        "optionsAz": [
          "Rənglər",
          "Xətt uzunluqları",
          "Səslər",
          "Çəkilər"
        ],
        "questionHy": "Asch-ի փորձարկված համապատասխանությունը՝",
        "explanationHy": "Մասնակիցները համապատասխանեցին տողերի երկարությանը:",
        "explanationAz": "İştirakçılar xəttin uzunluğuna uyğun gəldilər.",
        "questionAz": "Asch ilə sınaqdan keçirilmiş uyğunluq:",
        "explanationRu": "Участники договорились о длине очередей.",
        "questionRu": "Компания Asch проверила соответствие:"
      },
      {
        "id": "q12-2",
        "question": "Milgram found:",
        "questionKa": "მილგრამმა აღმოაჩინა:",
        "options": [
          "Refused to shock",
          "Often obeyed authority",
          "Never followed orders",
          "Enjoyed it"
        ],
        "optionsKa": [
          "უარს ამბობდნენ შოკზე",
          "ხშირად ემორჩილებოდნენ ავტორიტეტს",
          "არასდროს მისდევდნენ ბრძანებებს",
          "სიამოვნებას იღებდნენ"
        ],
        "correctIndex": 1,
        "explanation": "65% obeyed authority.",
        "explanationKa": "65% ემორჩილებოდა ავტორიტეტს.",
        "optionsRu": [
          "Отказался шокировать",
          "Часто подчинялся авторитету",
          "Никогда не выполнял приказы",
          "понравилось"
        ],
        "optionsHy": [
          "Հրաժարվել է ցնցումներից",
          "Հաճախ ենթարկվում էր իշխանությանը",
          "Երբեք չհետևեց հրամաններին",
          "Հաճույք ստացավ"
        ],
        "optionsAz": [
          "Şok etməkdən imtina etdi",
          "Tez-tez hakimiyyətə tabe olur",
          "Heç vaxt əmrlərə əməl etmədi",
          "Zövq aldı"
        ],
        "questionRu": "Милгрэм обнаружил:",
        "explanationRu": "65% подчинились власти.",
        "questionHy": "Միլգրամը գտել է.",
        "explanationHy": "65%-ը ենթարկվել է իշխանությանը։",
        "explanationAz": "65% hakimiyyətə tabe olub.",
        "questionAz": "Milgram tapıldı:"
      },
      {
        "id": "q12-3",
        "question": "Bystander effect:",
        "questionKa": "თვითმხილველის ეფექტი:",
        "options": [
          "More bystanders help",
          "Less likely to help with others present",
          "Only men help",
          "Crowd size helps"
        ],
        "optionsKa": [
          "მეტი თვითმხილველი ეხმარება",
          "ნაკლებად სავარაუდოა დახმარება სხვების თანდასწრებით",
          "მხოლოდ მამაკაცები ეხმარებიან",
          "ბრბოს ზომა ხელს უწყობს"
        ],
        "correctIndex": 1,
        "explanation": "Diffusion of responsibility.",
        "explanationKa": "პასუხისმგებლობის გაბნევა.",
        "optionsRu": [
          "Больше свидетелей помогают",
          "Менее вероятно, что поможет в присутствии других",
          "Только мужчины помогают",
          "Размер толпы помогает"
        ],
        "optionsHy": [
          "Ավելի շատ անցորդներ են օգնում",
          "Ավելի քիչ հավանական է օգնել ուրիշների ներկաներին",
          "Միայն տղամարդիկ են օգնում",
          "Ամբոխի չափն օգնում է"
        ],
        "optionsAz": [
          "Ətrafdakılar kömək edir",
          "Hazırkı başqalarına kömək etmək ehtimalı azdır",
          "Yalnız kişilər kömək edir",
          "Kütlənin ölçüsü kömək edir"
        ],
        "explanationRu": "Диффузия ответственности.",
        "explanationAz": "Məsuliyyətin yayılması.",
        "questionRu": "Эффект свидетеля:",
        "questionAz": "Seyirci effekti:",
        "explanationHy": "Պատասխանատվության տարածում.",
        "questionHy": "Անցորդային էֆեկտ."
      },
      {
        "id": "q12-4",
        "question": "Cognitive dissonance:",
        "questionKa": "კოგნიტური დისონანსი:",
        "options": [
          "Attitude-behavior agreement",
          "Discomfort from contradictions",
          "Memory error",
          "Personality disorder"
        ],
        "optionsKa": [
          "დამოკიდებულება-ქცევის თანხმობა",
          "დისკომფორტი წინააღმდეგობებიდან",
          "მეხსიერების შეცდომა",
          "პიროვნული აშლილობა"
        ],
        "correctIndex": 1,
        "explanation": "Discomfort when attitudes conflict with behavior.",
        "explanationKa": "დისკომფორტი, როცა დამოკიდებულებები ქცევას ეწინააღმდეგება.",
        "optionsRu": [
          "Соглашение об отношении и поведении",
          "Дискомфорт от противоречий",
          "Ошибка памяти",
          "Расстройство личности"
        ],
        "optionsHy": [
          "Վերաբերմունք-վարքագիծ համաձայնություն",
          "Անհանգստություն հակասություններից",
          "Հիշողության սխալ",
          "Անհատականության խանգարում"
        ],
        "optionsAz": [
          "Münasibət-davranış razılaşması",
          "Ziddiyyətlərdən narahatlıq",
          "Yaddaş xətası",
          "Şəxsiyyət pozğunluğu"
        ],
        "questionRu": "Когнитивный диссонанс:",
        "explanationRu": "Дискомфорт, когда отношение противоречит поведению.",
        "explanationHy": "Անհանգստություն, երբ վերաբերմունքը հակասում է վարքագծին:",
        "explanationAz": "Münasibətlər davranışla zidd olduqda diskomfort.",
        "questionHy": "Ճանաչողական դիսոնանս.",
        "questionAz": "Koqnitiv dissonans:"
      },
      {
        "id": "q12-5",
        "question": "Fundamental attribution error:",
        "questionKa": "ფუნდამენტური ატრიბუციის შეცდომა:",
        "options": [
          "Overestimate situation",
          "Overestimate personality for others",
          "Equal weighing",
          "Self-blame"
        ],
        "optionsKa": [
          "სიტუაციის გადაჭარბებული შეფასება",
          "სხვების პიროვნების გადაჭარბებული შეფასება",
          "თანაბარი შეწონვა",
          "თვითდადანაშაულება"
        ],
        "correctIndex": 1,
        "explanation": "We overemphasize others' traits.",
        "explanationKa": "სხვების თვისებებს ზედმეტად ხაზს ვუსვამთ.",
        "optionsRu": [
          "Переоценить ситуацию",
          "Переоценивать личность для других",
          "Равное взвешивание",
          "Самообвинение"
        ],
        "optionsHy": [
          "Գերագնահատել իրավիճակը",
          "Գերագնահատեք անհատականությունը ուրիշների համար",
          "Հավասար կշռում",
          "Ինքնամեղադրանք"
        ],
        "optionsAz": [
          "Vəziyyəti həddindən artıq qiymətləndirin",
          "Şəxsiyyəti başqaları üçün çox qiymətləndirin",
          "Bərabər çəki",
          "Özünü günahlandırmaq"
        ],
        "explanationRu": "Мы переоцениваем черты других.",
        "questionRu": "Фундаментальная ошибка атрибуции:",
        "explanationHy": "Մենք չափազանց կարևորում ենք ուրիշների հատկությունները:",
        "questionHy": "Հիմնական վերագրման սխալ.",
        "questionAz": "Əsas atribut xətası:",
        "explanationAz": "Başqalarının xüsusiyyətlərini həddindən artıq vurğulayırıq."
      },
      {
        "id": "q12-6",
        "question": "Stanford Prison Experiment by:",
        "questionKa": "სტენფორდის ციხის ექსპერიმენტი ჩაატარა:",
        "options": [
          "Milgram",
          "Asch",
          "Zimbardo",
          "Bandura"
        ],
        "optionsKa": [
          "მილგრამმა",
          "აშმა",
          "ზიმბარდომ",
          "ბანდურამ"
        ],
        "correctIndex": 2,
        "explanation": "Philip Zimbardo conducted it.",
        "explanationKa": "ფილიპ ზიმბარდომ ჩაატარა.",
        "optionsRu": [
          "Милгрэм",
          "Аш",
          "Зимбардо",
          "Бандура"
        ],
        "optionsHy": [
          "Միլգրամ",
          "Աշխ",
          "Զիմբարդոն",
          "Բանդուրա"
        ],
        "optionsAz": [
          "Milgram",
          "Asch",
          "Zimbardo",
          "Bandura"
        ],
        "explanationRu": "Его дирижировал Филип Зимбардо.",
        "questionRu": "Стэнфордский тюремный эксперимент, автор:",
        "explanationHy": "Այն վարել է Ֆիլիպ Զիմբարդոն։",
        "questionHy": "Ստենֆորդի բանտային փորձ՝",
        "explanationAz": "Philip Zimbardo onu idarə etdi.",
        "questionAz": "Stanford Həbsxana Təcrübəsi:"
      },
      {
        "id": "q12-7",
        "question": "Groupthink leads to:",
        "questionKa": "ჯგუფური აზროვნება იწვევს:",
        "options": [
          "Better decisions",
          "Poor decisions from harmony desire",
          "Creativity",
          "Individuality"
        ],
        "optionsKa": [
          "უკეთეს გადაწყვეტილებებს",
          "ცუდ გადაწყვეტილებებს ჰარმონიის სურვილიდან",
          "შემოქმედებას",
          "ინდივიდუალობას"
        ],
        "correctIndex": 1,
        "explanation": "Consensus overrides realistic appraisal.",
        "explanationKa": "კონსენსუსი გადაფარავს რეალისტურ შეფასებას.",
        "optionsRu": [
          "Лучшие решения",
          "Плохие решения из-за желания гармонии",
          "Креативность",
          "Индивидуальность"
        ],
        "optionsHy": [
          "Ավելի լավ որոշումներ",
          "Վատ որոշումներ ներդաշնակության ցանկությունից",
          "Ստեղծագործականություն",
          "Անհատականություն"
        ],
        "optionsAz": [
          "Daha yaxşı qərarlar",
          "Harmoniya arzusundan pis qərarlar",
          "Yaradıcılıq",
          "Fərdilik"
        ],
        "explanationRu": "Консенсус преобладает над реалистичной оценкой.",
        "questionRu": "Групповое мышление приводит к:",
        "questionHy": "Խմբային մտածողությունը հանգեցնում է.",
        "explanationHy": "Կոնսենսուսը գերագնահատում է իրատեսական գնահատումը:",
        "questionAz": "Groupthink aşağıdakılara gətirib çıxarır:",
        "explanationAz": "Konsensus real qiymətləndirmədən üstündür."
      },
      {
        "id": "q12-8",
        "question": "Mere exposure effect:",
        "questionKa": "მარტივი ზემოქმედების ეფექტი:",
        "options": [
          "Dislike familiar things",
          "Repeated exposure increases liking",
          "First impressions only",
          "Advertising fails"
        ],
        "optionsKa": [
          "ნაცნობი რამის არმოწონება",
          "განმეორებითი ზემოქმედება ზრდის მოწონებას",
          "მხოლოდ პირველი შთაბეჭდილება",
          "რეკლამა ვერ მუშაობს"
        ],
        "correctIndex": 1,
        "explanation": "Familiarity increases liking.",
        "explanationKa": "ნაცნობობა ზრდის მოწონებას.",
        "optionsRu": [
          "Не нравится знакомые вещи",
          "Повторное воздействие увеличивает симпатию",
          "Только первые впечатления",
          "Реклама терпит неудачу"
        ],
        "optionsHy": [
          "Չսիրել ծանոթ բաները",
          "Կրկնվող բացահայտումը մեծացնում է հավանումը",
          "Միայն առաջին տպավորությունները",
          "Գովազդը ձախողվում է"
        ],
        "optionsAz": [
          "Tanış şeyləri bəyənməmək",
          "Təkrar məruz qalma bəyənməyi artırır",
          "Yalnız ilk təəssürat",
          "Reklam uğursuz olur"
        ],
        "questionHy": "Պարզ ազդեցության էֆեկտ.",
        "questionRu": "Эффект простого воздействия:",
        "explanationHy": "Ծանոթությունը մեծացնում է համակրանքը։",
        "explanationRu": "Знакомство увеличивает симпатию.",
        "questionAz": "Sadəcə ifşa effekti:",
        "explanationAz": "Tanışlıq bəyənməyi artırır."
      },
      {
        "id": "q12-9",
        "question": "Social loafing:",
        "questionKa": "სოციალური სიზარმაცე:",
        "options": [
          "Working harder in groups",
          "Less effort in groups",
          "Leadership",
          "Role confusion"
        ],
        "optionsKa": [
          "ჯგუფებში მეტი მუშაობა",
          "ჯგუფებში ნაკლები ძალისხმევა",
          "ლიდერობა",
          "როლის აღრევა"
        ],
        "correctIndex": 1,
        "explanation": "People exert less effort in groups.",
        "explanationKa": "ადამიანები ჯგუფებში ნაკლებ ძალისხმევას გასწევენ.",
        "optionsRu": [
          "Работать усерднее в группах",
          "Меньше усилий в группах",
          "Лидерство",
          "Ролевая путаница"
        ],
        "optionsHy": [
          "Խմբերում ավելի շատ աշխատել",
          "Ավելի քիչ ջանք խմբերում",
          "Առաջնորդություն",
          "Դերերի շփոթություն"
        ],
        "optionsAz": [
          "Qruplarda daha çox işləmək",
          "Qruplarda daha az səy",
          "Rəhbərlik",
          "Rol qarışıqlığı"
        ],
        "questionRu": "Социальное безделье:",
        "questionHy": "Սոցիալական լոֆինգ.",
        "explanationRu": "В группах люди прилагают меньше усилий.",
        "explanationHy": "Մարդիկ ավելի քիչ ջանք են գործադրում խմբերում:",
        "questionAz": "Sosial boşluq:",
        "explanationAz": "İnsanlar qruplarda daha az səy göstərirlər."
      },
      {
        "id": "q12-10",
        "question": "Deindividuation:",
        "questionKa": "დეინდივიდუაცია:",
        "options": [
          "More self-aware",
          "Lose self-awareness in groups",
          "Groups become cautious",
          "Individuals lead"
        ],
        "optionsKa": [
          "მეტი თვითშეგნება",
          "ჯგუფში თვითშეგნების დაკარგვა",
          "ჯგუფები ხდება ფრთხილი",
          "ინდივიდები ხელმძღვანელობენ"
        ],
        "correctIndex": 1,
        "explanation": "Loss of self-awareness in group situations.",
        "explanationKa": "თვითშეგნების დაკარგვა ჯგუფურ სიტუაციებში.",
        "optionsRu": [
          "Больше самосознания",
          "Терять самосознание в группах",
          "Группы становятся осторожными",
          "Индивидуумы лидируют"
        ],
        "optionsHy": [
          "Ավելի ինքնագիտակցված",
          "Խմբերում կորցնում են ինքնագիտակցությունը",
          "Խմբերը դառնում են զգույշ",
          "Անհատները առաջնորդում են"
        ],
        "optionsAz": [
          "Özünü daha çox bilən",
          "Qruplarda özünüdərketmə qabiliyyətini itirmək",
          "Qruplar ehtiyatlı olurlar",
          "Fərdlər rəhbərlik edir"
        ],
        "questionRu": "Деиндивидуализация:",
        "explanationRu": "Потеря самосознания в групповых ситуациях.",
        "questionHy": "Անհատականացում.",
        "explanationHy": "Խմբային իրավիճակներում ինքնագիտակցության կորուստ.",
        "questionAz": "Fərdiləşmə:",
        "explanationAz": "Qrup vəziyyətlərində özünüdərketmə itkisi."
      }
    ],
    "titleHy": "Սոցիալական հոգեբանություն — Վիկտորինա",
    "titleAz": "Sosial Psixologiya - Viktorina",
    "titleRu": "Социальная психология — Викторина"
  },
  {
    "id": "ch13-quiz",
    "chapterId": 13,
    "title": "Stress and Coping — Quiz",
    "titleKa": "სტრესი და გამკლავება — ვიქტორინა",
    "questions": [
      {
        "id": "q13-1",
        "question": "GAS stages:",
        "questionKa": "ზოგადი ადაპტაციის სინდრომის სტადიები:",
        "options": [
          "Start, middle, end",
          "Alarm, resistance, exhaustion",
          "Stress, cope, recover",
          "Fight, flight, freeze"
        ],
        "optionsKa": [
          "დასაწყისი, შუა, დასასრული",
          "განგაში, წინააღმდეგობა, გამოფიტვა",
          "სტრესი, გამკლავება, აღდგენა",
          "ბრძოლა, გაქცევა, გაყინვა"
        ],
        "correctIndex": 1,
        "explanation": "Alarm, resistance, exhaustion.",
        "explanationKa": "განგაში, წინააღმდეგობა, გამოფიტვა.",
        "optionsRu": [
          "Начало, середина, конец",
          "Тревога, сопротивление, истощение",
          "Стресс, справиться, восстановиться",
          "Сражайся, беги, замри"
        ],
        "optionsHy": [
          "Սկիզբ, միջին, վերջ",
          "Տագնապ, դիմադրություն, հյուծվածություն",
          "Սթրես, հաղթահարել, վերականգնվել",
          "Կռվել, փախչել, սառչել"
        ],
        "optionsAz": [
          "Başlanğıc, orta, son",
          "Həyəcan, müqavimət, tükənmə",
          "Stress, öhdəsindən gəlmək, bərpa etmək",
          "Döyüş, uçuş, don"
        ],
        "questionHy": "ԳԱԶ փուլեր.",
        "explanationRu": "Тревога, сопротивление, истощение.",
        "questionRu": "Этапы ГАЗ:",
        "explanationHy": "Տագնապ, դիմադրություն, հյուծվածություն.",
        "questionAz": "QAZ mərhələləri:",
        "explanationAz": "Həyəcan, müqavimət, tükənmə."
      },
      {
        "id": "q13-2",
        "question": "Type A personality:",
        "questionKa": "A ტიპის პიროვნება:",
        "options": [
          "Relaxed",
          "Competitive, urgent, hostile",
          "Introverted",
          "Low motivation"
        ],
        "optionsKa": [
          "მოდუნებული",
          "კონკურენტუნარიანი, სასწრაფო, მტრული",
          "ინტროვერტული",
          "დაბალი მოტივაცია"
        ],
        "correctIndex": 1,
        "explanation": "Type A: competitive and time-pressured.",
        "explanationKa": "A ტიპი: კონკურენტუნარიანი და დროით შეზღუდული.",
        "optionsRu": [
          "Расслабленный",
          "Конкурентный, срочный, враждебный",
          "Интроверт",
          "Низкая мотивация"
        ],
        "optionsHy": [
          "Հանգիստ",
          "Մրցակցային, հրատապ, թշնամական",
          "Ինտրովերտ",
          "Ցածր մոտիվացիա"
        ],
        "optionsAz": [
          "rahat",
          "Rəqabətli, təcili, düşmən",
          "Introvert",
          "Aşağı motivasiya"
        ],
        "questionHy": "Անհատականության տեսակ A.",
        "questionRu": "Тип личности А:",
        "questionAz": "A tipi şəxsiyyət:",
        "explanationHy": "Տիպ A՝ մրցակցային և ժամանակի ճնշման տակ:",
        "explanationRu": "Тип А: конкурентный и ограниченный во времени.",
        "explanationAz": "A növü: rəqabətli və vaxt təzyiqi."
      },
      {
        "id": "q13-3",
        "question": "Problem-focused coping:",
        "questionKa": "პრობლემაზე ორიენტირებული გამკლავება:",
        "options": [
          "Managing emotions",
          "Addressing the stressor directly",
          "Avoiding",
          "Denial"
        ],
        "optionsKa": [
          "ემოციების მართვა",
          "სტრესორთან პირდაპირი მუშაობა",
          "თავის არიდება",
          "უარყოფა"
        ],
        "correctIndex": 1,
        "explanation": "Directly tackling the problem.",
        "explanationKa": "პრობლემის პირდაპირ მოგვარება.",
        "optionsRu": [
          "Управление эмоциями",
          "Непосредственное воздействие на стрессор",
          "Избегание",
          "Отрицание"
        ],
        "optionsHy": [
          "Զգացմունքների կառավարում",
          "Անմիջականորեն դիմել սթրեսորին",
          "Խուսափելով",
          "Ժխտում"
        ],
        "optionsAz": [
          "Duyğuları idarə etmək",
          "Stressorun birbaşa həlli",
          "Qaçmaq",
          "İnkar"
        ],
        "questionHy": "Խնդրի վրա կենտրոնացած հաղթահարում.",
        "explanationRu": "Непосредственное решение проблемы.",
        "questionRu": "Проблемно-ориентированное преодоление:",
        "questionAz": "Problem mərkəzli mübarizə:",
        "explanationHy": "Ուղղակիորեն լուծել խնդիրը.",
        "explanationAz": "Problemin birbaşa həlli."
      },
      {
        "id": "q13-4",
        "question": "Immune system weakened by:",
        "questionKa": "იმუნური სისტემა სუსტდება:",
        "options": [
          "Exercise",
          "Chronic stress",
          "Good nutrition",
          "Sleep"
        ],
        "optionsKa": [
          "ვარჯიშით",
          "ქრონიკული სტრესით",
          "კარგი კვებით",
          "ძილით"
        ],
        "correctIndex": 1,
        "explanation": "Chronic stress suppresses immunity.",
        "explanationKa": "ქრონიკული სტრესი თრგუნავს იმუნიტეტს.",
        "optionsRu": [
          "Упражнение",
          "Хронический стресс",
          "Хорошее питание",
          "Спать"
        ],
        "optionsHy": [
          "Զորավարժություններ",
          "Քրոնիկ սթրես",
          "Լավ սնուցում",
          "Քնել"
        ],
        "optionsAz": [
          "Məşq edin",
          "Xroniki stress",
          "Yaxşı qidalanma",
          "yatmaq"
        ],
        "explanationRu": "Хронический стресс подавляет иммунитет.",
        "questionRu": "Иммунная система ослаблена:",
        "questionHy": "Իմունային համակարգը թուլացել է.",
        "explanationHy": "Քրոնիկ սթրեսը ճնշում է իմունիտետը։",
        "questionAz": "İmmunitet sistemi zəifləyir:",
        "explanationAz": "Xroniki stress immuniteti zəiflədir."
      },
      {
        "id": "q13-5",
        "question": "Burnout features:",
        "questionKa": "გადაწვის მახასიათებლები:",
        "options": [
          "High energy",
          "Exhaustion and depersonalization",
          "Physical injury",
          "Productivity"
        ],
        "optionsKa": [
          "მაღალი ენერგია",
          "გამოფიტვა და დეპერსონალიზაცია",
          "ფიზიკური ტრავმა",
          "პროდუქტიულობა"
        ],
        "correctIndex": 1,
        "explanation": "Emotional exhaustion and cynicism.",
        "explanationKa": "ემოციური გამოფიტვა და ცინიზმი.",
        "optionsRu": [
          "Высокая энергия",
          "Истощение и деперсонализация",
          "Физическая травма",
          "Производительность"
        ],
        "optionsHy": [
          "Բարձր էներգիա",
          "Հոգնածություն և անձնավորվածություն",
          "Ֆիզիկական վնասվածք",
          "Արտադրողականություն"
        ],
        "optionsAz": [
          "Yüksək enerji",
          "Tükənmə və depersonallaşma",
          "Fiziki zədə",
          "Məhsuldarlıq"
        ],
        "explanationRu": "Эмоциональное истощение и цинизм.",
        "questionRu": "Особенности выгорания:",
        "explanationHy": "Զգացմունքային հյուծվածություն և ցինիզմ.",
        "questionAz": "Tükənmə xüsusiyyətləri:",
        "explanationAz": "Emosional tükənmə və sinizm.",
        "questionHy": "Այրման առանձնահատկությունները."
      },
      {
        "id": "q13-6",
        "question": "Social support helps by:",
        "questionKa": "სოციალური მხარდაჭერა ეხმარება:",
        "options": [
          "Eliminating stress",
          "Providing emotional and practical help",
          "Replacing medicine",
          "Raising blood pressure"
        ],
        "optionsKa": [
          "სტრესის აღმოფხვრით",
          "ემოციური და პრაქტიკული დახმარებით",
          "მედიკამენტების ჩანაცვლებით",
          "არტერიული წნევის ამაღლებით"
        ],
        "correctIndex": 1,
        "explanation": "Providing emotional comfort and practical help.",
        "explanationKa": "ემოციური კომფორტისა და პრაქტიკული დახმარების მიწოდება.",
        "optionsRu": [
          "Устранение стресса",
          "Оказание эмоциональной и практической помощи",
          "Замена лекарства",
          "Повышение кровяного давления"
        ],
        "optionsHy": [
          "Սթրեսի վերացում",
          "Զգացմունքային և գործնական օգնության տրամադրում",
          "Բժշկության փոխարինում",
          "Արյան ճնշման բարձրացում"
        ],
        "optionsAz": [
          "Stressin aradan qaldırılması",
          "Emosional və praktiki yardımın göstərilməsi",
          "Dərmanı əvəz etmək",
          "Qan təzyiqinin yüksəldilməsi"
        ],
        "questionRu": "Социальная поддержка помогает:",
        "explanationRu": "Обеспечение эмоционального комфорта и практической помощи.",
        "questionHy": "Սոցիալական աջակցությունն օգնում է.",
        "explanationHy": "Զգացմունքային հարմարավետության և գործնական օգնության տրամադրում:",
        "questionAz": "Sosial dəstək kömək edir:",
        "explanationAz": "Emosional rahatlığın və praktiki yardımın təmin edilməsi."
      },
      {
        "id": "q13-7",
        "question": "Cortisol comes from:",
        "questionKa": "კორტიზოლი მოდის:",
        "options": [
          "Thyroid",
          "Adrenal glands",
          "Pituitary",
          "Pineal"
        ],
        "optionsKa": [
          "ფარისებრი ჯირკვლიდან",
          "თირკმელზედა ჯირკვლებიდან",
          "ჰიპოფიზიდან",
          "ეპიფიზიდან"
        ],
        "correctIndex": 1,
        "explanation": "Adrenal glands produce cortisol.",
        "explanationKa": "თირკმელზედა ჯირკვლები აწარმოებს კორტიზოლს.",
        "optionsRu": [
          "Щитовидная железа",
          "Надпочечники",
          "Гипофиз",
          "Шишковидная железа"
        ],
        "optionsHy": [
          "Վահանաձև գեղձ",
          "Վերերիկամային գեղձեր",
          "Հիպոֆիզ",
          "Pineal"
        ],
        "optionsAz": [
          "Tiroid",
          "Adrenal bezlər",
          "Hipofiz",
          "pineal"
        ],
        "questionRu": "Кортизол поступает из:",
        "questionHy": "Կորտիզոլը գալիս է.",
        "questionAz": "Kortizol aşağıdakılardan gəlir:",
        "explanationRu": "Надпочечники вырабатывают кортизол.",
        "explanationHy": "Վերերիկամային գեղձերը արտադրում են կորտիզոլ։",
        "explanationAz": "Böyrəküstü vəzilər kortizol istehsal edir."
      },
      {
        "id": "q13-8",
        "question": "Emotion-focused coping:",
        "questionKa": "ემოციაზე ორიენტირებული გამკლავება:",
        "options": [
          "Making a plan",
          "Relaxation and emotional support",
          "Solving problem",
          "Confronting"
        ],
        "optionsKa": [
          "გეგმის შედგენა",
          "რელაქსაცია და ემოციური მხარდაჭერა",
          "პრობლემის გადაჭრა",
          "დაპირისპირება"
        ],
        "correctIndex": 1,
        "explanation": "Managing emotional response to stress.",
        "explanationKa": "სტრესზე ემოციური რეაქციის მართვა.",
        "optionsRu": [
          "Составление плана",
          "Расслабление и эмоциональная поддержка",
          "Решение проблемы",
          "Противостояние"
        ],
        "optionsHy": [
          "Պլան կազմելը",
          "Հանգստություն և հուզական աջակցություն",
          "Խնդրի լուծում",
          "Հակառակվելով"
        ],
        "optionsAz": [
          "Plan qurmaq",
          "İstirahət və emosional dəstək",
          "Problemin həlli",
          "Qarşıdurma"
        ],
        "questionHy": "Զգացմունքների վրա կենտրոնացած հաղթահարում.",
        "questionRu": "Эмоционально-ориентированное преодоление трудностей:",
        "explanationRu": "Управление эмоциональной реакцией на стресс.",
        "explanationHy": "Սթրեսին հուզական արձագանքի կառավարում:",
        "explanationAz": "Stressə emosional reaksiyanın idarə edilməsi.",
        "questionAz": "Emosiyaya əsaslanan mübarizə:"
      },
      {
        "id": "q13-9",
        "question": "Daily hassles vs. major events:",
        "questionKa": "ყოველდღიური სირთულეები vs მთავარი მოვლენები:",
        "options": [
          "Only major events matter",
          "Hassles can be equally harmful",
          "Hassles irrelevant",
          "Major events no impact"
        ],
        "optionsKa": [
          "მხოლოდ მთავარი მოვლენებია მნიშვნელოვანი",
          "სირთულეები თანაბრად საზიანო შეიძლება იყოს",
          "სირთულეები არაარსებითია",
          "მთავარ მოვლენებს გავლენა არ აქვს"
        ],
        "correctIndex": 1,
        "explanation": "Accumulated hassles are very harmful.",
        "explanationKa": "დაგროვილი სირთულეები ძალიან საზიანოა.",
        "optionsRu": [
          "Только важные события имеют значение",
          "Проблемы могут быть одинаково вредны",
          "Проблемы не имеют значения",
          "Крупные события не влияют"
        ],
        "optionsHy": [
          "Կարևոր են միայն կարևոր իրադարձությունները",
          "Խնդիրները կարող են նույնքան վնասակար լինել",
          "Խնդիրները անտեղի",
          "Հիմնական իրադարձությունները ոչ մի ազդեցություն չունեն"
        ],
        "optionsAz": [
          "Yalnız əsas hadisələr vacibdir",
          "Çətinliklər eyni dərəcədə zərərli ola bilər",
          "Əngəllər əhəmiyyətsizdir",
          "Böyük hadisələrin təsiri yoxdur"
        ],
        "explanationRu": "Накопленные хлопоты очень вредны.",
        "questionRu": "Ежедневные хлопоты и важные события:",
        "explanationHy": "Կուտակված քաշքշուկները շատ վնասակար են։",
        "questionHy": "Ամենօրյա դժվարություններ ընդդեմ հիմնական իրադարձությունների.",
        "explanationAz": "Yığılmış əngəllər çox zərərlidir.",
        "questionAz": "Gündəlik əngəllər və əsas hadisələr:"
      },
      {
        "id": "q13-10",
        "question": "Resilience:",
        "questionKa": "გამძლეობა:",
        "options": [
          "Avoiding all stress",
          "Recovery after adversity",
          "Physical toughness",
          "No negative emotions"
        ],
        "optionsKa": [
          "ყველა სტრესის თავიდან აცილება",
          "გაჭირვების შემდეგ აღდგენა",
          "ფიზიკური სიმტკიცე",
          "უარყოფითი ემოციების არქონა"
        ],
        "correctIndex": 1,
        "explanation": "Capacity to recover and adapt.",
        "explanationKa": "აღდგენისა და ადაპტაციის უნარი.",
        "optionsRu": [
          "Избегание любого стресса",
          "Восстановление после невзгод",
          "Физическая прочность",
          "Никаких негативных эмоций"
        ],
        "optionsHy": [
          "Խուսափելով բոլոր սթրեսներից",
          "Դժբախտությունից հետո վերականգնում",
          "Ֆիզիկական կոշտություն",
          "Ոչ մի բացասական հույզեր"
        ],
        "optionsAz": [
          "Bütün stresslərdən qaçınmaq",
          "Çətinlikdən sonra sağalma",
          "Fiziki möhkəmlik",
          "Mənfi emosiyalar yoxdur"
        ],
        "questionRu": "Устойчивость:",
        "questionHy": "Ճկունություն:",
        "explanationRu": "Способность восстанавливаться и адаптироваться.",
        "explanationHy": "Վերականգնվելու և հարմարվելու կարողություն:",
        "questionAz": "Davamlılıq:",
        "explanationAz": "Bərpa və uyğunlaşma qabiliyyəti."
      }
    ],
    "titleRu": "Стресс и преодоление стресса — Викторина",
    "titleHy": "Սթրես և հաղթահարում — Վիկտորինա",
    "titleAz": "Stress və mübarizə - Viktorina"
  },
  {
    "id": "ch14-quiz",
    "chapterId": 14,
    "title": "Psychological Disorders — Quiz",
    "titleKa": "ფსიქოლოგიური აშლილობები — ვიქტორინა",
    "questions": [
      {
        "id": "q14-1",
        "question": "DSM-5 is:",
        "questionKa": "DSM-5 არის:",
        "options": [
          "Therapy technique",
          "Diagnostic manual",
          "Medication",
          "Test"
        ],
        "optionsKa": [
          "თერაპიის ტექნიკა",
          "დიაგნოსტიკური სახელმძღვანელო",
          "მედიკამენტი",
          "ტესტი"
        ],
        "correctIndex": 1,
        "explanation": "Standard classification for mental disorders.",
        "explanationKa": "ფსიქიკური აშლილობების სტანდარტული კლასიფიკაცია.",
        "optionsRu": [
          "Техника терапии",
          "Руководство по диагностике",
          "Медикамент",
          "Тест"
        ],
        "optionsHy": [
          "Թերապիայի տեխնիկա",
          "Ախտորոշիչ ձեռնարկ",
          "Դեղորայք",
          "Փորձարկում"
        ],
        "optionsAz": [
          "Terapiya texnikası",
          "Diaqnostika kitabçası",
          "Dərman",
          "Test"
        ],
        "questionRu": "ДСМ-5 – это:",
        "questionHy": "DSM-5-ը հետևյալն է.",
        "explanationHy": "Հոգեկան խանգարումների ստանդարտ դասակարգում.",
        "explanationRu": "Стандартная классификация психических расстройств.",
        "questionAz": "DSM-5:",
        "explanationAz": "Psixi pozğunluqların standart təsnifatı."
      },
      {
        "id": "q14-2",
        "question": "Major depression involves:",
        "questionKa": "დიდი დეპრესია მოიცავს:",
        "options": [
          "Brief sadness",
          "Persistent depressed mood 2+ weeks",
          "Constant happiness",
          "Physical only"
        ],
        "optionsKa": [
          "ხანმოკლე სევდას",
          "მუდმივ დეპრესიულ განწყობას 2+ კვირა",
          "მუდმივ ბედნიერებას",
          "მხოლოდ ფიზიკურს"
        ],
        "correctIndex": 1,
        "explanation": "At least two weeks of depressed mood.",
        "explanationKa": "მინიმუმ ორი კვირის დეპრესიული განწყობა.",
        "optionsRu": [
          "Краткая печаль",
          "Стойкое депрессивное настроение более 2 недель.",
          "Постоянное счастье",
          "Только физическое"
        ],
        "optionsHy": [
          "Կարճ տխրություն",
          "Մշտական ​​դեպրեսիվ տրամադրություն 2+ շաբաթ",
          "Անընդհատ երջանկություն",
          "Միայն ֆիզիկական"
        ],
        "optionsAz": [
          "Qısa kədər",
          "Davamlı depressiya əhval-ruhiyyəsi 2+ həftə",
          "Daimi xoşbəxtlik",
          "Yalnız fiziki"
        ],
        "explanationHy": "Առնվազն երկու շաբաթ ընկճված տրամադրություն:",
        "questionRu": "Большая депрессия включает в себя:",
        "explanationRu": "Минимум две недели депрессивного настроения.",
        "questionHy": "Խոշոր դեպրեսիան ներառում է.",
        "questionAz": "Böyük depressiya daxildir:",
        "explanationAz": "Ən azı iki həftə depressiv əhval-ruhiyyə."
      },
      {
        "id": "q14-3",
        "question": "Schizophrenia features:",
        "questionKa": "შიზოფრენიის მახასიათებლები:",
        "options": [
          "Multiple personalities",
          "Hallucinations and delusions",
          "Extreme anxiety",
          "Memory loss only"
        ],
        "optionsKa": [
          "მრავალი პიროვნება",
          "ჰალუცინაციები და ბოდვები",
          "ექსტრემალური შფოთვა",
          "მხოლოდ მეხსიერების დაკარგვა"
        ],
        "correctIndex": 1,
        "explanation": "Hallucinations, delusions, disordered thinking.",
        "explanationKa": "ჰალუცინაციები, ბოდვები, მოუწესრიგებელი აზროვნება.",
        "optionsRu": [
          "Множественные личности",
          "Галлюцинации и бред",
          "Крайняя тревога",
          "Только потеря памяти"
        ],
        "optionsHy": [
          "Բազմաթիվ անհատականություններ",
          "Հալյուցինացիաներ և զառանցանքներ",
          "Ծայրահեղ անհանգստություն",
          "Միայն հիշողության կորուստ"
        ],
        "optionsAz": [
          "Çoxsaylı şəxsiyyətlər",
          "Halüsinasiyalar və hezeyanlar",
          "Həddindən artıq narahatlıq",
          "Yalnız yaddaş itkisi"
        ],
        "explanationRu": "Галлюцинации, бред, расстройство мышления.",
        "questionAz": "Şizofreniyanın xüsusiyyətləri:",
        "questionRu": "Особенности шизофрении:",
        "questionHy": "Շիզոֆրենիայի առանձնահատկությունները.",
        "explanationHy": "Հալյուցինացիաներ, զառանցանքներ, խանգարված մտածողություն:",
        "explanationAz": "Halüsinasiyalar, hezeyanlar, pozğun düşüncə."
      },
      {
        "id": "q14-4",
        "question": "A phobia is:",
        "questionKa": "ფობია არის:",
        "options": [
          "Normal fear",
          "Irrational excessive fear",
          "Temporary anxiety",
          "Mood disorder"
        ],
        "optionsKa": [
          "ნორმალური შიში",
          "ირაციონალური ზედმეტი შიში",
          "დროებითი შფოთვა",
          "განწყობის აშლილობა"
        ],
        "correctIndex": 1,
        "explanation": "Intense, irrational fears.",
        "explanationKa": "ინტენსიური, ირაციონალური შიშები.",
        "optionsRu": [
          "Нормальный страх",
          "Иррациональный чрезмерный страх",
          "Временное беспокойство",
          "Расстройство настроения"
        ],
        "optionsHy": [
          "Սովորական վախ",
          "Իռացիոնալ չափից ավելի վախ",
          "Ժամանակավոր անհանգստություն",
          "Տրամադրության խանգարում"
        ],
        "optionsAz": [
          "Normal qorxu",
          "Məntiqsiz həddindən artıq qorxu",
          "Müvəqqəti narahatlıq",
          "Əhval pozğunluğu"
        ],
        "questionRu": "Фобия – это:",
        "questionHy": "Ֆոբիան հետևյալն է.",
        "explanationHy": "Ինտենսիվ, իռացիոնալ վախեր.",
        "explanationRu": "Сильные, иррациональные страхи.",
        "explanationAz": "Güclü, irrasional qorxular.",
        "questionAz": "Fobiya budur:"
      },
      {
        "id": "q14-5",
        "question": "Bipolar disorder:",
        "questionKa": "ბიპოლარული აშლილობა:",
        "options": [
          "Only depression",
          "Alternating mania and depression",
          "Constant mania",
          "Anxiety"
        ],
        "optionsKa": [
          "მხოლოდ დეპრესია",
          "მანიისა და დეპრესიის მონაცვლეობა",
          "მუდმივი მანია",
          "შფოთვა"
        ],
        "correctIndex": 1,
        "explanation": "Alternating manic and depressive episodes.",
        "explanationKa": "მანიაკალური და დეპრესიული ეპიზოდების მონაცვლეობა.",
        "optionsRu": [
          "Только депрессия",
          "Чередование мании и депрессии",
          "Постоянная мания",
          "Беспокойство"
        ],
        "optionsHy": [
          "Միայն դեպրեսիա",
          "Այլընտրանքային մոլուցք և դեպրեսիա",
          "Անընդհատ մոլուցք",
          "Անհանգստություն"
        ],
        "optionsAz": [
          "Yalnız depressiya",
          "Alternativ mani və depressiya",
          "Daimi maniya",
          "Narahatlıq"
        ],
        "questionRu": "Биполярное расстройство:",
        "questionAz": "Bipolyar pozğunluq:",
        "questionHy": "Երկբևեռ խանգարում.",
        "explanationHy": "Այլընտրանքային մանիակալ և դեպրեսիվ դրվագներ.",
        "explanationRu": "Чередование маниакальных и депрессивных эпизодов.",
        "explanationAz": "Alternativ manik və depressiv epizodlar."
      },
      {
        "id": "q14-6",
        "question": "PTSD develops after:",
        "questionKa": "PTSD ვითარდება:",
        "options": [
          "Mild stress",
          "Traumatic event",
          "Normal bad day",
          "Puberty"
        ],
        "optionsKa": [
          "მსუბუქი სტრესის შემდეგ",
          "ტრავმული მოვლენის შემდეგ",
          "ჩვეულებრივი ცუდი დღის შემდეგ",
          "პუბერტატის შემდეგ"
        ],
        "correctIndex": 1,
        "explanation": "Following traumatic event exposure.",
        "explanationKa": "ტრავმულ მოვლენასთან შეხების შემდეგ.",
        "optionsRu": [
          "Легкий стресс",
          "Травматическое событие",
          "Обычный плохой день",
          "Половое созревание"
        ],
        "optionsHy": [
          "Թեթև սթրես",
          "Տրավմատիկ իրադարձություն",
          "Սովորական վատ օր",
          "Սեռական հասունություն"
        ],
        "optionsAz": [
          "Yüngül stress",
          "Travmatik hadisə",
          "Normal pis gün",
          "Yetkinlik"
        ],
        "questionHy": "PTSD-ն զարգանում է հետևյալից հետո.",
        "explanationHy": "Տրավմատիկ իրադարձության բացահայտումից հետո:",
        "explanationRu": "После воздействия травматического события.",
        "questionRu": "ПТСР развивается после:",
        "explanationAz": "Travmatik hadisəyə məruz qaldıqdan sonra.",
        "questionAz": "TSSB aşağıdakılardan sonra inkişaf edir:"
      },
      {
        "id": "q14-7",
        "question": "Diathesis-stress model:",
        "questionKa": "დიათეზ-სტრესის მოდელი:",
        "options": [
          "Only genetics",
          "Only environment",
          "Predisposition + stress",
          "Random chance"
        ],
        "optionsKa": [
          "მხოლოდ გენეტიკა",
          "მხოლოდ გარემო",
          "მიდრეკილება + სტრესი",
          "შემთხვევითობა"
        ],
        "correctIndex": 2,
        "explanation": "Vulnerability interacts with stress.",
        "explanationKa": "მოწყვლადობა ურთიერთქმედებს სტრესთან.",
        "optionsRu": [
          "Только генетика",
          "Только окружающая среда",
          "Предрасположенность + стресс",
          "Случайный шанс"
        ],
        "optionsHy": [
          "Միայն գենետիկա",
          "Միայն միջավայր",
          "Նախատրամադրվածություն + սթրես",
          "Պատահական հնարավորություն"
        ],
        "optionsAz": [
          "Yalnız genetika",
          "Yalnız mühit",
          "Meyil + stress",
          "Təsadüfi şans"
        ],
        "explanationHy": "Խոցելիությունը փոխազդում է սթրեսի հետ:",
        "questionRu": "Модель диатеза-стресса:",
        "explanationRu": "Уязвимость взаимодействует со стрессом.",
        "questionHy": "Դիաթեզ-սթրես մոդել.",
        "questionAz": "Diatez-stress modeli:",
        "explanationAz": "Zəiflik stresslə qarşılıqlı təsir göstərir."
      },
      {
        "id": "q14-8",
        "question": "OCD involves:",
        "questionKa": "ობსესიურ-კომპულსიური აშლილობა მოიცავს:",
        "options": [
          "Obsessions and compulsions",
          "Only sadness",
          "Social withdrawal",
          "Memory loss"
        ],
        "optionsKa": [
          "ობსესიებს და კომპულსიებს",
          "მხოლოდ სევდას",
          "სოციალურ იზოლაციას",
          "მეხსიერების დაკარგვას"
        ],
        "correctIndex": 0,
        "explanation": "Intrusive thoughts and repetitive behaviors.",
        "explanationKa": "ინტრუზიული აზრები და განმეორებადი ქცევები.",
        "optionsRu": [
          "Навязчивые идеи и принуждения",
          "Только печаль",
          "Социальный уход",
          "Потеря памяти"
        ],
        "optionsHy": [
          "Օբսեսիաներ և պարտադրանքներ",
          "Միայն տխրություն",
          "Սոցիալական հեռացում",
          "Հիշողության կորուստ"
        ],
        "optionsAz": [
          "Obsesyonlar və məcburiyyətlər",
          "Yalnız kədər",
          "Sosial çəkilmə",
          "Yaddaş itkisi"
        ],
        "explanationHy": "Ներխուժող մտքեր և կրկնվող վարքագիծ:",
        "questionRu": "ОКР включает в себя:",
        "questionHy": "OCD-ն ներառում է.",
        "explanationRu": "Навязчивые мысли и повторяющееся поведение.",
        "questionAz": "OKB daxildir:",
        "explanationAz": "İntruziv düşüncələr və təkrarlanan davranışlar."
      },
      {
        "id": "q14-9",
        "question": "GAD is:",
        "questionKa": "გენერალიზებული შფოთვის აშლილობა არის:",
        "options": [
          "Specific fears",
          "Excessive worry about many things",
          "Panic attacks only",
          "Delusions"
        ],
        "optionsKa": [
          "კონკრეტული შიშები",
          "ბევრ რამეზე ზედმეტი შეშფოთება",
          "მხოლოდ პანიკის შეტევები",
          "ბოდვები"
        ],
        "correctIndex": 1,
        "explanation": "Chronic, excessive worry.",
        "explanationKa": "ქრონიკული, ზედმეტი შეშფოთება.",
        "optionsRu": [
          "Конкретные страхи",
          "Чрезмерное беспокойство по поводу многих вещей",
          "Только панические атаки",
          "заблуждения"
        ],
        "optionsHy": [
          "Հատուկ վախեր",
          "Շատ բաների համար չափազանց անհանգստություն",
          "Միայն խուճապի հարձակումներ",
          "Պատրանքներ"
        ],
        "optionsAz": [
          "Xüsusi qorxular",
          "Çox şeylər üçün həddindən artıq narahatçılıq",
          "Yalnız panik atak",
          "Sanrılar"
        ],
        "questionRu": "ГАД – это:",
        "explanationRu": "Хроническое, чрезмерное беспокойство.",
        "questionHy": "GAD-ն է.",
        "explanationHy": "Քրոնիկ, չափից ավելի անհանգստություն:",
        "explanationAz": "Xroniki, həddindən artıq narahatlıq.",
        "questionAz": "GAD budur:"
      },
      {
        "id": "q14-10",
        "question": "Medical model views disorders as:",
        "questionKa": "სამედიცინო მოდელი აშლილობებს განიხილავს როგორც:",
        "options": [
          "Moral failures",
          "Biological diseases",
          "Personal choices",
          "Spiritual"
        ],
        "optionsKa": [
          "მორალურ წარუმატებლობას",
          "ბიოლოგიურ დაავადებებს",
          "პირად არჩევანს",
          "სულიერს"
        ],
        "correctIndex": 1,
        "explanation": "Disorders as biological illnesses.",
        "explanationKa": "აშლილობები როგორც ბიოლოგიური დაავადებები.",
        "optionsRu": [
          "Моральные неудачи",
          "Биологические заболевания",
          "Личный выбор",
          "Духовный"
        ],
        "optionsHy": [
          "Բարոյական ձախողումներ",
          "Կենսաբանական հիվանդություններ",
          "Անձնական ընտրություններ",
          "Հոգևոր"
        ],
        "optionsAz": [
          "Mənəvi uğursuzluqlar",
          "Bioloji xəstəliklər",
          "Şəxsi seçimlər",
          "Ruhani"
        ],
        "questionRu": "Медицинская модель рассматривает расстройства как:",
        "explanationRu": "Расстройства как биологические болезни.",
        "questionHy": "Բժշկական մոդելը դիտարկում է խանգարումները որպես.",
        "explanationHy": "Խանգարումները որպես կենսաբանական հիվանդություններ.",
        "explanationAz": "Bioloji xəstəliklər kimi pozğunluqlar.",
        "questionAz": "Tibbi model pozuntulara aşağıdakı kimi baxır:"
      }
    ],
    "titleHy": "Հոգեբանական խանգարումներ — Վիկտորինա",
    "titleRu": "Психологические расстройства — Викторина",
    "titleAz": "Psixoloji pozğunluqlar - Viktorina"
  },
  {
    "id": "ch15-quiz",
    "chapterId": 15,
    "title": "Therapies — Quiz",
    "titleKa": "თერაპიები — ვიქტორინა",
    "questions": [
      {
        "id": "q15-1",
        "question": "CBT focuses on:",
        "questionKa": "კოგნიტურ-ბიჰევიორული თერაპია ფოკუსირებულია:",
        "options": [
          "Dreams",
          "Changing thoughts and behaviors",
          "Free association",
          "Medication"
        ],
        "optionsKa": [
          "სიზმრებზე",
          "აზრებისა და ქცევების შეცვლაზე",
          "თავისუფალ ასოციაციაზე",
          "მედიკამენტებზე"
        ],
        "correctIndex": 1,
        "explanation": "Restructuring negative thoughts and behaviors.",
        "explanationKa": "უარყოფითი აზრებისა და ქცევების რესტრუქტურიზაცია.",
        "optionsRu": [
          "Мечты",
          "Изменение мыслей и поведения",
          "Свободная ассоциация",
          "Медикамент"
        ],
        "optionsHy": [
          "Երազներ",
          "Մտքերի և վարքագծի փոփոխություն",
          "Ազատ միավորում",
          "Դեղորայք"
        ],
        "optionsAz": [
          "Xəyallar",
          "Düşüncələri və davranışları dəyişdirmək",
          "Pulsuz birləşmə",
          "Dərman"
        ],
        "questionRu": "КПТ фокусируется на:",
        "explanationHy": "Բացասական մտքերի և վարքագծի վերակազմավորում:",
        "questionHy": "CBT-ն կենտրոնանում է.",
        "explanationRu": "Реструктуризация негативных мыслей и поведения.",
        "explanationAz": "Mənfi düşüncələrin və davranışların yenidən qurulması.",
        "questionAz": "CBT diqqət mərkəzindədir:"
      },
      {
        "id": "q15-2",
        "question": "Systematic desensitization treats:",
        "questionKa": "სისტემატური დესენსიტიზაცია მკურნალობს:",
        "options": [
          "Depression",
          "Phobias via gradual exposure",
          "Schizophrenia",
          "ADHD"
        ],
        "optionsKa": [
          "დეპრესიას",
          "ფობიებს თანდათანობითი ზემოქმედებით",
          "შიზოფრენიას",
          "ADHD-ს"
        ],
        "correctIndex": 1,
        "explanation": "Gradual exposure paired with relaxation.",
        "explanationKa": "თანდათანობითი ზემოქმედება რელაქსაციასთან ერთად.",
        "optionsRu": [
          "Депрессия",
          "Фобии через постепенное воздействие",
          "Шизофрения",
          "СДВГ"
        ],
        "optionsHy": [
          "Դեպրեսիա",
          "Ֆոբիաներ աստիճանական ազդեցության միջոցով",
          "Շիզոֆրենիա",
          "ADHD"
        ],
        "optionsAz": [
          "Depressiya",
          "Tədricən məruz qalma yolu ilə fobiyalar",
          "Şizofreniya",
          "DEHB"
        ],
        "explanationHy": "Աստիճանաբար մերկացում զուգակցված թուլացման հետ:",
        "questionAz": "Sistematik desensitizasiya müalicə edir:",
        "explanationAz": "Tədricən ifşa istirahətlə birləşdirilir.",
        "questionHy": "Համակարգված դեզենսիտիզացիան բուժում է.",
        "questionRu": "Систематическая десенсибилизация лечит:",
        "explanationRu": "Постепенное воздействие в сочетании с расслаблением."
      },
      {
        "id": "q15-3",
        "question": "Client-centered therapy by:",
        "questionKa": "კლიენტზე ორიენტირებული თერაპია შექმნა:",
        "options": [
          "Freud",
          "Skinner",
          "Carl Rogers",
          "Beck"
        ],
        "optionsKa": [
          "ფროიდმა",
          "სკინერმა",
          "კარლ როჯერსმა",
          "ბეკმა"
        ],
        "correctIndex": 2,
        "explanation": "Rogers created person-centered therapy.",
        "explanationKa": "როჯერსმა შექმნა პიროვნებაზე ორიენტირებული თერაპია.",
        "optionsRu": [
          "Фрейд",
          "Скиннер",
          "Карл Роджерс",
          "Бек"
        ],
        "optionsHy": [
          "Ֆրեյդը",
          "Սքիններ",
          "Կարլ Ռոջերս",
          "Բեկ"
        ],
        "optionsAz": [
          "Freyd",
          "Skinner",
          "Karl Rocers",
          "Bek"
        ],
        "questionHy": "Հաճախորդակենտրոն թերապիա՝",
        "explanationHy": "Ռոջերսը ստեղծեց անձակենտրոն թերապիա։",
        "questionAz": "Müştəri mərkəzli terapiya:",
        "explanationAz": "Rogers insan mərkəzli terapiya yaratdı.",
        "questionRu": "Клиент-центрированная терапия:",
        "explanationRu": "Роджерс создал личностно-ориентированную терапию."
      },
      {
        "id": "q15-4",
        "question": "SSRIs increase:",
        "questionKa": "SSRI-ები ზრდის:",
        "options": [
          "Dopamine",
          "Serotonin availability",
          "All brain activity",
          "Neuron death"
        ],
        "optionsKa": [
          "დოფამინს",
          "სეროტონინის ხელმისაწვდომობას",
          "ტვინის მთელ აქტივობას",
          "ნეირონების სიკვდილს"
        ],
        "correctIndex": 1,
        "explanation": "SSRIs block serotonin reabsorption.",
        "explanationKa": "SSRI-ები ბლოკავს სეროტონინის ხელახალ შეწოვას.",
        "optionsRu": [
          "Дофамин",
          "Наличие серотонина",
          "Вся мозговая деятельность",
          "Смерть нейрона"
        ],
        "optionsHy": [
          "Դոպամին",
          "Սերոտոնինի առկայությունը",
          "Ուղեղի ամբողջ գործունեությունը",
          "Նեյրոնի մահը"
        ],
        "optionsAz": [
          "Dopamin",
          "Serotoninin mövcudluğu",
          "Bütün beyin fəaliyyəti",
          "Neyron ölümü"
        ],
        "questionRu": "СИОЗС увеличивают:",
        "questionHy": "SSRI-ների ավելացում.",
        "explanationRu": "СИОЗС блокируют реабсорбцию серотонина.",
        "explanationHy": "SSRI-ները արգելափակում են սերոտոնինի ռեաբսորբցիան:",
        "questionAz": "SSRI artır:",
        "explanationAz": "SSRI-lər serotoninin reabsorbsiyasını maneə törədir."
      },
      {
        "id": "q15-5",
        "question": "Free association is used in:",
        "questionKa": "თავისუფალი ასოციაცია გამოიყენება:",
        "options": [
          "CBT",
          "Behavioral",
          "Psychoanalysis",
          "Group therapy"
        ],
        "optionsKa": [
          "კოგნიტურ-ბიჰევიორულ თერაპიაში",
          "ბიჰევიორულში",
          "ფსიქოანალიზში",
          "ჯგუფურ თერაპიაში"
        ],
        "correctIndex": 2,
        "explanation": "A psychoanalytic technique.",
        "explanationKa": "ფსიქოანალიტიკური ტექნიკა.",
        "optionsRu": [
          "ЗБТ",
          "Поведенческий",
          "Психоанализ",
          "Групповая терапия"
        ],
        "optionsHy": [
          "CBT",
          "Վարքագծային",
          "Հոգեվերլուծություն",
          "Խմբային թերապիա"
        ],
        "optionsAz": [
          "CBT",
          "Davranış",
          "Psixoanaliz",
          "Qrup terapiyası"
        ],
        "questionRu": "Свободная ассоциация используется в:",
        "questionHy": "Ազատ ասոցիացիան օգտագործվում է հետևյալում.",
        "questionAz": "Pulsuz birləşmə aşağıdakı hallarda istifadə olunur:",
        "explanationHy": "Հոգեվերլուծական տեխնիկա.",
        "explanationRu": "Психоаналитическая техника.",
        "explanationAz": "Psixoanalitik texnika."
      },
      {
        "id": "q15-6",
        "question": "Group therapy offers:",
        "questionKa": "ჯგუფური თერაპია სთავაზობს:",
        "options": [
          "Lower cost only",
          "Shared experiences and skills practice",
          "Faster meds",
          "Solitary healing"
        ],
        "optionsKa": [
          "მხოლოდ დაბალ ფასს",
          "გაზიარებულ გამოცდილებას და უნარების პრაქტიკას",
          "სწრაფ მედიკამენტებს",
          "მარტოხელა განკურნებას"
        ],
        "correctIndex": 1,
        "explanation": "Peer support and social practice.",
        "explanationKa": "თანატოლთა მხარდაჭერა და სოციალური პრაქტიკა.",
        "optionsRu": [
          "Только более низкая стоимость",
          "Обмен опытом и практика навыков",
          "Быстрые лекарства",
          "Одиночное исцеление"
        ],
        "optionsHy": [
          "Միայն ավելի ցածր արժեք",
          "Համատեղ փորձի և հմտությունների պրակտիկա",
          "Ավելի արագ դեղամիջոցներ",
          "Միայնակ ապաքինում"
        ],
        "optionsAz": [
          "Yalnız aşağı qiymət",
          "Paylaşılan təcrübə və bacarıqlar",
          "Daha sürətli dərmanlar",
          "Tək şəfa"
        ],
        "explanationRu": "Поддержка коллег и социальная практика.",
        "questionRu": "Групповая терапия предлагает:",
        "questionAz": "Qrup terapiyası təklif edir:",
        "explanationHy": "Գործընկերների աջակցություն և սոցիալական պրակտիկա:",
        "questionHy": "Խմբային թերապիան առաջարկում է.",
        "explanationAz": "Həmyaşıd dəstəyi və sosial təcrübə."
      },
      {
        "id": "q15-7",
        "question": "Exposure therapy based on:",
        "questionKa": "ექსპოზიციური თერაპია დაფუძნებულია:",
        "options": [
          "Psychoanalysis",
          "Classical conditioning extinction",
          "Humanism",
          "Trait theory"
        ],
        "optionsKa": [
          "ფსიქოანალიზზე",
          "კლასიკური კონდიციონირების ჩაქრობაზე",
          "ჰუმანიზმზე",
          "თვისებათა თეორიაზე"
        ],
        "correctIndex": 1,
        "explanation": "Extinction of fear response.",
        "explanationKa": "შიშის რეაქციის ჩაქრობა.",
        "optionsRu": [
          "Психоанализ",
          "Классическое кондиционное вымирание",
          "Гуманизм",
          "Теория черт"
        ],
        "optionsHy": [
          "Հոգեվերլուծություն",
          "Դասական կոնդիցիոներների ոչնչացում",
          "Հումանիզմ",
          "Հատկանիշների տեսություն"
        ],
        "optionsAz": [
          "Psixoanaliz",
          "Klassik kondisionerin yox olması",
          "Humanizm",
          "Xüsusiyyət nəzəriyyəsi"
        ],
        "explanationRu": "Угасание реакции страха.",
        "questionRu": "Экспозиционная терапия, основанная на:",
        "explanationHy": "Վախի արձագանքի վերացում.",
        "questionHy": "Էքսպոզիցիոն թերապիա՝ հիմնված.",
        "questionAz": "Ekspozisiya terapiyasına əsaslanır:",
        "explanationAz": "Qorxu reaksiyasının yox olması."
      },
      {
        "id": "q15-8",
        "question": "Lithium treats:",
        "questionKa": "ლითიუმი მკურნალობს:",
        "options": [
          "Depression",
          "Anxiety",
          "Bipolar disorder",
          "Schizophrenia"
        ],
        "optionsKa": [
          "დეპრესიას",
          "შფოთვას",
          "ბიპოლარულ აშლილობას",
          "შიზოფრენიას"
        ],
        "correctIndex": 2,
        "explanation": "First-line for bipolar disorder.",
        "explanationKa": "პირველი რიგის მკურნალობა ბიპოლარული აშლილობისთვის.",
        "optionsRu": [
          "Депрессия",
          "Беспокойство",
          "Биполярное расстройство",
          "Шизофрения"
        ],
        "optionsHy": [
          "Դեպրեսիա",
          "Անհանգստություն",
          "Երկբևեռ խանգարում",
          "Շիզոֆրենիա"
        ],
        "optionsAz": [
          "Depressiya",
          "Narahatlıq",
          "Bipolyar pozğunluq",
          "Şizofreniya"
        ],
        "explanationRu": "Первая линия лечения биполярного расстройства.",
        "explanationHy": "Առաջին գիծ երկբևեռ խանգարման համար.",
        "questionHy": "Լիթիումով բուժում.",
        "questionRu": "Литий лечит:",
        "questionAz": "Litium müalicə edir:",
        "explanationAz": "Bipolyar pozğunluq üçün birinci sıra."
      },
      {
        "id": "q15-9",
        "question": "Eclectic approach:",
        "questionKa": "ეკლექტიკური მიდგომა:",
        "options": [
          "One method",
          "Integrating various techniques",
          "Rejecting evidence",
          "Only medication"
        ],
        "optionsKa": [
          "ერთი მეთოდი",
          "სხვადასხვა ტექნიკის ინტეგრაცია",
          "მტკიცებულებების უარყოფა",
          "მხოლოდ მედიკამენტები"
        ],
        "correctIndex": 1,
        "explanation": "Combining different techniques.",
        "explanationKa": "სხვადასხვა ტექნიკის კომბინაცია.",
        "optionsRu": [
          "Один метод",
          "Интеграция различных техник",
          "Отвержение доказательств",
          "Только лекарства"
        ],
        "optionsHy": [
          "Մեկ մեթոդ",
          "Տարբեր տեխնիկայի ինտեգրում",
          "Ապացույցների մերժում",
          "Միայն դեղորայք"
        ],
        "optionsAz": [
          "Bir üsul",
          "Müxtəlif texnikaların inteqrasiyası",
          "Sübutları rədd etmək",
          "Yalnız dərman"
        ],
        "explanationRu": "Сочетание разных техник.",
        "questionHy": "Էկլեկտիկ մոտեցում.",
        "questionRu": "Эклектический подход:",
        "explanationHy": "Տարբեր տեխնիկայի համադրում.",
        "explanationAz": "Müxtəlif texnikaların birləşməsi.",
        "questionAz": "Eklektik yanaşma:"
      },
      {
        "id": "q15-10",
        "question": "Therapy works best when:",
        "questionKa": "თერაპია საუკეთესოდ მუშაობს, როცა:",
        "options": [
          "One session",
          "Strong therapeutic alliance",
          "Client passive",
          "No diagnosis"
        ],
        "optionsKa": [
          "ერთი სესია",
          "ძლიერი თერაპიული ალიანსი",
          "კლიენტი პასიურია",
          "დიაგნოზი არ არის"
        ],
        "correctIndex": 1,
        "explanation": "The relationship is the strongest predictor.",
        "explanationKa": "ურთიერთობა ყველაზე ძლიერი პრედიქტორია.",
        "optionsRu": [
          "Один сеанс",
          "Сильный терапевтический альянс",
          "Пассивный клиент",
          "Нет диагноза"
        ],
        "optionsHy": [
          "Մեկ նիստ",
          "Ուժեղ թերապևտիկ դաշինք",
          "Հաճախորդի պասիվ",
          "Ոչ մի ախտորոշում"
        ],
        "optionsAz": [
          "Bir seans",
          "Güclü terapevtik ittifaq",
          "Müştəri passiv",
          "Diaqnoz yoxdur"
        ],
        "questionHy": "Թերապիան լավագույնս աշխատում է, երբ.",
        "questionRu": "Терапия работает лучше всего, когда:",
        "questionAz": "Terapiya aşağıdakı hallarda ən yaxşı nəticə verir:",
        "explanationHy": "Հարաբերությունները ամենաուժեղ կանխատեսումն են:",
        "explanationRu": "Отношения – самый сильный предсказатель.",
        "explanationAz": "Əlaqə ən güclü proqnozlaşdırıcıdır."
      }
    ],
    "titleRu": "Терапия — Викторина",
    "titleHy": "Թերապիաներ — Վիկտորինա",
    "titleAz": "Terapiyalar - Viktorina"
  },
  {
    "id": "ch16-quiz",
    "chapterId": 16,
    "title": "Applied Psychology — Quiz",
    "titleKa": "გამოყენებითი ფსიქოლოგია — ვიქტორინა",
    "questions": [
      {
        "id": "q16-1",
        "question": "I/O psychology applies principles to:",
        "questionKa": "ორგანიზაციული ფსიქოლოგია პრინციპებს იყენებს:",
        "options": [
          "Hospitals",
          "The workplace",
          "Animals",
          "Children only"
        ],
        "optionsKa": [
          "საავადმყოფოებში",
          "სამუშაო ადგილზე",
          "ცხოველებზე",
          "მხოლოდ ბავშვებზე"
        ],
        "correctIndex": 1,
        "explanation": "Industrial-Organizational psychology focuses on the workplace.",
        "explanationKa": "ორგანიზაციული ფსიქოლოგია ფოკუსირებულია სამუშაო ადგილზე.",
        "optionsRu": [
          "Больницы",
          "Рабочее место",
          "Животные",
          "Только дети"
        ],
        "optionsHy": [
          "Հիվանդանոցներ",
          "Աշխատավայրը",
          "Կենդանիներ",
          "Միայն երեխաներ"
        ],
        "optionsAz": [
          "Xəstəxanalar",
          "İş yeri",
          "Heyvanlar",
          "Yalnız uşaqlar"
        ],
        "explanationHy": "Արդյունաբերական-կազմակերպչական հոգեբանությունը կենտրոնանում է աշխատավայրի վրա:",
        "questionHy": "I/O հոգեբանությունը կիրառում է սկզբունքներ՝",
        "explanationRu": "Промышленно-организационная психология фокусируется на рабочем месте.",
        "questionRu": "Психология ввода-вывода применяет принципы к:",
        "questionAz": "I/O psixologiyası prinsipləri aşağıdakılara tətbiq edir:",
        "explanationAz": "Sənaye-təşkilati psixologiya iş yerinə diqqət yetirir."
      },
      {
        "id": "q16-2",
        "question": "Growth mindset was proposed by:",
        "questionKa": "ზრდის აზროვნება შემოთავაზებულია:",
        "options": [
          "Seligman",
          "Csikszentmihalyi",
          "Carol Dweck",
          "Duckworth"
        ],
        "optionsKa": [
          "სელიგმანის მიერ",
          "ჩიქსენტმიჰაის მიერ",
          "კეროლ დუეკის მიერ",
          "დაკუორთის მიერ"
        ],
        "correctIndex": 2,
        "explanation": "Dweck showed believing intelligence is malleable improves performance.",
        "explanationKa": "დუეკმა აჩვენა, რომ ინტელექტის მოქნილობის რწმენა აუმჯობესებს შესრულებას.",
        "optionsRu": [
          "Селигман",
          "Чиксентмихайи",
          "Кэрол Двек",
          "Дакворт"
        ],
        "optionsHy": [
          "Սելիգման",
          "Չիկսզենտմիհալի",
          "Քերոլ Դուեք",
          "Դաքվորթ"
        ],
        "optionsAz": [
          "Seliqman",
          "Csikszentmihalyi",
          "Carol Dweck",
          "Duckworth"
        ],
        "explanationHy": "Dweck-ը ցույց տվեց, որ հավատալը, որ բանականությունը ճկուն է, բարելավում է կատարումը:",
        "questionRu": "Мышление роста было предложено:",
        "questionHy": "Աճի մտածելակերպն առաջարկվել է.",
        "explanationRu": "Двек показала, что вера в податливость интеллекта повышает производительность.",
        "explanationAz": "Dweck, zəkanın çevik olduğuna inanmağın performansı yaxşılaşdırdığını göstərdi.",
        "questionAz": "Böyümə zehniyyəti təklif etdi:"
      },
      {
        "id": "q16-3",
        "question": "Positive psychology focuses on:",
        "questionKa": "პოზიტიური ფსიქოლოგია ფოკუსირებულია:",
        "options": [
          "Mental illness",
          "Strengths and optimal functioning",
          "Diagnosis",
          "Medication"
        ],
        "optionsKa": [
          "ფსიქიკურ დაავადებაზე",
          "ძლიერ მხარეებსა და ოპტიმალურ ფუნქციონირებაზე",
          "დიაგნოზზე",
          "მედიკამენტებზე"
        ],
        "correctIndex": 1,
        "explanation": "Studying what makes life worth living.",
        "explanationKa": "რა ხდის ცხოვრებას ღირებულს.",
        "optionsRu": [
          "Психическое заболевание",
          "Сильные стороны и оптимальное функционирование",
          "Диагностика",
          "Медикамент"
        ],
        "optionsHy": [
          "Հոգեկան հիվանդություն",
          "Ուժեղ կողմերը և օպտիմալ գործունեությունը",
          "Ախտորոշում",
          "Դեղորայք"
        ],
        "optionsAz": [
          "Ruhi xəstəlik",
          "Güclər və optimal işləmə",
          "Diaqnoz",
          "Dərman"
        ],
        "explanationRu": "Изучение того, что делает жизнь стоящей.",
        "questionRu": "Позитивная психология фокусируется на:",
        "explanationHy": "Ուսումնասիրել, թե ինչն է կյանքն արժե ապրել:",
        "questionHy": "Դրական հոգեբանությունը կենտրոնանում է.",
        "explanationAz": "Həyatı yaşamağa dəyər edən şeyləri öyrənmək.",
        "questionAz": "Müsbət psixologiya diqqət mərkəzindədir:"
      },
      {
        "id": "q16-4",
        "question": "Flow state was described by:",
        "questionKa": "ნაკადის მდგომარეობა აღწერა:",
        "options": [
          "Seligman",
          "Csikszentmihalyi",
          "Dweck",
          "Duckworth"
        ],
        "optionsKa": [
          "სელიგმანმა",
          "ჩიქსენტმიჰაიმ",
          "დუეკმა",
          "დაკუორთმა"
        ],
        "correctIndex": 1,
        "explanation": "Csikszentmihalyi described the state of complete absorption.",
        "explanationKa": "ჩიქსენტმიჰაიმ აღწერა სრული ჩაძირვის მდგომარეობა.",
        "optionsRu": [
          "Селигман",
          "Чиксентмихайи",
          "Двек",
          "Дакворт"
        ],
        "optionsHy": [
          "Սելիգման",
          "Չիկսզենտմիհալի",
          "Dweck",
          "Դաքվորթ"
        ],
        "optionsAz": [
          "Seliqman",
          "Csikszentmihalyi",
          "Dweck",
          "Duckworth"
        ],
        "questionRu": "Состояние потока описывалось:",
        "explanationHy": "Csikszentmihalyi-ն նկարագրել է ամբողջական կլանման վիճակը:",
        "explanationRu": "Чиксентмихайи описал состояние полного поглощения.",
        "explanationAz": "Csikszentmihalyi tam udma vəziyyətini təsvir etdi.",
        "questionHy": "Հոսքի վիճակը նկարագրվել է հետևյալով.",
        "questionAz": "Axın vəziyyəti aşağıdakılarla təsvir edilmişdir:"
      },
      {
        "id": "q16-5",
        "question": "Forensic psychology intersects psychology and:",
        "questionKa": "სასამართლო ფსიქოლოგია აკავშირებს ფსიქოლოგიას და:",
        "options": [
          "Education",
          "Law",
          "Business",
          "Medicine"
        ],
        "optionsKa": [
          "განათლებას",
          "სამართალს",
          "ბიზნესს",
          "მედიცინას"
        ],
        "correctIndex": 1,
        "explanation": "Forensic psychology applies psychology to legal contexts.",
        "explanationKa": "სასამართლო ფსიქოლოგია იყენებს ფსიქოლოგიას სამართლებრივ კონტექსტში.",
        "optionsRu": [
          "Образование",
          "Закон",
          "Бизнес",
          "Лекарство"
        ],
        "optionsHy": [
          "Կրթություն",
          "օրենք",
          "Բիզնես",
          "Դեղ"
        ],
        "optionsAz": [
          "Təhsil",
          "Qanun",
          "Biznes",
          "Dərman"
        ],
        "explanationAz": "Məhkəmə psixologiyası psixologiyanı hüquqi kontekstlərə tətbiq edir.",
        "explanationRu": "Судебная психология применяет психологию к юридическому контексту.",
        "explanationHy": "Դատական ​​հոգեբանությունը հոգեբանությունը կիրառում է իրավական համատեքստերում:",
        "questionRu": "Судебная психология пересекает психологию и:",
        "questionHy": "Դատական ​​հոգեբանությունը հատում է հոգեբանությունը և.",
        "questionAz": "Məhkəmə psixologiyası psixologiya ilə kəsişir və:"
      },
      {
        "id": "q16-6",
        "question": "Structured interviews are preferred because they:",
        "questionKa": "სტრუქტურიზებული ინტერვიუები სასურველია, რადგან:",
        "options": [
          "Are shorter",
          "Reduce bias and improve prediction",
          "Cost less",
          "Are informal"
        ],
        "optionsKa": [
          "უფრო მოკლეა",
          "ამცირებს მიკერძოებას და აუმჯობესებს პროგნოზს",
          "ნაკლები ღირს",
          "არაფორმალურია"
        ],
        "correctIndex": 1,
        "explanation": "Structured interviews are more valid and reduce interviewer bias.",
        "explanationKa": "სტრუქტურიზებული ინტერვიუები უფრო ვალიდურია და ამცირებს მიკერძოებას.",
        "optionsRu": [
          "короче",
          "Уменьшите предвзятость и улучшите прогнозирование",
          "Стоимость меньше",
          "Неформальны"
        ],
        "optionsHy": [
          "Ավելի կարճ են",
          "Նվազեցրեք կողմնակալությունը և բարելավեք կանխատեսումը",
          "Արժեք ավելի քիչ",
          "Ոչ ֆորմալ են"
        ],
        "optionsAz": [
          "Daha qısadırlar",
          "Qərəzliyi azaldın və proqnozu yaxşılaşdırın",
          "Daha az xərc",
          "Qeyri-rəsmidirlər"
        ],
        "explanationAz": "Strukturlaşdırılmış müsahibələr daha etibarlıdır və müsahibə verənin qərəzliyini azaldır.",
        "questionAz": "Strukturlaşdırılmış müsahibələrə üstünlük verilir, çünki bunlar:",
        "explanationRu": "Структурированные интервью более достоверны и уменьшают предвзятость интервьюера.",
        "questionRu": "Структурированные интервью предпочтительнее, потому что они:",
        "explanationHy": "Կառուցվածքային հարցազրույցներն ավելի հիմնավոր են և նվազեցնում են հարցազրուցավարի կողմնակալությունը:",
        "questionHy": "Նախընտրելի են կառուցվածքային հարցազրույցները, քանի որ դրանք."
      },
      {
        "id": "q16-7",
        "question": "Grit research was done by:",
        "questionKa": "სიჟინჟილის კვლევა ჩაატარა:",
        "options": [
          "Seligman",
          "Csikszentmihalyi",
          "Dweck",
          "Angela Duckworth"
        ],
        "optionsKa": [
          "სელიგმანმა",
          "ჩიქსენტმიჰაიმ",
          "დუეკმა",
          "ანჯელა დაკუორთმა"
        ],
        "correctIndex": 3,
        "explanation": "Duckworth studied perseverance and passion for long-term goals.",
        "explanationKa": "დაკუორთმა შეისწავლა შეუპოვრობა და ვნება გრძელვადიანი მიზნებისთვის.",
        "optionsRu": [
          "Селигман",
          "Чиксентмихайи",
          "Двек",
          "Анджела Дакворт"
        ],
        "optionsHy": [
          "Սելիգման",
          "Չիկսզենտմիհալի",
          "Dweck",
          "Անժելա Դաքվորթ"
        ],
        "optionsAz": [
          "Seliqman",
          "Csikszentmihalyi",
          "Dweck",
          "Angela Duckworth"
        ],
        "explanationHy": "Դաքվորթն ուսումնասիրել է համառությունն ու կիրքը երկարաժամկետ նպատակների համար:",
        "explanationRu": "Дакворт изучал настойчивость и страсть к долгосрочным целям.",
        "questionRu": "Исследование зернистости было проведено:",
        "questionHy": "Գրիտ հետազոտությունը կատարվել է.",
        "explanationAz": "Duckworth əzmkarlıq və uzunmüddətli məqsədlər üçün ehtiras öyrəndi.",
        "questionAz": "Qum tədqiqatı aşağıdakılar tərəfindən aparılmışdır:"
      },
      {
        "id": "q16-8",
        "question": "Collectivistic cultures emphasize:",
        "questionKa": "კოლექტივისტური კულტურები ხაზს უსვამს:",
        "options": [
          "Individual achievement",
          "Group harmony",
          "Competition",
          "Personal freedom"
        ],
        "optionsKa": [
          "ინდივიდუალურ მიღწევას",
          "ჯგუფურ ჰარმონიას",
          "კონკურენციას",
          "პირად თავისუფლებას"
        ],
        "correctIndex": 1,
        "explanation": "Collectivistic cultures value group goals over individual ones.",
        "explanationKa": "კოლექტივისტური კულტურები აფასებს ჯგუფურ მიზნებს ინდივიდუალურზე მეტად.",
        "optionsRu": [
          "Индивидуальные достижения",
          "Групповая гармония",
          "Соревнование",
          "Личная свобода"
        ],
        "optionsHy": [
          "Անհատական ​​ձեռքբերում",
          "Խմբային ներդաշնակություն",
          "Մրցույթ",
          "Անձնական ազատություն"
        ],
        "optionsAz": [
          "Fərdi nailiyyət",
          "Qrup harmoniyası",
          "Müsabiqə",
          "Şəxsi azadlıq"
        ],
        "explanationRu": "Коллективистские культуры ценят групповые цели выше индивидуальных.",
        "questionRu": "Коллективистские культуры подчеркивают:",
        "explanationHy": "Կոլեկտիվիստական ​​մշակույթները գնահատում են խմբային նպատակները, քան անհատականները:",
        "questionHy": "Կոլեկտիվիստական ​​մշակույթները շեշտում են.",
        "explanationAz": "Kollektivist mədəniyyətlər qrup məqsədlərini fərdi olanlardan üstün tutur.",
        "questionAz": "Kollektivist mədəniyyətlər vurğulayır:"
      },
      {
        "id": "q16-9",
        "question": "The IKEA effect shows people:",
        "questionKa": "IKEA ეფექტი აჩვენებს, რომ ადამიანები:",
        "options": [
          "Prefer cheap furniture",
          "Value self-built items more",
          "Dislike assembly",
          "Buy impulsively"
        ],
        "optionsKa": [
          "ამჯობინებენ იაფ ავეჯს",
          "თვითნაშენ ნივთებს მეტად აფასებენ",
          "არ მოსწონთ აწყობა",
          "იმპულსურად ყიდულობენ"
        ],
        "correctIndex": 1,
        "explanation": "People overvalue things they helped create.",
        "explanationKa": "ადამიანები ზედმეტად აფასებენ რამეს, რის შექმნაშიც მონაწილეობდნენ.",
        "optionsRu": [
          "Предпочитаю дешевую мебель",
          "Больше цените предметы, сделанные своими руками",
          "Не нравится сборка",
          "Покупайте импульсивно"
        ],
        "optionsHy": [
          "Նախընտրեք էժան կահույք",
          "Ավելի շատ գնահատեք սեփական ձեռքերով պատրաստված իրերը",
          "Չհավանել ժողովը",
          "Գնել իմպուլսիվ"
        ],
        "optionsAz": [
          "Ucuz mebellərə üstünlük verin",
          "Öz-özünə tikilmiş əşyalara daha çox dəyər verin",
          "Məclisi bəyənməmək",
          "Dürtüsel olaraq satın alın"
        ],
        "questionRu": "Эффект ИКЕА показывает людям:",
        "explanationRu": "Люди переоценивают вещи, которые они помогли создать.",
        "questionHy": "IKEA էֆեկտը ցույց է տալիս մարդկանց.",
        "explanationHy": "Մարդիկ գերագնահատում են այն բաները, որոնք օգնել են ստեղծել:",
        "questionAz": "IKEA effekti insanlara göstərir:",
        "explanationAz": "İnsanlar yaratmağa kömək etdikləri şeyləri yüksək qiymətləndirirlər."
      },
      {
        "id": "q16-10",
        "question": "Health psychology promotes:",
        "questionKa": "ჯანმრთელობის ფსიქოლოგია ხელს უწყობს:",
        "options": [
          "Only medication",
          "Healthy behaviors and illness prevention",
          "Surgery",
          "Hospitalization"
        ],
        "optionsKa": [
          "მხოლოდ მედიკამენტებს",
          "ჯანსაღ ქცევებსა და დაავადებების პრევენციას",
          "ქირურგიას",
          "ჰოსპიტალიზაციას"
        ],
        "correctIndex": 1,
        "explanation": "Promoting behavior change and preventing illness.",
        "explanationKa": "ქცევის ცვლილებისა და დაავადებების პრევენციის ხელშეწყობა.",
        "optionsRu": [
          "Только лекарства",
          "Здоровое поведение и профилактика заболеваний",
          "Операция",
          "Госпитализация"
        ],
        "optionsHy": [
          "Միայն դեղորայք",
          "Առողջ վարքագիծ և հիվանդությունների կանխարգելում",
          "Վիրաբուժություն",
          "Հոսպիտալացում"
        ],
        "optionsAz": [
          "Yalnız dərman",
          "Sağlam davranışlar və xəstəliklərin qarşısının alınması",
          "Cərrahiyyə",
          "Xəstəxanaya yerləşdirmə"
        ],
        "explanationRu": "Содействие изменению поведения и предотвращению заболеваний.",
        "questionRu": "Психология здоровья способствует:",
        "explanationHy": "Վարքագծի փոփոխության խթանում և հիվանդությունների կանխարգելում:",
        "questionHy": "Առողջության հոգեբանությունը նպաստում է.",
        "explanationAz": "Davranış dəyişikliyini təşviq etmək və xəstəliyin qarşısını almaq.",
        "questionAz": "Sağlamlıq psixologiyası kömək edir:"
      }
    ],
    "titleHy": "Կիրառական հոգեբանություն — Վիկտորինա",
    "titleRu": "Прикладная психология — Викторина",
    "titleAz": "Tətbiqi Psixologiya - Viktorina"
  }
];

export const FACTS: Fact[] = [
  {
    "id": 1,
    "text": "Your brain uses about 20% of your body's total energy, despite being only 2% of your body weight.",
    "textKa": "თქვენი ტვინი სხეულის მთლიანი ენერგიის 20%-ს მოიხმარს, მიუხედავად იმისა, რომ სხეულის წონის მხოლოდ 2%-ს შეადგენს.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "Мозг использует около 20% всей энергии вашего тела, несмотря на то, что его масса составляет всего 2% от веса вашего тела.",
    "textHy": "Ձեր ուղեղը օգտագործում է ձեր մարմնի ընդհանուր էներգիայի մոտ 20%-ը, չնայած այն կազմում է ձեր մարմնի քաշի ընդամենը 2%-ը:",
    "textAz": "Beyniniz bədən çəkinizin yalnız 2%-i olmasına baxmayaraq, bədəninizin ümumi enerjisinin təxminən 20%-ni istifadə edir."
  },
  {
    "id": 2,
    "text": "The average person has about 6,200 thoughts per day, according to a 2020 study.",
    "textKa": "საშუალო ადამიანს დღეში დაახლოებით 6,200 აზრი აქვს, 2020 წლის კვლევის მიხედვით.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:head-lightbulb-outline",
    "textRu": "Согласно исследованию 2020 года, у среднестатистического человека в день возникает около 6200 мыслей.",
    "textHy": "Ըստ 2020 թվականի ուսումնասիրության, միջին հաշվով մարդն օրական ունենում է մոտ 6200 միտք:",
    "textAz": "2020-ci il araşdırmasına görə, orta hesabla bir insanın gündə təxminən 6200 düşüncəsi var."
  },
  {
    "id": 3,
    "text": "Memories are distributed across networks of neurons, not stored in one place.",
    "textKa": "მოგონებები ნეირონების ქსელებშია განაწილებული, და არა ერთ ადგილას.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:memory",
    "textRu": "Воспоминания распределены по сетям нейронов, а не хранятся в одном месте.",
    "textHy": "Հիշողությունները բաշխվում են նեյրոնների ցանցերում, այլ ոչ թե պահվում են մեկ տեղում:",
    "textAz": "Yaddaşlar bir yerdə saxlanılmayan neyron şəbəkələri arasında paylanır."
  },
  {
    "id": 4,
    "text": "The \"doorway effect\": Walking through a doorway makes you forget what you were thinking.",
    "textKa": "\"კარის ეფექტი\": კარში გავლა გაგავიწყებინებს რაზე ფიქრობდით.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:door-open",
    "textRu": "«Эффект дверного проема»: проход через дверной проем заставляет вас забыть, о чем вы думали.",
    "textHy": "«Դռների էֆեկտ». Դռան միջով անցնելը ստիպում է մոռանալ, թե ինչ էիք մտածում:",
    "textAz": "\"Qapı effekti\": Qapıdan keçmək nə düşündüyünüzü unutdurur."
  },
  {
    "id": 5,
    "text": "We consciously process about 50 bits per second, despite senses receiving millions.",
    "textKa": "შეგნებულად წამში დაახლოებით 50 ბიტს წამში, მიუხედავად იმისა, რომ გრძნობები მილიონობით იღებს.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:eye-settings-outline",
    "textRu": "Мы сознательно обрабатываем около 50 бит в секунду, несмотря на то, что органы чувств принимают миллионы.",
    "textHy": "Մենք գիտակցաբար մշակում ենք վայրկյանում մոտ 50 բիթ, չնայած զգայարանները ստանում են միլիոններ:",
    "textAz": "Hisslərin milyonlarla qəbul etməsinə baxmayaraq, biz saniyədə təxminən 50 biti şüurlu şəkildə emal edirik."
  },
  {
    "id": 6,
    "text": "In Milgram's experiment, 65% administered what they believed were lethal shocks under authority.",
    "textKa": "მილგრამის ექსპერიმენტში 65%-მა მისცა საშიში ელექტროშოკი, რომელიც სასიკვდილოდ მიიჩნია.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:flash-alert-outline",
    "textRu": "В эксперименте Милгрэма 65% участников эксперимента применяли то, что, по их мнению, было смертельным электрошоком под руководством.",
    "textHy": "Միլգրամի փորձի ժամանակ 65%-ը կառավարել է այն, ինչ նրանք կարծում էին, որ մահացու ցնցումներ էին իշխանության ներքո:",
    "textAz": "Milgramın təcrübəsində, 65% hakimiyyət altında öldürücü şoklar olduğuna inandıqları şeyi tətbiq etdi."
  },
  {
    "id": 7,
    "text": "The placebo effect works even when people know they are taking a placebo.",
    "textKa": "პლაცებოს ეფექტი მუშაობს მაშინაც, როცა ადამიანებმა იციან, რომ პლაცებოს იღებენ.",
    "source": "Health Psychology",
    "category": "Health",
    "icon": "mdi:pill",
    "textHy": "Պլացեբոյի էֆեկտը գործում է նույնիսկ այն դեպքում, երբ մարդիկ գիտեն, որ իրենք պլացեբո են ընդունում:",
    "textRu": "Эффект плацебо работает, даже когда люди знают, что принимают плацебо.",
    "textAz": "Plasebo effekti hətta insanlar plasebo qəbul etdiklərini bilsələr də işləyir."
  },
  {
    "id": 8,
    "text": "Babies recognize their mother's voice from birth, having listened in the womb.",
    "textKa": "ჩვილები დედის ხმას დაბადებიდან ამოიცნობენ, რადგან საშვილოსნოში უსმენდნენ.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:baby-carriage",
    "textRu": "Младенцы узнают голос матери с рождения, прислушавшись к нему еще в утробе матери.",
    "textHy": "Երեխաները ճանաչում են իրենց մոր ձայնը ծննդից՝ լսելով արգանդում:",
    "textAz": "Körpələr ana bətnində dinləyərək anasının səsini doğuşdan tanıyırlar."
  },
  {
    "id": 9,
    "text": "Even forced smiling can improve your mood via the facial feedback hypothesis.",
    "textKa": "იძულებითი ღიმილიც კი შეუძლია განწყობის გაუმჯობესება, სახის უკუკავშირი არსებობის ჰიპოთეზის მიხედვით.",
    "source": "Emotion Research",
    "category": "Emotion",
    "icon": "mdi:emoticon-happy-outline",
    "textRu": "Даже вынужденная улыбка может улучшить ваше настроение благодаря гипотезе обратной связи по лицу.",
    "textHy": "Նույնիսկ հարկադիր ժպտալը կարող է բարելավել ձեր տրամադրությունը դեմքի հետադարձ կապի վարկածի միջոցով:",
    "textAz": "Hətta məcburi təbəssüm də üz rəyi hipotezi vasitəsilə əhvalınızı yaxşılaşdıra bilər."
  },
  {
    "id": 10,
    "text": "Dunning-Kruger effect: People with low knowledge overestimate competence; experts underestimate.",
    "textKa": "დანინგ-კრუგერის ეფექტი: მცირე ცოდნის მქონე ადამიანები გადააჭარბებენ კომპეტენციას, ექსპერტები კი ანაცვალებენ.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-bell-curve-cumulative",
    "textRu": "Эффект Даннинга-Крюгера: люди с низким уровнем знаний переоценивают компетентность; эксперты недооценивают.",
    "textHy": "Դանինգ-Կրյուգերի էֆեկտ. ցածր գիտելիքներ ունեցող մարդիկ գերագնահատում են իրավասությունը. փորձագետները թերագնահատում են.",
    "textAz": "Dunning-Kruger effekti: Biliyi az olan insanlar səriştəni yüksək qiymətləndirir; ekspertlər az qiymətləndirirlər."
  },
  {
    "id": 11,
    "text": "Your unconscious processes 11 million info pieces per second; conscious handles about 40.",
    "textKa": "თქვენი ქვეცნობიერება წამში 11 მილიონ ერთეულ ინფორმაციას ამუშავებს; ცნობიერება მხოლოდ 40-ს.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:head-sync-outline",
    "textHy": "Ձեր անգիտակցականը մեկ վայրկյանում մշակում է 11 միլիոն տեղեկատվական կտոր. գիտակից բռնակներ մոտ 40.",
    "textRu": "Ваше подсознание обрабатывает 11 миллионов фрагментов информации в секунду; сознание обрабатывает около 40.",
    "textAz": "Şüursuzluğunuz saniyədə 11 milyon məlumat parçasını emal edir; şüurlu tutacaqlar təxminən 40."
  },
  {
    "id": 12,
    "text": "Missing one night of sleep can impair memory by up to 40%.",
    "textKa": "ერთი ღამის ძილის გამოტოვებამ შეიძლება მეხსიერება 40%-მდე გააუარესოს.",
    "source": "Sleep Research",
    "category": "Memory",
    "icon": "mdi:power-sleep",
    "textHy": "Մեկ գիշեր չքնելը կարող է վատթարանալ հիշողությունը մինչև 40%-ով:",
    "textRu": "Отсутствие сна на одну ночь может ухудшить память до 40%.",
    "textAz": "Bir gecə yuxunu qaçırmaq yaddaşı 40%-ə qədər zəiflədə bilər."
  },
  {
    "id": 13,
    "text": "Mirror neurons fire when you act AND when you watch others act—the basis of empathy.",
    "textKa": "სარკის ნეირონები აქტიურდება, რო჊ მოქმედებთ და რო჊ სხვებს უყურებთ—ემპათიის საფუძველი.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:mirror-variant",
    "textRu": "Зеркальные нейроны активируются, когда вы действуете И когда вы наблюдаете за действиями других — основа эмпатии.",
    "textHy": "Հայելային նեյրոնները կրակում են, երբ դուք գործում եք ԵՎ երբ դիտում եք ուրիշների գործողությունները՝ կարեկցանքի հիմքը:",
    "textAz": "Güzgü neyronları siz hərəkət edəndə və başqalarının hərəkətlərini izlədiyiniz zaman işə düşür - empatiyanın əsasıdır."
  },
  {
    "id": 14,
    "text": "The Stanford Prison Experiment was stopped after 6 days of a planned 2-week run.",
    "textKa": "სტენფორდის ციხის ექსპერიმენტი დაგეგმილი 2 კვირიდან მხოლოდ 6 დღეში შეწყდა.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:shield-alert-outline",
    "textRu": "Стэнфордский тюремный эксперимент был остановлен через 6 дней запланированного двухнедельного эксперимента.",
    "textHy": "Սթենֆորդի բանտային փորձը դադարեցվել է ծրագրված 2-շաբաթյա վազքից 6 օր հետո:",
    "textAz": "Stanford Həbsxana Təcrübəsi 6 günlük planlaşdırılmış 2 həftəlik qaçışdan sonra dayandırıldı."
  },
  {
    "id": 15,
    "text": "Fear of public speaking affects ~75% of people—more common than fear of death.",
    "textKa": "საჯაროდ გამოსვლის შიში ადამიანების ~75%-ს აწუხებს—ის სიკვდილის შიშზე გავრცელებულია.",
    "source": "Clinical Psychology",
    "category": "Anxiety",
    "icon": "mdi:microphone-off",
    "textHy": "Հանրային ելույթից վախը ազդում է մարդկանց մոտ 75%-ի վրա՝ ավելի հաճախ, քան մահվան վախը:",
    "textRu": "Страх публичных выступлений затрагивает около 75% людей — чаще, чем страх смерти.",
    "textAz": "Natiqlik qorxusu insanların ~75%-nə təsir edir - ölüm qorxusundan daha çox."
  },
  {
    "id": 16,
    "text": "Halo effect: Attractive people are rated as more intelligent, kind, and competent.",
    "textKa": "ჰალოს ეფექტი: მიმზიდველ ადამიანებს უფრო გონიერად, კეთილად და კომპეტენტურად აფასებენ.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:star-circle-outline",
    "textRu": "Эффект ореола: привлекательные люди оцениваются как более умные, добрые и компетентные.",
    "textHy": "Հալո էֆեկտ. գրավիչ մարդիկ գնահատվում են որպես ավելի խելացի, բարի և գրագետ:",
    "textAz": "Halo effekti: Cazibədar insanlar daha ağıllı, xeyirxah və bacarıqlı olaraq qiymətləndirilir."
  },
  {
    "id": 17,
    "text": "Oxytocin, released during hugging and bonding, promotes trust and empathy.",
    "textKa": "ოქსიტოცინი, რომელიც გამოიყოფა ჩახუტებისას და მიბმისას, ხელს უწყობს ნდობასა და ემპათიას.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:heart-pulse",
    "textRu": "Окситоцин, выделяемый во время объятий и привязанностей, способствует доверию и сочувствию.",
    "textHy": "Օքսիտոցինը, որն ազատվում է գրկախառնության և կապի ժամանակ, խթանում է վստահությունն ու կարեկցանքը:",
    "textAz": "Qucaqlaşma və bağlanma zamanı ifraz olunan oksitosin inam və empatiya yaradır."
  },
  {
    "id": 18,
    "text": "It takes 1/10th of a second to form a first impression—and they tend to be accurate.",
    "textKa": "პირველი შთაბეჭდილების ჩამოყალიბებას წამის 1/10 სჭირდება—და ისინი ხშირად ზუსტია.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:timer-outline",
    "textHy": "Առաջին տպավորություն ստեղծելու համար անհրաժեշտ է վայրկյանի 1/10-րդ մասը, և դրանք հակված են ճշգրիտ լինելու:",
    "textRu": "Для формирования первого впечатления требуется 1/10 секунды, и оно, как правило, точное.",
    "textAz": "İlk təəssürat yaratmaq üçün saniyənin 1/10 hissəsi lazımdır və onlar dəqiq olmağa meyllidirlər."
  },
  {
    "id": 19,
    "text": "Securely attached children have better relationships and self-esteem in adulthood.",
    "textKa": "უსაფრთხოდ მიბმულ ბავშვებს მოზრდილობაში უკეთესი ურთიერთობები და თვითშეფასება აქვთ.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:human-female-boy",
    "textRu": "У детей с надежной привязанностью во взрослой жизни улучшаются отношения и повышается самооценка.",
    "textHy": "Ապահով կապված երեխաներն ավելի լավ հարաբերություններ և ինքնագնահատական ​​ունեն հասուն տարիքում:",
    "textAz": "Təhlükəsiz bağlanan uşaqlar yetkinlik dövründə daha yaxşı münasibətlərə və özünə hörmətə sahib olurlar."
  },
  {
    "id": 20,
    "text": "Zeigarnik effect: We remember uncompleted tasks better because they stay active in memory.",
    "textKa": "ზეიგარნიკის ეფექტი: დაუსრულებელ დავალებებს უკეთ ვიმახსოვრებთ, რადგან ისინი მეხსიერებაში აქტიური რჩება.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:checkbox-blank-circle-outline",
    "textRu": "Эффект Зейгарник: мы лучше запоминаем незавершенные задачи, потому что они остаются активными в памяти.",
    "textHy": "Զեյգարնիկի էֆեկտ. մենք ավելի լավ ենք հիշում չավարտված առաջադրանքները, քանի որ դրանք ակտիվ են մնում հիշողության մեջ:",
    "textAz": "Zeigarnik effekti: Tamamlanmamış işləri daha yaxşı xatırlayırıq, çünki onlar yaddaşda aktiv qalırlar."
  },
  {
    "id": 21,
    "text": "Synesthesia causes some people to see colors when hearing music or associate numbers with colors.",
    "textKa": "სინესთეზია ზოგიერთ ადამიანს აჯენს ფერებს დაინახოს მუსიკის მოსმენისას ან რიცხვები ფერებთან დააკავშიროს.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:palette-outline",
    "textRu": "Синестезия заставляет некоторых людей видеть цвета, когда они слушают музыку, или ассоциировать числа с цветами.",
    "textHy": "Սինեստեզիան ստիպում է որոշ մարդկանց տեսնել գույները երաժշտություն լսելիս կամ թվերը կապել գույների հետ:",
    "textAz": "Sinesteziya bəzi insanların musiqi eşitdikdə rəngləri görməsinə və ya rəqəmləri rənglərlə əlaqələndirməsinə səbəb olur."
  },
  {
    "id": 22,
    "text": "The brain can't feel pain—brain surgery can be performed while the patient is awake.",
    "textKa": "ტვინს ტკივილის შეგრძნება არ შეუძლია—ტვინის ოპერაცია შეიძლება პაციენტის ფხიზელობისას.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "Мозг не чувствует боли — операцию на головном мозге можно проводить, пока пациент бодрствует.",
    "textHy": "Ուղեղը չի կարող ցավ զգալ. ուղեղի վիրահատությունը կարող է իրականացվել, երբ հիվանդը արթուն է:",
    "textAz": "Beyin ağrı hiss edə bilməz - xəstə oyaq ikən beyin əməliyyatı edilə bilər."
  },
  {
    "id": 23,
    "text": "Humans can detect over 1 trillion distinct smells, far more than previously thought.",
    "textKa": "ადამიანს შეუძლია 1 ტრილიონზე მეტი განსხვავებული სუნის ამოცნობა, გაცილებით მეტი ვიდრე ვიდრე ფიქრობდნენ.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:scent",
    "textRu": "Люди могут различать более 1 триллиона различных запахов — гораздо больше, чем считалось ранее.",
    "textHy": "Մարդիկ կարող են հայտնաբերել ավելի քան 1 տրիլիոն տարբեր հոտեր, շատ ավելին, քան նախկինում ենթադրվում էր:",
    "textAz": "İnsanlar 1 trilyondan çox fərqli qoxunu aşkar edə bilirlər ki, bu da əvvəllər düşünüldüyündən qat-qat çoxdur."
  },
  {
    "id": 24,
    "text": "Cognitive Behavioral Therapy (CBT) is as effective as medication for many anxiety disorders.",
    "textKa": "კოგნიტური-ბიჰევიორალური თერაპია (CBT) ისევე ეფექტურია როგორც მედიკამენტები, ბევრი შფოთვითი აშლილობის მკურნალობისთვის.",
    "source": "Clinical Psychology",
    "category": "Health",
    "icon": "mdi:head-heart-outline",
    "textRu": "Когнитивно-поведенческая терапия (КПТ) столь же эффективна, как и лекарства, при многих тревожных расстройствах.",
    "textHy": "Ճանաչողական վարքագծային թերապիան (CBT) նույնքան արդյունավետ է, որքան դեղորայքը շատ անհանգստության խանգարումների համար:",
    "textAz": "Koqnitiv Davranış Terapiyası (CBT) bir çox narahatlıq pozğunluğu üçün dərman kimi təsirlidir."
  },
  {
    "id": 25,
    "text": "Children learn language at an extraordinary rate—about 10 new words per day between ages 2 and 6.",
    "textKa": "ბავშვები ენას არაჩვეულებრივი ტემპით სწავლობენ—დაახლოებით 10 ახალ სიტყვას დღეში 2-დან 6 წლამდე.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:message-text-outline",
    "textRu": "Дети изучают язык с необычайной скоростью — около 10 новых слов в день в возрасте от 2 до 6 лет.",
    "textHy": "Երեխաները լեզուն սովորում են արտասովոր արագությամբ՝ օրական մոտ 10 նոր բառ 2-ից 6 տարեկանում:",
    "textAz": "Uşaqlar dili qeyri-adi sürətlə öyrənirlər - 2-6 yaş arasında gündə təxminən 10 yeni söz."
  },
  {
    "id": 26,
    "text": "Stockholm syndrome: Hostages may develop emotional bonds with their captors as a survival mechanism.",
    "textKa": "სტოკჰოლმის სინდრომი: მძევლებმა შეიძლება ემოციური კავშირი განავითარონ გამტაცებელთან, როგორც გადარჩენის მექანიზმი.",
    "source": "Clinical Psychology",
    "category": "Social",
    "icon": "mdi:link-variant",
    "textRu": "Стокгольмский синдром: заложники могут развивать эмоциональные связи со своими похитителями как механизм выживания.",
    "textHy": "Ստոկհոլմի համախտանիշ. պատանդները կարող են զարգացնել հուզական կապեր իրենց առևանգողների հետ՝ որպես գոյատևման մեխանիզմ:",
    "textAz": "Stokholm sindromu: Girovlar sağ qalma mexanizmi kimi əsir götürənlərlə emosional bağlar yarada bilər."
  },
  {
    "id": 27,
    "text": "Your brain generates about 12-25 watts of electricity—enough to power a low-wattage LED bulb.",
    "textKa": "თქვენი ტვინი გამოიმუშავებს დაახლოებით 12-25 ვატ ელექტროობას—საკმარისი LED ნათურის გასანათებლად.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:lightbulb-on-outline",
    "textRu": "Ваш мозг генерирует около 12–25 Вт электроэнергии — этого достаточно для питания маломощной светодиодной лампы.",
    "textHy": "Ձեր ուղեղը արտադրում է մոտ 12-25 վտ էլեկտրաէներգիա, ինչը բավարար է ցածր հզորությամբ LED լամպը սնուցելու համար:",
    "textAz": "Beyniniz təxminən 12-25 vatt elektrik enerjisi istehsal edir ki, bu da aşağı vattlı bir LED lampanı işə salmaq üçün kifayətdir."
  },
  {
    "id": 28,
    "text": "Multitasking reduces productivity by up to 40%—your brain rapidly switches, not truly parallel-processes.",
    "textKa": "მულტიტასკინგი პროდუქტიულობას 40%-ით ამცირებს—ტვინი სწრაფად გადართავს, და არ პარალელურად ამუშავებს.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:swap-horizontal-circle-outline",
    "textRu": "Многозадачность снижает производительность до 40 % — ваш мозг быстро переключается, а не выполняет по-настоящему параллельные процессы.",
    "textHy": "Բազմաֆունկցիոնալությունը նվազեցնում է արտադրողականությունը մինչև 40%-ով. ձեր ուղեղը արագորեն փոխվում է, այլ ոչ թե իրականում զուգահեռ գործընթացներ:",
    "textAz": "Multitasking məhsuldarlığı 40%-ə qədər azaldır - beyniniz həqiqətən paralel proseslər deyil, sürətlə dəyişir."
  },
  {
    "id": 29,
    "text": "Laughter is 30 times more likely in social situations than when alone—it's primarily social.",
    "textKa": "სიცილი 30-ჯერ უფრო ხშირია სოციალურ სიტუაციებში ვიდრე მარტოობისას—ის უპირველესად სოციალური ფენომენია.",
    "source": "Social Psychology",
    "category": "Emotion",
    "icon": "mdi:emoticon-lol-outline",
    "textRu": "Смех в 30 раз чаще встречается в социальных ситуациях, чем в одиночестве — он в первую очередь социальный.",
    "textHy": "Ծիծաղը 30 անգամ ավելի հավանական է սոցիալական իրավիճակներում, քան միայնակ ժամանակ. դա հիմնականում սոցիալական է:",
    "textAz": "Gülüş sosial vəziyyətlərdə tək olandan 30 dəfə çox olur - bu, ilk növbədə sosialdır."
  },
  {
    "id": 30,
    "text": "The serial position effect: We best remember the first and last items in a list.",
    "textKa": "სერიული პოზიციის ეფექტი: სიის პირველ და ბოლო ელემენტებს საუკეთესოდ ვიმახსოვრებთ.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:format-list-numbered",
    "textRu": "Эффект последовательного положения: мы лучше всего запоминаем первый и последний элементы списка.",
    "textHy": "Սերիական դիրքի էֆեկտ. Մենք լավագույնս հիշում ենք ցուցակի առաջին և վերջին կետերը:",
    "textAz": "Serial mövqe effekti: Siyahıdakı ilk və son elementləri yaxşı xatırlayırıq."
  },
  {
    "id": 31,
    "text": "Bilingual people may delay the onset of dementia by an average of 4-5 years.",
    "textKa": "ორენოვანი ადამიანები დემენციის დაწყებას საშუალოდ 4-5 წლით აგვიანებენ.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:translate",
    "textRu": "Двуязычные люди могут отсрочить начало деменции в среднем на 4-5 лет.",
    "textHy": "Երկլեզու մարդիկ կարող են հետաձգել դեմենցիայի առաջացումը միջինը 4-5 տարով։",
    "textAz": "İkidilli insanlar demansın başlanğıcını orta hesabla 4-5 il gecikdirə bilər."
  },
  {
    "id": 32,
    "text": "Emotional memories are stored more vividly because the amygdala strengthens the memory trace.",
    "textKa": "ემოციური მოგონებები უფრო ნათლად ინახება, რადგან ამიგდალა აძლიერებს მეხსიერების კვალს.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:heart-flash",
    "textRu": "Эмоциональные воспоминания сохраняются более ярко, потому что миндалевидное тело усиливает след памяти.",
    "textHy": "Զգացմունքային հիշողություններն ավելի վառ են պահվում, քանի որ ամիգդալան ամրացնում է հիշողության հետքը:",
    "textAz": "Duygusal xatirələr daha canlı saxlanılır, çünki amigdala yaddaş izini gücləndirir."
  },
  {
    "id": 33,
    "text": "Sleep deprivation for just 17 hours impairs cognitive function as much as a blood alcohol level of 0.05%.",
    "textKa": "17 საათიანი ძილის დეფიციტი კოგნიტურ ფუნქციას ისე აუარესებს, როგორც სისხლში ალკოჰოლის დონე 0.05%.",
    "source": "Sleep Research",
    "category": "Health",
    "icon": "mdi:weather-night",
    "textRu": "Лишение сна всего на 17 часов ухудшает когнитивные функции так же, как уровень алкоголя в крови 0,05%.",
    "textHy": "Քնի պակասը ընդամենը 17 ժամվա ընթացքում խաթարում է ճանաչողական ֆունկցիան այնքան, որքան արյան մեջ ալկոհոլի մակարդակը 0,05%:",
    "textAz": "Cəmi 17 saat yuxudan məhrum olmaq idrak funksiyasını qanda 0,05% spirt səviyyəsi qədər zəiflədir."
  },
  {
    "id": 34,
    "text": "Phobias can be inherited—studies show fear responses can be passed through epigenetic changes.",
    "textKa": "ფობიები შეიძლება მემკვიდრეობით გადაიცეს—კვლევები აჩვენებს, რომ შიშის რეაქციები ეპიგენეტიკური ცვლილებებით გადაეცემა.",
    "source": "Biological Psychology",
    "category": "Anxiety",
    "icon": "mdi:spider-thread",
    "textRu": "Фобии могут передаваться по наследству: исследования показывают, что реакции страха могут передаваться через эпигенетические изменения.",
    "textHy": "Ֆոբիաները կարող են ժառանգական լինել. ուսումնասիրությունները ցույց են տալիս, որ վախի արձագանքները կարող են փոխանցվել էպիգենետիկ փոփոխությունների միջոցով:",
    "textAz": "Fobiyalar irsi ola bilər - tədqiqatlar göstərir ki, qorxu reaksiyaları epigenetik dəyişikliklərdən keçə bilər."
  },
  {
    "id": 35,
    "text": "The peak-end rule: We judge experiences mainly by their most intense moment and their ending.",
    "textKa": "პიკისა და დასასრულის წესი: გამოცდილებებს ვაფასებთ ძირითადად მათი ყველაზე ინტენსიური მომენტითა და დასასრულით.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-timeline-variant-shimmer",
    "textRu": "Правило пика-конца: мы судим о переживаниях главным образом по наиболее напряженным моментам и их окончанию.",
    "textHy": "Պիկ վերջի կանոնը.",
    "textAz": "Pik-end qaydası: Biz təcrübələri əsasən onların ən gərgin anına və bitməsinə görə qiyməexport const STORIES: Story[] = [
  {
    "id": 1,
    "title": "Pavlov's Accidental Discovery",
    "titleKa": "პავლოვის შემთხვევითი აღმოჩენა",
    "chapterId": 6,
    "icon": "mdi:bell-ring-outline",
    "content": "In the 1890s, Russian physiologist Ivan Pavlov was conducting research on the digestive systems of dogs at the Institute of Experimental Medicine in St. Petersburg. His work was meticulous—he had surgically implanted tubes in dogs' cheeks to precisely measure saliva output when food was presented.\n\nBut something unexpected kept disrupting his carefully controlled experiments. The dogs began salivating before any food appeared. They drooled when they heard the footsteps of the lab assistant. They salivated at the sight of the food bowl, or even when they heard the door open.\n\nRather than dismissing this as a nuisance, Pavlov recognized he had stumbled upon something extraordinary. He called these premature responses \"psychic secretions\" and redesigned his entire research program to study them.\n\nPavlov began systematically pairing a neutral stimulus—a metronome (often misremembered as a bell)—with the presentation of food. After repeated pairings, the dogs would salivate at the sound of the metronome alone, with no food in sight.\n\nHe documented the entire process with scientific rigor: acquisition (learning the association), extinction (unlearning it when food stops coming), spontaneous recovery (the response returning after a rest period), and generalization (responding to similar sounds).\n\nThis accidental discovery became the foundation of classical conditioning and earned Pavlov the Nobel Prize in Physiology in 1904. His work influenced generations of psychologists, from John Watson to modern neuroscientists studying how the brain forms associations.",
    "contentKa": "1890-იან წლებში, რუსი ფიზიოლოგი ივან პავლოვი ძაღლების საჭმლის სისტემას იკვლევდა სანკტ-პეტერბურგში. მან შენიშნა, რომ ძაღლები საკვებს დაიწყებდნენ საკვების გარეშე჊ — ლაბორანტის ნაბიჯების გაგონისას. პავლოვმა ამაში მეტრონომის ხმა საკვებს დაუკავშირა და აღმოაჩინა კლასიკური განპირობება.",
    "moral": "Great discoveries emerge when curious minds pay attention to the unexpected. Pavlov could have ignored the dogs' early salivation, but instead he asked \"why?\" and changed psychology forever.",
    "moralKa": "დიდი აღმოჩენები იბადება, რო჊ ცნობისმოყვარე გონება ყურადღებას მოულოდნელს მიაქცევს.",
    "moralHy": "Մեծ բացահայտումներ են առաջանում, երբ հետաքրքրասեր մտքերը ուշադրություն են դարձնում անսպասելիին: Պավլովը կարող էր անտեսել շների վաղ թքելը, բայց փոխարենը հարցրեց՝ «ինչո՞ւ»։ և ընդմիշտ փոխեց հոգեբանությունը:",
    "contentAz": "1890-cı illərdə rus fizioloqu İvan Pavlov Sankt-Peterburqdakı Eksperimental Tibb İnstitutunda itlərin həzm sistemləri ilə bağlı tədqiqatlar aparırdı. Onun işi vasvası idi - yemək təqdim olunan zaman tüpürcək ifrazını dəqiq ölçmək üçün itlərin yanaqlarına cərrahi yolla borular yerləşdirmişdi.\n\nLakin gözlənilməz bir şey onun diqqətlə idarə olunan təcrübələrini pozmağa davam etdi. Hər hansı bir qida görünməzdən əvvəl itlər tüpürcəyə başladılar. Laborantın ayaq səslərini eşidəndə ağızları sulandı. Yemək qabını görəndə, hətta qapının açıldığını eşidəndə tüpürcək axırdılar.\n\nPavlov bunu bir narahatlıq kimi rədd etmək əvəzinə, qeyri-adi bir şeylə qarşılaşdığını başa düşdü. O, bu erkən cavabları \"psixik ifrazatlar\" adlandırdı və onları öyrənmək üçün bütün tədqiqat proqramını yenidən dizayn etdi.\n\nPavlov sistematik olaraq neytral stimulu - metronomu (çox vaxt zəng kimi xatırlanır) yeməyin təqdimatı ilə birləşdirməyə başladı. Təkrarlanan cütləşmələrdən sonra itlər yalnız metronomun səsinə tüpürcək tökürdülər, heç bir yemək görünmürdü.\n\nO, bütün prosesi elmi ciddiliklə sənədləşdirdi: əldə etmə (assosiasiyanı öyrənmək), məhv olma (yemək gəlməyi dayandırdıqda onu öyrənmə), spontan bərpa (istirahət müddətindən sonra geri qayıdan reaksiya) və ümumiləşdirmə (oxşar səslərə cavab).\n\nBu təsadüfi kəşf klassik kondisionerin təməli oldu və Pavlova 1904-cü ildə Fiziologiya üzrə Nobel Mükafatı qazandırdı. Onun işi Con Uotsondan tutmuş beynin assosiasiyaları necə formalaşdırdığını öyrənən müasir nevroloqlara qədər psixoloqların nəsillərinə təsir etdi.",
    "titleAz": "Pavlovun təsadüfən kəşfi",
    "moralAz": "Maraqlı beyinlər gözlənilməzlərə diqqət yetirdikdə böyük kəşflər ortaya çıxır. Pavlov itlərin erkən tüpürcək ifrazına məhəl qoymaya bilərdi, amma bunun əvəzinə \"niyə?\" və psixologiyanı həmişəlik dəyişdi.",
    "titleRu": "Случайное открытие Павлова",
    "contentHy": "1890-ական թվականներին ռուս ֆիզիոլոգ Իվան Պավլովը Սանկտ Պետերբուրգի Էքսպերիմենտալ բժշկության ինստիտուտում ուսումնասիրություններ էր կատարում շների մարսողական համակարգերի վերաբերյալ: Նրա աշխատանքը բծախնդիր էր. նա վիրաբուժական խողովակներ էր տեղադրել շների այտերին՝ սննդի մատուցման ժամանակ թքի արտազատումը ճշգրիտ չափելու համար:\n\nԲայց ինչ-որ անսպասելի բան շարունակում էր խանգարել նրա մանրակրկիտ վերահսկվող փորձերը: Շները սկսել են թուք արտահոսել նախքան սննդի հայտնվելը: Երբ լսեցին լաբորանտի ոտնաձայները, նրանք թուլացան։ Սննդի ամանի տեսնելուց կամ նույնիսկ երբ լսում էին դռան բացումը, նրանք թքացրին։\n\nՍա անհանգստություն համարելու փոխարեն Պավլովը հասկացավ, որ պատահաբար ինչ-որ արտասովոր բանի է հանդիպել: Նա այս վաղաժամ արձագանքներն անվանեց «հոգեկան սեկրեցներ» և վերամշակեց իր ամբողջ հետազոտական ​​ծրագիրը՝ դրանք ուսումնասիրելու համար:\n\nՊավլովը սկսեց համակարգված կերպով զուգակցել չեզոք գրգռիչը՝ մետրոնոմը (հաճախ սխալ է հիշվում որպես զանգ)՝ սննդի ներկայացման հետ: Բազմիցս զուգավորումներից հետո շները թք էին գալիս մենակ մետրոնոմի ձայնից՝ առանց կերակուրի:\n\nՆա փաստագրեց ողջ գործընթացը գիտական ​​խստությամբ՝ ձեռքբերում (սովորելով ասոցիացիան), վերացում (չսովորել այն, երբ սնունդը դադարում է գալ), ինքնաբուխ վերականգնում (հանգստի շրջանից հետո վերադառնում է պատասխան) ​​և ընդհանրացում (արձագանքելով նմանատիպ հնչյուններին):\n\nԱյս պատահական հայտնագործությունը դարձավ դասական կոնդիցիոներների հիմքը և Պավլովին 1904 թվականին ստացավ Նոբելյան մրցանակ ֆիզիոլոգիայի ոլորտում: Նրա աշխատանքը ազդեց հոգեբանների սերունդների վրա՝ Ջոն Ուոթսոնից մինչև ժամանակակից նյարդաբաններ, որոնք ուսումնասիրում էին, թե ինչպես է ուղեղը ձևավորում ասոցիացիաները:",
    "moralRu": "Великие открытия происходят, когда любознательные умы обращают внимание на неожиданное. Павлов мог бы не обращать внимания на раннее слюноотделение у собак, но вместо этого спросил: «Почему?» и навсегда изменил психологию.",
    "titleHy": "Պավլովի պատահական հայտնագործությունը",
    "contentRu": "В 1890-е годы русский физиолог Иван Павлов проводил исследования пищеварительной системы собак в Институте экспериментальной медицины в Петербурге. Его работа была кропотливой: он хирургическим путем вживлял в щеки собак трубки для точного измерения выделения слюны при подаче еды.\n\nНо что-то неожиданное постоянно мешало его тщательно контролируемым экспериментам. У собак началось выделение слюны еще до того, как появилась еда. У них потекли слюни, когда они услышали шаги лаборанта. У них выделялась слюна при виде миски с едой или даже когда они слышали, как открывается дверь.\n\nВместо того чтобы счесть это неприятностью, Павлов признал, что наткнулся на нечто необычное. Он назвал эти преждевременные реакции «психическими выделениями» и перепроектировал всю свою исследовательскую программу для их изучения.\n\nПавлов начал систематически сочетать нейтральный стимул — метроном (часто ошибочно воспринимаемый как колокольчик) — с представлением еды. После повторных спариваний у собак выделялась слюна только от звука метронома, а еды не было видно.\n\nОн задокументировал весь процесс с научной строгостью: приобретение (обучение ассоциации), угасание (отмена ее, когда еда перестает поступать), спонтанное восстановление (реакция, возвращающаяся после периода отдыха) и генерализация (реакция на похожие звуки).\n\nЭто случайное открытие стало основой классической обусловленности и принесло Павлову Нобелевскую премию по физиологии в 1904 году. Его работа повлияла на поколения психологов, от Джона Ватсона до современных нейробиологов, изучающих, как мозг формирует ассоциации."
  },
  {
    "id": 2,
    "title": "The Story of Phineas Gage",
    "titleKa": "ფინეას გეიჯის ისტორია",
    "chapterId": 3,
    "icon": "fluent:brain-circuit-20-filled",
    "content": "On September 13, 1848, 25-year-old Phineas Gage was working as a railroad construction foreman in Cavendish, Vermont. His crew was blasting rock to clear a path for new rail tracks. Gage's job was to pack explosive powder into drilled holes using a specially made iron tamping rod—43 inches long, 1.25 inches in diameter, and weighing over 13 pounds.\n\nIn a moment of distraction—perhaps he turned to speak to a colleague—Gage struck the iron rod against the rock before sand had been poured as a buffer. The powder ignited. The explosion launched the iron rod like a missile straight through his skull, entering below his left cheekbone and exiting through the top of his head, landing 80 feet away.\n\nAstonishingly, Gage did not die. He was conscious within minutes, able to walk and talk. The local physician, Dr. John Harlow, treated the gruesome wound. Gage physically recovered over the following months, but something fundamental had changed.\n\nBefore the accident, Gage was described as reliable, well-balanced, and a shrewd businessman—\"the most efficient and capable foreman.\" Afterward, his personality was unrecognizable. He became profane, impulsive, disrespectful, and unable to follow through on plans. Friends said he was \"no longer Gage.\"\n\nHis case became one of the most important in neuroscience history. It provided the first strong evidence that specific brain regions—particularly the prefrontal cortex—are responsible for personality, decision-making, and social behavior. Modern neuroimaging has confirmed the rod destroyed much of his left frontal lobe, especially areas involved in emotional regulation and planning.",
    "contentKa": "1848 წელს, ფინეას გეიჯი რკინიგზის მშენებლობის ოსტატი იყო. აფეთქებისას რკინის ღერძი მის თავის ქალაში შევიდა და თავის ზემოდან გამოვიდა. გეიჯი გადარჩა, მაგრამ მისი პიროვნება სრულიად შეიცვალა. ეს შემთხვევა ნეირომეცნიერების ისტორიაში ერთ-ერთი ყველაზე მნიშვნელოვანი გახდა.",
    "moral": "The brain is the seat of personality—damage to specific areas transforms who we are. Gage's case taught us that our sense of self is rooted in biology.",
    "moralKa": "ტვინი პიროვნების სადგურია—კონკრეტული უბნების დაზიანება გვაქ჊ევს სხვა ადამიანებად.",
    "moralAz": "Beyin şəxsiyyətin oturacağıdır - xüsusi sahələrə ziyan vurmaq bizim kim olduğumuzu dəyişir. Gage-in işi bizə öyrətdi ki, mənlik duyğumuz biologiyadan qaynaqlanır.",
    "titleHy": "Ֆինեաս Գեյջի պատմությունը",
    "moralHy": "Ուղեղը անհատականության նստավայրն է. որոշակի տարածքների վնասը փոխում է մեր ով լինելը: Գեյջի դեպքը մեզ սովորեցրեց, որ մեր ինքնազգացողությունը արմատացած է կենսաբանության մեջ:",
    "moralRu": "Мозг — это вместилище личности: повреждение определенных областей меняет то, кем мы являемся. Случай Гейджа научил нас тому, что наше самоощущение коренится в биологии.",
    "titleRu": "История Финеаса Гейджа",
    "contentHy": "1848 թվականի սեպտեմբերի 13-ին 25-ամյա Ֆինես Գեյջը աշխատում էր որպես երկաթուղու շինարարության վարպետ Վերմոնտ նահանգի Քավենդիշ քաղաքում: Նրա անձնակազմը պայթեցնում էր ժայռերը՝ նոր երկաթուղային գծերի համար ճանապարհ բացելու համար: Գեյջի գործն էր պայթուցիկ փոշի փաթեթավորել փորված անցքերի մեջ՝ օգտագործելով հատուկ պատրաստված երկաթե սեղմող ձող՝ 43 դյույմ երկարությամբ, 1,25 դյույմ տրամագծով և 13 ֆունտից ավելի քաշով:\n\nՈւշադրությունը շեղված մի պահի, երևի թե նա շրջվեց, որպեսզի խոսի գործընկերոջ հետ, Գեյջը երկաթե ձողը հարվածեց ժայռին, նախքան ավազը լցնելը որպես բուֆեր: Փոշը բռնկվեց։ Պայթյունը հրթիռի պես երկաթե ձողը արձակեց ուղիղ նրա գանգի միջով, մտնելով ձախ այտոսկրի տակ և դուրս գալով գլխի վերևից՝ վայրէջք կատարելով 80 ոտնաչափ հեռավորության վրա:\n\nԶարմանալի է, որ Գեյջը չի մահացել։ Նա ուշագնաց էր րոպեների ընթացքում, կարողանում էր քայլել և խոսել: Սարսափելի վերքը բուժել է տեղի բժիշկը՝ բժիշկ Ջոն Հարլոուն։ Գեյջը ֆիզիկապես վերականգնվեց հաջորդ ամիսների ընթացքում, բայց ինչ-որ հիմնարար բան փոխվեց:\n\nԴժբախտ պատահարից առաջ Գեյջին նկարագրում էին որպես վստահելի, հավասարակշռված և խորաթափանց գործարար՝ «ամենաարդյունավետ և ընդունակ վարպետ»: Հետո նրա անձը անճանաչելի էր։ Նա դարձավ սրբապիղծ, իմպուլսիվ, անհարգալից և չկարողացավ իրականացնել պլանները: Ընկերներն ասացին, որ նա «այլևս Գեյջը չէ»:\n\nՆրա գործը դարձավ ամենակարևորներից մեկը նյարդագիտության պատմության մեջ: Այն տրամադրեց առաջին ամուր ապացույցն այն մասին, որ ուղեղի հատուկ շրջանները, հատկապես նախաճակատային կեղևը, պատասխանատու են անհատականության, որոշումների կայացման և սոցիալական վարքագծի համար: Ժամանակակից նեյրոպատկերումը հաստատել է, որ ձողը ոչնչացրել է նրա ձախ ճակատային բլթի մեծ մասը, հատկապես այն հատվածները, որոնք ներգրավված են հուզական կարգավորման և պլանավորման մեջ:",
    "contentRu": "13 сентября 1848 года 25-летний Финеас Гейдж работал бригадиром на строительстве железной дороги в Кавендише, штат Вермонт. Его команда взрывала камни, чтобы расчистить путь для новых железнодорожных путей. Работа Гейджа заключалась в том, чтобы засыпать взрывчатый порошок в просверленные отверстия с помощью специально изготовленного железного трамбовочного стержня длиной 43 дюйма, диаметром 1,25 дюйма и весом более 13 фунтов.\n\nВ момент отвлечения — возможно, он повернулся, чтобы поговорить с коллегой, — Гейдж ударил железным стержнем о камень, прежде чем в качестве буфера был насыпан песок. Порошок загорелся. В результате взрыва железный стержень, как ракета, попал прямо ему в череп, вошёл под левую скулу и вышел через макушку головы, приземлившись на расстоянии 80 футов.\n\nУдивительно, но Гейдж не умер. Через несколько минут он пришел в сознание, мог ходить и говорить. Местный врач, доктор Джон Харлоу, обработал ужасную рану. Гейдж физически выздоровел в течение следующих месяцев, но что-то фундаментальное изменилось.\n\nДо аварии Гейджа описывали как надежного, уравновешенного и проницательного бизнесмена — «самого эффективного и способного мастера». После этого его личность стала неузнаваемой. Он стал нечестивцем, импульсивным, неуважительным и неспособным довести до конца свои планы. Друзья сказали, что он «больше не Гейдж».\n\nЕго случай стал одним из самых важных в истории нейробиологии. Это стало первым убедительным доказательством того, что определенные области мозга, особенно префронтальная кора, отвечают за личность, принятие решений и социальное поведение. Современная нейровизуализация подтвердила, что стержень разрушил большую часть его левой лобной доли, особенно области, участвующие в эмоциональной регуляции и планировании.",
    "titleAz": "Phineas Gage-nin Hekayəsi",
    "contentAz": "13 sentyabr 1848-ci ildə 25 yaşlı Phineas Gage Vermont ştatının Cavendish şəhərində dəmir yolu tikintisi üzrə usta işləyirdi. Onun ekipajı yeni dəmir yolu relsləri üçün cığır açmaq üçün qaya partladıb. Gage-nin işi xüsusi hazırlanmış dəmir çubuqdan istifadə edərək qazılmış deliklərə partlayıcı toz yığmaq idi - 43 düym uzunluğunda, 1,25 düym diametrdə və 13 funtdan çox ağırlığında.\n\nDiqqətinin dağıldığı bir anda – bəlkə də həmkarı ilə danışmaq üçün çevrildi – Qeyc bufer kimi qum tökülməmişdən əvvəl dəmir çubuğu qayaya vurdu. Toz alovlandı. Partlayış dəmir çubuğu mərmi kimi birbaşa kəllə sümüyündən atıb, sol yanaq sümüyünün altına girib başının yuxarı hissəsindən çıxıb, 80 fut uzaqlığa düşüb.\n\nTəəccüblüdür ki, Gage ölmədi. Bir neçə dəqiqə ərzində huşunu itirdi, yeriyə və danışa bildi. Yerli həkim, doktor Con Harlou dəhşətli yaranı müalicə etdi. Qeyc sonrakı aylarda fiziki cəhətdən sağaldı, lakin əsaslı bir şey dəyişdi.\n\nQəzadan əvvəl Gage etibarlı, balanslı və fərasətli iş adamı - \"ən səmərəli və bacarıqlı usta\" kimi təsvir edilmişdir. Bundan sonra onun şəxsiyyəti tanınmaz hala gəldi. O, murdar, impulsiv, hörmətsiz oldu və planlarını yerinə yetirə bilmədi. Dostları onun \"artıq Gage olmadığını\" söylədilər.\n\nOnun işi nevrologiya tarixinin ən mühüm hadisələrindən birinə çevrildi. Bu, xüsusi beyin bölgələrinin, xüsusən də prefrontal korteksin şəxsiyyət, qərar qəbul etmə və sosial davranış üçün cavabdeh olduğuna dair ilk güclü sübut təqdim etdi. Müasir neyroimaging çubuqun onun sol frontal hissəsinin çox hissəsini, xüsusən də emosional tənzimləmə və planlaşdırma ilə məşğul olan sahələri məhv etdiyini təsdiqlədi."
  },
  {
    "id": 3,
    "title": "Little Albert and the White Rat",
    "titleKa": "პატარა ალბერტი და თეთრი ვირთხა",
    "chapterId": 6,
    "icon": "mdi:emoticon-cry-outline",
    "content": "In 1920, John B. Watson and Rosalie Rayner conducted one of psychology's most controversial experiments at Johns Hopkins University. Their subject was a 9-month-old infant known as \"Little Albert.\"\n\nAlbert was described as a healthy, stable baby who showed no fear of animals. Watson and Rayner presented him with a white laboratory rat, and Albert reached for it with curiosity and delight. He showed the same calm response to a rabbit, a dog, a monkey, masks, and even burning newspapers.\n\nThen the conditioning began. Each time Albert reached for the white rat, Watson struck a steel bar with a hammer directly behind the infant's head, producing a terrifying noise. Albert burst into tears.\n\nAfter just seven pairings of the rat with the loud noise, Albert's behavior had fundamentally changed. Now, the mere sight of the white rat—without any noise—caused him to cry, crawl away rapidly, and show visible distress.\n\nMore remarkably, his fear generalized. Albert became afraid of a rabbit, a dog, a fur coat, a Santa Claus mask with a white beard, and even cotton wool. Anything white and furry triggered the same terror.\n\nWatson and Rayner never \"unconditioned\" Albert's fear. The experiment was stopped when Albert's mother, a wet nurse at the hospital, left with her child. Albert's true identity remained a mystery for decades. Recent research suggests he was Douglas Merritte, who sadly died of hydrocephalus at age six.\n\nThe experiment proved that emotional responses can be learned through classical conditioning. But it also raised profound ethical questions that eventually led to strict research protections for human subjects.",
    "contentKa": "1920 წელს, ჯონ უოტსონმა და როზალი რეინერმა ჩაატარეს ერთ-ერთი ყველაზე საკამათო ექსპერიმენტი. მათ 9 თვის ჩვილს თეთრი ვირთხა აჩვენეს ხმამაულ საშინელ ხმასთან ერთად. 7 დაწყვილების შემდეგ, ალბერტი ვირთხას ხედავდა ხმის გარეშე჊. ეს ექსპერიმენტი ამტკიცებდა, რომ ემოციები შეიძლება სწავლა.",
    "moral": "Fears can be learned through association. This historic experiment also taught us the importance of ethical guidelines in research.",
    "moralKa": "შიშები შეიძლება ასოციაციით სწავლა. ეს ექსპერიმენტი ეთიკური წესების მნიშვნელობასაც გვასწავლა.",
    "moralHy": "Վախերը կարելի է սովորել ընկերակցության միջոցով: Այս պատմական փորձը նաև մեզ սովորեցրեց հետազոտության մեջ էթիկական ուղեցույցների կարևորությունը:",
    "contentHy": "1920թ.-ին Ջոն Բ. Նրանց առարկան 9 ամսական երեխա էր, որը հայտնի էր որպես «Փոքրիկ Ալբերտ»:\n\nԱլբերտը նկարագրվում էր որպես առողջ, կայուն երեխա, ով չէր վախենում կենդանիներից: Ուոթսոնն ու Ռեյները նրան սպիտակ լաբորատոր առնետ նվիրեցին, իսկ Ալբերտը հետաքրքրությամբ ու հրճվանքով ձեռքը մեկնեց նրան։ Նույն հանգիստ արձագանքը նա ցույց տվեց ճագարին, շանը, կապիկին, դիմակներին և նույնիսկ այրվող թերթերին։\n\nՀետո սկսվեց պայմանավորումը։ Ամեն անգամ, երբ Ալբերտը հասնում էր սպիտակ առնետին, Ուոթսոնը մուրճով հարվածում էր պողպատե ձողին անմիջապես երեխայի գլխի հետևում՝ առաջացնելով սարսափելի աղմուկ: Ալբերտը լաց եղավ։\n\nԸնդամենը յոթ զույգ առնետի բարձր աղմուկից հետո Ալբերտի պահվածքը հիմնովին փոխվել էր։ Այժմ սպիտակ առնետի միայն տեսարանը՝ առանց որևէ աղմուկի, ստիպեց նրան լաց լինել, արագ սողալով հեռանալ և տեսանելի անհանգստություն ցույց տալ։\n\nԱվելի ուշագրավ է, որ նրա վախն ընդհանրացավ։ Ալբերտը վախեցավ նապաստակից, շնից, մուշտակից, սպիտակ մորուքով Ձմեռ պապի դիմակից և նույնիսկ բամբակյա բուրդից։ Ցանկացած սպիտակ և մորթե բան առաջացրել է նույն սարսափը:\n\nՈւոթսոնն ու Ռեյները երբեք «անվերապահ» ​​չեն արել Ալբերտի վախը։ Փորձը դադարեցվեց, երբ Ալբերտի մայրը՝ հիվանդանոցի թաց բուժքույրը, հեռացավ իր երեխայի հետ։ Ալբերտի իրական ինքնությունը տասնամյակներ շարունակ առեղծված մնաց: Վերջին հետազոտությունները ցույց են տալիս, որ նա Դուգլաս Մերիտն էր, որը, ցավոք, մահացել է հիդրոցեֆալուսից վեց տարեկանում:\n\nՓորձը ապացուցեց, որ հուզական արձագանքները կարելի է սովորել դասական պայմանավորման միջոցով: Բայց այն նաև բարձրացրեց խորը բարոյական հարցեր, որոնք ի վերջո հանգեցրին մարդկային սուբյեկտների խիստ հետազոտական ​​պաշտպանությանը:",
    "titleAz": "Balaca Albert və Ağ Siçovul",
    "moralAz": "Qorxular birləşmə yolu ilə öyrənilə bilər. Bu tarixi təcrübə bizə tədqiqatda etik qaydaların vacibliyini də öyrətdi.",
    "titleRu": "Маленький Альберт и Белая Крыса",
    "moralRu": "Страхам можно научиться через ассоциации. Этот исторический эксперимент также научил нас важности этических принципов в исследованиях.",
    "titleHy": "Փոքրիկ Ալբերտը և Սպիտակ առնետը",
    "contentRu": "В 1920 году Джон Б. Уотсон и Розали Рейнер провели один из самых противоречивых экспериментов в области психологии в Университете Джона Хопкинса. Их объектом был 9-месячный ребенок, известный как «Маленький Альберт».\n\nАльберта описывали как здорового, стабильного ребенка, который не боялся животных. Уотсон и Рейнер подарили ему белую лабораторную крысу, и Альберт с любопытством и восторгом потянулся за ней. Он одинаково спокойно реагировал на кролика, собаку, обезьяну, маски и даже горящие газеты.\n\nПотом началось кондиционирование. Каждый раз, когда Альберт тянулся к белой крысе, Ватсон ударял молотком по стальному стержню прямо за головой младенца, производя ужасающий шум. Альберт расплакался.\n\nВсего после семи спариваний крыс с громким шумом поведение Альберта коренным образом изменилось. Теперь один лишь вид белой крысы – без всякого шума – заставлял его плакать, быстро уползать и проявлять видимое беспокойство.\n\nЧто еще более примечательно, его страх распространился. Альберт стал бояться кролика, собаки, шубы, маски Деда Мороза с белой бородой и даже ваты. Все белое и пушистое вызывало тот же ужас.\n\nУотсон и Рейнер никогда не «обезусловливали» страх Альберта. Эксперимент был остановлен, когда мать Альберта, кормилица в больнице, ушла с ребенком. Настоящая личность Альберта оставалась загадкой на протяжении десятилетий. Недавние исследования показывают, что это был Дуглас Мерритт, который, к сожалению, умер от гидроцефалии в возрасте шести лет.\n\nЭксперимент доказал, что эмоциональным реакциям можно научиться с помощью классической обусловленности. Но это также подняло глубокие этические вопросы, которые в конечном итоге привели к строгой защите исследований на людях.",
    "contentAz": "1920-ci ildə John B. Watson və Rosalie Rayner Con Hopkins Universitetində psixologiyanın ən mübahisəli təcrübələrindən birini həyata keçirdilər. Onların mövzusu \"Balaca Albert\" kimi tanınan 9 aylıq körpə idi.\n\nAlbert heyvanlardan qorxmayan sağlam, sabit bir körpə kimi təsvir edilmişdir. Watson və Rayner ona ağ laboratoriya siçovulunu təqdim etdi və Albert maraq və zövqlə ona çatdı. Dovşana, itə, meymuna, maskalara, hətta yanan qəzetlərə də eyni sakit cavabı göstərdi.\n\nSonra kondisioner başladı. Albert hər dəfə ağ siçovula çatanda, Uotson körpənin başının arxasındakı çəkiclə polad çubuqla vurur və dəhşətli səs çıxarırdı. Albert göz yaşlarına boğuldu.\n\nYüksək səs-küylə siçovulların cəmi yeddi cütləşməsindən sonra Albertin davranışı kökündən dəyişdi. İndi ağ siçovulun sadəcə görünüşü - heç bir səs-küy olmadan - onun ağlamasına, sürətlə sürünməsinə və görünən sıxıntı göstərməsinə səbəb oldu.\n\nDaha maraqlısı, onun qorxusu ümumiləşdi. Albert dovşandan, itdən, xəz paltodan, ağ saqqallı Şaxta baba maskasından, hətta pambıq yundan qorxmağa başladı. Ağ və tüklü hər şey eyni qorxuya səbəb olurdu.\n\nWatson və Rayner heç vaxt Albertin qorxusunu \"şərtsiz\" qoymurlar. Xəstəxanada yaş tibb bacısı olan Albertin anası uşağı ilə birlikdə getdikdə təcrübə dayandırıldı. Albertin əsl şəxsiyyəti onilliklər ərzində sirr olaraq qaldı. Son araşdırmalar onun 6 yaşında hidrosefalidən vəfat edən Douglas Merritte olduğunu göstərir.\n\nTəcrübə sübut etdi ki, emosional reaksiyalar klassik kondisioner vasitəsilə öyrənilə bilər. Lakin bu, həm də dərin etik suallar doğurdu ki, nəticədə insan subyektləri üçün ciddi tədqiqat qorunmasına səbəb oldu."
  },
  {
    "id": 4,
    "title": "The Invisible Gorilla",
    "titleKa": "უხილავი გორილა",
    "chapterId": 4,
    "icon": "mdi:eye-off-outline",
    "content": "In 1999, psychologists Daniel Simons and Christopher Chabris designed an experiment that would challenge our most basic assumptions about awareness. They asked participants to watch a short video of six people—three in white shirts, three in black—passing basketballs to each other.\n\nThe task was simple: count the number of passes made by the white-shirted team. Participants focused intently, tracking each throw.\n\nHalfway through the video, something extraordinary happened. A person in a full gorilla costume walked slowly into the center of the frame, faced the camera, thumped its chest, and walked out. The gorilla was visible for a full nine seconds.\n\nWhen asked afterward, roughly half the participants had absolutely no idea a gorilla had appeared. They were shocked when shown the video again. Some refused to believe it was the same video.\n\nThe experiment demonstrated what Simons and Chabris called \"inattentional blindness\"—the failure to notice fully visible but unexpected objects when our attention is focused elsewhere. It's not that our eyes didn't see the gorilla; our brain simply didn't process it because it wasn't relevant to the counting task.\n\nThis research has profound real-world implications. Radiologists can miss tumors on X-rays when focused on something else. Drivers may not see pedestrians when distracted. Eyewitnesses miss critical details during crimes.\n\nThe invisible gorilla reminds us that seeing and noticing are two fundamentally different cognitive processes, and that our confident sense of awareness is largely an illusion.",
    "contentKa": "1999 წელს, ფსიქოლოგებმა მონაწილეებს სთხოვეს ვიდეოში ბასკეტბოლის გადაცემების დათვლა დაევალა. ვიდეოში გორილას კოსტიუმში გამოწყობილი ადამიანი გაიარა, მაგრამ მონაწილეების ნახევარმა ვერ შენიშნა. ეს აჩვენებს, რომ წენა და შემჩნევა სრულიად განსხვავებული პროცესებია.",
    "moral": "Our attention is far more limited than we think. We can look directly at something and still fail to see it if our focus is elsewhere.",
    "moralKa": "ჩვენი ყურადღება გაცილებით უფრო შეზღუდულია, ვიდრე გვგონია.",
    "titleHy": "Անտեսանելի գորիլա",
    "titleRu": "Невидимая горилла",
    "titleAz": "Görünməz Qorilla",
    "moralHy": "Մեր ուշադրությունը շատ ավելի սահմանափակ է, քան կարծում ենք։ Մենք կարող ենք ուղղակիորեն նայել ինչ-որ բանի և դեռևս չտեսնել այն, եթե մեր ուշադրությունը այլ տեղ է:",
    "moralAz": "Diqqətimiz düşündüyümüzdən daha məhduddur. Biz bir şeyə birbaşa baxa bilərik və diqqətimiz başqa yerdədirsə, hələ də onu görə bilmirik.",
    "moralRu": "Наше внимание гораздо более ограничено, чем мы думаем. Мы можем смотреть прямо на что-то и все равно не видеть этого, если наше внимание сосредоточено на чем-то другом.",
    "contentHy": "1999 թվականին հոգեբաններ Դենիել Սայմոնսը և Քրիստոֆեր Չաբրիսը նախագծեցին մի փորձ, որը կվիճարկի իրազեկման վերաբերյալ մեր ամենահիմնական ենթադրությունները: Նրանք խնդրեցին մասնակիցներին դիտել մի կարճ տեսանյութ, որտեղ վեց հոգի՝ երեքը սպիտակ վերնաշապիկներով, երեքը՝ սև, բասկետբոլի գնդակներ փոխանցեցին միմյանց:\n\nԱռաջադրանքը պարզ էր՝ հաշվել սպիտակաշապիկներով կատարած փոխանցումների քանակը։ Մասնակիցները ուշադրությամբ կենտրոնացան՝ հետևելով յուրաքանչյուր նետմանը:\n\nՏեսանյութի կեսին արտառոց բան տեղի ունեցավ. Ամբողջ գորիլայի հագուստով անձը դանդաղ քայլեց դեպի կադրի կենտրոնը, դեմքով դեպի տեսախցիկը հարվածեց նրա կրծքին և դուրս եկավ: Գորիլան տեսանելի էր ամբողջ ինը վայրկյան:\n\nԵրբ հարցրին, մասնակիցների մոտավորապես կեսը բացարձակապես չէր պատկերացնում, որ գորիլա է հայտնվել: Նրանք շոկի մեջ էին, երբ նորից ցուցադրեցին տեսանյութը։ Ոմանք հրաժարվեցին հավատալ, որ դա նույն տեսանյութն է:\n\nՓորձը ցույց տվեց այն, ինչ Սիմոնսը և Չաբրիսը անվանեցին «անուշադիր կուրություն»՝ լիովին տեսանելի, բայց անսպասելի առարկաներ չնկատելու, երբ մեր ուշադրությունը կենտրոնացած է այլ տեղ: Այնպես չէ, որ մեր աչքերը չեն տեսել գորիլան. մեր ուղեղը պարզապես չի մշակել այն, քանի որ այն չի համապատասխանում հաշվելու առաջադրանքին:\n\nԱյս հետազոտությունը խորը ազդեցություն ունի իրական աշխարհի վրա: Ռադիոլոգները կարող են բաց թողնել ուռուցքները ռենտգենյան ճառագայթների վրա, երբ կենտրոնացած են այլ բանի վրա: Վարորդները կարող են չտեսնել հետիոտներին, երբ շեղվում են: Հանցագործությունների ժամանակ ականատեսները բաց են թողնում կարևոր մանրամասները.\n\nԱնտեսանելի գորիլան հիշեցնում է մեզ, որ տեսնելն ու նկատելը երկու սկզբունքորեն տարբեր ճանաչողական գործընթացներ են, և որ գիտակցության մեր վստահ զգացումը մեծ մասամբ պատրանք է:",
    "contentRu": "В 1999 году психологи Дэниел Саймонс и Кристофер Шабрис разработали эксперимент, который бросит вызов нашим самым базовым представлениям об осознанности. Они попросили участников посмотреть короткое видео, в котором шесть человек (трое в белых рубашках и трое в черных) передают друг другу баскетбольные мячи.\n\nЗадача была простая: подсчитать количество передач, сделанных белорубашечной командой. Участники сосредоточились, отслеживая каждый бросок.\n\nВ середине видео произошло нечто экстраординарное. Человек в полном костюме гориллы медленно вошел в центр кадра, повернулся к камере, постучал себя в грудь и вышел. Гориллу было видно целых девять секунд.\n\nКогда их спросили позже, примерно половина участников понятия не имела о появлении гориллы. Они были шокированы, когда им снова показали видео. Некоторые отказывались верить, что это одно и то же видео.\n\nЭксперимент продемонстрировал то, что Саймонс и Шабри назвали «слепотой по невнимательности» — неспособностью замечать полностью видимые, но неожиданные объекты, когда наше внимание сосредоточено в другом месте. Дело не в том, что наши глаза не видели гориллу; наш мозг просто не обработал это, потому что это не имело отношения к задаче подсчета.\n\nЭто исследование имеет глубокие практические последствия. Радиологи могут не заметить опухоли на рентгеновских снимках, если сосредоточивают внимание на чем-то другом. Водители могут не видеть пешеходов, когда отвлекаются. Очевидцы упускают важные детали во время преступлений.\n\nНевидимая горилла напоминает нам, что видение и замечание — это два фундаментально разных когнитивных процесса и что наше уверенное чувство осознания — во многом иллюзия.",
    "contentAz": "1999-cu ildə psixoloqlar Daniel Simons və Christopher Chabris, şüurla bağlı ən əsas fərziyyələrimizə etiraz edəcək bir təcrübə hazırladılar. Onlar iştirakçılardan altı nəfərin – üçü ağ köynəkdə, üçü qara paltarda – basketbol toplarını bir-birinə ötürdükləri qısa videoya baxmağı xahiş etdilər.\n\nTapşırıq sadə idi: ağ köynəkli komandanın ötürmələrinin sayını hesablayın. İştirakçılar hər bir atışı izləyərək diqqətlərini cəmlədilər.\n\nVideonun yarısında qeyri-adi bir şey baş verdi. Tam qorilla kostyumunda olan bir şəxs yavaş-yavaş kadrın mərkəzinə daxil oldu, kameraya üz tutdu, sinəsini döydü və çıxıb getdi. Qorilla tam doqquz saniyə göründü.\n\nDaha sonra soruşduqda, iştirakçıların təxminən yarısı qorillanın peyda olması barədə heç bir fikri yox idi. Videonu yenidən nümayiş etdirəndə şoka düşüblər. Bəziləri bunun eyni video olduğuna inanmaqdan imtina etdi.\n\nTəcrübə Simons və Çabrisin \"diqqətsiz korluq\" adlandırdıqlarını nümayiş etdirdi - diqqətimiz başqa yerə yönəldildiyində tamamilə görünən, lakin gözlənilməz cisimlərin fərqinə varmamaq. Bu, gözlərimizin qorilla görməməsi deyil; bizim beynimiz sadəcə onu emal etmədi, çünki sayma tapşırığına uyğun deyildi.\n\nBu tədqiqatın real dünya üçün dərin təsirləri var. Rentgenoloqlar başqa bir şeyə diqqət yetirdikdə X-şüalarında şişləri əldən verə bilərlər. Sürücülər diqqəti yayındırdıqda piyadaları görməyə bilər. Şahidlər cinayətlər zamanı kritik detalları qaçırırlar.\n\nGözəgörünməz qorilla bizə xatırladır ki, görmək və fərq etmək iki kökündən fərqli idrak prosesidir və bizim inamlı dərketmə duyğumuz əsasən illüziyadır."
  },
  {
    "id": 5,
    "title": "Harlow's Monkeys and the Need for Love",
    "titleKa": "ჰარლოუს მაიმუნები და სიყვარულის საჭიროება",
    "chapterId": 9,
    "icon": "mdi:heart-outline",
    "content": "In the 1950s and 60s, psychologist Harry Harlow conducted experiments at the University of Wisconsin that would forever change our understanding of love and attachment. At the time, the prevailing view—promoted by behaviorists like Watson—was that infants bonded with mothers primarily because mothers provided food.\n\nHarlow challenged this assumption by separating infant rhesus monkeys from their biological mothers and giving them two surrogate \"mothers.\" One was made of bare wire mesh with a feeding bottle attached. The other was made of soft terry cloth with no food source.\n\nIf the behaviorists were right, the babies should have preferred the wire mother who provided nourishment. But that's not what happened.\n\nThe infant monkeys spent nearly all their time clinging to the soft cloth mother. They went to the wire mother only briefly to feed, then immediately returned to the cloth surrogate. When frightened by a mechanical spider or other threats, they ran to the cloth mother for comfort, clinging desperately.\n\nEven more telling: monkeys raised with only the wire mother developed severe psychological problems. They rocked back and forth, showed signs of depression, were aggressive, and had difficulty socializing with other monkeys. Those with the cloth mother, while not perfectly adjusted, were significantly healthier emotionally.\n\nLater experiments showed that monkeys deprived of all maternal contact became profoundly disturbed as adults—unable to parent their own offspring, some refusing to nurse or even harming their babies.\n\nHarlow's work, though ethically controversial by today's standards, provided irrefutable evidence that emotional comfort, touch, and security are as fundamental as food and water for healthy development.",
    "contentKa": "1950-60-იან წლებში, ჰარი ჰარლოუმა ექსპერიმენტები ჩაატარა რეზუსის მაიმუნებზე. მან ჩვილებს ორი სუროგატი დედა მისცა: მავთულხავლოვანი საკვებით და რბილი ქსოვილიანი საკვების გარეშე. ჩვილებმა რბილ დედა აირჩიეს—ემოციური კომფორტი საკვებზე მნიშვნელოვანია.",
    "moral": "Love, comfort, and physical touch are fundamental needs that shape healthy development—not luxuries, but biological necessities.",
    "moralKa": "სიყვარული, კომფორტი და ფიზიკური შეხება ფუნდამენტური საჭიროებებია ჯანსაღი განვითარებისთვის.",
    "titleHy": "Հարլոուի կապիկները և սիրո կարիքը",
    "moralHy": "Սերը, հարմարավետությունը և ֆիզիկական հպումը հիմնարար կարիքներ են, որոնք ձևավորում են առողջ զարգացումը՝ ոչ թե շքեղություն, այլ կենսաբանական անհրաժեշտություն:",
    "moralAz": "Sevgi, rahatlıq və fiziki toxunma sağlam inkişafı formalaşdıran əsas ehtiyaclardır - lüks deyil, bioloji ehtiyaclar.",
    "moralRu": "Любовь, комфорт и физическое прикосновение — это фундаментальные потребности, которые формируют здоровое развитие — не роскошь, а биологические потребности.",
    "titleRu": "Обезьяны Харлоу и потребность в любви",
    "contentHy": "1950-ականներին և 60-ականներին հոգեբան Հարրի Հարլոուն Վիսկոնսինի համալսարանում անցկացրեց փորձեր, որոնք ընդմիշտ կփոխեին մեր պատկերացումները սիրո և կապվածության մասին: Այն ժամանակ գերակշռող տեսակետը, որը տարածվում էր Ուոթսոնի նման վարքագծողների կողմից, այն էր, որ նորածինները կապված են մայրերի հետ հիմնականում այն ​​պատճառով, որ մայրերը սնունդ են մատակարարում:\n\nՀարլոուն վիճարկել է այս ենթադրությունը՝ առանձնացնելով մանկական ռեզուս կապիկներին իրենց կենսաբանական մայրերից և նրանց տալով երկու փոխնակ «մայրեր»: Մեկը պատրաստված էր մերկ մետաղական ցանցից, որի վրա դրված էր կերակրման շիշ: Մյուսը պատրաստված էր փափուկ կտորից, առանց սննդի աղբյուրի:\n\nԵթե ​​վարքագծերը ճիշտ էին, երեխաները պետք է նախընտրեին սնուցող մորը: Բայց այդպես չի եղել:\n\nՆորածին կապիկները գրեթե ամբողջ ժամանակ անցկացնում էին փափուկ կտորի մորից կառչելով: Նրանք գնացին մետաղալար մոր մոտ միայն կարճ ժամանակով կերակրելու, հետո անմիջապես վերադարձան կտորի փոխնակին: Երբ վախեցան մեխանիկական սարդից կամ այլ սպառնալիքներից, նրանք վազեցին կտորե մոր մոտ մխիթարության համար՝ հուսահատ կառչելով։\n\nՆույնիսկ ավելի խոսուն. կապիկները, որոնք մեծացել են միայն մետաղյա մոր հետ, ծանր հոգեբանական խնդիրներ են ունեցել: Նրանք օրորվում էին հետ ու առաջ, ցույց էին տալիս դեպրեսիայի նշաններ, ագրեսիվ էին և դժվարությամբ էին շփվում այլ կապիկների հետ։ Նրանք, ովքեր շորով մոր հետ, թեև կատարյալ հարմարեցված չէին, էմոցիոնալ առումով զգալիորեն ավելի առողջ էին:\n\nԱվելի ուշ փորձերը ցույց տվեցին, որ կապիկները, որոնք զրկված էին մայրական կապից, մեծ անհանգստություն էին զգում մեծահասակների շրջանում՝ չկարողանալով դաստիարակել իրենց սերունդներին, ոմանք հրաժարվում էին կերակրել կամ նույնիսկ վնասում իրենց երեխաներին։\n\nՀարլոուի աշխատանքը, թեև այսօրվա չափանիշներով էթիկապես հակասական է, սակայն անհերքելի ապացույցներ է տվել, որ էմոցիոնալ հարմարավետությունը, հպումը և անվտանգությունը նույնքան կարևոր են, որքան սնունդն ու ջուրը առողջ զարգացման համար:",
    "contentRu": "В 1950-х и 60-х годах психолог Гарри Харлоу проводил в Университете Висконсина эксперименты, которые навсегда изменили наше понимание любви и привязанности. В то время преобладала точка зрения, которую продвигали такие бихевиористы, как Уотсон, что младенцы связаны с матерями прежде всего потому, что матери обеспечивают их едой.\n\nХарлоу бросила вызов этому предположению, отделив детенышей макак-резус от их биологических матерей и дав им двух суррогатных «матерей». Один был сделан из голой проволочной сетки с прикрепленной бутылочкой для кормления. Другой был сделан из мягкой махровой ткани без источника питания.\n\nЕсли бы бихевиористы были правы, младенцы должны были бы предпочесть проволочную мать, которая обеспечивала бы питание. Но это не то, что произошло.\n\nДетеныши обезьян почти все время проводили, цепляясь за мягкую материю. К проволочной матери они ходили ненадолго, чтобы покормить, а затем сразу же возвращались к тканевой суррогатной матери. Напуганные механическим пауком или другими угрозами, они бежали к тканевой матери в поисках утешения, отчаянно цепляясь за нее.\n\nЕще более показательно: у обезьян, выросших только с проволочной матерью, возникли серьезные психологические проблемы. Они раскачивались взад и вперед, проявляли признаки депрессии, были агрессивны и с трудом общались с другими обезьянами. Те, у кого была тканевая мать, хотя и не были идеально приспособлены, были значительно здоровее эмоционально.\n\nБолее поздние эксперименты показали, что обезьяны, лишенные всякого контакта с матерью, повзрослев, стали глубоко обеспокоены: они не могли воспитывать собственное потомство, некоторые отказывались кормить своих детей грудью или даже причиняли им вред.\n\nРабота Харлоу, хотя и противоречивая с этической точки зрения по сегодняшним стандартам, предоставила неопровержимые доказательства того, что эмоциональный комфорт, прикосновения и безопасность так же важны для здорового развития, как еда и вода.",
    "titleAz": "Harlow meymunları və sevgi ehtiyacı",
    "contentAz": "1950-60-cı illərdə psixoloq Harri Harlou Viskonsin Universitetində sevgi və bağlılıq anlayışımızı həmişəlik dəyişəcək təcrübələr apardı. O vaxtlar, Watson kimi davranışçılar tərəfindən irəli sürülən, üstünlük təşkil edən fikir, körpələrin analarla ilk növbədə qida təmin etdiyi üçün bağlanması idi.\n\nHarlou körpə rhesus meymunlarını bioloji analarından ayıraraq və onlara iki surroqat \"ana\" verərək bu fərziyyəyə qarşı çıxdı. Biri qida şüşəsi əlavə edilmiş çılpaq məftildən hazırlanmışdı. Digəri isə qida mənbəyi olmayan yumşaq terri parçadan hazırlanmışdı.\n\nDavranışçılar haqlı olsaydılar, körpələr qida verən tel anaya üstünlük verməli idilər. Amma belə olmadı.\n\nKörpə meymunlar demək olar ki, bütün vaxtlarını yumşaq parça anasına yapışaraq keçirirdilər. Onlar qidalandırmaq üçün yalnız qısa müddətə tel anaya getdilər, sonra dərhal parça surroqatına qayıtdılar. Mexanik hörümçək və ya digər təhdidlərdən qorxduqda, çarəsizcə yapışaraq rahatlıq üçün parça anasına qaçdılar.\n\nDaha çox izah edən: yalnız tel ana ilə böyüdülən meymunlarda ciddi psixoloji problemlər yarandı. Onlar irəli-geri yellənirdilər, depressiya əlamətləri göstərirdilər, aqressiv idilər və digər meymunlarla ünsiyyət qurmaqda çətinlik çəkirdilər. Paltarlı anası olanlar, mükəmməl uyğunlaşmasalar da, emosional cəhətdən əhəmiyyətli dərəcədə sağlam idilər.\n\nSonrakı təcrübələr göstərdi ki, ana ilə hər cür təmasdan məhrum olan meymunlar böyüklər kimi çox narahat olurlar - öz övladlarını yetişdirə bilmirlər, bəziləri süd verməkdən boyun qaçırır və hətta körpələrinə zərər verirdilər.\n\nHarlowun işi, bugünkü standartlara görə etik cəhətdən mübahisəli olsa da, emosional rahatlığın, toxunmanın və təhlükəsizliyin sağlam inkişaf üçün qida və su qədər əsas olduğuna dair təkzibedilməz sübutlar təqdim etdi."
  },
  {
    "id": 6,
    "title": "The Marshmallow Test",
    "titleKa": "მარშმელოუს ტესტი",
    "chapterId": 10,
    "icon": "mdi:cookie-outline",
    "content": "In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment. He brought preschool children, typically 4 to 5 years old, into a room one at a time. On the table sat a single marsexport const MEMORY_CARDS: MemoryCard[] = [
  {
    "id": 1,
    "term": "Psychology",
    "definition": "The scientific study of behavior and mental processes",
    "category": "Basics",
    "termRu": "Психология",
    "termAz": "Psixologiya",
    "definitionRu": "Научное исследование поведения и психических процессов.",
    "definitionKa": "ქცევისა და ფსიქიკური პროცესების მეცნიერული შესწავლა",
    "definitionHy": "Վարքի և մտավոր գործընթացների գիտական ​​ուսումնասիրություն",
    "termKa": "ფსიქოლოგია",
    "termHy": "Հոգեբանություն",
    "definitionAz": "Davranış və psixi proseslərin elmi tədqiqi"
  },
  {
    "id": 2,
    "term": "Neuron",
    "definition": "A nerve cell that transmits electrical and chemical signals",
    "category": "Biology",
    "termRu": "Нейрон",
    "termAz": "Neyron",
    "definitionRu": "Нервная клетка, передающая электрические и химические сигналы.",
    "definitionHy": "Նյարդային բջիջ, որը փոխանցում է էլեկտրական և քիմիական ազդանշաններ",
    "definitionKa": "ნერვული უჯრედი, რომელიც გადასცემს ელექტრულ და ქიმიურ სიგნალებს",
    "termKa": "ნეირონი",
    "termHy": "Նեյրոն",
    "definitionAz": "Elektrik və kimyəvi siqnalları ötürən sinir hüceyrəsi"
  },
  {
    "id": 3,
    "term": "Classical Conditioning",
    "definition": "Learning through association of stimuli (Pavlov)",
    "category": "Learning",
    "termRu": "Классическое кондиционирование",
    "termKa": "კლასიკური კონდიცირება",
    "termHy": "Դասական կոնդիցիոներ",
    "termAz": "Klassik kondisioner",
    "definitionHy": "Սովորում գրգռիչների միավորման միջոցով (Պավլով)",
    "definitionKa": "სწავლა სტიმულის ასოციაციის გზით (პავლოვი)",
    "definitionAz": "Qıcıqlandırıcıların assosiasiyası vasitəsilə öyrənmə (Pavlov)",
    "definitionRu": "Обучение через ассоциацию стимулов (Павлов)"
  },
  {
    "id": 4,
    "term": "Operant Conditioning",
    "definition": "Learning through consequences: reinforcement and punishment (Skinner)",
    "category": "Learning",
    "termHy": "Գործող օդափոխություն",
    "termKa": "ოპერაციული კონდიცირება",
    "termAz": "Operant Kondisioner",
    "termRu": "Оперантное обусловливание",
    "definitionRu": "Обучение через последствия: подкрепление и наказание (Скиннер)",
    "definitionKa": "სწავლა შედეგების მეშვეობით: განმტკიცება და დასჯა (სკინერი)",
    "definitionHy": "Սովորում հետևանքների միջոցով. ամրապնդում և պատիժ (Skinner)",
    "definitionAz": "Nəticələr vasitəsilə öyrənmək: gücləndirmə və cəza (Skinner)"
  },
  {
    "id": 5,
    "term": "Hippocampus",
    "definition": "Brain structure essential for forming new long-term memories",
    "category": "Biology",
    "termRu": "Гиппокамп",
    "termKa": "ჰიპოკამპი",
    "termHy": "Հիպոկամպուս",
    "definitionRu": "Структура мозга необходима для формирования новой долговременной памяти",
    "definitionKa": "ტვინის სტრუქტურა აუცილებელია ახალი გრძელვადიანი მეხსიერების ფორმირებისთვის",
    "definitionHy": "Ուղեղի կառուցվածքը կարևոր է նոր երկարաժամկետ հիշողություններ ձևավորելու համար",
    "definitionAz": "Yeni uzunmüddətli xatirələrin formalaşması üçün vacib olan beyin quruluşu",
    "termAz": "Hipokampus"
  },
  {
    "id": 6,
    "term": "Cognitive Dissonance",
    "definition": "Discomfort from holding contradictory beliefs or attitudes",
    "category": "Social",
    "termRu": "Когнитивный диссонанс",
    "termHy": "Ճանաչողական դիսոնանս",
    "definitionRu": "Дискомфорт от противоречивых убеждений или взглядов.",
    "termKa": "კოგნიტური დისონანსი",
    "definitionKa": "დისკომფორტი ურთიერთსაწინააღმდეგო რწმენის ან დამოკიდებულების შენარჩუნების გამო",
    "definitionHy": "Անհանգստություն հակասական համոզմունքների կամ վերաբերմունքի պատճառով",
    "definitionAz": "Ziddiyyətli inanclara və ya münasibətə sahib olmaqdan narahatlıq",
    "termAz": "Koqnitiv dissonans"
  },
  {
    "id": 7,
    "term": "Maslow's Hierarchy",
    "definition": "Five-level model of motivation from basic needs to self-actualization",
    "category": "Motivation",
    "termAz": "Maslow iyerarxiyası",
    "termHy": "Մասլոուի հիերարխիա",
    "termKa": "მასლოუს იერარქია",
    "termRu": "Иерархия Маслоу",
    "definitionRu": "Пятиуровневая модель мотивации от базовых потребностей до самореализации",
    "definitionKa": "მოტივაციის ხუთ დონის მოდელი ძირითადი მოთხოვნილებებიდან თვითრეალიზაციამდე",
    "definitionHy": "Հիմնական կարիքներից մինչև ինքնաիրականացում մոտիվացիայի հինգ մակարդակի մոդել",
    "definitionAz": "Əsas ehtiyaclardan özünü həyata keçirməyə qədər beş səviyyəli motivasiya modeli"
  },
  {
    "id": 8,
    "term": "Big Five (OCEAN)",
    "definition": "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
    "category": "Personality",
    "termKa": "დიდი ხუთეული (OCEAN)",
    "termHy": "Մեծ հնգյակ (OCEAN)",
    "termRu": "Большая пятерка (ОКЕАН)",
    "termAz": "Böyük beşlik (OCEAN)",
    "definitionRu": "Открытость, Добросовестность, Экстраверсия, Доброжелательность, Невротизм.",
    "definitionHy": "Բացություն, բարեխիղճություն, էքստրավերտություն, համաձայնություն, նևրոտիզմ",
    "definitionKa": "ღიაობა, კეთილსინდისიერება, ექსტრავერსია, თანხმობა, ნევროტიზმი",
    "definitionAz": "Açıqlıq, Vicdanlılıq, Ekstraversiya, Uyğunluq, Nevrotiklik"
  },
  {
    "id": 9,
    "term": "Attachment Theory",
    "definition": "The bond between infant and caregiver shaping later relationships",
    "category": "Development",
    "definitionRu": "Связь между младенцем и лицом, осуществляющим уход, формирует дальнейшие отношения",
    "termRu": "Теория привязанности",
    "termKa": "მიმაგრების თეორია",
    "termHy": "Կցվածության տեսություն",
    "definitionHy": "Երեխայի և խնամողի միջև կապը ձևավորում է հետագա հարաբերությունները",
    "definitionKa": "კავშირი ახალშობილსა და მომვლელს შორის აყალიბებს შემდგომ ურთიერთობებს",
    "termAz": "Qoşma nəzəriyyəsi",
    "definitionAz": "Körpə və baxıcı arasındakı əlaqə sonrakı münasibətləri formalaşdırır"
  },
  {
    "id": 10,
    "term": "Confirmation Bias",
    "definition": "Tendency to seek information that supports existing beliefs",
    "category": "Cognition",
    "termRu": "Предвзятость подтверждения",
    "definitionRu": "Склонность искать информацию, которая поддерживает существующие убеждения.",
    "termKa": "დადასტურების მიკერძოება",
    "termHy": "Հաստատման կողմնակալություն",
    "definitionKa": "ტენდენცია მოიძიოს ინფორმაცია, რომელიც მხარს უჭერს არსებულ რწმენას",
    "definitionHy": "Գոյություն ունեցող համոզմունքները հաստատող տեղեկատվություն փնտրելու միտում",
    "termAz": "Təsdiq qərəzi",
    "definitionAz": "Mövcud inancları dəstəkləyən məlumat axtarmaq meyli"
  },
  {
    "id": 11,
    "term": "Dopamine",
    "definition": "Neurotransmitter involved in reward, motivation, and pleasure",
    "category": "Biology",
    "termKa": "დოფამინი",
    "termRu": "Дофамин",
    "termAz": "Dopamin",
    "termHy": "Դոպամին",
    "definitionRu": "Нейромедиатор, участвующий в вознаграждении, мотивации и удовольствии.",
    "definitionKa": "ნეიროტრანსმიტერი მონაწილეობს ჯილდოში, მოტივაციაში და სიამოვნებაში",
    "definitionHy": "Նեյրոհաղորդիչը ներգրավված է պարգևատրման, մոտիվացիայի և հաճույքի մեջ",
    "definitionAz": "Mükafat, motivasiya və həzzdə iştirak edən neyrotransmitter"
  },
  {
    "id": 12,
    "term": "REM Sleep",
    "definition": "Sleep stage with rapid eye movements and vivid dreaming",
    "category": "Consciousness",
    "termRu": "Быстрый сон",
    "termKa": "REM ძილი",
    "termHy": "REM քուն",
    "definitionKa": "ძილის ეტაპი თვალის სწრაფი მოძრაობით და ნათელი ოცნებებით",
    "definitionHy": "Քնի փուլ՝ աչքերի արագ շարժումներով և վառ երազներով",
    "definitionRu": "Стадия сна с быстрыми движениями глаз и яркими сновидениями.",
    "termAz": "REM yuxusu",
    "definitionAz": "Sürətli göz hərəkətləri və canlı yuxu ilə yuxu mərhələsi"
  },
  {
    "id": 13,
    "term": "Bystander Effect",
    "definition": "Less likely to help when others are present",
    "category": "Social",
    "definitionKa": "ნაკლებად სავარაუდოა, რომ დაეხმაროს, როდესაც სხვები არიან",
    "definitionHy": "Ավելի քիչ հավանական է օգնել, երբ ուրիշները ներկա են",
    "definitionAz": "Başqaları olduqda kömək etmək ehtimalı azdır",
    "termHy": "Bystander Effect",
    "termKa": "Bystander Effect",
    "termRu": "Эффект свидетеля",
    "definitionRu": "Меньше шансов помочь, когда присутствуют другие",
    "termAz": "Baxıcı Effekti"
  },
  {
    "id": 14,
    "term": "Placebo Effect",
    "definition": "Improvement from belief in treatment rather than treatment itself",
    "category": "Research",
    "termRu": "Эффект плацебо",
    "termHy": "Պլացեբոյի էֆեկտ",
    "termKa": "პლაცებოს ეფექტი",
    "definitionHy": "Բուժման նկատմամբ հավատքի բարելավում, այլ ոչ թե ինքնին բուժման",
    "definitionKa": "გაუმჯობესება მკურნალობისადმი რწმენისგან და არა თავად მკურნალობის მიმართ",
    "definitionRu": "Улучшение от веры в лечение, а не от самого лечения",
    "termAz": "Plasebo effekti",
    "definitionAz": "Müalicənin özündən çox müalicəyə inamdan irəli gələn təkmilləşdirmə"
  },
  {
    "id": 15,
    "term": "Schema",
    "definition": "Mental framework for organizing and interpreting information",
    "category": "Cognition",
    "termRu": "Схема",
    "termHy": "Սխեման",
    "termKa": "სქემა",
    "definitionRu": "Ментальная основа для организации и интерпретации информации",
    "definitionHy": "Տեղեկատվության կազմակերպման և մեկնաբանման մտավոր շրջանակ",
    "definitionKa": "ინფორმაციის ორგანიზებისა და ინტერპრეტაციის გონებრივი ჩარჩო",
    "termAz": "Sxem",
    "definitionAz": "Məlumatı təşkil etmək və şərh etmək üçün zehni çərçivə"
  },
  {
    "id": 16,
    "term": "Amygdala",
    "definition": "Brain structure for processing emotions, especially fear",
    "category": "Biology",
    "termKa": "ამიგდალა",
    "definitionRu": "Структура мозга для обработки эмоций, особенно страха",
    "termHy": "Ամիգդալա",
    "termRu": "Миндалевидное тело",
    "definitionHy": "Ուղեղի կառուցվածքը հույզերի, հատկապես վախի մշակման համար",
    "definitionKa": "ტვინის სტრუქტურა ემოციების, განსაკუთრებით შიშის დასამუშავებლად",
    "termAz": "Amigdala",
    "definitionAz": "Duyğuların, xüsusən də qorxunun işlənməsi üçün beyin quruluşu"
  },
  {
    "id": 17,
    "term": "Self-Efficacy",
    "definition": "Belief in your ability to succeed at specific tasks (Bandura)",
    "category": "Personality",
    "definitionRu": "Вера в свою способность добиться успеха в выполнении конкретных задач (Бандура)",
    "termRu": "Самоэффективность",
    "definitionHy": "Հավատք կոնկրետ առաջադրանքներում հաջողության հասնելու ձեր ունակությանը (Բանդուրա)",
    "definitionKa": "რწმენა კონკრეტულ ამოცანებში წარმატების მისაღწევად (ბანდურა)",
    "termKa": "თვითეფექტურობა",
    "termHy": "Ինքնարդյունավետություն",
    "termAz": "Öz-özünə effektivlik",
    "definitionAz": "Müəyyən tapşırıqlarda uğur qazanmaq qabiliyyətinə inam (Bandura)"
  },
  {
    "id": 18,
    "term": "Learned Helplessness",
    "definition": "Giving up after repeated failures even when escape is possible",
    "category": "Motivation",
    "termRu": "Выученная беспомощность",
    "definitionKa": "განმეორებითი წარუმატებლობის შემდეგ დანებება მაშინაც კი, როცა გაქცევა შესაძლებელია",
    "definitionHy": "Կրկնվող անհաջողություններից հետո հանձնվելը, նույնիսկ երբ հնարավոր է փախուստը",
    "termKa": "ისწავლა უმწეობა",
    "termHy": "Սովորած անօգնականություն",
    "definitionRu": "Сдаваться после повторяющихся неудач, даже если побег возможен",
    "termAz": "Çarəsizliyi öyrəndi",
    "definitionAz": "Qaçmaq mümkün olsa belə, təkrarlanan uğursuzluqlardan sonra təslim olmaq"
  },
  {
    "id": 19,
    "term": "Transference",
    "definition": "Redirecting feelings about one person onto the therapist",
    "category": "Therapy",
    "definitionKa": "ერთი ადამიანის მიმართ გრძნობების გადამისამართება თერაპევტზე",
    "termKa": "გადაცემა",
    "termHy": "Փոխանցում",
    "termRu": "перенос",
    "definitionRu": "Перенаправление чувств к одному человеку на терапевта",
    "termAz": "Köçürmə",
    "definitionHy": "Մեկ անձի մասին զգացմունքների վերահղում թերապևտի վրա",
    "definitionAz": "Bir şəxs haqqında hissləri terapevtə yönləndirmək"
  },
  {
    "id": 20,
    "term": "Heuristic",
    "definition": "Mental shortcut for quick decisions that can lead to errors",
    "category": "Cognition",
    "definitionKa": "გონებრივი მალსახმობი სწრაფი გადაწყვეტილების მისაღებად, რამაც შეიძლება გამოიწვიოს შეცდომები",
    "definitionHy": "Մտավոր դյուրանցում արագ որոշումների համար, որոնք կարող են հանգեցնել սխալների",
    "termHy": "Էվրիստիկ",
    "termKa": "ევრისტიკული",
    "termRu": "эвристика",
    "definitionRu": "Ментальный ярлык для быстрых решений, которые могут привести к ошибкам",
    "definitionAz": "Səhvlərə səbəb ola biləcək sürətli qərarlar üçün zehni qısa yol",
    "termAz": "Evristik"
  },
  {
    "id": 21,
    "term": "Synapse",
    "definition": "The gap between neurons where neurotransmitters cross",
    "category": "Biology",
    "termAz": "Sinaps",
    "termRu": "Синапс",
    "termKa": "სინაფსი",
    "termHy": "Սինապս",
    "definitionKa": "უფსკრული ნეირონებს შორის, სადაც ნეიროტრანსმიტერები კვეთენ",
    "definitionHy": "Նեյրոնների միջև ընկած բացը, որտեղ անցնում են նեյրոհաղորդիչները",
    "definitionRu": "Зазор между нейронами, где пересекаются нейротрансмиттеры",
    "definitionAz": "Neyrotransmitterlərin keçdiyi neyronlar arasındakı boşluq"
  },
  {
    "id": 22,
    "term": "Extinction",
    "definition": "Weakening of conditioned response when reinforcement stops",
    "category": "Learning",
    "termRu": "Вымирание",
    "termAz": "Yox olma",
    "definitionKa": "განპირობებული პასუხის შესუსტება, როდესაც გაძლიერება ჩერდება",
    "definitionHy": "Պայմանավորված արձագանքի թուլացում, երբ ամրապնդումը դադարում է",
    "termKa": "გადაშენება",
    "termHy": "Անհետացում",
    "definitionRu": "Ослабление условной реакции при прекращении подкрепления",
    "definitionAz": "Möhkəmləndirmə dayandıqda şərti cavabın zəifləməsi"
  },
  {
    "id": 23,
    "term": "Superego",
    "definition": "The moral conscience in Freud's personality structure",
    "category": "Personality",
    "termKa": "სუპერეგო",
    "termHy": "Սուպերէգո",
    "termRu": "Суперэго",
    "termAz": "Supereqo",
    "definitionRu": "Моральное сознание в структуре личности Фрейда",
    "definitionHy": "Բարոյական խիղճը Ֆրեյդի անձի կառուցվածքում",
    "definitionKa": "მორალური სინდისი ფროიდის პიროვნების სტრუქტურაში",
    "definitionAz": "Freydin şəxsiyyət strukturunda əxlaqi vicdan"
  },
  {
    "id": 24,
    "term": "Neuroplasticity",
    "definition": "Brain's ability to reorganize and form new neural connections",
    "category": "Biology",
    "termAz": "Neyroplastiklik",
    "termRu": "Нейропластичность",
    "definitionRu": "Способность мозга реорганизоваться и сформировать новые нейронные связи",
    "definitionHy": "Վերակազմավորվելու և նոր նյարդային կապեր ձևավորելու ուղեղի կարողությունը",
    "definitionKa": "ტვინის რეორგანიზაციისა და ახალი ნერვული კავშირების ჩამოყალიბების უნარი",
    "definitionAz": "Beynin yenidən təşkil etmək və yeni sinir əlaqələri yaratmaq qabiliyyəti",
    "termHy": "Նեյրոպլաստիկություն",
    "termKa": "ნეიროპლასტიურობა"
  }
]բ դուռը փակվեց: Մյուսները փորձեցին ստեղծագործական ռազմավարություններ՝ փակել իրենց աչքերը, շրջվել, երգել իրենց համար, շոյել ճահճին ինչպես փոքրիկ կենդանու, կամ լիզել և հետ դնել:\n\nԵրեխաների մոտ մեկ երրորդը հասցրել է սպասել ամբողջ 15 րոպեին։ Երկու երրորդը չկարողացավ դիմադրել։\n\nՏարիներ անց Միշելը հետևեց երեխաներին՝ այժմ դեռահասների և մեծահասակների։ Արդյունքները ապշեցուցիչ էին. Երեխաները, ովքեր ավելի երկար էին սպասել, զգալիորեն ավելի բարձր միավորներ ստացան SAT-ներում (միջինում 210 միավորով), ծնողների կողմից նկարագրվեցին որպես ավելի իրավասու, ավելի լավ հաղթահարեցին սթրեսը, ավելի քիչ հավանական է չարաշահեն նյութերը և պահպանեցին ավելի առողջ մարմնի քաշը:\n\nՉորս տասնամյակ տևած հետագա ուսումնասիրությունները ցույց են տվել, որ մանկության մեջ բավարարվածությունը հետաձգելու կարողությունը ավելի լավ արդյունքներ է կանխատեսում կյանքի հաջողության գրեթե բոլոր չափորոշիչներում:\n\nԱյնուամենայնիվ, ավելի ուշ հետազոտությունները նորություն են ավելացրել: Թայլեր Ուոթսի կողմից 2018 թվականի ուսումնասիրությունը ցույց է տվել, որ սոցիալ-տնտեսական գործոնները և տնային միջավայրը մեծապես ազդում են բավարարվածությունը հետաձգելու ունակության վրա. կայուն, ռեսուրսներով հարուստ տներից երեխաները կարող են պարզապես ավելի շատ հիմքեր ունենալ վստահելու, որ երկրորդ մարշմալոն իրականում կհայտնվի:",
    "titleAz": "Marshmallow Testi",
    "contentRu": "В конце 1960-х — начале 1970-х годов психолог из Стэнфорда Уолтер Мишель начал обманчиво простой эксперимент. Он приводил детей дошкольного возраста, обычно от 4 до 5 лет, по одному в комнату. На столе лежал зефир (или печенье, или крендель — ребенок мог выбрать лакомство по своему вкусу).\n\nИсследователь сказал ребенку: «Ты можешь съесть этот зефир прямо сейчас. Но если подождешь, пока я вернусь, вместо этого ты сможешь съесть два зефира». Затем исследователь вышел из комнаты примерно на 15 минут.\n\nСкрытые камеры записали то, что произошло дальше, и отснятый материал стал одним из самых восхитительных фильмов в истории психологии. Некоторые дети съели зефир сразу же, как закрылась дверь. Другие пробовали творческие стратегии: закрывали глаза, поворачивались, напевали про себя, гладили зефир, как крошечного зверька, или облизывали его и клали обратно.\n\nОколо трети детей удалось прождать полные 15 минут. Две трети не смогли устоять.\n\nСпустя годы Мишель последовал за детьми — теперь уже подростками и взрослыми. Результаты были поразительными. Дети, которые ждали дольше, набрали значительно более высокие баллы по SAT (в среднем на 210 баллов выше), родители описывали их как более компетентных, лучше справлялись со стрессом, реже злоупотребляли психоактивными веществами и поддерживали более здоровый вес тела.\n\nПоследующие исследования, охватывающие четыре десятилетия, показали, что способность откладывать удовлетворение в детстве предсказывает лучшие результаты почти по всем показателям жизненного успеха.\n\nОднако более поздние исследования добавили нюансов. Исследование Тайлера Уоттса, проведенное в 2018 году, показало, что социально-экономические факторы и домашняя обстановка сильно влияют на способность откладывать удовлетворение — у детей из стабильных, богатых ресурсами семей просто может быть больше оснований верить в то, что второй зефир действительно появится.",
    "contentAz": "1960-cı illərin sonu və 1970-ci illərin əvvəllərində Stenford psixoloqu Valter Mişel aldadıcı sadə təcrübəyə başladı. O, adətən 4-5 yaşlı məktəbəqədər uşaqları bir-bir otağa gətirirdi. Masada tək zefir (yaxud peçenye və ya simit - uşaq öz istədiyi yeməyi seçə bilər) oturdu.\n\nTədqiqatçı uşağa deyib: \"Bu zefiri indi yeyə bilərsiniz. Amma mən qayıdana qədər gözləsəniz, onun yerinə iki zefir yeyə bilərsiniz\". Sonra tədqiqatçı təxminən 15 dəqiqə otağı tərk etdi.\n\nGizli kameralar sonra baş verənləri qeyd etdi və görüntülər psixologiyanın ən ləzzətli baxışlarından biri oldu. Bəzi uşaqlar qapı bağlanan kimi zefiri yedilər. Digərləri yaradıcı strategiyaları sınadılar: gözlərini örtdülər, ətrafa çevrildilər, öz-özünə mahnı oxudular, zefiri kiçik bir heyvan kimi oxşadılar və ya yalayıb geri qoydular.\n\nUşaqların təxminən üçdə biri tam 15 dəqiqə gözləməyi bacarıb. Üçdə ikisi müqavimət göstərə bilmədi.\n\nİllər sonra Mişel uşaqları - indi yeniyetmələr və böyüklər kimi izlədi. Nəticələr təəccüblü idi. Daha çox gözləyən uşaqlar SAT-da əhəmiyyətli dərəcədə yüksək bal topladılar (orta hesabla 210 bal daha yüksək), valideynlər tərəfindən daha bacarıqlı, streslə daha yaxşı mübarizə aparan, maddələrdən sui-istifadə etmə ehtimalı az idi və bədən çəkilərini daha sağlam saxladılar.\n\nQırx onillikləri əhatə edən təqib tədqiqatları göstərdi ki, uşaqlıqda həzzi gecikdirmək bacarığı, demək olar ki, hər bir həyat uğuru ölçüsündə daha yaxşı nəticələri proqnozlaşdırır.\n\nBununla belə, sonrakı araşdırmalar bir nüans əlavə etdi. Tyler Watts tərəfindən 2018-ci ildə aparılan bir araşdırma göstərdi ki, sosial-iqtisadi amillər və ev mühiti məmnuniyyəti gecikdirmək qabiliyyətinə güclü təsir göstərir - sabit, resursla zəngin evlərdən olan uşaqların ikinci zefirin həqiqətən görünəcəyinə inanmaq üçün daha çox səbəbi ola bilər."
  },
  {
    "id": 7,
    "title": "Kitty Genovese and Bystander Apathy",
    "titleKa": "კიტი ჯენოვეზე და თვალთმხილველის აპათია",
    "chapterId": 12,
    "icon": "mdi:account-alert-outline",
    "content": "On March 13, 1964, 28-year-old Catherine \"Kitty\" Genovese was returning to her apartment in Kew Gardens, Queens, New York, at about 3:15 AM after finishing her shift as a bar manager. As she walked from her car, she was attacked by Winston Moseley.\n\nKitty screamed for help. Lights went on in the apartment building. A neighbor yelled from a window. Moseley ran away—but returned ten minutes later to attack her again in a stairwell, where he stabbed, robbed, and ultimately killed her.\n\nThe New York Times reported that 38 witnesses watched or heard the attack and did nothing—a claim that became the defining story of urban apathy. The headline shocked the nation.\n\nPsychologists John Darley and Bibb Latané were deeply troubled by the story. Rather than simply condemning the witnesses as uncaring, they hypothesized that the very number of witnesses might have been the problem. They designed a series of experiments to test this.\n\nIn one study, participants were placed in separate rooms and communicated via intercom. When one \"participant\" (actually a recording) simulated having a seizure, those who believed they were the only one who could hear it responded quickly—85% within one minute. But when participants believed four others were also listening, only 31% responded.\n\nDarley and Latané called this the \"bystander effect\"—the finding that the presence of others reduces individual helping behavior through two mechanisms: diffusion of responsibility (\"someone else will help\") and pluralistic ignorance (\"nobody else seems concerned, so it must not be serious\").\n\nNote: Later research revealed that the original Times story was significantly exaggerated—fewer people witnessed the attack than claimed, and some did call police. But the research it inspired has been robustly confirmed.",
    "contentKa": "1964 წელს, კიტი ჯენოვეზე ნიუ-იორკში თავს დასხმულეს დროს მოიკლა. მრავალმა ესმა დაინახა, მაგრამ არავინ დაეხმარა. ფსიქოლოგებმა დარლიმ და ლატანემ აღმოაჩინეს \"თვალთმხილველის ეფექტი\"—რა჊ მეტი ადამიანია დამსწრე, მით ნაკლებად თითოეული დახმარების ალბათობა მცირდება.",
    "moral": "The more people present during an emergency, the less likely any individual is to help—a counterintuitive finding with life-saving implications.",
    "moralKa": "რა჊ მეტი ადამიანი არის საგანგაშო სიტუაციაში, მით ნაკლებადია თითოეულის დახმარება.",
    "titleRu": "Китти Дженовезе и апатия свидетеля",
    "titleHy": "Kitty Genovese և Bystander Apathy",
    "contentHy": "1964 թվականի մարտի 13-ին 28-ամյա Քեթրին «Քիթի» Ջենովեզը վերադառնում էր իր բնակարան Քու Գարդենսում, Քուինս, Նյու Յորք, ժամը 03:15-ին, բարի մենեջերի իր հերթափոխն ավարտելուց հետո: Երբ նա քայլում էր իր մեքենայից, նրա վրա հարձակվեց Ուինսթոն Մոզելին:\n\nՔիթին գոռաց օգնության համար։ Բազմաբնակարան շենքում վառվել են լույսերը. Հարևանը պատուհանից գոռաց. Մոզելին փախավ, բայց տասը րոպե անց վերադարձավ, որպեսզի նորից հարձակվի նրա վրա աստիճաններով, որտեղ նա դանակահարեց, կողոպտեց և ի վերջո սպանեց նրան:\n\nThe New York Times-ը հաղորդում է, որ 38 վկաներ դիտել կամ լսել են հարձակումը և ոչինչ չեն արել, մի պնդում, որը դարձավ քաղաքային ապատիայի որոշիչ պատմությունը: Վերնագիրը ցնցեց ազգին.\n\nՀոգեբաններ Ջոն Դարլին և Բիբ Լատանեն խորապես անհանգստացած էին այս պատմությունից: Վկաներին պարզապես չդատապարտելու փոխարեն՝ նրանք ենթադրեցին, որ խնդիրը կարող էր լինել հենց վկաների թիվը: Նրանք նախագծեցին մի շարք փորձեր՝ դա ստուգելու համար:\n\nՀետազոտություններից մեկում մասնակիցներին տեղավորել են առանձին սենյակներում և հաղորդակցվել ինտերկոմի միջոցով: Երբ «մասնակիցներից մեկը» (իրականում ձայնագրություն) նմանակում էր նոպա ունենալը, նրանք, ովքեր հավատում էին, որ միակն է, ով կարող էր դա լսել, արագ արձագանքեցին՝ 85% մեկ րոպեի ընթացքում: Բայց երբ մասնակիցները կարծում էին, որ ևս չորսը նույնպես լսում են, միայն 31%-ն է պատասխանել:\n\nԴարլին և Լատանեն սա անվանեցին «կողմնակի էֆեկտ»՝ այն բացահայտումը, որ ուրիշների ներկայությունը նվազեցնում է անհատական ​​օգնության վարքագիծը երկու մեխանիզմների միջոցով՝ պատասխանատվության բաշխում («ուրիշը կօգնի») և բազմակարծիք տգիտություն («ուրիշ ոչ ոք մտահոգված չէ, ուստի այն չպետք է լուրջ լինի»):\n\nՆշում. Հետագայում հետազոտությունները պարզեցին, որ Times-ի սկզբնական պատմությունը զգալիորեն ուռճացված էր. ավելի քիչ մարդիկ են ականատես եղել հարձակմանը, քան պնդում էին, իսկ ոմանք էլ ոստիկանություն են կանչել: Բայց նրա կողմից ոգեշնչված հետազոտությունը հաստատապես հաստատվել է:",
    "titleAz": "Kitty Genovese və Bystander Apatiyası",
    "contentAz": "13 mart 1964-cü ildə 28 yaşlı Catherine \"Kitty\" Genovese bar meneceri kimi növbəsini bitirdikdən sonra təxminən saat 3:15-də Nyu-Yorkun Kvins ştatındakı Kew Gardensdəki mənzilinə qayıdırdı. O, avtomobilindən gedərkən Uinston Mozilinin hücumuna məruz qalıb.\n\nKitty kömək üçün qışqırdı. Yaşayış binasında işıqlar yanıb. Qonşu pəncərədən qışqırdı. Moseley qaçdı, lakin on dəqiqə sonra geri qayıdıb, pilləkən boşluğunda yenidən ona hücum etdi, burada bıçaqladı, qarət etdi və nəticədə onu öldürdü.\n\nThe New York Times xəbər verir ki, 38 şahid hücumu izləyib və ya eşidib və heç nə etməyib – bu, şəhər laqeydliyinin əsas hekayəsinə çevrilib. Başlıq milləti şoka saldı.\n\nPsixoloqlar Con Darli və Bibb Latane hekayədən çox narahat idilər. Şahidləri sadəcə olaraq diqqətsiz kimi qınamaq əvəzinə, onlar fərz etdilər ki, şahidlərin çoxluğu problem ola bilərdi. Bunu yoxlamaq üçün bir sıra təcrübələr hazırladılar.\n\nBir araşdırmada iştirakçılar ayrı otaqlara yerləşdirilib və interkom vasitəsilə əlaqə saxlanılıb. Bir \"iştirakçı\" (əslində səsyazma) tutma keçirməyi simulyasiya etdikdə, bunu eşidə bilən yeganə şəxs olduğuna inananlar tez cavab verdilər - bir dəqiqə ərzində 85%. Lakin iştirakçılar dörd nəfərin də dinlədiyinə inandıqda, yalnız 31% cavab verdi.\n\nDarley və Latane bunu \"gözdən keçirmə effekti\" adlandırdılar - başqalarının mövcudluğunun iki mexanizm vasitəsilə fərdi yardım davranışını azaldacağının tapılması: məsuliyyətin yayılması (\"başqası kömək edəcək\") və plüralistik cəhalət (\"başqa heç kimi narahat etmir, ona görə də ciddi olmamalıdır\").\n\nQeyd: Sonrakı araşdırmalar orijinal Times hekayəsinin əhəmiyyətli dərəcədə şişirdildiyini ortaya qoydu - iddia ediləndən daha az adam hücumun şahidi oldu və bəziləri polisə zəng etdi. Lakin onun ilham verdiyi tədqiqat möhkəm şəkildə təsdiqləndi.",
    "contentRu": "13 марта 1964 года 28-летняя Кэтрин «Китти» Дженовезе возвращалась в свою квартиру в Кью-Гарденс, Квинс, Нью-Йорк, примерно в 3:15 утра после окончания смены в качестве менеджера бара. Когда она выходила из машины, на нее напал Уинстон Мозли.\n\nКитти звала на помощь. В многоквартирном доме зажегся свет. Сосед кричал из окна. Мозли убежал, но вернулся через десять минут, чтобы снова напасть на нее на лестничной клетке, где он нанес ей удар, ограбил и в конечном итоге убил ее.\n\nГазета New York Times сообщила, что 38 свидетелей наблюдали или слышали нападение и ничего не предприняли — это утверждение стало определяющей историей городской апатии. Заголовок шокировал нацию.\n\nПсихологи Джон Дарли и Бибб Латане были глубоко обеспокоены этой историей. Вместо того, чтобы просто осудить свидетелей как равнодушных, они предположили, что проблема могла быть в самом количестве свидетелей. Чтобы проверить это, они разработали серию экспериментов.\n\nВ одном исследовании участников поместили в отдельные комнаты и общались через интерком. Когда один «участник» (на самом деле запись) имитировал приступ, те, кто считал, что они единственные, кто мог это слышать, отреагировали быстро — 85% в течение одной минуты. Но когда участники поверили, что четверо других тоже слушают, ответил только 31%.\n\nДарли и Латане назвали это «эффектом свидетеля» — обнаружение того, что присутствие других снижает индивидуальное помогающее поведение посредством двух механизмов: распыления ответственности («кто-то другой поможет») и плюралистического невежества («никто больше не обеспокоен, поэтому это не должно быть серьезно»).\n\nПримечание. Более поздние исследования показали, что первоначальная история Times была значительно преувеличена: свидетелями нападения стало меньше людей, чем утверждалось, а некоторые все же вызвали полицию. Но исследования, которые оно вдохновило, получили убедительное подтверждение.",
    "moralHy": "Որքան շատ մարդիկ ներկա գտնվեն արտակարգ իրավիճակների ժամանակ, այնքան քիչ հավանական է, որ որևէ անհատ օգնի, դա հակաինտուիտիվ բացահայտում է, որը փրկում է կյանքին:",
    "moralRu": "Чем больше людей присутствует во время чрезвычайной ситуации, тем меньше вероятность того, что кто-то сможет помочь – а это противоречивый вывод, который может спасти жизни людей.",
    "moralAz": "Fövqəladə vəziyyət zamanı nə qədər çox insan iştirak etsə, hər hansı bir şəxsin kömək etmə ehtimalı bir o qədər az olar - bu, həyat qurtaran nəticələri olan əks-intuitiv tapıntıdır."
  },
  {
    "id": 8,
    "title": "Seligman and the Dogs Who Gave Up",
    "titleKa": "სელიგმანი და ძაღლები, რომლებმა჊ დანებდეს",
    "chapterId": 10,
    "icon": "mdi:emoticon-sad-outline",
    "content": "In 1967, Martin Seligman and Steven Maier were graduate students at the University of Pennsylvania conducting research on learning. Their experiment would accidentally reveal one of psychology's most important concepts.\n\nThe experiment had three groups of dogs. Group 1 received mild electric shocks they could stop by pressing a panel with their noses. Group 2 received the same shocks but had no way to stop them—they were \"yoked\" to Group 1, receiving the exact same pattern of shocks regardless of what they did. Group 3 received no shocks at all.\n\nLater, all three groups were placed in a shuttle box—a chamber divided by a low barrier the dogs could easily jump over. Shocks were delivered to one side, and the dogs simply needed to jump to the other side to escape.\n\nGroups 1 and 3 quickly learned to jump the barrier. But Group 2—the dogs who had previously been unable to escape—didn't even try. They lay down, whimpered, and passively accepted the shock. Two-thirds of them made no attempt to escape, even though the barrier was right there.\n\nSeligman called this \"learned helplessness\"—the state in which, after experiencing uncontrollable negative events, an organism stops trying to change its situation even when escape becomes possible.\n\nThe implications extended far beyond dogs. Seligman proposed that learned helplessness was a key model for understanding human depression. People who experience repeated failures or uncontrollable negative events may develop a pervasive belief that their actions don't matter—leading to passivity, sadness, and withdrawal.\n\nThis insight led Seligman to develop new therapeutic approaches. Crucially, he discovered that learned helplessness could be reversed through \"immunization\"—earlier experiences of mastery and control. This eventually led him to found the field of positive psychology, studying not just what makes people sick but what makes them flourish.",
    "contentKa": "1967 წელს, მარტინ სელიგმანმა ექსპერიმენტი ჩაატარა ძაღლებზე, რომლებსა჊ ელექტროშოკისგან თავის დაღწევა არ შეეძლოთ. მოგვიანებით მათ თავის დაღწევა჊ შეეძლოთ, მაგრამ არ სცადეს. სელიგმანმა ამას \"სწავლილი უძლურობა\" უწოდა და ეს დეპრესიის გაგების მოდელად იქ჊ა. მოგვიანებით მან პოზიტიური ფსიქოლოგია დააარსა.",
    "moral": "Repeated failure can teach us to stop trying—but helplessness can be unlearned. Experiences of mastery and control can reverse it.",
    "moralKa": "განმეორებულმა წარუმატებებმა შეიძლება გვასწავლოს დანებდეს, მაგრამ უძლურობას გადასწავლა შეიძლება.",
    "titleRu": "Селигман и сдавшиеся собаки",
    "moralAz": "Təkrarlanan uğursuzluqlar bizə cəhd etməyi dayandırmağı öyrədə bilər, lakin acizlik öyrənilə bilər. Ustalıq və nəzarət təcrübələri onu geri qaytara bilər.",
    "moralRu": "Повторяющиеся неудачи могут научить нас перестать пытаться, но от беспомощности можно отучиться. Опыт мастерства и контроля может обратить это вспять.",
    "moralHy": "Կրկնվող ձախողումները կարող են սովորեցնել մեզ դադարեցնել փորձերը, բայց անօգնականությունը կարող է չսովորել: Վարպետության և վերահսկողության փորձը կարող է շրջել այն:",
    "titleHy": "Սելիգմանը և շները, ովքեր հանձնվեցին",
    "contentHy": "1967թ.-ին Մարտին Սելիգմանը և Սթիվեն Մայերը Փենսիլվանիայի համալսարանի ասպիրանտներ էին, որոնք ուսումնասիրություններ էին կատարում ուսման վերաբերյալ: Նրանց փորձը պատահաբար կբացահայտեր հոգեբանության ամենակարևոր հասկացություններից մեկը:\n\nՓորձը ունեցել է շների երեք խումբ. 1-ին խումբը ստացել է թեթև էլեկտրական ցնցումներ, որոնք կարող էին դադարեցնել՝ սեղմելով վահանակը իրենց քթով: 2-րդ խումբը ստացավ նույն ցնցումները, բայց չկարողացավ դրանք կանգնեցնել. նրանք «լծվեցին» 1-ին խմբին՝ ստանալով ցնցումների ճիշտ նույն օրինաչափությունը՝ անկախ նրանց արածից: 3-րդ խումբն ընդհանրապես ցնցումներ չի ստացել:\n\nԱվելի ուշ բոլոր երեք խմբերը տեղադրվեցին մաքոքային տուփի մեջ՝ մի խցիկ, որը բաժանված էր ցածր արգելքով, որի վրայով շները հեշտությամբ կարող էին ցատկել։ Ցնցումները հասցվել են մի կողմից, և շներին պարզապես անհրաժեշտ է եղել ցատկել մյուս կողմ՝ փախչելու համար:\n\n1-ին և 3-րդ խմբերն արագ սովորեցին ցատկել արգելապատնեշը: Բայց 2-րդ խումբը՝ շները, որոնք նախկինում չէին կարողանում փախչել, նույնիսկ չփորձեցին: Նրանք պառկեցին, նվնվացին և պասիվ ընդունեցին ցնցումը։ Նրանց երկու երրորդը փախչելու փորձեր չարեցին, չնայած որ պատնեշը հենց այնտեղ էր։\n\nՍելիգմանը սա անվանեց «սովորած անօգնականություն»՝ այն վիճակը, երբ անկառավարելի բացասական իրադարձություններ ապրելուց հետո օրգանիզմը դադարում է փորձել փոխել իր իրավիճակը, նույնիսկ երբ հնարավոր է դառնում փախուստը:\n\nՀետևանքները շատ ավելի հեռու էին շներից: Սելիգմանը առաջարկեց, որ սովորած անօգնականությունը մարդկային դեպրեսիան հասկանալու հիմնական մոդելն է: Մարդիկ, ովքեր ունենում են կրկնվող անհաջողություններ կամ անկառավարելի բացասական իրադարձություններ, կարող են զարգացնել համատարած համոզմունք, որ իրենց գործողությունները նշանակություն չունեն, ինչը հանգեցնում է պասիվության, տխրության և հեռանալու:\n\nԱյս պատկերացումը ստիպեց Սելիգմանին մշակել նոր թերապևտիկ մոտեցումներ: Կարևորն այն է, որ նա բացահայտեց, որ սովորած անօգնականությունը կարող է շրջվել «իմունիզացիայի» միջոցով՝ յուրացման և վերահսկման ավելի վաղ փորձառությունների միջոցով: Սա, ի վերջո, ստիպեց նրան հիմնել դրական հոգեբանության ոլորտը՝ ուսումնասիրելով ոչ միայն այն, ինչն է մարդկանց հիվանդացնում, այլ այն, ինչը նրանց ծաղկում է դարձնում:",
    "titleAz": "Seligman və imtina edən itlər",
    "contentAz": "1967-ci ildə Martin Seligman və Steven Maier Pensilvaniya Universitetində öyrənmə üzrə tədqiqat aparan aspirant idilər. Onların təcrübəsi təsadüfən psixologiyanın ən vacib anlayışlarından birini ortaya çıxaracaqdı.\n\nTəcrübədə üç qrup it var idi. 1-ci qrup burunları ilə panelə basaraq dayandıra bildikləri yüngül elektrik şoku aldılar. 2-ci qrup eyni zərbələri aldı, lakin onları dayandırmaq üçün heç bir yol yox idi - onlar 1-ci qrupa \"boyunduruldular\" və nə etmələrindən asılı olmayaraq eyni zərbə modelini aldılar. 3-cü qrup heç bir zərbə almadı.\n\nDaha sonra hər üç qrup itlərin asanlıqla tullana bildiyi alçaq bir maneə ilə bölünmüş bir kameraya yerləşdirildi. Zərbələr bir tərəfə çatdırıldı və itlər qaçmaq üçün sadəcə digər tərəfə tullanmalı idi.\n\n1 və 3-cü qruplar sədddən tullanmağı tez öyrəndilər. Lakin 2-ci qrup - əvvəllər qaça bilməyən itlər - cəhd belə etmədilər. Onlar uzandılar, sızıldadılar və şoku passiv qəbul etdilər. Onların üçdə ikisi maneənin tam orada olmasına baxmayaraq, qaçmağa cəhd etməyib.\n\nSeliqman bunu \"öyrənilmiş çarəsizlik\" adlandırdı - orqanizmin idarəolunmaz neqativ hadisələrlə qarşılaşdıqdan sonra hətta qaçmaq mümkün olduqda belə vəziyyətini dəyişməyə cəhd etməyi dayandırdığı vəziyyət.\n\nNəticələr itlərdən çox kənara çıxdı. Seligman, öyrənilmiş çarəsizliyin insan depressiyasını anlamaq üçün əsas model olduğunu təklif etdi. Dəfələrlə uğursuzluqlar və ya idarəolunmaz neqativ hadisələrlə qarşılaşan insanlar, hərəkətlərinin heç bir əhəmiyyət kəsb etmədiyinə dair geniş bir inam inkişaf etdirə bilər - passivliyə, kədərə və geri çəkilməyə səbəb olur.\n\nBu fikir Seligmanı yeni terapevtik yanaşmalar inkişaf etdirməyə vadar etdi. Əsas odur ki, o, öyrənilmiş çarəsizliyin “immunizasiya” yolu ilə geri qaytarıla biləcəyini kəşf etdi - əvvəlki mənimsəmə və nəzarət təcrübələri. Bu, nəhayət, onu müsbət psixologiya sahəsini tapmağa vadar etdi, insanları nəinki xəstələndirdiyini, həm də onları çiçəkləndirən şeyi öyrəndi.",
    "contentRu": "В 1967 году Мартин Селигман и Стивен Майер были аспирантами Пенсильванского университета и проводили исследования в области обучения. Их эксперимент случайно раскрыл одну из самых важных концепций психологии.\n\nВ эксперименте участвовали три группы собак. Группа 1 получила легкий удар током, который они могли остановить, нажав носом на панель. Группа 2 получила те же самые потрясения, но не имела возможности их остановить — они были «привязаны» к Группе 1, получая точно такую ​​же схему потрясений, независимо от того, что они делали. Группа 3 вообще не подвергалась никаким потрясениям.\n\nПозже все три группы были помещены в челночный бокс — камеру, разделенную невысоким барьером, через который собаки могли легко перепрыгнуть. Удары наносились в одну сторону, и собакам просто нужно было перепрыгнуть на другую сторону, чтобы спастись.\n\nГруппы 1 и 3 быстро научились перепрыгивать барьер. Но группа 2 — собаки, ранее не сумевшие убежать, — даже не попыталась. Они легли, хныкали и пассивно принимали шок. Две трети из них не пытались бежать, хотя барьер был тут же.\n\nСелигман назвал это «выученной беспомощностью» — состоянием, в котором после переживания неконтролируемых негативных событий организм перестает пытаться изменить свою ситуацию, даже когда бегство становится возможным.\n\nПоследствия распространялись далеко за пределы собак. Селигман предположил, что выученная беспомощность является ключевой моделью для понимания человеческой депрессии. У людей, которые сталкиваются с повторяющимися неудачами или неконтролируемыми негативными событиями, может развиться всепроникающее убеждение, что их действия не имеют значения, что приводит к пассивности, печали и замкнутости.\n\nЭто понимание побудило Селигмана разработать новые терапевтические подходы. Что особенно важно, он обнаружил, что выученную беспомощность можно обратить вспять посредством «иммунизации» — более раннего опыта господства и контроля. В конечном итоге это привело его к созданию области позитивной психологии, изучающей не только то, что делает людей больными, но и то, что помогает им процветать."
  },
  {
    "id": 9,
    "title": "The Case of H.M.: A Life Without Memory",
    "titleKa": "H.M.-ის შემთხვევა: ცხოვრება მეხსიერების გარეშე",
    "chapterId": 7,
    "icon": "mdi:head-question-outline",
    "content": "Henry Gustav Molaison—known for decades in scientific literature only as \"H.M.\" to protect his privacy—is perhaps the most studied individual in the history of neuroscience. His story begins with tragedy and becomes a cornerstone of memory research.\n\nH.M. suffered from severe, debilitating epilepsy that began after a bicycle accident at age seven. By his mid-twenties, the seizures had become so frequent and violent that he could not hold a job or live independently.\n\nIn 1953, neurosurgeon William Beecher Scoville performed an experimental operation. He removed large portions of H.M.'s medial temporal lobes bilaterally—including most of his hippocampus on both sides.\n\nThe surgery was a medical success: the seizures were dramatically reduced. But the side effect was devastating. H.M. could no longer form new long-term memories. He could remember events from his childhood, his parents' names, and facts from before the surgery. But anything that happened after 1953 vanished within minutes.\n\nH.M. would read the same magazine over and over, enjoying it fresh each time. He could not recognize the researchers who visited him daily for years. Every day, his father's death was news to him again. He described his existence as \"like waking from a dream... every day is alone in itself.\"\n\nYet H.M.'s memory was not entirely destroyed. He could learn new motor skills—like tracing a star in a mirror—and improve with practice, even though he had no memory of having practiced. This proved that different types of memory (declarative vs. procedural) involve different brain systems.\n\nH.M. cooperated with researchers for over 50 years until his death in 2008. His brain was donated to science, sliced into 2,401 thin sections, and digitized for future study. His case single-handedly established the hippocampus as critical for memory formation and reshaped our understanding of how memories are made.",
    "contentKa": "ჰენრი მოლეიზონი (H.M.) ნეირომეცნიერების ისტორიაში ყველაზე შესწავლილი ადამიანია. 1953 წელს ეპილეფსიის სამკურნალოდ, ქირურგმა ჰიპოკამპი ამოაჭრა. კრუნჩხები შემცირდა, მაგრამ ახალი გრძელვადიანი მოგონებების ჩამოყალიბება ვერ შეძლო. მისმა შემთხვევამ დაამტკიცა, რომ ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია.",
    "moral": "The hippocampus is critical for memory formation—and different types of memory involve separate brain systems.",
    "moralKa": "ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია, და მეხსიერების სხვადასხვა ტიპები სხვადასხვა ტვინის სისტემებს იყენებს.",
    "titleRu": "Дело Х.М.: жизнь без памяти",
    "moralAz": "Hipokampus yaddaşın formalaşması üçün vacibdir və müxtəlif yaddaş növləri ayrı beyin sistemlərini əhatə edir.",
    "moralHy": "Հիպոկամպը կարևոր նշանակություն ունի հիշողության ձևավորման համար, և հիշողության տարբեր տեսակներ ներառում են ուղեղի առանձին համակարգեր:",
    "titleHy": "Հ.Մ.-ի գործը՝ կյանք առանց հիշողության",
    "moralRu": "Гиппокамп имеет решающее значение для формирования памяти, а разные типы памяти задействуют отдельные системы мозга.",
    "contentRu": "Генри Густав Молесон, десятилетиями известный в научной литературе только как «Е.М.» чтобы защитить свою частную жизнь, — пожалуй, самый изученный человек в истории нейробиологии. Его история начинается с трагедии и становится краеугольным камнем исследований памяти.\n\nХ.М. страдал от тяжелой, изнурительной эпилепсии, которая началась после велосипедной аварии в возрасте семи лет. К двадцати годам припадки стали настолько частыми и сильными, что он не мог ни работать, ни жить самостоятельно.\n\nВ 1953 году нейрохирург Уильям Бичер Сковилл провел экспериментальную операцию. Он удалил большие части медиальных височных долей Х. М. с обеих сторон, включая большую часть гиппокампа с обеих сторон.\n\nОперация прошла с медицинской точки зрения успешно: приступы резко уменьшились. Но побочный эффект был разрушительным. Х.М. больше не мог формировать новые долговременные воспоминания. Он мог вспомнить события из своего детства, имена своих родителей и факты, произошедшие до операции. Но все, что произошло после 1953 года, исчезло за считанные минуты.\n\nХ.М. читал один и тот же журнал снова и снова, каждый раз наслаждаясь его свежестью. Он не мог узнать исследователей, которые навещали его ежедневно в течение многих лет. Каждый день смерть отца снова была для него новостью. Он описывал свое существование как «как пробуждение ото сна… каждый день сам по себе одинок».\n\nИ все же память Х.М. не была полностью уничтожена. Он мог освоить новые двигательные навыки — например, рисовать звезду в зеркале — и совершенствоваться по мере практики, хотя у него не было воспоминаний о тренировках. Это доказало, что разные типы памяти (декларативная и процедурная) задействуют разные системы мозга.\n\nХ.М. сотрудничал с исследователями более 50 лет до своей смерти в 2008 году. Его мозг был передан науке, нарезан на 2401 тонкий срез и оцифрован для будущего изучения. Его случай единолично доказал, что гиппокамп играет решающую роль в формировании памяти, и изменил наше понимание того, как создаются воспоминания.",
    "contentHy": "Հենրի Գուստավ Մոլայսոնը, որը տասնամյակներ շարունակ գիտական ​​գրականության մեջ հայտնի է միայն «Հ.Մ. պաշտպանել իր գաղտնիությունը, թերևս ամենաշատ ուսումնասիրված անհատն է նյարդագիտության պատմության մեջ: Նրա պատմությունը սկսվում է ողբերգությամբ և դառնում հիշողության հետազոտության հիմնաքար:\n\nՀ.Մ. տառապում էր ծանր, թուլացնող էպիլեպսիայով, որը սկսվել էր յոթ տարեկանում հեծանվային վթարից հետո: Նրա քսան տարեկանների կեսերին նոպաներն այնքան հաճախակի ու կատաղի էին դարձել, որ նա չէր կարող աշխատանք ունենալ կամ ինքնուրույն ապրել:\n\n1953 թվականին նյարդավիրաբույժ Ուիլյամ Բիչեր Սքովիլը փորձարարական վիրահատություն է կատարել։ Նա երկկողմանի հեռացրել է Հ.Մ.-ի միջին ժամանակային բլթերի մեծ մասը՝ ներառյալ նրա հիպոկամպի մեծ մասը երկու կողմերից:\n\nՎիրահատությունը բժշկական հաջողություն ունեցավ. նոպաները կտրուկ նվազեցին: Բայց կողմնակի ազդեցությունը կործանարար էր: Հ.Մ. այլևս չէր կարող նոր երկարաժամկետ հիշողություններ ձևավորել: Նա կարող էր հիշել իր մանկության դեպքերը, ծնողների անունները և փաստեր վիրահատությունից առաջ: Բայց այն ամենը, ինչ տեղի ունեցավ 1953 թվականից հետո, անհետացավ րոպեների ընթացքում:\n\nՀ.Մ. կարդում էր նույն ամսագիրը նորից ու նորից՝ ամեն անգամ թարմ վայելելով այն: Նա չէր կարողանում ճանաչել այն հետազոտողներին, ովքեր տարիներ շարունակ այցելում էին իրեն։ Ամեն օր հոր մահը նորից նորություն էր նրա համար։ Նա նկարագրել է իր գոյությունը որպես «երազից արթնանալու նման... ամեն օր ինքնին մենակ է»:\n\nՍակայն Հ.Մ.-ի հիշողությունն ամբողջությամբ չի ոչնչացվել։ Նա կարող էր սովորել նոր շարժիչ հմտություններ, օրինակ՝ աստղին հայելու մեջ հետագծելը, և կատարելագործվել պրակտիկայի ընթացքում, թեև նա չէր հիշում, որ մարզվել է: Սա ապացուցեց, որ հիշողության տարբեր տեսակներ (դեկլարատիվ ընդդեմ ընթացակարգային) ներառում են ուղեղի տարբեր համակարգեր:\n\nՀ.Մ. Ավելի քան 50 տարի համագործակցել է հետազոտողների հետ մինչև իր մահը 2008թ.: Նրա ուղեղը նվիրաբերվել է գիտությանը, կտրատվել 2401 բարակ հատվածների և թվայնացվել հետագա ուսումնասիրության համար: Նրա դեպքը միայնակ հաստատեց հիպոկամպը որպես կարևոր նշանակություն հիշողության ձևավորման համար և վերափոխեց մեր պատկերացումները, թե ինչպես են ստեղծվում հիշողությունները:",
    "titleAz": "H.M.-nin işi: Yaddaşsız bir həyat",
    "contentAz": "Henry Gustav Molaison — onilliklər boyu elmi ədəbiyyatda yalnız \"H.M.\" kimi tanınır. şəxsi həyatını qorumaq - bəlkə də nevrologiya tarixində ən çox öyrənilmiş fərddir. Onun hekayəsi faciə ilə başlayır və yaddaş tədqiqatının təməl daşına çevrilir.\n\nH.M. yeddi yaşında velosiped qəzasından sonra başlayan ağır, zəiflədici epilepsiyadan əziyyət çəkirdi. İyirmi yaşlarının ortalarında qıcolmalar o qədər tez-tez və şiddətli olurdu ki, o, nə işlə məşğul ola, nə də müstəqil yaşaya bildi.\n\n1953-cü ildə neyrocərrah William Bicher Scoville eksperimental əməliyyat keçirdi. O, H.M.-nin medial temporal loblarının böyük hissələrini, o cümlədən hər iki tərəfdəki hipokampusunun böyük hissəsini ikitərəfli şəkildə çıxardı.\n\nƏməliyyat tibbi uğur idi: qıcolmalar kəskin şəkildə azaldı. Ancaq yan təsir dağıdıcı oldu. H.M. artıq yeni uzunmüddətli xatirələr formalaşdıra bilmirdi. Uşaqlığından baş verənləri, valideynlərinin adlarını, əməliyyatdan əvvəlki faktları xatırlaya bilirdi. Lakin 1953-cü ildən sonra baş verən hər şey bir neçə dəqiqə ərzində yox oldu.\n\nH.M. eyni jurnalı təkrar-təkrar oxuyar, hər dəfə təzədən zövq alırdı. İllər boyu ona hər gün gələn tədqiqatçıları tanıya bilmirdi. Hər gün atasının ölümü onun üçün yenidən xəbər olurdu. O, varlığını “yuxudan oyanmaq kimi... hər gün öz-özlüyündə təkdir” kimi təsvir edirdi.\n\nBununla belə, H.M.-nin yaddaşı tamamilə məhv edilməmişdir. O, güzgüdə ulduzu izləmək kimi yeni motor bacarıqlarını öyrənə və məşq etdiyini xatırlamasa da, təcrübə ilə təkmilləşə bilərdi. Bu sübut etdi ki, müxtəlif yaddaş növləri (deklarativ və prosessual) müxtəlif beyin sistemlərini əhatə edir.\n\nH.M. 2008-ci ildə ölümünə qədər 50 ildən çox tədqiqatçılarla əməkdaşlıq etdi. Onun beyni elmə verildi, 2401 nazik hissəyə kəsildi və gələcək tədqiqatlar üçün rəqəmsallaşdırıldı. Onun işi tək başına hipokampusun yaddaşın formalaşması üçün kritik olduğunu təyin etdi və xatirələrin necə qurulduğuna dair anlayışımızı yenidən formalaşdırdı."
  },
  {
    "id": 10,
    "title": "Rosenhan's \"Being Sane in Insane Places\"",
    "titleKa": "როზენჰანის \"გონიერება გიჟურ ადგილებში\"",
    "chapterId": 14,
    "icon": "mdi:hospital-building",
    "content": "In 1973, Stanford psychologist David Rosenhan published one of the most provocative and influential studies in the history of psychiatry: \"On Being Sane in Insane Places.\"\n\nRosenhan recruited eight mentally healthy volunteers—including himself, a psychology graduate student, a pediatrician, a psychiatrist, a painter, and a housewife—to present themselves at twelve different psychiatric hospitals across the United States.\n\nEach pseudo-patient reported a single symptom: they heard a voice saying \"empty,\" \"hollow,\" or \"thud.\" They gave false names and occupations but otherwise described their life histories and emotional states truthfully. All were diagnosed with psychiatric disorders (most commonly schizophrenia) and admitted.\n\nOnce inside, all pseudo-patients immediately stopped reporting any symptoms and behaved completely normally. They took notes openly, cooperated with staff, and told doctors they felt fine. Yet not a single one was identified as healthy by staff.\n\nTheir hospitalizations lasted from 7 to 52 days, averaging 19 days. When discharged, they received the diagnosis \"schizophrenia, in remission\"—meaning the label stuck even upon release.\n\nIronically, real patients often recognized the pseudo-patients were not mentally ill. \"You're not crazy. You're a journalist or a professor,\" they said. But staff never questioned the diagnoses.\n\nIn a follow-up study, Rosenhan told a hospital that pseudo-patients would attempt admission over the next three months. Staff confidently identified 41 patients as impostors. In reality, Rosenhan had sent no one.\n\nThe study's conclusion was searing: psychiatric institutions cannot reliably distinguish the sane from the insane. Diagnostic labels, once applied, color all subsequent perception and behavior of both patients and staff. The study contributed to major reforms in psychiatric diagnosis and the development of more rigorous diagnostic criteria.",
    "contentKa": "1973 წელს, სტენფორდის ფსიქოლოგმა როზენჰანმა 8 ჯანსაღი მოხალისე 12 ფსიქიატრიულ საავადმყოფოში გაგზავნა. მათ შიზოფრენია დაუსვეს და 7-დან 52 დღემდე დარჩნენ. არავინ პერსონალმა ვერ ამოიცნო ისინი ჯანსაღად. ეს კვლევამ დიაგნოსტიკის სერიოზულ რეფორმებს შეუწყო.",
    "moral": "Labels are powerful—once categorized, everything is seen through that lens. Psychiatric diagnosis must be approached with extreme rigor and humility.",
    "moralKa": "იარლიყები ძალიან ძლიერია—ერთხელ კატეგორიზებული, ყველაფერი ამ ლინზით აღიქმება.",
    "titleRu": "Розенхан «Быть ​​в здравом уме в безумных местах».",
    "moralAz": "Etiketlər güclüdür - kateqoriyalara bölündükdən sonra hər şey bu obyektivdən görünür. Psixiatrik diaqnoza həddindən artıq ciddilik və təvazökarlıqla yanaşmaq lazımdır.",
    "moralHy": "Պիտակները հզոր են. դասակարգվելուց հետո ամեն ինչ երևում է այդ ոսպնյակի միջով: Հոգեբուժական ախտորոշմանը պետք է մոտենալ ծայրահեղ խստությամբ և խոնարհությամբ:",
    "titleHy": "Ռոզենհանի «Մեղսունակ լինել խելագար վայրերում»",
    "contentHy": "1973 թվականին Սթենֆորդի հոգեբան Դեյվիդ Ռոզենհանը հրապարակեց հոգեբուժության պատմության մեջ ամենասադրիչ և ազդեցիկ հետազոտություններից մեկը՝ «Խելագար վայրերում ողջախոհ լինելու մասին»։\n\nՌոզենհանը հավաքագրեց ութ հոգեպես առողջ կամավորների, այդ թվում՝ ինքը՝ հոգեբանության ասպիրանտ, մանկաբույժ, հոգեբույժ, նկարիչ և տնային տնտեսուհի, որպեսզի ներկայանան Միացյալ Նահանգների տասներկու տարբեր հոգեբուժարաններում:\n\nՅուրաքանչյուր կեղծ հիվանդ հայտնել է մեկ ախտանիշ. նրանք լսել են մի ձայն, որն ասում էր «դատարկ», «խոռոչ» կամ «դուխ»: Նրանք կեղծ անուններ և զբաղմունքներ էին տալիս, բայց այլ կերպ ճշմարիտ նկարագրում էին իրենց կյանքի պատմությունն ու հուզական վիճակները: Բոլորի մոտ ախտորոշվել են հոգեկան խանգարումներ (առավել հաճախ՝ շիզոֆրենիա) և ընդունվել:\n\nՆերս մտնելուց հետո բոլոր պսևդո-հիվանդներն անմիջապես դադարեցրին որևէ ախտանիշ հայտնել և իրենց լիովին նորմալ պահեցին: Նրանք բացահայտ նշումներ էին անում, համագործակցում անձնակազմի հետ և բժիշկներին ասացին, որ իրենց լավ են զգում: Այնուամենայնիվ, անձնակազմի կողմից ոչ մեկը առողջ չի ճանաչվել:\n\nՆրանց հոսպիտալացումները տեւել են 7-ից 52 օր՝ միջինը 19 օր։ Դուրս գրվելիս նրանք ստացել են «շիզոֆրենիա, ռեմիսիայի մեջ» ախտորոշումը, ինչը նշանակում է, որ պիտակը կպչում է նույնիսկ ազատ արձակվելուց հետո:\n\nՃակատագրի հեգնանքով, իրական հիվանդները հաճախ ճանաչում էին, որ կեղծ հիվանդները հոգեկան հիվանդ չեն: «Դու գիժ չես, դու լրագրող ես կամ պրոֆեսոր»,- ասացին նրանք։ Բայց անձնակազմը երբեք կասկածի տակ չի դրել ախտորոշումները:\n\nՀետագա ուսումնասիրության ընթացքում Ռոզենհանը հիվանդանոցում ասաց, որ կեղծ հիվանդները կփորձեն ընդունելություն առաջիկա երեք ամիսների ընթացքում: Անձնակազմը վստահորեն հայտնաբերել է 41 հիվանդի որպես խաբեբաներ: Իրականում Ռոզենհանը ոչ ոքի չէր ուղարկել։\n\nՀետազոտության եզրակացությունը սարսափելի էր. հոգեբուժական հաստատությունները չեն կարող հուսալիորեն տարբերել ողջախոհներին խելագարներից: Ախտորոշիչ պիտակները, կիրառվելուց հետո, գունավորում են ինչպես հիվանդների, այնպես էլ անձնակազմի բոլոր հետագա ընկալումն ու վարքը: Ուսումնասիրությունը նպաստեց հոգեբուժական ախտորոշման հիմնական բարեփոխումներին և ավելի խիստ ախտորոշիչ չափանիշների մշակմանը:",
    "moralRu": "Ярлыки обладают мощной силой: после того, как они классифицированы, все можно увидеть через эту призму. К психиатрическому диагнозу необходимо подходить с предельной строгостью и смирением.",
    "titleAz": "Rosenhanın \"Dəli yerlərdə ağlı başında olmaq\"",
    "contentRu": "В 1973 году психолог из Стэнфорда Дэвид Розенхан опубликовал одно из самых провокационных и влиятельных исследований в истории психиатрии: «О том, как быть в здравом уме в безумных местах».\n\nРозенхан набрал восемь психически здоровых добровольцев, в том числе себя самого, аспиранта психологии, педиатра, психиатра, художника и домохозяйку, чтобы они явились в двенадцать различных психиатрических больниц по всей территории Соединенных Штатов.\n\nКаждый псевдопациент сообщал об одном симптоме: он слышал голос, говорящий «пусто», «пусто» или «стук». Они называли вымышленные имена и род занятий, но в остальном правдиво описывали историю своей жизни и эмоциональное состояние. У всех были диагностированы психические расстройства (чаще всего шизофрения) и госпитализированы.\n\nОказавшись внутри, все псевдопациенты сразу же перестали сообщать о каких-либо симптомах и вели себя совершенно нормально. Они открыто делали записи, сотрудничали с персоналом и говорили врачам, что чувствуют себя хорошо. Однако ни один из них не был признан персоналом здоровым.\n\nИх госпитализация длилась от 7 до 52 дней, в среднем 19 дней. При выписке им поставили диагноз «шизофрения в стадии ремиссии», то есть ярлык приклеился даже после освобождения.\n\nПо иронии судьбы, реальные пациенты часто признавали, что псевдопациенты не были психически больными. «Ты не сумасшедший. Ты журналист или профессор», — сказали они. Но сотрудники никогда не подвергали сомнению диагнозы.\n\nВ ходе последующего исследования Розенхан сообщил больнице, что псевдопациенты будут пытаться госпитализироваться в течение следующих трех месяцев. Персонал уверенно опознал 41 пациента как самозванцев. На самом деле Розенхан никого не послал.\n\nВывод исследования был ошеломляющим: психиатрические учреждения не могут достоверно отличить здравомыслящих от невменяемых. Диагностические ярлыки, однажды примененные, определяют все последующее восприятие и поведение как пациентов, так и персонала. Исследование способствовало крупным реформам в психиатрической диагностике и разработке более строгих диагностических критериев.",
    "contentAz": "1973-cü ildə Stenford psixoloqu David Rosenhan psixiatriya tarixindəki ən təxribatçı və təsirli araşdırmalardan birini nəşr etdi: \"Dəli yerlərdə ağlı başında olmaq haqqında\".\n\nRosenhan, ABŞ-da on iki müxtəlif psixiatriya xəstəxanasında özlərini təqdim etmək üçün özü, psixologiya aspirantı, pediatr, psixiatr, rəssam və ev xanımı daxil olmaqla səkkiz əqli cəhətdən sağlam könüllü işə götürdü.\n\nHər bir psevdo-xəstə tək bir simptom haqqında məlumat verdi: onlar \"boş\", \"boş\" və ya \"tünd\" deyən bir səs eşitdilər. Onlar yalançı adlar və peşələr verdilər, lakin başqa cür öz həyat tarixçələrini və emosional vəziyyətlərini doğru şəkildə təsvir etdilər. Hamısına psixiatrik pozğunluqlar (ən çox şizofreniya) diaqnozu qoyulub və qəbul edilib.\n\nİçəri daxil olduqdan sonra bütün psevdo-xəstələr dərhal hər hansı simptomları bildirməyi dayandırdılar və özlərini tamamilə normal apardılar. Onlar açıq şəkildə qeydlər apardılar, işçilərlə əməkdaşlıq etdilər və həkimlərə özlərini yaxşı hiss etdiklərini söylədilər. Bununla belə, heyət tərəfindən heç birinin sağlam olduğu müəyyən edilmədi.\n\nOnların xəstəxanaya yerləşdirilməsi orta hesabla 19 gün olmaqla 7 gündən 52 günə qədər davam edib. Buraxıldıqda, onlar \"şizofreniya, remissiyada\" diaqnozunu aldılar, yəni etiket buraxıldıqda belə yapışdırıldı.\n\nQəribədir ki, real xəstələr tez-tez psevdo-xəstələrin ruhi xəstə olmadığını tanıyırdılar. “Sən dəli deyilsən, jurnalistsən, professorsan” dedilər. Lakin işçilər heç vaxt diaqnozları şübhə altına almadılar.\n\nSonrakı araşdırmada Rosenhan bir xəstəxanaya dedi ki, psevdo-xəstələr növbəti üç ay ərzində qəbula cəhd edəcəklər. İşçilər 41 xəstəni inamla saxtakar kimi tanıyıblar. Əslində, Rosenhan heç kimi göndərməmişdi.\n\nTədqiqatın nəticəsi dəhşətli idi: psixiatriya institutları sağlam düşüncəli ilə dəlini etibarlı şəkildə ayıra bilmir. Diaqnostik etiketlər tətbiq edildikdən sonra həm xəstələrin, həm də işçilərin bütün sonrakı qavrayışlarını və davranışlarını rəngləndirir. Tədqiqat psixiatrik diaqnostikada əsas islahatlara və daha ciddi diaqnostik meyarların hazırlanmasına kömək etdi."
  }
]dir",
          "Lazımsız məşq edin"
        ];

export const STORIES: Story[] = [
  {
    "id": 1,
    "title": "Pavlov's Accidental Discovery",
    "titleKa": "პავლოვის შემთხვევითი აღმოჩენა",
    "chapterId": 6,
    "icon": "mdi:bell-ring-outline",
    "content": "In the 1890s, Russian physiologist Ivan Pavlov was conducting research on the digestive systems of dogs at the Institute of Experimental Medicine in St. Petersburg. His work was meticulous—he had surgically implanted tubes in dogs' cheeks to precisely measure saliva output when food was presented.\n\nBut something unexpected kept disrupting his carefully controlled experiments. The dogs began salivating before any food appeared. They drooled when they heard the footsteps of the lab assistant. They salivated at the sight of the food bowl, or even when they heard the door open.\n\nRather than dismissing this as a nuisance, Pavlov recognized he had stumbled upon something extraordinary. He called these premature responses \"psychic secretions\" and redesigned his entire research program to study them.\n\nPavlov began systematically pairing a neutral stimulus—a metronome (often misremembered as a bell)—with the presentation of food. After repeated pairings, the dogs would salivate at the sound of the metronome alone, with no food in sight.\n\nHe documented the entire process with scientific rigor: acquisition (learning the association), extinction (unlearning it when food stops coming), spontaneous recovery (the response returning after a rest period), and generalization (responding to similar sounds).\n\nThis accidental discovery became the foundation of classical conditioning and earned Pavlov the Nobel Prize in Physiology in 1904. His work influenced generations of psychologists, from John Watson to modern neuroscientists studying how the brain forms associations.",
    "contentKa": "1890-იან წლებში, რუსი ფიზიოლოგი ივან პავლოვი ძაღლების საჭმლის სისტემას იკვლევდა სანკტ-პეტერბურგში. მან შენიშნა, რომ ძაღლები საკვებს დაიწყებდნენ საკვების გარეშე჊ — ლაბორანტის ნაბიჯების გაგონისას. პავლოვმა ამაში მეტრონომის ხმა საკვებს დაუკავშირა და აღმოაჩინა კლასიკური განპირობება.",
    "moral": "Great discoveries emerge when curious minds pay attention to the unexpected. Pavlov could have ignored the dogs' early salivation, but instead he asked \"why?\" and changed psychology forever.",
    "moralKa": "დიდი აღმოჩენები იბადება, რო჊ ცნობისმოყვარე გონება ყურადღებას მოულოდნელს მიაქცევს.",
    "moralHy": "Մեծ բացահայտումներ են առաջանում, երբ հետաքրքրասեր մտքերը ուշադրություն են դարձնում անսպասելիին: Պավլովը կարող էր անտեսել շների վաղ թքելը, բայց փոխարենը հարցրեց՝ «ինչո՞ւ»։ և ընդմիշտ փոխեց հոգեբանությունը:",
    "contentAz": "1890-cı illərdə rus fizioloqu İvan Pavlov Sankt-Peterburqdakı Eksperimental Tibb İnstitutunda itlərin həzm sistemləri ilə bağlı tədqiqatlar aparırdı. Onun işi vasvası idi - yemək təqdim olunan zaman tüpürcək ifrazını dəqiq ölçmək üçün itlərin yanaqlarına cərrahi yolla borular yerləşdirmişdi.\n\nLakin gözlənilməz bir şey onun diqqətlə idarə olunan təcrübələrini pozmağa davam etdi. Hər hansı bir qida görünməzdən əvvəl itlər tüpürcəyə başladılar. Laborantın ayaq səslərini eşidəndə ağızları sulandı. Yemək qabını görəndə, hətta qapının açıldığını eşidəndə tüpürcək axırdılar.\n\nPavlov bunu bir narahatlıq kimi rədd etmək əvəzinə, qeyri-adi bir şeylə qarşılaşdığını başa düşdü. O, bu erkən cavabları \"psixik ifrazatlar\" adlandırdı və onları öyrənmək üçün bütün tədqiqat proqramını yenidən dizayn etdi.\n\nPavlov sistematik olaraq neytral stimulu - metronomu (çox vaxt zəng kimi xatırlanır) yeməyin təqdimatı ilə birləşdirməyə başladı. Təkrarlanan cütləşmələrdən sonra itlər yalnız metronomun səsinə tüpürcək tökürdülər, heç bir yemək görünmürdü.\n\nO, bütün prosesi elmi ciddiliklə sənədləşdirdi: əldə etmə (assosiasiyanı öyrənmək), məhv olma (yemək gəlməyi dayandırdıqda onu öyrənmə), spontan bərpa (istirahət müddətindən sonra geri qayıdan reaksiya) və ümumiləşdirmə (oxşar səslərə cavab).\n\nBu təsadüfi kəşf klassik kondisionerin təməli oldu və Pavlova 1904-cü ildə Fiziologiya üzrə Nobel Mükafatı qazandırdı. Onun işi Con Uotsondan tutmuş beynin assosiasiyaları necə formalaşdırdığını öyrənən müasir nevroloqlara qədər psixoloqların nəsillərinə təsir etdi.",
    "titleAz": "Pavlovun təsadüfən kəşfi",
    "moralAz": "Maraqlı beyinlər gözlənilməzlərə diqqət yetirdikdə böyük kəşflər ortaya çıxır. Pavlov itlərin erkən tüpürcək ifrazına məhəl qoymaya bilərdi, amma bunun əvəzinə \"niyə?\" və psixologiyanı həmişəlik dəyişdi.",
    "titleRu": "Случайное открытие Павлова",
    "contentHy": "1890-ական թվականներին ռուս ֆիզիոլոգ Իվան Պավլովը Սանկտ Պետերբուրգի Էքսպերիմենտալ բժշկության ինստիտուտում ուսումնասիրություններ էր կատարում շների մարսողական համակարգերի վերաբերյալ: Նրա աշխատանքը բծախնդիր էր. նա վիրաբուժական խողովակներ էր տեղադրել շների այտերին՝ սննդի մատուցման ժամանակ թքի արտազատումը ճշգրիտ չափելու համար:\n\nԲայց ինչ-որ անսպասելի բան շարունակում էր խանգարել նրա մանրակրկիտ վերահսկվող փորձերը: Շները սկսել են թուք արտահոսել նախքան սննդի հայտնվելը: Երբ լսեցին լաբորանտի ոտնաձայները, նրանք թուլացան։ Սննդի ամանի տեսնելուց կամ նույնիսկ երբ լսում էին դռան բացումը, նրանք թքացրին։\n\nՍա անհանգստություն համարելու փոխարեն Պավլովը հասկացավ, որ պատահաբար ինչ-որ արտասովոր բանի է հանդիպել: Նա այս վաղաժամ արձագանքներն անվանեց «հոգեկան սեկրեցներ» և վերամշակեց իր ամբողջ հետազոտական ​​ծրագիրը՝ դրանք ուսումնասիրելու համար:\n\nՊավլովը սկսեց համակարգված կերպով զուգակցել չեզոք գրգռիչը՝ մետրոնոմը (հաճախ սխալ է հիշվում որպես զանգ)՝ սննդի ներկայացման հետ: Բազմիցս զուգավորումներից հետո շները թք էին գալիս մենակ մետրոնոմի ձայնից՝ առանց կերակուրի:\n\nՆա փաստագրեց ողջ գործընթացը գիտական ​​խստությամբ՝ ձեռքբերում (սովորելով ասոցիացիան), վերացում (չսովորել այն, երբ սնունդը դադարում է գալ), ինքնաբուխ վերականգնում (հանգստի շրջանից հետո վերադառնում է պատասխան) ​​և ընդհանրացում (արձագանքելով նմանատիպ հնչյուններին):\n\nԱյս պատահական հայտնագործությունը դարձավ դասական կոնդիցիոներների հիմքը և Պավլովին 1904 թվականին ստացավ Նոբելյան մրցանակ ֆիզիոլոգիայի ոլորտում: Նրա աշխատանքը ազդեց հոգեբանների սերունդների վրա՝ Ջոն Ուոթսոնից մինչև ժամանակակից նյարդաբաններ, որոնք ուսումնասիրում էին, թե ինչպես է ուղեղը ձևավորում ասոցիացիաները:",
    "moralRu": "Великие открытия происходят, когда любознательные умы обращают внимание на неожиданное. Павлов мог бы не обращать внимания на раннее слюноотделение у собак, но вместо этого спросил: «Почему?» и навсегда изменил психологию.",
    "titleHy": "Պավլովի պատահական հայտնագործությունը",
    "contentRu": "В 1890-е годы русский физиолог Иван Павлов проводил исследования пищеварительной системы собак в Институте экспериментальной медицины в Петербурге. Его работа была кропотливой: он хирургическим путем вживлял в щеки собак трубки для точного измерения выделения слюны при подаче еды.\n\nНо что-то неожиданное постоянно мешало его тщательно контролируемым экспериментам. У собак началось выделение слюны еще до того, как появилась еда. У них потекли слюни, когда они услышали шаги лаборанта. У них выделялась слюна при виде миски с едой или даже когда они слышали, как открывается дверь.\n\nВместо того чтобы счесть это неприятностью, Павлов признал, что наткнулся на нечто необычное. Он назвал эти преждевременные реакции «психическими выделениями» и перепроектировал всю свою исследовательскую программу для их изучения.\n\nПавлов начал систематически сочетать нейтральный стимул — метроном (часто ошибочно воспринимаемый как колокольчик) — с представлением еды. После повторных спариваний у собак выделялась слюна только от звука метронома, а еды не было видно.\n\nОн задокументировал весь процесс с научной строгостью: приобретение (обучение ассоциации), угасание (отмена ее, когда еда перестает поступать), спонтанное восстановление (реакция, возвращающаяся после периода отдыха) и генерализация (реакция на похожие звуки).\n\nЭто случайное открытие стало основой классической обусловленности и принесло Павлову Нобелевскую премию по физиологии в 1904 году. Его работа повлияла на поколения психологов, от Джона Ватсона до современных нейробиологов, изучающих, как мозг формирует ассоциации."
  },
  {
    "id": 2,
    "title": "The Story of Phineas Gage",
    "titleKa": "ფინეას გეიჯის ისტორია",
    "chapterId": 3,
    "icon": "fluent:brain-circuit-20-filled",
    "content": "On September 13, 1848, 25-year-old Phineas Gage was working as a railroad construction foreman in Cavendish, Vermont. His crew was blasting rock to clear a path for new rail tracks. Gage's job was to pack explosive powder into drilled holes using a specially made iron tamping rod—43 inches long, 1.25 inches in diameter, and weighing over 13 pounds.\n\nIn a moment of distraction—perhaps he turned to speak to a colleague—Gage struck the iron rod against the rock before sand had been poured as a buffer. The powder ignited. The explosion launched the iron rod like a missile straight through his skull, entering below his left cheekbone and exiting through the top of his head, landing 80 feet away.\n\nAstonishingly, Gage did not die. He was conscious within minutes, able to walk and talk. The local physician, Dr. John Harlow, treated the gruesome wound. Gage physically recovered over the following months, but something fundamental had changed.\n\nBefore the accident, Gage was described as reliable, well-balanced, and a shrewd businessman—\"the most efficient and capable foreman.\" Afterward, his personality was unrecognizable. He became profane, impulsive, disrespectful, and unable to follow through on plans. Friends said he was \"no longer Gage.\"\n\nHis case became one of the most important in neuroscience history. It provided the first strong evidence that specific brain regions—particularly the prefrontal cortex—are responsible for personality, decision-making, and social behavior. Modern neuroimaging has confirmed the rod destroyed much of his left frontal lobe, especially areas involved in emotional regulation and planning.",
    "contentKa": "1848 წელს, ფინეას გეიჯი რკინიგზის მშენებლობის ოსტატი იყო. აფეთქებისას რკინის ღერძი მის თავის ქალაში შევიდა და თავის ზემოდან გამოვიდა. გეიჯი გადარჩა, მაგრამ მისი პიროვნება სრულიად შეიცვალა. ეს შემთხვევა ნეირომეცნიერების ისტორიაში ერთ-ერთი ყველაზე მნიშვნელოვანი გახდა.",
    "moral": "The brain is the seat of personality—damage to specific areas transforms who we are. Gage's case taught us that our sense of self is rooted in biology.",
    "moralKa": "ტვინი პიროვნების სადგურია—კონკრეტული უბნების დაზიანება გვაქ჊ევს სხვა ადამიანებად.",
    "moralAz": "Beyin şəxsiyyətin oturacağıdır - xüsusi sahələrə ziyan vurmaq bizim kim olduğumuzu dəyişir. Gage-in işi bizə öyrətdi ki, mənlik duyğumuz biologiyadan qaynaqlanır.",
    "titleHy": "Ֆինեաս Գեյջի պատմությունը",
    "moralHy": "Ուղեղը անհատականության նստավայրն է. որոշակի տարածքների վնասը փոխում է մեր ով լինելը: Գեյջի դեպքը մեզ սովորեցրեց, որ մեր ինքնազգացողությունը արմատացած է կենսաբանության մեջ:",
    "moralRu": "Мозг — это вместилище личности: повреждение определенных областей меняет то, кем мы являемся. Случай Гейджа научил нас тому, что наше самоощущение коренится в биологии.",
    "titleRu": "История Финеаса Гейджа",
    "contentHy": "1848 թվականի սեպտեմբերի 13-ին 25-ամյա Ֆինես Գեյջը աշխատում էր որպես երկաթուղու շինարարության վարպետ Վերմոնտ նահանգի Քավենդիշ քաղաքում: Նրա անձնակազմը պայթեցնում էր ժայռերը՝ նոր երկաթուղային գծերի համար ճանապարհ բացելու համար: Գեյջի գործն էր պայթուցիկ փոշի փաթեթավորել փորված անցքերի մեջ՝ օգտագործելով հատուկ պատրաստված երկաթե սեղմող ձող՝ 43 դյույմ երկարությամբ, 1,25 դյույմ տրամագծով և 13 ֆունտից ավելի քաշով:\n\nՈւշադրությունը շեղված մի պահի, երևի թե նա շրջվեց, որպեսզի խոսի գործընկերոջ հետ, Գեյջը երկաթե ձողը հարվածեց ժայռին, նախքան ավազը լցնելը որպես բուֆեր: Փոշը բռնկվեց։ Պայթյունը հրթիռի պես երկաթե ձողը արձակեց ուղիղ նրա գանգի միջով, մտնելով ձախ այտոսկրի տակ և դուրս գալով գլխի վերևից՝ վայրէջք կատարելով 80 ոտնաչափ հեռավորության վրա:\n\nԶարմանալի է, որ Գեյջը չի մահացել։ Նա ուշագնաց էր րոպեների ընթացքում, կարողանում էր քայլել և խոսել: Սարսափելի վերքը բուժել է տեղի բժիշկը՝ բժիշկ Ջոն Հարլոուն։ Գեյջը ֆիզիկապես վերականգնվեց հաջորդ ամիսների ընթացքում, բայց ինչ-որ հիմնարար բան փոխվեց:\n\nԴժբախտ պատահարից առաջ Գեյջին նկարագրում էին որպես վստահելի, հավասարակշռված և խորաթափանց գործարար՝ «ամենաարդյունավետ և ընդունակ վարպետ»: Հետո նրա անձը անճանաչելի էր։ Նա դարձավ սրբապիղծ, իմպուլսիվ, անհարգալից և չկարողացավ իրականացնել պլանները: Ընկերներն ասացին, որ նա «այլևս Գեյջը չէ»:\n\nՆրա գործը դարձավ ամենակարևորներից մեկը նյարդագիտության պատմության մեջ: Այն տրամադրեց առաջին ամուր ապացույցն այն մասին, որ ուղեղի հատուկ շրջանները, հատկապես նախաճակատային կեղևը, պատասխանատու են անհատականության, որոշումների կայացման և սոցիալական վարքագծի համար: Ժամանակակից նեյրոպատկերումը հաստատել է, որ ձողը ոչնչացրել է նրա ձախ ճակատային բլթի մեծ մասը, հատկապես այն հատվածները, որոնք ներգրավված են հուզական կարգավորման և պլանավորման մեջ:",
    "contentRu": "13 сентября 1848 года 25-летний Финеас Гейдж работал бригадиром на строительстве железной дороги в Кавендише, штат Вермонт. Его команда взрывала камни, чтобы расчистить путь для новых железнодорожных путей. Работа Гейджа заключалась в том, чтобы засыпать взрывчатый порошок в просверленные отверстия с помощью специально изготовленного железного трамбовочного стержня длиной 43 дюйма, диаметром 1,25 дюйма и весом более 13 фунтов.\n\nВ момент отвлечения — возможно, он повернулся, чтобы поговорить с коллегой, — Гейдж ударил железным стержнем о камень, прежде чем в качестве буфера был насыпан песок. Порошок загорелся. В результате взрыва железный стержень, как ракета, попал прямо ему в череп, вошёл под левую скулу и вышел через макушку головы, приземлившись на расстоянии 80 футов.\n\nУдивительно, но Гейдж не умер. Через несколько минут он пришел в сознание, мог ходить и говорить. Местный врач, доктор Джон Харлоу, обработал ужасную рану. Гейдж физически выздоровел в течение следующих месяцев, но что-то фундаментальное изменилось.\n\nДо аварии Гейджа описывали как надежного, уравновешенного и проницательного бизнесмена — «самого эффективного и способного мастера». После этого его личность стала неузнаваемой. Он стал нечестивцем, импульсивным, неуважительным и неспособным довести до конца свои планы. Друзья сказали, что он «больше не Гейдж».\n\nЕго случай стал одним из самых важных в истории нейробиологии. Это стало первым убедительным доказательством того, что определенные области мозга, особенно префронтальная кора, отвечают за личность, принятие решений и социальное поведение. Современная нейровизуализация подтвердила, что стержень разрушил большую часть его левой лобной доли, особенно области, участвующие в эмоциональной регуляции и планировании.",
    "titleAz": "Phineas Gage-nin Hekayəsi",
    "contentAz": "13 sentyabr 1848-ci ildə 25 yaşlı Phineas Gage Vermont ştatının Cavendish şəhərində dəmir yolu tikintisi üzrə usta işləyirdi. Onun ekipajı yeni dəmir yolu relsləri üçün cığır açmaq üçün qaya partladıb. Gage-nin işi xüsusi hazırlanmış dəmir çubuqdan istifadə edərək qazılmış deliklərə partlayıcı toz yığmaq idi - 43 düym uzunluğunda, 1,25 düym diametrdə və 13 funtdan çox ağırlığında.\n\nDiqqətinin dağıldığı bir anda – bəlkə də həmkarı ilə danışmaq üçün çevrildi – Qeyc bufer kimi qum tökülməmişdən əvvəl dəmir çubuğu qayaya vurdu. Toz alovlandı. Partlayış dəmir çubuğu mərmi kimi birbaşa kəllə sümüyündən atıb, sol yanaq sümüyünün altına girib başının yuxarı hissəsindən çıxıb, 80 fut uzaqlığa düşüb.\n\nTəəccüblüdür ki, Gage ölmədi. Bir neçə dəqiqə ərzində huşunu itirdi, yeriyə və danışa bildi. Yerli həkim, doktor Con Harlou dəhşətli yaranı müalicə etdi. Qeyc sonrakı aylarda fiziki cəhətdən sağaldı, lakin əsaslı bir şey dəyişdi.\n\nQəzadan əvvəl Gage etibarlı, balanslı və fərasətli iş adamı - \"ən səmərəli və bacarıqlı usta\" kimi təsvir edilmişdir. Bundan sonra onun şəxsiyyəti tanınmaz hala gəldi. O, murdar, impulsiv, hörmətsiz oldu və planlarını yerinə yetirə bilmədi. Dostları onun \"artıq Gage olmadığını\" söylədilər.\n\nOnun işi nevrologiya tarixinin ən mühüm hadisələrindən birinə çevrildi. Bu, xüsusi beyin bölgələrinin, xüsusən də prefrontal korteksin şəxsiyyət, qərar qəbul etmə və sosial davranış üçün cavabdeh olduğuna dair ilk güclü sübut təqdim etdi. Müasir neyroimaging çubuqun onun sol frontal hissəsinin çox hissəsini, xüsusən də emosional tənzimləmə və planlaşdırma ilə məşğul olan sahələri məhv etdiyini təsdiqlədi."
  },
  {
    "id": 3,
    "title": "Little Albert and the White Rat",
    "titleKa": "პატარა ალბერტი და თეთრი ვირთხა",
    "chapterId": 6,
    "icon": "mdi:emoticon-cry-outline",
    "content": "In 1920, John B. Watson and Rosalie Rayner conducted one of psychology's most controversial experiments at Johns Hopkins University. Their subject was a 9-month-old infant known as \"Little Albert.\"\n\nAlbert was described as a healthy, stable baby who showed no fear of animals. Watson and Rayner presented him with a white laboratory rat, and Albert reached for it with curiosity and delight. He showed the same calm response to a rabbit, a dog, a monkey, masks, and even burning newspapers.\n\nThen the conditioning began. Each time Albert reached for the white rat, Watson struck a steel bar with a hammer directly behind the infant's head, producing a terrifying noise. Albert burst into tears.\n\nAfter just seven pairings of the rat with the loud noise, Albert's behavior had fundamentally changed. Now, the mere sight of the white rat—without any noise—caused him to cry, crawl away rapidly, and show visible distress.\n\nMore remarkably, his fear generalized. Albert became afraid of a rabbit, a dog, a fur coat, a Santa Claus mask with a white beard, and even cotton wool. Anything white and furry triggered the same terror.\n\nWatson and Rayner never \"unconditioned\" Albert's fear. The experiment was stopped when Albert's mother, a wet nurse at the hospital, left with her child. Albert's true identity remained a mystery for decades. Recent research suggests he was Douglas Merritte, who sadly died of hydrocephalus at age six.\n\nThe experiment proved that emotional responses can be learned through classical conditioning. But it also raised profound ethical questions that eventually led to strict research protections for human subjects.",
    "contentKa": "1920 წელს, ჯონ უოტსონმა და როზალი რეინერმა ჩაატარეს ერთ-ერთი ყველაზე საკამათო ექსპერიმენტი. მათ 9 თვის ჩვილს თეთრი ვირთხა აჩვენეს ხმამაულ საშინელ ხმასთან ერთად. 7 დაწყვილების შემდეგ, ალბერტი ვირთხას ხედავდა ხმის გარეშე჊. ეს ექსპერიმენტი ამტკიცებდა, რომ ემოციები შეიძლება სწავლა.",
    "moral": "Fears can be learned through association. This historic experiment also taught us the importance of ethical guidelines in research.",
    "moralKa": "შიშები შეიძლება ასოციაციით სწავლა. ეს ექსპერიმენტი ეთიკური წესების მნიშვნელობასაც გვასწავლა.",
    "moralHy": "Վախերը կարելի է սովորել ընկերակցության միջոցով: Այս պատմական փորձը նաև մեզ սովորեցրեց հետազոտության մեջ էթիկական ուղեցույցների կարևորությունը:",
    "contentHy": "1920թ.-ին Ջոն Բ. Նրանց առարկան 9 ամսական երեխա էր, որը հայտնի էր որպես «Փոքրիկ Ալբերտ»:\n\nԱլբերտը նկարագրվում էր որպես առողջ, կայուն երեխա, ով չէր վախենում կենդանիներից: Ուոթսոնն ու Ռեյները նրան սպիտակ լաբորատոր առնետ նվիրեցին, իսկ Ալբերտը հետաքրքրությամբ ու հրճվանքով ձեռքը մեկնեց նրան։ Նույն հանգիստ արձագանքը նա ցույց տվեց ճագարին, շանը, կապիկին, դիմակներին և նույնիսկ այրվող թերթերին։\n\nՀետո սկսվեց պայմանավորումը։ Ամեն անգամ, երբ Ալբերտը հասնում էր սպիտակ առնետին, Ուոթսոնը մուրճով հարվածում էր պողպատե ձողին անմիջապես երեխայի գլխի հետևում՝ առաջացնելով սարսափելի աղմուկ: Ալբերտը լաց եղավ։\n\nԸնդամենը յոթ զույգ առնետի բարձր աղմուկից հետո Ալբերտի պահվածքը հիմնովին փոխվել էր։ Այժմ սպիտակ առնետի միայն տեսարանը՝ առանց որևէ աղմուկի, ստիպեց նրան լաց լինել, արագ սողալով հեռանալ և տեսանելի անհանգստություն ցույց տալ։\n\nԱվելի ուշագրավ է, որ նրա վախն ընդհանրացավ։ Ալբերտը վախեցավ նապաստակից, շնից, մուշտակից, սպիտակ մորուքով Ձմեռ պապի դիմակից և նույնիսկ բամբակյա բուրդից։ Ցանկացած սպիտակ և մորթե բան առաջացրել է նույն սարսափը:\n\nՈւոթսոնն ու Ռեյները երբեք «անվերապահ» ​​չեն արել Ալբերտի վախը։ Փորձը դադարեցվեց, երբ Ալբերտի մայրը՝ հիվանդանոցի թաց բուժքույրը, հեռացավ իր երեխայի հետ։ Ալբերտի իրական ինքնությունը տասնամյակներ շարունակ առեղծված մնաց: Վերջին հետազոտությունները ցույց են տալիս, որ նա Դուգլաս Մերիտն էր, որը, ցավոք, մահացել է հիդրոցեֆալուսից վեց տարեկանում:\n\nՓորձը ապացուցեց, որ հուզական արձագանքները կարելի է սովորել դասական պայմանավորման միջոցով: Բայց այն նաև բարձրացրեց խորը բարոյական հարցեր, որոնք ի վերջո հանգեցրին մարդկային սուբյեկտների խիստ հետազոտական ​​պաշտպանությանը:",
    "titleAz": "Balaca Albert və Ağ Siçovul",
    "moralAz": "Qorxular birləşmə yolu ilə öyrənilə bilər. Bu tarixi təcrübə bizə tədqiqatda etik qaydaların vacibliyini də öyrətdi.",
    "titleRu": "Маленький Альберт и Белая Крыса",
    "moralRu": "Страхам можно научиться через ассоциации. Этот исторический эксперимент также научил нас важности этических принципов в исследованиях.",
    "titleHy": "Փոքրիկ Ալբերտը և Սպիտակ առնետը",
    "contentRu": "В 1920 году Джон Б. Уотсон и Розали Рейнер провели один из самых противоречивых экспериментов в области психологии в Университете Джона Хопкинса. Их объектом был 9-месячный ребенок, известный как «Маленький Альберт».\n\nАльберта описывали как здорового, стабильного ребенка, который не боялся животных. Уотсон и Рейнер подарили ему белую лабораторную крысу, и Альберт с любопытством и восторгом потянулся за ней. Он одинаково спокойно реагировал на кролика, собаку, обезьяну, маски и даже горящие газеты.\n\nПотом началось кондиционирование. Каждый раз, когда Альберт тянулся к белой крысе, Ватсон ударял молотком по стальному стержню прямо за головой младенца, производя ужасающий шум. Альберт расплакался.\n\nВсего после семи спариваний крыс с громким шумом поведение Альберта коренным образом изменилось. Теперь один лишь вид белой крысы – без всякого шума – заставлял его плакать, быстро уползать и проявлять видимое беспокойство.\n\nЧто еще более примечательно, его страх распространился. Альберт стал бояться кролика, собаки, шубы, маски Деда Мороза с белой бородой и даже ваты. Все белое и пушистое вызывало тот же ужас.\n\nУотсон и Рейнер никогда не «обезусловливали» страх Альберта. Эксперимент был остановлен, когда мать Альберта, кормилица в больнице, ушла с ребенком. Настоящая личность Альберта оставалась загадкой на протяжении десятилетий. Недавние исследования показывают, что это был Дуглас Мерритт, который, к сожалению, умер от гидроцефалии в возрасте шести лет.\n\nЭксперимент доказал, что эмоциональным реакциям можно научиться с помощью классической обусловленности. Но это также подняло глубокие этические вопросы, которые в конечном итоге привели к строгой защите исследований на людях.",
    "contentAz": "1920-ci ildə John B. Watson və Rosalie Rayner Con Hopkins Universitetində psixologiyanın ən mübahisəli təcrübələrindən birini həyata keçirdilər. Onların mövzusu \"Balaca Albert\" kimi tanınan 9 aylıq körpə idi.\n\nAlbert heyvanlardan qorxmayan sağlam, sabit bir körpə kimi təsvir edilmişdir. Watson və Rayner ona ağ laboratoriya siçovulunu təqdim etdi və Albert maraq və zövqlə ona çatdı. Dovşana, itə, meymuna, maskalara, hətta yanan qəzetlərə də eyni sakit cavabı göstərdi.\n\nSonra kondisioner başladı. Albert hər dəfə ağ siçovula çatanda, Uotson körpənin başının arxasındakı çəkiclə polad çubuqla vurur və dəhşətli səs çıxarırdı. Albert göz yaşlarına boğuldu.\n\nYüksək səs-küylə siçovulların cəmi yeddi cütləşməsindən sonra Albertin davranışı kökündən dəyişdi. İndi ağ siçovulun sadəcə görünüşü - heç bir səs-küy olmadan - onun ağlamasına, sürətlə sürünməsinə və görünən sıxıntı göstərməsinə səbəb oldu.\n\nDaha maraqlısı, onun qorxusu ümumiləşdi. Albert dovşandan, itdən, xəz paltodan, ağ saqqallı Şaxta baba maskasından, hətta pambıq yundan qorxmağa başladı. Ağ və tüklü hər şey eyni qorxuya səbəb olurdu.\n\nWatson və Rayner heç vaxt Albertin qorxusunu \"şərtsiz\" qoymurlar. Xəstəxanada yaş tibb bacısı olan Albertin anası uşağı ilə birlikdə getdikdə təcrübə dayandırıldı. Albertin əsl şəxsiyyəti onilliklər ərzində sirr olaraq qaldı. Son araşdırmalar onun 6 yaşında hidrosefalidən vəfat edən Douglas Merritte olduğunu göstərir.\n\nTəcrübə sübut etdi ki, emosional reaksiyalar klassik kondisioner vasitəsilə öyrənilə bilər. Lakin bu, həm də dərin etik suallar doğurdu ki, nəticədə insan subyektləri üçün ciddi tədqiqat qorunmasına səbəb oldu."
  },
  {
    "id": 4,
    "title": "The Invisible Gorilla",
    "titleKa": "უხილავი გორილა",
    "chapterId": 4,
    "icon": "mdi:eye-off-outline",
    "content": "In 1999, psychologists Daniel Simons and Christopher Chabris designed an experiment that would challenge our most basic assumptions about awareness. They asked participants to watch a short video of six people—three in white shirts, three in black—passing basketballs to each other.\n\nThe task was simple: count the number of passes made by the white-shirted team. Participants focused intently, tracking each throw.\n\nHalfway through the video, something extraordinary happened. A person in a full gorilla costume walked slowly into the center of the frame, faced the camera, thumped its chest, and walked out. The gorilla was visible for a full nine seconds.\n\nWhen asked afterward, roughly half the participants had absolutely no idea a gorilla had appeared. They were shocked when shown the video again. Some refused to believe it was the same video.\n\nThe experiment demonstrated what Simons and Chabris called \"inattentional blindness\"—the failure to notice fully visible but unexpected objects when our attention is focused elsewhere. It's not that our eyes didn't see the gorilla; our brain simply didn't process it because it wasn't relevant to the counting task.\n\nThis research has profound real-world implications. Radiologists can miss tumors on X-rays when focused on something else. Drivers may not see pedestrians when distracted. Eyewitnesses miss critical details during crimes.\n\nThe invisible gorilla reminds us that seeing and noticing are two fundamentally different cognitive processes, and that our confident sense of awareness is largely an illusion.",
    "contentKa": "1999 წელს, ფსიქოლოგებმა მონაწილეებს სთხოვეს ვიდეოში ბასკეტბოლის გადაცემების დათვლა დაევალა. ვიდეოში გორილას კოსტიუმში გამოწყობილი ადამიანი გაიარა, მაგრამ მონაწილეების ნახევარმა ვერ შენიშნა. ეს აჩვენებს, რომ წენა და შემჩნევა სრულიად განსხვავებული პროცესებია.",
    "moral": "Our attention is far more limited than we think. We can look directly at something and still fail to see it if our focus is elsewhere.",
    "moralKa": "ჩვენი ყურადღება გაცილებით უფრო შეზღუდულია, ვიდრე გვგონია.",
    "titleHy": "Անտեսանելի գորիլա",
    "titleRu": "Невидимая горилла",
    "titleAz": "Görünməz Qorilla",
    "moralHy": "Մեր ուշադրությունը շատ ավելի սահմանափակ է, քան կարծում ենք։ Մենք կարող ենք ուղղակիորեն նայել ինչ-որ բանի և դեռևս չտեսնել այն, եթե մեր ուշադրությունը այլ տեղ է:",
    "moralAz": "Diqqətimiz düşündüyümüzdən daha məhduddur. Biz bir şeyə birbaşa baxa bilərik və diqqətimiz başqa yerdədirsə, hələ də onu görə bilmirik.",
    "moralRu": "Наше внимание гораздо более ограничено, чем мы думаем. Мы можем смотреть прямо на что-то и все равно не видеть этого, если наше внимание сосредоточено на чем-то другом.",
    "contentHy": "1999 թվականին հոգեբաններ Դենիել Սայմոնսը և Քրիստոֆեր Չաբրիսը նախագծեցին մի փորձ, որը կվիճարկի իրազեկման վերաբերյալ մեր ամենահիմնական ենթադրությունները: Նրանք խնդրեցին մասնակիցներին դիտել մի կարճ տեսանյութ, որտեղ վեց հոգի՝ երեքը սպիտակ վերնաշապիկներով, երեքը՝ սև, բասկետբոլի գնդակներ փոխանցեցին միմյանց:\n\nԱռաջադրանքը պարզ էր՝ հաշվել սպիտակաշապիկներով կատարած փոխանցումների քանակը։ Մասնակիցները ուշադրությամբ կենտրոնացան՝ հետևելով յուրաքանչյուր նետմանը:\n\nՏեսանյութի կեսին արտառոց բան տեղի ունեցավ. Ամբողջ գորիլայի հագուստով անձը դանդաղ քայլեց դեպի կադրի կենտրոնը, դեմքով դեպի տեսախցիկը հարվածեց նրա կրծքին և դուրս եկավ: Գորիլան տեսանելի էր ամբողջ ինը վայրկյան:\n\nԵրբ հարցրին, մասնակիցների մոտավորապես կեսը բացարձակապես չէր պատկերացնում, որ գորիլա է հայտնվել: Նրանք շոկի մեջ էին, երբ նորից ցուցադրեցին տեսանյութը։ Ոմանք հրաժարվեցին հավատալ, որ դա նույն տեսանյութն է:\n\nՓորձը ցույց տվեց այն, ինչ Սիմոնսը և Չաբրիսը անվանեցին «անուշադիր կուրություն»՝ լիովին տեսանելի, բայց անսպասելի առարկաներ չնկատելու, երբ մեր ուշադրությունը կենտրոնացած է այլ տեղ: Այնպես չէ, որ մեր աչքերը չեն տեսել գորիլան. մեր ուղեղը պարզապես չի մշակել այն, քանի որ այն չի համապատասխանում հաշվելու առաջադրանքին:\n\nԱյս հետազոտությունը խորը ազդեցություն ունի իրական աշխարհի վրա: Ռադիոլոգները կարող են բաց թողնել ուռուցքները ռենտգենյան ճառագայթների վրա, երբ կենտրոնացած են այլ բանի վրա: Վարորդները կարող են չտեսնել հետիոտներին, երբ շեղվում են: Հանցագործությունների ժամանակ ականատեսները բաց են թողնում կարևոր մանրամասները.\n\nԱնտեսանելի գորիլան հիշեցնում է մեզ, որ տեսնելն ու նկատելը երկու սկզբունքորեն տարբեր ճանաչողական գործընթացներ են, և որ գիտակցության մեր վստահ զգացումը մեծ մասամբ պատրանք է:",
    "contentRu": "В 1999 году психологи Дэниел Саймонс и Кристофер Шабрис разработали эксперимент, который бросит вызов нашим самым базовым представлениям об осознанности. Они попросили участников посмотреть короткое видео, в котором шесть человек (трое в белых рубашках и трое в черных) передают друг другу баскетбольные мячи.\n\nЗадача была простая: подсчитать количество передач, сделанных белорубашечной командой. Участники сосредоточились, отслеживая каждый бросок.\n\nВ середине видео произошло нечто экстраординарное. Человек в полном костюме гориллы медленно вошел в центр кадра, повернулся к камере, постучал себя в грудь и вышел. Гориллу было видно целых девять секунд.\n\nКогда их спросили позже, примерно половина участников понятия не имела о появлении гориллы. Они были шокированы, когда им снова показали видео. Некоторые отказывались верить, что это одно и то же видео.\n\nЭксперимент продемонстрировал то, что Саймонс и Шабри назвали «слепотой по невнимательности» — неспособностью замечать полностью видимые, но неожиданные объекты, когда наше внимание сосредоточено в другом месте. Дело не в том, что наши глаза не видели гориллу; наш мозг просто не обработал это, потому что это не имело отношения к задаче подсчета.\n\nЭто исследование имеет глубокие практические последствия. Радиологи могут не заметить опухоли на рентгеновских снимках, если сосредоточивают внимание на чем-то другом. Водители могут не видеть пешеходов, когда отвлекаются. Очевидцы упускают важные детали во время преступлений.\n\nНевидимая горилла напоминает нам, что видение и замечание — это два фундаментально разных когнитивных процесса и что наше уверенное чувство осознания — во многом иллюзия.",
    "contentAz": "1999-cu ildə psixoloqlar Daniel Simons və Christopher Chabris, şüurla bağlı ən əsas fərziyyələrimizə etiraz edəcək bir təcrübə hazırladılar. Onlar iştirakçılardan altı nəfərin – üçü ağ köynəkdə, üçü qara paltarda – basketbol toplarını bir-birinə ötürdükləri qısa videoya baxmağı xahiş etdilər.\n\nTapşırıq sadə idi: ağ köynəkli komandanın ötürmələrinin sayını hesablayın. İştirakçılar hər bir atışı izləyərək diqqətlərini cəmlədilər.\n\nVideonun yarısında qeyri-adi bir şey baş verdi. Tam qorilla kostyumunda olan bir şəxs yavaş-yavaş kadrın mərkəzinə daxil oldu, kameraya üz tutdu, sinəsini döydü və çıxıb getdi. Qorilla tam doqquz saniyə göründü.\n\nDaha sonra soruşduqda, iştirakçıların təxminən yarısı qorillanın peyda olması barədə heç bir fikri yox idi. Videonu yenidən nümayiş etdirəndə şoka düşüblər. Bəziləri bunun eyni video olduğuna inanmaqdan imtina etdi.\n\nTəcrübə Simons və Çabrisin \"diqqətsiz korluq\" adlandırdıqlarını nümayiş etdirdi - diqqətimiz başqa yerə yönəldildiyində tamamilə görünən, lakin gözlənilməz cisimlərin fərqinə varmamaq. Bu, gözlərimizin qorilla görməməsi deyil; bizim beynimiz sadəcə onu emal etmədi, çünki sayma tapşırığına uyğun deyildi.\n\nBu tədqiqatın real dünya üçün dərin təsirləri var. Rentgenoloqlar başqa bir şeyə diqqət yetirdikdə X-şüalarında şişləri əldən verə bilərlər. Sürücülər diqqəti yayındırdıqda piyadaları görməyə bilər. Şahidlər cinayətlər zamanı kritik detalları qaçırırlar.\n\nGözəgörünməz qorilla bizə xatırladır ki, görmək və fərq etmək iki kökündən fərqli idrak prosesidir və bizim inamlı dərketmə duyğumuz əsasən illüziyadır."
  },
  {
    "id": 5,
    "title": "Harlow's Monkeys and the Need for Love",
    "titleKa": "ჰარლოუს მაიმუნები და სიყვარულის საჭიროება",
    "chapterId": 9,
    "icon": "mdi:heart-outline",
    "content": "In the 1950s and 60s, psychologist Harry Harlow conducted experiments at the University of Wisconsin that would forever change our understanding of love and attachment. At the time, the prevailing view—promoted by behaviorists like Watson—was that infants bonded with mothers primarily because mothers provided food.\n\nHarlow challenged this assumption by separating infant rhesus monkeys from their biological mothers and giving them two surrogate \"mothers.\" One was made of bare wire mesh with a feeding bottle attached. The other was made of soft terry cloth with no food source.\n\nIf the behaviorists were right, the babies should have preferred the wire mother who provided nourishment. But that's not what happened.\n\nThe infant monkeys spent nearly all their time clinging to the soft cloth mother. They went to the wire mother only briefly to feed, then immediately returned to the cloth surrogate. When frightened by a mechanical spider or other threats, they ran to the cloth mother for comfort, clinging desperately.\n\nEven more telling: monkeys raised with only the wire mother developed severe psychological problems. They rocked back and forth, showed signs of depression, were aggressive, and had difficulty socializing with other monkeys. Those with the cloth mother, while not perfectly adjusted, were significantly healthier emotionally.\n\nLater experiments showed that monkeys deprived of all maternal contact became profoundly disturbed as adults—unable to parent their own offspring, some refusing to nurse or even harming their babies.\n\nHarlow's work, though ethically controversial by today's standards, provided irrefutable evidence that emotional comfort, touch, and security are as fundamental as food and water for healthy development.",
    "contentKa": "1950-60-იან წლებში, ჰარი ჰარლოუმა ექსპერიმენტები ჩაატარა რეზუსის მაიმუნებზე. მან ჩვილებს ორი სუროგატი დედა მისცა: მავთულხავლოვანი საკვებით და რბილი ქსოვილიანი საკვების გარეშე. ჩვილებმა რბილ დედა აირჩიეს—ემოციური კომფორტი საკვებზე მნიშვნელოვანია.",
    "moral": "Love, comfort, and physical touch are fundamental needs that shape healthy development—not luxuries, but biological necessities.",
    "moralKa": "სიყვარული, კომფორტი და ფიზიკური შეხება ფუნდამენტური საჭიროებებია ჯანსაღი განვითარებისთვის.",
    "titleHy": "Հարլոուի կապիկները և սիրո կարիքը",
    "moralHy": "Սերը, հարմարավետությունը և ֆիզիկական հպումը հիմնարար կարիքներ են, որոնք ձևավորում են առողջ զարգացումը՝ ոչ թե շքեղություն, այլ կենսաբանական անհրաժեշտություն:",
    "moralAz": "Sevgi, rahatlıq və fiziki toxunma sağlam inkişafı formalaşdıran əsas ehtiyaclardır - lüks deyil, bioloji ehtiyaclar.",
    "moralRu": "Любовь, комфорт и физическое прикосновение — это фундаментальные потребности, которые формируют здоровое развитие — не роскошь, а биологические потребности.",
    "titleRu": "Обезьяны Харлоу и потребность в любви",
    "contentHy": "1950-ականներին և 60-ականներին հոգեբան Հարրի Հարլոուն Վիսկոնսինի համալսարանում անցկացրեց փորձեր, որոնք ընդմիշտ կփոխեին մեր պատկերացումները սիրո և կապվածության մասին: Այն ժամանակ գերակշռող տեսակետը, որը տարածվում էր Ուոթսոնի նման վարքագծողների կողմից, այն էր, որ նորածինները կապված են մայրերի հետ հիմնականում այն ​​պատճառով, որ մայրերը սնունդ են մատակարարում:\n\nՀարլոուն վիճարկել է այս ենթադրությունը՝ առանձնացնելով մանկական ռեզուս կապիկներին իրենց կենսաբանական մայրերից և նրանց տալով երկու փոխնակ «մայրեր»: Մեկը պատրաստված էր մերկ մետաղական ցանցից, որի վրա դրված էր կերակրման շիշ: Մյուսը պատրաստված էր փափուկ կտորից, առանց սննդի աղբյուրի:\n\nԵթե ​​վարքագծերը ճիշտ էին, երեխաները պետք է նախընտրեին սնուցող մորը: Բայց այդպես չի եղել:\n\nՆորածին կապիկները գրեթե ամբողջ ժամանակ անցկացնում էին փափուկ կտորի մորից կառչելով: Նրանք գնացին մետաղալար մոր մոտ միայն կարճ ժամանակով կերակրելու, հետո անմիջապես վերադարձան կտորի փոխնակին: Երբ վախեցան մեխանիկական սարդից կամ այլ սպառնալիքներից, նրանք վազեցին կտորե մոր մոտ մխիթարության համար՝ հուսահատ կառչելով։\n\nՆույնիսկ ավելի խոսուն. կապիկները, որոնք մեծացել են միայն մետաղյա մոր հետ, ծանր հոգեբանական խնդիրներ են ունեցել: Նրանք օրորվում էին հետ ու առաջ, ցույց էին տալիս դեպրեսիայի նշաններ, ագրեսիվ էին և դժվարությամբ էին շփվում այլ կապիկների հետ։ Նրանք, ովքեր շորով մոր հետ, թեև կատարյալ հարմարեցված չէին, էմոցիոնալ առումով զգալիորեն ավելի առողջ էին:\n\nԱվելի ուշ փորձերը ցույց տվեցին, որ կապիկները, որոնք զրկված էին մայրական կապից, մեծ անհանգստություն էին զգում մեծահասակների շրջանում՝ չկարողանալով դաստիարակել իրենց սերունդներին, ոմանք հրաժարվում էին կերակրել կամ նույնիսկ վնասում իրենց երեխաներին։\n\nՀարլոուի աշխատանքը, թեև այսօրվա չափանիշներով էթիկապես հակասական է, սակայն անհերքելի ապացույցներ է տվել, որ էմոցիոնալ հարմարավետությունը, հպումը և անվտանգությունը նույնքան կարևոր են, որքան սնունդն ու ջուրը առողջ զարգացման համար:",
    "contentRu": "В 1950-х и 60-х годах психолог Гарри Харлоу проводил в Университете Висконсина эксперименты, которые навсегда изменили наше понимание любви и привязанности. В то время преобладала точка зрения, которую продвигали такие бихевиористы, как Уотсон, что младенцы связаны с матерями прежде всего потому, что матери обеспечивают их едой.\n\nХарлоу бросила вызов этому предположению, отделив детенышей макак-резус от их биологических матерей и дав им двух суррогатных «матерей». Один был сделан из голой проволочной сетки с прикрепленной бутылочкой для кормления. Другой был сделан из мягкой махровой ткани без источника питания.\n\nЕсли бы бихевиористы были правы, младенцы должны были бы предпочесть проволочную мать, которая обеспечивала бы питание. Но это не то, что произошло.\n\nДетеныши обезьян почти все время проводили, цепляясь за мягкую материю. К проволочной матери они ходили ненадолго, чтобы покормить, а затем сразу же возвращались к тканевой суррогатной матери. Напуганные механическим пауком или другими угрозами, они бежали к тканевой матери в поисках утешения, отчаянно цепляясь за нее.\n\nЕще более показательно: у обезьян, выросших только с проволочной матерью, возникли серьезные психологические проблемы. Они раскачивались взад и вперед, проявляли признаки депрессии, были агрессивны и с трудом общались с другими обезьянами. Те, у кого была тканевая мать, хотя и не были идеально приспособлены, были значительно здоровее эмоционально.\n\nБолее поздние эксперименты показали, что обезьяны, лишенные всякого контакта с матерью, повзрослев, стали глубоко обеспокоены: они не могли воспитывать собственное потомство, некоторые отказывались кормить своих детей грудью или даже причиняли им вред.\n\nРабота Харлоу, хотя и противоречивая с этической точки зрения по сегодняшним стандартам, предоставила неопровержимые доказательства того, что эмоциональный комфорт, прикосновения и безопасность так же важны для здорового развития, как еда и вода.",
    "titleAz": "Harlow meymunları və sevgi ehtiyacı",
    "contentAz": "1950-60-cı illərdə psixoloq Harri Harlou Viskonsin Universitetində sevgi və bağlılıq anlayışımızı həmişəlik dəyişəcək təcrübələr apardı. O vaxtlar, Watson kimi davranışçılar tərəfindən irəli sürülən, üstünlük təşkil edən fikir, körpələrin analarla ilk növbədə qida təmin etdiyi üçün bağlanması idi.\n\nHarlou körpə rhesus meymunlarını bioloji analarından ayıraraq və onlara iki surroqat \"ana\" verərək bu fərziyyəyə qarşı çıxdı. Biri qida şüşəsi əlavə edilmiş çılpaq məftildən hazırlanmışdı. Digəri isə qida mənbəyi olmayan yumşaq terri parçadan hazırlanmışdı.\n\nDavranışçılar haqlı olsaydılar, körpələr qida verən tel anaya üstünlük verməli idilər. Amma belə olmadı.\n\nKörpə meymunlar demək olar ki, bütün vaxtlarını yumşaq parça anasına yapışaraq keçirirdilər. Onlar qidalandırmaq üçün yalnız qısa müddətə tel anaya getdilər, sonra dərhal parça surroqatına qayıtdılar. Mexanik hörümçək və ya digər təhdidlərdən qorxduqda, çarəsizcə yapışaraq rahatlıq üçün parça anasına qaçdılar.\n\nDaha çox izah edən: yalnız tel ana ilə böyüdülən meymunlarda ciddi psixoloji problemlər yarandı. Onlar irəli-geri yellənirdilər, depressiya əlamətləri göstərirdilər, aqressiv idilər və digər meymunlarla ünsiyyət qurmaqda çətinlik çəkirdilər. Paltarlı anası olanlar, mükəmməl uyğunlaşmasalar da, emosional cəhətdən əhəmiyyətli dərəcədə sağlam idilər.\n\nSonrakı təcrübələr göstərdi ki, ana ilə hər cür təmasdan məhrum olan meymunlar böyüklər kimi çox narahat olurlar - öz övladlarını yetişdirə bilmirlər, bəziləri süd verməkdən boyun qaçırır və hətta körpələrinə zərər verirdilər.\n\nHarlowun işi, bugünkü standartlara görə etik cəhətdən mübahisəli olsa da, emosional rahatlığın, toxunmanın və təhlükəsizliyin sağlam inkişaf üçün qida və su qədər əsas olduğuna dair təkzibedilməz sübutlar təqdim etdi."
  },
  {
    "id": 6,
    "title": "The Marshmallow Test",
    "titleKa": "მარშმელოუს ტესტი",
    "chapterId": 10,
    "icon": "mdi:cookie-outline",
    "content": "In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment. He brought preschool children, typically 4 to 5 years old, into a room one at a time. On the table sat a single marsexport const MEMORY_CARDS: MemoryCard[] = [
  {
    "id": 1,
    "term": "Psychology",
    "definition": "The scientific study of behavior and mental processes",
    "category": "Basics",
    "termRu": "Психология",
    "termAz": "Psixologiya",
    "definitionRu": "Научное исследование поведения и психических процессов.",
    "definitionKa": "ქცევისა და ფსიქიკური პროცესების მეცნიერული შესწავლა",
    "definitionHy": "Վարքի և մտավոր գործընթացների գիտական ​​ուսումնասիրություն",
    "termKa": "ფსიქოლოგია",
    "termHy": "Հոգեբանություն",
    "definitionAz": "Davranış və psixi proseslərin elmi tədqiqi"
  },
  {
    "id": 2,
    "term": "Neuron",
    "definition": "A nerve cell that transmits electrical and chemical signals",
    "category": "Biology",
    "termRu": "Нейрон",
    "termAz": "Neyron",
    "definitionRu": "Нервная клетка, передающая электрические и химические сигналы.",
    "definitionHy": "Նյարդային բջիջ, որը փոխանցում է էլեկտրական և քիմիական ազդանշաններ",
    "definitionKa": "ნერვული უჯრედი, რომელიც გადასცემს ელექტრულ და ქიმიურ სიგნალებს",
    "termKa": "ნეირონი",
    "termHy": "Նեյրոն",
    "definitionAz": "Elektrik və kimyəvi siqnalları ötürən sinir hüceyrəsi"
  },
  {
    "id": 3,
    "term": "Classical Conditioning",
    "definition": "Learning through association of stimuli (Pavlov)",
    "category": "Learning",
    "termRu": "Классическое кондиционирование",
    "termKa": "კლასიკური კონდიცირება",
    "termHy": "Դասական կոնդիցիոներ",
    "termAz": "Klassik kondisioner",
    "definitionHy": "Սովորում գրգռիչների միավորման միջոցով (Պավլով)",
    "definitionKa": "სწავლა სტიმულის ასოციაციის გზით (პავლოვი)",
    "definitionAz": "Qıcıqlandırıcıların assosiasiyası vasitəsilə öyrənmə (Pavlov)",
    "definitionRu": "Обучение через ассоциацию стимулов (Павлов)"
  },
  {
    "id": 4,
    "term": "Operant Conditioning",
    "definition": "Learning through consequences: reinforcement and punishment (Skinner)",
    "category": "Learning",
    "termHy": "Գործող օդափոխություն",
    "termKa": "ოპერაციული კონდიცირება",
    "termAz": "Operant Kondisioner",
    "termRu": "Оперантное обусловливание",
    "definitionRu": "Обучение через последствия: подкрепление и наказание (Скиннер)",
    "definitionKa": "სწავლა შედეგების მეშვეობით: განმტკიცება და დასჯა (სკინერი)",
    "definitionHy": "Սովորում հետևանքների միջոցով. ամրապնդում և պատիժ (Skinner)",
    "definitionAz": "Nəticələr vasitəsilə öyrənmək: gücləndirmə və cəza (Skinner)"
  },
  {
    "id": 5,
    "term": "Hippocampus",
    "definition": "Brain structure essential for forming new long-term memories",
    "category": "Biology",
    "termRu": "Гиппокамп",
    "termKa": "ჰიპოკამპი",
    "termHy": "Հիպոկամպուս",
    "definitionRu": "Структура мозга необходима для формирования новой долговременной памяти",
    "definitionKa": "ტვინის სტრუქტურა აუცილებელია ახალი გრძელვადიანი მეხსიერების ფორმირებისთვის",
    "definitionHy": "Ուղեղի կառուցվածքը կարևոր է նոր երկարաժամկետ հիշողություններ ձևավորելու համար",
    "definitionAz": "Yeni uzunmüddətli xatirələrin formalaşması üçün vacib olan beyin quruluşu",
    "termAz": "Hipokampus"
  },
  {
    "id": 6,
    "term": "Cognitive Dissonance",
    "definition": "Discomfort from holding contradictory beliefs or attitudes",
    "category": "Social",
    "termRu": "Когнитивный диссонанс",
    "termHy": "Ճանաչողական դիսոնանս",
    "definitionRu": "Дискомфорт от противоречивых убеждений или взглядов.",
    "termKa": "კოგნიტური დისონანსი",
    "definitionKa": "დისკომფორტი ურთიერთსაწინააღმდეგო რწმენის ან დამოკიდებულების შენარჩუნების გამო",
    "definitionHy": "Անհանգստություն հակասական համոզմունքների կամ վերաբերմունքի պատճառով",
    "definitionAz": "Ziddiyyətli inanclara və ya münasibətə sahib olmaqdan narahatlıq",
    "termAz": "Koqnitiv dissonans"
  },
  {
    "id": 7,
    "term": "Maslow's Hierarchy",
    "definition": "Five-level model of motivation from basic needs to self-actualization",
    "category": "Motivation",
    "termAz": "Maslow iyerarxiyası",
    "termHy": "Մասլոուի հիերարխիա",
    "termKa": "მასლოუს იერარქია",
    "termRu": "Иерархия Маслоу",
    "definitionRu": "Пятиуровневая модель мотивации от базовых потребностей до самореализации",
    "definitionKa": "მოტივაციის ხუთ დონის მოდელი ძირითადი მოთხოვნილებებიდან თვითრეალიზაციამდე",
    "definitionHy": "Հիմնական կարիքներից մինչև ինքնաիրականացում մոտիվացիայի հինգ մակարդակի մոդել",
    "definitionAz": "Əsas ehtiyaclardan özünü həyata keçirməyə qədər beş səviyyəli motivasiya modeli"
  },
  {
    "id": 8,
    "term": "Big Five (OCEAN)",
    "definition": "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
    "category": "Personality",
    "termKa": "დიდი ხუთეული (OCEAN)",
    "termHy": "Մեծ հնգյակ (OCEAN)",
    "termRu": "Большая пятерка (ОКЕАН)",
    "termAz": "Böyük beşlik (OCEAN)",
    "definitionRu": "Открытость, Добросовестность, Экстраверсия, Доброжелательность, Невротизм.",
    "definitionHy": "Բացություն, բարեխիղճություն, էքստրավերտություն, համաձայնություն, նևրոտիզմ",
    "definitionKa": "ღიაობა, კეთილსინდისიერება, ექსტრავერსია, თანხმობა, ნევროტიზმი",
    "definitionAz": "Açıqlıq, Vicdanlılıq, Ekstraversiya, Uyğunluq, Nevrotiklik"
  },
  {
    "id": 9,
    "term": "Attachment Theory",
    "definition": "The bond between infant and caregiver shaping later relationships",
    "category": "Development",
    "definitionRu": "Связь между младенцем и лицом, осуществляющим уход, формирует дальнейшие отношения",
    "termRu": "Теория привязанности",
    "termKa": "მიმაგრების თეორია",
    "termHy": "Կցվածության տեսություն",
    "definitionHy": "Երեխայի և խնամողի միջև կապը ձևավորում է հետագա հարաբերությունները",
    "definitionKa": "კავშირი ახალშობილსა და მომვლელს შორის აყალიბებს შემდგომ ურთიერთობებს",
    "termAz": "Qoşma nəzəriyyəsi",
    "definitionAz": "Körpə və baxıcı arasındakı əlaqə sonrakı münasibətləri formalaşdırır"
  },
  {
    "id": 10,
    "term": "Confirmation Bias",
    "definition": "Tendency to seek information that supports existing beliefs",
    "category": "Cognition",
    "termRu": "Предвзятость подтверждения",
    "definitionRu": "Склонность искать информацию, которая поддерживает существующие убеждения.",
    "termKa": "დადასტურების მიკერძოება",
    "termHy": "Հաստատման կողմնակալություն",
    "definitionKa": "ტენდენცია მოიძიოს ინფორმაცია, რომელიც მხარს უჭერს არსებულ რწმენას",
    "definitionHy": "Գոյություն ունեցող համոզմունքները հաստատող տեղեկատվություն փնտրելու միտում",
    "termAz": "Təsdiq qərəzi",
    "definitionAz": "Mövcud inancları dəstəkləyən məlumat axtarmaq meyli"
  },
  {
    "id": 11,
    "term": "Dopamine",
    "definition": "Neurotransmitter involved in reward, motivation, and pleasure",
    "category": "Biology",
    "termKa": "დოფამინი",
    "termRu": "Дофамин",
    "termAz": "Dopamin",
    "termHy": "Դոպամին",
    "definitionRu": "Нейромедиатор, участвующий в вознаграждении, мотивации и удовольствии.",
    "definitionKa": "ნეიროტრანსმიტერი მონაწილეობს ჯილდოში, მოტივაციაში და სიამოვნებაში",
    "definitionHy": "Նեյրոհաղորդիչը ներգրավված է պարգևատրման, մոտիվացիայի և հաճույքի մեջ",
    "definitionAz": "Mükafat, motivasiya və həzzdə iştirak edən neyrotransmitter"
  },
  {
    "id": 12,
    "term": "REM Sleep",
    "definition": "Sleep stage with rapid eye movements and vivid dreaming",
    "category": "Consciousness",
    "termRu": "Быстрый сон",
    "termKa": "REM ძილი",
    "termHy": "REM քուն",
    "definitionKa": "ძილის ეტაპი თვალის სწრაფი მოძრაობით და ნათელი ოცნებებით",
    "definitionHy": "Քնի փուլ՝ աչքերի արագ շարժումներով և վառ երազներով",
    "definitionRu": "Стадия сна с быстрыми движениями глаз и яркими сновидениями.",
    "termAz": "REM yuxusu",
    "definitionAz": "Sürətli göz hərəkətləri və canlı yuxu ilə yuxu mərhələsi"
  },
  {
    "id": 13,
    "term": "Bystander Effect",
    "definition": "Less likely to help when others are present",
    "category": "Social",
    "definitionKa": "ნაკლებად სავარაუდოა, რომ დაეხმაროს, როდესაც სხვები არიან",
    "definitionHy": "Ավելի քիչ հավանական է օգնել, երբ ուրիշները ներկա են",
    "definitionAz": "Başqaları olduqda kömək etmək ehtimalı azdır",
    "termHy": "Bystander Effect",
    "termKa": "Bystander Effect",
    "termRu": "Эффект свидетеля",
    "definitionRu": "Меньше шансов помочь, когда присутствуют другие",
    "termAz": "Baxıcı Effekti"
  },
  {
    "id": 14,
    "term": "Placebo Effect",
    "definition": "Improvement from belief in treatment rather than treatment itself",
    "category": "Research",
    "termRu": "Эффект плацебо",
    "termHy": "Պլացեբոյի էֆեկտ",
    "termKa": "პლაცებოს ეფექტი",
    "definitionHy": "Բուժման նկատմամբ հավատքի բարելավում, այլ ոչ թե ինքնին բուժման",
    "definitionKa": "გაუმჯობესება მკურნალობისადმი რწმენისგან და არა თავად მკურნალობის მიმართ",
    "definitionRu": "Улучшение от веры в лечение, а не от самого лечения",
    "termAz": "Plasebo effekti",
    "definitionAz": "Müalicənin özündən çox müalicəyə inamdan irəli gələn təkmilləşdirmə"
  },
  {
    "id": 15,
    "term": "Schema",
    "definition": "Mental framework for organizing and interpreting information",
    "category": "Cognition",
    "termRu": "Схема",
    "termHy": "Սխեման",
    "termKa": "სქემა",
    "definitionRu": "Ментальная основа для организации и интерпретации информации",
    "definitionHy": "Տեղեկատվության կազմակերպման և մեկնաբանման մտավոր շրջանակ",
    "definitionKa": "ინფორმაციის ორგანიზებისა და ინტერპრეტაციის გონებრივი ჩარჩო",
    "termAz": "Sxem",
    "definitionAz": "Məlumatı təşkil etmək və şərh etmək üçün zehni çərçivə"
  },
  {
    "id": 16,
    "term": "Amygdala",
    "definition": "Brain structure for processing emotions, especially fear",
    "category": "Biology",
    "termKa": "ამიგდალა",
    "definitionRu": "Структура мозга для обработки эмоций, особенно страха",
    "termHy": "Ամիգդալա",
    "termRu": "Миндалевидное тело",
    "definitionHy": "Ուղեղի կառուցվածքը հույզերի, հատկապես վախի մշակման համար",
    "definitionKa": "ტვინის სტრუქტურა ემოციების, განსაკუთრებით შიშის დასამუშავებლად",
    "termAz": "Amigdala",
    "definitionAz": "Duyğuların, xüsusən də qorxunun işlənməsi üçün beyin quruluşu"
  },
  {
    "id": 17,
    "term": "Self-Efficacy",
    "definition": "Belief in your ability to succeed at specific tasks (Bandura)",
    "category": "Personality",
    "definitionRu": "Вера в свою способность добиться успеха в выполнении конкретных задач (Бандура)",
    "termRu": "Самоэффективность",
    "definitionHy": "Հավատք կոնկրետ առաջադրանքներում հաջողության հասնելու ձեր ունակությանը (Բանդուրա)",
    "definitionKa": "რწმენა კონკრეტულ ამოცანებში წარმატების მისაღწევად (ბანდურა)",
    "termKa": "თვითეფექტურობა",
    "termHy": "Ինքնարդյունավետություն",
    "termAz": "Öz-özünə effektivlik",
    "definitionAz": "Müəyyən tapşırıqlarda uğur qazanmaq qabiliyyətinə inam (Bandura)"
  },
  {
    "id": 18,
    "term": "Learned Helplessness",
    "definition": "Giving up after repeated failures even when escape is possible",
    "category": "Motivation",
    "termRu": "Выученная беспомощность",
    "definitionKa": "განმეორებითი წარუმატებლობის შემდეგ დანებება მაშინაც კი, როცა გაქცევა შესაძლებელია",
    "definitionHy": "Կրկնվող անհաջողություններից հետո հանձնվելը, նույնիսկ երբ հնարավոր է փախուստը",
    "termKa": "ისწავლა უმწეობა",
    "termHy": "Սովորած անօգնականություն",
    "definitionRu": "Сдаваться после повторяющихся неудач, даже если побег возможен",
    "termAz": "Çarəsizliyi öyrəndi",
    "definitionAz": "Qaçmaq mümkün olsa belə, təkrarlanan uğursuzluqlardan sonra təslim olmaq"
  },
  {
    "id": 19,
    "term": "Transference",
    "definition": "Redirecting feelings about one person onto the therapist",
    "category": "Therapy",
    "definitionKa": "ერთი ადამიანის მიმართ გრძნობების გადამისამართება თერაპევტზე",
    "termKa": "გადაცემა",
    "termHy": "Փոխանցում",
    "termRu": "перенос",
    "definitionRu": "Перенаправление чувств к одному человеку на терапевта",
    "termAz": "Köçürmə",
    "definitionHy": "Մեկ անձի մասին զգացմունքների վերահղում թերապևտի վրա",
    "definitionAz": "Bir şəxs haqqında hissləri terapevtə yönləndirmək"
  },
  {
    "id": 20,
    "term": "Heuristic",
    "definition": "Mental shortcut for quick decisions that can lead to errors",
    "category": "Cognition",
    "definitionKa": "გონებრივი მალსახმობი სწრაფი გადაწყვეტილების მისაღებად, რამაც შეიძლება გამოიწვიოს შეცდომები",
    "definitionHy": "Մտավոր դյուրանցում արագ որոշումների համար, որոնք կարող են հանգեցնել սխալների",
    "termHy": "Էվրիստիկ",
    "termKa": "ევრისტიკული",
    "termRu": "эвристика",
    "definitionRu": "Ментальный ярлык для быстрых решений, которые могут привести к ошибкам",
    "definitionAz": "Səhvlərə səbəb ola biləcək sürətli qərarlar üçün zehni qısa yol",
    "termAz": "Evristik"
  },
  {
    "id": 21,
    "term": "Synapse",
    "definition": "The gap between neurons where neurotransmitters cross",
    "category": "Biology",
    "termAz": "Sinaps",
    "termRu": "Синапс",
    "termKa": "სინაფსი",
    "termHy": "Սինապս",
    "definitionKa": "უფსკრული ნეირონებს შორის, სადაც ნეიროტრანსმიტერები კვეთენ",
    "definitionHy": "Նեյրոնների միջև ընկած բացը, որտեղ անցնում են նեյրոհաղորդիչները",
    "definitionRu": "Зазор между нейронами, где пересекаются нейротрансмиттеры",
    "definitionAz": "Neyrotransmitterlərin keçdiyi neyronlar arasındakı boşluq"
  },
  {
    "id": 22,
    "term": "Extinction",
    "definition": "Weakening of conditioned response when reinforcement stops",
    "category": "Learning",
    "termRu": "Вымирание",
    "termAz": "Yox olma",
    "definitionKa": "განპირობებული პასუხის შესუსტება, როდესაც გაძლიერება ჩერდება",
    "definitionHy": "Պայմանավորված արձագանքի թուլացում, երբ ամրապնդումը դադարում է",
    "termKa": "გადაშენება",
    "termHy": "Անհետացում",
    "definitionRu": "Ослабление условной реакции при прекращении подкрепления",
    "definitionAz": "Möhkəmləndirmə dayandıqda şərti cavabın zəifləməsi"
  },
  {
    "id": 23,
    "term": "Superego",
    "definition": "The moral conscience in Freud's personality structure",
    "category": "Personality",
    "termKa": "სუპერეგო",
    "termHy": "Սուպերէգո",
    "termRu": "Суперэго",
    "termAz": "Supereqo",
    "definitionRu": "Моральное сознание в структуре личности Фрейда",
    "definitionHy": "Բարոյական խիղճը Ֆրեյդի անձի կառուցվածքում",
    "definitionKa": "მორალური სინდისი ფროიდის პიროვნების სტრუქტურაში",
    "definitionAz": "Freydin şəxsiyyət strukturunda əxlaqi vicdan"
  },
  {
    "id": 24,
    "term": "Neuroplasticity",
    "definition": "Brain's ability to reorganize and form new neural connections",
    "category": "Biology",
    "termAz": "Neyroplastiklik",
    "termRu": "Нейропластичность",
    "definitionRu": "Способность мозга реорганизоваться и сформировать новые нейронные связи",
    "definitionHy": "Վերակազմավորվելու և նոր նյարդային կապեր ձևավորելու ուղեղի կարողությունը",
    "definitionKa": "ტვინის რეორგანიზაციისა და ახალი ნერვული კავშირების ჩამოყალიბების უნარი",
    "definitionAz": "Beynin yenidən təşkil etmək və yeni sinir əlaqələri yaratmaq qabiliyyəti",
    "termHy": "Նեյրոպլաստիկություն",
    "termKa": "ნეიროპლასტიურობა"
  }
]բ դուռը փակվեց: Մյուսները փորձեցին ստեղծագործական ռազմավարություններ՝ փակել իրենց աչքերը, շրջվել, երգել իրենց համար, շոյել ճահճին ինչպես փոքրիկ կենդանու, կամ լիզել և հետ դնել:\n\nԵրեխաների մոտ մեկ երրորդը հասցրել է սպասել ամբողջ 15 րոպեին։ Երկու երրորդը չկարողացավ դիմադրել։\n\nՏարիներ անց Միշելը հետևեց երեխաներին՝ այժմ դեռահասների և մեծահասակների։ Արդյունքները ապշեցուցիչ էին. Երեխաները, ովքեր ավելի երկար էին սպասել, զգալիորեն ավելի բարձր միավորներ ստացան SAT-ներում (միջինում 210 միավորով), ծնողների կողմից նկարագրվեցին որպես ավելի իրավասու, ավելի լավ հաղթահարեցին սթրեսը, ավելի քիչ հավանական է չարաշահեն նյութերը և պահպանեցին ավելի առողջ մարմնի քաշը:\n\nՉորս տասնամյակ տևած հետագա ուսումնասիրությունները ցույց են տվել, որ մանկության մեջ բավարարվածությունը հետաձգելու կարողությունը ավելի լավ արդյունքներ է կանխատեսում կյանքի հաջողության գրեթե բոլոր չափորոշիչներում:\n\nԱյնուամենայնիվ, ավելի ուշ հետազոտությունները նորություն են ավելացրել: Թայլեր Ուոթսի կողմից 2018 թվականի ուսումնասիրությունը ցույց է տվել, որ սոցիալ-տնտեսական գործոնները և տնային միջավայրը մեծապես ազդում են բավարարվածությունը հետաձգելու ունակության վրա. կայուն, ռեսուրսներով հարուստ տներից երեխաները կարող են պարզապես ավելի շատ հիմքեր ունենալ վստահելու, որ երկրորդ մարշմալոն իրականում կհայտնվի:",
    "titleAz": "Marshmallow Testi",
    "contentRu": "В конце 1960-х — начале 1970-х годов психолог из Стэнфорда Уолтер Мишель начал обманчиво простой эксперимент. Он приводил детей дошкольного возраста, обычно от 4 до 5 лет, по одному в комнату. На столе лежал зефир (или печенье, или крендель — ребенок мог выбрать лакомство по своему вкусу).\n\nИсследователь сказал ребенку: «Ты можешь съесть этот зефир прямо сейчас. Но если подождешь, пока я вернусь, вместо этого ты сможешь съесть два зефира». Затем исследователь вышел из комнаты примерно на 15 минут.\n\nСкрытые камеры записали то, что произошло дальше, и отснятый материал стал одним из самых восхитительных фильмов в истории психологии. Некоторые дети съели зефир сразу же, как закрылась дверь. Другие пробовали творческие стратегии: закрывали глаза, поворачивались, напевали про себя, гладили зефир, как крошечного зверька, или облизывали его и клали обратно.\n\nОколо трети детей удалось прождать полные 15 минут. Две трети не смогли устоять.\n\nСпустя годы Мишель последовал за детьми — теперь уже подростками и взрослыми. Результаты были поразительными. Дети, которые ждали дольше, набрали значительно более высокие баллы по SAT (в среднем на 210 баллов выше), родители описывали их как более компетентных, лучше справлялись со стрессом, реже злоупотребляли психоактивными веществами и поддерживали более здоровый вес тела.\n\nПоследующие исследования, охватывающие четыре десятилетия, показали, что способность откладывать удовлетворение в детстве предсказывает лучшие результаты почти по всем показателям жизненного успеха.\n\nОднако более поздние исследования добавили нюансов. Исследование Тайлера Уоттса, проведенное в 2018 году, показало, что социально-экономические факторы и домашняя обстановка сильно влияют на способность откладывать удовлетворение — у детей из стабильных, богатых ресурсами семей просто может быть больше оснований верить в то, что второй зефир действительно появится.",
    "contentAz": "1960-cı illərin sonu və 1970-ci illərin əvvəllərində Stenford psixoloqu Valter Mişel aldadıcı sadə təcrübəyə başladı. O, adətən 4-5 yaşlı məktəbəqədər uşaqları bir-bir otağa gətirirdi. Masada tək zefir (yaxud peçenye və ya simit - uşaq öz istədiyi yeməyi seçə bilər) oturdu.\n\nTədqiqatçı uşağa deyib: \"Bu zefiri indi yeyə bilərsiniz. Amma mən qayıdana qədər gözləsəniz, onun yerinə iki zefir yeyə bilərsiniz\". Sonra tədqiqatçı təxminən 15 dəqiqə otağı tərk etdi.\n\nGizli kameralar sonra baş verənləri qeyd etdi və görüntülər psixologiyanın ən ləzzətli baxışlarından biri oldu. Bəzi uşaqlar qapı bağlanan kimi zefiri yedilər. Digərləri yaradıcı strategiyaları sınadılar: gözlərini örtdülər, ətrafa çevrildilər, öz-özünə mahnı oxudular, zefiri kiçik bir heyvan kimi oxşadılar və ya yalayıb geri qoydular.\n\nUşaqların təxminən üçdə biri tam 15 dəqiqə gözləməyi bacarıb. Üçdə ikisi müqavimət göstərə bilmədi.\n\nİllər sonra Mişel uşaqları - indi yeniyetmələr və böyüklər kimi izlədi. Nəticələr təəccüblü idi. Daha çox gözləyən uşaqlar SAT-da əhəmiyyətli dərəcədə yüksək bal topladılar (orta hesabla 210 bal daha yüksək), valideynlər tərəfindən daha bacarıqlı, streslə daha yaxşı mübarizə aparan, maddələrdən sui-istifadə etmə ehtimalı az idi və bədən çəkilərini daha sağlam saxladılar.\n\nQırx onillikləri əhatə edən təqib tədqiqatları göstərdi ki, uşaqlıqda həzzi gecikdirmək bacarığı, demək olar ki, hər bir həyat uğuru ölçüsündə daha yaxşı nəticələri proqnozlaşdırır.\n\nBununla belə, sonrakı araşdırmalar bir nüans əlavə etdi. Tyler Watts tərəfindən 2018-ci ildə aparılan bir araşdırma göstərdi ki, sosial-iqtisadi amillər və ev mühiti məmnuniyyəti gecikdirmək qabiliyyətinə güclü təsir göstərir - sabit, resursla zəngin evlərdən olan uşaqların ikinci zefirin həqiqətən görünəcəyinə inanmaq üçün daha çox səbəbi ola bilər."
  },
  {
    "id": 7,
    "title": "Kitty Genovese and Bystander Apathy",
    "titleKa": "კიტი ჯენოვეზე და თვალთმხილველის აპათია",
    "chapterId": 12,
    "icon": "mdi:account-alert-outline",
    "content": "On March 13, 1964, 28-year-old Catherine \"Kitty\" Genovese was returning to her apartment in Kew Gardens, Queens, New York, at about 3:15 AM after finishing her shift as a bar manager. As she walked from her car, she was attacked by Winston Moseley.\n\nKitty screamed for help. Lights went on in the apartment building. A neighbor yelled from a window. Moseley ran away—but returned ten minutes later to attack her again in a stairwell, where he stabbed, robbed, and ultimately killed her.\n\nThe New York Times reported that 38 witnesses watched or heard the attack and did nothing—a claim that became the defining story of urban apathy. The headline shocked the nation.\n\nPsychologists John Darley and Bibb Latané were deeply troubled by the story. Rather than simply condemning the witnesses as uncaring, they hypothesized that the very number of witnesses might have been the problem. They designed a series of experiments to test this.\n\nIn one study, participants were placed in separate rooms and communicated via intercom. When one \"participant\" (actually a recording) simulated having a seizure, those who believed they were the only one who could hear it responded quickly—85% within one minute. But when participants believed four others were also listening, only 31% responded.\n\nDarley and Latané called this the \"bystander effect\"—the finding that the presence of others reduces individual helping behavior through two mechanisms: diffusion of responsibility (\"someone else will help\") and pluralistic ignorance (\"nobody else seems concerned, so it must not be serious\").\n\nNote: Later research revealed that the original Times story was significantly exaggerated—fewer people witnessed the attack than claimed, and some did call police. But the research it inspired has been robustly confirmed.",
    "contentKa": "1964 წელს, კიტი ჯენოვეზე ნიუ-იორკში თავს დასხმულეს დროს მოიკლა. მრავალმა ესმა დაინახა, მაგრამ არავინ დაეხმარა. ფსიქოლოგებმა დარლიმ და ლატანემ აღმოაჩინეს \"თვალთმხილველის ეფექტი\"—რა჊ მეტი ადამიანია დამსწრე, მით ნაკლებად თითოეული დახმარების ალბათობა მცირდება.",
    "moral": "The more people present during an emergency, the less likely any individual is to help—a counterintuitive finding with life-saving implications.",
    "moralKa": "რა჊ მეტი ადამიანი არის საგანგაშო სიტუაციაში, მით ნაკლებადია თითოეულის დახმარება.",
    "titleRu": "Китти Дженовезе и апатия свидетеля",
    "titleHy": "Kitty Genovese և Bystander Apathy",
    "contentHy": "1964 թվականի մարտի 13-ին 28-ամյա Քեթրին «Քիթի» Ջենովեզը վերադառնում էր իր բնակարան Քու Գարդենսում, Քուինս, Նյու Յորք, ժամը 03:15-ին, բարի մենեջերի իր հերթափոխն ավարտելուց հետո: Երբ նա քայլում էր իր մեքենայից, նրա վրա հարձակվեց Ուինսթոն Մոզելին:\n\nՔիթին գոռաց օգնության համար։ Բազմաբնակարան շենքում վառվել են լույսերը. Հարևանը պատուհանից գոռաց. Մոզելին փախավ, բայց տասը րոպե անց վերադարձավ, որպեսզի նորից հարձակվի նրա վրա աստիճաններով, որտեղ նա դանակահարեց, կողոպտեց և ի վերջո սպանեց նրան:\n\nThe New York Times-ը հաղորդում է, որ 38 վկաներ դիտել կամ լսել են հարձակումը և ոչինչ չեն արել, մի պնդում, որը դարձավ քաղաքային ապատիայի որոշիչ պատմությունը: Վերնագիրը ցնցեց ազգին.\n\nՀոգեբաններ Ջոն Դարլին և Բիբ Լատանեն խորապես անհանգստացած էին այս պատմությունից: Վկաներին պարզապես չդատապարտելու փոխարեն՝ նրանք ենթադրեցին, որ խնդիրը կարող էր լինել հենց վկաների թիվը: Նրանք նախագծեցին մի շարք փորձեր՝ դա ստուգելու համար:\n\nՀետազոտություններից մեկում մասնակիցներին տեղավորել են առանձին սենյակներում և հաղորդակցվել ինտերկոմի միջոցով: Երբ «մասնակիցներից մեկը» (իրականում ձայնագրություն) նմանակում էր նոպա ունենալը, նրանք, ովքեր հավատում էին, որ միակն է, ով կարող էր դա լսել, արագ արձագանքեցին՝ 85% մեկ րոպեի ընթացքում: Բայց երբ մասնակիցները կարծում էին, որ ևս չորսը նույնպես լսում են, միայն 31%-ն է պատասխանել:\n\nԴարլին և Լատանեն սա անվանեցին «կողմնակի էֆեկտ»՝ այն բացահայտումը, որ ուրիշների ներկայությունը նվազեցնում է անհատական ​​օգնության վարքագիծը երկու մեխանիզմների միջոցով՝ պատասխանատվության բաշխում («ուրիշը կօգնի») և բազմակարծիք տգիտություն («ուրիշ ոչ ոք մտահոգված չէ, ուստի այն չպետք է լուրջ լինի»):\n\nՆշում. Հետագայում հետազոտությունները պարզեցին, որ Times-ի սկզբնական պատմությունը զգալիորեն ուռճացված էր. ավելի քիչ մարդիկ են ականատես եղել հարձակմանը, քան պնդում էին, իսկ ոմանք էլ ոստիկանություն են կանչել: Բայց նրա կողմից ոգեշնչված հետազոտությունը հաստատապես հաստատվել է:",
    "titleAz": "Kitty Genovese və Bystander Apatiyası",
    "contentAz": "13 mart 1964-cü ildə 28 yaşlı Catherine \"Kitty\" Genovese bar meneceri kimi növbəsini bitirdikdən sonra təxminən saat 3:15-də Nyu-Yorkun Kvins ştatındakı Kew Gardensdəki mənzilinə qayıdırdı. O, avtomobilindən gedərkən Uinston Mozilinin hücumuna məruz qalıb.\n\nKitty kömək üçün qışqırdı. Yaşayış binasında işıqlar yanıb. Qonşu pəncərədən qışqırdı. Moseley qaçdı, lakin on dəqiqə sonra geri qayıdıb, pilləkən boşluğunda yenidən ona hücum etdi, burada bıçaqladı, qarət etdi və nəticədə onu öldürdü.\n\nThe New York Times xəbər verir ki, 38 şahid hücumu izləyib və ya eşidib və heç nə etməyib – bu, şəhər laqeydliyinin əsas hekayəsinə çevrilib. Başlıq milləti şoka saldı.\n\nPsixoloqlar Con Darli və Bibb Latane hekayədən çox narahat idilər. Şahidləri sadəcə olaraq diqqətsiz kimi qınamaq əvəzinə, onlar fərz etdilər ki, şahidlərin çoxluğu problem ola bilərdi. Bunu yoxlamaq üçün bir sıra təcrübələr hazırladılar.\n\nBir araşdırmada iştirakçılar ayrı otaqlara yerləşdirilib və interkom vasitəsilə əlaqə saxlanılıb. Bir \"iştirakçı\" (əslində səsyazma) tutma keçirməyi simulyasiya etdikdə, bunu eşidə bilən yeganə şəxs olduğuna inananlar tez cavab verdilər - bir dəqiqə ərzində 85%. Lakin iştirakçılar dörd nəfərin də dinlədiyinə inandıqda, yalnız 31% cavab verdi.\n\nDarley və Latane bunu \"gözdən keçirmə effekti\" adlandırdılar - başqalarının mövcudluğunun iki mexanizm vasitəsilə fərdi yardım davranışını azaldacağının tapılması: məsuliyyətin yayılması (\"başqası kömək edəcək\") və plüralistik cəhalət (\"başqa heç kimi narahat etmir, ona görə də ciddi olmamalıdır\").\n\nQeyd: Sonrakı araşdırmalar orijinal Times hekayəsinin əhəmiyyətli dərəcədə şişirdildiyini ortaya qoydu - iddia ediləndən daha az adam hücumun şahidi oldu və bəziləri polisə zəng etdi. Lakin onun ilham verdiyi tədqiqat möhkəm şəkildə təsdiqləndi.",
    "contentRu": "13 марта 1964 года 28-летняя Кэтрин «Китти» Дженовезе возвращалась в свою квартиру в Кью-Гарденс, Квинс, Нью-Йорк, примерно в 3:15 утра после окончания смены в качестве менеджера бара. Когда она выходила из машины, на нее напал Уинстон Мозли.\n\nКитти звала на помощь. В многоквартирном доме зажегся свет. Сосед кричал из окна. Мозли убежал, но вернулся через десять минут, чтобы снова напасть на нее на лестничной клетке, где он нанес ей удар, ограбил и в конечном итоге убил ее.\n\nГазета New York Times сообщила, что 38 свидетелей наблюдали или слышали нападение и ничего не предприняли — это утверждение стало определяющей историей городской апатии. Заголовок шокировал нацию.\n\nПсихологи Джон Дарли и Бибб Латане были глубоко обеспокоены этой историей. Вместо того, чтобы просто осудить свидетелей как равнодушных, они предположили, что проблема могла быть в самом количестве свидетелей. Чтобы проверить это, они разработали серию экспериментов.\n\nВ одном исследовании участников поместили в отдельные комнаты и общались через интерком. Когда один «участник» (на самом деле запись) имитировал приступ, те, кто считал, что они единственные, кто мог это слышать, отреагировали быстро — 85% в течение одной минуты. Но когда участники поверили, что четверо других тоже слушают, ответил только 31%.\n\nДарли и Латане назвали это «эффектом свидетеля» — обнаружение того, что присутствие других снижает индивидуальное помогающее поведение посредством двух механизмов: распыления ответственности («кто-то другой поможет») и плюралистического невежества («никто больше не обеспокоен, поэтому это не должно быть серьезно»).\n\nПримечание. Более поздние исследования показали, что первоначальная история Times была значительно преувеличена: свидетелями нападения стало меньше людей, чем утверждалось, а некоторые все же вызвали полицию. Но исследования, которые оно вдохновило, получили убедительное подтверждение.",
    "moralHy": "Որքան շատ մարդիկ ներկա գտնվեն արտակարգ իրավիճակների ժամանակ, այնքան քիչ հավանական է, որ որևէ անհատ օգնի, դա հակաինտուիտիվ բացահայտում է, որը փրկում է կյանքին:",
    "moralRu": "Чем больше людей присутствует во время чрезвычайной ситуации, тем меньше вероятность того, что кто-то сможет помочь – а это противоречивый вывод, который может спасти жизни людей.",
    "moralAz": "Fövqəladə vəziyyət zamanı nə qədər çox insan iştirak etsə, hər hansı bir şəxsin kömək etmə ehtimalı bir o qədər az olar - bu, həyat qurtaran nəticələri olan əks-intuitiv tapıntıdır."
  },
  {
    "id": 8,
    "title": "Seligman and the Dogs Who Gave Up",
    "titleKa": "სელიგმანი და ძაღლები, რომლებმა჊ დანებდეს",
    "chapterId": 10,
    "icon": "mdi:emoticon-sad-outline",
    "content": "In 1967, Martin Seligman and Steven Maier were graduate students at the University of Pennsylvania conducting research on learning. Their experiment would accidentally reveal one of psychology's most important concepts.\n\nThe experiment had three groups of dogs. Group 1 received mild electric shocks they could stop by pressing a panel with their noses. Group 2 received the same shocks but had no way to stop them—they were \"yoked\" to Group 1, receiving the exact same pattern of shocks regardless of what they did. Group 3 received no shocks at all.\n\nLater, all three groups were placed in a shuttle box—a chamber divided by a low barrier the dogs could easily jump over. Shocks were delivered to one side, and the dogs simply needed to jump to the other side to escape.\n\nGroups 1 and 3 quickly learned to jump the barrier. But Group 2—the dogs who had previously been unable to escape—didn't even try. They lay down, whimpered, and passively accepted the shock. Two-thirds of them made no attempt to escape, even though the barrier was right there.\n\nSeligman called this \"learned helplessness\"—the state in which, after experiencing uncontrollable negative events, an organism stops trying to change its situation even when escape becomes possible.\n\nThe implications extended far beyond dogs. Seligman proposed that learned helplessness was a key model for understanding human depression. People who experience repeated failures or uncontrollable negative events may develop a pervasive belief that their actions don't matter—leading to passivity, sadness, and withdrawal.\n\nThis insight led Seligman to develop new therapeutic approaches. Crucially, he discovered that learned helplessness could be reversed through \"immunization\"—earlier experiences of mastery and control. This eventually led him to found the field of positive psychology, studying not just what makes people sick but what makes them flourish.",
    "contentKa": "1967 წელს, მარტინ სელიგმანმა ექსპერიმენტი ჩაატარა ძაღლებზე, რომლებსა჊ ელექტროშოკისგან თავის დაღწევა არ შეეძლოთ. მოგვიანებით მათ თავის დაღწევა჊ შეეძლოთ, მაგრამ არ სცადეს. სელიგმანმა ამას \"სწავლილი უძლურობა\" უწოდა და ეს დეპრესიის გაგების მოდელად იქ჊ა. მოგვიანებით მან პოზიტიური ფსიქოლოგია დააარსა.",
    "moral": "Repeated failure can teach us to stop trying—but helplessness can be unlearned. Experiences of mastery and control can reverse it.",
    "moralKa": "განმეორებულმა წარუმატებებმა შეიძლება გვასწავლოს დანებდეს, მაგრამ უძლურობას გადასწავლა შეიძლება.",
    "titleRu": "Селигман и сдавшиеся собаки",
    "moralAz": "Təkrarlanan uğursuzluqlar bizə cəhd etməyi dayandırmağı öyrədə bilər, lakin acizlik öyrənilə bilər. Ustalıq və nəzarət təcrübələri onu geri qaytara bilər.",
    "moralRu": "Повторяющиеся неудачи могут научить нас перестать пытаться, но от беспомощности можно отучиться. Опыт мастерства и контроля может обратить это вспять.",
    "moralHy": "Կրկնվող ձախողումները կարող են սովորեցնել մեզ դադարեցնել փորձերը, բայց անօգնականությունը կարող է չսովորել: Վարպետության և վերահսկողության փորձը կարող է շրջել այն:",
    "titleHy": "Սելիգմանը և շները, ովքեր հանձնվեցին",
    "contentHy": "1967թ.-ին Մարտին Սելիգմանը և Սթիվեն Մայերը Փենսիլվանիայի համալսարանի ասպիրանտներ էին, որոնք ուսումնասիրություններ էին կատարում ուսման վերաբերյալ: Նրանց փորձը պատահաբար կբացահայտեր հոգեբանության ամենակարևոր հասկացություններից մեկը:\n\nՓորձը ունեցել է շների երեք խումբ. 1-ին խումբը ստացել է թեթև էլեկտրական ցնցումներ, որոնք կարող էին դադարեցնել՝ սեղմելով վահանակը իրենց քթով: 2-րդ խումբը ստացավ նույն ցնցումները, բայց չկարողացավ դրանք կանգնեցնել. նրանք «լծվեցին» 1-ին խմբին՝ ստանալով ցնցումների ճիշտ նույն օրինաչափությունը՝ անկախ նրանց արածից: 3-րդ խումբն ընդհանրապես ցնցումներ չի ստացել:\n\nԱվելի ուշ բոլոր երեք խմբերը տեղադրվեցին մաքոքային տուփի մեջ՝ մի խցիկ, որը բաժանված էր ցածր արգելքով, որի վրայով շները հեշտությամբ կարող էին ցատկել։ Ցնցումները հասցվել են մի կողմից, և շներին պարզապես անհրաժեշտ է եղել ցատկել մյուս կողմ՝ փախչելու համար:\n\n1-ին և 3-րդ խմբերն արագ սովորեցին ցատկել արգելապատնեշը: Բայց 2-րդ խումբը՝ շները, որոնք նախկինում չէին կարողանում փախչել, նույնիսկ չփորձեցին: Նրանք պառկեցին, նվնվացին և պասիվ ընդունեցին ցնցումը։ Նրանց երկու երրորդը փախչելու փորձեր չարեցին, չնայած որ պատնեշը հենց այնտեղ էր։\n\nՍելիգմանը սա անվանեց «սովորած անօգնականություն»՝ այն վիճակը, երբ անկառավարելի բացասական իրադարձություններ ապրելուց հետո օրգանիզմը դադարում է փորձել փոխել իր իրավիճակը, նույնիսկ երբ հնարավոր է դառնում փախուստը:\n\nՀետևանքները շատ ավելի հեռու էին շներից: Սելիգմանը առաջարկեց, որ սովորած անօգնականությունը մարդկային դեպրեսիան հասկանալու հիմնական մոդելն է: Մարդիկ, ովքեր ունենում են կրկնվող անհաջողություններ կամ անկառավարելի բացասական իրադարձություններ, կարող են զարգացնել համատարած համոզմունք, որ իրենց գործողությունները նշանակություն չունեն, ինչը հանգեցնում է պասիվության, տխրության և հեռանալու:\n\nԱյս պատկերացումը ստիպեց Սելիգմանին մշակել նոր թերապևտիկ մոտեցումներ: Կարևորն այն է, որ նա բացահայտեց, որ սովորած անօգնականությունը կարող է շրջվել «իմունիզացիայի» միջոցով՝ յուրացման և վերահսկման ավելի վաղ փորձառությունների միջոցով: Սա, ի վերջո, ստիպեց նրան հիմնել դրական հոգեբանության ոլորտը՝ ուսումնասիրելով ոչ միայն այն, ինչն է մարդկանց հիվանդացնում, այլ այն, ինչը նրանց ծաղկում է դարձնում:",
    "titleAz": "Seligman və imtina edən itlər",
    "contentAz": "1967-ci ildə Martin Seligman və Steven Maier Pensilvaniya Universitetində öyrənmə üzrə tədqiqat aparan aspirant idilər. Onların təcrübəsi təsadüfən psixologiyanın ən vacib anlayışlarından birini ortaya çıxaracaqdı.\n\nTəcrübədə üç qrup it var idi. 1-ci qrup burunları ilə panelə basaraq dayandıra bildikləri yüngül elektrik şoku aldılar. 2-ci qrup eyni zərbələri aldı, lakin onları dayandırmaq üçün heç bir yol yox idi - onlar 1-ci qrupa \"boyunduruldular\" və nə etmələrindən asılı olmayaraq eyni zərbə modelini aldılar. 3-cü qrup heç bir zərbə almadı.\n\nDaha sonra hər üç qrup itlərin asanlıqla tullana bildiyi alçaq bir maneə ilə bölünmüş bir kameraya yerləşdirildi. Zərbələr bir tərəfə çatdırıldı və itlər qaçmaq üçün sadəcə digər tərəfə tullanmalı idi.\n\n1 və 3-cü qruplar sədddən tullanmağı tez öyrəndilər. Lakin 2-ci qrup - əvvəllər qaça bilməyən itlər - cəhd belə etmədilər. Onlar uzandılar, sızıldadılar və şoku passiv qəbul etdilər. Onların üçdə ikisi maneənin tam orada olmasına baxmayaraq, qaçmağa cəhd etməyib.\n\nSeliqman bunu \"öyrənilmiş çarəsizlik\" adlandırdı - orqanizmin idarəolunmaz neqativ hadisələrlə qarşılaşdıqdan sonra hətta qaçmaq mümkün olduqda belə vəziyyətini dəyişməyə cəhd etməyi dayandırdığı vəziyyət.\n\nNəticələr itlərdən çox kənara çıxdı. Seligman, öyrənilmiş çarəsizliyin insan depressiyasını anlamaq üçün əsas model olduğunu təklif etdi. Dəfələrlə uğursuzluqlar və ya idarəolunmaz neqativ hadisələrlə qarşılaşan insanlar, hərəkətlərinin heç bir əhəmiyyət kəsb etmədiyinə dair geniş bir inam inkişaf etdirə bilər - passivliyə, kədərə və geri çəkilməyə səbəb olur.\n\nBu fikir Seligmanı yeni terapevtik yanaşmalar inkişaf etdirməyə vadar etdi. Əsas odur ki, o, öyrənilmiş çarəsizliyin “immunizasiya” yolu ilə geri qaytarıla biləcəyini kəşf etdi - əvvəlki mənimsəmə və nəzarət təcrübələri. Bu, nəhayət, onu müsbət psixologiya sahəsini tapmağa vadar etdi, insanları nəinki xəstələndirdiyini, həm də onları çiçəkləndirən şeyi öyrəndi.",
    "contentRu": "В 1967 году Мартин Селигман и Стивен Майер были аспирантами Пенсильванского университета и проводили исследования в области обучения. Их эксперимент случайно раскрыл одну из самых важных концепций психологии.\n\nВ эксперименте участвовали три группы собак. Группа 1 получила легкий удар током, который они могли остановить, нажав носом на панель. Группа 2 получила те же самые потрясения, но не имела возможности их остановить — они были «привязаны» к Группе 1, получая точно такую ​​же схему потрясений, независимо от того, что они делали. Группа 3 вообще не подвергалась никаким потрясениям.\n\nПозже все три группы были помещены в челночный бокс — камеру, разделенную невысоким барьером, через который собаки могли легко перепрыгнуть. Удары наносились в одну сторону, и собакам просто нужно было перепрыгнуть на другую сторону, чтобы спастись.\n\nГруппы 1 и 3 быстро научились перепрыгивать барьер. Но группа 2 — собаки, ранее не сумевшие убежать, — даже не попыталась. Они легли, хныкали и пассивно принимали шок. Две трети из них не пытались бежать, хотя барьер был тут же.\n\nСелигман назвал это «выученной беспомощностью» — состоянием, в котором после переживания неконтролируемых негативных событий организм перестает пытаться изменить свою ситуацию, даже когда бегство становится возможным.\n\nПоследствия распространялись далеко за пределы собак. Селигман предположил, что выученная беспомощность является ключевой моделью для понимания человеческой депрессии. У людей, которые сталкиваются с повторяющимися неудачами или неконтролируемыми негативными событиями, может развиться всепроникающее убеждение, что их действия не имеют значения, что приводит к пассивности, печали и замкнутости.\n\nЭто понимание побудило Селигмана разработать новые терапевтические подходы. Что особенно важно, он обнаружил, что выученную беспомощность можно обратить вспять посредством «иммунизации» — более раннего опыта господства и контроля. В конечном итоге это привело его к созданию области позитивной психологии, изучающей не только то, что делает людей больными, но и то, что помогает им процветать."
  },
  {
    "id": 9,
    "title": "The Case of H.M.: A Life Without Memory",
    "titleKa": "H.M.-ის შემთხვევა: ცხოვრება მეხსიერების გარეშე",
    "chapterId": 7,
    "icon": "mdi:head-question-outline",
    "content": "Henry Gustav Molaison—known for decades in scientific literature only as \"H.M.\" to protect his privacy—is perhaps the most studied individual in the history of neuroscience. His story begins with tragedy and becomes a cornerstone of memory research.\n\nH.M. suffered from severe, debilitating epilepsy that began after a bicycle accident at age seven. By his mid-twenties, the seizures had become so frequent and violent that he could not hold a job or live independently.\n\nIn 1953, neurosurgeon William Beecher Scoville performed an experimental operation. He removed large portions of H.M.'s medial temporal lobes bilaterally—including most of his hippocampus on both sides.\n\nThe surgery was a medical success: the seizures were dramatically reduced. But the side effect was devastating. H.M. could no longer form new long-term memories. He could remember events from his childhood, his parents' names, and facts from before the surgery. But anything that happened after 1953 vanished within minutes.\n\nH.M. would read the same magazine over and over, enjoying it fresh each time. He could not recognize the researchers who visited him daily for years. Every day, his father's death was news to him again. He described his existence as \"like waking from a dream... every day is alone in itself.\"\n\nYet H.M.'s memory was not entirely destroyed. He could learn new motor skills—like tracing a star in a mirror—and improve with practice, even though he had no memory of having practiced. This proved that different types of memory (declarative vs. procedural) involve different brain systems.\n\nH.M. cooperated with researchers for over 50 years until his death in 2008. His brain was donated to science, sliced into 2,401 thin sections, and digitized for future study. His case single-handedly established the hippocampus as critical for memory formation and reshaped our understanding of how memories are made.",
    "contentKa": "ჰენრი მოლეიზონი (H.M.) ნეირომეცნიერების ისტორიაში ყველაზე შესწავლილი ადამიანია. 1953 წელს ეპილეფსიის სამკურნალოდ, ქირურგმა ჰიპოკამპი ამოაჭრა. კრუნჩხები შემცირდა, მაგრამ ახალი გრძელვადიანი მოგონებების ჩამოყალიბება ვერ შეძლო. მისმა შემთხვევამ დაამტკიცა, რომ ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია.",
    "moral": "The hippocampus is critical for memory formation—and different types of memory involve separate brain systems.",
    "moralKa": "ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია, და მეხსიერების სხვადასხვა ტიპები სხვადასხვა ტვინის სისტემებს იყენებს.",
    "titleRu": "Дело Х.М.: жизнь без памяти",
    "moralAz": "Hipokampus yaddaşın formalaşması üçün vacibdir və müxtəlif yaddaş növləri ayrı beyin sistemlərini əhatə edir.",
    "moralHy": "Հիպոկամպը կարևոր նշանակություն ունի հիշողության ձևավորման համար, և հիշողության տարբեր տեսակներ ներառում են ուղեղի առանձին համակարգեր:",
    "titleHy": "Հ.Մ.-ի գործը՝ կյանք առանց հիշողության",
    "moralRu": "Гиппокамп имеет решающее значение для формирования памяти, а разные типы памяти задействуют отдельные системы мозга.",
    "contentRu": "Генри Густав Молесон, десятилетиями известный в научной литературе только как «Е.М.» чтобы защитить свою частную жизнь, — пожалуй, самый изученный человек в истории нейробиологии. Его история начинается с трагедии и становится краеугольным камнем исследований памяти.\n\nХ.М. страдал от тяжелой, изнурительной эпилепсии, которая началась после велосипедной аварии в возрасте семи лет. К двадцати годам припадки стали настолько частыми и сильными, что он не мог ни работать, ни жить самостоятельно.\n\nВ 1953 году нейрохирург Уильям Бичер Сковилл провел экспериментальную операцию. Он удалил большие части медиальных височных долей Х. М. с обеих сторон, включая большую часть гиппокампа с обеих сторон.\n\nОперация прошла с медицинской точки зрения успешно: приступы резко уменьшились. Но побочный эффект был разрушительным. Х.М. больше не мог формировать новые долговременные воспоминания. Он мог вспомнить события из своего детства, имена своих родителей и факты, произошедшие до операции. Но все, что произошло после 1953 года, исчезло за считанные минуты.\n\nХ.М. читал один и тот же журнал снова и снова, каждый раз наслаждаясь его свежестью. Он не мог узнать исследователей, которые навещали его ежедневно в течение многих лет. Каждый день смерть отца снова была для него новостью. Он описывал свое существование как «как пробуждение ото сна… каждый день сам по себе одинок».\n\nИ все же память Х.М. не была полностью уничтожена. Он мог освоить новые двигательные навыки — например, рисовать звезду в зеркале — и совершенствоваться по мере практики, хотя у него не было воспоминаний о тренировках. Это доказало, что разные типы памяти (декларативная и процедурная) задействуют разные системы мозга.\n\nХ.М. сотрудничал с исследователями более 50 лет до своей смерти в 2008 году. Его мозг был передан науке, нарезан на 2401 тонкий срез и оцифрован для будущего изучения. Его случай единолично доказал, что гиппокамп играет решающую роль в формировании памяти, и изменил наше понимание того, как создаются воспоминания.",
    "contentHy": "Հենրի Գուստավ Մոլայսոնը, որը տասնամյակներ շարունակ գիտական ​​գրականության մեջ հայտնի է միայն «Հ.Մ. պաշտպանել իր գաղտնիությունը, թերևս ամենաշատ ուսումնասիրված անհատն է նյարդագիտության պատմության մեջ: Նրա պատմությունը սկսվում է ողբերգությամբ և դառնում հիշողության հետազոտության հիմնաքար:\n\nՀ.Մ. տառապում էր ծանր, թուլացնող էպիլեպսիայով, որը սկսվել էր յոթ տարեկանում հեծանվային վթարից հետո: Նրա քսան տարեկանների կեսերին նոպաներն այնքան հաճախակի ու կատաղի էին դարձել, որ նա չէր կարող աշխատանք ունենալ կամ ինքնուրույն ապրել:\n\n1953 թվականին նյարդավիրաբույժ Ուիլյամ Բիչեր Սքովիլը փորձարարական վիրահատություն է կատարել։ Նա երկկողմանի հեռացրել է Հ.Մ.-ի միջին ժամանակային բլթերի մեծ մասը՝ ներառյալ նրա հիպոկամպի մեծ մասը երկու կողմերից:\n\nՎիրահատությունը բժշկական հաջողություն ունեցավ. նոպաները կտրուկ նվազեցին: Բայց կողմնակի ազդեցությունը կործանարար էր: Հ.Մ. այլևս չէր կարող նոր երկարաժամկետ հիշողություններ ձևավորել: Նա կարող էր հիշել իր մանկության դեպքերը, ծնողների անունները և փաստեր վիրահատությունից առաջ: Բայց այն ամենը, ինչ տեղի ունեցավ 1953 թվականից հետո, անհետացավ րոպեների ընթացքում:\n\nՀ.Մ. կարդում էր նույն ամսագիրը նորից ու նորից՝ ամեն անգամ թարմ վայելելով այն: Նա չէր կարողանում ճանաչել այն հետազոտողներին, ովքեր տարիներ շարունակ այցելում էին իրեն։ Ամեն օր հոր մահը նորից նորություն էր նրա համար։ Նա նկարագրել է իր գոյությունը որպես «երազից արթնանալու նման... ամեն օր ինքնին մենակ է»:\n\nՍակայն Հ.Մ.-ի հիշողությունն ամբողջությամբ չի ոչնչացվել։ Նա կարող էր սովորել նոր շարժիչ հմտություններ, օրինակ՝ աստղին հայելու մեջ հետագծելը, և կատարելագործվել պրակտիկայի ընթացքում, թեև նա չէր հիշում, որ մարզվել է: Սա ապացուցեց, որ հիշողության տարբեր տեսակներ (դեկլարատիվ ընդդեմ ընթացակարգային) ներառում են ուղեղի տարբեր համակարգեր:\n\nՀ.Մ. Ավելի քան 50 տարի համագործակցել է հետազոտողների հետ մինչև իր մահը 2008թ.: Նրա ուղեղը նվիրաբերվել է գիտությանը, կտրատվել 2401 բարակ հատվածների և թվայնացվել հետագա ուսումնասիրության համար: Նրա դեպքը միայնակ հաստատեց հիպոկամպը որպես կարևոր նշանակություն հիշողության ձևավորման համար և վերափոխեց մեր պատկերացումները, թե ինչպես են ստեղծվում հիշողությունները:",
    "titleAz": "H.M.-nin işi: Yaddaşsız bir həyat",
    "contentAz": "Henry Gustav Molaison — onilliklər boyu elmi ədəbiyyatda yalnız \"H.M.\" kimi tanınır. şəxsi həyatını qorumaq - bəlkə də nevrologiya tarixində ən çox öyrənilmiş fərddir. Onun hekayəsi faciə ilə başlayır və yaddaş tədqiqatının təməl daşına çevrilir.\n\nH.M. yeddi yaşında velosiped qəzasından sonra başlayan ağır, zəiflədici epilepsiyadan əziyyət çəkirdi. İyirmi yaşlarının ortalarında qıcolmalar o qədər tez-tez və şiddətli olurdu ki, o, nə işlə məşğul ola, nə də müstəqil yaşaya bildi.\n\n1953-cü ildə neyrocərrah William Bicher Scoville eksperimental əməliyyat keçirdi. O, H.M.-nin medial temporal loblarının böyük hissələrini, o cümlədən hər iki tərəfdəki hipokampusunun böyük hissəsini ikitərəfli şəkildə çıxardı.\n\nƏməliyyat tibbi uğur idi: qıcolmalar kəskin şəkildə azaldı. Ancaq yan təsir dağıdıcı oldu. H.M. artıq yeni uzunmüddətli xatirələr formalaşdıra bilmirdi. Uşaqlığından baş verənləri, valideynlərinin adlarını, əməliyyatdan əvvəlki faktları xatırlaya bilirdi. Lakin 1953-cü ildən sonra baş verən hər şey bir neçə dəqiqə ərzində yox oldu.\n\nH.M. eyni jurnalı təkrar-təkrar oxuyar, hər dəfə təzədən zövq alırdı. İllər boyu ona hər gün gələn tədqiqatçıları tanıya bilmirdi. Hər gün atasının ölümü onun üçün yenidən xəbər olurdu. O, varlığını “yuxudan oyanmaq kimi... hər gün öz-özlüyündə təkdir” kimi təsvir edirdi.\n\nBununla belə, H.M.-nin yaddaşı tamamilə məhv edilməmişdir. O, güzgüdə ulduzu izləmək kimi yeni motor bacarıqlarını öyrənə və məşq etdiyini xatırlamasa da, təcrübə ilə təkmilləşə bilərdi. Bu sübut etdi ki, müxtəlif yaddaş növləri (deklarativ və prosessual) müxtəlif beyin sistemlərini əhatə edir.\n\nH.M. 2008-ci ildə ölümünə qədər 50 ildən çox tədqiqatçılarla əməkdaşlıq etdi. Onun beyni elmə verildi, 2401 nazik hissəyə kəsildi və gələcək tədqiqatlar üçün rəqəmsallaşdırıldı. Onun işi tək başına hipokampusun yaddaşın formalaşması üçün kritik olduğunu təyin etdi və xatirələrin necə qurulduğuna dair anlayışımızı yenidən formalaşdırdı."
  },
  {
    "id": 10,
    "title": "Rosenhan's \"Being Sane in Insane Places\"",
    "titleKa": "როზენჰანის \"გონიერება გიჟურ ადგილებში\"",
    "chapterId": 14,
    "icon": "mdi:hospital-building",
    "content": "In 1973, Stanford psychologist David Rosenhan published one of the most provocative and influential studies in the history of psychiatry: \"On Being Sane in Insane Places.\"\n\nRosenhan recruited eight mentally healthy volunteers—including himself, a psychology graduate student, a pediatrician, a psychiatrist, a painter, and a housewife—to present themselves at twelve different psychiatric hospitals across the United States.\n\nEach pseudo-patient reported a single symptom: they heard a voice saying \"empty,\" \"hollow,\" or \"thud.\" They gave false names and occupations but otherwise described their life histories and emotional states truthfully. All were diagnosed with psychiatric disorders (most commonly schizophrenia) and admitted.\n\nOnce inside, all pseudo-patients immediately stopped reporting any symptoms and behaved completely normally. They took notes openly, cooperated with staff, and told doctors they felt fine. Yet not a single one was identified as healthy by staff.\n\nTheir hospitalizations lasted from 7 to 52 days, averaging 19 days. When discharged, they received the diagnosis \"schizophrenia, in remission\"—meaning the label stuck even upon release.\n\nIronically, real patients often recognized the pseudo-patients were not mentally ill. \"You're not crazy. You're a journalist or a professor,\" they said. But staff never questioned the diagnoses.\n\nIn a follow-up study, Rosenhan told a hospital that pseudo-patients would attempt admission over the next three months. Staff confidently identified 41 patients as impostors. In reality, Rosenhan had sent no one.\n\nThe study's conclusion was searing: psychiatric institutions cannot reliably distinguish the sane from the insane. Diagnostic labels, once applied, color all subsequent perception and behavior of both patients and staff. The study contributed to major reforms in psychiatric diagnosis and the development of more rigorous diagnostic criteria.",
    "contentKa": "1973 წელს, სტენფორდის ფსიქოლოგმა როზენჰანმა 8 ჯანსაღი მოხალისე 12 ფსიქიატრიულ საავადმყოფოში გაგზავნა. მათ შიზოფრენია დაუსვეს და 7-დან 52 დღემდე დარჩნენ. არავინ პერსონალმა ვერ ამოიცნო ისინი ჯანსაღად. ეს კვლევამ დიაგნოსტიკის სერიოზულ რეფორმებს შეუწყო.",
    "moral": "Labels are powerful—once categorized, everything is seen through that lens. Psychiatric diagnosis must be approached with extreme rigor and humility.",
    "moralKa": "იარლიყები ძალიან ძლიერია—ერთხელ კატეგორიზებული, ყველაფერი ამ ლინზით აღიქმება.",
    "titleRu": "Розенхан «Быть ​​в здравом уме в безумных местах».",
    "moralAz": "Etiketlər güclüdür - kateqoriyalara bölündükdən sonra hər şey bu obyektivdən görünür. Psixiatrik diaqnoza həddindən artıq ciddilik və təvazökarlıqla yanaşmaq lazımdır.",
    "moralHy": "Պիտակները հզոր են. դասակարգվելուց հետո ամեն ինչ երևում է այդ ոսպնյակի միջով: Հոգեբուժական ախտորոշմանը պետք է մոտենալ ծայրահեղ խստությամբ և խոնարհությամբ:",
    "titleHy": "Ռոզենհանի «Մեղսունակ լինել խելագար վայրերում»",
    "contentHy": "1973 թվականին Սթենֆորդի հոգեբան Դեյվիդ Ռոզենհանը հրապարակեց հոգեբուժության պատմության մեջ ամենասադրիչ և ազդեցիկ հետազոտություններից մեկը՝ «Խելագար վայրերում ողջախոհ լինելու մասին»։\n\nՌոզենհանը հավաքագրեց ութ հոգեպես առողջ կամավորների, այդ թվում՝ ինքը՝ հոգեբանության ասպիրանտ, մանկաբույժ, հոգեբույժ, նկարիչ և տնային տնտեսուհի, որպեսզի ներկայանան Միացյալ Նահանգների տասներկու տարբեր հոգեբուժարաններում:\n\nՅուրաքանչյուր կեղծ հիվանդ հայտնել է մեկ ախտանիշ. նրանք լսել են մի ձայն, որն ասում էր «դատարկ», «խոռոչ» կամ «դուխ»: Նրանք կեղծ անուններ և զբաղմունքներ էին տալիս, բայց այլ կերպ ճշմարիտ նկարագրում էին իրենց կյանքի պատմությունն ու հուզական վիճակները: Բոլորի մոտ ախտորոշվել են հոգեկան խանգարումներ (առավել հաճախ՝ շիզոֆրենիա) և ընդունվել:\n\nՆերս մտնելուց հետո բոլոր պսևդո-հիվանդներն անմիջապես դադարեցրին որևէ ախտանիշ հայտնել և իրենց լիովին նորմալ պահեցին: Նրանք բացահայտ նշումներ էին անում, համագործակցում անձնակազմի հետ և բժիշկներին ասացին, որ իրենց լավ են զգում: Այնուամենայնիվ, անձնակազմի կողմից ոչ մեկը առողջ չի ճանաչվել:\n\nՆրանց հոսպիտալացումները տեւել են 7-ից 52 օր՝ միջինը 19 օր։ Դուրս գրվելիս նրանք ստացել են «շիզոֆրենիա, ռեմիսիայի մեջ» ախտորոշումը, ինչը նշանակում է, որ պիտակը կպչում է նույնիսկ ազատ արձակվելուց հետո:\n\nՃակատագրի հեգնանքով, իրական հիվանդները հաճախ ճանաչում էին, որ կեղծ հիվանդները հոգեկան հիվանդ չեն: «Դու գիժ չես, դու լրագրող ես կամ պրոֆեսոր»,- ասացին նրանք։ Բայց անձնակազմը երբեք կասկածի տակ չի դրել ախտորոշումները:\n\nՀետագա ուսումնասիրության ընթացքում Ռոզենհանը հիվանդանոցում ասաց, որ կեղծ հիվանդները կփորձեն ընդունելություն առաջիկա երեք ամիսների ընթացքում: Անձնակազմը վստահորեն հայտնաբերել է 41 հիվանդի որպես խաբեբաներ: Իրականում Ռոզենհանը ոչ ոքի չէր ուղարկել։\n\nՀետազոտության եզրակացությունը սարսափելի էր. հոգեբուժական հաստատությունները չեն կարող հուսալիորեն տարբերել ողջախոհներին խելագարներից: Ախտորոշիչ պիտակները, կիրառվելուց հետո, գունավորում են ինչպես հիվանդների, այնպես էլ անձնակազմի բոլոր հետագա ընկալումն ու վարքը: Ուսումնասիրությունը նպաստեց հոգեբուժական ախտորոշման հիմնական բարեփոխումներին և ավելի խիստ ախտորոշիչ չափանիշների մշակմանը:",
    "moralRu": "Ярлыки обладают мощной силой: после того, как они классифицированы, все можно увидеть через эту призму. К психиатрическому диагнозу необходимо подходить с предельной строгостью и смирением.",
    "titleAz": "Rosenhanın \"Dəli yerlərdə ağlı başında olmaq\"",
    "contentRu": "В 1973 году психолог из Стэнфорда Дэвид Розенхан опубликовал одно из самых провокационных и влиятельных исследований в истории психиатрии: «О том, как быть в здравом уме в безумных местах».\n\nРозенхан набрал восемь психически здоровых добровольцев, в том числе себя самого, аспиранта психологии, педиатра, психиатра, художника и домохозяйку, чтобы они явились в двенадцать различных психиатрических больниц по всей территории Соединенных Штатов.\n\nКаждый псевдопациент сообщал об одном симптоме: он слышал голос, говорящий «пусто», «пусто» или «стук». Они называли вымышленные имена и род занятий, но в остальном правдиво описывали историю своей жизни и эмоциональное состояние. У всех были диагностированы психические расстройства (чаще всего шизофрения) и госпитализированы.\n\nОказавшись внутри, все псевдопациенты сразу же перестали сообщать о каких-либо симптомах и вели себя совершенно нормально. Они открыто делали записи, сотрудничали с персоналом и говорили врачам, что чувствуют себя хорошо. Однако ни один из них не был признан персоналом здоровым.\n\nИх госпитализация длилась от 7 до 52 дней, в среднем 19 дней. При выписке им поставили диагноз «шизофрения в стадии ремиссии», то есть ярлык приклеился даже после освобождения.\n\nПо иронии судьбы, реальные пациенты часто признавали, что псевдопациенты не были психически больными. «Ты не сумасшедший. Ты журналист или профессор», — сказали они. Но сотрудники никогда не подвергали сомнению диагнозы.\n\nВ ходе последующего исследования Розенхан сообщил больнице, что псевдопациенты будут пытаться госпитализироваться в течение следующих трех месяцев. Персонал уверенно опознал 41 пациента как самозванцев. На самом деле Розенхан никого не послал.\n\nВывод исследования был ошеломляющим: психиатрические учреждения не могут достоверно отличить здравомыслящих от невменяемых. Диагностические ярлыки, однажды примененные, определяют все последующее восприятие и поведение как пациентов, так и персонала. Исследование способствовало крупным реформам в психиатрической диагностике и разработке более строгих диагностических критериев.",
    "contentAz": "1973-cü ildə Stenford psixoloqu David Rosenhan psixiatriya tarixindəki ən təxribatçı və təsirli araşdırmalardan birini nəşr etdi: \"Dəli yerlərdə ağlı başında olmaq haqqında\".\n\nRosenhan, ABŞ-da on iki müxtəlif psixiatriya xəstəxanasında özlərini təqdim etmək üçün özü, psixologiya aspirantı, pediatr, psixiatr, rəssam və ev xanımı daxil olmaqla səkkiz əqli cəhətdən sağlam könüllü işə götürdü.\n\nHər bir psevdo-xəstə tək bir simptom haqqında məlumat verdi: onlar \"boş\", \"boş\" və ya \"tünd\" deyən bir səs eşitdilər. Onlar yalançı adlar və peşələr verdilər, lakin başqa cür öz həyat tarixçələrini və emosional vəziyyətlərini doğru şəkildə təsvir etdilər. Hamısına psixiatrik pozğunluqlar (ən çox şizofreniya) diaqnozu qoyulub və qəbul edilib.\n\nİçəri daxil olduqdan sonra bütün psevdo-xəstələr dərhal hər hansı simptomları bildirməyi dayandırdılar və özlərini tamamilə normal apardılar. Onlar açıq şəkildə qeydlər apardılar, işçilərlə əməkdaşlıq etdilər və həkimlərə özlərini yaxşı hiss etdiklərini söylədilər. Bununla belə, heyət tərəfindən heç birinin sağlam olduğu müəyyən edilmədi.\n\nOnların xəstəxanaya yerləşdirilməsi orta hesabla 19 gün olmaqla 7 gündən 52 günə qədər davam edib. Buraxıldıqda, onlar \"şizofreniya, remissiyada\" diaqnozunu aldılar, yəni etiket buraxıldıqda belə yapışdırıldı.\n\nQəribədir ki, real xəstələr tez-tez psevdo-xəstələrin ruhi xəstə olmadığını tanıyırdılar. “Sən dəli deyilsən, jurnalistsən, professorsan” dedilər. Lakin işçilər heç vaxt diaqnozları şübhə altına almadılar.\n\nSonrakı araşdırmada Rosenhan bir xəstəxanaya dedi ki, psevdo-xəstələr növbəti üç ay ərzində qəbula cəhd edəcəklər. İşçilər 41 xəstəni inamla saxtakar kimi tanıyıblar. Əslində, Rosenhan heç kimi göndərməmişdi.\n\nTədqiqatın nəticəsi dəhşətli idi: psixiatriya institutları sağlam düşüncəli ilə dəlini etibarlı şəkildə ayıra bilmir. Diaqnostik etiketlər tətbiq edildikdən sonra həm xəstələrin, həm də işçilərin bütün sonrakı qavrayışlarını və davranışlarını rəngləndirir. Tədqiqat psixiatrik diaqnostikada əsas islahatlara və daha ciddi diaqnostik meyarların hazırlanmasına kömək etdi."
  }
];

export const MEMORY_CARDS: MemoryCard[] = [
  {
    "id": 1,
    "term": "Psychology",
    "definition": "The scientific study of behavior and mental processes",
    "category": "Basics",
    "termRu": "Психология",
    "termAz": "Psixologiya",
    "definitionRu": "Научное исследование поведения и психических процессов.",
    "definitionKa": "ქცევისა და ფსიქიკური პროცესების მეცნიერული შესწავლა",
    "definitionHy": "Վարքի և մտավոր գործընթացների գիտական ​​ուսումնասիրություն",
    "termKa": "ფსიქოლოგია",
    "termHy": "Հոգեբանություն",
    "definitionAz": "Davranış və psixi proseslərin elmi tədqiqi"
  },
  {
    "id": 2,
    "term": "Neuron",
    "definition": "A nerve cell that transmits electrical and chemical signals",
    "category": "Biology",
    "termRu": "Нейрон",
    "termAz": "Neyron",
    "definitionRu": "Нервная клетка, передающая электрические и химические сигналы.",
    "definitionHy": "Նյարդային բջիջ, որը փոխանցում է էլեկտրական և քիմիական ազդանշաններ",
    "definitionKa": "ნერვული უჯრედი, რომელიც გადასცემს ელექტრულ და ქიმიურ სიგნალებს",
    "termKa": "ნეირონი",
    "termHy": "Նեյրոն",
    "definitionAz": "Elektrik və kimyəvi siqnalları ötürən sinir hüceyrəsi"
  },
  {
    "id": 3,
    "term": "Classical Conditioning",
    "definition": "Learning through association of stimuli (Pavlov)",
    "category": "Learning",
    "termRu": "Классическое кондиционирование",
    "termKa": "კლასიკური კონდიცირება",
    "termHy": "Դասական կոնդիցիոներ",
    "termAz": "Klassik kondisioner",
    "definitionHy": "Սովորում գրգռիչների միավորման միջոցով (Պավլով)",
    "definitionKa": "სწავლა სტიმულის ასოციაციის გზით (პავლოვი)",
    "definitionAz": "Qıcıqlandırıcıların assosiasiyası vasitəsilə öyrənmə (Pavlov)",
    "definitionRu": "Обучение через ассоциацию стимулов (Павлов)"
  },
  {
    "id": 4,
    "term": "Operant Conditioning",
    "definition": "Learning through consequences: reinforcement and punishment (Skinner)",
    "category": "Learning",
    "termHy": "Գործող օդափոխություն",
    "termKa": "ოპერაციული კონდიცირება",
    "termAz": "Operant Kondisioner",
    "termRu": "Оперантное обусловливание",
    "definitionRu": "Обучение через последствия: подкрепление и наказание (Скиннер)",
    "definitionKa": "სწავლა შედეგების მეშვეობით: განმტკიცება და დასჯა (სკინერი)",
    "definitionHy": "Սովորում հետևանքների միջոցով. ամրապնդում և պատիժ (Skinner)",
    "definitionAz": "Nəticələr vasitəsilə öyrənmək: gücləndirmə və cəza (Skinner)"
  },
  {
    "id": 5,
    "term": "Hippocampus",
    "definition": "Brain structure essential for forming new long-term memories",
    "category": "Biology",
    "termRu": "Гиппокамп",
    "termKa": "ჰიპოკამპი",
    "termHy": "Հիպոկամպուս",
    "definitionRu": "Структура мозга необходима для формирования новой долговременной памяти",
    "definitionKa": "ტვინის სტრუქტურა აუცილებელია ახალი გრძელვადიანი მეხსიერების ფორმირებისთვის",
    "definitionHy": "Ուղեղի կառուցվածքը կարևոր է նոր երկարաժամկետ հիշողություններ ձևավորելու համար",
    "definitionAz": "Yeni uzunmüddətli xatirələrin formalaşması üçün vacib olan beyin quruluşu",
    "termAz": "Hipokampus"
  },
  {
    "id": 6,
    "term": "Cognitive Dissonance",
    "definition": "Discomfort from holding contradictory beliefs or attitudes",
    "category": "Social",
    "termRu": "Когнитивный диссонанс",
    "termHy": "Ճանաչողական դիսոնանս",
    "definitionRu": "Дискомфорт от противоречивых убеждений или взглядов.",
    "termKa": "კოგნიტური დისონანსი",
    "definitionKa": "დისკომფორტი ურთიერთსაწინააღმდეგო რწმენის ან დამოკიდებულების შენარჩუნების გამო",
    "definitionHy": "Անհանգստություն հակասական համոզմունքների կամ վերաբերմունքի պատճառով",
    "definitionAz": "Ziddiyyətli inanclara və ya münasibətə sahib olmaqdan narahatlıq",
    "termAz": "Koqnitiv dissonans"
  },
  {
    "id": 7,
    "term": "Maslow's Hierarchy",
    "definition": "Five-level model of motivation from basic needs to self-actualization",
    "category": "Motivation",
    "termAz": "Maslow iyerarxiyası",
    "termHy": "Մասլոուի հիերարխիա",
    "termKa": "მასლოუს იერარქია",
    "termRu": "Иерархия Маслоу",
    "definitionRu": "Пятиуровневая модель мотивации от базовых потребностей до самореализации",
    "definitionKa": "მოტივაციის ხუთ დონის მოდელი ძირითადი მოთხოვნილებებიდან თვითრეალიზაციამდე",
    "definitionHy": "Հիմնական կարիքներից մինչև ինքնաիրականացում մոտիվացիայի հինգ մակարդակի մոդել",
    "definitionAz": "Əsas ehtiyaclardan özünü həyata keçirməyə qədər beş səviyyəli motivasiya modeli"
  },
  {
    "id": 8,
    "term": "Big Five (OCEAN)",
    "definition": "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
    "category": "Personality",
    "termKa": "დიდი ხუთეული (OCEAN)",
    "termHy": "Մեծ հնգյակ (OCEAN)",
    "termRu": "Большая пятерка (ОКЕАН)",
    "termAz": "Böyük beşlik (OCEAN)",
    "definitionRu": "Открытость, Добросовестность, Экстраверсия, Доброжелательность, Невротизм.",
    "definitionHy": "Բացություն, բարեխիղճություն, էքստրավերտություն, համաձայնություն, նևրոտիզմ",
    "definitionKa": "ღიაობა, კეთილსინდისიერება, ექსტრავერსია, თანხმობა, ნევროტიზმი",
    "definitionAz": "Açıqlıq, Vicdanlılıq, Ekstraversiya, Uyğunluq, Nevrotiklik"
  },
  {
    "id": 9,
    "term": "Attachment Theory",
    "definition": "The bond between infant and caregiver shaping later relationships",
    "category": "Development",
    "definitionRu": "Связь между младенцем и лицом, осуществляющим уход, формирует дальнейшие отношения",
    "termRu": "Теория привязанности",
    "termKa": "მიმაგრების თეორია",
    "termHy": "Կցվածության տեսություն",
    "definitionHy": "Երեխայի և խնամողի միջև կապը ձևավորում է հետագա հարաբերությունները",
    "definitionKa": "კავშირი ახალშობილსა და მომვლელს შორის აყალიბებს შემდგომ ურთიერთობებს",
    "termAz": "Qoşma nəzəriyyəsi",
    "definitionAz": "Körpə və baxıcı arasındakı əlaqə sonrakı münasibətləri formalaşdırır"
  },
  {
    "id": 10,
    "term": "Confirmation Bias",
    "definition": "Tendency to seek information that supports existing beliefs",
    "category": "Cognition",
    "termRu": "Предвзятость подтверждения",
    "definitionRu": "Склонность искать информацию, которая поддерживает существующие убеждения.",
    "termKa": "დადასტურების მიკერძოება",
    "termHy": "Հաստատման կողմնակալություն",
    "definitionKa": "ტენდენცია მოიძიოს ინფორმაცია, რომელიც მხარს უჭერს არსებულ რწმენას",
    "definitionHy": "Գոյություն ունեցող համոզմունքները հաստատող տեղեկատվություն փնտրելու միտում",
    "termAz": "Təsdiq qərəzi",
    "definitionAz": "Mövcud inancları dəstəkləyən məlumat axtarmaq meyli"
  },
  {
    "id": 11,
    "term": "Dopamine",
    "definition": "Neurotransmitter involved in reward, motivation, and pleasure",
    "category": "Biology",
    "termKa": "დოფამინი",
    "termRu": "Дофамин",
    "termAz": "Dopamin",
    "termHy": "Դոպամին",
    "definitionRu": "Нейромедиатор, участвующий в вознаграждении, мотивации и удовольствии.",
    "definitionKa": "ნეიროტრანსმიტერი მონაწილეობს ჯილდოში, მოტივაციაში და სიამოვნებაში",
    "definitionHy": "Նեյրոհաղորդիչը ներգրավված է պարգևատրման, մոտիվացիայի և հաճույքի մեջ",
    "definitionAz": "Mükafat, motivasiya və həzzdə iştirak edən neyrotransmitter"
  },
  {
    "id": 12,
    "term": "REM Sleep",
    "definition": "Sleep stage with rapid eye movements and vivid dreaming",
    "category": "Consciousness",
    "termRu": "Быстрый сон",
    "termKa": "REM ძილი",
    "termHy": "REM քուն",
    "definitionKa": "ძილის ეტაპი თვალის სწრაფი მოძრაობით და ნათელი ოცნებებით",
    "definitionHy": "Քնի փուլ՝ աչքերի արագ շարժումներով և վառ երազներով",
    "definitionRu": "Стадия сна с быстрыми движениями глаз и яркими сновидениями.",
    "termAz": "REM yuxusu",
    "definitionAz": "Sürətli göz hərəkətləri və canlı yuxu ilə yuxu mərhələsi"
  },
  {
    "id": 13,
    "term": "Bystander Effect",
    "definition": "Less likely to help when others are present",
    "category": "Social",
    "definitionKa": "ნაკლებად სავარაუდოა, რომ დაეხმაროს, როდესაც სხვები არიან",
    "definitionHy": "Ավելի քիչ հավանական է օգնել, երբ ուրիշները ներկա են",
    "definitionAz": "Başqaları olduqda kömək etmək ehtimalı azdır",
    "termHy": "Bystander Effect",
    "termKa": "Bystander Effect",
    "termRu": "Эффект свидетеля",
    "definitionRu": "Меньше шансов помочь, когда присутствуют другие",
    "termAz": "Baxıcı Effekti"
  },
  {
    "id": 14,
    "term": "Placebo Effect",
    "definition": "Improvement from belief in treatment rather than treatment itself",
    "category": "Research",
    "termRu": "Эффект плацебо",
    "termHy": "Պլացեբոյի էֆեկտ",
    "termKa": "პლაცებოს ეფექტი",
    "definitionHy": "Բուժման նկատմամբ հավատքի բարելավում, այլ ոչ թե ինքնին բուժման",
    "definitionKa": "გაუმჯობესება მკურნალობისადმი რწმენისგან და არა თავად მკურნალობის მიმართ",
    "definitionRu": "Улучшение от веры в лечение, а не от самого лечения",
    "termAz": "Plasebo effekti",
    "definitionAz": "Müalicənin özündən çox müalicəyə inamdan irəli gələn təkmilləşdirmə"
  },
  {
    "id": 15,
    "term": "Schema",
    "definition": "Mental framework for organizing and interpreting information",
    "category": "Cognition",
    "termRu": "Схема",
    "termHy": "Սխեման",
    "termKa": "სქემა",
    "definitionRu": "Ментальная основа для организации и интерпретации информации",
    "definitionHy": "Տեղեկատվության կազմակերպման և մեկնաբանման մտավոր շրջանակ",
    "definitionKa": "ინფორმაციის ორგანიზებისა და ინტერპრეტაციის გონებრივი ჩარჩო",
    "termAz": "Sxem",
    "definitionAz": "Məlumatı təşkil etmək və şərh etmək üçün zehni çərçivə"
  },
  {
    "id": 16,
    "term": "Amygdala",
    "definition": "Brain structure for processing emotions, especially fear",
    "category": "Biology",
    "termKa": "ამიგდალა",
    "definitionRu": "Структура мозга для обработки эмоций, особенно страха",
    "termHy": "Ամիգդալա",
    "termRu": "Миндалевидное тело",
    "definitionHy": "Ուղեղի կառուցվածքը հույզերի, հատկապես վախի մշակման համար",
    "definitionKa": "ტვინის სტრუქტურა ემოციების, განსაკუთრებით შიშის დასამუშავებლად",
    "termAz": "Amigdala",
    "definitionAz": "Duyğuların, xüsusən də qorxunun işlənməsi üçün beyin quruluşu"
  },
  {
    "id": 17,
    "term": "Self-Efficacy",
    "definition": "Belief in your ability to succeed at specific tasks (Bandura)",
    "category": "Personality",
    "definitionRu": "Вера в свою способность добиться успеха в выполнении конкретных задач (Бандура)",
    "termRu": "Самоэффективность",
    "definitionHy": "Հավատք կոնկրետ առաջադրանքներում հաջողության հասնելու ձեր ունակությանը (Բանդուրա)",
    "definitionKa": "რწმენა კონკრეტულ ამოცანებში წარმატების მისაღწევად (ბანდურა)",
    "termKa": "თვითეფექტურობა",
    "termHy": "Ինքնարդյունավետություն",
    "termAz": "Öz-özünə effektivlik",
    "definitionAz": "Müəyyən tapşırıqlarda uğur qazanmaq qabiliyyətinə inam (Bandura)"
  },
  {
    "id": 18,
    "term": "Learned Helplessness",
    "definition": "Giving up after repeated failures even when escape is possible",
    "category": "Motivation",
    "termRu": "Выученная беспомощность",
    "definitionKa": "განმეორებითი წარუმატებლობის შემდეგ დანებება მაშინაც კი, როცა გაქცევა შესაძლებელია",
    "definitionHy": "Կրկնվող անհաջողություններից հետո հանձնվելը, նույնիսկ երբ հնարավոր է փախուստը",
    "termKa": "ისწავლა უმწეობა",
    "termHy": "Սովորած անօգնականություն",
    "definitionRu": "Сдаваться после повторяющихся неудач, даже если побег возможен",
    "termAz": "Çarəsizliyi öyrəndi",
    "definitionAz": "Qaçmaq mümkün olsa belə, təkrarlanan uğursuzluqlardan sonra təslim olmaq"
  },
  {
    "id": 19,
    "term": "Transference",
    "definition": "Redirecting feelings about one person onto the therapist",
    "category": "Therapy",
    "definitionKa": "ერთი ადამიანის მიმართ გრძნობების გადამისამართება თერაპევტზე",
    "termKa": "გადაცემა",
    "termHy": "Փոխանցում",
    "termRu": "перенос",
    "definitionRu": "Перенаправление чувств к одному человеку на терапевта",
    "termAz": "Köçürmə",
    "definitionHy": "Մեկ անձի մասին զգացմունքների վերահղում թերապևտի վրա",
    "definitionAz": "Bir şəxs haqqında hissləri terapevtə yönləndirmək"
  },
  {
    "id": 20,
    "term": "Heuristic",
    "definition": "Mental shortcut for quick decisions that can lead to errors",
    "category": "Cognition",
    "definitionKa": "გონებრივი მალსახმობი სწრაფი გადაწყვეტილების მისაღებად, რამაც შეიძლება გამოიწვიოს შეცდომები",
    "definitionHy": "Մտավոր դյուրանցում արագ որոշումների համար, որոնք կարող են հանգեցնել սխալների",
    "termHy": "Էվրիստիկ",
    "termKa": "ევრისტიკული",
    "termRu": "эвристика",
    "definitionRu": "Ментальный ярлык для быстрых решений, которые могут привести к ошибкам",
    "definitionAz": "Səhvlərə səbəb ola biləcək sürətli qərarlar üçün zehni qısa yol",
    "termAz": "Evristik"
  },
  {
    "id": 21,
    "term": "Synapse",
    "definition": "The gap between neurons where neurotransmitters cross",
    "category": "Biology",
    "termAz": "Sinaps",
    "termRu": "Синапс",
    "termKa": "სინაფსი",
    "termHy": "Սինապս",
    "definitionKa": "უფსკრული ნეირონებს შორის, სადაც ნეიროტრანსმიტერები კვეთენ",
    "definitionHy": "Նեյրոնների միջև ընկած բացը, որտեղ անցնում են նեյրոհաղորդիչները",
    "definitionRu": "Зазор между нейронами, где пересекаются нейротрансмиттеры",
    "definitionAz": "Neyrotransmitterlərin keçdiyi neyronlar arasındakı boşluq"
  },
  {
    "id": 22,
    "term": "Extinction",
    "definition": "Weakening of conditioned response when reinforcement stops",
    "category": "Learning",
    "termRu": "Вымирание",
    "termAz": "Yox olma",
    "definitionKa": "განპირობებული პასუხის შესუსტება, როდესაც გაძლიერება ჩერდება",
    "definitionHy": "Պայմանավորված արձագանքի թուլացում, երբ ամրապնդումը դադարում է",
    "termKa": "გადაშენება",
    "termHy": "Անհետացում",
    "definitionRu": "Ослабление условной реакции при прекращении подкрепления",
    "definitionAz": "Möhkəmləndirmə dayandıqda şərti cavabın zəifləməsi"
  },
  {
    "id": 23,
    "term": "Superego",
    "definition": "The moral conscience in Freud's personality structure",
    "category": "Personality",
    "termKa": "სუპერეგო",
    "termHy": "Սուպերէգո",
    "termRu": "Суперэго",
    "termAz": "Supereqo",
    "definitionRu": "Моральное сознание в структуре личности Фрейда",
    "definitionHy": "Բարոյական խիղճը Ֆրեյդի անձի կառուցվածքում",
    "definitionKa": "მორალური სინდისი ფროიდის პიროვნების სტრუქტურაში",
    "definitionAz": "Freydin şəxsiyyət strukturunda əxlaqi vicdan"
  },
  {
    "id": 24,
    "term": "Neuroplasticity",
    "definition": "Brain's ability to reorganize and form new neural connections",
    "category": "Biology",
    "termAz": "Neyroplastiklik",
    "termRu": "Нейропластичность",
    "definitionRu": "Способность мозга реорганизоваться и сформировать новые нейронные связи",
    "definitionHy": "Վերակազմավորվելու և նոր նյարդային կապեր ձևավորելու ուղեղի կարողությունը",
    "definitionKa": "ტვინის რეორგანიზაციისა და ახალი ნერვული კავშირების ჩამოყალიბების უნარი",
    "definitionAz": "Beynin yenidən təşkil etmək və yeni sinir əlaqələri yaratmaq qabiliyyəti",
    "termHy": "Նեյրոպլաստիկություն",
    "termKa": "ნეიროპლასტიურობა"
  }
];

