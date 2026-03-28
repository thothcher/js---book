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
    "titleKa": "ßâáßâÉ ßâÉßâáßâÿßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ?",
    "description": "Introduction to the science of psychology, its history, and modern approaches.",
    "descriptionKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÿßâí ßâ¢ßâößâ¬ßâ£ßâÿßâößâáßâößâæßâÿßâí ßâ¿ßâößâíßâÉßâòßâÉßâÜßâÿ, ßâ¢ßâÿßâíßâÿ ßâÿßâíßâóßâ¥ßâáßâÿßâÉ ßâôßâÉ ßâùßâÉßâ£ßâÉßâ¢ßâößâôßâáßâ¥ßâòßâö ßâ¢ßâÿßâôßâÆßâ¥ßâ¢ßâößâæßâÿ.",
    "icon": "mdi:head-cog-outline",
    "keyTopics": [
      "Definition of Psychology",
      "History of Psychology",
      "Modern Perspectives",
      "Research Methods"
    ],
    "keyTopicsKa": [
      "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÿßâí ßâÆßâÉßâ£ßâ¢ßâÉßâáßâóßâößâæßâÉ",
      "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÿßâí ßâÿßâíßâóßâ¥ßâáßâÿßâÉ",
      "ßâùßâÉßâ£ßâÉßâ¢ßâößâôßâáßâ¥ßâòßâö ßâ₧ßâößâáßâíßâ₧ßâößâÑßâóßâÿßâòßâößâæßâÿ",
      "ßâÖßâòßâÜßâößâòßâÿßâí ßâ¢ßâößâùßâ¥ßâôßâößâæßâÿ"
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
    "funFact": "Wundt's first lab experiment measured the time it took people to press a button after hearing a sound ΓÇö about 0.1 seconds. This \"reaction time\" research is still used in psychology and neuroscience today.",
    "realWorld": "When a marketing team designs an ad that triggers an emotional response, they're using principles from cognitive and behavioral psychology. Understanding how people perceive and process information is at the heart of advertising, UX design, and even political campaigns.",
    "keyFigures": [
      "Wilhelm Wundt",
      "William James",
      "Sigmund Freud",
      "John Watson",
      "Carl Rogers"
    ],
    "titleRu": "╨º╤é╨╛ ╤é╨░╨║╨╛╨╡ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å?",
    "titleHy": "╘╗╒₧╒╢╒╣ ╒º ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
    "titleAz": "Psixologiya n╔Ödir?",
    "descriptionRu": "╨Æ╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨▓ ╨╜╨░╤â╨║╤â ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å, ╨╡╨╡ ╨╕╤ü╤é╨╛╤Ç╨╕╤Ä ╨╕ ╤ü╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╤ï╨╡ ╨┐╨╛╨┤╤à╨╛╨┤╤ï.",
    "descriptionHy": "╒å╒Ñ╓Ç╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒ú╒½╒┐╒╕╓é╒⌐╒╡╒í╒╢╒¿, ╒╢╓Ç╒í ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒í╒╢╒¿ ╓ç ╒¬╒í╒┤╒í╒╢╒í╒»╒í╒»╒½╓ü ╒┤╒╕╒┐╒Ñ╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒½╒╢:",
    "descriptionAz": "Psixologiya elmin╔Ö giri┼ƒ, onun tarixi v╔Ö m├╝asir yana┼ƒmalar.",
    "keyTopicsRu": [
      "╨₧╨┐╤Ç╨╡╨┤╨╡╨╗╨╡╨╜╨╕╨╡ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕",
      "╨ÿ╤ü╤é╨╛╤Ç╨╕╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕",
      "╨í╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╤ï╨╡ ╨┐╨╡╤Ç╤ü╨┐╨╡╨║╤é╨╕╨▓╤ï",
      "╨£╨╡╤é╨╛╨┤╤ï ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å"
    ],
    "keyTopicsHy": [
      "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╜╒í╒░╒┤╒í╒╢╒╕╓é╒┤",
      "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╘║╒í╒┤╒í╒╢╒í╒»╒í╒»╒½╓ü ╒░╒Ñ╒╝╒í╒╢╒»╒í╓Ç╒╢╒Ñ╓Ç",
      "╒Ç╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒⌐╒╕╒ñ╒╢╒Ñ╓Ç"
    ],
    "keyTopicsAz": [
      "Psixologiyan─▒n t╔Örifi",
      "Psixologiyan─▒n tarixi",
      "M├╝asir Perspektivl╔Ör",
      "T╔Ödqiqat Metodlar─▒"
    ]
  },
  {
    "id": 2,
    "title": "Research Methods in Psychology",
    "titleKa": "ßâÖßâòßâÜßâößâòßâÿßâí ßâ¢ßâößâùßâ¥ßâôßâößâæßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉßâ¿ßâÿ",
    "description": "How psychologists conduct research: experiments, observations, surveys, and ethics.",
    "descriptionKa": "ßâáßâ¥ßâÆßâ¥ßâá ßâÉßâóßâÉßâáßâößâæßâößâ£ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâößâæßâÿ ßâÖßâòßâÜßâößâòßâÉßâí: ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâößâæßâÿ, ßâôßâÉßâÖßâòßâÿßâáßâòßâößâæßâößâæßâÿ, ßâÆßâÉßâ¢ßâ¥ßâÖßâÿßâùßâ«ßâòßâößâæßâÿ ßâôßâÉ ßâößâùßâÿßâÖßâÉ.",
    "icon": "mdi:flask-outline",
    "keyTopics": [
      "Scientific Method",
      "Experimental Design",
      "Correlation vs. Causation",
      "Ethics in Research"
    ],
    "keyTopicsKa": [
      "ßâíßâÉßâ¢ßâößâ¬ßâ£ßâÿßâößâáßâ¥ ßâ¢ßâößâùßâ¥ßâôßâÿ",
      "ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâúßâÜßâÿ ßâôßâÿßâûßâÉßâÿßâ£ßâÿ",
      "ßâÖßâ¥ßâáßâößâÜßâÉßâ¬ßâÿßâÉ ßâ¢ßâÿßâûßâößâûßâ¥ßâæßâáßâÿßâ¥ßâæßâÿßâí ßâ¼ßâÿßâ£ßâÉßâÉßâªßâ¢ßâôßâößâÆ",
      "ßâößâùßâÿßâÖßâÉ ßâÖßâòßâÜßâößâòßâÉßâ¿ßâÿ"
    ],
    "summary": "This chapter covers the tools psychologists use to study behavior scientifically. Learn about variables, control groups, double-blind studies, and the critical distinction between correlation and causation.",
    "keyPoints": [
      "The scientific method: Observation ΓåÆ Hypothesis ΓåÆ Experiment ΓåÆ Data Analysis ΓåÆ Conclusion ΓåÆ Replication.",
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
    "titleRu": "╨£╨╡╤é╨╛╨┤╤ï ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨▓ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕",
    "titleHy": "╒Ç╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒⌐╒╕╒ñ╒╢╒Ñ╓Ç ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗",
    "titleAz": "Psixologiyada T╔Ödqiqat Metodlar─▒",
    "descriptionRu": "╨Ü╨░╨║ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕ ╨┐╤Ç╨╛╨▓╨╛╨┤╤Å╤é ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å: ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╤ï, ╨╜╨░╨▒╨╗╤Ä╨┤╨╡╨╜╨╕╤Å, ╨╛╨┐╤Ç╨╛╤ü╤ï ╨╕ ╤ì╤é╨╕╨║╨░.",
    "descriptionHy": "╘╗╒╢╒╣╒║╒Ñ╒╜ ╒Ñ╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╢╒Ñ╓Ç╒╢ ╒½╓Ç╒í╒»╒í╒╢╒í╓ü╒╢╒╕╓é╒┤ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¥ ╓â╒╕╓Ç╒▒╒Ñ╓Ç, ╒ñ╒½╒┐╒í╓Ç╒»╒╕╓é╒┤╒╢╒Ñ╓Ç, ╒░╒í╓Ç╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç ╓ç ╒º╒⌐╒½╒»╒í:",
    "descriptionAz": "Psixoloqlar ara┼ƒd─▒rman─▒ nec╔Ö apar─▒r: t╔Öcr├╝b╔Öl╔Ör, m├╝┼ƒahid╔Öl╔Ör, sor─ƒular v╔Ö etika.",
    "keyTopicsRu": [
      "╨¥╨░╤â╤ç╨╜╤ï╨╣ ╨╝╨╡╤é╨╛╨┤",
      "╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨░╨╗╤î╨╜╤ï╨╣ ╨┤╨╕╨╖╨░╨╣╨╜",
      "╨Ü╨╛╤Ç╤Ç╨╡╨╗╤Å╤å╨╕╤Å ╨┐╤Ç╨╛╤é╨╕╨▓ ╨┐╤Ç╨╕╤ç╨╕╨╜╨╜╨╛-╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╡╨╜╨╜╨╛╨╣ ╤ü╨▓╤Å╨╖╨╕",
      "╨¡╤é╨╕╨║╨░ ╨▓ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å╤à"
    ],
    "keyTopicsHy": [
      "╘│╒½╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒┤╒Ñ╒⌐╒╕╒ñ",
      "╒ô╒╕╓Ç╒▒╒í╓Ç╒í╓Ç╒í╒»╒í╒╢ ╒ñ╒½╒ª╒í╒╡╒╢",
      "╒Ç╒í╓Ç╒í╒ó╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒¿╒╢╒ñ╒ñ╒Ñ╒┤ ╒║╒í╒┐╒│╒í╒╝╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢",
      "╘╖╒⌐╒½╒»╒í╒╢ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗"
    ],
    "keyTopicsAz": [
      "Elmi metod",
      "Eksperimental Dizayn",
      "Korrelyasiya v╔Ö S╔Öb╔Öb ╔Ölaq╔Ösi",
      "T╔Ödqiqatda Etika"
    ]
  },
  {
    "id": 3,
    "title": "Biological Bases of Behavior",
    "titleKa": "ßâÑßâ¬ßâößâòßâÿßâí ßâæßâÿßâ¥ßâÜßâ¥ßâÆßâÿßâúßâáßâÿ ßâíßâÉßâñßâúßâ½ßâòßâÜßâößâæßâÿ",
    "description": "The brain, nervous system, neurons, and how biology shapes our behavior.",
    "descriptionKa": "ßâóßâòßâÿßâ£ßâÿ, ßâ£ßâößâáßâòßâúßâÜßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÉ, ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâÿ ßâôßâÉ ßâáßâ¥ßâÆßâ¥ßâá ßâÉßâºßâÉßâÜßâÿßâæßâößâæßâí ßâæßâÿßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâ⌐ßâòßâößâ£ßâí ßâÑßâ¬ßâößâòßâÉßâí.",
    "icon": "mdi:dna",
    "keyTopics": [
      "Neurons & Synapses",
      "Brain Structure",
      "Nervous System",
      "Neurotransmitters",
      "Genetics & Behavior"
    ],
    "keyTopicsKa": [
      "ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâÿ ßâôßâÉ ßâíßâÿßâ£ßâÉßâñßâíßâößâæßâÿ",
      "ßâóßâòßâÿßâ£ßâÿßâí ßâíßâóßâáßâúßâÑßâóßâúßâáßâÉ",
      "ßâ£ßâößâáßâòßâúßâÜßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÉ",
      "ßâ£ßâößâÿßâáßâ¥ßâóßâáßâÉßâ£ßâíßâ¢ßâÿßâóßâößâáßâößâæßâÿ",
      "ßâÆßâößâ£ßâößâóßâÿßâÖßâÉ ßâôßâÉ ßâÑßâ¬ßâößâòßâÉ"
    ],
    "summary": "Every thought, emotion, and action has a biological basis. This chapter explores how neurons communicate, the structure of the brain, and how genetics influence behavior.",
    "keyPoints": [
      "Neurons are the basic units of the nervous system. They communicate via electrochemical signals: electrical impulses travel down the axon, then release neurotransmitters across the synapse.",
      "Key neurotransmitters: Dopamine (reward, pleasure), Serotonin (mood, sleep), GABA (inhibition, calm), Acetylcholine (memory, muscle movement), Norepinephrine (alertness), Endorphins (pain relief).",
      "The brain has three major regions: Hindbrain (medulla, pons, cerebellum ΓÇö basic survival), Midbrain (sensory relay), Forebrain (cerebral cortex ΓÇö higher thinking).",
      "The cerebral cortex has four lobes: Frontal (decision-making, personality), Parietal (touch, spatial), Temporal (hearing, language), Occipital (vision).",
      "The limbic system includes the amygdala (fear, emotion), hippocampus (memory formation), and hypothalamus (hunger, thirst, temperature).",
      "Neuroplasticity: the brain can reorganize itself by forming new neural connections throughout life, especially after injury or learning.",
      "The split-brain experiments by Sperry showed that the left hemisphere specializes in language and logic, while the right hemisphere handles spatial tasks and creativity."
    ],
    "funFact": "Your brain uses about 20% of your body's energy despite being only 2% of your body weight. It generates about 20 watts of electrical power ΓÇö enough to power a dim light bulb.",
    "realWorld": "Understanding neurotransmitters revolutionized psychiatry. SSRIs (like Prozac) treat depression by increasing serotonin levels in the brain. Parkinson's disease treatments target dopamine pathways.",
    "keyFigures": [
      "Roger Sperry",
      "Paul Broca",
      "Carl Wernicke",
      "Santiago Ram├│n y Cajal"
    ],
    "titleRu": "╨æ╨╕╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨╛╤ü╨╜╨╛╨▓╤ï ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Å",
    "titleHy": "╒Ä╒í╓Ç╓ä╒í╒ú╒«╒½ ╒»╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒í╒»╒í╒╢ ╒░╒½╒┤╓ä╒Ñ╓Ç╒¿",
    "titleAz": "Davran─▒┼ƒ─▒n Bioloji ╞Åsaslar─▒",
    "descriptionRu": "╨£╨╛╨╖╨│, ╨╜╨╡╤Ç╨▓╨╜╨░╤Å ╤ü╨╕╤ü╤é╨╡╨╝╨░, ╨╜╨╡╨╣╤Ç╨╛╨╜╤ï ╨╕ ╤é╨╛, ╨║╨░╨║ ╨▒╨╕╨╛╨╗╨╛╨│╨╕╤Å ╤ä╨╛╤Ç╨╝╨╕╤Ç╤â╨╡╤é ╨╜╨░╤ê╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡.",
    "descriptionHy": "╒ê╓é╒▓╒Ñ╒▓╒¿, ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒░╒í╒┤╒í╒»╒í╓Ç╒ú╒¿, ╒╢╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç╒¿ ╓ç ╒½╒╢╒╣╒║╒Ñ╒╜ ╒º ╒»╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒▒╓ç╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒┤╒Ñ╓Ç ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«╒¿:",
    "descriptionAz": "Beyin, sinir sistemi, neyronlar v╔Ö biologiya davran─▒┼ƒ─▒m─▒z─▒ nec╔Ö formala┼ƒd─▒r─▒r.",
    "keyTopicsRu": [
      "╨¥╨╡╨╣╤Ç╨╛╨╜╤ï ╨╕ ╤ü╨╕╨╜╨░╨┐╤ü╤ï",
      "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨░ ╨╝╨╛╨╖╨│╨░",
      "╨¥╨╡╤Ç╨▓╨╜╨░╤Å ╤ü╨╕╤ü╤é╨╡╨╝╨░",
      "╨¥╨╡╨╣╤Ç╨╛╨╝╨╡╨┤╨╕╨░╤é╨╛╤Ç╤ï",
      "╨ô╨╡╨╜╨╡╤é╨╕╨║╨░ ╨╕ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡"
    ],
    "keyTopicsHy": [
      "╒å╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç ╓ç ╒╜╒½╒╢╒í╒║╒╜╒╢╒Ñ╓Ç",
      "╒ê╓é╒▓╒Ñ╒▓╒½ ╒»╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒¿",
      "╒å╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒░╒í╒┤╒í╒»╒í╓Ç╒ú",
      "╒å╒Ñ╒╡╓Ç╒╕╒░╒í╒▓╒╕╓Ç╒ñ╒½╒╣╒╢╒Ñ╓Ç",
      "╘│╒Ñ╒╢╒Ñ╒┐╒½╒»╒í ╓ç ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«"
    ],
    "keyTopicsAz": [
      "Neyronlar v╔Ö Sinapslar",
      "Beyin strukturu",
      "Sinir sistemi",
      "N├╢rotransmitterl╔Ör",
      "Genetika v╔Ö Davran─▒┼ƒ"
    ]
  },
  {
    "id": 4,
    "title": "Sensation and Perception",
    "titleKa": "ßâ¿ßâößâÆßâáßâ½ßâ£ßâößâæßâÉ ßâôßâÉ ßâÉßâªßâÑßâ¢ßâÉ",
    "description": "How our senses detect stimuli and our brain interprets them.",
    "descriptionKa": "ßâáßâ¥ßâÆßâ¥ßâá ßâÉßâ¢ßâ¥ßâÿßâ¬ßâ£ßâ¥ßâæßâí ßâ⌐ßâòßâößâ£ßâÿ ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâæßâÿ ßâíßâóßâÿßâ¢ßâúßâÜßâí ßâôßâÉ ßâ⌐ßâòßâößâ£ßâÿ ßâóßâòßâÿßâ£ßâÿ ßâÆßâÉßâ£ßâ¢ßâÉßâáßâóßâÉßâòßâí ßâ¢ßâÉßâù.",
    "icon": "mdi:eye-outline",
    "keyTopics": [
      "Vision",
      "Hearing",
      "Other Senses",
      "Perceptual Organization",
      "Illusions"
    ],
    "keyTopicsKa": [
      "ßâ«ßâößâôßâòßâÉ",
      "ßâíßâ¢ßâößâ£ßâÉ",
      "ßâíßâ«ßâòßâÉ ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâæßâÿ",
      "ßâÉßâªßâÑßâ¢ßâÿßâí ßâ¥ßâáßâÆßâÉßâ£ßâÿßâûßâÉßâ¬ßâÿßâÉ",
      "ßâÿßâÜßâúßâûßâÿßâößâæßâÿ"
    ],
    "summary": "Sensation is the process by which our sensory receptors detect stimuli; perception is how the brain interprets this. Covers visual processing, Gestalt principles, and perceptual illusions.",
    "keyPoints": [
      "Sensation = detecting physical energy (light, sound, pressure); Perception = organizing and interpreting that sensory information into something meaningful.",
      "Absolute threshold: the minimum stimulation needed to detect a stimulus 50% of the time. Difference threshold (JND): the smallest detectable difference between two stimuli.",
      "Vision: Light enters through the cornea ΓåÆ pupil ΓåÆ lens ΓåÆ retina. Rods detect dim light; cones detect color. Information travels via the optic nerve to the visual cortex.",
      "Gestalt principles of perception: proximity, similarity, closure, continuity, and figure-ground. The brain fills in gaps to create coherent images.",
      "Color vision: Trichromatic theory (3 types of cones for red, green, blue) explains color mixing; Opponent-process theory (red-green, blue-yellow, black-white pairs) explains afterimages.",
      "Hearing: Sound waves ΓåÆ eardrum ΓåÆ ossicles ΓåÆ cochlea ΓåÆ hair cells ΓåÆ auditory nerve. Pitch is encoded by place theory (high frequencies) and frequency theory (low frequencies).",
      "Sensory adaptation: when constant stimulation leads to reduced sensitivity (e.g., you stop noticing a smell after a while)."
    ],
    "funFact": "Your eyes can distinguish about 10 million different colors, yet dogs see the world mainly in blues and yellows. The mantis shrimp, however, has 16 types of color receptors compared to our 3!",
    "realWorld": "Optical illusions are not just fun tricks ΓÇö they reveal how the brain constructs reality. UX designers use Gestalt principles daily: grouping related buttons, using whitespace, and creating visual hierarchies on websites.",
    "keyFigures": [
      "Gustav Fechner",
      "Ernst Weber",
      "Max Wertheimer",
      "Hermann von Helmholtz"
    ],
    "titleRu": "╨₧╤ë╤â╤ë╨╡╨╜╨╕╨╡ ╨╕ ╨▓╨╛╤ü╨┐╤Ç╨╕╤Å╤é╨╕╨╡",
    "titleHy": "╒ì╒Ñ╒╢╒╜╒í╓ü╒½╒í ╓ç ╒¿╒╢╒»╒í╒¼╒╕╓é╒┤",
    "titleAz": "Hiss v╔Ö qavray─▒┼ƒ",
    "descriptionRu": "╨Ü╨░╨║ ╨╜╨░╤ê╨╕ ╨╛╤Ç╨│╨░╨╜╤ï ╤ç╤â╨▓╤ü╤é╨▓ ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╕╨▓╨░╤Ä╤é ╤ü╤é╨╕╨╝╤â╨╗╤ï, ╨░ ╨╝╨╛╨╖╨│ ╨╕╤à ╨╕╨╜╤é╨╡╤Ç╨┐╤Ç╨╡╤é╨╕╤Ç╤â╨╡╤é.",
    "descriptionHy": "╘╗╒╢╒╣╒║╒Ñ╒╜ ╒º ╒┤╒Ñ╓Ç ╒ª╒ú╒í╒╡╒í╓Ç╒í╒╢╒╢╒Ñ╓Ç╒¿ ╒░╒í╒╡╒┐╒╢╒í╒ó╒Ñ╓Ç╒╕╓é╒┤ ╒ú╓Ç╒ú╒╝╒½╒╣╒╢╒Ñ╓Ç╒¿ ╓ç ╒┤╒Ñ╓Ç ╒╕╓é╒▓╒Ñ╒▓╒¿ ╒┤╒Ñ╒»╒╢╒í╒ó╒í╒╢╒╕╓é╒┤ ╒ñ╓Ç╒í╒╢╓ä:",
    "descriptionAz": "Hissl╔Örimiz stimullar─▒ nec╔Ö q╔Öbul edir v╔Ö beynimiz onlar─▒ nec╔Ö ┼ƒ╔Örh edir.",
    "keyTopicsRu": [
      "╨ù╤Ç╨╡╨╜╨╕╨╡",
      "╨í╨╗╤â╤à",
      "╨ö╤Ç╤â╨│╨╕╨╡ ╤ç╤â╨▓╤ü╤é╨▓╨░",
      "╨ƒ╨╡╤Ç╤å╨╡╨┐╤é╨╕╨▓╨╜╨░╤Å ╨╛╤Ç╨│╨░╨╜╨╕╨╖╨░╤å╨╕╤Å",
      "╨ÿ╨╗╨╗╤Ä╨╖╨╕╨╕"
    ],
    "keyTopicsHy": [
      "╒Å╒Ñ╒╜╒½╒¼╓ä",
      "╘╝╒╜╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╘▒╒╡╒¼ ╒ª╒ú╒í╒╡╒í╓Ç╒í╒╢╒╢╒Ñ╓Ç",
      "╘╕╒╢╒»╒í╒¼╒┤╒í╒╢ ╒»╒í╒ª╒┤╒í╒»╒Ñ╓Ç╒║╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╒è╒í╒┐╓Ç╒í╒╢╓ä╒╢╒Ñ╓Ç"
    ],
    "keyTopicsAz": [
      "G├╢rm╔Ö",
      "E┼ƒitm╔Ö",
      "Dig╔Ör Hissl╔Ör",
      "Qavrama t╔Ö┼ƒkilat─▒",
      "─░ll├╝ziyalar"
    ]
  },
  {
    "id": 5,
    "title": "States of Consciousness",
    "titleKa": "ßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâößâæßâÿßâí ßâ¢ßâôßâÆßâ¥ßâ¢ßâÉßâáßâößâ¥ßâæßâÉ",
    "description": "Sleep, dreams, hypnosis, and altered states of consciousness.",
    "descriptionKa": "ßâ½ßâÿßâÜßâÿ, ßâíßâÿßâûßâ¢ßâáßâößâæßâÿ, ßâ░ßâÿßâ₧ßâ£ßâ¥ßâûßâÿ ßâôßâÉ ßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâößâæßâÿßâí ßâ¿ßâößâ¬ßâòßâÜßâÿßâÜßâÿ ßâ¢ßâôßâÆßâ¥ßâ¢ßâÉßâáßâößâ¥ßâæßâÉ.",
    "icon": "mdi:sleep",
    "keyTopics": [
      "Sleep Stages",
      "Dreams",
      "Hypnosis",
      "Meditation",
      "Psychoactive Substances"
    ],
    "keyTopicsKa": [
      "ßâ½ßâÿßâÜßâÿßâí ßâößâóßâÉßâ₧ßâößâæßâÿ",
      "ßâíßâÿßâûßâ¢ßâáßâößâæßâÿ",
      "ßâ░ßâÿßâ₧ßâ£ßâ¥ßâûßâÿ",
      "ßâ¢ßâößâôßâÿßâóßâÉßâ¬ßâÿßâÉ",
      "ßâñßâíßâÿßâÑßâ¥ßâÉßâÑßâóßâÿßâúßâáßâÿ ßâ£ßâÿßâòßâùßâÿßâößâáßâößâæßâößâæßâÿ"
    ],
    "summary": "Consciousness is our awareness of ourselves and environment. This chapter explores sleep cycles, theories of dreams, hypnosis, meditation, and how substances alter conscious experience.",
    "keyPoints": [
      "Consciousness exists on a continuum: from fully alert to deeply asleep, with many states in between (daydreaming, meditation, hypnosis).",
      "Sleep has two main types: NREM (stages 1ΓÇô3, progressively deeper) and REM (rapid eye movement, where vivid dreaming occurs). A full cycle lasts about 90 minutes.",
      "Stage 3 (slow-wave/deep sleep) is critical for physical restoration and growth hormone release. REM sleep is vital for memory consolidation and emotional processing.",
      "Dream theories: Freud's wish fulfillment (dreams express unconscious desires), Activation-synthesis (dreams are the brain's interpretation of random neural firing), Information processing (dreams help sort daily memories).",
      "Sleep deprivation impairs attention, memory, immune function, and emotional regulation. Chronic sleep loss is linked to obesity, depression, and heart disease.",
      "Hypnosis is a state of heightened suggestibility and focused attention ΓÇö it does NOT give the hypnotist control over you. It can help with pain management and some habits.",
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
    "titleRu": "╨í╨╛╤ü╤é╨╛╤Å╨╜╨╕╤Å ╤ü╨╛╨╖╨╜╨░╨╜╨╕╤Å",
    "titleHy": "╘│╒½╒┐╒í╒»╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒╛╒½╒│╒í╒»╒╢╒Ñ╓Ç",
    "titleAz": "┼₧├╝ur D├╢vl╔Ötl╔Öri",
    "descriptionRu": "╨í╨╛╨╜, ╤ü╨╜╨╛╨▓╨╕╨┤╨╡╨╜╨╕╤Å, ╨│╨╕╨┐╨╜╨╛╨╖ ╨╕ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╜╤ï╨╡ ╤ü╨╛╤ü╤é╨╛╤Å╨╜╨╕╤Å ╤ü╨╛╨╖╨╜╨░╨╜╨╕╤Å.",
    "descriptionHy": "╒ö╒╕╓é╒╢, ╒Ñ╓Ç╒í╒ª╒╢╒Ñ╓Ç, ╒░╒½╒║╒╢╒╕╒╜ ╓ç ╒ú╒½╒┐╒í╒»╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╓â╒╕╓â╒╕╒¡╒╛╒í╒« ╒╛╒½╒│╒í╒»:",
    "descriptionAz": "Yuxu, yuxular, hipnoz v╔Ö d╔Öyi┼ƒmi┼ƒ ┼ƒ├╝ur ΓÇïΓÇïhallar─▒.",
    "keyTopicsRu": [
      "╨í╤é╨░╨┤╨╕╨╕ ╤ü╨╜╨░",
      "╨£╨╡╤ç╤é╤ï",
      "╨ô╨╕╨┐╨╜╨╛╨╖",
      "╨£╨╡╨┤╨╕╤é╨░╤å╨╕╤Å",
      "╨ƒ╤ü╨╕╤à╨╛╨░╨║╤é╨╕╨▓╨╜╤ï╨╡ ╨▓╨╡╤ë╨╡╤ü╤é╨▓╨░"
    ],
    "keyTopicsHy": [
      "╒ö╒╢╒½ ╓â╒╕╓é╒¼╒Ñ╓Ç",
      "╘╡╓Ç╒í╒ª╒╢╒Ñ╓Ç",
      "╒Ç╒½╒║╒╢╒╕╒ª",
      "╒ä╒Ñ╒ñ╒½╒┐╒í╓ü╒½╒í",
      "╒Ç╒╕╒ú╒Ñ╒í╒»╒┐╒½╒╛ ╒╢╒╡╒╕╓é╒⌐╒Ñ╓Ç"
    ],
    "keyTopicsAz": [
      "Yuxu M╔Örh╔Öl╔Öl╔Öri",
      "X╔Öyallar",
      "Hipnoz",
      "Meditasiya",
      "Psixoaktiv madd╔Öl╔Ör"
    ]
  },
  {
    "id": 6,
    "title": "Learning",
    "titleKa": "ßâíßâ¼ßâÉßâòßâÜßâÉ",
    "description": "Classical conditioning, operant conditioning, and observational learning.",
    "descriptionKa": "ßâÖßâÜßâÉßâíßâÿßâÖßâúßâáßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâáßâößâæßâÉ, ßâ¥ßâ₧ßâößâáßâÉßâ£ßâóßâúßâÜßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâáßâößâæßâÉ ßâôßâÉ ßâôßâÉßâÖßâòßâÿßâáßâòßâößâæßâÿßâùßâÿ ßâíßâ¼ßâÉßâòßâÜßâößâæßâÉ.",
    "icon": "mdi:book-open-variant",
    "keyTopics": [
      "Classical Conditioning",
      "Operant Conditioning",
      "Reinforcement & Punishment",
      "Observational Learning"
    ],
    "keyTopicsKa": [
      "ßâÖßâÜßâÉßâíßâÿßâÖßâúßâáßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâáßâößâæßâÉ",
      "ßâ¥ßâ₧ßâößâáßâÉßâ¬ßâÿßâúßâÜßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâáßâößâæßâÉ",
      "ßâÆßâÉßâ£ßâ¢ßâóßâÖßâÿßâ¬ßâößâæßâÉ ßâôßâÉ ßâôßâÉßâíßâ»ßâÉ",
      "ßâôßâÉßâÖßâòßâÿßâáßâòßâößâæßâÿßâùßâÿ ßâíßâ¼ßâÉßâòßâÜßâößâæßâÉ"
    ],
    "summary": "Learning is a relatively permanent change in behavior due to experience. Pavlov's classical conditioning, Skinner's operant conditioning, and Bandura's social learning theory are covered.",
    "keyPoints": [
      "Classical conditioning (Pavlov): Learning by association. A neutral stimulus (bell) paired with an unconditioned stimulus (food) eventually produces a conditioned response (salivation to bell alone). Key terms: UCS, UCR, CS, CR.",
      "Key phenomena in classical conditioning: acquisition, extinction (CR fades when CS presented alone), spontaneous recovery, generalization (responding to similar stimuli), and discrimination (distinguishing between stimuli).",
      "Operant conditioning (Skinner): Learning through consequences. Behaviors followed by reinforcement increase; those followed by punishment decrease.",
      "Reinforcement schedules: Fixed-ratio (every N responses), Variable-ratio (unpredictable, like slot machines ΓÇö most resistant to extinction), Fixed-interval (first response after N time), Variable-interval (unpredictable time).",
      "Positive = adding something; Negative = removing something. Positive reinforcement (reward), Negative reinforcement (removing discomfort), Positive punishment (adding pain), Negative punishment (taking away privileges).",
      "Bandura's social learning theory: We learn by observing others (models). The Bobo doll experiment showed children imitate aggressive behavior they witness. Requires attention, retention, reproduction, and motivation.",
      "Learned helplessness (Seligman): When organisms learn they cannot control outcomes, they stop trying ΓÇö even when escape becomes possible. Linked to depression in humans."
    ],
    "funFact": "Slot machines use a variable-ratio reinforcement schedule ΓÇö the same principle Skinner discovered makes behavior hardest to extinguish. This is why gambling can be so addictive: you never know when the next reward will come.",
    "realWorld": "Dog trainers use operant conditioning (clicker training = positive reinforcement). Advertisers pair products with pleasant images (classical conditioning). Social media \"likes\" use variable-ratio reinforcement to keep you scrolling.",
    "keyFigures": [
      "Ivan Pavlov",
      "B.F. Skinner",
      "Albert Bandura",
      "John Watson",
      "Edward Thorndike"
    ],
    "titleRu": "╨₧╨▒╤â╤ç╨╡╨╜╨╕╨╡",
    "titleHy": "╒ê╓é╒╜╒╕╓é╓ü╒╕╓é╒┤",
    "titleAz": "├ûyr╔Önm╔Ök",
    "descriptionRu": "╨Ü╨╗╨░╤ü╤ü╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨╛╨▒╤â╤ü╨╗╨╛╨▓╨╗╨╕╨▓╨░╨╜╨╕╨╡, ╨╛╨┐╨╡╤Ç╨░╨╜╤é╨╜╨╛╨╡ ╨╛╨▒╤â╤ü╨╗╨╛╨▓╨╗╨╕╨▓╨░╨╜╨╕╨╡ ╨╕ ╨╛╨▒╤â╤ç╨╡╨╜╨╕╨╡ ╤ç╨╡╤Ç╨╡╨╖ ╨╜╨░╨▒╨╗╤Ä╨┤╨╡╨╜╨╕╨╡.",
    "descriptionHy": "╘┤╒í╒╜╒í╒»╒í╒╢ ╒║╒í╒╡╒┤╒í╒╢╒í╒╛╒╕╓Ç╒╕╓é╒┤, ╓à╒║╒Ñ╓Ç╒í╒╢╒┐ ╒║╒í╒╡╒┤╒í╒╢╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╓ç ╒ñ╒½╒┐╒╕╒▓╒í╒»╒í╒╢ ╒╕╓é╒╜╒╕╓é╓ü╒╕╓é╒┤:",
    "descriptionAz": "Klassik kondisioner, operant kondisioner v╔Ö m├╝┼ƒahid╔Ö ├╢yr╔Önm╔Ö.",
    "keyTopicsRu": [
      "╨Ü╨╗╨░╤ü╤ü╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨║╨╛╨╜╨┤╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡",
      "╨₧╨┐╨╡╤Ç╨░╨╜╤é╨╜╨╛╨╡ ╨╛╨▒╤â╤ü╨╗╨╛╨▓╨╗╨╕╨▓╨░╨╜╨╕╨╡",
      "╨ƒ╨╛╨┤╨║╤Ç╨╡╨┐╨╗╨╡╨╜╨╕╨╡ ╨╕ ╨╜╨░╨║╨░╨╖╨░╨╜╨╕╨╡",
      "╨¥╨░╨▒╨╗╤Ä╨┤╨░╤é╨╡╨╗╤î╨╜╨╛╨╡ ╨╛╨▒╤â╤ç╨╡╨╜╨╕╨╡"
    ],
    "keyTopicsHy": [
      "╘┤╒í╒╜╒í╒»╒í╒╢ ╒»╒╕╒╢╒ñ╒½╓ü╒½╒╕╒╢╒Ñ╓Ç",
      "╘│╒╕╓Ç╒«╒╕╒▓ ╓à╒ñ╒í╓â╒╕╒¡╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╘▒╒┤╓Ç╒í╒║╒╢╒ñ╒╕╓é╒┤ ╓ç ╒║╒í╒┐╒½╒¬",
      "╘┤╒½╒┐╒╕╓Ç╒ñ╒í╒»╒í╒╢ ╒╕╓é╒╜╒╕╓é╓ü╒╕╓é╒┤"
    ],
    "keyTopicsAz": [
      "Klassik kondisioner",
      "Operant Kondisioner",
      "G├╝cl╔Öndirm╔Ö v╔Ö C╔Öza",
      "M├╝┼ƒahid╔Ö yolu il╔Ö ├╢yr╔Önm╔Ö"
    ]
  },
  {
    "id": 7,
    "title": "Memory",
    "titleKa": "ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÉ",
    "description": "How we encode, store, and retrieve information.",
    "descriptionKa": "ßâáßâ¥ßâÆßâ¥ßâá ßâòßâÉßâ¿ßâÿßâñßâáßâÉßâòßâù, ßâòßâÿßâ£ßâÉßâ«ßâÉßâòßâù ßâôßâÉ ßâòßâÿßâªßâößâæßâù ßâÿßâ£ßâñßâ¥ßâáßâ¢ßâÉßâ¬ßâÿßâÉßâí.",
    "icon": "mdi:database-outline",
    "keyTopics": [
      "Encoding",
      "Storage",
      "Retrieval",
      "Forgetting",
      "Memory Improvement"
    ],
    "keyTopicsKa": [
      "ßâÖßâ¥ßâôßâÿßâáßâößâæßâÉ",
      "ßâ¿ßâößâ£ßâÉßâ«ßâòßâÉ",
      "ßâ¢ßâ¥ßâ½ßâÿßâößâæßâÉ",
      "ßâôßâÉßâòßâÿßâ¼ßâºßâößâæßâÉ",
      "ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâÆßâÉßâúßâ¢ßâ»ßâ¥ßâæßâößâíßâößâæßâÉ"
    ],
    "summary": "Memory involves encoding, storage, and retrieval. The multi-store model describes sensory, short-term, and long-term memory. Also covers forgetting curves, false memories, and improvement strategies.",
    "keyPoints": [
      "Three stages of memory: Encoding (converting information), Storage (maintaining it), Retrieval (accessing it later).",
      "Atkinson-Shiffrin model: Sensory memory (brief, <1 sec for visual) ΓåÆ Short-term/Working memory (20ΓÇô30 sec, capacity ~7┬▒2 items) ΓåÆ Long-term memory (unlimited capacity and duration).",
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
    "titleRu": "╨ƒ╨░╨╝╤Å╤é╤î",
    "titleHy": "╒Ç╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "titleAz": "Yadda┼ƒ",
    "descriptionRu": "╨Ü╨░╨║ ╨╝╤ï ╨║╨╛╨┤╨╕╤Ç╤â╨╡╨╝, ╤à╤Ç╨░╨╜╨╕╨╝ ╨╕ ╨╕╨╖╨▓╨╗╨╡╨║╨░╨╡╨╝ ╨╕╨╜╤ä╨╛╤Ç╨╝╨░╤å╨╕╤Ä.",
    "descriptionHy": "╘╗╒╢╒╣╒║╒Ñ╒╜ ╒Ñ╒╢╓ä ╒┤╒Ñ╒╢╓ä ╒»╒╕╒ñ╒í╒╛╒╕╓Ç╒╕╓é╒┤, ╒║╒í╒░╒║╒í╒╢╒╕╓é╒┤ ╓ç ╒í╒╝╒ó╒Ñ╓Ç╒╕╓é╒┤ ╒┐╒Ñ╒▓╒Ñ╒»╒í╒┐╒╛╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
    "descriptionAz": "M╔Ölumat─▒ nec╔Ö kodla┼ƒd─▒r─▒r─▒q, saxlay─▒r─▒q v╔Ö ╔Öld╔Ö edirik.",
    "keyTopicsRu": [
      "╨Ü╨╛╨┤╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡",
      "╨Ñ╤Ç╨░╨╜╨╕╨╗╨╕╤ë╨╡",
      "╨ƒ╨╛╨╕╤ü╨║",
      "╨ù╨░╨▒╤ï╨▓╤ç╨╕╨▓╨╛╤ü╤é╤î",
      "╨ú╨╗╤â╤ç╤ê╨╡╨╜╨╕╨╡ ╨┐╨░╨╝╤Å╤é╨╕"
    ],
    "keyTopicsHy": [
      "╘┐╒╕╒ñ╒í╒╛╒╕╓Ç╒╕╓é╒┤",
      "╒è╒í╒░╒║╒í╒╢╒╕╓é╒┤",
      "╘▒╒╝╒ó╒Ñ╓Ç╒╕╓é╒┤",
      "╒ä╒╕╒╝╒í╒╢╒í╒¼╒╕╒╛",
      "╒Ç╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒ó╒í╓Ç╒Ñ╒¼╒í╒╛╒╕╓é╒┤"
    ],
    "keyTopicsAz": [
      "Kodla┼ƒd─▒rma",
      "Saxlama",
      "Axtar─▒┼ƒ",
      "Unutmaq",
      "Yadda┼ƒ─▒n t╔Ökmill╔Ö┼ƒdirilm╔Ösi"
    ]
  },
  {
    "id": 8,
    "title": "Cognition and Intelligence",
    "titleKa": "ßâ¿ßâößâ¢ßâößâ¬ßâ£ßâößâæßâÉ ßâôßâÉ ßâÿßâ£ßâóßâößâÜßâößâÑßâóßâÿ",
    "description": "Thinking, problem-solving, language, and measuring intelligence.",
    "descriptionKa": "ßâÉßâûßâáßâ¥ßâòßâ£ßâößâæßâÉ, ßâ₧ßâáßâ¥ßâæßâÜßâößâ¢ßâÿßâí ßâÆßâÉßâôßâÉßâ¡ßâáßâÉ, ßâößâ£ßâÉ ßâôßâÉ ßâÿßâ£ßâóßâößâÜßâößâÑßâóßâÿßâí ßâÆßâÉßâûßâ¥ßâ¢ßâòßâÉ.",
    "icon": "mdi:lightbulb-outline",
    "keyTopics": [
      "Problem Solving",
      "Decision Making",
      "Language",
      "Intelligence Testing",
      "Creativity"
    ],
    "keyTopicsKa": [
      "ßâ₧ßâáßâ¥ßâæßâÜßâößâ¢ßâÿßâí ßâÆßâÉßâôßâÉßâ¡ßâáßâÉ",
      "ßâÆßâÉßâôßâÉßâ¼ßâºßâòßâößâóßâÿßâÜßâößâæßâÿßâí ßâ¢ßâÿßâªßâößâæßâÉ",
      "ßâößâ£ßâÉ",
      "ßâôßâÉßâûßâòßâößâáßâòßâÿßâí ßâóßâößâíßâóßâÿßâáßâößâæßâÉ",
      "ßâÖßâáßâößâÉßâóßâÿßâúßâÜßâ¥ßâæßâÉ"
    ],
    "summary": "Cognition encompasses thinking, reasoning, problem-solving, and language. Examines heuristics and biases, theories of intelligence, IQ testing, and the nature vs. nurture debate.",
    "keyPoints": [
      "Cognition includes all mental activities: perceiving, thinking, remembering, and communicating.",
      "Problem-solving strategies: algorithms (step-by-step, guaranteed), heuristics (mental shortcuts, fast but error-prone), and insight (sudden \"aha!\" moments).",
      "Cognitive biases: Confirmation bias (seeking info that confirms beliefs), Availability heuristic (judging frequency by ease of recall), Anchoring (over-relying on first information), Framing effect (decisions change based on how options are presented).",
      "Language development: Babbling (6 mo) ΓåÆ One-word (12 mo) ΓåÆ Two-word (24 mo) ΓåÆ Full sentences (3ΓÇô4 yrs). Chomsky argued humans have an innate Language Acquisition Device (LAD).",
      "The Sapir-Whorf hypothesis suggests that language shapes thought. The strong version (language determines thought) is mostly rejected; the weak version (language influences thought) has support.",
      "Intelligence theories: Spearman's g (general intelligence), Gardner's multiple intelligences (8 types), Sternberg's triarchic theory (analytical, creative, practical).",
      "IQ tests (Stanford-Binet, WAIS) have mean = 100, SD = 15. IQ is 50ΓÇô80% heritable, but environment matters enormously ΓÇö the Flynn effect shows IQ scores have risen ~3 points per decade worldwide."
    ],
    "funFact": "The \"Dunning-Kruger effect\" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!",
    "realWorld": "Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making ΓÇö his work reshaped economics and public policy.",
    "keyFigures": [
      "Alfred Binet",
      "Charles Spearman",
      "Howard Gardner",
      "Robert Sternberg",
      "Noam Chomsky",
      "Daniel Kahneman"
    ],
    "titleRu": "╨ƒ╨╛╨╖╨╜╨░╨╜╨╕╨╡ ╨╕ ╨╕╨╜╤é╨╡╨╗╨╗╨╡╨║╤é",
    "titleHy": "╒â╒í╒╢╒í╒╣╒╕╓é╒┤ ╓ç ╒ó╒í╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "titleAz": "─░drak v╔Ö ─░ntellekt",
    "descriptionRu": "╨£╤ï╤ê╨╗╨╡╨╜╨╕╨╡, ╤Ç╨╡╤ê╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝, ╤Å╨╖╤ï╨║ ╨╕ ╨╕╨╖╨╝╨╡╤Ç╨╡╨╜╨╕╨╡ ╨╕╨╜╤é╨╡╨╗╨╗╨╡╨║╤é╨░.",
    "descriptionHy": "╒ä╒┐╒í╒«╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒¡╒╢╒ñ╒½╓Ç╒╢╒Ñ╓Ç╒½ ╒¼╒╕╓é╒«╒╕╓é╒┤, ╒¼╒Ñ╒ª╒╕╓é ╓ç ╒½╒╢╒┐╒Ñ╒¼╒Ñ╒»╒┐╒½ ╒╣╒í╓â╒╕╓é╒┤:",
    "descriptionAz": "D├╝┼ƒ├╝nm╔Ö, problem h╔Öll etm╔Ö, dil v╔Ö z╔Ökan─▒n ├╢l├º├╝lm╔Ösi.",
    "keyTopicsRu": [
      "╨á╨╡╤ê╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝",
      "╨ƒ╤Ç╨╕╨╜╤Å╤é╨╕╨╡ ╤Ç╨╡╤ê╨╡╨╜╨╕╨╣",
      "╨»╨╖╤ï╨║",
      "╨ó╨╡╤ü╤é╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡ ╨╕╨╜╤é╨╡╨╗╨╗╨╡╨║╤é╨░",
      "╨Ü╤Ç╨╡╨░╤é╨╕╨▓╨╜╨╛╤ü╤é╤î"
    ],
    "keyTopicsHy": [
      "╘╜╒╢╒ñ╓Ç╒½ ╒¼╒╕╓é╒«╒╕╓é╒┤",
      "╒ê╓Ç╒╕╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╒»╒í╒╡╒í╓ü╒╕╓é╒┤",
      "╘╝╒Ñ╒ª╒╕╓é",
      "╒Ç╒Ñ╒┐╒í╒¡╒╕╓é╒ª╒╕╓é╒⌐╒╡╒í╒╢ ╒⌐╒Ñ╒╜╒┐╒í╒╛╒╕╓Ç╒╕╓é╒┤",
      "╒ì╒┐╒Ñ╒▓╒«╒í╒ú╒╕╓Ç╒«╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
    ],
    "keyTopicsAz": [
      "Problemin h╔Ölli",
      "Q╔Örar verm╔Ö",
      "Dil",
      "K╔Ö┼ƒfiyyat Testi",
      "Yarad─▒c─▒l─▒q"
    ]
  },
  {
    "id": 9,
    "title": "Human Development",
    "titleKa": "ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâÿßâí ßâÆßâÉßâ£ßâòßâÿßâùßâÉßâáßâößâæßâÉ",
    "description": "Physical, cognitive, and social development across the lifespan.",
    "descriptionKa": "ßâñßâÿßâûßâÿßâÖßâúßâáßâÿ, ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ ßâôßâÉ ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâÆßâÉßâ£ßâòßâÿßâùßâÉßâáßâößâæßâÉ ßâ¢ßâùßâößâÜßâÿ ßâ¬ßâ«ßâ¥ßâòßâáßâößâæßâÿßâí ßâ¢ßâÉßâ£ßâ½ßâÿßâÜßâûßâö.",
    "icon": "mdi:baby-face-outline",
    "keyTopics": [
      "Piaget's Stages",
      "Attachment",
      "Erikson's Stages",
      "Moral Development",
      "Aging"
    ],
    "keyTopicsKa": [
      "ßâ₧ßâÿßâÉßâƒßâößâí ßâößâóßâÉßâ₧ßâößâæßâÿ",
      "ßâôßâÉßâ£ßâÉßâáßâùßâÿ",
      "ßâößâáßâÿßâÑßâíßâ¥ßâ£ßâÿßâí ßâíßâ¬ßâößâ£ßâößâæßâÿ",
      "ßâ¢ßâ¥ßâáßâÉßâÜßâúßâáßâÿ ßâÆßâÉßâ£ßâòßâÿßâùßâÉßâáßâößâæßâÉ",
      "ßâôßâÉßâæßâößâáßâößâæßâÉ"
    ],
    "summary": "Development is a lifelong process. Piaget described cognitive stages. Erikson outlined psychosocial crises. Bowlby and Ainsworth studied attachment. Traces changes from conception through aging.",
    "keyPoints": [
      "Nature vs. nurture is a false dichotomy: genes and environment interact continuously. Epigenetics shows that experiences can turn genes on or off.",
      "Piaget's 4 cognitive stages: Sensorimotor (0ΓÇô2, object permanence), Preoperational (2ΓÇô7, symbolic thinking but egocentric), Concrete operational (7ΓÇô11, logical thinking), Formal operational (12+, abstract reasoning).",
      "Attachment theory (Bowlby/Ainsworth): Secure attachment (caregiver responsive) leads to healthy social development. Insecure types: avoidant, anxious-ambivalent, disorganized. Measured by the Strange Situation test.",
      "Erikson's 8 psychosocial stages span the entire lifespan: Trust vs. Mistrust (infancy), Autonomy vs. Shame (toddler), Initiative vs. Guilt (preschool), Industry vs. Inferiority (school age), Identity vs. Role Confusion (adolescence), Intimacy vs. Isolation (young adult), Generativity vs. Stagnation (middle adult), Integrity vs. Despair (late adult).",
      "Kohlberg's moral development: Preconventional (self-interest), Conventional (social norms), Postconventional (universal ethical principles). Most adults operate at the conventional level.",
      "Adolescence brings identity exploration (Erikson's \"identity crisis\"), prefrontal cortex development (not complete until ~25), and heightened emotional volatility due to hormonal changes.",
      "Aging: Fluid intelligence (processing speed) declines with age, but crystallized intelligence (accumulated knowledge) remains stable or even increases. Neuroplasticity continues throughout life."
    ],
    "funFact": "Babies can distinguish all speech sounds from all languages until about 10 months of age. After that, their brains \"prune\" unused neural pathways and specialize in their native language sounds ΓÇö which is why learning a second language gets harder with age.",
    "realWorld": "Ainsworth's attachment research directly influenced childcare policies worldwide. Secure attachment in infancy predicts better relationships, higher self-esteem, and more resilience in adulthood.",
    "keyFigures": [
      "Jean Piaget",
      "Erik Erikson",
      "John Bowlby",
      "Mary Ainsworth",
      "Lawrence Kohlberg",
      "Lev Vygotsky"
    ],
    "titleRu": "╨º╨╡╨╗╨╛╨▓╨╡╤ç╨╡╤ü╨║╨╛╨╡ ╤Ç╨░╨╖╨▓╨╕╤é╨╕╨╡",
    "titleHy": "╒ä╒í╓Ç╒ñ╒»╒í╒╡╒½╒╢ ╒ª╒í╓Ç╒ú╒í╓ü╒╕╓é╒┤",
    "titleAz": "─░nsan ─░nki┼ƒaf─▒",
    "descriptionRu": "╨ñ╨╕╨╖╨╕╤ç╨╡╤ü╨║╨╛╨╡, ╨║╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╨╛╨╡ ╨╕ ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╨╛╨╡ ╤Ç╨░╨╖╨▓╨╕╤é╨╕╨╡ ╨╜╨░ ╨┐╤Ç╨╛╤é╤Å╨╢╨╡╨╜╨╕╨╕ ╨▓╤ü╨╡╨╣ ╨╢╨╕╨╖╨╜╨╕.",
    "descriptionHy": "╒û╒½╒ª╒½╒»╒í╒»╒í╒╢, ╒│╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╓ç ╒╜╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒ª╒í╓Ç╒ú╒í╓ü╒╕╓é╒┤ ╒╕╒▓╒╗ ╒»╒╡╒í╒╢╓ä╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤:",
    "descriptionAz": "H╔Öyat boyu fiziki, koqnitiv v╔Ö sosial inki┼ƒaf.",
    "keyTopicsRu": [
      "╨¡╤é╨░╨┐╤ï ╨ƒ╨╕╨░╨╢╨╡",
      "╨Æ╨╗╨╛╨╢╨╡╨╜╨╕╨╡",
      "╨¡╤é╨░╨┐╤ï ╨¡╤Ç╨╕╨║╤ü╨╛╨╜╨░",
      "╨£╨╛╤Ç╨░╨╗╤î╨╜╨╛╨╡ ╤Ç╨░╨╖╨▓╨╕╤é╨╕╨╡",
      "╨í╤é╨░╤Ç╨╡╨╜╨╕╨╡"
    ],
    "keyTopicsHy": [
      "╒è╒½╒í╒¬╒Ñ╒½ ╓â╒╕╓é╒¼╒Ñ╓Ç╒¿",
      "╒Ç╒í╒╛╒Ñ╒¼╒╛╒í╒«",
      "╘╖╓Ç╒½╒»╒╜╒╕╒╢╒½ ╓â╒╕╓é╒¼╒Ñ╓Ç╒¿",
      "╘▓╒í╓Ç╒╕╒╡╒í╒»╒í╒╢ ╒ª╒í╓Ç╒ú╒í╓ü╒╕╓é╒┤",
      "╘╛╒Ñ╓Ç╒í╓ü╒╕╓é╒┤"
    ],
    "keyTopicsAz": [
      "Piagetin m╔Örh╔Öl╔Öl╔Öri",
      "Qo┼ƒma",
      "Eriksonun m╔Örh╔Öl╔Öl╔Öri",
      "M╔Ön╔Övi ─░nki┼ƒaf",
      "Ya┼ƒlanma"
    ]
  },
  {
    "id": 10,
    "title": "Motivation and Emotion",
    "titleKa": "ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÉ ßâôßâÉ ßâößâ¢ßâ¥ßâ¬ßâÿßâÉ",
    "description": "What drives human behavior and the science of emotions.",
    "descriptionKa": "ßâáßâÉ ßâÉßâ¢ßâ¥ßâ½ßâáßâÉßâòßâößâæßâí ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâÿßâí ßâÑßâ¬ßâößâòßâÉßâí ßâôßâÉ ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿßâí ßâ¢ßâößâ¬ßâ£ßâÿßâößâáßâößâæßâÉßâí.",
    "icon": "mdi:fire",
    "keyTopics": [
      "Maslow's Hierarchy",
      "Hunger & Eating",
      "Achievement Motivation",
      "Basic Emotions",
      "Emotional Intelligence"
    ],
    "keyTopicsKa": [
      "ßâ¢ßâÉßâíßâÜßâ¥ßâúßâí ßâÿßâößâáßâÉßâáßâÑßâÿßâÉ",
      "ßâ¿ßâÿßâ¢ßâ¿ßâÿßâÜßâÿ ßâôßâÉ ßâ¡ßâÉßâ¢ßâÉ",
      "ßâ¢ßâÿßâªßâ¼ßâößâòßâÿßâí ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÉ",
      "ßâ½ßâÿßâáßâÿßâùßâÉßâôßâÿ ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿ",
      "ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâÿßâ£ßâóßâößâÜßâößâÑßâóßâÿ"
    ],
    "summary": "Motivation energizes and directs behavior. Covers Maslow's hierarchy, James-Lange theory, Cannon-Bard theory, and Schachter-Singer theory of emotions.",
    "keyPoints": [
      "Motivation has three components: activation (initiating), persistence (continuing effort), and intensity (how hard you try).",
      "Drive-reduction theory: physiological needs create drives (hunger, thirst) that motivate behavior to restore homeostasis. But it can't explain curiosity or thrill-seeking.",
      "Maslow's hierarchy of needs (bottom to top): Physiological ΓåÆ Safety ΓåÆ Love/Belonging ΓåÆ Esteem ΓåÆ Self-actualization. Lower needs must be met before higher ones become motivating.",
      "Intrinsic motivation (doing something for its own sake) is more sustainable than extrinsic motivation (rewards/punishments). The overjustification effect: rewarding an already enjoyed activity can decrease intrinsic motivation.",
      "Theories of emotion: James-Lange (body reacts first, then we feel emotion), Cannon-Bard (body reaction and emotion occur simultaneously), Schachter-Singer / Two-factor (physiological arousal + cognitive label = emotion).",
      "Paul Ekman identified 6 universal facial expressions: happiness, sadness, anger, fear, surprise, and disgust. These are recognized across all cultures.",
      "Emotional intelligence (Goleman): the ability to perceive, understand, manage, and use emotions effectively. High EQ predicts better relationships, leadership, and mental health."
    ],
    "funFact": "The \"misattribution of arousal\" study showed that men who crossed a scary suspension bridge rated a female interviewer as more attractive than men who crossed a safe bridge ΓÇö they mistook their fear-based arousal for romantic attraction!",
    "realWorld": "Companies like Google use Maslow's hierarchy to design workplaces: free food (physiological), job security (safety), team activities (belonging), recognition programs (esteem), and \"20% time\" for passion projects (self-actualization).",
    "keyFigures": [
      "Abraham Maslow",
      "William James",
      "Walter Cannon",
      "Stanley Schachter",
      "Paul Ekman",
      "Daniel Goleman"
    ],
    "titleRu": "╨£╨╛╤é╨╕╨▓╨░╤å╨╕╤Å ╨╕ ╤ì╨╝╨╛╤å╨╕╨╕",
    "titleHy": "╒ä╒╕╒┐╒½╒╛╒í╓ü╒½╒í ╓ç ╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä",
    "titleAz": "Motivasiya v╔Ö Emosiya",
    "descriptionRu": "╨º╤é╨╛ ╨┤╨▓╨╕╨╢╨╡╤é ╤ç╨╡╨╗╨╛╨▓╨╡╤ç╨╡╤ü╨║╨╕╨╝ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡╨╝ ╨╕ ╨╜╨░╤â╨║╨░ ╨╛╨▒ ╤ì╨╝╨╛╤å╨╕╤Å╤à.",
    "descriptionHy": "╘╗╒╢╒╣╒╢ ╒º ╒┤╒▓╒╕╓é╒┤ ╒┤╒í╓Ç╒ñ╒╕╓é ╒╛╒í╓Ç╓ä╒¿ ╓ç ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒ú╒½╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
    "descriptionAz": "─░nsan davran─▒┼ƒ─▒n─▒ v╔Ö duy─ƒular elmini idar╔Ö ed╔Ön n╔Ödir.",
    "keyTopicsRu": [
      "╨ÿ╨╡╤Ç╨░╤Ç╤à╨╕╤Å ╨£╨░╤ü╨╗╨╛╤â",
      "╨ô╨╛╨╗╨╛╨┤ ╨╕ ╨╡╨┤╨░",
      "╨£╨╛╤é╨╕╨▓╨░╤å╨╕╤Å ╨┤╨╛╤ü╤é╨╕╨╢╨╡╨╜╨╕╤Å",
      "╨₧╤ü╨╜╨╛╨▓╨╜╤ï╨╡ ╤ì╨╝╨╛╤å╨╕╨╕",
      "╨¡╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╤ï╨╣ ╨╕╨╜╤é╨╡╨╗╨╗╨╡╨║╤é"
    ],
    "keyTopicsHy": [
      "╒ä╒í╒╜╒¼╒╕╒╕╓é╒½ ╒░╒½╒Ñ╓Ç╒í╓Ç╒¡╒½╒í",
      "╒ì╒╕╒╛ ╓ç ╒╕╓é╒┐╒Ñ╒¼",
      "╒ü╒Ñ╒╝╓ä╒ó╒Ñ╓Ç╒┤╒í╒╢ ╒┤╒╕╒┐╒½╒╛╒í╓ü╒½╒í",
      "╒Ç╒½╒┤╒╢╒í╒»╒í╒╢ ╒░╒╕╓é╒╡╒ª╒Ñ╓Ç",
      "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒í╒╡╒½╒╢ ╒½╒╢╒┐╒Ñ╒¼╒Ñ╒»╒┐"
    ],
    "keyTopicsAz": [
      "Maslow iyerarxiyas─▒",
      "Acl─▒q v╔Ö Yem╔Ök",
      "Nailiyy╔Öt Motivasiyas─▒",
      "╞Åsas Emosiyalar",
      "Emosional ─░ntellekt"
    ]
  },
  {
    "id": 11,
    "title": "Personality",
    "titleKa": "ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÉ",
    "description": "Theories of personality: from Freud to the Big Five.",
    "descriptionKa": "ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâùßâößâ¥ßâáßâÿßâößâæßâÿ: ßâñßâáßâ¥ßâÿßâôßâÿßâôßâÉßâ£ ßâôßâÿßâô ßâ«ßâúßâùßâÉßâ¢ßâôßâö.",
    "icon": "mdi:drama-masks",
    "keyTopics": [
      "Psychoanalytic Theory",
      "Humanistic Theory",
      "Trait Theory",
      "Big Five",
      "Personality Assessment"
    ],
    "keyTopicsKa": [
      "ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâóßâÿßâÖßâúßâáßâÿ ßâùßâößâ¥ßâáßâÿßâÉ",
      "ßâ░ßâúßâ¢ßâÉßâ£ßâÿßâíßâóßâúßâáßâÿ ßâùßâößâ¥ßâáßâÿßâÉ",
      "ßâùßâòßâÿßâíßâößâæßâÿßâí ßâùßâößâ¥ßâáßâÿßâÉ",
      "ßâôßâÿßâôßâÿ ßâ«ßâúßâùßâößâúßâÜßâÿ",
      "ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâ¿ßâößâñßâÉßâíßâößâæßâÉ"
    ],
    "summary": "Personality is our unique pattern of thinking, feeling, and behaving. From Freud's id/ego/superego to the Big Five traits (OCEAN), covers all major personality theories.",
    "keyPoints": [
      "Freud's psychoanalytic theory: Personality is shaped by unconscious conflicts between the Id (primal desires), Ego (rational mediator), and Superego (moral conscience). Defense mechanisms (repression, projection, denial) protect the ego.",
      "Freud's psychosexual stages: Oral, Anal, Phallic (Oedipus complex), Latency, Genital. Fixation at any stage can affect adult personality.",
      "Neo-Freudians (Adler, Jung, Horney) kept the unconscious but de-emphasized sexuality. Jung introduced collective unconscious and archetypes. Adler focused on inferiority complex.",
      "Humanistic approaches: Rogers emphasized unconditional positive regard and self-concept. Maslow focused on self-actualization ΓÇö becoming the best version of yourself.",
      "Trait theories describe personality using stable dimensions. The Big Five (OCEAN): Openness (curiosity), Conscientiousness (organization), Extraversion (sociability), Agreeableness (cooperativeness), Neuroticism (emotional instability).",
      "The Big Five are partially heritable (~40ΓÇô60%), relatively stable after age 30, and predict job performance, relationship satisfaction, and health outcomes.",
      "Personality assessment: Self-report inventories (MMPI, NEO-PI-R) have good reliability but are subject to social desirability bias. Projective tests (Rorschach, TAT) have weaker validity."
    ],
    "funFact": "The Myers-Briggs Type Indicator (MBTI) is used by 88% of Fortune 500 companies, yet most personality psychologists consider it scientifically unreliable ΓÇö about 50% of people get a different result when retested. The Big Five is the gold standard in research.",
    "realWorld": "Recruiters use Big Five assessments because Conscientiousness is the strongest personality predictor of job performance across all occupations. Agreeableness predicts teamwork, and Openness predicts creativity.",
    "keyFigures": [
      "Sigmund Freud",
      "Carl Jung",
      "Alfred Adler",
      "Carl Rogers",
      "Gordon Allport",
      "Hans Eysenck"
    ],
    "titleRu": "╨¢╨╕╤ç╨╜╨╛╤ü╤é╤î",
    "titleHy": "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "titleAz": "┼₧╔Öxsiyy╔Öt",
    "descriptionRu": "╨ó╨╡╨╛╤Ç╨╕╨╕ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕: ╨╛╤é ╨ñ╤Ç╨╡╨╣╨┤╨░ ╨┤╨╛ ┬½╨æ╨╛╨╗╤î╤ê╨╛╨╣ ╨┐╤Å╤é╨╡╤Ç╨║╨╕┬╗.",
    "descriptionHy": "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç. ╒û╓Ç╒Ñ╒╡╒ñ╒½╓ü ╒┤╒½╒╢╒╣╓ç ╒ä╒Ñ╒« ╒░╒╢╒ú╒╡╒í╒».",
    "descriptionAz": "┼₧╔Öxsiyy╔Öt n╔Öz╔Öriyy╔Öl╔Öri: Freydd╔Ön B├╢y├╝k Be┼ƒliy╔Ö q╔Öd╔Ör.",
    "keyTopicsRu": [
      "╨ƒ╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╤é╨╡╨╛╤Ç╨╕╤Å",
      "╨ô╤â╨╝╨░╨╜╨╕╤ü╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╤é╨╡╨╛╤Ç╨╕╤Å",
      "╨ó╨╡╨╛╤Ç╨╕╤Å ╤ç╨╡╤Ç╤é",
      "╨æ╨╛╨╗╤î╤ê╨░╤Å ╨┐╤Å╤é╨╡╤Ç╨║╨░",
      "╨₧╤å╨╡╨╜╨║╨░ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕"
    ],
    "keyTopicsHy": [
      "╒Ç╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒í╒»╒í╒╢ ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╒Ç╒╕╓é╒┤╒í╒╢╒½╒╜╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╒Ç╒í╒┐╒»╒í╒╢╒½╒╖╒╢╒Ñ╓Ç╒½ ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╒ä╒Ñ╒« ╒░╒╢╒ú╒╡╒í╒»",
      "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒ú╒╢╒í╒░╒í╒┐╒╕╓é╒┤"
    ],
    "keyTopicsAz": [
      "Psixoanalitik n╔Öz╔Öriyy╔Ö",
      "Humanist n╔Öz╔Öriyy╔Ö",
      "X├╝susiyy╔Ötl╔Ör n╔Öz╔Öriyy╔Ösi",
      "B├╢y├╝k be┼ƒlik",
      "┼₧╔Öxsiyy╔Ötin qiym╔Ötl╔Öndirilm╔Ösi"
    ]
  },
  {
    "id": 12,
    "title": "Social Psychology",
    "titleKa": "ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ",
    "description": "How others influence our thoughts, feelings, and behavior.",
    "descriptionKa": "ßâáßâ¥ßâÆßâ¥ßâá ßâÉßâ«ßâôßâößâ£ßâößâ£ ßâíßâ«ßâòßâößâæßâÿ ßâÆßâÉßâòßâÜßâößâ£ßâÉßâí ßâ⌐ßâòßâößâ£ßâí ßâÉßâûßâáßâößâæßâûßâö, ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâæßâíßâÉ ßâôßâÉ ßâÑßâ¬ßâößâòßâÉßâûßâö.",
    "icon": "mdi:account-group-outline",
    "keyTopics": [
      "Conformity",
      "Obedience",
      "Attitudes",
      "Group Behavior",
      "Prejudice"
    ],
    "keyTopicsKa": [
      "ßâÖßâ¥ßâ£ßâñßâ¥ßâáßâ¢ßâúßâÜßâ¥ßâæßâÉ",
      "ßâ¢ßâ¥ßâáßâ⌐ßâÿßâÜßâößâæßâÉ",
      "ßâôßâÉßâ¢ßâ¥ßâÖßâÿßâôßâößâæßâúßâÜßâößâæßâößâæßâÿ",
      "ßâ»ßâÆßâúßâñßâúßâáßâÿ ßâÑßâ¬ßâößâòßâÉ",
      "ßâ¬ßâáßâúßâáßâ¼ßâ¢ßâößâ£ßâÉ"
    ],
    "summary": "Social psychology studies how people think about, influence, and relate to each other. Covers conformity, obedience, cognitive dissonance, group behavior, and prejudice.",
    "keyPoints": [
      "Attribution theory: We explain others' behavior using dispositional (personality) or situational (environment) attributions. The fundamental attribution error: we overestimate personality and underestimate situations when judging others.",
      "Conformity (Asch): People agree with an obviously wrong answer to match the group about 37% of the time. Increases with group size (up to ~5) and unanimity.",
      "Obedience (Milgram): 65% of participants delivered what they believed were lethal electric shocks when instructed by an authority figure. Authority, proximity, and legitimacy increased obedience.",
      "Cognitive dissonance (Festinger): When our actions contradict our beliefs, we feel discomfort and change our attitudes to match our behavior. Explains why hazing rituals increase group loyalty.",
      "Group phenomena: Social facilitation (performing better on easy tasks when watched), Social loafing (working less in groups), Groupthink (cohesive groups suppress dissent), Deindividuation (anonymity reduces self-awareness).",
      "Prejudice involves stereotypes (beliefs), prejudice (attitudes), and discrimination (behaviors). Reduced through intergroup contact when groups have equal status and share common goals.",
      "Bystander effect (Darley & Latan├⌐): The more people present, the less likely anyone is to help. Caused by diffusion of responsibility and pluralistic ignorance."
    ],
    "funFact": "Zimbardo's Stanford Prison Experiment (1971) was meant to last 2 weeks but was stopped after just 6 days because \"guards\" became sadistic and \"prisoners\" showed signs of psychological breakdown ΓÇö demonstrating the power of situational forces on behavior.",
    "realWorld": "Understanding conformity and obedience explains everything from workplace culture (\"nobody questions the boss\") to historical atrocities. Modern organizations use these insights to create psychological safety ΓÇö environments where people feel safe to speak up.",
    "keyFigures": [
      "Solomon Asch",
      "Stanley Milgram",
      "Philip Zimbardo",
      "Leon Festinger",
      "Muzafer Sherif"
    ],
    "titleRu": "╨í╨╛╤å╨╕╨░╨╗╤î╨╜╨░╤Å ╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å",
    "titleHy": "╒ì╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "titleAz": "Sosial Psixologiya",
    "descriptionRu": "╨Ü╨░╨║ ╨┤╤Ç╤â╨│╨╕╨╡ ╨▓╨╗╨╕╤Å╤Ä╤é ╨╜╨░ ╨╜╨░╤ê╨╕ ╨╝╤ï╤ü╨╗╨╕, ╤ç╤â╨▓╤ü╤é╨▓╨░ ╨╕ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡.",
    "descriptionHy": "╘╗╒╢╒╣╒║╒Ñ╒╜ ╒Ñ╒╢ ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒╢ ╒í╒ª╒ñ╒╕╓é╒┤ ╒┤╒Ñ╓Ç ╒┤╒┐╓ä╒Ñ╓Ç╒½, ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╓ç ╒╛╒í╓Ç╓ä╒½ ╒╛╓Ç╒í:",
    "descriptionAz": "Ba┼ƒqalar─▒n─▒n d├╝┼ƒ├╝nc╔Öl╔Örimiz╔Ö, hissl╔Örimiz╔Ö v╔Ö davran─▒┼ƒlar─▒m─▒za nec╔Ö t╔Ösir etdiyi.",
    "keyTopicsRu": [
      "╨í╨╛╨╛╤é╨▓╨╡╤é╤ü╤é╨▓╨╕╨╡",
      "╨ƒ╨╛╤ü╨╗╤â╤ê╨░╨╜╨╕╨╡",
      "╨₧╤é╨╜╨╛╤ê╨╡╨╜╨╕╤Å",
      "╨ô╤Ç╤â╨┐╨┐╨╛╨▓╨╛╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡",
      "╨ƒ╤Ç╨╡╨┤╤Ç╨░╤ü╤ü╤â╨┤╨║╨╕"
    ],
    "keyTopicsHy": [
      "╒Ç╒í╒┤╒í╒║╒í╒┐╒í╒╜╒¡╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╒Ç╒╢╒í╒ª╒í╒╢╒ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╒Ä╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç",
      "╘╜╒┤╒ó╒í╒╡╒½╒╢ ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«",
      "╒å╒í╒¡╒í╒║╒í╒╖╒í╓Ç╒┤╒╕╓é╒╢╓ä"
    ],
    "keyTopicsAz": [
      "Uy─ƒunluq",
      "─░ta╔Öt",
      "M├╝nasib╔Ötl╔Ör",
      "Qrup Davran─▒┼ƒ─▒",
      "Q╔Ör╔Öz"
    ]
  },
  {
    "id": 13,
    "title": "Stress, Health, and Coping",
    "titleKa": "ßâíßâóßâáßâößâíßâÿ, ßâ»ßâÉßâ£ßâ¢ßâáßâùßâößâÜßâ¥ßâæßâÉ ßâôßâÉ ßâôßâÉßâ½ßâÜßâößâòßâÉ",
    "description": "How stress affects us and strategies to cope with it.",
    "descriptionKa": "ßâáßâ¥ßâÆßâ¥ßâá ßâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâí ßâíßâóßâáßâößâíßâÿ ßâ⌐ßâòßâößâ£ßâûßâö ßâôßâÉ ßâ¢ßâÉßâíßâùßâÉßâ£ ßâÆßâÉßâ¢ßâÖßâÜßâÉßâòßâößâæßâÿßâí ßâíßâóßâáßâÉßâóßâößâÆßâÿßâößâæßâÿ.",
    "icon": "mdi:meditation",
    "keyTopics": [
      "Stress Response",
      "Stressors",
      "Coping Strategies",
      "Health Psychology",
      "Resilience"
    ],
    "keyTopicsKa": [
      "ßâíßâóßâáßâößâíßâÿßâí ßâáßâößâÉßâÑßâ¬ßâÿßâÉ",
      "ßâíßâóßâáßâößâíßâ¥ßâáßâößâæßâÿ",
      "ßâôßâÉßâ½ßâÜßâößâòßâÿßâí ßâíßâóßâáßâÉßâóßâößâÆßâÿßâößâæßâÿ",
      "ßâ»ßâÉßâ£ßâ¢ßâáßâùßâößâÜßâ¥ßâæßâÿßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ",
      "ßâÆßâÉßâ¢ßâ½ßâÜßâößâ¥ßâæßâÉ"
    ],
    "summary": "Stress is the body's response to demanding situations. Covers alarm/resistance/exhaustion stages, coping strategies, social support, and resilience.",
    "keyPoints": [
      "Stress is the body's response to any perceived threat or demand. Eustress (positive) helps performance; distress (negative) harms health.",
      "Selye's General Adaptation Syndrome (GAS): Alarm (fight-or-flight activated) ΓåÆ Resistance (body adapts to ongoing stress) ΓåÆ Exhaustion (resources depleted, vulnerability to illness).",
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
    "titleRu": "╨í╤é╤Ç╨╡╤ü╤ü, ╨╖╨┤╨╛╤Ç╨╛╨▓╤î╨╡ ╨╕ ╨┐╤Ç╨╡╨╛╨┤╨╛╨╗╨╡╨╜╨╕╨╡ ╤é╤Ç╤â╨┤╨╜╨╛╤ü╤é╨╡╨╣",
    "titleHy": "╒ì╒⌐╓Ç╒Ñ╒╜, ╒í╒╝╒╕╒▓╒╗╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓ç ╒░╒í╒▓╒⌐╒í╒░╒í╓Ç╒╕╓é╒┤",
    "titleAz": "Stress, Sa─ƒlaml─▒q v╔Ö M├╝bariz╔Ö",
    "descriptionRu": "╨Ü╨░╨║ ╤ü╤é╤Ç╨╡╤ü╤ü ╨▓╨╗╨╕╤Å╨╡╤é ╨╜╨░ ╨╜╨░╤ü ╨╕ ╨║╨░╨║ ╤ü ╨╜╨╕╨╝ ╤ü╨┐╤Ç╨░╨▓╨╕╤é╤î╤ü╤Å.",
    "descriptionHy": "╘╗╒╢╒╣╒║╒Ñ╒╜ ╒º ╒╜╒⌐╓Ç╒Ñ╒╜╒¿ ╒í╒ª╒ñ╒╕╓é╒┤ ╒┤╒Ñ╒ª ╒╛╓Ç╒í ╓ç ╒ñ╓Ç╒í ╒ñ╒Ñ╒┤ ╒║╒í╒╡╓ä╒í╓Ç╒½ ╒╝╒í╒ª╒┤╒í╒╛╒í╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç:",
    "descriptionAz": "Stress biz╔Ö nec╔Ö t╔Ösir edir v╔Ö bununla m├╝bariz╔Ö strategiyalar─▒.",
    "keyTopicsRu": [
      "╨í╤é╤Ç╨╡╤ü╤ü╨╛╨▓╨░╤Å ╤Ç╨╡╨░╨║╤å╨╕╤Å",
      "╨í╤é╤Ç╨╡╤ü╤ü╨╛╤Ç╤ï",
      "╨í╤é╤Ç╨░╤é╨╡╨│╨╕╨╕ ╨┐╤Ç╨╡╨╛╨┤╨╛╨╗╨╡╨╜╨╕╤Å ╤é╤Ç╤â╨┤╨╜╨╛╤ü╤é╨╡╨╣",
      "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╨╖╨┤╨╛╤Ç╨╛╨▓╤î╤Å",
      "╨ú╤ü╤é╨╛╨╣╤ç╨╕╨▓╨╛╤ü╤é╤î"
    ],
    "keyTopicsHy": [
      "╒ì╒⌐╓Ç╒Ñ╒╜╒½ ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä",
      "╒ì╒⌐╓Ç╒Ñ╒╜╒╢╒Ñ╓Ç",
      "╒Ç╒í╒▓╒⌐╒í╒░╒í╓Ç╒┤╒í╒╢ ╒╝╒í╒ª╒┤╒í╒╛╒í╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
      "╘▒╒╝╒╕╒▓╒╗╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╒â╒»╒╕╓é╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
    ],
    "keyTopicsAz": [
      "Stress cavab─▒",
      "Stressorlar",
      "M├╝bariz╔Ö Strategiyalar─▒",
      "Sa─ƒlaml─▒q Psixologiyas─▒",
      "D├╢z├╝ml├╝l├╝k"
    ]
  },
  {
    "id": 14,
    "title": "Psychological Disorders",
    "titleKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâúßâáßâÿ ßâôßâÉßâáßâªßâòßâößâòßâößâæßâÿ",
    "description": "Understanding mental disorders: symptoms, causes, and classification.",
    "descriptionKa": "ßâñßâíßâÿßâÑßâÿßâÖßâúßâáßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÿßâí ßâÆßâÉßâÆßâößâæßâÉ: ßâíßâÿßâ¢ßâ₧ßâóßâ¥ßâ¢ßâößâæßâÿ, ßâ¢ßâÿßâûßâößâûßâößâæßâÿ ßâôßâÉ ßâÖßâÜßâÉßâíßâÿßâñßâÿßâÖßâÉßâ¬ßâÿßâÉ.",
    "icon": "mdi:stethoscope",
    "keyTopics": [
      "DSM Classification",
      "Anxiety Disorders",
      "Mood Disorders",
      "Schizophrenia",
      "Personality Disorders"
    ],
    "keyTopicsKa": [
      "DSM ßâÖßâÜßâÉßâíßâÿßâñßâÿßâÖßâÉßâ¬ßâÿßâÉ",
      "ßâ¿ßâñßâ¥ßâùßâòßâÿßâùßâÿ ßâôßâÉßâáßâªßâòßâößâòßâößâæßâÿ",
      "ßâÆßâÉßâ£ßâ¼ßâºßâ¥ßâæßâÿßâí ßâôßâÉßâáßâªßâòßâößâòßâößâæßâÿ",
      "ßâ¿ßâÿßâûßâ¥ßâñßâáßâößâ£ßâÿßâÉ",
      "ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâôßâÉßâáßâªßâòßâößâòßâößâæßâÿ"
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
    "funFact": "About 1 in 5 adults experiences a mental health condition in any given year. Depression and anxiety cost the global economy $1 trillion annually in lost productivity ΓÇö yet most disorders are highly treatable with proper intervention.",
    "realWorld": "The shift from institutionalization to community-based mental health care (deinstitutionalization) transformed treatment. Today, early intervention programs for psychosis can reduce symptoms by 50% and dramatically improve long-term outcomes.",
    "keyFigures": [
      "Emil Kraepelin",
      "Aaron Beck",
      "David Rosenhan",
      "Thomas Szasz",
      "Kay Redfield Jamison"
    ],
    "titleRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░",
    "titleHy": "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç",
    "titleAz": "Psixoloji poz─ƒunluqlar",
    "descriptionRu": "╨ƒ╨╛╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╤à ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓: ╤ü╨╕╨╝╨┐╤é╨╛╨╝╤ï, ╨┐╤Ç╨╕╤ç╨╕╨╜╤ï ╨╕ ╨║╨╗╨░╤ü╤ü╨╕╤ä╨╕╨║╨░╤å╨╕╤Å.",
    "descriptionHy": "╒Ç╒í╒╜╒»╒í╒╢╒í╒¼╒╕╒╛ ╒░╒╕╒ú╒Ñ╒»╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿. ╒í╒¡╒┐╒í╒╢╒½╒╖╒╢╒Ñ╓Ç╒¿, ╒║╒í╒┐╒│╒í╒╝╒╢╒Ñ╓Ç╒¿ ╓ç ╒ñ╒í╒╜╒í╒»╒í╓Ç╒ú╒╕╓é╒┤╒¿:",
    "descriptionAz": "Psixi poz─ƒunluqlar─▒ ba┼ƒa d├╝┼ƒm╔Ök: simptomlar, s╔Öb╔Öbl╔Ör v╔Ö t╔Ösnifat.",
    "keyTopicsRu": [
      "╨Ü╨╗╨░╤ü╤ü╨╕╤ä╨╕╨║╨░╤å╨╕╤Å ╨ö╨í╨£",
      "╨ó╤Ç╨╡╨▓╨╛╨╢╨╜╤ï╨╡ ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░",
      "╨á╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░ ╨╜╨░╤ü╤é╤Ç╨╛╨╡╨╜╨╕╤Å",
      "╨¿╨╕╨╖╨╛╤ä╤Ç╨╡╨╜╨╕╤Å",
      "╨á╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕"
    ],
    "keyTopicsHy": [
      "DSM ╒ñ╒í╒╜╒í╒»╒í╓Ç╒ú╒╕╓é╒┤",
      "╘▒╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç",
      "╒Å╓Ç╒í╒┤╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç",
      "╒ç╒½╒ª╒╕╓å╓Ç╒Ñ╒╢╒½╒í",
      "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç"
    ],
    "keyTopicsAz": [
      "DSM t╔Ösnifat─▒",
      "Anksiyete poz─ƒunluqlar─▒",
      "╞Åhval poz─ƒunluqlar─▒",
      "┼₧izofreniya",
      "┼₧╔Öxsiyy╔Öt poz─ƒunluqlar─▒"
    ]
  },
  {
    "id": 15,
    "title": "Therapies",
    "titleKa": "ßâùßâößâáßâÉßâ₧ßâÿßâößâæßâÿ",
    "description": "Approaches to treating psychological disorders.",
    "descriptionKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâúßâáßâÿ ßâôßâÉßâáßâªßâòßâößâòßâößâæßâÿßâí ßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâæßâÿßâí ßâ¢ßâÿßâôßâÆßâ¥ßâ¢ßâößâæßâÿ.",
    "icon": "mdi:pill",
    "keyTopics": [
      "Psychotherapy",
      "CBT",
      "Humanistic Therapy",
      "Biomedical Therapies",
      "Group Therapy"
    ],
    "keyTopicsKa": [
      "ßâñßâíßâÿßâÑßâ¥ßâùßâößâáßâÉßâ₧ßâÿßâÉ",
      "CBT",
      "ßâ░ßâúßâ¢ßâÉßâ£ßâÿßâíßâóßâúßâáßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ",
      "ßâæßâÿßâ¥ßâíßâÉßâ¢ßâößâôßâÿßâ¬ßâÿßâ£ßâ¥ ßâùßâößâáßâÉßâ₧ßâÿßâÉ",
      "ßâ»ßâÆßâúßâñßâúßâáßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ"
    ],
    "summary": "Therapy comes in many forms: psychoanalytic, CBT, humanistic, and biomedical. Compares therapeutic approaches and their effectiveness.",
    "keyPoints": [
      "Psychoanalytic/Psychodynamic therapy: explores unconscious conflicts through free association, dream analysis, and transference. Long-term, insight-oriented. Less empirically supported than CBT.",
      "Cognitive-Behavioral Therapy (CBT): identifies and changes distorted thinking patterns and maladaptive behaviors. The gold standard for anxiety and depression with strong evidence. Short-term (12ΓÇô20 sessions).",
      "Beck's cognitive therapy targets cognitive distortions: all-or-nothing thinking, catastrophizing, overgeneralization, mind reading, and personalization.",
      "Humanistic therapy (Rogers's client-centered): provides unconditional positive regard, empathy, and genuineness. The therapist creates a supportive environment for self-exploration.",
      "Biomedical therapies: Antidepressants (SSRIs increase serotonin), Anti-anxiety meds (benzodiazepines), Antipsychotics (block dopamine), Mood stabilizers (lithium for bipolar). ECT (electroconvulsive therapy) remains effective for severe, treatment-resistant depression.",
      "Group therapy and family therapy leverage social support and address relationship dynamics. More cost-effective and can reduce isolation. Self-help groups (AA model) provide peer support.",
      "Evidence-based practice: combining the best research evidence, clinical expertise, and patient preferences. Not all therapies are equally effective for all disorders ΓÇö matching treatment to diagnosis matters."
    ],
    "funFact": "Talking to a therapist actually changes your brain. Brain scans show that CBT produces measurable changes in activity in the prefrontal cortex and amygdala ΓÇö the same regions affected by antidepressant medication.",
    "realWorld": "Teletherapy (online therapy) exploded during COVID-19 and research shows it's nearly as effective as in-person therapy for most conditions. This massively expanded access to mental health care, especially in rural areas.",
    "keyFigures": [
      "Aaron Beck",
      "Carl Rogers",
      "Albert Ellis",
      "Joseph Wolpe",
      "Sigmund Freud"
    ],
    "titleRu": "╨ó╨╡╤Ç╨░╨┐╨╕╤Å",
    "titleHy": "╘╣╒Ñ╓Ç╒í╒║╒½╒í╒╢╒Ñ╓Ç",
    "titleAz": "Terapiyalar",
    "descriptionRu": "╨ƒ╨╛╨┤╤à╨╛╨┤╤ï ╨║ ╨╗╨╡╤ç╨╡╨╜╨╕╤Ä ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╤à ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓.",
    "descriptionHy": "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╒ó╒╕╓é╒¬╒┤╒í╒╢ ╒┤╒╕╒┐╒Ñ╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç.",
    "descriptionAz": "Psixoloji poz─ƒunluqlar─▒n m├╝alic╔Ösin╔Ö yana┼ƒmalar.",
    "keyTopicsRu": [
      "╨ƒ╤ü╨╕╤à╨╛╤é╨╡╤Ç╨░╨┐╨╕╤Å",
      "╨ù╨æ╨ó",
      "╨ô╤â╨╝╨░╨╜╨╕╤ü╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å",
      "╨æ╨╕╨╛╨╝╨╡╨┤╨╕╤å╨╕╨╜╤ü╨║╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å",
      "╨ô╤Ç╤â╨┐╨┐╨╛╨▓╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å"
    ],
    "keyTopicsHy": [
      "╒Ç╒╕╒ú╒Ñ╒⌐╒Ñ╓Ç╒í╒║╒½╒í",
      "CBT",
      "╒Ç╒╕╓é╒┤╒í╒╢╒½╒╜╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒⌐╒Ñ╓Ç╒í╒║╒½╒í",
      "╘┐╒Ñ╒╢╒╜╒í╒ó╒¬╒╖╒»╒í╒»╒í╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í",
      "╘╜╒┤╒ó╒í╒╡╒½╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í"
    ],
    "keyTopicsAz": [
      "Psixoterapiya",
      "CBT",
      "Humanist Terapiya",
      "Biotibbi M├╝alic╔Öl╔Ör",
      "Qrup terapiyas─▒"
    ]
  },
  {
    "id": 16,
    "title": "Applied Psychology",
    "titleKa": "ßâÆßâÉßâ¢ßâ¥ßâºßâößâ£ßâößâæßâÿßâùßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ",
    "description": "Psychology in the real world: work, education, law, and everyday life.",
    "descriptionKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâáßâößâÉßâÜßâúßâá ßâíßâÉßâ¢ßâºßâÉßâáßâ¥ßâ¿ßâÿ: ßâíßâÉßâ¢ßâúßâ¿ßâÉßâ¥, ßâÆßâÉßâ£ßâÉßâùßâÜßâößâæßâÉ, ßâíßâÉßâ¢ßâÉßâáßâùßâÉßâÜßâÿ ßâôßâÉ ßâºßâ¥ßâòßâößâÜßâôßâªßâÿßâúßâáßâÿ ßâ¬ßâ«ßâ¥ßâòßâáßâößâæßâÉ.",
    "icon": "mdi:earth",
    "keyTopics": [
      "Industrial-Organizational Psychology",
      "Educational Psychology",
      "Forensic Psychology",
      "Positive Psychology"
    ],
    "keyTopicsKa": [
      "ßâÿßâ£ßâôßâúßâíßâóßâáßâÿßâúßâÜ-ßâ¥ßâáßâÆßâÉßâ£ßâÿßâûßâÉßâ¬ßâÿßâúßâÜßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ",
      "ßâÆßâÉßâ£ßâÉßâùßâÜßâößâæßâÿßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ",
      "ßâíßâÉßâíßâÉßâ¢ßâÉßâáßâùßâÜßâ¥ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ",
      "ßâ₧ßâ¥ßâûßâÿßâóßâÿßâúßâáßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ"
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
    "funFact": "The \"IKEA effect\" (discovered by behavioral economists using psychological research) shows that people value things they built themselves 63% more than identical pre-built items ΓÇö even when their creation is objectively worse!",
    "realWorld": "Seligman's positive psychology research is used by the U.S. Army's Comprehensive Soldier Fitness program, training 1.1 million soldiers in resilience skills. Schools worldwide now teach \"character strengths\" and \"growth mindset\" as part of their curriculum.",
    "keyFigures": [
      "Martin Seligman",
      "Mihaly Csikszentmihalyi",
      "Carol Dweck",
      "Angela Duckworth",
      "Hugo M├╝nsterberg"
    ],
    "titleRu": "╨ƒ╤Ç╨╕╨║╨╗╨░╨┤╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å",
    "titleHy": "╘┐╒½╓Ç╒í╒╝╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "titleAz": "T╔Ötbiqi Psixologiya",
    "descriptionRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╨▓ ╤Ç╨╡╨░╨╗╤î╨╜╨╛╨╝ ╨╝╨╕╤Ç╨╡: ╤Ç╨░╨▒╨╛╤é╨░, ╨╛╨▒╤Ç╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡, ╨┐╤Ç╨░╨▓╨╛ ╨╕ ╨┐╨╛╨▓╤ü╨╡╨┤╨╜╨╡╨▓╨╜╨░╤Å ╨╢╨╕╨╖╨╜╤î.",
    "descriptionHy": "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒½╓Ç╒í╒»╒í╒╢ ╒í╒╖╒¡╒í╓Ç╒░╒╕╓é╒┤. ╒í╒╖╒¡╒í╒┐╒í╒╢╓ä, ╒»╓Ç╒⌐╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒½╓Ç╒í╒╛╒╕╓é╒╢╓ä ╓ç ╒í╒╝╓à╓Ç╒╡╒í ╒»╒╡╒í╒╢╓ä:",
    "descriptionAz": "Real d├╝nyada psixologiya: i┼ƒ, t╔Öhsil, h├╝quq v╔Ö g├╝nd╔Ölik h╔Öyat.",
    "keyTopicsRu": [
      "╨ƒ╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╤ü╤é╨▓╨╡╨╜╨╜╨╛-╨╛╤Ç╨│╨░╨╜╨╕╨╖╨░╤å╨╕╨╛╨╜╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å",
      "╨ƒ╨╡╨┤╨░╨│╨╛╨│╨╕╤ç╨╡╤ü╨║╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å",
      "╨í╤â╨┤╨╡╨▒╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å",
      "╨ƒ╨╛╨╖╨╕╤é╨╕╨▓╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å"
    ],
    "keyTopicsHy": [
      "╘▒╓Ç╒ñ╒╡╒╕╓é╒╢╒í╒ó╒Ñ╓Ç╒í╒»╒í╒╢-╒»╒í╒ª╒┤╒í╒»╒Ñ╓Ç╒║╒╣╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╘┐╓Ç╒⌐╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╘┤╒í╒┐╒í╒ó╒¬╒╖╒»╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
      "╘┤╓Ç╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
    ],
    "keyTopicsAz": [
      "S╔Önaye-T╔Ö┼ƒkilati Psixologiya",
      "T╔Öhsil Psixologiyas─▒",
      "M╔Öhk╔Öm╔Ö Psixologiyas─▒",
      "Pozitiv Psixologiya"
    ]
  }
];



export const QUIZZES: Quiz[] = [
  {
    "id": "ch1-quiz",
    "chapterId": 1,
    "title": "What is Psychology? ΓÇö Quiz",
    "titleKa": "ßâáßâÉ ßâÉßâáßâÿßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ? ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q1-1",
        "question": "Who established the first psychology laboratory in 1879?",
        "questionKa": "ßâòßâÿßâ£ ßâôßâÉßâÉßâÉßâáßâíßâÉ 1879 ßâ¼ßâößâÜßâí ßâ₧ßâÿßâáßâòßâößâÜßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÿßâí ßâÜßâÉßâæßâ¥ßâáßâÉßâóßâ¥ßâáßâÿßâÉ?",
        "options": [
          "Sigmund Freud",
          "Wilhelm Wundt",
          "William James",
          "John Watson"
        ],
        "optionsKa": [
          "ßâûßâÿßâÆßâ¢ßâúßâ£ßâô ßâñßâáßâ¥ßâÿßâôßâ¢ßâÉ",
          "ßâòßâÿßâÜßâ░ßâößâÜßâ¢ ßâòßâúßâ£ßâôßâóßâ¢ßâÉ",
          "ßâúßâÿßâÜßâÿßâÉßâ¢ ßâ»ßâößâÿßâ¢ßâíßâ¢ßâÉ",
          "ßâ»ßâ¥ßâ£ ßâúßâ¥ßâóßâíßâ¥ßâ£ßâ¢ßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Wilhelm Wundt founded the first psychology lab at the University of Leipzig in 1879.",
        "explanationKa": "ßâòßâÿßâÜßâ░ßâößâÜßâ¢ ßâòßâúßâ£ßâôßâóßâ¢ßâÉ ßâôßâÉßâÉßâÉßâáßâíßâÉ ßâ₧ßâÿßâáßâòßâößâÜßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÿßâí ßâÜßâÉßâæßâ¥ßâáßâÉßâóßâ¥ßâáßâÿßâÉ ßâÜßâÉßâÿßâñßâ¬ßâÿßâÆßâÿßâí ßâúßâ£ßâÿßâòßâößâáßâíßâÿßâóßâößâóßâ¿ßâÿ 1879 ßâ¼ßâößâÜßâí.",
        "optionsRu": [
          "╨ù╨╕╨│╨╝╤â╨╜╨┤ ╨ñ╤Ç╨╡╨╣╨┤",
          "╨Æ╨╕╨╗╤î╨│╨╡╨╗╤î╨╝ ╨Æ╤â╨╜╨┤╤é",
          "╨ú╨╕╨╗╤î╤Å╨╝ ╨ö╨╢╨╡╨╣╨╝╤ü",
          "╨ö╨╢╨╛╨╜ ╨Æ╨░╤é╤ü╨╛╨╜"
        ],
        "optionsHy": [
          "╘╢╒½╒ú╒┤╒╕╓é╒╢╒ñ ╒û╓Ç╒Ñ╒╡╒ñ",
          "╒Ä╒½╒¼╒░╒Ñ╒¼╒┤ ╒Ä╒╕╓é╒╢╒ñ╒┐",
          "╒ê╓é╒½╒¼╒╡╒í╒┤ ╒ï╒Ñ╒╡╒┤╒╜",
          "╒ï╒╕╒╢ ╒ê╓é╒╕╒⌐╒╜╒╕╒╢"
        ],
        "optionsAz": [
          "Ziqmund Freyd",
          "Vilhelm Vundt",
          "William James",
          "John Watson"
        ],
        "questionAz": "1879-cu ild╔Ö ilk psixologiya laboratoriyas─▒n─▒ kim yarad─▒b?",
        "explanationRu": "╨Æ╨╕╨╗╤î╨│╨╡╨╗╤î╨╝ ╨Æ╤â╨╜╨┤╤é ╨╛╤ü╨╜╨╛╨▓╨░╨╗ ╨┐╨╡╤Ç╨▓╤â╤Ä ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╤â╤Ä ╨╗╨░╨▒╨╛╤Ç╨░╤é╨╛╤Ç╨╕╤Ä ╨▓ ╨¢╨╡╨╣╨┐╤å╨╕╨│╤ü╨║╨╛╨╝ ╤â╨╜╨╕╨▓╨╡╤Ç╤ü╨╕╤é╨╡╤é╨╡ ╨▓ 1879 ╨│╨╛╨┤╤â.",
        "questionHy": "╒ê╒₧╒╛ ╒░╒½╒┤╒╢╒Ñ╓ü ╒í╒╝╒í╒╗╒½╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╒¼╒í╒ó╒╕╓Ç╒í╒┐╒╕╓Ç╒½╒í╒╢ 1879 ╒⌐╒╛╒í╒»╒í╒╢╒½╒╢:",
        "explanationHy": "╒Ä╒½╒¼╒░╒Ñ╒¼╒┤ ╒Ä╒╕╓é╒╢╒ñ╒┐╒¿ ╒░╒½╒┤╒╢╒í╒ñ╓Ç╒Ñ╒¼ ╒º ╒í╒╝╒í╒╗╒½╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╒¼╒í╒ó╒╕╓Ç╒í╒┐╒╕╓Ç╒½╒í╒╢ ╘╝╒í╒╡╒║╓ü╒½╒ú╒½ ╒░╒í╒┤╒í╒¼╒╜╒í╓Ç╒í╒╢╒╕╓é╒┤ 1879 ╒⌐╒╛╒í╒»╒í╒╢╒½╒╢:",
        "questionRu": "╨Ü╤é╨╛ ╨╛╤ü╨╜╨╛╨▓╨░╨╗ ╨┐╨╡╤Ç╨▓╤â╤Ä ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╤â╤Ä ╨╗╨░╨▒╨╛╤Ç╨░╤é╨╛╤Ç╨╕╤Ä ╨▓ 1879 ╨│╨╛╨┤╤â?",
        "explanationAz": "Vilhelm Vundt 1879-cu ild╔Ö Leypsiq Universitetind╔Ö ilk psixologiya laboratoriyas─▒n─▒ qurdu."
      },
      {
        "id": "q1-2",
        "question": "Psychology is best defined as the scientific study of:",
        "questionKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâ¿ßâößâíßâ¼ßâÉßâòßâÜßâÿßâí ßâíßâÉßâÆßâÉßâ£ßâÿßâÉ:",
        "options": [
          "The mind only",
          "Behavior and mental processes",
          "Emotions",
          "Brain chemistry"
        ],
        "optionsKa": [
          "ßâÆßâ¥ßâ£ßâößâæßâÉ",
          "ßâÑßâ¬ßâößâòßâÉ ßâôßâÉ ßâñßâíßâÿßâÑßâÿßâÖßâúßâáßâÿ ßâ₧ßâáßâ¥ßâ¬ßâößâíßâößâæßâÿ",
          "ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿ",
          "ßâóßâòßâÿßâ£ßâÿßâí ßâÑßâÿßâ¢ßâÿßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Psychology is the scientific study of both behavior and mental processes.",
        "explanationKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâÉßâáßâÿßâí ßâÑßâ¬ßâößâòßâÿßâíßâÉ ßâôßâÉ ßâñßâíßâÿßâÑßâÿßâÖßâúßâáßâÿ ßâ₧ßâáßâ¥ßâ¬ßâößâíßâößâæßâÿßâí ßâ¿ßâößâ¢ßâíßâ¼ßâÉßâòßâÜßâößâÜßâÿ ßâ¢ßâößâ¬ßâ£ßâÿßâößâáßâößâæßâÉ.",
        "optionsRu": [
          "╨ó╨╛╨╗╤î╨║╨╛ ╤Ç╨░╨╖╤â╨╝",
          "╨ƒ╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨╕ ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╤ï",
          "╨¡╨╝╨╛╤å╨╕╨╕",
          "╨Ñ╨╕╨╝╨╕╤Å ╨╝╨╛╨╖╨│╨░"
        ],
        "optionsHy": [
          "╒ä╒½╒í╒╡╒╢ ╒┤╒½╒┐╓ä╒¿",
          "╒Ä╒í╓Ç╓ä╒í╒ú╒½╒« ╓ç ╒┤╒┐╒í╒╛╒╕╓Ç ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒╢╒Ñ╓Ç",
          "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç",
          "╒ê╓é╒▓╒Ñ╒▓╒½ ╓ä╒½╒┤╒½╒í"
        ],
        "optionsAz": [
          "Yaln─▒z a─ƒ─▒l",
          "Davran─▒┼ƒ v╔Ö psixi prosesl╔Ör",
          "Emosiyalar",
          "Beyin kimyas─▒"
        ],
        "questionRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Ä ╨╗╤â╤ç╤ê╨╡ ╨▓╤ü╨╡╨│╨╛ ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╨╕╤é╤î ╨║╨░╨║ ╨╜╨░╤â╤ç╨╜╨╛╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡:",
        "explanationRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ΓÇô ╤ì╤é╨╛ ╨╜╨░╤â╤ç╨╜╨╛╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Å ╨╕ ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╤à ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╨╛╨▓.",
        "explanationAz": "Psixologiya h╔Öm davran─▒┼ƒ, h╔Öm d╔Ö psixi prosesl╔Örin elmi t╔Ödqiqidir.",
        "questionHy": "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒¼╒í╒╛╒í╒ú╒╕╓é╒╡╒╢╒╜ ╒╜╒í╒░╒┤╒í╒╢╒╛╒╕╓é╒┤ ╒º ╒╕╓Ç╒║╒Ñ╒╜ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒½ ╒ú╒½╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢.",
        "questionAz": "Psixologiya ╔Ön yax┼ƒ─▒ elmi ara┼ƒd─▒rma kimi m├╝╔Öyy╔Ön edilir:",
        "explanationHy": "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒ú╒½╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒º ╒½╒╢╒╣╒║╒Ñ╒╜ ╒╛╒í╓Ç╓ä╒½, ╒í╒╡╒╢╒║╒Ñ╒╜ ╒º╒¼ ╒┤╒┐╒í╒╛╒╕╓Ç ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒╢╒Ñ╓Ç╒½ ╒┤╒í╒╜╒½╒╢:"
      },
      {
        "id": "q1-3",
        "question": "Which perspective emphasizes observable behavior?",
        "questionKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÿßâí ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâ¢ßâÿßâ¢ßâÉßâáßâùßâúßâÜßâößâæßâÉ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâôßâößâæßâÉ ßâôßâÉßâÖßâòßâÿßâáßâòßâößâæßâÉßâô ßâÑßâ¬ßâößâòßâÉßâûßâö?",
        "options": [
          "Psychoanalytic",
          "Humanistic",
          "Behavioral",
          "Cognitive"
        ],
        "optionsKa": [
          "ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâóßâÿßâÖßâúßâáßâÿ",
          "ßâ░ßâúßâ¢ßâÉßâ£ßâÿßâíßâóßâúßâáßâÿ",
          "ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâÿßâíßâóßâúßâÜßâÿ",
          "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "Behaviorism focuses on observable, measurable behaviors.",
        "explanationKa": "ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâÿßâûßâ¢ßâÿ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâôßâößâæßâÉ ßâôßâÉßâÖßâòßâÿßâáßâòßâößâæßâÉßâô, ßâÆßâÉßâûßâ¥ßâ¢ßâòßâÉßâô ßâÑßâ¬ßâößâòßâößâæßâûßâö.",
        "optionsRu": [
          "╨ƒ╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣",
          "╨│╤â╨╝╨░╨╜╨╕╤ü╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣",
          "╨ƒ╨╛╨▓╨╡╨┤╨╡╨╜╤ç╨╡╤ü╨║╨╕╨╣",
          "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╨╣"
        ],
        "optionsHy": [
          "╒Ç╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒í╒»╒í╒╢",
          "╒ä╒í╓Ç╒ñ╒í╒╜╒½╓Ç╒í╒»╒í╒╢",
          "╒Ä╒í╓Ç╓ä╒í╒ú╒«╒í╒╡╒½╒╢",
          "╒â╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢"
        ],
        "optionsAz": [
          "Psixoanalitik",
          "Humanist",
          "Davran─▒┼ƒ",
          "Koqnitiv"
        ],
        "questionRu": "╨Ü╨░╨║╨░╤Å ╤é╨╛╤ç╨║╨░ ╨╖╤Ç╨╡╨╜╨╕╤Å ╨┐╨╛╨┤╤ç╨╡╤Ç╨║╨╕╨▓╨░╨╡╤é ╨╜╨░╨▒╨╗╤Ä╨┤╨░╨╡╨╝╨╛╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡?",
        "explanationHy": "╘▓╓ç╒╕╓Ç╒½╒ª╒┤╒¿ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╒╢╒╕╓é╒┤ ╒º ╒ñ╒½╒┐╒í╓Ç╒»╒Ñ╒¼╒½, ╒╣╒í╓â╒Ñ╒¼╒½ ╒╛╒í╓Ç╓ä╒í╒ú╒«╒½ ╒╛╓Ç╒í:",
        "explanationAz": "Behaviorizm m├╝┼ƒahid╔Ö edil╔Ö bil╔Ön, ├╢l├º├╝l╔Ö bil╔Ön davran─▒┼ƒlara diqq╔Öt yetirir.",
        "questionAz": "Hans─▒ perspektiv m├╝┼ƒahid╔Ö edil╔Ö bil╔Ön davran─▒┼ƒ─▒ vur─ƒulay─▒r?",
        "questionHy": "╒ê╒₧╓Ç ╒┐╒Ñ╒╜╒í╒»╒Ñ╒┐╒╢ ╒º ╒¿╒╢╒ñ╒ú╒«╒╕╓é╒┤ ╒ñ╒½╒┐╒í╓Ç╒»╒Ñ╒¼╒½ ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«╒¿:",
        "explanationRu": "╨æ╨╕╤à╨╡╨▓╨╕╨╛╤Ç╨╕╨╖╨╝ ╤ä╨╛╨║╤â╤ü╨╕╤Ç╤â╨╡╤é╤ü╤Å ╨╜╨░ ╨╜╨░╨▒╨╗╤Ä╨┤╨░╨╡╨╝╨╛╨╝ ╨╕ ╨╕╨╖╨╝╨╡╤Ç╨╕╨╝╨╛╨╝ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╕."
      },
      {
        "id": "q1-4",
        "question": "The psychoanalytic approach was developed by:",
        "questionKa": "ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâóßâÿßâÖßâúßâáßâÿ ßâ¢ßâÿßâôßâÆßâ¥ßâ¢ßâÉ ßâ¿ßâößâÿßâ¢ßâúßâ¿ßâÉßâòßâÉ:",
        "options": [
          "Carl Rogers",
          "Sigmund Freud",
          "Abraham Maslow",
          "Ivan Pavlov"
        ],
        "optionsKa": [
          "ßâÖßâÉßâáßâÜ ßâáßâ¥ßâ»ßâößâáßâíßâ¢ßâÉ",
          "ßâûßâÿßâÆßâ¢ßâúßâ£ßâô ßâñßâáßâ¥ßâÿßâôßâ¢ßâÉ",
          "ßâÉßâæßâáßâÉßâ░ßâÉßâ¢ ßâ¢ßâÉßâíßâÜßâ¥ßâúßâ¢",
          "ßâÿßâòßâÉßâ£ ßâ₧ßâÉßâòßâÜßâ¥ßâòßâ¢ßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Sigmund Freud developed psychoanalysis.",
        "explanationKa": "ßâûßâÿßâÆßâ¢ßâúßâ£ßâô ßâñßâáßâ¥ßâÿßâôßâ¢ßâÉ ßâ¿ßâößâÿßâ¢ßâúßâ¿ßâÉßâòßâÉ ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâûßâÿ.",
        "optionsRu": [
          "╨Ü╨░╤Ç╨╗ ╨á╨╛╨┤╨╢╨╡╤Ç╤ü",
          "╨ù╨╕╨│╨╝╤â╨╜╨┤ ╨ñ╤Ç╨╡╨╣╨┤",
          "╨É╨▓╤Ç╨░╨░╨╝ ╨£╨░╤ü╨╗╨╛╤â",
          "╨ÿ╨▓╨░╨╜ ╨ƒ╨░╨▓╨╗╨╛╨▓"
        ],
        "optionsHy": [
          "╘┐╒í╓Ç╒¼ ╒î╒╕╒╗╒Ñ╓Ç╒╜",
          "╘╢╒½╒ú╒┤╒╕╓é╒╢╒ñ ╒û╓Ç╒Ñ╒╡╒ñ",
          "╘▒╒ó╓Ç╒í╒░╒í╒┤ ╒ä╒í╒╜╒¼╒╕╒╕╓é",
          "╘╗╒╛╒í╒╢ ╒è╒í╒╛╒¼╒╕╒╛"
        ],
        "optionsAz": [
          "Karl Rocers",
          "Ziqmund Freyd",
          "Abraham Maslow",
          "─░van Pavlov"
        ],
        "questionRu": "╨ƒ╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╨┐╨╛╨┤╤à╨╛╨┤ ╨▒╤ï╨╗ ╤Ç╨░╨╖╤Ç╨░╨▒╨╛╤é╨░╨╜:",
        "questionAz": "Psixoanalitik yana┼ƒma a┼ƒa─ƒ─▒dak─▒lar t╔Ör╔Öfind╔Ön haz─▒rlanm─▒┼ƒd─▒r:",
        "questionHy": "╒Ç╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒í╒»╒í╒╢ ╒┤╒╕╒┐╒Ñ╓ü╒╕╓é╒┤╒¿ ╒┤╒╖╒í╒»╒╛╒Ñ╒¼ ╒º.",
        "explanationAz": "Ziqmund Freyd psixoanalizi inki┼ƒaf etdirdi.",
        "explanationRu": "╨ù╨╕╨│╨╝╤â╨╜╨┤ ╨ñ╤Ç╨╡╨╣╨┤ ╤Ç╨░╨╖╤Ç╨░╨▒╨╛╤é╨░╨╗ ╨┐╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╨╖.",
        "explanationHy": "╘╢╒½╒ú╒┤╒╕╓é╒╢╒ñ ╒û╓Ç╒Ñ╒╡╒ñ╒¿ ╒ª╒í╓Ç╒ú╒í╓ü╓Ç╒Ñ╓ü ╒░╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:"
      },
      {
        "id": "q1-5",
        "question": "Which school used introspection as its primary method?",
        "questionKa": "ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâíßâÖßâ¥ßâÜßâÉ ßâÿßâºßâößâ£ßâößâæßâôßâÉ ßâÿßâ£ßâóßâáßâ¥ßâíßâ₧ßâößâÑßâ¬ßâÿßâÉßâí, ßâáßâ¥ßâÆßâ¥ßâáßâ¬ ßâ½ßâÿßâáßâÿßâùßâÉßâô ßâ¢ßâößâùßâ¥ßâôßâí?",
        "options": [
          "Functionalism",
          "Structuralism",
          "Gestalt",
          "Behaviorism"
        ],
        "optionsKa": [
          "ßâñßâúßâ£ßâÑßâ¬ßâÿßâ¥ßâ£ßâÉßâÜßâÿßâûßâ¢ßâÿ",
          "ßâíßâóßâáßâúßâÑßâóßâúßâáßâÉßâÜßâÿßâûßâ¢ßâÿ",
          "ßâÆßâößâ¿ßâóßâÉßâÜßâóßâÿ",
          "ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâÿßâûßâ¢ßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Structuralism used introspection to analyze conscious experience.",
        "explanationKa": "ßâíßâóßâáßâúßâÑßâóßâúßâáßâÉßâÜßâÿßâûßâ¢ßâÿ ßâÿßâºßâößâ£ßâößâæßâôßâÉ ßâÿßâ£ßâóßâáßâ¥ßâíßâ₧ßâößâÑßâ¬ßâÿßâÉßâí ßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâÿ ßâÆßâÉßâ¢ßâ¥ßâ¬ßâôßâÿßâÜßâößâæßâÿßâí ßâÉßâ£ßâÉßâÜßâÿßâûßâÿßâíßâùßâòßâÿßâí.",
        "optionsRu": [
          "╨ñ╤â╨╜╨║╤å╨╕╨╛╨╜╨░╨╗╨╕╨╖╨╝",
          "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨░╨╗╨╕╨╖╨╝",
          "╨│╨╡╤ê╤é╨░╨╗╤î╤é",
          "╨æ╨╕╤à╨╡╨▓╨╕╨╛╤Ç╨╕╨╖╨╝"
        ],
        "optionsHy": [
          "╒û╒╕╓é╒╢╒»╓ü╒½╒╕╒╢╒í╒¼╒½╒ª╒┤",
          "╘┐╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒í╒¼╒½╒ª╒┤",
          "╘│╒Ñ╒╖╒┐╒í╒¼╒┐",
          "╒Ä╒í╓Ç╓ä╒í╒ú╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Funksionalizm",
          "Strukturizm",
          "Ge┼ƒtalt",
          "Davran─▒┼ƒ├º─▒l─▒q"
        ],
        "explanationRu": "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨░╨╗╨╕╨╖╨╝ ╨╕╤ü╨┐╨╛╨╗╤î╨╖╨╛╨▓╨░╨╗ ╤ü╨░╨╝╨╛╨░╨╜╨░╨╗╨╕╨╖ ╨┤╨╗╤Å ╨░╨╜╨░╨╗╨╕╨╖╨░ ╤ü╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╨╛╨│╨╛ ╨╛╨┐╤ï╤é╨░.",
        "questionRu": "╨Ü╨░╨║╨░╤Å ╤ê╨║╨╛╨╗╨░ ╨╕╤ü╨┐╨╛╨╗╤î╨╖╨╛╨▓╨░╨╗╨░ ╤ü╨░╨╝╨╛╨░╨╜╨░╨╗╨╕╨╖ ╨▓ ╨║╨░╤ç╨╡╤ü╤é╨▓╨╡ ╨╛╤ü╨╜╨╛╨▓╨╜╨╛╨│╨╛ ╨╝╨╡╤é╨╛╨┤╨░?",
        "questionHy": "╒ê╒₧╓Ç ╒ñ╒║╓Ç╒╕╓ü╒╢ ╒º ╓à╒ú╒┐╒í╒ú╒╕╓Ç╒«╒Ñ╒¼ ╒╢╒Ñ╓Ç╒ñ╒í╒╖╒╢╒í╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╕╓Ç╒║╒Ñ╒╜ ╒░╒½╒┤╒╢╒í╒»╒í╒╢ ╒┤╒Ñ╒⌐╒╕╒ñ:",
        "explanationHy": "Structuralism-╒╢ ╓à╒ú╒┐╒í╒ú╒╕╓Ç╒«╒Ñ╓ü ╒╢╒Ñ╓Ç╒ñ╒½╒┐╒╕╓é╒┤╒¿ ╒ú╒½╒┐╒í╒»╓ü╒╛╒í╒« ╓â╒╕╓Ç╒▒╒¿ ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:",
        "explanationAz": "Strukturizm ┼ƒ├╝urlu t╔Öcr├╝b╔Öni t╔Öhlil etm╔Ök ├╝├º├╝n introspeksiyadan istifad╔Ö edirdi.",
        "questionAz": "Hans─▒ m╔Ökt╔Öb ╔Ösas metod kimi introspeksiyadan istifad╔Ö edirdi?"
      },
      {
        "id": "q1-6",
        "question": "The humanistic perspective emphasizes:",
        "questionKa": "ßâ░ßâúßâ¢ßâÉßâ£ßâÿßâíßâóßâúßâáßâÿ ßâ¢ßâÿßâ¢ßâÉßâáßâùßâúßâÜßâößâæßâÉ ßâÉßâÑßâ¬ßâößâ£ßâóßâí ßâÉßâÖßâößâùßâößâæßâí:",
        "options": [
          "Unconscious desires",
          "Free will and self-actualization",
          "Stimulus-response",
          "Brain chemistry"
        ],
        "optionsKa": [
          "ßâÉßâáßâÉßâ¬ßâ£ßâ¥ßâæßâÿßâößâá ßâíßâúßâáßâòßâÿßâÜßâößâæßâûßâö",
          "ßâùßâÉßâòßâÿßâíßâúßâñßâÉßâÜ ßâ£ßâößâæßâÉßâíßâÉ ßâôßâÉ ßâùßâòßâÿßâùßâáßâößâÉßâÜßâÿßâûßâÉßâ¬ßâÿßâÉßâûßâö",
          "ßâíßâóßâÿßâ¢ßâúßâÜ-ßâáßâößâÉßâÑßâ¬ßâÿßâÉßâûßâö",
          "ßâóßâòßâÿßâ£ßâÿßâí ßâÑßâÿßâ¢ßâÿßâÉßâûßâö"
        ],
        "correctIndex": 1,
        "explanation": "Humanistic psychology focuses on personal growth and free will.",
        "explanationKa": "ßâ░ßâúßâ¢ßâÉßâ£ßâÿßâíßâóßâúßâáßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâôßâößâæßâÉ ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâúßâÜ ßâûßâáßâôßâÉßâíßâÉ ßâôßâÉ ßâùßâÉßâòßâÿßâíßâúßâñßâÉßâÜ ßâ£ßâößâæßâÉßâûßâö.",
        "optionsRu": [
          "╨æ╨╡╤ü╤ü╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╤ï╨╡ ╨╢╨╡╨╗╨░╨╜╨╕╤Å",
          "╨í╨▓╨╛╨▒╨╛╨┤╨╜╨░╤Å ╨▓╨╛╨╗╤Å ╨╕ ╤ü╨░╨╝╨╛╤Ç╨╡╨░╨╗╨╕╨╖╨░╤å╨╕╤Å",
          "╨í╤é╨╕╨╝╤â╨╗-╤Ç╨╡╨░╨║╤å╨╕╤Å",
          "╨Ñ╨╕╨╝╨╕╤Å ╨╝╨╛╨╖╨│╨░"
        ],
        "optionsHy": [
          "╘▒╒╢╒ú╒½╒┐╒í╒»╒½╓ü ╓ü╒í╒╢╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
          "╘▒╒ª╒í╒┐ ╒»╒í╒┤╓ä ╓ç ╒½╒╢╓ä╒╢╒í╒½╓Ç╒í╒»╒í╒╢╒í╓ü╒╕╓é╒┤",
          "╘╜╒⌐╒í╒╢-╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä",
          "╒ê╓é╒▓╒Ñ╒▓╒½ ╓ä╒½╒┤╒½╒í"
        ],
        "optionsAz": [
          "┼₧├╝ursuz arzular",
          "S╔Örb╔Öst irad╔Ö v╔Ö ├╢z├╝n├╝ h╔Öyata ke├ºirm╔Ö",
          "Stimul-cavab",
          "Beyin kimyas─▒"
        ],
        "explanationHy": "╒ä╒í╓Ç╒ñ╒í╒╜╒½╓Ç╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╒╢╒╕╓é╒┤ ╒º ╒í╒╢╒▒╒╢╒í╒»╒í╒╢ ╒í╒│╒½ ╓ç ╒í╒ª╒í╒┐ ╒»╒í╒┤╓ä╒½ ╒╛╓Ç╒í:",
        "questionHy": "╒ä╒í╓Ç╒ñ╒í╒╜╒½╓Ç╒í╒»╒í╒╢ ╒░╒Ñ╒╝╒í╒╢╒»╒í╓Ç╒¿ ╒╖╒Ñ╒╖╒┐╒╕╓é╒┤ ╒º.",
        "explanationRu": "╨ô╤â╨╝╨░╨╜╨╕╤ü╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╤ä╨╛╨║╤â╤ü╨╕╤Ç╤â╨╡╤é╤ü╤Å ╨╜╨░ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╜╨╛╨╝ ╤Ç╨╛╤ü╤é╨╡ ╨╕ ╤ü╨▓╨╛╨▒╨╛╨┤╨╡ ╨▓╨╛╨╗╨╕.",
        "questionRu": "╨ô╤â╨╝╨░╨╜╨╕╤ü╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╨┐╨╛╨┤╤à╨╛╨┤ ╨┐╨╛╨┤╤ç╨╡╤Ç╨║╨╕╨▓╨░╨╡╤é:",
        "questionAz": "Humanist perspektiv vur─ƒulay─▒r:",
        "explanationAz": "Humanist psixologiya ┼ƒ╔Öxsi inki┼ƒafa v╔Ö azad irad╔Öy╔Ö diqq╔Öt yetirir."
      },
      {
        "id": "q1-7",
        "question": "William James is associated with:",
        "questionKa": "ßâúßâÿßâÜßâÿßâÉßâ¢ ßâ»ßâößâÿßâ¢ßâíßâÿ ßâÉßâíßâ¥ßâ¬ßâÿßâáßâôßâößâæßâÉ:",
        "options": [
          "Structuralism",
          "Functionalism",
          "Behaviorism",
          "Gestalt"
        ],
        "optionsKa": [
          "ßâíßâóßâáßâúßâÑßâóßâúßâáßâÉßâÜßâÿßâûßâ¢ßâùßâÉßâ£",
          "ßâñßâúßâ£ßâÑßâ¬ßâÿßâ¥ßâ£ßâÉßâÜßâÿßâûßâ¢ßâùßâÉßâ£",
          "ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâÿßâûßâ¢ßâùßâÉßâ£",
          "ßâÆßâößâ¿ßâóßâÉßâÜßâóßâùßâÉßâ£"
        ],
        "correctIndex": 1,
        "explanation": "William James founded functionalism.",
        "explanationKa": "ßâúßâÿßâÜßâÿßâÉßâ¢ ßâ»ßâößâÿßâ¢ßâíßâ¢ßâÉ ßâ¿ßâößâ¢ßâ¥ßâÿßâªßâ¥ ßâñßâúßâ£ßâÑßâ¬ßâÿßâ¥ßâ£ßâÉßâÜßâÿßâûßâ¢ßâÿ.",
        "optionsRu": [
          "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨░╨╗╨╕╨╖╨╝",
          "╨ñ╤â╨╜╨║╤å╨╕╨╛╨╜╨░╨╗╨╕╨╖╨╝",
          "╨æ╨╕╤à╨╡╨▓╨╕╨╛╤Ç╨╕╨╖╨╝",
          "╨│╨╡╤ê╤é╨░╨╗╤î╤é"
        ],
        "optionsHy": [
          "╘┐╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒í╒¼╒½╒ª╒┤",
          "╒û╒╕╓é╒╢╒»╓ü╒½╒╕╒╢╒í╒¼╒½╒ª╒┤",
          "╒Ä╒í╓Ç╓ä╒í╒ú╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘│╒Ñ╒╖╒┐╒í╒¼╒┐"
        ],
        "optionsAz": [
          "Strukturizm",
          "Funksionalizm",
          "Davran─▒┼ƒ├º─▒l─▒q",
          "Ge┼ƒtalt"
        ],
        "questionHy": "╒ê╓é╒½╒¼╒╡╒í╒┤ ╒ï╒Ñ╒╡╒┤╒╜╒¿ ╒»╒í╒║╒╛╒í╒« ╒º.",
        "explanationHy": "╒ê╓é╒½╒¼╒╡╒í╒┤ ╒ï╒Ñ╒╡╒┤╒╜╒¿ ╒░╒½╒┤╒╢╒Ñ╓ü ╓å╒╕╓é╒╢╒»╓ü╒½╒╕╒╢╒í╒¼╒½╒ª╒┤╒¿:",
        "explanationRu": "╨ú╨╕╨╗╤î╤Å╨╝ ╨ö╨╢╨╡╨╣╨╝╤ü ╨╛╤ü╨╜╨╛╨▓╨░╨╗ ╤ä╤â╨╜╨║╤å╨╕╨╛╨╜╨░╨╗╨╕╨╖╨╝.",
        "questionRu": "╨ú╨╕╨╗╤î╤Å╨╝ ╨ö╨╢╨╡╨╣╨╝╤ü ╤ü╨▓╤Å╨╖╨░╨╜ ╤ü:",
        "questionAz": "William James il╔Ö ╔Ölaq╔Öl╔Öndirilir:",
        "explanationAz": "Uilyam Ceyms funksionalizmin ╔Ösas─▒n─▒ qoydu."
      },
      {
        "id": "q1-8",
        "question": "The cognitive perspective focuses on:",
        "questionKa": "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ ßâ¢ßâÿßâ¢ßâÉßâáßâùßâúßâÜßâößâæßâÉ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâôßâößâæßâÉ:",
        "options": [
          "Brain structures",
          "Mental processes like thinking and memory",
          "Social influences",
          "Childhood experiences"
        ],
        "optionsKa": [
          "ßâóßâòßâÿßâ£ßâÿßâí ßâíßâóßâáßâúßâÑßâóßâúßâáßâößâæßâûßâö",
          "ßâñßâíßâÿßâÑßâÿßâÖßâúßâá ßâ₧ßâáßâ¥ßâ¬ßâößâíßâößâæßâûßâö, ßâáßâ¥ßâÆßâ¥ßâáßâÿßâ¬ßâÉßâÉ ßâÉßâûßâáßâ¥ßâòßâ£ßâößâæßâÉ ßâôßâÉ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÉ",
          "ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâá ßâÆßâÉßâòßâÜßâößâ£ßâößâæßâûßâö",
          "ßâæßâÉßâòßâ¿ßâòßâ¥ßâæßâÿßâí ßâÆßâÉßâ¢ßâ¥ßâ¬ßâôßâÿßâÜßâößâæßâößâæßâûßâö"
        ],
        "correctIndex": 1,
        "explanation": "Cognitive psychology studies internal mental processes.",
        "explanationKa": "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâ¿ßâößâÿßâíßâ¼ßâÉßâòßâÜßâÿßâí ßâñßâíßâÿßâÑßâÿßâÖßâúßâá ßâ₧ßâáßâ¥ßâ¬ßâößâíßâößâæßâí.",
        "optionsRu": [
          "╨£╨╛╨╖╨│╨╛╨▓╤ï╨╡ ╤ü╤é╤Ç╤â╨║╤é╤â╤Ç╤ï",
          "╨ƒ╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╤ï, ╤é╨░╨║╨╕╨╡ ╨║╨░╨║ ╨╝╤ï╤ê╨╗╨╡╨╜╨╕╨╡ ╨╕ ╨┐╨░╨╝╤Å╤é╤î",
          "╨í╨╛╤å╨╕╨░╨╗╤î╨╜╤ï╨╡ ╨▓╨╗╨╕╤Å╨╜╨╕╤Å",
          "╨ö╨╡╤é╤ü╨║╨╕╨╡ ╨▓╨┐╨╡╤ç╨░╤é╨╗╨╡╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╒ê╓é╒▓╒Ñ╒▓╒½ ╒»╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒╢╒Ñ╓Ç╒¿",
          "╒Ç╒╕╒ú╒Ñ╒»╒í╒╢ ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒╢╒Ñ╓Ç, ╒½╒╢╒╣╒║╒½╒╜╒½╓ä ╒Ñ╒╢ ╒┤╒┐╒í╒«╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╓ç ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╒ì╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿",
          "╒ä╒í╒╢╒»╒╕╓é╒⌐╒╡╒í╒╢ ╓â╒╕╓Ç╒▒╒í╒╝╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "Beyin strukturlar─▒",
          "D├╝┼ƒ├╝nc╔Ö v╔Ö yadda┼ƒ kimi zehni prosesl╔Ör",
          "Sosial t╔Ösirl╔Ör",
          "U┼ƒaql─▒q t╔Öcr├╝b╔Öl╔Öri"
        ],
        "questionRu": "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╨╣ ╨┐╨╛╨┤╤à╨╛╨┤ ╤ä╨╛╨║╤â╤ü╨╕╤Ç╤â╨╡╤é╤ü╤Å ╨╜╨░:",
        "questionHy": "╒â╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╒┐╒Ñ╒╜╒í╒»╒Ñ╒┐╒¿ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╒╢╒╕╓é╒┤ ╒º.",
        "explanationHy": "╘┐╒╕╒ú╒╢╒½╒┐╒½╒╛ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒┤ ╒º ╒╢╒Ñ╓Ç╓ä╒½╒╢ ╒░╒╕╒ú╒Ñ╒»╒í╒╢ ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒╢╒Ñ╓Ç╒¿:",
        "questionAz": "Koqnitiv perspektiv a┼ƒa─ƒ─▒dak─▒lara diqq╔Öt yetirir:",
        "explanationAz": "Koqnitiv psixologiya daxili psixi prosesl╔Öri ├╢yr╔Önir.",
        "explanationRu": "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╨╕╨╖╤â╤ç╨░╨╡╤é ╨▓╨╜╤â╤é╤Ç╨╡╨╜╨╜╨╕╨╡ ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╤ï."
      },
      {
        "id": "q1-9",
        "question": "The biopsychosocial model includes:",
        "questionKa": "ßâæßâÿßâ¥ßâñßâíßâÿßâÑßâ¥ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâ¢ßâ¥ßâôßâößâÜßâÿ ßâ¢ßâ¥ßâÿßâ¬ßâÉßâòßâí:",
        "options": [
          "Biology only",
          "Psychology only",
          "Social factors only",
          "Biological, psychological, and social factors"
        ],
        "optionsKa": [
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâæßâÿßâ¥ßâÜßâ¥ßâÆßâÿßâÉßâí",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉßâí",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâá ßâñßâÉßâÑßâóßâ¥ßâáßâößâæßâí",
          "ßâæßâÿßâ¥ßâÜßâ¥ßâÆßâÿßâúßâá, ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâúßâá ßâôßâÉ ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâá ßâñßâÉßâÑßâóßâ¥ßâáßâößâæßâí"
        ],
        "correctIndex": 3,
        "explanation": "It integrates all three factors.",
        "explanationKa": "ßâÿßâí ßâÉßâößâáßâùßâÿßâÉßâ£ßâößâæßâí ßâíßâÉßâ¢ßâÿßâòßâö ßâñßâÉßâÑßâóßâ¥ßâáßâí.",
        "optionsRu": [
          "╨ó╨╛╨╗╤î╨║╨╛ ╨▒╨╕╨╛╨╗╨╛╨│╨╕╤Å",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å",
          "╨ó╨╛╨╗╤î╨║╨╛ ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╤ï╨╡ ╤ä╨░╨║╤é╨╛╤Ç╤ï",
          "╨æ╨╕╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡, ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨╕ ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╤ï╨╡ ╤ä╨░╨║╤é╨╛╤Ç╤ï"
        ],
        "optionsHy": [
          "╒ä╒½╒í╒╡╒╢ ╒»╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╒½╒í╒╡╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╒½╒í╒╡╒╢ ╒╜╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒ú╒╕╓Ç╒«╒╕╒╢╒╢╒Ñ╓Ç",
          "╘┐╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒í╒»╒í╒╢, ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╓ç ╒╜╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒ú╒╕╓Ç╒«╒╕╒╢╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "Yaln─▒z biologiya",
          "Yaln─▒z psixologiya",
          "Yaln─▒z sosial amill╔Ör",
          "Bioloji, psixoloji v╔Ö sosial amill╔Ör"
        ],
        "questionRu": "╨æ╨╕╨╛╨┐╤ü╨╕╤à╨╛╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╨░╤Å ╨╝╨╛╨┤╨╡╨╗╤î ╨▓╨║╨╗╤Ä╤ç╨░╨╡╤é ╨▓ ╤ü╨╡╨▒╤Å:",
        "questionHy": "╘┐╒Ñ╒╢╒╜╒í╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╒┤╒╕╒ñ╒Ñ╒¼╒¿ ╒╢╒Ñ╓Ç╒í╒╝╒╕╓é╒┤ ╒º.",
        "questionAz": "Biopsixososial model╔Ö a┼ƒa─ƒ─▒dak─▒lar daxildir:",
        "explanationHy": "╘▒╒╡╒╢ ╒┤╒½╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒º ╒ó╒╕╒¼╒╕╓Ç ╒Ñ╓Ç╒Ñ╓ä ╒ú╒╕╓Ç╒«╒╕╒╢╒╢╒Ñ╓Ç╒¿:",
        "explanationRu": "╨₧╨╜ ╨╛╨▒╤è╨╡╨┤╨╕╨╜╤Å╨╡╤é ╨▓╤ü╨╡ ╤é╤Ç╨╕ ╤ä╨░╨║╤é╨╛╤Ç╨░.",
        "explanationAz": "O, h╔Ör ├╝├º amili birl╔Ö┼ƒdirir."
      },
      {
        "id": "q1-10",
        "question": "Which is NOT a goal of psychology?",
        "questionKa": "ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâÉßâá ßâÉßâáßâÿßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÿßâí ßâ¢ßâÿßâûßâÉßâ£ßâÿ?",
        "options": [
          "Describe behavior",
          "Explain behavior",
          "Control the economy",
          "Predict behavior"
        ],
        "optionsKa": [
          "ßâÑßâ¬ßâößâòßâÿßâí ßâÉßâªßâ¼ßâößâáßâÉ",
          "ßâÑßâ¬ßâößâòßâÿßâí ßâÉßâ«ßâíßâ£ßâÉ",
          "ßâößâÖßâ¥ßâ£ßâ¥ßâ¢ßâÿßâÖßâÿßâí ßâ¢ßâÉßâáßâùßâòßâÉ",
          "ßâÑßâ¬ßâößâòßâÿßâí ßâ₧ßâáßâ¥ßâÆßâ£ßâ¥ßâûßâÿßâáßâößâæßâÉ"
        ],
        "correctIndex": 2,
        "explanation": "The four goals are to describe, explain, predict, and influence behavior.",
        "explanationKa": "ßâ¥ßâùßâ«ßâÿ ßâ¢ßâÿßâûßâÉßâ£ßâÿßâÉ: ßâÉßâªßâ¼ßâößâáßâÉ, ßâÉßâ«ßâíßâ£ßâÉ, ßâ₧ßâáßâ¥ßâÆßâ£ßâ¥ßâûßâÿßâáßâößâæßâÉ ßâôßâÉ ßâÑßâ¬ßâößâòßâÉßâûßâö ßâûßâößâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâÉ.",
        "optionsRu": [
          "╨₧╨┐╨╕╤ê╨╕╤é╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡",
          "╨₧╨▒╤è╤Å╤ü╨╜╨╕╤é╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡",
          "╨Ü╨╛╨╜╤é╤Ç╨╛╨╗╨╕╤Ç╤â╨╣╤é╨╡ ╤ì╨║╨╛╨╜╨╛╨╝╨╕╨║╤â",
          "╨ƒ╤Ç╨╛╨│╨╜╨╛╨╖╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╒å╒»╒í╓Ç╒í╒ú╓Ç╒Ñ╓ä ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«╒¿",
          "╘▓╒í╓ü╒í╒┐╓Ç╒Ñ╓ä ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«╒¿",
          "╒Ä╒Ñ╓Ç╒í╒░╒╜╒»╒Ñ╒¼ ╒┐╒╢╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╘┐╒í╒╢╒¡╒í╒┐╒Ñ╒╜╒Ñ╒¼ ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«╒¿"
        ],
        "optionsAz": [
          "Davran─▒┼ƒ─▒ t╔Ösvir edin",
          "Davran─▒┼ƒ─▒ izah edin",
          "─░qtisadiyyata n╔Özar╔Öt edin",
          "Davran─▒┼ƒ─▒ proqnozla┼ƒd─▒rmaq"
        ],
        "explanationHy": "╒ë╒╕╓Ç╒╜ ╒╢╒║╒í╒┐╒í╒»╒╢╒Ñ╓Ç╒╢ ╒Ñ╒╢╒¥ ╒╢╒»╒í╓Ç╒í╒ú╓Ç╒Ñ╒¼, ╒ó╒í╓ü╒í╒┐╓Ç╒Ñ╒¼, ╒»╒í╒╢╒¡╒í╒┐╒Ñ╒╜╒Ñ╒¼ ╓ç ╒í╒ª╒ñ╒Ñ╒¼ ╒╛╒í╓Ç╓ä╒í╒ú╒«╒½ ╒╛╓Ç╒í:",
        "explanationRu": "╨º╨╡╤é╤ï╤Ç╨╡ ╤å╨╡╨╗╨╕ ΓÇö ╨╛╨┐╨╕╤ü╨░╤é╤î, ╨╛╨▒╤è╤Å╤ü╨╜╨╕╤é╤î, ╨┐╤Ç╨╡╨┤╤ü╨║╨░╨╖╨░╤é╤î ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨╕ ╨┐╨╛╨▓╨╗╨╕╤Å╤é╤î ╨╜╨░ ╨╜╨╡╨│╨╛.",
        "questionHy": "╒ê╒₧╓Ç╒¿ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╢╒║╒í╒┐╒í╒»╒¿ ╒ë╘╖:",
        "questionRu": "╨º╤é╨╛ ╨¥╨ò ╤Å╨▓╨╗╤Å╨╡╤é╤ü╤Å ╤å╨╡╨╗╤î╤Ä ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕?",
        "explanationAz": "D├╢rd m╔Öqs╔Öd davran─▒┼ƒ─▒ t╔Ösvir etm╔Ök, izah etm╔Ök, proqnozla┼ƒd─▒rmaq v╔Ö t╔Ösir etm╔Ökdir.",
        "questionAz": "Hans─▒ psixologiyan─▒n m╔Öqs╔Ödi DEY─░L?"
      }
    ],
    "titleHy": "╘╗╒₧╒╢╒╣ ╒º ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿: - ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í╒╢",
    "titleRu": "╨º╤é╨╛ ╤é╨░╨║╨╛╨╡ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å? - ╨Ü╨╛╨╜╤é╤Ç╨╛╨╗╤î╨╜╤ï╨╣ ╨╛╨┐╤Ç╨╛╤ü",
    "titleAz": "Psixologiya n╔Ödir? - Viktorina"
  },
  {
    "id": "ch2-quiz",
    "chapterId": 2,
    "title": "Research Methods ΓÇö Quiz",
    "titleKa": "ßâÖßâòßâÜßâößâòßâÿßâí ßâ¢ßâößâùßâ¥ßâôßâößâæßâÿ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q2-1",
        "question": "The variable manipulated by the researcher is the:",
        "questionKa": "ßâ¢ßâÖßâòßâÜßâößâòßâÉßâáßâÿßâí ßâ¢ßâÿßâößâá ßâ¢ßâÉßâ£ßâÿßâ₧ßâúßâÜßâÿßâáßâößâæßâÉßâôßâÿ ßâ¬ßâòßâÜßâÉßâôßâÿ ßâÉßâáßâÿßâí:",
        "options": [
          "Dependent variable",
          "Independent variable",
          "Control variable",
          "Confounding variable"
        ],
        "optionsKa": [
          "ßâôßâÉßâ¢ßâ¥ßâÖßâÿßâôßâößâæßâúßâÜßâÿ ßâ¬ßâòßâÜßâÉßâôßâÿ",
          "ßâôßâÉßâ¢ßâ¥ßâúßâÖßâÿßâôßâößâæßâößâÜßâÿ ßâ¬ßâòßâÜßâÉßâôßâÿ",
          "ßâíßâÉßâÖßâ¥ßâ£ßâóßâáßâ¥ßâÜßâ¥ ßâ¬ßâòßâÜßâÉßâôßâÿ",
          "ßâ¿ßâößâáßâößâúßâÜßâÿ ßâ¬ßâòßâÜßâÉßâôßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "The independent variable is what the researcher manipulates.",
        "explanationKa": "ßâôßâÉßâ¢ßâ¥ßâúßâÖßâÿßâôßâößâæßâößâÜßâÿ ßâ¬ßâòßâÜßâÉßâôßâÿ ßâÉßâáßâÿßâí ßâÿßâí, ßâáßâÉßâíßâÉßâ¬ ßâ¢ßâÖßâòßâÜßâößâòßâÉßâáßâÿ ßâ¢ßâÉßâ£ßâÿßâ₧ßâúßâÜßâÿßâáßâößâæßâí.",
        "optionsRu": [
          "╨ù╨░╨▓╨╕╤ü╨╕╨╝╨░╤Å ╨┐╨╡╤Ç╨╡╨╝╨╡╨╜╨╜╨░╤Å",
          "╨¥╨╡╨╖╨░╨▓╨╕╤ü╨╕╨╝╨░╤Å ╨┐╨╡╤Ç╨╡╨╝╨╡╨╜╨╜╨░╤Å",
          "╨ú╨┐╤Ç╨░╨▓╨╗╤Å╤Ä╤ë╨░╤Å ╨┐╨╡╤Ç╨╡╨╝╨╡╨╜╨╜╨░╤Å",
          "╨í╨╝╨╡╤ê╨╕╨▓╨░╤Ä╤ë╨░╤Å ╨┐╨╡╤Ç╨╡╨╝╨╡╨╜╨╜╨░╤Å"
        ],
        "optionsHy": [
          "╘┐╒í╒¡╒╛╒í╒« ╓â╒╕╓â╒╕╒¡╒í╒»╒í╒╢",
          "╘▒╒╢╒»╒í╒¡ ╓â╒╕╓â╒╕╒¡╒í╒»╒í╒╢",
          "╒Ä╒Ñ╓Ç╒í╒░╒╜╒»╒½╒╣ ╓â╒╕╓â╒╕╒¡╒í╒»╒í╒╢",
          "╒ç╓â╒╕╒⌐╒Ñ╓ü╒╢╒╕╒▓ ╓â╒╕╓â╒╕╒¡╒í╒»╒í╒╢"
        ],
        "optionsAz": [
          "As─▒l─▒ d╔Öyi┼ƒ╔Ön",
          "M├╝st╔Öqil d╔Öyi┼ƒ╔Ön",
          "N╔Özar╔Öt d╔Öyi┼ƒ╔Öni",
          "Qar─▒┼ƒ─▒q d╔Öyi┼ƒ╔Ön"
        ],
        "questionHy": "╒Ç╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╒▓╒½ ╒»╒╕╒▓╒┤╒½╓ü ╒╖╒í╒░╒í╓Ç╒»╒╛╒╕╒▓ ╓â╒╕╓â╒╕╒¡╒í╒»╒í╒╢╒¿ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "explanationHy": "╘▒╒╢╒»╒í╒¡ ╓â╒╕╓â╒╕╒¡╒í╒»╒í╒╢╒╢ ╒í╒╡╒╢ ╒º, ╒½╒╢╒╣ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╒▓╒¿ ╒╖╒í╒░╒í╓Ç╒»╒╕╓é╒┤ ╒º:",
        "explanationRu": "╨¥╨╡╨╖╨░╨▓╨╕╤ü╨╕╨╝╨░╤Å ╨┐╨╡╤Ç╨╡╨╝╨╡╨╜╨╜╨░╤Å ΓÇô ╤ì╤é╨╛ ╤é╨╛, ╤ç╨╡╨╝ ╨╝╨░╨╜╨╕╨┐╤â╨╗╨╕╤Ç╤â╨╡╤é ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╤î.",
        "questionRu": "╨ƒ╨╡╤Ç╨╡╨╝╨╡╨╜╨╜╨╛╨╣, ╨║╨╛╤é╨╛╤Ç╨╛╨╣ ╨╝╨░╨╜╨╕╨┐╤â╨╗╨╕╤Ç╤â╨╡╤é ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╤î, ╤Å╨▓╨╗╤Å╨╡╤é╤ü╤Å:",
        "explanationAz": "M├╝st╔Öqil d╔Öyi┼ƒ╔Ön t╔Ödqiqat├º─▒n─▒n manipulyasiya etdiyi ┼ƒeydir.",
        "questionAz": "T╔Ödqiqat├º─▒ t╔Ör╔Öfind╔Ön manipulyasiya edil╔Ön d╔Öyi┼ƒ╔Ön a┼ƒa─ƒ─▒dak─▒lard─▒r:"
      },
      {
        "id": "q2-2",
        "question": "A positive correlation means:",
        "questionKa": "ßâôßâÉßâôßâößâæßâÿßâùßâÿ ßâÖßâ¥ßâáßâößâÜßâÉßâ¬ßâÿßâÉ ßâ£ßâÿßâ¿ßâ£ßâÉßâòßâí:",
        "options": [
          "One causes the other",
          "As one increases the other decreases",
          "Both increase together",
          "No relationship"
        ],
        "optionsKa": [
          "ßâößâáßâùßâÿ ßâÿßâ¼ßâòßâößâòßâí ßâ¢ßâößâ¥ßâáßâößâí",
          "ßâößâáßâùßâÿßâí ßâûßâáßâôßâÿßâíßâÉßâí ßâ¢ßâößâ¥ßâáßâö ßâ¢ßâ¬ßâÿßâáßâôßâößâæßâÉ",
          "ßâ¥ßâáßâÿßâòßâö ßâößâáßâùßâÉßâô ßâÿßâûßâáßâôßâößâæßâÉ",
          "ßâÖßâÉßâòßâ¿ßâÿßâáßâÿ ßâÉßâá ßâÉßâáßâÿßâí"
        ],
        "correctIndex": 2,
        "explanation": "Both variables move in the same direction.",
        "explanationKa": "ßâ¥ßâáßâÿßâòßâö ßâ¬ßâòßâÜßâÉßâôßâÿ ßâößâáßâùßâÿ ßâ¢ßâÿßâ¢ßâÉßâáßâùßâúßâÜßâößâæßâÿßâù ßâ¢ßâ¥ßâ½ßâáßâÉßâ¥ßâæßâí.",
        "optionsRu": [
          "╨₧╨┤╨╜╨╛ ╨▓╤ï╨╖╤ï╨▓╨░╨╡╤é ╨┤╤Ç╤â╨│╨╛╨╡",
          "╨ƒ╨╛ ╨╝╨╡╤Ç╨╡ ╤â╨▓╨╡╨╗╨╕╤ç╨╡╨╜╨╕╤Å ╨╛╨┤╨╜╨╛╨│╨╛ ╨┤╤Ç╤â╨│╨╛╨╡ ╤â╨╝╨╡╨╜╤î╤ê╨░╨╡╤é╤ü╤Å",
          "╨₧╨▒╨░ ╤â╨▓╨╡╨╗╨╕╤ç╨╕╨▓╨░╤Ä╤é╤ü╤Å ╨▓╨╝╨╡╤ü╤é╨╡",
          "╨¥╨╡╤é ╨╛╤é╨╜╨╛╤ê╨╡╨╜╨╕╨╣"
        ],
        "optionsHy": [
          "╒ä╒Ñ╒»╒╢ ╒í╒╝╒í╒╗╒í╓ü╒╢╒╕╓é╒┤ ╒º ╒┤╒╡╒╕╓é╒╜╒¿",
          "╒ö╒í╒╢╒½ ╒╕╓Ç ╒┤╒Ñ╒»╒¿ ╒┤╒Ñ╒«╒í╒╢╒╕╓é╒┤ ╒º, ╒┤╒╡╒╕╓é╒╜╒¿ ╒╢╒╛╒í╒ª╒╕╓é╒┤ ╒º",
          "╘╡╓Ç╒»╒╕╓é╒╜╒╢ ╒º╒¼ ╒┤╒½╒í╒╜╒½╒╢ ╒í╒╛╒Ñ╒¼╒í╒╢╒╕╓é╒┤ ╒Ñ╒╢",
          "╒ê╒╣ ╒┤╒½ ╒░╒í╓Ç╒í╒ó╒Ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Biri dig╔Örin╔Ö s╔Öb╔Öb olur",
          "Biri artd─▒qca dig╔Öri azal─▒r",
          "H╔Ör ikisi birlikd╔Ö art─▒r",
          "╞Ålaq╔Ö yoxdur"
        ],
        "questionRu": "╨ƒ╨╛╨╗╨╛╨╢╨╕╤é╨╡╨╗╤î╨╜╨░╤Å ╨║╨╛╤Ç╤Ç╨╡╨╗╤Å╤å╨╕╤Å ╨╛╨╖╨╜╨░╤ç╨░╨╡╤é:",
        "explanationRu": "╨₧╨▒╨╡ ╨┐╨╡╤Ç╨╡╨╝╨╡╨╜╨╜╤ï╨╡ ╨┤╨▓╨╕╨╢╤â╤é╤ü╤Å ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╜╨░╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╨╕.",
        "explanationHy": "╘╡╓Ç╒»╒╕╓é ╓â╒╕╓â╒╕╒¡╒í╒»╒í╒╢╒╢╒Ñ╓Ç╒╢ ╒º╒¼ ╒╖╒í╓Ç╒¬╒╛╒╕╓é╒┤ ╒Ñ╒╢ ╒╢╒╕╓é╒╡╒╢ ╒╕╓é╒▓╒▓╒╕╓é╒⌐╒╡╒í╒┤╒ó╓ë",
        "questionHy": "╘┤╓Ç╒í╒»╒í╒╢ ╒░╒í╓Ç╒í╒ó╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒º.",
        "explanationAz": "H╔Ör iki d╔Öyi┼ƒ╔Ön eyni istiqam╔Ötd╔Ö h╔Ör╔Ök╔Öt edir.",
        "questionAz": "M├╝sb╔Öt korrelyasiya o dem╔Ökdir:"
      },
      {
        "id": "q2-3",
        "question": "The placebo effect demonstrates:",
        "questionKa": "ßâ₧ßâÜßâÉßâ¬ßâößâæßâ¥ßâí ßâößâñßâößâÑßâóßâÿ ßâÉßâ⌐ßâòßâößâ£ßâößâæßâí:",
        "options": [
          "Power of belief on outcomes",
          "Experiments fail",
          "Drugs never work",
          "Correlation equals causation"
        ],
        "optionsKa": [
          "ßâáßâ¼ßâ¢ßâößâ£ßâÿßâí ßâ½ßâÉßâÜßâÉßâí ßâ¿ßâößâôßâößâÆßâößâæßâûßâö",
          "ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâößâæßâÿ ßâòßâößâá ßâ«ßâößâáßâ«ßâôßâößâæßâÉ",
          "ßâ¼ßâÉßâ¢ßâÜßâößâæßâÿ ßâÉßâáßâÉßâíßâ¥ßâôßâößâí ßâ¢ßâúßâ¿ßâÉßâ¥ßâæßâí",
          "ßâÖßâ¥ßâáßâößâÜßâÉßâ¬ßâÿßâÉ ßâóßâ¥ßâÜßâÿßâÉ ßâ¢ßâÿßâûßâößâûßâ¥ßâæßâáßâÿßâ¥ßâæßâÿßâí"
        ],
        "correctIndex": 0,
        "explanation": "Improvement from belief in treatment.",
        "explanationKa": "ßâáßâ¥ßâ¬ßâÉ ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿßâí ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâößâæßâÿ ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâúßâÜßâÿ ßâ¢ßâÉßâ£ßâÿßâ₧ßâúßâÜßâÉßâ¬ßâÿßâÿßâí ßâ⌐ßâÉßâáßâößâòßâÿßâí ßâÆßâÉßâáßâÉßâ¿ßâö ßâÿßâ¬ßâòßâÜßâÿßâÉßâ£ ßâÑßâ¬ßâößâòßâÉßâí.",
        "optionsRu": [
          "╨í╨╕╨╗╨░ ╨▓╨╡╤Ç╤ï ╨▓ ╤Ç╨╡╨╖╤â╨╗╤î╤é╨░╤é╤ï",
          "╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╤ï ╤é╨╡╤Ç╨┐╤Å╤é ╨╜╨╡╤â╨┤╨░╤ç╤â",
          "╨¥╨░╤Ç╨║╨╛╤é╨╕╨║╨╕ ╨╜╨╕╨║╨╛╨│╨┤╨░ ╨╜╨╡ ╤Ç╨░╨▒╨╛╤é╨░╤Ä╤é",
          "╨Ü╨╛╤Ç╤Ç╨╡╨╗╤Å╤å╨╕╤Å ╤Ç╨░╨▓╨╜╨░ ╨┐╤Ç╨╕╤ç╨╕╨╜╨╜╨╛-╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╡╨╜╨╜╨╛╨╣ ╤ü╨▓╤Å╨╖╨╕"
        ],
        "optionsHy": [
          "╘▒╓Ç╒ñ╒╡╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒╛╓Ç╒í ╒░╒í╒╛╒í╒┐╓ä╒½ ╒╕╓é╒¬╒¿",
          "╒ô╒╕╓Ç╒▒╒Ñ╓Ç╒¿ ╒▒╒í╒¡╒╕╒▓╒╛╒╕╓é╒┤ ╒Ñ╒╢",
          "╘╣╒┤╓Ç╒í╒╢╒╡╒╕╓é╒⌐╒Ñ╓Ç╒¿ ╒Ñ╓Ç╒ó╒Ñ╓ä ╒╣╒Ñ╒╢ ╒ú╒╕╓Ç╒«╒╕╓é╒┤",
          "╒Ç╒í╓Ç╒í╒ó╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒░╒í╒╛╒í╒╜╒í╓Ç ╒º ╒║╒í╒┐╒│╒í╒╝╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢"
        ],
        "optionsAz": [
          "N╔Ötic╔Öl╔Ör╔Ö inam g├╝c├╝",
          "T╔Öcr├╝b╔Öl╔Ör u─ƒursuz olur",
          "D╔Örmanlar he├º vaxt i┼ƒl╔Ömir",
          "Korrelyasiya s╔Öb╔Öbiyy╔Öt╔Ö b╔Örab╔Ördir"
        ],
        "explanationRu": "╨ú╨╗╤â╤ç╤ê╨╡╨╜╨╕╨╡ ╨╛╤é ╨▓╨╡╤Ç╤ï ╨▓ ╨╗╨╡╤ç╨╡╨╜╨╕╨╡.",
        "questionRu": "╨¡╤ä╤ä╨╡╨║╤é ╨┐╨╗╨░╤å╨╡╨▒╨╛ ╨┤╨╡╨╝╨╛╨╜╤ü╤é╤Ç╨╕╤Ç╤â╨╡╤é:",
        "questionHy": "╒è╒¼╒í╓ü╒Ñ╒ó╒╕╒╡╒½ ╒º╓å╒Ñ╒»╒┐╒¿ ╓ü╒╕╓é╒╡╓ü ╒º ╒┐╒í╒¼╒½╒╜.",
        "explanationHy": "╘▓╒╕╓é╒¬╒┤╒í╒╢ ╒╢╒»╒í╒┐╒┤╒í╒┤╒ó ╒░╒í╒╛╒í╒┐╓ä╒½ ╒ó╒í╓Ç╒Ñ╒¼╒í╒╛╒╕╓é╒┤:",
        "questionAz": "Plasebo effekti g├╢st╔Örir:",
        "explanationAz": "M├╝alic╔Öy╔Ö inamdan yax┼ƒ─▒la┼ƒma."
      },
      {
        "id": "q2-4",
        "question": "Which method establishes cause and effect?",
        "questionKa": "ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâ¢ßâößâùßâ¥ßâôßâÿ ßâÉßâôßâÆßâößâ£ßâí ßâ¢ßâÿßâûßâößâû-ßâ¿ßâößâôßâößâÆßâ¥ßâæßâáßâÿßâò ßâÖßâÉßâòßâ¿ßâÿßâáßâí?",
        "options": [
          "Survey",
          "Case study",
          "Experiment",
          "Observation"
        ],
        "optionsKa": [
          "ßâÆßâÉßâ¢ßâ¥ßâÖßâÿßâùßâ«ßâòßâÉ",
          "ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâí ßâ¿ßâößâíßâ¼ßâÉßâòßâÜßâÉ",
          "ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ",
          "ßâôßâÉßâÖßâòßâÿßâáßâòßâößâæßâÉ"
        ],
        "correctIndex": 2,
        "explanation": "Only experiments can establish cause-and-effect.",
        "explanationKa": "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâí ßâ¿ßâößâúßâ½ßâÜßâÿßâÉ ßâ¢ßâÿßâûßâößâû-ßâ¿ßâößâôßâößâÆßâ¥ßâæßâáßâÿßâ¥ßâæßâÿßâí ßâôßâÉßâôßâÆßâößâ£ßâÉ.",
        "optionsRu": [
          "╨₧╨┐╤Ç╨╛╤ü",
          "╨ó╨╡╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡",
          "╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é",
          "╨¥╨░╨▒╨╗╤Ä╨┤╨╡╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╒Ç╒í╓Ç╓ü╒╕╓é╒┤",
          "╘│╒╕╓Ç╒«╒½ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ô╒╕╓Ç╒▒╒í╓Ç╒»╒╕╓é╒┤",
          "╘┤╒½╒┐╒í╓Ç╒»╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Sor─ƒu",
          "Case study",
          "T╔Öcr├╝b╔Ö",
          "M├╝┼ƒahid╔Ö"
        ],
        "explanationHy": "╒ä╒½╒í╒╡╒╢ ╓â╒╕╓Ç╒▒╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒░╒í╒╜╒┐╒í╒┐╒Ñ╒¼ ╒║╒í╒┐╒│╒í╒╝ ╓ç ╒░╒Ñ╒┐╓ç╒í╒╢╓ä:",
        "explanationRu": "╨ó╨╛╨╗╤î╨║╨╛ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╤ï ╨╝╨╛╨│╤â╤é ╤â╤ü╤é╨░╨╜╨╛╨▓╨╕╤é╤î ╨┐╤Ç╨╕╤ç╨╕╨╜╤â ╨╕ ╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╕╨╡.",
        "questionRu": "╨Ü╨░╨║╨╛╨╣ ╨╝╨╡╤é╨╛╨┤ ╤â╤ü╤é╨░╨╜╨░╨▓╨╗╨╕╨▓╨░╨╡╤é ╨┐╤Ç╨╕╤ç╨╕╨╜╤â ╨╕ ╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╕╨╡?",
        "questionHy": "╒ê╒₧╓Ç ╒┤╒Ñ╒⌐╒╕╒ñ╒╢ ╒º ╒╜╒í╒░╒┤╒í╒╢╒╕╓é╒┤ ╒║╒í╒┐╒│╒í╒╝╒╢ ╒╕╓é ╒░╒Ñ╒┐╓ç╒í╒╢╓ä╒¿:",
        "questionAz": "Hans─▒ ├╝sul s╔Öb╔Öb v╔Ö n╔Ötic╔Öni m├╝╔Öyy╔Ön edir?",
        "explanationAz": "Yaln─▒z t╔Öcr├╝b╔Öl╔Ör s╔Öb╔Öb-n╔Ötic╔Öni m├╝╔Öyy╔Ön ed╔Ö bil╔Ör."
      },
      {
        "id": "q2-5",
        "question": "Random assignment helps to:",
        "questionKa": "ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâùßâÿ ßâÆßâÉßâ£ßâÉßâ¼ßâÿßâÜßâößâæßâÉ ßâößâ«ßâ¢ßâÉßâáßâößâæßâÉ:",
        "options": [
          "Increase sample",
          "Equalize groups",
          "Make results public",
          "Speed research"
        ],
        "optionsKa": [
          "ßâ£ßâÿßâ¢ßâúßâ¿ßâÿßâí ßâÆßâÉßâûßâáßâôßâÉßâí",
          "ßâ»ßâÆßâúßâñßâößâæßâÿßâí ßâÆßâÉßâùßâÉßâ£ßâÉßâæßâáßâößâæßâÉßâí",
          "ßâ¿ßâößâôßâößâÆßâößâæßâÿßâí ßâÆßâÉßâíßâÉßâ»ßâÉßâáßâ¥ßâößâæßâÉßâí",
          "ßâÖßâòßâÜßâößâòßâÿßâí ßâôßâÉßâ⌐ßâÑßâÉßâáßâößâæßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Random assignment ensures groups are equivalent.",
        "explanationKa": "ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâùßâÿ ßâÆßâÉßâ£ßâÉßâ¼ßâÿßâÜßâößâæßâÉ ßâúßâûßâáßâúßâ£ßâòßâößâÜßâºßâ¥ßâñßâí ßâ»ßâÆßâúßâñßâößâæßâÿßâí ßâößâÖßâòßâÿßâòßâÉßâÜßâößâ£ßâóßâúßâáßâ¥ßâæßâÉßâí.",
        "optionsRu": [
          "╨ú╨▓╨╡╨╗╨╕╤ç╨╡╨╜╨╕╨╡ ╨▓╤ï╨▒╨╛╤Ç╨║╨╕",
          "╨ú╤Ç╨░╨▓╨╜╤Å╤é╤î ╨│╤Ç╤â╨┐╨┐╤ï",
          "╨í╨┤╨╡╨╗╨░╨╣╤é╨╡ ╤Ç╨╡╨╖╤â╨╗╤î╤é╨░╤é╤ï ╨╛╨▒╤ë╨╡╨┤╨╛╤ü╤é╤â╨┐╨╜╤ï╨╝╨╕",
          "╨ÿ╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╤ü╨║╨╛╤Ç╨╛╤ü╤é╨╕"
        ],
        "optionsHy": [
          "╒ä╒Ñ╒«╒í╓ü╒╢╒Ñ╒¼ ╒╢╒┤╒╕╓é╒╖╒¿",
          "╒Ç╒í╒╛╒í╒╜╒í╓Ç╒Ñ╓ü╒╢╒Ñ╒¼ ╒¡╒┤╒ó╒Ñ╓Ç╒¿",
          "╘▒╓Ç╒ñ╒╡╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒░╓Ç╒í╒║╒í╓Ç╒í╒»╒í╒╡╒╢╒í╓ü╓Ç╒Ñ╓ä",
          "╘▒╓Ç╒í╒ú╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "N├╝mun╔Öni art─▒r─▒n",
          "Qruplar─▒ b╔Örab╔Örl╔Ö┼ƒdirin",
          "N╔Ötic╔Öl╔Öri ictimail╔Ö┼ƒdirin",
          "S├╝r╔Öt ara┼ƒd─▒rmas─▒"
        ],
        "questionHy": "╒è╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒░╒í╒╢╒▒╒╢╒í╓Ç╒í╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╓à╒ú╒╢╒╕╓é╒┤ ╒º.",
        "explanationHy": "╒è╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒░╒í╒╢╒▒╒╢╒í╓Ç╒í╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒í╒║╒í╒░╒╕╒╛╒╕╓é╒┤ ╒º ╒¡╒┤╒ó╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç╒¬╒Ñ╓ä╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
        "questionRu": "╨í╨╗╤â╤ç╨░╨╣╨╜╨╛╨╡ ╨╜╨░╨╖╨╜╨░╤ç╨╡╨╜╨╕╨╡ ╨┐╨╛╨╝╨╛╨│╨░╨╡╤é:",
        "explanationRu": "╨í╨╗╤â╤ç╨░╨╣╨╜╨╛╨╡ ╨╜╨░╨╖╨╜╨░╤ç╨╡╨╜╨╕╨╡ ╨│╨░╤Ç╨░╨╜╤é╨╕╤Ç╤â╨╡╤é ╤ì╨║╨▓╨╕╨▓╨░╨╗╨╡╨╜╤é╨╜╨╛╤ü╤é╤î ╨│╤Ç╤â╨┐╨┐.",
        "explanationAz": "T╔Ösad├╝fi t╔Öyinat qruplar─▒n ekvivalent olmas─▒n─▒ t╔Ömin edir.",
        "questionAz": "T╔Ösad├╝fi t╔Öyinat a┼ƒa─ƒ─▒dak─▒lara k├╢m╔Ök edir:"
      },
      {
        "id": "q2-6",
        "question": "A double-blind study means:",
        "questionKa": "ßâ¥ßâáßâ¢ßâÉßâÆßâÿ ßâæßâáßâ¢ßâÉ ßâÖßâòßâÜßâößâòßâÉ ßâ£ßâÿßâ¿ßâ£ßâÉßâòßâí:",
        "options": [
          "No one knows hypothesis",
          "Neither side knows assignments",
          "Two experiments run",
          "Both eyes covered"
        ],
        "optionsKa": [
          "ßâÉßâáßâÉßâòßâÿßâ£ ßâÿßâ¬ßâÿßâí ßâûßâªßâòßâÿßâí ßâÆßâ¥ßâ¡ßâößâæßâÿßâí ßâ¢ßâÿßâÆßâáßâÉßâ¬ßâÿßâÿßâí ßâíßâÉßâÜßâôßâ¥",
          "ßâÉßâáßâ¬ ßâößâáßâùßâÿ ßâ¢ßâ«ßâÉßâáßâößâ¢ ßâÉßâá ßâÿßâ¬ßâÿßâí ßâáßâ¥ßâ¢ßâößâÜ ßâ₧ßâÿßâáßâ¥ßâæßâÉßâ¿ßâÿ ßâ¢ßâ¥ßâ«ßâòßâôßâ£ßâößâ£",
          "ßâ¥ßâáßâÿ ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ ßâ¢ßâÿßâ¢ßâôßâÿßâ£ßâÉßâáßâößâ¥ßâæßâí",
          "ßâ¥ßâáßâÿßâòßâö ßâùßâòßâÉßâÜßâÿ ßâÉßâÖßâáßâúßâÜßâÿßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Neither participants nor researchers know group assignments.",
        "explanationKa": "ßâíßâÉßâ¿ßâúßâÉßâÜßâößâæßâÉßâí ßâÆßâòßâÉßâ½ßâÜßâößâòßâí ßâùßâÉßâòßâÿßâôßâÉßâ£ ßâÉßâòßâÿßâ¬ßâÿßâÜßâ¥ßâù ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÉßâóßâ¥ßâáßâÿßâí ßâ¢ßâ¥ßâÜßâ¥ßâôßâÿßâ£ßâÿßâí ßâößâñßâößâÑßâóßâÿ ßâÿßâ¢ßâÿßâù, ßâáßâ¥ßâ¢ ßâÉßâáßâ¬ ßâÉßâíßâÿßâíßâóßâößâ£ßâóßâ¢ßâÉ ßâôßâÉ ßâÉßâáßâ¬ ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâößâæßâ¢ßâÉ ßâÉßâá ßâÿßâ¬ßâÿßâÉßâ£, ßâáßâ¥ßâ¢ßâößâÜ ßâ₧ßâÿßâáßâ¥ßâæßâÉßâ¿ßâÿ ßâ¢ßâ¥ßâ«ßâòßâôßâ£ßâößâ£ ßâÿßâíßâÿßâ£ßâÿ.",
        "optionsRu": [
          "╨¥╨╕╨║╤é╨╛ ╨╜╨╡ ╨╖╨╜╨░╨╡╤é ╨│╨╕╨┐╨╛╤é╨╡╨╖╤ï",
          "╨¥╨╕ ╨╛╨┤╨╜╨░ ╨╕╨╖ ╤ü╤é╨╛╤Ç╨╛╨╜ ╨╜╨╡ ╨╖╨╜╨░╨╡╤é ╨╖╨░╨┤╨░╨╜╨╕╨╣",
          "╨ƒ╤Ç╨╛╨▓╨╛╨┤╤Å╤é╤ü╤Å ╨┤╨▓╨░ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨░",
          "╨₧╨▒╨░ ╨│╨╗╨░╨╖╨░ ╨╖╨░╨║╤Ç╤ï╤é╤ï"
        ],
        "optionsHy": [
          "╒ê╒╣ ╒╕╓ä ╒╣╒ú╒½╒┐╒½ ╒╛╒í╓Ç╒»╒í╒«",
          "╘┐╒╕╒▓╒┤╒Ñ╓Ç╒½╓ü ╒╕╒╣ ╒┤╒Ñ╒»╒¿ ╒╣╒ú╒½╒┐╒½ ╒░╒í╒╢╒▒╒╢╒í╓Ç╒í╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿",
          "╘╡╓Ç╒»╒╕╓é ╓â╒╕╓Ç╒▒╒í╓Ç╒»╒╕╓é╒┤ ╒º ╒»╒í╒┐╒í╓Ç╒╛╒╕╓é╒┤",
          "╘╡╓Ç╒»╒╕╓é ╒í╒╣╓ä╒Ñ╓Ç╒╢ ╒º╒¼ ╒«╒í╒«╒»╒╛╒í╒« ╒º╒½╒╢"
        ],
        "optionsAz": [
          "He├º kim hipotezi bilmir",
          "He├º bir t╔Ör╔Öf tap┼ƒ─▒r─▒qlar─▒ bilmir",
          "─░ki t╔Öcr├╝b╔Ö apar─▒l─▒r",
          "H╔Ör iki g├╢z ├╢rt├╝l├╝"
        ],
        "explanationHy": "╒ê╒╣ ╒┤╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒¿, ╒╕╒╣ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╒▓╒╢╒Ñ╓Ç╒¿ ╒╣╒ú╒½╒┐╒Ñ╒╢ ╒¡╒┤╒ó╒í╒╡╒½╒╢ ╒í╒╝╒í╒╗╒í╒ñ╓Ç╒í╒╢╓ä╒╢╒Ñ╓Ç╒¿:",
        "questionRu": "╨ö╨▓╨╛╨╣╨╜╨╛╨╡ ╤ü╨╗╨╡╨┐╨╛╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨╛╨╖╨╜╨░╤ç╨░╨╡╤é:",
        "questionAz": "─░kiqat kor t╔Ödqiqat o dem╔Ökdir:",
        "questionHy": "╘┐╓Ç╒»╒╢╒í╒»╒½ ╒»╒╕╓é╒╡╓Ç ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒º.",
        "explanationRu": "╨¥╨╕ ╤â╤ç╨░╤ü╤é╨╜╨╕╨║╨╕, ╨╜╨╕ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╨╕ ╨╜╨╡ ╨╖╨╜╨░╤Ä╤é ╨│╤Ç╤â╨┐╨┐╨╛╨▓╤ï╤à ╨╖╨░╨┤╨░╨╜╨╕╨╣.",
        "explanationAz": "N╔Ö i┼ƒtirak├º─▒lar, n╔Ö d╔Ö t╔Ödqiqat├º─▒lar qrup tap┼ƒ─▒r─▒qlar─▒n─▒ bilmirl╔Ör."
      },
      {
        "id": "q2-7",
        "question": "Correlation does not equal causation means:",
        "questionKa": "ßâÖßâ¥ßâáßâößâÜßâÉßâ¬ßâÿßâÉ ßâÉßâá ßâúßâôßâáßâÿßâí ßâ¢ßâÿßâûßâößâûßâ¥ßâæßâáßâÿßâ¥ßâæßâÉßâÉ ßâ£ßâÿßâ¿ßâ£ßâÉßâòßâí:",
        "options": [
          "Correlations are useless",
          "Being related does not mean causation",
          "All research is flawed",
          "Experiments unnecessary"
        ],
        "optionsKa": [
          "ßâÖßâ¥ßâáßâößâÜßâÉßâ¬ßâÿßâößâæßâÿ ßâúßâíßâÉßâáßâÆßâößâæßâÜßâ¥ßâÉ",
          "ßâÖßâÉßâòßâ¿ßâÿßâáßâÿ ßâÉßâá ßâ£ßâÿßâ¿ßâ£ßâÉßâòßâí ßâ¢ßâÿßâûßâößâûßâ¥ßâæßâáßâÿßâ¥ßâæßâÉßâí",
          "ßâºßâòßâößâÜßâÉ ßâÖßâòßâÜßâößâòßâÉ ßâ«ßâÉßâáßâòßâößâûßâÿßâÉßâ£ßâÿßâÉ",
          "ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâößâæßâÿ ßâÉßâá ßâÉßâáßâÿßâí ßâíßâÉßâ¡ßâÿßâáßâ¥"
        ],
        "correctIndex": 1,
        "explanation": "Correlation does not prove direct causation.",
        "explanationKa": "ßâÖßâ¥ßâáßâößâÜßâÉßâ¬ßâÿßâÉ ßâÉßâá ßâÉßâ¢ßâóßâÖßâÿßâ¬ßâößâæßâí ßâ₧ßâÿßâáßâôßâÉßâ₧ßâÿßâá ßâ¢ßâÿßâûßâößâûßâ¥ßâæßâáßâÿßâ¥ßâæßâÉßâí.",
        "optionsRu": [
          "╨Ü╨╛╤Ç╤Ç╨╡╨╗╤Å╤å╨╕╨╕ ╨▒╨╡╤ü╨┐╨╛╨╗╨╡╨╖╨╜╤ï",
          "╨í╨▓╤Å╨╖╤î ╨╜╨╡ ╨╛╨╖╨╜╨░╤ç╨░╨╡╤é ╨┐╤Ç╨╕╤ç╨╕╨╜╨╜╨╛-╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╡╨╜╨╜╤â╤Ä ╤ü╨▓╤Å╨╖╤î",
          "╨Æ╤ü╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨╛╤ê╨╕╨▒╨╛╤ç╨╜╤ï",
          "╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╤ï ╨╜╨╡ ╨╜╤â╨╢╨╜╤ï"
        ],
        "optionsHy": [
          "╒Ç╒í╓Ç╒í╒ó╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒╢ ╒í╒╢╓à╒ú╒╕╓é╒┐ ╒Ñ╒╢",
          "╒Ç╒í╓Ç╒í╒ª╒í╒┐ ╒¼╒½╒╢╒Ñ╒¼╒¿ ╒╣╒½ ΓÇïΓÇï╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒║╒í╒┐╒│╒í╒╝╒í╒░╒Ñ╒┐╓ç╒í╒╢╓ä╒í╒╡╒½╒╢ ╒»╒í╒║",
          "╘▓╒╕╒¼╒╕╓Ç ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒⌐╒Ñ╓Ç╒½ ╒Ñ╒╢",
          "╒ô╒╕╓Ç╒▒╒Ñ╓Ç╒╢ ╒í╒╛╒Ñ╒¼╒╕╓Ç╒ñ ╒Ñ╒╢"
        ],
        "optionsAz": [
          "Korrelyasiya faydas─▒zd─▒r",
          "╞Ålaq╔Öli olmaq s╔Öb╔Öb ╔Ölaq╔Ösi dem╔Ök deyil",
          "B├╝t├╝n ara┼ƒd─▒rmalar s╔Öhvdir",
          "T╔Öcr├╝b╔Öl╔Ör laz─▒ms─▒zd─▒r"
        ],
        "questionRu": "╨Ü╨╛╤Ç╤Ç╨╡╨╗╤Å╤å╨╕╤Å ╨╜╨╡ ╤Ç╨░╨▓╨╜╨░ ╨┐╤Ç╨╕╤ç╨╕╨╜╨╜╨╛-╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╡╨╜╨╜╨╛╨╣ ╤ü╨▓╤Å╨╖╨╕:",
        "explanationRu": "╨Ü╨╛╤Ç╤Ç╨╡╨╗╤Å╤å╨╕╤Å ╨╜╨╡ ╨┤╨╛╨║╨░╨╖╤ï╨▓╨░╨╡╤é ╨┐╤Ç╤Å╨╝╤â╤Ä ╨┐╤Ç╨╕╤ç╨╕╨╜╨╜╨╛-╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╡╨╜╨╜╤â╤Ä ╤ü╨▓╤Å╨╖╤î.",
        "questionAz": "Korrelyasiya s╔Öb╔Öbiyy╔Öt╔Ö b╔Örab╔Ör deyil dem╔Ökdir:",
        "explanationAz": "Korrelyasiya birba┼ƒa s╔Öb╔Öb ╔Ölaq╔Ösini s├╝but etmir.",
        "explanationHy": "╒Ç╒í╓Ç╒í╒ó╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╣╒½ ╒í╒║╒í╓ü╒╕╓é╓ü╒╕╓é╒┤ ╒╕╓é╒▓╒▓╒í╒»╒½ ╒║╒í╒┐╒│╒í╒╝╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
        "questionHy": "╒Ç╒í╓Ç╒í╒ó╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╣╒½ ╒░╒í╒╛╒í╒╜╒í╓Ç╒Ñ╓ü╒╢╒╕╓é╒┤ ╒║╒í╒┐╒│╒í╒╝╒í╒░╒Ñ╒┐╓ç╒í╒╢╓ä╒í╒╡╒½╒╢ ╒»╒í╒║╒¿ ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒º."
      },
      {
        "id": "q2-8",
        "question": "Informed consent means participants:",
        "questionKa": "ßâÿßâ£ßâñßâ¥ßâáßâ¢ßâÿßâáßâößâæßâúßâÜßâÿ ßâùßâÉßâ£ßâ«ßâ¢ßâ¥ßâæßâÉ ßâ£ßâÿßâ¿ßâ£ßâÉßâòßâí, ßâáßâ¥ßâ¢ ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâößâæßâÿ:",
        "options": [
          "Are paid well",
          "Understand and agree voluntarily",
          "Must finish the study",
          "Are students"
        ],
        "optionsKa": [
          "ßâÖßâÉßâáßâÆßâÉßâô ßâÉßâáßâÿßâÉßâ£ ßâÉßâ£ßâÉßâûßâªßâÉßâúßâáßâößâæßâúßâÜßâÿ",
          "ßâößâíßâ¢ßâÿßâù ßâôßâÉ ßâ£ßâößâæßâÉßâºßâ¥ßâñßâÜßâ¥ßâæßâÿßâù ßâùßâÉßâ£ßâ«ßâ¢ßâôßâößâæßâÿßâÉßâ£",
          "ßâÖßâòßâÜßâößâòßâÉ ßâæßâ¥ßâÜßâ¥ßâ¢ßâôßâö ßâúßâ£ßâôßâÉ ßâôßâÉßâÉßâíßâáßâúßâÜßâ¥ßâ£",
          "ßâíßâóßâúßâôßâößâ£ßâóßâößâæßâÿ ßâÉßâáßâÿßâÉßâ£"
        ],
        "correctIndex": 1,
        "explanation": "Participants must understand and agree voluntarily.",
        "explanationKa": "ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâößâæßâí ßâúßâ£ßâôßâÉ ßâößâíßâ¢ßâ¥ßâôßâößâù ßâôßâÉ ßâ£ßâößâæßâÉßâºßâ¥ßâñßâÜßâ¥ßâæßâÿßâù ßâôßâÉßâùßâÉßâ£ßâ«ßâ¢ßâôßâ£ßâößâ£.",
        "optionsRu": [
          "╨Ñ╨╛╤Ç╨╛╤ê╨╛ ╨┐╨╗╨░╤é╤Å╤é",
          "╨ƒ╨╛╨╜╤Å╤é╤î ╨╕ ╤ü╨╛╨│╨╗╨░╤ü╨╕╤é╤î╤ü╤Å ╨┤╨╛╨▒╤Ç╨╛╨▓╨╛╨╗╤î╨╜╨╛",
          "╨ö╨╛╨╗╨╢╨╡╨╜ ╨╖╨░╨║╨╛╨╜╤ç╨╕╤é╤î ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡",
          "╨í╤é╤â╨┤╨╡╨╜╤é╤ï"
        ],
        "optionsHy": [
          "╘╝╒í╒╛ ╒Ñ╒╢ ╒╛╒í╓Ç╒▒╒í╒┐╓Ç╒╛╒╕╓é╒┤",
          "╒Ç╒í╒╜╒»╒í╓ü╒Ñ╓ä ╓ç ╒░╒í╒┤╒í╒▒╒í╒╡╒╢╒╛╒Ñ╓ä ╒»╒í╒┤╒í╒╛╒╕╓Ç",
          "╒è╒Ñ╒┐╓ä ╒º ╒í╒╛╒í╓Ç╒┐╒Ñ╒¼ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╒ê╓é╒╜╒í╒╢╒╕╒▓╒╢╒Ñ╓Ç ╒Ñ╒╢"
        ],
        "optionsAz": [
          "Yax┼ƒ─▒ maa┼ƒ al─▒rlar",
          "Anlay─▒n v╔Ö k├╢n├╝ll├╝ olaraq raz─▒la┼ƒ─▒n",
          "T╔Öhsili bitirm╔Ölidir",
          "T╔Öl╔Öb╔Ödirl╔Ör"
        ],
        "questionRu": "╨ÿ╨╜╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╨╜╨╜╨╛╨╡ ╤ü╨╛╨│╨╗╨░╤ü╨╕╨╡ ╨╛╨╖╨╜╨░╤ç╨░╨╡╤é, ╤ç╤é╨╛ ╤â╤ç╨░╤ü╤é╨╜╨╕╨║╨╕:",
        "explanationHy": "╒ä╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒¿ ╒║╒Ñ╒┐╓ä ╒º ╒░╒í╒╜╒»╒í╒╢╒í╒╢ ╓ç ╒»╒í╒┤╒╕╒╛╒½╒╢ ╒░╒í╒┤╒í╒▒╒í╒╡╒╢╒╛╒Ñ╒╢:",
        "questionAz": "M╔Ölumatl─▒ raz─▒l─▒q i┼ƒtirak├º─▒lar dem╔Ökdir:",
        "questionHy": "╒Å╒Ñ╒▓╒Ñ╒»╒í╓ü╒╛╒í╒« ╒░╒í╒┤╒í╒▒╒í╒╡╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒º ╒┤╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç.",
        "explanationRu": "╨ú╤ç╨░╤ü╤é╨╜╨╕╨║╨╕ ╨┤╨╛╨╗╨╢╨╜╤ï ╨┐╨╛╨╜╤Å╤é╤î ╨╕ ╤ü╨╛╨│╨╗╨░╤ü╨╕╤é╤î╤ü╤Å ╨┤╨╛╨▒╤Ç╨╛╨▓╨╛╨╗╤î╨╜╨╛.",
        "explanationAz": "─░┼ƒtirak├º─▒lar k├╢n├╝ll├╝ olaraq ba┼ƒa d├╝┼ƒm╔Öli v╔Ö raz─▒la┼ƒmal─▒d─▒rlar."
      },
      {
        "id": "q2-9",
        "question": "Which provides most in-depth info about one individual?",
        "questionKa": "ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâÿßâ½ßâÜßâößâòßâÉ ßâºßâòßâößâÜßâÉßâûßâö ßâíßâÿßâªßâáßâ¢ßâÿßâíßâößâúßâÜ ßâÿßâ£ßâñßâ¥ßâáßâ¢ßâÉßâ¬ßâÿßâÉßâí ßâößâáßâùßâÿ ßâÿßâ£ßâôßâÿßâòßâÿßâôßâÿßâí ßâ¿ßâößâíßâÉßâ«ßâößâæ?",
        "options": [
          "Survey",
          "Experiment",
          "Case study",
          "Correlation study"
        ],
        "optionsKa": [
          "ßâÆßâÉßâ¢ßâ¥ßâÖßâÿßâùßâ«ßâòßâÉ",
          "ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ",
          "ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâí ßâ¿ßâößâíßâ¼ßâÉßâòßâÜßâÉ",
          "ßâÖßâ¥ßâáßâößâÜßâÉßâ¬ßâÿßâúßâáßâÿ ßâÖßâòßâÜßâößâòßâÉ"
        ],
        "correctIndex": 2,
        "explanation": "Case studies are deeply detailed.",
        "explanationKa": "ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâí ßâ¿ßâößâíßâ¼ßâÉßâòßâÜßâÉ ßâºßâòßâößâÜßâÉßâûßâö ßâôßâößâóßâÉßâÜßâúßâáßâÿßâÉ.",
        "optionsRu": [
          "╨₧╨┐╤Ç╨╛╤ü",
          "╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é",
          "╨ó╨╡╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡",
          "╨Ü╨╛╤Ç╤Ç╨╡╨╗╤Å╤å╨╕╨╛╨╜╨╜╨╛╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╒Ç╒í╓Ç╓ü╒╕╓é╒┤",
          "╒ô╒╕╓Ç╒▒╒í╓Ç╒»╒╕╓é╒┤",
          "╘│╒╕╓Ç╒«╒½ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒Ç╒í╓Ç╒í╒ó╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Sor─ƒu",
          "T╔Öcr├╝b╔Ö",
          "Case study",
          "Korrelyasiya t╔Ödqiqat─▒"
        ],
        "explanationAz": "Keys t╔Ödqiqatlar─▒ d╔Örin t╔Öf╔Örr├╝atl─▒d─▒r.",
        "explanationRu": "╨ó╨╡╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨│╨╗╤â╨▒╨╛╨║╨╛ ╨┤╨╡╤é╨░╨╗╨╕╨╖╨╕╤Ç╨╛╨▓╨░╨╜╤ï.",
        "questionAz": "Hans─▒ bir ┼ƒ╔Öxs haqq─▒nda ╔Ön ╔Ötrafl─▒ m╔Ölumat verir?",
        "questionRu": "╨Ü╨░╨║╨╛╨╣ ╨╕╨╖ ╨╜╨╕╤à ╨┐╤Ç╨╡╨┤╨╛╤ü╤é╨░╨▓╨╗╤Å╨╡╤é ╨╜╨░╨╕╨▒╨╛╨╗╨╡╨╡ ╨┐╨╛╨┤╤Ç╨╛╨▒╨╜╤â╤Ä ╨╕╨╜╤ä╨╛╤Ç╨╝╨░╤å╨╕╤Ä ╨╛╨▒ ╨╛╨┤╨╜╨╛╨╝ ╤ç╨╡╨╗╨╛╨▓╨╡╨║╨╡?",
        "questionHy": "╒ê╒₧╓Ç╒╢ ╒º ╒┐╒í╒¼╒½╒╜ ╒í╒╝╒í╒╛╒Ñ╒¼ ╒¡╒╕╓Ç╒¿ ╒┐╒Ñ╒▓╒Ñ╒»╒í╒┐╒╛╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒┤╒Ñ╒» ╒í╒╢╒▒╒½ ╒┤╒í╒╜╒½╒╢:",
        "explanationHy": "╘┤╒Ñ╒║╓ä╒½ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒¡╒╕╓Ç╒í╒║╒Ñ╒╜ ╒┤╒í╒╢╓Ç╒í╒┤╒í╒╜╒╢ ╒Ñ╒╢:"
      },
      {
        "id": "q2-10",
        "question": "The mean is:",
        "questionKa": "ßâíßâÉßâ¿ßâúßâÉßâÜßâ¥ ßâÉßâáßâÿßâùßâ¢ßâößâóßâÿßâÖßâúßâÜßâÿ ßâÉßâáßâÿßâí:",
        "options": [
          "Most frequent score",
          "Middle score",
          "Arithmetic average",
          "Range of scores"
        ],
        "optionsKa": [
          "ßâºßâòßâößâÜßâÉßâûßâö ßâ«ßâ¿ßâÿßâáßâÿ ßâÑßâúßâÜßâÉ",
          "ßâ¿ßâúßâÉßâÜßâößâôßâúßâáßâÿ ßâÑßâúßâÜßâÉ",
          "ßâºßâòßâößâÜßâÉßâí ßâ»ßâÉßâ¢ßâÿ ßâÆßâÉßâºßâ¥ßâñßâÿßâÜßâÿ ßâáßâÉßâ¥ßâôßâößâ£ßâ¥ßâæßâÉßâÉßâûßâö",
          "ßâÑßâúßâÜßâößâæßâÿßâí ßâôßâÿßâÉßâ₧ßâÉßâûßâ¥ßâ£ßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "The mean is the arithmetic average.",
        "explanationKa": "ßâíßâÉßâ¿ßâúßâÉßâÜßâ¥ ßâÉßâáßâÿßâùßâ¢ßâößâóßâÿßâÖßâúßâÜßâÿ ßâÉßâáßâÿßâí ßâºßâòßâößâÜßâÉßâí ßâ»ßâÉßâ¢ßâÿ ßâÆßâÉßâºßâ¥ßâñßâÿßâÜßâÿ ßâáßâÉßâ¥ßâôßâößâ£ßâ¥ßâæßâÉßâÉßâûßâö.",
        "optionsRu": [
          "╨í╨░╨╝╤ï╨╣ ╤ç╨░╤ü╤é╤ï╨╣ ╤Ç╨╡╨╖╤â╨╗╤î╤é╨░╤é",
          "╨í╤Ç╨╡╨┤╨╜╨╕╨╣ ╨▒╨░╨╗╨╗",
          "╨í╤Ç╨╡╨┤╨╜╨╡╨╡ ╨░╤Ç╨╕╤ä╨╝╨╡╤é╨╕╤ç╨╡╤ü╨║╨╛╨╡",
          "╨ö╨╕╨░╨┐╨░╨╖╨╛╨╜ ╨╛╤å╨╡╨╜╨╛╨║"
        ],
        "optionsHy": [
          "╘▒╒╝╒í╒╛╒Ñ╒¼ ╒░╒í╒│╒í╒¡╒í╒»╒½ ╒┤╒½╒í╒╛╒╕╓Ç",
          "╒ä╒½╒╗╒½╒╢ ╒┤╒½╒í╒╛╒╕╓Ç",
          "╒ä╒½╒╗╒½╒╢ ╒⌐╒╛╒í╒ó╒í╒╢╒í╒»╒í╒╢",
          "╒ä╒½╒í╒╛╒╕╓Ç╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╒í╒»╒í╒╡╓ä"
        ],
        "optionsAz": [
          "╞Ån tez-tez xal",
          "Orta hesab",
          "Arifmetik orta",
          "Xallar─▒n diapazonu"
        ],
        "questionAz": "Ortas─▒ budur:",
        "explanationAz": "Orta arifmetik ortad─▒r.",
        "questionRu": "╨í╤Ç╨╡╨┤╨╜╨╡╨╡ ╨╖╨╜╨░╤ç╨╡╨╜╨╕╨╡:",
        "questionHy": "╒ä╒½╒╗╒½╒╢╒¿ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "explanationRu": "╨í╤Ç╨╡╨┤╨╜╨╡╨╡ ╨╖╨╜╨░╤ç╨╡╨╜╨╕╨╡ ΓÇô ╤ì╤é╨╛ ╤ü╤Ç╨╡╨┤╨╜╨╡╨╡ ╨░╤Ç╨╕╤ä╨╝╨╡╤é╨╕╤ç╨╡╤ü╨║╨╛╨╡.",
        "explanationHy": "╒ä╒½╒╗╒½╒╢╒¿ ╒⌐╒╛╒í╒ó╒í╒╢╒í╒»╒í╒╢ ╒┤╒½╒╗╒½╒╢╒╢ ╒º╓ë"
      }
    ],
    "titleRu": "╨£╨╡╤é╨╛╨┤╤ï ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleHy": "╒Ç╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒⌐╒╕╒ñ╒╢╒Ñ╓Ç ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleAz": "T╔Ödqiqat Metodlar─▒ ΓÇö Viktorina"
  },
  {
    "id": "ch3-quiz",
    "chapterId": 3,
    "title": "Biological Bases ΓÇö Quiz",
    "titleKa": "ßâæßâÿßâ¥ßâÜßâ¥ßâÆßâÿßâúßâáßâÿ ßâíßâÉßâñßâúßâ½ßâòßâÜßâößâæßâÿ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q3-1",
        "question": "The gap between two neurons is the:",
        "questionKa": "ßâ¥ßâá ßâ£ßâößâÿßâáßâ¥ßâ£ßâí ßâ¿ßâ¥ßâáßâÿßâí ßâúßâñßâíßâÖßâáßâúßâÜßâÿ ßâÉßâáßâÿßâí:",
        "options": [
          "Axon terminal",
          "Synapse",
          "Dendrite",
          "Myelin sheath"
        ],
        "optionsKa": [
          "ßâÉßâÑßâíßâ¥ßâ£ßâÿßâí ßâóßâößâáßâ¢ßâÿßâ£ßâÉßâÜßâÿ",
          "ßâíßâÿßâ£ßâÉßâñßâíßâÿ",
          "ßâôßâößâ£ßâôßâáßâÿßâóßâÿ",
          "ßâ¢ßâÿßâößâÜßâÿßâ£ßâÿßâí ßâÆßâÉßâáßâíßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "The synapse is the gap between neurons.",
        "explanationKa": "ßâíßâÿßâ£ßâÉßâñßâíßâÿ ßâÉßâáßâÿßâí ßâúßâñßâíßâÖßâáßâúßâÜßâÿ ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâí ßâ¿ßâ¥ßâáßâÿßâí.",
        "optionsRu": [
          "╨É╨║╤ü╨╛╨╜ ╤é╨╡╤Ç╨╝╨╕╨╜╨░╨╗",
          "╨í╨╕╨╜╨░╨┐╤ü",
          "╨ö╨╡╨╜╨┤╤Ç╨╕╤é",
          "╨£╨╕╨╡╨╗╨╕╨╜╨╛╨▓╨░╤Å ╨╛╨▒╨╛╨╗╨╛╤ç╨║╨░"
        ],
        "optionsHy": [
          "Axon ╒┐╒Ñ╓Ç╒┤╒½╒╢╒í╒¼",
          "╒ì╒½╒╢╒í╒║╒╜",
          "╘┤╒Ñ╒╢╒ñ╓Ç╒½╒┐",
          "╒ä╒½╒Ñ╒¼╒½╒╢╒í╒╡╒½╒╢ ╒║╒í╒┐╒╡╒í╒╢"
        ],
        "optionsAz": [
          "Axon terminal─▒",
          "Sinaps",
          "dendrit",
          "Miyelin qab─▒─ƒ─▒"
        ],
        "explanationHy": "╒ì╒½╒╢╒í╒║╒╜╒¿ ╒╢╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╓ç ╒Ñ╒▓╒í╒« ╒ó╒í╓ü╒╢ ╒º:",
        "questionHy": "╘╡╓Ç╒»╒╕╓é ╒╢╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╓ç ╒Ñ╒▓╒í╒« ╒ó╒í╓ü╒¿ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "questionRu": "╨á╨░╨╖╤Ç╤ï╨▓ ╨╝╨╡╨╢╨┤╤â ╨┤╨▓╤â╨╝╤Å ╨╜╨╡╨╣╤Ç╨╛╨╜╨░╨╝╨╕ ΓÇô ╤ì╤é╨╛:",
        "explanationRu": "╨í╨╕╨╜╨░╨┐╤ü ΓÇô ╤ì╤é╨╛ ╤ë╨╡╨╗╤î ╨╝╨╡╨╢╨┤╤â ╨╜╨╡╨╣╤Ç╨╛╨╜╨░╨╝╨╕.",
        "questionAz": "─░ki neyron aras─▒ndak─▒ bo┼ƒluq:",
        "explanationAz": "Sinaps neyronlar aras─▒ndak─▒ bo┼ƒluqdur."
      },
      {
        "id": "q3-2",
        "question": "Which neurotransmitter is linked to pleasure and reward?",
        "questionKa": "ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâ£ßâößâÿßâáßâ¥ßâóßâáßâÉßâ£ßâíßâ¢ßâÿßâóßâößâáßâÿ ßâÉßâáßâÿßâí ßâôßâÉßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâúßâÜßâÿ ßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâößâæßâÉßâíßâùßâÉßâ£ ßâôßâÉ ßâ»ßâÿßâÜßâôßâ¥ßâíßâùßâÉßâ£?",
        "options": [
          "Serotonin",
          "GABA",
          "Dopamine",
          "Acetylcholine"
        ],
        "optionsKa": [
          "ßâíßâößâáßâ¥ßâóßâ¥ßâ£ßâÿßâ£ßâÿ",
          "GABA",
          "ßâôßâ¥ßâñßâÉßâ¢ßâÿßâ£ßâÿ",
          "ßâÉßâ¬ßâößâóßâÿßâÜßâÑßâ¥ßâÜßâÿßâ£ßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "Dopamine plays a key role in reward.",
        "explanationKa": "ßâôßâ¥ßâñßâÉßâ¢ßâÿßâ£ßâÿ ßâ¢ßâ£ßâÿßâ¿ßâòßâ£ßâößâÜßâ¥ßâòßâÉßâ£ ßâáßâ¥ßâÜßâí ßâùßâÉßâ¢ßâÉßâ¿ßâ¥ßâæßâí ßâ»ßâÿßâÜßâôßâ¥ßâí ßâíßâÿßâíßâóßâößâ¢ßâÉßâ¿ßâÿ.",
        "optionsRu": [
          "╨í╨╡╤Ç╨╛╤é╨╛╨╜╨╕╨╜",
          "╨ô╨É╨æ╨É",
          "╨ö╨╛╤ä╨░╨╝╨╕╨╜",
          "╨É╤å╨╡╤é╨╕╨╗╤à╨╛╨╗╨╕╨╜"
        ],
        "optionsHy": [
          "╒ì╒Ñ╓Ç╒╕╒┐╒╕╒╢╒½╒╢",
          "╘│╘▒╘▓╘▒",
          "╘┤╒╕╒║╒í╒┤╒½╒╢",
          "╘▒╓ü╒Ñ╒┐╒½╒¼╒¡╒╕╒¼╒½╒╢"
        ],
        "optionsAz": [
          "Serotonin",
          "GABA",
          "Dopamin",
          "Asetilkolin"
        ],
        "questionHy": "╒ê╒₧╓Ç ╒╢╒╡╒í╓Ç╒ñ╒í╒░╒í╒▓╒╕╓Ç╒ñ╒½╒╣╒╢ ╒º ╒»╒í╒║╒╛╒í╒« ╒░╒í╒│╒╕╓é╒╡╓ä╒½ ╓ç ╒║╒í╓Ç╒ú╓ç╒½ ╒░╒Ñ╒┐:",
        "questionRu": "╨Ü╨░╨║╨╛╨╣ ╨╜╨╡╨╣╤Ç╨╛╨╝╨╡╨┤╨╕╨░╤é╨╛╤Ç ╤ü╨▓╤Å╨╖╨░╨╜ ╤ü ╤â╨┤╨╛╨▓╨╛╨╗╤î╤ü╤é╨▓╨╕╨╡╨╝ ╨╕ ╨▓╨╛╨╖╨╜╨░╨│╤Ç╨░╨╢╨┤╨╡╨╜╨╕╨╡╨╝?",
        "questionAz": "Hans─▒ n├╢rotransmitter h╔Özz v╔Ö m├╝kafatla ╔Ölaq╔Öl╔Öndirilir?",
        "explanationHy": "╘┤╒╕╒║╒í╒┤╒½╒╢╒¿ ╒í╒╝╒í╒╢╓ü╓ä╒í╒╡╒½╒╢ ╒ñ╒Ñ╓Ç ╒º ╒¡╒í╒▓╒╕╓é╒┤ ╒║╒í╓Ç╒ú╓ç╒í╒┐╓Ç╒┤╒í╒╢ ╒ú╒╕╓Ç╒«╒╕╓é╒┤:",
        "explanationRu": "╨ö╨╛╤ä╨░╨╝╨╕╨╜ ╨╕╨│╤Ç╨░╨╡╤é ╨║╨╗╤Ä╤ç╨╡╨▓╤â╤Ä ╤Ç╨╛╨╗╤î ╨▓ ╨▓╨╛╨╖╨╜╨░╨│╤Ç╨░╨╢╨┤╨╡╨╜╨╕╨╕.",
        "explanationAz": "Dopamin m├╝kafatland─▒rmada ╔Ösas rol oynay─▒r."
      },
      {
        "id": "q3-3",
        "question": "The cerebral cortex has how many lobes?",
        "questionKa": "ßâùßâÉßâòßâÿßâí ßâóßâòßâÿßâ£ßâÿßâí ßâÑßâößâáßâÑßâí ßâáßâÉßâ¢ßâôßâößâ£ßâÿ ßâ¼ßâÿßâÜßâÿ ßâÉßâÑßâòßâí?",
        "options": [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        "optionsKa": [
          "ßâ¥ßâáßâÿ",
          "ßâíßâÉßâ¢ßâÿ",
          "ßâ¥ßâùßâ«ßâÿ",
          "ßâ«ßâúßâùßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "Four lobes: frontal, parietal, temporal, occipital.",
        "explanationKa": "ßâ¥ßâùßâ«ßâÿ ßâ¼ßâÿßâÜßâÿ: ßâ¿ßâúßâæßâÜßâÿßâí, ßâùßâ«ßâößâ¢ßâÿßâí, ßâíßâÉßâñßâößâùßâÑßâÜßâÿßâí, ßâÖßâößâñßâÿßâí.",
        "optionsRu": [
          "╨ö╨▓╨░",
          "╨ó╤Ç╨╕",
          "╨º╨╡╤é╤ï╤Ç╨╡",
          "╨ƒ╤Å╤é╤î"
        ],
        "optionsHy": [
          "╘╡╓Ç╒»╒╕╓é",
          "╘╡╓Ç╒Ñ╓ä",
          "╒ë╒╕╓Ç╒╜",
          "╒Ç╒½╒╢╒ú"
        ],
        "optionsAz": [
          "iki",
          "├╝├º",
          "d├╢rd",
          "Be┼ƒ"
        ],
        "explanationHy": "╒ë╒╕╓Ç╒╜ ╒ó╒¼╒⌐╒Ñ╓Ç╒¥ ╒│╒í╒»╒í╒┐╒í╒╡╒½╒╢, ╒║╒í╓Ç╒½╒Ñ╒┐╒í╒¼, ╒¬╒í╒┤╒í╒╢╒í╒»╒í╒╛╒╕╓Ç, ╓à╓ä╒╜╒½╒║╒½╒┐╒í╒¼:",
        "questionHy": "╒ö╒í╒╢╒½╒₧ ╒ó╒¼╒⌐╒í╒» ╒╕╓é╒╢╒½ ╒╕╓é╒▓╒Ñ╒▓╒½ ╒»╒Ñ╒▓╓ç╒¿:",
        "explanationRu": "╨º╨╡╤é╤ï╤Ç╨╡ ╨┤╨╛╨╗╨╕: ╨╗╨╛╨▒╨╜╨░╤Å, ╤é╨╡╨╝╨╡╨╜╨╜╨░╤Å, ╨▓╨╕╤ü╨╛╤ç╨╜╨░╤Å, ╨╖╨░╤é╤ï╨╗╨╛╤ç╨╜╨░╤Å.",
        "questionRu": "╨í╨║╨╛╨╗╤î╨║╨╛ ╨┤╨╛╨╗╨╡╨╣ ╨╕╨╝╨╡╨╡╤é ╨║╨╛╤Ç╨░ ╨│╨╛╨╗╨╛╨▓╨╜╨╛╨│╨╛ ╨╝╨╛╨╖╨│╨░?",
        "questionAz": "Ba┼ƒ beyin qab─▒─ƒ─▒n─▒n ne├º╔Ö lobu var?",
        "explanationAz": "D├╢rd lob: frontal, parietal, temporal, oksipital."
      },
      {
        "id": "q3-4",
        "question": "Broca's area controls:",
        "questionKa": "ßâæßâáßâ¥ßâÖßâÉßâí ßâÉßâáßâö ßâÉßâÖßâ¥ßâ£ßâóßâáßâ¥ßâÜßâößâæßâí:",
        "options": [
          "Vision",
          "Speech production",
          "Hearing",
          "Movement"
        ],
        "optionsKa": [
          "ßâ¢ßâ«ßâößâôßâòßâößâÜßâ¥ßâæßâÉßâí",
          "ßâ¢ßâößâóßâºßâòßâößâÜßâößâæßâÿßâí ßâ¼ßâÉßâáßâ¢ßâ¥ßâößâæßâÉßâí",
          "ßâíßâ¢ßâößâ£ßâÉßâí",
          "ßâ¢ßâ¥ßâ½ßâáßâÉßâ¥ßâæßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Broca's area controls speech production.",
        "explanationKa": "ßâæßâáßâ¥ßâÖßâÉßâí ßâÉßâáßâö ßâÉßâÖßâ¥ßâ£ßâóßâáßâ¥ßâÜßâößâæßâí ßâ¢ßâößâóßâºßâòßâößâÜßâößâæßâÿßâí ßâ¼ßâÉßâáßâ¢ßâ¥ßâößâæßâÉßâí.",
        "optionsRu": [
          "╨ù╤Ç╨╡╨╜╨╕╨╡",
          "╨á╨╡╤ç╨╡╨▓╨╛╨╡ ╨┐╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╤ü╤é╨▓╨╛",
          "╨í╨╗╤â╤à",
          "╨ö╨▓╨╕╨╢╨╡╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╒Å╒Ñ╒╜╒½╒¼╓ä",
          "╘╜╒╕╒╜╓ä╒½ ╒í╓Ç╒┐╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘╝╒╜╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ç╒í╓Ç╒¬╒╕╓é╒┤"
        ],
        "optionsAz": [
          "G├╢rm╔Ö",
          "Nitq istehsal─▒",
          "E┼ƒitm╔Ö",
          "H╔Ör╔Ök╔Öt"
        ],
        "questionRu": "╨ù╨╛╨╜╨░ ╨║╨╛╨╜╤é╤Ç╨╛╨╗╤Å ╨æ╤Ç╨╛╨║╨░:",
        "explanationAz": "Broca b├╢lg╔Ösi nitq istehsal─▒na n╔Özar╔Öt edir.",
        "questionAz": "Broca sah╔Ösin╔Ö n╔Özar╔Öt edir:",
        "explanationRu": "╨ù╨╛╨╜╨░ ╨æ╤Ç╨╛╨║╨░ ╨║╨╛╨╜╤é╤Ç╨╛╨╗╨╕╤Ç╤â╨╡╤é ╨┐╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╤ü╤é╨▓╨╛ ╤Ç╨╡╤ç╨╕.",
        "explanationHy": "Broca-╒½ ╒┐╒í╓Ç╒í╒«╓ä╒¿ ╒╛╒Ñ╓Ç╒í╒░╒╜╒»╒╕╓é╒┤ ╒º ╒¡╒╕╒╜╓ä╒½ ╒í╓Ç╒┐╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
        "questionHy": "Broca-╒½ ╒┐╒í╓Ç╒í╒«╓ä╒¿ ╒╛╒Ñ╓Ç╒í╒░╒╜╒»╒╕╓é╒┤ ╒º."
      },
      {
        "id": "q3-5",
        "question": "Fight-or-flight is activated by:",
        "questionKa": "ßâæßâáßâ½ßâ¥ßâÜßâÉ-ßâÉßâ£-ßâÆßâÉßâÑßâ¬ßâößâòßâÉ ßâÉßâÑßâóßâÿßâòßâÿßâáßâôßâößâæßâÉ:",
        "options": [
          "Parasympathetic NS",
          "Sympathetic NS",
          "Somatic NS",
          "Central NS"
        ],
        "optionsKa": [
          "ßâ₧ßâÉßâáßâÉßâíßâÿßâ¢ßâ₧ßâÉßâùßâÿßâÖßâúßâáßâÿ ßâ£ßâößâáßâòßâúßâÜßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÿßâù",
          "ßâíßâÿßâ¢ßâ₧ßâÉßâùßâÿßâÖßâúßâáßâÿ ßâ£ßâößâáßâòßâúßâÜßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÿßâù",
          "ßâíßâ¥ßâ¢ßâÉßâóßâúßâáßâÿ ßâ£ßâößâáßâòßâúßâÜßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÿßâù",
          "ßâ¬ßâößâ£ßâóßâáßâÉßâÜßâúßâáßâÿ ßâ£ßâößâáßâòßâúßâÜßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÿßâù"
        ],
        "correctIndex": 1,
        "explanation": "The sympathetic nervous system activates fight-or-flight.",
        "explanationKa": "ßâíßâÿßâ¢ßâ₧ßâÉßâùßâÿßâÖßâúßâáßâÿ ßâ£ßâößâáßâòßâúßâÜßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÉ ßâÉßâÑßâóßâÿßâòßâÿßâáßâößâæßâí ßâæßâáßâ½ßâ¥ßâÜßâÉ-ßâÉßâ£-ßâÆßâÉßâÑßâ¬ßâößâòßâÿßâí ßâáßâößâÉßâÑßâ¬ßâÿßâÉßâí.",
        "optionsRu": [
          "╨ƒ╨░╤Ç╨░╤ü╨╕╨╝╨┐╨░╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╨¥╨í",
          "╨í╨╕╨╝╨┐╨░╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╨¥╨í",
          "╨í╨╛╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╨¥╨í",
          "╨ª╨╡╨╜╤é╤Ç╨░╨╗╤î╨╜╤ï╨╣ ╨¥╨í"
        ],
        "optionsHy": [
          "╒è╒í╓Ç╒í╒╜╒½╒┤╒║╒í╒⌐╒½╒» ╒å╒ì",
          "╒ì╒½╒┤╒║╒í╒⌐╒½╒» ╒å.╒ì",
          "╒ì╒╕╒┤╒í╒┐╒½╒» ╒å╒ì",
          "╘┐╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╒»╒í╒╢ ╘▒╘▒"
        ],
        "optionsAz": [
          "Parasempatik NS",
          "Simpatik NS",
          "Somatik NS",
          "M╔Örk╔Özi NS"
        ],
        "questionAz": "M├╝bariz╔Ö v╔Ö ya u├ºu┼ƒ a┼ƒa─ƒ─▒dak─▒lar t╔Ör╔Öfind╔Ön aktivl╔Ö┼ƒdirilir:",
        "explanationRu": "╨í╨╕╨╝╨┐╨░╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╨╜╨╡╤Ç╨▓╨╜╨░╤Å ╤ü╨╕╤ü╤é╨╡╨╝╨░ ╨░╨║╤é╨╕╨▓╨╕╤Ç╤â╨╡╤é ╨┐╤Ç╨╕╨╜╤å╨╕╨┐ ┬½╨▒╨╡╨╣ ╨╕╨╗╨╕ ╨▒╨╡╨│╨╕┬╗.",
        "questionRu": "╨á╨╡╨╢╨╕╨╝ ┬½╨▒╨╡╨╣ ╨╕╨╗╨╕ ╨▒╨╡╨│╨╕┬╗ ╨░╨║╤é╨╕╨▓╨╕╤Ç╤â╨╡╤é╤ü╤Å:",
        "questionHy": "Fight-or-flight-╒¿ ╒í╒»╒┐╒½╒╛╒í╒╢╒╕╓é╒┤ ╒º ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╕╒╛.",
        "explanationHy": "╒ì╒½╒┤╒║╒í╒⌐╒½╒» ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒░╒í╒┤╒í╒»╒í╓Ç╒ú╒¿ ╒í╒»╒┐╒½╒╛╒í╓ü╒╢╒╕╓é╒┤ ╒º ╒║╒í╒╡╓ä╒í╓Ç╒¿ ╒»╒í╒┤ ╓â╒í╒¡╒╕╓é╒╜╒┐╒¿:",
        "explanationAz": "Simpatik sinir sistemi d├╢y├╝┼ƒ v╔Ö ya u├ºu┼ƒu aktivl╔Ö┼ƒdirir."
      },
      {
        "id": "q3-6",
        "question": "Myelin sheath serves to:",
        "questionKa": "ßâ¢ßâÿßâößâÜßâÿßâ£ßâÿßâí ßâÆßâÉßâáßâíßâÿßâí ßâñßâúßâ£ßâÑßâ¬ßâÿßâÉßâÉ:",
        "options": [
          "Generate neurotransmitters",
          "Speed up transmission",
          "Store memories",
          "Connect hemispheres"
        ],
        "optionsKa": [
          "ßâ£ßâößâÿßâáßâ¥ßâóßâáßâÉßâ£ßâíßâ¢ßâÿßâóßâößâáßâößâæßâÿßâí ßâ¼ßâÉßâáßâ¢ßâ¥ßâößâæßâÉ",
          "ßâÆßâÉßâôßâÉßâ¬ßâößâ¢ßâÿßâí ßâôßâÉßâ⌐ßâÑßâÉßâáßâößâæßâÉ",
          "ßâ¢ßâ¥ßâÆßâ¥ßâ£ßâößâæßâößâæßâÿßâí ßâ¿ßâößâ£ßâÉßâ«ßâòßâÉ",
          "ßâ£ßâÉßâ«ßâößâòßâÉßâáßâíßâñßâößâáßâ¥ßâößâæßâÿßâí ßâôßâÉßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Myelin insulates axons for faster signals.",
        "explanationKa": "ßâ¢ßâÿßâößâÜßâÿßâ£ßâÿ ßâÿßâûßâ¥ßâÜßâÿßâáßâößâæßâí ßâÉßâÑßâíßâ¥ßâ£ßâößâæßâí ßâíßâÿßâÆßâ£ßâÉßâÜßâößâæßâÿßâí ßâúßâñßâáßâ¥ ßâíßâ¼ßâáßâÉßâñßâÿ ßâÆßâÉßâôßâÉßâ¬ßâößâ¢ßâÿßâíßâùßâòßâÿßâí.",
        "optionsRu": [
          "╨ô╨╡╨╜╨╡╤Ç╨╕╤Ç╨╛╨▓╨░╤é╤î ╨╜╨╡╨╣╤Ç╨╛╤é╤Ç╨░╨╜╤ü╨╝╨╕╤é╤é╨╡╤Ç╤ï",
          "╨ú╤ü╨║╨╛╤Ç╨╕╤é╤î ╨┐╨╡╤Ç╨╡╨┤╨░╤ç╤â",
          "╨Ñ╤Ç╨░╨╜╨╕╤é╨╡ ╨▓╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╤Å",
          "╨í╨╛╨╡╨┤╨╕╨╜╨╕╤é╨╡ ╨┐╨╛╨╗╤â╤ê╨░╤Ç╨╕╤Å"
        ],
        "optionsHy": [
          "╒ì╒┐╒Ñ╒▓╒«╒Ñ╓ä ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒░╒í╒▓╒╕╓Ç╒ñ╒½╒╣╒╢╒Ñ╓Ç",
          "╘▒╓Ç╒í╒ú╒í╓ü╒╢╒Ñ╒¼ ╓â╒╕╒¡╒í╒╢╓ü╒╕╓é╒┤╒¿",
          "╒è╒í╒░╒║╒í╒╢╒Ñ╓ä ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿",
          "╒ä╒½╒í╓ü╓Ç╒Ñ╓ä ╒»╒½╒╜╒í╒ú╒╢╒ñ╒Ñ╓Ç╒¿"
        ],
        "optionsAz": [
          "N├╢rotransmitterl╔Ör yarad─▒n",
          "Transmissiyan─▒ s├╝r╔Ötl╔Öndirin",
          "Xatir╔Öl╔Öri saxla",
          "Yar─▒mk├╝r╔Öl╔Öri birl╔Ö┼ƒdirin"
        ],
        "questionAz": "Miyelin qab─▒─ƒ─▒ a┼ƒa─ƒ─▒dak─▒lara xidm╔Öt edir:",
        "questionRu": "╨£╨╕╨╡╨╗╨╕╨╜╨╛╨▓╨░╤Å ╨╛╨▒╨╛╨╗╨╛╤ç╨║╨░ ╤ü╨╗╤â╨╢╨╕╤é:",
        "explanationAz": "Miyelin daha s├╝r╔Ötli siqnallar ├╝├º├╝n aksonlar─▒ izolyasiya edir.",
        "explanationHy": "╒ä╒½╒Ñ╒¼╒½╒╢╒¿ ╒┤╒Ñ╒»╒╕╓é╒╜╒í╓ü╒╢╒╕╓é╒┤ ╒º ╒í╓ä╒╜╒╕╒╢╒╢╒Ñ╓Ç╒¿ ╒í╒╛╒Ñ╒¼╒½ ╒í╓Ç╒í╒ú ╒í╒ª╒ñ╒í╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç:",
        "explanationRu": "╨£╨╕╨╡╨╗╨╕╨╜ ╨╕╨╖╨╛╨╗╨╕╤Ç╤â╨╡╤é ╨░╨║╤ü╨╛╨╜╤ï ╨┤╨╗╤Å ╨▒╨╛╨╗╨╡╨╡ ╨▒╤ï╤ü╤é╤Ç╤ï╤à ╤ü╨╕╨│╨╜╨░╨╗╨╛╨▓.",
        "questionHy": "╒ä╒½╒Ñ╒¼╒½╒╢╒í╒╡╒½╒╢ ╒⌐╒í╒▓╒í╒╢╒⌐╒¿ ╒«╒í╒╝╒í╒╡╒╕╓é╒┤ ╒º."
      },
      {
        "id": "q3-7",
        "question": "Hippocampus is associated with:",
        "questionKa": "ßâ░ßâÿßâ₧ßâ¥ßâÖßâÉßâ¢ßâ₧ßâÿ ßâÉßâíßâ¥ßâ¬ßâÿßâáßâôßâößâæßâÉ:",
        "options": [
          "Emotion regulation",
          "Memory formation",
          "Visual processing",
          "Motor control"
        ],
        "optionsKa": [
          "ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿßâí ßâáßâößâÆßâúßâÜßâÉßâ¬ßâÿßâÉßâíßâùßâÉßâ£",
          "ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâñßâ¥ßâáßâ¢ßâÿßâáßâößâæßâÉßâíßâùßâÉßâ£",
          "ßâòßâÿßâûßâúßâÉßâÜßâúßâá ßâôßâÉßâ¢ßâúßâ¿ßâÉßâòßâößâæßâÉßâíßâùßâÉßâ£",
          "ßâ¢ßâ¥ßâóßâ¥ßâáßâúßâÜ ßâÖßâ¥ßâ£ßâóßâáßâ¥ßâÜßâùßâÉßâ£"
        ],
        "correctIndex": 1,
        "explanation": "The hippocampus is essential for forming memories.",
        "explanationKa": "ßâ░ßâÿßâ₧ßâ¥ßâÖßâÉßâ¢ßâ₧ßâÿ ßâÉßâúßâ¬ßâÿßâÜßâößâæßâößâÜßâÿßâÉ ßâ¢ßâ¥ßâÆßâ¥ßâ£ßâößâæßâößâæßâÿßâí ßâñßâ¥ßâáßâ¢ßâÿßâáßâößâæßâÿßâíßâùßâòßâÿßâí.",
        "optionsRu": [
          "╨á╨╡╨│╤â╨╗╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡ ╤ì╨╝╨╛╤å╨╕╨╣",
          "╨ñ╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡ ╨┐╨░╨╝╤Å╤é╨╕",
          "╨Æ╨╕╨╖╤â╨░╨╗╤î╨╜╨░╤Å ╨╛╨▒╤Ç╨░╨▒╨╛╤é╨║╨░",
          "╨ú╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┤╨▓╨╕╨│╨░╤é╨╡╨╗╨╡╨╝"
        ],
        "optionsHy": [
          "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒»╒í╓Ç╒ú╒í╒╛╒╕╓Ç╒╕╓é╒┤",
          "╒Ç╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒▒╓ç╒í╒╛╒╕╓Ç╒╕╓é╒┤",
          "╒Å╒Ñ╒╜╒╕╒▓╒í╒»╒í╒╢ ╒┤╒╖╒í╒»╒╕╓é╒┤",
          "╒ç╒í╓Ç╒¬╒½╒╣╒½ ╒»╒í╒╝╒í╒╛╒í╓Ç╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Emosiyalar─▒n t╔Önziml╔Önm╔Ösi",
          "Yadda┼ƒ─▒n formala┼ƒmas─▒",
          "Vizual emal",
          "Motor n╔Özar╔Öti"
        ],
        "questionRu": "╨ô╨╕╨┐╨┐╨╛╨║╨░╨╝╨┐ ╤ü╨▓╤Å╨╖╨░╨╜ ╤ü:",
        "questionAz": "Hipokampus a┼ƒa─ƒ─▒dak─▒larla ╔Ölaq╔Öl╔Öndirilir:",
        "questionHy": "╒Ç╒½╒║╒╕╒»╒í╒┤╒║╒╕╓é╒╜╒¿ ╒»╒í╒║╒╛╒í╒« ╒º.",
        "explanationRu": "╨ô╨╕╨┐╨┐╨╛╨║╨░╨╝╨┐ ╨╜╨╡╨╛╨▒╤à╨╛╨┤╨╕╨╝ ╨┤╨╗╤Å ╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╨╜╨╕╤Å ╨▓╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╨╣.",
        "explanationHy": "╒Ç╒½╒║╒╕╒»╒í╒┤╒║╒¿ ╒»╒í╓Ç╓ç╒╕╓Ç ╒º ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒▒╓ç╒í╒╛╒╕╓Ç╒┤╒í╒╢ ╒░╒í╒┤╒í╓Ç:",
        "explanationAz": "Hipokampus yadda┼ƒlar─▒n formala┼ƒmas─▒ ├╝├º├╝n vacibdir."
      },
      {
        "id": "q3-8",
        "question": "Which connects the two hemispheres?",
        "questionKa": "ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâÉßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâí ßâ¥ßâá ßâ£ßâÉßâ«ßâößâòßâÉßâáßâíßâñßâößâáßâ¥ßâí?",
        "options": [
          "Cerebellum",
          "Corpus callosum",
          "Thalamus",
          "Hypothalamus"
        ],
        "optionsKa": [
          "ßâ£ßâÉßâùßâ«ßâößâ¢ßâÿ",
          "ßâùßâ«ßâößâÜßâÿ ßâíßâ«ßâößâúßâÜßâÿ",
          "ßâùßâÉßâÜßâÉßâ¢ßâúßâíßâÿ",
          "ßâ░ßâÿßâ₧ßâ¥ßâùßâÉßâÜßâÉßâ¢ßâúßâíßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "The corpus callosum connects the hemispheres.",
        "explanationKa": "ßâùßâ«ßâößâÜßâÿ ßâíßâ«ßâößâúßâÜßâÿ ßâÉßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâí ßâ£ßâÉßâ«ßâößâòßâÉßâáßâíßâñßâößâáßâ¥ßâößâæßâí.",
        "optionsRu": [
          "╨£╨╛╨╖╨╢╨╡╤ç╨╛╨║",
          "╨£╨╛╨╖╨╛╨╗╨╕╤ü╤é╨╛╨╡ ╤é╨╡╨╗╨╛",
          "╨ó╨░╨╗╨░╨╝╤â╤ü",
          "╨ô╨╕╨┐╨╛╤é╨░╨╗╨░╨╝╤â╤ü"
        ],
        "optionsHy": [
          "╒ê╓é╒▓╒Ñ╒▓╒½╒»",
          "Corpus callosum",
          "╘╣╒í╒¼╒í╒┤╒╕╓é╒╜",
          "╒Ç╒½╒║╒╕╒⌐╒í╒¼╒í╒┤╒╕╓é╒╜"
        ],
        "optionsAz": [
          "Serebellum",
          "Korpus kallosum",
          "Talamus",
          "Hipotalamus"
        ],
        "questionHy": "╒ê╒₧╓Ç╒╢ ╒º ╒┤╒½╒í╓ü╒╢╒╕╓é╒┤ ╒Ñ╓Ç╒»╒╕╓é ╒»╒½╒╜╒í╒ú╒╢╒ñ╒Ñ╓Ç╒¿:",
        "explanationHy": "The corpus callosum ╒»╒í╒║╒╕╓é╒┤ ╒º ╒»╒½╒╜╒í╒ú╒╢╒ñ╒Ñ╓Ç╒¿:",
        "questionRu": "╨º╤é╨╛ ╤ü╨╛╨╡╨┤╨╕╨╜╤Å╨╡╤é ╨┤╨▓╨░ ╨┐╨╛╨╗╤â╤ê╨░╤Ç╨╕╤Å?",
        "explanationRu": "╨£╨╛╨╖╨╛╨╗╨╕╤ü╤é╨╛╨╡ ╤é╨╡╨╗╨╛ ╤ü╨╛╨╡╨┤╨╕╨╜╤Å╨╡╤é ╨┐╨╛╨╗╤â╤ê╨░╤Ç╨╕╤Å.",
        "explanationAz": "Korpus kallosum yar─▒mk├╝r╔Öl╔Öri birl╔Ö┼ƒdirir.",
        "questionAz": "Hans─▒ iki yar─▒mk├╝r╔Öni birl╔Ö┼ƒdirir?"
      },
      {
        "id": "q3-9",
        "question": "Endorphins are chemicals that:",
        "questionKa": "ßâößâ£ßâôßâ¥ßâáßâñßâÿßâ£ßâößâæßâÿ ßâÉßâáßâÿßâí ßâÑßâÿßâ¢ßâÿßâúßâáßâÿ ßâ£ßâÿßâòßâùßâÿßâößâáßâößâæßâößâæßâÿ, ßâáßâ¥ßâ¢ßâÜßâößâæßâÿßâ¬:",
        "options": [
          "Increase pain",
          "Reduce pain and produce pleasure",
          "Cause depression",
          "Slow neurons"
        ],
        "optionsKa": [
          "ßâûßâáßâôßâÿßâÉßâ£ ßâóßâÖßâÿßâòßâÿßâÜßâí",
          "ßâÉßâ¢ßâ¬ßâÿßâáßâößâæßâößâ£ ßâóßâÖßâÿßâòßâÿßâÜßâí ßâôßâÉ ßâÿßâ¼ßâòßâößâòßâößâ£ ßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâößâæßâÉßâí",
          "ßâÿßâ¼ßâòßâößâòßâößâ£ ßâôßâößâ₧ßâáßâößâíßâÿßâÉßâí",
          "ßâÉßâ£ßâößâÜßâößâæßâößâ£ ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâí"
        ],
        "correctIndex": 1,
        "explanation": "Endorphins are natural painkillers.",
        "explanationKa": "ßâößâ£ßâôßâ¥ßâáßâñßâÿßâ£ßâößâæßâÿ ßâæßâúßâ£ßâößâæßâáßâÿßâòßâÿ ßâóßâÖßâÿßâòßâÿßâÜßâÆßâÉßâ¢ßâÉßâºßâúßâ⌐ßâößâæßâÜßâößâæßâÿßâÉ.",
        "optionsRu": [
          "╨ú╨▓╨╡╨╗╨╕╤ç╨╡╨╜╨╕╨╡ ╨▒╨╛╨╗╨╕",
          "╨ú╨╝╨╡╨╜╤î╤ê╨╕╤é╨╡ ╨▒╨╛╨╗╤î ╨╕ ╨┤╨╛╤ü╤é╨░╨▓╤î╤é╨╡ ╤â╨┤╨╛╨▓╨╛╨╗╤î╤ü╤é╨▓╨╕╨╡",
          "╨Æ╤ï╨╖╨▓╨░╤é╤î ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╤Ä",
          "╨£╨╡╨┤╨╗╨╡╨╜╨╜╤ï╨╡ ╨╜╨╡╨╣╤Ç╨╛╨╜╤ï"
        ],
        "optionsHy": [
          "╘▓╒í╓Ç╒▒╓Ç╒í╓ü╒╢╒Ñ╒¼ ╓ü╒í╒╛╒¿",
          "╒å╒╛╒í╒ª╒Ñ╓ü╒╢╒Ñ╒¼ ╓ü╒í╒╛╒¿ ╓ç ╒░╒í╒│╒╕╓é╒╡╓ä ╒║╒í╒┐╒│╒í╒╝╒Ñ╒¼",
          "╘▒╒╝╒í╒╗╒í╓ü╒╢╒Ñ╒¼ ╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í",
          "╘┤╒í╒╢╒ñ╒í╒▓ ╒╢╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "A─ƒr─▒n─▒ art─▒r─▒n",
          "A─ƒr─▒lar─▒ azald─▒n v╔Ö h╔Özz al─▒n",
          "Depressiyaya s╔Öb╔Öb olmaq",
          "Yava┼ƒ neyronlar"
        ],
        "questionRu": "╨¡╨╜╨┤╨╛╤Ç╤ä╨╕╨╜╤ï ΓÇô ╤ì╤é╨╛ ╤à╨╕╨╝╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨▓╨╡╤ë╨╡╤ü╤é╨▓╨░, ╨║╨╛╤é╨╛╤Ç╤ï╨╡:",
        "explanationRu": "╨¡╨╜╨┤╨╛╤Ç╤ä╨╕╨╜╤ï ΓÇö ╨╡╤ü╤é╨╡╤ü╤é╨▓╨╡╨╜╨╜╤ï╨╡ ╨╛╨▒╨╡╨╖╨▒╨╛╨╗╨╕╨▓╨░╤Ä╤ë╨╕╨╡.",
        "explanationHy": "╘╖╒╢╒ñ╒╕╓Ç╓å╒½╒╢╒╢╒Ñ╓Ç╒¿ ╒ó╒╢╒í╒»╒í╒╢ ╓ü╒í╒╛╒í╒ª╓Ç╒»╒╕╒▓╒╢╒Ñ╓Ç ╒Ñ╒╢:",
        "questionAz": "Endorfinl╔Ör kimy╔Övi madd╔Öl╔Ördir:",
        "explanationAz": "Endorfinl╔Ör t╔Öbii a─ƒr─▒k╔Ösicil╔Ördir.",
        "questionHy": "╘╖╒╢╒ñ╒╕╓Ç╓å╒½╒╢╒╢╒Ñ╓Ç╒¿ ╓ä╒½╒┤╒½╒í╒»╒í╒╢ ╒╢╒╡╒╕╓é╒⌐╒Ñ╓Ç ╒Ñ╒╢, ╒╕╓Ç╒╕╒╢╓ä."
      },
      {
        "id": "q3-10",
        "question": "Neuroplasticity is the brain's ability to:",
        "questionKa": "ßâ£ßâößâÿßâáßâ¥ßâ₧ßâÜßâÉßâíßâóßâÿßâÖßâúßâáßâ¥ßâæßâÉ ßâÉßâáßâÿßâí ßâóßâòßâÿßâ£ßâÿßâí ßâúßâ£ßâÉßâáßâÿ:",
        "options": [
          "Remain unchanged",
          "Form new connections",
          "Only work in childhood",
          "Produce hormones"
        ],
        "optionsKa": [
          "ßâúßâ¬ßâòßâÜßâößâÜßâÿ ßâôßâÉßâáßâ⌐ßâößâí",
          "ßâÉßâ«ßâÉßâÜßâÿ ßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâÿßâí ßâ⌐ßâÉßâ¢ßâ¥ßâºßâÉßâÜßâÿßâæßâößâæßâÉ",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâæßâÉßâòßâ¿ßâòßâ¥ßâæßâÉßâ¿ßâÿ ßâ¢ßâúßâ¿ßâÉßâ¥ßâæßâÉ",
          "ßâ░ßâ¥ßâáßâ¢ßâ¥ßâ£ßâößâæßâÿßâí ßâ¼ßâÉßâáßâ¢ßâ¥ßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "The brain can form new neural connections throughout life.",
        "explanationKa": "ßâóßâòßâÿßâ£ßâí ßâ¿ßâößâúßâ½ßâÜßâÿßâÉ ßâÉßâ«ßâÉßâÜßâÿ ßâ£ßâößâÿßâáßâ¥ßâ£ßâúßâÜßâÿ ßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâÿßâí ßâ⌐ßâÉßâ¢ßâ¥ßâºßâÉßâÜßâÿßâæßâößâæßâÉ ßâ¢ßâùßâößâÜßâÿ ßâ¬ßâ«ßâ¥ßâòßâáßâößâæßâÿßâí ßâ¢ßâÉßâ£ßâ½ßâÿßâÜßâûßâö.",
        "optionsRu": [
          "╨₧╤ü╤é╨░╤é╤î╤ü╤Å ╨╜╨╡╨╕╨╖╨╝╨╡╨╜╨╜╤ï╨╝",
          "╨ñ╨╛╤Ç╨╝╨╕╤Ç╤â╨╣╤é╨╡ ╨╜╨╛╨▓╤ï╨╡ ╤ü╨▓╤Å╨╖╨╕",
          "╨á╨░╨▒╨╛╤é╨░ ╤é╨╛╨╗╤î╨║╨╛ ╨▓ ╨┤╨╡╤é╤ü╤é╨▓╨╡",
          "╨Æ╤ï╤Ç╨░╨▒╨░╤é╤ï╨▓╨░╤Ä╤é ╨│╨╛╤Ç╨╝╨╛╨╜╤ï"
        ],
        "optionsHy": [
          "╒ä╒╢╒í╓ü╒Ñ╓ä ╒í╒╢╓â╒╕╓â╒╕╒¡",
          "╒å╒╕╓Ç ╒»╒í╒║╒Ñ╓Ç ╒▒╓ç╒í╒╛╒╕╓Ç╒Ñ╓ä",
          "╘▒╒╖╒¡╒í╒┐╒Ñ╓ä ╒┤╒½╒í╒╡╒╢ ╒┤╒í╒╢╒»╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗",
          "╘▒╓Ç╒┐╒í╒ñ╓Ç╒Ñ╒¼ ╒░╒╕╓Ç╒┤╒╕╒╢╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "D╔Öyi┼ƒm╔Öd╔Ön qal─▒n",
          "Yeni ╔Ölaq╔Öl╔Ör yarad─▒n",
          "Yaln─▒z u┼ƒaql─▒qda i┼ƒl╔Öyin",
          "Hormonlar istehsal edin"
        ],
        "questionHy": "╒å╒Ñ╒╡╓Ç╒╕╒║╒¼╒í╒╜╒┐╒½╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╕╓é╒▓╒Ñ╒▓╒½ ╒»╒í╓Ç╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒º.",
        "explanationHy": "╒ê╓é╒▓╒Ñ╒▓╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º ╒╢╒╕╓Ç ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒»╒í╒║╒Ñ╓Ç ╒▒╓ç╒í╒╛╒╕╓Ç╒Ñ╒¼ ╒╕╒▓╒╗ ╒»╒╡╒í╒╢╓ä╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤:",
        "explanationRu": "╨£╨╛╨╖╨│ ╨╝╨╛╨╢╨╡╤é ╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╤é╤î ╨╜╨╛╨▓╤ï╨╡ ╨╜╨╡╨╣╤Ç╨╛╨╜╨╜╤ï╨╡ ╤ü╨▓╤Å╨╖╨╕ ╨╜╨░ ╨┐╤Ç╨╛╤é╤Å╨╢╨╡╨╜╨╕╨╕ ╨▓╤ü╨╡╨╣ ╨╢╨╕╨╖╨╜╨╕.",
        "questionRu": "╨¥╨╡╨╣╤Ç╨╛╨┐╨╗╨░╤ü╤é╨╕╤ç╨╜╨╛╤ü╤é╤î ΓÇô ╤ì╤é╨╛ ╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨╝╨╛╨╖╨│╨░:",
        "questionAz": "Neyroplastiklik beynin a┼ƒa─ƒ─▒dak─▒ qabiliyy╔Ötidir:",
        "explanationAz": "Beyin h╔Öyat boyu yeni sinir ╔Ölaq╔Öl╔Öri yarada bil╔Ör."
      }
    ],
    "titleHy": "╘┐╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒í╒»╒í╒╢ ╒░╒½╒┤╓ä╒Ñ╓Ç ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleRu": "╨æ╨╕╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨╛╤ü╨╜╨╛╨▓╤ï ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleAz": "Bioloji ╔Ösaslar - Viktorina"
  },
  {
    "id": "ch4-quiz",
    "chapterId": 4,
    "title": "Sensation and Perception ΓÇö Quiz",
    "titleKa": "ßâ¿ßâößâÆßâáßâ½ßâ£ßâößâæßâÉ ßâôßâÉ ßâÉßâªßâÑßâ¢ßâÉ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q4-1",
        "question": "Minimum stimulation detected 50% of the time:",
        "questionKa": "ßâ¢ßâÿßâ£ßâÿßâ¢ßâÉßâÜßâúßâáßâÿ ßâíßâóßâÿßâ¢ßâúßâÜßâÉßâ¬ßâÿßâÉ, ßâáßâ¥ßâ¢ßâößâÜßâÿßâ¬ ßâÉßâªßâ¢ßâ¥ßâ⌐ßâößâ£ßâÿßâÜßâÿßâÉ ßâôßâáßâ¥ßâÿßâí 50%-ßâ¿ßâÿ:",
        "options": [
          "Difference threshold",
          "Absolute threshold",
          "Signal detection",
          "Weber's law"
        ],
        "optionsKa": [
          "ßâÆßâÉßâ£ßâíßâ«ßâòßâÉßâòßâößâæßâÿßâí ßâûßâªßâòßâÉßâáßâÿ",
          "ßâÉßâæßâíßâ¥ßâÜßâúßâóßâúßâáßâÿ ßâûßâªßâòßâÉßâáßâÿ",
          "ßâíßâÿßâÆßâ£ßâÉßâÜßâÿßâí ßâÉßâªßâ¢ßâ¥ßâ⌐ßâößâ£ßâÉ",
          "ßâòßâößâæßâößâáßâÿßâí ßâÖßâÉßâ£ßâ¥ßâ£ßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Absolute threshold: minimum detected 50% of the time.",
        "explanationKa": "ßâÉßâæßâíßâ¥ßâÜßâúßâóßâúßâáßâÿ ßâûßâªßâòßâÉßâáßâÿ: ßâ¢ßâÿßâ£ßâÿßâ¢ßâÉßâÜßâúßâáßâÿ ßâíßâóßâÿßâ¢ßâúßâÜßâÉßâ¬ßâÿßâÉ, ßâÉßâªßâ¢ßâ¥ßâ⌐ßâößâ£ßâÿßâÜßâÿ ßâôßâáßâ¥ßâÿßâí 50%-ßâ¿ßâÿ.",
        "optionsRu": [
          "╨ƒ╨╛╤Ç╨╛╨│ ╤Ç╨░╨╖╨╜╨╕╤å╤ï",
          "╨É╨▒╤ü╨╛╨╗╤Ä╤é╨╜╤ï╨╣ ╨┐╨╛╤Ç╨╛╨│",
          "╨₧╨▒╨╜╨░╤Ç╤â╨╢╨╡╨╜╨╕╨╡ ╤ü╨╕╨│╨╜╨░╨╗╨░",
          "╨╖╨░╨║╨╛╨╜ ╨Æ╨╡╨▒╨╡╤Ç╨░"
        ],
        "optionsHy": [
          "╒Å╒í╓Ç╒ó╒Ñ╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒╖╒Ñ╒┤",
          "╘▓╒í╓ü╒í╓Ç╒▒╒í╒» ╒╖╒Ñ╒┤",
          "╘▒╒ª╒ñ╒í╒╢╒╖╒í╒╢╒½ ╒░╒í╒╡╒┐╒╢╒í╒ó╒Ñ╓Ç╒╕╓é╒┤",
          "╒Ä╒Ñ╒ó╒Ñ╓Ç╒½ ╓à╓Ç╒Ñ╒╢╓ä╒¿"
        ],
        "optionsAz": [
          "F╔Örq h╔Öddi",
          "M├╝tl╔Öq h╔Öddi",
          "Siqnal a┼ƒkarlanmas─▒",
          "Veber qanunu"
        ],
        "questionHy": "╒å╒╛╒í╒ª╒í╒ú╒╕╓é╒╡╒╢ ╒¡╒⌐╒í╒╢╒╕╓é╒┤╒¿ ╒░╒í╒╡╒┐╒╢╒í╒ó╒Ñ╓Ç╒╛╒í╒« ╒¬╒í╒┤╒í╒╢╒í╒»╒½ 50% -╒╕╓é╒┤.",
        "questionRu": "╨£╨╕╨╜╨╕╨╝╨░╨╗╤î╨╜╨░╤Å ╤ü╤é╨╕╨╝╤â╨╗╤Å╤å╨╕╤Å ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╕╨▓╨░╨╡╤é╤ü╤Å ╨▓ 50% ╤ü╨╗╤â╤ç╨░╨╡╨▓:",
        "explanationRu": "╨É╨▒╤ü╨╛╨╗╤Ä╤é╨╜╤ï╨╣ ╨┐╨╛╤Ç╨╛╨│: ╨╝╨╕╨╜╨╕╨╝╤â╨╝ ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╕╨▓╨░╨╡╤é╤ü╤Å ╨▓ 50% ╤ü╨╗╤â╤ç╨░╨╡╨▓.",
        "explanationHy": "╘▓╒í╓ü╒í╓Ç╒▒╒í╒» ╒╖╒Ñ╒┤. ╒╢╒╛╒í╒ª╒í╒ú╒╕╓é╒╡╒╢╒¿ ╒░╒í╒╡╒┐╒╢╒í╒ó╒Ñ╓Ç╒╛╒í╒« ╒º ╒¬╒í╒┤╒í╒╢╒í╒»╒½ 50%-╒╕╓é╒┤:",
        "questionAz": "Minimum stimulla┼ƒd─▒rma zaman─▒n 50% -d╔Ö a┼ƒkar edilir:",
        "explanationAz": "M├╝tl╔Öq h╔Öddi: minimum zaman─▒n 50% a┼ƒkar edilir."
      },
      {
        "id": "q4-2",
        "question": "Which Gestalt principle groups nearby objects?",
        "questionKa": "ßâÆßâößâ¿ßâóßâÉßâÜßâóßâÿßâí ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿ ßâÉßâ»ßâÆßâúßâñßâößâæßâí ßâÉßâ«ßâÜßâ¥ßâ¢ßâôßâößâæßâÉßâáßâö ßâ¥ßâæßâÿßâößâÑßâóßâößâæßâí?",
        "options": [
          "Similarity",
          "Proximity",
          "Closure",
          "Continuity"
        ],
        "optionsKa": [
          "ßâ¢ßâíßâÆßâÉßâòßâíßâößâæßâÉ",
          "ßâíßâÿßâÉßâ«ßâÜßâ¥ßâòßâö",
          "ßâôßâÉßâ«ßâúßâáßâúßâÜßâ¥ßâæßâÉ",
          "ßâúßâ¼ßâºßâòßâößâóßâ¥ßâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Proximity: nearby objects are grouped.",
        "explanationKa": "ßâíßâÿßâÉßâ«ßâÜßâ¥ßâòßâö: ßâÉßâ«ßâÜßâ¥ßâ¢ßâôßâößâæßâÉßâáßâö ßâ¥ßâæßâÿßâößâÑßâóßâößâæßâÿ ßâ»ßâÆßâúßâñßâôßâößâæßâÉ.",
        "optionsRu": [
          "╨í╤à╨╛╨┤╤ü╤é╨▓╨╛",
          "╨æ╨╗╨╕╨╖╨╛╤ü╤é╤î",
          "╨ù╨░╨║╤Ç╤ï╤é╨╕╨╡",
          "╨¥╨╡╨┐╤Ç╨╡╤Ç╤ï╨▓╨╜╨╛╤ü╤é╤î"
        ],
        "optionsHy": [
          "╒å╒┤╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒Ç╒í╓Ç╓ç╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ô╒í╒»╒╕╓é╒┤",
          "╒ç╒í╓Ç╒╕╓é╒╢╒í╒»╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Ox┼ƒarl─▒q",
          "Yax─▒nl─▒q",
          "Ba─ƒlanma",
          "Davaml─▒l─▒q"
        ],
        "explanationRu": "╨æ╨╗╨╕╨╖╨╛╤ü╤é╤î: ╨▒╨╗╨╕╨╖╨╗╨╡╨╢╨░╤ë╨╕╨╡ ╨╛╨▒╤è╨╡╨║╤é╤ï ╨│╤Ç╤â╨┐╨┐╨╕╤Ç╤â╤Ä╤é╤ü╤Å.",
        "questionRu": "╨Ü╨░╨║╨╛╨╣ ╨┐╤Ç╨╕╨╜╤å╨╕╨┐ ╨│╨╡╤ê╤é╨░╨╗╤î╤é╨░ ╨│╤Ç╤â╨┐╨┐╨╕╤Ç╤â╨╡╤é ╨▒╨╗╨╕╨╖╨╗╨╡╨╢╨░╤ë╨╕╨╡ ╨╛╨▒╤è╨╡╨║╤é╤ï?",
        "explanationHy": "╒Ç╒í╓Ç╓ç╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢. ╒┤╒╕╒┐╒í╒»╒í ╓à╒ó╒╡╒Ñ╒»╒┐╒╢╒Ñ╓Ç╒¿ ╒¡╒┤╒ó╒í╒╛╒╕╓Ç╒╛╒í╒« ╒Ñ╒╢:",
        "questionHy": "╘│╒Ñ╒╖╒┐╒í╒¼╒┐╒½ ╒╕╒₧╓Ç ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä╒╢ ╒º ╒¡╒┤╒ó╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒┤╒╕╒┐╒í╒»╒í ╓à╒ó╒╡╒Ñ╒»╒┐╒╢╒Ñ╓Ç╒¿:",
        "questionAz": "Hans─▒ Gestalt prinsipi yax─▒nl─▒qdak─▒ obyektl╔Öri qrupla┼ƒd─▒r─▒r?",
        "explanationAz": "Yax─▒nl─▒q: yax─▒nl─▒qdak─▒ obyektl╔Ör qrupla┼ƒd─▒r─▒l─▒b."
      },
      {
        "id": "q4-3",
        "question": "Rods in the retina are for:",
        "questionKa": "ßâæßâÉßâôßâúßâáßâÿßâí ßâ⌐ßâ«ßâÿßâáßâößâæßâÿ ßâÆßâÉßâ£ßâÖßâúßâùßâòßâ£ßâÿßâÜßâÿßâÉ:",
        "options": [
          "Color vision",
          "Dim light vision",
          "Detail focus",
          "Depth perception"
        ],
        "optionsKa": [
          "ßâñßâößâáßâùßâÉ ßâ¢ßâ«ßâößâôßâòßâößâÜßâ¥ßâæßâÿßâíßâùßâòßâÿßâí",
          "ßâíßâúßâíßâó ßâ¿ßâúßâÑßâ¿ßâÿ ßâ«ßâößâôßâòßâÿßâíßâùßâòßâÿßâí",
          "ßâôßâößâóßâÉßâÜßâößâæßâÿßâí ßâñßâ¥ßâÖßâúßâíßâÿßâáßâößâæßâÿßâíßâùßâòßâÿßâí",
          "ßâíßâÿßâªßâáßâ¢ßâÿßâí ßâÉßâªßâÑßâ¢ßâÿßâíßâùßâòßâÿßâí"
        ],
        "correctIndex": 1,
        "explanation": "Rods function in dim light.",
        "explanationKa": "ßâ⌐ßâ«ßâÿßâáßâößâæßâÿ ßâñßâúßâ£ßâÑßâ¬ßâÿßâ¥ßâ£ßâÿßâáßâößâæßâößâ£ ßâíßâúßâíßâó ßâ¿ßâúßâÑßâ¿ßâÿ.",
        "optionsRu": [
          "╨ª╨▓╨╡╤é╨╛╨▓╨╛╨╡ ╨╖╤Ç╨╡╨╜╨╕╨╡",
          "╨ó╤â╤ü╨║╨╗╨╛╨╡ ╨╖╤Ç╨╡╨╜╨╕╨╡",
          "╨ö╨╡╤é╨░╨╗╤î╨╜╤ï╨╣ ╤ä╨╛╨║╤â╤ü",
          "╨Æ╨╛╤ü╨┐╤Ç╨╕╤Å╤é╨╕╨╡ ╨│╨╗╤â╨▒╨╕╨╜╤ï"
        ],
        "optionsHy": [
          "╘│╒╕╓é╒╢╒í╒╛╒╕╓Ç ╒┐╒Ñ╒╜╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘╣╒╕╓é╒╡╒¼ ╒¼╒╕╓é╒╡╒╜╒½ ╒┐╒Ñ╒╜╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╒í╒╢╓Ç╒í╒┤╒í╒╜╒╢╒Ñ╓Ç╒½ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒╕╓é╒┤",
          "╘╜╒╕╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒¿╒╢╒»╒í╒¼╒╕╓é╒┤"
        ],
        "optionsAz": [
          "R╔Öng g├╢rm╔Ö",
          "Z╔Öif i┼ƒ─▒q g├╢rm╔Ö",
          "Detallara diqq╔Öt",
          "D╔Örinlik qavray─▒┼ƒ─▒"
        ],
        "explanationHy": "╒ü╒╕╒▓╒Ñ╓Ç╒¿ ╒ú╒╕╓Ç╒«╒╕╓é╒┤ ╒Ñ╒╢ ╒í╒▓╒╕╒┐ ╒¼╒╕╓é╒╡╒╜╒½ ╒╢╒Ñ╓Ç╓ä╒╕:",
        "questionHy": "╒æ╒í╒╢╓ü╒í╒⌐╒í╒▓╒í╒╢╒⌐╒½ ╒▒╒╕╒▓╒Ñ╓Ç╒¿ ╒╢╒í╒¡╒í╒┐╒Ñ╒╜╒╛╒í╒« ╒Ñ╒╢.",
        "questionRu": "╨ƒ╨░╨╗╨╛╤ç╨║╨╕ ╨▓ ╤ü╨╡╤é╤ç╨░╤é╨║╨╡ ╨┐╤Ç╨╡╨┤╨╜╨░╨╖╨╜╨░╤ç╨╡╨╜╤ï ╨┤╨╗╤Å:",
        "explanationRu": "╨ƒ╨░╨╗╨╛╤ç╨║╨╕ ╤ä╤â╨╜╨║╤å╨╕╨╛╨╜╨╕╤Ç╤â╤Ä╤é ╨┐╤Ç╨╕ ╤é╤â╤ü╨║╨╗╨╛╨╝ ╤ü╨▓╨╡╤é╨╡.",
        "questionAz": "Retinada olan ├ºubuqlar a┼ƒa─ƒ─▒dak─▒lar ├╝├º├╝nd├╝r:",
        "explanationAz": "├çubuqlar z╔Öif i┼ƒ─▒qda i┼ƒl╔Öyir."
      },
      {
        "id": "q4-4",
        "question": "Converting stimuli to neural signals is:",
        "questionKa": "ßâíßâóßâÿßâ¢ßâúßâÜßâößâæßâÿßâí ßâ£ßâößâáßâòßâúßâÜ ßâíßâÿßâÆßâ£ßâÉßâÜßâößâæßâÉßâô ßâÆßâÉßâáßâôßâÉßâÑßâ¢ßâ£ßâÉ ßâÉßâáßâÿßâí:",
        "options": [
          "Perception",
          "Transduction",
          "Accommodation",
          "Adaptation"
        ],
        "optionsKa": [
          "ßâÉßâªßâÑßâ¢ßâÉ",
          "ßâóßâáßâÉßâ£ßâíßâôßâúßâÑßâ¬ßâÿßâÉ",
          "ßâÉßâÖßâ¥ßâ¢ßâ¥ßâôßâÉßâ¬ßâÿßâÉ",
          "ßâÉßâôßâÉßâ₧ßâóßâÉßâ¬ßâÿßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Transduction converts physical energy to signals.",
        "explanationKa": "ßâóßâáßâÉßâ£ßâíßâôßâúßâÑßâ¬ßâÿßâÉ ßâÆßâÉßâáßâôßâÉßâÑßâ¢ßâ£ßâÿßâí ßâñßâÿßâûßâÿßâÖßâúßâá ßâößâ£ßâößâáßâÆßâÿßâÉßâí ßâíßâÿßâÆßâ£ßâÉßâÜßâößâæßâÉßâô.",
        "optionsRu": [
          "╨Æ╨╛╤ü╨┐╤Ç╨╕╤Å╤é╨╕╨╡",
          "╨ó╤Ç╨░╨╜╤ü╨┤╤â╨║╤å╨╕╤Å",
          "╨á╨░╨╖╨╝╨╡╤ë╨╡╨╜╨╕╨╡",
          "╨ƒ╤Ç╨╕╤ü╨┐╨╛╤ü╨╛╨▒╨╗╨╡╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╘╕╒╢╒»╒í╒¼╒╕╓é╒┤",
          "╒ô╒╕╒¡╒í╒╢╓ü╒╕╓é╒┤",
          "╒Å╒Ñ╒▓╒í╒╛╒╕╓Ç╒╕╓é╒┤",
          "╒Ç╒í╓Ç╒┤╒í╓Ç╒╛╒╕╒▓╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Qavrama",
          "Transduksiya",
          "Yerl╔Ö┼ƒdirm╔Ö",
          "Uy─ƒunla┼ƒma"
        ],
        "explanationHy": "╒ô╒╕╒¡╒í╒»╒Ñ╓Ç╒║╒╕╓é╒┤╒¿ ╓å╒½╒ª╒½╒»╒í╒»╒í╒╢ ╒º╒╢╒Ñ╓Ç╒ú╒½╒í╒╢ ╓â╒╕╒¡╒í╒»╒Ñ╓Ç╒║╒╕╓é╒┤ ╒º ╒í╒ª╒ñ╒í╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç╒½:",
        "questionHy": "╘│╓Ç╒ú╒╝╒½╒╣╒╢╒Ñ╓Ç╒¿ ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒í╒ª╒ñ╒í╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç╒½ ╒╛╒Ñ╓Ç╒í╒«╒Ñ╒¼╒¿ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "explanationRu": "╨ó╤Ç╨░╨╜╤ü╨┤╤â╨║╤å╨╕╤Å ╨┐╤Ç╨╡╨╛╨▒╤Ç╨░╨╖╤â╨╡╤é ╤ä╨╕╨╖╨╕╤ç╨╡╤ü╨║╤â╤Ä ╤ì╨╜╨╡╤Ç╨│╨╕╤Ä ╨▓ ╤ü╨╕╨│╨╜╨░╨╗╤ï.",
        "questionRu": "╨ƒ╤Ç╨╡╨╛╨▒╤Ç╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡ ╤ü╤é╨╕╨╝╤â╨╗╨╛╨▓ ╨▓ ╨╜╨╡╨╣╤Ç╨╛╨╜╨╜╤ï╨╡ ╤ü╨╕╨│╨╜╨░╨╗╤ï ΓÇô ╤ì╤é╨╛:",
        "explanationAz": "Transduksiya fiziki enerjini siqnallara ├ºevirir.",
        "questionAz": "Stimullar─▒n sinir siqnallar─▒na ├ºevrilm╔Ösi:"
      },
      {
        "id": "q4-5",
        "question": "Sound frequency determines:",
        "questionKa": "ßâ«ßâ¢ßâÿßâí ßâíßâÿßâ«ßâ¿ßâÿßâáßâö ßâÆßâÉßâ£ßâíßâÉßâûßâªßâòßâáßâÉßâòßâí:",
        "options": [
          "Loudness",
          "Pitch",
          "Timbre",
          "Duration"
        ],
        "optionsKa": [
          "ßâ«ßâ¢ßâÉßâ¢ßâÉßâªßâÜßâ¥ßâæßâÉßâí",
          "ßâóßâ¥ßâ£ßâÉßâÜßâ¥ßâæßâÉßâí",
          "ßâóßâößâ¢ßâæßâáßâí",
          "ßâ«ßâÉßâ£ßâÆßâáßâ½ßâÜßâÿßâòßâ¥ßâæßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Frequency determines pitch.",
        "explanationKa": "ßâíßâÿßâ«ßâ¿ßâÿßâáßâö ßâÆßâÉßâ£ßâíßâÉßâûßâªßâòßâáßâÉßâòßâí ßâóßâ¥ßâ£ßâÉßâÜßâ¥ßâæßâÉßâí.",
        "optionsRu": [
          "╨ô╤Ç╨╛╨╝╨║╨╛╤ü╤é╤î",
          "╨ƒ╨╛╨┤╨░╤ç╨░",
          "╨ó╨╡╨╝╨▒╤Ç",
          "╨ƒ╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╤î"
        ],
        "optionsHy": [
          "╘▓╒í╓Ç╒▒╓Ç╒í╒▒╒í╒╡╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒╜╒»╒½╒║╒½╒ñ╒í╓Ç",
          "╒Å╒Ñ╒┤╒ó╓Ç",
          "╒Å╓ç╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿"
        ],
        "optionsAz": [
          "S╔Ös ucal─▒─ƒ─▒",
          "Pitch",
          "tembr",
          "M├╝dd╔Öt"
        ],
        "questionHy": "╒ü╒í╒╡╒╢╒½ ╒░╒í╒│╒í╒¡╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╕╓Ç╒╕╒╖╒╕╓é╒┤ ╒º.",
        "explanationHy": "╒Ç╒í╒│╒í╒¡╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╕╓Ç╒╕╒╖╒╕╓é╒┤ ╒º ╒ó╒í╓Ç╒▒╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
        "questionRu": "╨º╨░╤ü╤é╨╛╤é╨░ ╨╖╨▓╤â╨║╨░ ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╨╡╤é:",
        "explanationRu": "╨º╨░╤ü╤é╨╛╤é╨░ ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╨╡╤é ╨▓╤ï╤ü╨╛╤é╤â ╨╖╨▓╤â╨║╨░.",
        "questionAz": "S╔Ös tezliyi m├╝╔Öyy╔Ön edir:",
        "explanationAz": "Tezlik s╔Ösi m├╝╔Öyy╔Önl╔Ö┼ƒdirir."
      },
      {
        "id": "q4-6",
        "question": "The blind spot exists because:",
        "questionKa": "ßâæßâáßâ¢ßâÉ ßâÜßâÉßâÑßâÉ ßâÉßâáßâíßâößâæßâ¥ßâæßâí, ßâáßâÉßâôßâÆßâÉßâ£:",
        "options": [
          "No cones there",
          "No receptors where optic nerve exits",
          "Imperfect lens",
          "Light damage"
        ],
        "optionsKa": [
          "ßâÿßâÑ ßâÖßâ¥ßâ£ßâúßâíßâößâæßâÿ ßâÉßâá ßâÉßâáßâÿßâí",
          "ßâÉßâá ßâÉßâáßâÿßâí ßâáßâößâ¬ßâößâ₧ßâóßâ¥ßâáßâößâæßâÿ ßâ¢ßâ«ßâößâôßâòßâößâÜßâ¥ßâæßâÿßâí ßâ£ßâößâáßâòßâÿßâí ßâÆßâÉßâ¢ßâ¥ßâíßâòßâÜßâÿßâí ßâÉßâôßâÆßâÿßâÜßâÉßâí",
          "ßâÉßâáßâÉßâíßâáßâúßâÜßâºßâ¥ßâñßâÿßâÜßâÿ ßâÜßâÿßâ£ßâûßâÉ",
          "ßâíßâÿßâ£ßâÉßâùßâÜßâÿßâí ßâôßâÉßâûßâÿßâÉßâ£ßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "No receptors where the optic nerve exits.",
        "explanationKa": "ßâÉßâá ßâÉßâáßâÿßâí ßâáßâößâ¬ßâößâ₧ßâóßâ¥ßâáßâößâæßâÿ ßâÿßâÑ, ßâíßâÉßâôßâÉßâ¬ ßâ¢ßâ«ßâößâôßâòßâößâÜßâ¥ßâæßâÿßâí ßâ£ßâößâáßâòßâÿ ßâÆßâÉßâ¢ßâ¥ßâôßâÿßâí.",
        "optionsRu": [
          "╨¥╨╕╨║╨░╨║╨╕╤à ╨║╨╛╨╜╤â╤ü╨╛╨▓ ╤é╨░╨╝ ╨╜╨╡╤é",
          "╨¥╨╡╤é ╤Ç╨╡╤å╨╡╨┐╤é╨╛╤Ç╨╛╨▓ ╨▓ ╨╝╨╡╤ü╤é╨░╤à ╨▓╤ï╤à╨╛╨┤╨░ ╨╖╤Ç╨╕╤é╨╡╨╗╤î╨╜╨╛╨│╨╛ ╨╜╨╡╤Ç╨▓╨░.",
          "╨¥╨╡╤ü╨╛╨▓╨╡╤Ç╤ê╨╡╨╜╨╜╨░╤Å ╨╗╨╕╨╜╨╖╨░",
          "╨¢╨╡╨│╨║╨╕╨╣ ╤â╤Ç╨╛╨╜"
        ],
        "optionsHy": [
          "╘▒╒╡╒╢╒┐╒Ñ╒▓ ╒»╒╕╒╢╒╢╒Ñ╓Ç ╒╣╒»╒í╒╢",
          "╒ë╒»╒í╒╢ ╒¿╒╢╒»╒í╒¼╒½╒╣╒╢╒Ñ╓Ç, ╒╕╓Ç╒┐╒Ñ╒▓╒½╓ü ╓à╒║╒┐╒½╒»╒í╒»╒í╒╢ ╒╢╒╡╒í╓Ç╒ñ╒¿ ╒ñ╒╕╓é╓Ç╒╜ ╒º ╒ú╒í╒¼╒½╒╜",
          "╘▒╒╢╒»╒í╒┐╒í╓Ç ╒╕╒╜╒║╒╢╒╡╒í╒»",
          "╘╣╒Ñ╒⌐╓ç ╒╛╒╢╒í╒╜"
        ],
        "optionsAz": [
          "Orada konus yoxdur",
          "Optik sinirin ├º─▒xd─▒─ƒ─▒ yerd╔Ö reseptorlar yoxdur",
          "Q├╝sursuz lens",
          "Y├╝ng├╝l ziyan"
        ],
        "questionRu": "╨í╨╗╨╡╨┐╨╛╨╡ ╨┐╤Å╤é╨╜╨╛ ╤ü╤â╤ë╨╡╤ü╤é╨▓╤â╨╡╤é ╨┐╨╛╤é╨╛╨╝╤â, ╤ç╤é╨╛:",
        "explanationRu": "╨¥╨╕╨║╨░╨║╨╕╤à ╤Ç╨╡╤å╨╡╨┐╤é╨╛╤Ç╨╛╨▓ ╤é╨░╨╝, ╨│╨┤╨╡ ╨▓╤ï╤à╨╛╨┤╨╕╤é ╨╖╤Ç╨╕╤é╨╡╨╗╤î╨╜╤ï╨╣ ╨╜╨╡╤Ç╨▓.",
        "questionHy": "╘┐╒╕╓é╒╡╓Ç ╒»╒Ñ╒┐╒¿ ╒ú╒╕╒╡╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╕╓é╒╢╒½, ╓ä╒í╒╢╒½ ╒╕╓Ç.",
        "explanationHy": "╒ë╒»╒í╒╢ ╒¿╒╢╒»╒í╒¼╒½╒╣╒╢╒Ñ╓Ç, ╒╕╓Ç╒┐╒Ñ╒▓╒½╓ü ╓à╒║╒┐╒½╒»╒í╒»╒í╒╢ ╒╢╒╡╒í╓Ç╒ñ╒¿ ╒ñ╒╕╓é╓Ç╒╜ ╒º ╒ú╒í╒¼╒½╒╜:",
        "explanationAz": "Optik sinirin ├º─▒xd─▒─ƒ─▒ yerd╔Ö reseptorlar yoxdur.",
        "questionAz": "Kor n├╢qt╔Ö ona g├╢r╔Ö yaran─▒r:"
      },
      {
        "id": "q4-7",
        "question": "Top-down processing is guided by:",
        "questionKa": "ßâûßâößâ¢ßâ¥ßâôßâÉßâ£-ßâÑßâòßâößâ¢ßâ¥ßâù ßâôßâÉßâ¢ßâúßâ¿ßâÉßâòßâößâæßâÉ ßâ«ßâößâÜßâ¢ßâ½ßâªßâòßâÉßâ£ßâößâÜßâ¥ßâæßâí:",
        "options": [
          "Raw sensory data",
          "Expectations and prior knowledge",
          "Stimulus intensity",
          "Receptor cells"
        ],
        "optionsKa": [
          "ßâ£ßâößâôßâÜßâÿ ßâíßâößâ£ßâíßâ¥ßâáßâúßâÜßâÿ ßâ¢ßâ¥ßâ£ßâÉßâ¬ßâößâ¢ßâößâæßâÿßâù",
          "ßâ¢ßâ¥ßâÜßâ¥ßâôßâÿßâ£ßâößâæßâÿßâùßâÉ ßâôßâÉ ßâ¼ßâÿßâ£ßâÉßâáßâö ßâ¬ßâ¥ßâôßâ£ßâÿßâù",
          "ßâíßâóßâÿßâ¢ßâúßâÜßâÿßâí ßâÿßâ£ßâóßâößâ£ßâíßâÿßâòßâ¥ßâæßâÿßâù",
          "ßâáßâößâ¬ßâößâ₧ßâóßâ¥ßâáßâúßâÜßâÿ ßâúßâ»ßâáßâößâôßâößâæßâÿßâù"
        ],
        "correctIndex": 1,
        "explanation": "Experience and knowledge guide top-down processing.",
        "explanationKa": "ßâÆßâÉßâ¢ßâ¥ßâ¬ßâôßâÿßâÜßâößâæßâÉ ßâôßâÉ ßâ¬ßâ¥ßâôßâ£ßâÉ ßâ«ßâößâÜßâ¢ßâ½ßâªßâòßâÉßâ£ßâößâÜßâ¥ßâæßâí ßâûßâößâ¢ßâ¥ßâôßâÉßâ£-ßâÑßâòßâößâ¢ßâ¥ßâù ßâôßâÉßâ¢ßâúßâ¿ßâÉßâòßâößâæßâÉßâí.",
        "optionsRu": [
          "╨¥╨╡╨╛╨▒╤Ç╨░╨▒╨╛╤é╨░╨╜╨╜╤ï╨╡ ╤ü╨╡╨╜╤ü╨╛╤Ç╨╜╤ï╨╡ ╨┤╨░╨╜╨╜╤ï╨╡",
          "╨₧╨╢╨╕╨┤╨░╨╜╨╕╤Å ╨╕ ╨┐╤Ç╨╡╨┤╨▓╨░╤Ç╨╕╤é╨╡╨╗╤î╨╜╤ï╨╡ ╨╖╨╜╨░╨╜╨╕╤Å",
          "╨ÿ╨╜╤é╨╡╨╜╤ü╨╕╨▓╨╜╨╛╤ü╤é╤î ╤ü╤é╨╕╨╝╤â╨╗╨░",
          "╨á╨╡╤å╨╡╨┐╤é╨╛╤Ç╨╜╤ï╨╡ ╨║╨╗╨╡╤é╨║╨╕"
        ],
        "optionsHy": [
          "╒Ç╒╕╓é╒┤ ╒ª╒ú╒í╒╡╒í╒»╒í╒╢ ╒┐╒╛╒╡╒í╒¼╒╢╒Ñ╓Ç",
          "╘▒╒»╒╢╒»╒í╒¼╒½╓ä╒╢╒Ñ╓Ç ╓ç ╒╢╒í╒¡╒╢╒í╒»╒í╒╢ ╒ú╒½╒┐╒Ñ╒¼╒½╓ä╒╢╒Ñ╓Ç",
          "╘╜╒⌐╒í╒╢╒½ ╒½╒╢╒┐╒Ñ╒╢╒╜╒½╒╛╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╘╕╒╢╒ñ╒╕╓é╒╢╒½╒╣ ╒ó╒╗╒½╒╗╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "Xam sensor m╔Ölumat",
          "G├╢zl╔Öntil╔Ör v╔Ö ╔Övv╔Ölki bilikl╔Ör",
          "Stimulun intensivliyi",
          "Reseptor h├╝ceyr╔Öl╔Öri"
        ],
        "explanationRu": "╨₧╨┐╤ï╤é ╨╕ ╨╖╨╜╨░╨╜╨╕╤Å ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╤Ä╤é ╨╛╨▒╤Ç╨░╨▒╨╛╤é╨║╤â ╤ü╨▓╨╡╤Ç╤à╤â ╨▓╨╜╨╕╨╖.",
        "questionHy": "╒Ä╒Ñ╓Ç╓ç╒½╓ü ╒╛╒í╓Ç ╒┤╒╖╒í╒»╒╕╓é╒┤╒╢ ╒í╒╝╒í╒╗╒╢╒╕╓Ç╒ñ╒╛╒╕╓é╒┤ ╒º ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╕╒╛.",
        "questionRu": "╨₧╨▒╤Ç╨░╨▒╨╛╤é╨║╨░ ╤ü╨▓╨╡╤Ç╤à╤â ╨▓╨╜╨╕╨╖ ╤Ç╤â╨║╨╛╨▓╨╛╨┤╤ü╤é╨▓╤â╨╡╤é╤ü╤Å:",
        "explanationHy": "╒ô╒╕╓Ç╒▒╒¿ ╓ç ╒ú╒½╒┐╒Ñ╒¼╒½╓ä╒╢╒Ñ╓Ç╒¿ ╒╕╓é╒▓╒▓╒╕╓Ç╒ñ╒╕╓é╒┤ ╒Ñ╒╢ ╒╛╒Ñ╓Ç╓ç╒½╓ü ╒╛╒í╓Ç ╒┤╒╖╒í╒»╒╕╓é╒┤:",
        "explanationAz": "T╔Öcr├╝b╔Ö v╔Ö bilik yuxar─▒dan a┼ƒa─ƒ─▒ya emal b╔Öl╔Öd├ºisidir.",
        "questionAz": "Yuxar─▒dan a┼ƒa─ƒ─▒ya emal a┼ƒa─ƒ─▒dak─▒larla idar╔Ö olunur:"
      },
      {
        "id": "q4-8",
        "question": "Sensory adaptation is:",
        "questionKa": "ßâíßâößâ£ßâíßâ¥ßâáßâúßâÜßâÿ ßâÉßâôßâÉßâ₧ßâóßâÉßâ¬ßâÿßâÉ ßâÉßâáßâÿßâí:",
        "options": [
          "Learning new skills",
          "Decreased sensitivity to constant stimulus",
          "Increased pain",
          "Improved vision"
        ],
        "optionsKa": [
          "ßâÉßâ«ßâÉßâÜßâÿ ßâúßâ£ßâÉßâáßâößâæßâÿßâí ßâ¿ßâößâíßâ¼ßâÉßâòßâÜßâÉ",
          "ßâ¢ßâúßâôßâ¢ßâÿßâò ßâíßâóßâÿßâ¢ßâúßâÜßâûßâö ßâ¢ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâÜßâ¥ßâæßâÿßâí ßâôßâÉßâÑßâòßâößâÿßâùßâößâæßâÉ",
          "ßâóßâÖßâÿßâòßâÿßâÜßâÿßâí ßâÆßâÉßâ½ßâÜßâÿßâößâáßâößâæßâÉ",
          "ßâ¢ßâ«ßâößâôßâòßâößâÜßâ¥ßâæßâÿßâí ßâÆßâÉßâúßâ¢ßâ»ßâ¥ßâæßâößâíßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Reduced sensitivity to unchanging stimuli.",
        "explanationKa": "ßâ¿ßâößâ¢ßâ¬ßâÿßâáßâößâæßâúßâÜßâÿ ßâ¢ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâÜßâ¥ßâæßâÉ ßâúßâ¬ßâòßâÜßâößâÜ ßâíßâóßâÿßâ¢ßâúßâÜßâößâæßâûßâö.",
        "optionsRu": [
          "╨₧╨▒╤â╤ç╨╡╨╜╨╕╨╡ ╨╜╨╛╨▓╤ï╨╝ ╨╜╨░╨▓╤ï╨║╨░╨╝",
          "╨í╨╜╨╕╨╢╨╡╨╜╨╕╨╡ ╤ç╤â╨▓╤ü╤é╨▓╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╨╕ ╨║ ╨┐╨╛╤ü╤é╨╛╤Å╨╜╨╜╤ï╨╝ ╤Ç╨░╨╖╨┤╤Ç╨░╨╢╨╕╤é╨╡╨╗╤Å╨╝.",
          "╨ú╤ü╨╕╨╗╨╡╨╜╨╕╨╡ ╨▒╨╛╨╗╨╕",
          "╨ú╨╗╤â╤ç╤ê╨╡╨╜╨╜╨╛╨╡ ╨╖╤Ç╨╡╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╒å╒╕╓Ç ╒░╒┤╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼╒¿",
          "╒ä╒╖╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒¡╒⌐╒í╒╢╒╢╒Ñ╓Ç╒½ ╒╢╒»╒í╒┐╒┤╒í╒┤╒ó ╒ª╒ú╒í╒╡╒╕╓é╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╢╒╛╒í╒ª╒╕╓é╒┤",
          "╘▒╒│╒╕╒▓ ╓ü╒í╒╛",
          "╘▓╒í╓Ç╒Ñ╒¼╒í╒╛╒╛╒í╒« ╒┐╒Ñ╒╜╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Yeni bacar─▒qlar─▒n ├╢yr╔Önilm╔Ösi",
          "Daimi stimullara h╔Össasl─▒─ƒ─▒n azalmas─▒",
          "Artan a─ƒr─▒",
          "T╔Ökmill╔Ö┼ƒdirilmi┼ƒ g├╢rm╔Ö"
        ],
        "questionRu": "╨í╨╡╨╜╤ü╨╛╤Ç╨╜╨░╤Å ╨░╨┤╨░╨┐╤é╨░╤å╨╕╤Å ΓÇô ╤ì╤é╨╛:",
        "explanationRu": "╨í╨╜╨╕╨╢╨╡╨╜╨╕╨╡ ╤ç╤â╨▓╤ü╤é╨▓╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╨╕ ╨║ ╨╜╨╡╨╕╨╖╨╝╨╡╨╜╨╜╤ï╨╝ ╤Ç╨░╨╖╨┤╤Ç╨░╨╢╨╕╤é╨╡╨╗╤Å╨╝.",
        "explanationHy": "╒å╒╛╒í╒ª╒Ñ╓ü╒╛╒í╒« ╒ª╒ú╒í╒╡╒╕╓é╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒í╒╢╓â╒╕╓â╒╕╒¡ ╒¡╒⌐╒í╒╢╒╢╒Ñ╓Ç╒½ ╒╢╒»╒í╒┐╒┤╒í╒┤╒ó:",
        "questionAz": "Sensor uy─ƒunla┼ƒma:",
        "questionHy": "╘╢╒ú╒í╒╡╒í╒»╒í╒╢ ╒í╒ñ╒í╒║╒┐╒í╓ü╒½╒í╒╢ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "explanationAz": "D╔Öyi┼ƒm╔Öy╔Ön stimullara h╔Össasl─▒─ƒ─▒n azalmas─▒."
      },
      {
        "id": "q4-9",
        "question": "Binocular depth cues require:",
        "questionKa": "ßâæßâÿßâ£ßâ¥ßâÖßâúßâÜßâÉßâáßâúßâÜßâÿ ßâíßâÿßâªßâáßâ¢ßâÿßâí ßâ¢ßâÿßâ£ßâÿßâ¿ßâ£ßâößâæßâößâæßâÿ ßâ¢ßâ¥ßâÿßâùßâ«ßâ¥ßâòßâí:",
        "options": [
          "One eye",
          "Both eyes",
          "Hearing",
          "Touch"
        ],
        "optionsKa": [
          "ßâößâáßâù ßâùßâòßâÉßâÜßâí",
          "ßâ¥ßâáßâÿßâòßâö ßâùßâòßâÉßâÜßâí",
          "ßâíßâ¢ßâößâ£ßâÉßâí",
          "ßâ¿ßâößâ«ßâößâæßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Both eyes needed for binocular depth cues.",
        "explanationKa": "ßâæßâÿßâ£ßâ¥ßâÖßâúßâÜßâÉßâáßâúßâÜßâÿ ßâíßâÿßâªßâáßâ¢ßâÿßâí ßâ¢ßâÿßâ£ßâÿßâ¿ßâ£ßâößâæßâößâæßâÿßâíßâùßâòßâÿßâí ßâ¥ßâáßâÿßâòßâö ßâùßâòßâÉßâÜßâÿßâÉ ßâíßâÉßâ¡ßâÿßâáßâ¥.",
        "optionsRu": [
          "╨₧╨┤╨╕╨╜ ╨│╨╗╨░╨╖",
          "╨₧╨▒╨░ ╨│╨╗╨░╨╖╨░",
          "╨í╨╗╤â╤à",
          "╨ó╤Ç╨╛╨│╨░╤é╤î"
        ],
        "optionsHy": [
          "╒ä╒Ñ╒» ╒í╒╣╓ä",
          "╘╡╓Ç╒»╒╕╓é ╒í╒╣╓ä╒Ñ╓Ç╒¿",
          "╘╝╒╜╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒Ç╒║╒Ñ╓ä"
        ],
        "optionsAz": [
          "Bir g├╢z",
          "H╔Ör iki g├╢z",
          "E┼ƒitm╔Ö",
          "toxunun"
        ],
        "questionAz": "Binokulyar d╔Örinlik g├╢st╔Öricil╔Öri t╔Öl╔Öb edir:",
        "explanationAz": "H╔Ör iki g├╢z binokulyar d╔Örinlik i┼ƒar╔Öl╔Öri ├╝├º├╝n laz─▒md─▒r.",
        "questionHy": "╘╡╓Ç╒»╒í╒ñ╒½╒┐╒í╒»╒½ ╒¡╒╕╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒í╒ª╒ñ╒í╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç╒¿ ╒║╒í╒░╒í╒╢╒╗╒╕╓é╒┤ ╒Ñ╒╢.",
        "explanationHy": "╘╡╓Ç╒»╒╕╓é ╒í╒╣╓ä╒Ñ╓Ç╒╢ ╒º╒¼ ╒í╒╢╒░╓Ç╒í╒¬╒Ñ╒╖╒┐ ╒Ñ╒╢ ╒Ñ╓Ç╒»╒ñ╒½╒┐╒í╒»╒½ ╒¡╒╕╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç:",
        "explanationRu": "╨₧╨▒╨░ ╨│╨╗╨░╨╖╨░ ╨╜╨╡╨╛╨▒╤à╨╛╨┤╨╕╨╝╤ï ╨┤╨╗╤Å ╨▒╨╕╨╜╨╛╨║╤â╨╗╤Å╤Ç╨╜╨╛╨│╨╛ ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╨╡╨╜╨╕╤Å ╨│╨╗╤â╨▒╨╕╨╜╤ï.",
        "questionRu": "╨æ╨╕╨╜╨╛╨║╤â╨╗╤Å╤Ç╨╜╤ï╨╡ ╤ü╨╕╨│╨╜╨░╨╗╤ï ╨│╨╗╤â╨▒╨╕╨╜╤ï ╤é╤Ç╨╡╨▒╤â╤Ä╤é:"
      },
      {
        "id": "q4-10",
        "question": "Opponent-process theory explains:",
        "questionKa": "ßâ¥ßâ₧ßâ¥ßâ£ßâößâ£ßâó-ßâ₧ßâáßâ¥ßâ¬ßâößâíßâÿßâí ßâùßâößâ¥ßâáßâÿßâÉ ßâ«ßâíßâ£ßâÿßâí:",
        "options": [
          "3D vision",
          "Color via opposing pairs",
          "Smell adaptation",
          "Pain"
        ],
        "optionsKa": [
          "3D ßâ¢ßâ«ßâößâôßâòßâößâÜßâ¥ßâæßâÉßâí",
          "ßâñßâößâáßâí ßâíßâÉßâ₧ßâÿßâáßâÿßâíßâ₧ßâÿßâáßâ¥ ßâ¼ßâºßâòßâÿßâÜßâößâæßâÿßâí ßâ¢ßâößâ¿ßâòßâößâ¥ßâæßâÿßâù",
          "ßâíßâúßâ£ßâÿßâí ßâÉßâôßâÉßâ₧ßâóßâÉßâ¬ßâÿßâÉßâí",
          "ßâóßâÖßâÿßâòßâÿßâÜßâí"
        ],
        "correctIndex": 1,
        "explanation": "Color perception through three opposing pairs.",
        "explanationKa": "ßâñßâößâáßâÿßâí ßâÉßâªßâÑßâ¢ßâÉ ßâíßâÉßâ¢ßâÿ ßâíßâÉßâ₧ßâÿßâáßâÿßâíßâ₧ßâÿßâáßâ¥ ßâ¼ßâºßâòßâÿßâÜßâÿßâí ßâ¢ßâößâ¿ßâòßâößâ¥ßâæßâÿßâù.",
        "optionsRu": [
          "3D ╨▓╨╕╨┤╨╡╨╜╨╕╨╡",
          "╨ª╨▓╨╡╤é ╤ç╨╡╤Ç╨╡╨╖ ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╨┐╨╛╨╗╨╛╨╢╨╜╤ï╨╡ ╨┐╨░╤Ç╤ï",
          "╨É╨┤╨░╨┐╤é╨░╤å╨╕╤Å ╨╖╨░╨┐╨░╤à╨░",
          "╨æ╨╛╨╗╤î"
        ],
        "optionsHy": [
          "3D ╒┐╒Ñ╒╜╒¼╒í╒»╒í╒╢",
          "╘│╒╕╓é╒╡╒╢╒¿ ╒░╒í╒»╒í╒╝╒í╒» ╒ª╒╕╓é╒╡╒ú╒Ñ╓Ç╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛",
          "╒Ç╒╕╒┐╒½ ╒░╒í╓Ç╒┤╒í╓Ç╒Ñ╓ü╒╕╓é╒┤",
          "╒æ╒í╒╛"
        ],
        "optionsAz": [
          "3D g├╢rm╔Ö",
          "Qar┼ƒ─▒l─▒ql─▒ c├╝tl╔Ör vasit╔Ösil╔Ö r╔Öngl╔Öyin",
          "Qoxuya uy─ƒunla┼ƒma",
          "A─ƒr─▒"
        ],
        "questionAz": "R╔Öqib-proses n╔Öz╔Öriyy╔Ösi bel╔Ö izah edir:",
        "explanationHy": "╘│╒╕╓é╒╡╒╢╒½ ╒¿╒╢╒»╒í╒¼╒╕╓é╒┤╒¿ ╒Ñ╓Ç╒Ñ╓ä ╒░╒í╒»╒í╒ñ╒½╓Ç ╒ª╒╕╓é╒╡╒ú╒Ñ╓Ç╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛:",
        "questionRu": "╨ó╨╡╨╛╤Ç╨╕╤Å ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╨┤╨╡╨╣╤ü╤é╨▓╤â╤Ä╤ë╨╡╨│╨╛ ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╨░ ╨╛╨▒╤è╤Å╤ü╨╜╤Å╨╡╤é:",
        "explanationRu": "╨Æ╨╛╤ü╨┐╤Ç╨╕╤Å╤é╨╕╨╡ ╤å╨▓╨╡╤é╨░ ╤ç╨╡╤Ç╨╡╨╖ ╤é╤Ç╨╕ ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╨┐╨╛╨╗╨╛╨╢╨╜╤ï╨╡ ╨┐╨░╤Ç╤ï.",
        "questionHy": "╒Ç╒í╒»╒í╒╝╒í╒»╒╕╓Ç╒ñ-╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒½ ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒ó╒í╓ü╒í╒┐╓Ç╒╕╓é╒┤ ╒º.",
        "explanationAz": "├£├º ╔Öks c├╝t vasit╔Ösil╔Ö r╔Öng qavray─▒┼ƒ─▒."
      }
    ],
    "titleHy": "╒ì╒Ñ╒╢╒╜╒í╓ü╒½╒í ╓ç ╒¿╒╢╒»╒í╒¼╒╕╓é╒┤ ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleRu": "╨₧╤ë╤â╤ë╨╡╨╜╨╕╨╡ ╨╕ ╨▓╨╛╤ü╨┐╤Ç╨╕╤Å╤é╨╕╨╡ ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleAz": "Hiss v╔Ö qavray─▒┼ƒ ΓÇö Viktorina"
  },
  {
    "id": "ch5-quiz",
    "chapterId": 5,
    "title": "Consciousness ΓÇö Quiz",
    "titleKa": "ßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâößâæßâÉ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q5-1",
        "question": "REM sleep features:",
        "questionKa": "REM ßâ½ßâÿßâÜßâÿßâí ßâ¢ßâÉßâ«ßâÉßâíßâÿßâÉßâùßâößâæßâÜßâößâæßâÿßâÉ:",
        "options": [
          "Deep relaxation",
          "Rapid eye movements and vivid dreams",
          "No brain activity",
          "Sleepwalking"
        ],
        "optionsKa": [
          "ßâªßâáßâ¢ßâÉ ßâ¢ßâ¥ßâôßâúßâ£ßâößâæßâÉ",
          "ßâíßâ¼ßâáßâÉßâñßâÿ ßâùßâòßâÉßâÜßâÿßâí ßâ¢ßâ¥ßâ½ßâáßâÉßâ¥ßâæßâößâæßâÿ ßâôßâÉ ßâ£ßâÉßâùßâößâÜßâÿ ßâíßâÿßâûßâ¢ßâáßâößâæßâÿ",
          "ßâóßâòßâÿßâ£ßâÿßâí ßâÉßâÑßâóßâÿßâòßâ¥ßâæßâÉ ßâÉßâá ßâÉßâáßâÿßâí",
          "ßâ½ßâÿßâÜßâ¿ßâÿ ßâíßâÿßâÉßâáßâúßâÜßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "REM: rapid eye movements and vivid dreaming.",
        "explanationKa": "REM: ßâíßâ¼ßâáßâÉßâñßâÿ ßâùßâòßâÉßâÜßâÿßâí ßâ¢ßâ¥ßâ½ßâáßâÉßâ¥ßâæßâößâæßâÿ ßâôßâÉ ßâ£ßâÉßâùßâößâÜßâÿ ßâíßâÿßâûßâ¢ßâáßâößâæßâÿ.",
        "optionsRu": [
          "╨ô╨╗╤â╨▒╨╛╨║╨░╤Å ╤Ç╨╡╨╗╨░╨║╤ü╨░╤å╨╕╤Å",
          "╨æ╤ï╤ü╤é╤Ç╤ï╨╡ ╨┤╨▓╨╕╨╢╨╡╨╜╨╕╤Å ╨│╨╗╨░╨╖ ╨╕ ╤Å╤Ç╨║╨╕╨╡ ╤ü╨╜╤ï.",
          "╨¥╨╡╤é ╨╝╨╛╨╖╨│╨╛╨▓╨╛╨╣ ╨░╨║╤é╨╕╨▓╨╜╨╛╤ü╤é╨╕",
          "╨¢╤â╨╜╨░╤é╨╕╨╖╨╝"
        ],
        "optionsHy": [
          "╘╜╒╕╓Ç╒¿ ╒⌐╒╕╓é╒¼╒í╓ü╒╕╓é╒┤",
          "╘▒╒╣╓ä╒Ñ╓Ç╒½ ╒í╓Ç╒í╒ú ╒╖╒í╓Ç╒¬╒╕╓é╒┤╒╢╒Ñ╓Ç ╓ç ╒╛╒í╒╝ ╒Ñ╓Ç╒í╒ª╒╢╒Ñ╓Ç",
          "╒ê╓é╒▓╒Ñ╒▓╒½ ╒í╒»╒┐╒½╒╛╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╣╒»╒í",
          "╒ö╒╢╒í╒« ╓ä╒í╒╡╒¼╓ä"
        ],
        "optionsAz": [
          "D╔Örin istirah╔Öt",
          "S├╝r╔Ötli g├╢z h╔Ör╔Ök╔Ötl╔Öri v╔Ö canl─▒ yuxular",
          "Beyin f╔Öaliyy╔Öti yoxdur",
          "Yuxuda g╔Özinti"
        ],
        "questionRu": "╨₧╤ü╨╛╨▒╨╡╨╜╨╜╨╛╤ü╤é╨╕ ╨▒╤ï╤ü╤é╤Ç╨╛╨│╨╛ ╤ü╨╜╨░:",
        "explanationRu": "╨æ╨ö╨ô: ╨▒╤ï╤ü╤é╤Ç╤ï╨╡ ╨┤╨▓╨╕╨╢╨╡╨╜╨╕╤Å ╨│╨╗╨░╨╖ ╨╕ ╤Å╤Ç╨║╨╕╨╡ ╤ü╨╜╨╛╨▓╨╕╨┤╨╡╨╜╨╕╤Å.",
        "questionHy": "REM ╓ä╒╢╒½ ╒í╒╝╒í╒╢╒▒╒╢╒í╒░╒í╒┐╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿.",
        "explanationHy": "REM. ╒í╒╣╓ä╒Ñ╓Ç╒½ ╒í╓Ç╒í╒ú ╒╖╒í╓Ç╒¬╒╕╓é╒┤╒╢╒Ñ╓Ç ╓ç ╒╛╒í╒╝ ╒Ñ╓Ç╒í╒ª╒╢╒Ñ╓Ç:",
        "explanationAz": "REM: s├╝r╔Ötli g├╢z h╔Ör╔Ök╔Ötl╔Öri v╔Ö canl─▒ yuxular.",
        "questionAz": "REM yuxu x├╝susiyy╔Ötl╔Öri:"
      },
      {
        "id": "q5-2",
        "question": "Freud said dreams represent:",
        "questionKa": "ßâñßâáßâ¥ßâÿßâôßâÿßâí ßâ¢ßâÿßâ«ßâößâôßâòßâÿßâù ßâíßâÿßâûßâ¢ßâáßâößâæßâÿ ßâ¼ßâÉßâáßâ¢ßâ¥ßâÉßâôßâÆßâößâ£ßâí:",
        "options": [
          "Random neural firing",
          "Wish fulfillment",
          "Memory consolidation",
          "Nothing meaningful"
        ],
        "optionsKa": [
          "ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâÿßâí ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâù ßâÉßâÑßâóßâÿßâòßâÉßâ¬ßâÿßâÉßâí",
          "ßâíßâúßâáßâòßâÿßâÜßâÿßâí ßâ¿ßâößâíßâáßâúßâÜßâößâæßâÉßâí",
          "ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâÖßâ¥ßâ£ßâíßâ¥ßâÜßâÿßâôßâÉßâ¬ßâÿßâÉßâí",
          "ßâÉßâáßâÉßâñßâößâá ßâ¢ßâ£ßâÿßâ¿ßâòßâ£ßâößâÜßâ¥ßâòßâÉßâ£ßâí"
        ],
        "correctIndex": 1,
        "explanation": "Freud: dreams are disguised wish fulfillment.",
        "explanationKa": "ßâñßâáßâ¥ßâÿßâôßâÿ: ßâíßâÿßâûßâ¢ßâáßâößâæßâÿ ßâÉßâáßâÿßâí ßâ¿ßâößâ£ßâÿßâªßâæßâúßâÜßâÿ ßâíßâúßâáßâòßâÿßâÜßâößâæßâÿßâí ßâ¿ßâößâíßâáßâúßâÜßâößâæßâÉ.",
        "optionsRu": [
          "╨í╨╗╤â╤ç╨░╨╣╨╜╨╛╨╡ ╨╜╨╡╨╣╤Ç╨╛╨╜╨╜╨╛╨╡ ╤ü╤Ç╨░╨▒╨░╤é╤ï╨▓╨░╨╜╨╕╨╡",
          "╨ÿ╤ü╨┐╨╛╨╗╨╜╨╡╨╜╨╕╨╡ ╨╢╨╡╨╗╨░╨╜╨╕╨╣",
          "╨Ü╨╛╨╜╤ü╨╛╨╗╨╕╨┤╨░╤å╨╕╤Å ╨┐╨░╨╝╤Å╤é╨╕",
          "╨¥╨╕╤ç╨╡╨│╨╛ ╨╖╨╜╨░╤ç╨╕╨╝╨╛╨│╨╛"
        ],
        "optionsHy": [
          "╒å╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒║╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒»╓Ç╒í╒»╒╕╓ü",
          "╒æ╒í╒╢╒»╒╕╓é╒⌐╒╡╒í╒╢ ╒»╒í╒┐╒í╓Ç╒╕╓é╒┤",
          "╒Ç╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒┤╒í╒¡╒┤╒ó╒╕╓é╒┤",
          "╒ê╒╣ ╒┤╒½ ╒½╒┤╒í╒╜╒┐╒í╒¼╒½╓ü ╒ó╒í╒╢"
        ],
        "optionsAz": [
          "T╔Ösad├╝fi sinir at╔Ö┼ƒi",
          "Arzunun yerin╔Ö yetirilm╔Ösi",
          "Yadda┼ƒ─▒n konsolidasiyas─▒",
          "M╔Önal─▒ he├º n╔Ö yoxdur"
        ],
        "questionHy": "╒û╓Ç╒╕╒╡╒ñ╒╢ ╒í╒╜╒╕╓é╒┤ ╒º╓Ç, ╒╕╓Ç ╒Ñ╓Ç╒í╒ª╒╢╒Ñ╓Ç╒¿ ╒╢╒Ñ╓Ç╒»╒í╒╡╒í╓ü╒╢╒╕╓é╒┤ ╒Ñ╒╢.",
        "explanationHy": "╒û╓Ç╒Ñ╒╡╒ñ. ╘╡╓Ç╒í╒ª╒╢╒Ñ╓Ç╒¿ ╓ä╒╕╒▓╒í╓Ç╒»╒╛╒í╒« ╓ü╒í╒╢╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒½╓Ç╒í╒»╒í╒╢╒í╓ü╒╕╓é╒┤ ╒Ñ╒╢:",
        "questionRu": "╨ñ╤Ç╨╡╨╣╨┤ ╨│╨╛╨▓╨╛╤Ç╨╕╨╗, ╤ç╤é╨╛ ╤ü╨╜╤ï ╨┐╤Ç╨╡╨┤╤ü╤é╨░╨▓╨╗╤Å╤Ä╤é ╤ü╨╛╨▒╨╛╨╣:",
        "explanationRu": "╨ñ╤Ç╨╡╨╣╨┤: ╤ü╨╜╤ï ΓÇö ╤ì╤é╨╛ ╨╖╨░╨╝╨░╤ü╨║╨╕╤Ç╨╛╨▓╨░╨╜╨╜╨╛╨╡ ╨╕╤ü╨┐╨╛╨╗╨╜╨╡╨╜╨╕╨╡ ╨╢╨╡╨╗╨░╨╜╨╕╨╣.",
        "questionAz": "Freyd yuxular─▒n a┼ƒa─ƒ─▒dak─▒lar─▒ ifad╔Ö etdiyini s├╢yl╔Ödi:",
        "explanationAz": "Freyd: yuxular gizl╔Önmi┼ƒ arzular─▒n yerin╔Ö yetirilm╔Ösidir."
      },
      {
        "id": "q5-3",
        "question": "Circadian rhythm is approximately:",
        "questionKa": "ßâ¬ßâÿßâáßâÖßâÉßâôßâúßâÜßâÿ ßâáßâÿßâóßâ¢ßâÿ ßâôßâÉßâÉßâ«ßâÜßâ¥ßâößâæßâÿßâù ßâÉßâáßâÿßâí:",
        "options": [
          "12 hours",
          "24 hours",
          "48 hours",
          "8 hours"
        ],
        "optionsKa": [
          "12 ßâíßâÉßâÉßâùßâÿ",
          "24 ßâíßâÉßâÉßâùßâÿ",
          "48 ßâíßâÉßâÉßâùßâÿ",
          "8 ßâíßâÉßâÉßâùßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Roughly 24-hour cycle.",
        "explanationKa": "ßâôßâÉßâÉßâ«ßâÜßâ¥ßâößâæßâÿßâù 24-ßâíßâÉßâÉßâùßâÿßâÉßâ£ßâÿ ßâ¬ßâÿßâÖßâÜßâÿ.",
        "optionsRu": [
          "12 ╤ç╨░╤ü╨╛╨▓",
          "24 ╤ç╨░╤ü╨░",
          "48 ╤ç╨░╤ü╨╛╨▓",
          "8 ╤ç╨░╤ü╨╛╨▓"
        ],
        "optionsHy": [
          "12 ╒¬╒í╒┤",
          "24 ╒¬╒í╒┤",
          "48 ╒¬╒í╒┤",
          "8 ╒¬╒í╒┤"
        ],
        "optionsAz": [
          "12 saat",
          "24 saat",
          "48 saat",
          "8 saat"
        ],
        "explanationRu": "╨ƒ╤Ç╨╕╨╝╨╡╤Ç╨╜╨╛ 24-╤ç╨░╤ü╨╛╨▓╨╛╨╣ ╤å╨╕╨║╨╗.",
        "explanationHy": "╒ä╒╕╒┐╒í╒╛╒╕╓Ç╒í╒║╒Ñ╒╜ 24-╒¬╒í╒┤╒╡╒í ╓ü╒½╒»╒¼:",
        "questionHy": "Circadian ╒╝╒½╒⌐╒┤╒¿ ╒┤╒╕╒┐╒í╒╛╒╕╓Ç╒í╒║╒Ñ╒╜ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "questionRu": "╨ª╨╕╤Ç╨║╨░╨┤╨╜╤ï╨╣ ╤Ç╨╕╤é╨╝ ╤ü╨╛╤ü╤é╨░╨▓╨╗╤Å╨╡╤é ╨┐╤Ç╨╕╨╝╨╡╤Ç╨╜╨╛:",
        "questionAz": "Sirkadiyal─▒ ritm t╔Öxmin╔Ön bel╔Ödir:",
        "explanationAz": "T╔Öxmin╔Ön 24 saatl─▒q d├╢vr."
      },
      {
        "id": "q5-4",
        "question": "Sleep deprivation impairs:",
        "questionKa": "ßâ½ßâÿßâÜßâÿßâí ßâôßâößâñßâÿßâ¬ßâÿßâóßâÿ ßâÉßâúßâÉßâáßâößâíßâößâæßâí:",
        "options": [
          "Physical strength",
          "Concentration and decisions",
          "Height",
          "Hearing"
        ],
        "optionsKa": [
          "ßâñßâÿßâûßâÿßâÖßâúßâá ßâ½ßâÉßâÜßâÉßâí",
          "ßâÖßâ¥ßâ£ßâ¬ßâößâ£ßâóßâáßâÉßâ¬ßâÿßâÉßâíßâÉ ßâôßâÉ ßâÆßâÉßâôßâÉßâ¼ßâºßâòßâößâóßâÿßâÜßâößâæßâößâæßâí",
          "ßâíßâÿßâ¢ßâÉßâªßâÜßâößâí",
          "ßâíßâ¢ßâößâ£ßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Sleep loss impairs cognitive function.",
        "explanationKa": "ßâ½ßâÿßâÜßâÿßâí ßâôßâößâñßâÿßâ¬ßâÿßâóßâÿ ßâÉßâúßâÉßâáßâößâíßâößâæßâí ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâá ßâñßâúßâ£ßâÑßâ¬ßâÿßâÉßâí.",
        "optionsRu": [
          "╨ñ╨╕╨╖╨╕╤ç╨╡╤ü╨║╨░╤Å ╤ü╨╕╨╗╨░",
          "╨Ü╨╛╨╜╤å╨╡╨╜╤é╤Ç╨░╤å╨╕╤Å ╨╕ ╤Ç╨╡╤ê╨╡╨╜╨╕╤Å",
          "╨Æ╤ï╤ü╨╛╤é╨░",
          "╨í╨╗╤â╤à"
        ],
        "optionsHy": [
          "╒û╒½╒ª╒½╒»╒í╒»╒í╒╢ ╒╕╓é╒¬",
          "╒Ç╒í╒┤╒í╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒╕╓é╒┤ ╓ç ╒╕╓Ç╒╕╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç",
          "╘▓╒í╓Ç╒▒╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘╝╒╜╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Fiziki g├╝c",
          "Konsentrasiya v╔Ö q╔Örarlar",
          "H├╝nd├╝rl├╝k",
          "E┼ƒitm╔Ö"
        ],
        "explanationHy": "╒ö╒╢╒½ ╒»╒╕╓Ç╒╕╓é╒╜╒┐╒¿ ╒¡╒í╒⌐╒í╓Ç╒╕╓é╒┤ ╒º ╒│╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╒ú╒╕╓Ç╒«╒í╒╝╒╕╓é╒╡╒⌐╒¿:",
        "questionHy": "╒ö╒╢╒½ ╒║╒í╒»╒í╒╜╒¿ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤ ╒º.",
        "explanationAz": "Yuxu itkisi koqnitiv funksiyan─▒ pozur.",
        "questionAz": "Yuxusuzluq pozulur:",
        "questionRu": "╨ö╨╡╨┐╤Ç╨╕╨▓╨░╤å╨╕╤Å ╤ü╨╜╨░ ╤â╤à╤â╨┤╤ê╨░╨╡╤é:",
        "explanationRu": "╨ƒ╨╛╤é╨╡╤Ç╤Å ╤ü╨╜╨░ ╤â╤à╤â╨┤╤ê╨░╨╡╤é ╨║╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╨╡ ╤ä╤â╨╜╨║╤å╨╕╨╕."
      },
      {
        "id": "q5-5",
        "question": "Activation-synthesis says dreams are:",
        "questionKa": "ßâÉßâÑßâóßâÿßâòßâÉßâ¬ßâÿßâÉ-ßâíßâÿßâ£ßâùßâößâûßâÿßâí ßâùßâößâ¥ßâáßâÿßâÿßâí ßâ¢ßâÿßâ«ßâößâôßâòßâÿßâù ßâíßâÿßâûßâ¢ßâáßâößâæßâÿ ßâÉßâáßâÿßâí:",
        "options": [
          "Unconscious wishes",
          "Brain interpreting random neural activity",
          "Supernatural",
          "Repressed memories"
        ],
        "optionsKa": [
          "ßâÉßâáßâÉßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâÿ ßâíßâúßâáßâòßâÿßâÜßâößâæßâÿ",
          "ßâóßâòßâÿßâ£ßâÿ ßâÿßâ£ßâóßâößâáßâ₧ßâáßâößâóßâÉßâ¬ßâÿßâÉßâí ßâúßâÖßâößâùßâößâæßâí ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâù ßâ£ßâößâÿßâáßâ¥ßâ£ßâúßâÜ ßâÉßâÑßâóßâÿßâòßâ¥ßâæßâÉßâí",
          "ßâûßâößâæßâúßâ£ßâößâæßâáßâÿßâòßâÿ",
          "ßâ⌐ßâÉßâ«ßâ¿ßâ¥ßâæßâÿßâÜßâÿ ßâ¢ßâ¥ßâÆßâ¥ßâ£ßâößâæßâößâæßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Brain makes sense of random neural signals.",
        "explanationKa": "ßâóßâòßâÿßâ£ßâÿ ßâÉßâûßâáßâí ßâÉßâ£ßâÿßâ¡ßâößâæßâí ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâù ßâ£ßâößâÿßâáßâ¥ßâ£ßâúßâÜ ßâíßâÿßâÆßâ£ßâÉßâÜßâößâæßâí.",
        "optionsRu": [
          "╨æ╨╡╤ü╤ü╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╤ï╨╡ ╨╢╨╡╨╗╨░╨╜╨╕╤Å",
          "╨£╨╛╨╖╨│ ╨╕╨╜╤é╨╡╤Ç╨┐╤Ç╨╡╤é╨╕╤Ç╤â╨╡╤é ╤ü╨╗╤â╤ç╨░╨╣╨╜╤â╤Ä ╨╜╨╡╨╣╤Ç╨╛╨╜╨╜╤â╤Ä ╨░╨║╤é╨╕╨▓╨╜╨╛╤ü╤é╤î",
          "╤ü╨▓╨╡╤Ç╤à╤è╨╡╤ü╤é╨╡╤ü╤é╨▓╨╡╨╜╨╜╨╛╨╡",
          "╨ƒ╨╛╨┤╨░╨▓╨╗╨╡╨╜╨╜╤ï╨╡ ╨▓╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╘▒╒╢╒ú╒½╒┐╒í╒»╒½╓ü ╓ü╒í╒╢╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
          "╒ê╓é╒▓╒Ñ╒▓╒¿ ╒┤╒Ñ╒»╒╢╒í╒ó╒í╒╢╒╕╓é╒┤ ╒º ╒║╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒ú╒╕╓Ç╒«╒╕╓é╒╢╒Ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╘│╒Ñ╓Ç╒ó╒╢╒í╒»╒í╒╢",
          "╘▓╒╝╒╢╒í╒ñ╒í╒┐╒╛╒í╒« ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "┼₧├╝ursuz arzular",
          "Beyin t╔Ösad├╝fi sinir f╔Öaliyy╔Ötini ┼ƒ╔Örh edir",
          "F├╢vq╔Ölt╔Öbii",
          "Repressiya edilmi┼ƒ xatir╔Öl╔Ör"
        ],
        "questionHy": "╘▒╒»╒┐╒½╒╛╒í╓ü╒╕╓é╒┤-╒╜╒½╒╢╒⌐╒Ñ╒ª╒╢ ╒í╒╜╒╕╓é╒┤ ╒º, ╒╕╓Ç ╒Ñ╓Ç╒í╒ª╒╢╒Ñ╓Ç╒╢ ╒Ñ╒╢.",
        "questionRu": "╨É╨║╤é╨╕╨▓╨░╤å╨╕╤Å-╤ü╨╕╨╜╤é╨╡╨╖ ╤â╤é╨▓╨╡╤Ç╨╢╨┤╨░╨╡╤é, ╤ç╤é╨╛ ╤ü╨╜╤ï ΓÇô ╤ì╤é╨╛:",
        "questionAz": "Aktivl╔Ö┼ƒdirm╔Ö-sintez yuxular─▒n bel╔Ö oldu─ƒunu s├╢yl╔Öyir:",
        "explanationRu": "╨£╨╛╨╖╨│ ╨▓╨╛╤ü╨┐╤Ç╨╕╨╜╨╕╨╝╨░╨╡╤é ╤ü╨╗╤â╤ç╨░╨╣╨╜╤ï╨╡ ╨╜╨╡╨╣╤Ç╨╛╨╜╨╜╤ï╨╡ ╤ü╨╕╨│╨╜╨░╨╗╤ï.",
        "explanationHy": "╒ê╓é╒▓╒Ñ╒▓╒╢ ╒½╒┤╒í╒╜╒┐╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒º ╒║╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒í╒ª╒ñ╒í╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç╒¿:",
        "explanationAz": "Beyin t╔Ösad├╝fi sinir siqnallar─▒n─▒ m╔Önaland─▒r─▒r."
      },
      {
        "id": "q5-6",
        "question": "Narcolepsy involves:",
        "questionKa": "ßâ£ßâÉßâáßâÖßâ¥ßâÜßâößâñßâíßâÿßâÉ ßâ¢ßâ¥ßâÿßâ¬ßâÉßâòßâí:",
        "options": [
          "Inability to sleep",
          "Sudden sleep attacks",
          "Snoring",
          "Nightmares only"
        ],
        "optionsKa": [
          "ßâ½ßâÿßâÜßâÿßâí ßâúßâúßâ£ßâÉßâáßâ¥ßâæßâÉßâí",
          "ßâ½ßâÿßâÜßâÿßâí ßâúßâößâ¬ßâÉßâá ßâ¿ßâößâóßâößâòßâößâæßâí",
          "ßâ«ßâòßâáßâÿßâ£ßâòßâÉßâí",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâÖßâ¥ßâ¿ßâ¢ßâÉßâáßâößâæßâí"
        ],
        "correctIndex": 1,
        "explanation": "Sudden uncontrollable episodes of falling asleep.",
        "explanationKa": "ßâ½ßâÿßâÜßâÿßâí ßâúßâößâ¬ßâÉßâáßâÿ, ßâúßâÖßâ¥ßâ£ßâóßâáßâ¥ßâÜßâ¥ ßâößâ₧ßâÿßâûßâ¥ßâôßâößâæßâÿ.",
        "optionsRu": [
          "╨¥╨╡╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╤ü╨┐╨░╤é╤î",
          "╨Æ╨╜╨╡╨╖╨░╨┐╨╜╤ï╨╡ ╨┐╤Ç╨╕╤ü╤é╤â╨┐╤ï ╤ü╨╜╨░",
          "╨Ñ╤Ç╨░╨┐",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨║╨╛╤ê╨╝╨░╤Ç╤ï"
        ],
        "optionsHy": [
          "╒ö╒╢╒½ ╒í╒╢╒»╒í╓Ç╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╒Ç╒í╒╢╒»╒í╓Ç╒«╒í╒»╒½ ╓ä╒╢╒½ ╒░╒í╓Ç╒▒╒í╒»╒╕╓é╒┤╒╢╒Ñ╓Ç",
          "╘╜╒╝╒┤╓â╒╕╓ü",
          "╒ä╒½╒í╒╡╒╢ ╒┤╒▓╒▒╒í╒╛╒í╒╢╒╗╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "Yata bilm╔Öm╔Ök",
          "Ani yuxu h├╝cumlar─▒",
          "Xorultu",
          "Yaln─▒z kabuslar"
        ],
        "questionRu": "╨¥╨░╤Ç╨║╨╛╨╗╨╡╨┐╤ü╨╕╤Å ╨▓╨║╨╗╤Ä╤ç╨░╨╡╤é ╨▓ ╤ü╨╡╨▒╤Å:",
        "questionHy": "╒å╒í╓Ç╒»╒╕╒¼╒Ñ╒║╒╜╒½╒í╒╢ ╒╢╒Ñ╓Ç╒í╒╝╒╕╓é╒┤ ╒º.",
        "questionAz": "Narkolepsiya daxildir:",
        "explanationRu": "╨Æ╨╜╨╡╨╖╨░╨┐╨╜╤ï╨╡ ╨╜╨╡╨║╨╛╨╜╤é╤Ç╨╛╨╗╨╕╤Ç╤â╨╡╨╝╤ï╨╡ ╤ì╨┐╨╕╨╖╨╛╨┤╤ï ╨╖╨░╤ü╤ï╨┐╨░╨╜╨╕╤Å.",
        "explanationHy": "╒Ç╒í╒╢╒»╒í╓Ç╒«╒í╒»╒½ ╓ä╒╢╒Ñ╒¼╒╕╓é ╒í╒╢╒»╒í╒╝╒í╒╛╒í╓Ç╒Ñ╒¼╒½ ╒ñ╓Ç╒╛╒í╒ú╒╢╒Ñ╓Ç.",
        "explanationAz": "Ani n╔Özar╔Ötsiz yuxuya getm╔Ö epizodlar─▒."
      },
      {
        "id": "q5-7",
        "question": "Hypnosis is best described as:",
        "questionKa": "ßâ░ßâÿßâ₧ßâ£ßâ¥ßâûßâÿ ßâíßâÉßâúßâÖßâößâùßâößâíßâ¥ßâô ßâÉßâªßâÿßâ¼ßâößâáßâößâæßâÉ, ßâáßâ¥ßâÆßâ¥ßâáßâ¬:",
        "options": [
          "Heightened suggestibility",
          "Deep sleep",
          "Unconsciousness",
          "Anesthesia"
        ],
        "optionsKa": [
          "ßâÆßâÉßâ½ßâÜßâÿßâößâáßâößâæßâúßâÜßâÿ ßâ¿ßâùßâÉßâÆßâ¥ßâ£ßâößâæßâÉßâôßâ¥ßâæßâÉ",
          "ßâªßâáßâ¢ßâÉ ßâ½ßâÿßâÜßâÿ",
          "ßâúßâÆßâ¥ßâ£ßâ¥ ßâ¢ßâôßâÆßâ¥ßâ¢ßâÉßâáßâößâ¥ßâæßâÉ",
          "ßâÉßâ£ßâößâíßâùßâößâûßâÿßâÉ"
        ],
        "correctIndex": 0,
        "explanation": "Heightened suggestibility and focused attention.",
        "explanationKa": "ßâÆßâÉßâ½ßâÜßâÿßâößâáßâößâæßâúßâÜßâÿ ßâ¿ßâùßâÉßâÆßâ¥ßâ£ßâößâæßâÉßâôßâ¥ßâæßâÉ ßâôßâÉ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâößâæßâúßâÜßâÿ ßâºßâúßâáßâÉßâôßâªßâößâæßâÉ.",
        "optionsRu": [
          "╨ƒ╨╛╨▓╤ï╤ê╨╡╨╜╨╜╨░╤Å ╨▓╨╜╤â╤ê╨░╨╡╨╝╨╛╤ü╤é╤î",
          "╨ô╨╗╤â╨▒╨╛╨║╨╕╨╣ ╤ü╨╛╨╜",
          "╨æ╨╡╤ü╤ü╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╨╛╨╡ ╤ü╨╛╤ü╤é╨╛╤Å╨╜╨╕╨╡",
          "╨É╨╜╨╡╤ü╤é╨╡╨╖╨╕╤Å"
        ],
        "optionsHy": [
          "╘▓╒í╓Ç╒▒╓Ç╒í╓ü╒╛╒í╒« ╒í╒╝╒í╒╗╒í╓Ç╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘╜╒╕╓Ç╒¿ ╓ä╒╕╓é╒╢",
          "╘▒╒╢╒ú╒½╒┐╒í╒»╒½╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘▒╒╢╒ª╒ú╒í╒╡╒í╓ü╒╕╓é╒┤"
        ],
        "optionsAz": [
          "G├╝cl╔Öndirilmi┼ƒ t╔Öklif",
          "D╔Örin yuxu",
          "┼₧├╝ursuzluq",
          "Anesteziya"
        ],
        "questionHy": "╒Ç╒½╒║╒╢╒╕╒ª╒¿ ╒¼╒í╒╛╒í╒ú╒╕╓é╒╡╒╢╒╜ ╒ó╒╢╒╕╓é╒⌐╒í╒ú╓Ç╒╛╒╕╓é╒┤ ╒º ╒░╒Ñ╒┐╓ç╒╡╒í╒¼ ╒»╒Ñ╓Ç╒║.",
        "explanationHy": "╘▓╒í╓Ç╒▒╓Ç╒í╓ü╒╛╒í╒« ╒í╒╝╒í╒╗╒í╓Ç╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓ç ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒╛╒í╒« ╒╕╓é╒╖╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢:",
        "questionAz": "Hipnoz ╔Ön yax┼ƒ─▒ ┼ƒ╔Ökild╔Ö t╔Ösvir edilir:",
        "explanationAz": "T╔Öklif qabiliyy╔Ötini art─▒rd─▒ v╔Ö diqq╔Öti c╔Öml╔Ö┼ƒdirdi.",
        "explanationRu": "╨ƒ╨╛╨▓╤ï╤ê╨╡╨╜╨╜╨░╤Å ╨▓╨╜╤â╤ê╨░╨╡╨╝╨╛╤ü╤é╤î ╨╕ ╤ü╨╛╤ü╤Ç╨╡╨┤╨╛╤é╨╛╤ç╨╡╨╜╨╜╨╛╤ü╤é╤î ╨▓╨╜╨╕╨╝╨░╨╜╨╕╤Å.",
        "questionRu": "╨ô╨╕╨┐╨╜╨╛╨╖ ╨╗╤â╤ç╤ê╨╡ ╨▓╤ü╨╡╨│╨╛ ╨╛╨┐╨╕╤ü╨░╤é╤î ╨║╨░╨║:"
      },
      {
        "id": "q5-8",
        "question": "Melatonin regulates:",
        "questionKa": "ßâ¢ßâößâÜßâÉßâóßâ¥ßâ£ßâÿßâ£ßâÿ ßâÉßâáßâößâÆßâúßâÜßâÿßâáßâößâæßâí:",
        "options": [
          "Hunger",
          "Sleep",
          "Growth",
          "Adrenaline"
        ],
        "optionsKa": [
          "ßâ¿ßâÿßâ¢ßâ¿ßâÿßâÜßâí",
          "ßâ½ßâÿßâÜßâí",
          "ßâûßâáßâôßâÉßâí",
          "ßâÉßâôßâáßâößâ£ßâÉßâÜßâÿßâ£ßâí"
        ],
        "correctIndex": 1,
        "explanation": "Melatonin regulates the sleep-wake cycle.",
        "explanationKa": "ßâ¢ßâößâÜßâÉßâóßâ¥ßâ£ßâÿßâ£ßâÿ ßâÉßâáßâößâÆßâúßâÜßâÿßâáßâößâæßâí ßâ½ßâÿßâÜ-ßâªßâòßâÿßâ½ßâÿßâÜßâÿßâí ßâ¬ßâÿßâÖßâÜßâí.",
        "optionsRu": [
          "╨ô╨╛╨╗╨╛╨┤",
          "╨í╨┐╨░╤é╤î",
          "╨á╨╛╤ü╤é",
          "╨É╨┤╤Ç╨╡╨╜╨░╨╗╨╕╨╜"
        ],
        "optionsHy": [
          "╒ì╒╕╒╛",
          "╒ö╒╢╒Ñ╒¼",
          "╘▒╒│",
          "╘▒╒ñ╓Ç╒Ñ╒╢╒í╒¼╒½╒╢"
        ],
        "optionsAz": [
          "Acl─▒q",
          "yatmaq",
          "Art─▒m",
          "Adrenalin"
        ],
        "questionRu": "╨£╨╡╨╗╨░╤é╨╛╨╜╨╕╨╜ ╤Ç╨╡╨│╤â╨╗╨╕╤Ç╤â╨╡╤é:",
        "questionHy": "╒ä╒Ñ╒¼╒í╒┐╒╕╒╢╒½╒╢╒¿ ╒»╒í╓Ç╒ú╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒º.",
        "explanationHy": "╒ä╒Ñ╒¼╒í╒┐╒╕╒╢╒½╒╢╒¿ ╒»╒í╓Ç╒ú╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒º ╓ä╒╕╓é╒╢-╒í╓Ç╒⌐╒╕╓é╒╢ ╓ü╒½╒»╒¼╒¿╓ë",
        "explanationAz": "Melatonin yuxu-oyanma d├╢vr├╝n├╝ t╔Önziml╔Öyir.",
        "explanationRu": "╨£╨╡╨╗╨░╤é╨╛╨╜╨╕╨╜ ╤Ç╨╡╨│╤â╨╗╨╕╤Ç╤â╨╡╤é ╤å╨╕╨║╨╗ ╤ü╨╜╨░ ╨╕ ╨▒╨╛╨┤╤Ç╤ü╤é╨▓╨╛╨▓╨░╨╜╨╕╤Å.",
        "questionAz": "Melatonin t╔Önziml╔Öyir:"
      },
      {
        "id": "q5-9",
        "question": "Tolerance means:",
        "questionKa": "ßâóßâ¥ßâÜßâößâáßâÉßâ£ßâóßâ¥ßâæßâÉ ßâ£ßâÿßâ¿ßâ£ßâÉßâòßâí:",
        "options": [
          "You dislike it",
          "Need more for same effect",
          "Addicted",
          "No longer exists"
        ],
        "optionsKa": [
          "ßâÉßâá ßâ¢ßâ¥ßâÆßâ¼ßâ¥ßâ£ßâù",
          "ßâ¢ßâößâóßâÿßâÉ ßâíßâÉßâ¡ßâÿßâáßâ¥ ßâÿßâ¢ßâÉßâòßâö ßâößâñßâößâÑßâóßâÿßâíßâùßâòßâÿßâí",
          "ßâôßâÉßâ¢ßâ¥ßâÖßâÿßâôßâößâæßâúßâÜßâÿ ßâ«ßâÉßâáßâù",
          "ßâÉßâªßâÉßâá ßâÉßâáßâíßâößâæßâ¥ßâæßâí"
        ],
        "correctIndex": 1,
        "explanation": "Needing more to achieve the same effect.",
        "explanationKa": "ßâ¢ßâößâóßâÿ ßâíßâÉßâ¡ßâÿßâáßâ¥ßâößâæßâÉ ßâÿßâ¢ßâÉßâòßâö ßâößâñßâößâÑßâóßâÿßâí ßâ¢ßâÿßâíßâÉßâªßâ¼ßâößâòßâÉßâô.",
        "optionsRu": [
          "╨ó╨╡╨▒╨╡ ╤ì╤é╨╛ ╨╜╨╡ ╨╜╤Ç╨░╨▓╨╕╤é╤ü╤Å",
          "╨¥╤â╨╢╨╜╨╛ ╨▒╨╛╨╗╤î╤ê╨╡ ╨┤╨╗╤Å ╤é╨╛╨│╨╛ ╨╢╨╡ ╤ì╤ä╤ä╨╡╨║╤é╨░",
          "╨í ╨╖╨░╨▓╨╕╤ü╨╕╨╝╨╛╤ü╤é╤î╤Ä",
          "╨æ╨╛╨╗╤î╤ê╨╡ ╨╜╨╡ ╤ü╤â╤ë╨╡╤ü╤é╨▓╤â╨╡╤é"
        ],
        "optionsHy": [
          "╘┤╒╕╓é╓ä ╒ñ╒í ╒╣╒Ñ╓ä ╒╜╒½╓Ç╒╕╓é╒┤",
          "╒å╒╕╓é╒╡╒╢ ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒┤╒í╓Ç ╒í╒╛╒Ñ╒¼╒½╒╢ ╒º ╒║╒Ñ╒┐╓ä",
          "╘┐╒í╒¡╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘▒╒╡╒¼╓ç╒╜ ╒ú╒╕╒╡╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╣╒╕╓é╒╢╒½"
        ],
        "optionsAz": [
          "B╔Öy╔Önm╔Ödin",
          "Eyni effekt ├╝├º├╝n daha ├ºox laz─▒md─▒r",
          "As─▒l─▒",
          "Art─▒q yoxdur"
        ],
        "questionAz": "Tolerantl─▒q dem╔Ökdir:",
        "questionHy": "╒Ç╒í╒╢╒ñ╒╕╓é╓Ç╒¬╒╕╒▓╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒º.",
        "questionRu": "╨ó╨╛╨╗╨╡╤Ç╨░╨╜╤é╨╜╨╛╤ü╤é╤î ╨╛╨╖╨╜╨░╤ç╨░╨╡╤é:",
        "explanationHy": "╒å╒╕╓é╒╡╒╢ ╒í╓Ç╒ñ╒╡╒╕╓é╒╢╓ä╒½╒╢ ╒░╒í╒╜╒╢╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç ╒í╒╛╒Ñ╒¼╒½╒╢ ╒º ╒║╒Ñ╒┐╓ä:",
        "explanationRu": "╨ö╨╗╤Å ╨┤╨╛╤ü╤é╨╕╨╢╨╡╨╜╨╕╤Å ╤é╨╛╨│╨╛ ╨╢╨╡ ╤ì╤ä╤ä╨╡╨║╤é╨░ ╨╜╤â╨╢╨╜╨╛ ╨▒╨╛╨╗╤î╤ê╨╡.",
        "explanationAz": "Eyni effekti ╔Öld╔Ö etm╔Ök ├╝├º├╝n daha ├ºox ehtiyac var."
      },
      {
        "id": "q5-10",
        "question": "Delta waves are associated with:",
        "questionKa": "ßâôßâößâÜßâóßâÉ ßâóßâÉßâÜßâªßâößâæßâÿ ßâÉßâíßâ¥ßâ¬ßâÿßâáßâôßâößâæßâÉ:",
        "options": [
          "Alertness",
          "REM sleep",
          "Deep non-REM sleep",
          "Light sleep"
        ],
        "optionsKa": [
          "ßâñßâ«ßâÿßâûßâÜßâ¥ßâæßâÉßâíßâùßâÉßâ£",
          "REM ßâ½ßâÿßâÜßâùßâÉßâ£",
          "ßâªßâáßâ¢ßâÉ ßâÉßâáßâÉ-REM ßâ½ßâÿßâÜßâùßâÉßâ£",
          "ßâ¢ßâíßâúßâæßâúßâÑ ßâ½ßâÿßâÜßâùßâÉßâ£"
        ],
        "correctIndex": 2,
        "explanation": "Delta waves characterize deep non-REM sleep.",
        "explanationKa": "ßâôßâößâÜßâóßâÉ ßâóßâÉßâÜßâªßâößâæßâÿ ßâÉßâ«ßâÉßâíßâÿßâÉßâùßâößâæßâí ßâªßâáßâ¢ßâÉ ßâÉßâáßâÉ-REM ßâ½ßâÿßâÜßâí.",
        "optionsRu": [
          "╨æ╨┤╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╤î",
          "╨▒╤ï╤ü╤é╤Ç╤ï╨╣ ╤ü╨╛╨╜",
          "╨ô╨╗╤â╨▒╨╛╨║╨╕╨╣ ╨╝╨╡╨┤╨╗╨╡╨╜╨╜╤ï╨╣ ╤ü╨╛╨╜",
          "╨¢╨╡╨│╨║╨╕╨╣ ╤ü╨╛╨╜"
        ],
        "optionsHy": [
          "╘╢╒ú╒╕╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "REM ╓ä╒╕╓é╒╢",
          "╘╜╒╕╓Ç╒¿ ╒╕╒╣ REM ╓ä╒╕╓é╒╢",
          "╘╣╒Ñ╒⌐╓ç ╓ä╒╕╓é╒╢"
        ],
        "optionsAz": [
          "X╔Öb╔Ördarl─▒q",
          "REM yuxusu",
          "D╔Örin qeyri-REM yuxusu",
          "Y├╝ng├╝l yuxu"
        ],
        "questionHy": "╘┤╒Ñ╒¼╒┐╒í╒╡╒½ ╒í╒¼╒½╓ä╒╢╒Ñ╓Ç╒¿ ╒»╒í╒║╒╛╒í╒« ╒Ñ╒╢.",
        "questionRu": "╨ö╨╡╨╗╤î╤é╨░-╨▓╨╛╨╗╨╜╤ï ╤ü╨▓╤Å╨╖╨░╨╜╤ï ╤ü:",
        "questionAz": "Delta dal─ƒalar─▒ a┼ƒa─ƒ─▒dak─▒larla ╔Ölaq╔Öl╔Öndirilir:",
        "explanationHy": "╘┤╒Ñ╒¼╒┐╒í ╒í╒¼╒½╓ä╒╢╒Ñ╓Ç╒¿ ╒ó╒╢╒╕╓é╒⌐╒í╒ú╓Ç╒╕╓é╒┤ ╒Ñ╒╢ ╒¡╒╕╓Ç╒¿ ╒╕╒╣ REM ╓ä╒╕╓é╒╢╒¿:",
        "explanationRu": "╨ö╨╡╨╗╤î╤é╨░-╨▓╨╛╨╗╨╜╤ï ╤à╨░╤Ç╨░╨║╤é╨╡╤Ç╨╕╨╖╤â╤Ä╤é ╨│╨╗╤â╨▒╨╛╨║╨╕╨╣ ╨╝╨╡╨┤╨╗╨╡╨╜╨╜╤ï╨╣ ╤ü╨╛╨╜.",
        "explanationAz": "Delta dal─ƒalar─▒ d╔Örin qeyri-REM yuxusunu xarakteriz╔Ö edir."
      }
    ],
    "titleRu": "╨í╨╛╨╖╨╜╨░╨╜╨╕╨╡ ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleHy": "╘│╒½╒┐╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢ ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleAz": "┼₧├╝ur - Viktorina"
  },
  {
    "id": "ch6-quiz",
    "chapterId": 6,
    "title": "Learning ΓÇö Quiz",
    "titleKa": "ßâíßâ¼ßâÉßâòßâÜßâÉ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q6-1",
        "question": "In Pavlov's experiment, the bell started as a:",
        "questionKa": "ßâ₧ßâÉßâòßâÜßâ¥ßâòßâÿßâí ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâ¿ßâÿ ßâûßâÉßâáßâÿ ßâùßâÉßâòßâôßâÉßâ₧ßâÿßâáßâòßâößâÜßâÉßâô ßâÿßâºßâ¥:",
        "options": [
          "Conditioned stimulus",
          "Unconditioned stimulus",
          "Neutral stimulus",
          "Conditioned response"
        ],
        "optionsKa": [
          "ßâ₧ßâÿßâáßâ¥ßâæßâÿßâùßâÿ ßâíßâóßâÿßâ¢ßâúßâÜßâÿ",
          "ßâúßâ₧ßâÿßâáßâ¥ßâæßâ¥ ßâíßâóßâÿßâ¢ßâúßâÜßâÿ",
          "ßâ£ßâößâÿßâóßâáßâÉßâÜßâúßâáßâÿ ßâíßâóßâÿßâ¢ßâúßâÜßâÿ",
          "ßâ₧ßâÿßâáßâ¥ßâæßâÿßâùßâÿ ßâáßâößâÉßâÑßâ¬ßâÿßâÉ"
        ],
        "correctIndex": 2,
        "explanation": "The bell was initially neutral.",
        "explanationKa": "ßâûßâÉßâáßâÿ ßâùßâÉßâòßâôßâÉßâ₧ßâÿßâáßâòßâößâÜßâÉßâô ßâ£ßâößâÿßâóßâáßâÉßâÜßâúßâáßâÿ ßâÿßâºßâ¥.",
        "optionsRu": [
          "╨ú╤ü╨╗╨╛╨▓╨╜╤ï╨╣ ╤Ç╨░╨╖╨┤╤Ç╨░╨╢╨╕╤é╨╡╨╗╤î",
          "╨æ╨╡╨╖╤â╤ü╨╗╨╛╨▓╨╜╤ï╨╣ ╤Ç╨░╨╖╨┤╤Ç╨░╨╢╨╕╤é╨╡╨╗╤î",
          "╨¥╨╡╨╣╤é╤Ç╨░╨╗╤î╨╜╤ï╨╣ ╤ü╤é╨╕╨╝╤â╨╗",
          "╨ú╤ü╨╗╨╛╨▓╨╜╤ï╨╣ ╨╛╤é╨▓╨╡╤é"
        ],
        "optionsHy": [
          "╒è╒í╒╡╒┤╒í╒╢╒í╒╛╒╕╓Ç╒╛╒í╒« ╒¡╒⌐╒í╒╢",
          "╘▒╒╢╒╛╒Ñ╓Ç╒í╒║╒í╒░ ╒¡╒⌐╒í╒╢",
          "╒ë╒Ñ╒ª╒╕╓ä ╒¡╒⌐╒í╒╢",
          "╒è╒í╒╡╒┤╒í╒╢╒í╒╛╒╕╓Ç╒╛╒í╒« ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä"
        ],
        "optionsAz": [
          "┼₧╔Örti stimul",
          "┼₧╔Örtsiz stimul",
          "Neytral stimul",
          "┼₧╔Örti cavab"
        ],
        "explanationHy": "╘╢╒í╒╢╒ú╒¿ ╒╜╒»╒ª╒ó╒╕╓é╒┤ ╒╣╒Ñ╒ª╒╕╓ä ╒º╓Ç╓ë",
        "questionHy": "╒è╒í╒╛╒¼╒╕╒╛╒½ ╓â╒╕╓Ç╒▒╒½ ╒┤╒Ñ╒╗ ╒ª╒í╒╢╒ú╒¿ ╒╜╒»╒╜╒╛╒Ñ╓ü ╒░╒Ñ╒┐╓ç╒╡╒í╒¼ ╒»╒Ñ╓Ç╒║.",
        "explanationRu": "╨Ü╨╛╨╗╨╛╨║╨╛╨╗ ╨╕╨╖╨╜╨░╤ç╨░╨╗╤î╨╜╨╛ ╨▒╤ï╨╗ ╨╜╨╡╨╣╤é╤Ç╨░╨╗╤î╨╜╤ï╨╝.",
        "questionRu": "╨Æ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨╡ ╨ƒ╨░╨▓╨╗╨╛╨▓╨░ ╨║╨╛╨╗╨╛╨║╨╛╨╗ ╨╜╨░╤ç╨╕╨╜╨░╨╗╤ü╤Å ╨║╨░╨║:",
        "questionAz": "Pavlovun t╔Öcr├╝b╔Ösind╔Ö z╔Öng bel╔Ö ba┼ƒlad─▒:",
        "explanationAz": "Z╔Öng ╔Övv╔Ölc╔Ö neytral idi."
      },
      {
        "id": "q6-2",
        "question": "Negative reinforcement involves:",
        "questionKa": "ßâúßâÉßâáßâºßâ¥ßâñßâÿßâùßâÿ ßâÆßâÉßâ£ßâ¢ßâóßâÖßâÿßâ¬ßâößâæßâÉ ßâ¢ßâ¥ßâÿßâ¬ßâÉßâòßâí:",
        "options": [
          "Punishment",
          "Adding unpleasant stimulus",
          "Removing unpleasant stimulus",
          "Ignoring behavior"
        ],
        "optionsKa": [
          "ßâôßâÉßâíßâ»ßâÉßâí",
          "ßâúßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâ¥ ßâíßâóßâÿßâ¢ßâúßâÜßâÿßâí ßâôßâÉßâ¢ßâÉßâóßâößâæßâÉßâí",
          "ßâúßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâ¥ ßâíßâóßâÿßâ¢ßâúßâÜßâÿßâí ßâ¢ßâ¥ßâ¬ßâÿßâÜßâößâæßâÉßâí",
          "ßâÑßâ¬ßâößâòßâÿßâí ßâÿßâÆßâ£ßâ¥ßâáßâÿßâáßâößâæßâÉßâí"
        ],
       export const FACTS: Fact[] = [
  {
    "id": 1,
    "text": "Your brain uses about 20% of your body's total energy, despite being only 2% of your body weight.",
    "textKa": "ßâùßâÑßâòßâößâ£ßâÿ ßâóßâòßâÿßâ£ßâÿ ßâíßâ«ßâößâúßâÜßâÿßâí ßâ¢ßâùßâÜßâÿßâÉßâ£ßâÿ ßâößâ£ßâößâáßâÆßâÿßâÿßâí 20%-ßâí ßâ¢ßâ¥ßâÿßâ«ßâ¢ßâÉßâáßâí, ßâ¢ßâÿßâúßâ«ßâößâôßâÉßâòßâÉßâô ßâÿßâ¢ßâÿßâíßâÉ, ßâáßâ¥ßâ¢ ßâíßâ«ßâößâúßâÜßâÿßâí ßâ¼ßâ¥ßâ£ßâÿßâí ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô 2%-ßâí ßâ¿ßâößâÉßâôßâÆßâößâ£ßâí.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "╨£╨╛╨╖╨│ ╨╕╤ü╨┐╨╛╨╗╤î╨╖╤â╨╡╤é ╨╛╨║╨╛╨╗╨╛ 20% ╨▓╤ü╨╡╨╣ ╤ì╨╜╨╡╤Ç╨│╨╕╨╕ ╨▓╨░╤ê╨╡╨│╨╛ ╤é╨╡╨╗╨░, ╨╜╨╡╤ü╨╝╨╛╤é╤Ç╤Å ╨╜╨░ ╤é╨╛, ╤ç╤é╨╛ ╨╡╨│╨╛ ╨╝╨░╤ü╤ü╨░ ╤ü╨╛╤ü╤é╨░╨▓╨╗╤Å╨╡╤é ╨▓╤ü╨╡╨│╨╛ 2% ╨╛╤é ╨▓╨╡╤ü╨░ ╨▓╨░╤ê╨╡╨│╨╛ ╤é╨╡╨╗╨░.",
    "textHy": "╒ü╒Ñ╓Ç ╒╕╓é╒▓╒Ñ╒▓╒¿ ╓à╒ú╒┐╒í╒ú╒╕╓Ç╒«╒╕╓é╒┤ ╒º ╒▒╒Ñ╓Ç ╒┤╒í╓Ç╒┤╒╢╒½ ╒¿╒╢╒ñ╒░╒í╒╢╒╕╓é╓Ç ╒º╒╢╒Ñ╓Ç╒ú╒½╒í╒╡╒½ ╒┤╒╕╒┐ 20%-╒¿, ╒╣╒╢╒í╒╡╒í╒« ╒í╒╡╒╢ ╒»╒í╒ª╒┤╒╕╓é╒┤ ╒º ╒▒╒Ñ╓Ç ╒┤╒í╓Ç╒┤╒╢╒½ ╓ä╒í╒╖╒½ ╒¿╒╢╒ñ╒í╒┤╒Ñ╒╢╒¿ 2%-╒¿:",
    "textAz": "Beyniniz b╔Öd╔Ön ├º╔Ökinizin yaln─▒z 2%-i olmas─▒na baxmayaraq, b╔Öd╔Öninizin ├╝mumi enerjisinin t╔Öxmin╔Ön 20%-ni istifad╔Ö edir."
  },
  {
    "id": 2,
    "text": "The average person has about 6,200 thoughts per day, according to a 2020 study.",
    "textKa": "ßâíßâÉßâ¿ßâúßâÉßâÜßâ¥ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâí ßâôßâªßâößâ¿ßâÿ ßâôßâÉßâÉßâ«ßâÜßâ¥ßâößâæßâÿßâù 6,200 ßâÉßâûßâáßâÿ ßâÉßâÑßâòßâí, 2020 ßâ¼ßâÜßâÿßâí ßâÖßâòßâÜßâößâòßâÿßâí ßâ¢ßâÿßâ«ßâößâôßâòßâÿßâù.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:head-lightbulb-outline",
    "textRu": "╨í╨╛╨│╨╗╨░╤ü╨╜╨╛ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Ä 2020 ╨│╨╛╨┤╨░, ╤â ╤ü╤Ç╨╡╨┤╨╜╨╡╤ü╤é╨░╤é╨╕╤ü╤é╨╕╤ç╨╡╤ü╨║╨╛╨│╨╛ ╤ç╨╡╨╗╨╛╨▓╨╡╨║╨░ ╨▓ ╨┤╨╡╨╜╤î ╨▓╨╛╨╖╨╜╨╕╨║╨░╨╡╤é ╨╛╨║╨╛╨╗╨╛ 6200 ╨╝╤ï╤ü╨╗╨╡╨╣.",
    "textHy": "╘╕╒╜╒┐ 2020 ╒⌐╒╛╒í╒»╒í╒╢╒½ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒í╒╢, ╒┤╒½╒╗╒½╒╢ ╒░╒í╒╖╒╛╒╕╒╛ ╒┤╒í╓Ç╒ñ╒╢ ╓à╓Ç╒í╒»╒í╒╢ ╒╕╓é╒╢╒Ñ╒╢╒╕╓é╒┤ ╒º ╒┤╒╕╒┐ 6200 ╒┤╒½╒┐╓ä:",
    "textAz": "2020-ci il ara┼ƒd─▒rmas─▒na g├╢r╔Ö, orta hesabla bir insan─▒n g├╝nd╔Ö t╔Öxmin╔Ön 6200 d├╝┼ƒ├╝nc╔Ösi var."
  },
  {
    "id": 3,
    "text": "Memories are distributed across networks of neurons, not stored in one place.",
    "textKa": "ßâ¢ßâ¥ßâÆßâ¥ßâ£ßâößâæßâößâæßâÿ ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâÿßâí ßâÑßâíßâößâÜßâößâæßâ¿ßâÿßâÉ ßâÆßâÉßâ£ßâÉßâ¼ßâÿßâÜßâößâæßâúßâÜßâÿ, ßâôßâÉ ßâÉßâáßâÉ ßâößâáßâù ßâÉßâôßâÆßâÿßâÜßâÉßâí.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:memory",
    "textRu": "╨Æ╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╤Å ╤Ç╨░╤ü╨┐╤Ç╨╡╨┤╨╡╨╗╨╡╨╜╤ï ╨┐╨╛ ╤ü╨╡╤é╤Å╨╝ ╨╜╨╡╨╣╤Ç╨╛╨╜╨╛╨▓, ╨░ ╨╜╨╡ ╤à╤Ç╨░╨╜╤Å╤é╤ü╤Å ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╝╨╡╤ü╤é╨╡.",
    "textHy": "╒Ç╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒ó╒í╒╖╒¡╒╛╒╕╓é╒┤ ╒Ñ╒╢ ╒╢╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç╒½ ╓ü╒í╒╢╓ü╒Ñ╓Ç╒╕╓é╒┤, ╒í╒╡╒¼ ╒╕╒╣ ╒⌐╒Ñ ╒║╒í╒░╒╛╒╕╓é╒┤ ╒Ñ╒╢ ╒┤╒Ñ╒» ╒┐╒Ñ╒▓╒╕╓é╒┤:",
    "textAz": "Yadda┼ƒlar bir yerd╔Ö saxlan─▒lmayan neyron ┼ƒ╔Öb╔Ök╔Öl╔Öri aras─▒nda paylan─▒r."
  },
  {
    "id": 4,
    "text": "The \"doorway effect\": Walking through a doorway makes you forget what you were thinking.",
    "textKa": "\"ßâÖßâÉßâáßâÿßâí ßâößâñßâößâÑßâóßâÿ\": ßâÖßâÉßâáßâ¿ßâÿ ßâÆßâÉßâòßâÜßâÉ ßâÆßâÉßâÆßâÉßâòßâÿßâ¼ßâºßâößâæßâÿßâ£ßâößâæßâí ßâáßâÉßâûßâö ßâñßâÿßâÑßâáßâ¥ßâæßâôßâÿßâù.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:door-open",
    "textRu": "┬½╨¡╤ä╤ä╨╡╨║╤é ╨┤╨▓╨╡╤Ç╨╜╨╛╨│╨╛ ╨┐╤Ç╨╛╨╡╨╝╨░┬╗: ╨┐╤Ç╨╛╤à╨╛╨┤ ╤ç╨╡╤Ç╨╡╨╖ ╨┤╨▓╨╡╤Ç╨╜╨╛╨╣ ╨┐╤Ç╨╛╨╡╨╝ ╨╖╨░╤ü╤é╨░╨▓╨╗╤Å╨╡╤é ╨▓╨░╤ü ╨╖╨░╨▒╤ï╤é╤î, ╨╛ ╤ç╨╡╨╝ ╨▓╤ï ╨┤╤â╨╝╨░╨╗╨╕.",
    "textHy": "┬½╘┤╒╝╒╢╒Ñ╓Ç╒½ ╒º╓å╒Ñ╒»╒┐┬╗. ╘┤╒╝╒í╒╢ ╒┤╒½╒╗╒╕╒╛ ╒í╒╢╓ü╒╢╒Ñ╒¼╒¿ ╒╜╒┐╒½╒║╒╕╓é╒┤ ╒º ╒┤╒╕╒╝╒í╒╢╒í╒¼, ╒⌐╒Ñ ╒½╒╢╒╣ ╒º╒½╓ä ╒┤╒┐╒í╒«╒╕╓é╒┤:",
    "textAz": "\"Qap─▒ effekti\": Qap─▒dan ke├ºm╔Ök n╔Ö d├╝┼ƒ├╝nd├╝y├╝n├╝z├╝ unutdurur."
  },
  {
    "id": 5,
    "text": "We consciously process about 50 bits per second, despite senses receiving millions.",
    "textKa": "ßâ¿ßâößâÆßâ£ßâößâæßâúßâÜßâÉßâô ßâ¼ßâÉßâ¢ßâ¿ßâÿ ßâôßâÉßâÉßâ«ßâÜßâ¥ßâößâæßâÿßâù 50 ßâæßâÿßâóßâí ßâ¼ßâÉßâ¢ßâ¿ßâÿ, ßâ¢ßâÿßâúßâ«ßâößâôßâÉßâòßâÉßâô ßâÿßâ¢ßâÿßâíßâÉ, ßâáßâ¥ßâ¢ ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâæßâÿ ßâ¢ßâÿßâÜßâÿßâ¥ßâ£ßâ¥ßâæßâÿßâù ßâÿßâªßâößâæßâí.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:eye-settings-outline",
    "textRu": "╨£╤ï ╤ü╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╨╛ ╨╛╨▒╤Ç╨░╨▒╨░╤é╤ï╨▓╨░╨╡╨╝ ╨╛╨║╨╛╨╗╨╛ 50 ╨▒╨╕╤é ╨▓ ╤ü╨╡╨║╤â╨╜╨┤╤â, ╨╜╨╡╤ü╨╝╨╛╤é╤Ç╤Å ╨╜╨░ ╤é╨╛, ╤ç╤é╨╛ ╨╛╤Ç╨│╨░╨╜╤ï ╤ç╤â╨▓╤ü╤é╨▓ ╨┐╤Ç╨╕╨╜╨╕╨╝╨░╤Ä╤é ╨╝╨╕╨╗╨╗╨╕╨╛╨╜╤ï.",
    "textHy": "╒ä╒Ñ╒╢╓ä ╒ú╒½╒┐╒í╒»╓ü╒í╒ó╒í╓Ç ╒┤╒╖╒í╒»╒╕╓é╒┤ ╒Ñ╒╢╓ä ╒╛╒í╒╡╓Ç╒»╒╡╒í╒╢╒╕╓é╒┤ ╒┤╒╕╒┐ 50 ╒ó╒½╒⌐, ╒╣╒╢╒í╒╡╒í╒« ╒ª╒ú╒í╒╡╒í╓Ç╒í╒╢╒╢╒Ñ╓Ç╒¿ ╒╜╒┐╒í╒╢╒╕╓é╒┤ ╒Ñ╒╢ ╒┤╒½╒¼╒½╒╕╒╢╒╢╒Ñ╓Ç:",
    "textAz": "Hissl╔Örin milyonlarla q╔Öbul etm╔Ösin╔Ö baxmayaraq, biz saniy╔Öd╔Ö t╔Öxmin╔Ön 50 biti ┼ƒ├╝urlu ┼ƒ╔Ökild╔Ö emal edirik."
  },
  {
    "id": 6,
    "text": "In Milgram's experiment, 65% administered what they believed were lethal shocks under authority.",
    "textKa": "ßâ¢ßâÿßâÜßâÆßâáßâÉßâ¢ßâÿßâí ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâ¿ßâÿ 65%-ßâ¢ßâÉ ßâ¢ßâÿßâíßâ¬ßâÉ ßâíßâÉßâ¿ßâÿßâ¿ßâÿ ßâößâÜßâößâÑßâóßâáßâ¥ßâ¿ßâ¥ßâÖßâÿ, ßâáßâ¥ßâ¢ßâößâÜßâÿßâ¬ ßâíßâÉßâíßâÿßâÖßâòßâôßâÿßâÜßâ¥ßâô ßâ¢ßâÿßâÿßâ⌐ßâ£ßâÿßâÉ.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:flash-alert-outline",
    "textRu": "╨Æ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨╡ ╨£╨╕╨╗╨│╤Ç╤ì╨╝╨░ 65% ╤â╤ç╨░╤ü╤é╨╜╨╕╨║╨╛╨▓ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨░ ╨┐╤Ç╨╕╨╝╨╡╨╜╤Å╨╗╨╕ ╤é╨╛, ╤ç╤é╨╛, ╨┐╨╛ ╨╕╤à ╨╝╨╜╨╡╨╜╨╕╤Ä, ╨▒╤ï╨╗╨╛ ╤ü╨╝╨╡╤Ç╤é╨╡╨╗╤î╨╜╤ï╨╝ ╤ì╨╗╨╡╨║╤é╤Ç╨╛╤ê╨╛╨║╨╛╨╝ ╨┐╨╛╨┤ ╤Ç╤â╨║╨╛╨▓╨╛╨┤╤ü╤é╨▓╨╛╨╝.",
    "textHy": "╒ä╒½╒¼╒ú╓Ç╒í╒┤╒½ ╓â╒╕╓Ç╒▒╒½ ╒¬╒í╒┤╒í╒╢╒í╒» 65%-╒¿ ╒»╒í╒╝╒í╒╛╒í╓Ç╒Ñ╒¼ ╒º ╒í╒╡╒╢, ╒½╒╢╒╣ ╒╢╓Ç╒í╒╢╓ä ╒»╒í╓Ç╒«╒╕╓é╒┤ ╒º╒½╒╢, ╒╕╓Ç ╒┤╒í╒░╒í╓ü╒╕╓é ╓ü╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç ╒º╒½╒╢ ╒½╒╖╒¡╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╢╒Ñ╓Ç╓ä╒╕:",
    "textAz": "Milgram─▒n t╔Öcr├╝b╔Ösind╔Ö, 65% hakimiyy╔Öt alt─▒nda ├╢ld├╝r├╝c├╝ ┼ƒoklar oldu─ƒuna inand─▒qlar─▒ ┼ƒeyi t╔Ötbiq etdi."
  },
  {
    "id": 7,
    "text": "The placebo effect works even when people know they are taking a placebo.",
    "textKa": "ßâ₧ßâÜßâÉßâ¬ßâößâæßâ¥ßâí ßâößâñßâößâÑßâóßâÿ ßâ¢ßâúßâ¿ßâÉßâ¥ßâæßâí ßâ¢ßâÉßâ¿ßâÿßâ£ßâÉßâ¬, ßâáßâ¥ßâ¬ßâÉ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâ¢ßâÉ ßâÿßâ¬ßâÿßâÉßâ£, ßâáßâ¥ßâ¢ ßâ₧ßâÜßâÉßâ¬ßâößâæßâ¥ßâí ßâÿßâªßâößâæßâößâ£.",
    "source": "Health Psychology",
    "category": "Health",
    "icon": "mdi:pill",
    "textHy": "╒è╒¼╒í╓ü╒Ñ╒ó╒╕╒╡╒½ ╒º╓å╒Ñ╒»╒┐╒¿ ╒ú╒╕╓Ç╒«╒╕╓é╒┤ ╒º ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒í╒╡╒╢ ╒ñ╒Ñ╒║╓ä╒╕╓é╒┤, ╒Ñ╓Ç╒ó ╒┤╒í╓Ç╒ñ╒½╒» ╒ú╒½╒┐╒Ñ╒╢, ╒╕╓Ç ╒½╓Ç╒Ñ╒╢╓ä ╒║╒¼╒í╓ü╒Ñ╒ó╒╕ ╒Ñ╒╢ ╒¿╒╢╒ñ╒╕╓é╒╢╒╕╓é╒┤:",
    "textRu": "╨¡╤ä╤ä╨╡╨║╤é ╨┐╨╗╨░╤å╨╡╨▒╨╛ ╤Ç╨░╨▒╨╛╤é╨░╨╡╤é, ╨┤╨░╨╢╨╡ ╨║╨╛╨│╨┤╨░ ╨╗╤Ä╨┤╨╕ ╨╖╨╜╨░╤Ä╤é, ╤ç╤é╨╛ ╨┐╤Ç╨╕╨╜╨╕╨╝╨░╤Ä╤é ╨┐╨╗╨░╤å╨╡╨▒╨╛.",
    "textAz": "Plasebo effekti h╔Ötta insanlar plasebo q╔Öbul etdikl╔Örini bils╔Öl╔Ör d╔Ö i┼ƒl╔Öyir."
  },
  {
    "id": 8,
    "text": "Babies recognize their mother's voice from birth, having listened in the womb.",
    "textKa": "ßâ⌐ßâòßâÿßâÜßâößâæßâÿ ßâôßâößâôßâÿßâí ßâ«ßâ¢ßâÉßâí ßâôßâÉßâæßâÉßâôßâößâæßâÿßâôßâÉßâ£ ßâÉßâ¢ßâ¥ßâÿßâ¬ßâ£ßâ¥ßâæßâößâ£, ßâáßâÉßâôßâÆßâÉßâ£ ßâíßâÉßâ¿ßâòßâÿßâÜßâ¥ßâíßâ£ßâ¥ßâ¿ßâÿ ßâúßâíßâ¢ßâößâ£ßâôßâ£ßâößâ£.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:baby-carriage",
    "textRu": "╨£╨╗╨░╨┤╨╡╨╜╤å╤ï ╤â╨╖╨╜╨░╤Ä╤é ╨│╨╛╨╗╨╛╤ü ╨╝╨░╤é╨╡╤Ç╨╕ ╤ü ╤Ç╨╛╨╢╨┤╨╡╨╜╨╕╤Å, ╨┐╤Ç╨╕╤ü╨╗╤â╤ê╨░╨▓╤ê╨╕╤ü╤î ╨║ ╨╜╨╡╨╝╤â ╨╡╤ë╨╡ ╨▓ ╤â╤é╤Ç╨╛╨▒╨╡ ╨╝╨░╤é╨╡╤Ç╨╕.",
    "textHy": "╘╡╓Ç╒Ñ╒¡╒í╒╢╒Ñ╓Ç╒¿ ╒│╒í╒╢╒í╒╣╒╕╓é╒┤ ╒Ñ╒╢ ╒½╓Ç╒Ñ╒╢╓ü ╒┤╒╕╓Ç ╒▒╒í╒╡╒╢╒¿ ╒«╒╢╒╢╒ñ╒½╓ü╒¥ ╒¼╒╜╒Ñ╒¼╒╕╒╛ ╒í╓Ç╒ú╒í╒╢╒ñ╒╕╓é╒┤:",
    "textAz": "K├╢rp╔Öl╔Ör ana b╔Ötnind╔Ö dinl╔Öy╔Ör╔Ök anas─▒n─▒n s╔Ösini do─ƒu┼ƒdan tan─▒y─▒rlar."
  },
  {
    "id": 9,
    "text": "Even forced smiling can improve your mood via the facial feedback hypothesis.",
    "textKa": "ßâÿßâ½ßâúßâÜßâößâæßâÿßâùßâÿ ßâªßâÿßâ¢ßâÿßâÜßâÿßâ¬ ßâÖßâÿ ßâ¿ßâößâúßâ½ßâÜßâÿßâÉ ßâÆßâÉßâ£ßâ¼ßâºßâ¥ßâæßâÿßâí ßâÆßâÉßâúßâ¢ßâ»ßâ¥ßâæßâößâíßâößâæßâÉ, ßâíßâÉßâ«ßâÿßâí ßâúßâÖßâúßâÖßâÉßâòßâ¿ßâÿßâáßâÿ ßâÉßâáßâíßâößâæßâ¥ßâæßâÿßâí ßâ░ßâÿßâ₧ßâ¥ßâùßâößâûßâÿßâí ßâ¢ßâÿßâ«ßâößâôßâòßâÿßâù.",
    "source": "Emotion Research",
    "category": "Emotion",
    "icon": "mdi:emoticon-happy-outline",
    "textRu": "╨ö╨░╨╢╨╡ ╨▓╤ï╨╜╤â╨╢╨┤╨╡╨╜╨╜╨░╤Å ╤â╨╗╤ï╨▒╨║╨░ ╨╝╨╛╨╢╨╡╤é ╤â╨╗╤â╤ç╤ê╨╕╤é╤î ╨▓╨░╤ê╨╡ ╨╜╨░╤ü╤é╤Ç╨╛╨╡╨╜╨╕╨╡ ╨▒╨╗╨░╨│╨╛╨┤╨░╤Ç╤Å ╨│╨╕╨┐╨╛╤é╨╡╨╖╨╡ ╨╛╨▒╤Ç╨░╤é╨╜╨╛╨╣ ╤ü╨▓╤Å╨╖╨╕ ╨┐╨╛ ╨╗╨╕╤å╤â.",
    "textHy": "╒å╒╕╓é╒╡╒╢╒½╒╜╒» ╒░╒í╓Ç╒»╒í╒ñ╒½╓Ç ╒¬╒║╒┐╒í╒¼╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º ╒ó╒í╓Ç╒Ñ╒¼╒í╒╛╒Ñ╒¼ ╒▒╒Ñ╓Ç ╒┐╓Ç╒í╒┤╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒ñ╒Ñ╒┤╓ä╒½ ╒░╒Ñ╒┐╒í╒ñ╒í╓Ç╒▒ ╒»╒í╒║╒½ ╒╛╒í╓Ç╒»╒í╒«╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛:",
    "textAz": "H╔Ötta m╔Öcburi t╔Öb╔Öss├╝m d╔Ö ├╝z r╔Öyi hipotezi vasit╔Ösil╔Ö ╔Öhval─▒n─▒z─▒ yax┼ƒ─▒la┼ƒd─▒ra bil╔Ör."
  },
  {
    "id": 10,
    "text": "Dunning-Kruger effect: People with low knowledge overestimate competence; experts underestimate.",
    "textKa": "ßâôßâÉßâ£ßâÿßâ£ßâÆ-ßâÖßâáßâúßâÆßâößâáßâÿßâí ßâößâñßâößâÑßâóßâÿ: ßâ¢ßâ¬ßâÿßâáßâö ßâ¬ßâ¥ßâôßâ£ßâÿßâí ßâ¢ßâÑßâ¥ßâ£ßâö ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâÿ ßâÆßâÉßâôßâÉßâÉßâ¡ßâÉßâáßâæßâößâæßâößâ£ ßâÖßâ¥ßâ¢ßâ₧ßâößâóßâößâ£ßâ¬ßâÿßâÉßâí, ßâößâÑßâíßâ₧ßâößâáßâóßâößâæßâÿ ßâÖßâÿ ßâÉßâ£ßâÉßâ¬ßâòßâÉßâÜßâößâæßâößâ£.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-bell-curve-cumulative",
    "textRu": "╨¡╤ä╤ä╨╡╨║╤é ╨ö╨░╨╜╨╜╨╕╨╜╨│╨░-╨Ü╤Ç╤Ä╨│╨╡╤Ç╨░: ╨╗╤Ä╨┤╨╕ ╤ü ╨╜╨╕╨╖╨║╨╕╨╝ ╤â╤Ç╨╛╨▓╨╜╨╡╨╝ ╨╖╨╜╨░╨╜╨╕╨╣ ╨┐╨╡╤Ç╨╡╨╛╤å╨╡╨╜╨╕╨▓╨░╤Ä╤é ╨║╨╛╨╝╨┐╨╡╤é╨╡╨╜╤é╨╜╨╛╤ü╤é╤î; ╤ì╨║╤ü╨┐╨╡╤Ç╤é╤ï ╨╜╨╡╨┤╨╛╨╛╤å╨╡╨╜╨╕╨▓╨░╤Ä╤é.",
    "textHy": "╘┤╒í╒╢╒½╒╢╒ú-╘┐╓Ç╒╡╒╕╓é╒ú╒Ñ╓Ç╒½ ╒º╓å╒Ñ╒»╒┐. ╓ü╒í╒«╓Ç ╒ú╒½╒┐╒Ñ╒¼╒½╓ä╒╢╒Ñ╓Ç ╒╕╓é╒╢╒Ñ╓ü╒╕╒▓ ╒┤╒í╓Ç╒ñ╒½╒» ╒ú╒Ñ╓Ç╒í╒ú╒╢╒í╒░╒í╒┐╒╕╓é╒┤ ╒Ñ╒╢ ╒½╓Ç╒í╒╛╒í╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿. ╓â╒╕╓Ç╒▒╒í╒ú╒Ñ╒┐╒╢╒Ñ╓Ç╒¿ ╒⌐╒Ñ╓Ç╒í╒ú╒╢╒í╒░╒í╒┐╒╕╓é╒┤ ╒Ñ╒╢.",
    "textAz": "Dunning-Kruger effekti: Biliyi az olan insanlar s╔Öri┼ƒt╔Öni y├╝ks╔Ök qiym╔Ötl╔Öndirir; ekspertl╔Ör az qiym╔Ötl╔Öndirirl╔Ör."
  },
  {
    "id": 11,
    "text": "Your unconscious processes 11 million info pieces per second; conscious handles about 40.",
    "textKa": "ßâùßâÑßâòßâößâ£ßâÿ ßâÑßâòßâößâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâößâæßâÉ ßâ¼ßâÉßâ¢ßâ¿ßâÿ 11 ßâ¢ßâÿßâÜßâÿßâ¥ßâ£ ßâößâáßâùßâößâúßâÜ ßâÿßâ£ßâñßâ¥ßâáßâ¢ßâÉßâ¬ßâÿßâÉßâí ßâÉßâ¢ßâúßâ¿ßâÉßâòßâößâæßâí; ßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâößâæßâÉ ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô 40-ßâí.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:head-sync-outline",
    "textHy": "╒ü╒Ñ╓Ç ╒í╒╢╒ú╒½╒┐╒í╒»╓ü╒í╒»╒í╒╢╒¿ ╒┤╒Ñ╒» ╒╛╒í╒╡╓Ç╒»╒╡╒í╒╢╒╕╓é╒┤ ╒┤╒╖╒í╒»╒╕╓é╒┤ ╒º 11 ╒┤╒½╒¼╒½╒╕╒╢ ╒┐╒Ñ╒▓╒Ñ╒»╒í╒┐╒╛╒í╒»╒í╒╢ ╒»╒┐╒╕╓Ç. ╒ú╒½╒┐╒í╒»╒½╓ü ╒ó╒╝╒╢╒í╒»╒╢╒Ñ╓Ç ╒┤╒╕╒┐ 40.",
    "textRu": "╨Æ╨░╤ê╨╡ ╨┐╨╛╨┤╤ü╨╛╨╖╨╜╨░╨╜╨╕╨╡ ╨╛╨▒╤Ç╨░╨▒╨░╤é╤ï╨▓╨░╨╡╤é 11 ╨╝╨╕╨╗╨╗╨╕╨╛╨╜╨╛╨▓ ╤ä╤Ç╨░╨│╨╝╨╡╨╜╤é╨╛╨▓ ╨╕╨╜╤ä╨╛╤Ç╨╝╨░╤å╨╕╨╕ ╨▓ ╤ü╨╡╨║╤â╨╜╨┤╤â; ╤ü╨╛╨╖╨╜╨░╨╜╨╕╨╡ ╨╛╨▒╤Ç╨░╨▒╨░╤é╤ï╨▓╨░╨╡╤é ╨╛╨║╨╛╨╗╨╛ 40.",
    "textAz": "┼₧├╝ursuzlu─ƒunuz saniy╔Öd╔Ö 11 milyon m╔Ölumat par├ºas─▒n─▒ emal edir; ┼ƒ├╝urlu tutacaqlar t╔Öxmin╔Ön 40."
  },
  {
    "id": 12,
    "text": "Missing one night of sleep can impair memory by up to 40%.",
    "textKa": "ßâößâáßâùßâÿ ßâªßâÉßâ¢ßâÿßâí ßâ½ßâÿßâÜßâÿßâí ßâÆßâÉßâ¢ßâ¥ßâóßâ¥ßâòßâößâæßâÉßâ¢ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÉ 40%-ßâ¢ßâôßâö ßâÆßâÉßâÉßâúßâÉßâáßâößâíßâ¥ßâí.",
    "source": "Sleep Research",
    "category": "Memory",
    "icon": "mdi:power-sleep",
    "textHy": "╒ä╒Ñ╒» ╒ú╒½╒╖╒Ñ╓Ç ╒╣╓ä╒╢╒Ñ╒¼╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º ╒╛╒í╒┐╒⌐╒í╓Ç╒í╒╢╒í╒¼ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒┤╒½╒╢╒╣╓ç 40%-╒╕╒╛:",
    "textRu": "╨₧╤é╤ü╤â╤é╤ü╤é╨▓╨╕╨╡ ╤ü╨╜╨░ ╨╜╨░ ╨╛╨┤╨╜╤â ╨╜╨╛╤ç╤î ╨╝╨╛╨╢╨╡╤é ╤â╤à╤â╨┤╤ê╨╕╤é╤î ╨┐╨░╨╝╤Å╤é╤î ╨┤╨╛ 40%.",
    "textAz": "Bir gec╔Ö yuxunu qa├º─▒rmaq yadda┼ƒ─▒ 40%-╔Ö q╔Öd╔Ör z╔Öifl╔Öd╔Ö bil╔Ör."
  },
  {
    "id": 13,
    "text": "Mirror neurons fire when you act AND when you watch others actΓÇöthe basis of empathy.",
    "textKa": "ßâíßâÉßâáßâÖßâÿßâí ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâÿ ßâÉßâÑßâóßâÿßâúßâáßâôßâößâæßâÉ, ßâáßâ¥ßâè ßâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâù ßâôßâÉ ßâáßâ¥ßâè ßâíßâ«ßâòßâößâæßâí ßâúßâºßâúßâáßâößâæßâùΓÇößâößâ¢ßâ₧ßâÉßâùßâÿßâÿßâí ßâíßâÉßâñßâúßâ½ßâòßâößâÜßâÿ.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:mirror-variant",
    "textRu": "╨ù╨╡╤Ç╨║╨░╨╗╤î╨╜╤ï╨╡ ╨╜╨╡╨╣╤Ç╨╛╨╜╤ï ╨░╨║╤é╨╕╨▓╨╕╤Ç╤â╤Ä╤é╤ü╤Å, ╨║╨╛╨│╨┤╨░ ╨▓╤ï ╨┤╨╡╨╣╤ü╤é╨▓╤â╨╡╤é╨╡ ╨ÿ ╨║╨╛╨│╨┤╨░ ╨▓╤ï ╨╜╨░╨▒╨╗╤Ä╨┤╨░╨╡╤é╨╡ ╨╖╨░ ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å╨╝╨╕ ╨┤╤Ç╤â╨│╨╕╤à ΓÇö ╨╛╤ü╨╜╨╛╨▓╨░ ╤ì╨╝╨┐╨░╤é╨╕╨╕.",
    "textHy": "╒Ç╒í╒╡╒Ñ╒¼╒í╒╡╒½╒╢ ╒╢╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç╒¿ ╒»╓Ç╒í╒»╒╕╓é╒┤ ╒Ñ╒╢, ╒Ñ╓Ç╒ó ╒ñ╒╕╓é╓ä ╒ú╒╕╓Ç╒«╒╕╓é╒┤ ╒Ñ╓ä ╘╡╒Ä ╒Ñ╓Ç╒ó ╒ñ╒½╒┐╒╕╓é╒┤ ╒Ñ╓ä ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒½ ╒ú╒╕╓Ç╒«╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿╒¥ ╒»╒í╓Ç╒Ñ╒»╓ü╒í╒╢╓ä╒½ ╒░╒½╒┤╓ä╒¿:",
    "textAz": "G├╝zg├╝ neyronlar─▒ siz h╔Ör╔Ök╔Öt ed╔Önd╔Ö v╔Ö ba┼ƒqalar─▒n─▒n h╔Ör╔Ök╔Ötl╔Örini izl╔Ödiyiniz zaman i┼ƒ╔Ö d├╝┼ƒ├╝r - empatiyan─▒n ╔Ösas─▒d─▒r."
  },
  {
    "id": 14,
    "text": "The Stanford Prison Experiment was stopped after 6 days of a planned 2-week run.",
    "textKa": "ßâíßâóßâößâ£ßâñßâ¥ßâáßâôßâÿßâí ßâ¬ßâÿßâ«ßâÿßâí ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ ßâôßâÉßâÆßâößâÆßâ¢ßâÿßâÜßâÿ 2 ßâÖßâòßâÿßâáßâÿßâôßâÉßâ£ ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô 6 ßâôßâªßâößâ¿ßâÿ ßâ¿ßâößâ¼ßâºßâôßâÉ.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:shield-alert-outline",
    "textRu": "╨í╤é╤ì╨╜╤ä╨╛╤Ç╨┤╤ü╨║╨╕╨╣ ╤é╤Ä╤Ç╨╡╨╝╨╜╤ï╨╣ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é ╨▒╤ï╨╗ ╨╛╤ü╤é╨░╨╜╨╛╨▓╨╗╨╡╨╜ ╤ç╨╡╤Ç╨╡╨╖ 6 ╨┤╨╜╨╡╨╣ ╨╖╨░╨┐╨╗╨░╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╜╨╛╨│╨╛ ╨┤╨▓╤â╤à╨╜╨╡╨┤╨╡╨╗╤î╨╜╨╛╨│╨╛ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨░.",
    "textHy": "╒ì╒⌐╒Ñ╒╢╓å╒╕╓Ç╒ñ╒½ ╒ó╒í╒╢╒┐╒í╒╡╒½╒╢ ╓â╒╕╓Ç╒▒╒¿ ╒ñ╒í╒ñ╒í╓Ç╒Ñ╓ü╒╛╒Ñ╒¼ ╒º ╒«╓Ç╒í╒ú╓Ç╒╛╒í╒« 2-╒╖╒í╒ó╒í╒⌐╒╡╒í ╒╛╒í╒ª╓ä╒½╓ü 6 ╓à╓Ç ╒░╒Ñ╒┐╒╕:",
    "textAz": "Stanford H╔Öbsxana T╔Öcr├╝b╔Ösi 6 g├╝nl├╝k planla┼ƒd─▒r─▒lm─▒┼ƒ 2 h╔Öft╔Ölik qa├º─▒┼ƒdan sonra dayand─▒r─▒ld─▒."
  },
  {
    "id": 15,
    "text": "Fear of public speaking affects ~75% of peopleΓÇömore common than fear of death.",
    "textKa": "ßâíßâÉßâ»ßâÉßâáßâ¥ßâô ßâÆßâÉßâ¢ßâ¥ßâíßâòßâÜßâÿßâí ßâ¿ßâÿßâ¿ßâÿ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâÿßâí ~75%-ßâí ßâÉßâ¼ßâúßâ«ßâößâæßâíΓÇößâÿßâí ßâíßâÿßâÖßâòßâôßâÿßâÜßâÿßâí ßâ¿ßâÿßâ¿ßâûßâö ßâÆßâÉßâòßâáßâ¬ßâößâÜßâößâæßâúßâÜßâÿßâÉ.",
    "source": "Clinical Psychology",
    "category": "Anxiety",
    "icon": "mdi:microphone-off",
    "textHy": "╒Ç╒í╒╢╓Ç╒í╒╡╒½╒╢ ╒Ñ╒¼╒╕╓é╒╡╒⌐╒½╓ü ╒╛╒í╒¡╒¿ ╒í╒ª╒ñ╒╕╓é╒┤ ╒º ╒┤╒í╓Ç╒ñ╒»╒í╒╢╓ü ╒┤╒╕╒┐ 75%-╒½ ╒╛╓Ç╒í╒¥ ╒í╒╛╒Ñ╒¼╒½ ╒░╒í╒│╒í╒¡, ╓ä╒í╒╢ ╒┤╒í╒░╒╛╒í╒╢ ╒╛╒í╒¡╒¿:",
    "textRu": "╨í╤é╤Ç╨░╤à ╨┐╤â╨▒╨╗╨╕╤ç╨╜╤ï╤à ╨▓╤ï╤ü╤é╤â╨┐╨╗╨╡╨╜╨╕╨╣ ╨╖╨░╤é╤Ç╨░╨│╨╕╨▓╨░╨╡╤é ╨╛╨║╨╛╨╗╨╛ 75% ╨╗╤Ä╨┤╨╡╨╣ ΓÇö ╤ç╨░╤ë╨╡, ╤ç╨╡╨╝ ╤ü╤é╤Ç╨░╤à ╤ü╨╝╨╡╤Ç╤é╨╕.",
    "textAz": "Natiqlik qorxusu insanlar─▒n ~75%-n╔Ö t╔Ösir edir - ├╢l├╝m qorxusundan daha ├ºox."
  },
  {
    "id": 16,
    "text": "Halo effect: Attractive people are rated as more intelligent, kind, and competent.",
    "textKa": "ßâ░ßâÉßâÜßâ¥ßâí ßâößâñßâößâÑßâóßâÿ: ßâ¢ßâÿßâ¢ßâûßâÿßâôßâòßâößâÜ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâí ßâúßâñßâáßâ¥ ßâÆßâ¥ßâ£ßâÿßâößâáßâÉßâô, ßâÖßâößâùßâÿßâÜßâÉßâô ßâôßâÉ ßâÖßâ¥ßâ¢ßâ₧ßâößâóßâößâ£ßâóßâúßâáßâÉßâô ßâÉßâñßâÉßâíßâößâæßâößâ£.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:star-circle-outline",
    "textRu": "╨¡╤ä╤ä╨╡╨║╤é ╨╛╤Ç╨╡╨╛╨╗╨░: ╨┐╤Ç╨╕╨▓╨╗╨╡╨║╨░╤é╨╡╨╗╤î╨╜╤ï╨╡ ╨╗╤Ä╨┤╨╕ ╨╛╤å╨╡╨╜╨╕╨▓╨░╤Ä╤é╤ü╤Å ╨║╨░╨║ ╨▒╨╛╨╗╨╡╨╡ ╤â╨╝╨╜╤ï╨╡, ╨┤╨╛╨▒╤Ç╤ï╨╡ ╨╕ ╨║╨╛╨╝╨┐╨╡╤é╨╡╨╜╤é╨╜╤ï╨╡.",
    "textHy": "╒Ç╒í╒¼╒╕ ╒º╓å╒Ñ╒»╒┐. ╒ú╓Ç╒í╒╛╒½╒╣ ╒┤╒í╓Ç╒ñ╒½╒» ╒ú╒╢╒í╒░╒í╒┐╒╛╒╕╓é╒┤ ╒Ñ╒╢ ╒╕╓Ç╒║╒Ñ╒╜ ╒í╒╛╒Ñ╒¼╒½ ╒¡╒Ñ╒¼╒í╓ü╒½, ╒ó╒í╓Ç╒½ ╓ç ╒ú╓Ç╒í╒ú╒Ñ╒┐:",
    "textAz": "Halo effekti: Cazib╔Ödar insanlar daha a─ƒ─▒ll─▒, xeyirxah v╔Ö bacar─▒ql─▒ olaraq qiym╔Ötl╔Öndirilir."
  },
  {
    "id": 17,
    "text": "Oxytocin, released during hugging and bonding, promotes trust and empathy.",
    "textKa": "ßâ¥ßâÑßâíßâÿßâóßâ¥ßâ¬ßâÿßâ£ßâÿ, ßâáßâ¥ßâ¢ßâößâÜßâÿßâ¬ ßâÆßâÉßâ¢ßâ¥ßâÿßâºßâ¥ßâñßâÉ ßâ⌐ßâÉßâ«ßâúßâóßâößâæßâÿßâíßâÉßâí ßâôßâÉ ßâ¢ßâÿßâæßâ¢ßâÿßâíßâÉßâí, ßâ«ßâößâÜßâí ßâúßâ¼ßâºßâ¥ßâæßâí ßâ£ßâôßâ¥ßâæßâÉßâíßâÉ ßâôßâÉ ßâößâ¢ßâ₧ßâÉßâùßâÿßâÉßâí.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:heart-pulse",
    "textRu": "╨₧╨║╤ü╨╕╤é╨╛╤å╨╕╨╜, ╨▓╤ï╨┤╨╡╨╗╤Å╨╡╨╝╤ï╨╣ ╨▓╨╛ ╨▓╤Ç╨╡╨╝╤Å ╨╛╨▒╤è╤Å╤é╨╕╨╣ ╨╕ ╨┐╤Ç╨╕╨▓╤Å╨╖╨░╨╜╨╜╨╛╤ü╤é╨╡╨╣, ╤ü╨┐╨╛╤ü╨╛╨▒╤ü╤é╨▓╤â╨╡╤é ╨┤╨╛╨▓╨╡╤Ç╨╕╤Ä ╨╕ ╤ü╨╛╤ç╤â╨▓╤ü╤é╨▓╨╕╤Ä.",
    "textHy": "╒ò╓ä╒╜╒½╒┐╒╕╓ü╒½╒╢╒¿, ╒╕╓Ç╒╢ ╒í╒ª╒í╒┐╒╛╒╕╓é╒┤ ╒º ╒ú╓Ç╒»╒í╒¡╒í╒╝╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╓ç ╒»╒í╒║╒½ ╒¬╒í╒┤╒í╒╢╒í╒», ╒¡╒⌐╒í╒╢╒╕╓é╒┤ ╒º ╒╛╒╜╒┐╒í╒░╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒╕╓é ╒»╒í╓Ç╒Ñ╒»╓ü╒í╒╢╓ä╒¿:",
    "textAz": "Qucaqla┼ƒma v╔Ö ba─ƒlanma zaman─▒ ifraz olunan oksitosin inam v╔Ö empatiya yarad─▒r."
  },
  {
    "id": 18,
    "text": "It takes 1/10th of a second to form a first impressionΓÇöand they tend to be accurate.",
    "textKa": "ßâ₧ßâÿßâáßâòßâößâÜßâÿ ßâ¿ßâùßâÉßâæßâößâ¡ßâôßâÿßâÜßâößâæßâÿßâí ßâ⌐ßâÉßâ¢ßâ¥ßâºßâÉßâÜßâÿßâæßâößâæßâÉßâí ßâ¼ßâÉßâ¢ßâÿßâí 1/10 ßâíßâ¡ßâÿßâáßâôßâößâæßâÉΓÇößâôßâÉ ßâÿßâíßâÿßâ£ßâÿ ßâ«ßâ¿ßâÿßâáßâÉßâô ßâûßâúßâíßâóßâÿßâÉ.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:timer-outline",
    "textHy": "╘▒╒╝╒í╒╗╒½╒╢ ╒┐╒║╒í╒╛╒╕╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╜╒┐╒Ñ╒▓╒«╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç ╒í╒╢╒░╓Ç╒í╒¬╒Ñ╒╖╒┐ ╒º ╒╛╒í╒╡╓Ç╒»╒╡╒í╒╢╒½ 1/10-╓Ç╒ñ ╒┤╒í╒╜╒¿, ╓ç ╒ñ╓Ç╒í╒╢╓ä ╒░╒í╒»╒╛╒í╒« ╒Ñ╒╢ ╒│╒╖╒ú╓Ç╒½╒┐ ╒¼╒½╒╢╒Ñ╒¼╒╕╓é:",
    "textRu": "╨ö╨╗╤Å ╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╨╜╨╕╤Å ╨┐╨╡╤Ç╨▓╨╛╨│╨╛ ╨▓╨┐╨╡╤ç╨░╤é╨╗╨╡╨╜╨╕╤Å ╤é╤Ç╨╡╨▒╤â╨╡╤é╤ü╤Å 1/10 ╤ü╨╡╨║╤â╨╜╨┤╤ï, ╨╕ ╨╛╨╜╨╛, ╨║╨░╨║ ╨┐╤Ç╨░╨▓╨╕╨╗╨╛, ╤é╨╛╤ç╨╜╨╛╨╡.",
    "textAz": "─░lk t╔Ö╔Öss├╝rat yaratmaq ├╝├º├╝n saniy╔Önin 1/10 hiss╔Ösi laz─▒md─▒r v╔Ö onlar d╔Öqiq olma─ƒa meyllidirl╔Ör."
  },
  {
    "id": 19,
    "text": "Securely attached children have better relationships and self-esteem in adulthood.",
    "textKa": "ßâúßâíßâÉßâñßâáßâùßâ«ßâ¥ßâô ßâ¢ßâÿßâæßâ¢ßâúßâÜ ßâæßâÉßâòßâ¿ßâòßâößâæßâí ßâ¢ßâ¥ßâûßâáßâôßâÿßâÜßâ¥ßâæßâÉßâ¿ßâÿ ßâúßâÖßâößâùßâößâíßâÿ ßâúßâáßâùßâÿßâößâáßâùßâ¥ßâæßâößâæßâÿ ßâôßâÉ ßâùßâòßâÿßâùßâ¿ßâößâñßâÉßâíßâößâæßâÉ ßâÉßâÑßâòßâù.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:human-female-boy",
    "textRu": "╨ú ╨┤╨╡╤é╨╡╨╣ ╤ü ╨╜╨░╨┤╨╡╨╢╨╜╨╛╨╣ ╨┐╤Ç╨╕╨▓╤Å╨╖╨░╨╜╨╜╨╛╤ü╤é╤î╤Ä ╨▓╨╛ ╨▓╨╖╤Ç╨╛╤ü╨╗╨╛╨╣ ╨╢╨╕╨╖╨╜╨╕ ╤â╨╗╤â╤ç╤ê╨░╤Ä╤é╤ü╤Å ╨╛╤é╨╜╨╛╤ê╨╡╨╜╨╕╤Å ╨╕ ╨┐╨╛╨▓╤ï╤ê╨░╨╡╤é╤ü╤Å ╤ü╨░╨╝╨╛╨╛╤å╨╡╨╜╨║╨░.",
    "textHy": "╘▒╒║╒í╒░╒╕╒╛ ╒»╒í╒║╒╛╒í╒« ╒Ñ╓Ç╒Ñ╒¡╒í╒╢╒Ñ╓Ç╒╢ ╒í╒╛╒Ñ╒¼╒½ ╒¼╒í╒╛ ╒░╒í╓Ç╒í╒ó╒Ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╓ç ╒½╒╢╓ä╒╢╒í╒ú╒╢╒í╒░╒í╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒╕╓é╒╢╒Ñ╒╢ ╒░╒í╒╜╒╕╓é╒╢ ╒┐╒í╓Ç╒½╓ä╒╕╓é╒┤:",
    "textAz": "T╔Öhl├╝k╔Ösiz ba─ƒlanan u┼ƒaqlar yetkinlik d├╢vr├╝nd╔Ö daha yax┼ƒ─▒ m├╝nasib╔Ötl╔Ör╔Ö v╔Ö ├╢z├╝n╔Ö h├╢rm╔Öt╔Ö sahib olurlar."
  },
  {
    "id": 20,
    "text": "Zeigarnik effect: We remember uncompleted tasks better because they stay active in memory.",
    "textKa": "ßâûßâößâÿßâÆßâÉßâáßâ£ßâÿßâÖßâÿßâí ßâößâñßâößâÑßâóßâÿ: ßâôßâÉßâúßâíßâáßâúßâÜßâößâæßâößâÜ ßâôßâÉßâòßâÉßâÜßâößâæßâößâæßâí ßâúßâÖßâößâù ßâòßâÿßâ¢ßâÉßâ«ßâíßâ¥ßâòßâáßâößâæßâù, ßâáßâÉßâôßâÆßâÉßâ£ ßâÿßâíßâÿßâ£ßâÿ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÉßâ¿ßâÿ ßâÉßâÑßâóßâÿßâúßâáßâÿ ßâáßâ⌐ßâößâæßâÉ.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:checkbox-blank-circle-outline",
    "textRu": "╨¡╤ä╤ä╨╡╨║╤é ╨ù╨╡╨╣╨│╨░╤Ç╨╜╨╕╨║: ╨╝╤ï ╨╗╤â╤ç╤ê╨╡ ╨╖╨░╨┐╨╛╨╝╨╕╨╜╨░╨╡╨╝ ╨╜╨╡╨╖╨░╨▓╨╡╤Ç╤ê╨╡╨╜╨╜╤ï╨╡ ╨╖╨░╨┤╨░╤ç╨╕, ╨┐╨╛╤é╨╛╨╝╤â ╤ç╤é╨╛ ╨╛╨╜╨╕ ╨╛╤ü╤é╨░╤Ä╤é╤ü╤Å ╨░╨║╤é╨╕╨▓╨╜╤ï╨╝╨╕ ╨▓ ╨┐╨░╨╝╤Å╤é╨╕.",
    "textHy": "╘╢╒Ñ╒╡╒ú╒í╓Ç╒╢╒½╒»╒½ ╒º╓å╒Ñ╒»╒┐. ╒┤╒Ñ╒╢╓ä ╒í╒╛╒Ñ╒¼╒½ ╒¼╒í╒╛ ╒Ñ╒╢╓ä ╒░╒½╒╖╒╕╓é╒┤ ╒╣╒í╒╛╒í╓Ç╒┐╒╛╒í╒« ╒í╒╝╒í╒╗╒í╒ñ╓Ç╒í╒╢╓ä╒╢╒Ñ╓Ç╒¿, ╓ä╒í╒╢╒½ ╒╕╓Ç ╒ñ╓Ç╒í╒╢╓ä ╒í╒»╒┐╒½╒╛ ╒Ñ╒╢ ╒┤╒╢╒╕╓é╒┤ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗:",
    "textAz": "Zeigarnik effekti: Tamamlanmam─▒┼ƒ i┼ƒl╔Öri daha yax┼ƒ─▒ xat─▒rlay─▒r─▒q, ├º├╝nki onlar yadda┼ƒda aktiv qal─▒rlar."
  },
  {
    "id": 21,
    "text": "Synesthesia causes some people to see colors when hearing music or associate numbers with colors.",
    "textKa": "ßâíßâÿßâ£ßâößâíßâùßâößâûßâÿßâÉ ßâûßâ¥ßâÆßâÿßâößâáßâù ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâí ßâÉßâ»ßâößâ£ßâí ßâñßâößâáßâößâæßâí ßâôßâÉßâÿßâ£ßâÉßâ«ßâ¥ßâí ßâ¢ßâúßâíßâÿßâÖßâÿßâí ßâ¢ßâ¥ßâíßâ¢ßâößâ£ßâÿßâíßâÉßâí ßâÉßâ£ ßâáßâÿßâ¬ßâ«ßâòßâößâæßâÿ ßâñßâößâáßâößâæßâùßâÉßâ£ ßâôßâÉßâÉßâÖßâÉßâòßâ¿ßâÿßâáßâ¥ßâí.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:palette-outline",
    "textRu": "╨í╨╕╨╜╨╡╤ü╤é╨╡╨╖╨╕╤Å ╨╖╨░╤ü╤é╨░╨▓╨╗╤Å╨╡╤é ╨╜╨╡╨║╨╛╤é╨╛╤Ç╤ï╤à ╨╗╤Ä╨┤╨╡╨╣ ╨▓╨╕╨┤╨╡╤é╤î ╤å╨▓╨╡╤é╨░, ╨║╨╛╨│╨┤╨░ ╨╛╨╜╨╕ ╤ü╨╗╤â╤ê╨░╤Ä╤é ╨╝╤â╨╖╤ï╨║╤â, ╨╕╨╗╨╕ ╨░╤ü╤ü╨╛╤å╨╕╨╕╤Ç╨╛╨▓╨░╤é╤î ╤ç╨╕╤ü╨╗╨░ ╤ü ╤å╨▓╨╡╤é╨░╨╝╨╕.",
    "textHy": "╒ì╒½╒╢╒Ñ╒╜╒┐╒Ñ╒ª╒½╒í╒╢ ╒╜╒┐╒½╒║╒╕╓é╒┤ ╒º ╒╕╓Ç╒╕╒╖ ╒┤╒í╓Ç╒ñ╒»╒í╒╢╓ü ╒┐╒Ñ╒╜╒╢╒Ñ╒¼ ╒ú╒╕╓é╒╡╒╢╒Ñ╓Ç╒¿ ╒Ñ╓Ç╒í╒¬╒╖╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒¼╒╜╒Ñ╒¼╒½╒╜ ╒»╒í╒┤ ╒⌐╒╛╒Ñ╓Ç╒¿ ╒»╒í╒║╒Ñ╒¼ ╒ú╒╕╓é╒╡╒╢╒Ñ╓Ç╒½ ╒░╒Ñ╒┐:",
    "textAz": "Sinesteziya b╔Özi insanlar─▒n musiqi e┼ƒitdikd╔Ö r╔Öngl╔Öri g├╢rm╔Ösin╔Ö v╔Ö ya r╔Öq╔Öml╔Öri r╔Öngl╔Örl╔Ö ╔Ölaq╔Öl╔Öndirm╔Ösin╔Ö s╔Öb╔Öb olur."
  },
  {
    "id": 22,
    "text": "The brain can't feel painΓÇöbrain surgery can be performed while the patient is awake.",
    "textKa": "ßâóßâòßâÿßâ£ßâí ßâóßâÖßâÿßâòßâÿßâÜßâÿßâí ßâ¿ßâößâÆßâáßâ½ßâ£ßâößâæßâÉ ßâÉßâá ßâ¿ßâößâúßâ½ßâÜßâÿßâÉΓÇößâóßâòßâÿßâ£ßâÿßâí ßâ¥ßâ₧ßâößâáßâÉßâ¬ßâÿßâÉ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâ₧ßâÉßâ¬ßâÿßâößâ£ßâóßâÿßâí ßâñßâ«ßâÿßâûßâößâÜßâ¥ßâæßâÿßâíßâÉßâí.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "╨£╨╛╨╖╨│ ╨╜╨╡ ╤ç╤â╨▓╤ü╤é╨▓╤â╨╡╤é ╨▒╨╛╨╗╨╕ ΓÇö ╨╛╨┐╨╡╤Ç╨░╤å╨╕╤Ä ╨╜╨░ ╨│╨╛╨╗╨╛╨▓╨╜╨╛╨╝ ╨╝╨╛╨╖╨│╨╡ ╨╝╨╛╨╢╨╜╨╛ ╨┐╤Ç╨╛╨▓╨╛╨┤╨╕╤é╤î, ╨┐╨╛╨║╨░ ╨┐╨░╤å╨╕╨╡╨╜╤é ╨▒╨╛╨┤╤Ç╤ü╤é╨▓╤â╨╡╤é.",
    "textHy": "╒ê╓é╒▓╒Ñ╒▓╒¿ ╒╣╒½ ╒»╒í╓Ç╒╕╒▓ ╓ü╒í╒╛ ╒ª╒ú╒í╒¼. ╒╕╓é╒▓╒Ñ╒▓╒½ ╒╛╒½╓Ç╒í╒░╒í╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º ╒½╓Ç╒í╒»╒í╒╢╒í╓ü╒╛╒Ñ╒¼, ╒Ñ╓Ç╒ó ╒░╒½╒╛╒í╒╢╒ñ╒¿ ╒í╓Ç╒⌐╒╕╓é╒╢ ╒º:",
    "textAz": "Beyin a─ƒr─▒ hiss ed╔Ö bilm╔Öz - x╔Öst╔Ö oyaq ik╔Ön beyin ╔Öm╔Öliyyat─▒ edil╔Ö bil╔Ör."
  },
  {
    "id": 23,
    "text": "Humans can detect over 1 trillion distinct smells, far more than previously thought.",
    "textKa": "ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâí ßâ¿ßâößâúßâ½ßâÜßâÿßâÉ 1 ßâóßâáßâÿßâÜßâÿßâ¥ßâ£ßâûßâö ßâ¢ßâößâóßâÿ ßâÆßâÉßâ£ßâíßâ«ßâòßâÉßâòßâößâæßâúßâÜßâÿ ßâíßâúßâ£ßâÿßâí ßâÉßâ¢ßâ¥ßâ¬ßâ£ßâ¥ßâæßâÉ, ßâÆßâÉßâ¬ßâÿßâÜßâößâæßâÿßâù ßâ¢ßâößâóßâÿ ßâòßâÿßâôßâáßâö ßâòßâÿßâôßâáßâö ßâñßâÿßâÑßâáßâ¥ßâæßâôßâ£ßâößâ£.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:scent",
    "textRu": "╨¢╤Ä╨┤╨╕ ╨╝╨╛╨│╤â╤é ╤Ç╨░╨╖╨╗╨╕╤ç╨░╤é╤î ╨▒╨╛╨╗╨╡╨╡ 1 ╤é╤Ç╨╕╨╗╨╗╨╕╨╛╨╜╨░ ╤Ç╨░╨╖╨╗╨╕╤ç╨╜╤ï╤à ╨╖╨░╨┐╨░╤à╨╛╨▓ ΓÇö ╨│╨╛╤Ç╨░╨╖╨┤╨╛ ╨▒╨╛╨╗╤î╤ê╨╡, ╤ç╨╡╨╝ ╤ü╤ç╨╕╤é╨░╨╗╨╛╤ü╤î ╤Ç╨░╨╜╨╡╨╡.",
    "textHy": "╒ä╒í╓Ç╒ñ╒½╒» ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒░╒í╒╡╒┐╒╢╒í╒ó╒Ñ╓Ç╒Ñ╒¼ ╒í╒╛╒Ñ╒¼╒½ ╓ä╒í╒╢ 1 ╒┐╓Ç╒½╒¼╒½╒╕╒╢ ╒┐╒í╓Ç╒ó╒Ñ╓Ç ╒░╒╕╒┐╒Ñ╓Ç, ╒╖╒í╒┐ ╒í╒╛╒Ñ╒¼╒½╒╢, ╓ä╒í╒╢ ╒╢╒í╒¡╒»╒½╒╢╒╕╓é╒┤ ╒Ñ╒╢╒⌐╒í╒ñ╓Ç╒╛╒╕╓é╒┤ ╒º╓Ç:",
    "textAz": "─░nsanlar 1 trilyondan ├ºox f╔Örqli qoxunu a┼ƒkar ed╔Ö bilirl╔Ör ki, bu da ╔Övv╔Öll╔Ör d├╝┼ƒ├╝n├╝ld├╝y├╝nd╔Ön qat-qat ├ºoxdur."
  },
  {
    "id": 24,
    "text": "Cognitive Behavioral Therapy (CBT) is as effective as medication for many anxiety disorders.",
    "textKa": "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ-ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâÉßâÜßâúßâáßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ (CBT) ßâÿßâíßâößâòßâö ßâößâñßâößâÑßâóßâúßâáßâÿßâÉ ßâáßâ¥ßâÆßâ¥ßâáßâ¬ ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâößâæßâÿ, ßâæßâößâòßâáßâÿ ßâ¿ßâñßâ¥ßâùßâòßâÿßâùßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÿßâí ßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâæßâÿßâíßâùßâòßâÿßâí.",
    "source": "Clinical Psychology",
    "category": "Health",
    "icon": "mdi:head-heart-outline",
    "textRu": "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╨╛-╨┐╨╛╨▓╨╡╨┤╨╡╨╜╤ç╨╡╤ü╨║╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å (╨Ü╨ƒ╨ó) ╤ü╤é╨╛╨╗╤î ╨╢╨╡ ╤ì╤ä╤ä╨╡╨║╤é╨╕╨▓╨╜╨░, ╨║╨░╨║ ╨╕ ╨╗╨╡╨║╨░╤Ç╤ü╤é╨▓╨░, ╨┐╤Ç╨╕ ╨╝╨╜╨╛╨│╨╕╤à ╤é╤Ç╨╡╨▓╨╛╨╢╨╜╤ï╤à ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░╤à.",
    "textHy": "╒â╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╒╛╒í╓Ç╓ä╒í╒ú╒«╒í╒╡╒½╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í╒╢ (CBT) ╒╢╒╕╓é╒╡╒╢╓ä╒í╒╢ ╒í╓Ç╒ñ╒╡╒╕╓é╒╢╒í╒╛╒Ñ╒┐ ╒º, ╒╕╓Ç╓ä╒í╒╢ ╒ñ╒Ñ╒▓╒╕╓Ç╒í╒╡╓ä╒¿ ╒╖╒í╒┐ ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç:",
    "textAz": "Koqnitiv Davran─▒┼ƒ Terapiyas─▒ (CBT) bir ├ºox narahatl─▒q poz─ƒunlu─ƒu ├╝├º├╝n d╔Örman kimi t╔Ösirlidir."
  },
  {
    "id": 25,
    "text": "Children learn language at an extraordinary rateΓÇöabout 10 new words per day between ages 2 and 6.",
    "textKa": "ßâæßâÉßâòßâ¿ßâòßâößâæßâÿ ßâößâ£ßâÉßâí ßâÉßâáßâÉßâ⌐ßâòßâößâúßâÜßâößâæßâáßâÿßâòßâÿ ßâóßâößâ¢ßâ₧ßâÿßâù ßâíßâ¼ßâÉßâòßâÜßâ¥ßâæßâößâ£ΓÇößâôßâÉßâÉßâ«ßâÜßâ¥ßâößâæßâÿßâù 10 ßâÉßâ«ßâÉßâÜ ßâíßâÿßâóßâºßâòßâÉßâí ßâôßâªßâößâ¿ßâÿ 2-ßâôßâÉßâ£ 6 ßâ¼ßâÜßâÉßâ¢ßâôßâö.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:message-text-outline",
    "textRu": "╨ö╨╡╤é╨╕ ╨╕╨╖╤â╤ç╨░╤Ä╤é ╤Å╨╖╤ï╨║ ╤ü ╨╜╨╡╨╛╨▒╤ï╤ç╨░╨╣╨╜╨╛╨╣ ╤ü╨║╨╛╤Ç╨╛╤ü╤é╤î╤Ä ΓÇö ╨╛╨║╨╛╨╗╨╛ 10 ╨╜╨╛╨▓╤ï╤à ╤ü╨╗╨╛╨▓ ╨▓ ╨┤╨╡╨╜╤î ╨▓ ╨▓╨╛╨╖╤Ç╨░╤ü╤é╨╡ ╨╛╤é 2 ╨┤╨╛ 6 ╨╗╨╡╤é.",
    "textHy": "╘╡╓Ç╒Ñ╒¡╒í╒╢╒Ñ╓Ç╒¿ ╒¼╒Ñ╒ª╒╕╓é╒╢ ╒╜╒╕╒╛╒╕╓Ç╒╕╓é╒┤ ╒Ñ╒╢ ╒í╓Ç╒┐╒í╒╜╒╕╒╛╒╕╓Ç ╒í╓Ç╒í╒ú╒╕╓é╒⌐╒╡╒í╒┤╒ó╒¥ ╓à╓Ç╒í╒»╒í╒╢ ╒┤╒╕╒┐ 10 ╒╢╒╕╓Ç ╒ó╒í╒╝ 2-╒½╓ü 6 ╒┐╒í╓Ç╒Ñ╒»╒í╒╢╒╕╓é╒┤:",
    "textAz": "U┼ƒaqlar dili qeyri-adi s├╝r╔Ötl╔Ö ├╢yr╔Önirl╔Ör - 2-6 ya┼ƒ aras─▒nda g├╝nd╔Ö t╔Öxmin╔Ön 10 yeni s├╢z."
  },
  {
    "id": 26,
    "text": "Stockholm syndrome: Hostages may develop emotional bonds with their captors as a survival mechanism.",
    "textKa": "ßâíßâóßâ¥ßâÖßâ░ßâ¥ßâÜßâ¢ßâÿßâí ßâíßâÿßâ£ßâôßâáßâ¥ßâ¢ßâÿ: ßâ¢ßâ½ßâößâòßâÜßâößâæßâ¢ßâÉ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâÖßâÉßâòßâ¿ßâÿßâáßâÿ ßâÆßâÉßâ£ßâÉßâòßâÿßâùßâÉßâáßâ¥ßâ£ ßâÆßâÉßâ¢ßâóßâÉßâ¬ßâößâæßâößâÜßâùßâÉßâ£, ßâáßâ¥ßâÆßâ¥ßâáßâ¬ ßâÆßâÉßâôßâÉßâáßâ⌐ßâößâ£ßâÿßâí ßâ¢ßâößâÑßâÉßâ£ßâÿßâûßâ¢ßâÿ.",
    "source": "Clinical Psychology",
    "category": "Social",
    "icon": "mdi:link-variant",
    "textRu": "╨í╤é╨╛╨║╨│╨╛╨╗╤î╨╝╤ü╨║╨╕╨╣ ╤ü╨╕╨╜╨┤╤Ç╨╛╨╝: ╨╖╨░╨╗╨╛╨╢╨╜╨╕╨║╨╕ ╨╝╨╛╨│╤â╤é ╤Ç╨░╨╖╨▓╨╕╨▓╨░╤é╤î ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╤ï╨╡ ╤ü╨▓╤Å╨╖╨╕ ╤ü╨╛ ╤ü╨▓╨╛╨╕╨╝╨╕ ╨┐╨╛╤à╨╕╤é╨╕╤é╨╡╨╗╤Å╨╝╨╕ ╨║╨░╨║ ╨╝╨╡╤à╨░╨╜╨╕╨╖╨╝ ╨▓╤ï╨╢╨╕╨▓╨░╨╜╨╕╤Å.",
    "textHy": "╒ì╒┐╒╕╒»╒░╒╕╒¼╒┤╒½ ╒░╒í╒┤╒í╒¡╒┐╒í╒╢╒½╒╖. ╒║╒í╒┐╒í╒╢╒ñ╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒ª╒í╓Ç╒ú╒í╓ü╒╢╒Ñ╒¼ ╒░╒╕╓é╒ª╒í╒»╒í╒╢ ╒»╒í╒║╒Ñ╓Ç ╒½╓Ç╒Ñ╒╢╓ü ╒í╒╝╓ç╒í╒╢╒ú╒╕╒▓╒╢╒Ñ╓Ç╒½ ╒░╒Ñ╒┐╒¥ ╒╕╓Ç╒║╒Ñ╒╜ ╒ú╒╕╒╡╒í╒┐╓ç╒┤╒í╒╢ ╒┤╒Ñ╒¡╒í╒╢╒½╒ª╒┤:",
    "textAz": "Stokholm sindromu: Girovlar sa─ƒ qalma mexanizmi kimi ╔Ösir g├╢t├╝r╔Önl╔Örl╔Ö emosional ba─ƒlar yarada bil╔Ör."
  },
  {
    "id": 27,
    "text": "Your brain generates about 12-25 watts of electricityΓÇöenough to power a low-wattage LED bulb.",
    "textKa": "ßâùßâÑßâòßâößâ£ßâÿ ßâóßâòßâÿßâ£ßâÿ ßâÆßâÉßâ¢ßâ¥ßâÿßâ¢ßâúßâ¿ßâÉßâòßâößâæßâí ßâôßâÉßâÉßâ«ßâÜßâ¥ßâößâæßâÿßâù 12-25 ßâòßâÉßâó ßâößâÜßâößâÑßâóßâáßâ¥ßâ¥ßâæßâÉßâíΓÇößâíßâÉßâÖßâ¢ßâÉßâáßâÿßâíßâÿ LED ßâ£ßâÉßâùßâúßâáßâÿßâí ßâÆßâÉßâíßâÉßâ£ßâÉßâùßâößâæßâÜßâÉßâô.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:lightbulb-on-outline",
    "textRu": "╨Æ╨░╤ê ╨╝╨╛╨╖╨│ ╨│╨╡╨╜╨╡╤Ç╨╕╤Ç╤â╨╡╤é ╨╛╨║╨╛╨╗╨╛ 12ΓÇô25 ╨Æ╤é ╤ì╨╗╨╡╨║╤é╤Ç╨╛╤ì╨╜╨╡╤Ç╨│╨╕╨╕ ΓÇö ╤ì╤é╨╛╨│╨╛ ╨┤╨╛╤ü╤é╨░╤é╨╛╤ç╨╜╨╛ ╨┤╨╗╤Å ╨┐╨╕╤é╨░╨╜╨╕╤Å ╨╝╨░╨╗╨╛╨╝╨╛╤ë╨╜╨╛╨╣ ╤ü╨▓╨╡╤é╨╛╨┤╨╕╨╛╨┤╨╜╨╛╨╣ ╨╗╨░╨╝╨┐╤ï.",
    "textHy": "╒ü╒Ñ╓Ç ╒╕╓é╒▓╒Ñ╒▓╒¿ ╒í╓Ç╒┐╒í╒ñ╓Ç╒╕╓é╒┤ ╒º ╒┤╒╕╒┐ 12-25 ╒╛╒┐ ╒º╒¼╒Ñ╒»╒┐╓Ç╒í╒º╒╢╒Ñ╓Ç╒ú╒½╒í, ╒½╒╢╒╣╒¿ ╒ó╒í╒╛╒í╓Ç╒í╓Ç ╒º ╓ü╒í╒«╓Ç ╒░╒ª╒╕╓Ç╒╕╓é╒⌐╒╡╒í╒┤╒ó LED ╒¼╒í╒┤╒║╒¿ ╒╜╒╢╒╕╓é╓ü╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:",
    "textAz": "Beyniniz t╔Öxmin╔Ön 12-25 vatt elektrik enerjisi istehsal edir ki, bu da a┼ƒa─ƒ─▒ vattl─▒ bir LED lampan─▒ i┼ƒ╔Ö salmaq ├╝├º├╝n kifay╔Ötdir."
  },
  {
    "id": 28,
    "text": "Multitasking reduces productivity by up to 40%ΓÇöyour brain rapidly switches, not truly parallel-processes.",
    "textKa": "ßâ¢ßâúßâÜßâóßâÿßâóßâÉßâíßâÖßâÿßâ£ßâÆßâÿ ßâ₧ßâáßâ¥ßâôßâúßâÑßâóßâÿßâúßâÜßâ¥ßâæßâÉßâí 40%-ßâÿßâù ßâÉßâ¢ßâ¬ßâÿßâáßâößâæßâíΓÇößâóßâòßâÿßâ£ßâÿ ßâíßâ¼ßâáßâÉßâñßâÉßâô ßâÆßâÉßâôßâÉßâáßâùßâÉßâòßâí, ßâôßâÉ ßâÉßâá ßâ₧ßâÉßâáßâÉßâÜßâößâÜßâúßâáßâÉßâô ßâÉßâ¢ßâúßâ¿ßâÉßâòßâößâæßâí.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:swap-horizontal-circle-outline",
    "textRu": "╨£╨╜╨╛╨│╨╛╨╖╨░╨┤╨░╤ç╨╜╨╛╤ü╤é╤î ╤ü╨╜╨╕╨╢╨░╨╡╤é ╨┐╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╤î ╨┤╨╛ 40┬á% ΓÇö ╨▓╨░╤ê ╨╝╨╛╨╖╨│ ╨▒╤ï╤ü╤é╤Ç╨╛ ╨┐╨╡╤Ç╨╡╨║╨╗╤Ä╤ç╨░╨╡╤é╤ü╤Å, ╨░ ╨╜╨╡ ╨▓╤ï╨┐╨╛╨╗╨╜╤Å╨╡╤é ╨┐╨╛-╨╜╨░╤ü╤é╨╛╤Å╤ë╨╡╨╝╤â ╨┐╨░╤Ç╨░╨╗╨╗╨╡╨╗╤î╨╜╤ï╨╡ ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╤ï.",
    "textHy": "╘▓╒í╒ª╒┤╒í╓å╒╕╓é╒╢╒»╓ü╒½╒╕╒╢╒í╒¼╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒╛╒í╒ª╒Ñ╓ü╒╢╒╕╓é╒┤ ╒º ╒í╓Ç╒┐╒í╒ñ╓Ç╒╕╒▓╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒┤╒½╒╢╒╣╓ç 40%-╒╕╒╛. ╒▒╒Ñ╓Ç ╒╕╓é╒▓╒Ñ╒▓╒¿ ╒í╓Ç╒í╒ú╒╕╓Ç╒Ñ╒╢ ╓â╒╕╒¡╒╛╒╕╓é╒┤ ╒º, ╒í╒╡╒¼ ╒╕╒╣ ╒⌐╒Ñ ╒½╓Ç╒í╒»╒í╒╢╒╕╓é╒┤ ╒ª╒╕╓é╒ú╒í╒░╒Ñ╒╝ ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒╢╒Ñ╓Ç:",
    "textAz": "Multitasking m╔Öhsuldarl─▒─ƒ─▒ 40%-╔Ö q╔Öd╔Ör azald─▒r - beyniniz h╔Öqiq╔Öt╔Ön paralel prosesl╔Ör deyil, s├╝r╔Ötl╔Ö d╔Öyi┼ƒir."
  },
  {
    "id": 29,
    "text": "Laughter is 30 times more likely in social situations than when aloneΓÇöit's primarily social.",
    "textKa": "ßâíßâÿßâ¬ßâÿßâÜßâÿ 30-ßâ»ßâößâá ßâúßâñßâáßâ¥ ßâ«ßâ¿ßâÿßâáßâÿßâÉ ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâá ßâíßâÿßâóßâúßâÉßâ¬ßâÿßâößâæßâ¿ßâÿ ßâòßâÿßâôßâáßâö ßâ¢ßâÉßâáßâóßâ¥ßâ¥ßâæßâÿßâíßâÉßâíΓÇößâÿßâí ßâúßâ₧ßâÿßâáßâòßâößâÜßâößâíßâÉßâô ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâñßâößâ£ßâ¥ßâ¢ßâößâ£ßâÿßâÉ.",
    "source": "Social Psychology",
    "category": "Emotion",
    "icon": "mdi:emoticon-lol-outline",
    "textRu": "╨í╨╝╨╡╤à ╨▓ 30 ╤Ç╨░╨╖ ╤ç╨░╤ë╨╡ ╨▓╤ü╤é╤Ç╨╡╤ç╨░╨╡╤é╤ü╤Å ╨▓ ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╤ï╤à ╤ü╨╕╤é╤â╨░╤å╨╕╤Å╤à, ╤ç╨╡╨╝ ╨▓ ╨╛╨┤╨╕╨╜╨╛╤ç╨╡╤ü╤é╨▓╨╡ ΓÇö ╨╛╨╜ ╨▓ ╨┐╨╡╤Ç╨▓╤â╤Ä ╨╛╤ç╨╡╤Ç╨╡╨┤╤î ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╤ï╨╣.",
    "textHy": "╘╛╒½╒«╒í╒▓╒¿ 30 ╒í╒╢╒ú╒í╒┤ ╒í╒╛╒Ñ╒¼╒½ ╒░╒í╒╛╒í╒╢╒í╒»╒í╒╢ ╒º ╒╜╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒½╓Ç╒í╒╛╒½╒│╒í╒»╒╢╒Ñ╓Ç╒╕╓é╒┤, ╓ä╒í╒╢ ╒┤╒½╒í╒╡╒╢╒í╒» ╒¬╒í╒┤╒í╒╢╒í╒». ╒ñ╒í ╒░╒½╒┤╒╢╒í╒»╒í╒╢╒╕╓é╒┤ ╒╜╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒º:",
    "textAz": "G├╝l├╝┼ƒ sosial v╔Öziyy╔Ötl╔Örd╔Ö t╔Ök olandan 30 d╔Öf╔Ö ├ºox olur - bu, ilk n├╢vb╔Öd╔Ö sosiald─▒r."
  },
  {
    "id": 30,
    "text": "The serial position effect: We best remember the first and last items in a list.",
    "textKa": "ßâíßâößâáßâÿßâúßâÜßâÿ ßâ₧ßâ¥ßâûßâÿßâ¬ßâÿßâÿßâí ßâößâñßâößâÑßâóßâÿ: ßâíßâÿßâÿßâí ßâ₧ßâÿßâáßâòßâößâÜ ßâôßâÉ ßâæßâ¥ßâÜßâ¥ ßâößâÜßâößâ¢ßâößâ£ßâóßâößâæßâí ßâíßâÉßâúßâÖßâößâùßâößâíßâ¥ßâô ßâòßâÿßâ¢ßâÉßâ«ßâíßâ¥ßâòßâáßâößâæßâù.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:format-list-numbered",
    "textRu": "╨¡╤ä╤ä╨╡╨║╤é ╨┐╨╛╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╤î╨╜╨╛╨│╨╛ ╨┐╨╛╨╗╨╛╨╢╨╡╨╜╨╕╤Å: ╨╝╤ï ╨╗╤â╤ç╤ê╨╡ ╨▓╤ü╨╡╨│╨╛ ╨╖╨░╨┐╨╛╨╝╨╕╨╜╨░╨╡╨╝ ╨┐╨╡╤Ç╨▓╤ï╨╣ ╨╕ ╨┐╨╛╤ü╨╗╨╡╨┤╨╜╨╕╨╣ ╤ì╨╗╨╡╨╝╨╡╨╜╤é╤ï ╤ü╨┐╨╕╤ü╨║╨░.",
    "textHy": "╒ì╒Ñ╓Ç╒½╒í╒»╒í╒╢ ╒ñ╒½╓Ç╓ä╒½ ╒º╓å╒Ñ╒»╒┐. ╒ä╒Ñ╒╢╓ä ╒¼╒í╒╛╒í╒ú╒╕╓é╒╡╒╢╒╜ ╒░╒½╒╖╒╕╓é╒┤ ╒Ñ╒╢╓ä ╓ü╒╕╓é╓ü╒í╒»╒½ ╒í╒╝╒í╒╗╒½╒╢ ╓ç ╒╛╒Ñ╓Ç╒╗╒½╒╢ ╒»╒Ñ╒┐╒Ñ╓Ç╒¿:",
    "textAz": "Serial m├╢vqe effekti: Siyah─▒dak─▒ ilk v╔Ö son elementl╔Öri yax┼ƒ─▒ xat─▒rlay─▒r─▒q."
  },
  {
    "id": 31,
    "text": "Bilingual people may delay the onset of dementia by an average of 4-5 years.",
    "textKa": "ßâ¥ßâáßâößâ£ßâ¥ßâòßâÉßâ£ßâÿ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâÿ ßâôßâößâ¢ßâößâ£ßâ¬ßâÿßâÿßâí ßâôßâÉßâ¼ßâºßâößâæßâÉßâí ßâíßâÉßâ¿ßâúßâÉßâÜßâ¥ßâô 4-5 ßâ¼ßâÜßâÿßâù ßâÉßâÆßâòßâÿßâÉßâ£ßâößâæßâößâ£.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:translate",
    "textRu": "╨ö╨▓╤â╤Å╨╖╤ï╤ç╨╜╤ï╨╡ ╨╗╤Ä╨┤╨╕ ╨╝╨╛╨│╤â╤é ╨╛╤é╤ü╤Ç╨╛╤ç╨╕╤é╤î ╨╜╨░╤ç╨░╨╗╨╛ ╨┤╨╡╨╝╨╡╨╜╤å╨╕╨╕ ╨▓ ╤ü╤Ç╨╡╨┤╨╜╨╡╨╝ ╨╜╨░ 4-5 ╨╗╨╡╤é.",
    "textHy": "╘╡╓Ç╒»╒¼╒Ñ╒ª╒╕╓é ╒┤╒í╓Ç╒ñ╒½╒» ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒░╒Ñ╒┐╒í╒▒╒ú╒Ñ╒¼ ╒ñ╒Ñ╒┤╒Ñ╒╢╓ü╒½╒í╒╡╒½ ╒í╒╝╒í╒╗╒í╓ü╒╕╓é╒┤╒¿ ╒┤╒½╒╗╒½╒╢╒¿ 4-5 ╒┐╒í╓Ç╒╕╒╛╓ë",
    "textAz": "─░kidilli insanlar demans─▒n ba┼ƒlan─ƒ─▒c─▒n─▒ orta hesabla 4-5 il gecikdir╔Ö bil╔Ör."
  },
  {
    "id": 32,
    "text": "Emotional memories are stored more vividly because the amygdala strengthens the memory trace.",
    "textKa": "ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâ¢ßâ¥ßâÆßâ¥ßâ£ßâößâæßâößâæßâÿ ßâúßâñßâáßâ¥ ßâ£ßâÉßâùßâÜßâÉßâô ßâÿßâ£ßâÉßâ«ßâößâæßâÉ, ßâáßâÉßâôßâÆßâÉßâ£ ßâÉßâ¢ßâÿßâÆßâôßâÉßâÜßâÉ ßâÉßâ½ßâÜßâÿßâößâáßâößâæßâí ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâÖßâòßâÉßâÜßâí.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:heart-flash",
    "textRu": "╨¡╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╤ï╨╡ ╨▓╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╤Å ╤ü╨╛╤à╤Ç╨░╨╜╤Å╤Ä╤é╤ü╤Å ╨▒╨╛╨╗╨╡╨╡ ╤Å╤Ç╨║╨╛, ╨┐╨╛╤é╨╛╨╝╤â ╤ç╤é╨╛ ╨╝╨╕╨╜╨┤╨░╨╗╨╡╨▓╨╕╨┤╨╜╨╛╨╡ ╤é╨╡╨╗╨╛ ╤â╤ü╨╕╨╗╨╕╨▓╨░╨╡╤é ╤ü╨╗╨╡╨┤ ╨┐╨░╨╝╤Å╤é╨╕.",
    "textHy": "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒í╒╡╒½╒╢ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒╢ ╒í╒╛╒Ñ╒¼╒½ ╒╛╒í╒╝ ╒Ñ╒╢ ╒║╒í╒░╒╛╒╕╓é╒┤, ╓ä╒í╒╢╒½ ╒╕╓Ç ╒í╒┤╒½╒ú╒ñ╒í╒¼╒í╒╢ ╒í╒┤╓Ç╒í╓ü╒╢╒╕╓é╒┤ ╒º ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒Ñ╒┐╓ä╒¿:",
    "textAz": "Duygusal xatir╔Öl╔Ör daha canl─▒ saxlan─▒l─▒r, ├º├╝nki amigdala yadda┼ƒ izini g├╝cl╔Öndirir."
  },
  {
    "id": 33,
    "text": "Sleep deprivation for just 17 hours impairs cognitive function as much as a blood alcohol level of 0.05%.",
    "textKa": "17 ßâíßâÉßâÉßâùßâÿßâÉßâ£ßâÿ ßâ½ßâÿßâÜßâÿßâí ßâôßâößâñßâÿßâ¬ßâÿßâóßâÿ ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâá ßâñßâúßâ£ßâÑßâ¬ßâÿßâÉßâí ßâÿßâíßâö ßâÉßâúßâÉßâáßâößâíßâößâæßâí, ßâáßâ¥ßâÆßâ¥ßâáßâ¬ ßâíßâÿßâíßâ«ßâÜßâ¿ßâÿ ßâÉßâÜßâÖßâ¥ßâ░ßâ¥ßâÜßâÿßâí ßâôßâ¥ßâ£ßâö 0.05%.",
    "source": "Sleep Research",
    "category": "Health",
    "icon": "mdi:weather-night",
    "textRu": "╨¢╨╕╤ê╨╡╨╜╨╕╨╡ ╤ü╨╜╨░ ╨▓╤ü╨╡╨│╨╛ ╨╜╨░ 17 ╤ç╨░╤ü╨╛╨▓ ╤â╤à╤â╨┤╤ê╨░╨╡╤é ╨║╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╨╡ ╤ä╤â╨╜╨║╤å╨╕╨╕ ╤é╨░╨║ ╨╢╨╡, ╨║╨░╨║ ╤â╤Ç╨╛╨▓╨╡╨╜╤î ╨░╨╗╨║╨╛╨│╨╛╨╗╤Å ╨▓ ╨║╤Ç╨╛╨▓╨╕ 0,05%.",
    "textHy": "╒ö╒╢╒½ ╒║╒í╒»╒í╒╜╒¿ ╒¿╒╢╒ñ╒í╒┤╒Ñ╒╢╒¿ 17 ╒¬╒í╒┤╒╛╒í ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤ ╒¡╒í╒⌐╒í╓Ç╒╕╓é╒┤ ╒º ╒│╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╓å╒╕╓é╒╢╒»╓ü╒½╒í╒╢ ╒í╒╡╒╢╓ä╒í╒╢, ╒╕╓Ç╓ä╒í╒╢ ╒í╓Ç╒╡╒í╒╢ ╒┤╒Ñ╒╗ ╒í╒¼╒»╒╕╒░╒╕╒¼╒½ ╒┤╒í╒»╒í╓Ç╒ñ╒í╒»╒¿ 0,05%:",
    "textAz": "C╔Ömi 17 saat yuxudan m╔Öhrum olmaq idrak funksiyas─▒n─▒ qanda 0,05% spirt s╔Öviyy╔Ösi q╔Öd╔Ör z╔Öifl╔Ödir."
  },
  {
    "id": 34,
    "text": "Phobias can be inheritedΓÇöstudies show fear responses can be passed through epigenetic changes.",
    "textKa": "ßâñßâ¥ßâæßâÿßâößâæßâÿ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâ¢ßâößâ¢ßâÖßâòßâÿßâôßâáßâößâ¥ßâæßâÿßâù ßâÆßâÉßâôßâÉßâÿßâ¬ßâößâíΓÇößâÖßâòßâÜßâößâòßâößâæßâÿ ßâÉßâ⌐ßâòßâößâ£ßâößâæßâí, ßâáßâ¥ßâ¢ ßâ¿ßâÿßâ¿ßâÿßâí ßâáßâößâÉßâÑßâ¬ßâÿßâößâæßâÿ ßâößâ₧ßâÿßâÆßâößâ£ßâößâóßâÿßâÖßâúßâáßâÿ ßâ¬ßâòßâÜßâÿßâÜßâößâæßâößâæßâÿßâù ßâÆßâÉßâôßâÉßâößâ¬ßâößâ¢ßâÉ.",
    "source": "Biological Psychology",
    "category": "Anxiety",
    "icon": "mdi:spider-thread",
    "textRu": "╨ñ╨╛╨▒╨╕╨╕ ╨╝╨╛╨│╤â╤é ╨┐╨╡╤Ç╨╡╨┤╨░╨▓╨░╤é╤î╤ü╤Å ╨┐╨╛ ╨╜╨░╤ü╨╗╨╡╨┤╤ü╤é╨▓╤â: ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╤Ä╤é, ╤ç╤é╨╛ ╤Ç╨╡╨░╨║╤å╨╕╨╕ ╤ü╤é╤Ç╨░╤à╨░ ╨╝╨╛╨│╤â╤é ╨┐╨╡╤Ç╨╡╨┤╨░╨▓╨░╤é╤î╤ü╤Å ╤ç╨╡╤Ç╨╡╨╖ ╤ì╨┐╨╕╨│╨╡╨╜╨╡╤é╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╤Å.",
    "textHy": "╒û╒╕╒ó╒½╒í╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒¬╒í╒╝╒í╒╢╒ú╒í╒»╒í╒╢ ╒¼╒½╒╢╒Ñ╒¼. ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╓ü╒╕╓é╒╡╓ü ╒Ñ╒╢ ╒┐╒í╒¼╒½╒╜, ╒╕╓Ç ╒╛╒í╒¡╒½ ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╓â╒╕╒¡╒í╒╢╓ü╒╛╒Ñ╒¼ ╒º╒║╒½╒ú╒Ñ╒╢╒Ñ╒┐╒½╒» ╓â╒╕╓â╒╕╒¡╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛:",
    "textAz": "Fobiyalar irsi ola bil╔Ör - t╔Ödqiqatlar g├╢st╔Örir ki, qorxu reaksiyalar─▒ epigenetik d╔Öyi┼ƒiklikl╔Örd╔Ön ke├º╔Ö bil╔Ör."
  },
  {
    "id": 35,
    "text": "The peak-end rule: We judge experiences mainly by their most intense moment and their ending.",
    "textKa": "ßâ₧ßâÿßâÖßâÿßâíßâÉ ßâôßâÉ ßâôßâÉßâíßâÉßâíßâáßâúßâÜßâÿßâí ßâ¼ßâößâíßâÿ: ßâÆßâÉßâ¢ßâ¥ßâ¬ßâôßâÿßâÜßâößâæßâößâæßâí ßâòßâÉßâñßâÉßâíßâößâæßâù ßâ½ßâÿßâáßâÿßâùßâÉßâôßâÉßâô ßâ¢ßâÉßâùßâÿ ßâºßâòßâößâÜßâÉßâûßâö ßâÿßâ£ßâóßâößâ£ßâíßâÿßâúßâáßâÿ ßâ¢ßâ¥ßâ¢ßâößâ£ßâóßâÿßâùßâÉ ßâôßâÉ ßâôßâÉßâíßâÉßâíßâáßâúßâÜßâÿßâù.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-timeline-variant-shimmer",
    "textRu": "╨ƒ╤Ç╨░╨▓╨╕╨╗╨╛ ╨┐╨╕╨║╨░-╨║╨╛╨╜╤å╨░: ╨╝╤ï ╤ü╤â╨┤╨╕╨╝ ╨╛ ╨┐╨╡╤Ç╨╡╨╢╨╕╨▓╨░╨╜╨╕╤Å╤à ╨│╨╗╨░╨▓╨╜╤ï╨╝ ╨╛╨▒╤Ç╨░╨╖╨╛╨╝ ╨┐╨╛ ╨╜╨░╨╕╨▒╨╛╨╗╨╡╨╡ ╨╜╨░╨┐╤Ç╤Å╨╢╨╡╨╜╨╜╤ï╨╝ ╨╝╨╛╨╝╨╡╨╜╤é╨░╨╝ ╨╕ ╨╕╤à ╨╛╨║╨╛╨╜╤ç╨░╨╜╨╕╤Ä.",
    "textHy": "╒è╒½╒» ╒╛╒Ñ╓Ç╒╗╒½ ╒»╒í╒╢╒╕╒╢╒¿.",
      }
    ]
  }
];

export const STORIES: Story[] = [
  {
    "id": 1,
    "title": "Pavlov's Accidental Discovery",
    "titleKa": "ßâ₧ßâÉßâòßâÜßâ¥ßâòßâÿßâí ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâùßâÿ ßâÉßâªßâ¢ßâ¥ßâ⌐ßâößâ£ßâÉ",
    "chapterId": 6,
    "icon": "mdi:bell-ring-outline",
    "content": "In the 1890s, Russian physiologist Ivan Pavlov was conducting research on the digestive systems of dogs at the Institute of Experimental Medicine in St. Petersburg. His work was meticulousΓÇöhe had surgically implanted tubes in dogs' cheeks to precisely measure saliva output when food was presented.\n\nBut something unexpected kept disrupting his carefully controlled experiments. The dogs began salivating before any food appeared. They drooled when they heard the footsteps of the lab assistant. They salivated at the sight of the food bowl, or even when they heard the door open.\n\nRather than dismissing this as a nuisance, Pavlov recognized he had stumbled upon something extraordinary. He called these premature responses \"psychic secretions\" and redesigned his entire research program to study them.\n\nPavlov began systematically pairing a neutral stimulusΓÇöa metronome (often misremembered as a bell)ΓÇöwith the presentation of food. After repeated pairings, the dogs would salivate at the sound of the metronome alone, with no food in sight.\n\nHe documented the entire process with scientific rigor: acquisition (learning the association), extinction (unlearning it when food stops coming), spontaneous recovery (the response returning after a rest period), and generalization (responding to similar sounds).\n\nThis accidental discovery became the foundation of classical conditioning and earned Pavlov the Nobel Prize in Physiology in 1904. His work influenced generations of psychologists, from John Watson to modern neuroscientists studying how the brain forms associations.",
    "contentKa": "1890-ßâÿßâÉßâ£ ßâ¼ßâÜßâößâæßâ¿ßâÿ, ßâáßâúßâíßâÿ ßâñßâÿßâûßâÿßâ¥ßâÜßâ¥ßâÆßâÿ ßâÿßâòßâÉßâ£ ßâ₧ßâÉßâòßâÜßâ¥ßâòßâÿ ßâ½ßâÉßâªßâÜßâößâæßâÿßâí ßâíßâÉßâ¡ßâ¢ßâÜßâÿßâí ßâíßâÿßâíßâóßâößâ¢ßâÉßâí ßâÿßâÖßâòßâÜßâößâòßâôßâÉ ßâíßâÉßâ£ßâÖßâó-ßâ₧ßâößâóßâößâáßâæßâúßâáßâÆßâ¿ßâÿ. ßâ¢ßâÉßâ£ ßâ¿ßâößâ£ßâÿßâ¿ßâ£ßâÉ, ßâáßâ¥ßâ¢ ßâ½ßâÉßâªßâÜßâößâæßâÿ ßâíßâÉßâÖßâòßâößâæßâí ßâôßâÉßâÿßâ¼ßâºßâößâæßâôßâ£ßâößâ£ ßâíßâÉßâÖßâòßâößâæßâÿßâí ßâÆßâÉßâáßâößâ¿ßâößâè ΓÇö ßâÜßâÉßâæßâ¥ßâáßâÉßâ£ßâóßâÿßâí ßâ£ßâÉßâæßâÿßâ»ßâößâæßâÿßâí ßâÆßâÉßâÆßâ¥ßâ£ßâÿßâíßâÉßâí. ßâ₧ßâÉßâòßâÜßâ¥ßâòßâ¢ßâÉ ßâÉßâ¢ßâÉßâ¿ßâÿ ßâ¢ßâößâóßâáßâ¥ßâ£ßâ¥ßâ¢ßâÿßâí ßâ«ßâ¢ßâÉ ßâíßâÉßâÖßâòßâößâæßâí ßâôßâÉßâúßâÖßâÉßâòßâ¿ßâÿßâáßâÉ ßâôßâÉ ßâÉßâªßâ¢ßâ¥ßâÉßâ⌐ßâÿßâ£ßâÉ ßâÖßâÜßâÉßâíßâÿßâÖßâúßâáßâÿ ßâÆßâÉßâ£ßâ₧ßâÿßâáßâ¥ßâæßâößâæßâÉ.",
    "moral": "Great discoveries emerge when curious minds pay attention to the unexpected. Pavlov could have ignored the dogs' early salivation, but instead he asked \"why?\" and changed psychology forever.",
    "moralKa": "ßâôßâÿßâôßâÿ ßâÉßâªßâ¢ßâ¥ßâ⌐ßâößâ£ßâößâæßâÿ ßâÿßâæßâÉßâôßâößâæßâÉ, ßâáßâ¥ßâè ßâ¬ßâ£ßâ¥ßâæßâÿßâíßâ¢ßâ¥ßâºßâòßâÉßâáßâö ßâÆßâ¥ßâ£ßâößâæßâÉ ßâºßâúßâáßâÉßâôßâªßâößâæßâÉßâí ßâ¢ßâ¥ßâúßâÜßâ¥ßâôßâ£ßâößâÜßâí ßâ¢ßâÿßâÉßâÑßâ¬ßâößâòßâí.",
    "moralHy": "╒ä╒Ñ╒« ╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒╕╓é╒┤╒╢╒Ñ╓Ç ╒Ñ╒╢ ╒í╒╝╒í╒╗╒í╒╢╒╕╓é╒┤, ╒Ñ╓Ç╒ó ╒░╒Ñ╒┐╒í╓ä╓Ç╓ä╓Ç╒í╒╜╒Ñ╓Ç ╒┤╒┐╓ä╒Ñ╓Ç╒¿ ╒╕╓é╒╖╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒Ñ╒╢ ╒ñ╒í╓Ç╒▒╒╢╒╕╓é╒┤ ╒í╒╢╒╜╒║╒í╒╜╒Ñ╒¼╒½╒½╒╢: ╒è╒í╒╛╒¼╒╕╒╛╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º╓Ç ╒í╒╢╒┐╒Ñ╒╜╒Ñ╒¼ ╒╖╒╢╒Ñ╓Ç╒½ ╒╛╒í╒▓ ╒⌐╓ä╒Ñ╒¼╒¿, ╒ó╒í╒╡╓ü ╓â╒╕╒¡╒í╓Ç╒Ñ╒╢╒¿ ╒░╒í╓Ç╓ü╓Ç╒Ñ╓ü╒¥ ┬½╒½╒╢╒╣╒╕╒₧╓é┬╗╓ë ╓ç ╒¿╒╢╒ñ╒┤╒½╒╖╒┐ ╓â╒╕╒¡╒Ñ╓ü ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
    "contentAz": "1890-c─▒ ill╔Örd╔Ö rus fizioloqu ─░van Pavlov Sankt-Peterburqdak─▒ Eksperimental Tibb ─░nstitutunda itl╔Örin h╔Özm sisteml╔Öri il╔Ö ba─ƒl─▒ t╔Ödqiqatlar apar─▒rd─▒. Onun i┼ƒi vasvas─▒ idi - yem╔Ök t╔Öqdim olunan zaman t├╝p├╝rc╔Ök ifraz─▒n─▒ d╔Öqiq ├╢l├ºm╔Ök ├╝├º├╝n itl╔Örin yanaqlar─▒na c╔Örrahi yolla borular yerl╔Ö┼ƒdirmi┼ƒdi.\n\nLakin g├╢zl╔Önilm╔Öz bir ┼ƒey onun diqq╔Ötl╔Ö idar╔Ö olunan t╔Öcr├╝b╔Öl╔Örini pozma─ƒa davam etdi. H╔Ör hans─▒ bir qida g├╢r├╝nm╔Özd╔Ön ╔Övv╔Öl itl╔Ör t├╝p├╝rc╔Öy╔Ö ba┼ƒlad─▒lar. Laborant─▒n ayaq s╔Ösl╔Örini e┼ƒid╔Önd╔Ö a─ƒ─▒zlar─▒ suland─▒. Yem╔Ök qab─▒n─▒ g├╢r╔Önd╔Ö, h╔Ötta qap─▒n─▒n a├º─▒ld─▒─ƒ─▒n─▒ e┼ƒid╔Önd╔Ö t├╝p├╝rc╔Ök ax─▒rd─▒lar.\n\nPavlov bunu bir narahatl─▒q kimi r╔Ödd etm╔Ök ╔Öv╔Özin╔Ö, qeyri-adi bir ┼ƒeyl╔Ö qar┼ƒ─▒la┼ƒd─▒─ƒ─▒n─▒ ba┼ƒa d├╝┼ƒd├╝. O, bu erk╔Ön cavablar─▒ \"psixik ifrazatlar\" adland─▒rd─▒ v╔Ö onlar─▒ ├╢yr╔Önm╔Ök ├╝├º├╝n b├╝t├╝n t╔Ödqiqat proqram─▒n─▒ yenid╔Ön dizayn etdi.\n\nPavlov sistematik olaraq neytral stimulu - metronomu (├ºox vaxt z╔Öng kimi xat─▒rlan─▒r) yem╔Öyin t╔Öqdimat─▒ il╔Ö birl╔Ö┼ƒdirm╔Öy╔Ö ba┼ƒlad─▒. T╔Ökrarlanan c├╝tl╔Ö┼ƒm╔Öl╔Örd╔Ön sonra itl╔Ör yaln─▒z metronomun s╔Ösin╔Ö t├╝p├╝rc╔Ök t├╢k├╝rd├╝l╔Ör, he├º bir yem╔Ök g├╢r├╝nm├╝rd├╝.\n\nO, b├╝t├╝n prosesi elmi ciddilikl╔Ö s╔Ön╔Ödl╔Ö┼ƒdirdi: ╔Öld╔Ö etm╔Ö (assosiasiyan─▒ ├╢yr╔Önm╔Ök), m╔Öhv olma (yem╔Ök g╔Ölm╔Öyi dayand─▒rd─▒qda onu ├╢yr╔Önm╔Ö), spontan b╔Örpa (istirah╔Öt m├╝dd╔Ötind╔Ön sonra geri qay─▒dan reaksiya) v╔Ö ├╝mumil╔Ö┼ƒdirm╔Ö (ox┼ƒar s╔Ösl╔Ör╔Ö cavab).\n\nBu t╔Ösad├╝fi k╔Ö┼ƒf klassik kondisionerin t╔Öm╔Öli oldu v╔Ö Pavlova 1904-c├╝ ild╔Ö Fiziologiya ├╝zr╔Ö Nobel M├╝kafat─▒ qazand─▒rd─▒. Onun i┼ƒi Con Uotsondan tutmu┼ƒ beynin assosiasiyalar─▒ nec╔Ö formala┼ƒd─▒rd─▒─ƒ─▒n─▒ ├╢yr╔Ön╔Ön m├╝asir nevroloqlara q╔Öd╔Ör psixoloqlar─▒n n╔Ösill╔Örin╔Ö t╔Ösir etdi.",
    "titleAz": "Pavlovun t╔Ösad├╝f╔Ön k╔Ö┼ƒfi",
    "moralAz": "Maraql─▒ beyinl╔Ör g├╢zl╔Önilm╔Özl╔Ör╔Ö diqq╔Öt yetirdikd╔Ö b├╢y├╝k k╔Ö┼ƒfl╔Ör ortaya ├º─▒x─▒r. Pavlov itl╔Örin erk╔Ön t├╝p├╝rc╔Ök ifraz─▒na m╔Öh╔Öl qoymaya bil╔Ördi, amma bunun ╔Öv╔Özin╔Ö \"niy╔Ö?\" v╔Ö psixologiyan─▒ h╔Ömi┼ƒ╔Ölik d╔Öyi┼ƒdi.",
    "titleRu": "╨í╨╗╤â╤ç╨░╨╣╨╜╨╛╨╡ ╨╛╤é╨║╤Ç╤ï╤é╨╕╨╡ ╨ƒ╨░╨▓╨╗╨╛╨▓╨░",
    "contentHy": "1890-╒í╒»╒í╒╢ ╒⌐╒╛╒í╒»╒í╒╢╒╢╒Ñ╓Ç╒½╒╢ ╒╝╒╕╓é╒╜ ╓å╒½╒ª╒½╒╕╒¼╒╕╒ú ╘╗╒╛╒í╒╢ ╒è╒í╒╛╒¼╒╕╒╛╒¿ ╒ì╒í╒╢╒»╒┐ ╒è╒Ñ╒┐╒Ñ╓Ç╒ó╒╕╓é╓Ç╒ú╒½ ╘╖╓ä╒╜╒║╒Ñ╓Ç╒½╒┤╒Ñ╒╢╒┐╒í╒¼ ╒ó╒¬╒╖╒»╒╕╓é╒⌐╒╡╒í╒╢ ╒½╒╢╒╜╒┐╒½╒┐╒╕╓é╒┐╒╕╓é╒┤ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒º╓Ç ╒»╒í╒┐╒í╓Ç╒╕╓é╒┤ ╒╖╒╢╒Ñ╓Ç╒½ ╒┤╒í╓Ç╒╜╒╕╒▓╒í╒»╒í╒╢ ╒░╒í╒┤╒í╒»╒í╓Ç╒ú╒Ñ╓Ç╒½ ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒╡╒í╒¼: ╒å╓Ç╒í ╒í╒╖╒¡╒í╒┐╒í╒╢╓ä╒¿ ╒ó╒«╒í╒¡╒╢╒ñ╒½╓Ç ╒º╓Ç. ╒╢╒í ╒╛╒½╓Ç╒í╒ó╒╕╓é╒¬╒í╒»╒í╒╢ ╒¡╒╕╒▓╒╕╒╛╒í╒»╒╢╒Ñ╓Ç ╒º╓Ç ╒┐╒Ñ╒▓╒í╒ñ╓Ç╒Ñ╒¼ ╒╖╒╢╒Ñ╓Ç╒½ ╒í╒╡╒┐╒Ñ╓Ç╒½╒╢╒¥ ╒╜╒╢╒╢╒ñ╒½ ╒┤╒í╒┐╒╕╓é╓ü╒┤╒í╒╢ ╒¬╒í╒┤╒í╒╢╒í╒» ╒⌐╓ä╒½ ╒í╓Ç╒┐╒í╒ª╒í╒┐╒╕╓é╒┤╒¿ ╒│╒╖╒ú╓Ç╒½╒┐ ╒╣╒í╓â╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:\n\n╘▓╒í╒╡╓ü ╒½╒╢╒╣-╒╕╓Ç ╒í╒╢╒╜╒║╒í╒╜╒Ñ╒¼╒½ ╒ó╒í╒╢ ╒╖╒í╓Ç╒╕╓é╒╢╒í╒»╒╕╓é╒┤ ╒º╓Ç ╒¡╒í╒╢╒ú╒í╓Ç╒Ñ╒¼ ╒╢╓Ç╒í ╒┤╒í╒╢╓Ç╒í╒»╓Ç╒»╒½╒┐ ╒╛╒Ñ╓Ç╒í╒░╒╜╒»╒╛╒╕╒▓ ╓â╒╕╓Ç╒▒╒Ñ╓Ç╒¿: ╒ç╒╢╒Ñ╓Ç╒¿ ╒╜╒»╒╜╒Ñ╒¼ ╒Ñ╒╢ ╒⌐╒╕╓é╓ä ╒í╓Ç╒┐╒í╒░╒╕╒╜╒Ñ╒¼ ╒╢╒í╒¡╓ä╒í╒╢ ╒╜╒╢╒╢╒ñ╒½ ╒░╒í╒╡╒┐╒╢╒╛╒Ñ╒¼╒¿: ╘╡╓Ç╒ó ╒¼╒╜╒Ñ╓ü╒½╒╢ ╒¼╒í╒ó╒╕╓Ç╒í╒╢╒┐╒½ ╒╕╒┐╒╢╒í╒▒╒í╒╡╒╢╒Ñ╓Ç╒¿, ╒╢╓Ç╒í╒╢╓ä ╒⌐╒╕╓é╒¼╒í╓ü╒í╒╢╓ë ╒ì╒╢╒╢╒ñ╒½ ╒í╒┤╒í╒╢╒½ ╒┐╒Ñ╒╜╒╢╒Ñ╒¼╒╕╓é╓ü ╒»╒í╒┤ ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒Ñ╓Ç╒ó ╒¼╒╜╒╕╓é╒┤ ╒º╒½╒╢ ╒ñ╒╝╒í╒╢ ╒ó╒í╓ü╒╕╓é╒┤╒¿, ╒╢╓Ç╒í╒╢╓ä ╒⌐╓ä╒í╓ü╓Ç╒½╒╢╓ë\n\n╒ì╒í ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒░╒í╒┤╒í╓Ç╒Ñ╒¼╒╕╓é ╓â╒╕╒¡╒í╓Ç╒Ñ╒╢ ╒è╒í╒╛╒¼╒╕╒╛╒¿ ╒░╒í╒╜╒»╒í╓ü╒í╒╛, ╒╕╓Ç ╒║╒í╒┐╒í╒░╒í╒ó╒í╓Ç ╒½╒╢╒╣-╒╕╓Ç ╒í╓Ç╒┐╒í╒╜╒╕╒╛╒╕╓Ç ╒ó╒í╒╢╒½ ╒º ╒░╒í╒╢╒ñ╒½╒║╒Ñ╒¼: ╒å╒í ╒í╒╡╒╜ ╒╛╒í╒▓╒í╒¬╒í╒┤ ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒╢╒Ñ╓Ç╒╢ ╒í╒╢╒╛╒í╒╢╒Ñ╓ü ┬½╒░╒╕╒ú╒Ñ╒»╒í╒╢ ╒╜╒Ñ╒»╓Ç╒Ñ╓ü╒╢╒Ñ╓Ç┬╗ ╓ç ╒╛╒Ñ╓Ç╒í╒┤╒╖╒í╒»╒Ñ╓ü ╒½╓Ç ╒í╒┤╒ó╒╕╒▓╒╗ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒«╓Ç╒í╒ú╒½╓Ç╒¿╒¥ ╒ñ╓Ç╒í╒╢╓ä ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:\n\n╒è╒í╒╛╒¼╒╕╒╛╒¿ ╒╜╒»╒╜╒Ñ╓ü ╒░╒í╒┤╒í╒»╒í╓Ç╒ú╒╛╒í╒« ╒»╒Ñ╓Ç╒║╒╕╒╛ ╒ª╒╕╓é╒ú╒í╒»╓ü╒Ñ╒¼ ╒╣╒Ñ╒ª╒╕╓ä ╒ú╓Ç╒ú╒╝╒½╒╣╒¿╒¥ ╒┤╒Ñ╒┐╓Ç╒╕╒╢╒╕╒┤╒¿ (╒░╒í╒│╒í╒¡ ╒╜╒¡╒í╒¼ ╒º ╒░╒½╒╖╒╛╒╕╓é╒┤ ╒╕╓Ç╒║╒Ñ╒╜ ╒ª╒í╒╢╒ú)╒¥ ╒╜╒╢╒╢╒ñ╒½ ╒╢╒Ñ╓Ç╒»╒í╒╡╒í╓ü╒┤╒í╒╢ ╒░╒Ñ╒┐: ╘▓╒í╒ª╒┤╒½╓ü╒╜ ╒ª╒╕╓é╒ú╒í╒╛╒╕╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç╒½╓ü ╒░╒Ñ╒┐╒╕ ╒╖╒╢╒Ñ╓Ç╒¿ ╒⌐╓ä ╒º╒½╒╢ ╒ú╒í╒¼╒½╒╜ ╒┤╒Ñ╒╢╒í╒» ╒┤╒Ñ╒┐╓Ç╒╕╒╢╒╕╒┤╒½ ╒▒╒í╒╡╒╢╒½╓ü╒¥ ╒í╒╝╒í╒╢╓ü ╒»╒Ñ╓Ç╒í╒»╒╕╓é╓Ç╒½:\n\n╒å╒í ╓â╒í╒╜╒┐╒í╒ú╓Ç╒Ñ╓ü ╒╕╒▓╒╗ ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒¿ ╒ú╒½╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒¡╒╜╒┐╒╕╓é╒⌐╒╡╒í╒┤╒ó╒¥ ╒▒╒Ñ╒╝╓ä╒ó╒Ñ╓Ç╒╕╓é╒┤ (╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼╒╕╒╛ ╒í╒╜╒╕╓ü╒½╒í╓ü╒½╒í╒╢), ╒╛╒Ñ╓Ç╒í╓ü╒╕╓é╒┤ (╒╣╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼ ╒í╒╡╒╢, ╒Ñ╓Ç╒ó ╒╜╒╢╒╕╓é╒╢╒ñ╒¿ ╒ñ╒í╒ñ╒í╓Ç╒╕╓é╒┤ ╒º ╒ú╒í╒¼), ╒½╒╢╓ä╒╢╒í╒ó╒╕╓é╒¡ ╒╛╒Ñ╓Ç╒í╒»╒í╒╢╒ú╒╢╒╕╓é╒┤ (╒░╒í╒╢╒ú╒╜╒┐╒½ ╒╖╓Ç╒╗╒í╒╢╒½╓ü ╒░╒Ñ╒┐╒╕ ╒╛╒Ñ╓Ç╒í╒ñ╒í╒╝╒╢╒╕╓é╒┤ ╒º ╒║╒í╒┐╒í╒╜╒¡╒í╒╢) ΓÇïΓÇï╓ç ╒¿╒╢╒ñ╒░╒í╒╢╓Ç╒í╓ü╒╕╓é╒┤ (╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒Ñ╒¼╒╕╒╛ ╒╢╒┤╒í╒╢╒í╒┐╒½╒║ ╒░╒╢╒╣╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½╒╢):\n\n╘▒╒╡╒╜ ╒║╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒░╒í╒╡╒┐╒╢╒í╒ú╒╕╓Ç╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒ñ╒í╓Ç╒▒╒í╒╛ ╒ñ╒í╒╜╒í╒»╒í╒╢ ╒»╒╕╒╢╒ñ╒½╓ü╒½╒╕╒╢╒Ñ╓Ç╒╢╒Ñ╓Ç╒½ ╒░╒½╒┤╓ä╒¿ ╓ç ╒è╒í╒╛╒¼╒╕╒╛╒½╒╢ 1904 ╒⌐╒╛╒í╒»╒í╒╢╒½╒╢ ╒╜╒┐╒í╓ü╒í╒╛ ╒å╒╕╒ó╒Ñ╒¼╒╡╒í╒╢ ╒┤╓Ç╓ü╒í╒╢╒í╒» ╓å╒½╒ª╒½╒╕╒¼╒╕╒ú╒½╒í╒╡╒½ ╒╕╒¼╒╕╓Ç╒┐╒╕╓é╒┤: ╒å╓Ç╒í ╒í╒╖╒¡╒í╒┐╒í╒╢╓ä╒¿ ╒í╒ª╒ñ╒Ñ╓ü ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╢╒Ñ╓Ç╒½ ╒╜╒Ñ╓Ç╒╕╓é╒╢╒ñ╒╢╒Ñ╓Ç╒½ ╒╛╓Ç╒í╒¥ ╒ï╒╕╒╢ ╒ê╓é╒╕╒⌐╒╜╒╕╒╢╒½╓ü ╒┤╒½╒╢╒╣╓ç ╒¬╒í╒┤╒í╒╢╒í╒»╒í╒»╒½╓ü ╒╢╒╡╒í╓Ç╒ñ╒í╒ó╒í╒╢╒╢╒Ñ╓Ç, ╒╕╓Ç╒╕╒╢╓ä ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒┤ ╒º╒½╒╢, ╒⌐╒Ñ ╒½╒╢╒╣╒║╒Ñ╒╜ ╒º ╒╕╓é╒▓╒Ñ╒▓╒¿ ╒▒╓ç╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒í╒╜╒╕╓ü╒½╒í╓ü╒½╒í╒╢╒Ñ╓Ç╒¿:",
    "moralRu": "╨Æ╨╡╨╗╨╕╨║╨╕╨╡ ╨╛╤é╨║╤Ç╤ï╤é╨╕╤Å ╨┐╤Ç╨╛╨╕╤ü╤à╨╛╨┤╤Å╤é, ╨║╨╛╨│╨┤╨░ ╨╗╤Ä╨▒╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╤ï╨╡ ╤â╨╝╤ï ╨╛╨▒╤Ç╨░╤ë╨░╤Ä╤é ╨▓╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╨╜╨░ ╨╜╨╡╨╛╨╢╨╕╨┤╨░╨╜╨╜╨╛╨╡. ╨ƒ╨░╨▓╨╗╨╛╨▓ ╨╝╨╛╨│ ╨▒╤ï ╨╜╨╡ ╨╛╨▒╤Ç╨░╤ë╨░╤é╤î ╨▓╨╜╨╕╨╝╨░╨╜╨╕╤Å ╨╜╨░ ╤Ç╨░╨╜╨╜╨╡╨╡ ╤ü╨╗╤Ä╨╜╨╛╨╛╤é╨┤╨╡╨╗╨╡╨╜╨╕╨╡ ╤â ╤ü╨╛╨▒╨░╨║, ╨╜╨╛ ╨▓╨╝╨╡╤ü╤é╨╛ ╤ì╤é╨╛╨│╨╛ ╤ü╨┐╤Ç╨╛╤ü╨╕╨╗: ┬½╨ƒ╨╛╤ç╨╡╨╝╤â?┬╗ ╨╕ ╨╜╨░╨▓╤ü╨╡╨│╨┤╨░ ╨╕╨╖╨╝╨╡╨╜╨╕╨╗ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Ä.",
    "titleHy": "╒è╒í╒╛╒¼╒╕╒╛╒½ ╒║╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒░╒í╒╡╒┐╒╢╒í╒ú╒╕╓Ç╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
    "contentRu": "╨Æ 1890-╨╡ ╨│╨╛╨┤╤ï ╤Ç╤â╤ü╤ü╨║╨╕╨╣ ╤ä╨╕╨╖╨╕╨╛╨╗╨╛╨│ ╨ÿ╨▓╨░╨╜ ╨ƒ╨░╨▓╨╗╨╛╨▓ ╨┐╤Ç╨╛╨▓╨╛╨┤╨╕╨╗ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨┐╨╕╤ë╨╡╨▓╨░╤Ç╨╕╤é╨╡╨╗╤î╨╜╨╛╨╣ ╤ü╨╕╤ü╤é╨╡╨╝╤ï ╤ü╨╛╨▒╨░╨║ ╨▓ ╨ÿ╨╜╤ü╤é╨╕╤é╤â╤é╨╡ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨░╨╗╤î╨╜╨╛╨╣ ╨╝╨╡╨┤╨╕╤å╨╕╨╜╤ï ╨▓ ╨ƒ╨╡╤é╨╡╤Ç╨▒╤â╤Ç╨│╨╡. ╨ò╨│╨╛ ╤Ç╨░╨▒╨╛╤é╨░ ╨▒╤ï╨╗╨░ ╨║╤Ç╨╛╨┐╨╛╤é╨╗╨╕╨▓╨╛╨╣: ╨╛╨╜ ╤à╨╕╤Ç╤â╤Ç╨│╨╕╤ç╨╡╤ü╨║╨╕╨╝ ╨┐╤â╤é╨╡╨╝ ╨▓╨╢╨╕╨▓╨╗╤Å╨╗ ╨▓ ╤ë╨╡╨║╨╕ ╤ü╨╛╨▒╨░╨║ ╤é╤Ç╤â╨▒╨║╨╕ ╨┤╨╗╤Å ╤é╨╛╤ç╨╜╨╛╨│╨╛ ╨╕╨╖╨╝╨╡╤Ç╨╡╨╜╨╕╤Å ╨▓╤ï╨┤╨╡╨╗╨╡╨╜╨╕╤Å ╤ü╨╗╤Ä╨╜╤ï ╨┐╤Ç╨╕ ╨┐╨╛╨┤╨░╤ç╨╡ ╨╡╨┤╤ï.\n\n╨¥╨╛ ╤ç╤é╨╛-╤é╨╛ ╨╜╨╡╨╛╨╢╨╕╨┤╨░╨╜╨╜╨╛╨╡ ╨┐╨╛╤ü╤é╨╛╤Å╨╜╨╜╨╛ ╨╝╨╡╤ê╨░╨╗╨╛ ╨╡╨│╨╛ ╤é╤ë╨░╤é╨╡╨╗╤î╨╜╨╛ ╨║╨╛╨╜╤é╤Ç╨╛╨╗╨╕╤Ç╤â╨╡╨╝╤ï╨╝ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨░╨╝. ╨ú ╤ü╨╛╨▒╨░╨║ ╨╜╨░╤ç╨░╨╗╨╛╤ü╤î ╨▓╤ï╨┤╨╡╨╗╨╡╨╜╨╕╨╡ ╤ü╨╗╤Ä╨╜╤ï ╨╡╤ë╨╡ ╨┤╨╛ ╤é╨╛╨│╨╛, ╨║╨░╨║ ╨┐╨╛╤Å╨▓╨╕╨╗╨░╤ü╤î ╨╡╨┤╨░. ╨ú ╨╜╨╕╤à ╨┐╨╛╤é╨╡╨║╨╗╨╕ ╤ü╨╗╤Ä╨╜╨╕, ╨║╨╛╨│╨┤╨░ ╨╛╨╜╨╕ ╤â╤ü╨╗╤ï╤ê╨░╨╗╨╕ ╤ê╨░╨│╨╕ ╨╗╨░╨▒╨╛╤Ç╨░╨╜╤é╨░. ╨ú ╨╜╨╕╤à ╨▓╤ï╨┤╨╡╨╗╤Å╨╗╨░╤ü╤î ╤ü╨╗╤Ä╨╜╨░ ╨┐╤Ç╨╕ ╨▓╨╕╨┤╨╡ ╨╝╨╕╤ü╨║╨╕ ╤ü ╨╡╨┤╨╛╨╣ ╨╕╨╗╨╕ ╨┤╨░╨╢╨╡ ╨║╨╛╨│╨┤╨░ ╨╛╨╜╨╕ ╤ü╨╗╤ï╤ê╨░╨╗╨╕, ╨║╨░╨║ ╨╛╤é╨║╤Ç╤ï╨▓╨░╨╡╤é╤ü╤Å ╨┤╨▓╨╡╤Ç╤î.\n\n╨Æ╨╝╨╡╤ü╤é╨╛ ╤é╨╛╨│╨╛ ╤ç╤é╨╛╨▒╤ï ╤ü╤ç╨╡╤ü╤é╤î ╤ì╤é╨╛ ╨╜╨╡╨┐╤Ç╨╕╤Å╤é╨╜╨╛╤ü╤é╤î╤Ä, ╨ƒ╨░╨▓╨╗╨╛╨▓ ╨┐╤Ç╨╕╨╖╨╜╨░╨╗, ╤ç╤é╨╛ ╨╜╨░╤é╨║╨╜╤â╨╗╤ü╤Å ╨╜╨░ ╨╜╨╡╤ç╤é╨╛ ╨╜╨╡╨╛╨▒╤ï╤ç╨╜╨╛╨╡. ╨₧╨╜ ╨╜╨░╨╖╨▓╨░╨╗ ╤ì╤é╨╕ ╨┐╤Ç╨╡╨╢╨┤╨╡╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╤ï╨╡ ╤Ç╨╡╨░╨║╤å╨╕╨╕ ┬½╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╨╝╨╕ ╨▓╤ï╨┤╨╡╨╗╨╡╨╜╨╕╤Å╨╝╨╕┬╗ ╨╕ ╨┐╨╡╤Ç╨╡╨┐╤Ç╨╛╨╡╨║╤é╨╕╤Ç╨╛╨▓╨░╨╗ ╨▓╤ü╤Ä ╤ü╨▓╨╛╤Ä ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╤î╤ü╨║╤â╤Ä ╨┐╤Ç╨╛╨│╤Ç╨░╨╝╨╝╤â ╨┤╨╗╤Å ╨╕╤à ╨╕╨╖╤â╤ç╨╡╨╜╨╕╤Å.\n\n╨ƒ╨░╨▓╨╗╨╛╨▓ ╨╜╨░╤ç╨░╨╗ ╤ü╨╕╤ü╤é╨╡╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨╕ ╤ü╨╛╤ç╨╡╤é╨░╤é╤î ╨╜╨╡╨╣╤é╤Ç╨░╨╗╤î╨╜╤ï╨╣ ╤ü╤é╨╕╨╝╤â╨╗ ΓÇö ╨╝╨╡╤é╤Ç╨╛╨╜╨╛╨╝ (╤ç╨░╤ü╤é╨╛ ╨╛╤ê╨╕╨▒╨╛╤ç╨╜╨╛ ╨▓╨╛╤ü╨┐╤Ç╨╕╨╜╨╕╨╝╨░╨╡╨╝╤ï╨╣ ╨║╨░╨║ ╨║╨╛╨╗╨╛╨║╨╛╨╗╤î╤ç╨╕╨║) ΓÇö ╤ü ╨┐╤Ç╨╡╨┤╤ü╤é╨░╨▓╨╗╨╡╨╜╨╕╨╡╨╝ ╨╡╨┤╤ï. ╨ƒ╨╛╤ü╨╗╨╡ ╨┐╨╛╨▓╤é╨╛╤Ç╨╜╤ï╤à ╤ü╨┐╨░╤Ç╨╕╨▓╨░╨╜╨╕╨╣ ╤â ╤ü╨╛╨▒╨░╨║ ╨▓╤ï╨┤╨╡╨╗╤Å╨╗╨░╤ü╤î ╤ü╨╗╤Ä╨╜╨░ ╤é╨╛╨╗╤î╨║╨╛ ╨╛╤é ╨╖╨▓╤â╨║╨░ ╨╝╨╡╤é╤Ç╨╛╨╜╨╛╨╝╨░, ╨░ ╨╡╨┤╤ï ╨╜╨╡ ╨▒╤ï╨╗╨╛ ╨▓╨╕╨┤╨╜╨╛.\n\n╨₧╨╜ ╨╖╨░╨┤╨╛╨║╤â╨╝╨╡╨╜╤é╨╕╤Ç╨╛╨▓╨░╨╗ ╨▓╨╡╤ü╤î ╨┐╤Ç╨╛╤å╨╡╤ü╤ü ╤ü ╨╜╨░╤â╤ç╨╜╨╛╨╣ ╤ü╤é╤Ç╨╛╨│╨╛╤ü╤é╤î╤Ä: ╨┐╤Ç╨╕╨╛╨▒╤Ç╨╡╤é╨╡╨╜╨╕╨╡ (╨╛╨▒╤â╤ç╨╡╨╜╨╕╨╡ ╨░╤ü╤ü╨╛╤å╨╕╨░╤å╨╕╨╕), ╤â╨│╨░╤ü╨░╨╜╨╕╨╡ (╨╛╤é╨╝╨╡╨╜╨░ ╨╡╨╡, ╨║╨╛╨│╨┤╨░ ╨╡╨┤╨░ ╨┐╨╡╤Ç╨╡╤ü╤é╨░╨╡╤é ╨┐╨╛╤ü╤é╤â╨┐╨░╤é╤î), ╤ü╨┐╨╛╨╜╤é╨░╨╜╨╜╨╛╨╡ ╨▓╨╛╤ü╤ü╤é╨░╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡ (╤Ç╨╡╨░╨║╤å╨╕╤Å, ╨▓╨╛╨╖╨▓╤Ç╨░╤ë╨░╤Ä╤ë╨░╤Å╤ü╤Å ╨┐╨╛╤ü╨╗╨╡ ╨┐╨╡╤Ç╨╕╨╛╨┤╨░ ╨╛╤é╨┤╤ï╤à╨░) ╨╕ ╨│╨╡╨╜╨╡╤Ç╨░╨╗╨╕╨╖╨░╤å╨╕╤Å (╤Ç╨╡╨░╨║╤å╨╕╤Å ╨╜╨░ ╨┐╨╛╤à╨╛╨╢╨╕╨╡ ╨╖╨▓╤â╨║╨╕).\n\n╨¡╤é╨╛ ╤ü╨╗╤â╤ç╨░╨╣╨╜╨╛╨╡ ╨╛╤é╨║╤Ç╤ï╤é╨╕╨╡ ╤ü╤é╨░╨╗╨╛ ╨╛╤ü╨╜╨╛╨▓╨╛╨╣ ╨║╨╗╨░╤ü╤ü╨╕╤ç╨╡╤ü╨║╨╛╨╣ ╨╛╨▒╤â╤ü╨╗╨╛╨▓╨╗╨╡╨╜╨╜╨╛╤ü╤é╨╕ ╨╕ ╨┐╤Ç╨╕╨╜╨╡╤ü╨╗╨╛ ╨ƒ╨░╨▓╨╗╨╛╨▓╤â ╨¥╨╛╨▒╨╡╨╗╨╡╨▓╤ü╨║╤â╤Ä ╨┐╤Ç╨╡╨╝╨╕╤Ä ╨┐╨╛ ╤ä╨╕╨╖╨╕╨╛╨╗╨╛╨│╨╕╨╕ ╨▓ 1904 ╨│╨╛╨┤╤â. ╨ò╨│╨╛ ╤Ç╨░╨▒╨╛╤é╨░ ╨┐╨╛╨▓╨╗╨╕╤Å╨╗╨░ ╨╜╨░ ╨┐╨╛╨║╨╛╨╗╨╡╨╜╨╕╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╛╨▓, ╨╛╤é ╨ö╨╢╨╛╨╜╨░ ╨Æ╨░╤é╤ü╨╛╨╜╨░ ╨┤╨╛ ╤ü╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╤ï╤à ╨╜╨╡╨╣╤Ç╨╛╨▒╨╕╨╛╨╗╨╛╨│╨╛╨▓, ╨╕╨╖╤â╤ç╨░╤Ä╤ë╨╕╤à, ╨║╨░╨║ ╨╝╨╛╨╖╨│ ╤ä╨╛╤Ç╨╝╨╕╤Ç╤â╨╡╤é ╨░╤ü╤ü╨╛╤å╨╕╨░╤å╨╕╨╕."
  },
  {
    "id": 2,
    "title": "The Story of Phineas Gage",
    "titleKa": "ßâñßâÿßâ£ßâößâÉßâí ßâÆßâößâÿßâ»ßâÿßâí ßâÿßâíßâóßâ¥ßâáßâÿßâÉ",
    "chapterId": 3,
    "icon": "fluent:brain-circuit-20-filled",
    "content": "On September 13, 1848, 25-year-old Phineas Gage was working as a railroad construction foreman in Cavendish, Vermont. His crew was blasting rock to clear a path for new rail tracks. Gage's job was to pack explosive powder into drilled holes using a specially made iron tamping rodΓÇö43 inches long, 1.25 inches in diameter, and weighing over 13 pounds.\n\nIn a moment of distractionΓÇöperhaps he turned to speak to a colleagueΓÇöGage struck the iron rod against the rock before sand had been poured as a buffer. The powder ignited. The explosion launched the iron rod like a missile straight through his skull, entering below his left cheekbone and exiting through the top of his head, landing 80 feet away.\n\nAstonishingly, Gage did not die. He was conscious within minutes, able to walk and talk. The local physician, Dr. John Harlow, treated the gruesome wound. Gage physically recovered over the following months, but something fundamental had changed.\n\nBefore the accident, Gage was described as reliable, well-balanced, and a shrewd businessmanΓÇö\"the most efficient and capable foreman.\" Afterward, his personality was unrecognizable. He became profane, impulsive, disrespectful, and unable to follow through on plans. Friends said he was \"no longer Gage.\"\n\nHis case became one of the most important in neuroscience history. It provided the first strong evidence that specific brain regionsΓÇöparticularly the prefrontal cortexΓÇöare responsible for personality, decision-making, and social behavior. Modern neuroimaging has confirmed the rod destroyed much of his left frontal lobe, especially areas involved in emotional regulation and planning.",
    "contentKa": "1848 ßâ¼ßâößâÜßâí, ßâñßâÿßâ£ßâößâÉßâí ßâÆßâößâÿßâ»ßâÿ ßâáßâÖßâÿßâ£ßâÿßâÆßâûßâÿßâí ßâ¢ßâ¿ßâößâ£ßâößâæßâÜßâ¥ßâæßâÿßâí ßâ¥ßâíßâóßâÉßâóßâÿ ßâÿßâºßâ¥. ßâÉßâñßâößâùßâÑßâößâæßâÿßâíßâÉßâí ßâáßâÖßâÿßâ£ßâÿßâí ßâªßâößâáßâ½ßâÿ ßâ¢ßâÿßâí ßâùßâÉßâòßâÿßâí ßâÑßâÉßâÜßâÉßâ¿ßâÿ ßâ¿ßâößâòßâÿßâôßâÉ ßâôßâÉ ßâùßâÉßâòßâÿßâí ßâûßâößâ¢ßâ¥ßâôßâÉßâ£ ßâÆßâÉßâ¢ßâ¥ßâòßâÿßâôßâÉ. ßâÆßâößâÿßâ»ßâÿ ßâÆßâÉßâôßâÉßâáßâ⌐ßâÉ, ßâ¢ßâÉßâÆßâáßâÉßâ¢ ßâ¢ßâÿßâíßâÿ ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÉ ßâíßâáßâúßâÜßâÿßâÉßâô ßâ¿ßâößâÿßâ¬ßâòßâÉßâÜßâÉ. ßâößâí ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÉ ßâ£ßâößâÿßâáßâ¥ßâ¢ßâößâ¬ßâ£ßâÿßâößâáßâößâæßâÿßâí ßâÿßâíßâóßâ¥ßâáßâÿßâÉßâ¿ßâÿ ßâößâáßâù-ßâößâáßâùßâÿ ßâºßâòßâößâÜßâÉßâûßâö ßâ¢ßâ£ßâÿßâ¿ßâòßâ£ßâößâÜßâ¥ßâòßâÉßâ£ßâÿ ßâÆßâÉßâ«ßâôßâÉ.",
    "moral": "The brain is the seat of personalityΓÇödamage to specific areas transforms who we are. Gage's case taught us that our sense of self is rooted in biology.",
    "moralKa": "ßâóßâòßâÿßâ£ßâÿ ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâíßâÉßâôßâÆßâúßâáßâÿßâÉΓÇößâÖßâ¥ßâ£ßâÖßâáßâößâóßâúßâÜßâÿ ßâúßâæßâ£ßâößâæßâÿßâí ßâôßâÉßâûßâÿßâÉßâ£ßâößâæßâÉ ßâÆßâòßâÉßâÑßâèßâößâòßâí ßâíßâ«ßâòßâÉ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâÉßâô.",
    "moralAz": "Beyin ┼ƒ╔Öxsiyy╔Ötin oturaca─ƒ─▒d─▒r - x├╝susi sah╔Öl╔Ör╔Ö ziyan vurmaq bizim kim oldu─ƒumuzu d╔Öyi┼ƒir. Gage-in i┼ƒi biz╔Ö ├╢yr╔Ötdi ki, m╔Önlik duy─ƒumuz biologiyadan qaynaqlan─▒r.",
    "titleHy": "╒û╒½╒╢╒Ñ╒í╒╜ ╘│╒Ñ╒╡╒╗╒½ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
    "moralHy": "╒ê╓é╒▓╒Ñ╒▓╒¿ ╒í╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╢╒╜╒┐╒í╒╛╒í╒╡╓Ç╒╢ ╒º. ╒╕╓Ç╒╕╒╖╒í╒»╒½ ╒┐╒í╓Ç╒í╒«╓ä╒╢╒Ñ╓Ç╒½ ╒╛╒╢╒í╒╜╒¿ ╓â╒╕╒¡╒╕╓é╒┤ ╒º ╒┤╒Ñ╓Ç ╒╕╒╛ ╒¼╒½╒╢╒Ñ╒¼╒¿: ╘│╒Ñ╒╡╒╗╒½ ╒ñ╒Ñ╒║╓ä╒¿ ╒┤╒Ñ╒ª ╒╜╒╕╒╛╒╕╓Ç╒Ñ╓ü╓Ç╒Ñ╓ü, ╒╕╓Ç ╒┤╒Ñ╓Ç ╒½╒╢╓ä╒╢╒í╒ª╒ú╒í╓ü╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒í╓Ç╒┤╒í╒┐╒í╓ü╒í╒« ╒º ╒»╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗:",
    "moralRu": "╨£╨╛╨╖╨│ ΓÇö ╤ì╤é╨╛ ╨▓╨╝╨╡╤ü╤é╨╕╨╗╨╕╤ë╨╡ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕: ╨┐╨╛╨▓╤Ç╨╡╨╢╨┤╨╡╨╜╨╕╨╡ ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╨╡╨╜╨╜╤ï╤à ╨╛╨▒╨╗╨░╤ü╤é╨╡╨╣ ╨╝╨╡╨╜╤Å╨╡╤é ╤é╨╛, ╨║╨╡╨╝ ╨╝╤ï ╤Å╨▓╨╗╤Å╨╡╨╝╤ü╤Å. ╨í╨╗╤â╤ç╨░╨╣ ╨ô╨╡╨╣╨┤╨╢╨░ ╨╜╨░╤â╤ç╨╕╨╗ ╨╜╨░╤ü ╤é╨╛╨╝╤â, ╤ç╤é╨╛ ╨╜╨░╤ê╨╡ ╤ü╨░╨╝╨╛╨╛╤ë╤â╤ë╨╡╨╜╨╕╨╡ ╨║╨╛╤Ç╨╡╨╜╨╕╤é╤ü╤Å ╨▓ ╨▒╨╕╨╛╨╗╨╛╨│╨╕╨╕.",
    "titleRu": "╨ÿ╤ü╤é╨╛╤Ç╨╕╤Å ╨ñ╨╕╨╜╨╡╨░╤ü╨░ ╨ô╨╡╨╣╨┤╨╢╨░",
    "contentHy": "1848 ╒⌐╒╛╒í╒»╒í╒╢╒½ ╒╜╒Ñ╒║╒┐╒Ñ╒┤╒ó╒Ñ╓Ç╒½ 13-╒½╒╢ 25-╒í╒┤╒╡╒í ╒û╒½╒╢╒Ñ╒╜ ╘│╒Ñ╒╡╒╗╒¿ ╒í╒╖╒¡╒í╒┐╒╕╓é╒┤ ╒º╓Ç ╒╕╓Ç╒║╒Ñ╒╜ ╒Ñ╓Ç╒»╒í╒⌐╒╕╓é╒▓╒╕╓é ╒╖╒½╒╢╒í╓Ç╒í╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒╛╒í╓Ç╒║╒Ñ╒┐ ╒Ä╒Ñ╓Ç╒┤╒╕╒╢╒┐ ╒╢╒í╒░╒í╒╢╒ú╒½ ╒ö╒í╒╛╒Ñ╒╢╒ñ╒½╒╖ ╓ä╒í╒▓╒í╓ä╒╕╓é╒┤: ╒å╓Ç╒í ╒í╒╢╒▒╒╢╒í╒»╒í╒ª╒┤╒¿ ╒║╒í╒╡╒⌐╒Ñ╓ü╒╢╒╕╓é╒┤ ╒º╓Ç ╒¬╒í╒╡╒╝╒Ñ╓Ç╒¿╒¥ ╒╢╒╕╓Ç ╒Ñ╓Ç╒»╒í╒⌐╒╕╓é╒▓╒í╒╡╒½╒╢ ╒ú╒«╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç ╒│╒í╒╢╒í╒║╒í╓Ç╒░ ╒ó╒í╓ü╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç: ╘│╒Ñ╒╡╒╗╒½ ╒ú╒╕╓Ç╒«╒╢ ╒º╓Ç ╒║╒í╒╡╒⌐╒╕╓é╓ü╒½╒» ╓â╒╕╒╖╒½ ╓â╒í╒⌐╒Ñ╒⌐╒í╒╛╒╕╓Ç╒Ñ╒¼ ╓â╒╕╓Ç╒╛╒í╒« ╒í╒╢╓ü╓ä╒Ñ╓Ç╒½ ╒┤╒Ñ╒╗╒¥ ╓à╒ú╒┐╒í╒ú╒╕╓Ç╒«╒Ñ╒¼╒╕╒╛ ╒░╒í╒┐╒╕╓é╒» ╒║╒í╒┐╓Ç╒í╒╜╒┐╒╛╒í╒« ╒Ñ╓Ç╒»╒í╒⌐╒Ñ ╒╜╒Ñ╒▓╒┤╒╕╒▓ ╒▒╒╕╒▓╒¥ 43 ╒ñ╒╡╒╕╓é╒╡╒┤ ╒Ñ╓Ç╒»╒í╓Ç╒╕╓é╒⌐╒╡╒í╒┤╒ó, 1,25 ╒ñ╒╡╒╕╓é╒╡╒┤ ╒┐╓Ç╒í╒┤╒í╒ú╒«╒╕╒╛ ╓ç 13 ╓å╒╕╓é╒╢╒┐╒½╓ü ╒í╒╛╒Ñ╒¼╒½ ╓ä╒í╒╖╒╕╒╛:\n\n╒ê╓é╒╖╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╖╒Ñ╒▓╒╛╒í╒« ╒┤╒½ ╒║╒í╒░╒½, ╒Ñ╓Ç╓ç╒½ ╒⌐╒Ñ ╒╢╒í ╒╖╓Ç╒╗╒╛╒Ñ╓ü, ╒╕╓Ç╒║╒Ñ╒╜╒ª╒½ ╒¡╒╕╒╜╒½ ╒ú╒╕╓Ç╒«╒¿╒╢╒»╒Ñ╓Ç╒╕╒╗ ╒░╒Ñ╒┐, ╘│╒Ñ╒╡╒╗╒¿ ╒Ñ╓Ç╒»╒í╒⌐╒Ñ ╒▒╒╕╒▓╒¿ ╒░╒í╓Ç╒╛╒í╒«╒Ñ╓ü ╒¬╒í╒╡╒╝╒½╒╢, ╒╢╒í╒¡╓ä╒í╒╢ ╒í╒╛╒í╒ª╒¿ ╒¼╓ü╒╢╒Ñ╒¼╒¿ ╒╕╓Ç╒║╒Ñ╒╜ ╒ó╒╕╓é╓å╒Ñ╓Ç: ╒ô╒╕╒╖╒¿ ╒ó╒╝╒╢╒»╒╛╒Ñ╓ü╓ë ╒è╒í╒╡╒⌐╒╡╒╕╓é╒╢╒¿ ╒░╓Ç╒⌐╒½╒╝╒½ ╒║╒Ñ╒╜ ╒Ñ╓Ç╒»╒í╒⌐╒Ñ ╒▒╒╕╒▓╒¿ ╒í╓Ç╒▒╒í╒»╒Ñ╓ü ╒╕╓é╒▓╒½╒▓ ╒╢╓Ç╒í ╒ú╒í╒╢╒ú╒½ ╒┤╒½╒╗╒╕╒╛, ╒┤╒┐╒╢╒Ñ╒¼╒╕╒╛ ╒▒╒í╒¡ ╒í╒╡╒┐╒╕╒╜╒»╓Ç╒½ ╒┐╒í╒» ╓ç ╒ñ╒╕╓é╓Ç╒╜ ╒ú╒í╒¼╒╕╒╛ ╒ú╒¼╒¡╒½ ╒╛╒Ñ╓Ç╓ç╒½╓ü╒¥ ╒╛╒í╒╡╓Ç╒º╒╗╓ä ╒»╒í╒┐╒í╓Ç╒Ñ╒¼╒╕╒╛ 80 ╒╕╒┐╒╢╒í╒╣╒í╓â ╒░╒Ñ╒╝╒í╒╛╒╕╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒╛╓Ç╒í:\n\n╘╢╒í╓Ç╒┤╒í╒╢╒í╒¼╒½ ╒º, ╒╕╓Ç ╘│╒Ñ╒╡╒╗╒¿ ╒╣╒½ ╒┤╒í╒░╒í╓ü╒Ñ╒¼╓ë ╒å╒í ╒╕╓é╒╖╒í╒ú╒╢╒í╓ü ╒º╓Ç ╓Ç╒╕╒║╒Ñ╒╢╒Ñ╓Ç╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤, ╒»╒í╓Ç╒╕╒▓╒í╒╢╒╕╓é╒┤ ╒º╓Ç ╓ä╒í╒╡╒¼╒Ñ╒¼ ╓ç ╒¡╒╕╒╜╒Ñ╒¼: ╒ì╒í╓Ç╒╜╒í╓â╒Ñ╒¼╒½ ╒╛╒Ñ╓Ç╓ä╒¿ ╒ó╒╕╓é╒¬╒Ñ╒¼ ╒º ╒┐╒Ñ╒▓╒½ ╒ó╒¬╒½╒╖╒»╒¿╒¥ ╒ó╒¬╒½╒╖╒» ╒ï╒╕╒╢ ╒Ç╒í╓Ç╒¼╒╕╒╕╓é╒╢╓ë ╘│╒Ñ╒╡╒╗╒¿ ╓å╒½╒ª╒½╒»╒í╒║╒Ñ╒╜ ╒╛╒Ñ╓Ç╒í╒»╒í╒╢╒ú╒╢╒╛╒Ñ╓ü ╒░╒í╒╗╒╕╓Ç╒ñ ╒í╒┤╒½╒╜╒╢╒Ñ╓Ç╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤, ╒ó╒í╒╡╓ü ╒½╒╢╒╣-╒╕╓Ç ╒░╒½╒┤╒╢╒í╓Ç╒í╓Ç ╒ó╒í╒╢ ╓â╒╕╒¡╒╛╒Ñ╓ü:\n\n╘┤╒¬╒ó╒í╒¡╒┐ ╒║╒í╒┐╒í╒░╒í╓Ç╒½╓ü ╒í╒╝╒í╒╗ ╘│╒Ñ╒╡╒╗╒½╒╢ ╒╢╒»╒í╓Ç╒í╒ú╓Ç╒╕╓é╒┤ ╒º╒½╒╢ ╒╕╓Ç╒║╒Ñ╒╜ ╒╛╒╜╒┐╒í╒░╒Ñ╒¼╒½, ╒░╒í╒╛╒í╒╜╒í╓Ç╒í╒»╒╖╒╝╒╛╒í╒« ╓ç ╒¡╒╕╓Ç╒í╒⌐╒í╓â╒í╒╢╓ü ╒ú╒╕╓Ç╒«╒í╓Ç╒í╓Ç╒¥ ┬½╒í╒┤╒Ñ╒╢╒í╒í╓Ç╒ñ╒╡╒╕╓é╒╢╒í╒╛╒Ñ╒┐ ╓ç ╒¿╒╢╒ñ╒╕╓é╒╢╒í╒» ╒╛╒í╓Ç╒║╒Ñ╒┐┬╗: ╒Ç╒Ñ╒┐╒╕ ╒╢╓Ç╒í ╒í╒╢╒▒╒¿ ╒í╒╢╒│╒í╒╢╒í╒╣╒Ñ╒¼╒½ ╒º╓Ç╓ë ╒å╒í ╒ñ╒í╓Ç╒▒╒í╒╛ ╒╜╓Ç╒ó╒í╒║╒½╒▓╒«, ╒½╒┤╒║╒╕╓é╒¼╒╜╒½╒╛, ╒í╒╢╒░╒í╓Ç╒ú╒í╒¼╒½╓ü ╓ç ╒╣╒»╒í╓Ç╒╕╒▓╒í╓ü╒í╒╛ ╒½╓Ç╒í╒»╒í╒╢╒í╓ü╒╢╒Ñ╒¼ ╒║╒¼╒í╒╢╒╢╒Ñ╓Ç╒¿: ╘╕╒╢╒»╒Ñ╓Ç╒╢╒Ñ╓Ç╒╢ ╒í╒╜╒í╓ü╒½╒╢, ╒╕╓Ç ╒╢╒í ┬½╒í╒╡╒¼╓ç╒╜ ╘│╒Ñ╒╡╒╗╒¿ ╒╣╒º┬╗:\n\n╒å╓Ç╒í ╒ú╒╕╓Ç╒«╒¿ ╒ñ╒í╓Ç╒▒╒í╒╛ ╒í╒┤╒Ñ╒╢╒í╒»╒í╓Ç╓ç╒╕╓Ç╒╢╒Ñ╓Ç╒½╓ü ╒┤╒Ñ╒»╒¿ ╒╢╒╡╒í╓Ç╒ñ╒í╒ú╒½╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗: ╘▒╒╡╒╢ ╒┐╓Ç╒í╒┤╒í╒ñ╓Ç╒Ñ╓ü ╒í╒╝╒í╒╗╒½╒╢ ╒í╒┤╒╕╓é╓Ç ╒í╒║╒í╓ü╒╕╓é╒╡╓ü╒╢ ╒í╒╡╒╢ ╒┤╒í╒╜╒½╒╢, ╒╕╓Ç ╒╕╓é╒▓╒Ñ╒▓╒½ ╒░╒í╒┐╒╕╓é╒» ╒╖╓Ç╒╗╒í╒╢╒╢╒Ñ╓Ç╒¿, ╒░╒í╒┐╒»╒í╒║╒Ñ╒╜ ╒╢╒í╒¡╒í╒│╒í╒»╒í╒┐╒í╒╡╒½╒╢ ╒»╒Ñ╒▓╓ç╒¿, ╒║╒í╒┐╒í╒╜╒¡╒í╒╢╒í╒┐╒╕╓é ╒Ñ╒╢ ╒í╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢, ╒╕╓Ç╒╕╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╒»╒í╒╡╒í╓ü╒┤╒í╒╢ ╓ç ╒╜╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒╛╒í╓Ç╓ä╒í╒ú╒«╒½ ╒░╒í╒┤╒í╓Ç: ╘║╒í╒┤╒í╒╢╒í╒»╒í╒»╒½╓ü ╒╢╒Ñ╒╡╓Ç╒╕╒║╒í╒┐╒»╒Ñ╓Ç╒╕╓é╒┤╒¿ ╒░╒í╒╜╒┐╒í╒┐╒Ñ╒¼ ╒º, ╒╕╓Ç ╒▒╒╕╒▓╒¿ ╒╕╒╣╒╢╒╣╒í╓ü╓Ç╒Ñ╒¼ ╒º ╒╢╓Ç╒í ╒▒╒í╒¡ ╒│╒í╒»╒í╒┐╒í╒╡╒½╒╢ ╒ó╒¼╒⌐╒½ ╒┤╒Ñ╒« ╒┤╒í╒╜╒¿, ╒░╒í╒┐╒»╒í╒║╒Ñ╒╜ ╒í╒╡╒╢ ╒░╒í╒┐╒╛╒í╒«╒╢╒Ñ╓Ç╒¿, ╒╕╓Ç╒╕╒╢╓ä ╒╢╒Ñ╓Ç╒ú╓Ç╒í╒╛╒╛╒í╒« ╒Ñ╒╢ ╒░╒╕╓é╒ª╒í╒»╒í╒╢ ╒»╒í╓Ç╒ú╒í╒╛╒╕╓Ç╒┤╒í╒╢ ╓ç ╒║╒¼╒í╒╢╒í╒╛╒╕╓Ç╒┤╒í╒╢ ╒┤╒Ñ╒╗:",
    "contentRu": "13 ╤ü╨╡╨╜╤é╤Å╨▒╤Ç╤Å 1848 ╨│╨╛╨┤╨░ 25-╨╗╨╡╤é╨╜╨╕╨╣ ╨ñ╨╕╨╜╨╡╨░╤ü ╨ô╨╡╨╣╨┤╨╢ ╤Ç╨░╨▒╨╛╤é╨░╨╗ ╨▒╤Ç╨╕╨│╨░╨┤╨╕╤Ç╨╛╨╝ ╨╜╨░ ╤ü╤é╤Ç╨╛╨╕╤é╨╡╨╗╤î╤ü╤é╨▓╨╡ ╨╢╨╡╨╗╨╡╨╖╨╜╨╛╨╣ ╨┤╨╛╤Ç╨╛╨│╨╕ ╨▓ ╨Ü╨░╨▓╨╡╨╜╨┤╨╕╤ê╨╡, ╤ê╤é╨░╤é ╨Æ╨╡╤Ç╨╝╨╛╨╜╤é. ╨ò╨│╨╛ ╨║╨╛╨╝╨░╨╜╨┤╨░ ╨▓╨╖╤Ç╤ï╨▓╨░╨╗╨░ ╨║╨░╨╝╨╜╨╕, ╤ç╤é╨╛╨▒╤ï ╤Ç╨░╤ü╤ç╨╕╤ü╤é╨╕╤é╤î ╨┐╤â╤é╤î ╨┤╨╗╤Å ╨╜╨╛╨▓╤ï╤à ╨╢╨╡╨╗╨╡╨╖╨╜╨╛╨┤╨╛╤Ç╨╛╨╢╨╜╤ï╤à ╨┐╤â╤é╨╡╨╣. ╨á╨░╨▒╨╛╤é╨░ ╨ô╨╡╨╣╨┤╨╢╨░ ╨╖╨░╨║╨╗╤Ä╤ç╨░╨╗╨░╤ü╤î ╨▓ ╤é╨╛╨╝, ╤ç╤é╨╛╨▒╤ï ╨╖╨░╤ü╤ï╨┐╨░╤é╤î ╨▓╨╖╤Ç╤ï╨▓╤ç╨░╤é╤ï╨╣ ╨┐╨╛╤Ç╨╛╤ê╨╛╨║ ╨▓ ╨┐╤Ç╨╛╤ü╨▓╨╡╤Ç╨╗╨╡╨╜╨╜╤ï╨╡ ╨╛╤é╨▓╨╡╤Ç╤ü╤é╨╕╤Å ╤ü ╨┐╨╛╨╝╨╛╤ë╤î╤Ä ╤ü╨┐╨╡╤å╨╕╨░╨╗╤î╨╜╨╛ ╨╕╨╖╨│╨╛╤é╨╛╨▓╨╗╨╡╨╜╨╜╨╛╨│╨╛ ╨╢╨╡╨╗╨╡╨╖╨╜╨╛╨│╨╛ ╤é╤Ç╨░╨╝╨▒╨╛╨▓╨╛╤ç╨╜╨╛╨│╨╛ ╤ü╤é╨╡╤Ç╨╢╨╜╤Å ╨┤╨╗╨╕╨╜╨╛╨╣ 43 ╨┤╤Ä╨╣╨╝╨░, ╨┤╨╕╨░╨╝╨╡╤é╤Ç╨╛╨╝ 1,25 ╨┤╤Ä╨╣╨╝╨░ ╨╕ ╨▓╨╡╤ü╨╛╨╝ ╨▒╨╛╨╗╨╡╨╡ 13 ╤ä╤â╨╜╤é╨╛╨▓.\n\n╨Æ ╨╝╨╛╨╝╨╡╨╜╤é ╨╛╤é╨▓╨╗╨╡╤ç╨╡╨╜╨╕╤Å ΓÇö ╨▓╨╛╨╖╨╝╨╛╨╢╨╜╨╛, ╨╛╨╜ ╨┐╨╛╨▓╨╡╤Ç╨╜╤â╨╗╤ü╤Å, ╤ç╤é╨╛╨▒╤ï ╨┐╨╛╨│╨╛╨▓╨╛╤Ç╨╕╤é╤î ╤ü ╨║╨╛╨╗╨╗╨╡╨│╨╛╨╣, ΓÇö ╨ô╨╡╨╣╨┤╨╢ ╤â╨┤╨░╤Ç╨╕╨╗ ╨╢╨╡╨╗╨╡╨╖╨╜╤ï╨╝ ╤ü╤é╨╡╤Ç╨╢╨╜╨╡╨╝ ╨╛ ╨║╨░╨╝╨╡╨╜╤î, ╨┐╤Ç╨╡╨╢╨┤╨╡ ╤ç╨╡╨╝ ╨▓ ╨║╨░╤ç╨╡╤ü╤é╨▓╨╡ ╨▒╤â╤ä╨╡╤Ç╨░ ╨▒╤ï╨╗ ╨╜╨░╤ü╤ï╨┐╨░╨╜ ╨┐╨╡╤ü╨╛╨║. ╨ƒ╨╛╤Ç╨╛╤ê╨╛╨║ ╨╖╨░╨│╨╛╤Ç╨╡╨╗╤ü╤Å. ╨Æ ╤Ç╨╡╨╖╤â╨╗╤î╤é╨░╤é╨╡ ╨▓╨╖╤Ç╤ï╨▓╨░ ╨╢╨╡╨╗╨╡╨╖╨╜╤ï╨╣ ╤ü╤é╨╡╤Ç╨╢╨╡╨╜╤î, ╨║╨░╨║ ╤Ç╨░╨║╨╡╤é╨░, ╨┐╨╛╨┐╨░╨╗ ╨┐╤Ç╤Å╨╝╨╛ ╨╡╨╝╤â ╨▓ ╤ç╨╡╤Ç╨╡╨┐, ╨▓╨╛╤ê╤æ╨╗ ╨┐╨╛╨┤ ╨╗╨╡╨▓╤â╤Ä ╤ü╨║╤â╨╗╤â ╨╕ ╨▓╤ï╤ê╨╡╨╗ ╤ç╨╡╤Ç╨╡╨╖ ╨╝╨░╨║╤â╤ê╨║╤â ╨│╨╛╨╗╨╛╨▓╤ï, ╨┐╤Ç╨╕╨╖╨╡╨╝╨╗╨╕╨▓╤ê╨╕╤ü╤î ╨╜╨░ ╤Ç╨░╤ü╤ü╤é╨╛╤Å╨╜╨╕╨╕ 80 ╤ä╤â╤é╨╛╨▓.\n\n╨ú╨┤╨╕╨▓╨╕╤é╨╡╨╗╤î╨╜╨╛, ╨╜╨╛ ╨ô╨╡╨╣╨┤╨╢ ╨╜╨╡ ╤â╨╝╨╡╤Ç. ╨º╨╡╤Ç╨╡╨╖ ╨╜╨╡╤ü╨║╨╛╨╗╤î╨║╨╛ ╨╝╨╕╨╜╤â╤é ╨╛╨╜ ╨┐╤Ç╨╕╤ê╨╡╨╗ ╨▓ ╤ü╨╛╨╖╨╜╨░╨╜╨╕╨╡, ╨╝╨╛╨│ ╤à╨╛╨┤╨╕╤é╤î ╨╕ ╨│╨╛╨▓╨╛╤Ç╨╕╤é╤î. ╨£╨╡╤ü╤é╨╜╤ï╨╣ ╨▓╤Ç╨░╤ç, ╨┤╨╛╨║╤é╨╛╤Ç ╨ö╨╢╨╛╨╜ ╨Ñ╨░╤Ç╨╗╨╛╤â, ╨╛╨▒╤Ç╨░╨▒╨╛╤é╨░╨╗ ╤â╨╢╨░╤ü╨╜╤â╤Ä ╤Ç╨░╨╜╤â. ╨ô╨╡╨╣╨┤╨╢ ╤ä╨╕╨╖╨╕╤ç╨╡╤ü╨║╨╕ ╨▓╤ï╨╖╨┤╨╛╤Ç╨╛╨▓╨╡╨╗ ╨▓ ╤é╨╡╤ç╨╡╨╜╨╕╨╡ ╤ü╨╗╨╡╨┤╤â╤Ä╤ë╨╕╤à ╨╝╨╡╤ü╤Å╤å╨╡╨▓, ╨╜╨╛ ╤ç╤é╨╛-╤é╨╛ ╤ä╤â╨╜╨┤╨░╨╝╨╡╨╜╤é╨░╨╗╤î╨╜╨╛╨╡ ╨╕╨╖╨╝╨╡╨╜╨╕╨╗╨╛╤ü╤î.\n\n╨ö╨╛ ╨░╨▓╨░╤Ç╨╕╨╕ ╨ô╨╡╨╣╨┤╨╢╨░ ╨╛╨┐╨╕╤ü╤ï╨▓╨░╨╗╨╕ ╨║╨░╨║ ╨╜╨░╨┤╨╡╨╢╨╜╨╛╨│╨╛, ╤â╤Ç╨░╨▓╨╜╨╛╨▓╨╡╤ê╨╡╨╜╨╜╨╛╨│╨╛ ╨╕ ╨┐╤Ç╨╛╨╜╨╕╤å╨░╤é╨╡╨╗╤î╨╜╨╛╨│╨╛ ╨▒╨╕╨╖╨╜╨╡╤ü╨╝╨╡╨╜╨░ ΓÇö ┬½╤ü╨░╨╝╨╛╨│╨╛ ╤ì╤ä╤ä╨╡╨║╤é╨╕╨▓╨╜╨╛╨│╨╛ ╨╕ ╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╨│╨╛ ╨╝╨░╤ü╤é╨╡╤Ç╨░┬╗. ╨ƒ╨╛╤ü╨╗╨╡ ╤ì╤é╨╛╨│╨╛ ╨╡╨│╨╛ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╤î ╤ü╤é╨░╨╗╨░ ╨╜╨╡╤â╨╖╨╜╨░╨▓╨░╨╡╨╝╨╛╨╣. ╨₧╨╜ ╤ü╤é╨░╨╗ ╨╜╨╡╤ç╨╡╤ü╤é╨╕╨▓╤å╨╡╨╝, ╨╕╨╝╨┐╤â╨╗╤î╤ü╨╕╨▓╨╜╤ï╨╝, ╨╜╨╡╤â╨▓╨░╨╢╨╕╤é╨╡╨╗╤î╨╜╤ï╨╝ ╨╕ ╨╜╨╡╤ü╨┐╨╛╤ü╨╛╨▒╨╜╤ï╨╝ ╨┤╨╛╨▓╨╡╤ü╤é╨╕ ╨┤╨╛ ╨║╨╛╨╜╤å╨░ ╤ü╨▓╨╛╨╕ ╨┐╨╗╨░╨╜╤ï. ╨ö╤Ç╤â╨╖╤î╤Å ╤ü╨║╨░╨╖╨░╨╗╨╕, ╤ç╤é╨╛ ╨╛╨╜ ┬½╨▒╨╛╨╗╤î╤ê╨╡ ╨╜╨╡ ╨ô╨╡╨╣╨┤╨╢┬╗.\n\n╨ò╨│╨╛ ╤ü╨╗╤â╤ç╨░╨╣ ╤ü╤é╨░╨╗ ╨╛╨┤╨╜╨╕╨╝ ╨╕╨╖ ╤ü╨░╨╝╤ï╤à ╨▓╨░╨╢╨╜╤ï╤à ╨▓ ╨╕╤ü╤é╨╛╤Ç╨╕╨╕ ╨╜╨╡╨╣╤Ç╨╛╨▒╨╕╨╛╨╗╨╛╨│╨╕╨╕. ╨¡╤é╨╛ ╤ü╤é╨░╨╗╨╛ ╨┐╨╡╤Ç╨▓╤ï╨╝ ╤â╨▒╨╡╨┤╨╕╤é╨╡╨╗╤î╨╜╤ï╨╝ ╨┤╨╛╨║╨░╨╖╨░╤é╨╡╨╗╤î╤ü╤é╨▓╨╛╨╝ ╤é╨╛╨│╨╛, ╤ç╤é╨╛ ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╨╡╨╜╨╜╤ï╨╡ ╨╛╨▒╨╗╨░╤ü╤é╨╕ ╨╝╨╛╨╖╨│╨░, ╨╛╤ü╨╛╨▒╨╡╨╜╨╜╨╛ ╨┐╤Ç╨╡╤ä╤Ç╨╛╨╜╤é╨░╨╗╤î╨╜╨░╤Å ╨║╨╛╤Ç╨░, ╨╛╤é╨▓╨╡╤ç╨░╤Ä╤é ╨╖╨░ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╤î, ╨┐╤Ç╨╕╨╜╤Å╤é╨╕╨╡ ╤Ç╨╡╤ê╨╡╨╜╨╕╨╣ ╨╕ ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╨╛╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡. ╨í╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╨░╤Å ╨╜╨╡╨╣╤Ç╨╛╨▓╨╕╨╖╤â╨░╨╗╨╕╨╖╨░╤å╨╕╤Å ╨┐╨╛╨┤╤é╨▓╨╡╤Ç╨┤╨╕╨╗╨░, ╤ç╤é╨╛ ╤ü╤é╨╡╤Ç╨╢╨╡╨╜╤î ╤Ç╨░╨╖╤Ç╤â╤ê╨╕╨╗ ╨▒╨╛╨╗╤î╤ê╤â╤Ä ╤ç╨░╤ü╤é╤î ╨╡╨│╨╛ ╨╗╨╡╨▓╨╛╨╣ ╨╗╨╛╨▒╨╜╨╛╨╣ ╨┤╨╛╨╗╨╕, ╨╛╤ü╨╛╨▒╨╡╨╜╨╜╨╛ ╨╛╨▒╨╗╨░╤ü╤é╨╕, ╤â╤ç╨░╤ü╤é╨▓╤â╤Ä╤ë╨╕╨╡ ╨▓ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛╨╣ ╤Ç╨╡╨│╤â╨╗╤Å╤å╨╕╨╕ ╨╕ ╨┐╨╗╨░╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╕.",
    "titleAz": "Phineas Gage-nin Hekay╔Ösi",
    "contentAz": "13 sentyabr 1848-ci ild╔Ö 25 ya┼ƒl─▒ Phineas Gage Vermont ┼ƒtat─▒n─▒n Cavendish ┼ƒ╔Öh╔Örind╔Ö d╔Ömir yolu tikintisi ├╝zr╔Ö usta i┼ƒl╔Öyirdi. Onun ekipaj─▒ yeni d╔Ömir yolu relsl╔Öri ├╝├º├╝n c─▒─ƒ─▒r a├ºmaq ├╝├º├╝n qaya partlad─▒b. Gage-nin i┼ƒi x├╝susi haz─▒rlanm─▒┼ƒ d╔Ömir ├ºubuqdan istifad╔Ö ed╔Ör╔Ök qaz─▒lm─▒┼ƒ delikl╔Ör╔Ö partlay─▒c─▒ toz y─▒─ƒmaq idi - 43 d├╝ym uzunlu─ƒunda, 1,25 d├╝ym diametrd╔Ö v╔Ö 13 funtdan ├ºox a─ƒ─▒rl─▒─ƒ─▒nda.\n\nDiqq╔Ötinin da─ƒ─▒ld─▒─ƒ─▒ bir anda ΓÇô b╔Ölk╔Ö d╔Ö h╔Ömkar─▒ il╔Ö dan─▒┼ƒmaq ├╝├º├╝n ├ºevrildi ΓÇô Qeyc bufer kimi qum t├╢k├╝lm╔Ömi┼ƒd╔Ön ╔Övv╔Öl d╔Ömir ├ºubu─ƒu qayaya vurdu. Toz alovland─▒. Partlay─▒┼ƒ d╔Ömir ├ºubu─ƒu m╔Örmi kimi birba┼ƒa k╔Öll╔Ö s├╝m├╝y├╝nd╔Ön at─▒b, sol yanaq s├╝m├╝y├╝n├╝n alt─▒na girib ba┼ƒ─▒n─▒n yuxar─▒ hiss╔Ösind╔Ön ├º─▒x─▒b, 80 fut uzaql─▒─ƒa d├╝┼ƒ├╝b.\n\nT╔Ö╔Öcc├╝bl├╝d├╝r ki, Gage ├╢lm╔Ödi. Bir ne├º╔Ö d╔Öqiq╔Ö ╔Örzind╔Ö hu┼ƒunu itirdi, yeriy╔Ö v╔Ö dan─▒┼ƒa bildi. Yerli h╔Ökim, doktor Con Harlou d╔Öh┼ƒ╔Ötli yaran─▒ m├╝alic╔Ö etdi. Qeyc sonrak─▒ aylarda fiziki c╔Öh╔Ötd╔Ön sa─ƒald─▒, lakin ╔Ösasl─▒ bir ┼ƒey d╔Öyi┼ƒdi.\n\nQ╔Özadan ╔Övv╔Öl Gage etibarl─▒, balansl─▒ v╔Ö f╔Öras╔Ötli i┼ƒ adam─▒ - \"╔Ön s╔Öm╔Ör╔Öli v╔Ö bacar─▒ql─▒ usta\" kimi t╔Ösvir edilmi┼ƒdir. Bundan sonra onun ┼ƒ╔Öxsiyy╔Öti tan─▒nmaz hala g╔Öldi. O, murdar, impulsiv, h├╢rm╔Ötsiz oldu v╔Ö planlar─▒n─▒ yerin╔Ö yetir╔Ö bilm╔Ödi. Dostlar─▒ onun \"art─▒q Gage olmad─▒─ƒ─▒n─▒\" s├╢yl╔Ödil╔Ör.\n\nOnun i┼ƒi nevrologiya tarixinin ╔Ön m├╝h├╝m hadis╔Öl╔Örind╔Ön birin╔Ö ├ºevrildi. Bu, x├╝susi beyin b├╢lg╔Öl╔Örinin, x├╝sus╔Ön d╔Ö prefrontal korteksin ┼ƒ╔Öxsiyy╔Öt, q╔Örar q╔Öbul etm╔Ö v╔Ö sosial davran─▒┼ƒ ├╝├º├╝n cavabdeh oldu─ƒuna dair ilk g├╝cl├╝ s├╝but t╔Öqdim etdi. M├╝asir neyroimaging ├ºubuqun onun sol frontal hiss╔Ösinin ├ºox hiss╔Ösini, x├╝sus╔Ön d╔Ö emosional t╔Önziml╔Öm╔Ö v╔Ö planla┼ƒd─▒rma il╔Ö m╔Ö┼ƒ─ƒul olan sah╔Öl╔Öri m╔Öhv etdiyini t╔Ösdiql╔Ödi."
  },
  {
    "id": 3,
    "title": "Little Albert and the White Rat",
    "titleKa": "ßâ₧ßâÉßâóßâÉßâáßâÉ ßâÉßâÜßâæßâößâáßâóßâÿ ßâôßâÉ ßâùßâößâùßâáßâÿ ßâòßâÿßâáßâùßâ«ßâÉ",
    "chapterId": 6,
    "icon": "mdi:emoticon-cry-outline",
    "content": "In 1920, John B. Watson and Rosalie Rayner conducted one of psychology's most controversial experiments at Johns Hopkins University. Their subject was a 9-month-old infant known as \"Little Albert.\"\n\nAlbert was described as a healthy, stable baby who showed no fear of animals. Watson and Rayner presented him with a white laboratory rat, and Albert reached for it with curiosity and delight. He showed the same calm response to a rabbit, a dog, a monkey, masks, and even burning newspapers.\n\nThen the conditioning began. Each time Albert reached for the white rat, Watson struck a steel bar with a hammer directly behind the infant's head, producing a terrifying noise. Albert burst into tears.\n\nAfter just seven pairings of the rat with the loud noise, Albert's behavior had fundamentally changed. Now, the mere sight of the white ratΓÇöwithout any noiseΓÇöcaused him to cry, crawl away rapidly, and show visible distress.\n\nMore remarkably, his fear generalized. Albert became afraid of a rabbit, a dog, a fur coat, a Santa Claus mask with a white beard, and even cotton wool. Anything white and furry triggered the same terror.\n\nWatson and Rayner never \"unconditioned\" Albert's fear. The experiment was stopped when Albert's mother, a wet nurse at the hospital, left with her child. Albert's true identity remained a mystery for decades. Recent research suggests he was Douglas Merritte, who sadly died of hydrocephalus at age six.\n\nThe experiment proved that emotional responses can be learned through classical conditioning. But it also raised profound ethical questions that eventually led to strict research protections for human subjects.",
    "contentKa": "1920 ßâ¼ßâößâÜßâí, ßâ»ßâ¥ßâ£ ßâúßâ¥ßâóßâíßâ¥ßâ£ßâ¢ßâÉ ßâôßâÉ ßâáßâ¥ßâûßâÉßâÜßâÿ ßâáßâößâÿßâ£ßâößâáßâ¢ßâÉ ßâ⌐ßâÉßâÉßâóßâÉßâáßâößâí ßâößâáßâù-ßâößâáßâùßâÿ ßâºßâòßâößâÜßâÉßâûßâö ßâíßâÉßâÖßâÉßâ¢ßâÉßâùßâ¥ ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ. ßâ¢ßâÉßâù 9 ßâùßâòßâÿßâí ßâ⌐ßâòßâÿßâÜßâí ßâùßâößâùßâáßâÿ ßâòßâÿßâáßâùßâ«ßâÉ ßâÉßâ⌐ßâòßâößâ£ßâößâí ßâ«ßâ¢ßâÉßâ¢ßâÉßâúßâÜ ßâíßâÉßâ¿ßâÿßâ£ßâößâÜ ßâ«ßâ¢ßâÉßâíßâùßâÉßâ£ ßâößâáßâùßâÉßâô. 7 ßâôßâÉßâ¼ßâºßâòßâÿßâÜßâößâæßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ, ßâÉßâÜßâæßâößâáßâóßâÿ ßâòßâÿßâáßâùßâ«ßâÉßâí ßâ«ßâößâôßâÉßâòßâôßâÉ ßâ«ßâ¢ßâÿßâí ßâÆßâÉßâáßâößâ¿ßâößâè. ßâößâí ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ ßâÉßâ¢ßâóßâÖßâÿßâ¬ßâößâæßâôßâÉ, ßâáßâ¥ßâ¢ ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâíßâ¼ßâÉßâòßâÜßâÉ.",
    "moral": "Fears can be learned through association. This historic experiment also taught us the importance of ethical guidelines in research.",
    "moralKa": "ßâ¿ßâÿßâ¿ßâößâæßâÿ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâÉßâíßâ¥ßâ¬ßâÿßâÉßâ¬ßâÿßâÿßâù ßâíßâ¼ßâÉßâòßâÜßâÉ. ßâößâí ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ ßâößâùßâÿßâÖßâúßâáßâÿ ßâ¼ßâößâíßâößâæßâÿßâí ßâ¢ßâ£ßâÿßâ¿ßâòßâ£ßâößâÜßâ¥ßâæßâÉßâíßâÉßâ¬ ßâÆßâòßâÉßâíßâ¼ßâÉßâòßâÜßâÉ.",
    "moralHy": "╒Ä╒í╒¡╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒Ñ╒¼╒½ ╒º ╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼ ╒¿╒╢╒»╒Ñ╓Ç╒í╒»╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒½╒╗╒╕╓ü╒╕╒╛: ╘▒╒╡╒╜ ╒║╒í╒┐╒┤╒í╒»╒í╒╢ ╓â╒╕╓Ç╒▒╒¿ ╒╢╒í╓ç ╒┤╒Ñ╒ª ╒╜╒╕╒╛╒╕╓Ç╒Ñ╓ü╓Ç╒Ñ╓ü ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗ ╒º╒⌐╒½╒»╒í╒»╒í╒╢ ╒╕╓é╒▓╒Ñ╓ü╒╕╓é╒╡╓ü╒╢╒Ñ╓Ç╒½ ╒»╒í╓Ç╓ç╒╕╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
    "contentHy": "1920╒⌐.-╒½╒╢ ╒ï╒╕╒╢ ╘▓. ╒å╓Ç╒í╒╢╓ü ╒í╒╝╒í╓Ç╒»╒í╒╢ 9 ╒í╒┤╒╜╒í╒»╒í╒╢ ╒Ñ╓Ç╒Ñ╒¡╒í ╒º╓Ç, ╒╕╓Ç╒¿ ╒░╒í╒╡╒┐╒╢╒½ ╒º╓Ç ╒╕╓Ç╒║╒Ñ╒╜ ┬½╒ô╒╕╓ä╓Ç╒½╒» ╘▒╒¼╒ó╒Ñ╓Ç╒┐┬╗:\n\n╘▒╒¼╒ó╒Ñ╓Ç╒┐╒¿ ╒╢╒»╒í╓Ç╒í╒ú╓Ç╒╛╒╕╓é╒┤ ╒º╓Ç ╒╕╓Ç╒║╒Ñ╒╜ ╒í╒╝╒╕╒▓╒╗, ╒»╒í╒╡╒╕╓é╒╢ ╒Ñ╓Ç╒Ñ╒¡╒í, ╒╕╒╛ ╒╣╒º╓Ç ╒╛╒í╒¡╒Ñ╒╢╒╕╓é╒┤ ╒»╒Ñ╒╢╒ñ╒í╒╢╒½╒╢╒Ñ╓Ç╒½╓ü: ╒ê╓é╒╕╒⌐╒╜╒╕╒╢╒╢ ╒╕╓é ╒î╒Ñ╒╡╒╢╒Ñ╓Ç╒¿ ╒╢╓Ç╒í╒╢ ╒╜╒║╒½╒┐╒í╒» ╒¼╒í╒ó╒╕╓Ç╒í╒┐╒╕╓Ç ╒í╒╝╒╢╒Ñ╒┐ ╒╢╒╛╒½╓Ç╒Ñ╓ü╒½╒╢, ╒½╒╜╒» ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒¿ ╒░╒Ñ╒┐╒í╓ä╓Ç╓ä╓Ç╒╕╓é╒⌐╒╡╒í╒┤╒ó ╒╕╓é ╒░╓Ç╒│╒╛╒í╒╢╓ä╒╕╒╛ ╒▒╒Ñ╒╝╓ä╒¿ ╒┤╒Ñ╒»╒╢╒Ñ╓ü ╒╢╓Ç╒í╒╢╓ë ╒å╒╕╓é╒╡╒╢ ╒░╒í╒╢╒ú╒½╒╜╒┐ ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒¿ ╒╢╒í ╓ü╒╕╓é╒╡╓ü ╒┐╒╛╒Ñ╓ü ╒│╒í╒ú╒í╓Ç╒½╒╢, ╒╖╒í╒╢╒¿, ╒»╒í╒║╒½╒»╒½╒╢, ╒ñ╒½╒┤╒í╒»╒╢╒Ñ╓Ç╒½╒╢ ╓ç ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒í╒╡╓Ç╒╛╒╕╒▓ ╒⌐╒Ñ╓Ç╒⌐╒Ñ╓Ç╒½╒╢╓ë\n\n╒Ç╒Ñ╒┐╒╕ ╒╜╒»╒╜╒╛╒Ñ╓ü ╒║╒í╒╡╒┤╒í╒╢╒í╒╛╒╕╓Ç╒╕╓é╒┤╒¿╓ë ╘▒╒┤╒Ñ╒╢ ╒í╒╢╒ú╒í╒┤, ╒Ñ╓Ç╒ó ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒¿ ╒░╒í╒╜╒╢╒╕╓é╒┤ ╒º╓Ç ╒╜╒║╒½╒┐╒í╒» ╒í╒╝╒╢╒Ñ╒┐╒½╒╢, ╒ê╓é╒╕╒⌐╒╜╒╕╒╢╒¿ ╒┤╒╕╓é╓Ç╒│╒╕╒╛ ╒░╒í╓Ç╒╛╒í╒«╒╕╓é╒┤ ╒º╓Ç ╒║╒╕╒▓╒║╒í╒┐╒Ñ ╒▒╒╕╒▓╒½╒╢ ╒í╒╢╒┤╒½╒╗╒í╒║╒Ñ╒╜ ╒Ñ╓Ç╒Ñ╒¡╒í╒╡╒½ ╒ú╒¼╒¡╒½ ╒░╒Ñ╒┐╓ç╒╕╓é╒┤╒¥ ╒í╒╝╒í╒╗╒í╓ü╒╢╒Ñ╒¼╒╕╒╛ ╒╜╒í╓Ç╒╜╒í╓â╒Ñ╒¼╒½ ╒í╒▓╒┤╒╕╓é╒»: ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒¿ ╒¼╒í╓ü ╒Ñ╒▓╒í╒╛╓ë\n\n╘╕╒╢╒ñ╒í╒┤╒Ñ╒╢╒¿ ╒╡╒╕╒⌐ ╒ª╒╕╓é╒╡╒ú ╒í╒╝╒╢╒Ñ╒┐╒½ ╒ó╒í╓Ç╒▒╓Ç ╒í╒▓╒┤╒╕╓é╒»╒½╓ü ╒░╒Ñ╒┐╒╕ ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒½ ╒║╒í╒░╒╛╒í╒«╓ä╒¿ ╒░╒½╒┤╒╢╒╕╒╛╒½╒╢ ╓â╒╕╒¡╒╛╒Ñ╒¼ ╒º╓Ç╓ë ╘▒╒╡╒¬╒┤ ╒╜╒║╒½╒┐╒í╒» ╒í╒╝╒╢╒Ñ╒┐╒½ ╒┤╒½╒í╒╡╒╢ ╒┐╒Ñ╒╜╒í╓Ç╒í╒╢╒¿╒¥ ╒í╒╝╒í╒╢╓ü ╒╕╓Ç╓ç╒º ╒í╒▓╒┤╒╕╓é╒»╒½, ╒╜╒┐╒½╒║╒Ñ╓ü ╒╢╓Ç╒í╒╢ ╒¼╒í╓ü ╒¼╒½╒╢╒Ñ╒¼, ╒í╓Ç╒í╒ú ╒╜╒╕╒▓╒í╒¼╒╕╒╛ ╒░╒Ñ╒╝╒í╒╢╒í╒¼ ╓ç ╒┐╒Ñ╒╜╒í╒╢╒Ñ╒¼╒½ ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓ü╒╕╓é╒╡╓ü ╒┐╒í╒¼╓ë\n\n╘▒╒╛╒Ñ╒¼╒½ ╒╕╓é╒╖╒í╒ú╓Ç╒í╒╛ ╒º, ╒╕╓Ç ╒╢╓Ç╒í ╒╛╒í╒¡╒╢ ╒¿╒╢╒ñ╒░╒í╒╢╓Ç╒í╓ü╒í╒╛╓ë ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒¿ ╒╛╒í╒¡╒Ñ╓ü╒í╒╛ ╒╢╒í╒║╒í╒╜╒┐╒í╒»╒½╓ü, ╒╖╒╢╒½╓ü, ╒┤╒╕╓é╒╖╒┐╒í╒»╒½╓ü, ╒╜╒║╒½╒┐╒í╒» ╒┤╒╕╓Ç╒╕╓é╓ä╒╕╒╛ ╒ü╒┤╒Ñ╒╝ ╒║╒í╒║╒½ ╒ñ╒½╒┤╒í╒»╒½╓ü ╓ç ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒ó╒í╒┤╒ó╒í╒»╒╡╒í ╒ó╒╕╓é╓Ç╒ñ╒½╓ü╓ë ╒æ╒í╒╢╒»╒í╓ü╒í╒« ╒╜╒║╒½╒┐╒í╒» ╓ç ╒┤╒╕╓Ç╒⌐╒Ñ ╒ó╒í╒╢ ╒í╒╝╒í╒╗╒í╓ü╓Ç╒Ñ╒¼ ╒º ╒╢╒╕╓é╒╡╒╢ ╒╜╒í╓Ç╒╜╒í╓â╒¿:\n\n╒ê╓é╒╕╒⌐╒╜╒╕╒╢╒╢ ╒╕╓é ╒î╒Ñ╒╡╒╢╒Ñ╓Ç╒¿ ╒Ñ╓Ç╒ó╒Ñ╓ä ┬½╒í╒╢╒╛╒Ñ╓Ç╒í╒║╒í╒░┬╗ ΓÇïΓÇï╒╣╒Ñ╒╢ ╒í╓Ç╒Ñ╒¼ ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒½ ╒╛╒í╒¡╒¿╓ë ╒ô╒╕╓Ç╒▒╒¿ ╒ñ╒í╒ñ╒í╓Ç╒Ñ╓ü╒╛╒Ñ╓ü, ╒Ñ╓Ç╒ó ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒½ ╒┤╒í╒╡╓Ç╒¿╒¥ ╒░╒½╒╛╒í╒╢╒ñ╒í╒╢╒╕╓ü╒½ ╒⌐╒í╓ü ╒ó╒╕╓é╒¬╓ä╒╕╓é╒╡╓Ç╒¿, ╒░╒Ñ╒╝╒í╓ü╒í╒╛ ╒½╓Ç ╒Ñ╓Ç╒Ñ╒¡╒í╒╡╒½ ╒░╒Ñ╒┐╓ë ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒½ ╒½╓Ç╒í╒»╒í╒╢ ╒½╒╢╓ä╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒┐╒í╒╜╒╢╒í╒┤╒╡╒í╒»╒╢╒Ñ╓Ç ╒╖╒í╓Ç╒╕╓é╒╢╒í╒» ╒í╒╝╒Ñ╒▓╒«╒╛╒í╒« ╒┤╒╢╒í╓ü: ╒Ä╒Ñ╓Ç╒╗╒½╒╢ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╓ü╒╕╓é╒╡╓ü ╒Ñ╒╢ ╒┐╒í╒¼╒½╒╜, ╒╕╓Ç ╒╢╒í ╘┤╒╕╓é╒ú╒¼╒í╒╜ ╒ä╒Ñ╓Ç╒½╒┐╒╢ ╒º╓Ç, ╒╕╓Ç╒¿, ╓ü╒í╒╛╒╕╓ä, ╒┤╒í╒░╒í╓ü╒Ñ╒¼ ╒º ╒░╒½╒ñ╓Ç╒╕╓ü╒Ñ╓å╒í╒¼╒╕╓é╒╜╒½╓ü ╒╛╒Ñ╓ü ╒┐╒í╓Ç╒Ñ╒»╒í╒╢╒╕╓é╒┤:\n\n╒ô╒╕╓Ç╒▒╒¿ ╒í╒║╒í╓ü╒╕╓é╓ü╒Ñ╓ü, ╒╕╓Ç ╒░╒╕╓é╒ª╒í╒»╒í╒╢ ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒Ñ╒¼╒½ ╒º ╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼ ╒ñ╒í╒╜╒í╒»╒í╒╢ ╒║╒í╒╡╒┤╒í╒╢╒í╒╛╒╕╓Ç╒┤╒í╒╢ ╒┤╒½╒╗╒╕╓ü╒╕╒╛: ╘▓╒í╒╡╓ü ╒í╒╡╒╢ ╒╢╒í╓ç ╒ó╒í╓Ç╒▒╓Ç╒í╓ü╓Ç╒Ñ╓ü ╒¡╒╕╓Ç╒¿ ╒ó╒í╓Ç╒╕╒╡╒í╒»╒í╒╢ ╒░╒í╓Ç╓ü╒Ñ╓Ç, ╒╕╓Ç╒╕╒╢╓ä ╒½ ╒╛╒Ñ╓Ç╒╗╒╕ ╒░╒í╒╢╒ú╒Ñ╓ü╓Ç╒½╒╢ ╒┤╒í╓Ç╒ñ╒»╒í╒╡╒½╒╢ ╒╜╒╕╓é╒ó╒╡╒Ñ╒»╒┐╒╢╒Ñ╓Ç╒½ ╒¡╒½╒╜╒┐ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒║╒í╒╖╒┐╒║╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢╒¿:",
    "titleAz": "Balaca Albert v╔Ö A─ƒ Si├ºovul",
    "moralAz": "Qorxular birl╔Ö┼ƒm╔Ö yolu il╔Ö ├╢yr╔Önil╔Ö bil╔Ör. Bu tarixi t╔Öcr├╝b╔Ö biz╔Ö t╔Ödqiqatda etik qaydalar─▒n vacibliyini d╔Ö ├╢yr╔Ötdi.",
    "titleRu": "╨£╨░╨╗╨╡╨╜╤î╨║╨╕╨╣ ╨É╨╗╤î╨▒╨╡╤Ç╤é ╨╕ ╨æ╨╡╨╗╨░╤Å ╨Ü╤Ç╤ï╤ü╨░",
    "moralRu": "╨í╤é╤Ç╨░╤à╨░╨╝ ╨╝╨╛╨╢╨╜╨╛ ╨╜╨░╤â╤ç╨╕╤é╤î╤ü╤Å ╤ç╨╡╤Ç╨╡╨╖ ╨░╤ü╤ü╨╛╤å╨╕╨░╤å╨╕╨╕. ╨¡╤é╨╛╤é ╨╕╤ü╤é╨╛╤Ç╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é ╤é╨░╨║╨╢╨╡ ╨╜╨░╤â╤ç╨╕╨╗ ╨╜╨░╤ü ╨▓╨░╨╢╨╜╨╛╤ü╤é╨╕ ╤ì╤é╨╕╤ç╨╡╤ü╨║╨╕╤à ╨┐╤Ç╨╕╨╜╤å╨╕╨┐╨╛╨▓ ╨▓ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å╤à.",
    "titleHy": "╒ô╒╕╓ä╓Ç╒½╒» ╘▒╒¼╒ó╒Ñ╓Ç╒┐╒¿ ╓ç ╒ì╒║╒½╒┐╒í╒» ╒í╒╝╒╢╒Ñ╒┐╒¿",
    "contentRu": "╨Æ 1920 ╨│╨╛╨┤╤â ╨ö╨╢╨╛╨╜ ╨æ. ╨ú╨╛╤é╤ü╨╛╨╜ ╨╕ ╨á╨╛╨╖╨░╨╗╨╕ ╨á╨╡╨╣╨╜╨╡╤Ç ╨┐╤Ç╨╛╨▓╨╡╨╗╨╕ ╨╛╨┤╨╕╨╜ ╨╕╨╖ ╤ü╨░╨╝╤ï╤à ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╤Ç╨╡╤ç╨╕╨▓╤ï╤à ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨╛╨▓ ╨▓ ╨╛╨▒╨╗╨░╤ü╤é╨╕ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕ ╨▓ ╨ú╨╜╨╕╨▓╨╡╤Ç╤ü╨╕╤é╨╡╤é╨╡ ╨ö╨╢╨╛╨╜╨░ ╨Ñ╨╛╨┐╨║╨╕╨╜╤ü╨░. ╨ÿ╤à ╨╛╨▒╤è╨╡╨║╤é╨╛╨╝ ╨▒╤ï╨╗ 9-╨╝╨╡╤ü╤Å╤ç╨╜╤ï╨╣ ╤Ç╨╡╨▒╨╡╨╜╨╛╨║, ╨╕╨╖╨▓╨╡╤ü╤é╨╜╤ï╨╣ ╨║╨░╨║ ┬½╨£╨░╨╗╨╡╨╜╤î╨║╨╕╨╣ ╨É╨╗╤î╨▒╨╡╤Ç╤é┬╗.\n\n╨É╨╗╤î╨▒╨╡╤Ç╤é╨░ ╨╛╨┐╨╕╤ü╤ï╨▓╨░╨╗╨╕ ╨║╨░╨║ ╨╖╨┤╨╛╤Ç╨╛╨▓╨╛╨│╨╛, ╤ü╤é╨░╨▒╨╕╨╗╤î╨╜╨╛╨│╨╛ ╤Ç╨╡╨▒╨╡╨╜╨║╨░, ╨║╨╛╤é╨╛╤Ç╤ï╨╣ ╨╜╨╡ ╨▒╨╛╤Å╨╗╤ü╤Å ╨╢╨╕╨▓╨╛╤é╨╜╤ï╤à. ╨ú╨╛╤é╤ü╨╛╨╜ ╨╕ ╨á╨╡╨╣╨╜╨╡╤Ç ╨┐╨╛╨┤╨░╤Ç╨╕╨╗╨╕ ╨╡╨╝╤â ╨▒╨╡╨╗╤â╤Ä ╨╗╨░╨▒╨╛╤Ç╨░╤é╨╛╤Ç╨╜╤â╤Ä ╨║╤Ç╤ï╤ü╤â, ╨╕ ╨É╨╗╤î╨▒╨╡╤Ç╤é ╤ü ╨╗╤Ä╨▒╨╛╨┐╤ï╤é╤ü╤é╨▓╨╛╨╝ ╨╕ ╨▓╨╛╤ü╤é╨╛╤Ç╨│╨╛╨╝ ╨┐╨╛╤é╤Å╨╜╤â╨╗╤ü╤Å ╨╖╨░ ╨╜╨╡╨╣. ╨₧╨╜ ╨╛╨┤╨╕╨╜╨░╨║╨╛╨▓╨╛ ╤ü╨┐╨╛╨║╨╛╨╣╨╜╨╛ ╤Ç╨╡╨░╨│╨╕╤Ç╨╛╨▓╨░╨╗ ╨╜╨░ ╨║╤Ç╨╛╨╗╨╕╨║╨░, ╤ü╨╛╨▒╨░╨║╤â, ╨╛╨▒╨╡╨╖╤î╤Å╨╜╤â, ╨╝╨░╤ü╨║╨╕ ╨╕ ╨┤╨░╨╢╨╡ ╨│╨╛╤Ç╤Å╤ë╨╕╨╡ ╨│╨░╨╖╨╡╤é╤ï.\n\n╨ƒ╨╛╤é╨╛╨╝ ╨╜╨░╤ç╨░╨╗╨╛╤ü╤î ╨║╨╛╨╜╨┤╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡. ╨Ü╨░╨╢╨┤╤ï╨╣ ╤Ç╨░╨╖, ╨║╨╛╨│╨┤╨░ ╨É╨╗╤î╨▒╨╡╤Ç╤é ╤é╤Å╨╜╤â╨╗╤ü╤Å ╨║ ╨▒╨╡╨╗╨╛╨╣ ╨║╤Ç╤ï╤ü╨╡, ╨Æ╨░╤é╤ü╨╛╨╜ ╤â╨┤╨░╤Ç╤Å╨╗ ╨╝╨╛╨╗╨╛╤é╨║╨╛╨╝ ╨┐╨╛ ╤ü╤é╨░╨╗╤î╨╜╨╛╨╝╤â ╤ü╤é╨╡╤Ç╨╢╨╜╤Ä ╨┐╤Ç╤Å╨╝╨╛ ╨╖╨░ ╨│╨╛╨╗╨╛╨▓╨╛╨╣ ╨╝╨╗╨░╨┤╨╡╨╜╤å╨░, ╨┐╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╤Å ╤â╨╢╨░╤ü╨░╤Ä╤ë╨╕╨╣ ╤ê╤â╨╝. ╨É╨╗╤î╨▒╨╡╤Ç╤é ╤Ç╨░╤ü╨┐╨╗╨░╨║╨░╨╗╤ü╤Å.\n\n╨Æ╤ü╨╡╨│╨╛ ╨┐╨╛╤ü╨╗╨╡ ╤ü╨╡╨╝╨╕ ╤ü╨┐╨░╤Ç╨╕╨▓╨░╨╜╨╕╨╣ ╨║╤Ç╤ï╤ü ╤ü ╨│╤Ç╨╛╨╝╨║╨╕╨╝ ╤ê╤â╨╝╨╛╨╝ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨É╨╗╤î╨▒╨╡╤Ç╤é╨░ ╨║╨╛╤Ç╨╡╨╜╨╜╤ï╨╝ ╨╛╨▒╤Ç╨░╨╖╨╛╨╝ ╨╕╨╖╨╝╨╡╨╜╨╕╨╗╨╛╤ü╤î. ╨ó╨╡╨┐╨╡╤Ç╤î ╨╛╨┤╨╕╨╜ ╨╗╨╕╤ê╤î ╨▓╨╕╨┤ ╨▒╨╡╨╗╨╛╨╣ ╨║╤Ç╤ï╤ü╤ï ΓÇô ╨▒╨╡╨╖ ╨▓╤ü╤Å╨║╨╛╨│╨╛ ╤ê╤â╨╝╨░ ΓÇô ╨╖╨░╤ü╤é╨░╨▓╨╗╤Å╨╗ ╨╡╨│╨╛ ╨┐╨╗╨░╨║╨░╤é╤î, ╨▒╤ï╤ü╤é╤Ç╨╛ ╤â╨┐╨╛╨╗╨╖╨░╤é╤î ╨╕ ╨┐╤Ç╨╛╤Å╨▓╨╗╤Å╤é╤î ╨▓╨╕╨┤╨╕╨╝╨╛╨╡ ╨▒╨╡╤ü╨┐╨╛╨║╨╛╨╣╤ü╤é╨▓╨╛.\n\n╨º╤é╨╛ ╨╡╤ë╨╡ ╨▒╨╛╨╗╨╡╨╡ ╨┐╤Ç╨╕╨╝╨╡╤ç╨░╤é╨╡╨╗╤î╨╜╨╛, ╨╡╨│╨╛ ╤ü╤é╤Ç╨░╤à ╤Ç╨░╤ü╨┐╤Ç╨╛╤ü╤é╤Ç╨░╨╜╨╕╨╗╤ü╤Å. ╨É╨╗╤î╨▒╨╡╤Ç╤é ╤ü╤é╨░╨╗ ╨▒╨╛╤Å╤é╤î╤ü╤Å ╨║╤Ç╨╛╨╗╨╕╨║╨░, ╤ü╨╛╨▒╨░╨║╨╕, ╤ê╤â╨▒╤ï, ╨╝╨░╤ü╨║╨╕ ╨ö╨╡╨┤╨░ ╨£╨╛╤Ç╨╛╨╖╨░ ╤ü ╨▒╨╡╨╗╨╛╨╣ ╨▒╨╛╤Ç╨╛╨┤╨╛╨╣ ╨╕ ╨┤╨░╨╢╨╡ ╨▓╨░╤é╤ï. ╨Æ╤ü╨╡ ╨▒╨╡╨╗╨╛╨╡ ╨╕ ╨┐╤â╤ê╨╕╤ü╤é╨╛╨╡ ╨▓╤ï╨╖╤ï╨▓╨░╨╗╨╛ ╤é╨╛╤é ╨╢╨╡ ╤â╨╢╨░╤ü.\n\n╨ú╨╛╤é╤ü╨╛╨╜ ╨╕ ╨á╨╡╨╣╨╜╨╡╤Ç ╨╜╨╕╨║╨╛╨│╨┤╨░ ╨╜╨╡ ┬½╨╛╨▒╨╡╨╖╤â╤ü╨╗╨╛╨▓╨╗╨╕╨▓╨░╨╗╨╕┬╗ ╤ü╤é╤Ç╨░╤à ╨É╨╗╤î╨▒╨╡╤Ç╤é╨░. ╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é ╨▒╤ï╨╗ ╨╛╤ü╤é╨░╨╜╨╛╨▓╨╗╨╡╨╜, ╨║╨╛╨│╨┤╨░ ╨╝╨░╤é╤î ╨É╨╗╤î╨▒╨╡╤Ç╤é╨░, ╨║╨╛╤Ç╨╝╨╕╨╗╨╕╤å╨░ ╨▓ ╨▒╨╛╨╗╤î╨╜╨╕╤å╨╡, ╤â╤ê╨╗╨░ ╤ü ╤Ç╨╡╨▒╨╡╨╜╨║╨╛╨╝. ╨¥╨░╤ü╤é╨╛╤Å╤ë╨░╤Å ╨╗╨╕╤ç╨╜╨╛╤ü╤é╤î ╨É╨╗╤î╨▒╨╡╤Ç╤é╨░ ╨╛╤ü╤é╨░╨▓╨░╨╗╨░╤ü╤î ╨╖╨░╨│╨░╨┤╨║╨╛╨╣ ╨╜╨░ ╨┐╤Ç╨╛╤é╤Å╨╢╨╡╨╜╨╕╨╕ ╨┤╨╡╤ü╤Å╤é╨╕╨╗╨╡╤é╨╕╨╣. ╨¥╨╡╨┤╨░╨▓╨╜╨╕╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╤Ä╤é, ╤ç╤é╨╛ ╤ì╤é╨╛ ╨▒╤ï╨╗ ╨ö╤â╨│╨╗╨░╤ü ╨£╨╡╤Ç╤Ç╨╕╤é╤é, ╨║╨╛╤é╨╛╤Ç╤ï╨╣, ╨║ ╤ü╨╛╨╢╨░╨╗╨╡╨╜╨╕╤Ä, ╤â╨╝╨╡╤Ç ╨╛╤é ╨│╨╕╨┤╤Ç╨╛╤å╨╡╤ä╨░╨╗╨╕╨╕ ╨▓ ╨▓╨╛╨╖╤Ç╨░╤ü╤é╨╡ ╤ê╨╡╤ü╤é╨╕ ╨╗╨╡╤é.\n\n╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é ╨┤╨╛╨║╨░╨╖╨░╨╗, ╤ç╤é╨╛ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╤ï╨╝ ╤Ç╨╡╨░╨║╤å╨╕╤Å╨╝ ╨╝╨╛╨╢╨╜╨╛ ╨╜╨░╤â╤ç╨╕╤é╤î╤ü╤Å ╤ü ╨┐╨╛╨╝╨╛╤ë╤î╤Ä ╨║╨╗╨░╤ü╤ü╨╕╤ç╨╡╤ü╨║╨╛╨╣ ╨╛╨▒╤â╤ü╨╗╨╛╨▓╨╗╨╡╨╜╨╜╨╛╤ü╤é╨╕. ╨¥╨╛ ╤ì╤é╨╛ ╤é╨░╨║╨╢╨╡ ╨┐╨╛╨┤╨╜╤Å╨╗╨╛ ╨│╨╗╤â╨▒╨╛╨║╨╕╨╡ ╤ì╤é╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨▓╨╛╨┐╤Ç╨╛╤ü╤ï, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨▓ ╨║╨╛╨╜╨╡╤ç╨╜╨╛╨╝ ╨╕╤é╨╛╨│╨╡ ╨┐╤Ç╨╕╨▓╨╡╨╗╨╕ ╨║ ╤ü╤é╤Ç╨╛╨│╨╛╨╣ ╨╖╨░╤ë╨╕╤é╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╣ ╨╜╨░ ╨╗╤Ä╨┤╤Å╤à.",
    "contentAz": "1920-ci ild╔Ö John B. Watson v╔Ö Rosalie Rayner Con Hopkins Universitetind╔Ö psixologiyan─▒n ╔Ön m├╝bahis╔Öli t╔Öcr├╝b╔Öl╔Örind╔Ön birini h╔Öyata ke├ºirdil╔Ör. Onlar─▒n m├╢vzusu \"Balaca Albert\" kimi tan─▒nan 9 ayl─▒q k├╢rp╔Ö idi.\n\nAlbert heyvanlardan qorxmayan sa─ƒlam, sabit bir k├╢rp╔Ö kimi t╔Ösvir edilmi┼ƒdir. Watson v╔Ö Rayner ona a─ƒ laboratoriya si├ºovulunu t╔Öqdim etdi v╔Ö Albert maraq v╔Ö z├╢vql╔Ö ona ├ºatd─▒. Dov┼ƒana, it╔Ö, meymuna, maskalara, h╔Ötta yanan q╔Özetl╔Ör╔Ö d╔Ö eyni sakit cavab─▒ g├╢st╔Ördi.\n\nSonra kondisioner ba┼ƒlad─▒. Albert h╔Ör d╔Öf╔Ö a─ƒ si├ºovula ├ºatanda, Uotson k├╢rp╔Önin ba┼ƒ─▒n─▒n arxas─▒ndak─▒ ├º╔Ökicl╔Ö polad ├ºubuqla vurur v╔Ö d╔Öh┼ƒ╔Ötli s╔Ös ├º─▒xar─▒rd─▒. Albert g├╢z ya┼ƒlar─▒na bo─ƒuldu.\n\nY├╝ks╔Ök s╔Ös-k├╝yl╔Ö si├ºovullar─▒n c╔Ömi yeddi c├╝tl╔Ö┼ƒm╔Ösind╔Ön sonra Albertin davran─▒┼ƒ─▒ k├╢k├╝nd╔Ön d╔Öyi┼ƒdi. ─░ndi a─ƒ si├ºovulun sad╔Öc╔Ö g├╢r├╝n├╝┼ƒ├╝ - he├º bir s╔Ös-k├╝y olmadan - onun a─ƒlamas─▒na, s├╝r╔Ötl╔Ö s├╝r├╝nm╔Ösin╔Ö v╔Ö g├╢r├╝n╔Ön s─▒x─▒nt─▒ g├╢st╔Örm╔Ösin╔Ö s╔Öb╔Öb oldu.\n\nDaha maraql─▒s─▒, onun qorxusu ├╝mumil╔Ö┼ƒdi. Albert dov┼ƒandan, itd╔Ön, x╔Öz paltodan, a─ƒ saqqall─▒ ┼₧axta baba maskas─▒ndan, h╔Ötta pamb─▒q yundan qorxma─ƒa ba┼ƒlad─▒. A─ƒ v╔Ö t├╝kl├╝ h╔Ör ┼ƒey eyni qorxuya s╔Öb╔Öb olurdu.\n\nWatson v╔Ö Rayner he├º vaxt Albertin qorxusunu \"┼ƒ╔Örtsiz\" qoymurlar. X╔Öst╔Öxanada ya┼ƒ tibb bac─▒s─▒ olan Albertin anas─▒ u┼ƒa─ƒ─▒ il╔Ö birlikd╔Ö getdikd╔Ö t╔Öcr├╝b╔Ö dayand─▒r─▒ld─▒. Albertin ╔Ösl ┼ƒ╔Öxsiyy╔Öti onillikl╔Ör ╔Örzind╔Ö sirr olaraq qald─▒. Son ara┼ƒd─▒rmalar onun 6 ya┼ƒ─▒nda hidrosefalid╔Ön v╔Öfat ed╔Ön Douglas Merritte oldu─ƒunu g├╢st╔Örir.\n\nT╔Öcr├╝b╔Ö s├╝but etdi ki, emosional reaksiyalar klassik kondisioner vasit╔Ösil╔Ö ├╢yr╔Önil╔Ö bil╔Ör. Lakin bu, h╔Öm d╔Ö d╔Örin etik suallar do─ƒurdu ki, n╔Ötic╔Öd╔Ö insan subyektl╔Öri ├╝├º├╝n ciddi t╔Ödqiqat qorunmas─▒na s╔Öb╔Öb oldu."
  },
  {
    "id": 4,
    "title": "The Invisible Gorilla",
    "titleKa": "ßâúßâ«ßâÿßâÜßâÉßâòßâÿ ßâÆßâ¥ßâáßâÿßâÜßâÉ",
    "chapterId": 4,
    "icon": "mdi:eye-off-outline",
    "content": "In 1999, psychologists Daniel Simons and Christopher Chabris designed an experiment that would challenge our most basic assumptions about awareness. They asked participants to watch a short video of six peopleΓÇöthree in white shirts, three in blackΓÇöpassing basketballs to each other.\n\nThe task was simple: count the number of passes made by the white-shirted team. Participants focused intently, tracking each throw.\n\nHalfway through the video, something extraordinary happened. A person in a full gorilla costume walked slowly into the center of the frame, faced the camera, thumped its chest, and walked out. The gorilla was visible for a full nine seconds.\n\nWhen asked afterward, roughly half the participants had absolutely no idea a gorilla had appeared. They were shocked when shown the video again. Some refused to believe it was the same video.\n\nThe experiment demonstrated what Simons and Chabris called \"inattentional blindness\"ΓÇöthe failure to notice fully visible but unexpected objects when our attention is focused elsewhere. It's not that our eyes didn't see the gorilla; our brain simply didn't process it because it wasn't relevant to the counting task.\n\nThis research has profound real-world implications. Radiologists can miss tumors on X-rays when focused on something else. Drivers may not see pedestrians when distracted. Eyewitnesses miss critical details during crimes.\n\nThe invisible gorilla reminds us that seeing and noticing are two fundamentally different cognitive processes, and that our confident sense of awareness is largely an illusion.",
    "contentKa": "1999 ßâ¼ßâößâÜßâí, ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâößâæßâ¢ßâÉ ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâößâæßâí ßâíßâùßâ«ßâ¥ßâòßâößâí ßâòßâÿßâôßâößâ¥ßâ¿ßâÿ ßâæßâÉßâíßâÖßâößâóßâæßâ¥ßâÜßâÿßâí ßâÆßâÉßâôßâÉßâ¬ßâößâ¢ßâößâæßâÿßâí ßâôßâÉßâùßâòßâÜßâÉ ßâôßâÉßâößâòßâÉßâÜßâÉ. ßâòßâÿßâôßâößâ¥ßâ¿ßâÿ ßâÆßâ¥ßâáßâÿßâÜßâÉßâí ßâÖßâ¥ßâíßâóßâÿßâúßâ¢ßâ¿ßâÿ ßâÆßâÉßâ¢ßâ¥ßâ¼ßâºßâ¥ßâæßâÿßâÜßâÿ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâÿ ßâÆßâÉßâÿßâÉßâáßâÉ, ßâ¢ßâÉßâÆßâáßâÉßâ¢ ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâößâæßâÿßâí ßâ£ßâÉßâ«ßâößâòßâÉßâáßâ¢ßâÉ ßâòßâößâá ßâ¿ßâößâ£ßâÿßâ¿ßâ£ßâÉ. ßâößâí ßâÉßâ⌐ßâòßâößâ£ßâößâæßâí, ßâáßâ¥ßâ¢ ßâ¼ßâößâ£ßâÉ ßâôßâÉ ßâ¿ßâößâ¢ßâ⌐ßâ£ßâößâòßâÉ ßâíßâáßâúßâÜßâÿßâÉßâô ßâÆßâÉßâ£ßâíßâ«ßâòßâÉßâòßâößâæßâúßâÜßâÿ ßâ₧ßâáßâ¥ßâ¬ßâößâíßâößâæßâÿßâÉ.",
    "moral": "Our attention is far more limited than we think. We can look directly at something and still fail to see it if our focus is elsewhere.",
    "moralKa": "ßâ⌐ßâòßâößâ£ßâÿ ßâºßâúßâáßâÉßâôßâªßâößâæßâÉ ßâÆßâÉßâ¬ßâÿßâÜßâößâæßâÿßâù ßâúßâñßâáßâ¥ ßâ¿ßâößâûßâªßâúßâôßâúßâÜßâÿßâÉ, ßâòßâÿßâôßâáßâö ßâÆßâòßâÆßâ¥ßâ£ßâÿßâÉ.",
    "titleHy": "╘▒╒╢╒┐╒Ñ╒╜╒í╒╢╒Ñ╒¼╒½ ╒ú╒╕╓Ç╒½╒¼╒í",
    "titleRu": "╨¥╨╡╨▓╨╕╨┤╨╕╨╝╨░╤Å ╨│╨╛╤Ç╨╕╨╗╨╗╨░",
    "titleAz": "G├╢r├╝nm╔Öz Qorilla",
    "moralHy": "╒ä╒Ñ╓Ç ╒╕╓é╒╖╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╖╒í╒┐ ╒í╒╛╒Ñ╒¼╒½ ╒╜╒í╒░╒┤╒í╒╢╒í╓â╒í╒» ╒º, ╓ä╒í╒╢ ╒»╒í╓Ç╒«╒╕╓é╒┤ ╒Ñ╒╢╓ä╓ë ╒ä╒Ñ╒╢╓ä ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢╓ä ╒╕╓é╒▓╒▓╒í╒»╒½╒╕╓Ç╒Ñ╒╢ ╒╢╒í╒╡╒Ñ╒¼ ╒½╒╢╒╣-╒╕╓Ç ╒ó╒í╒╢╒½ ╓ç ╒ñ╒Ñ╒╝╓ç╒╜ ╒╣╒┐╒Ñ╒╜╒╢╒Ñ╒¼ ╒í╒╡╒╢, ╒Ñ╒⌐╒Ñ ╒┤╒Ñ╓Ç ╒╕╓é╒╖╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒í╒╡╒¼ ╒┐╒Ñ╒▓ ╒º:",
    "moralAz": "Diqq╔Ötimiz d├╝┼ƒ├╝nd├╝y├╝m├╝zd╔Ön daha m╔Öhduddur. Biz bir ┼ƒey╔Ö birba┼ƒa baxa bil╔Örik v╔Ö diqq╔Ötimiz ba┼ƒqa yerd╔Ödirs╔Ö, h╔Öl╔Ö d╔Ö onu g├╢r╔Ö bilmirik.",
    "moralRu": "╨¥╨░╤ê╨╡ ╨▓╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╨│╨╛╤Ç╨░╨╖╨┤╨╛ ╨▒╨╛╨╗╨╡╨╡ ╨╛╨│╤Ç╨░╨╜╨╕╤ç╨╡╨╜╨╛, ╤ç╨╡╨╝ ╨╝╤ï ╨┤╤â╨╝╨░╨╡╨╝. ╨£╤ï ╨╝╨╛╨╢╨╡╨╝ ╤ü╨╝╨╛╤é╤Ç╨╡╤é╤î ╨┐╤Ç╤Å╨╝╨╛ ╨╜╨░ ╤ç╤é╨╛-╤é╨╛ ╨╕ ╨▓╤ü╨╡ ╤Ç╨░╨▓╨╜╨╛ ╨╜╨╡ ╨▓╨╕╨┤╨╡╤é╤î ╤ì╤é╨╛╨│╨╛, ╨╡╤ü╨╗╨╕ ╨╜╨░╤ê╨╡ ╨▓╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╤ü╨╛╤ü╤Ç╨╡╨┤╨╛╤é╨╛╤ç╨╡╨╜╨╛ ╨╜╨░ ╤ç╨╡╨╝-╤é╨╛ ╨┤╤Ç╤â╨│╨╛╨╝.",
    "contentHy": "1999 ╒⌐╒╛╒í╒»╒í╒╢╒½╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╢╒Ñ╓Ç ╘┤╒Ñ╒╢╒½╒Ñ╒¼ ╒ì╒í╒╡╒┤╒╕╒╢╒╜╒¿ ╓ç ╒ö╓Ç╒½╒╜╒┐╒╕╓å╒Ñ╓Ç ╒ë╒í╒ó╓Ç╒½╒╜╒¿ ╒╢╒í╒¡╒í╒ú╒«╒Ñ╓ü╒½╒╢ ╒┤╒½ ╓â╒╕╓Ç╒▒, ╒╕╓Ç╒¿ ╒»╒╛╒½╒│╒í╓Ç╒»╒½ ╒½╓Ç╒í╒ª╒Ñ╒»╒┤╒í╒╢ ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒╡╒í╒¼ ╒┤╒Ñ╓Ç ╒í╒┤╒Ñ╒╢╒í╒░╒½╒┤╒╢╒í╒»╒í╒╢ ╒Ñ╒╢╒⌐╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿: ╒å╓Ç╒í╒╢╓ä ╒¡╒╢╒ñ╓Ç╒Ñ╓ü╒½╒╢ ╒┤╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒½╒╢ ╒ñ╒½╒┐╒Ñ╒¼ ╒┤╒½ ╒»╒í╓Ç╒│ ╒┐╒Ñ╒╜╒í╒╢╒╡╒╕╓é╒⌐, ╒╕╓Ç╒┐╒Ñ╒▓ ╒╛╒Ñ╓ü ╒░╒╕╒ú╒½╒¥ ╒Ñ╓Ç╒Ñ╓ä╒¿ ╒╜╒║╒½╒┐╒í╒» ╒╛╒Ñ╓Ç╒╢╒í╒╖╒í╒║╒½╒»╒╢╒Ñ╓Ç╒╕╒╛, ╒Ñ╓Ç╒Ñ╓ä╒¿╒¥ ╒╜╓ç, ╒ó╒í╒╜╒»╒Ñ╒┐╒ó╒╕╒¼╒½ ╒ú╒╢╒ñ╒í╒»╒╢╒Ñ╓Ç ╓â╒╕╒¡╒í╒╢╓ü╒Ñ╓ü╒½╒╢ ╒┤╒½╒┤╒╡╒í╒╢╓ü:\n\n╘▒╒╝╒í╒╗╒í╒ñ╓Ç╒í╒╢╓ä╒¿ ╒║╒í╓Ç╒ª ╒º╓Ç╒¥ ╒░╒í╒╖╒╛╒Ñ╒¼ ╒╜╒║╒½╒┐╒í╒»╒í╒╖╒í╒║╒½╒»╒╢╒Ñ╓Ç╒╕╒╛ ╒»╒í╒┐╒í╓Ç╒í╒« ╓â╒╕╒¡╒í╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╓ä╒í╒╢╒í╒»╒¿╓ë ╒ä╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒¿ ╒╕╓é╒╖╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒í╒┤╒ó ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒í╒╢╒¥ ╒░╒Ñ╒┐╓ç╒Ñ╒¼╒╕╒╛ ╒╡╒╕╓é╓Ç╒í╓ä╒í╒╢╒╣╒╡╒╕╓é╓Ç ╒╢╒Ñ╒┐╒┤╒í╒╢╒¿:\n\n╒Å╒Ñ╒╜╒í╒╢╒╡╒╕╓é╒⌐╒½ ╒»╒Ñ╒╜╒½╒╢ ╒í╓Ç╒┐╒í╒╝╒╕╓ü ╒ó╒í╒╢ ╒┐╒Ñ╒▓╒½ ╒╕╓é╒╢╒Ñ╓ü╒í╒╛. ╘▒╒┤╒ó╒╕╒▓╒╗ ╒ú╒╕╓Ç╒½╒¼╒í╒╡╒½ ╒░╒í╒ú╒╕╓é╒╜╒┐╒╕╒╛ ╒í╒╢╒▒╒¿ ╒ñ╒í╒╢╒ñ╒í╒▓ ╓ä╒í╒╡╒¼╒Ñ╓ü ╒ñ╒Ñ╒║╒½ ╒»╒í╒ñ╓Ç╒½ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒¿, ╒ñ╒Ñ╒┤╓ä╒╕╒╛ ╒ñ╒Ñ╒║╒½ ╒┐╒Ñ╒╜╒í╒¡╓ü╒½╒»╒¿ ╒░╒í╓Ç╒╛╒í╒«╒Ñ╓ü ╒╢╓Ç╒í ╒»╓Ç╒«╓ä╒½╒╢ ╓ç ╒ñ╒╕╓é╓Ç╒╜ ╒Ñ╒»╒í╒╛: ╘│╒╕╓Ç╒½╒¼╒í╒╢ ╒┐╒Ñ╒╜╒í╒╢╒Ñ╒¼╒½ ╒º╓Ç ╒í╒┤╒ó╒╕╒▓╒╗ ╒½╒╢╒¿ ╒╛╒í╒╡╓Ç╒»╒╡╒í╒╢:\n\n╘╡╓Ç╒ó ╒░╒í╓Ç╓ü╓Ç╒½╒╢, ╒┤╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒½ ╒┤╒╕╒┐╒í╒╛╒╕╓Ç╒í╒║╒Ñ╒╜ ╒»╒Ñ╒╜╒¿ ╒ó╒í╓ü╒í╓Ç╒▒╒í╒»╒í╒║╒Ñ╒╜ ╒╣╒º╓Ç ╒║╒í╒┐╒»╒Ñ╓Ç╒í╓ü╒╢╒╕╓é╒┤, ╒╕╓Ç ╒ú╒╕╓Ç╒½╒¼╒í ╒º ╒░╒í╒╡╒┐╒╢╒╛╒Ñ╒¼: ╒å╓Ç╒í╒╢╓ä ╒╖╒╕╒»╒½ ╒┤╒Ñ╒╗ ╒º╒½╒╢, ╒Ñ╓Ç╒ó ╒╢╒╕╓Ç╒½╓ü ╓ü╒╕╓é╓ü╒í╒ñ╓Ç╒Ñ╓ü╒½╒╢ ╒┐╒Ñ╒╜╒í╒╢╒╡╒╕╓é╒⌐╒¿╓ë ╒ê╒┤╒í╒╢╓ä ╒░╓Ç╒í╒¬╒í╓Ç╒╛╒Ñ╓ü╒½╒╢ ╒░╒í╒╛╒í╒┐╒í╒¼, ╒╕╓Ç ╒ñ╒í ╒╢╒╕╓é╒╡╒╢ ╒┐╒Ñ╒╜╒í╒╢╒╡╒╕╓é╒⌐╒╢ ╒º:\n\n╒ô╒╕╓Ç╒▒╒¿ ╓ü╒╕╓é╒╡╓ü ╒┐╒╛╒Ñ╓ü ╒í╒╡╒╢, ╒½╒╢╒╣ ╒ì╒½╒┤╒╕╒╢╒╜╒¿ ╓ç ╒ë╒í╒ó╓Ç╒½╒╜╒¿ ╒í╒╢╒╛╒í╒╢╒Ñ╓ü╒½╒╢ ┬½╒í╒╢╒╕╓é╒╖╒í╒ñ╒½╓Ç ╒»╒╕╓é╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢┬╗╒¥ ╒¼╒½╒╕╒╛╒½╒╢ ╒┐╒Ñ╒╜╒í╒╢╒Ñ╒¼╒½, ╒ó╒í╒╡╓ü ╒í╒╢╒╜╒║╒í╒╜╒Ñ╒¼╒½ ╒í╒╝╒í╓Ç╒»╒í╒╢╒Ñ╓Ç ╒╣╒╢╒»╒í╒┐╒Ñ╒¼╒╕╓é, ╒Ñ╓Ç╒ó ╒┤╒Ñ╓Ç ╒╕╓é╒╖╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒í╒« ╒º ╒í╒╡╒¼ ╒┐╒Ñ╒▓: ╘▒╒╡╒╢╒║╒Ñ╒╜ ╒╣╒º, ╒╕╓Ç ╒┤╒Ñ╓Ç ╒í╒╣╓ä╒Ñ╓Ç╒¿ ╒╣╒Ñ╒╢ ╒┐╒Ñ╒╜╒Ñ╒¼ ╒ú╒╕╓Ç╒½╒¼╒í╒╢. ╒┤╒Ñ╓Ç ╒╕╓é╒▓╒Ñ╒▓╒¿ ╒║╒í╓Ç╒ª╒í╒║╒Ñ╒╜ ╒╣╒½ ╒┤╒╖╒í╒»╒Ñ╒¼ ╒í╒╡╒╢, ╓ä╒í╒╢╒½ ╒╕╓Ç ╒í╒╡╒╢ ╒╣╒½ ╒░╒í╒┤╒í╒║╒í╒┐╒í╒╜╒¡╒í╒╢╒╕╓é╒┤ ╒░╒í╒╖╒╛╒Ñ╒¼╒╕╓é ╒í╒╝╒í╒╗╒í╒ñ╓Ç╒í╒╢╓ä╒½╒╢:\n\n╘▒╒╡╒╜ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒¡╒╕╓Ç╒¿ ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╕╓é╒╢╒½ ╒½╓Ç╒í╒»╒í╒╢ ╒í╒╖╒¡╒í╓Ç╒░╒½ ╒╛╓Ç╒í: ╒î╒í╒ñ╒½╒╕╒¼╒╕╒ú╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒ó╒í╓ü ╒⌐╒╕╒▓╒╢╒Ñ╒¼ ╒╕╓é╒╝╒╕╓é╓ü╓ä╒╢╒Ñ╓Ç╒¿ ╒╝╒Ñ╒╢╒┐╒ú╒Ñ╒╢╒╡╒í╒╢ ╒│╒í╒╝╒í╒ú╒í╒╡╒⌐╒╢╒Ñ╓Ç╒½ ╒╛╓Ç╒í, ╒Ñ╓Ç╒ó ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒í╒« ╒Ñ╒╢ ╒í╒╡╒¼ ╒ó╒í╒╢╒½ ╒╛╓Ç╒í: ╒Ä╒í╓Ç╒╕╓Ç╒ñ╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒╣╒┐╒Ñ╒╜╒╢╒Ñ╒¼ ╒░╒Ñ╒┐╒½╒╕╒┐╒╢╒Ñ╓Ç╒½╒╢, ╒Ñ╓Ç╒ó ╒╖╒Ñ╒▓╒╛╒╕╓é╒┤ ╒Ñ╒╢: ╒Ç╒í╒╢╓ü╒í╒ú╒╕╓Ç╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒¬╒í╒┤╒í╒╢╒í╒» ╒í╒»╒í╒╢╒í╒┐╒Ñ╒╜╒╢╒Ñ╓Ç╒¿ ╒ó╒í╓ü ╒Ñ╒╢ ╒⌐╒╕╒▓╒╢╒╕╓é╒┤ ╒»╒í╓Ç╓ç╒╕╓Ç ╒┤╒í╒╢╓Ç╒í╒┤╒í╒╜╒╢╒Ñ╓Ç╒¿.\n\n╘▒╒╢╒┐╒Ñ╒╜╒í╒╢╒Ñ╒¼╒½ ╒ú╒╕╓Ç╒½╒¼╒í╒╢ ╒░╒½╒╖╒Ñ╓ü╒╢╒╕╓é╒┤ ╒º ╒┤╒Ñ╒ª, ╒╕╓Ç ╒┐╒Ñ╒╜╒╢╒Ñ╒¼╒╢ ╒╕╓é ╒╢╒»╒í╒┐╒Ñ╒¼╒¿ ╒Ñ╓Ç╒»╒╕╓é ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä╒╕╓Ç╒Ñ╒╢ ╒┐╒í╓Ç╒ó╒Ñ╓Ç ╒│╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒╢╒Ñ╓Ç ╒Ñ╒╢, ╓ç ╒╕╓Ç ╒ú╒½╒┐╒í╒»╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╓Ç ╒╛╒╜╒┐╒í╒░ ╒ª╒ú╒í╓ü╒╕╓é╒┤╒¿ ╒┤╒Ñ╒« ╒┤╒í╒╜╒í╒┤╒ó ╒║╒í╒┐╓Ç╒í╒╢╓ä ╒º:",
    "contentRu": "╨Æ 1999 ╨│╨╛╨┤╤â ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕ ╨ö╤ì╨╜╨╕╨╡╨╗ ╨í╨░╨╣╨╝╨╛╨╜╤ü ╨╕ ╨Ü╤Ç╨╕╤ü╤é╨╛╤ä╨╡╤Ç ╨¿╨░╨▒╤Ç╨╕╤ü ╤Ç╨░╨╖╤Ç╨░╨▒╨╛╤é╨░╨╗╨╕ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é, ╨║╨╛╤é╨╛╤Ç╤ï╨╣ ╨▒╤Ç╨╛╤ü╨╕╤é ╨▓╤ï╨╖╨╛╨▓ ╨╜╨░╤ê╨╕╨╝ ╤ü╨░╨╝╤ï╨╝ ╨▒╨░╨╖╨╛╨▓╤ï╨╝ ╨┐╤Ç╨╡╨┤╤ü╤é╨░╨▓╨╗╨╡╨╜╨╕╤Å╨╝ ╨╛╨▒ ╨╛╤ü╨╛╨╖╨╜╨░╨╜╨╜╨╛╤ü╤é╨╕. ╨₧╨╜╨╕ ╨┐╨╛╨┐╤Ç╨╛╤ü╨╕╨╗╨╕ ╤â╤ç╨░╤ü╤é╨╜╨╕╨║╨╛╨▓ ╨┐╨╛╤ü╨╝╨╛╤é╤Ç╨╡╤é╤î ╨║╨╛╤Ç╨╛╤é╨║╨╛╨╡ ╨▓╨╕╨┤╨╡╨╛, ╨▓ ╨║╨╛╤é╨╛╤Ç╨╛╨╝ ╤ê╨╡╤ü╤é╤î ╤ç╨╡╨╗╨╛╨▓╨╡╨║ (╤é╤Ç╨╛╨╡ ╨▓ ╨▒╨╡╨╗╤ï╤à ╤Ç╤â╨▒╨░╤ê╨║╨░╤à ╨╕ ╤é╤Ç╨╛╨╡ ╨▓ ╤ç╨╡╤Ç╨╜╤ï╤à) ╨┐╨╡╤Ç╨╡╨┤╨░╤Ä╤é ╨┤╤Ç╤â╨│ ╨┤╤Ç╤â╨│╤â ╨▒╨░╤ü╨║╨╡╤é╨▒╨╛╨╗╤î╨╜╤ï╨╡ ╨╝╤Å╤ç╨╕.\n\n╨ù╨░╨┤╨░╤ç╨░ ╨▒╤ï╨╗╨░ ╨┐╤Ç╨╛╤ü╤é╨░╤Å: ╨┐╨╛╨┤╤ü╤ç╨╕╤é╨░╤é╤î ╨║╨╛╨╗╨╕╤ç╨╡╤ü╤é╨▓╨╛ ╨┐╨╡╤Ç╨╡╨┤╨░╤ç, ╤ü╨┤╨╡╨╗╨░╨╜╨╜╤ï╤à ╨▒╨╡╨╗╨╛╤Ç╤â╨▒╨░╤ê╨╡╤ç╨╜╨╛╨╣ ╨║╨╛╨╝╨░╨╜╨┤╨╛╨╣. ╨ú╤ç╨░╤ü╤é╨╜╨╕╨║╨╕ ╤ü╨╛╤ü╤Ç╨╡╨┤╨╛╤é╨╛╤ç╨╕╨╗╨╕╤ü╤î, ╨╛╤é╤ü╨╗╨╡╨╢╨╕╨▓╨░╤Å ╨║╨░╨╢╨┤╤ï╨╣ ╨▒╤Ç╨╛╤ü╨╛╨║.\n\n╨Æ ╤ü╨╡╤Ç╨╡╨┤╨╕╨╜╨╡ ╨▓╨╕╨┤╨╡╨╛ ╨┐╤Ç╨╛╨╕╨╖╨╛╤ê╨╗╨╛ ╨╜╨╡╤ç╤é╨╛ ╤ì╨║╤ü╤é╤Ç╨░╨╛╤Ç╨┤╨╕╨╜╨░╤Ç╨╜╨╛╨╡. ╨º╨╡╨╗╨╛╨▓╨╡╨║ ╨▓ ╨┐╨╛╨╗╨╜╨╛╨╝ ╨║╨╛╤ü╤é╤Ä╨╝╨╡ ╨│╨╛╤Ç╨╕╨╗╨╗╤ï ╨╝╨╡╨┤╨╗╨╡╨╜╨╜╨╛ ╨▓╨╛╤ê╨╡╨╗ ╨▓ ╤å╨╡╨╜╤é╤Ç ╨║╨░╨┤╤Ç╨░, ╨┐╨╛╨▓╨╡╤Ç╨╜╤â╨╗╤ü╤Å ╨║ ╨║╨░╨╝╨╡╤Ç╨╡, ╨┐╨╛╤ü╤é╤â╤ç╨░╨╗ ╤ü╨╡╨▒╤Å ╨▓ ╨│╤Ç╤â╨┤╤î ╨╕ ╨▓╤ï╤ê╨╡╨╗. ╨ô╨╛╤Ç╨╕╨╗╨╗╤â ╨▒╤ï╨╗╨╛ ╨▓╨╕╨┤╨╜╨╛ ╤å╨╡╨╗╤ï╤à ╨┤╨╡╨▓╤Å╤é╤î ╤ü╨╡╨║╤â╨╜╨┤.\n\n╨Ü╨╛╨│╨┤╨░ ╨╕╤à ╤ü╨┐╤Ç╨╛╤ü╨╕╨╗╨╕ ╨┐╨╛╨╖╨╢╨╡, ╨┐╤Ç╨╕╨╝╨╡╤Ç╨╜╨╛ ╨┐╨╛╨╗╨╛╨▓╨╕╨╜╨░ ╤â╤ç╨░╤ü╤é╨╜╨╕╨║╨╛╨▓ ╨┐╨╛╨╜╤Å╤é╨╕╤Å ╨╜╨╡ ╨╕╨╝╨╡╨╗╨░ ╨╛ ╨┐╨╛╤Å╨▓╨╗╨╡╨╜╨╕╨╕ ╨│╨╛╤Ç╨╕╨╗╨╗╤ï. ╨₧╨╜╨╕ ╨▒╤ï╨╗╨╕ ╤ê╨╛╨║╨╕╤Ç╨╛╨▓╨░╨╜╤ï, ╨║╨╛╨│╨┤╨░ ╨╕╨╝ ╤ü╨╜╨╛╨▓╨░ ╨┐╨╛╨║╨░╨╖╨░╨╗╨╕ ╨▓╨╕╨┤╨╡╨╛. ╨¥╨╡╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╛╤é╨║╨░╨╖╤ï╨▓╨░╨╗╨╕╤ü╤î ╨▓╨╡╤Ç╨╕╤é╤î, ╤ç╤é╨╛ ╤ì╤é╨╛ ╨╛╨┤╨╜╨╛ ╨╕ ╤é╨╛ ╨╢╨╡ ╨▓╨╕╨┤╨╡╨╛.\n\n╨¡╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é ╨┐╤Ç╨╛╨┤╨╡╨╝╨╛╨╜╤ü╤é╤Ç╨╕╤Ç╨╛╨▓╨░╨╗ ╤é╨╛, ╤ç╤é╨╛ ╨í╨░╨╣╨╝╨╛╨╜╤ü ╨╕ ╨¿╨░╨▒╤Ç╨╕ ╨╜╨░╨╖╨▓╨░╨╗╨╕ ┬½╤ü╨╗╨╡╨┐╨╛╤é╨╛╨╣ ╨┐╨╛ ╨╜╨╡╨▓╨╜╨╕╨╝╨░╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╨╕┬╗ ΓÇö ╨╜╨╡╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î╤Ä ╨╖╨░╨╝╨╡╤ç╨░╤é╤î ╨┐╨╛╨╗╨╜╨╛╤ü╤é╤î╤Ä ╨▓╨╕╨┤╨╕╨╝╤ï╨╡, ╨╜╨╛ ╨╜╨╡╨╛╨╢╨╕╨┤╨░╨╜╨╜╤ï╨╡ ╨╛╨▒╤è╨╡╨║╤é╤ï, ╨║╨╛╨│╨┤╨░ ╨╜╨░╤ê╨╡ ╨▓╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╤ü╨╛╤ü╤Ç╨╡╨┤╨╛╤é╨╛╤ç╨╡╨╜╨╛ ╨▓ ╨┤╤Ç╤â╨│╨╛╨╝ ╨╝╨╡╤ü╤é╨╡. ╨ö╨╡╨╗╨╛ ╨╜╨╡ ╨▓ ╤é╨╛╨╝, ╤ç╤é╨╛ ╨╜╨░╤ê╨╕ ╨│╨╗╨░╨╖╨░ ╨╜╨╡ ╨▓╨╕╨┤╨╡╨╗╨╕ ╨│╨╛╤Ç╨╕╨╗╨╗╤â; ╨╜╨░╤ê ╨╝╨╛╨╖╨│ ╨┐╤Ç╨╛╤ü╤é╨╛ ╨╜╨╡ ╨╛╨▒╤Ç╨░╨▒╨╛╤é╨░╨╗ ╤ì╤é╨╛, ╨┐╨╛╤é╨╛╨╝╤â ╤ç╤é╨╛ ╤ì╤é╨╛ ╨╜╨╡ ╨╕╨╝╨╡╨╗╨╛ ╨╛╤é╨╜╨╛╤ê╨╡╨╜╨╕╤Å ╨║ ╨╖╨░╨┤╨░╤ç╨╡ ╨┐╨╛╨┤╤ü╤ç╨╡╤é╨░.\n\n╨¡╤é╨╛ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨╕╨╝╨╡╨╡╤é ╨│╨╗╤â╨▒╨╛╨║╨╕╨╡ ╨┐╤Ç╨░╨║╤é╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨┐╨╛╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╕╤Å. ╨á╨░╨┤╨╕╨╛╨╗╨╛╨│╨╕ ╨╝╨╛╨│╤â╤é ╨╜╨╡ ╨╖╨░╨╝╨╡╤é╨╕╤é╤î ╨╛╨┐╤â╤à╨╛╨╗╨╕ ╨╜╨░ ╤Ç╨╡╨╜╤é╨│╨╡╨╜╨╛╨▓╤ü╨║╨╕╤à ╤ü╨╜╨╕╨╝╨║╨░╤à, ╨╡╤ü╨╗╨╕ ╤ü╨╛╤ü╤Ç╨╡╨┤╨╛╤é╨╛╤ç╨╕╨▓╨░╤Ä╤é ╨▓╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╨╜╨░ ╤ç╨╡╨╝-╤é╨╛ ╨┤╤Ç╤â╨│╨╛╨╝. ╨Æ╨╛╨┤╨╕╤é╨╡╨╗╨╕ ╨╝╨╛╨│╤â╤é ╨╜╨╡ ╨▓╨╕╨┤╨╡╤é╤î ╨┐╨╡╤ê╨╡╤à╨╛╨┤╨╛╨▓, ╨║╨╛╨│╨┤╨░ ╨╛╤é╨▓╨╗╨╡╨║╨░╤Ä╤é╤ü╤Å. ╨₧╤ç╨╡╨▓╨╕╨┤╤å╤ï ╤â╨┐╤â╤ü╨║╨░╤Ä╤é ╨▓╨░╨╢╨╜╤ï╨╡ ╨┤╨╡╤é╨░╨╗╨╕ ╨▓╨╛ ╨▓╤Ç╨╡╨╝╤Å ╨┐╤Ç╨╡╤ü╤é╤â╨┐╨╗╨╡╨╜╨╕╨╣.\n\n╨¥╨╡╨▓╨╕╨┤╨╕╨╝╨░╤Å ╨│╨╛╤Ç╨╕╨╗╨╗╨░ ╨╜╨░╨┐╨╛╨╝╨╕╨╜╨░╨╡╤é ╨╜╨░╨╝, ╤ç╤é╨╛ ╨▓╨╕╨┤╨╡╨╜╨╕╨╡ ╨╕ ╨╖╨░╨╝╨╡╤ç╨░╨╜╨╕╨╡ ΓÇö ╤ì╤é╨╛ ╨┤╨▓╨░ ╤ä╤â╨╜╨┤╨░╨╝╨╡╨╜╤é╨░╨╗╤î╨╜╨╛ ╤Ç╨░╨╖╨╜╤ï╤à ╨║╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╤à ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╨░ ╨╕ ╤ç╤é╨╛ ╨╜╨░╤ê╨╡ ╤â╨▓╨╡╤Ç╨╡╨╜╨╜╨╛╨╡ ╤ç╤â╨▓╤ü╤é╨▓╨╛ ╨╛╤ü╨╛╨╖╨╜╨░╨╜╨╕╤Å ΓÇö ╨▓╨╛ ╨╝╨╜╨╛╨│╨╛╨╝ ╨╕╨╗╨╗╤Ä╨╖╨╕╤Å.",
    "contentAz": "1999-cu ild╔Ö psixoloqlar Daniel Simons v╔Ö Christopher Chabris, ┼ƒ├╝urla ba─ƒl─▒ ╔Ön ╔Ösas f╔Örziyy╔Öl╔Örimiz╔Ö etiraz ed╔Öc╔Ök bir t╔Öcr├╝b╔Ö haz─▒rlad─▒lar. Onlar i┼ƒtirak├º─▒lardan alt─▒ n╔Öf╔Örin ΓÇô ├╝├º├╝ a─ƒ k├╢yn╔Ökd╔Ö, ├╝├º├╝ qara paltarda ΓÇô basketbol toplar─▒n─▒ bir-birin╔Ö ├╢t├╝rd├╝kl╔Öri q─▒sa videoya baxma─ƒ─▒ xahi┼ƒ etdil╔Ör.\n\nTap┼ƒ─▒r─▒q sad╔Ö idi: a─ƒ k├╢yn╔Ökli komandan─▒n ├╢t├╝rm╔Öl╔Örinin say─▒n─▒ hesablay─▒n. ─░┼ƒtirak├º─▒lar h╔Ör bir at─▒┼ƒ─▒ izl╔Öy╔Ör╔Ök diqq╔Ötl╔Örini c╔Öml╔Ödil╔Ör.\n\nVideonun yar─▒s─▒nda qeyri-adi bir ┼ƒey ba┼ƒ verdi. Tam qorilla kostyumunda olan bir ┼ƒ╔Öxs yava┼ƒ-yava┼ƒ kadr─▒n m╔Örk╔Özin╔Ö daxil oldu, kameraya ├╝z tutdu, sin╔Ösini d├╢yd├╝ v╔Ö ├º─▒x─▒b getdi. Qorilla tam doqquz saniy╔Ö g├╢r├╝nd├╝.\n\nDaha sonra soru┼ƒduqda, i┼ƒtirak├º─▒lar─▒n t╔Öxmin╔Ön yar─▒s─▒ qorillan─▒n peyda olmas─▒ bar╔Öd╔Ö he├º bir fikri yox idi. Videonu yenid╔Ön n├╝mayi┼ƒ etdir╔Önd╔Ö ┼ƒoka d├╝┼ƒ├╝bl╔Ör. B╔Özil╔Öri bunun eyni video oldu─ƒuna inanmaqdan imtina etdi.\n\nT╔Öcr├╝b╔Ö Simons v╔Ö ├çabrisin \"diqq╔Ötsiz korluq\" adland─▒rd─▒qlar─▒n─▒ n├╝mayi┼ƒ etdirdi - diqq╔Ötimiz ba┼ƒqa yer╔Ö y├╢n╔Öldildiyind╔Ö tamamil╔Ö g├╢r├╝n╔Ön, lakin g├╢zl╔Önilm╔Öz cisiml╔Örin f╔Örqin╔Ö varmamaq. Bu, g├╢zl╔Örimizin qorilla g├╢rm╔Öm╔Ösi deyil; bizim beynimiz sad╔Öc╔Ö onu emal etm╔Ödi, ├º├╝nki sayma tap┼ƒ─▒r─▒─ƒ─▒na uy─ƒun deyildi.\n\nBu t╔Ödqiqat─▒n real d├╝nya ├╝├º├╝n d╔Örin t╔Ösirl╔Öri var. Rentgenoloqlar ba┼ƒqa bir ┼ƒey╔Ö diqq╔Öt yetirdikd╔Ö X-┼ƒ├╝alar─▒nda ┼ƒi┼ƒl╔Öri ╔Öld╔Ön ver╔Ö bil╔Örl╔Ör. S├╝r├╝c├╝l╔Ör diqq╔Öti yay─▒nd─▒rd─▒qda piyadalar─▒ g├╢rm╔Öy╔Ö bil╔Ör. ┼₧ahidl╔Ör cinay╔Ötl╔Ör zaman─▒ kritik detallar─▒ qa├º─▒r─▒rlar.\n\nG├╢z╔Ög├╢r├╝nm╔Öz qorilla biz╔Ö xat─▒rlad─▒r ki, g├╢rm╔Ök v╔Ö f╔Örq etm╔Ök iki k├╢k├╝nd╔Ön f╔Örqli idrak prosesidir v╔Ö bizim inaml─▒ d╔Örketm╔Ö duy─ƒumuz ╔Ösas╔Ön ill├╝ziyad─▒r."
  },
  {
    "id": 5,
    "title": "Harlow's Monkeys and the Need for Love",
    "titleKa": "ßâ░ßâÉßâáßâÜßâ¥ßâúßâí ßâ¢ßâÉßâÿßâ¢ßâúßâ£ßâößâæßâÿ ßâôßâÉ ßâíßâÿßâºßâòßâÉßâáßâúßâÜßâÿßâí ßâíßâÉßâ¡ßâÿßâáßâ¥ßâößâæßâÉ",
    "chapterId": 9,
    "icon": "mdi:heart-outline",
    "content": "In the 1950s and 60s, psychologist Harry Harlow conducted experiments at the University of Wisconsin that would forever change our understanding of love and attachment. At the time, the prevailing viewΓÇöpromoted by behaviorists like WatsonΓÇöwas that infants bonded with mothers primarily because mothers provided food.\n\nHarlow challenged this assumption by separating infant rhesus monkeys from their biological mothers and giving them two surrogate \"mothers.\" One was made of bare wire mesh with a feeding bottle attached. The other was made of soft terry cloth with no food source.\n\nIf the behaviorists were right, the babies should have preferred the wire mother who provided nourishment. But that's not what happened.\n\nThe infant monkeys spent nearly all their time clinging to the soft cloth mother. They went to the wire mother only briefly to feed, then immediately returned to the cloth surrogate. When frightened by a mechanical spider or other threats, they ran to the cloth mother for comfort, clinging desperately.\n\nEven more telling: monkeys raised with only the wire mother developed severe psychological problems. They rocked back and forth, showed signs of depression, were aggressive, and had difficulty socializing with other monkeys. Those with the cloth mother, while not perfectly adjusted, were significantly healthier emotionally.\n\nLater experiments showed that monkeys deprived of all maternal contact became profoundly disturbed as adultsΓÇöunable to parent their own offspring, some refusing to nurse or even harming their babies.\n\nHarlow's work, though ethically controversial by today's standards, provided irrefutable evidence that emotional comfort, touch, and security are as fundamental as food and water for healthy development.",
    "contentKa": "1950-60-ßâÿßâÉßâ£ ßâ¼ßâÜßâößâæßâ¿ßâÿ, ßâ░ßâÉßâáßâÿ ßâ░ßâÉßâáßâÜßâ¥ßâúßâ¢ßâÉ ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâößâæßâÿ ßâ⌐ßâÉßâÉßâóßâÉßâáßâÉ ßâáßâößâûßâúßâíßâÿßâí ßâ¢ßâÉßâÿßâ¢ßâúßâ£ßâößâæßâûßâö. ßâ¢ßâÉßâ£ ßâ⌐ßâòßâÿßâÜßâößâæßâí ßâ¥ßâáßâÿ ßâíßâúßâáßâ¥ßâÆßâÉßâóßâÿ ßâôßâößâôßâÉ ßâ¢ßâÿßâíßâ¬ßâÉ: ßâ¢ßâÉßâòßâùßâúßâÜßâ«ßâÉßâòßâÜßâ¥ßâòßâÉßâ£ßâÿ ßâíßâÉßâÖßâòßâößâæßâÿßâù ßâôßâÉ ßâáßâæßâÿßâÜßâÿ ßâÑßâíßâ¥ßâòßâÿßâÜßâÿßâÉßâ£ßâÿ ßâíßâÉßâÖßâòßâößâæßâÿßâí ßâÆßâÉßâáßâößâ¿ßâö. ßâ⌐ßâòßâÿßâÜßâößâæßâ¢ßâÉ ßâáßâæßâÿßâÜ ßâôßâößâôßâÉ ßâÉßâÿßâáßâ⌐ßâÿßâößâíΓÇößâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâÖßâ¥ßâ¢ßâñßâ¥ßâáßâóßâÿ ßâíßâÉßâÖßâòßâößâæßâûßâö ßâ¢ßâ£ßâÿßâ¿ßâòßâ£ßâößâÜßâ¥ßâòßâÉßâ£ßâÿßâÉ.",
    "moral": "Love, comfort, and physical touch are fundamental needs that shape healthy developmentΓÇönot luxuries, but biological necessities.",
    "moralKa": "ßâíßâÿßâºßâòßâÉßâáßâúßâÜßâÿ, ßâÖßâ¥ßâ¢ßâñßâ¥ßâáßâóßâÿ ßâôßâÉ ßâñßâÿßâûßâÿßâÖßâúßâáßâÿ ßâ¿ßâößâ«ßâößâæßâÉ ßâñßâúßâ£ßâôßâÉßâ¢ßâößâ£ßâóßâúßâáßâÿ ßâíßâÉßâ¡ßâÿßâáßâ¥ßâößâæßâößâæßâÿßâÉ ßâ»ßâÉßâ£ßâíßâÉßâªßâÿ ßâÆßâÉßâ£ßâòßâÿßâùßâÉßâáßâößâæßâÿßâíßâùßâòßâÿßâí.",
    "titleHy": "╒Ç╒í╓Ç╒¼╒╕╒╕╓é╒½ ╒»╒í╒║╒½╒»╒╢╒Ñ╓Ç╒¿ ╓ç ╒╜╒½╓Ç╒╕ ╒»╒í╓Ç╒½╓ä╒¿",
    "moralHy": "╒ì╒Ñ╓Ç╒¿, ╒░╒í╓Ç╒┤╒í╓Ç╒í╒╛╒Ñ╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╓ç ╓å╒½╒ª╒½╒»╒í╒»╒í╒╢ ╒░╒║╒╕╓é╒┤╒¿ ╒░╒½╒┤╒╢╒í╓Ç╒í╓Ç ╒»╒í╓Ç╒½╓ä╒╢╒Ñ╓Ç ╒Ñ╒╢, ╒╕╓Ç╒╕╒╢╓ä ╒▒╓ç╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒Ñ╒╢ ╒í╒╝╒╕╒▓╒╗ ╒ª╒í╓Ç╒ú╒í╓ü╒╕╓é╒┤╒¿╒¥ ╒╕╒╣ ╒⌐╒Ñ ╒╖╓ä╒Ñ╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒í╒╡╒¼ ╒»╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒í╒»╒í╒╢ ╒í╒╢╒░╓Ç╒í╒¬╒Ñ╒╖╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢:",
    "moralAz": "Sevgi, rahatl─▒q v╔Ö fiziki toxunma sa─ƒlam inki┼ƒaf─▒ formala┼ƒd─▒ran ╔Ösas ehtiyaclard─▒r - l├╝ks deyil, bioloji ehtiyaclar.",
    "moralRu": "╨¢╤Ä╨▒╨╛╨▓╤î, ╨║╨╛╨╝╤ä╨╛╤Ç╤é ╨╕ ╤ä╨╕╨╖╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨┐╤Ç╨╕╨║╨╛╤ü╨╜╨╛╨▓╨╡╨╜╨╕╨╡ ΓÇö ╤ì╤é╨╛ ╤ä╤â╨╜╨┤╨░╨╝╨╡╨╜╤é╨░╨╗╤î╨╜╤ï╨╡ ╨┐╨╛╤é╤Ç╨╡╨▒╨╜╨╛╤ü╤é╨╕, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╤ä╨╛╤Ç╨╝╨╕╤Ç╤â╤Ä╤é ╨╖╨┤╨╛╤Ç╨╛╨▓╨╛╨╡ ╤Ç╨░╨╖╨▓╨╕╤é╨╕╨╡ ΓÇö ╨╜╨╡ ╤Ç╨╛╤ü╨║╨╛╤ê╤î, ╨░ ╨▒╨╕╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨┐╨╛╤é╤Ç╨╡╨▒╨╜╨╛╤ü╤é╨╕.",
    "titleRu": "╨₧╨▒╨╡╨╖╤î╤Å╨╜╤ï ╨Ñ╨░╤Ç╨╗╨╛╤â ╨╕ ╨┐╨╛╤é╤Ç╨╡╨▒╨╜╨╛╤ü╤é╤î ╨▓ ╨╗╤Ä╨▒╨▓╨╕",
    "contentHy": "1950-╒í╒»╒í╒╢╒╢╒Ñ╓Ç╒½╒╢ ╓ç 60-╒í╒»╒í╒╢╒╢╒Ñ╓Ç╒½╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢ ╒Ç╒í╓Ç╓Ç╒½ ╒Ç╒í╓Ç╒¼╒╕╒╕╓é╒╢ ╒Ä╒½╒╜╒»╒╕╒╢╒╜╒½╒╢╒½ ╒░╒í╒┤╒í╒¼╒╜╒í╓Ç╒í╒╢╒╕╓é╒┤ ╒í╒╢╓ü╒»╒í╓ü╓Ç╒Ñ╓ü ╓â╒╕╓Ç╒▒╒Ñ╓Ç, ╒╕╓Ç╒╕╒╢╓ä ╒¿╒╢╒ñ╒┤╒½╒╖╒┐ ╒»╓â╒╕╒¡╒Ñ╒½╒╢ ╒┤╒Ñ╓Ç ╒║╒í╒┐╒»╒Ñ╓Ç╒í╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿ ╒╜╒½╓Ç╒╕ ╓ç ╒»╒í╒║╒╛╒í╒«╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒í╒╜╒½╒╢: ╘▒╒╡╒╢ ╒¬╒í╒┤╒í╒╢╒í╒» ╒ú╒Ñ╓Ç╒í╒»╒╖╒╝╒╕╒▓ ╒┐╒Ñ╒╜╒í╒»╒Ñ╒┐╒¿, ╒╕╓Ç╒¿ ╒┐╒í╓Ç╒í╒«╒╛╒╕╓é╒┤ ╒º╓Ç ╒ê╓é╒╕╒⌐╒╜╒╕╒╢╒½ ╒╢╒┤╒í╒╢ ╒╛╒í╓Ç╓ä╒í╒ú╒«╒╕╒▓╒╢╒Ñ╓Ç╒½ ╒»╒╕╒▓╒┤╒½╓ü, ╒í╒╡╒╢ ╒º╓Ç, ╒╕╓Ç ╒╢╒╕╓Ç╒í╒«╒½╒╢╒╢╒Ñ╓Ç╒¿ ╒»╒í╒║╒╛╒í╒« ╒Ñ╒╢ ╒┤╒í╒╡╓Ç╒Ñ╓Ç╒½ ╒░╒Ñ╒┐ ╒░╒½╒┤╒╢╒í╒»╒í╒╢╒╕╓é╒┤ ╒í╒╡╒╢ ΓÇïΓÇï╒║╒í╒┐╒│╒í╒╝╒╕╒╛, ╒╕╓Ç ╒┤╒í╒╡╓Ç╒Ñ╓Ç╒¿ ╒╜╒╢╒╕╓é╒╢╒ñ ╒Ñ╒╢ ╒┤╒í╒┐╒í╒»╒í╓Ç╒í╓Ç╒╕╓é╒┤:\n\n╒Ç╒í╓Ç╒¼╒╕╒╕╓é╒╢ ╒╛╒½╒│╒í╓Ç╒»╒Ñ╒¼ ╒º ╒í╒╡╒╜ ╒Ñ╒╢╒⌐╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿╒¥ ╒í╒╝╒í╒╢╒▒╒╢╒í╓ü╒╢╒Ñ╒¼╒╕╒╛ ╒┤╒í╒╢╒»╒í╒»╒í╒╢ ╒╝╒Ñ╒ª╒╕╓é╒╜ ╒»╒í╒║╒½╒»╒╢╒Ñ╓Ç╒½╒╢ ╒½╓Ç╒Ñ╒╢╓ü ╒»╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒í╒»╒í╒╢ ╒┤╒í╒╡╓Ç╒Ñ╓Ç╒½╓ü ╓ç ╒╢╓Ç╒í╒╢╓ü ╒┐╒í╒¼╒╕╒╛ ╒Ñ╓Ç╒»╒╕╓é ╓â╒╕╒¡╒╢╒í╒» ┬½╒┤╒í╒╡╓Ç╒Ñ╓Ç┬╗: ╒ä╒Ñ╒»╒¿ ╒║╒í╒┐╓Ç╒í╒╜╒┐╒╛╒í╒« ╒º╓Ç ╒┤╒Ñ╓Ç╒» ╒┤╒Ñ╒┐╒í╒▓╒í╒»╒í╒╢ ╓ü╒í╒╢╓ü╒½╓ü, ╒╕╓Ç╒½ ╒╛╓Ç╒í ╒ñ╓Ç╒╛╒í╒« ╒º╓Ç ╒»╒Ñ╓Ç╒í╒»╓Ç╒┤╒í╒╢ ╒╖╒½╒╖: ╒ä╒╡╒╕╓é╒╜╒¿ ╒║╒í╒┐╓Ç╒í╒╜╒┐╒╛╒í╒« ╒º╓Ç ╓â╒í╓â╒╕╓é╒» ╒»╒┐╒╕╓Ç╒½╓ü, ╒í╒╝╒í╒╢╓ü ╒╜╒╢╒╢╒ñ╒½ ╒í╒▓╒ó╒╡╒╕╓é╓Ç╒½:\n\n╘╡╒⌐╒Ñ ΓÇïΓÇï╒╛╒í╓Ç╓ä╒í╒ú╒«╒Ñ╓Ç╒¿ ╒│╒½╒╖╒┐ ╒º╒½╒╢, ╒Ñ╓Ç╒Ñ╒¡╒í╒╢╒Ñ╓Ç╒¿ ╒║╒Ñ╒┐╓ä ╒º ╒╢╒í╒¡╒¿╒╢╒┐╓Ç╒Ñ╒½╒╢ ╒╜╒╢╒╕╓é╓ü╒╕╒▓ ╒┤╒╕╓Ç╒¿: ╘▓╒í╒╡╓ü ╒í╒╡╒ñ╒║╒Ñ╒╜ ╒╣╒½ ╒Ñ╒▓╒Ñ╒¼:\n\n╒å╒╕╓Ç╒í╒«╒½╒╢ ╒»╒í╒║╒½╒»╒╢╒Ñ╓Ç╒¿ ╒ú╓Ç╒Ñ╒⌐╒Ñ ╒í╒┤╒ó╒╕╒▓╒╗ ╒¬╒í╒┤╒í╒╢╒í╒» ╒í╒╢╓ü╒»╒í╓ü╒╢╒╕╓é╒┤ ╒º╒½╒╢ ╓â╒í╓â╒╕╓é╒» ╒»╒┐╒╕╓Ç╒½ ╒┤╒╕╓Ç╒½╓ü ╒»╒í╒╝╒╣╒Ñ╒¼╒╕╒╛: ╒å╓Ç╒í╒╢╓ä ╒ú╒╢╒í╓ü╒½╒╢ ╒┤╒Ñ╒┐╒í╒▓╒í╒¼╒í╓Ç ╒┤╒╕╓Ç ╒┤╒╕╒┐ ╒┤╒½╒í╒╡╒╢ ╒»╒í╓Ç╒│ ╒¬╒í╒┤╒í╒╢╒í╒»╒╕╒╛ ╒»╒Ñ╓Ç╒í╒»╓Ç╒Ñ╒¼╒╕╓é, ╒░╒Ñ╒┐╒╕ ╒í╒╢╒┤╒½╒╗╒í╒║╒Ñ╒╜ ╒╛╒Ñ╓Ç╒í╒ñ╒í╓Ç╒▒╒í╒╢ ╒»╒┐╒╕╓Ç╒½ ╓â╒╕╒¡╒╢╒í╒»╒½╒╢: ╘╡╓Ç╒ó ╒╛╒í╒¡╒Ñ╓ü╒í╒╢ ╒┤╒Ñ╒¡╒í╒╢╒½╒»╒í╒»╒í╒╢ ╒╜╒í╓Ç╒ñ╒½╓ü ╒»╒í╒┤ ╒í╒╡╒¼ ╒╜╒║╒í╒╝╒╢╒í╒¼╒½╓ä╒╢╒Ñ╓Ç╒½╓ü, ╒╢╓Ç╒í╒╢╓ä ╒╛╒í╒ª╒Ñ╓ü╒½╒╢ ╒»╒┐╒╕╓Ç╒Ñ ╒┤╒╕╓Ç ╒┤╒╕╒┐ ╒┤╒¡╒½╒⌐╒í╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒┤╒í╓Ç╒¥ ╒░╒╕╓é╒╜╒í╒░╒í╒┐ ╒»╒í╒╝╒╣╒Ñ╒¼╒╕╒╛╓ë\n\n╒å╒╕╓é╒╡╒╢╒½╒╜╒» ╒í╒╛╒Ñ╒¼╒½ ╒¡╒╕╒╜╒╕╓é╒╢. ╒»╒í╒║╒½╒»╒╢╒Ñ╓Ç╒¿, ╒╕╓Ç╒╕╒╢╓ä ╒┤╒Ñ╒«╒í╓ü╒Ñ╒¼ ╒Ñ╒╢ ╒┤╒½╒í╒╡╒╢ ╒┤╒Ñ╒┐╒í╒▓╒╡╒í ╒┤╒╕╓Ç ╒░╒Ñ╒┐, ╒«╒í╒╢╓Ç ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╒¡╒╢╒ñ╒½╓Ç╒╢╒Ñ╓Ç ╒Ñ╒╢ ╒╕╓é╒╢╒Ñ╓ü╒Ñ╒¼: ╒å╓Ç╒í╒╢╓ä ╓à╓Ç╒╕╓Ç╒╛╒╕╓é╒┤ ╒º╒½╒╢ ╒░╒Ñ╒┐ ╒╕╓é ╒í╒╝╒í╒╗, ╓ü╒╕╓é╒╡╓ü ╒º╒½╒╢ ╒┐╒í╒¼╒½╒╜ ╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í╒╡╒½ ╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç, ╒í╒ú╓Ç╒Ñ╒╜╒½╒╛ ╒º╒½╒╢ ╓ç ╒ñ╒¬╒╛╒í╓Ç╒╕╓é╒⌐╒╡╒í╒┤╒ó ╒º╒½╒╢ ╒╖╓â╒╛╒╕╓é╒┤ ╒í╒╡╒¼ ╒»╒í╒║╒½╒»╒╢╒Ñ╓Ç╒½ ╒░╒Ñ╒┐╓ë ╒å╓Ç╒í╒╢╓ä, ╒╕╒╛╓ä╒Ñ╓Ç ╒╖╒╕╓Ç╒╕╒╛ ╒┤╒╕╓Ç ╒░╒Ñ╒┐, ╒⌐╒Ñ╓ç ╒»╒í╒┐╒í╓Ç╒╡╒í╒¼ ╒░╒í╓Ç╒┤╒í╓Ç╒Ñ╓ü╒╛╒í╒« ╒╣╒º╒½╒╢, ╒º╒┤╒╕╓ü╒½╒╕╒╢╒í╒¼ ╒í╒╝╒╕╓é╒┤╒╕╒╛ ╒ª╒ú╒í╒¼╒½╒╕╓Ç╒Ñ╒╢ ╒í╒╛╒Ñ╒¼╒½ ╒í╒╝╒╕╒▓╒╗ ╒º╒½╒╢:\n\n╘▒╒╛╒Ñ╒¼╒½ ╒╕╓é╒╖ ╓â╒╕╓Ç╒▒╒Ñ╓Ç╒¿ ╓ü╒╕╓é╒╡╓ü ╒┐╒╛╒Ñ╓ü╒½╒╢, ╒╕╓Ç ╒»╒í╒║╒½╒»╒╢╒Ñ╓Ç╒¿, ╒╕╓Ç╒╕╒╢╓ä ╒ª╓Ç╒»╒╛╒í╒« ╒º╒½╒╢ ╒┤╒í╒╡╓Ç╒í╒»╒í╒╢ ╒»╒í╒║╒½╓ü, ╒┤╒Ñ╒« ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒º╒½╒╢ ╒ª╒ú╒╕╓é╒┤ ╒┤╒Ñ╒«╒í╒░╒í╒╜╒í╒»╒╢╒Ñ╓Ç╒½ ╒╖╓Ç╒╗╒í╒╢╒╕╓é╒┤╒¥ ╒╣╒»╒í╓Ç╒╕╒▓╒í╒╢╒í╒¼╒╕╒╛ ╒ñ╒í╒╜╒┐╒½╒í╓Ç╒í╒»╒Ñ╒¼ ╒½╓Ç╒Ñ╒╢╓ü ╒╜╒Ñ╓Ç╒╕╓é╒╢╒ñ╒╢╒Ñ╓Ç╒½╒╢, ╒╕╒┤╒í╒╢╓ä ╒░╓Ç╒í╒¬╒í╓Ç╒╛╒╕╓é╒┤ ╒º╒½╒╢ ╒»╒Ñ╓Ç╒í╒»╓Ç╒Ñ╒¼ ╒»╒í╒┤ ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒╛╒╢╒í╒╜╒╕╓é╒┤ ╒½╓Ç╒Ñ╒╢╓ü ╒Ñ╓Ç╒Ñ╒¡╒í╒╢╒Ñ╓Ç╒½╒╢╓ë\n\n╒Ç╒í╓Ç╒¼╒╕╒╕╓é╒½ ╒í╒╖╒¡╒í╒┐╒í╒╢╓ä╒¿, ╒⌐╒Ñ╓ç ╒í╒╡╒╜╓à╓Ç╒╛╒í ╒╣╒í╓â╒í╒╢╒½╒╖╒╢╒Ñ╓Ç╒╕╒╛ ╒º╒⌐╒½╒»╒í╒║╒Ñ╒╜ ╒░╒í╒»╒í╒╜╒í╒»╒í╒╢ ╒º, ╒╜╒í╒»╒í╒╡╒╢ ╒í╒╢╒░╒Ñ╓Ç╓ä╒Ñ╒¼╒½ ╒í╒║╒í╓ü╒╕╓é╒╡╓ü╒╢╒Ñ╓Ç ╒º ╒┐╒╛╒Ñ╒¼, ╒╕╓Ç ╒º╒┤╒╕╓ü╒½╒╕╒╢╒í╒¼ ╒░╒í╓Ç╒┤╒í╓Ç╒í╒╛╒Ñ╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿, ╒░╒║╒╕╓é╒┤╒¿ ╓ç ╒í╒╢╒╛╒┐╒í╒╢╒ú╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒╕╓é╒╡╒╢╓ä╒í╒╢ ╒»╒í╓Ç╓ç╒╕╓Ç ╒Ñ╒╢, ╒╕╓Ç╓ä╒í╒╢ ╒╜╒╢╒╕╓é╒╢╒ñ╒╢ ╒╕╓é ╒╗╒╕╓é╓Ç╒¿ ╒í╒╝╒╕╒▓╒╗ ╒ª╒í╓Ç╒ú╒í╓ü╒┤╒í╒╢ ╒░╒í╒┤╒í╓Ç:",
    "contentRu": "╨Æ 1950-╤à ╨╕ 60-╤à ╨│╨╛╨┤╨░╤à ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│ ╨ô╨░╤Ç╤Ç╨╕ ╨Ñ╨░╤Ç╨╗╨╛╤â ╨┐╤Ç╨╛╨▓╨╛╨┤╨╕╨╗ ╨▓ ╨ú╨╜╨╕╨▓╨╡╤Ç╤ü╨╕╤é╨╡╤é╨╡ ╨Æ╨╕╤ü╨║╨╛╨╜╤ü╨╕╨╜╨░ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╤ï, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╜╨░╨▓╤ü╨╡╨│╨┤╨░ ╨╕╨╖╨╝╨╡╨╜╨╕╨╗╨╕ ╨╜╨░╤ê╨╡ ╨┐╨╛╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╨╗╤Ä╨▒╨▓╨╕ ╨╕ ╨┐╤Ç╨╕╨▓╤Å╨╖╨░╨╜╨╜╨╛╤ü╤é╨╕. ╨Æ ╤é╨╛ ╨▓╤Ç╨╡╨╝╤Å ╨┐╤Ç╨╡╨╛╨▒╨╗╨░╨┤╨░╨╗╨░ ╤é╨╛╤ç╨║╨░ ╨╖╤Ç╨╡╨╜╨╕╤Å, ╨║╨╛╤é╨╛╤Ç╤â╤Ä ╨┐╤Ç╨╛╨┤╨▓╨╕╨│╨░╨╗╨╕ ╤é╨░╨║╨╕╨╡ ╨▒╨╕╤à╨╡╨▓╨╕╨╛╤Ç╨╕╤ü╤é╤ï, ╨║╨░╨║ ╨ú╨╛╤é╤ü╨╛╨╜, ╤ç╤é╨╛ ╨╝╨╗╨░╨┤╨╡╨╜╤å╤ï ╤ü╨▓╤Å╨╖╨░╨╜╤ï ╤ü ╨╝╨░╤é╨╡╤Ç╤Å╨╝╨╕ ╨┐╤Ç╨╡╨╢╨┤╨╡ ╨▓╤ü╨╡╨│╨╛ ╨┐╨╛╤é╨╛╨╝╤â, ╤ç╤é╨╛ ╨╝╨░╤é╨╡╤Ç╨╕ ╨╛╨▒╨╡╤ü╨┐╨╡╤ç╨╕╨▓╨░╤Ä╤é ╨╕╤à ╨╡╨┤╨╛╨╣.\n\n╨Ñ╨░╤Ç╨╗╨╛╤â ╨▒╤Ç╨╛╤ü╨╕╨╗╨░ ╨▓╤ï╨╖╨╛╨▓ ╤ì╤é╨╛╨╝╤â ╨┐╤Ç╨╡╨┤╨┐╨╛╨╗╨╛╨╢╨╡╨╜╨╕╤Ä, ╨╛╤é╨┤╨╡╨╗╨╕╨▓ ╨┤╨╡╤é╨╡╨╜╤ï╤ê╨╡╨╣ ╨╝╨░╨║╨░╨║-╤Ç╨╡╨╖╤â╤ü ╨╛╤é ╨╕╤à ╨▒╨╕╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╤à ╨╝╨░╤é╨╡╤Ç╨╡╨╣ ╨╕ ╨┤╨░╨▓ ╨╕╨╝ ╨┤╨▓╤â╤à ╤ü╤â╤Ç╤Ç╨╛╨│╨░╤é╨╜╤ï╤à ┬½╨╝╨░╤é╨╡╤Ç╨╡╨╣┬╗. ╨₧╨┤╨╕╨╜ ╨▒╤ï╨╗ ╤ü╨┤╨╡╨╗╨░╨╜ ╨╕╨╖ ╨│╨╛╨╗╨╛╨╣ ╨┐╤Ç╨╛╨▓╨╛╨╗╨╛╤ç╨╜╨╛╨╣ ╤ü╨╡╤é╨║╨╕ ╤ü ╨┐╤Ç╨╕╨║╤Ç╨╡╨┐╨╗╨╡╨╜╨╜╨╛╨╣ ╨▒╤â╤é╤ï╨╗╨╛╤ç╨║╨╛╨╣ ╨┤╨╗╤Å ╨║╨╛╤Ç╨╝╨╗╨╡╨╜╨╕╤Å. ╨ö╤Ç╤â╨│╨╛╨╣ ╨▒╤ï╨╗ ╤ü╨┤╨╡╨╗╨░╨╜ ╨╕╨╖ ╨╝╤Å╨│╨║╨╛╨╣ ╨╝╨░╤à╤Ç╨╛╨▓╨╛╨╣ ╤é╨║╨░╨╜╨╕ ╨▒╨╡╨╖ ╨╕╤ü╤é╨╛╤ç╨╜╨╕╨║╨░ ╨┐╨╕╤é╨░╨╜╨╕╤Å.\n\n╨ò╤ü╨╗╨╕ ╨▒╤ï ╨▒╨╕╤à╨╡╨▓╨╕╨╛╤Ç╨╕╤ü╤é╤ï ╨▒╤ï╨╗╨╕ ╨┐╤Ç╨░╨▓╤ï, ╨╝╨╗╨░╨┤╨╡╨╜╤å╤ï ╨┤╨╛╨╗╨╢╨╜╤ï ╨▒╤ï╨╗╨╕ ╨▒╤ï ╨┐╤Ç╨╡╨┤╨┐╨╛╤ç╨╡╤ü╤é╤î ╨┐╤Ç╨╛╨▓╨╛╨╗╨╛╤ç╨╜╤â╤Ä ╨╝╨░╤é╤î, ╨║╨╛╤é╨╛╤Ç╨░╤Å ╨╛╨▒╨╡╤ü╨┐╨╡╤ç╨╕╨▓╨░╨╗╨░ ╨▒╤ï ╨┐╨╕╤é╨░╨╜╨╕╨╡. ╨¥╨╛ ╤ì╤é╨╛ ╨╜╨╡ ╤é╨╛, ╤ç╤é╨╛ ╨┐╤Ç╨╛╨╕╨╖╨╛╤ê╨╗╨╛.\n\n╨ö╨╡╤é╨╡╨╜╤ï╤ê╨╕ ╨╛╨▒╨╡╨╖╤î╤Å╨╜ ╨┐╨╛╤ç╤é╨╕ ╨▓╤ü╨╡ ╨▓╤Ç╨╡╨╝╤Å ╨┐╤Ç╨╛╨▓╨╛╨┤╨╕╨╗╨╕, ╤å╨╡╨┐╨╗╤Å╤Å╤ü╤î ╨╖╨░ ╨╝╤Å╨│╨║╤â╤Ä ╨╝╨░╤é╨╡╤Ç╨╕╤Ä. ╨Ü ╨┐╤Ç╨╛╨▓╨╛╨╗╨╛╤ç╨╜╨╛╨╣ ╨╝╨░╤é╨╡╤Ç╨╕ ╨╛╨╜╨╕ ╤à╨╛╨┤╨╕╨╗╨╕ ╨╜╨╡╨╜╨░╨┤╨╛╨╗╨│╨╛, ╤ç╤é╨╛╨▒╤ï ╨┐╨╛╨║╨╛╤Ç╨╝╨╕╤é╤î, ╨░ ╨╖╨░╤é╨╡╨╝ ╤ü╤Ç╨░╨╖╤â ╨╢╨╡ ╨▓╨╛╨╖╨▓╤Ç╨░╤ë╨░╨╗╨╕╤ü╤î ╨║ ╤é╨║╨░╨╜╨╡╨▓╨╛╨╣ ╤ü╤â╤Ç╤Ç╨╛╨│╨░╤é╨╜╨╛╨╣ ╨╝╨░╤é╨╡╤Ç╨╕. ╨¥╨░╨┐╤â╨│╨░╨╜╨╜╤ï╨╡ ╨╝╨╡╤à╨░╨╜╨╕╤ç╨╡╤ü╨║╨╕╨╝ ╨┐╨░╤â╨║╨╛╨╝ ╨╕╨╗╨╕ ╨┤╤Ç╤â╨│╨╕╨╝╨╕ ╤â╨│╤Ç╨╛╨╖╨░╨╝╨╕, ╨╛╨╜╨╕ ╨▒╨╡╨╢╨░╨╗╨╕ ╨║ ╤é╨║╨░╨╜╨╡╨▓╨╛╨╣ ╨╝╨░╤é╨╡╤Ç╨╕ ╨▓ ╨┐╨╛╨╕╤ü╨║╨░╤à ╤â╤é╨╡╤ê╨╡╨╜╨╕╤Å, ╨╛╤é╤ç╨░╤Å╨╜╨╜╨╛ ╤å╨╡╨┐╨╗╤Å╤Å╤ü╤î ╨╖╨░ ╨╜╨╡╨╡.\n\n╨ò╤ë╨╡ ╨▒╨╛╨╗╨╡╨╡ ╨┐╨╛╨║╨░╨╖╨░╤é╨╡╨╗╤î╨╜╨╛: ╤â ╨╛╨▒╨╡╨╖╤î╤Å╨╜, ╨▓╤ï╤Ç╨╛╤ü╤ê╨╕╤à ╤é╨╛╨╗╤î╨║╨╛ ╤ü ╨┐╤Ç╨╛╨▓╨╛╨╗╨╛╤ç╨╜╨╛╨╣ ╨╝╨░╤é╨╡╤Ç╤î╤Ä, ╨▓╨╛╨╖╨╜╨╕╨║╨╗╨╕ ╤ü╨╡╤Ç╤î╨╡╨╖╨╜╤ï╨╡ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝╤ï. ╨₧╨╜╨╕ ╤Ç╨░╤ü╨║╨░╤ç╨╕╨▓╨░╨╗╨╕╤ü╤î ╨▓╨╖╨░╨┤ ╨╕ ╨▓╨┐╨╡╤Ç╨╡╨┤, ╨┐╤Ç╨╛╤Å╨▓╨╗╤Å╨╗╨╕ ╨┐╤Ç╨╕╨╖╨╜╨░╨║╨╕ ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╨╕, ╨▒╤ï╨╗╨╕ ╨░╨│╤Ç╨╡╤ü╤ü╨╕╨▓╨╜╤ï ╨╕ ╤ü ╤é╤Ç╤â╨┤╨╛╨╝ ╨╛╨▒╤ë╨░╨╗╨╕╤ü╤î ╤ü ╨┤╤Ç╤â╨│╨╕╨╝╨╕ ╨╛╨▒╨╡╨╖╤î╤Å╨╜╨░╨╝╨╕. ╨ó╨╡, ╤â ╨║╨╛╨│╨╛ ╨▒╤ï╨╗╨░ ╤é╨║╨░╨╜╨╡╨▓╨░╤Å ╨╝╨░╤é╤î, ╤à╨╛╤é╤Å ╨╕ ╨╜╨╡ ╨▒╤ï╨╗╨╕ ╨╕╨┤╨╡╨░╨╗╤î╨╜╨╛ ╨┐╤Ç╨╕╤ü╨┐╨╛╤ü╨╛╨▒╨╗╨╡╨╜╤ï, ╨▒╤ï╨╗╨╕ ╨╖╨╜╨░╤ç╨╕╤é╨╡╨╗╤î╨╜╨╛ ╨╖╨┤╨╛╤Ç╨╛╨▓╨╡╨╡ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛.\n\n╨æ╨╛╨╗╨╡╨╡ ╨┐╨╛╨╖╨┤╨╜╨╕╨╡ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╤ï ╨┐╨╛╨║╨░╨╖╨░╨╗╨╕, ╤ç╤é╨╛ ╨╛╨▒╨╡╨╖╤î╤Å╨╜╤ï, ╨╗╨╕╤ê╨╡╨╜╨╜╤ï╨╡ ╨▓╤ü╤Å╨║╨╛╨│╨╛ ╨║╨╛╨╜╤é╨░╨║╤é╨░ ╤ü ╨╝╨░╤é╨╡╤Ç╤î╤Ä, ╨┐╨╛╨▓╨╖╤Ç╨╛╤ü╨╗╨╡╨▓, ╤ü╤é╨░╨╗╨╕ ╨│╨╗╤â╨▒╨╛╨║╨╛ ╨╛╨▒╨╡╤ü╨┐╨╛╨║╨╛╨╡╨╜╤ï: ╨╛╨╜╨╕ ╨╜╨╡ ╨╝╨╛╨│╨╗╨╕ ╨▓╨╛╤ü╨┐╨╕╤é╤ï╨▓╨░╤é╤î ╤ü╨╛╨▒╤ü╤é╨▓╨╡╨╜╨╜╨╛╨╡ ╨┐╨╛╤é╨╛╨╝╤ü╤é╨▓╨╛, ╨╜╨╡╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╛╤é╨║╨░╨╖╤ï╨▓╨░╨╗╨╕╤ü╤î ╨║╨╛╤Ç╨╝╨╕╤é╤î ╤ü╨▓╨╛╨╕╤à ╨┤╨╡╤é╨╡╨╣ ╨│╤Ç╤â╨┤╤î╤Ä ╨╕╨╗╨╕ ╨┤╨░╨╢╨╡ ╨┐╤Ç╨╕╤ç╨╕╨╜╤Å╨╗╨╕ ╨╕╨╝ ╨▓╤Ç╨╡╨┤.\n\n╨á╨░╨▒╨╛╤é╨░ ╨Ñ╨░╤Ç╨╗╨╛╤â, ╤à╨╛╤é╤Å ╨╕ ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╤Ç╨╡╤ç╨╕╨▓╨░╤Å ╤ü ╤ì╤é╨╕╤ç╨╡╤ü╨║╨╛╨╣ ╤é╨╛╤ç╨║╨╕ ╨╖╤Ç╨╡╨╜╨╕╤Å ╨┐╨╛ ╤ü╨╡╨│╨╛╨┤╨╜╤Å╤ê╨╜╨╕╨╝ ╤ü╤é╨░╨╜╨┤╨░╤Ç╤é╨░╨╝, ╨┐╤Ç╨╡╨┤╨╛╤ü╤é╨░╨▓╨╕╨╗╨░ ╨╜╨╡╨╛╨┐╤Ç╨╛╨▓╨╡╤Ç╨╢╨╕╨╝╤ï╨╡ ╨┤╨╛╨║╨░╨╖╨░╤é╨╡╨╗╤î╤ü╤é╨▓╨░ ╤é╨╛╨│╨╛, ╤ç╤é╨╛ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╤ï╨╣ ╨║╨╛╨╝╤ä╨╛╤Ç╤é, ╨┐╤Ç╨╕╨║╨╛╤ü╨╜╨╛╨▓╨╡╨╜╨╕╤Å ╨╕ ╨▒╨╡╨╖╨╛╨┐╨░╤ü╨╜╨╛╤ü╤é╤î ╤é╨░╨║ ╨╢╨╡ ╨▓╨░╨╢╨╜╤ï ╨┤╨╗╤Å ╨╖╨┤╨╛╤Ç╨╛╨▓╨╛╨│╨╛ ╤Ç╨░╨╖╨▓╨╕╤é╨╕╤Å, ╨║╨░╨║ ╨╡╨┤╨░ ╨╕ ╨▓╨╛╨┤╨░.",
    "titleAz": "Harlow meymunlar─▒ v╔Ö sevgi ehtiyac─▒",
    "contentAz": "1950-60-c─▒ ill╔Örd╔Ö psixoloq Harri Harlou Viskonsin Universitetind╔Ö sevgi v╔Ö ba─ƒl─▒l─▒q anlay─▒┼ƒ─▒m─▒z─▒ h╔Ömi┼ƒ╔Ölik d╔Öyi┼ƒ╔Öc╔Ök t╔Öcr├╝b╔Öl╔Ör apard─▒. O vaxtlar, Watson kimi davran─▒┼ƒ├º─▒lar t╔Ör╔Öfind╔Ön ir╔Öli s├╝r├╝l╔Ön, ├╝st├╝nl├╝k t╔Ö┼ƒkil ed╔Ön fikir, k├╢rp╔Öl╔Örin analarla ilk n├╢vb╔Öd╔Ö qida t╔Ömin etdiyi ├╝├º├╝n ba─ƒlanmas─▒ idi.\n\nHarlou k├╢rp╔Ö rhesus meymunlar─▒n─▒ bioloji analar─▒ndan ay─▒raraq v╔Ö onlara iki surroqat \"ana\" ver╔Ör╔Ök bu f╔Örziyy╔Öy╔Ö qar┼ƒ─▒ ├º─▒xd─▒. Biri qida ┼ƒ├╝┼ƒ╔Ösi ╔Ölav╔Ö edilmi┼ƒ ├º─▒lpaq m╔Öftild╔Ön haz─▒rlanm─▒┼ƒd─▒. Dig╔Öri is╔Ö qida m╔Önb╔Öyi olmayan yum┼ƒaq terri par├ºadan haz─▒rlanm─▒┼ƒd─▒.\n\nDavran─▒┼ƒ├º─▒lar haql─▒ olsayd─▒lar, k├╢rp╔Öl╔Ör qida ver╔Ön tel anaya ├╝st├╝nl├╝k verm╔Öli idil╔Ör. Amma bel╔Ö olmad─▒.\n\nK├╢rp╔Ö meymunlar dem╔Ök olar ki, b├╝t├╝n vaxtlar─▒n─▒ yum┼ƒaq par├ºa anas─▒na yap─▒┼ƒaraq ke├ºirirdil╔Ör. Onlar qidaland─▒rmaq ├╝├º├╝n yaln─▒z q─▒sa m├╝dd╔Öt╔Ö tel anaya getdil╔Ör, sonra d╔Örhal par├ºa surroqat─▒na qay─▒td─▒lar. Mexanik h├╢r├╝m├º╔Ök v╔Ö ya dig╔Ör t╔Öhdidl╔Örd╔Ön qorxduqda, ├ºar╔Ösizc╔Ö yap─▒┼ƒaraq rahatl─▒q ├╝├º├╝n par├ºa anas─▒na qa├ºd─▒lar.\n\nDaha ├ºox izah ed╔Ön: yaln─▒z tel ana il╔Ö b├╢y├╝d├╝l╔Ön meymunlarda ciddi psixoloji probleml╔Ör yarand─▒. Onlar ir╔Öli-geri yell╔Önirdil╔Ör, depressiya ╔Ölam╔Ötl╔Öri g├╢st╔Örirdil╔Ör, aqressiv idil╔Ör v╔Ö dig╔Ör meymunlarla ├╝nsiyy╔Öt qurmaqda ├º╔Ötinlik ├º╔Ökirdil╔Ör. Paltarl─▒ anas─▒ olanlar, m├╝k╔Ömm╔Öl uy─ƒunla┼ƒmasalar da, emosional c╔Öh╔Ötd╔Ön ╔Öh╔Ömiyy╔Ötli d╔Ör╔Öc╔Öd╔Ö sa─ƒlam idil╔Ör.\n\nSonrak─▒ t╔Öcr├╝b╔Öl╔Ör g├╢st╔Ördi ki, ana il╔Ö h╔Ör c├╝r t╔Ömasdan m╔Öhrum olan meymunlar b├╢y├╝kl╔Ör kimi ├ºox narahat olurlar - ├╢z ├╢vladlar─▒n─▒ yeti┼ƒdir╔Ö bilmirl╔Ör, b╔Özil╔Öri s├╝d verm╔Ökd╔Ön boyun qa├º─▒r─▒r v╔Ö h╔Ötta k├╢rp╔Öl╔Örin╔Ö z╔Ör╔Ör verirdil╔Ör.\n\nHarlowun i┼ƒi, bug├╝nk├╝ standartlara g├╢r╔Ö etik c╔Öh╔Ötd╔Ön m├╝bahis╔Öli olsa da, emosional rahatl─▒─ƒ─▒n, toxunman─▒n v╔Ö t╔Öhl├╝k╔Ösizliyin sa─ƒlam inki┼ƒaf ├╝├º├╝n qida v╔Ö su q╔Öd╔Ör ╔Ösas oldu─ƒuna dair t╔Ökzibedilm╔Öz s├╝butlar t╔Öqdim etdi."
  },
  {
    "id": 6,
    "title": "The Marshmallow Test",
    "titleKa": "ßâ¢ßâÉßâáßâ¿ßâ¢ßâößâÜßâ¥ßâúßâí ßâóßâößâíßâóßâÿ",
    "chapterId": 10,
    "icon": "mdi:cookie-outline",
      }
    ]
  }
];

export const MEMORY_CARDS: MemoryCard[] = [
  {
    "id": 1,
    "term": "Psychology",
    "definition": "The scientific study of behavior and mental processes",
    "category": "Basics",
    "termRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å",
    "termAz": "Psixologiya",
    "definitionRu": "╨¥╨░╤â╤ç╨╜╨╛╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Å ╨╕ ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╤à ╨┐╤Ç╨╛╤å╨╡╤ü╤ü╨╛╨▓.",
    "definitionKa": "ßâÑßâ¬ßâößâòßâÿßâíßâÉ ßâôßâÉ ßâñßâíßâÿßâÑßâÿßâÖßâúßâáßâÿ ßâ₧ßâáßâ¥ßâ¬ßâößâíßâößâæßâÿßâí ßâ¢ßâößâ¬ßâ£ßâÿßâößâáßâúßâÜßâÿ ßâ¿ßâößâíßâ¼ßâÉßâòßâÜßâÉ",
    "definitionHy": "╒Ä╒í╓Ç╓ä╒½ ╓ç ╒┤╒┐╒í╒╛╒╕╓Ç ╒ú╒╕╓Ç╒«╒¿╒╢╒⌐╒í╓ü╒╢╒Ñ╓Ç╒½ ╒ú╒½╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "termKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ",
    "termHy": "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "definitionAz": "Davran─▒┼ƒ v╔Ö psixi prosesl╔Örin elmi t╔Ödqiqi"
  },
  {
    "id": 2,
    "term": "Neuron",
    "definition": "A nerve cell that transmits electrical and chemical signals",
    "category": "Biology",
    "termRu": "╨¥╨╡╨╣╤Ç╨╛╨╜",
    "termAz": "Neyron",
    "definitionRu": "╨¥╨╡╤Ç╨▓╨╜╨░╤Å ╨║╨╗╨╡╤é╨║╨░, ╨┐╨╡╤Ç╨╡╨┤╨░╤Ä╤ë╨░╤Å ╤ì╨╗╨╡╨║╤é╤Ç╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨╕ ╤à╨╕╨╝╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╤ü╨╕╨│╨╜╨░╨╗╤ï.",
    "definitionHy": "╒å╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒ó╒╗╒½╒╗, ╒╕╓Ç╒¿ ╓â╒╕╒¡╒í╒╢╓ü╒╕╓é╒┤ ╒º ╒º╒¼╒Ñ╒»╒┐╓Ç╒í╒»╒í╒╢ ╓ç ╓ä╒½╒┤╒½╒í╒»╒í╒╢ ╒í╒ª╒ñ╒í╒╢╒╖╒í╒╢╒╢╒Ñ╓Ç",
    "definitionKa": "ßâ£ßâößâáßâòßâúßâÜßâÿ ßâúßâ»ßâáßâößâôßâÿ, ßâáßâ¥ßâ¢ßâößâÜßâÿßâ¬ ßâÆßâÉßâôßâÉßâíßâ¬ßâößâ¢ßâí ßâößâÜßâößâÑßâóßâáßâúßâÜ ßâôßâÉ ßâÑßâÿßâ¢ßâÿßâúßâá ßâíßâÿßâÆßâ£ßâÉßâÜßâößâæßâí",
    "termKa": "ßâ£ßâößâÿßâáßâ¥ßâ£ßâÿ",
    "termHy": "╒å╒Ñ╒╡╓Ç╒╕╒╢",
    "definitionAz": "Elektrik v╔Ö kimy╔Övi siqnallar─▒ ├╢t├╝r╔Ön sinir h├╝ceyr╔Ösi"
  },
  {
    "id": 3,
    "term": "Classical Conditioning",
    "definition": "Learning through association of stimuli (Pavlov)",
    "category": "Learning",
    "termRu": "╨Ü╨╗╨░╤ü╤ü╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨║╨╛╨╜╨┤╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡",
    "termKa": "ßâÖßâÜßâÉßâíßâÿßâÖßâúßâáßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâáßâößâæßâÉ",
    "termHy": "╘┤╒í╒╜╒í╒»╒í╒╢ ╒»╒╕╒╢╒ñ╒½╓ü╒½╒╕╒╢╒Ñ╓Ç",
    "termAz": "Klassik kondisioner",
    "definitionHy": "╒ì╒╕╒╛╒╕╓Ç╒╕╓é╒┤ ╒ú╓Ç╒ú╒╝╒½╒╣╒╢╒Ñ╓Ç╒½ ╒┤╒½╒í╒╛╒╕╓Ç╒┤╒í╒╢ ╒┤╒½╒╗╒╕╓ü╒╕╒╛ (╒è╒í╒╛╒¼╒╕╒╛)",
    "definitionKa": "ßâíßâ¼ßâÉßâòßâÜßâÉ ßâíßâóßâÿßâ¢ßâúßâÜßâÿßâí ßâÉßâíßâ¥ßâ¬ßâÿßâÉßâ¬ßâÿßâÿßâí ßâÆßâûßâÿßâù (ßâ₧ßâÉßâòßâÜßâ¥ßâòßâÿ)",
    "definitionAz": "Q─▒c─▒qland─▒r─▒c─▒lar─▒n assosiasiyas─▒ vasit╔Ösil╔Ö ├╢yr╔Önm╔Ö (Pavlov)",
    "definitionRu": "╨₧╨▒╤â╤ç╨╡╨╜╨╕╨╡ ╤ç╨╡╤Ç╨╡╨╖ ╨░╤ü╤ü╨╛╤å╨╕╨░╤å╨╕╤Ä ╤ü╤é╨╕╨╝╤â╨╗╨╛╨▓ (╨ƒ╨░╨▓╨╗╨╛╨▓)"
  },
  {
    "id": 4,
    "term": "Operant Conditioning",
    "definition": "Learning through consequences: reinforcement and punishment (Skinner)",
    "category": "Learning",
    "termHy": "╘│╒╕╓Ç╒«╒╕╒▓ ╓à╒ñ╒í╓â╒╕╒¡╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "termKa": "ßâ¥ßâ₧ßâößâáßâÉßâ¬ßâÿßâúßâÜßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâáßâößâæßâÉ",
    "termAz": "Operant Kondisioner",
    "termRu": "╨₧╨┐╨╡╤Ç╨░╨╜╤é╨╜╨╛╨╡ ╨╛╨▒╤â╤ü╨╗╨╛╨▓╨╗╨╕╨▓╨░╨╜╨╕╨╡",
    "definitionRu": "╨₧╨▒╤â╤ç╨╡╨╜╨╕╨╡ ╤ç╨╡╤Ç╨╡╨╖ ╨┐╨╛╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╕╤Å: ╨┐╨╛╨┤╨║╤Ç╨╡╨┐╨╗╨╡╨╜╨╕╨╡ ╨╕ ╨╜╨░╨║╨░╨╖╨░╨╜╨╕╨╡ (╨í╨║╨╕╨╜╨╜╨╡╤Ç)",
    "definitionKa": "ßâíßâ¼ßâÉßâòßâÜßâÉ ßâ¿ßâößâôßâößâÆßâößâæßâÿßâí ßâ¢ßâößâ¿ßâòßâößâ¥ßâæßâÿßâù: ßâÆßâÉßâ£ßâ¢ßâóßâÖßâÿßâ¬ßâößâæßâÉ ßâôßâÉ ßâôßâÉßâíßâ»ßâÉ (ßâíßâÖßâÿßâ£ßâößâáßâÿ)",
    "definitionHy": "╒ì╒╕╒╛╒╕╓Ç╒╕╓é╒┤ ╒░╒Ñ╒┐╓ç╒í╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛. ╒í╒┤╓Ç╒í╒║╒╢╒ñ╒╕╓é╒┤ ╓ç ╒║╒í╒┐╒½╒¬ (Skinner)",
    "definitionAz": "N╔Ötic╔Öl╔Ör vasit╔Ösil╔Ö ├╢yr╔Önm╔Ök: g├╝cl╔Öndirm╔Ö v╔Ö c╔Öza (Skinner)"
  },
  {
    "id": 5,
    "term": "Hippocampus",
    "definition": "Brain structure essential for forming new long-term memories",
    "category": "Biology",
    "termRu": "╨ô╨╕╨┐╨┐╨╛╨║╨░╨╝╨┐",
    "termKa": "ßâ░ßâÿßâ₧ßâ¥ßâÖßâÉßâ¢ßâ₧ßâÿ",
    "termHy": "╒Ç╒½╒║╒╕╒»╒í╒┤╒║╒╕╓é╒╜",
    "definitionRu": "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨░ ╨╝╨╛╨╖╨│╨░ ╨╜╨╡╨╛╨▒╤à╨╛╨┤╨╕╨╝╨░ ╨┤╨╗╤Å ╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╨╜╨╕╤Å ╨╜╨╛╨▓╨╛╨╣ ╨┤╨╛╨╗╨│╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╨╛╨╣ ╨┐╨░╨╝╤Å╤é╨╕",
    "definitionKa": "ßâóßâòßâÿßâ£ßâÿßâí ßâíßâóßâáßâúßâÑßâóßâúßâáßâÉ ßâÉßâúßâ¬ßâÿßâÜßâößâæßâößâÜßâÿßâÉ ßâÉßâ«ßâÉßâÜßâÿ ßâÆßâáßâ½ßâößâÜßâòßâÉßâôßâÿßâÉßâ£ßâÿ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâñßâ¥ßâáßâ¢ßâÿßâáßâößâæßâÿßâíßâùßâòßâÿßâí",
    "definitionHy": "╒ê╓é╒▓╒Ñ╒▓╒½ ╒»╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒¿ ╒»╒í╓Ç╓ç╒╕╓Ç ╒º ╒╢╒╕╓Ç ╒Ñ╓Ç╒»╒í╓Ç╒í╒¬╒í╒┤╒»╒Ñ╒┐ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒▒╓ç╒í╒╛╒╕╓Ç╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç",
    "definitionAz": "Yeni uzunm├╝dd╔Ötli xatir╔Öl╔Örin formala┼ƒmas─▒ ├╝├º├╝n vacib olan beyin qurulu┼ƒu",
    "termAz": "Hipokampus"
  },
  {
    "id": 6,
    "term": "Cognitive Dissonance",
    "definition": "Discomfort from holding contradictory beliefs or attitudes",
    "category": "Social",
    "termRu": "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╨╣ ╨┤╨╕╤ü╤ü╨╛╨╜╨░╨╜╤ü",
    "termHy": "╒â╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╒ñ╒½╒╜╒╕╒╢╒í╒╢╒╜",
    "definitionRu": "╨ö╨╕╤ü╨║╨╛╨╝╤ä╨╛╤Ç╤é ╨╛╤é ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╤Ç╨╡╤ç╨╕╨▓╤ï╤à ╤â╨▒╨╡╨╢╨┤╨╡╨╜╨╕╨╣ ╨╕╨╗╨╕ ╨▓╨╖╨│╨╗╤Å╨┤╨╛╨▓.",
    "termKa": "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ ßâôßâÿßâíßâ¥ßâ£ßâÉßâ£ßâíßâÿ",
    "definitionKa": "ßâôßâÿßâíßâÖßâ¥ßâ¢ßâñßâ¥ßâáßâóßâÿ ßâúßâáßâùßâÿßâößâáßâùßâíßâÉßâ¼ßâÿßâ£ßâÉßâÉßâªßâ¢ßâôßâößâÆßâ¥ ßâáßâ¼ßâ¢ßâößâ£ßâÿßâí ßâÉßâ£ ßâôßâÉßâ¢ßâ¥ßâÖßâÿßâôßâößâæßâúßâÜßâößâæßâÿßâí ßâ¿ßâößâ£ßâÉßâáßâ⌐ßâúßâ£ßâößâæßâÿßâí ßâÆßâÉßâ¢ßâ¥",
    "definitionHy": "╘▒╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒░╒í╒»╒í╒╜╒í╒»╒í╒╢ ╒░╒í╒┤╒╕╒ª╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒»╒í╒┤ ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒┤╒╕╓é╒╢╓ä╒½ ╒║╒í╒┐╒│╒í╒╝╒╕╒╛",
    "definitionAz": "Ziddiyy╔Ötli inanclara v╔Ö ya m├╝nasib╔Öt╔Ö sahib olmaqdan narahatl─▒q",
    "termAz": "Koqnitiv dissonans"
  },
  {
    "id": 7,
    "term": "Maslow's Hierarchy",
    "definition": "Five-level model of motivation from basic needs to self-actualization",
    "category": "Motivation",
    "termAz": "Maslow iyerarxiyas─▒",
    "termHy": "╒ä╒í╒╜╒¼╒╕╒╕╓é╒½ ╒░╒½╒Ñ╓Ç╒í╓Ç╒¡╒½╒í",
    "termKa": "ßâ¢ßâÉßâíßâÜßâ¥ßâúßâí ßâÿßâößâáßâÉßâáßâÑßâÿßâÉ",
    "termRu": "╨ÿ╨╡╤Ç╨░╤Ç╤à╨╕╤Å ╨£╨░╤ü╨╗╨╛╤â",
    "definitionRu": "╨ƒ╤Å╤é╨╕╤â╤Ç╨╛╨▓╨╜╨╡╨▓╨░╤Å ╨╝╨╛╨┤╨╡╨╗╤î ╨╝╨╛╤é╨╕╨▓╨░╤å╨╕╨╕ ╨╛╤é ╨▒╨░╨╖╨╛╨▓╤ï╤à ╨┐╨╛╤é╤Ç╨╡╨▒╨╜╨╛╤ü╤é╨╡╨╣ ╨┤╨╛ ╤ü╨░╨╝╨╛╤Ç╨╡╨░╨╗╨╕╨╖╨░╤å╨╕╨╕",
    "definitionKa": "ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÿßâí ßâ«ßâúßâù ßâôßâ¥ßâ£ßâÿßâí ßâ¢ßâ¥ßâôßâößâÜßâÿ ßâ½ßâÿßâáßâÿßâùßâÉßâôßâÿ ßâ¢ßâ¥ßâùßâ«ßâ¥ßâòßâ£ßâÿßâÜßâößâæßâößâæßâÿßâôßâÉßâ£ ßâùßâòßâÿßâùßâáßâößâÉßâÜßâÿßâûßâÉßâ¬ßâÿßâÉßâ¢ßâôßâö",
    "definitionHy": "╒Ç╒½╒┤╒╢╒í╒»╒í╒╢ ╒»╒í╓Ç╒½╓ä╒╢╒Ñ╓Ç╒½╓ü ╒┤╒½╒╢╒╣╓ç ╒½╒╢╓ä╒╢╒í╒½╓Ç╒í╒»╒í╒╢╒í╓ü╒╕╓é╒┤ ╒┤╒╕╒┐╒½╒╛╒í╓ü╒½╒í╒╡╒½ ╒░╒½╒╢╒ú ╒┤╒í╒»╒í╓Ç╒ñ╒í╒»╒½ ╒┤╒╕╒ñ╒Ñ╒¼",
    "definitionAz": "╞Åsas ehtiyaclardan ├╢z├╝n├╝ h╔Öyata ke├ºirm╔Öy╔Ö q╔Öd╔Ör be┼ƒ s╔Öviyy╔Öli motivasiya modeli"
  },
  {
    "id": 8,
    "term": "Big Five (OCEAN)",
    "definition": "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
    "category": "Personality",
    "termKa": "ßâôßâÿßâôßâÿ ßâ«ßâúßâùßâößâúßâÜßâÿ (OCEAN)",
    "termHy": "╒ä╒Ñ╒« ╒░╒╢╒ú╒╡╒í╒» (OCEAN)",
    "termRu": "╨æ╨╛╨╗╤î╤ê╨░╤Å ╨┐╤Å╤é╨╡╤Ç╨║╨░ (╨₧╨Ü╨ò╨É╨¥)",
    "termAz": "B├╢y├╝k be┼ƒlik (OCEAN)",
    "definitionRu": "╨₧╤é╨║╤Ç╤ï╤é╨╛╤ü╤é╤î, ╨ö╨╛╨▒╤Ç╨╛╤ü╨╛╨▓╨╡╤ü╤é╨╜╨╛╤ü╤é╤î, ╨¡╨║╤ü╤é╤Ç╨░╨▓╨╡╤Ç╤ü╨╕╤Å, ╨ö╨╛╨▒╤Ç╨╛╨╢╨╡╨╗╨░╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╤î, ╨¥╨╡╨▓╤Ç╨╛╤é╨╕╨╖╨╝.",
    "definitionHy": "╘▓╒í╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒ó╒í╓Ç╒Ñ╒¡╒½╒▓╒│╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒º╓ä╒╜╒┐╓Ç╒í╒╛╒Ñ╓Ç╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒░╒í╒┤╒í╒▒╒í╒╡╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒╢╓ç╓Ç╒╕╒┐╒½╒ª╒┤",
    "definitionKa": "ßâªßâÿßâÉßâ¥ßâæßâÉ, ßâÖßâößâùßâÿßâÜßâíßâÿßâ£ßâôßâÿßâíßâÿßâößâáßâößâæßâÉ, ßâößâÑßâíßâóßâáßâÉßâòßâößâáßâíßâÿßâÉ, ßâùßâÉßâ£ßâ«ßâ¢ßâ¥ßâæßâÉ, ßâ£ßâößâòßâáßâ¥ßâóßâÿßâûßâ¢ßâÿ",
    "definitionAz": "A├º─▒ql─▒q, Vicdanl─▒l─▒q, Ekstraversiya, Uy─ƒunluq, Nevrotiklik"
  },
  {
    "id": 9,
    "term": "Attachment Theory",
    "definition": "The bond between infant and caregiver shaping later relationships",
    "category": "Development",
    "definitionRu": "╨í╨▓╤Å╨╖╤î ╨╝╨╡╨╢╨┤╤â ╨╝╨╗╨░╨┤╨╡╨╜╤å╨╡╨╝ ╨╕ ╨╗╨╕╤å╨╛╨╝, ╨╛╤ü╤â╤ë╨╡╤ü╤é╨▓╨╗╤Å╤Ä╤ë╨╕╨╝ ╤â╤à╨╛╨┤, ╤ä╨╛╤Ç╨╝╨╕╤Ç╤â╨╡╤é ╨┤╨░╨╗╤î╨╜╨╡╨╣╤ê╨╕╨╡ ╨╛╤é╨╜╨╛╤ê╨╡╨╜╨╕╤Å",
    "termRu": "╨ó╨╡╨╛╤Ç╨╕╤Å ╨┐╤Ç╨╕╨▓╤Å╨╖╨░╨╜╨╜╨╛╤ü╤é╨╕",
    "termKa": "ßâ¢ßâÿßâ¢ßâÉßâÆßâáßâößâæßâÿßâí ßâùßâößâ¥ßâáßâÿßâÉ",
    "termHy": "╘┐╓ü╒╛╒í╒«╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "definitionHy": "╘╡╓Ç╒Ñ╒¡╒í╒╡╒½ ╓ç ╒¡╒╢╒í╒┤╒╕╒▓╒½ ╒┤╒½╒╗╓ç ╒»╒í╒║╒¿ ╒▒╓ç╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒º ╒░╒Ñ╒┐╒í╒ú╒í ╒░╒í╓Ç╒í╒ó╒Ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿",
    "definitionKa": "ßâÖßâÉßâòßâ¿ßâÿßâáßâÿ ßâÉßâ«ßâÉßâÜßâ¿ßâ¥ßâæßâÿßâÜßâíßâÉ ßâôßâÉ ßâ¢ßâ¥ßâ¢ßâòßâÜßâößâÜßâí ßâ¿ßâ¥ßâáßâÿßâí ßâÉßâºßâÉßâÜßâÿßâæßâößâæßâí ßâ¿ßâößâ¢ßâôßâÆßâ¥ßâ¢ ßâúßâáßâùßâÿßâößâáßâùßâ¥ßâæßâößâæßâí",
    "termAz": "Qo┼ƒma n╔Öz╔Öriyy╔Ösi",
    "definitionAz": "K├╢rp╔Ö v╔Ö bax─▒c─▒ aras─▒ndak─▒ ╔Ölaq╔Ö sonrak─▒ m├╝nasib╔Ötl╔Öri formala┼ƒd─▒r─▒r"
  },
  {
    "id": 10,
    "term": "Confirmation Bias",
    "definition": "Tendency to seek information that supports existing beliefs",
    "category": "Cognition",
    "termRu": "╨ƒ╤Ç╨╡╨┤╨▓╨╖╤Å╤é╨╛╤ü╤é╤î ╨┐╨╛╨┤╤é╨▓╨╡╤Ç╨╢╨┤╨╡╨╜╨╕╤Å",
    "definitionRu": "╨í╨║╨╗╨╛╨╜╨╜╨╛╤ü╤é╤î ╨╕╤ü╨║╨░╤é╤î ╨╕╨╜╤ä╨╛╤Ç╨╝╨░╤å╨╕╤Ä, ╨║╨╛╤é╨╛╤Ç╨░╤Å ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨╕╨▓╨░╨╡╤é ╤ü╤â╤ë╨╡╤ü╤é╨▓╤â╤Ä╤ë╨╕╨╡ ╤â╨▒╨╡╨╢╨┤╨╡╨╜╨╕╤Å.",
    "termKa": "ßâôßâÉßâôßâÉßâíßâóßâúßâáßâößâæßâÿßâí ßâ¢ßâÿßâÖßâößâáßâ½ßâ¥ßâößâæßâÉ",
    "termHy": "╒Ç╒í╒╜╒┐╒í╒┐╒┤╒í╒╢ ╒»╒╕╒▓╒┤╒╢╒í╒»╒í╒¼╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "definitionKa": "ßâóßâößâ£ßâôßâößâ£ßâ¬ßâÿßâÉ ßâ¢ßâ¥ßâÿßâ½ßâÿßâ¥ßâí ßâÿßâ£ßâñßâ¥ßâáßâ¢ßâÉßâ¬ßâÿßâÉ, ßâáßâ¥ßâ¢ßâößâÜßâÿßâ¬ ßâ¢ßâ«ßâÉßâáßâí ßâúßâ¡ßâößâáßâí ßâÉßâáßâíßâößâæßâúßâÜ ßâáßâ¼ßâ¢ßâößâ£ßâÉßâí",
    "definitionHy": "╘│╒╕╒╡╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╕╓é╒╢╒Ñ╓ü╒╕╒▓ ╒░╒í╒┤╒╕╒ª╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒░╒í╒╜╒┐╒í╒┐╒╕╒▓ ╒┐╒Ñ╒▓╒Ñ╒»╒í╒┐╒╛╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓â╒╢╒┐╓Ç╒Ñ╒¼╒╕╓é ╒┤╒½╒┐╒╕╓é╒┤",
    "termAz": "T╔Ösdiq q╔Ör╔Özi",
    "definitionAz": "M├╢vcud inanclar─▒ d╔Öst╔Ökl╔Öy╔Ön m╔Ölumat axtarmaq meyli"
  },
  {
    "id": 11,
    "term": "Dopamine",
    "definition": "Neurotransmitter involved in reward, motivation, and pleasure",
    "category": "Biology",
    "termKa": "ßâôßâ¥ßâñßâÉßâ¢ßâÿßâ£ßâÿ",
    "termRu": "╨ö╨╛╤ä╨░╨╝╨╕╨╜",
    "termAz": "Dopamin",
    "termHy": "╘┤╒╕╒║╒í╒┤╒½╒╢",
    "definitionRu": "╨¥╨╡╨╣╤Ç╨╛╨╝╨╡╨┤╨╕╨░╤é╨╛╤Ç, ╤â╤ç╨░╤ü╤é╨▓╤â╤Ä╤ë╨╕╨╣ ╨▓ ╨▓╨╛╨╖╨╜╨░╨│╤Ç╨░╨╢╨┤╨╡╨╜╨╕╨╕, ╨╝╨╛╤é╨╕╨▓╨░╤å╨╕╨╕ ╨╕ ╤â╨┤╨╛╨▓╨╛╨╗╤î╤ü╤é╨▓╨╕╨╕.",
    "definitionKa": "ßâ£ßâößâÿßâáßâ¥ßâóßâáßâÉßâ£ßâíßâ¢ßâÿßâóßâößâáßâÿ ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâ¥ßâæßâí ßâ»ßâÿßâÜßâôßâ¥ßâ¿ßâÿ, ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÉßâ¿ßâÿ ßâôßâÉ ßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâößâæßâÉßâ¿ßâÿ",
    "definitionHy": "╒å╒Ñ╒╡╓Ç╒╕╒░╒í╒▓╒╕╓Ç╒ñ╒½╒╣╒¿ ╒╢╒Ñ╓Ç╒ú╓Ç╒í╒╛╒╛╒í╒« ╒º ╒║╒í╓Ç╒ú╓ç╒í╒┐╓Ç╒┤╒í╒╢, ╒┤╒╕╒┐╒½╒╛╒í╓ü╒½╒í╒╡╒½ ╓ç ╒░╒í╒│╒╕╓é╒╡╓ä╒½ ╒┤╒Ñ╒╗",
    "definitionAz": "M├╝kafat, motivasiya v╔Ö h╔Özzd╔Ö i┼ƒtirak ed╔Ön neyrotransmitter"
  },
  {
    "id": 12,
    "term": "REM Sleep",
    "definition": "Sleep stage with rapid eye movements and vivid dreaming",
    "category": "Consciousness",
    "termRu": "╨æ╤ï╤ü╤é╤Ç╤ï╨╣ ╤ü╨╛╨╜",
    "termKa": "REM ßâ½ßâÿßâÜßâÿ",
    "termHy": "REM ╓ä╒╕╓é╒╢",
    "definitionKa": "ßâ½ßâÿßâÜßâÿßâí ßâößâóßâÉßâ₧ßâÿ ßâùßâòßâÉßâÜßâÿßâí ßâíßâ¼ßâáßâÉßâñßâÿ ßâ¢ßâ¥ßâ½ßâáßâÉßâ¥ßâæßâÿßâù ßâôßâÉ ßâ£ßâÉßâùßâößâÜßâÿ ßâ¥ßâ¬ßâ£ßâößâæßâößâæßâÿßâù",
    "definitionHy": "╒ö╒╢╒½ ╓â╒╕╓é╒¼╒¥ ╒í╒╣╓ä╒Ñ╓Ç╒½ ╒í╓Ç╒í╒ú ╒╖╒í╓Ç╒¬╒╕╓é╒┤╒╢╒Ñ╓Ç╒╕╒╛ ╓ç ╒╛╒í╒╝ ╒Ñ╓Ç╒í╒ª╒╢╒Ñ╓Ç╒╕╒╛",
    "definitionRu": "╨í╤é╨░╨┤╨╕╤Å ╤ü╨╜╨░ ╤ü ╨▒╤ï╤ü╤é╤Ç╤ï╨╝╨╕ ╨┤╨▓╨╕╨╢╨╡╨╜╨╕╤Å╨╝╨╕ ╨│╨╗╨░╨╖ ╨╕ ╤Å╤Ç╨║╨╕╨╝╨╕ ╤ü╨╜╨╛╨▓╨╕╨┤╨╡╨╜╨╕╤Å╨╝╨╕.",
    "termAz": "REM yuxusu",
    "definitionAz": "S├╝r╔Ötli g├╢z h╔Ör╔Ök╔Ötl╔Öri v╔Ö canl─▒ yuxu il╔Ö yuxu m╔Örh╔Öl╔Ösi"
  },
  {
    "id": 13,
    "term": "Bystander Effect",
    "definition": "Less likely to help when others are present",
    "category": "Social",
    "definitionKa": "ßâ£ßâÉßâÖßâÜßâößâæßâÉßâô ßâíßâÉßâòßâÉßâáßâÉßâúßâôßâ¥ßâÉ, ßâáßâ¥ßâ¢ ßâôßâÉßâößâ«ßâ¢ßâÉßâáßâ¥ßâí, ßâáßâ¥ßâôßâößâíßâÉßâ¬ ßâíßâ«ßâòßâößâæßâÿ ßâÉßâáßâÿßâÉßâ£",
    "definitionHy": "╘▒╒╛╒Ñ╒¼╒½ ╓ä╒½╒╣ ╒░╒í╒╛╒í╒╢╒í╒»╒í╒╢ ╒º ╓à╒ú╒╢╒Ñ╒¼, ╒Ñ╓Ç╒ó ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒¿ ╒╢╒Ñ╓Ç╒»╒í ╒Ñ╒╢",
    "definitionAz": "Ba┼ƒqalar─▒ olduqda k├╢m╔Ök etm╔Ök ehtimal─▒ azd─▒r",
    "termHy": "Bystander Effect",
    "termKa": "Bystander Effect",
    "termRu": "╨¡╤ä╤ä╨╡╨║╤é ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╤Å",
    "definitionRu": "╨£╨╡╨╜╤î╤ê╨╡ ╤ê╨░╨╜╤ü╨╛╨▓ ╨┐╨╛╨╝╨╛╤ç╤î, ╨║╨╛╨│╨┤╨░ ╨┐╤Ç╨╕╤ü╤â╤é╤ü╤é╨▓╤â╤Ä╤é ╨┤╤Ç╤â╨│╨╕╨╡",
    "termAz": "Bax─▒c─▒ Effekti"
  },
  {
    "id": 14,
    "term": "Placebo Effect",
    "definition": "Improvement from belief in treatment rather than treatment itself",
    "category": "Research",
    "termRu": "╨¡╤ä╤ä╨╡╨║╤é ╨┐╨╗╨░╤å╨╡╨▒╨╛",
    "termHy": "╒è╒¼╒í╓ü╒Ñ╒ó╒╕╒╡╒½ ╒º╓å╒Ñ╒»╒┐",
    "termKa": "ßâ₧ßâÜßâÉßâ¬ßâößâæßâ¥ßâí ßâößâñßâößâÑßâóßâÿ",
    "definitionHy": "╘▓╒╕╓é╒¬╒┤╒í╒╢ ╒╢╒»╒í╒┐╒┤╒í╒┤╒ó ╒░╒í╒╛╒í╒┐╓ä╒½ ╒ó╒í╓Ç╒Ñ╒¼╒í╒╛╒╕╓é╒┤, ╒í╒╡╒¼ ╒╕╒╣ ╒⌐╒Ñ ╒½╒╢╓ä╒╢╒½╒╢ ╒ó╒╕╓é╒¬╒┤╒í╒╢",
    "definitionKa": "ßâÆßâÉßâúßâ¢ßâ»ßâ¥ßâæßâößâíßâößâæßâÉ ßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâæßâÿßâíßâÉßâôßâ¢ßâÿ ßâáßâ¼ßâ¢ßâößâ£ßâÿßâíßâÆßâÉßâ£ ßâôßâÉ ßâÉßâáßâÉ ßâùßâÉßâòßâÉßâô ßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâæßâÿßâí ßâ¢ßâÿßâ¢ßâÉßâáßâù",
    "definitionRu": "╨ú╨╗╤â╤ç╤ê╨╡╨╜╨╕╨╡ ╨╛╤é ╨▓╨╡╤Ç╤ï ╨▓ ╨╗╨╡╤ç╨╡╨╜╨╕╨╡, ╨░ ╨╜╨╡ ╨╛╤é ╤ü╨░╨╝╨╛╨│╨╛ ╨╗╨╡╤ç╨╡╨╜╨╕╤Å",
    "termAz": "Plasebo effekti",
    "definitionAz": "M├╝alic╔Önin ├╢z├╝nd╔Ön ├ºox m├╝alic╔Öy╔Ö inamdan ir╔Öli g╔Öl╔Ön t╔Ökmill╔Ö┼ƒdirm╔Ö"
  },
  {
    "id": 15,
    "term": "Schema",
    "definition": "Mental framework for organizing and interpreting information",
    "category": "Cognition",
    "termRu": "╨í╤à╨╡╨╝╨░",
    "termHy": "╒ì╒¡╒Ñ╒┤╒í╒╢",
    "termKa": "ßâíßâÑßâößâ¢ßâÉ",
    "definitionRu": "╨£╨╡╨╜╤é╨░╨╗╤î╨╜╨░╤Å ╨╛╤ü╨╜╨╛╨▓╨░ ╨┤╨╗╤Å ╨╛╤Ç╨│╨░╨╜╨╕╨╖╨░╤å╨╕╨╕ ╨╕ ╨╕╨╜╤é╨╡╤Ç╨┐╤Ç╨╡╤é╨░╤å╨╕╨╕ ╨╕╨╜╤ä╨╛╤Ç╨╝╨░╤å╨╕╨╕",
    "definitionHy": "╒Å╒Ñ╒▓╒Ñ╒»╒í╒┐╒╛╒╕╓é╒⌐╒╡╒í╒╢ ╒»╒í╒ª╒┤╒í╒»╒Ñ╓Ç╒║╒┤╒í╒╢ ╓ç ╒┤╒Ñ╒»╒╢╒í╒ó╒í╒╢╒┤╒í╒╢ ╒┤╒┐╒í╒╛╒╕╓Ç ╒╖╓Ç╒╗╒í╒╢╒í╒»",
    "definitionKa": "ßâÿßâ£ßâñßâ¥ßâáßâ¢ßâÉßâ¬ßâÿßâÿßâí ßâ¥ßâáßâÆßâÉßâ£ßâÿßâûßâößâæßâÿßâíßâÉ ßâôßâÉ ßâÿßâ£ßâóßâößâáßâ₧ßâáßâößâóßâÉßâ¬ßâÿßâÿßâí ßâÆßâ¥ßâ£ßâößâæßâáßâÿßâòßâÿ ßâ⌐ßâÉßâáßâ⌐ßâ¥",
    "termAz": "Sxem",
    "definitionAz": "M╔Ölumat─▒ t╔Ö┼ƒkil etm╔Ök v╔Ö ┼ƒ╔Örh etm╔Ök ├╝├º├╝n zehni ├º╔Ör├ºiv╔Ö"
  },
  {
    "id": 16,
    "term": "Amygdala",
    "definition": "Brain structure for processing emotions, especially fear",
    "category": "Biology",
    "termKa": "ßâÉßâ¢ßâÿßâÆßâôßâÉßâÜßâÉ",
    "definitionRu": "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨░ ╨╝╨╛╨╖╨│╨░ ╨┤╨╗╤Å ╨╛╨▒╤Ç╨░╨▒╨╛╤é╨║╨╕ ╤ì╨╝╨╛╤å╨╕╨╣, ╨╛╤ü╨╛╨▒╨╡╨╜╨╜╨╛ ╤ü╤é╤Ç╨░╤à╨░",
    "termHy": "╘▒╒┤╒½╒ú╒ñ╒í╒¼╒í",
    "termRu": "╨£╨╕╨╜╨┤╨░╨╗╨╡╨▓╨╕╨┤╨╜╨╛╨╡ ╤é╨╡╨╗╨╛",
    "definitionHy": "╒ê╓é╒▓╒Ñ╒▓╒½ ╒»╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒¿ ╒░╒╕╓é╒╡╒ª╒Ñ╓Ç╒½, ╒░╒í╒┐╒»╒í╒║╒Ñ╒╜ ╒╛╒í╒¡╒½ ╒┤╒╖╒í╒»╒┤╒í╒╢ ╒░╒í╒┤╒í╓Ç",
    "definitionKa": "ßâóßâòßâÿßâ£ßâÿßâí ßâíßâóßâáßâúßâÑßâóßâúßâáßâÉ ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿßâí, ßâÆßâÉßâ£ßâíßâÉßâÖßâúßâùßâáßâößâæßâÿßâù ßâ¿ßâÿßâ¿ßâÿßâí ßâôßâÉßâíßâÉßâ¢ßâúßâ¿ßâÉßâòßâößâæßâÜßâÉßâô",
    "termAz": "Amigdala",
    "definitionAz": "Duy─ƒular─▒n, x├╝sus╔Ön d╔Ö qorxunun i┼ƒl╔Önm╔Ösi ├╝├º├╝n beyin qurulu┼ƒu"
  },
  {
    "id": 17,
    "term": "Self-Efficacy",
    "definition": "Belief in your ability to succeed at specific tasks (Bandura)",
    "category": "Personality",
    "definitionRu": "╨Æ╨╡╤Ç╨░ ╨▓ ╤ü╨▓╨╛╤Ä ╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨┤╨╛╨▒╨╕╤é╤î╤ü╤Å ╤â╤ü╨┐╨╡╤à╨░ ╨▓ ╨▓╤ï╨┐╨╛╨╗╨╜╨╡╨╜╨╕╨╕ ╨║╨╛╨╜╨║╤Ç╨╡╤é╨╜╤ï╤à ╨╖╨░╨┤╨░╤ç (╨æ╨░╨╜╨┤╤â╤Ç╨░)",
    "termRu": "╨í╨░╨╝╨╛╤ì╤ä╤ä╨╡╨║╤é╨╕╨▓╨╜╨╛╤ü╤é╤î",
    "definitionHy": "╒Ç╒í╒╛╒í╒┐╓ä ╒»╒╕╒╢╒»╓Ç╒Ñ╒┐ ╒í╒╝╒í╒╗╒í╒ñ╓Ç╒í╒╢╓ä╒╢╒Ñ╓Ç╒╕╓é╒┤ ╒░╒í╒╗╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒╜╒╢╒Ñ╒¼╒╕╓é ╒▒╒Ñ╓Ç ╒╕╓é╒╢╒í╒»╒╕╓é╒⌐╒╡╒í╒╢╒¿ (╘▓╒í╒╢╒ñ╒╕╓é╓Ç╒í)",
    "definitionKa": "ßâáßâ¼ßâ¢ßâößâ£ßâÉ ßâÖßâ¥ßâ£ßâÖßâáßâößâóßâúßâÜ ßâÉßâ¢ßâ¥ßâ¬ßâÉßâ£ßâößâæßâ¿ßâÿ ßâ¼ßâÉßâáßâ¢ßâÉßâóßâößâæßâÿßâí ßâ¢ßâÿßâíßâÉßâªßâ¼ßâößâòßâÉßâô (ßâæßâÉßâ£ßâôßâúßâáßâÉ)",
    "termKa": "ßâùßâòßâÿßâùßâößâñßâößâÑßâóßâúßâáßâ¥ßâæßâÉ",
    "termHy": "╘╗╒╢╓ä╒╢╒í╓Ç╒ñ╒╡╒╕╓é╒╢╒í╒╛╒Ñ╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "termAz": "├ûz-├╢z├╝n╔Ö effektivlik",
    "definitionAz": "M├╝╔Öyy╔Ön tap┼ƒ─▒r─▒qlarda u─ƒur qazanmaq qabiliyy╔Ötin╔Ö inam (Bandura)"
  },
  {
    "id": 18,
    "term": "Learned Helplessness",
    "definition": "Giving up after repeated failures even when escape is possible",
    "category": "Motivation",
    "termRu": "╨Æ╤ï╤â╤ç╨╡╨╜╨╜╨░╤Å ╨▒╨╡╤ü╨┐╨╛╨╝╨╛╤ë╨╜╨╛╤ü╤é╤î",
    "definitionKa": "ßâÆßâÉßâ£ßâ¢ßâößâ¥ßâáßâößâæßâÿßâùßâÿ ßâ¼ßâÉßâáßâúßâ¢ßâÉßâóßâößâæßâÜßâ¥ßâæßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ ßâôßâÉßâ£ßâößâæßâößâæßâÉ ßâ¢ßâÉßâ¿ßâÿßâ£ßâÉßâ¬ ßâÖßâÿ, ßâáßâ¥ßâ¬ßâÉ ßâÆßâÉßâÑßâ¬ßâößâòßâÉ ßâ¿ßâößâíßâÉßâ½ßâÜßâößâæßâößâÜßâÿßâÉ",
    "definitionHy": "╘┐╓Ç╒»╒╢╒╛╒╕╒▓ ╒í╒╢╒░╒í╒╗╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½╓ü ╒░╒Ñ╒┐╒╕ ╒░╒í╒╢╒▒╒╢╒╛╒Ñ╒¼╒¿, ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒Ñ╓Ç╒ó ╒░╒╢╒í╓Ç╒í╒╛╒╕╓Ç ╒º ╓â╒í╒¡╒╕╓é╒╜╒┐╒¿",
    "termKa": "ßâÿßâíßâ¼ßâÉßâòßâÜßâÉ ßâúßâ¢ßâ¼ßâößâ¥ßâæßâÉ",
    "termHy": "╒ì╒╕╒╛╒╕╓Ç╒í╒« ╒í╒╢╓à╒ú╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "definitionRu": "╨í╨┤╨░╨▓╨░╤é╤î╤ü╤Å ╨┐╨╛╤ü╨╗╨╡ ╨┐╨╛╨▓╤é╨╛╤Ç╤Å╤Ä╤ë╨╕╤à╤ü╤Å ╨╜╨╡╤â╨┤╨░╤ç, ╨┤╨░╨╢╨╡ ╨╡╤ü╨╗╨╕ ╨┐╨╛╨▒╨╡╨│ ╨▓╨╛╨╖╨╝╨╛╨╢╨╡╨╜",
    "termAz": "├çar╔Ösizliyi ├╢yr╔Öndi",
    "definitionAz": "Qa├ºmaq m├╝mk├╝n olsa bel╔Ö, t╔Ökrarlanan u─ƒursuzluqlardan sonra t╔Öslim olmaq"
  },
  {
    "id": 19,
    "term": "Transference",
    "definition": "Redirecting feelings about one person onto the therapist",
    "category": "Therapy",
    "definitionKa": "ßâößâáßâùßâÿ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâÿßâí ßâ¢ßâÿßâ¢ßâÉßâáßâù ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâæßâÿßâí ßâÆßâÉßâôßâÉßâ¢ßâÿßâíßâÉßâ¢ßâÉßâáßâùßâößâæßâÉ ßâùßâößâáßâÉßâ₧ßâößâòßâóßâûßâö",
    "termKa": "ßâÆßâÉßâôßâÉßâ¬ßâößâ¢ßâÉ",
    "termHy": "╒ô╒╕╒¡╒í╒╢╓ü╒╕╓é╒┤",
    "termRu": "╨┐╨╡╤Ç╨╡╨╜╨╛╤ü",
    "definitionRu": "╨ƒ╨╡╤Ç╨╡╨╜╨░╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╤ç╤â╨▓╤ü╤é╨▓ ╨║ ╨╛╨┤╨╜╨╛╨╝╤â ╤ç╨╡╨╗╨╛╨▓╨╡╨║╤â ╨╜╨░ ╤é╨╡╤Ç╨░╨┐╨╡╨▓╤é╨░",
    "termAz": "K├╢├º├╝rm╔Ö",
    "definitionHy": "╒ä╒Ñ╒» ╒í╒╢╒▒╒½ ╒┤╒í╒╜╒½╒╢ ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒╛╒Ñ╓Ç╒í╒░╒▓╒╕╓é╒┤ ╒⌐╒Ñ╓Ç╒í╒║╓ç╒┐╒½ ╒╛╓Ç╒í",
    "definitionAz": "Bir ┼ƒ╔Öxs haqq─▒nda hissl╔Öri terapevt╔Ö y├╢nl╔Öndirm╔Ök"
  },
  {
    "id": 20,
    "term": "Heuristic",
    "definition": "Mental shortcut for quick decisions that can lead to errors",
    "category": "Cognition",
    "definitionKa": "ßâÆßâ¥ßâ£ßâößâæßâáßâÿßâòßâÿ ßâ¢ßâÉßâÜßâíßâÉßâ«ßâ¢ßâ¥ßâæßâÿ ßâíßâ¼ßâáßâÉßâñßâÿ ßâÆßâÉßâôßâÉßâ¼ßâºßâòßâößâóßâÿßâÜßâößâæßâÿßâí ßâ¢ßâÿßâíßâÉßâªßâößâæßâÉßâô, ßâáßâÉßâ¢ßâÉßâ¬ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâÆßâÉßâ¢ßâ¥ßâÿßâ¼ßâòßâÿßâ¥ßâí ßâ¿ßâößâ¬ßâôßâ¥ßâ¢ßâößâæßâÿ",
    "definitionHy": "╒ä╒┐╒í╒╛╒╕╓Ç ╒ñ╒╡╒╕╓é╓Ç╒í╒╢╓ü╒╕╓é╒┤ ╒í╓Ç╒í╒ú ╒╕╓Ç╒╕╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç, ╒╕╓Ç╒╕╒╢╓ä ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒░╒í╒╢╒ú╒Ñ╓ü╒╢╒Ñ╒¼ ╒╜╒¡╒í╒¼╒╢╒Ñ╓Ç╒½",
    "termHy": "╘╖╒╛╓Ç╒½╒╜╒┐╒½╒»",
    "termKa": "ßâößâòßâáßâÿßâíßâóßâÿßâÖßâúßâÜßâÿ",
    "termRu": "╤ì╨▓╤Ç╨╕╤ü╤é╨╕╨║╨░",
    "definitionRu": "╨£╨╡╨╜╤é╨░╨╗╤î╨╜╤ï╨╣ ╤Å╤Ç╨╗╤ï╨║ ╨┤╨╗╤Å ╨▒╤ï╤ü╤é╤Ç╤ï╤à ╤Ç╨╡╤ê╨╡╨╜╨╕╨╣, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╝╨╛╨│╤â╤é ╨┐╤Ç╨╕╨▓╨╡╤ü╤é╨╕ ╨║ ╨╛╤ê╨╕╨▒╨║╨░╨╝",
    "definitionAz": "S╔Öhvl╔Ör╔Ö s╔Öb╔Öb ola bil╔Öc╔Ök s├╝r╔Ötli q╔Örarlar ├╝├º├╝n zehni q─▒sa yol",
    "termAz": "Evristik"
  },
  {
    "id": 21,
    "term": "Synapse",
    "definition": "The gap between neurons where neurotransmitters cross",
    "category": "Biology",
    "termAz": "Sinaps",
    "termRu": "╨í╨╕╨╜╨░╨┐╤ü",
    "termKa": "ßâíßâÿßâ£ßâÉßâñßâíßâÿ",
    "termHy": "╒ì╒½╒╢╒í╒║╒╜",
    "definitionKa": "ßâúßâñßâíßâÖßâáßâúßâÜßâÿ ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâí ßâ¿ßâ¥ßâáßâÿßâí, ßâíßâÉßâôßâÉßâ¬ ßâ£ßâößâÿßâáßâ¥ßâóßâáßâÉßâ£ßâíßâ¢ßâÿßâóßâößâáßâößâæßâÿ ßâÖßâòßâößâùßâößâ£",
    "definitionHy": "╒å╒Ñ╒╡╓Ç╒╕╒╢╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╓ç ╒¿╒╢╒»╒í╒« ╒ó╒í╓ü╒¿, ╒╕╓Ç╒┐╒Ñ╒▓ ╒í╒╢╓ü╒╢╒╕╓é╒┤ ╒Ñ╒╢ ╒╢╒Ñ╒╡╓Ç╒╕╒░╒í╒▓╒╕╓Ç╒ñ╒½╒╣╒╢╒Ñ╓Ç╒¿",
    "definitionRu": "╨ù╨░╨╖╨╛╤Ç ╨╝╨╡╨╢╨┤╤â ╨╜╨╡╨╣╤Ç╨╛╨╜╨░╨╝╨╕, ╨│╨┤╨╡ ╨┐╨╡╤Ç╨╡╤ü╨╡╨║╨░╤Ä╤é╤ü╤Å ╨╜╨╡╨╣╤Ç╨╛╤é╤Ç╨░╨╜╤ü╨╝╨╕╤é╤é╨╡╤Ç╤ï",
    "definitionAz": "Neyrotransmitterl╔Örin ke├ºdiyi neyronlar aras─▒ndak─▒ bo┼ƒluq"
  },
  {
    "id": 22,
    "term": "Extinction",
    "definition": "Weakening of conditioned response when reinforcement stops",
    "category": "Learning",
    "termRu": "╨Æ╤ï╨╝╨╕╤Ç╨░╨╜╨╕╨╡",
    "termAz": "Yox olma",
    "definitionKa": "ßâÆßâÉßâ£ßâ₧ßâÿßâáßâ¥ßâæßâößâæßâúßâÜßâÿ ßâ₧ßâÉßâíßâúßâ«ßâÿßâí ßâ¿ßâößâíßâúßâíßâóßâößâæßâÉ, ßâáßâ¥ßâôßâößâíßâÉßâ¬ ßâÆßâÉßâ½ßâÜßâÿßâößâáßâößâæßâÉ ßâ⌐ßâößâáßâôßâößâæßâÉ",
    "definitionHy": "╒è╒í╒╡╒┤╒í╒╢╒í╒╛╒╕╓Ç╒╛╒í╒« ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒½ ╒⌐╒╕╓é╒¼╒í╓ü╒╕╓é╒┤, ╒Ñ╓Ç╒ó ╒í╒┤╓Ç╒í╒║╒╢╒ñ╒╕╓é╒┤╒¿ ╒ñ╒í╒ñ╒í╓Ç╒╕╓é╒┤ ╒º",
    "termKa": "ßâÆßâÉßâôßâÉßâ¿ßâößâ£ßâößâæßâÉ",
    "termHy": "╘▒╒╢╒░╒Ñ╒┐╒í╓ü╒╕╓é╒┤",
    "definitionRu": "╨₧╤ü╨╗╨░╨▒╨╗╨╡╨╜╨╕╨╡ ╤â╤ü╨╗╨╛╨▓╨╜╨╛╨╣ ╤Ç╨╡╨░╨║╤å╨╕╨╕ ╨┐╤Ç╨╕ ╨┐╤Ç╨╡╨║╤Ç╨░╤ë╨╡╨╜╨╕╨╕ ╨┐╨╛╨┤╨║╤Ç╨╡╨┐╨╗╨╡╨╜╨╕╤Å",
    "definitionAz": "M├╢hk╔Öml╔Öndirm╔Ö dayand─▒qda ┼ƒ╔Örti cavab─▒n z╔Öifl╔Öm╔Ösi"
  },
  {
    "id": 23,
    "term": "Superego",
    "definition": "The moral conscience in Freud's personality structure",
    "category": "Personality",
    "termKa": "ßâíßâúßâ₧ßâößâáßâößâÆßâ¥",
    "termHy": "╒ì╒╕╓é╒║╒Ñ╓Ç╒º╒ú╒╕",
    "termRu": "╨í╤â╨┐╨╡╤Ç╤ì╨│╨╛",
    "termAz": "Supereqo",
    "definitionRu": "╨£╨╛╤Ç╨░╨╗╤î╨╜╨╛╨╡ ╤ü╨╛╨╖╨╜╨░╨╜╨╕╨╡ ╨▓ ╤ü╤é╤Ç╤â╨║╤é╤â╤Ç╨╡ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕ ╨ñ╤Ç╨╡╨╣╨┤╨░",
    "definitionHy": "╘▓╒í╓Ç╒╕╒╡╒í╒»╒í╒╢ ╒¡╒½╒▓╒│╒¿ ╒û╓Ç╒Ñ╒╡╒ñ╒½ ╒í╒╢╒▒╒½ ╒»╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒╕╓é╒┤",
    "definitionKa": "ßâ¢ßâ¥ßâáßâÉßâÜßâúßâáßâÿ ßâíßâÿßâ£ßâôßâÿßâíßâÿ ßâñßâáßâ¥ßâÿßâôßâÿßâí ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâíßâóßâáßâúßâÑßâóßâúßâáßâÉßâ¿ßâÿ",
    "definitionAz": "Freydin ┼ƒ╔Öxsiyy╔Öt strukturunda ╔Öxlaqi vicdan"
  },
  {
    "id": 24,
    "term": "Neuroplasticity",
    "definition": "Brain's ability to reorganize and form new neural connections",
    "category": "Biology",
    "termAz": "Neyroplastiklik",
    "termRu": "╨¥╨╡╨╣╤Ç╨╛╨┐╨╗╨░╤ü╤é╨╕╤ç╨╜╨╛╤ü╤é╤î",
    "definitionRu": "╨í╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨╝╨╛╨╖╨│╨░ ╤Ç╨╡╨╛╤Ç╨│╨░╨╜╨╕╨╖╨╛╨▓╨░╤é╤î╤ü╤Å ╨╕ ╤ü╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╤é╤î ╨╜╨╛╨▓╤ï╨╡ ╨╜╨╡╨╣╤Ç╨╛╨╜╨╜╤ï╨╡ ╤ü╨▓╤Å╨╖╨╕",
    "definitionHy": "╒Ä╒Ñ╓Ç╒í╒»╒í╒ª╒┤╒í╒╛╒╕╓Ç╒╛╒Ñ╒¼╒╕╓é ╓ç ╒╢╒╕╓Ç ╒╢╒╡╒í╓Ç╒ñ╒í╒╡╒½╒╢ ╒»╒í╒║╒Ñ╓Ç ╒▒╓ç╒í╒╛╒╕╓Ç╒Ñ╒¼╒╕╓é ╒╕╓é╒▓╒Ñ╒▓╒½ ╒»╒í╓Ç╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
    "definitionKa": "ßâóßâòßâÿßâ£ßâÿßâí ßâáßâößâ¥ßâáßâÆßâÉßâ£ßâÿßâûßâÉßâ¬ßâÿßâÿßâíßâÉ ßâôßâÉ ßâÉßâ«ßâÉßâÜßâÿ ßâ£ßâößâáßâòßâúßâÜßâÿ ßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâÿßâí ßâ⌐ßâÉßâ¢ßâ¥ßâºßâÉßâÜßâÿßâæßâößâæßâÿßâí ßâúßâ£ßâÉßâáßâÿ",
    "definitionAz": "Beynin yenid╔Ön t╔Ö┼ƒkil etm╔Ök v╔Ö yeni sinir ╔Ölaq╔Öl╔Öri yaratmaq qabiliyy╔Öti",
    "termHy": "╒å╒Ñ╒╡╓Ç╒╕╒║╒¼╒í╒╜╒┐╒½╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢",
    "termKa": "ßâ£ßâößâÿßâáßâ¥ßâ₧ßâÜßâÉßâíßâóßâÿßâúßâáßâ¥ßâæßâÉ"
  }
    "contentHy": "TRUNCATED"
    "titleAz": "Marshmallow Testi",
    "contentRu": "╨Æ ╨║╨╛╨╜╤å╨╡ 1960-╤à ΓÇö ╨╜╨░╤ç╨░╨╗╨╡ 1970-╤à ╨│╨╛╨┤╨╛╨▓ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│ ╨╕╨╖ ╨í╤é╤ì╨╜╤ä╨╛╤Ç╨┤╨░ ╨ú╨╛╨╗╤é╨╡╤Ç ╨£╨╕╤ê╨╡╨╗╤î ╨╜╨░╤ç╨░╨╗ ╨╛╨▒╨╝╨░╨╜╤ç╨╕╨▓╨╛ ╨┐╤Ç╨╛╤ü╤é╨╛╨╣ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é. ╨₧╨╜ ╨┐╤Ç╨╕╨▓╨╛╨┤╨╕╨╗ ╨┤╨╡╤é╨╡╨╣ ╨┤╨╛╤ê╨║╨╛╨╗╤î╨╜╨╛╨│╨╛ ╨▓╨╛╨╖╤Ç╨░╤ü╤é╨░, ╨╛╨▒╤ï╤ç╨╜╨╛ ╨╛╤é 4 ╨┤╨╛ 5 ╨╗╨╡╤é, ╨┐╨╛ ╨╛╨┤╨╜╨╛╨╝╤â ╨▓ ╨║╨╛╨╝╨╜╨░╤é╤â. ╨¥╨░ ╤ü╤é╨╛╨╗╨╡ ╨╗╨╡╨╢╨░╨╗ ╨╖╨╡╤ä╨╕╤Ç (╨╕╨╗╨╕ ╨┐╨╡╤ç╨╡╨╜╤î╨╡, ╨╕╨╗╨╕ ╨║╤Ç╨╡╨╜╨┤╨╡╨╗╤î ΓÇö ╤Ç╨╡╨▒╨╡╨╜╨╛╨║ ╨╝╨╛╨│ ╨▓╤ï╨▒╤Ç╨░╤é╤î ╨╗╨░╨║╨╛╨╝╤ü╤é╨▓╨╛ ╨┐╨╛ ╤ü╨▓╨╛╨╡╨╝╤â ╨▓╨║╤â╤ü╤â).\n\n╨ÿ╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╤î ╤ü╨║╨░╨╖╨░╨╗ ╤Ç╨╡╨▒╨╡╨╜╨║╤â: ┬½╨ó╤ï ╨╝╨╛╨╢╨╡╤ê╤î ╤ü╤è╨╡╤ü╤é╤î ╤ì╤é╨╛╤é ╨╖╨╡╤ä╨╕╤Ç ╨┐╤Ç╤Å╨╝╨╛ ╤ü╨╡╨╣╤ç╨░╤ü. ╨¥╨╛ ╨╡╤ü╨╗╨╕ ╨┐╨╛╨┤╨╛╨╢╨┤╨╡╤ê╤î, ╨┐╨╛╨║╨░ ╤Å ╨▓╨╡╤Ç╨╜╤â╤ü╤î, ╨▓╨╝╨╡╤ü╤é╨╛ ╤ì╤é╨╛╨│╨╛ ╤é╤ï ╤ü╨╝╨╛╨╢╨╡╤ê╤î ╤ü╤è╨╡╤ü╤é╤î ╨┤╨▓╨░ ╨╖╨╡╤ä╨╕╤Ç╨░┬╗. ╨ù╨░╤é╨╡╨╝ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╤î ╨▓╤ï╤ê╨╡╨╗ ╨╕╨╖ ╨║╨╛╨╝╨╜╨░╤é╤ï ╨┐╤Ç╨╕╨╝╨╡╤Ç╨╜╨╛ ╨╜╨░ 15 ╨╝╨╕╨╜╤â╤é.\n\n╨í╨║╤Ç╤ï╤é╤ï╨╡ ╨║╨░╨╝╨╡╤Ç╤ï ╨╖╨░╨┐╨╕╤ü╨░╨╗╨╕ ╤é╨╛, ╤ç╤é╨╛ ╨┐╤Ç╨╛╨╕╨╖╨╛╤ê╨╗╨╛ ╨┤╨░╨╗╤î╤ê╨╡, ╨╕ ╨╛╤é╤ü╨╜╤Å╤é╤ï╨╣ ╨╝╨░╤é╨╡╤Ç╨╕╨░╨╗ ╤ü╤é╨░╨╗ ╨╛╨┤╨╜╨╕╨╝ ╨╕╨╖ ╤ü╨░╨╝╤ï╤à ╨▓╨╛╤ü╤à╨╕╤é╨╕╤é╨╡╨╗╤î╨╜╤ï╤à ╤ä╨╕╨╗╤î╨╝╨╛╨▓ ╨▓ ╨╕╤ü╤é╨╛╤Ç╨╕╨╕ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕. ╨¥╨╡╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨┤╨╡╤é╨╕ ╤ü╤è╨╡╨╗╨╕ ╨╖╨╡╤ä╨╕╤Ç ╤ü╤Ç╨░╨╖╤â ╨╢╨╡, ╨║╨░╨║ ╨╖╨░╨║╤Ç╤ï╨╗╨░╤ü╤î ╨┤╨▓╨╡╤Ç╤î. ╨ö╤Ç╤â╨│╨╕╨╡ ╨┐╤Ç╨╛╨▒╨╛╨▓╨░╨╗╨╕ ╤é╨▓╨╛╤Ç╤ç╨╡╤ü╨║╨╕╨╡ ╤ü╤é╤Ç╨░╤é╨╡╨│╨╕╨╕: ╨╖╨░╨║╤Ç╤ï╨▓╨░╨╗╨╕ ╨│╨╗╨░╨╖╨░, ╨┐╨╛╨▓╨╛╤Ç╨░╤ç╨╕╨▓╨░╨╗╨╕╤ü╤î, ╨╜╨░╨┐╨╡╨▓╨░╨╗╨╕ ╨┐╤Ç╨╛ ╤ü╨╡╨▒╤Å, ╨│╨╗╨░╨┤╨╕╨╗╨╕ ╨╖╨╡╤ä╨╕╤Ç, ╨║╨░╨║ ╨║╤Ç╨╛╤ê╨╡╤ç╨╜╨╛╨│╨╛ ╨╖╨▓╨╡╤Ç╤î╨║╨░, ╨╕╨╗╨╕ ╨╛╨▒╨╗╨╕╨╖╤ï╨▓╨░╨╗╨╕ ╨╡╨│╨╛ ╨╕ ╨║╨╗╨░╨╗╨╕ ╨╛╨▒╤Ç╨░╤é╨╜╨╛.\n\n╨₧╨║╨╛╨╗╨╛ ╤é╤Ç╨╡╤é╨╕ ╨┤╨╡╤é╨╡╨╣ ╤â╨┤╨░╨╗╨╛╤ü╤î ╨┐╤Ç╨╛╨╢╨┤╨░╤é╤î ╨┐╨╛╨╗╨╜╤ï╨╡ 15 ╨╝╨╕╨╜╤â╤é. ╨ö╨▓╨╡ ╤é╤Ç╨╡╤é╨╕ ╨╜╨╡ ╤ü╨╝╨╛╨│╨╗╨╕ ╤â╤ü╤é╨╛╤Å╤é╤î.\n\n╨í╨┐╤â╤ü╤é╤Å ╨│╨╛╨┤╤ï ╨£╨╕╤ê╨╡╨╗╤î ╨┐╨╛╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╗ ╨╖╨░ ╨┤╨╡╤é╤î╨╝╨╕ ΓÇö ╤é╨╡╨┐╨╡╤Ç╤î ╤â╨╢╨╡ ╨┐╨╛╨┤╤Ç╨╛╤ü╤é╨║╨░╨╝╨╕ ╨╕ ╨▓╨╖╤Ç╨╛╤ü╨╗╤ï╨╝╨╕. ╨á╨╡╨╖╤â╨╗╤î╤é╨░╤é╤ï ╨▒╤ï╨╗╨╕ ╨┐╨╛╤Ç╨░╨╖╨╕╤é╨╡╨╗╤î╨╜╤ï╨╝╨╕. ╨ö╨╡╤é╨╕, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╢╨┤╨░╨╗╨╕ ╨┤╨╛╨╗╤î╤ê╨╡, ╨╜╨░╨▒╤Ç╨░╨╗╨╕ ╨╖╨╜╨░╤ç╨╕╤é╨╡╨╗╤î╨╜╨╛ ╨▒╨╛╨╗╨╡╨╡ ╨▓╤ï╤ü╨╛╨║╨╕╨╡ ╨▒╨░╨╗╨╗╤ï ╨┐╨╛ SAT (╨▓ ╤ü╤Ç╨╡╨┤╨╜╨╡╨╝ ╨╜╨░ 210 ╨▒╨░╨╗╨╗╨╛╨▓ ╨▓╤ï╤ê╨╡), ╤Ç╨╛╨┤╨╕╤é╨╡╨╗╨╕ ╨╛╨┐╨╕╤ü╤ï╨▓╨░╨╗╨╕ ╨╕╤à ╨║╨░╨║ ╨▒╨╛╨╗╨╡╨╡ ╨║╨╛╨╝╨┐╨╡╤é╨╡╨╜╤é╨╜╤ï╤à, ╨╗╤â╤ç╤ê╨╡ ╤ü╨┐╤Ç╨░╨▓╨╗╤Å╨╗╨╕╤ü╤î ╤ü╨╛ ╤ü╤é╤Ç╨╡╤ü╤ü╨╛╨╝, ╤Ç╨╡╨╢╨╡ ╨╖╨╗╨╛╤â╨┐╨╛╤é╤Ç╨╡╨▒╨╗╤Å╨╗╨╕ ╨┐╤ü╨╕╤à╨╛╨░╨║╤é╨╕╨▓╨╜╤ï╨╝╨╕ ╨▓╨╡╤ë╨╡╤ü╤é╨▓╨░╨╝╨╕ ╨╕ ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨╕╨▓╨░╨╗╨╕ ╨▒╨╛╨╗╨╡╨╡ ╨╖╨┤╨╛╤Ç╨╛╨▓╤ï╨╣ ╨▓╨╡╤ü ╤é╨╡╨╗╨░.\n\n╨ƒ╨╛╤ü╨╗╨╡╨┤╤â╤Ä╤ë╨╕╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å, ╨╛╤à╨▓╨░╤é╤ï╨▓╨░╤Ä╤ë╨╕╨╡ ╤ç╨╡╤é╤ï╤Ç╨╡ ╨┤╨╡╤ü╤Å╤é╨╕╨╗╨╡╤é╨╕╤Å, ╨┐╨╛╨║╨░╨╖╨░╨╗╨╕, ╤ç╤é╨╛ ╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨╛╤é╨║╨╗╨░╨┤╤ï╨▓╨░╤é╤î ╤â╨┤╨╛╨▓╨╗╨╡╤é╨▓╨╛╤Ç╨╡╨╜╨╕╨╡ ╨▓ ╨┤╨╡╤é╤ü╤é╨▓╨╡ ╨┐╤Ç╨╡╨┤╤ü╨║╨░╨╖╤ï╨▓╨░╨╡╤é ╨╗╤â╤ç╤ê╨╕╨╡ ╤Ç╨╡╨╖╤â╨╗╤î╤é╨░╤é╤ï ╨┐╨╛╤ç╤é╨╕ ╨┐╨╛ ╨▓╤ü╨╡╨╝ ╨┐╨╛╨║╨░╨╖╨░╤é╨╡╨╗╤Å╨╝ ╨╢╨╕╨╖╨╜╨╡╨╜╨╜╨╛╨│╨╛ ╤â╤ü╨┐╨╡╤à╨░.\n\n╨₧╨┤╨╜╨░╨║╨╛ ╨▒╨╛╨╗╨╡╨╡ ╨┐╨╛╨╖╨┤╨╜╨╕╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨┤╨╛╨▒╨░╨▓╨╕╨╗╨╕ ╨╜╤Ä╨░╨╜╤ü╨╛╨▓. ╨ÿ╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨ó╨░╨╣╨╗╨╡╤Ç╨░ ╨ú╨╛╤é╤é╤ü╨░, ╨┐╤Ç╨╛╨▓╨╡╨┤╨╡╨╜╨╜╨╛╨╡ ╨▓ 2018 ╨│╨╛╨┤╤â, ╨┐╨╛╨║╨░╨╖╨░╨╗╨╛, ╤ç╤é╨╛ ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╨╛-╤ì╨║╨╛╨╜╨╛╨╝╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╤ä╨░╨║╤é╨╛╤Ç╤ï ╨╕ ╨┤╨╛╨╝╨░╤ê╨╜╤Å╤Å ╨╛╨▒╤ü╤é╨░╨╜╨╛╨▓╨║╨░ ╤ü╨╕╨╗╤î╨╜╨╛ ╨▓╨╗╨╕╤Å╤Ä╤é ╨╜╨░ ╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨╛╤é╨║╨╗╨░╨┤╤ï╨▓╨░╤é╤î ╤â╨┤╨╛╨▓╨╗╨╡╤é╨▓╨╛╤Ç╨╡╨╜╨╕╨╡ ΓÇö ╤â ╨┤╨╡╤é╨╡╨╣ ╨╕╨╖ ╤ü╤é╨░╨▒╨╕╨╗╤î╨╜╤ï╤à, ╨▒╨╛╨│╨░╤é╤ï╤à ╤Ç╨╡╤ü╤â╤Ç╤ü╨░╨╝╨╕ ╤ü╨╡╨╝╨╡╨╣ ╨┐╤Ç╨╛╤ü╤é╨╛ ╨╝╨╛╨╢╨╡╤é ╨▒╤ï╤é╤î ╨▒╨╛╨╗╤î╤ê╨╡ ╨╛╤ü╨╜╨╛╨▓╨░╨╜╨╕╨╣ ╨▓╨╡╤Ç╨╕╤é╤î ╨▓ ╤é╨╛, ╤ç╤é╨╛ ╨▓╤é╨╛╤Ç╨╛╨╣ ╨╖╨╡╤ä╨╕╤Ç ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤é╨╡╨╗╤î╨╜╨╛ ╨┐╨╛╤Å╨▓╨╕╤é╤ü╤Å.",
    "contentAz": "1960-c─▒ ill╔Örin sonu v╔Ö 1970-ci ill╔Örin ╔Övv╔Öll╔Örind╔Ö Stenford psixoloqu Valter Mi┼ƒel aldad─▒c─▒ sad╔Ö t╔Öcr├╝b╔Öy╔Ö ba┼ƒlad─▒. O, ad╔Öt╔Ön 4-5 ya┼ƒl─▒ m╔Ökt╔Öb╔Öq╔Öd╔Ör u┼ƒaqlar─▒ bir-bir ota─ƒa g╔Ötirirdi. Masada t╔Ök zefir (yaxud pe├ºenye v╔Ö ya simit - u┼ƒaq ├╢z ist╔Ödiyi yem╔Öyi se├º╔Ö bil╔Ör) oturdu.\n\nT╔Ödqiqat├º─▒ u┼ƒa─ƒa deyib: \"Bu zefiri indi yey╔Ö bil╔Örsiniz. Amma m╔Ön qay─▒dana q╔Öd╔Ör g├╢zl╔Ös╔Öniz, onun yerin╔Ö iki zefir yey╔Ö bil╔Örsiniz\". Sonra t╔Ödqiqat├º─▒ t╔Öxmin╔Ön 15 d╔Öqiq╔Ö ota─ƒ─▒ t╔Örk etdi.\n\nGizli kameralar sonra ba┼ƒ ver╔Önl╔Öri qeyd etdi v╔Ö g├╢r├╝nt├╝l╔Ör psixologiyan─▒n ╔Ön l╔Özz╔Ötli bax─▒┼ƒlar─▒ndan biri oldu. B╔Özi u┼ƒaqlar qap─▒ ba─ƒlanan kimi zefiri yedil╔Ör. Dig╔Örl╔Öri yarad─▒c─▒ strategiyalar─▒ s─▒nad─▒lar: g├╢zl╔Örini ├╢rtd├╝l╔Ör, ╔Ötrafa ├ºevrildil╔Ör, ├╢z-├╢z├╝n╔Ö mahn─▒ oxudular, zefiri ki├ºik bir heyvan kimi ox┼ƒad─▒lar v╔Ö ya yalay─▒b geri qoydular.\n\nU┼ƒaqlar─▒n t╔Öxmin╔Ön ├╝├ºd╔Ö biri tam 15 d╔Öqiq╔Ö g├╢zl╔Öm╔Öyi bacar─▒b. ├£├ºd╔Ö ikisi m├╝qavim╔Öt g├╢st╔Ör╔Ö bilm╔Ödi.\n\n─░ll╔Ör sonra Mi┼ƒel u┼ƒaqlar─▒ - indi yeniyetm╔Öl╔Ör v╔Ö b├╢y├╝kl╔Ör kimi izl╔Ödi. N╔Ötic╔Öl╔Ör t╔Ö╔Öcc├╝bl├╝ idi. Daha ├ºox g├╢zl╔Öy╔Ön u┼ƒaqlar SAT-da ╔Öh╔Ömiyy╔Ötli d╔Ör╔Öc╔Öd╔Ö y├╝ks╔Ök bal toplad─▒lar (orta hesabla 210 bal daha y├╝ks╔Ök), valideynl╔Ör t╔Ör╔Öfind╔Ön daha bacar─▒ql─▒, stresl╔Ö daha yax┼ƒ─▒ m├╝bariz╔Ö aparan, madd╔Öl╔Örd╔Ön sui-istifad╔Ö etm╔Ö ehtimal─▒ az idi v╔Ö b╔Öd╔Ön ├º╔Ökil╔Örini daha sa─ƒlam saxlad─▒lar.\n\nQ─▒rx onillikl╔Öri ╔Öhat╔Ö ed╔Ön t╔Öqib t╔Ödqiqatlar─▒ g├╢st╔Ördi ki, u┼ƒaql─▒qda h╔Özzi gecikdirm╔Ök bacar─▒─ƒ─▒, dem╔Ök olar ki, h╔Ör bir h╔Öyat u─ƒuru ├╢l├º├╝s├╝nd╔Ö daha yax┼ƒ─▒ n╔Ötic╔Öl╔Öri proqnozla┼ƒd─▒r─▒r.\n\nBununla bel╔Ö, sonrak─▒ ara┼ƒd─▒rmalar bir n├╝ans ╔Ölav╔Ö etdi. Tyler Watts t╔Ör╔Öfind╔Ön 2018-ci ild╔Ö apar─▒lan bir ara┼ƒd─▒rma g├╢st╔Ördi ki, sosial-iqtisadi amill╔Ör v╔Ö ev m├╝hiti m╔Ömnuniyy╔Öti gecikdirm╔Ök qabiliyy╔Ötin╔Ö g├╝cl├╝ t╔Ösir g├╢st╔Örir - sabit, resursla z╔Öngin evl╔Örd╔Ön olan u┼ƒaqlar─▒n ikinci zefirin h╔Öqiq╔Öt╔Ön g├╢r├╝n╔Öc╔Öyin╔Ö inanmaq ├╝├º├╝n daha ├ºox s╔Öb╔Öbi ola bil╔Ör."
  },
  {
    "id": 7,
    "title": "Kitty Genovese and Bystander Apathy",
    "titleKa": "ßâÖßâÿßâóßâÿ ßâ»ßâößâ£ßâ¥ßâòßâößâûßâö ßâôßâÉ ßâùßâòßâÉßâÜßâùßâ¢ßâ«ßâÿßâÜßâòßâößâÜßâÿßâí ßâÉßâ₧ßâÉßâùßâÿßâÉ",
    "chapterId": 12,
    "icon": "mdi:account-alert-outline",
    "content": "On March 13, 1964, 28-year-old Catherine \"Kitty\" Genovese was returning to her apartment in Kew Gardens, Queens, New York, at about 3:15 AM after finishing her shift as a bar manager. As she walked from her car, she was attacked by Winston Moseley.\n\nKitty screamed for help. Lights went on in the apartment building. A neighbor yelled from a window. Moseley ran awayΓÇöbut returned ten minutes later to attack her again in a stairwell, where he stabbed, robbed, and ultimately killed her.\n\nThe New York Times reported that 38 witnesses watched or heard the attack and did nothingΓÇöa claim that became the defining story of urban apathy. The headline shocked the nation.\n\nPsychologists John Darley and Bibb Latan├⌐ were deeply troubled by the story. Rather than simply condemning the witnesses as uncaring, they hypothesized that the very number of witnesses might have been the problem. They designed a series of experiments to test this.\n\nIn one study, participants were placed in separate rooms and communicated via intercom. When one \"participant\" (actually a recording) simulated having a seizure, those who believed they were the only one who could hear it responded quicklyΓÇö85% within one minute. But when participants believed four others were also listening, only 31% responded.\n\nDarley and Latan├⌐ called this the \"bystander effect\"ΓÇöthe finding that the presence of others reduces individual helping behavior through two mechanisms: diffusion of responsibility (\"someone else will help\") and pluralistic ignorance (\"nobody else seems concerned, so it must not be serious\").\n\nNote: Later research revealed that the original Times story was significantly exaggeratedΓÇöfewer people witnessed the attack than claimed, and some did call police. But the research it inspired has been robustly confirmed.",
    "contentKa": "1964 ßâ¼ßâößâÜßâí, ßâÖßâÿßâóßâÿ ßâ»ßâößâ£ßâ¥ßâòßâößâûßâö ßâ£ßâÿßâú-ßâÿßâ¥ßâáßâÖßâ¿ßâÿ ßâùßâÉßâòßâí ßâôßâÉßâíßâ«ßâ¢ßâúßâÜßâößâí ßâôßâáßâ¥ßâí ßâ¢ßâ¥ßâÿßâÖßâÜßâÉ. ßâ¢ßâáßâÉßâòßâÉßâÜßâ¢ßâÉ ßâößâíßâ¢ßâÉ ßâôßâÉßâÿßâ£ßâÉßâ«ßâÉ, ßâ¢ßâÉßâÆßâáßâÉßâ¢ ßâÉßâáßâÉßâòßâÿßâ£ ßâôßâÉßâößâ«ßâ¢ßâÉßâáßâÉ. ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâößâæßâ¢ßâÉ ßâôßâÉßâáßâÜßâÿßâ¢ ßâôßâÉ ßâÜßâÉßâóßâÉßâ£ßâößâ¢ ßâÉßâªßâ¢ßâ¥ßâÉßâ⌐ßâÿßâ£ßâößâí \"ßâùßâòßâÉßâÜßâùßâ¢ßâ«ßâÿßâÜßâòßâößâÜßâÿßâí ßâößâñßâößâÑßâóßâÿ\"ΓÇößâáßâÉßâè ßâ¢ßâößâóßâÿ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâÿßâÉ ßâôßâÉßâ¢ßâíßâ¼ßâáßâö, ßâ¢ßâÿßâù ßâ£ßâÉßâÖßâÜßâößâæßâÉßâô ßâùßâÿßâùßâ¥ßâößâúßâÜßâÿ ßâôßâÉßâ«ßâ¢ßâÉßâáßâößâæßâÿßâí ßâÉßâÜßâæßâÉßâùßâ¥ßâæßâÉ ßâ¢ßâ¬ßâÿßâáßâôßâößâæßâÉ.",
    "moral": "The more people present during an emergency, the less likely any individual is to helpΓÇöa counterintuitive finding with life-saving implications.",
    "moralKa": "ßâáßâÉßâè ßâ¢ßâößâóßâÿ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâÿ ßâÉßâáßâÿßâí ßâíßâÉßâÆßâÉßâ£ßâÆßâÉßâ¿ßâ¥ ßâíßâÿßâóßâúßâÉßâ¬ßâÿßâÉßâ¿ßâÿ, ßâ¢ßâÿßâù ßâ£ßâÉßâÖßâÜßâößâæßâÉßâôßâÿßâÉ ßâùßâÿßâùßâ¥ßâößâúßâÜßâÿßâí ßâôßâÉßâ«ßâ¢ßâÉßâáßâößâæßâÉ.",
    "titleRu": "╨Ü╨╕╤é╤é╨╕ ╨ö╨╢╨╡╨╜╨╛╨▓╨╡╨╖╨╡ ╨╕ ╨░╨┐╨░╤é╨╕╤Å ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╤Å",
    "titleHy": "Kitty Genovese ╓ç Bystander Apathy",
    "contentHy": "1964 ╒⌐╒╛╒í╒»╒í╒╢╒½ ╒┤╒í╓Ç╒┐╒½ 13-╒½╒╢ 28-╒í╒┤╒╡╒í ╒ö╒Ñ╒⌐╓Ç╒½╒╢ ┬½╒ö╒½╒⌐╒½┬╗ ╒ï╒Ñ╒╢╒╕╒╛╒Ñ╒ª╒¿ ╒╛╒Ñ╓Ç╒í╒ñ╒í╒╝╒╢╒╕╓é╒┤ ╒º╓Ç ╒½╓Ç ╒ó╒╢╒í╒»╒í╓Ç╒í╒╢ ╒ö╒╕╓é ╘│╒í╓Ç╒ñ╒Ñ╒╢╒╜╒╕╓é╒┤, ╒ö╒╕╓é╒½╒╢╒╜, ╒å╒╡╒╕╓é ╒à╒╕╓Ç╓ä, ╒¬╒í╒┤╒¿ 03:15-╒½╒╢, ╒ó╒í╓Ç╒½ ╒┤╒Ñ╒╢╒Ñ╒╗╒Ñ╓Ç╒½ ╒½╓Ç ╒░╒Ñ╓Ç╒⌐╒í╓â╒╕╒¡╒╢ ╒í╒╛╒í╓Ç╒┐╒Ñ╒¼╒╕╓é╓ü ╒░╒Ñ╒┐╒╕: ╘╡╓Ç╒ó ╒╢╒í ╓ä╒í╒╡╒¼╒╕╓é╒┤ ╒º╓Ç ╒½╓Ç ╒┤╒Ñ╓ä╒Ñ╒╢╒í╒╡╒½╓ü, ╒╢╓Ç╒í ╒╛╓Ç╒í ╒░╒í╓Ç╒▒╒í╒»╒╛╒Ñ╓ü ╒ê╓é╒½╒╢╒╜╒⌐╒╕╒╢ ╒ä╒╕╒ª╒Ñ╒¼╒½╒╢:\n\n╒ö╒½╒⌐╒½╒╢ ╒ú╒╕╒╝╒í╓ü ╓à╒ú╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒┤╒í╓Ç╓ë ╘▓╒í╒ª╒┤╒í╒ó╒╢╒í╒»╒í╓Ç╒í╒╢ ╒╖╒Ñ╒╢╓ä╒╕╓é╒┤ ╒╛╒í╒╝╒╛╒Ñ╒¼ ╒Ñ╒╢ ╒¼╒╕╓é╒╡╒╜╒Ñ╓Ç╒¿. ╒Ç╒í╓Ç╓ç╒í╒╢╒¿ ╒║╒í╒┐╒╕╓é╒░╒í╒╢╒½╓ü ╒ú╒╕╒╝╒í╓ü. ╒ä╒╕╒ª╒Ñ╒¼╒½╒╢ ╓â╒í╒¡╒í╒╛, ╒ó╒í╒╡╓ü ╒┐╒í╒╜╒¿ ╓Ç╒╕╒║╒Ñ ╒í╒╢╓ü ╒╛╒Ñ╓Ç╒í╒ñ╒í╓Ç╒▒╒í╒╛, ╒╕╓Ç╒║╒Ñ╒╜╒ª╒½ ╒╢╒╕╓Ç╒½╓ü ╒░╒í╓Ç╒▒╒í╒»╒╛╒½ ╒╢╓Ç╒í ╒╛╓Ç╒í ╒í╒╜╒┐╒½╒│╒í╒╢╒╢╒Ñ╓Ç╒╕╒╛, ╒╕╓Ç╒┐╒Ñ╒▓ ╒╢╒í ╒ñ╒í╒╢╒í╒»╒í╒░╒í╓Ç╒Ñ╓ü, ╒»╒╕╒▓╒╕╒║╒┐╒Ñ╓ü ╓ç ╒½ ╒╛╒Ñ╓Ç╒╗╒╕ ╒╜╒║╒í╒╢╒Ñ╓ü ╒╢╓Ç╒í╒╢:\n\nThe New York Times-╒¿ ╒░╒í╒▓╒╕╓Ç╒ñ╒╕╓é╒┤ ╒º, ╒╕╓Ç 38 ╒╛╒»╒í╒╢╒Ñ╓Ç ╒ñ╒½╒┐╒Ñ╒¼ ╒»╒í╒┤ ╒¼╒╜╒Ñ╒¼ ╒Ñ╒╢ ╒░╒í╓Ç╒▒╒í╒»╒╕╓é╒┤╒¿ ╓ç ╒╕╒╣╒½╒╢╒╣ ╒╣╒Ñ╒╢ ╒í╓Ç╒Ñ╒¼, ╒┤╒½ ╒║╒╢╒ñ╒╕╓é╒┤, ╒╕╓Ç╒¿ ╒ñ╒í╓Ç╒▒╒í╒╛ ╓ä╒í╒▓╒í╓ä╒í╒╡╒½╒╢ ╒í╒║╒í╒┐╒½╒í╒╡╒½ ╒╕╓Ç╒╕╒╖╒½╒╣ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿: ╒Ä╒Ñ╓Ç╒╢╒í╒ú╒½╓Ç╒¿ ╓ü╒╢╓ü╒Ñ╓ü ╒í╒ª╒ú╒½╒╢.\n\n╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒╢╒Ñ╓Ç ╒ï╒╕╒╢ ╘┤╒í╓Ç╒¼╒½╒╢ ╓ç ╘▓╒½╒ó ╘╝╒í╒┐╒í╒╢╒Ñ╒╢ ╒¡╒╕╓Ç╒í╒║╒Ñ╒╜ ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒í╓ü╒í╒« ╒º╒½╒╢ ╒í╒╡╒╜ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒╕╓é╒╢╒½╓ü: ╒Ä╒»╒í╒╢╒Ñ╓Ç╒½╒╢ ╒║╒í╓Ç╒ª╒í╒║╒Ñ╒╜ ╒╣╒ñ╒í╒┐╒í╒║╒í╓Ç╒┐╒Ñ╒¼╒╕╓é ╓â╒╕╒¡╒í╓Ç╒Ñ╒╢╒¥ ╒╢╓Ç╒í╒╢╓ä ╒Ñ╒╢╒⌐╒í╒ñ╓Ç╒Ñ╓ü╒½╒╢, ╒╕╓Ç ╒¡╒╢╒ñ╒½╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º╓Ç ╒¼╒½╒╢╒Ñ╒¼ ╒░╒Ñ╒╢╓ü ╒╛╒»╒í╒╢╒Ñ╓Ç╒½ ╒⌐╒½╒╛╒¿: ╒å╓Ç╒í╒╢╓ä ╒╢╒í╒¡╒í╒ú╒«╒Ñ╓ü╒½╒╢ ╒┤╒½ ╒╖╒í╓Ç╓ä ╓â╒╕╓Ç╒▒╒Ñ╓Ç╒¥ ╒ñ╒í ╒╜╒┐╒╕╓é╒ú╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:\n\n╒Ç╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½╓ü ╒┤╒Ñ╒»╒╕╓é╒┤ ╒┤╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒½╒╢ ╒┐╒Ñ╒▓╒í╒╛╒╕╓Ç╒Ñ╒¼ ╒Ñ╒╢ ╒í╒╝╒í╒╢╒▒╒½╒╢ ╒╜╒Ñ╒╢╒╡╒í╒»╒╢╒Ñ╓Ç╒╕╓é╒┤ ╓ç ╒░╒í╒▓╒╕╓Ç╒ñ╒í╒»╓ü╒╛╒Ñ╒¼ ╒½╒╢╒┐╒Ñ╓Ç╒»╒╕╒┤╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛: ╘╡╓Ç╒ó ┬½╒┤╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒½╓ü ╒┤╒Ñ╒»╒¿┬╗ (╒½╓Ç╒í╒»╒í╒╢╒╕╓é╒┤ ╒▒╒í╒╡╒╢╒í╒ú╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢) ╒╢╒┤╒í╒╢╒í╒»╒╕╓é╒┤ ╒º╓Ç ╒╢╒╕╒║╒í ╒╕╓é╒╢╒Ñ╒╢╒í╒¼╒¿, ╒╢╓Ç╒í╒╢╓ä, ╒╕╒╛╓ä╒Ñ╓Ç ╒░╒í╒╛╒í╒┐╒╕╓é╒┤ ╒º╒½╒╢, ╒╕╓Ç ╒┤╒½╒í╒»╒╢ ╒º, ╒╕╒╛ ╒»╒í╓Ç╒╕╒▓ ╒º╓Ç ╒ñ╒í ╒¼╒╜╒Ñ╒¼, ╒í╓Ç╒í╒ú ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒Ñ╓ü╒½╒╢╒¥ 85% ╒┤╒Ñ╒» ╓Ç╒╕╒║╒Ñ╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤: ╘▓╒í╒╡╓ü ╒Ñ╓Ç╒ó ╒┤╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒«╒╕╓é╒┤ ╒º╒½╒╢, ╒╕╓Ç ╓ç╒╜ ╒╣╒╕╓Ç╒╜╒¿ ╒╢╒╕╓é╒╡╒╢╒║╒Ñ╒╜ ╒¼╒╜╒╕╓é╒┤ ╒Ñ╒╢, ╒┤╒½╒í╒╡╒╢ 31%-╒╢ ╒º ╒║╒í╒┐╒í╒╜╒¡╒í╒╢╒Ñ╒¼:\n\n╘┤╒í╓Ç╒¼╒½╒╢ ╓ç ╘╝╒í╒┐╒í╒╢╒Ñ╒╢ ╒╜╒í ╒í╒╢╒╛╒í╒╢╒Ñ╓ü╒½╒╢ ┬½╒»╒╕╒▓╒┤╒╢╒í╒»╒½ ╒º╓å╒Ñ╒»╒┐┬╗╒¥ ╒í╒╡╒╢ ╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒╕╓é╒┤╒¿, ╒╕╓Ç ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒½ ╒╢╒Ñ╓Ç╒»╒í╒╡╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒╛╒í╒ª╒Ñ╓ü╒╢╒╕╓é╒┤ ╒º ╒í╒╢╒░╒í╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╓à╒ú╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«╒¿ ╒Ñ╓Ç╒»╒╕╓é ╒┤╒Ñ╒¡╒í╒╢╒½╒ª╒┤╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛╒¥ ╒║╒í╒┐╒í╒╜╒¡╒í╒╢╒í╒┐╒╛╒╕╓é╒⌐╒╡╒í╒╢ ╒ó╒í╒╖╒¡╒╕╓é╒┤ (┬½╒╕╓é╓Ç╒½╒╖╒¿ ╒»╓à╒ú╒╢╒½┬╗) ╓ç ╒ó╒í╒ª╒┤╒í╒»╒í╓Ç╒«╒½╓ä ╒┐╒ú╒½╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ (┬½╒╕╓é╓Ç╒½╒╖ ╒╕╒╣ ╒╕╓ä ╒┤╒┐╒í╒░╒╕╒ú╒╛╒í╒« ╒╣╒º, ╒╕╓é╒╜╒┐╒½ ╒í╒╡╒╢ ╒╣╒║╒Ñ╒┐╓ä ╒º ╒¼╒╕╓é╓Ç╒╗ ╒¼╒½╒╢╒½┬╗):\n\n╒å╒╖╒╕╓é╒┤. ╒Ç╒Ñ╒┐╒í╒ú╒í╒╡╒╕╓é╒┤ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒║╒í╓Ç╒ª╒Ñ╓ü╒½╒╢, ╒╕╓Ç Times-╒½ ╒╜╒»╒ª╒ó╒╢╒í╒»╒í╒╢ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒ª╒ú╒í╒¼╒½╒╕╓Ç╒Ñ╒╢ ╒╕╓é╒╝╒│╒í╓ü╒╛╒í╒« ╒º╓Ç. ╒í╒╛╒Ñ╒¼╒½ ╓ä╒½╒╣ ╒┤╒í╓Ç╒ñ╒½╒» ╒Ñ╒╢ ╒í╒»╒í╒╢╒í╒┐╒Ñ╒╜ ╒Ñ╒▓╒Ñ╒¼ ╒░╒í╓Ç╒▒╒í╒»╒┤╒í╒╢╒¿, ╓ä╒í╒╢ ╒║╒╢╒ñ╒╕╓é╒┤ ╒º╒½╒╢, ╒½╒╜╒» ╒╕╒┤╒í╒╢╓ä ╒º╒¼ ╒╕╒╜╒┐╒½╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒Ñ╒╢ ╒»╒í╒╢╒╣╒Ñ╒¼: ╘▓╒í╒╡╓ü ╒╢╓Ç╒í ╒»╒╕╒▓╒┤╒½╓ü ╒╕╒ú╒Ñ╒╖╒╢╒╣╒╛╒í╒« ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒░╒í╒╜╒┐╒í╒┐╒í╒║╒Ñ╒╜ ╒░╒í╒╜╒┐╒í╒┐╒╛╒Ñ╒¼ ╒º:",
    "titleAz": "Kitty Genovese v╔Ö Bystander Apatiyas─▒",
    "contentAz": "13 mart 1964-c├╝ ild╔Ö 28 ya┼ƒl─▒ Catherine \"Kitty\" Genovese bar meneceri kimi n├╢vb╔Ösini bitirdikd╔Ön sonra t╔Öxmin╔Ön saat 3:15-d╔Ö Nyu-Yorkun Kvins ┼ƒtat─▒ndak─▒ Kew Gardensd╔Öki m╔Önzilin╔Ö qay─▒d─▒rd─▒. O, avtomobilind╔Ön ged╔Örk╔Ön Uinston Mozilinin h├╝cumuna m╔Öruz qal─▒b.\n\nKitty k├╢m╔Ök ├╝├º├╝n q─▒┼ƒq─▒rd─▒. Ya┼ƒay─▒┼ƒ binas─▒nda i┼ƒ─▒qlar yan─▒b. Qon┼ƒu p╔Önc╔Ör╔Öd╔Ön q─▒┼ƒq─▒rd─▒. Moseley qa├ºd─▒, lakin on d╔Öqiq╔Ö sonra geri qay─▒d─▒b, pill╔Ök╔Ön bo┼ƒlu─ƒunda yenid╔Ön ona h├╝cum etdi, burada b─▒├ºaqlad─▒, qar╔Öt etdi v╔Ö n╔Ötic╔Öd╔Ö onu ├╢ld├╝rd├╝.\n\nThe New York Times x╔Öb╔Ör verir ki, 38 ┼ƒahid h├╝cumu izl╔Öyib v╔Ö ya e┼ƒidib v╔Ö he├º n╔Ö etm╔Öyib ΓÇô bu, ┼ƒ╔Öh╔Ör laqeydliyinin ╔Ösas hekay╔Ösin╔Ö ├ºevrilib. Ba┼ƒl─▒q mill╔Öti ┼ƒoka sald─▒.\n\nPsixoloqlar Con Darli v╔Ö Bibb Latane hekay╔Öd╔Ön ├ºox narahat idil╔Ör. ┼₧ahidl╔Öri sad╔Öc╔Ö olaraq diqq╔Ötsiz kimi q─▒namaq ╔Öv╔Özin╔Ö, onlar f╔Örz etdil╔Ör ki, ┼ƒahidl╔Örin ├ºoxlu─ƒu problem ola bil╔Ördi. Bunu yoxlamaq ├╝├º├╝n bir s─▒ra t╔Öcr├╝b╔Öl╔Ör haz─▒rlad─▒lar.\n\nBir ara┼ƒd─▒rmada i┼ƒtirak├º─▒lar ayr─▒ otaqlara yerl╔Ö┼ƒdirilib v╔Ö interkom vasit╔Ösil╔Ö ╔Ölaq╔Ö saxlan─▒l─▒b. Bir \"i┼ƒtirak├º─▒\" (╔Öslind╔Ö s╔Ösyazma) tutma ke├ºirm╔Öyi simulyasiya etdikd╔Ö, bunu e┼ƒid╔Ö bil╔Ön yegan╔Ö ┼ƒ╔Öxs oldu─ƒuna inananlar tez cavab verdil╔Ör - bir d╔Öqiq╔Ö ╔Örzind╔Ö 85%. Lakin i┼ƒtirak├º─▒lar d├╢rd n╔Öf╔Örin d╔Ö dinl╔Ödiyin╔Ö inand─▒qda, yaln─▒z 31% cavab verdi.\n\nDarley v╔Ö Latane bunu \"g├╢zd╔Ön ke├ºirm╔Ö effekti\" adland─▒rd─▒lar - ba┼ƒqalar─▒n─▒n m├╢vcudlu─ƒunun iki mexanizm vasit╔Ösil╔Ö f╔Ördi yard─▒m davran─▒┼ƒ─▒n─▒ azaldaca─ƒ─▒n─▒n tap─▒lmas─▒: m╔Ösuliyy╔Ötin yay─▒lmas─▒ (\"ba┼ƒqas─▒ k├╢m╔Ök ed╔Öc╔Ök\") v╔Ö pl├╝ralistik c╔Öhal╔Öt (\"ba┼ƒqa he├º kimi narahat etmir, ona g├╢r╔Ö d╔Ö ciddi olmamal─▒d─▒r\").\n\nQeyd: Sonrak─▒ ara┼ƒd─▒rmalar orijinal Times hekay╔Ösinin ╔Öh╔Ömiyy╔Ötli d╔Ör╔Öc╔Öd╔Ö ┼ƒi┼ƒirdildiyini ortaya qoydu - iddia edil╔Önd╔Ön daha az adam h├╝cumun ┼ƒahidi oldu v╔Ö b╔Özil╔Öri polis╔Ö z╔Öng etdi. Lakin onun ilham verdiyi t╔Ödqiqat m├╢hk╔Öm ┼ƒ╔Ökild╔Ö t╔Ösdiql╔Öndi.",
    "contentRu": "13 ╨╝╨░╤Ç╤é╨░ 1964 ╨│╨╛╨┤╨░ 28-╨╗╨╡╤é╨╜╤Å╤Å ╨Ü╤ì╤é╤Ç╨╕╨╜ ┬½╨Ü╨╕╤é╤é╨╕┬╗ ╨ö╨╢╨╡╨╜╨╛╨▓╨╡╨╖╨╡ ╨▓╨╛╨╖╨▓╤Ç╨░╤ë╨░╨╗╨░╤ü╤î ╨▓ ╤ü╨▓╨╛╤Ä ╨║╨▓╨░╤Ç╤é╨╕╤Ç╤â ╨▓ ╨Ü╤î╤Ä-╨ô╨░╤Ç╨┤╨╡╨╜╤ü, ╨Ü╨▓╨╕╨╜╤ü, ╨¥╤î╤Ä-╨Ö╨╛╤Ç╨║, ╨┐╤Ç╨╕╨╝╨╡╤Ç╨╜╨╛ ╨▓ 3:15 ╤â╤é╤Ç╨░ ╨┐╨╛╤ü╨╗╨╡ ╨╛╨║╨╛╨╜╤ç╨░╨╜╨╕╤Å ╤ü╨╝╨╡╨╜╤ï ╨▓ ╨║╨░╤ç╨╡╤ü╤é╨▓╨╡ ╨╝╨╡╨╜╨╡╨┤╨╢╨╡╤Ç╨░ ╨▒╨░╤Ç╨░. ╨Ü╨╛╨│╨┤╨░ ╨╛╨╜╨░ ╨▓╤ï╤à╨╛╨┤╨╕╨╗╨░ ╨╕╨╖ ╨╝╨░╤ê╨╕╨╜╤ï, ╨╜╨░ ╨╜╨╡╨╡ ╨╜╨░╨┐╨░╨╗ ╨ú╨╕╨╜╤ü╤é╨╛╨╜ ╨£╨╛╨╖╨╗╨╕.\n\n╨Ü╨╕╤é╤é╨╕ ╨╖╨▓╨░╨╗╨░ ╨╜╨░ ╨┐╨╛╨╝╨╛╤ë╤î. ╨Æ ╨╝╨╜╨╛╨│╨╛╨║╨▓╨░╤Ç╤é╨╕╤Ç╨╜╨╛╨╝ ╨┤╨╛╨╝╨╡ ╨╖╨░╨╢╨╡╨│╤ü╤Å ╤ü╨▓╨╡╤é. ╨í╨╛╤ü╨╡╨┤ ╨║╤Ç╨╕╤ç╨░╨╗ ╨╕╨╖ ╨╛╨║╨╜╨░. ╨£╨╛╨╖╨╗╨╕ ╤â╨▒╨╡╨╢╨░╨╗, ╨╜╨╛ ╨▓╨╡╤Ç╨╜╤â╨╗╤ü╤Å ╤ç╨╡╤Ç╨╡╨╖ ╨┤╨╡╤ü╤Å╤é╤î ╨╝╨╕╨╜╤â╤é, ╤ç╤é╨╛╨▒╤ï ╤ü╨╜╨╛╨▓╨░ ╨╜╨░╨┐╨░╤ü╤é╤î ╨╜╨░ ╨╜╨╡╨╡ ╨╜╨░ ╨╗╨╡╤ü╤é╨╜╨╕╤ç╨╜╨╛╨╣ ╨║╨╗╨╡╤é╨║╨╡, ╨│╨┤╨╡ ╨╛╨╜ ╨╜╨░╨╜╨╡╤ü ╨╡╨╣ ╤â╨┤╨░╤Ç, ╨╛╨│╤Ç╨░╨▒╨╕╨╗ ╨╕ ╨▓ ╨║╨╛╨╜╨╡╤ç╨╜╨╛╨╝ ╨╕╤é╨╛╨│╨╡ ╤â╨▒╨╕╨╗ ╨╡╨╡.\n\n╨ô╨░╨╖╨╡╤é╨░ New York Times ╤ü╨╛╨╛╨▒╤ë╨╕╨╗╨░, ╤ç╤é╨╛ 38 ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╨╡╨╣ ╨╜╨░╨▒╨╗╤Ä╨┤╨░╨╗╨╕ ╨╕╨╗╨╕ ╤ü╨╗╤ï╤ê╨░╨╗╨╕ ╨╜╨░╨┐╨░╨┤╨╡╨╜╨╕╨╡ ╨╕ ╨╜╨╕╤ç╨╡╨│╨╛ ╨╜╨╡ ╨┐╤Ç╨╡╨┤╨┐╤Ç╨╕╨╜╤Å╨╗╨╕ ΓÇö ╤ì╤é╨╛ ╤â╤é╨▓╨╡╤Ç╨╢╨┤╨╡╨╜╨╕╨╡ ╤ü╤é╨░╨╗╨╛ ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╤Ä╤ë╨╡╨╣ ╨╕╤ü╤é╨╛╤Ç╨╕╨╡╨╣ ╨│╨╛╤Ç╨╛╨┤╤ü╨║╨╛╨╣ ╨░╨┐╨░╤é╨╕╨╕. ╨ù╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ ╤ê╨╛╨║╨╕╤Ç╨╛╨▓╨░╨╗ ╨╜╨░╤å╨╕╤Ä.\n\n╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕ ╨ö╨╢╨╛╨╜ ╨ö╨░╤Ç╨╗╨╕ ╨╕ ╨æ╨╕╨▒╨▒ ╨¢╨░╤é╨░╨╜╨╡ ╨▒╤ï╨╗╨╕ ╨│╨╗╤â╨▒╨╛╨║╨╛ ╨╛╨▒╨╡╤ü╨┐╨╛╨║╨╛╨╡╨╜╤ï ╤ì╤é╨╛╨╣ ╨╕╤ü╤é╨╛╤Ç╨╕╨╡╨╣. ╨Æ╨╝╨╡╤ü╤é╨╛ ╤é╨╛╨│╨╛, ╤ç╤é╨╛╨▒╤ï ╨┐╤Ç╨╛╤ü╤é╨╛ ╨╛╤ü╤â╨┤╨╕╤é╤î ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╨╡╨╣ ╨║╨░╨║ ╤Ç╨░╨▓╨╜╨╛╨┤╤â╤ê╨╜╤ï╤à, ╨╛╨╜╨╕ ╨┐╤Ç╨╡╨┤╨┐╨╛╨╗╨╛╨╢╨╕╨╗╨╕, ╤ç╤é╨╛ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝╨░ ╨╝╨╛╨│╨╗╨░ ╨▒╤ï╤é╤î ╨▓ ╤ü╨░╨╝╨╛╨╝ ╨║╨╛╨╗╨╕╤ç╨╡╤ü╤é╨▓╨╡ ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╨╡╨╣. ╨º╤é╨╛╨▒╤ï ╨┐╤Ç╨╛╨▓╨╡╤Ç╨╕╤é╤î ╤ì╤é╨╛, ╨╛╨╜╨╕ ╤Ç╨░╨╖╤Ç╨░╨▒╨╛╤é╨░╨╗╨╕ ╤ü╨╡╤Ç╨╕╤Ä ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨╛╨▓.\n\n╨Æ ╨╛╨┤╨╜╨╛╨╝ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╕ ╤â╤ç╨░╤ü╤é╨╜╨╕╨║╨╛╨▓ ╨┐╨╛╨╝╨╡╤ü╤é╨╕╨╗╨╕ ╨▓ ╨╛╤é╨┤╨╡╨╗╤î╨╜╤ï╨╡ ╨║╨╛╨╝╨╜╨░╤é╤ï ╨╕ ╨╛╨▒╤ë╨░╨╗╨╕╤ü╤î ╤ç╨╡╤Ç╨╡╨╖ ╨╕╨╜╤é╨╡╤Ç╨║╨╛╨╝. ╨Ü╨╛╨│╨┤╨░ ╨╛╨┤╨╕╨╜ ┬½╤â╤ç╨░╤ü╤é╨╜╨╕╨║┬╗ (╨╜╨░ ╤ü╨░╨╝╨╛╨╝ ╨┤╨╡╨╗╨╡ ╨╖╨░╨┐╨╕╤ü╤î) ╨╕╨╝╨╕╤é╨╕╤Ç╨╛╨▓╨░╨╗ ╨┐╤Ç╨╕╤ü╤é╤â╨┐, ╤é╨╡, ╨║╤é╨╛ ╤ü╤ç╨╕╤é╨░╨╗, ╤ç╤é╨╛ ╨╛╨╜╨╕ ╨╡╨┤╨╕╨╜╤ü╤é╨▓╨╡╨╜╨╜╤ï╨╡, ╨║╤é╨╛ ╨╝╨╛╨│ ╤ì╤é╨╛ ╤ü╨╗╤ï╤ê╨░╤é╤î, ╨╛╤é╤Ç╨╡╨░╨│╨╕╤Ç╨╛╨▓╨░╨╗╨╕ ╨▒╤ï╤ü╤é╤Ç╨╛ ΓÇö 85% ╨▓ ╤é╨╡╤ç╨╡╨╜╨╕╨╡ ╨╛╨┤╨╜╨╛╨╣ ╨╝╨╕╨╜╤â╤é╤ï. ╨¥╨╛ ╨║╨╛╨│╨┤╨░ ╤â╤ç╨░╤ü╤é╨╜╨╕╨║╨╕ ╨┐╨╛╨▓╨╡╤Ç╨╕╨╗╨╕, ╤ç╤é╨╛ ╤ç╨╡╤é╨▓╨╡╤Ç╨╛ ╨┤╤Ç╤â╨│╨╕╤à ╤é╨╛╨╢╨╡ ╤ü╨╗╤â╤ê╨░╤Ä╤é, ╨╛╤é╨▓╨╡╤é╨╕╨╗ ╤é╨╛╨╗╤î╨║╨╛ 31%.\n\n╨ö╨░╤Ç╨╗╨╕ ╨╕ ╨¢╨░╤é╨░╨╜╨╡ ╨╜╨░╨╖╨▓╨░╨╗╨╕ ╤ì╤é╨╛ ┬½╤ì╤ä╤ä╨╡╨║╤é╨╛╨╝ ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╤Å┬╗ ΓÇö ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╡╨╜╨╕╨╡ ╤é╨╛╨│╨╛, ╤ç╤é╨╛ ╨┐╤Ç╨╕╤ü╤â╤é╤ü╤é╨▓╨╕╨╡ ╨┤╤Ç╤â╨│╨╕╤à ╤ü╨╜╨╕╨╢╨░╨╡╤é ╨╕╨╜╨┤╨╕╨▓╨╕╨┤╤â╨░╨╗╤î╨╜╨╛╨╡ ╨┐╨╛╨╝╨╛╨│╨░╤Ä╤ë╨╡╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨┐╨╛╤ü╤Ç╨╡╨┤╤ü╤é╨▓╨╛╨╝ ╨┤╨▓╤â╤à ╨╝╨╡╤à╨░╨╜╨╕╨╖╨╝╨╛╨▓: ╤Ç╨░╤ü╨┐╤ï╨╗╨╡╨╜╨╕╤Å ╨╛╤é╨▓╨╡╤é╤ü╤é╨▓╨╡╨╜╨╜╨╛╤ü╤é╨╕ (┬½╨║╤é╨╛-╤é╨╛ ╨┤╤Ç╤â╨│╨╛╨╣ ╨┐╨╛╨╝╨╛╨╢╨╡╤é┬╗) ╨╕ ╨┐╨╗╤Ä╤Ç╨░╨╗╨╕╤ü╤é╨╕╤ç╨╡╤ü╨║╨╛╨│╨╛ ╨╜╨╡╨▓╨╡╨╢╨╡╤ü╤é╨▓╨░ (┬½╨╜╨╕╨║╤é╨╛ ╨▒╨╛╨╗╤î╤ê╨╡ ╨╜╨╡ ╨╛╨▒╨╡╤ü╨┐╨╛╨║╨╛╨╡╨╜, ╨┐╨╛╤ì╤é╨╛╨╝╤â ╤ì╤é╨╛ ╨╜╨╡ ╨┤╨╛╨╗╨╢╨╜╨╛ ╨▒╤ï╤é╤î ╤ü╨╡╤Ç╤î╨╡╨╖╨╜╨╛┬╗).\n\n╨ƒ╤Ç╨╕╨╝╨╡╤ç╨░╨╜╨╕╨╡. ╨æ╨╛╨╗╨╡╨╡ ╨┐╨╛╨╖╨┤╨╜╨╕╨╡ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨┐╨╛╨║╨░╨╖╨░╨╗╨╕, ╤ç╤é╨╛ ╨┐╨╡╤Ç╨▓╨╛╨╜╨░╤ç╨░╨╗╤î╨╜╨░╤Å ╨╕╤ü╤é╨╛╤Ç╨╕╤Å Times ╨▒╤ï╨╗╨░ ╨╖╨╜╨░╤ç╨╕╤é╨╡╨╗╤î╨╜╨╛ ╨┐╤Ç╨╡╤â╨▓╨╡╨╗╨╕╤ç╨╡╨╜╨░: ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╤Å╨╝╨╕ ╨╜╨░╨┐╨░╨┤╨╡╨╜╨╕╤Å ╤ü╤é╨░╨╗╨╛ ╨╝╨╡╨╜╤î╤ê╨╡ ╨╗╤Ä╨┤╨╡╨╣, ╤ç╨╡╨╝ ╤â╤é╨▓╨╡╤Ç╨╢╨┤╨░╨╗╨╛╤ü╤î, ╨░ ╨╜╨╡╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨▓╤ü╨╡ ╨╢╨╡ ╨▓╤ï╨╖╨▓╨░╨╗╨╕ ╨┐╨╛╨╗╨╕╤å╨╕╤Ä. ╨¥╨╛ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╛╨╜╨╛ ╨▓╨┤╨╛╤à╨╜╨╛╨▓╨╕╨╗╨╛, ╨┐╨╛╨╗╤â╤ç╨╕╨╗╨╕ ╤â╨▒╨╡╨┤╨╕╤é╨╡╨╗╤î╨╜╨╛╨╡ ╨┐╨╛╨┤╤é╨▓╨╡╤Ç╨╢╨┤╨╡╨╜╨╕╨╡.",
    "moralHy": "╒ê╓Ç╓ä╒í╒╢ ╒╖╒í╒┐ ╒┤╒í╓Ç╒ñ╒½╒» ╒╢╒Ñ╓Ç╒»╒í ╒ú╒┐╒╢╒╛╒Ñ╒╢ ╒í╓Ç╒┐╒í╒»╒í╓Ç╒ú ╒½╓Ç╒í╒╛╒½╒│╒í╒»╒╢╒Ñ╓Ç╒½ ╒¬╒í╒┤╒í╒╢╒í╒», ╒í╒╡╒╢╓ä╒í╒╢ ╓ä╒½╒╣ ╒░╒í╒╛╒í╒╢╒í╒»╒í╒╢ ╒º, ╒╕╓Ç ╒╕╓Ç╓ç╒º ╒í╒╢╒░╒í╒┐ ╓à╒ú╒╢╒½, ╒ñ╒í ╒░╒í╒»╒í╒½╒╢╒┐╒╕╓é╒½╒┐╒½╒╛ ╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒╕╓é╒┤ ╒º, ╒╕╓Ç╒¿ ╓â╓Ç╒»╒╕╓é╒┤ ╒º ╒»╒╡╒í╒╢╓ä╒½╒╢:",
    "moralRu": "╨º╨╡╨╝ ╨▒╨╛╨╗╤î╤ê╨╡ ╨╗╤Ä╨┤╨╡╨╣ ╨┐╤Ç╨╕╤ü╤â╤é╤ü╤é╨▓╤â╨╡╤é ╨▓╨╛ ╨▓╤Ç╨╡╨╝╤Å ╤ç╤Ç╨╡╨╖╨▓╤ï╤ç╨░╨╣╨╜╨╛╨╣ ╤ü╨╕╤é╤â╨░╤å╨╕╨╕, ╤é╨╡╨╝ ╨╝╨╡╨╜╤î╤ê╨╡ ╨▓╨╡╤Ç╨╛╤Å╤é╨╜╨╛╤ü╤é╤î ╤é╨╛╨│╨╛, ╤ç╤é╨╛ ╨║╤é╨╛-╤é╨╛ ╤ü╨╝╨╛╨╢╨╡╤é ╨┐╨╛╨╝╨╛╤ç╤î ΓÇô ╨░ ╤ì╤é╨╛ ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╤Ç╨╡╤ç╨╕╨▓╤ï╨╣ ╨▓╤ï╨▓╨╛╨┤, ╨║╨╛╤é╨╛╤Ç╤ï╨╣ ╨╝╨╛╨╢╨╡╤é ╤ü╨┐╨░╤ü╤é╨╕ ╨╢╨╕╨╖╨╜╨╕ ╨╗╤Ä╨┤╨╡╨╣.",
    "moralAz": "F├╢vq╔Ölad╔Ö v╔Öziyy╔Öt zaman─▒ n╔Ö q╔Öd╔Ör ├ºox insan i┼ƒtirak ets╔Ö, h╔Ör hans─▒ bir ┼ƒ╔Öxsin k├╢m╔Ök etm╔Ö ehtimal─▒ bir o q╔Öd╔Ör az olar - bu, h╔Öyat qurtaran n╔Ötic╔Öl╔Öri olan ╔Öks-intuitiv tap─▒nt─▒d─▒r."
  },
  {
    "id": 8,
    "title": "Seligman and the Dogs Who Gave Up",
    "titleKa": "ßâíßâößâÜßâÿßâÆßâ¢ßâÉßâ£ßâÿ ßâôßâÉ ßâ½ßâÉßâªßâÜßâößâæßâÿ, ßâáßâ¥ßâ¢ßâÜßâößâæßâ¢ßâÉßâè ßâôßâÉßâ£ßâößâæßâôßâößâí",
    "chapterId": 10,
    "icon": "mdi:emoticon-sad-outline",
    "content": "In 1967, Martin Seligman and Steven Maier were graduate students at the University of Pennsylvania conducting research on learning. Their experiment would accidentally reveal one of psychology's most important concepts.\n\nThe experiment had three groups of dogs. Group 1 received mild electric shocks they could stop by pressing a panel with their noses. Group 2 received the same shocks but had no way to stop themΓÇöthey were \"yoked\" to Group 1, receiving the exact same pattern of shocks regardless of what they did. Group 3 received no shocks at all.\n\nLater, all three groups were placed in a shuttle boxΓÇöa chamber divided by a low barrier the dogs could easily jump over. Shocks were delivered to one side, and the dogs simply needed to jump to the other side to escape.\n\nGroups 1 and 3 quickly learned to jump the barrier. But Group 2ΓÇöthe dogs who had previously been unable to escapeΓÇödidn't even try. They lay down, whimpered, and passively accepted the shock. Two-thirds of them made no attempt to escape, even though the barrier was right there.\n\nSeligman called this \"learned helplessness\"ΓÇöthe state in which, after experiencing uncontrollable negative events, an organism stops trying to change its situation even when escape becomes possible.\n\nThe implications extended far beyond dogs. Seligman proposed that learned helplessness was a key model for understanding human depression. People who experience repeated failures or uncontrollable negative events may develop a pervasive belief that their actions don't matterΓÇöleading to passivity, sadness, and withdrawal.\n\nThis insight led Seligman to develop new therapeutic approaches. Crucially, he discovered that learned helplessness could be reversed through \"immunization\"ΓÇöearlier experiences of mastery and control. This eventually led him to found the field of positive psychology, studying not just what makes people sick but what makes them flourish.",
    "contentKa": "1967 ßâ¼ßâößâÜßâí, ßâ¢ßâÉßâáßâóßâÿßâ£ ßâíßâößâÜßâÿßâÆßâ¢ßâÉßâ£ßâ¢ßâÉ ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ ßâ⌐ßâÉßâÉßâóßâÉßâáßâÉ ßâ½ßâÉßâªßâÜßâößâæßâûßâö, ßâáßâ¥ßâ¢ßâÜßâößâæßâíßâÉßâè ßâößâÜßâößâÑßâóßâáßâ¥ßâ¿ßâ¥ßâÖßâÿßâíßâÆßâÉßâ£ ßâùßâÉßâòßâÿßâí ßâôßâÉßâªßâ¼ßâößâòßâÉ ßâÉßâá ßâ¿ßâößâößâ½ßâÜßâ¥ßâù. ßâ¢ßâ¥ßâÆßâòßâÿßâÉßâ£ßâößâæßâÿßâù ßâ¢ßâÉßâù ßâùßâÉßâòßâÿßâí ßâôßâÉßâªßâ¼ßâößâòßâÉßâè ßâ¿ßâößâößâ½ßâÜßâ¥ßâù, ßâ¢ßâÉßâÆßâáßâÉßâ¢ ßâÉßâá ßâíßâ¬ßâÉßâôßâößâí. ßâíßâößâÜßâÿßâÆßâ¢ßâÉßâ£ßâ¢ßâÉ ßâÉßâ¢ßâÉßâí \"ßâíßâ¼ßâÉßâòßâÜßâÿßâÜßâÿ ßâúßâ½ßâÜßâúßâáßâ¥ßâæßâÉ\" ßâúßâ¼ßâ¥ßâôßâÉ ßâôßâÉ ßâößâí ßâôßâößâ₧ßâáßâößâíßâÿßâÿßâí ßâÆßâÉßâÆßâößâæßâÿßâí ßâ¢ßâ¥ßâôßâößâÜßâÉßâô ßâÿßâÑßâèßâÉ. ßâ¢ßâ¥ßâÆßâòßâÿßâÉßâ£ßâößâæßâÿßâù ßâ¢ßâÉßâ£ ßâ₧ßâ¥ßâûßâÿßâóßâÿßâúßâáßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâôßâÉßâÉßâÉßâáßâíßâÉ.",
    "moral": "Repeated failure can teach us to stop tryingΓÇöbut helplessness can be unlearned. Experiences of mastery and control can reverse it.",
    "moralKa": "ßâÆßâÉßâ£ßâ¢ßâößâ¥ßâáßâößâæßâúßâÜßâ¢ßâÉ ßâ¼ßâÉßâáßâúßâ¢ßâÉßâóßâößâæßâößâæßâ¢ßâÉ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâÆßâòßâÉßâíßâ¼ßâÉßâòßâÜßâ¥ßâí ßâôßâÉßâ£ßâößâæßâôßâößâí, ßâ¢ßâÉßâÆßâáßâÉßâ¢ ßâúßâ½ßâÜßâúßâáßâ¥ßâæßâÉßâí ßâÆßâÉßâôßâÉßâíßâ¼ßâÉßâòßâÜßâÉ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ.",
    "titleRu": "╨í╨╡╨╗╨╕╨│╨╝╨░╨╜ ╨╕ ╤ü╨┤╨░╨▓╤ê╨╕╨╡╤ü╤Å ╤ü╨╛╨▒╨░╨║╨╕",
    "moralAz": "T╔Ökrarlanan u─ƒursuzluqlar biz╔Ö c╔Öhd etm╔Öyi dayand─▒rma─ƒ─▒ ├╢yr╔Öd╔Ö bil╔Ör, lakin acizlik ├╢yr╔Önil╔Ö bil╔Ör. Ustal─▒q v╔Ö n╔Özar╔Öt t╔Öcr├╝b╔Öl╔Öri onu geri qaytara bil╔Ör.",
    "moralRu": "╨ƒ╨╛╨▓╤é╨╛╤Ç╤Å╤Ä╤ë╨╕╨╡╤ü╤Å ╨╜╨╡╤â╨┤╨░╤ç╨╕ ╨╝╨╛╨│╤â╤é ╨╜╨░╤â╤ç╨╕╤é╤î ╨╜╨░╤ü ╨┐╨╡╤Ç╨╡╤ü╤é╨░╤é╤î ╨┐╤ï╤é╨░╤é╤î╤ü╤Å, ╨╜╨╛ ╨╛╤é ╨▒╨╡╤ü╨┐╨╛╨╝╨╛╤ë╨╜╨╛╤ü╤é╨╕ ╨╝╨╛╨╢╨╜╨╛ ╨╛╤é╤â╤ç╨╕╤é╤î╤ü╤Å. ╨₧╨┐╤ï╤é ╨╝╨░╤ü╤é╨╡╤Ç╤ü╤é╨▓╨░ ╨╕ ╨║╨╛╨╜╤é╤Ç╨╛╨╗╤Å ╨╝╨╛╨╢╨╡╤é ╨╛╨▒╤Ç╨░╤é╨╕╤é╤î ╤ì╤é╨╛ ╨▓╤ü╨┐╤Å╤é╤î.",
    "moralHy": "╘┐╓Ç╒»╒╢╒╛╒╕╒▓ ╒▒╒í╒¡╒╕╒▓╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒╜╒╕╒╛╒╕╓Ç╒Ñ╓ü╒╢╒Ñ╒¼ ╒┤╒Ñ╒ª ╒ñ╒í╒ñ╒í╓Ç╒Ñ╓ü╒╢╒Ñ╒¼ ╓â╒╕╓Ç╒▒╒Ñ╓Ç╒¿, ╒ó╒í╒╡╓ü ╒í╒╢╓à╒ú╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º ╒╣╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼: ╒Ä╒í╓Ç╒║╒Ñ╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╓ç ╒╛╒Ñ╓Ç╒í╒░╒╜╒»╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╓â╒╕╓Ç╒▒╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º ╒╖╓Ç╒╗╒Ñ╒¼ ╒í╒╡╒╢:",
    "titleHy": "╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢╒¿ ╓ç ╒╖╒╢╒Ñ╓Ç╒¿, ╒╕╒╛╓ä╒Ñ╓Ç ╒░╒í╒╢╒▒╒╢╒╛╒Ñ╓ü╒½╒╢",
    "contentHy": "1967╒⌐.-╒½╒╢ ╒ä╒í╓Ç╒┐╒½╒╢ ╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢╒¿ ╓ç ╒ì╒⌐╒½╒╛╒Ñ╒╢ ╒ä╒í╒╡╒Ñ╓Ç╒¿ ╒ô╒Ñ╒╢╒╜╒½╒¼╒╛╒í╒╢╒½╒í╒╡╒½ ╒░╒í╒┤╒í╒¼╒╜╒í╓Ç╒í╒╢╒½ ╒í╒╜╒║╒½╓Ç╒í╒╢╒┐╒╢╒Ñ╓Ç ╒º╒½╒╢, ╒╕╓Ç╒╕╒╢╓ä ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒º╒½╒╢ ╒»╒í╒┐╒í╓Ç╒╕╓é╒┤ ╒╕╓é╒╜╒┤╒í╒╢ ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒╡╒í╒¼: ╒å╓Ç╒í╒╢╓ü ╓â╒╕╓Ç╒▒╒¿ ╒║╒í╒┐╒í╒░╒í╒ó╒í╓Ç ╒»╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒Ñ╓Ç ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒í╒┤╒Ñ╒╢╒í╒»╒í╓Ç╓ç╒╕╓Ç ╒░╒í╒╜╒»╒í╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½╓ü ╒┤╒Ñ╒»╒¿:\n\n╒ô╒╕╓Ç╒▒╒¿ ╒╕╓é╒╢╒Ñ╓ü╒Ñ╒¼ ╒º ╒╖╒╢╒Ñ╓Ç╒½ ╒Ñ╓Ç╒Ñ╓ä ╒¡╒╕╓é╒┤╒ó. 1-╒½╒╢ ╒¡╒╕╓é╒┤╒ó╒¿ ╒╜╒┐╒í╓ü╒Ñ╒¼ ╒º ╒⌐╒Ñ╒⌐╓ç ╒º╒¼╒Ñ╒»╒┐╓Ç╒í╒»╒í╒╢ ╓ü╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç, ╒╕╓Ç╒╕╒╢╓ä ╒»╒í╓Ç╒╕╒▓ ╒º╒½╒╢ ╒ñ╒í╒ñ╒í╓Ç╒Ñ╓ü╒╢╒Ñ╒¼╒¥ ╒╜╒Ñ╒▓╒┤╒Ñ╒¼╒╕╒╛ ╒╛╒í╒░╒í╒╢╒í╒»╒¿ ╒½╓Ç╒Ñ╒╢╓ü ╓ä╒⌐╒╕╒╛: 2-╓Ç╒ñ ╒¡╒╕╓é╒┤╒ó╒¿ ╒╜╒┐╒í╓ü╒í╒╛ ╒╢╒╕╓é╒╡╒╢ ╓ü╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿, ╒ó╒í╒╡╓ü ╒╣╒»╒í╓Ç╒╕╒▓╒í╓ü╒í╒╛ ╒ñ╓Ç╒í╒╢╓ä ╒»╒í╒╢╒ú╒╢╒Ñ╓ü╒╢╒Ñ╒¼. ╒╢╓Ç╒í╒╢╓ä ┬½╒¼╒«╒╛╒Ñ╓ü╒½╒╢┬╗ 1-╒½╒╢ ╒¡╒┤╒ó╒½╒╢╒¥ ╒╜╒┐╒í╒╢╒í╒¼╒╕╒╛ ╓ü╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╒│╒½╒╖╒┐ ╒╢╒╕╓é╒╡╒╢ ╓à╓Ç╒½╒╢╒í╒╣╒í╓â╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿╒¥ ╒í╒╢╒»╒í╒¡ ╒╢╓Ç╒í╒╢╓ü ╒í╓Ç╒í╒«╒½╓ü: 3-╓Ç╒ñ ╒¡╒╕╓é╒┤╒ó╒╢ ╒¿╒╢╒ñ╒░╒í╒╢╓Ç╒í╒║╒Ñ╒╜ ╓ü╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç ╒╣╒½ ╒╜╒┐╒í╓ü╒Ñ╒¼:\n\n╘▒╒╛╒Ñ╒¼╒½ ╒╕╓é╒╖ ╒ó╒╕╒¼╒╕╓Ç ╒Ñ╓Ç╒Ñ╓ä ╒¡╒┤╒ó╒Ñ╓Ç╒¿ ╒┐╒Ñ╒▓╒í╒ñ╓Ç╒╛╒Ñ╓ü╒½╒╢ ╒┤╒í╓ä╒╕╓ä╒í╒╡╒½╒╢ ╒┐╒╕╓é╓â╒½ ╒┤╒Ñ╒╗╒¥ ╒┤╒½ ╒¡╓ü╒½╒», ╒╕╓Ç╒¿ ╒ó╒í╒¬╒í╒╢╒╛╒í╒« ╒º╓Ç ╓ü╒í╒«╓Ç ╒í╓Ç╒ú╒Ñ╒¼╓ä╒╕╒╛, ╒╕╓Ç╒½ ╒╛╓Ç╒í╒╡╒╕╒╛ ╒╖╒╢╒Ñ╓Ç╒¿ ╒░╒Ñ╒╖╒┐╒╕╓é╒⌐╒╡╒í╒┤╒ó ╒»╒í╓Ç╒╕╒▓ ╒º╒½╒╢ ╓ü╒í╒┐╒»╒Ñ╒¼╓ë ╒æ╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿ ╒░╒í╒╜╓ü╒╛╒Ñ╒¼ ╒Ñ╒╢ ╒┤╒½ ╒»╒╕╒▓╒┤╒½╓ü, ╓ç ╒╖╒╢╒Ñ╓Ç╒½╒╢ ╒║╒í╓Ç╒ª╒í╒║╒Ñ╒╜ ╒í╒╢╒░╓Ç╒í╒¬╒Ñ╒╖╒┐ ╒º ╒Ñ╒▓╒Ñ╒¼ ╓ü╒í╒┐╒»╒Ñ╒¼ ╒┤╒╡╒╕╓é╒╜ ╒»╒╕╒▓╒┤╒¥ ╓â╒í╒¡╒╣╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:\n\n1-╒½╒╢ ╓ç 3-╓Ç╒ñ ╒¡╒┤╒ó╒Ñ╓Ç╒╢ ╒í╓Ç╒í╒ú ╒╜╒╕╒╛╒╕╓Ç╒Ñ╓ü╒½╒╢ ╓ü╒í╒┐╒»╒Ñ╒¼ ╒í╓Ç╒ú╒Ñ╒¼╒í╒║╒í╒┐╒╢╒Ñ╒╖╒¿: ╘▓╒í╒╡╓ü 2-╓Ç╒ñ ╒¡╒╕╓é╒┤╒ó╒¿╒¥ ╒╖╒╢╒Ñ╓Ç╒¿, ╒╕╓Ç╒╕╒╢╓ä ╒╢╒í╒¡╒»╒½╒╢╒╕╓é╒┤ ╒╣╒º╒½╒╢ ╒»╒í╓Ç╒╕╒▓╒í╒╢╒╕╓é╒┤ ╓â╒í╒¡╒╣╒Ñ╒¼, ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒╣╓â╒╕╓Ç╒▒╒Ñ╓ü╒½╒╢: ╒å╓Ç╒í╒╢╓ä ╒║╒í╒╝╒»╒Ñ╓ü╒½╒╢, ╒╢╒╛╒╢╒╛╒í╓ü╒½╒╢ ╓ç ╒║╒í╒╜╒½╒╛ ╒¿╒╢╒ñ╒╕╓é╒╢╒Ñ╓ü╒½╒╢ ╓ü╒╢╓ü╒╕╓é╒┤╒¿╓ë ╒å╓Ç╒í╒╢╓ü ╒Ñ╓Ç╒»╒╕╓é ╒Ñ╓Ç╓Ç╒╕╓Ç╒ñ╒¿ ╓â╒í╒¡╒╣╒Ñ╒¼╒╕╓é ╓â╒╕╓Ç╒▒╒Ñ╓Ç ╒╣╒í╓Ç╒Ñ╓ü╒½╒╢, ╒╣╒╢╒í╒╡╒í╒« ╒╕╓Ç ╒║╒í╒┐╒╢╒Ñ╒╖╒¿ ╒░╒Ñ╒╢╓ü ╒í╒╡╒╢╒┐╒Ñ╒▓ ╒º╓Ç╓ë\n\n╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢╒¿ ╒╜╒í ╒í╒╢╒╛╒í╒╢╒Ñ╓ü ┬½╒╜╒╕╒╛╒╕╓Ç╒í╒« ╒í╒╢╓à╒ú╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢┬╗╒¥ ╒í╒╡╒╢ ╒╛╒½╒│╒í╒»╒¿, ╒Ñ╓Ç╒ó ╒í╒╢╒»╒í╒╝╒í╒╛╒í╓Ç╒Ñ╒¼╒½ ╒ó╒í╓ü╒í╒╜╒í╒»╒í╒╢ ╒½╓Ç╒í╒ñ╒í╓Ç╒▒╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒í╒║╓Ç╒Ñ╒¼╒╕╓é╓ü ╒░╒Ñ╒┐╒╕ ╓à╓Ç╒ú╒í╒╢╒½╒ª╒┤╒¿ ╒ñ╒í╒ñ╒í╓Ç╒╕╓é╒┤ ╒º ╓â╒╕╓Ç╒▒╒Ñ╒¼ ╓â╒╕╒¡╒Ñ╒¼ ╒½╓Ç ╒½╓Ç╒í╒╛╒½╒│╒í╒»╒¿, ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒Ñ╓Ç╒ó ╒░╒╢╒í╓Ç╒í╒╛╒╕╓Ç ╒º ╒ñ╒í╒╝╒╢╒╕╓é╒┤ ╓â╒í╒¡╒╕╓é╒╜╒┐╒¿:\n\n╒Ç╒Ñ╒┐╓ç╒í╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒╖╒í╒┐ ╒í╒╛╒Ñ╒¼╒½ ╒░╒Ñ╒╝╒╕╓é ╒º╒½╒╢ ╒╖╒╢╒Ñ╓Ç╒½╓ü: ╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢╒¿ ╒í╒╝╒í╒╗╒í╓Ç╒»╒Ñ╓ü, ╒╕╓Ç ╒╜╒╕╒╛╒╕╓Ç╒í╒« ╒í╒╢╓à╒ú╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒┤╒í╓Ç╒ñ╒»╒í╒╡╒½╒╢ ╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í╒╢ ╒░╒í╒╜╒»╒í╒╢╒í╒¼╒╕╓é ╒░╒½╒┤╒╢╒í╒»╒í╒╢ ╒┤╒╕╒ñ╒Ñ╒¼╒╢ ╒º: ╒ä╒í╓Ç╒ñ╒½╒», ╒╕╒╛╓ä╒Ñ╓Ç ╒╕╓é╒╢╒Ñ╒╢╒╕╓é╒┤ ╒Ñ╒╢ ╒»╓Ç╒»╒╢╒╛╒╕╒▓ ╒í╒╢╒░╒í╒╗╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒»╒í╒┤ ╒í╒╢╒»╒í╒╝╒í╒╛╒í╓Ç╒Ñ╒¼╒½ ╒ó╒í╓ü╒í╒╜╒í╒»╒í╒╢ ╒½╓Ç╒í╒ñ╒í╓Ç╒▒╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç, ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒ª╒í╓Ç╒ú╒í╓ü╒╢╒Ñ╒¼ ╒░╒í╒┤╒í╒┐╒í╓Ç╒í╒« ╒░╒í╒┤╒╕╒ª╒┤╒╕╓é╒╢╓ä, ╒╕╓Ç ╒½╓Ç╒Ñ╒╢╓ü ╒ú╒╕╓Ç╒«╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╣╒╕╓é╒╢╒Ñ╒╢, ╒½╒╢╒╣╒¿ ╒░╒í╒╢╒ú╒Ñ╓ü╒╢╒╕╓é╒┤ ╒º ╒║╒í╒╜╒½╒╛╒╕╓é╒⌐╒╡╒í╒╢, ╒┐╒¡╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╓ç ╒░╒Ñ╒╝╒í╒╢╒í╒¼╒╕╓é:\n\n╘▒╒╡╒╜ ╒║╒í╒┐╒»╒Ñ╓Ç╒í╓ü╒╕╓é╒┤╒¿ ╒╜╒┐╒½╒║╒Ñ╓ü ╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢╒½╒╢ ╒┤╒╖╒í╒»╒Ñ╒¼ ╒╢╒╕╓Ç ╒⌐╒Ñ╓Ç╒í╒║╓ç╒┐╒½╒» ╒┤╒╕╒┐╒Ñ╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç: ╘┐╒í╓Ç╓ç╒╕╓Ç╒╢ ╒í╒╡╒╢ ╒º, ╒╕╓Ç ╒╢╒í ╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒Ñ╓ü, ╒╕╓Ç ╒╜╒╕╒╛╒╕╓Ç╒í╒« ╒í╒╢╓à╒ú╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒í╓Ç╒╕╒▓ ╒º ╒╖╓Ç╒╗╒╛╒Ñ╒¼ ┬½╒½╒┤╒╕╓é╒╢╒½╒ª╒í╓ü╒½╒í╒╡╒½┬╗ ╒┤╒½╒╗╒╕╓ü╒╕╒╛╒¥ ╒╡╒╕╓é╓Ç╒í╓ü╒┤╒í╒╢ ╓ç ╒╛╒Ñ╓Ç╒í╒░╒╜╒»╒┤╒í╒╢ ╒í╒╛╒Ñ╒¼╒½ ╒╛╒í╒▓ ╓â╒╕╓Ç╒▒╒í╒╝╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒┤╒½╒╗╒╕╓ü╒╕╒╛: ╒ì╒í, ╒½ ╒╛╒Ñ╓Ç╒╗╒╕, ╒╜╒┐╒½╒║╒Ñ╓ü ╒╢╓Ç╒í╒╢ ╒░╒½╒┤╒╢╒Ñ╒¼ ╒ñ╓Ç╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╕╒¼╒╕╓Ç╒┐╒¿╒¥ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒Ñ╒¼╒╕╒╛ ╒╕╒╣ ╒┤╒½╒í╒╡╒╢ ╒í╒╡╒╢, ╒½╒╢╒╣╒╢ ╒º ╒┤╒í╓Ç╒ñ╒»╒í╒╢╓ü ╒░╒½╒╛╒í╒╢╒ñ╒í╓ü╒╢╒╕╓é╒┤, ╒í╒╡╒¼ ╒í╒╡╒╢, ╒½╒╢╒╣╒¿ ╒╢╓Ç╒í╒╢╓ü ╒«╒í╒▓╒»╒╕╓é╒┤ ╒º ╒ñ╒í╓Ç╒▒╒╢╒╕╓é╒┤:",
    "titleAz": "Seligman v╔Ö imtina ed╔Ön itl╔Ör",
    "contentAz": "1967-ci ild╔Ö Martin Seligman v╔Ö Steven Maier Pensilvaniya Universitetind╔Ö ├╢yr╔Önm╔Ö ├╝zr╔Ö t╔Ödqiqat aparan aspirant idil╔Ör. Onlar─▒n t╔Öcr├╝b╔Ösi t╔Ösad├╝f╔Ön psixologiyan─▒n ╔Ön vacib anlay─▒┼ƒlar─▒ndan birini ortaya ├º─▒xaracaqd─▒.\n\nT╔Öcr├╝b╔Öd╔Ö ├╝├º qrup it var idi. 1-ci qrup burunlar─▒ il╔Ö panel╔Ö basaraq dayand─▒ra bildikl╔Öri y├╝ng├╝l elektrik ┼ƒoku ald─▒lar. 2-ci qrup eyni z╔Örb╔Öl╔Öri ald─▒, lakin onlar─▒ dayand─▒rmaq ├╝├º├╝n he├º bir yol yox idi - onlar 1-ci qrupa \"boyunduruldular\" v╔Ö n╔Ö etm╔Öl╔Örind╔Ön as─▒l─▒ olmayaraq eyni z╔Örb╔Ö modelini ald─▒lar. 3-c├╝ qrup he├º bir z╔Örb╔Ö almad─▒.\n\nDaha sonra h╔Ör ├╝├º qrup itl╔Örin asanl─▒qla tullana bildiyi al├ºaq bir mane╔Ö il╔Ö b├╢l├╝nm├╝┼ƒ bir kameraya yerl╔Ö┼ƒdirildi. Z╔Örb╔Öl╔Ör bir t╔Ör╔Öf╔Ö ├ºatd─▒r─▒ld─▒ v╔Ö itl╔Ör qa├ºmaq ├╝├º├╝n sad╔Öc╔Ö dig╔Ör t╔Ör╔Öf╔Ö tullanmal─▒ idi.\n\n1 v╔Ö 3-c├╝ qruplar s╔Öddd╔Ön tullanma─ƒ─▒ tez ├╢yr╔Öndil╔Ör. Lakin 2-ci qrup - ╔Övv╔Öll╔Ör qa├ºa bilm╔Öy╔Ön itl╔Ör - c╔Öhd bel╔Ö etm╔Ödil╔Ör. Onlar uzand─▒lar, s─▒z─▒ldad─▒lar v╔Ö ┼ƒoku passiv q╔Öbul etdil╔Ör. Onlar─▒n ├╝├ºd╔Ö ikisi mane╔Önin tam orada olmas─▒na baxmayaraq, qa├ºma─ƒa c╔Öhd etm╔Öyib.\n\nSeliqman bunu \"├╢yr╔Önilmi┼ƒ ├ºar╔Ösizlik\" adland─▒rd─▒ - orqanizmin idar╔Öolunmaz neqativ hadis╔Öl╔Örl╔Ö qar┼ƒ─▒la┼ƒd─▒qdan sonra h╔Ötta qa├ºmaq m├╝mk├╝n olduqda bel╔Ö v╔Öziyy╔Ötini d╔Öyi┼ƒm╔Öy╔Ö c╔Öhd etm╔Öyi dayand─▒rd─▒─ƒ─▒ v╔Öziyy╔Öt.\n\nN╔Ötic╔Öl╔Ör itl╔Örd╔Ön ├ºox k╔Önara ├º─▒xd─▒. Seligman, ├╢yr╔Önilmi┼ƒ ├ºar╔Ösizliyin insan depressiyas─▒n─▒ anlamaq ├╝├º├╝n ╔Ösas model oldu─ƒunu t╔Öklif etdi. D╔Öf╔Öl╔Örl╔Ö u─ƒursuzluqlar v╔Ö ya idar╔Öolunmaz neqativ hadis╔Öl╔Örl╔Ö qar┼ƒ─▒la┼ƒan insanlar, h╔Ör╔Ök╔Ötl╔Örinin he├º bir ╔Öh╔Ömiyy╔Öt k╔Ösb etm╔Ödiyin╔Ö dair geni┼ƒ bir inam inki┼ƒaf etdir╔Ö bil╔Ör - passivliy╔Ö, k╔Öd╔Ör╔Ö v╔Ö geri ├º╔Ökilm╔Öy╔Ö s╔Öb╔Öb olur.\n\nBu fikir Seligman─▒ yeni terapevtik yana┼ƒmalar inki┼ƒaf etdirm╔Öy╔Ö vadar etdi. ╞Åsas odur ki, o, ├╢yr╔Önilmi┼ƒ ├ºar╔Ösizliyin ΓÇ£immunizasiyaΓÇ¥ yolu il╔Ö geri qaytar─▒la bil╔Öc╔Öyini k╔Ö┼ƒf etdi - ╔Övv╔Ölki m╔Önims╔Öm╔Ö v╔Ö n╔Özar╔Öt t╔Öcr├╝b╔Öl╔Öri. Bu, n╔Öhay╔Öt, onu m├╝sb╔Öt psixologiya sah╔Ösini tapma─ƒa vadar etdi, insanlar─▒ n╔Öinki x╔Öst╔Öl╔Öndirdiyini, h╔Öm d╔Ö onlar─▒ ├ºi├º╔Ökl╔Öndir╔Ön ┼ƒeyi ├╢yr╔Öndi.",
    "contentRu": "╨Æ 1967 ╨│╨╛╨┤╤â ╨£╨░╤Ç╤é╨╕╨╜ ╨í╨╡╨╗╨╕╨│╨╝╨░╨╜ ╨╕ ╨í╤é╨╕╨▓╨╡╨╜ ╨£╨░╨╣╨╡╤Ç ╨▒╤ï╨╗╨╕ ╨░╤ü╨┐╨╕╤Ç╨░╨╜╤é╨░╨╝╨╕ ╨ƒ╨╡╨╜╤ü╨╕╨╗╤î╨▓╨░╨╜╤ü╨║╨╛╨│╨╛ ╤â╨╜╨╕╨▓╨╡╤Ç╤ü╨╕╤é╨╡╤é╨░ ╨╕ ╨┐╤Ç╨╛╨▓╨╛╨┤╨╕╨╗╨╕ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨▓ ╨╛╨▒╨╗╨░╤ü╤é╨╕ ╨╛╨▒╤â╤ç╨╡╨╜╨╕╤Å. ╨ÿ╤à ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é ╤ü╨╗╤â╤ç╨░╨╣╨╜╨╛ ╤Ç╨░╤ü╨║╤Ç╤ï╨╗ ╨╛╨┤╨╜╤â ╨╕╨╖ ╤ü╨░╨╝╤ï╤à ╨▓╨░╨╢╨╜╤ï╤à ╨║╨╛╨╜╤å╨╡╨┐╤å╨╕╨╣ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕.\n\n╨Æ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨╡ ╤â╤ç╨░╤ü╤é╨▓╨╛╨▓╨░╨╗╨╕ ╤é╤Ç╨╕ ╨│╤Ç╤â╨┐╨┐╤ï ╤ü╨╛╨▒╨░╨║. ╨ô╤Ç╤â╨┐╨┐╨░ 1 ╨┐╨╛╨╗╤â╤ç╨╕╨╗╨░ ╨╗╨╡╨│╨║╨╕╨╣ ╤â╨┤╨░╤Ç ╤é╨╛╨║╨╛╨╝, ╨║╨╛╤é╨╛╤Ç╤ï╨╣ ╨╛╨╜╨╕ ╨╝╨╛╨│╨╗╨╕ ╨╛╤ü╤é╨░╨╜╨╛╨▓╨╕╤é╤î, ╨╜╨░╨╢╨░╨▓ ╨╜╨╛╤ü╨╛╨╝ ╨╜╨░ ╨┐╨░╨╜╨╡╨╗╤î. ╨ô╤Ç╤â╨┐╨┐╨░ 2 ╨┐╨╛╨╗╤â╤ç╨╕╨╗╨░ ╤é╨╡ ╨╢╨╡ ╤ü╨░╨╝╤ï╨╡ ╨┐╨╛╤é╤Ç╤Å╤ü╨╡╨╜╨╕╤Å, ╨╜╨╛ ╨╜╨╡ ╨╕╨╝╨╡╨╗╨░ ╨▓╨╛╨╖╨╝╨╛╨╢╨╜╨╛╤ü╤é╨╕ ╨╕╤à ╨╛╤ü╤é╨░╨╜╨╛╨▓╨╕╤é╤î ΓÇö ╨╛╨╜╨╕ ╨▒╤ï╨╗╨╕ ┬½╨┐╤Ç╨╕╨▓╤Å╨╖╨░╨╜╤ï┬╗ ╨║ ╨ô╤Ç╤â╨┐╨┐╨╡ 1, ╨┐╨╛╨╗╤â╤ç╨░╤Å ╤é╨╛╤ç╨╜╨╛ ╤é╨░╨║╤â╤Ä ΓÇïΓÇï╨╢╨╡ ╤ü╤à╨╡╨╝╤â ╨┐╨╛╤é╤Ç╤Å╤ü╨╡╨╜╨╕╨╣, ╨╜╨╡╨╖╨░╨▓╨╕╤ü╨╕╨╝╨╛ ╨╛╤é ╤é╨╛╨│╨╛, ╤ç╤é╨╛ ╨╛╨╜╨╕ ╨┤╨╡╨╗╨░╨╗╨╕. ╨ô╤Ç╤â╨┐╨┐╨░ 3 ╨▓╨╛╨╛╨▒╤ë╨╡ ╨╜╨╡ ╨┐╨╛╨┤╨▓╨╡╤Ç╨│╨░╨╗╨░╤ü╤î ╨╜╨╕╨║╨░╨║╨╕╨╝ ╨┐╨╛╤é╤Ç╤Å╤ü╨╡╨╜╨╕╤Å╨╝.\n\n╨ƒ╨╛╨╖╨╢╨╡ ╨▓╤ü╨╡ ╤é╤Ç╨╕ ╨│╤Ç╤â╨┐╨┐╤ï ╨▒╤ï╨╗╨╕ ╨┐╨╛╨╝╨╡╤ë╨╡╨╜╤ï ╨▓ ╤ç╨╡╨╗╨╜╨╛╤ç╨╜╤ï╨╣ ╨▒╨╛╨║╤ü ΓÇö ╨║╨░╨╝╨╡╤Ç╤â, ╤Ç╨░╨╖╨┤╨╡╨╗╨╡╨╜╨╜╤â╤Ä ╨╜╨╡╨▓╤ï╤ü╨╛╨║╨╕╨╝ ╨▒╨░╤Ç╤î╨╡╤Ç╨╛╨╝, ╤ç╨╡╤Ç╨╡╨╖ ╨║╨╛╤é╨╛╤Ç╤ï╨╣ ╤ü╨╛╨▒╨░╨║╨╕ ╨╝╨╛╨│╨╗╨╕ ╨╗╨╡╨│╨║╨╛ ╨┐╨╡╤Ç╨╡╨┐╤Ç╤ï╨│╨╜╤â╤é╤î. ╨ú╨┤╨░╤Ç╤ï ╨╜╨░╨╜╨╛╤ü╨╕╨╗╨╕╤ü╤î ╨▓ ╨╛╨┤╨╜╤â ╤ü╤é╨╛╤Ç╨╛╨╜╤â, ╨╕ ╤ü╨╛╨▒╨░╨║╨░╨╝ ╨┐╤Ç╨╛╤ü╤é╨╛ ╨╜╤â╨╢╨╜╨╛ ╨▒╤ï╨╗╨╛ ╨┐╨╡╤Ç╨╡╨┐╤Ç╤ï╨│╨╜╤â╤é╤î ╨╜╨░ ╨┤╤Ç╤â╨│╤â╤Ä ╤ü╤é╨╛╤Ç╨╛╨╜╤â, ╤ç╤é╨╛╨▒╤ï ╤ü╨┐╨░╤ü╤é╨╕╤ü╤î.\n\n╨ô╤Ç╤â╨┐╨┐╤ï 1 ╨╕ 3 ╨▒╤ï╤ü╤é╤Ç╨╛ ╨╜╨░╤â╤ç╨╕╨╗╨╕╤ü╤î ╨┐╨╡╤Ç╨╡╨┐╤Ç╤ï╨│╨╕╨▓╨░╤é╤î ╨▒╨░╤Ç╤î╨╡╤Ç. ╨¥╨╛ ╨│╤Ç╤â╨┐╨┐╨░ 2 ΓÇö ╤ü╨╛╨▒╨░╨║╨╕, ╤Ç╨░╨╜╨╡╨╡ ╨╜╨╡ ╤ü╤â╨╝╨╡╨▓╤ê╨╕╨╡ ╤â╨▒╨╡╨╢╨░╤é╤î, ΓÇö ╨┤╨░╨╢╨╡ ╨╜╨╡ ╨┐╨╛╨┐╤ï╤é╨░╨╗╨░╤ü╤î. ╨₧╨╜╨╕ ╨╗╨╡╨│╨╗╨╕, ╤à╨╜╤ï╨║╨░╨╗╨╕ ╨╕ ╨┐╨░╤ü╤ü╨╕╨▓╨╜╨╛ ╨┐╤Ç╨╕╨╜╨╕╨╝╨░╨╗╨╕ ╤ê╨╛╨║. ╨ö╨▓╨╡ ╤é╤Ç╨╡╤é╨╕ ╨╕╨╖ ╨╜╨╕╤à ╨╜╨╡ ╨┐╤ï╤é╨░╨╗╨╕╤ü╤î ╨▒╨╡╨╢╨░╤é╤î, ╤à╨╛╤é╤Å ╨▒╨░╤Ç╤î╨╡╤Ç ╨▒╤ï╨╗ ╤é╤â╤é ╨╢╨╡.\n\n╨í╨╡╨╗╨╕╨│╨╝╨░╨╜ ╨╜╨░╨╖╨▓╨░╨╗ ╤ì╤é╨╛ ┬½╨▓╤ï╤â╤ç╨╡╨╜╨╜╨╛╨╣ ╨▒╨╡╤ü╨┐╨╛╨╝╨╛╤ë╨╜╨╛╤ü╤é╤î╤Ä┬╗ ΓÇö ╤ü╨╛╤ü╤é╨╛╤Å╨╜╨╕╨╡╨╝, ╨▓ ╨║╨╛╤é╨╛╤Ç╨╛╨╝ ╨┐╨╛╤ü╨╗╨╡ ╨┐╨╡╤Ç╨╡╨╢╨╕╨▓╨░╨╜╨╕╤Å ╨╜╨╡╨║╨╛╨╜╤é╤Ç╨╛╨╗╨╕╤Ç╤â╨╡╨╝╤ï╤à ╨╜╨╡╨│╨░╤é╨╕╨▓╨╜╤ï╤à ╤ü╨╛╨▒╤ï╤é╨╕╨╣ ╨╛╤Ç╨│╨░╨╜╨╕╨╖╨╝ ╨┐╨╡╤Ç╨╡╤ü╤é╨░╨╡╤é ╨┐╤ï╤é╨░╤é╤î╤ü╤Å ╨╕╨╖╨╝╨╡╨╜╨╕╤é╤î ╤ü╨▓╨╛╤Ä ╤ü╨╕╤é╤â╨░╤å╨╕╤Ä, ╨┤╨░╨╢╨╡ ╨║╨╛╨│╨┤╨░ ╨▒╨╡╨│╤ü╤é╨▓╨╛ ╤ü╤é╨░╨╜╨╛╨▓╨╕╤é╤ü╤Å ╨▓╨╛╨╖╨╝╨╛╨╢╨╜╤ï╨╝.\n\n╨ƒ╨╛╤ü╨╗╨╡╨┤╤ü╤é╨▓╨╕╤Å ╤Ç╨░╤ü╨┐╤Ç╨╛╤ü╤é╤Ç╨░╨╜╤Å╨╗╨╕╤ü╤î ╨┤╨░╨╗╨╡╨║╨╛ ╨╖╨░ ╨┐╤Ç╨╡╨┤╨╡╨╗╤ï ╤ü╨╛╨▒╨░╨║. ╨í╨╡╨╗╨╕╨│╨╝╨░╨╜ ╨┐╤Ç╨╡╨┤╨┐╨╛╨╗╨╛╨╢╨╕╨╗, ╤ç╤é╨╛ ╨▓╤ï╤â╤ç╨╡╨╜╨╜╨░╤Å ╨▒╨╡╤ü╨┐╨╛╨╝╨╛╤ë╨╜╨╛╤ü╤é╤î ╤Å╨▓╨╗╤Å╨╡╤é╤ü╤Å ╨║╨╗╤Ä╤ç╨╡╨▓╨╛╨╣ ╨╝╨╛╨┤╨╡╨╗╤î╤Ä ╨┤╨╗╤Å ╨┐╨╛╨╜╨╕╨╝╨░╨╜╨╕╤Å ╤ç╨╡╨╗╨╛╨▓╨╡╤ç╨╡╤ü╨║╨╛╨╣ ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╨╕. ╨ú ╨╗╤Ä╨┤╨╡╨╣, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╤ü╤é╨░╨╗╨║╨╕╨▓╨░╤Ä╤é╤ü╤Å ╤ü ╨┐╨╛╨▓╤é╨╛╤Ç╤Å╤Ä╤ë╨╕╨╝╨╕╤ü╤Å ╨╜╨╡╤â╨┤╨░╤ç╨░╨╝╨╕ ╨╕╨╗╨╕ ╨╜╨╡╨║╨╛╨╜╤é╤Ç╨╛╨╗╨╕╤Ç╤â╨╡╨╝╤ï╨╝╨╕ ╨╜╨╡╨│╨░╤é╨╕╨▓╨╜╤ï╨╝╨╕ ╤ü╨╛╨▒╤ï╤é╨╕╤Å╨╝╨╕, ╨╝╨╛╨╢╨╡╤é ╤Ç╨░╨╖╨▓╨╕╤é╤î╤ü╤Å ╨▓╤ü╨╡╨┐╤Ç╨╛╨╜╨╕╨║╨░╤Ä╤ë╨╡╨╡ ╤â╨▒╨╡╨╢╨┤╨╡╨╜╨╕╨╡, ╤ç╤é╨╛ ╨╕╤à ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å ╨╜╨╡ ╨╕╨╝╨╡╤Ä╤é ╨╖╨╜╨░╤ç╨╡╨╜╨╕╤Å, ╤ç╤é╨╛ ╨┐╤Ç╨╕╨▓╨╛╨┤╨╕╤é ╨║ ╨┐╨░╤ü╤ü╨╕╨▓╨╜╨╛╤ü╤é╨╕, ╨┐╨╡╤ç╨░╨╗╨╕ ╨╕ ╨╖╨░╨╝╨║╨╜╤â╤é╨╛╤ü╤é╨╕.\n\n╨¡╤é╨╛ ╨┐╨╛╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╨┐╨╛╨▒╤â╨┤╨╕╨╗╨╛ ╨í╨╡╨╗╨╕╨│╨╝╨░╨╜╨░ ╤Ç╨░╨╖╤Ç╨░╨▒╨╛╤é╨░╤é╤î ╨╜╨╛╨▓╤ï╨╡ ╤é╨╡╤Ç╨░╨┐╨╡╨▓╤é╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨┐╨╛╨┤╤à╨╛╨┤╤ï. ╨º╤é╨╛ ╨╛╤ü╨╛╨▒╨╡╨╜╨╜╨╛ ╨▓╨░╨╢╨╜╨╛, ╨╛╨╜ ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╕╨╗, ╤ç╤é╨╛ ╨▓╤ï╤â╤ç╨╡╨╜╨╜╤â╤Ä ╨▒╨╡╤ü╨┐╨╛╨╝╨╛╤ë╨╜╨╛╤ü╤é╤î ╨╝╨╛╨╢╨╜╨╛ ╨╛╨▒╤Ç╨░╤é╨╕╤é╤î ╨▓╤ü╨┐╤Å╤é╤î ╨┐╨╛╤ü╤Ç╨╡╨┤╤ü╤é╨▓╨╛╨╝ ┬½╨╕╨╝╨╝╤â╨╜╨╕╨╖╨░╤å╨╕╨╕┬╗ ΓÇö ╨▒╨╛╨╗╨╡╨╡ ╤Ç╨░╨╜╨╜╨╡╨│╨╛ ╨╛╨┐╤ï╤é╨░ ╨│╨╛╤ü╨┐╨╛╨┤╤ü╤é╨▓╨░ ╨╕ ╨║╨╛╨╜╤é╤Ç╨╛╨╗╤Å. ╨Æ ╨║╨╛╨╜╨╡╤ç╨╜╨╛╨╝ ╨╕╤é╨╛╨│╨╡ ╤ì╤é╨╛ ╨┐╤Ç╨╕╨▓╨╡╨╗╨╛ ╨╡╨│╨╛ ╨║ ╤ü╨╛╨╖╨┤╨░╨╜╨╕╤Ä ╨╛╨▒╨╗╨░╤ü╤é╨╕ ╨┐╨╛╨╖╨╕╤é╨╕╨▓╨╜╨╛╨╣ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕, ╨╕╨╖╤â╤ç╨░╤Ä╤ë╨╡╨╣ ╨╜╨╡ ╤é╨╛╨╗╤î╨║╨╛ ╤é╨╛, ╤ç╤é╨╛ ╨┤╨╡╨╗╨░╨╡╤é ╨╗╤Ä╨┤╨╡╨╣ ╨▒╨╛╨╗╤î╨╜╤ï╨╝╨╕, ╨╜╨╛ ╨╕ ╤é╨╛, ╤ç╤é╨╛ ╨┐╨╛╨╝╨╛╨│╨░╨╡╤é ╨╕╨╝ ╨┐╤Ç╨╛╤å╨▓╨╡╤é╨░╤é╤î."
  },
  {
    "id": 9,
    "title": "The Case of H.M.: A Life Without Memory",
    "titleKa": "H.M.-ßâÿßâí ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÉ: ßâ¬ßâ«ßâ¥ßâòßâáßâößâæßâÉ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâÆßâÉßâáßâößâ¿ßâö",
    "chapterId": 7,
    "icon": "mdi:head-question-outline",
    "content": "Henry Gustav MolaisonΓÇöknown for decades in scientific literature only as \"H.M.\" to protect his privacyΓÇöis perhaps the most studied individual in the history of neuroscience. His story begins with tragedy and becomes a cornerstone of memory research.\n\nH.M. suffered from severe, debilitating epilepsy that began after a bicycle accident at age seven. By his mid-twenties, the seizures had become so frequent and violent that he could not hold a job or live independently.\n\nIn 1953, neurosurgeon William Beecher Scoville performed an experimental operation. He removed large portions of H.M.'s medial temporal lobes bilaterallyΓÇöincluding most of his hippocampus on both sides.\n\nThe surgery was a medical success: the seizures were dramatically reduced. But the side effect was devastating. H.M. could no longer form new long-term memories. He could remember events from his childhood, his parents' names, and facts from before the surgery. But anything that happened after 1953 vanished within minutes.\n\nH.M. would read the same magazine over and over, enjoying it fresh each time. He could not recognize the researchers who visited him daily for years. Every day, his father's death was news to him again. He described his existence as \"like waking from a dream... every day is alone in itself.\"\n\nYet H.M.'s memory was not entirely destroyed. He could learn new motor skillsΓÇölike tracing a star in a mirrorΓÇöand improve with practice, even though he had no memory of having practiced. This proved that different types of memory (declarative vs. procedural) involve different brain systems.\n\nH.M. cooperated with researchers for over 50 years until his death in 2008. His brain was donated to science, sliced into 2,401 thin sections, and digitized for future study. His case single-handedly established the hippocampus as critical for memory formation and reshaped our understanding of how memories are made.",
    "contentKa": "ßâ░ßâößâ£ßâáßâÿ ßâ¢ßâ¥ßâÜßâößâÿßâûßâ¥ßâ£ßâÿ (H.M.) ßâ£ßâößâÿßâáßâ¥ßâ¢ßâößâ¬ßâ£ßâÿßâößâáßâößâæßâÿßâí ßâÿßâíßâóßâ¥ßâáßâÿßâÉßâ¿ßâÿ ßâºßâòßâößâÜßâÉßâûßâö ßâ¿ßâößâíßâ¼ßâÉßâòßâÜßâÿßâÜßâÿ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâÿßâÉ. 1953 ßâ¼ßâößâÜßâí ßâößâ₧ßâÿßâÜßâößâñßâíßâÿßâÿßâí ßâíßâÉßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâô, ßâÑßâÿßâáßâúßâáßâÆßâ¢ßâÉ ßâ░ßâÿßâ₧ßâ¥ßâÖßâÉßâ¢ßâ₧ßâÿ ßâÉßâ¢ßâ¥ßâÉßâ¡ßâáßâÉ. ßâÖßâáßâúßâ£ßâ⌐ßâ«ßâößâæßâÿ ßâ¿ßâößâ¢ßâ¬ßâÿßâáßâôßâÉ, ßâ¢ßâÉßâÆßâáßâÉßâ¢ ßâÉßâ«ßâÉßâÜßâÿ ßâÆßâáßâ½ßâößâÜßâòßâÉßâôßâÿßâÉßâ£ßâÿ ßâ¢ßâ¥ßâÆßâ¥ßâ£ßâößâæßâößâæßâÿßâí ßâ⌐ßâÉßâ¢ßâ¥ßâºßâÉßâÜßâÿßâæßâößâæßâÉ ßâòßâößâá ßâ¿ßâößâ½ßâÜßâ¥. ßâ¢ßâÿßâíßâ¢ßâÉ ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÉßâ¢ ßâôßâÉßâÉßâ¢ßâóßâÖßâÿßâ¬ßâÉ, ßâáßâ¥ßâ¢ ßâ░ßâÿßâ₧ßâ¥ßâÖßâÉßâ¢ßâ₧ßâÿ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâñßâ¥ßâáßâ¢ßâÿßâáßâößâæßâÿßâíßâùßâòßâÿßâí ßâÉßâúßâ¬ßâÿßâÜßâößâæßâößâÜßâÿßâÉ.",
    "moral": "The hippocampus is critical for memory formationΓÇöand different types of memory involve separate brain systems.",
    "moralKa": "ßâ░ßâÿßâ₧ßâ¥ßâÖßâÉßâ¢ßâ₧ßâÿ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâñßâ¥ßâáßâ¢ßâÿßâáßâößâæßâÿßâíßâùßâòßâÿßâí ßâÉßâúßâ¬ßâÿßâÜßâößâæßâößâÜßâÿßâÉ, ßâôßâÉ ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâíßâ«ßâòßâÉßâôßâÉßâíßâ«ßâòßâÉ ßâóßâÿßâ₧ßâößâæßâÿ ßâíßâ«ßâòßâÉßâôßâÉßâíßâ«ßâòßâÉ ßâóßâòßâÿßâ£ßâÿßâí ßâíßâÿßâíßâóßâößâ¢ßâößâæßâí ßâÿßâºßâößâ£ßâößâæßâí.",
    "titleRu": "╨ö╨╡╨╗╨╛ ╨Ñ.╨£.: ╨╢╨╕╨╖╨╜╤î ╨▒╨╡╨╖ ╨┐╨░╨╝╤Å╤é╨╕",
    "moralAz": "Hipokampus yadda┼ƒ─▒n formala┼ƒmas─▒ ├╝├º├╝n vacibdir v╔Ö m├╝xt╔Ölif yadda┼ƒ n├╢vl╔Öri ayr─▒ beyin sisteml╔Örini ╔Öhat╔Ö edir.",
    "moralHy": "╒Ç╒½╒║╒╕╒»╒í╒┤╒║╒¿ ╒»╒í╓Ç╓ç╒╕╓Ç ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╕╓é╒╢╒½ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒▒╓ç╒í╒╛╒╕╓Ç╒┤╒í╒╢ ╒░╒í╒┤╒í╓Ç, ╓ç ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╒í╓Ç╒ó╒Ñ╓Ç ╒┐╒Ñ╒╜╒í╒»╒╢╒Ñ╓Ç ╒╢╒Ñ╓Ç╒í╒╝╒╕╓é╒┤ ╒Ñ╒╢ ╒╕╓é╒▓╒Ñ╒▓╒½ ╒í╒╝╒í╒╢╒▒╒½╒╢ ╒░╒í╒┤╒í╒»╒í╓Ç╒ú╒Ñ╓Ç:",
    "titleHy": "╒Ç.╒ä.-╒½ ╒ú╒╕╓Ç╒«╒¿╒¥ ╒»╒╡╒í╒╢╓ä ╒í╒╝╒í╒╢╓ü ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢",
    "moralRu": "╨ô╨╕╨┐╨┐╨╛╨║╨░╨╝╨┐ ╨╕╨╝╨╡╨╡╤é ╤Ç╨╡╤ê╨░╤Ä╤ë╨╡╨╡ ╨╖╨╜╨░╤ç╨╡╨╜╨╕╨╡ ╨┤╨╗╤Å ╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╨╜╨╕╤Å ╨┐╨░╨╝╤Å╤é╨╕, ╨░ ╤Ç╨░╨╖╨╜╤ï╨╡ ╤é╨╕╨┐╤ï ╨┐╨░╨╝╤Å╤é╨╕ ╨╖╨░╨┤╨╡╨╣╤ü╤é╨▓╤â╤Ä╤é ╨╛╤é╨┤╨╡╨╗╤î╨╜╤ï╨╡ ╤ü╨╕╤ü╤é╨╡╨╝╤ï ╨╝╨╛╨╖╨│╨░.",
    "contentRu": "╨ô╨╡╨╜╤Ç╨╕ ╨ô╤â╤ü╤é╨░╨▓ ╨£╨╛╨╗╨╡╤ü╨╛╨╜, ╨┤╨╡╤ü╤Å╤é╨╕╨╗╨╡╤é╨╕╤Å╨╝╨╕ ╨╕╨╖╨▓╨╡╤ü╤é╨╜╤ï╨╣ ╨▓ ╨╜╨░╤â╤ç╨╜╨╛╨╣ ╨╗╨╕╤é╨╡╤Ç╨░╤é╤â╤Ç╨╡ ╤é╨╛╨╗╤î╨║╨╛ ╨║╨░╨║ ┬½╨ò.╨£.┬╗ ╤ç╤é╨╛╨▒╤ï ╨╖╨░╤ë╨╕╤é╨╕╤é╤î ╤ü╨▓╨╛╤Ä ╤ç╨░╤ü╤é╨╜╤â╤Ä ╨╢╨╕╨╖╨╜╤î, ΓÇö ╨┐╨╛╨╢╨░╨╗╤â╨╣, ╤ü╨░╨╝╤ï╨╣ ╨╕╨╖╤â╤ç╨╡╨╜╨╜╤ï╨╣ ╤ç╨╡╨╗╨╛╨▓╨╡╨║ ╨▓ ╨╕╤ü╤é╨╛╤Ç╨╕╨╕ ╨╜╨╡╨╣╤Ç╨╛╨▒╨╕╨╛╨╗╨╛╨│╨╕╨╕. ╨ò╨│╨╛ ╨╕╤ü╤é╨╛╤Ç╨╕╤Å ╨╜╨░╤ç╨╕╨╜╨░╨╡╤é╤ü╤Å ╤ü ╤é╤Ç╨░╨│╨╡╨┤╨╕╨╕ ╨╕ ╤ü╤é╨░╨╜╨╛╨▓╨╕╤é╤ü╤Å ╨║╤Ç╨░╨╡╤â╨│╨╛╨╗╤î╨╜╤ï╨╝ ╨║╨░╨╝╨╜╨╡╨╝ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╣ ╨┐╨░╨╝╤Å╤é╨╕.\n\n╨Ñ.╨£. ╤ü╤é╤Ç╨░╨┤╨░╨╗ ╨╛╤é ╤é╤Å╨╢╨╡╨╗╨╛╨╣, ╨╕╨╖╨╜╤â╤Ç╨╕╤é╨╡╨╗╤î╨╜╨╛╨╣ ╤ì╨┐╨╕╨╗╨╡╨┐╤ü╨╕╨╕, ╨║╨╛╤é╨╛╤Ç╨░╤Å ╨╜╨░╤ç╨░╨╗╨░╤ü╤î ╨┐╨╛╤ü╨╗╨╡ ╨▓╨╡╨╗╨╛╤ü╨╕╨┐╨╡╨┤╨╜╨╛╨╣ ╨░╨▓╨░╤Ç╨╕╨╕ ╨▓ ╨▓╨╛╨╖╤Ç╨░╤ü╤é╨╡ ╤ü╨╡╨╝╨╕ ╨╗╨╡╤é. ╨Ü ╨┤╨▓╨░╨┤╤å╨░╤é╨╕ ╨│╨╛╨┤╨░╨╝ ╨┐╤Ç╨╕╨┐╨░╨┤╨║╨╕ ╤ü╤é╨░╨╗╨╕ ╨╜╨░╤ü╤é╨╛╨╗╤î╨║╨╛ ╤ç╨░╤ü╤é╤ï╨╝╨╕ ╨╕ ╤ü╨╕╨╗╤î╨╜╤ï╨╝╨╕, ╤ç╤é╨╛ ╨╛╨╜ ╨╜╨╡ ╨╝╨╛╨│ ╨╜╨╕ ╤Ç╨░╨▒╨╛╤é╨░╤é╤î, ╨╜╨╕ ╨╢╨╕╤é╤î ╤ü╨░╨╝╨╛╤ü╤é╨╛╤Å╤é╨╡╨╗╤î╨╜╨╛.\n\n╨Æ 1953 ╨│╨╛╨┤╤â ╨╜╨╡╨╣╤Ç╨╛╤à╨╕╤Ç╤â╤Ç╨│ ╨ú╨╕╨╗╤î╤Å╨╝ ╨æ╨╕╤ç╨╡╤Ç ╨í╨║╨╛╨▓╨╕╨╗╨╗ ╨┐╤Ç╨╛╨▓╨╡╨╗ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é╨░╨╗╤î╨╜╤â╤Ä ╨╛╨┐╨╡╤Ç╨░╤å╨╕╤Ä. ╨₧╨╜ ╤â╨┤╨░╨╗╨╕╨╗ ╨▒╨╛╨╗╤î╤ê╨╕╨╡ ╤ç╨░╤ü╤é╨╕ ╨╝╨╡╨┤╨╕╨░╨╗╤î╨╜╤ï╤à ╨▓╨╕╤ü╨╛╤ç╨╜╤ï╤à ╨┤╨╛╨╗╨╡╨╣ ╨Ñ. ╨£. ╤ü ╨╛╨▒╨╡╨╕╤à ╤ü╤é╨╛╤Ç╨╛╨╜, ╨▓╨║╨╗╤Ä╤ç╨░╤Å ╨▒╨╛╨╗╤î╤ê╤â╤Ä ╤ç╨░╤ü╤é╤î ╨│╨╕╨┐╨┐╨╛╨║╨░╨╝╨┐╨░ ╤ü ╨╛╨▒╨╡╨╕╤à ╤ü╤é╨╛╤Ç╨╛╨╜.\n\n╨₧╨┐╨╡╤Ç╨░╤å╨╕╤Å ╨┐╤Ç╨╛╤ê╨╗╨░ ╤ü ╨╝╨╡╨┤╨╕╤å╨╕╨╜╤ü╨║╨╛╨╣ ╤é╨╛╤ç╨║╨╕ ╨╖╤Ç╨╡╨╜╨╕╤Å ╤â╤ü╨┐╨╡╤ê╨╜╨╛: ╨┐╤Ç╨╕╤ü╤é╤â╨┐╤ï ╤Ç╨╡╨╖╨║╨╛ ╤â╨╝╨╡╨╜╤î╤ê╨╕╨╗╨╕╤ü╤î. ╨¥╨╛ ╨┐╨╛╨▒╨╛╤ç╨╜╤ï╨╣ ╤ì╤ä╤ä╨╡╨║╤é ╨▒╤ï╨╗ ╤Ç╨░╨╖╤Ç╤â╤ê╨╕╤é╨╡╨╗╤î╨╜╤ï╨╝. ╨Ñ.╨£. ╨▒╨╛╨╗╤î╤ê╨╡ ╨╜╨╡ ╨╝╨╛╨│ ╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╤é╤î ╨╜╨╛╨▓╤ï╨╡ ╨┤╨╛╨╗╨│╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╤ï╨╡ ╨▓╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╤Å. ╨₧╨╜ ╨╝╨╛╨│ ╨▓╤ü╨┐╨╛╨╝╨╜╨╕╤é╤î ╤ü╨╛╨▒╤ï╤é╨╕╤Å ╨╕╨╖ ╤ü╨▓╨╛╨╡╨│╨╛ ╨┤╨╡╤é╤ü╤é╨▓╨░, ╨╕╨╝╨╡╨╜╨░ ╤ü╨▓╨╛╨╕╤à ╤Ç╨╛╨┤╨╕╤é╨╡╨╗╨╡╨╣ ╨╕ ╤ä╨░╨║╤é╤ï, ╨┐╤Ç╨╛╨╕╨╖╨╛╤ê╨╡╨┤╤ê╨╕╨╡ ╨┤╨╛ ╨╛╨┐╨╡╤Ç╨░╤å╨╕╨╕. ╨¥╨╛ ╨▓╤ü╨╡, ╤ç╤é╨╛ ╨┐╤Ç╨╛╨╕╨╖╨╛╤ê╨╗╨╛ ╨┐╨╛╤ü╨╗╨╡ 1953 ╨│╨╛╨┤╨░, ╨╕╤ü╤ç╨╡╨╖╨╗╨╛ ╨╖╨░ ╤ü╤ç╨╕╤é╨░╨╜╨╜╤ï╨╡ ╨╝╨╕╨╜╤â╤é╤ï.\n\n╨Ñ.╨£. ╤ç╨╕╤é╨░╨╗ ╨╛╨┤╨╕╨╜ ╨╕ ╤é╨╛╤é ╨╢╨╡ ╨╢╤â╤Ç╨╜╨░╨╗ ╤ü╨╜╨╛╨▓╨░ ╨╕ ╤ü╨╜╨╛╨▓╨░, ╨║╨░╨╢╨┤╤ï╨╣ ╤Ç╨░╨╖ ╨╜╨░╤ü╨╗╨░╨╢╨┤╨░╤Å╤ü╤î ╨╡╨│╨╛ ╤ü╨▓╨╡╨╢╨╡╤ü╤é╤î╤Ä. ╨₧╨╜ ╨╜╨╡ ╨╝╨╛╨│ ╤â╨╖╨╜╨░╤é╤î ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╨╡╨╣, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╜╨░╨▓╨╡╤ë╨░╨╗╨╕ ╨╡╨│╨╛ ╨╡╨╢╨╡╨┤╨╜╨╡╨▓╨╜╨╛ ╨▓ ╤é╨╡╤ç╨╡╨╜╨╕╨╡ ╨╝╨╜╨╛╨│╨╕╤à ╨╗╨╡╤é. ╨Ü╨░╨╢╨┤╤ï╨╣ ╨┤╨╡╨╜╤î ╤ü╨╝╨╡╤Ç╤é╤î ╨╛╤é╤å╨░ ╤ü╨╜╨╛╨▓╨░ ╨▒╤ï╨╗╨░ ╨┤╨╗╤Å ╨╜╨╡╨│╨╛ ╨╜╨╛╨▓╨╛╤ü╤é╤î╤Ä. ╨₧╨╜ ╨╛╨┐╨╕╤ü╤ï╨▓╨░╨╗ ╤ü╨▓╨╛╨╡ ╤ü╤â╤ë╨╡╤ü╤é╨▓╨╛╨▓╨░╨╜╨╕╨╡ ╨║╨░╨║ ┬½╨║╨░╨║ ╨┐╤Ç╨╛╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ ╨╛╤é╨╛ ╤ü╨╜╨░ΓÇª ╨║╨░╨╢╨┤╤ï╨╣ ╨┤╨╡╨╜╤î ╤ü╨░╨╝ ╨┐╨╛ ╤ü╨╡╨▒╨╡ ╨╛╨┤╨╕╨╜╨╛╨║┬╗.\n\n╨ÿ ╨▓╤ü╨╡ ╨╢╨╡ ╨┐╨░╨╝╤Å╤é╤î ╨Ñ.╨£. ╨╜╨╡ ╨▒╤ï╨╗╨░ ╨┐╨╛╨╗╨╜╨╛╤ü╤é╤î╤Ä ╤â╨╜╨╕╤ç╤é╨╛╨╢╨╡╨╜╨░. ╨₧╨╜ ╨╝╨╛╨│ ╨╛╤ü╨▓╨╛╨╕╤é╤î ╨╜╨╛╨▓╤ï╨╡ ╨┤╨▓╨╕╨│╨░╤é╨╡╨╗╤î╨╜╤ï╨╡ ╨╜╨░╨▓╤ï╨║╨╕ ΓÇö ╨╜╨░╨┐╤Ç╨╕╨╝╨╡╤Ç, ╤Ç╨╕╤ü╨╛╨▓╨░╤é╤î ╨╖╨▓╨╡╨╖╨┤╤â ╨▓ ╨╖╨╡╤Ç╨║╨░╨╗╨╡ ΓÇö ╨╕ ╤ü╨╛╨▓╨╡╤Ç╤ê╨╡╨╜╤ü╤é╨▓╨╛╨▓╨░╤é╤î╤ü╤Å ╨┐╨╛ ╨╝╨╡╤Ç╨╡ ╨┐╤Ç╨░╨║╤é╨╕╨║╨╕, ╤à╨╛╤é╤Å ╤â ╨╜╨╡╨│╨╛ ╨╜╨╡ ╨▒╤ï╨╗╨╛ ╨▓╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╨╣ ╨╛ ╤é╤Ç╨╡╨╜╨╕╤Ç╨╛╨▓╨║╨░╤à. ╨¡╤é╨╛ ╨┤╨╛╨║╨░╨╖╨░╨╗╨╛, ╤ç╤é╨╛ ╤Ç╨░╨╖╨╜╤ï╨╡ ╤é╨╕╨┐╤ï ╨┐╨░╨╝╤Å╤é╨╕ (╨┤╨╡╨║╨╗╨░╤Ç╨░╤é╨╕╨▓╨╜╨░╤Å ╨╕ ╨┐╤Ç╨╛╤å╨╡╨┤╤â╤Ç╨╜╨░╤Å) ╨╖╨░╨┤╨╡╨╣╤ü╤é╨▓╤â╤Ä╤é ╤Ç╨░╨╖╨╜╤ï╨╡ ╤ü╨╕╤ü╤é╨╡╨╝╤ï ╨╝╨╛╨╖╨│╨░.\n\n╨Ñ.╨£. ╤ü╨╛╤é╤Ç╤â╨┤╨╜╨╕╤ç╨░╨╗ ╤ü ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╤é╨╡╨╗╤Å╨╝╨╕ ╨▒╨╛╨╗╨╡╨╡ 50 ╨╗╨╡╤é ╨┤╨╛ ╤ü╨▓╨╛╨╡╨╣ ╤ü╨╝╨╡╤Ç╤é╨╕ ╨▓ 2008 ╨│╨╛╨┤╤â. ╨ò╨│╨╛ ╨╝╨╛╨╖╨│ ╨▒╤ï╨╗ ╨┐╨╡╤Ç╨╡╨┤╨░╨╜ ╨╜╨░╤â╨║╨╡, ╨╜╨░╤Ç╨╡╨╖╨░╨╜ ╨╜╨░ 2401 ╤é╨╛╨╜╨║╨╕╨╣ ╤ü╤Ç╨╡╨╖ ╨╕ ╨╛╤å╨╕╤ä╤Ç╨╛╨▓╨░╨╜ ╨┤╨╗╤Å ╨▒╤â╨┤╤â╤ë╨╡╨│╨╛ ╨╕╨╖╤â╤ç╨╡╨╜╨╕╤Å. ╨ò╨│╨╛ ╤ü╨╗╤â╤ç╨░╨╣ ╨╡╨┤╨╕╨╜╨╛╨╗╨╕╤ç╨╜╨╛ ╨┤╨╛╨║╨░╨╖╨░╨╗, ╤ç╤é╨╛ ╨│╨╕╨┐╨┐╨╛╨║╨░╨╝╨┐ ╨╕╨│╤Ç╨░╨╡╤é ╤Ç╨╡╤ê╨░╤Ä╤ë╤â╤Ä ╤Ç╨╛╨╗╤î ╨▓ ╤ä╨╛╤Ç╨╝╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╕ ╨┐╨░╨╝╤Å╤é╨╕, ╨╕ ╨╕╨╖╨╝╨╡╨╜╨╕╨╗ ╨╜╨░╤ê╨╡ ╨┐╨╛╨╜╨╕╨╝╨░╨╜╨╕╨╡ ╤é╨╛╨│╨╛, ╨║╨░╨║ ╤ü╨╛╨╖╨┤╨░╤Ä╤é╤ü╤Å ╨▓╨╛╤ü╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╤Å.",
    "contentHy": "╒Ç╒Ñ╒╢╓Ç╒½ ╘│╒╕╓é╒╜╒┐╒í╒╛ ╒ä╒╕╒¼╒í╒╡╒╜╒╕╒╢╒¿, ╒╕╓Ç╒¿ ╒┐╒í╒╜╒╢╒í╒┤╒╡╒í╒»╒╢╒Ñ╓Ç ╒╖╒í╓Ç╒╕╓é╒╢╒í╒» ╒ú╒½╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒ú╓Ç╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗ ╒░╒í╒╡╒┐╒╢╒½ ╒º ╒┤╒½╒í╒╡╒╢ ┬½╒Ç.╒ä. ╒║╒í╒╖╒┐╒║╒í╒╢╒Ñ╒¼ ╒½╓Ç ╒ú╒í╒▓╒┐╒╢╒½╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿, ╒⌐╒Ñ╓Ç╓ç╒╜ ╒í╒┤╒Ñ╒╢╒í╒╖╒í╒┐ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╛╒í╒« ╒í╒╢╒░╒í╒┐╒╢ ╒º ╒╢╒╡╒í╓Ç╒ñ╒í╒ú╒½╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗: ╒å╓Ç╒í ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╜╒»╒╜╒╛╒╕╓é╒┤ ╒º ╒╕╒▓╒ó╒Ñ╓Ç╒ú╒╕╓é╒⌐╒╡╒í╒┤╒ó ╓ç ╒ñ╒í╒╝╒╢╒╕╓é╒┤ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒½╒┤╒╢╒í╓ä╒í╓Ç:\n\n╒Ç.╒ä. ╒┐╒í╒╝╒í╒║╒╕╓é╒┤ ╒º╓Ç ╒«╒í╒╢╓Ç, ╒⌐╒╕╓é╒¼╒í╓ü╒╢╒╕╒▓ ╒º╒║╒½╒¼╒Ñ╒║╒╜╒½╒í╒╡╒╕╒╛, ╒╕╓Ç╒¿ ╒╜╒»╒╜╒╛╒Ñ╒¼ ╒º╓Ç ╒╡╒╕╒⌐ ╒┐╒í╓Ç╒Ñ╒»╒í╒╢╒╕╓é╒┤ ╒░╒Ñ╒«╒í╒╢╒╛╒í╒╡╒½╒╢ ╒╛╒⌐╒í╓Ç╒½╓ü ╒░╒Ñ╒┐╒╕: ╒å╓Ç╒í ╓ä╒╜╒í╒╢ ╒┐╒í╓Ç╒Ñ╒»╒í╒╢╒╢╒Ñ╓Ç╒½ ╒»╒Ñ╒╜╒Ñ╓Ç╒½╒╢ ╒╢╒╕╒║╒í╒╢╒Ñ╓Ç╒╢ ╒í╒╡╒╢╓ä╒í╒╢ ╒░╒í╒│╒í╒¡╒í╒»╒½ ╒╕╓é ╒»╒í╒┐╒í╒▓╒½ ╒º╒½╒╢ ╒ñ╒í╓Ç╒▒╒Ñ╒¼, ╒╕╓Ç ╒╢╒í ╒╣╒º╓Ç ╒»╒í╓Ç╒╕╒▓ ╒í╒╖╒¡╒í╒┐╒í╒╢╓ä ╒╕╓é╒╢╒Ñ╒╢╒í╒¼ ╒»╒í╒┤ ╒½╒╢╓ä╒╢╒╕╓é╓Ç╒╕╓é╒╡╒╢ ╒í╒║╓Ç╒Ñ╒¼:\n\n1953 ╒⌐╒╛╒í╒»╒í╒╢╒½╒╢ ╒╢╒╡╒í╓Ç╒ñ╒í╒╛╒½╓Ç╒í╒ó╒╕╓é╒╡╒¬ ╒ê╓é╒½╒¼╒╡╒í╒┤ ╘▓╒½╒╣╒Ñ╓Ç ╒ì╓ä╒╕╒╛╒½╒¼╒¿ ╓â╒╕╓Ç╒▒╒í╓Ç╒í╓Ç╒í╒»╒í╒╢ ╒╛╒½╓Ç╒í╒░╒í╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒º ╒»╒í╒┐╒í╓Ç╒Ñ╒¼╓ë ╒å╒í ╒Ñ╓Ç╒»╒»╒╕╒▓╒┤╒í╒╢╒½ ╒░╒Ñ╒╝╒í╓ü╓Ç╒Ñ╒¼ ╒º ╒Ç.╒ä.-╒½ ╒┤╒½╒╗╒½╒╢ ╒¬╒í╒┤╒í╒╢╒í╒»╒í╒╡╒½╒╢ ╒ó╒¼╒⌐╒Ñ╓Ç╒½ ╒┤╒Ñ╒« ╒┤╒í╒╜╒¿╒¥ ╒╢╒Ñ╓Ç╒í╒╝╒╡╒í╒¼ ╒╢╓Ç╒í ╒░╒½╒║╒╕╒»╒í╒┤╒║╒½ ╒┤╒Ñ╒« ╒┤╒í╒╜╒¿ ╒Ñ╓Ç╒»╒╕╓é ╒»╒╕╒▓╒┤╒Ñ╓Ç╒½╓ü:\n\n╒Ä╒½╓Ç╒í╒░╒í╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒ó╒¬╒╖╒»╒í╒»╒í╒╢ ╒░╒í╒╗╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╕╓é╒╢╒Ñ╓ü╒í╒╛. ╒╢╒╕╒║╒í╒╢╒Ñ╓Ç╒¿ ╒»╒┐╓Ç╒╕╓é╒» ╒╢╒╛╒í╒ª╒Ñ╓ü╒½╒╢: ╘▓╒í╒╡╓ü ╒»╒╕╒▓╒┤╒╢╒í╒»╒½ ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒╕╓Ç╒«╒í╒╢╒í╓Ç╒í╓Ç ╒º╓Ç: ╒Ç.╒ä. ╒í╒╡╒¼╓ç╒╜ ╒╣╒º╓Ç ╒»╒í╓Ç╒╕╒▓ ╒╢╒╕╓Ç ╒Ñ╓Ç╒»╒í╓Ç╒í╒¬╒í╒┤╒»╒Ñ╒┐ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒▒╓ç╒í╒╛╒╕╓Ç╒Ñ╒¼: ╒å╒í ╒»╒í╓Ç╒╕╒▓ ╒º╓Ç ╒░╒½╒╖╒Ñ╒¼ ╒½╓Ç ╒┤╒í╒╢╒»╒╕╓é╒⌐╒╡╒í╒╢ ╒ñ╒Ñ╒║╓ä╒Ñ╓Ç╒¿, ╒«╒╢╒╕╒▓╒╢╒Ñ╓Ç╒½ ╒í╒╢╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╓ç ╓â╒í╒╜╒┐╒Ñ╓Ç ╒╛╒½╓Ç╒í╒░╒í╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒½╓ü ╒í╒╝╒í╒╗: ╘▓╒í╒╡╓ü ╒í╒╡╒╢ ╒í╒┤╒Ñ╒╢╒¿, ╒½╒╢╒╣ ╒┐╒Ñ╒▓╒½ ╒╕╓é╒╢╒Ñ╓ü╒í╒╛ 1953 ╒⌐╒╛╒í╒»╒í╒╢╒½╓ü ╒░╒Ñ╒┐╒╕, ╒í╒╢╒░╒Ñ╒┐╒í╓ü╒í╒╛ ╓Ç╒╕╒║╒Ñ╒╢╒Ñ╓Ç╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤:\n\n╒Ç.╒ä. ╒»╒í╓Ç╒ñ╒╕╓é╒┤ ╒º╓Ç ╒╢╒╕╓é╒╡╒╢ ╒í╒┤╒╜╒í╒ú╒½╓Ç╒¿ ╒╢╒╕╓Ç╒½╓ü ╒╕╓é ╒╢╒╕╓Ç╒½╓ü╒¥ ╒í╒┤╒Ñ╒╢ ╒í╒╢╒ú╒í╒┤ ╒⌐╒í╓Ç╒┤ ╒╛╒í╒╡╒Ñ╒¼╒Ñ╒¼╒╕╒╛ ╒í╒╡╒╢: ╒å╒í ╒╣╒º╓Ç ╒»╒í╓Ç╒╕╒▓╒í╒╢╒╕╓é╒┤ ╒│╒í╒╢╒í╒╣╒Ñ╒¼ ╒í╒╡╒╢ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╒▓╒╢╒Ñ╓Ç╒½╒╢, ╒╕╒╛╓ä╒Ñ╓Ç ╒┐╒í╓Ç╒½╒╢╒Ñ╓Ç ╒╖╒í╓Ç╒╕╓é╒╢╒í╒» ╒í╒╡╓ü╒Ñ╒¼╒╕╓é╒┤ ╒º╒½╒╢ ╒½╓Ç╒Ñ╒╢╓ë ╘▒╒┤╒Ñ╒╢ ╓à╓Ç ╒░╒╕╓Ç ╒┤╒í╒░╒¿ ╒╢╒╕╓Ç╒½╓ü ╒╢╒╕╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒º╓Ç ╒╢╓Ç╒í ╒░╒í╒┤╒í╓Ç╓ë ╒å╒í ╒╢╒»╒í╓Ç╒í╒ú╓Ç╒Ñ╒¼ ╒º ╒½╓Ç ╒ú╒╕╒╡╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╕╓Ç╒║╒Ñ╒╜ ┬½╒Ñ╓Ç╒í╒ª╒½╓ü ╒í╓Ç╒⌐╒╢╒í╒╢╒í╒¼╒╕╓é ╒╢╒┤╒í╒╢... ╒í╒┤╒Ñ╒╢ ╓à╓Ç ╒½╒╢╓ä╒╢╒½╒╢ ╒┤╒Ñ╒╢╒í╒» ╒º┬╗:\n\n╒ì╒í╒»╒í╒╡╒╢ ╒Ç.╒ä.-╒½ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒í╒┤╒ó╒╕╒▓╒╗╒╕╓é╒⌐╒╡╒í╒┤╒ó ╒╣╒½ ╒╕╒╣╒╢╒╣╒í╓ü╒╛╒Ñ╒¼╓ë ╒å╒í ╒»╒í╓Ç╒╕╒▓ ╒º╓Ç ╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼ ╒╢╒╕╓Ç ╒╖╒í╓Ç╒¬╒½╒╣ ╒░╒┤╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç, ╓à╓Ç╒½╒╢╒í╒»╒¥ ╒í╒╜╒┐╒▓╒½╒╢ ╒░╒í╒╡╒Ñ╒¼╒╕╓é ╒┤╒Ñ╒╗ ╒░╒Ñ╒┐╒í╒ú╒«╒Ñ╒¼╒¿, ╓ç ╒»╒í╒┐╒í╓Ç╒Ñ╒¼╒í╒ú╒╕╓Ç╒«╒╛╒Ñ╒¼ ╒║╓Ç╒í╒»╒┐╒½╒»╒í╒╡╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤, ╒⌐╒Ñ╓ç ╒╢╒í ╒╣╒º╓Ç ╒░╒½╒╖╒╕╓é╒┤, ╒╕╓Ç ╒┤╒í╓Ç╒ª╒╛╒Ñ╒¼ ╒º: ╒ì╒í ╒í╒║╒í╓ü╒╕╓é╓ü╒Ñ╓ü, ╒╕╓Ç ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╒í╓Ç╒ó╒Ñ╓Ç ╒┐╒Ñ╒╜╒í╒»╒╢╒Ñ╓Ç (╒ñ╒Ñ╒»╒¼╒í╓Ç╒í╒┐╒½╒╛ ╒¿╒╢╒ñ╒ñ╒Ñ╒┤ ╒¿╒╢╒⌐╒í╓ü╒í╒»╒í╓Ç╒ú╒í╒╡╒½╒╢) ╒╢╒Ñ╓Ç╒í╒╝╒╕╓é╒┤ ╒Ñ╒╢ ╒╕╓é╒▓╒Ñ╒▓╒½ ╒┐╒í╓Ç╒ó╒Ñ╓Ç ╒░╒í╒┤╒í╒»╒í╓Ç╒ú╒Ñ╓Ç:\n\n╒Ç.╒ä. ╘▒╒╛╒Ñ╒¼╒½ ╓ä╒í╒╢ 50 ╒┐╒í╓Ç╒½ ╒░╒í╒┤╒í╒ú╒╕╓Ç╒«╒í╒»╓ü╒Ñ╒¼ ╒º ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╒▓╒╢╒Ñ╓Ç╒½ ╒░╒Ñ╒┐ ╒┤╒½╒╢╒╣╓ç ╒½╓Ç ╒┤╒í╒░╒¿ 2008╒⌐.: ╒å╓Ç╒í ╒╕╓é╒▓╒Ñ╒▓╒¿ ╒╢╒╛╒½╓Ç╒í╒ó╒Ñ╓Ç╒╛╒Ñ╒¼ ╒º ╒ú╒½╒┐╒╕╓é╒⌐╒╡╒í╒╢╒¿, ╒»╒┐╓Ç╒í╒┐╒╛╒Ñ╒¼ 2401 ╒ó╒í╓Ç╒í╒» ╒░╒í╒┐╒╛╒í╒«╒╢╒Ñ╓Ç╒½ ╓ç ╒⌐╒╛╒í╒╡╒╢╒í╓ü╒╛╒Ñ╒¼ ╒░╒Ñ╒┐╒í╒ú╒í ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒┤╒í╓Ç: ╒å╓Ç╒í ╒ñ╒Ñ╒║╓ä╒¿ ╒┤╒½╒í╒╡╒╢╒í╒» ╒░╒í╒╜╒┐╒í╒┐╒Ñ╓ü ╒░╒½╒║╒╕╒»╒í╒┤╒║╒¿ ╒╕╓Ç╒║╒Ñ╒╜ ╒»╒í╓Ç╓ç╒╕╓Ç ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒▒╓ç╒í╒╛╒╕╓Ç╒┤╒í╒╢ ╒░╒í╒┤╒í╓Ç ╓ç ╒╛╒Ñ╓Ç╒í╓â╒╕╒¡╒Ñ╓ü ╒┤╒Ñ╓Ç ╒║╒í╒┐╒»╒Ñ╓Ç╒í╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿, ╒⌐╒Ñ ╒½╒╢╒╣╒║╒Ñ╒╜ ╒Ñ╒╢ ╒╜╒┐╒Ñ╒▓╒«╒╛╒╕╓é╒┤ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿:",
    "titleAz": "H.M.-nin i┼ƒi: Yadda┼ƒs─▒z bir h╔Öyat",
    "contentAz": "Henry Gustav Molaison ΓÇö onillikl╔Ör boyu elmi ╔Öd╔Öbiyyatda yaln─▒z \"H.M.\" kimi tan─▒n─▒r. ┼ƒ╔Öxsi h╔Öyat─▒n─▒ qorumaq - b╔Ölk╔Ö d╔Ö nevrologiya tarixind╔Ö ╔Ön ├ºox ├╢yr╔Önilmi┼ƒ f╔Örddir. Onun hekay╔Ösi faci╔Ö il╔Ö ba┼ƒlay─▒r v╔Ö yadda┼ƒ t╔Ödqiqat─▒n─▒n t╔Öm╔Öl da┼ƒ─▒na ├ºevrilir.\n\nH.M. yeddi ya┼ƒ─▒nda velosiped q╔Özas─▒ndan sonra ba┼ƒlayan a─ƒ─▒r, z╔Öifl╔Ödici epilepsiyadan ╔Öziyy╔Öt ├º╔Ökirdi. ─░yirmi ya┼ƒlar─▒n─▒n ortalar─▒nda q─▒colmalar o q╔Öd╔Ör tez-tez v╔Ö ┼ƒidd╔Ötli olurdu ki, o, n╔Ö i┼ƒl╔Ö m╔Ö┼ƒ─ƒul ola, n╔Ö d╔Ö m├╝st╔Öqil ya┼ƒaya bildi.\n\n1953-c├╝ ild╔Ö neyroc╔Örrah William Bicher Scoville eksperimental ╔Öm╔Öliyyat ke├ºirdi. O, H.M.-nin medial temporal loblar─▒n─▒n b├╢y├╝k hiss╔Öl╔Örini, o c├╝ml╔Öd╔Ön h╔Ör iki t╔Ör╔Öfd╔Öki hipokampusunun b├╢y├╝k hiss╔Ösini ikit╔Ör╔Öfli ┼ƒ╔Ökild╔Ö ├º─▒xard─▒.\n\n╞Åm╔Öliyyat tibbi u─ƒur idi: q─▒colmalar k╔Öskin ┼ƒ╔Ökild╔Ö azald─▒. Ancaq yan t╔Ösir da─ƒ─▒d─▒c─▒ oldu. H.M. art─▒q yeni uzunm├╝dd╔Ötli xatir╔Öl╔Ör formala┼ƒd─▒ra bilmirdi. U┼ƒaql─▒─ƒ─▒ndan ba┼ƒ ver╔Önl╔Öri, valideynl╔Örinin adlar─▒n─▒, ╔Öm╔Öliyyatdan ╔Övv╔Ölki faktlar─▒ xat─▒rlaya bilirdi. Lakin 1953-c├╝ ild╔Ön sonra ba┼ƒ ver╔Ön h╔Ör ┼ƒey bir ne├º╔Ö d╔Öqiq╔Ö ╔Örzind╔Ö yox oldu.\n\nH.M. eyni jurnal─▒ t╔Ökrar-t╔Ökrar oxuyar, h╔Ör d╔Öf╔Ö t╔Öz╔Öd╔Ön z├╢vq al─▒rd─▒. ─░ll╔Ör boyu ona h╔Ör g├╝n g╔Öl╔Ön t╔Ödqiqat├º─▒lar─▒ tan─▒ya bilmirdi. H╔Ör g├╝n atas─▒n─▒n ├╢l├╝m├╝ onun ├╝├º├╝n yenid╔Ön x╔Öb╔Ör olurdu. O, varl─▒─ƒ─▒n─▒ ΓÇ£yuxudan oyanmaq kimi... h╔Ör g├╝n ├╢z-├╢zl├╝y├╝nd╔Ö t╔ÖkdirΓÇ¥ kimi t╔Ösvir edirdi.\n\nBununla bel╔Ö, H.M.-nin yadda┼ƒ─▒ tamamil╔Ö m╔Öhv edilm╔Ömi┼ƒdir. O, g├╝zg├╝d╔Ö ulduzu izl╔Öm╔Ök kimi yeni motor bacar─▒qlar─▒n─▒ ├╢yr╔Ön╔Ö v╔Ö m╔Ö┼ƒq etdiyini xat─▒rlamasa da, t╔Öcr├╝b╔Ö il╔Ö t╔Ökmill╔Ö┼ƒ╔Ö bil╔Ördi. Bu s├╝but etdi ki, m├╝xt╔Ölif yadda┼ƒ n├╢vl╔Öri (deklarativ v╔Ö prosessual) m├╝xt╔Ölif beyin sisteml╔Örini ╔Öhat╔Ö edir.\n\nH.M. 2008-ci ild╔Ö ├╢l├╝m├╝n╔Ö q╔Öd╔Ör 50 ild╔Ön ├ºox t╔Ödqiqat├º─▒larla ╔Öm╔Ökda┼ƒl─▒q etdi. Onun beyni elm╔Ö verildi, 2401 nazik hiss╔Öy╔Ö k╔Ösildi v╔Ö g╔Öl╔Öc╔Ök t╔Ödqiqatlar ├╝├º├╝n r╔Öq╔Ömsalla┼ƒd─▒r─▒ld─▒. Onun i┼ƒi t╔Ök ba┼ƒ─▒na hipokampusun yadda┼ƒ─▒n formala┼ƒmas─▒ ├╝├º├╝n kritik oldu─ƒunu t╔Öyin etdi v╔Ö xatir╔Öl╔Örin nec╔Ö quruldu─ƒuna dair anlay─▒┼ƒ─▒m─▒z─▒ yenid╔Ön formala┼ƒd─▒rd─▒."
  },
  {
    "id": 10,
    "title": "Rosenhan's \"Being Sane in Insane Places\"",
    "titleKa": "ßâáßâ¥ßâûßâößâ£ßâ░ßâÉßâ£ßâÿßâí \"ßâÆßâ¥ßâ£ßâÿßâößâáßâößâæßâÉ ßâÆßâÿßâƒßâúßâá ßâÉßâôßâÆßâÿßâÜßâößâæßâ¿ßâÿ\"",
    "chapterId": 14,
    "icon": "mdi:hospital-building",
    "content": "In 1973, Stanford psychologist David Rosenhan published one of the most provocative and influential studies in the history of psychiatry: \"On Being Sane in Insane Places.\"\n\nRosenhan recruited eight mentally healthy volunteersΓÇöincluding himself, a psychology graduate student, a pediatrician, a psychiatrist, a painter, and a housewifeΓÇöto present themselves at twelve different psychiatric hospitals across the United States.\n\nEach pseudo-patient reported a single symptom: they heard a voice saying \"empty,\" \"hollow,\" or \"thud.\" They gave false names and occupations but otherwise described their life histories and emotional states truthfully. All were diagnosed with psychiatric disorders (most commonly schizophrenia) and admitted.\n\nOnce inside, all pseudo-patients immediately stopped reporting any symptoms and behaved completely normally. They took notes openly, cooperated with staff, and told doctors they felt fine. Yet not a single one was identified as healthy by staff.\n\nTheir hospitalizations lasted from 7 to 52 days, averaging 19 days. When discharged, they received the diagnosis \"schizophrenia, in remission\"ΓÇömeaning the label stuck even upon release.\n\nIronically, real patients often recognized the pseudo-patients were not mentally ill. \"You're not crazy. You're a journalist or a professor,\" they said. But staff never questioned the diagnoses.\n\nIn a follow-up study, Rosenhan told a hospital that pseudo-patients would attempt admission over the next three months. Staff confidently identified 41 patients as impostors. In reality, Rosenhan had sent no one.\n\nThe study's conclusion was searing: psychiatric institutions cannot reliably distinguish the sane from the insane. Diagnostic labels, once applied, color all subsequent perception and behavior of both patients and staff. The study contributed to major reforms in psychiatric diagnosis and the development of more rigorous diagnostic criteria.",
    "contentKa": "1973 ßâ¼ßâößâÜßâí, ßâíßâóßâößâ£ßâñßâ¥ßâáßâôßâÿßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâ¢ßâÉ ßâáßâ¥ßâûßâößâ£ßâ░ßâÉßâ£ßâ¢ßâÉ 8 ßâ»ßâÉßâ£ßâíßâÉßâªßâÿ ßâ¢ßâ¥ßâ«ßâÉßâÜßâÿßâíßâö 12 ßâñßâíßâÿßâÑßâÿßâÉßâóßâáßâÿßâúßâÜ ßâíßâÉßâÉßâòßâÉßâôßâ¢ßâºßâ¥ßâñßâ¥ßâ¿ßâÿ ßâÆßâÉßâÆßâûßâÉßâòßâ£ßâÉ. ßâ¢ßâÉßâù ßâ¿ßâÿßâûßâ¥ßâñßâáßâößâ£ßâÿßâÉ ßâôßâÉßâúßâíßâòßâößâí ßâôßâÉ 7-ßâôßâÉßâ£ 52 ßâôßâªßâößâ¢ßâôßâö ßâôßâÉßâáßâ⌐ßâ£ßâößâ£. ßâÉßâáßâÉßâòßâÿßâ£ ßâ₧ßâößâáßâíßâ¥ßâ£ßâÉßâÜßâ¢ßâÉ ßâòßâößâá ßâÉßâ¢ßâ¥ßâÿßâ¬ßâ£ßâ¥ ßâÿßâíßâÿßâ£ßâÿ ßâ»ßâÉßâ£ßâíßâÉßâªßâÉßâô. ßâößâí ßâÖßâòßâÜßâößâòßâÉßâ¢ ßâôßâÿßâÉßâÆßâ£ßâ¥ßâíßâóßâÿßâÖßâÿßâí ßâíßâößâáßâÿßâ¥ßâûßâúßâÜ ßâáßâößâñßâ¥ßâáßâ¢ßâößâæßâí ßâ¿ßâößâúßâ¼ßâºßâ¥.",
    "moral": "Labels are powerfulΓÇöonce categorized, everything is seen through that lens. Psychiatric diagnosis must be approached with extreme rigor and humility.",
    "moralKa": "ßâÿßâÉßâáßâÜßâÿßâºßâößâæßâÿ ßâ½ßâÉßâÜßâÿßâÉßâ£ ßâ½ßâÜßâÿßâößâáßâÿßâÉΓÇößâößâáßâùßâ«ßâößâÜ ßâÖßâÉßâóßâößâÆßâ¥ßâáßâÿßâûßâößâæßâúßâÜßâÿ, ßâºßâòßâößâÜßâÉßâñßâößâáßâÿ ßâÉßâ¢ ßâÜßâÿßâ£ßâûßâÿßâù ßâÉßâªßâÿßâÑßâ¢ßâößâæßâÉ.",
    "titleRu": "╨á╨╛╨╖╨╡╨╜╤à╨░╨╜ ┬½╨æ╤ï╤é╤î ΓÇïΓÇï╨▓ ╨╖╨┤╤Ç╨░╨▓╨╛╨╝ ╤â╨╝╨╡ ╨▓ ╨▒╨╡╨╖╤â╨╝╨╜╤ï╤à ╨╝╨╡╤ü╤é╨░╤à┬╗.",
    "moralAz": "Etiketl╔Ör g├╝cl├╝d├╝r - kateqoriyalara b├╢l├╝nd├╝kd╔Ön sonra h╔Ör ┼ƒey bu obyektivd╔Ön g├╢r├╝n├╝r. Psixiatrik diaqnoza h╔Öddind╔Ön art─▒q ciddilik v╔Ö t╔Övaz├╢karl─▒qla yana┼ƒmaq laz─▒md─▒r.",
    "moralHy": "╒è╒½╒┐╒í╒»╒╢╒Ñ╓Ç╒¿ ╒░╒ª╒╕╓Ç ╒Ñ╒╢. ╒ñ╒í╒╜╒í╒»╒í╓Ç╒ú╒╛╒Ñ╒¼╒╕╓é╓ü ╒░╒Ñ╒┐╒╕ ╒í╒┤╒Ñ╒╢ ╒½╒╢╒╣ ╒Ñ╓Ç╓ç╒╕╓é╒┤ ╒º ╒í╒╡╒ñ ╒╕╒╜╒║╒╢╒╡╒í╒»╒½ ╒┤╒½╒╗╒╕╒╛: ╒Ç╒╕╒ú╒Ñ╒ó╒╕╓é╒¬╒í╒»╒í╒╢ ╒í╒¡╒┐╒╕╓Ç╒╕╒╖╒┤╒í╒╢╒¿ ╒║╒Ñ╒┐╓ä ╒º ╒┤╒╕╒┐╒Ñ╒╢╒í╒¼ ╒«╒í╒╡╓Ç╒í╒░╒Ñ╒▓ ╒¡╒╜╒┐╒╕╓é╒⌐╒╡╒í╒┤╒ó ╓ç ╒¡╒╕╒╢╒í╓Ç╒░╒╕╓é╒⌐╒╡╒í╒┤╒ó:",
    "titleHy": "╒î╒╕╒ª╒Ñ╒╢╒░╒í╒╢╒½ ┬½╒ä╒Ñ╒▓╒╜╒╕╓é╒╢╒í╒» ╒¼╒½╒╢╒Ñ╒¼ ╒¡╒Ñ╒¼╒í╒ú╒í╓Ç ╒╛╒í╒╡╓Ç╒Ñ╓Ç╒╕╓é╒┤┬╗",
    "contentHy": "1973 ╒⌐╒╛╒í╒»╒í╒╢╒½╒╢ ╒ì╒⌐╒Ñ╒╢╓å╒╕╓Ç╒ñ╒½ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢ ╘┤╒Ñ╒╡╒╛╒½╒ñ ╒î╒╕╒ª╒Ñ╒╢╒░╒í╒╢╒¿ ╒░╓Ç╒í╒║╒í╓Ç╒í╒»╒Ñ╓ü ╒░╒╕╒ú╒Ñ╒ó╒╕╓é╒¬╒╕╓é╒⌐╒╡╒í╒╢ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒Ñ╒╗ ╒í╒┤╒Ñ╒╢╒í╒╜╒í╒ñ╓Ç╒½╒╣ ╓ç ╒í╒ª╒ñ╒Ñ╓ü╒½╒» ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½╓ü ╒┤╒Ñ╒»╒¿╒¥ ┬½╘╜╒Ñ╒¼╒í╒ú╒í╓Ç ╒╛╒í╒╡╓Ç╒Ñ╓Ç╒╕╓é╒┤ ╒╕╒▓╒╗╒í╒¡╒╕╒░ ╒¼╒½╒╢╒Ñ╒¼╒╕╓é ╒┤╒í╒╜╒½╒╢┬╗╓ë\n\n╒î╒╕╒ª╒Ñ╒╢╒░╒í╒╢╒¿ ╒░╒í╒╛╒í╓ä╒í╒ú╓Ç╒Ñ╓ü ╒╕╓é╒⌐ ╒░╒╕╒ú╒Ñ╒║╒Ñ╒╜ ╒í╒╝╒╕╒▓╒╗ ╒»╒í╒┤╒í╒╛╒╕╓Ç╒╢╒Ñ╓Ç╒½, ╒í╒╡╒ñ ╒⌐╒╛╒╕╓é╒┤╒¥ ╒½╒╢╓ä╒¿╒¥ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒í╒╜╒║╒½╓Ç╒í╒╢╒┐, ╒┤╒í╒╢╒»╒í╒ó╒╕╓é╒╡╒¬, ╒░╒╕╒ú╒Ñ╒ó╒╕╓é╒╡╒¬, ╒╢╒»╒í╓Ç╒½╒╣ ╓ç ╒┐╒╢╒í╒╡╒½╒╢ ╒┐╒╢╒┐╒Ñ╒╜╒╕╓é╒░╒½, ╒╕╓Ç╒║╒Ñ╒╜╒ª╒½ ╒╢╒Ñ╓Ç╒»╒í╒╡╒í╒╢╒í╒╢ ╒ä╒½╒í╓ü╒╡╒í╒¼ ╒å╒í╒░╒í╒╢╒ú╒╢╒Ñ╓Ç╒½ ╒┐╒í╒╜╒╢╒Ñ╓Ç╒»╒╕╓é ╒┐╒í╓Ç╒ó╒Ñ╓Ç ╒░╒╕╒ú╒Ñ╒ó╒╕╓é╒¬╒í╓Ç╒í╒╢╒╢╒Ñ╓Ç╒╕╓é╒┤:\n\n╒à╒╕╓é╓Ç╒í╓ä╒í╒╢╒╣╒╡╒╕╓é╓Ç ╒»╒Ñ╒▓╒« ╒░╒½╒╛╒í╒╢╒ñ ╒░╒í╒╡╒┐╒╢╒Ñ╒¼ ╒º ╒┤╒Ñ╒» ╒í╒¡╒┐╒í╒╢╒½╒╖. ╒╢╓Ç╒í╒╢╓ä ╒¼╒╜╒Ñ╒¼ ╒Ñ╒╢ ╒┤╒½ ╒▒╒í╒╡╒╢, ╒╕╓Ç╒╢ ╒í╒╜╒╕╓é╒┤ ╒º╓Ç ┬½╒ñ╒í╒┐╒í╓Ç╒»┬╗, ┬½╒¡╒╕╒╝╒╕╒╣┬╗ ╒»╒í╒┤ ┬½╒ñ╒╕╓é╒¡┬╗: ╒å╓Ç╒í╒╢╓ä ╒»╒Ñ╒▓╒« ╒í╒╢╒╕╓é╒╢╒╢╒Ñ╓Ç ╓ç ╒ª╒ó╒í╒▓╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç ╒º╒½╒╢ ╒┐╒í╒¼╒½╒╜, ╒ó╒í╒╡╓ü ╒í╒╡╒¼ ╒»╒Ñ╓Ç╒║ ╒│╒╖╒┤╒í╓Ç╒½╒┐ ╒╢╒»╒í╓Ç╒í╒ú╓Ç╒╕╓é╒┤ ╒º╒½╒╢ ╒½╓Ç╒Ñ╒╢╓ü ╒»╒╡╒í╒╢╓ä╒½ ╒║╒í╒┐╒┤╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒╕╓é ╒░╒╕╓é╒ª╒í╒»╒í╒╢ ╒╛╒½╒│╒í╒»╒╢╒Ñ╓Ç╒¿: ╘▓╒╕╒¼╒╕╓Ç╒½ ╒┤╒╕╒┐ ╒í╒¡╒┐╒╕╓Ç╒╕╒╖╒╛╒Ñ╒¼ ╒Ñ╒╢ ╒░╒╕╒ú╒Ñ╒»╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç (╒í╒╝╒í╒╛╒Ñ╒¼ ╒░╒í╒│╒í╒¡╒¥ ╒╖╒½╒ª╒╕╓å╓Ç╒Ñ╒╢╒½╒í) ╓ç ╒¿╒╢╒ñ╒╕╓é╒╢╒╛╒Ñ╒¼:\n\n╒å╒Ñ╓Ç╒╜ ╒┤╒┐╒╢╒Ñ╒¼╒╕╓é╓ü ╒░╒Ñ╒┐╒╕ ╒ó╒╕╒¼╒╕╓Ç ╒║╒╜╓ç╒ñ╒╕-╒░╒½╒╛╒í╒╢╒ñ╒╢╒Ñ╓Ç╒╢ ╒í╒╢╒┤╒½╒╗╒í╒║╒Ñ╒╜ ╒ñ╒í╒ñ╒í╓Ç╒Ñ╓ü╓Ç╒½╒╢ ╒╕╓Ç╓ç╒º ╒í╒¡╒┐╒í╒╢╒½╒╖ ╒░╒í╒╡╒┐╒╢╒Ñ╒¼ ╓ç ╒½╓Ç╒Ñ╒╢╓ü ╒¼╒½╒╕╒╛╒½╒╢ ╒╢╒╕╓Ç╒┤╒í╒¼ ╒║╒í╒░╒Ñ╓ü╒½╒╢: ╒å╓Ç╒í╒╢╓ä ╒ó╒í╓ü╒í╒░╒í╒╡╒┐ ╒╢╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç ╒º╒½╒╢ ╒í╒╢╒╕╓é╒┤, ╒░╒í╒┤╒í╒ú╒╕╓Ç╒«╒í╒»╓ü╒╕╓é╒┤ ╒í╒╢╒▒╒╢╒í╒»╒í╒ª╒┤╒½ ╒░╒Ñ╒┐ ╓ç ╒ó╒¬╒½╒╖╒»╒╢╒Ñ╓Ç╒½╒╢ ╒í╒╜╒í╓ü╒½╒╢, ╒╕╓Ç ╒½╓Ç╒Ñ╒╢╓ü ╒¼╒í╒╛ ╒Ñ╒╢ ╒ª╒ú╒╕╓é╒┤: ╘▒╒╡╒╢╒╕╓é╒í╒┤╒Ñ╒╢╒í╒╡╒╢╒½╒╛, ╒í╒╢╒▒╒╢╒í╒»╒í╒ª╒┤╒½ ╒»╒╕╒▓╒┤╒½╓ü ╒╕╒╣ ╒┤╒Ñ╒»╒¿ ╒í╒╝╒╕╒▓╒╗ ╒╣╒½ ╒│╒í╒╢╒í╒╣╒╛╒Ñ╒¼:\n\n╒å╓Ç╒í╒╢╓ü ╒░╒╕╒╜╒║╒½╒┐╒í╒¼╒í╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿ ╒┐╒Ñ╓é╒Ñ╒¼ ╒Ñ╒╢ 7-╒½╓ü 52 ╓à╓Ç╒¥ ╒┤╒½╒╗╒½╒╢╒¿ 19 ╓à╓Ç╓ë ╘┤╒╕╓é╓Ç╒╜ ╒ú╓Ç╒╛╒Ñ╒¼╒½╒╜ ╒╢╓Ç╒í╒╢╓ä ╒╜╒┐╒í╓ü╒Ñ╒¼ ╒Ñ╒╢ ┬½╒╖╒½╒ª╒╕╓å╓Ç╒Ñ╒╢╒½╒í, ╒╝╒Ñ╒┤╒½╒╜╒½╒í╒╡╒½ ╒┤╒Ñ╒╗┬╗ ╒í╒¡╒┐╒╕╓Ç╒╕╒╖╒╕╓é╒┤╒¿, ╒½╒╢╒╣╒¿ ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒º, ╒╕╓Ç ╒║╒½╒┐╒í╒»╒¿ ╒»╒║╒╣╒╕╓é╒┤ ╒º ╒╢╒╕╓é╒╡╒╢╒½╒╜╒» ╒í╒ª╒í╒┐ ╒í╓Ç╒▒╒í╒»╒╛╒Ñ╒¼╒╕╓é╓ü ╒░╒Ñ╒┐╒╕:\n\n╒â╒í╒»╒í╒┐╒í╒ú╓Ç╒½ ╒░╒Ñ╒ú╒╢╒í╒╢╓ä╒╕╒╛, ╒½╓Ç╒í╒»╒í╒╢ ╒░╒½╒╛╒í╒╢╒ñ╒╢╒Ñ╓Ç╒¿ ╒░╒í╒│╒í╒¡ ╒│╒í╒╢╒í╒╣╒╕╓é╒┤ ╒º╒½╒╢, ╒╕╓Ç ╒»╒Ñ╒▓╒« ╒░╒½╒╛╒í╒╢╒ñ╒╢╒Ñ╓Ç╒¿ ╒░╒╕╒ú╒Ñ╒»╒í╒╢ ╒░╒½╒╛╒í╒╢╒ñ ╒╣╒Ñ╒╢: ┬½╘┤╒╕╓é ╒ú╒½╒¬ ╒╣╒Ñ╒╜, ╒ñ╒╕╓é ╒¼╓Ç╒í╒ú╓Ç╒╕╒▓ ╒Ñ╒╜ ╒»╒í╒┤ ╒║╓Ç╒╕╓å╒Ñ╒╜╒╕╓Ç┬╗,- ╒í╒╜╒í╓ü╒½╒╢ ╒╢╓Ç╒í╒╢╓ä╓ë ╘▓╒í╒╡╓ü ╒í╒╢╒▒╒╢╒í╒»╒í╒ª╒┤╒¿ ╒Ñ╓Ç╒ó╒Ñ╓ä ╒»╒í╒╜╒»╒í╒«╒½ ╒┐╒í╒» ╒╣╒½ ╒ñ╓Ç╒Ñ╒¼ ╒í╒¡╒┐╒╕╓Ç╒╕╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿:\n\n╒Ç╒Ñ╒┐╒í╒ú╒í ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤ ╒î╒╕╒ª╒Ñ╒╢╒░╒í╒╢╒¿ ╒░╒½╒╛╒í╒╢╒ñ╒í╒╢╒╕╓ü╒╕╓é╒┤ ╒í╒╜╒í╓ü, ╒╕╓Ç ╒»╒Ñ╒▓╒« ╒░╒½╒╛╒í╒╢╒ñ╒╢╒Ñ╓Ç╒¿ ╒»╓â╒╕╓Ç╒▒╒Ñ╒╢ ╒¿╒╢╒ñ╒╕╓é╒╢╒Ñ╒¼╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒í╒╝╒í╒╗╒½╒»╒í ╒Ñ╓Ç╒Ñ╓ä ╒í╒┤╒½╒╜╒╢╒Ñ╓Ç╒½ ╒¿╒╢╒⌐╒í╓ü╓ä╒╕╓é╒┤: ╘▒╒╢╒▒╒╢╒í╒»╒í╒ª╒┤╒¿ ╒╛╒╜╒┐╒í╒░╒╕╓Ç╒Ñ╒╢ ╒░╒í╒╡╒┐╒╢╒í╒ó╒Ñ╓Ç╒Ñ╒¼ ╒º 41 ╒░╒½╒╛╒í╒╢╒ñ╒½ ╒╕╓Ç╒║╒Ñ╒╜ ╒¡╒í╒ó╒Ñ╒ó╒í╒╢╒Ñ╓Ç: ╘╗╓Ç╒í╒»╒í╒╢╒╕╓é╒┤ ╒î╒╕╒ª╒Ñ╒╢╒░╒í╒╢╒¿ ╒╕╒╣ ╒╕╓ä╒½ ╒╣╒º╓Ç ╒╕╓é╒▓╒í╓Ç╒»╒Ñ╒¼╓ë\n\n╒Ç╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╒Ñ╒ª╓Ç╒í╒»╒í╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╜╒í╓Ç╒╜╒í╓â╒Ñ╒¼╒½ ╒º╓Ç. ╒░╒╕╒ú╒Ñ╒ó╒╕╓é╒¬╒í╒»╒í╒╢ ╒░╒í╒╜╒┐╒í╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒╣╒Ñ╒╢ ╒»╒í╓Ç╒╕╒▓ ╒░╒╕╓é╒╜╒í╒¼╒½╒╕╓Ç╒Ñ╒╢ ╒┐╒í╓Ç╒ó╒Ñ╓Ç╒Ñ╒¼ ╒╕╒▓╒╗╒í╒¡╒╕╒░╒╢╒Ñ╓Ç╒½╒╢ ╒¡╒Ñ╒¼╒í╒ú╒í╓Ç╒╢╒Ñ╓Ç╒½╓ü: ╘▒╒¡╒┐╒╕╓Ç╒╕╒╖╒½╒╣ ╒║╒½╒┐╒í╒»╒╢╒Ñ╓Ç╒¿, ╒»╒½╓Ç╒í╒╝╒╛╒Ñ╒¼╒╕╓é╓ü ╒░╒Ñ╒┐╒╕, ╒ú╒╕╓é╒╢╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒Ñ╒╢ ╒½╒╢╒╣╒║╒Ñ╒╜ ╒░╒½╒╛╒í╒╢╒ñ╒╢╒Ñ╓Ç╒½, ╒í╒╡╒╢╒║╒Ñ╒╜ ╒º╒¼ ╒í╒╢╒▒╒╢╒í╒»╒í╒ª╒┤╒½ ╒ó╒╕╒¼╒╕╓Ç ╒░╒Ñ╒┐╒í╒ú╒í ╒¿╒╢╒»╒í╒¼╒╕╓é╒┤╒╢ ╒╕╓é ╒╛╒í╓Ç╓ä╒¿: ╒ê╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒║╒í╒╜╒┐╒Ñ╓ü ╒░╒╕╒ú╒Ñ╒ó╒╕╓é╒¬╒í╒»╒í╒╢ ╒í╒¡╒┐╒╕╓Ç╒╕╒╖╒┤╒í╒╢ ╒░╒½╒┤╒╢╒í╒»╒í╒╢ ╒ó╒í╓Ç╒Ñ╓â╒╕╒¡╒╕╓é╒┤╒╢╒Ñ╓Ç╒½╒╢ ╓ç ╒í╒╛╒Ñ╒¼╒½ ╒¡╒½╒╜╒┐ ╒í╒¡╒┐╒╕╓Ç╒╕╒╖╒½╒╣ ╒╣╒í╓â╒í╒╢╒½╒╖╒╢╒Ñ╓Ç╒½ ╒┤╒╖╒í╒»╒┤╒í╒╢╒¿:",
    "moralRu": "╨»╤Ç╨╗╤ï╨║╨╕ ╨╛╨▒╨╗╨░╨┤╨░╤Ä╤é ╨╝╨╛╤ë╨╜╨╛╨╣ ╤ü╨╕╨╗╨╛╨╣: ╨┐╨╛╤ü╨╗╨╡ ╤é╨╛╨│╨╛, ╨║╨░╨║ ╨╛╨╜╨╕ ╨║╨╗╨░╤ü╤ü╨╕╤ä╨╕╤å╨╕╤Ç╨╛╨▓╨░╨╜╤ï, ╨▓╤ü╨╡ ╨╝╨╛╨╢╨╜╨╛ ╤â╨▓╨╕╨┤╨╡╤é╤î ╤ç╨╡╤Ç╨╡╨╖ ╤ì╤é╤â ╨┐╤Ç╨╕╨╖╨╝╤â. ╨Ü ╨┐╤ü╨╕╤à╨╕╨░╤é╤Ç╨╕╤ç╨╡╤ü╨║╨╛╨╝╤â ╨┤╨╕╨░╨│╨╜╨╛╨╖╤â ╨╜╨╡╨╛╨▒╤à╨╛╨┤╨╕╨╝╨╛ ╨┐╨╛╨┤╤à╨╛╨┤╨╕╤é╤î ╤ü ╨┐╤Ç╨╡╨┤╨╡╨╗╤î╨╜╨╛╨╣ ╤ü╤é╤Ç╨╛╨│╨╛╤ü╤é╤î╤Ä ╨╕ ╤ü╨╝╨╕╤Ç╨╡╨╜╨╕╨╡╨╝.",
    "titleAz": "Rosenhan─▒n \"D╔Öli yerl╔Örd╔Ö a─ƒl─▒ ba┼ƒ─▒nda olmaq\"",
    "contentRu": "╨Æ 1973 ╨│╨╛╨┤╤â ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│ ╨╕╨╖ ╨í╤é╤ì╨╜╤ä╨╛╤Ç╨┤╨░ ╨ö╤ì╨▓╨╕╨┤ ╨á╨╛╨╖╨╡╨╜╤à╨░╨╜ ╨╛╨┐╤â╨▒╨╗╨╕╨║╨╛╨▓╨░╨╗ ╨╛╨┤╨╜╨╛ ╨╕╨╖ ╤ü╨░╨╝╤ï╤à ╨┐╤Ç╨╛╨▓╨╛╨║╨░╤å╨╕╨╛╨╜╨╜╤ï╤à ╨╕ ╨▓╨╗╨╕╤Å╤é╨╡╨╗╤î╨╜╤ï╤à ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╣ ╨▓ ╨╕╤ü╤é╨╛╤Ç╨╕╨╕ ╨┐╤ü╨╕╤à╨╕╨░╤é╤Ç╨╕╨╕: ┬½╨₧ ╤é╨╛╨╝, ╨║╨░╨║ ╨▒╤ï╤é╤î ╨▓ ╨╖╨┤╤Ç╨░╨▓╨╛╨╝ ╤â╨╝╨╡ ╨▓ ╨▒╨╡╨╖╤â╨╝╨╜╤ï╤à ╨╝╨╡╤ü╤é╨░╤à┬╗.\n\n╨á╨╛╨╖╨╡╨╜╤à╨░╨╜ ╨╜╨░╨▒╤Ç╨░╨╗ ╨▓╨╛╤ü╨╡╨╝╤î ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕ ╨╖╨┤╨╛╤Ç╨╛╨▓╤ï╤à ╨┤╨╛╨▒╤Ç╨╛╨▓╨╛╨╗╤î╤å╨╡╨▓, ╨▓ ╤é╨╛╨╝ ╤ç╨╕╤ü╨╗╨╡ ╤ü╨╡╨▒╤Å ╤ü╨░╨╝╨╛╨│╨╛, ╨░╤ü╨┐╨╕╤Ç╨░╨╜╤é╨░ ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╨╕, ╨┐╨╡╨┤╨╕╨░╤é╤Ç╨░, ╨┐╤ü╨╕╤à╨╕╨░╤é╤Ç╨░, ╤à╤â╨┤╨╛╨╢╨╜╨╕╨║╨░ ╨╕ ╨┤╨╛╨╝╨╛╤à╨╛╨╖╤Å╨╣╨║╤â, ╤ç╤é╨╛╨▒╤ï ╨╛╨╜╨╕ ╤Å╨▓╨╕╨╗╨╕╤ü╤î ╨▓ ╨┤╨▓╨╡╨╜╨░╨┤╤å╨░╤é╤î ╤Ç╨░╨╖╨╗╨╕╤ç╨╜╤ï╤à ╨┐╤ü╨╕╤à╨╕╨░╤é╤Ç╨╕╤ç╨╡╤ü╨║╨╕╤à ╨▒╨╛╨╗╤î╨╜╨╕╤å ╨┐╨╛ ╨▓╤ü╨╡╨╣ ╤é╨╡╤Ç╤Ç╨╕╤é╨╛╤Ç╨╕╨╕ ╨í╨╛╨╡╨┤╨╕╨╜╨╡╨╜╨╜╤ï╤à ╨¿╤é╨░╤é╨╛╨▓.\n\n╨Ü╨░╨╢╨┤╤ï╨╣ ╨┐╤ü╨╡╨▓╨┤╨╛╨┐╨░╤å╨╕╨╡╨╜╤é ╤ü╨╛╨╛╨▒╤ë╨░╨╗ ╨╛╨▒ ╨╛╨┤╨╜╨╛╨╝ ╤ü╨╕╨╝╨┐╤é╨╛╨╝╨╡: ╨╛╨╜ ╤ü╨╗╤ï╤ê╨░╨╗ ╨│╨╛╨╗╨╛╤ü, ╨│╨╛╨▓╨╛╤Ç╤Å╤ë╨╕╨╣ ┬½╨┐╤â╤ü╤é╨╛┬╗, ┬½╨┐╤â╤ü╤é╨╛┬╗ ╨╕╨╗╨╕ ┬½╤ü╤é╤â╨║┬╗. ╨₧╨╜╨╕ ╨╜╨░╨╖╤ï╨▓╨░╨╗╨╕ ╨▓╤ï╨╝╤ï╤ê╨╗╨╡╨╜╨╜╤ï╨╡ ╨╕╨╝╨╡╨╜╨░ ╨╕ ╤Ç╨╛╨┤ ╨╖╨░╨╜╤Å╤é╨╕╨╣, ╨╜╨╛ ╨▓ ╨╛╤ü╤é╨░╨╗╤î╨╜╨╛╨╝ ╨┐╤Ç╨░╨▓╨┤╨╕╨▓╨╛ ╨╛╨┐╨╕╤ü╤ï╨▓╨░╨╗╨╕ ╨╕╤ü╤é╨╛╤Ç╨╕╤Ä ╤ü╨▓╨╛╨╡╨╣ ╨╢╨╕╨╖╨╜╨╕ ╨╕ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛╨╡ ╤ü╨╛╤ü╤é╨╛╤Å╨╜╨╕╨╡. ╨ú ╨▓╤ü╨╡╤à ╨▒╤ï╨╗╨╕ ╨┤╨╕╨░╨│╨╜╨╛╤ü╤é╨╕╤Ç╨╛╨▓╨░╨╜╤ï ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░ (╤ç╨░╤ë╨╡ ╨▓╤ü╨╡╨│╨╛ ╤ê╨╕╨╖╨╛╤ä╤Ç╨╡╨╜╨╕╤Å) ╨╕ ╨│╨╛╤ü╨┐╨╕╤é╨░╨╗╨╕╨╖╨╕╤Ç╨╛╨▓╨░╨╜╤ï.\n\n╨₧╨║╨░╨╖╨░╨▓╤ê╨╕╤ü╤î ╨▓╨╜╤â╤é╤Ç╨╕, ╨▓╤ü╨╡ ╨┐╤ü╨╡╨▓╨┤╨╛╨┐╨░╤å╨╕╨╡╨╜╤é╤ï ╤ü╤Ç╨░╨╖╤â ╨╢╨╡ ╨┐╨╡╤Ç╨╡╤ü╤é╨░╨╗╨╕ ╤ü╨╛╨╛╨▒╤ë╨░╤é╤î ╨╛ ╨║╨░╨║╨╕╤à-╨╗╨╕╨▒╨╛ ╤ü╨╕╨╝╨┐╤é╨╛╨╝╨░╤à ╨╕ ╨▓╨╡╨╗╨╕ ╤ü╨╡╨▒╤Å ╤ü╨╛╨▓╨╡╤Ç╤ê╨╡╨╜╨╜╨╛ ╨╜╨╛╤Ç╨╝╨░╨╗╤î╨╜╨╛. ╨₧╨╜╨╕ ╨╛╤é╨║╤Ç╤ï╤é╨╛ ╨┤╨╡╨╗╨░╨╗╨╕ ╨╖╨░╨┐╨╕╤ü╨╕, ╤ü╨╛╤é╤Ç╤â╨┤╨╜╨╕╤ç╨░╨╗╨╕ ╤ü ╨┐╨╡╤Ç╤ü╨╛╨╜╨░╨╗╨╛╨╝ ╨╕ ╨│╨╛╨▓╨╛╤Ç╨╕╨╗╨╕ ╨▓╤Ç╨░╤ç╨░╨╝, ╤ç╤é╨╛ ╤ç╤â╨▓╤ü╤é╨▓╤â╤Ä╤é ╤ü╨╡╨▒╤Å ╤à╨╛╤Ç╨╛╤ê╨╛. ╨₧╨┤╨╜╨░╨║╨╛ ╨╜╨╕ ╨╛╨┤╨╕╨╜ ╨╕╨╖ ╨╜╨╕╤à ╨╜╨╡ ╨▒╤ï╨╗ ╨┐╤Ç╨╕╨╖╨╜╨░╨╜ ╨┐╨╡╤Ç╤ü╨╛╨╜╨░╨╗╨╛╨╝ ╨╖╨┤╨╛╤Ç╨╛╨▓╤ï╨╝.\n\n╨ÿ╤à ╨│╨╛╤ü╨┐╨╕╤é╨░╨╗╨╕╨╖╨░╤å╨╕╤Å ╨┤╨╗╨╕╨╗╨░╤ü╤î ╨╛╤é 7 ╨┤╨╛ 52 ╨┤╨╜╨╡╨╣, ╨▓ ╤ü╤Ç╨╡╨┤╨╜╨╡╨╝ 19 ╨┤╨╜╨╡╨╣. ╨ƒ╤Ç╨╕ ╨▓╤ï╨┐╨╕╤ü╨║╨╡ ╨╕╨╝ ╨┐╨╛╤ü╤é╨░╨▓╨╕╨╗╨╕ ╨┤╨╕╨░╨│╨╜╨╛╨╖ ┬½╤ê╨╕╨╖╨╛╤ä╤Ç╨╡╨╜╨╕╤Å ╨▓ ╤ü╤é╨░╨┤╨╕╨╕ ╤Ç╨╡╨╝╨╕╤ü╤ü╨╕╨╕┬╗, ╤é╨╛ ╨╡╤ü╤é╤î ╤Å╤Ç╨╗╤ï╨║ ╨┐╤Ç╨╕╨║╨╗╨╡╨╕╨╗╤ü╤Å ╨┤╨░╨╢╨╡ ╨┐╨╛╤ü╨╗╨╡ ╨╛╤ü╨▓╨╛╨▒╨╛╨╢╨┤╨╡╨╜╨╕╤Å.\n\n╨ƒ╨╛ ╨╕╤Ç╨╛╨╜╨╕╨╕ ╤ü╤â╨┤╤î╨▒╤ï, ╤Ç╨╡╨░╨╗╤î╨╜╤ï╨╡ ╨┐╨░╤å╨╕╨╡╨╜╤é╤ï ╤ç╨░╤ü╤é╨╛ ╨┐╤Ç╨╕╨╖╨╜╨░╨▓╨░╨╗╨╕, ╤ç╤é╨╛ ╨┐╤ü╨╡╨▓╨┤╨╛╨┐╨░╤å╨╕╨╡╨╜╤é╤ï ╨╜╨╡ ╨▒╤ï╨╗╨╕ ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕ ╨▒╨╛╨╗╤î╨╜╤ï╨╝╨╕. ┬½╨ó╤ï ╨╜╨╡ ╤ü╤â╨╝╨░╤ü╤ê╨╡╨┤╤ê╨╕╨╣. ╨ó╤ï ╨╢╤â╤Ç╨╜╨░╨╗╨╕╤ü╤é ╨╕╨╗╨╕ ╨┐╤Ç╨╛╤ä╨╡╤ü╤ü╨╛╤Ç┬╗, ΓÇö ╤ü╨║╨░╨╖╨░╨╗╨╕ ╨╛╨╜╨╕. ╨¥╨╛ ╤ü╨╛╤é╤Ç╤â╨┤╨╜╨╕╨║╨╕ ╨╜╨╕╨║╨╛╨│╨┤╨░ ╨╜╨╡ ╨┐╨╛╨┤╨▓╨╡╤Ç╨│╨░╨╗╨╕ ╤ü╨╛╨╝╨╜╨╡╨╜╨╕╤Ä ╨┤╨╕╨░╨│╨╜╨╛╨╖╤ï.\n\n╨Æ ╤à╨╛╨┤╨╡ ╨┐╨╛╤ü╨╗╨╡╨┤╤â╤Ä╤ë╨╡╨│╨╛ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨á╨╛╨╖╨╡╨╜╤à╨░╨╜ ╤ü╨╛╨╛╨▒╤ë╨╕╨╗ ╨▒╨╛╨╗╤î╨╜╨╕╤å╨╡, ╤ç╤é╨╛ ╨┐╤ü╨╡╨▓╨┤╨╛╨┐╨░╤å╨╕╨╡╨╜╤é╤ï ╨▒╤â╨┤╤â╤é ╨┐╤ï╤é╨░╤é╤î╤ü╤Å ╨│╨╛╤ü╨┐╨╕╤é╨░╨╗╨╕╨╖╨╕╤Ç╨╛╨▓╨░╤é╤î╤ü╤Å ╨▓ ╤é╨╡╤ç╨╡╨╜╨╕╨╡ ╤ü╨╗╨╡╨┤╤â╤Ä╤ë╨╕╤à ╤é╤Ç╨╡╤à ╨╝╨╡╤ü╤Å╤å╨╡╨▓. ╨ƒ╨╡╤Ç╤ü╨╛╨╜╨░╨╗ ╤â╨▓╨╡╤Ç╨╡╨╜╨╜╨╛ ╨╛╨┐╨╛╨╖╨╜╨░╨╗ 41 ╨┐╨░╤å╨╕╨╡╨╜╤é╨░ ╨║╨░╨║ ╤ü╨░╨╝╨╛╨╖╨▓╨░╨╜╤å╨╡╨▓. ╨¥╨░ ╤ü╨░╨╝╨╛╨╝ ╨┤╨╡╨╗╨╡ ╨á╨╛╨╖╨╡╨╜╤à╨░╨╜ ╨╜╨╕╨║╨╛╨│╨╛ ╨╜╨╡ ╨┐╨╛╤ü╨╗╨░╨╗.\n\n╨Æ╤ï╨▓╨╛╨┤ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨▒╤ï╨╗ ╨╛╤ê╨╡╨╗╨╛╨╝╨╗╤Å╤Ä╤ë╨╕╨╝: ╨┐╤ü╨╕╤à╨╕╨░╤é╤Ç╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╤â╤ç╤Ç╨╡╨╢╨┤╨╡╨╜╨╕╤Å ╨╜╨╡ ╨╝╨╛╨│╤â╤é ╨┤╨╛╤ü╤é╨╛╨▓╨╡╤Ç╨╜╨╛ ╨╛╤é╨╗╨╕╤ç╨╕╤é╤î ╨╖╨┤╤Ç╨░╨▓╨╛╨╝╤ï╤ü╨╗╤Å╤ë╨╕╤à ╨╛╤é ╨╜╨╡╨▓╨╝╨╡╨╜╤Å╨╡╨╝╤ï╤à. ╨ö╨╕╨░╨│╨╜╨╛╤ü╤é╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╤Å╤Ç╨╗╤ï╨║╨╕, ╨╛╨┤╨╜╨░╨╢╨┤╤ï ╨┐╤Ç╨╕╨╝╨╡╨╜╨╡╨╜╨╜╤ï╨╡, ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╤Ä╤é ╨▓╤ü╨╡ ╨┐╨╛╤ü╨╗╨╡╨┤╤â╤Ä╤ë╨╡╨╡ ╨▓╨╛╤ü╨┐╤Ç╨╕╤Å╤é╨╕╨╡ ╨╕ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨║╨░╨║ ╨┐╨░╤å╨╕╨╡╨╜╤é╨╛╨▓, ╤é╨░╨║ ╨╕ ╨┐╨╡╤Ç╤ü╨╛╨╜╨░╨╗╨░. ╨ÿ╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╤ü╨┐╨╛╤ü╨╛╨▒╤ü╤é╨▓╨╛╨▓╨░╨╗╨╛ ╨║╤Ç╤â╨┐╨╜╤ï╨╝ ╤Ç╨╡╤ä╨╛╤Ç╨╝╨░╨╝ ╨▓ ╨┐╤ü╨╕╤à╨╕╨░╤é╤Ç╨╕╤ç╨╡╤ü╨║╨╛╨╣ ╨┤╨╕╨░╨│╨╜╨╛╤ü╤é╨╕╨║╨╡ ╨╕ ╤Ç╨░╨╖╤Ç╨░╨▒╨╛╤é╨║╨╡ ╨▒╨╛╨╗╨╡╨╡ ╤ü╤é╤Ç╨╛╨│╨╕╤à ╨┤╨╕╨░╨│╨╜╨╛╤ü╤é╨╕╤ç╨╡╤ü╨║╨╕╤à ╨║╤Ç╨╕╤é╨╡╤Ç╨╕╨╡╨▓.",
    "contentAz": "1973-c├╝ ild╔Ö Stenford psixoloqu David Rosenhan psixiatriya tarixind╔Öki ╔Ön t╔Öxribat├º─▒ v╔Ö t╔Ösirli ara┼ƒd─▒rmalardan birini n╔Ö┼ƒr etdi: \"D╔Öli yerl╔Örd╔Ö a─ƒl─▒ ba┼ƒ─▒nda olmaq haqq─▒nda\".\n\nRosenhan, AB┼₧-da on iki m├╝xt╔Ölif psixiatriya x╔Öst╔Öxanas─▒nda ├╢zl╔Örini t╔Öqdim etm╔Ök ├╝├º├╝n ├╢z├╝, psixologiya aspirant─▒, pediatr, psixiatr, r╔Össam v╔Ö ev xan─▒m─▒ daxil olmaqla s╔Ökkiz ╔Öqli c╔Öh╔Ötd╔Ön sa─ƒlam k├╢n├╝ll├╝ i┼ƒ╔Ö g├╢t├╝rd├╝.\n\nH╔Ör bir psevdo-x╔Öst╔Ö t╔Ök bir simptom haqq─▒nda m╔Ölumat verdi: onlar \"bo┼ƒ\", \"bo┼ƒ\" v╔Ö ya \"t├╝nd\" dey╔Ön bir s╔Ös e┼ƒitdil╔Ör. Onlar yalan├º─▒ adlar v╔Ö pe┼ƒ╔Öl╔Ör verdil╔Ör, lakin ba┼ƒqa c├╝r ├╢z h╔Öyat tarix├º╔Öl╔Örini v╔Ö emosional v╔Öziyy╔Ötl╔Örini do─ƒru ┼ƒ╔Ökild╔Ö t╔Ösvir etdil╔Ör. Ham─▒s─▒na psixiatrik poz─ƒunluqlar (╔Ön ├ºox ┼ƒizofreniya) diaqnozu qoyulub v╔Ö q╔Öbul edilib.\n\n─░├º╔Öri daxil olduqdan sonra b├╝t├╝n psevdo-x╔Öst╔Öl╔Ör d╔Örhal h╔Ör hans─▒ simptomlar─▒ bildirm╔Öyi dayand─▒rd─▒lar v╔Ö ├╢zl╔Örini tamamil╔Ö normal apard─▒lar. Onlar a├º─▒q ┼ƒ╔Ökild╔Ö qeydl╔Ör apard─▒lar, i┼ƒ├ºil╔Örl╔Ö ╔Öm╔Ökda┼ƒl─▒q etdil╔Ör v╔Ö h╔Ökiml╔Ör╔Ö ├╢zl╔Örini yax┼ƒ─▒ hiss etdikl╔Örini s├╢yl╔Ödil╔Ör. Bununla bel╔Ö, hey╔Öt t╔Ör╔Öfind╔Ön he├º birinin sa─ƒlam oldu─ƒu m├╝╔Öyy╔Ön edilm╔Ödi.\n\nOnlar─▒n x╔Öst╔Öxanaya yerl╔Ö┼ƒdirilm╔Ösi orta hesabla 19 g├╝n olmaqla 7 g├╝nd╔Ön 52 g├╝n╔Ö q╔Öd╔Ör davam edib. Burax─▒ld─▒qda, onlar \"┼ƒizofreniya, remissiyada\" diaqnozunu ald─▒lar, y╔Öni etiket burax─▒ld─▒qda bel╔Ö yap─▒┼ƒd─▒r─▒ld─▒.\n\nQ╔Örib╔Ödir ki, real x╔Öst╔Öl╔Ör tez-tez psevdo-x╔Öst╔Öl╔Örin ruhi x╔Öst╔Ö olmad─▒─ƒ─▒n─▒ tan─▒y─▒rd─▒lar. ΓÇ£S╔Ön d╔Öli deyils╔Ön, jurnalists╔Ön, professorsanΓÇ¥ dedil╔Ör. Lakin i┼ƒ├ºil╔Ör he├º vaxt diaqnozlar─▒ ┼ƒ├╝bh╔Ö alt─▒na almad─▒lar.\n\nSonrak─▒ ara┼ƒd─▒rmada Rosenhan bir x╔Öst╔Öxanaya dedi ki, psevdo-x╔Öst╔Öl╔Ör n├╢vb╔Öti ├╝├º ay ╔Örzind╔Ö q╔Öbula c╔Öhd ed╔Öc╔Ökl╔Ör. ─░┼ƒ├ºil╔Ör 41 x╔Öst╔Öni inamla saxtakar kimi tan─▒y─▒blar. ╞Åslind╔Ö, Rosenhan he├º kimi g├╢nd╔Örm╔Ömi┼ƒdi.\n\nT╔Ödqiqat─▒n n╔Ötic╔Ösi d╔Öh┼ƒ╔Ötli idi: psixiatriya institutlar─▒ sa─ƒlam d├╝┼ƒ├╝nc╔Öli il╔Ö d╔Ölini etibarl─▒ ┼ƒ╔Ökild╔Ö ay─▒ra bilmir. Diaqnostik etiketl╔Ör t╔Ötbiq edildikd╔Ön sonra h╔Öm x╔Öst╔Öl╔Örin, h╔Öm d╔Ö i┼ƒ├ºil╔Örin b├╝t├╝n sonrak─▒ qavray─▒┼ƒlar─▒n─▒ v╔Ö davran─▒┼ƒlar─▒n─▒ r╔Öngl╔Öndirir. T╔Ödqiqat psixiatrik diaqnostikada ╔Ösas islahatlara v╔Ö daha ciddi diaqnostik meyarlar─▒n haz─▒rlanmas─▒na k├╢m╔Ök etdi."
  }
];
          "Laz─▒ms─▒z m╔Ö┼ƒq edin"
        ],
        "explanationHy": "╒ä╒í╓Ç╒┤╒½╒╢╒¿ ╒í╒╖╒¡╒í╒┐╒╕╓é╒┤ ╒º ╒ó╒╢╒í╒»╒í╒╢ ╓ä╒í╒╖╒½ ╒┤╒½╒╗╒í╒»╒í╒╡╓ä╒¿ ╒║╒í╒░╒║╒í╒╢╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:",
        "questionRu": "╨ó╨╡╨╛╤Ç╨╕╤Å ╨╖╨░╨┤╨░╨╜╨╜╨╛╨│╨╛ ╨╖╨╜╨░╤ç╨╡╨╜╨╕╤Å ╨│╨╗╨░╤ü╨╕╤é:",
        "questionHy": "╒ì╒í╒░╒┤╒í╒╢╒╛╒í╒« ╒»╒Ñ╒┐╒Ñ╓Ç╒½ ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒í╒╜╒╕╓é╒┤ ╒º.",
        "explanationRu": "╨ó╨╡╨╗╨╛ ╤Ç╨░╨▒╨╛╤é╨░╨╡╤é ╨╜╨░╨┤ ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨░╨╜╨╕╨╡╨╝ ╨╡╤ü╤é╨╡╤ü╤é╨▓╨╡╨╜╨╜╨╛╨│╨╛ ╨┤╨╕╨░╨┐╨░╨╖╨╛╨╜╨░ ╨▓╨╡╤ü╨░.",
        "explanationAz": "B╔Öd╔Ön t╔Öbii ├º╔Öki aral─▒─ƒ─▒n─▒ saxlamaq ├╝├º├╝n ├ºal─▒┼ƒ─▒r.",
        "questionAz": "Set n├╢qt╔Ösi n╔Öz╔Öriyy╔Ösi deyir:"
      },
      {
        "id": "q10-5",
        "question": "Ekman found emotions are:",
        "questionKa": "ßâößâÖßâ¢ßâÉßâ£ßâ¢ßâÉ ßâÉßâªßâ¢ßâ¥ßâÉßâ⌐ßâÿßâ£ßâÉ, ßâáßâ¥ßâ¢ ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿ ßâÉßâáßâÿßâí:",
        "options": [
          "Culturally unique",
          "Universal",
          "Only learned",
          "Different everywhere"
        ],
        "optionsKa": [
          "ßâÖßâúßâÜßâóßâúßâáßâúßâÜßâÉßâô ßâúßâ£ßâÿßâÖßâÉßâÜßâúßâáßâÿ",
          "ßâúßâ£ßâÿßâòßâößâáßâíßâÉßâÜßâúßâáßâÿ",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ£ßâÉßâíßâ¼ßâÉßâòßâÜßâÿ",
          "ßâºßâòßâößâÜßâÆßâÉßâ£ ßâÆßâÉßâ£ßâíßâ«ßâòßâÉßâòßâößâæßâúßâÜßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Basic expressions are universal.",
        "explanationKa": "ßâ½ßâÿßâáßâÿßâùßâÉßâôßâÿ ßâÆßâÉßâ¢ßâ¥ßâ«ßâÉßâóßâúßâÜßâößâæßâößâæßâÿ ßâúßâ£ßâÿßâòßâößâáßâíßâÉßâÜßâúßâáßâÿßâÉ.",
        "optionsRu": [
          "╨Ü╤â╨╗╤î╤é╤â╤Ç╨╜╨╛ ╤â╨╜╨╕╨║╨░╨╗╤î╨╜╤ï╨╣",
          "╨ú╨╜╨╕╨▓╨╡╤Ç╤ü╨░╨╗╤î╨╜╤ï╨╣",
          "╨ó╨╛╨╗╤î╨║╨╛ ╤â╨╖╨╜╨░╨╗",
          "╨Æ╨╡╨╖╨┤╨╡ ╤Ç╨░╨╖╨╜╤ï╨╡"
        ],
        "optionsHy": [
          "╒ä╒╖╒í╒»╒╕╓é╒⌐╒í╒╡╒½╒╢ ╒Ñ╒ª╒í╒»╒½",
          "╒ê╓é╒╢╒½╒╛╒Ñ╓Ç╒╜╒í╒¼",
          "╒ä╒½╒í╒╡╒╢ ╒╜╒╕╒╛╒╕╓Ç╒Ñ╒¼",
          "╘▒╒┤╒Ñ╒╢╒╕╓é╓Ç ╒┐╒í╓Ç╒ó╒Ñ╓Ç"
        ],
        "optionsAz": [
          "M╔Öd╔Öni c╔Öh╔Ötd╔Ön unikal",
          "Universal",
          "Yaln─▒z ├╢yr╔Önildi",
          "H╔Ör yerd╔Ö f╔Örqli"
        ],
        "questionRu": "╨¡╨║╨╝╨░╨╜ ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╕╨╗, ╤ç╤é╨╛ ╤ì╨╝╨╛╤å╨╕╨╕:",
        "explanationRu": "╨æ╨░╨╖╨╛╨▓╤ï╨╡ ╨▓╤ï╤Ç╨░╨╢╨╡╨╜╨╕╤Å ╤â╨╜╨╕╨▓╨╡╤Ç╤ü╨░╨╗╤î╨╜╤ï.",
        "explanationHy": "╒Ç╒½╒┤╒╢╒í╒»╒í╒╢ ╒í╓Ç╒┐╒í╒░╒í╒╡╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒░╒í╒┤╒¿╒╢╒ñ╒░╒í╒╢╒╕╓é╓Ç ╒Ñ╒╢:",
        "questionHy": "╘╖╓ä╒┤╒í╒╢╒½ ╒░╒í╒╡╒┐╒╢╒í╒ó╒Ñ╓Ç╒í╒« ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒╢ ╒Ñ╒╢.",
        "questionAz": "Ekman─▒n tapd─▒─ƒ─▒ duy─ƒular bunlard─▒r:",
        "explanationAz": "╞Åsas ifad╔Öl╔Ör universald─▒r."
      },
      {
        "id": "q10-6",
        "question": "Yerkes-Dodson law:",
        "questionKa": "ßâÿßâößâáßâÑßâí-ßâôßâ¥ßâôßâíßâ¥ßâ£ßâÿßâí ßâÖßâÉßâ£ßâ¥ßâ£ßâÿ:",
        "options": [
          "More arousal better",
          "Moderate arousal optimal",
          "Low arousal best",
          "Arousal irrelevant"
        ],
        "optionsKa": [
          "ßâ¢ßâößâóßâÿ ßâÉßâÆßâûßâ£ßâößâæßâÉ ßâúßâÖßâößâùßâößâíßâÿßâÉ",
          "ßâûßâ¥ßâ¢ßâÿßâößâáßâÿ ßâÉßâÆßâûßâ£ßâößâæßâÉ ßâ¥ßâ₧ßâóßâÿßâ¢ßâÉßâÜßâúßâáßâÿßâÉ",
          "ßâôßâÉßâæßâÉßâÜßâÿ ßâÉßâÆßâûßâ£ßâößâæßâÉ ßâíßâÉßâúßâÖßâößâùßâößâíßâ¥ßâÉ",
          "ßâÉßâÆßâûßâ£ßâößâæßâÉ ßâÉßâáßâÉßâÉßâáßâíßâößâæßâÿßâùßâÿßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Moderate arousal leads to optimal performance.",
        "explanationKa": "ßâûßâ¥ßâ¢ßâÿßâößâáßâÿ ßâÉßâÆßâûßâ£ßâößâæßâÉ ßâÿßâ¼ßâòßâößâòßâí ßâ¥ßâ₧ßâóßâÿßâ¢ßâÉßâÜßâúßâá ßâ¿ßâößâíßâáßâúßâÜßâößâæßâÉßâí.",
        "optionsRu": [
          "╨º╨╡╨╝ ╨▒╨╛╨╗╤î╤ê╨╡ ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╤Å, ╤é╨╡╨╝ ╨╗╤â╤ç╤ê╨╡",
          "╨ú╨╝╨╡╤Ç╨╡╨╜╨╜╨╛╨╡ ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ ╨╛╨┐╤é╨╕╨╝╨░╨╗╤î╨╜╨╛",
          "╨¢╤â╤ç╤ê╨╡ ╨▓╤ü╨╡╨│╨╛ ╨╜╨╕╨╖╨║╨╛╨╡ ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡",
          "╨Æ╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ ╨╜╨╡ ╨╕╨╝╨╡╨╡╤é ╨╖╨╜╨░╤ç╨╡╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╘▒╒╛╒Ñ╒¼╒½ ╒¼╒í╒╛ ╒ú╓Ç╒ú╒╝╒╕╓é╒┤",
          "╒ä╒½╒╗╒½╒╢ ╒ú╓Ç╒ú╒╝╒┤╒í╒╢ ╓à╒║╒┐╒½╒┤╒í╒¼",
          "╒æ╒í╒«╓Ç ╒ú╓Ç╒ú╒╝╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒¼╒í╒╛╒í╒ú╒╕╓é╒╡╒╢╒╜",
          "╘│╓Ç╒ú╒╝╒╕╓é╒┤╒¿ ╒í╒╢╒┐╒Ñ╒▓╒½"
        ],
        "optionsAz": [
          "Daha ├ºox h╔Öy╔Öcan daha yax┼ƒ─▒d─▒r",
          "Orta d╔Ör╔Öc╔Öd╔Ö oyanma optimald─▒r",
          "A┼ƒa─ƒ─▒ h╔Öy╔Öcan ╔Ön yax┼ƒ─▒s─▒",
          "Oyan─▒┼ƒ ╔Öh╔Ömiyy╔Ötsizdir"
        ],
        "questionRu": "╨ù╨░╨║╨╛╨╜ ╨Ö╨╡╤Ç╨║╤ü╨░-╨ö╨╛╨┤╤ü╨╛╨╜╨░:",
        "explanationHy": "╒ë╒í╓â╒í╒╛╒╕╓Ç ╒ú╓Ç╒ú╒╝╒╕╓é╒┤╒¿ ╒░╒í╒╢╒ú╒Ñ╓ü╒╢╒╕╓é╒┤ ╒º ╓à╒║╒┐╒½╒┤╒í╒¼ ╒»╒í╒┐╒í╓Ç╒┤╒í╒╢:",
        "questionHy": "╘╡╓Ç╒»╒Ñ╒╜-╘┤╒╕╒ñ╒╜╒╕╒╢╒½ ╓à╓Ç╒Ñ╒╢╓ä╒¿.",
        "explanationRu": "╨ú╨╝╨╡╤Ç╨╡╨╜╨╜╨╛╨╡ ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╕╨▓╨╛╨┤╨╕╤é ╨║ ╨╛╨┐╤é╨╕╨╝╨░╨╗╤î╨╜╨╛╨╣ ╨┐╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╨╕.",
        "questionAz": "Yerkes-Dodson qanunu:",
        "explanationAz": "Orta d╔Ör╔Öc╔Öd╔Ö h╔Öy╔Öcanlanma optimal performansa g╔Ötirib ├º─▒xar─▒r."
      },
      {
        "id": "q10-7",
        "question": "Cannon-Bard says:",
        "questionKa": "ßâÖßâößâ£ßâ¥ßâ£-ßâæßâÉßâáßâôßâÿßâí ßâùßâößâ¥ßâáßâÿßâÉ ßâÉßâ¢ßâæßâ¥ßâæßâí:",
        "options": [
          "Body causes emotions",
          "Emotions and arousal occur simultaneously",
          "We label arousal",
          "Emotions unnecessary"
        ],
        "optionsKa": [
          "ßâíßâ«ßâößâúßâÜßâÿ ßâÿßâ¼ßâòßâößâòßâí ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâí",
          "ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿ ßâôßâÉ ßâÉßâÆßâûßâ£ßâößâæßâÉ ßâößâáßâùßâôßâáßâ¥ßâúßâÜßâÉßâô ßâ«ßâôßâößâæßâÉ",
          "ßâ⌐ßâòßâößâ£ ßâÉßâÆßâûßâ£ßâößâæßâÉßâí ßâòßâÉßâíßâÉßâ«ßâößâÜßâößâæßâù",
          "ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿ ßâÉßâá ßâÉßâáßâÿßâí ßâíßâÉßâ¡ßâÿßâáßâ¥"
        ],
        "correctIndex": 1,
        "explanation": "Experience and arousal happen simultaneously.",
        "explanationKa": "ßâÆßâÉßâ£ßâ¬ßâôßâÉ ßâôßâÉ ßâÉßâÆßâûßâ£ßâößâæßâÉ ßâößâáßâùßâôßâáßâ¥ßâúßâÜßâÉßâô ßâ«ßâôßâößâæßâÉ.",
        "optionsRu": [
          "╨ó╨╡╨╗╨╛ ╨▓╤ï╨╖╤ï╨▓╨░╨╡╤é ╤ì╨╝╨╛╤å╨╕╨╕",
          "╨¡╨╝╨╛╤å╨╕╨╕ ╨╕ ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ ╨▓╨╛╨╖╨╜╨╕╨║╨░╤Ä╤é ╨╛╨┤╨╜╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╨╛",
          "╨£╤ï ╨╜╨░╨╖╤ï╨▓╨░╨╡╨╝ ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡",
          "╨¡╨╝╨╛╤å╨╕╨╕ ╨╜╨╡ ╨╜╤â╨╢╨╜╤ï"
        ],
        "optionsHy": [
          "╒ä╒í╓Ç╒┤╒½╒╢╒¿ ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç ╒º ╒í╒╝╒í╒╗╒í╓ü╒╢╒╕╓é╒┤",
          "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒╢ ╒╕╓é ╒ú╓Ç╒ú╒╝╒╕╓é╒┤╒¿ ╒┐╒Ñ╒▓╒½ ╒Ñ╒╢ ╒╕╓é╒╢╒Ñ╒╢╒╕╓é╒┤ ╒┤╒½╒í╒¬╒í╒┤╒í╒╢╒í╒»",
          "╒ä╒Ñ╒╢╓ä ╒║╒½╒┐╒í╒»╒í╒╛╒╕╓Ç╒╕╓é╒┤ ╒Ñ╒╢╓ä ╒ú╓Ç╒ú╒╝╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç ╒í╒╛╒Ñ╒¼╒╕╓Ç╒ñ"
        ],
        "optionsAz": [
          "B╔Öd╔Ön duy─ƒulara s╔Öb╔Öb olur",
          "Duy─ƒular v╔Ö h╔Öy╔Öcan eyni vaxtda ba┼ƒ verir",
          "Oyan─▒┼ƒ─▒ etiketl╔Öyirik",
          "Laz─▒ms─▒z duy─ƒular"
        ],
        "questionRu": "╨Ü╤ì╨╜╨╜╨╛╨╜-╨æ╨░╤Ç╨┤ ╨│╨╛╨▓╨╛╤Ç╨╕╤é:",
        "explanationHy": "╒ô╒╕╓Ç╒▒╒¿ ╓ç ╒ú╓Ç╒ú╒╝╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒┐╒Ñ╒▓╒½ ╒Ñ╒╢ ╒╕╓é╒╢╒Ñ╒╢╒╕╓é╒┤ ╒┤╒½╒í╒¬╒í╒┤╒í╒╢╒í╒»:",
        "questionHy": "Cannon-Bard ╒í╒╜╒╕╓é╒┤ ╒º.",
        "explanationRu": "╨ƒ╨╡╤Ç╨╡╨╢╨╕╨▓╨░╨╜╨╕╨╡ ╨╕ ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╛╨╕╤ü╤à╨╛╨┤╤Å╤é ╨╛╨┤╨╜╨╛╨▓╤Ç╨╡╨╝╨╡╨╜╨╜╨╛.",
        "questionAz": "Cannon-Bard deyir:",
        "explanationAz": "T╔Öcr├╝b╔Ö v╔Ö h╔Öy╔Öcan eyni vaxtda ba┼ƒ verir."
      },
      {
        "id": "q10-8",
        "question": "Overjustification effect:",
        "questionKa": "ßâûßâößâôßâ¢ßâößâóßâÿ ßâÆßâÉßâ¢ßâÉßâáßâùßâÜßâößâæßâÿßâí ßâößâñßâößâÑßâóßâÿ:",
        "options": [
          "External rewards decrease intrinsic motivation",
          "Too much motivation fails",
          "More money more effort",
          "Emotions too strong"
        ],
        "optionsKa": [
          "ßâÆßâÉßâáßâößâÆßâÉßâ£ßâÿ ßâ»ßâÿßâÜßâôßâ¥ßâößâæßâÿ ßâÉßâ¢ßâ¬ßâÿßâáßâößâæßâí ßâ¿ßâÿßâ£ßâÉßâÆßâÉßâ£ ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÉßâí",
          "ßâûßâößâôßâ¢ßâößâóßâÿ ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÉ ßâòßâößâá ßâ«ßâößâáßâ«ßâôßâößâæßâÉ",
          "ßâ¢ßâößâóßâÿ ßâñßâúßâÜßâÿ ßâ¢ßâößâóßâÿ ßâ½ßâÉßâÜßâÿßâíßâ«ßâ¢ßâößâòßâÉ",
          "ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿ ßâ½ßâÉßâÜßâÿßâÉßâ£ ßâ½ßâÜßâÿßâößâáßâÿßâÉ"
        ],
        "correctIndex": 0,
        "explanation": "External rewards can reduce intrinsic motivation.",
        "explanationKa": "ßâÆßâÉßâáßâößâÆßâÉßâ£ßâ¢ßâÉ ßâ»ßâÿßâÜßâôßâ¥ßâößâæßâ¢ßâÉ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâ¿ßâößâÉßâ¢ßâ¬ßâÿßâáßâ¥ßâí ßâ¿ßâÿßâ£ßâÉßâÆßâÉßâ£ßâÿ ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÉ.",
        "optionsRu": [
          "╨Æ╨╜╨╡╤ê╨╜╨╕╨╡ ╨╜╨░╨│╤Ç╨░╨┤╤ï ╤ü╨╜╨╕╨╢╨░╤Ä╤é ╨▓╨╜╤â╤é╤Ç╨╡╨╜╨╜╤Ä╤Ä ╨╝╨╛╤é╨╕╨▓╨░╤å╨╕╤Ä.",
          "╨í╨╗╨╕╤ê╨║╨╛╨╝ ╨▒╨╛╨╗╤î╤ê╨░╤Å ╨╝╨╛╤é╨╕╨▓╨░╤å╨╕╤Å ╤é╨╡╤Ç╨┐╨╕╤é ╨╜╨╡╤â╨┤╨░╤ç╤â",
          "╨æ╨╛╨╗╤î╤ê╨╡ ╨┤╨╡╨╜╨╡╨│, ╨▒╨╛╨╗╤î╤ê╨╡ ╤â╤ü╨╕╨╗╨╕╨╣",
          "╨¡╨╝╨╛╤å╨╕╨╕ ╤ü╨╗╨╕╤ê╨║╨╛╨╝ ╤ü╨╕╨╗╤î╨╜╤ï╨╡"
        ],
        "optionsHy": [
          "╘▒╓Ç╒┐╒í╓ä╒½╒╢ ╒║╒í╓Ç╒ú╓ç╒╢╒Ñ╓Ç╒¿ ╒╢╒╛╒í╒ª╒Ñ╓ü╒╢╒╕╓é╒┤ ╒Ñ╒╢ ╒╢╒Ñ╓Ç╓ä╒½╒╢ ╒┤╒╕╒┐╒½╒╛╒í╓ü╒½╒í╒╢",
          "╒ë╒í╓â╒í╒ª╒í╒╢╓ü ╒╖╒í╒┐ ╒┤╒╕╒┐╒½╒╛╒í╓ü╒½╒í ╒▒╒í╒¡╒╕╒▓╒╛╒╕╓é╒┤ ╒º",
          "╘▒╒╛╒Ñ╒¼╒½ ╒╖╒í╒┐ ╒ú╒╕╓é╒┤╒í╓Ç, ╒í╒╛╒Ñ╒¼╒½ ╒╖╒í╒┐ ╒╗╒í╒╢╓ä",
          "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒╣╒í╓â╒í╒ª╒í╒╢╓ü ╒╕╓é╒¬╒Ñ╒▓ ╒Ñ╒╢"
        ],
        "optionsAz": [
          "Xarici m├╝kafatlar daxili motivasiyan─▒ azald─▒r",
          "H╔Öddind╔Ön art─▒q motivasiya u─ƒursuz olur",
          "Daha ├ºox pul, daha ├ºox s╔Öy",
          "Emosiyalar ├ºox g├╝cl├╝d├╝r"
        ],
        "questionRu": "╨¡╤ä╤ä╨╡╨║╤é ╤ü╨▓╨╡╤Ç╤à╨╛╨┐╤Ç╨░╨▓╨┤╨░╨╜╨╕╤Å:",
        "questionHy": "╒ë╒í╓â╒í╒ª╒í╒╢╓ü ╒í╓Ç╒ñ╒í╓Ç╒í╓ü╒┤╒í╒╢ ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢.",
        "explanationHy": "╘▒╓Ç╒┐╒í╓ä╒½╒╢ ╒║╒í╓Ç╒ú╓ç╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒╢╒╛╒í╒ª╒Ñ╓ü╒╢╒Ñ╒¼ ╒╢╒Ñ╓Ç╓ä╒½╒╢ ╒┤╒╕╒┐╒½╒╛╒í╓ü╒½╒í╒╢:",
        "explanationRu": "╨Æ╨╜╨╡╤ê╨╜╨╕╨╡ ╨╜╨░╨│╤Ç╨░╨┤╤ï ╨╝╨╛╨│╤â╤é ╤ü╨╜╨╕╨╖╨╕╤é╤î ╨▓╨╜╤â╤é╤Ç╨╡╨╜╨╜╤Ä╤Ä ╨╝╨╛╤é╨╕╨▓╨░╤å╨╕╤Ä.",
        "questionAz": "H╔Öddind╔Ön art─▒q ╔Ösasland─▒rma effekti:",
        "explanationAz": "Xarici m├╝kafatlar daxili motivasiyan─▒ azalda bil╔Ör."
      },
      {
        "id": "q10-9",
        "question": "Which theory: label arousal to identify emotions?",
        "questionKa": "ßâáßâ¥ßâ¢ßâößâÜßâÿ ßâùßâößâ¥ßâáßâÿßâÉ: ßâÉßâÆßâûßâ£ßâößâæßâÿßâí ßâÿßâÉßâáßâÜßâÿßâºßâÿ ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿßâí ßâÿßâôßâößâ£ßâóßâÿßâñßâÿßâ¬ßâÿßâáßâößâæßâÿßâíßâùßâòßâÿßâí?",
        "options": [
          "James-Lange",
          "Cannon-Bard",
          "Schachter-Singer",
          "Evolutionary"
        ],
        "optionsKa": [
          "ßâ»ßâößâÿßâ¢ßâí-ßâÜßâÉßâ£ßâÆßâö",
          "ßâÖßâößâ£ßâ¥ßâ£-ßâæßâÉßâáßâôßâÿ",
          "ßâ¿ßâößâ«ßâóßâößâá-ßâíßâÿßâ£ßâÆßâößâáßâÿ",
          "ßâößâòßâ¥ßâÜßâúßâ¬ßâÿßâúßâáßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "Emotion = arousal + cognitive label.",
        "explanationKa": "ßâößâ¢ßâ¥ßâ¬ßâÿßâÉ = ßâÉßâÆßâûßâ£ßâößâæßâÉ + ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ ßâÿßâÉßâáßâÜßâÿßâºßâÿ.",
        "optionsRu": [
          "╨ö╨╢╨╡╨╣╨╝╤ü-╨¢╨░╨╜╨│╨╡",
          "╨Ü╤ì╨╜╨╜╨╛╨╜-╨æ╨░╤Ç╨┤",
          "╨¿╨░╤à╤é╨╡╤Ç-╨ù╨╕╨╜╨│╨╡╤Ç",
          "╨¡╨▓╨╛╨╗╤Ä╤å╨╕╨╛╨╜╨╜╤ï╨╣"
        ],
        "optionsHy": [
          "╒ï╒Ñ╒╡╒┤╒╜-╘╝╒Ñ╒╢╒ú",
          "╘╣╒╢╒ñ╒í╒╢╒╕╒⌐-╘▓╒í╓Ç╒ñ",
          "╒ç╒í╒¡╒┐╒Ñ╓Ç-╒ì╒½╒╢╒ú╒Ñ╓Ç",
          "╘╖╒╛╒╕╒¼╒╡╒╕╓é╓ü╒½╒╕╒╢"
        ],
        "optionsAz": [
          "James-Lange",
          "Cannon-Bard",
          "Schachter-M├╝─ƒ╔Önni",
          "T╔Ökam├╝l├º├╝"
        ],
        "explanationRu": "╨¡╨╝╨╛╤å╨╕╤Å = ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ + ╨║╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╨░╤Å ╨╝╨╡╤é╨║╨░.",
        "explanationHy": "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä = ╒ú╓Ç╒ú╒╝╒╕╓é╒┤ + ╒│╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╒║╒½╒┐╒í╒»:",
        "questionRu": "╨Ü╨░╨║╨░╤Å ╤é╨╡╨╛╤Ç╨╕╤Å: ╨╝╨░╤Ç╨║╨╕╤Ç╨╛╨▓╨░╤é╤î ╨▓╨╛╨╖╨▒╤â╨╢╨┤╨╡╨╜╨╕╨╡ ╨┤╨╗╤Å ╨╕╨┤╨╡╨╜╤é╨╕╤ä╨╕╨║╨░╤å╨╕╨╕ ╤ì╨╝╨╛╤å╨╕╨╣?",
        "questionHy": "╒ê╒₧╓Ç ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒º╒¥ ╒║╒½╒┐╒í╒»╒í╒╛╒╕╓Ç╒Ñ╒¼ ╒ú╓Ç╒ú╒╝╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿╒¥ ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒Ñ╒¼╒╕╓é ╒░╒í╒┤╒í╓Ç:",
        "explanationAz": "Emosiya = h╔Öy╔Öcan + idrak etiketi.",
        "questionAz": "Hans─▒ n╔Öz╔Öriyy╔Ö: emosiyalar─▒ m├╝╔Öyy╔Ön etm╔Ök ├╝├º├╝n oyan─▒┼ƒ etiketi?"
      },
      {
        "id": "q10-10",
        "question": "Maslow is known for:",
        "questionKa": "ßâ¢ßâÉßâíßâÜßâ¥ßâú ßâ¬ßâ£ßâ¥ßâæßâÿßâÜßâÿßâÉ:",
        "options": [
          "Behaviorism",
          "Hierarchy of needs",
          "Psychoanalysis",
          "CBT"
        ],
        "optionsKa": [
          "ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâÿßâûßâ¢ßâÿßâù",
          "ßâ¢ßâ¥ßâùßâ«ßâ¥ßâòßâ£ßâÿßâÜßâößâæßâÉßâùßâÉ ßâÿßâößâáßâÉßâáßâÑßâÿßâÿßâù",
          "ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâûßâÿßâù",
          "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâá-ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâúßâÜßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÿßâù"
        ],
        "correctIndex": 1,
        "explanation": "The hierarchy of needs.",
        "explanationKa": "ßâ¢ßâ¥ßâùßâ«ßâ¥ßâòßâ£ßâÿßâÜßâößâæßâÉßâùßâÉ ßâÿßâößâáßâÉßâáßâÑßâÿßâÉ.",
        "optionsRu": [
          "╨æ╨╕╤à╨╡╨▓╨╕╨╛╤Ç╨╕╨╖╨╝",
          "╨ÿ╨╡╤Ç╨░╤Ç╤à╨╕╤Å ╨┐╨╛╤é╤Ç╨╡╨▒╨╜╨╛╤ü╤é╨╡╨╣",
          "╨ƒ╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╨╖",
          "╨ù╨æ╨ó"
        ],
        "optionsHy": [
          "╒Ä╒í╓Ç╓ä╒í╒ú╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘┐╒í╓Ç╒½╓ä╒╢╒Ñ╓Ç╒½ ╒░╒½╒Ñ╓Ç╒í╓Ç╒¡╒½╒í",
          "╒Ç╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "CBT"
        ],
        "optionsAz": [
          "Davran─▒┼ƒ├º─▒l─▒q",
          "Ehtiyaclar iyerarxiyas─▒",
          "Psixoanaliz",
          "CBT"
        ],
        "questionRu": "╨£╨░╤ü╨╗╨╛╤â ╨╕╨╖╨▓╨╡╤ü╤é╨╡╨╜:",
        "explanationRu": "╨ÿ╨╡╤Ç╨░╤Ç╤à╨╕╤Å ╨┐╨╛╤é╤Ç╨╡╨▒╨╜╨╛╤ü╤é╨╡╨╣.",
        "questionHy": "╒ä╒í╒╜╒¼╒╕╒╕╓é╒╢ ╒░╒í╒╡╒┐╒╢╒½ ╒º ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╕╒╛.",
        "explanationHy": "╘┐╒í╓Ç╒½╓ä╒╢╒Ñ╓Ç╒½ ╒░╒½╒Ñ╓Ç╒í╓Ç╒¡╒½╒í.",
        "questionAz": "Maslow tan─▒n─▒r:",
        "explanationAz": "Ehtiyaclar─▒n iyerarxiyas─▒."
      }
    ],
    "titleRu": "╨£╨╛╤é╨╕╨▓╨░╤å╨╕╤Å ╨╕ ╤ì╨╝╨╛╤å╨╕╨╕ ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleAz": "Motivasiya v╔Ö Emosiya - Viktorina",
    "titleHy": "╒ä╒╕╒┐╒½╒╛╒í╓ü╒½╒í ╓ç ╒░╒╕╓é╒╡╒ª╒Ñ╓Ç ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í"
  },
  {
    "id": "ch11-quiz",
    "chapterId": 11,
    "title": "Personality ΓÇö Quiz",
    "titleKa": "ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÉ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q11-1",
        "question": "Freud's id operates on:",
        "questionKa": "ßâñßâáßâ¥ßâÿßâôßâÿßâí ßâÿßâôßâÿ ßâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâí:",
        "options": [
          "Reality principle",
          "Pleasure principle",
          "Moral principle",
          "Social principle"
        ],
        "optionsKa": [
          "ßâáßâößâÉßâÜßâ¥ßâæßâÿßâí ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿßâù",
          "ßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâößâæßâÿßâí ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿßâù",
          "ßâ¢ßâ¥ßâáßâÉßâÜßâúßâáßâÿ ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿßâù",
          "ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿßâù"
        ],
        "correctIndex": 1,
        "explanation": "Id seeks immediate gratification.",
        "explanationKa": "ßâÿßâôßâÿ ßâößâ½ßâößâæßâí ßâ¢ßâºßâÿßâíßâÿßâößâá ßâôßâÉßâÖßâ¢ßâÉßâºßâ¥ßâñßâÿßâÜßâößâæßâÉßâí.",
        "optionsRu": [
          "╨ƒ╤Ç╨╕╨╜╤å╨╕╨┐ ╤Ç╨╡╨░╨╗╤î╨╜╨╛╤ü╤é╨╕",
          "╨ƒ╤Ç╨╕╨╜╤å╨╕╨┐ ╤â╨┤╨╛╨▓╨╛╨╗╤î╤ü╤é╨▓╨╕╤Å",
          "╨£╨╛╤Ç╨░╨╗╤î╨╜╤ï╨╣ ╨┐╤Ç╨╕╨╜╤å╨╕╨┐",
          "╨í╨╛╤å╨╕╨░╨╗╤î╨╜╤ï╨╣ ╨┐╤Ç╨╕╨╜╤å╨╕╨┐"
        ],
        "optionsHy": [
          "╘╗╓Ç╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä",
          "╒Ç╒í╒│╒╕╓é╒╡╓ä╒½ ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä",
          "╘▓╒í╓Ç╒╕╒╡╒í╒»╒í╒╢ ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä",
          "╒ì╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä"
        ],
        "optionsAz": [
          "Reall─▒q prinsipi",
          "Z├╢vq prinsipi",
          "M╔Ön╔Övi prinsip",
          "Sosial prinsip"
        ],
        "questionHy": "╒û╓Ç╒Ñ╒╡╒ñ╒½ id-╒╢ ╒ú╒╕╓Ç╒«╒╕╓é╒┤ ╒º.",
        "explanationRu": "╨ÿ╨┤ ╨╕╤ë╨╡╤é ╨╜╨╡╨╝╨╡╨┤╨╗╨╡╨╜╨╜╨╛╨│╨╛ ╤â╨┤╨╛╨▓╨╗╨╡╤é╨▓╨╛╤Ç╨╡╨╜╨╕╤Å.",
        "questionRu": "╨ÿ╨┤ ╨ñ╤Ç╨╡╨╣╨┤╨░ ╨┤╨╡╨╣╤ü╤é╨▓╤â╨╡╤é ╨╜╨░:",
        "explanationAz": "Id d╔Örhal m╔Ömnuniyy╔Öt axtar─▒r.",
        "questionAz": "Freydin id-si a┼ƒa─ƒ─▒dak─▒lar ├╝z╔Örind╔Ö i┼ƒl╔Öyir:",
        "explanationHy": "Id-╒¿ ╒í╒╢╒░╒í╒║╒í╒▓ ╒ó╒í╒╛╒í╓Ç╒í╓Ç╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒º ╓â╒╢╒┐╓Ç╒╕╓é╒┤:"
      },
      {
        "id": "q11-2",
        "question": "Big Five excludes:",
        "questionKa": "ßâôßâÿßâô ßâ«ßâúßâùßâößâúßâÜßâ¿ßâÿ ßâÉßâá ßâ¿ßâößâôßâÿßâí:",
        "options": [
          "Openness",
          "Conscientiousness",
          "Intelligence",
          "Neuroticism"
        ],
        "optionsKa": [
          "ßâÆßâÉßâ«ßâíßâ£ßâÿßâÜßâ¥ßâæßâÉ",
          "ßâÖßâößâùßâÿßâÜßâíßâÿßâ£ßâôßâÿßâíßâÿßâößâáßâößâæßâÉ",
          "ßâÿßâ£ßâóßâößâÜßâößâÑßâóßâÿ",
          "ßâ£ßâößâòßâáßâ¥ßâóßâÿßâûßâ¢ßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "Intelligence is not a Big Five trait.",
        "explanationKa": "ßâÿßâ£ßâóßâößâÜßâößâÑßâóßâÿ ßâÉßâá ßâÉßâáßâÿßâí ßâôßâÿßâôßâÿ ßâ«ßâúßâùßâößâúßâÜßâÿßâí ßâùßâòßâÿßâíßâößâæßâÉ.",
        "optionsRu": [
          "╨₧╤é╨║╤Ç╤ï╤é╨╛╤ü╤é╤î",
          "╨ö╨╛╨▒╤Ç╨╛╤ü╨╛╨▓╨╡╤ü╤é╨╜╨╛╤ü╤é╤î",
          "╨ÿ╨╜╤é╨╡╨╗╨╗╨╡╨║╤é",
          "╨¥╨╡╨▓╤Ç╨╛╤é╨╕╨╖╨╝"
        ],
        "optionsHy": [
          "╘▓╒í╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘▓╒í╓Ç╒Ñ╒¡╒▓╒│╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘▓╒í╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒å╓ç╓Ç╒╕╒┐╒½╒ª╒┤"
        ],
        "optionsAz": [
          "A├º─▒ql─▒q",
          "Vicdanl─▒l─▒q",
          "K╔Ö┼ƒfiyyat",
          "Nevrotiklik"
        ],
        "questionHy": "╒ä╒Ñ╒« ╒░╒╢╒ú╒╡╒í╒»╒¿ ╒ó╒í╓ü╒í╒╝╒╕╓é╒┤ ╒º.",
        "questionRu": "┬½╨æ╨╛╨╗╤î╤ê╨░╤Å ╨┐╤Å╤é╨╡╤Ç╨║╨░┬╗ ╨╕╤ü╨║╨╗╤Ä╤ç╨░╨╡╤é:",
        "explanationAz": "K╔Ö┼ƒfiyyat b├╢y├╝k be┼ƒlik x├╝susiyy╔Öti deyil.",
        "explanationRu": "╨ÿ╨╜╤é╨╡╨╗╨╗╨╡╨║╤é ╨╜╨╡ ╨▓╤à╨╛╨┤╨╕╤é ╨▓ ╤ç╨╕╤ü╨╗╨╛ ╤ç╨╡╤Ç╤é ┬½╨æ╨╛╨╗╤î╤ê╨╛╨╣ ╨┐╤Å╤é╨╡╤Ç╨║╨╕┬╗.",
        "questionAz": "B├╢y├╝k be┼ƒlik istisnalar:",
        "explanationHy": "╘▓╒í╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒┤╒Ñ╒« ╒░╒╢╒ú╒╡╒í╒»╒½ ╒░╒í╒┐╒»╒í╒╢╒½╒╖ ╒╣╒º:"
      },
      {
        "id": "q11-3",
        "question": "Rogers emphasized:",
        "questionKa": "ßâáßâ¥ßâ»ßâößâáßâíßâÿ ßâ«ßâÉßâûßâí ßâúßâíßâòßâÉßâ¢ßâôßâÉ:",
        "options": [
          "Defense mechanisms",
          "Unconditional positive regard",
          "Conditioning",
          "Dream analysis"
        ],
        "optionsKa": [
          "ßâôßâÉßâ¬ßâòßâÿßâí ßâ¢ßâößâÑßâÉßâ£ßâÿßâûßâ¢ßâößâæßâí",
          "ßâúßâ₧ßâÿßâáßâ¥ßâæßâ¥ ßâ₧ßâ¥ßâûßâÿßâóßâÿßâúßâá ßâ¢ßâÿßâªßâößâæßâÉßâí",
          "ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâ¥ßâ£ßâÿßâáßâößâæßâÉßâí",
          "ßâíßâÿßâûßâ¢ßâáßâößâæßâÿßâí ßâÉßâ£ßâÉßâÜßâÿßâûßâí"
        ],
        "correctIndex": 1,
        "explanation": "Unconditional positive regard is essential.",
        "explanationKa": "ßâúßâ₧ßâÿßâáßâ¥ßâæßâ¥ ßâ₧ßâ¥ßâûßâÿßâóßâÿßâúßâáßâÿ ßâ¢ßâÿßâªßâößâæßâÉ ßâÉßâúßâ¬ßâÿßâÜßâößâæßâößâÜßâÿßâÉ.",
        "optionsRu": [
          "╨ù╨░╤ë╨╕╤é╨╜╤ï╨╡ ╨╝╨╡╤à╨░╨╜╨╕╨╖╨╝╤ï",
          "╨æ╨╡╨╖╨╛╨│╨╛╨▓╨╛╤Ç╨╛╤ç╨╜╤ï╨╣ ╨┐╨╛╨╖╨╕╤é╨╕╨▓",
          "╨Ü╨╛╨╜╨┤╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡",
          "╨É╨╜╨░╨╗╨╕╨╖ ╤ü╨╜╨╛╨▓"
        ],
        "optionsHy": [
          "╒è╒í╒╖╒┐╒║╒í╒╢╒í╒»╒í╒╢ ╒┤╒Ñ╒¡╒í╒╢╒½╒ª╒┤╒╢╒Ñ╓Ç",
          "╘▒╒╢╒╛╒Ñ╓Ç╒í╒║╒í╒░ ╒ñ╓Ç╒í╒»╒í╒╢ ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒┤╒╕╓é╒╢╓ä",
          "╘┐╒╕╒╢╒ñ╒½╓ü╒½╒╕╒╢╒Ñ╓Ç",
          "╘╡╓Ç╒í╒ª╒í╒╢╓ä╒½ ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "M├╝dafi╔Ö mexanizml╔Öri",
          "┼₧╔Örtsiz m├╝sb╔Öt m├╝nasib╔Öt",
          "Kondisioner",
          "X╔Öyallar─▒n t╔Öhlili"
        ],
        "explanationRu": "╨æ╨╡╨╖╨╛╨│╨╛╨▓╨╛╤Ç╨╛╤ç╨╜╨╛╨╡ ╨┐╨╛╨╗╨╛╨╢╨╕╤é╨╡╨╗╤î╨╜╨╛╨╡ ╨╛╤é╨╜╨╛╤ê╨╡╨╜╨╕╨╡ ╨╕╨╝╨╡╨╡╤é ╨▓╨░╨╢╨╜╨╛╨╡ ╨╖╨╜╨░╤ç╨╡╨╜╨╕╨╡.",
        "explanationHy": "╘▒╒╢╒╛╒Ñ╓Ç╒í╒║╒í╒░ ╒ñ╓Ç╒í╒»╒í╒╢ ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒┤╒╕╓é╒╢╓ä╒¿ ╒º╒í╒»╒í╒╢ ╒º:",
        "questionHy": "╒î╒╕╒╗╒Ñ╓Ç╒╜╒╢ ╒¿╒╢╒ñ╒ú╒«╒Ñ╒¼ ╒º.",
        "questionAz": "Rogers vur─ƒulad─▒:",
        "questionRu": "╨á╨╛╨┤╨╢╨╡╤Ç╤ü ╨┐╨╛╨┤╤ç╨╡╤Ç╨║╨╜╤â╨╗:",
        "explanationAz": "┼₧╔Örtsiz m├╝sb╔Öt m├╝nasib╔Öt vacibdir."
      },
      {
        "id": "q11-4",
        "question": "Projection means:",
        "questionKa": "ßâ₧ßâáßâ¥ßâößâÑßâ¬ßâÿßâÉ ßâ£ßâÿßâ¿ßâ£ßâÉßâòßâí:",
        "options": [
          "Denying reality",
          "Attributing own feelings to others",
          "Returning to earlier stage",
          "Channeling impulses"
        ],
        "optionsKa": [
          "ßâáßâößâÉßâÜßâ¥ßâæßâÿßâí ßâúßâÉßâáßâºßâ¥ßâñßâÉ",
          "ßâíßâÉßâÖßâúßâùßâÉßâáßâÿ ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâæßâÿßâí ßâíßâ«ßâòßâößâæßâûßâö ßâÆßâÉßâôßâÉßâóßâÉßâ£ßâÉ",
          "ßâÉßâôßâáßâößâúßâÜ ßâíßâóßâÉßâôßâÿßâÉßâûßâö ßâôßâÉßâæßâáßâúßâ£ßâößâæßâÉ",
          "ßâÿßâ¢ßâ₧ßâúßâÜßâíßâößâæßâÿßâí ßâ¢ßâÿßâ¢ßâÉßâáßâùßâòßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Projecting unacceptable feelings onto others.",
        "explanationKa": "ßâ¢ßâÿßâúßâªßâößâæßâößâÜßâÿ ßâÆßâáßâ½ßâ£ßâ¥ßâæßâößâæßâÿßâí ßâíßâ«ßâòßâößâæßâûßâö ßâÆßâÉßâôßâÉßâóßâÉßâ£ßâÉ.",
        "optionsRu": [
          "╨₧╤é╤Ç╨╕╤å╨░╨╜╨╕╨╡ ╤Ç╨╡╨░╨╗╤î╨╜╨╛╤ü╤é╨╕",
          "╨ƒ╤Ç╨╕╨┐╨╕╤ü╤ï╨▓╨░╤é╤î ╤ü╨▓╨╛╨╕ ╤ç╤â╨▓╤ü╤é╨▓╨░ ╨┤╤Ç╤â╨│╨╕╨╝",
          "╨Æ╨╛╨╖╨▓╤Ç╨░╤ë╨░╤Å╤ü╤î ╨║ ╨▒╨╛╨╗╨╡╨╡ ╤Ç╨░╨╜╨╜╨╡╨╝╤â ╤ì╤é╨░╨┐╤â",
          "╨¥╨░╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨╕╨╝╨┐╤â╨╗╤î╤ü╨╛╨▓"
        ],
        "optionsHy": [
          "╘╗╓Ç╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒Ñ╓Ç╓ä╒╕╓é╒┤╒¿",
          "╒ì╒Ñ╓â╒í╒»╒í╒╢ ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒½╒╢ ╒╛╒Ñ╓Ç╒í╒ú╓Ç╒Ñ╒¼╒¿",
          "╒Ä╒Ñ╓Ç╒í╒ñ╒í╒╝╒╢╒í╒¼╒╕╒╛ ╒í╒╛╒Ñ╒¼╒½ ╒╛╒í╒▓ ╓â╒╕╓é╒¼╒½╒╢",
          "╘╗╒┤╒║╒╕╓é╒¼╒╜╒╢╒Ñ╓Ç╒½ ╒╕╓é╒▓╒▓╒╕╓Ç╒ñ╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Reall─▒─ƒ─▒ inkar etm╔Ök",
          "├ûz hissl╔Örini ba┼ƒqalar─▒na aid etm╔Ök",
          "╞Åvv╔Ölki m╔Örh╔Öl╔Öy╔Ö qay─▒tmaq",
          "Kanalizasiya impulslar─▒"
        ],
        "questionHy": "╒è╓Ç╒╕╒╡╒Ñ╒»╓ü╒½╒í ╒╢╒╖╒í╒╢╒í╒»╒╕╓é╒┤ ╒º.",
        "questionAz": "Proyeksiya dem╔Ökdir:",
        "questionRu": "╨ƒ╤Ç╨╛╨╡╨║╤å╨╕╤Å ╨╛╨╖╨╜╨░╤ç╨░╨╡╤é:",
        "explanationAz": "Ba┼ƒqalar─▒na q╔Öbuledilm╔Öz hissl╔Öri ╔Öks etdirm╔Ök.",
        "explanationHy": "╒ê╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒½ ╒╛╓Ç╒í ╒í╒╢╒¿╒╢╒ñ╒╕╓é╒╢╒Ñ╒¼╒½ ╒ª╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒╢╒í╒¡╒í╒ú╒«╒╕╓é╒┤:",
        "explanationRu": "╨ƒ╤Ç╨╛╨╡╤å╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡ ╨╜╨╡╨┐╤Ç╨╕╨╡╨╝╨╗╨╡╨╝╤ï╤à ╤ç╤â╨▓╤ü╤é╨▓ ╨╜╨░ ╨┤╤Ç╤â╨│╨╕╤à."
      },
      {
        "id": "q11-5",
        "question": "Self-efficacy refers to:",
        "questionKa": "ßâùßâòßâÿßâùßâößâñßâößâÑßâóßâúßâáßâ¥ßâæßâÉ ßâößâ«ßâößâæßâÉ:",
        "options": [
          "Self-esteem",
          "Belief in ability to succeed",
          "Personality type",
          "Intelligence"
        ],
        "optionsKa": [
          "ßâùßâòßâÿßâùßâ¿ßâößâñßâÉßâíßâößâæßâÉßâí",
          "ßâ¼ßâÉßâáßâ¢ßâÉßâóßâößâæßâÿßâí ßâúßâ£ßâÉßâáßâÿßâí ßâáßâ¼ßâ¢ßâößâ£ßâÉßâí",
          "ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâóßâÿßâ₧ßâí",
          "ßâÿßâ£ßâóßâößâÜßâößâÑßâóßâí"
        ],
        "correctIndex": 1,
        "explanation": "Belief in capability to perform.",
        "explanationKa": "ßâ¿ßâößâíßâáßâúßâÜßâößâæßâÿßâí ßâúßâ£ßâÉßâáßâÿßâí ßâáßâ¼ßâ¢ßâößâ£ßâÉ.",
        "optionsRu": [
          "╨í╨░╨╝╨╛╨╛╤å╨╡╨╜╨║╨░",
          "╨Æ╨╡╤Ç╨░ ╨▓ ╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨┤╨╛╨▒╨╕╤é╤î╤ü╤Å ╤â╤ü╨┐╨╡╤à╨░",
          "╨ó╨╕╨┐ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕",
          "╨ÿ╨╜╤é╨╡╨╗╨╗╨╡╨║╤é"
        ],
        "optionsHy": [
          "╘╗╒╢╓ä╒╢╒í╒ú╒╢╒í╒░╒í╒┐╒í╒»╒í╒╢╒¿",
          "╒Ç╒í╒╗╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒╜╒╢╒Ñ╒¼╒╕╓é ╒╕╓é╒╢╒í╒»╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒╛╒í╒┐╓ä",
          "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╒Ñ╒╜╒í╒»╒¿",
          "╘▓╒í╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "├ûz├╝n╔Ö h├╢rm╔Öt",
          "U─ƒur qazanmaq bacar─▒─ƒ─▒na inam",
          "┼₧╔Öxsiyy╔Öt n├╢v├╝",
          "K╔Ö┼ƒfiyyat"
        ],
        "questionRu": "╨í╨░╨╝╨╛╤ì╤ä╤ä╨╡╨║╤é╨╕╨▓╨╜╨╛╤ü╤é╤î ╨┐╨╛╨┤╤Ç╨░╨╖╤â╨╝╨╡╨▓╨░╨╡╤é:",
        "explanationAz": "─░cra etm╔Ök qabiliyy╔Ötin╔Ö inam.",
        "explanationHy": "╘┐╒í╒┐╒í╓Ç╒Ñ╒¼╒╕╓é ╒╕╓é╒╢╒í╒»╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒í╒╛╒í╒┐╓ä:",
        "explanationRu": "╨Æ╨╡╤Ç╨░ ╨▓ ╤ü╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨┤╨╡╨╣╤ü╤é╨▓╨╛╨▓╨░╤é╤î.",
        "questionHy": "╘╗╒╢╓ä╒╢╒í╓Ç╒ñ╒╡╒╕╓é╒╢╒í╒╛╒Ñ╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒╕╓é╒┤ ╒º.",
        "questionAz": "├ûz-├╢z├╝n╔Ö effektivlik a┼ƒa─ƒ─▒dak─▒lara aiddir:"
      },
      {
        "id": "q11-6",
        "question": "Freud's stages exclude:",
        "questionKa": "ßâñßâáßâ¥ßâÿßâôßâÿßâí ßâíßâóßâÉßâôßâÿßâößâæßâ¿ßâÿ ßâÉßâá ßâ¿ßâößâôßâÿßâí:",
        "options": [
          "Oral",
          "Anal",
          "Cognitive",
          "Phallic"
        ],
        "optionsKa": [
          "ßâ¥ßâáßâÉßâÜßâúßâáßâÿ",
          "ßâÉßâ£ßâÉßâÜßâúßâáßâÿ",
          "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ",
          "ßâñßâÉßâÜßâÿßâÖßâúßâáßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "Cognitive is Piaget, not Freud.",
        "explanationKa": "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ ßâ₧ßâÿßâÉßâƒßâößâí ßâößâÖßâúßâùßâòßâ£ßâÿßâí, ßâÉßâáßâÉ ßâñßâáßâ¥ßâÿßâôßâí.",
        "optionsRu": [
          "╨₧╤Ç╨░╨╗╤î╨╜╤ï╨╣",
          "╨É╨╜╨░╨╗╤î╨╜╤ï╨╣",
          "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╨╣",
          "╨ñ╨░╨╗╨╗╨╕╤ç╨╡╤ü╨║╨╕╨╣"
        ],
        "optionsHy": [
          "╘▓╒í╒╢╒í╒╛╒╕╓Ç",
          "╘▒╒╢╒í╒¼",
          "╒â╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢",
          "╒û╒í╒¼╒½╒»"
        ],
        "optionsAz": [
          "┼₧ifahi",
          "Analiz",
          "Koqnitiv",
          "Fallik"
        ],
        "questionRu": "╨í╤é╨░╨┤╨╕╨╕ ╨ñ╤Ç╨╡╨╣╨┤╨░ ╨╕╤ü╨║╨╗╤Ä╤ç╨░╤Ä╤é:",
        "explanationHy": "╘┐╒╕╒ú╒╢╒½╒┐╒½╒╛╒¿ ╒è╒½╒í╒¬╒Ñ╒╢ ╒º, ╒╕╒╣ ╒⌐╒Ñ ╒û╓Ç╒Ñ╒╡╒ñ╒¿:",
        "questionHy": "╒û╓Ç╒Ñ╒╡╒ñ╒½ ╓â╒╕╓é╒¼╒Ñ╓Ç╒¿ ╒ó╒í╓ü╒í╒╝╒╕╓é╒┤ ╒Ñ╒╢.",
        "explanationRu": "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╨╛╤ü╤é╤î ΓÇô ╤ì╤é╨╛ ╨ƒ╨╕╨░╨╢╨╡, ╨░ ╨╜╨╡ ╨ñ╤Ç╨╡╨╣╨┤.",
        "explanationAz": "Koqnitiv Piagetdir, Freyd deyil.",
        "questionAz": "Freydin m╔Örh╔Öl╔Öl╔Öri istisna edir:"
      },
      {
        "id": "q11-7",
        "question": "Rorschach test uses:",
        "questionKa": "ßâáßâ¥ßâáßâ¿ßâÉßâ«ßâÿßâí ßâóßâößâíßâóßâÿ ßâÿßâºßâößâ£ßâößâæßâí:",
        "options": [
          "True/false",
          "Inkblots",
          "Sentences",
          "Drawings"
        ],
        "optionsKa": [
          "ßâ¡ßâößâ¿ßâ¢ßâÉßâáßâÿßâóßâÿ/ßâ¢ßâ¬ßâôßâÉßâáßâÿ",
          "ßâ¢ßâößâÜßâ£ßâÿßâí ßâÜßâÉßâÑßâößâæßâí",
          "ßâ¼ßâÿßâ£ßâÉßâôßâÉßâôßâößâæßâößâæßâí",
          "ßâ£ßâÉßâ«ßâÉßâóßâößâæßâí"
        ],
        "correctIndex": 1,
        "explanation": "Ambiguous inkblots for personality assessment.",
        "explanationKa": "ßâ¥ßâáßâÉßâûßâáßâ¥ßâòßâÉßâ£ßâÿ ßâ¢ßâößâÜßâ£ßâÿßâí ßâÜßâÉßâÑßâößâæßâÿ ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâ¿ßâößâñßâÉßâíßâößâæßâÿßâíßâùßâòßâÿßâí.",
        "optionsRu": [
          "╨ƒ╤Ç╨░╨▓╨┤╨░/╨╗╨╛╨╢╤î",
          "╤ç╨╡╤Ç╨╜╨╕╨╗╤î╨╜╤ï╨╡ ╨┐╤Å╤é╨╜╨░",
          "╨ƒ╤Ç╨╡╨┤╨╗╨╛╨╢╨╡╨╜╨╕╤Å",
          "╨á╨╕╤ü╤â╨╜╨║╨╕"
        ],
        "optionsHy": [
          "╒â╒½╒╖╒┐/╒╜╒╕╓é╒┐",
          "╘╣╒í╒╢╒í╓ä╒½ ╒ó╒«╒Ñ╓Ç",
          "╒å╒í╒¡╒í╒ñ╒í╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
          "╘│╒«╒í╒╢╒»╒í╓Ç╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "Do─ƒru/yalan",
          "M├╝r╔Ökk╔Öb l╔Ök╔Öl╔Öri",
          "C├╝ml╔Öl╔Ör",
          "R╔Ösml╔Ör"
        ],
        "questionRu": "╨Æ ╤é╨╡╤ü╤é╨╡ ╨á╨╛╤Ç╤ê╨░╤à╨░ ╨╕╤ü╨┐╨╛╨╗╤î╨╖╤â╤Ä╤é╤ü╤Å:",
        "explanationHy": "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒ú╒╢╒í╒░╒í╒┐╒┤╒í╒╢ ╒░╒í╒┤╒í╓Ç ╒╕╒╣ ╒┤╒½╒í╒╢╒╖╒í╒╢╒í╒» ╒⌐╒í╒╢╒í╓ä╒í╒╡╒½╒╢ ╒ó╒«╒Ñ╓Ç:",
        "questionHy": "Rorschach ╒⌐╒Ñ╒╜╒┐╒½ ╓à╒ú╒┐╒í╒ú╒╕╓Ç╒«╒╕╓é╒┤╒¿.",
        "explanationRu": "╨¥╨╡╨╛╨┤╨╜╨╛╨╖╨╜╨░╤ç╨╜╤ï╨╡ ╤ç╨╡╤Ç╨╜╨╕╨╗╤î╨╜╤ï╨╡ ╨┐╤Å╤é╨╜╨░ ╨┤╨╗╤Å ╨╛╤å╨╡╨╜╨║╨╕ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕.",
        "explanationAz": "┼₧╔Öxsiyy╔Ötin qiym╔Ötl╔Öndirilm╔Ösi ├╝├º├╝n qeyri-m├╝╔Öyy╔Ön m├╝r╔Ökk╔Öb l╔Ök╔Öl╔Öri.",
        "questionAz": "Rorschach testind╔Ön istifad╔Ö olunur:"
      },
      {
        "id": "q11-8",
        "question": "Ego operates on:",
        "questionKa": "ßâößâÆßâ¥ ßâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâí:",
        "options": [
          "Pleasure principle",
          "Moral principle",
          "Reality principle",
          "Unconscious"
        ],
        "optionsKa": [
          "ßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâößâæßâÿßâí ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿßâù",
          "ßâ¢ßâ¥ßâáßâÉßâÜßâúßâáßâÿ ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿßâù",
          "ßâáßâößâÉßâÜßâ¥ßâæßâÿßâí ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâÿßâù",
          "ßâÉßâáßâÉßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâÿßâù"
        ],
        "correctIndex": 2,
        "explanation": "Ego mediates between id and reality.",
        "explanationKa": "ßâößâÆßâ¥ ßâ¿ßâúßâÉßâ¢ßâÉßâòßâÜßâ¥ßâæßâí ßâÿßâôßâíßâÉ ßâôßâÉ ßâáßâößâÉßâÜßâ¥ßâæßâÉßâí ßâ¿ßâ¥ßâáßâÿßâí.",
        "optionsRu": [
          "╨ƒ╤Ç╨╕╨╜╤å╨╕╨┐ ╤â╨┤╨╛╨▓╨╛╨╗╤î╤ü╤é╨▓╨╕╤Å",
          "╨£╨╛╤Ç╨░╨╗╤î╨╜╤ï╨╣ ╨┐╤Ç╨╕╨╜╤å╨╕╨┐",
          "╨ƒ╤Ç╨╕╨╜╤å╨╕╨┐ ╤Ç╨╡╨░╨╗╤î╨╜╨╛╤ü╤é╨╕",
          "╨æ╨╡╤ü╤ü╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╤ï╨╣"
        ],
        "optionsHy": [
          "╒Ç╒í╒│╒╕╓é╒╡╓ä╒½ ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä",
          "╘▓╒í╓Ç╒╕╒╡╒í╒»╒í╒╢ ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä",
          "╘╗╓Ç╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä",
          "╘▒╒╢╒ú╒½╒┐╒í╒»╒½╓ü ╒╛╒½╒│╒í╒»╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Z├╢vq prinsipi",
          "M╔Ön╔Övi prinsip",
          "Reall─▒q prinsipi",
          "┼₧├╝ursuz"
        ],
        "questionRu": "╨¡╨│╨╛ ╨┤╨╡╨╣╤ü╤é╨▓╤â╨╡╤é ╨╜╨░:",
        "explanationRu": "╨¡╨│╨╛ ╤Å╨▓╨╗╤Å╨╡╤é╤ü╤Å ╨┐╨╛╤ü╤Ç╨╡╨┤╨╜╨╕╨║╨╛╨╝ ╨╝╨╡╨╢╨┤╤â ╨₧╨╜╨╛ ╨╕ ╤Ç╨╡╨░╨╗╤î╨╜╨╛╤ü╤é╤î╤Ä.",
        "questionHy": "╘╖╒ú╒╕╒╢ ╒ú╒╕╓Ç╒«╒╕╓é╒┤ ╒º.",
        "explanationHy": "╘╖╒ú╒╕╒╢ ╒┤╒½╒╗╒╢╒╕╓Ç╒ñ╒╕╓é╒┤ ╒º id-╒½ ╓ç ╒½╓Ç╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒½╒╗╓ç:",
        "explanationAz": "Eqo id v╔Ö reall─▒q aras─▒nda vasit╔Ö├ºilik edir.",
        "questionAz": "Eqo a┼ƒa─ƒ─▒dak─▒lar ├╝z╔Örind╔Ö i┼ƒl╔Öyir:"
      },
      {
        "id": "q11-9",
        "question": "Locus of control:",
        "questionKa": "ßâÖßâ¥ßâ£ßâóßâáßâ¥ßâÜßâÿßâí ßâÜßâ¥ßâÖßâúßâíßâÿ:",
        "options": [
          "Brain location",
          "Whether outcomes are internal or external",
          "Coordination",
          "Self-esteem"
        ],
        "optionsKa": [
          "ßâóßâòßâÿßâ£ßâÿßâí ßâ¢ßâôßâößâæßâÉßâáßâößâ¥ßâæßâÉ",
          "ßâ¿ßâößâôßâößâÆßâößâæßâÿ ßâ¿ßâÿßâ£ßâÉßâÆßâÉßâ£ßâÿßâÉ ßâùßâú ßâÆßâÉßâáßâößâÆßâÉßâ£ßâÿ",
          "ßâÖßâ¥ßâ¥ßâáßâôßâÿßâ£ßâÉßâ¬ßâÿßâÉ",
          "ßâùßâòßâÿßâùßâ¿ßâößâñßâÉßâíßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Internal vs external locus.",
        "explanationKa": "ßâ¿ßâÿßâ£ßâÉßâÆßâÉßâ£ßâÿ ßâ¼ßâÿßâ£ßâÉßâÉßâªßâ¢ßâôßâößâÆ ßâÆßâÉßâáßâößâÆßâÉßâ£ßâÿ ßâÜßâ¥ßâÖßâúßâíßâÿ.",
        "optionsRu": [
          "╨á╨░╤ü╨┐╨╛╨╗╨╛╨╢╨╡╨╜╨╕╨╡ ╨╝╨╛╨╖╨│╨░",
          "╨»╨▓╨╗╤Å╤Ä╤é╤ü╤Å ╨╗╨╕ ╤Ç╨╡╨╖╤â╨╗╤î╤é╨░╤é╤ï ╨▓╨╜╤â╤é╤Ç╨╡╨╜╨╜╨╕╨╝╨╕ ╨╕╨╗╨╕ ╨▓╨╜╨╡╤ê╨╜╨╕╨╝╨╕",
          "╨Ü╨╛╨╛╤Ç╨┤╨╕╨╜╨░╤å╨╕╤Å",
          "╨í╨░╨╝╨╛╨╛╤å╨╡╨╜╨║╨░"
        ],
        "optionsHy": [
          "╒ê╓é╒▓╒Ñ╒▓╒½ ╒ú╒┐╒╢╒╛╒Ñ╒¼╒╕╓é ╒╛╒í╒╡╓Ç╒¿",
          "╘▒╒╢╒»╒í╒¡ ╒╢╓Ç╒í╒╢╒½╓ü, ╒⌐╒Ñ ╒í╓Ç╒ñ╒╡╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒¿ ╒╢╒Ñ╓Ç╓ä╒½╒╢ ╒Ñ╒╢, ╒⌐╒Ñ ╒í╓Ç╒┐╒í╓ä╒½╒╢",
          "╒Ç╒í╒┤╒í╒»╒í╓Ç╒ú╒╕╓é╒┤",
          "╘╗╒╢╓ä╒╢╒í╒ú╒╢╒í╒░╒í╒┐╒í╒»╒í╒╢╒¿"
        ],
        "optionsAz": [
          "Beynin yeri",
          "N╔Ötic╔Öl╔Örin daxili v╔Ö ya xarici olmas─▒ndan as─▒l─▒ olmayaraq",
          "Koordinasiya",
          "├ûz├╝n╔Ö h├╢rm╔Öt"
        ],
        "questionRu": "╨¢╨╛╨║╤â╤ü ╨║╨╛╨╜╤é╤Ç╨╛╨╗╤Å:",
        "questionHy": "╒Ä╒Ñ╓Ç╒í╒░╒╜╒»╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒╛╒í╒╡╓Ç.",
        "questionAz": "N╔Özar╔Öt yeri:",
        "explanationRu": "╨Æ╨╜╤â╤é╤Ç╨╡╨╜╨╜╨╕╨╣ ╨╕ ╨▓╨╜╨╡╤ê╨╜╨╕╨╣ ╨╗╨╛╨║╤â╤ü.",
        "explanationHy": "╒å╒Ñ╓Ç╓ä╒½╒╢ ╒¿╒╢╒ñ╒ñ╒Ñ╒┤ ╒í╓Ç╒┐╒í╓ä╒½╒╢ ╒¼╒╕╒»╒╕╓é╒╜.",
        "explanationAz": "Daxili v╔Ö xarici lokus."
      },
      {
        "id": "q11-10",
        "question": "Adler proposed:",
        "questionKa": "ßâÉßâôßâÜßâößâáßâ¢ßâÉ ßâ¿ßâößâ¢ßâ¥ßâÆßâòßâùßâÉßâòßâÉßâûßâÉ:",
        "options": [
          "Collective unconscious",
          "Inferiority complex",
          "Self-actualization",
          "Operant conditioning"
        ],
        "optionsKa": [
          "ßâÖßâ¥ßâÜßâößâÑßâóßâÿßâúßâáßâÿ ßâÉßâáßâÉßâ¬ßâ£ßâ¥ßâæßâÿßâößâáßâÿ",
          "ßâÉßâáßâÉßâíßâáßâúßâÜßâñßâÉßâíßâ¥ßâòßâ£ßâößâæßâÿßâí ßâÖßâ¥ßâ¢ßâ₧ßâÜßâößâÑßâíßâÿ",
          "ßâùßâòßâÿßâùßâáßâößâÉßâÜßâÿßâûßâÉßâ¬ßâÿßâÉ",
          "ßâ¥ßâ₧ßâößâáßâÉßâ£ßâóßâúßâÜßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâ¥ßâ£ßâÿßâáßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Inferiority feelings motivate growth.",
        "explanationKa": "ßâÉßâáßâÉßâíßâáßâúßâÜßâñßâÉßâíßâ¥ßâòßâ£ßâößâæßâÿßâí ßâÆßâáßâ½ßâ£ßâ¥ßâæßâÉ ßâûßâáßâôßâÉßâí ßâÉßâªßâ½ßâáßâÉßâòßâí.",
        "optionsRu": [
          "╨Ü╨╛╨╗╨╗╨╡╨║╤é╨╕╨▓╨╜╨╛╨╡ ╨▒╨╡╤ü╤ü╨╛╨╖╨╜╨░╤é╨╡╨╗╤î╨╜╨╛╨╡",
          "╨Ü╨╛╨╝╨┐╨╗╨╡╨║╤ü ╨╜╨╡╨┐╨╛╨╗╨╜╨╛╤å╨╡╨╜╨╜╨╛╤ü╤é╨╕",
          "╨í╨░╨╝╨╛╤Ç╨╡╨░╨╗╨╕╨╖╨░╤å╨╕╤Å",
          "╨₧╨┐╨╡╤Ç╨░╨╜╤é╨╜╨╛╨╡ ╨╛╨▒╤â╤ü╨╗╨╛╨▓╨╗╨╕╨▓╨░╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╘┐╒╕╒¼╒Ñ╒»╒┐╒½╒╛ ╒í╒╢╒ú╒½╒┐╒í╒»╒½╓ü",
          "╘▒╒╢╒¼╒½╒í╓Ç╒¬╒Ñ╓ä╒╕╓é╒⌐╒╡╒í╒╢ ╒ó╒í╓Ç╒ñ╒╕╓é╒╡╒⌐",
          "╘╗╒╢╓ä╒╢╒í╒í╒»╒┐╒½╒╛╒í╓ü╒╕╓é╒┤",
          "╘│╒╕╓Ç╒«╒╕╒▓ ╒»╒╕╒╢╒ñ╒½╓ü╒½╒╕╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "Kollektiv ┼ƒ├╝ursuz",
          "A┼ƒa─ƒ─▒l─▒q kompleksi",
          "├ûz├╝n├╝ realla┼ƒd─▒rma",
          "Operativ kondisioner"
        ],
        "questionHy": "╘▒╒ñ╒¼╒Ñ╓Ç╒╢ ╒í╒╝╒í╒╗╒í╓Ç╒»╒Ñ╓ü.",
        "questionRu": "╨É╨┤╨╗╨╡╤Ç ╨┐╤Ç╨╡╨┤╨╗╨╛╨╢╨╕╨╗:",
        "explanationHy": "╘▒╒╢╒¼╒½╒í╓Ç╒¬╒Ñ╓ä╒╕╓é╒⌐╒╡╒í╒╢ ╒ª╒ú╒í╓ü╒╕╓é╒┤╒¿ ╒¡╒⌐╒í╒╢╒╕╓é╒┤ ╒º ╒í╒│╒¿:",
        "explanationRu": "╨º╤â╨▓╤ü╤é╨▓╨╛ ╨╜╨╡╨┐╨╛╨╗╨╜╨╛╤å╨╡╨╜╨╜╨╛╤ü╤é╨╕ ╨╝╨╛╤é╨╕╨▓╨╕╤Ç╤â╨╡╤é ╤Ç╨╛╤ü╤é.",
        "explanationAz": "A┼ƒa─ƒ─▒l─▒q hissl╔Öri b├╢y├╝m╔Öy╔Ö t╔Ökan verir.",
        "questionAz": "Adler t╔Öklif etdi:"
      }
    ],
    "titleHy": "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢ ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleRu": "╨¢╨╕╤ç╨╜╨╛╤ü╤é╤î ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleAz": "┼₧╔Öxsiyy╔Öt - Viktorina"
  },
  {
    "id": "ch12-quiz",
    "chapterId": 12,
    "title": "Social Psychology ΓÇö Quiz",
    "titleKa": "ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q12-1",
        "question": "Asch tested conformity with:",
        "questionKa": "ßâÉßâ¿ßâ¢ßâÉ ßâÖßâ¥ßâ£ßâñßâ¥ßâáßâ¢ßâÿßâûßâ¢ßâÿ ßâ¿ßâößâÉßâ¢ßâ¥ßâ¼ßâ¢ßâÉ:",
        "options": [
          "Colors",
          "Line lengths",
          "Sounds",
          "Weights"
        ],
        "optionsKa": [
          "ßâñßâößâáßâößâæßâÿßâù",
          "ßâ«ßâÉßâûßâößâæßâÿßâí ßâíßâÿßâÆßâáßâ½ßâößâößâæßâÿßâù",
          "ßâ«ßâ¢ßâößâæßâÿßâù",
          "ßâ¼ßâ¥ßâ£ßâößâæßâÿßâù"
        ],
        "correctIndex": 1,
        "explanation": "Participants conformed about line lengths.",
        "explanationKa": "ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâößâæßâÿ ßâ«ßâÉßâûßâößâæßâÿßâí ßâíßâÿßâÆßâáßâ½ßâößâößâæßâûßâö ßâößâùßâÉßâ£ßâ«ßâ¢ßâößâæßâ¥ßâôßâ£ßâößâ£.",
        "optionsRu": [
          "╨ª╨▓╨╡╤é╨░",
          "╨ö╨╗╨╕╨╜╤ï ╨╗╨╕╨╜╨╕╨╣",
          "╨ù╨▓╤â╨║╨╕",
          "╨Æ╨╡╤ü╨░"
        ],
        "optionsHy": [
          "╘│╒╕╓é╒╡╒╢╒Ñ╓Ç",
          "╘│╒«╒Ñ╓Ç╒½ ╒Ñ╓Ç╒»╒í╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿",
          "╒Ç╒╢╒╣╒╕╓é╒┤ ╒º",
          "╘┐╒╖╒½╒╝╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "R╔Öngl╔Ör",
          "X╔Ött uzunluqlar─▒",
          "S╔Ösl╔Ör",
          "├ç╔Ökil╔Ör"
        ],
        "questionHy": "Asch-╒½ ╓â╒╕╓Ç╒▒╒í╓Ç╒»╒╛╒í╒« ╒░╒í╒┤╒í╒║╒í╒┐╒í╒╜╒¡╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿╒¥",
        "explanationHy": "╒ä╒í╒╜╒╢╒í╒»╒½╓ü╒╢╒Ñ╓Ç╒¿ ╒░╒í╒┤╒í╒║╒í╒┐╒í╒╜╒¡╒í╒╢╒Ñ╓ü╒½╒╢ ╒┐╒╕╒▓╒Ñ╓Ç╒½ ╒Ñ╓Ç╒»╒í╓Ç╒╕╓é╒⌐╒╡╒í╒╢╒¿:",
        "explanationAz": "─░┼ƒtirak├º─▒lar x╔Öttin uzunlu─ƒuna uy─ƒun g╔Öldil╔Ör.",
        "questionAz": "Asch il╔Ö s─▒naqdan ke├ºirilmi┼ƒ uy─ƒunluq:",
        "explanationRu": "╨ú╤ç╨░╤ü╤é╨╜╨╕╨║╨╕ ╨┤╨╛╨│╨╛╨▓╨╛╤Ç╨╕╨╗╨╕╤ü╤î ╨╛ ╨┤╨╗╨╕╨╜╨╡ ╨╛╤ç╨╡╤Ç╨╡╨┤╨╡╨╣.",
        "questionRu": "╨Ü╨╛╨╝╨┐╨░╨╜╨╕╤Å Asch ╨┐╤Ç╨╛╨▓╨╡╤Ç╨╕╨╗╨░ ╤ü╨╛╨╛╤é╨▓╨╡╤é╤ü╤é╨▓╨╕╨╡:"
      },
      {
        "id": "q12-2",
        "question": "Milgram found:",
        "questionKa": "ßâ¢ßâÿßâÜßâÆßâáßâÉßâ¢ßâ¢ßâÉ ßâÉßâªßâ¢ßâ¥ßâÉßâ⌐ßâÿßâ£ßâÉ:",
        "options": [
          "Refused to shock",
          "Often obeyed authority",
          "Never followed orders",
          "Enjoyed it"
        ],
        "optionsKa": [
          "ßâúßâÉßâáßâí ßâÉßâ¢ßâæßâ¥ßâæßâôßâ£ßâößâ£ ßâ¿ßâ¥ßâÖßâûßâö",
          "ßâ«ßâ¿ßâÿßâáßâÉßâô ßâößâ¢ßâ¥ßâáßâ⌐ßâÿßâÜßâößâæßâ¥ßâôßâ£ßâößâ£ ßâÉßâòßâóßâ¥ßâáßâÿßâóßâößâóßâí",
          "ßâÉßâáßâÉßâíßâôßâáßâ¥ßâí ßâ¢ßâÿßâíßâôßâößâòßâôßâ£ßâößâ£ ßâæßâáßâ½ßâÉßâ£ßâößâæßâößâæßâí",
          "ßâíßâÿßâÉßâ¢ßâ¥ßâòßâ£ßâößâæßâÉßâí ßâÿßâªßâößâæßâôßâ£ßâößâ£"
        ],
        "correctIndex": 1,
        "explanation": "65% obeyed authority.",
        "explanationKa": "65% ßâößâ¢ßâ¥ßâáßâ⌐ßâÿßâÜßâößâæßâ¥ßâôßâÉ ßâÉßâòßâóßâ¥ßâáßâÿßâóßâößâóßâí.",
        "optionsRu": [
          "╨₧╤é╨║╨░╨╖╨░╨╗╤ü╤Å ╤ê╨╛╨║╨╕╤Ç╨╛╨▓╨░╤é╤î",
          "╨º╨░╤ü╤é╨╛ ╨┐╨╛╨┤╤ç╨╕╨╜╤Å╨╗╤ü╤Å ╨░╨▓╤é╨╛╤Ç╨╕╤é╨╡╤é╤â",
          "╨¥╨╕╨║╨╛╨│╨┤╨░ ╨╜╨╡ ╨▓╤ï╨┐╨╛╨╗╨╜╤Å╨╗ ╨┐╤Ç╨╕╨║╨░╨╖╤ï",
          "╨┐╨╛╨╜╤Ç╨░╨▓╨╕╨╗╨╛╤ü╤î"
        ],
        "optionsHy": [
          "╒Ç╓Ç╒í╒¬╒í╓Ç╒╛╒Ñ╒¼ ╒º ╓ü╒╢╓ü╒╕╓é╒┤╒╢╒Ñ╓Ç╒½╓ü",
          "╒Ç╒í╒│╒í╒¡ ╒Ñ╒╢╒⌐╒í╓Ç╒»╒╛╒╕╓é╒┤ ╒º╓Ç ╒½╒╖╒¡╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢╒¿",
          "╘╡╓Ç╒ó╒Ñ╓ä ╒╣╒░╒Ñ╒┐╓ç╒Ñ╓ü ╒░╓Ç╒í╒┤╒í╒╢╒╢╒Ñ╓Ç╒½╒╢",
          "╒Ç╒í╒│╒╕╓é╒╡╓ä ╒╜╒┐╒í╓ü╒í╒╛"
        ],
        "optionsAz": [
          "┼₧ok etm╔Ökd╔Ön imtina etdi",
          "Tez-tez hakimiyy╔Öt╔Ö tabe olur",
          "He├º vaxt ╔Ömrl╔Ör╔Ö ╔Öm╔Öl etm╔Ödi",
          "Z├╢vq ald─▒"
        ],
        "questionRu": "╨£╨╕╨╗╨│╤Ç╤ì╨╝ ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╕╨╗:",
        "explanationRu": "65% ╨┐╨╛╨┤╤ç╨╕╨╜╨╕╨╗╨╕╤ü╤î ╨▓╨╗╨░╤ü╤é╨╕.",
        "questionHy": "╒ä╒½╒¼╒ú╓Ç╒í╒┤╒¿ ╒ú╒┐╒Ñ╒¼ ╒º.",
        "explanationHy": "65%-╒¿ ╒Ñ╒╢╒⌐╒í╓Ç╒»╒╛╒Ñ╒¼ ╒º ╒½╒╖╒¡╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢╒¿╓ë",
        "explanationAz": "65% hakimiyy╔Öt╔Ö tabe olub.",
        "questionAz": "Milgram tap─▒ld─▒:"
      },
      {
        "id": "q12-3",
        "question": "Bystander effect:",
        "questionKa": "ßâùßâòßâÿßâùßâ¢ßâ«ßâÿßâÜßâòßâößâÜßâÿßâí ßâößâñßâößâÑßâóßâÿ:",
        "options": [
          "More bystanders help",
          "Less likely to help with others present",
          "Only men help",
          "Crowd size helps"
        ],
        "optionsKa": [
          "ßâ¢ßâößâóßâÿ ßâùßâòßâÿßâùßâ¢ßâ«ßâÿßâÜßâòßâößâÜßâÿ ßâößâ«ßâ¢ßâÉßâáßâößâæßâÉ",
          "ßâ£ßâÉßâÖßâÜßâößâæßâÉßâô ßâíßâÉßâòßâÉßâáßâÉßâúßâôßâ¥ßâÉ ßâôßâÉßâ«ßâ¢ßâÉßâáßâößâæßâÉ ßâíßâ«ßâòßâößâæßâÿßâí ßâùßâÉßâ£ßâôßâÉßâíßâ¼ßâáßâößâæßâÿßâù",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ¢ßâÉßâ¢ßâÉßâÖßâÉßâ¬ßâößâæßâÿ ßâößâ«ßâ¢ßâÉßâáßâößâæßâÿßâÉßâ£",
          "ßâæßâáßâæßâ¥ßâí ßâûßâ¥ßâ¢ßâÉ ßâ«ßâößâÜßâí ßâúßâ¼ßâºßâ¥ßâæßâí"
        ],
        "correctIndex": 1,
        "explanation": "Diffusion of responsibility.",
        "explanationKa": "ßâ₧ßâÉßâíßâúßâ«ßâÿßâíßâ¢ßâÆßâößâæßâÜßâ¥ßâæßâÿßâí ßâÆßâÉßâæßâ£ßâößâòßâÉ.",
        "optionsRu": [
          "╨æ╨╛╨╗╤î╤ê╨╡ ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╨╡╨╣ ╨┐╨╛╨╝╨╛╨│╨░╤Ä╤é",
          "╨£╨╡╨╜╨╡╨╡ ╨▓╨╡╤Ç╨╛╤Å╤é╨╜╨╛, ╤ç╤é╨╛ ╨┐╨╛╨╝╨╛╨╢╨╡╤é ╨▓ ╨┐╤Ç╨╕╤ü╤â╤é╤ü╤é╨▓╨╕╨╕ ╨┤╤Ç╤â╨│╨╕╤à",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨╝╤â╨╢╤ç╨╕╨╜╤ï ╨┐╨╛╨╝╨╛╨│╨░╤Ä╤é",
          "╨á╨░╨╖╨╝╨╡╤Ç ╤é╨╛╨╗╨┐╤ï ╨┐╨╛╨╝╨╛╨│╨░╨╡╤é"
        ],
        "optionsHy": [
          "╘▒╒╛╒Ñ╒¼╒½ ╒╖╒í╒┐ ╒í╒╢╓ü╒╕╓Ç╒ñ╒╢╒Ñ╓Ç ╒Ñ╒╢ ╓à╒ú╒╢╒╕╓é╒┤",
          "╘▒╒╛╒Ñ╒¼╒½ ╓ä╒½╒╣ ╒░╒í╒╛╒í╒╢╒í╒»╒í╒╢ ╒º ╓à╒ú╒╢╒Ñ╒¼ ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒½ ╒╢╒Ñ╓Ç╒»╒í╒╢╒Ñ╓Ç╒½╒╢",
          "╒ä╒½╒í╒╡╒╢ ╒┐╒▓╒í╒┤╒í╓Ç╒ñ╒½╒» ╒Ñ╒╢ ╓à╒ú╒╢╒╕╓é╒┤",
          "╘▒╒┤╒ó╒╕╒¡╒½ ╒╣╒í╓â╒╢ ╓à╒ú╒╢╒╕╓é╒┤ ╒º"
        ],
        "optionsAz": [
          "╞Åtrafdak─▒lar k├╢m╔Ök edir",
          "Haz─▒rk─▒ ba┼ƒqalar─▒na k├╢m╔Ök etm╔Ök ehtimal─▒ azd─▒r",
          "Yaln─▒z ki┼ƒil╔Ör k├╢m╔Ök edir",
          "K├╝tl╔Önin ├╢l├º├╝s├╝ k├╢m╔Ök edir"
        ],
        "explanationRu": "╨ö╨╕╤ä╤ä╤â╨╖╨╕╤Å ╨╛╤é╨▓╨╡╤é╤ü╤é╨▓╨╡╨╜╨╜╨╛╤ü╤é╨╕.",
        "explanationAz": "M╔Ösuliyy╔Ötin yay─▒lmas─▒.",
        "questionRu": "╨¡╤ä╤ä╨╡╨║╤é ╤ü╨▓╨╕╨┤╨╡╤é╨╡╨╗╤Å:",
        "questionAz": "Seyirci effekti:",
        "explanationHy": "╒è╒í╒┐╒í╒╜╒¡╒í╒╢╒í╒┐╒╛╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╒í╓Ç╒í╒«╒╕╓é╒┤.",
        "questionHy": "╘▒╒╢╓ü╒╕╓Ç╒ñ╒í╒╡╒½╒╢ ╒º╓å╒Ñ╒»╒┐."
      },
      {
        "id": "q12-4",
        "question": "Cognitive dissonance:",
        "questionKa": "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâáßâÿ ßâôßâÿßâíßâ¥ßâ£ßâÉßâ£ßâíßâÿ:",
        "options": [
          "Attitude-behavior agreement",
          "Discomfort from contradictions",
          "Memory error",
          "Personality disorder"
        ],
        "optionsKa": [
          "ßâôßâÉßâ¢ßâ¥ßâÖßâÿßâôßâößâæßâúßâÜßâößâæßâÉ-ßâÑßâ¬ßâößâòßâÿßâí ßâùßâÉßâ£ßâ«ßâ¢ßâ¥ßâæßâÉ",
          "ßâôßâÿßâíßâÖßâ¥ßâ¢ßâñßâ¥ßâáßâóßâÿ ßâ¼ßâÿßâ£ßâÉßâÉßâªßâ¢ßâôßâößâÆßâ¥ßâæßâößâæßâÿßâôßâÉßâ£",
          "ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâ¿ßâößâ¬ßâôßâ¥ßâ¢ßâÉ",
          "ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâúßâÜßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Discomfort when attitudes conflict with behavior.",
        "explanationKa": "ßâôßâÿßâíßâÖßâ¥ßâ¢ßâñßâ¥ßâáßâóßâÿ, ßâáßâ¥ßâ¬ßâÉ ßâôßâÉßâ¢ßâ¥ßâÖßâÿßâôßâößâæßâúßâÜßâößâæßâößâæßâÿ ßâÑßâ¬ßâößâòßâÉßâí ßâößâ¼ßâÿßâ£ßâÉßâÉßâªßâ¢ßâôßâößâÆßâößâæßâÉ.",
        "optionsRu": [
          "╨í╨╛╨│╨╗╨░╤ê╨╡╨╜╨╕╨╡ ╨╛╨▒ ╨╛╤é╨╜╨╛╤ê╨╡╨╜╨╕╨╕ ╨╕ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╕",
          "╨ö╨╕╤ü╨║╨╛╨╝╤ä╨╛╤Ç╤é ╨╛╤é ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╤Ç╨╡╤ç╨╕╨╣",
          "╨₧╤ê╨╕╨▒╨║╨░ ╨┐╨░╨╝╤Å╤é╨╕",
          "╨á╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨╛ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕"
        ],
        "optionsHy": [
          "╒Ä╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒┤╒╕╓é╒╢╓ä-╒╛╒í╓Ç╓ä╒í╒ú╒½╒« ╒░╒í╒┤╒í╒▒╒í╒╡╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘▒╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒░╒í╒»╒í╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½╓ü",
          "╒Ç╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒╜╒¡╒í╒¼",
          "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤"
        ],
        "optionsAz": [
          "M├╝nasib╔Öt-davran─▒┼ƒ raz─▒la┼ƒmas─▒",
          "Ziddiyy╔Ötl╔Örd╔Ön narahatl─▒q",
          "Yadda┼ƒ x╔Ötas─▒",
          "┼₧╔Öxsiyy╔Öt poz─ƒunlu─ƒu"
        ],
        "questionRu": "╨Ü╨╛╨│╨╜╨╕╤é╨╕╨▓╨╜╤ï╨╣ ╨┤╨╕╤ü╤ü╨╛╨╜╨░╨╜╤ü:",
        "explanationRu": "╨ö╨╕╤ü╨║╨╛╨╝╤ä╨╛╤Ç╤é, ╨║╨╛╨│╨┤╨░ ╨╛╤é╨╜╨╛╤ê╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╛╤é╨╕╨▓╨╛╤Ç╨╡╤ç╨╕╤é ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Ä.",
        "explanationHy": "╘▒╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒Ñ╓Ç╒ó ╒╛╒Ñ╓Ç╒í╒ó╒Ñ╓Ç╒┤╒╕╓é╒╢╓ä╒¿ ╒░╒í╒»╒í╒╜╒╕╓é╒┤ ╒º ╒╛╒í╓Ç╓ä╒í╒ú╒«╒½╒╢:",
        "explanationAz": "M├╝nasib╔Ötl╔Ör davran─▒┼ƒla zidd olduqda diskomfort.",
        "questionHy": "╒â╒í╒╢╒í╒╣╒╕╒▓╒í╒»╒í╒╢ ╒ñ╒½╒╜╒╕╒╢╒í╒╢╒╜.",
        "questionAz": "Koqnitiv dissonans:"
      },
      {
        "id": "q12-5",
        "question": "Fundamental attribution error:",
        "questionKa": "ßâñßâúßâ£ßâôßâÉßâ¢ßâößâ£ßâóßâúßâáßâÿ ßâÉßâóßâáßâÿßâæßâúßâ¬ßâÿßâÿßâí ßâ¿ßâößâ¬ßâôßâ¥ßâ¢ßâÉ:",
        "options": [
          "Overestimate situation",
          "Overestimate personality for others",
          "Equal weighing",
          "Self-blame"
        ],
        "optionsKa": [
          "ßâíßâÿßâóßâúßâÉßâ¬ßâÿßâÿßâí ßâÆßâÉßâôßâÉßâ¡ßâÉßâáßâæßâößâæßâúßâÜßâÿ ßâ¿ßâößâñßâÉßâíßâößâæßâÉ",
          "ßâíßâ«ßâòßâößâæßâÿßâí ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÿßâí ßâÆßâÉßâôßâÉßâ¡ßâÉßâáßâæßâößâæßâúßâÜßâÿ ßâ¿ßâößâñßâÉßâíßâößâæßâÉ",
          "ßâùßâÉßâ£ßâÉßâæßâÉßâáßâÿ ßâ¿ßâößâ¼ßâ¥ßâ£ßâòßâÉ",
          "ßâùßâòßâÿßâùßâôßâÉßâôßâÉßâ£ßâÉßâ¿ßâÉßâúßâÜßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "We overemphasize others' traits.",
        "explanationKa": "ßâíßâ«ßâòßâößâæßâÿßâí ßâùßâòßâÿßâíßâößâæßâößâæßâí ßâûßâößâôßâ¢ßâößâóßâÉßâô ßâ«ßâÉßâûßâí ßâòßâúßâíßâòßâÉßâ¢ßâù.",
        "optionsRu": [
          "╨ƒ╨╡╤Ç╨╡╨╛╤å╨╡╨╜╨╕╤é╤î ╤ü╨╕╤é╤â╨░╤å╨╕╤Ä",
          "╨ƒ╨╡╤Ç╨╡╨╛╤å╨╡╨╜╨╕╨▓╨░╤é╤î ╨╗╨╕╤ç╨╜╨╛╤ü╤é╤î ╨┤╨╗╤Å ╨┤╤Ç╤â╨│╨╕╤à",
          "╨á╨░╨▓╨╜╨╛╨╡ ╨▓╨╖╨▓╨╡╤ê╨╕╨▓╨░╨╜╨╕╨╡",
          "╨í╨░╨╝╨╛╨╛╨▒╨▓╨╕╨╜╨╡╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╘│╒Ñ╓Ç╒í╒ú╒╢╒í╒░╒í╒┐╒Ñ╒¼ ╒½╓Ç╒í╒╛╒½╒│╒í╒»╒¿",
          "╘│╒Ñ╓Ç╒í╒ú╒╢╒í╒░╒í╒┐╒Ñ╓ä ╒í╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç",
          "╒Ç╒í╒╛╒í╒╜╒í╓Ç ╒»╒╖╒╝╒╕╓é╒┤",
          "╘╗╒╢╓ä╒╢╒í╒┤╒Ñ╒▓╒í╒ñ╓Ç╒í╒╢╓ä"
        ],
        "optionsAz": [
          "V╔Öziyy╔Öti h╔Öddind╔Ön art─▒q qiym╔Ötl╔Öndirin",
          "┼₧╔Öxsiyy╔Öti ba┼ƒqalar─▒ ├╝├º├╝n ├ºox qiym╔Ötl╔Öndirin",
          "B╔Örab╔Ör ├º╔Öki",
          "├ûz├╝n├╝ g├╝nahland─▒rmaq"
        ],
        "explanationRu": "╨£╤ï ╨┐╨╡╤Ç╨╡╨╛╤å╨╡╨╜╨╕╨▓╨░╨╡╨╝ ╤ç╨╡╤Ç╤é╤ï ╨┤╤Ç╤â╨│╨╕╤à.",
        "questionRu": "╨ñ╤â╨╜╨┤╨░╨╝╨╡╨╜╤é╨░╨╗╤î╨╜╨░╤Å ╨╛╤ê╨╕╨▒╨║╨░ ╨░╤é╤Ç╨╕╨▒╤â╤å╨╕╨╕:",
        "explanationHy": "╒ä╒Ñ╒╢╓ä ╒╣╒í╓â╒í╒ª╒í╒╢╓ü ╒»╒í╓Ç╓ç╒╕╓Ç╒╕╓é╒┤ ╒Ñ╒╢╓ä ╒╕╓é╓Ç╒½╒╖╒╢╒Ñ╓Ç╒½ ╒░╒í╒┐╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿:",
        "questionHy": "╒Ç╒½╒┤╒╢╒í╒»╒í╒╢ ╒╛╒Ñ╓Ç╒í╒ú╓Ç╒┤╒í╒╢ ╒╜╒¡╒í╒¼.",
        "questionAz": "╞Åsas atribut x╔Ötas─▒:",
        "explanationAz": "Ba┼ƒqalar─▒n─▒n x├╝susiyy╔Ötl╔Örini h╔Öddind╔Ön art─▒q vur─ƒulay─▒r─▒q."
      },
      {
        "id": "q12-6",
        "question": "Stanford Prison Experiment by:",
        "questionKa": "ßâíßâóßâößâ£ßâñßâ¥ßâáßâôßâÿßâí ßâ¬ßâÿßâ«ßâÿßâí ßâößâÑßâíßâ₧ßâößâáßâÿßâ¢ßâößâ£ßâóßâÿ ßâ⌐ßâÉßâÉßâóßâÉßâáßâÉ:",
        "options": [
          "Milgram",
          "Asch",
          "Zimbardo",
          "Bandura"
        ],
        "optionsKa": [
          "ßâ¢ßâÿßâÜßâÆßâáßâÉßâ¢ßâ¢ßâÉ",
          "ßâÉßâ¿ßâ¢ßâÉ",
          "ßâûßâÿßâ¢ßâæßâÉßâáßâôßâ¥ßâ¢",
          "ßâæßâÉßâ£ßâôßâúßâáßâÉßâ¢"
        ],
        "correctIndex": 2,
        "explanation": "Philip Zimbardo conducted it.",
        "explanationKa": "ßâñßâÿßâÜßâÿßâ₧ ßâûßâÿßâ¢ßâæßâÉßâáßâôßâ¥ßâ¢ ßâ⌐ßâÉßâÉßâóßâÉßâáßâÉ.",
        "optionsRu": [
          "╨£╨╕╨╗╨│╤Ç╤ì╨╝",
          "╨É╤ê",
          "╨ù╨╕╨╝╨▒╨░╤Ç╨┤╨╛",
          "╨æ╨░╨╜╨┤╤â╤Ç╨░"
        ],
        "optionsHy": [
          "╒ä╒½╒¼╒ú╓Ç╒í╒┤",
          "╘▒╒╖╒¡",
          "╘╢╒½╒┤╒ó╒í╓Ç╒ñ╒╕╒╢",
          "╘▓╒í╒╢╒ñ╒╕╓é╓Ç╒í"
        ],
        "optionsAz": [
          "Milgram",
          "Asch",
          "Zimbardo",
          "Bandura"
        ],
        "explanationRu": "╨ò╨│╨╛ ╨┤╨╕╤Ç╨╕╨╢╨╕╤Ç╨╛╨▓╨░╨╗ ╨ñ╨╕╨╗╨╕╨┐ ╨ù╨╕╨╝╨▒╨░╤Ç╨┤╨╛.",
        "questionRu": "╨í╤é╤ì╨╜╤ä╨╛╤Ç╨┤╤ü╨║╨╕╨╣ ╤é╤Ä╤Ç╨╡╨╝╨╜╤ï╨╣ ╤ì╨║╤ü╨┐╨╡╤Ç╨╕╨╝╨╡╨╜╤é, ╨░╨▓╤é╨╛╤Ç:",
        "explanationHy": "╘▒╒╡╒╢ ╒╛╒í╓Ç╒Ñ╒¼ ╒º ╒û╒½╒¼╒½╒║ ╘╢╒½╒┤╒ó╒í╓Ç╒ñ╒╕╒╢╓ë",
        "questionHy": "╒ì╒┐╒Ñ╒╢╓å╒╕╓Ç╒ñ╒½ ╒ó╒í╒╢╒┐╒í╒╡╒½╒╢ ╓â╒╕╓Ç╒▒╒¥",
        "explanationAz": "Philip Zimbardo onu idar╔Ö etdi.",
        "questionAz": "Stanford H╔Öbsxana T╔Öcr├╝b╔Ösi:"
      },
      {
        "id": "q12-7",
        "question": "Groupthink leads to:",
        "questionKa": "ßâ»ßâÆßâúßâñßâúßâáßâÿ ßâÉßâûßâáßâ¥ßâòßâ£ßâößâæßâÉ ßâÿßâ¼ßâòßâößâòßâí:",
        "options": [
          "Better decisions",
          "Poor decisions from harmony desire",
          "Creativity",
          "Individuality"
        ],
        "optionsKa": [
          "ßâúßâÖßâößâùßâößâí ßâÆßâÉßâôßâÉßâ¼ßâºßâòßâößâóßâÿßâÜßâößâæßâößâæßâí",
          "ßâ¬ßâúßâô ßâÆßâÉßâôßâÉßâ¼ßâºßâòßâößâóßâÿßâÜßâößâæßâößâæßâí ßâ░ßâÉßâáßâ¢ßâ¥ßâ£ßâÿßâÿßâí ßâíßâúßâáßâòßâÿßâÜßâÿßâôßâÉßâ£",
          "ßâ¿ßâößâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâÉßâí",
          "ßâÿßâ£ßâôßâÿßâòßâÿßâôßâúßâÉßâÜßâ¥ßâæßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Consensus overrides realistic appraisal.",
        "explanationKa": "ßâÖßâ¥ßâ£ßâíßâößâ£ßâíßâúßâíßâÿ ßâÆßâÉßâôßâÉßâñßâÉßâáßâÉßâòßâí ßâáßâößâÉßâÜßâÿßâíßâóßâúßâá ßâ¿ßâößâñßâÉßâíßâößâæßâÉßâí.",
        "optionsRu": [
          "╨¢╤â╤ç╤ê╨╕╨╡ ╤Ç╨╡╤ê╨╡╨╜╨╕╤Å",
          "╨ƒ╨╗╨╛╤à╨╕╨╡ ╤Ç╨╡╤ê╨╡╨╜╨╕╤Å ╨╕╨╖-╨╖╨░ ╨╢╨╡╨╗╨░╨╜╨╕╤Å ╨│╨░╤Ç╨╝╨╛╨╜╨╕╨╕",
          "╨Ü╤Ç╨╡╨░╤é╨╕╨▓╨╜╨╛╤ü╤é╤î",
          "╨ÿ╨╜╨┤╨╕╨▓╨╕╨┤╤â╨░╨╗╤î╨╜╨╛╤ü╤é╤î"
        ],
        "optionsHy": [
          "╘▒╒╛╒Ñ╒¼╒½ ╒¼╒í╒╛ ╒╕╓Ç╒╕╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç",
          "╒Ä╒í╒┐ ╒╕╓Ç╒╕╒╖╒╕╓é╒┤╒╢╒Ñ╓Ç ╒╢╒Ñ╓Ç╒ñ╒í╒╖╒╢╒í╒»╒╕╓é╒⌐╒╡╒í╒╢ ╓ü╒í╒╢╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒½╓ü",
          "╒ì╒┐╒Ñ╒▓╒«╒í╒ú╒╕╓Ç╒«╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Daha yax┼ƒ─▒ q╔Örarlar",
          "Harmoniya arzusundan pis q╔Örarlar",
          "Yarad─▒c─▒l─▒q",
          "F╔Ördilik"
        ],
        "explanationRu": "╨Ü╨╛╨╜╤ü╨╡╨╜╤ü╤â╤ü ╨┐╤Ç╨╡╨╛╨▒╨╗╨░╨┤╨░╨╡╤é ╨╜╨░╨┤ ╤Ç╨╡╨░╨╗╨╕╤ü╤é╨╕╤ç╨╜╨╛╨╣ ╨╛╤å╨╡╨╜╨║╨╛╨╣.",
        "questionRu": "╨ô╤Ç╤â╨┐╨┐╨╛╨▓╨╛╨╡ ╨╝╤ï╤ê╨╗╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╕╨▓╨╛╨┤╨╕╤é ╨║:",
        "questionHy": "╘╜╒┤╒ó╒í╒╡╒½╒╢ ╒┤╒┐╒í╒«╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒░╒í╒╢╒ú╒Ñ╓ü╒╢╒╕╓é╒┤ ╒º.",
        "explanationHy": "╘┐╒╕╒╢╒╜╒Ñ╒╢╒╜╒╕╓é╒╜╒¿ ╒ú╒Ñ╓Ç╒í╒ú╒╢╒í╒░╒í╒┐╒╕╓é╒┤ ╒º ╒½╓Ç╒í╒┐╒Ñ╒╜╒í╒»╒í╒╢ ╒ú╒╢╒í╒░╒í╒┐╒╕╓é╒┤╒¿:",
        "questionAz": "Groupthink a┼ƒa─ƒ─▒dak─▒lara g╔Ötirib ├º─▒xar─▒r:",
        "explanationAz": "Konsensus real qiym╔Ötl╔Öndirm╔Öd╔Ön ├╝st├╝nd├╝r."
      },
      {
        "id": "q12-8",
        "question": "Mere exposure effect:",
        "questionKa": "ßâ¢ßâÉßâáßâóßâÿßâòßâÿ ßâûßâößâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâÿßâí ßâößâñßâößâÑßâóßâÿ:",
        "options": [
          "Dislike familiar things",
          "Repeated exposure increases liking",
          "First impressions only",
          "Advertising fails"
        ],
        "optionsKa": [
          "ßâ£ßâÉßâ¬ßâ£ßâ¥ßâæßâÿ ßâáßâÉßâ¢ßâÿßâí ßâÉßâáßâ¢ßâ¥ßâ¼ßâ¥ßâ£ßâößâæßâÉ",
          "ßâÆßâÉßâ£ßâ¢ßâößâ¥ßâáßâößâæßâÿßâùßâÿ ßâûßâößâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâÉ ßâûßâáßâôßâÿßâí ßâ¢ßâ¥ßâ¼ßâ¥ßâ£ßâößâæßâÉßâí",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ₧ßâÿßâáßâòßâößâÜßâÿ ßâ¿ßâùßâÉßâæßâößâ¡ßâôßâÿßâÜßâößâæßâÉ",
          "ßâáßâößâÖßâÜßâÉßâ¢ßâÉ ßâòßâößâá ßâ¢ßâúßâ¿ßâÉßâ¥ßâæßâí"
        ],
        "correctIndex": 1,
        "explanation": "Familiarity increases liking.",
        "explanationKa": "ßâ£ßâÉßâ¬ßâ£ßâ¥ßâæßâ¥ßâæßâÉ ßâûßâáßâôßâÿßâí ßâ¢ßâ¥ßâ¼ßâ¥ßâ£ßâößâæßâÉßâí.",
        "optionsRu": [
          "╨¥╨╡ ╨╜╤Ç╨░╨▓╨╕╤é╤ü╤Å ╨╖╨╜╨░╨║╨╛╨╝╤ï╨╡ ╨▓╨╡╤ë╨╕",
          "╨ƒ╨╛╨▓╤é╨╛╤Ç╨╜╨╛╨╡ ╨▓╨╛╨╖╨┤╨╡╨╣╤ü╤é╨▓╨╕╨╡ ╤â╨▓╨╡╨╗╨╕╤ç╨╕╨▓╨░╨╡╤é ╤ü╨╕╨╝╨┐╨░╤é╨╕╤Ä",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨┐╨╡╤Ç╨▓╤ï╨╡ ╨▓╨┐╨╡╤ç╨░╤é╨╗╨╡╨╜╨╕╤Å",
          "╨á╨╡╨║╨╗╨░╨╝╨░ ╤é╨╡╤Ç╨┐╨╕╤é ╨╜╨╡╤â╨┤╨░╤ç╤â"
        ],
        "optionsHy": [
          "╒ë╒╜╒½╓Ç╒Ñ╒¼ ╒«╒í╒╢╒╕╒⌐ ╒ó╒í╒╢╒Ñ╓Ç╒¿",
          "╘┐╓Ç╒»╒╢╒╛╒╕╒▓ ╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒╕╓é╒┤╒¿ ╒┤╒Ñ╒«╒í╓ü╒╢╒╕╓é╒┤ ╒º ╒░╒í╒╛╒í╒╢╒╕╓é╒┤╒¿",
          "╒ä╒½╒í╒╡╒╢ ╒í╒╝╒í╒╗╒½╒╢ ╒┐╒║╒í╒╛╒╕╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿",
          "╘│╒╕╒╛╒í╒ª╒ñ╒¿ ╒▒╒í╒¡╒╕╒▓╒╛╒╕╓é╒┤ ╒º"
        ],
        "optionsAz": [
          "Tan─▒┼ƒ ┼ƒeyl╔Öri b╔Öy╔Önm╔Öm╔Ök",
          "T╔Ökrar m╔Öruz qalma b╔Öy╔Önm╔Öyi art─▒r─▒r",
          "Yaln─▒z ilk t╔Ö╔Öss├╝rat",
          "Reklam u─ƒursuz olur"
        ],
        "questionHy": "╒è╒í╓Ç╒ª ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒º╓å╒Ñ╒»╒┐.",
        "questionRu": "╨¡╤ä╤ä╨╡╨║╤é ╨┐╤Ç╨╛╤ü╤é╨╛╨│╨╛ ╨▓╨╛╨╖╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å:",
        "explanationHy": "╘╛╒í╒╢╒╕╒⌐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒┤╒Ñ╒«╒í╓ü╒╢╒╕╓é╒┤ ╒º ╒░╒í╒┤╒í╒»╓Ç╒í╒╢╓ä╒¿╓ë",
        "explanationRu": "╨ù╨╜╨░╨║╨╛╨╝╤ü╤é╨▓╨╛ ╤â╨▓╨╡╨╗╨╕╤ç╨╕╨▓╨░╨╡╤é ╤ü╨╕╨╝╨┐╨░╤é╨╕╤Ä.",
        "questionAz": "Sad╔Öc╔Ö if┼ƒa effekti:",
        "explanationAz": "Tan─▒┼ƒl─▒q b╔Öy╔Önm╔Öyi art─▒r─▒r."
      },
      {
        "id": "q12-9",
        "question": "Social loafing:",
        "questionKa": "ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâíßâÿßâûßâÉßâáßâ¢ßâÉßâ¬ßâö:",
        "options": [
          "Working harder in groups",
          "Less effort in groups",
          "Leadership",
          "Role confusion"
        ],
        "optionsKa": [
          "ßâ»ßâÆßâúßâñßâößâæßâ¿ßâÿ ßâ¢ßâößâóßâÿ ßâ¢ßâúßâ¿ßâÉßâ¥ßâæßâÉ",
          "ßâ»ßâÆßâúßâñßâößâæßâ¿ßâÿ ßâ£ßâÉßâÖßâÜßâößâæßâÿ ßâ½ßâÉßâÜßâÿßâíßâ«ßâ¢ßâößâòßâÉ",
          "ßâÜßâÿßâôßâößâáßâ¥ßâæßâÉ",
          "ßâáßâ¥ßâÜßâÿßâí ßâÉßâªßâáßâößâòßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "People exert less effort in groups.",
        "explanationKa": "ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâÿ ßâ»ßâÆßâúßâñßâößâæßâ¿ßâÿ ßâ£ßâÉßâÖßâÜßâößâæ ßâ½ßâÉßâÜßâÿßâíßâ«ßâ¢ßâößâòßâÉßâí ßâÆßâÉßâíßâ¼ßâößâòßâößâ£.",
        "optionsRu": [
          "╨á╨░╨▒╨╛╤é╨░╤é╤î ╤â╤ü╨╡╤Ç╨┤╨╜╨╡╨╡ ╨▓ ╨│╤Ç╤â╨┐╨┐╨░╤à",
          "╨£╨╡╨╜╤î╤ê╨╡ ╤â╤ü╨╕╨╗╨╕╨╣ ╨▓ ╨│╤Ç╤â╨┐╨┐╨░╤à",
          "╨¢╨╕╨┤╨╡╤Ç╤ü╤é╨▓╨╛",
          "╨á╨╛╨╗╨╡╨▓╨░╤Å ╨┐╤â╤é╨░╨╜╨╕╤å╨░"
        ],
        "optionsHy": [
          "╘╜╒┤╒ó╒Ñ╓Ç╒╕╓é╒┤ ╒í╒╛╒Ñ╒¼╒½ ╒╖╒í╒┐ ╒í╒╖╒¡╒í╒┐╒Ñ╒¼",
          "╘▒╒╛╒Ñ╒¼╒½ ╓ä╒½╒╣ ╒╗╒í╒╢╓ä ╒¡╒┤╒ó╒Ñ╓Ç╒╕╓é╒┤",
          "╘▒╒╝╒í╒╗╒╢╒╕╓Ç╒ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘┤╒Ñ╓Ç╒Ñ╓Ç╒½ ╒╖╓â╒╕╒⌐╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Qruplarda daha ├ºox i┼ƒl╔Öm╔Ök",
          "Qruplarda daha az s╔Öy",
          "R╔Öhb╔Örlik",
          "Rol qar─▒┼ƒ─▒ql─▒─ƒ─▒"
        ],
        "questionRu": "╨í╨╛╤å╨╕╨░╨╗╤î╨╜╨╛╨╡ ╨▒╨╡╨╖╨┤╨╡╨╗╤î╨╡:",
        "questionHy": "╒ì╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒¼╒╕╓å╒½╒╢╒ú.",
        "explanationRu": "╨Æ ╨│╤Ç╤â╨┐╨┐╨░╤à ╨╗╤Ä╨┤╨╕ ╨┐╤Ç╨╕╨╗╨░╨│╨░╤Ä╤é ╨╝╨╡╨╜╤î╤ê╨╡ ╤â╤ü╨╕╨╗╨╕╨╣.",
        "explanationHy": "╒ä╒í╓Ç╒ñ╒½╒» ╒í╒╛╒Ñ╒¼╒½ ╓ä╒½╒╣ ╒╗╒í╒╢╓ä ╒Ñ╒╢ ╒ú╒╕╓Ç╒«╒í╒ñ╓Ç╒╕╓é╒┤ ╒¡╒┤╒ó╒Ñ╓Ç╒╕╓é╒┤:",
        "questionAz": "Sosial bo┼ƒluq:",
        "explanationAz": "─░nsanlar qruplarda daha az s╔Öy g├╢st╔Örirl╔Ör."
      },
      {
        "id": "q12-10",
        "question": "Deindividuation:",
        "questionKa": "ßâôßâößâÿßâ£ßâôßâÿßâòßâÿßâôßâúßâÉßâ¬ßâÿßâÉ:",
        "options": [
          "More self-aware",
          "Lose self-awareness in groups",
          "Groups become cautious",
          "Individuals lead"
        ],
        "optionsKa": [
          "ßâ¢ßâößâóßâÿ ßâùßâòßâÿßâùßâ¿ßâößâÆßâ£ßâößâæßâÉ",
          "ßâ»ßâÆßâúßâñßâ¿ßâÿ ßâùßâòßâÿßâùßâ¿ßâößâÆßâ£ßâößâæßâÿßâí ßâôßâÉßâÖßâÉßâáßâÆßâòßâÉ",
          "ßâ»ßâÆßâúßâñßâößâæßâÿ ßâ«ßâôßâößâæßâÉ ßâñßâáßâùßâ«ßâÿßâÜßâÿ",
          "ßâÿßâ£ßâôßâÿßâòßâÿßâôßâößâæßâÿ ßâ«ßâößâÜßâ¢ßâ½ßâªßâòßâÉßâ£ßâößâÜßâ¥ßâæßâößâ£"
        ],
        "correctIndex": 1,
        "explanation": "Loss of self-awareness in group situations.",
        "explanationKa": "ßâùßâòßâÿßâùßâ¿ßâößâÆßâ£ßâößâæßâÿßâí ßâôßâÉßâÖßâÉßâáßâÆßâòßâÉ ßâ»ßâÆßâúßâñßâúßâá ßâíßâÿßâóßâúßâÉßâ¬ßâÿßâößâæßâ¿ßâÿ.",
        "optionsRu": [
          "╨æ╨╛╨╗╤î╤ê╨╡ ╤ü╨░╨╝╨╛╤ü╨╛╨╖╨╜╨░╨╜╨╕╤Å",
          "╨ó╨╡╤Ç╤Å╤é╤î ╤ü╨░╨╝╨╛╤ü╨╛╨╖╨╜╨░╨╜╨╕╨╡ ╨▓ ╨│╤Ç╤â╨┐╨┐╨░╤à",
          "╨ô╤Ç╤â╨┐╨┐╤ï ╤ü╤é╨░╨╜╨╛╨▓╤Å╤é╤ü╤Å ╨╛╤ü╤é╨╛╤Ç╨╛╨╢╨╜╤ï╨╝╨╕",
          "╨ÿ╨╜╨┤╨╕╨▓╨╕╨┤╤â╤â╨╝╤ï ╨╗╨╕╨┤╨╕╤Ç╤â╤Ä╤é"
        ],
        "optionsHy": [
          "╘▒╒╛╒Ñ╒¼╒½ ╒½╒╢╓ä╒╢╒í╒ú╒½╒┐╒í╒»╓ü╒╛╒í╒«",
          "╘╜╒┤╒ó╒Ñ╓Ç╒╕╓é╒┤ ╒»╒╕╓Ç╓ü╒╢╒╕╓é╒┤ ╒Ñ╒╢ ╒½╒╢╓ä╒╢╒í╒ú╒½╒┐╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╘╜╒┤╒ó╒Ñ╓Ç╒¿ ╒ñ╒í╒╝╒╢╒╕╓é╒┤ ╒Ñ╒╢ ╒ª╒ú╒╕╓é╒╡╒╖",
          "╘▒╒╢╒░╒í╒┐╒╢╒Ñ╓Ç╒¿ ╒í╒╝╒í╒╗╒╢╒╕╓Ç╒ñ╒╕╓é╒┤ ╒Ñ╒╢"
        ],
        "optionsAz": [
          "├ûz├╝n├╝ daha ├ºox bil╔Ön",
          "Qruplarda ├╢z├╝n├╝d╔Örketm╔Ö qabiliyy╔Ötini itirm╔Ök",
          "Qruplar ehtiyatl─▒ olurlar",
          "F╔Ördl╔Ör r╔Öhb╔Örlik edir"
        ],
        "questionRu": "╨ö╨╡╨╕╨╜╨┤╨╕╨▓╨╕╨┤╤â╨░╨╗╨╕╨╖╨░╤å╨╕╤Å:",
        "explanationRu": "╨ƒ╨╛╤é╨╡╤Ç╤Å ╤ü╨░╨╝╨╛╤ü╨╛╨╖╨╜╨░╨╜╨╕╤Å ╨▓ ╨│╤Ç╤â╨┐╨┐╨╛╨▓╤ï╤à ╤ü╨╕╤é╤â╨░╤å╨╕╤Å╤à.",
        "questionHy": "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒í╓ü╒╕╓é╒┤.",
        "explanationHy": "╘╜╒┤╒ó╒í╒╡╒½╒╢ ╒½╓Ç╒í╒╛╒½╒│╒í╒»╒╢╒Ñ╓Ç╒╕╓é╒┤ ╒½╒╢╓ä╒╢╒í╒ú╒½╒┐╒í╒»╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒»╒╕╓Ç╒╕╓é╒╜╒┐.",
        "questionAz": "F╔Ördil╔Ö┼ƒm╔Ö:",
        "explanationAz": "Qrup v╔Öziyy╔Ötl╔Örind╔Ö ├╢z├╝n├╝d╔Örketm╔Ö itkisi."
      }
    ],
    "titleHy": "╒ì╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢ ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleAz": "Sosial Psixologiya - Viktorina",
    "titleRu": "╨í╨╛╤å╨╕╨░╨╗╤î╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░"
  },
  {
    "id": "ch13-quiz",
    "chapterId": 13,
    "title": "Stress and Coping ΓÇö Quiz",
    "titleKa": "ßâíßâóßâáßâößâíßâÿ ßâôßâÉ ßâÆßâÉßâ¢ßâÖßâÜßâÉßâòßâößâæßâÉ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q13-1",
        "question": "GAS stages:",
        "questionKa": "ßâûßâ¥ßâÆßâÉßâôßâÿ ßâÉßâôßâÉßâ₧ßâóßâÉßâ¬ßâÿßâÿßâí ßâíßâÿßâ£ßâôßâáßâ¥ßâ¢ßâÿßâí ßâíßâóßâÉßâôßâÿßâößâæßâÿ:",
        "options": [
          "Start, middle, end",
          "Alarm, resistance, exhaustion",
          "Stress, cope, recover",
          "Fight, flight, freeze"
        ],
        "optionsKa": [
          "ßâôßâÉßâíßâÉßâ¼ßâºßâÿßâíßâÿ, ßâ¿ßâúßâÉ, ßâôßâÉßâíßâÉßâíßâáßâúßâÜßâÿ",
          "ßâÆßâÉßâ£ßâÆßâÉßâ¿ßâÿ, ßâ¼ßâÿßâ£ßâÉßâÉßâªßâ¢ßâôßâößâÆßâ¥ßâæßâÉ, ßâÆßâÉßâ¢ßâ¥ßâñßâÿßâóßâòßâÉ",
          "ßâíßâóßâáßâößâíßâÿ, ßâÆßâÉßâ¢ßâÖßâÜßâÉßâòßâößâæßâÉ, ßâÉßâªßâôßâÆßâößâ£ßâÉ",
          "ßâæßâáßâ½ßâ¥ßâÜßâÉ, ßâÆßâÉßâÑßâ¬ßâößâòßâÉ, ßâÆßâÉßâºßâÿßâ£ßâòßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Alarm, resistance, exhaustion.",
        "explanationKa": "ßâÆßâÉßâ£ßâÆßâÉßâ¿ßâÿ, ßâ¼ßâÿßâ£ßâÉßâÉßâªßâ¢ßâôßâößâÆßâ¥ßâæßâÉ, ßâÆßâÉßâ¢ßâ¥ßâñßâÿßâóßâòßâÉ.",
        "optionsRu": [
          "╨¥╨░╤ç╨░╨╗╨╛, ╤ü╨╡╤Ç╨╡╨┤╨╕╨╜╨░, ╨║╨╛╨╜╨╡╤å",
          "╨ó╤Ç╨╡╨▓╨╛╨│╨░, ╤ü╨╛╨┐╤Ç╨╛╤é╨╕╨▓╨╗╨╡╨╜╨╕╨╡, ╨╕╤ü╤é╨╛╤ë╨╡╨╜╨╕╨╡",
          "╨í╤é╤Ç╨╡╤ü╤ü, ╤ü╨┐╤Ç╨░╨▓╨╕╤é╤î╤ü╤Å, ╨▓╨╛╤ü╤ü╤é╨░╨╜╨╛╨▓╨╕╤é╤î╤ü╤Å",
          "╨í╤Ç╨░╨╢╨░╨╣╤ü╤Å, ╨▒╨╡╨│╨╕, ╨╖╨░╨╝╤Ç╨╕"
        ],
        "optionsHy": [
          "╒ì╒»╒½╒ª╒ó, ╒┤╒½╒╗╒½╒╢, ╒╛╒Ñ╓Ç╒╗",
          "╒Å╒í╒ú╒╢╒í╒║, ╒ñ╒½╒┤╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒░╒╡╒╕╓é╒«╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ì╒⌐╓Ç╒Ñ╒╜, ╒░╒í╒▓╒⌐╒í╒░╒í╓Ç╒Ñ╒¼, ╒╛╒Ñ╓Ç╒í╒»╒í╒╢╒ú╒╢╒╛╒Ñ╒¼",
          "╘┐╒╝╒╛╒Ñ╒¼, ╓â╒í╒¡╒╣╒Ñ╒¼, ╒╜╒í╒╝╒╣╒Ñ╒¼"
        ],
        "optionsAz": [
          "Ba┼ƒlan─ƒ─▒c, orta, son",
          "H╔Öy╔Öcan, m├╝qavim╔Öt, t├╝k╔Önm╔Ö",
          "Stress, ├╢hd╔Ösind╔Ön g╔Ölm╔Ök, b╔Örpa etm╔Ök",
          "D├╢y├╝┼ƒ, u├ºu┼ƒ, don"
        ],
        "questionHy": "╘│╘▒╘╢ ╓â╒╕╓é╒¼╒Ñ╓Ç.",
        "explanationRu": "╨ó╤Ç╨╡╨▓╨╛╨│╨░, ╤ü╨╛╨┐╤Ç╨╛╤é╨╕╨▓╨╗╨╡╨╜╨╕╨╡, ╨╕╤ü╤é╨╛╤ë╨╡╨╜╨╕╨╡.",
        "questionRu": "╨¡╤é╨░╨┐╤ï ╨ô╨É╨ù:",
        "explanationHy": "╒Å╒í╒ú╒╢╒í╒║, ╒ñ╒½╒┤╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢, ╒░╒╡╒╕╓é╒«╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢.",
        "questionAz": "QAZ m╔Örh╔Öl╔Öl╔Öri:",
        "explanationAz": "H╔Öy╔Öcan, m├╝qavim╔Öt, t├╝k╔Önm╔Ö."
      },
      {
        "id": "q13-2",
        "question": "Type A personality:",
        "questionKa": "A ßâóßâÿßâ₧ßâÿßâí ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÉ:",
        "options": [
          "Relaxed",
          "Competitive, urgent, hostile",
          "Introverted",
          "Low motivation"
        ],
        "optionsKa": [
          "ßâ¢ßâ¥ßâôßâúßâ£ßâößâæßâúßâÜßâÿ",
          "ßâÖßâ¥ßâ£ßâÖßâúßâáßâößâ£ßâóßâúßâ£ßâÉßâáßâÿßâÉßâ£ßâÿ, ßâíßâÉßâíßâ¼ßâáßâÉßâñßâ¥, ßâ¢ßâóßâáßâúßâÜßâÿ",
          "ßâÿßâ£ßâóßâáßâ¥ßâòßâößâáßâóßâúßâÜßâÿ",
          "ßâôßâÉßâæßâÉßâÜßâÿ ßâ¢ßâ¥ßâóßâÿßâòßâÉßâ¬ßâÿßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Type A: competitive and time-pressured.",
        "explanationKa": "A ßâóßâÿßâ₧ßâÿ: ßâÖßâ¥ßâ£ßâÖßâúßâáßâößâ£ßâóßâúßâ£ßâÉßâáßâÿßâÉßâ£ßâÿ ßâôßâÉ ßâôßâáßâ¥ßâÿßâù ßâ¿ßâößâûßâªßâúßâôßâúßâÜßâÿ.",
        "optionsRu": [
          "╨á╨░╤ü╤ü╨╗╨░╨▒╨╗╨╡╨╜╨╜╤ï╨╣",
          "╨Ü╨╛╨╜╨║╤â╤Ç╨╡╨╜╤é╨╜╤ï╨╣, ╤ü╤Ç╨╛╤ç╨╜╤ï╨╣, ╨▓╤Ç╨░╨╢╨┤╨╡╨▒╨╜╤ï╨╣",
          "╨ÿ╨╜╤é╤Ç╨╛╨▓╨╡╤Ç╤é",
          "╨¥╨╕╨╖╨║╨░╤Å ╨╝╨╛╤é╨╕╨▓╨░╤å╨╕╤Å"
        ],
        "optionsHy": [
          "╒Ç╒í╒╢╒ú╒½╒╜╒┐",
          "╒ä╓Ç╓ü╒í╒»╓ü╒í╒╡╒½╒╢, ╒░╓Ç╒í╒┐╒í╒║, ╒⌐╒╖╒╢╒í╒┤╒í╒»╒í╒╢",
          "╘╗╒╢╒┐╓Ç╒╕╒╛╒Ñ╓Ç╒┐",
          "╒æ╒í╒«╓Ç ╒┤╒╕╒┐╒½╒╛╒í╓ü╒½╒í"
        ],
        "optionsAz": [
          "rahat",
          "R╔Öqab╔Ötli, t╔Öcili, d├╝┼ƒm╔Ön",
          "Introvert",
          "A┼ƒa─ƒ─▒ motivasiya"
        ],
        "questionHy": "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╒Ñ╒╜╒í╒» A.",
        "questionRu": "╨ó╨╕╨┐ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕ ╨É:",
        "questionAz": "A tipi ┼ƒ╔Öxsiyy╔Öt:",
        "explanationHy": "╒Å╒½╒║ A╒¥ ╒┤╓Ç╓ü╒í╒»╓ü╒í╒╡╒½╒╢ ╓ç ╒¬╒í╒┤╒í╒╢╒í╒»╒½ ╒│╒╢╒╖╒┤╒í╒╢ ╒┐╒í╒»:",
        "explanationRu": "╨ó╨╕╨┐ ╨É: ╨║╨╛╨╜╨║╤â╤Ç╨╡╨╜╤é╨╜╤ï╨╣ ╨╕ ╨╛╨│╤Ç╨░╨╜╨╕╤ç╨╡╨╜╨╜╤ï╨╣ ╨▓╨╛ ╨▓╤Ç╨╡╨╝╨╡╨╜╨╕.",
        "explanationAz": "A n├╢v├╝: r╔Öqab╔Ötli v╔Ö vaxt t╔Özyiqi."
      },
      {
        "id": "q13-3",
        "question": "Problem-focused coping:",
        "questionKa": "ßâ₧ßâáßâ¥ßâæßâÜßâößâ¢ßâÉßâûßâö ßâ¥ßâáßâÿßâößâ£ßâóßâÿßâáßâößâæßâúßâÜßâÿ ßâÆßâÉßâ¢ßâÖßâÜßâÉßâòßâößâæßâÉ:",
        "options": [
          "Managing emotions",
          "Addressing the stressor directly",
          "Avoiding",
          "Denial"
        ],
        "optionsKa": [
          "ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿßâí ßâ¢ßâÉßâáßâùßâòßâÉ",
          "ßâíßâóßâáßâößâíßâ¥ßâáßâùßâÉßâ£ ßâ₧ßâÿßâáßâôßâÉßâ₧ßâÿßâáßâÿ ßâ¢ßâúßâ¿ßâÉßâ¥ßâæßâÉ",
          "ßâùßâÉßâòßâÿßâí ßâÉßâáßâÿßâôßâößâæßâÉ",
          "ßâúßâÉßâáßâºßâ¥ßâñßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Directly tackling the problem.",
        "explanationKa": "ßâ₧ßâáßâ¥ßâæßâÜßâößâ¢ßâÿßâí ßâ₧ßâÿßâáßâôßâÉßâ₧ßâÿßâá ßâ¢ßâ¥ßâÆßâòßâÉßâáßâößâæßâÉ.",
        "optionsRu": [
          "╨ú╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╤ì╨╝╨╛╤å╨╕╤Å╨╝╨╕",
          "╨¥╨╡╨┐╨╛╤ü╤Ç╨╡╨┤╤ü╤é╨▓╨╡╨╜╨╜╨╛╨╡ ╨▓╨╛╨╖╨┤╨╡╨╣╤ü╤é╨▓╨╕╨╡ ╨╜╨░ ╤ü╤é╤Ç╨╡╤ü╤ü╨╛╤Ç",
          "╨ÿ╨╖╨▒╨╡╨│╨░╨╜╨╕╨╡",
          "╨₧╤é╤Ç╨╕╤å╨░╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒»╒í╒╝╒í╒╛╒í╓Ç╒╕╓é╒┤",
          "╘▒╒╢╒┤╒½╒╗╒í╒»╒í╒╢╒╕╓Ç╒Ñ╒╢ ╒ñ╒½╒┤╒Ñ╒¼ ╒╜╒⌐╓Ç╒Ñ╒╜╒╕╓Ç╒½╒╢",
          "╘╜╒╕╓é╒╜╒í╓â╒Ñ╒¼╒╕╒╛",
          "╘║╒¡╒┐╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Duy─ƒular─▒ idar╔Ö etm╔Ök",
          "Stressorun birba┼ƒa h╔Ölli",
          "Qa├ºmaq",
          "─░nkar"
        ],
        "questionHy": "╘╜╒╢╒ñ╓Ç╒½ ╒╛╓Ç╒í ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒í╒« ╒░╒í╒▓╒⌐╒í╒░╒í╓Ç╒╕╓é╒┤.",
        "explanationRu": "╨¥╨╡╨┐╨╛╤ü╤Ç╨╡╨┤╤ü╤é╨▓╨╡╨╜╨╜╨╛╨╡ ╤Ç╨╡╤ê╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝╤ï.",
        "questionRu": "╨ƒ╤Ç╨╛╨▒╨╗╨╡╨╝╨╜╨╛-╨╛╤Ç╨╕╨╡╨╜╤é╨╕╤Ç╨╛╨▓╨░╨╜╨╜╨╛╨╡ ╨┐╤Ç╨╡╨╛╨┤╨╛╨╗╨╡╨╜╨╕╨╡:",
        "questionAz": "Problem m╔Örk╔Özli m├╝bariz╔Ö:",
        "explanationHy": "╒ê╓é╒▓╒▓╒í╒»╒½╒╕╓Ç╒Ñ╒╢ ╒¼╒╕╓é╒«╒Ñ╒¼ ╒¡╒╢╒ñ╒½╓Ç╒¿.",
        "explanationAz": "Problemin birba┼ƒa h╔Ölli."
      },
      {
        "id": "q13-4",
        "question": "Immune system weakened by:",
        "questionKa": "ßâÿßâ¢ßâúßâ£ßâúßâáßâÿ ßâíßâÿßâíßâóßâößâ¢ßâÉ ßâíßâúßâíßâóßâôßâößâæßâÉ:",
        "options": [
          "Exercise",
          "Chronic stress",
          "Good nutrition",
          "Sleep"
        ],
        "optionsKa": [
          "ßâòßâÉßâáßâ»ßâÿßâ¿ßâÿßâù",
          "ßâÑßâáßâ¥ßâ£ßâÿßâÖßâúßâÜßâÿ ßâíßâóßâáßâößâíßâÿßâù",
          "ßâÖßâÉßâáßâÆßâÿ ßâÖßâòßâößâæßâÿßâù",
          "ßâ½ßâÿßâÜßâÿßâù"
        ],
        "correctIndex": 1,
        "explanation": "Chronic stress suppresses immunity.",
        "explanationKa": "ßâÑßâáßâ¥ßâ£ßâÿßâÖßâúßâÜßâÿ ßâíßâóßâáßâößâíßâÿ ßâùßâáßâÆßâúßâ£ßâÉßâòßâí ßâÿßâ¢ßâúßâ£ßâÿßâóßâößâóßâí.",
        "optionsRu": [
          "╨ú╨┐╤Ç╨░╨╢╨╜╨╡╨╜╨╕╨╡",
          "╨Ñ╤Ç╨╛╨╜╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╤ü╤é╤Ç╨╡╤ü╤ü",
          "╨Ñ╨╛╤Ç╨╛╤ê╨╡╨╡ ╨┐╨╕╤é╨░╨╜╨╕╨╡",
          "╨í╨┐╨░╤é╤î"
        ],
        "optionsHy": [
          "╘╢╒╕╓Ç╒í╒╛╒í╓Ç╒¬╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
          "╒ö╓Ç╒╕╒╢╒½╒» ╒╜╒⌐╓Ç╒Ñ╒╜",
          "╘╝╒í╒╛ ╒╜╒╢╒╕╓é╓ü╒╕╓é╒┤",
          "╒ö╒╢╒Ñ╒¼"
        ],
        "optionsAz": [
          "M╔Ö┼ƒq edin",
          "Xroniki stress",
          "Yax┼ƒ─▒ qidalanma",
          "yatmaq"
        ],
        "explanationRu": "╨Ñ╤Ç╨╛╨╜╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╤ü╤é╤Ç╨╡╤ü╤ü ╨┐╨╛╨┤╨░╨▓╨╗╤Å╨╡╤é ╨╕╨╝╨╝╤â╨╜╨╕╤é╨╡╤é.",
        "questionRu": "╨ÿ╨╝╨╝╤â╨╜╨╜╨░╤Å ╤ü╨╕╤ü╤é╨╡╨╝╨░ ╨╛╤ü╨╗╨░╨▒╨╗╨╡╨╜╨░:",
        "questionHy": "╘╗╒┤╒╕╓é╒╢╒í╒╡╒½╒╢ ╒░╒í╒┤╒í╒»╒í╓Ç╒ú╒¿ ╒⌐╒╕╓é╒¼╒í╓ü╒Ñ╒¼ ╒º.",
        "explanationHy": "╒ö╓Ç╒╕╒╢╒½╒» ╒╜╒⌐╓Ç╒Ñ╒╜╒¿ ╒│╒╢╒╖╒╕╓é╒┤ ╒º ╒½╒┤╒╕╓é╒╢╒½╒┐╒Ñ╒┐╒¿╓ë",
        "questionAz": "─░mmunitet sistemi z╔Öifl╔Öyir:",
        "explanationAz": "Xroniki stress immuniteti z╔Öifl╔Ödir."
      },
      {
        "id": "q13-5",
        "question": "Burnout features:",
        "questionKa": "ßâÆßâÉßâôßâÉßâ¼ßâòßâÿßâí ßâ¢ßâÉßâ«ßâÉßâíßâÿßâÉßâùßâößâæßâÜßâößâæßâÿ:",
        "options": [
          "High energy",
          "Exhaustion and depersonalization",
          "Physical injury",
          "Productivity"
        ],
        "optionsKa": [
          "ßâ¢ßâÉßâªßâÉßâÜßâÿ ßâößâ£ßâößâáßâÆßâÿßâÉ",
          "ßâÆßâÉßâ¢ßâ¥ßâñßâÿßâóßâòßâÉ ßâôßâÉ ßâôßâößâ₧ßâößâáßâíßâ¥ßâ£ßâÉßâÜßâÿßâûßâÉßâ¬ßâÿßâÉ",
          "ßâñßâÿßâûßâÿßâÖßâúßâáßâÿ ßâóßâáßâÉßâòßâ¢ßâÉ",
          "ßâ₧ßâáßâ¥ßâôßâúßâÑßâóßâÿßâúßâÜßâ¥ßâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Emotional exhaustion and cynicism.",
        "explanationKa": "ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâÆßâÉßâ¢ßâ¥ßâñßâÿßâóßâòßâÉ ßâôßâÉ ßâ¬ßâÿßâ£ßâÿßâûßâ¢ßâÿ.",
        "optionsRu": [
          "╨Æ╤ï╤ü╨╛╨║╨░╤Å ╤ì╨╜╨╡╤Ç╨│╨╕╤Å",
          "╨ÿ╤ü╤é╨╛╤ë╨╡╨╜╨╕╨╡ ╨╕ ╨┤╨╡╨┐╨╡╤Ç╤ü╨╛╨╜╨░╨╗╨╕╨╖╨░╤å╨╕╤Å",
          "╨ñ╨╕╨╖╨╕╤ç╨╡╤ü╨║╨░╤Å ╤é╤Ç╨░╨▓╨╝╨░",
          "╨ƒ╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╤î"
        ],
        "optionsHy": [
          "╘▓╒í╓Ç╒▒╓Ç ╒º╒╢╒Ñ╓Ç╒ú╒½╒í",
          "╒Ç╒╕╒ú╒╢╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓ç ╒í╒╢╒▒╒╢╒í╒╛╒╕╓Ç╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒û╒½╒ª╒½╒»╒í╒»╒í╒╢ ╒╛╒╢╒í╒╜╒╛╒í╒«╓ä",
          "╘▒╓Ç╒┐╒í╒ñ╓Ç╒╕╒▓╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Y├╝ks╔Ök enerji",
          "T├╝k╔Önm╔Ö v╔Ö depersonalla┼ƒma",
          "Fiziki z╔Öd╔Ö",
          "M╔Öhsuldarl─▒q"
        ],
        "explanationRu": "╨¡╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛╨╡ ╨╕╤ü╤é╨╛╤ë╨╡╨╜╨╕╨╡ ╨╕ ╤å╨╕╨╜╨╕╨╖╨╝.",
        "questionRu": "╨₧╤ü╨╛╨▒╨╡╨╜╨╜╨╛╤ü╤é╨╕ ╨▓╤ï╨│╨╛╤Ç╨░╨╜╨╕╤Å:",
        "explanationHy": "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒í╒╡╒½╒╢ ╒░╒╡╒╕╓é╒«╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓ç ╓ü╒½╒╢╒½╒ª╒┤.",
        "questionAz": "T├╝k╔Önm╔Ö x├╝susiyy╔Ötl╔Öri:",
        "explanationAz": "Emosional t├╝k╔Önm╔Ö v╔Ö sinizm.",
        "questionHy": "╘▒╒╡╓Ç╒┤╒í╒╢ ╒í╒╝╒í╒╢╒▒╒╢╒í╒░╒í╒┐╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿."
      },
      {
        "id": "q13-6",
        "question": "Social support helps by:",
        "questionKa": "ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâ¢ßâ«ßâÉßâáßâôßâÉßâ¡ßâößâáßâÉ ßâößâ«ßâ¢ßâÉßâáßâößâæßâÉ:",
        "options": [
          "Eliminating stress",
          "Providing emotional and practical help",
          "Replacing medicine",
          "Raising blood pressure"
        ],
        "optionsKa": [
          "ßâíßâóßâáßâößâíßâÿßâí ßâÉßâªßâ¢ßâ¥ßâñßâ«ßâòßâáßâÿßâù",
          "ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâôßâÉ ßâ₧ßâáßâÉßâÑßâóßâÿßâÖßâúßâÜßâÿ ßâôßâÉßâ«ßâ¢ßâÉßâáßâößâæßâÿßâù",
          "ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâößâæßâÿßâí ßâ⌐ßâÉßâ£ßâÉßâ¬ßâòßâÜßâößâæßâÿßâù",
          "ßâÉßâáßâóßâößâáßâÿßâúßâÜßâÿ ßâ¼ßâ£ßâößâòßâÿßâí ßâÉßâ¢ßâÉßâªßâÜßâößâæßâÿßâù"
        ],
        "correctIndex": 1,
        "explanation": "Providing emotional comfort and practical help.",
        "explanationKa": "ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâÖßâ¥ßâ¢ßâñßâ¥ßâáßâóßâÿßâíßâÉ ßâôßâÉ ßâ₧ßâáßâÉßâÑßâóßâÿßâÖßâúßâÜßâÿ ßâôßâÉßâ«ßâ¢ßâÉßâáßâößâæßâÿßâí ßâ¢ßâÿßâ¼ßâ¥ßâôßâößâæßâÉ.",
        "optionsRu": [
          "╨ú╤ü╤é╤Ç╨░╨╜╨╡╨╜╨╕╨╡ ╤ü╤é╤Ç╨╡╤ü╤ü╨░",
          "╨₧╨║╨░╨╖╨░╨╜╨╕╨╡ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛╨╣ ╨╕ ╨┐╤Ç╨░╨║╤é╨╕╤ç╨╡╤ü╨║╨╛╨╣ ╨┐╨╛╨╝╨╛╤ë╨╕",
          "╨ù╨░╨╝╨╡╨╜╨░ ╨╗╨╡╨║╨░╤Ç╤ü╤é╨▓╨░",
          "╨ƒ╨╛╨▓╤ï╤ê╨╡╨╜╨╕╨╡ ╨║╤Ç╨╛╨▓╤Å╨╜╨╛╨│╨╛ ╨┤╨░╨▓╨╗╨╡╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╒ì╒⌐╓Ç╒Ñ╒╜╒½ ╒╛╒Ñ╓Ç╒í╓ü╒╕╓é╒┤",
          "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒í╒╡╒½╒╢ ╓ç ╒ú╒╕╓Ç╒«╒╢╒í╒»╒í╒╢ ╓à╒ú╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╓Ç╒í╒┤╒í╒ñ╓Ç╒╕╓é╒┤",
          "╘▓╒¬╒╖╒»╒╕╓é╒⌐╒╡╒í╒╢ ╓â╒╕╒¡╒í╓Ç╒½╒╢╒╕╓é╒┤",
          "╘▒╓Ç╒╡╒í╒╢ ╒│╒╢╒╖╒┤╒í╒╢ ╒ó╒í╓Ç╒▒╓Ç╒í╓ü╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Stressin aradan qald─▒r─▒lmas─▒",
          "Emosional v╔Ö praktiki yard─▒m─▒n g├╢st╔Örilm╔Ösi",
          "D╔Örman─▒ ╔Öv╔Öz etm╔Ök",
          "Qan t╔Özyiqinin y├╝ks╔Öldilm╔Ösi"
        ],
        "questionRu": "╨í╨╛╤å╨╕╨░╨╗╤î╨╜╨░╤Å ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨║╨░ ╨┐╨╛╨╝╨╛╨│╨░╨╡╤é:",
        "explanationRu": "╨₧╨▒╨╡╤ü╨┐╨╡╤ç╨╡╨╜╨╕╨╡ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛╨│╨╛ ╨║╨╛╨╝╤ä╨╛╤Ç╤é╨░ ╨╕ ╨┐╤Ç╨░╨║╤é╨╕╤ç╨╡╤ü╨║╨╛╨╣ ╨┐╨╛╨╝╨╛╤ë╨╕.",
        "questionHy": "╒ì╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒í╒╗╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╓à╒ú╒╢╒╕╓é╒┤ ╒º.",
        "explanationHy": "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒í╒╡╒½╒╢ ╒░╒í╓Ç╒┤╒í╓Ç╒í╒╛╒Ñ╒┐╒╕╓é╒⌐╒╡╒í╒╢ ╓ç ╒ú╒╕╓Ç╒«╒╢╒í╒»╒í╒╢ ╓à╒ú╒╢╒╕╓é╒⌐╒╡╒í╒╢ ╒┐╓Ç╒í╒┤╒í╒ñ╓Ç╒╕╓é╒┤:",
        "questionAz": "Sosial d╔Öst╔Ök k├╢m╔Ök edir:",
        "explanationAz": "Emosional rahatl─▒─ƒ─▒n v╔Ö praktiki yard─▒m─▒n t╔Ömin edilm╔Ösi."
      },
      {
        "id": "q13-7",
        "question": "Cortisol comes from:",
        "questionKa": "ßâÖßâ¥ßâáßâóßâÿßâûßâ¥ßâÜßâÿ ßâ¢ßâ¥ßâôßâÿßâí:",
        "options": [
          "Thyroid",
          "Adrenal glands",
          "Pituitary",
          "Pineal"
        ],
        "optionsKa": [
          "ßâñßâÉßâáßâÿßâíßâößâæßâáßâÿ ßâ»ßâÿßâáßâÖßâòßâÜßâÿßâôßâÉßâ£",
          "ßâùßâÿßâáßâÖßâ¢ßâößâÜßâûßâößâôßâÉ ßâ»ßâÿßâáßâÖßâòßâÜßâößâæßâÿßâôßâÉßâ£",
          "ßâ░ßâÿßâ₧ßâ¥ßâñßâÿßâûßâÿßâôßâÉßâ£",
          "ßâößâ₧ßâÿßâñßâÿßâûßâÿßâôßâÉßâ£"
        ],
        "correctIndex": 1,
        "explanation": "Adrenal glands produce cortisol.",
        "explanationKa": "ßâùßâÿßâáßâÖßâ¢ßâößâÜßâûßâößâôßâÉ ßâ»ßâÿßâáßâÖßâòßâÜßâößâæßâÿ ßâÉßâ¼ßâÉßâáßâ¢ßâ¥ßâößâæßâí ßâÖßâ¥ßâáßâóßâÿßâûßâ¥ßâÜßâí.",
        "optionsRu": [
          "╨⌐╨╕╤é╨╛╨▓╨╕╨┤╨╜╨░╤Å ╨╢╨╡╨╗╨╡╨╖╨░",
          "╨¥╨░╨┤╨┐╨╛╤ç╨╡╤ç╨╜╨╕╨║╨╕",
          "╨ô╨╕╨┐╨╛╤ä╨╕╨╖",
          "╨¿╨╕╤ê╨║╨╛╨▓╨╕╨┤╨╜╨░╤Å ╨╢╨╡╨╗╨╡╨╖╨░"
        ],
        "optionsHy": [
          "╒Ä╒í╒░╒í╒╢╒í╒▒╓ç ╒ú╒Ñ╒▓╒▒",
          "╒Ä╒Ñ╓Ç╒Ñ╓Ç╒½╒»╒í╒┤╒í╒╡╒½╒╢ ╒ú╒Ñ╒▓╒▒╒Ñ╓Ç",
          "╒Ç╒½╒║╒╕╓å╒½╒ª",
          "Pineal"
        ],
        "optionsAz": [
          "Tiroid",
          "Adrenal bezl╔Ör",
          "Hipofiz",
          "pineal"
        ],
        "questionRu": "╨Ü╨╛╤Ç╤é╨╕╨╖╨╛╨╗ ╨┐╨╛╤ü╤é╤â╨┐╨░╨╡╤é ╨╕╨╖:",
        "questionHy": "╘┐╒╕╓Ç╒┐╒½╒ª╒╕╒¼╒¿ ╒ú╒í╒¼╒½╒╜ ╒º.",
        "questionAz": "Kortizol a┼ƒa─ƒ─▒dak─▒lardan g╔Ölir:",
        "explanationRu": "╨¥╨░╨┤╨┐╨╛╤ç╨╡╤ç╨╜╨╕╨║╨╕ ╨▓╤ï╤Ç╨░╨▒╨░╤é╤ï╨▓╨░╤Ä╤é ╨║╨╛╤Ç╤é╨╕╨╖╨╛╨╗.",
        "explanationHy": "╒Ä╒Ñ╓Ç╒Ñ╓Ç╒½╒»╒í╒┤╒í╒╡╒½╒╢ ╒ú╒Ñ╒▓╒▒╒Ñ╓Ç╒¿ ╒í╓Ç╒┐╒í╒ñ╓Ç╒╕╓é╒┤ ╒Ñ╒╢ ╒»╒╕╓Ç╒┐╒½╒ª╒╕╒¼╓ë",
        "explanationAz": "B├╢yr╔Ök├╝st├╝ v╔Özil╔Ör kortizol istehsal edir."
      },
      {
        "id": "q13-8",
        "question": "Emotion-focused coping:",
        "questionKa": "ßâößâ¢ßâ¥ßâ¬ßâÿßâÉßâûßâö ßâ¥ßâáßâÿßâößâ£ßâóßâÿßâáßâößâæßâúßâÜßâÿ ßâÆßâÉßâ¢ßâÖßâÜßâÉßâòßâößâæßâÉ:",
        "options": [
          "Making a plan",
          "Relaxation and emotional support",
          "Solving problem",
          "Confronting"
        ],
        "optionsKa": [
          "ßâÆßâößâÆßâ¢ßâÿßâí ßâ¿ßâößâôßâÆßâößâ£ßâÉ",
          "ßâáßâößâÜßâÉßâÑßâíßâÉßâ¬ßâÿßâÉ ßâôßâÉ ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâ¢ßâ«ßâÉßâáßâôßâÉßâ¡ßâößâáßâÉ",
          "ßâ₧ßâáßâ¥ßâæßâÜßâößâ¢ßâÿßâí ßâÆßâÉßâôßâÉßâ¡ßâáßâÉ",
          "ßâôßâÉßâ₧ßâÿßâáßâÿßâíßâ₧ßâÿßâáßâößâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Managing emotional response to stress.",
        "explanationKa": "ßâíßâóßâáßâößâíßâûßâö ßâößâ¢ßâ¥ßâ¬ßâÿßâúßâáßâÿ ßâáßâößâÉßâÑßâ¬ßâÿßâÿßâí ßâ¢ßâÉßâáßâùßâòßâÉ.",
        "optionsRu": [
          "╨í╨╛╤ü╤é╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╨╗╨░╨╜╨░",
          "╨á╨░╤ü╤ü╨╗╨░╨▒╨╗╨╡╨╜╨╕╨╡ ╨╕ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨░╤Å ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨║╨░",
          "╨á╨╡╤ê╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝╤ï",
          "╨ƒ╤Ç╨╛╤é╨╕╨▓╨╛╤ü╤é╨╛╤Å╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╒è╒¼╒í╒╢ ╒»╒í╒ª╒┤╒Ñ╒¼╒¿",
          "╒Ç╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓ç ╒░╒╕╓é╒ª╒í╒»╒í╒╢ ╒í╒╗╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘╜╒╢╒ñ╓Ç╒½ ╒¼╒╕╓é╒«╒╕╓é╒┤",
          "╒Ç╒í╒»╒í╒╝╒í╒»╒╛╒Ñ╒¼╒╕╒╛"
        ],
        "optionsAz": [
          "Plan qurmaq",
          "─░stirah╔Öt v╔Ö emosional d╔Öst╔Ök",
          "Problemin h╔Ölli",
          "Qar┼ƒ─▒durma"
        ],
        "questionHy": "╘╢╒ú╒í╓ü╒┤╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒½ ╒╛╓Ç╒í ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╓ü╒í╒« ╒░╒í╒▓╒⌐╒í╒░╒í╓Ç╒╕╓é╒┤.",
        "questionRu": "╨¡╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛-╨╛╤Ç╨╕╨╡╨╜╤é╨╕╤Ç╨╛╨▓╨░╨╜╨╜╨╛╨╡ ╨┐╤Ç╨╡╨╛╨┤╨╛╨╗╨╡╨╜╨╕╨╡ ╤é╤Ç╤â╨┤╨╜╨╛╤ü╤é╨╡╨╣:",
        "explanationRu": "╨ú╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╤ì╨╝╨╛╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╨╛╨╣ ╤Ç╨╡╨░╨║╤å╨╕╨╡╨╣ ╨╜╨░ ╤ü╤é╤Ç╨╡╤ü╤ü.",
        "explanationHy": "╒ì╒⌐╓Ç╒Ñ╒╜╒½╒╢ ╒░╒╕╓é╒ª╒í╒»╒í╒╢ ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒½ ╒»╒í╒╝╒í╒╛╒í╓Ç╒╕╓é╒┤:",
        "explanationAz": "Stress╔Ö emosional reaksiyan─▒n idar╔Ö edilm╔Ösi.",
        "questionAz": "Emosiyaya ╔Ösaslanan m├╝bariz╔Ö:"
      },
      {
        "id": "q13-9",
        "question": "Daily hassles vs. major events:",
        "questionKa": "ßâºßâ¥ßâòßâößâÜßâôßâªßâÿßâúßâáßâÿ ßâíßâÿßâáßâùßâúßâÜßâößâößâæßâÿ vs ßâ¢ßâùßâÉßâòßâÉßâáßâÿ ßâ¢ßâ¥ßâòßâÜßâößâ£ßâößâæßâÿ:",
        "options": [
          "Only major events matter",
          "Hassles can be equally harmful",
          "Hassles irrelevant",
          "Major events no impact"
        ],
        "optionsKa": [
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ¢ßâùßâÉßâòßâÉßâáßâÿ ßâ¢ßâ¥ßâòßâÜßâößâ£ßâößâæßâÿßâÉ ßâ¢ßâ£ßâÿßâ¿ßâòßâ£ßâößâÜßâ¥ßâòßâÉßâ£ßâÿ",
          "ßâíßâÿßâáßâùßâúßâÜßâößâößâæßâÿ ßâùßâÉßâ£ßâÉßâæßâáßâÉßâô ßâíßâÉßâûßâÿßâÉßâ£ßâ¥ ßâ¿ßâößâÿßâ½ßâÜßâößâæßâÉ ßâÿßâºßâ¥ßâí",
          "ßâíßâÿßâáßâùßâúßâÜßâößâößâæßâÿ ßâÉßâáßâÉßâÉßâáßâíßâößâæßâÿßâùßâÿßâÉ",
          "ßâ¢ßâùßâÉßâòßâÉßâá ßâ¢ßâ¥ßâòßâÜßâößâ£ßâößâæßâí ßâÆßâÉßâòßâÜßâößâ£ßâÉ ßâÉßâá ßâÉßâÑßâòßâí"
        ],
        "correctIndex": 1,
        "explanation": "Accumulated hassles are very harmful.",
        "explanationKa": "ßâôßâÉßâÆßâáßâ¥ßâòßâÿßâÜßâÿ ßâíßâÿßâáßâùßâúßâÜßâößâößâæßâÿ ßâ½ßâÉßâÜßâÿßâÉßâ£ ßâíßâÉßâûßâÿßâÉßâ£ßâ¥ßâÉ.",
        "optionsRu": [
          "╨ó╨╛╨╗╤î╨║╨╛ ╨▓╨░╨╢╨╜╤ï╨╡ ╤ü╨╛╨▒╤ï╤é╨╕╤Å ╨╕╨╝╨╡╤Ä╤é ╨╖╨╜╨░╤ç╨╡╨╜╨╕╨╡",
          "╨ƒ╤Ç╨╛╨▒╨╗╨╡╨╝╤ï ╨╝╨╛╨│╤â╤é ╨▒╤ï╤é╤î ╨╛╨┤╨╕╨╜╨░╨║╨╛╨▓╨╛ ╨▓╤Ç╨╡╨┤╨╜╤ï",
          "╨ƒ╤Ç╨╛╨▒╨╗╨╡╨╝╤ï ╨╜╨╡ ╨╕╨╝╨╡╤Ä╤é ╨╖╨╜╨░╤ç╨╡╨╜╨╕╤Å",
          "╨Ü╤Ç╤â╨┐╨╜╤ï╨╡ ╤ü╨╛╨▒╤ï╤é╨╕╤Å ╨╜╨╡ ╨▓╨╗╨╕╤Å╤Ä╤é"
        ],
        "optionsHy": [
          "╘┐╒í╓Ç╓ç╒╕╓Ç ╒Ñ╒╢ ╒┤╒½╒í╒╡╒╢ ╒»╒í╓Ç╓ç╒╕╓Ç ╒½╓Ç╒í╒ñ╒í╓Ç╒▒╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿",
          "╘╜╒╢╒ñ╒½╓Ç╒╢╒Ñ╓Ç╒¿ ╒»╒í╓Ç╒╕╒▓ ╒Ñ╒╢ ╒╢╒╕╓é╒╡╒╢╓ä╒í╒╢ ╒╛╒╢╒í╒╜╒í╒»╒í╓Ç ╒¼╒½╒╢╒Ñ╒¼",
          "╘╜╒╢╒ñ╒½╓Ç╒╢╒Ñ╓Ç╒¿ ╒í╒╢╒┐╒Ñ╒▓╒½",
          "╒Ç╒½╒┤╒╢╒í╒»╒í╒╢ ╒½╓Ç╒í╒ñ╒í╓Ç╒▒╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒╕╒╣ ╒┤╒½ ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╒╣╒╕╓é╒╢╒Ñ╒╢"
        ],
        "optionsAz": [
          "Yaln─▒z ╔Ösas hadis╔Öl╔Ör vacibdir",
          "├ç╔Ötinlikl╔Ör eyni d╔Ör╔Öc╔Öd╔Ö z╔Ör╔Örli ola bil╔Ör",
          "╞Ång╔Öll╔Ör ╔Öh╔Ömiyy╔Ötsizdir",
          "B├╢y├╝k hadis╔Öl╔Örin t╔Ösiri yoxdur"
        ],
        "explanationRu": "╨¥╨░╨║╨╛╨┐╨╗╨╡╨╜╨╜╤ï╨╡ ╤à╨╗╨╛╨┐╨╛╤é╤ï ╨╛╤ç╨╡╨╜╤î ╨▓╤Ç╨╡╨┤╨╜╤ï.",
        "questionRu": "╨ò╨╢╨╡╨┤╨╜╨╡╨▓╨╜╤ï╨╡ ╤à╨╗╨╛╨┐╨╛╤é╤ï ╨╕ ╨▓╨░╨╢╨╜╤ï╨╡ ╤ü╨╛╨▒╤ï╤é╨╕╤Å:",
        "explanationHy": "╘┐╒╕╓é╒┐╒í╒»╒╛╒í╒« ╓ä╒í╒╖╓ä╒╖╒╕╓é╒»╒╢╒Ñ╓Ç╒¿ ╒╖╒í╒┐ ╒╛╒╢╒í╒╜╒í╒»╒í╓Ç ╒Ñ╒╢╓ë",
        "questionHy": "╘▒╒┤╒Ñ╒╢╓à╓Ç╒╡╒í ╒ñ╒¬╒╛╒í╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç ╒¿╒╢╒ñ╒ñ╒Ñ╒┤ ╒░╒½╒┤╒╢╒í╒»╒í╒╢ ╒½╓Ç╒í╒ñ╒í╓Ç╒▒╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½.",
        "explanationAz": "Y─▒─ƒ─▒lm─▒┼ƒ ╔Öng╔Öll╔Ör ├ºox z╔Ör╔Örlidir.",
        "questionAz": "G├╝nd╔Ölik ╔Öng╔Öll╔Ör v╔Ö ╔Ösas hadis╔Öl╔Ör:"
      },
      {
        "id": "q13-10",
        "question": "Resilience:",
        "questionKa": "ßâÆßâÉßâ¢ßâ½ßâÜßâößâ¥ßâæßâÉ:",
        "options": [
          "Avoiding all stress",
          "Recovery after adversity",
          "Physical toughness",
          "No negative emotions"
        ],
        "optionsKa": [
          "ßâºßâòßâößâÜßâÉ ßâíßâóßâáßâößâíßâÿßâí ßâùßâÉßâòßâÿßâôßâÉßâ£ ßâÉßâ¬ßâÿßâÜßâößâæßâÉ",
          "ßâÆßâÉßâ¡ßâÿßâáßâòßâößâæßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ ßâÉßâªßâôßâÆßâößâ£ßâÉ",
          "ßâñßâÿßâûßâÿßâÖßâúßâáßâÿ ßâíßâÿßâ¢ßâóßâÖßâÿßâ¬ßâö",
          "ßâúßâÉßâáßâºßâ¥ßâñßâÿßâùßâÿ ßâößâ¢ßâ¥ßâ¬ßâÿßâößâæßâÿßâí ßâÉßâáßâÑßâ¥ßâ£ßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Capacity to recover and adapt.",
        "explanationKa": "ßâÉßâªßâôßâÆßâößâ£ßâÿßâíßâÉ ßâôßâÉ ßâÉßâôßâÉßâ₧ßâóßâÉßâ¬ßâÿßâÿßâí ßâúßâ£ßâÉßâáßâÿ.",
        "optionsRu": [
          "╨ÿ╨╖╨▒╨╡╨│╨░╨╜╨╕╨╡ ╨╗╤Ä╨▒╨╛╨│╨╛ ╤ü╤é╤Ç╨╡╤ü╤ü╨░",
          "╨Æ╨╛╤ü╤ü╤é╨░╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╨╛╤ü╨╗╨╡ ╨╜╨╡╨▓╨╖╨│╨╛╨┤",
          "╨ñ╨╕╨╖╨╕╤ç╨╡╤ü╨║╨░╤Å ╨┐╤Ç╨╛╤ç╨╜╨╛╤ü╤é╤î",
          "╨¥╨╕╨║╨░╨║╨╕╤à ╨╜╨╡╨│╨░╤é╨╕╨▓╨╜╤ï╤à ╤ì╨╝╨╛╤å╨╕╨╣"
        ],
        "optionsHy": [
          "╘╜╒╕╓é╒╜╒í╓â╒Ñ╒¼╒╕╒╛ ╒ó╒╕╒¼╒╕╓Ç ╒╜╒⌐╓Ç╒Ñ╒╜╒╢╒Ñ╓Ç╒½╓ü",
          "╘┤╒¬╒ó╒í╒¡╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒½╓ü ╒░╒Ñ╒┐╒╕ ╒╛╒Ñ╓Ç╒í╒»╒í╒╢╒ú╒╢╒╕╓é╒┤",
          "╒û╒½╒ª╒½╒»╒í╒»╒í╒╢ ╒»╒╕╒╖╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ê╒╣ ╒┤╒½ ╒ó╒í╓ü╒í╒╜╒í╒»╒í╒╢ ╒░╒╕╓é╒╡╒ª╒Ñ╓Ç"
        ],
        "optionsAz": [
          "B├╝t├╝n stressl╔Örd╔Ön qa├º─▒nmaq",
          "├ç╔Ötinlikd╔Ön sonra sa─ƒalma",
          "Fiziki m├╢hk╔Ömlik",
          "M╔Önfi emosiyalar yoxdur"
        ],
        "questionRu": "╨ú╤ü╤é╨╛╨╣╤ç╨╕╨▓╨╛╤ü╤é╤î:",
        "questionHy": "╒â╒»╒╕╓é╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢:",
        "explanationRu": "╨í╨┐╨╛╤ü╨╛╨▒╨╜╨╛╤ü╤é╤î ╨▓╨╛╤ü╤ü╤é╨░╨╜╨░╨▓╨╗╨╕╨▓╨░╤é╤î╤ü╤Å ╨╕ ╨░╨┤╨░╨┐╤é╨╕╤Ç╨╛╨▓╨░╤é╤î╤ü╤Å.",
        "explanationHy": "╒Ä╒Ñ╓Ç╒í╒»╒í╒╢╒ú╒╢╒╛╒Ñ╒¼╒╕╓é ╓ç ╒░╒í╓Ç╒┤╒í╓Ç╒╛╒Ñ╒¼╒╕╓é ╒»╒í╓Ç╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢:",
        "questionAz": "Davaml─▒l─▒q:",
        "explanationAz": "B╔Örpa v╔Ö uy─ƒunla┼ƒma qabiliyy╔Öti."
      }
    ],
    "titleRu": "╨í╤é╤Ç╨╡╤ü╤ü ╨╕ ╨┐╤Ç╨╡╨╛╨┤╨╛╨╗╨╡╨╜╨╕╨╡ ╤ü╤é╤Ç╨╡╤ü╤ü╨░ ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleHy": "╒ì╒⌐╓Ç╒Ñ╒╜ ╓ç ╒░╒í╒▓╒⌐╒í╒░╒í╓Ç╒╕╓é╒┤ ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleAz": "Stress v╔Ö m├╝bariz╔Ö - Viktorina"
  },
  {
    "id": "ch14-quiz",
    "chapterId": 14,
    "title": "Psychological Disorders ΓÇö Quiz",
    "titleKa": "ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâúßâáßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâößâæßâÿ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q14-1",
        "question": "DSM-5 is:",
        "questionKa": "DSM-5 ßâÉßâáßâÿßâí:",
        "options": [
          "Therapy technique",
          "Diagnostic manual",
          "Medication",
          "Test"
        ],
        "optionsKa": [
          "ßâùßâößâáßâÉßâ₧ßâÿßâÿßâí ßâóßâößâÑßâ£ßâÿßâÖßâÉ",
          "ßâôßâÿßâÉßâÆßâ£ßâ¥ßâíßâóßâÿßâÖßâúßâáßâÿ ßâíßâÉßâ«ßâößâÜßâ¢ßâ½ßâªßâòßâÉßâ£ßâößâÜßâ¥",
          "ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâÿ",
          "ßâóßâößâíßâóßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Standard classification for mental disorders.",
        "explanationKa": "ßâñßâíßâÿßâÑßâÿßâÖßâúßâáßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâößâæßâÿßâí ßâíßâóßâÉßâ£ßâôßâÉßâáßâóßâúßâÜßâÿ ßâÖßâÜßâÉßâíßâÿßâñßâÿßâÖßâÉßâ¬ßâÿßâÉ.",
        "optionsRu": [
          "╨ó╨╡╤à╨╜╨╕╨║╨░ ╤é╨╡╤Ç╨░╨┐╨╕╨╕",
          "╨á╤â╨║╨╛╨▓╨╛╨┤╤ü╤é╨▓╨╛ ╨┐╨╛ ╨┤╨╕╨░╨│╨╜╨╛╤ü╤é╨╕╨║╨╡",
          "╨£╨╡╨┤╨╕╨║╨░╨╝╨╡╨╜╤é",
          "╨ó╨╡╤ü╤é"
        ],
        "optionsHy": [
          "╘╣╒Ñ╓Ç╒í╒║╒½╒í╒╡╒½ ╒┐╒Ñ╒¡╒╢╒½╒»╒í",
          "╘▒╒¡╒┐╒╕╓Ç╒╕╒╖╒½╒╣ ╒▒╒Ñ╒╝╒╢╒í╓Ç╒»",
          "╘┤╒Ñ╒▓╒╕╓Ç╒í╒╡╓ä",
          "╒ô╒╕╓Ç╒▒╒í╓Ç╒»╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Terapiya texnikas─▒",
          "Diaqnostika kitab├ºas─▒",
          "D╔Örman",
          "Test"
        ],
        "questionRu": "╨ö╨í╨£-5 ΓÇô ╤ì╤é╨╛:",
        "questionHy": "DSM-5-╒¿ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "explanationHy": "╒Ç╒╕╒ú╒Ñ╒»╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç╒½ ╒╜╒┐╒í╒╢╒ñ╒í╓Ç╒┐ ╒ñ╒í╒╜╒í╒»╒í╓Ç╒ú╒╕╓é╒┤.",
        "explanationRu": "╨í╤é╨░╨╜╨┤╨░╤Ç╤é╨╜╨░╤Å ╨║╨╗╨░╤ü╤ü╨╕╤ä╨╕╨║╨░╤å╨╕╤Å ╨┐╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╕╤à ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓.",
        "questionAz": "DSM-5:",
        "explanationAz": "Psixi poz─ƒunluqlar─▒n standart t╔Ösnifat─▒."
      },
      {
        "id": "q14-2",
        "question": "Major depression involves:",
        "questionKa": "ßâôßâÿßâôßâÿ ßâôßâößâ₧ßâáßâößâíßâÿßâÉ ßâ¢ßâ¥ßâÿßâ¬ßâÉßâòßâí:",
        "options": [
          "Brief sadness",
          "Persistent depressed mood 2+ weeks",
          "Constant happiness",
          "Physical only"
        ],
        "optionsKa": [
          "ßâ«ßâÉßâ£ßâ¢ßâ¥ßâÖßâÜßâö ßâíßâößâòßâôßâÉßâí",
          "ßâ¢ßâúßâôßâ¢ßâÿßâò ßâôßâößâ₧ßâáßâößâíßâÿßâúßâÜ ßâÆßâÉßâ£ßâ¼ßâºßâ¥ßâæßâÉßâí 2+ ßâÖßâòßâÿßâáßâÉ",
          "ßâ¢ßâúßâôßâ¢ßâÿßâò ßâæßâößâôßâ£ßâÿßâößâáßâößâæßâÉßâí",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâñßâÿßâûßâÿßâÖßâúßâáßâí"
        ],
        "correctIndex": 1,
        "explanation": "At least two weeks of depressed mood.",
        "explanationKa": "ßâ¢ßâÿßâ£ßâÿßâ¢ßâúßâ¢ ßâ¥ßâáßâÿ ßâÖßâòßâÿßâáßâÿßâí ßâôßâößâ₧ßâáßâößâíßâÿßâúßâÜßâÿ ßâÆßâÉßâ£ßâ¼ßâºßâ¥ßâæßâÉ.",
        "optionsRu": [
          "╨Ü╤Ç╨░╤é╨║╨░╤Å ╨┐╨╡╤ç╨░╨╗╤î",
          "╨í╤é╨╛╨╣╨║╨╛╨╡ ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╨▓╨╜╨╛╨╡ ╨╜╨░╤ü╤é╤Ç╨╛╨╡╨╜╨╕╨╡ ╨▒╨╛╨╗╨╡╨╡ 2 ╨╜╨╡╨┤╨╡╨╗╤î.",
          "╨ƒ╨╛╤ü╤é╨╛╤Å╨╜╨╜╨╛╨╡ ╤ü╤ç╨░╤ü╤é╤î╨╡",
          "╨ó╨╛╨╗╤î╨║╨╛ ╤ä╨╕╨╖╨╕╤ç╨╡╤ü╨║╨╛╨╡"
        ],
        "optionsHy": [
          "╘┐╒í╓Ç╒│ ╒┐╒¡╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╒╖╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒╛ ╒┐╓Ç╒í╒┤╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢ 2+ ╒╖╒í╒ó╒í╒⌐",
          "╘▒╒╢╒¿╒╢╒ñ╒░╒í╒┐ ╒Ñ╓Ç╒╗╒í╒╢╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╒½╒í╒╡╒╢ ╓å╒½╒ª╒½╒»╒í╒»╒í╒╢"
        ],
        "optionsAz": [
          "Q─▒sa k╔Öd╔Ör",
          "Davaml─▒ depressiya ╔Öhval-ruhiyy╔Ösi 2+ h╔Öft╔Ö",
          "Daimi xo┼ƒb╔Öxtlik",
          "Yaln─▒z fiziki"
        ],
        "explanationHy": "╘▒╒╝╒╢╒╛╒í╒ª╒╢ ╒Ñ╓Ç╒»╒╕╓é ╒╖╒í╒ó╒í╒⌐ ╒¿╒╢╒»╒│╒╛╒í╒« ╒┐╓Ç╒í╒┤╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢:",
        "questionRu": "╨æ╨╛╨╗╤î╤ê╨░╤Å ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╤Å ╨▓╨║╨╗╤Ä╤ç╨░╨╡╤é ╨▓ ╤ü╨╡╨▒╤Å:",
        "explanationRu": "╨£╨╕╨╜╨╕╨╝╤â╨╝ ╨┤╨▓╨╡ ╨╜╨╡╨┤╨╡╨╗╨╕ ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╨▓╨╜╨╛╨│╨╛ ╨╜╨░╤ü╤é╤Ç╨╛╨╡╨╜╨╕╤Å.",
        "questionHy": "╘╜╒╕╒╖╒╕╓Ç ╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í╒╢ ╒╢╒Ñ╓Ç╒í╒╝╒╕╓é╒┤ ╒º.",
        "questionAz": "B├╢y├╝k depressiya daxildir:",
        "explanationAz": "╞Ån az─▒ iki h╔Öft╔Ö depressiv ╔Öhval-ruhiyy╔Ö."
      },
      {
        "id": "q14-3",
        "question": "Schizophrenia features:",
        "questionKa": "ßâ¿ßâÿßâûßâ¥ßâñßâáßâößâ£ßâÿßâÿßâí ßâ¢ßâÉßâ«ßâÉßâíßâÿßâÉßâùßâößâæßâÜßâößâæßâÿ:",
        "options": [
          "Multiple personalities",
          "Hallucinations and delusions",
          "Extreme anxiety",
          "Memory loss only"
        ],
        "optionsKa": [
          "ßâ¢ßâáßâÉßâòßâÉßâÜßâÿ ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÉ",
          "ßâ░ßâÉßâÜßâúßâ¬ßâÿßâ£ßâÉßâ¬ßâÿßâößâæßâÿ ßâôßâÉ ßâæßâ¥ßâôßâòßâößâæßâÿ",
          "ßâößâÑßâíßâóßâáßâößâ¢ßâÉßâÜßâúßâáßâÿ ßâ¿ßâñßâ¥ßâùßâòßâÉ",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâôßâÉßâÖßâÉßâáßâÆßâòßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Hallucinations, delusions, disordered thinking.",
        "explanationKa": "ßâ░ßâÉßâÜßâúßâ¬ßâÿßâ£ßâÉßâ¬ßâÿßâößâæßâÿ, ßâæßâ¥ßâôßâòßâößâæßâÿ, ßâ¢ßâ¥ßâúßâ¼ßâößâíßâáßâÿßâÆßâößâæßâößâÜßâÿ ßâÉßâûßâáßâ¥ßâòßâ£ßâößâæßâÉ.",
        "optionsRu": [
          "╨£╨╜╨╛╨╢╨╡╤ü╤é╨▓╨╡╨╜╨╜╤ï╨╡ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╕",
          "╨ô╨░╨╗╨╗╤Ä╤å╨╕╨╜╨░╤å╨╕╨╕ ╨╕ ╨▒╤Ç╨╡╨┤",
          "╨Ü╤Ç╨░╨╣╨╜╤Å╤Å ╤é╤Ç╨╡╨▓╨╛╨│╨░",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨┐╨╛╤é╨╡╤Ç╤Å ╨┐╨░╨╝╤Å╤é╨╕"
        ],
        "optionsHy": [
          "╘▓╒í╒ª╒┤╒í╒⌐╒½╒╛ ╒í╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
          "╒Ç╒í╒¼╒╡╒╕╓é╓ü╒½╒╢╒í╓ü╒½╒í╒╢╒Ñ╓Ç ╓ç ╒ª╒í╒╝╒í╒╢╓ü╒í╒╢╓ä╒╢╒Ñ╓Ç",
          "╘╛╒í╒╡╓Ç╒í╒░╒Ñ╒▓ ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╒½╒í╒╡╒╢ ╒░╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒»╒╕╓Ç╒╕╓é╒╜╒┐"
        ],
        "optionsAz": [
          "├çoxsayl─▒ ┼ƒ╔Öxsiyy╔Ötl╔Ör",
          "Hal├╝sinasiyalar v╔Ö hezeyanlar",
          "H╔Öddind╔Ön art─▒q narahatl─▒q",
          "Yaln─▒z yadda┼ƒ itkisi"
        ],
        "explanationRu": "╨ô╨░╨╗╨╗╤Ä╤å╨╕╨╜╨░╤å╨╕╨╕, ╨▒╤Ç╨╡╨┤, ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨╛ ╨╝╤ï╤ê╨╗╨╡╨╜╨╕╤Å.",
        "questionAz": "┼₧izofreniyan─▒n x├╝susiyy╔Ötl╔Öri:",
        "questionRu": "╨₧╤ü╨╛╨▒╨╡╨╜╨╜╨╛╤ü╤é╨╕ ╤ê╨╕╨╖╨╛╤ä╤Ç╨╡╨╜╨╕╨╕:",
        "questionHy": "╒ç╒½╒ª╒╕╓å╓Ç╒Ñ╒╢╒½╒í╒╡╒½ ╒í╒╝╒í╒╢╒▒╒╢╒í╒░╒í╒┐╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿.",
        "explanationHy": "╒Ç╒í╒¼╒╡╒╕╓é╓ü╒½╒╢╒í╓ü╒½╒í╒╢╒Ñ╓Ç, ╒ª╒í╒╝╒í╒╢╓ü╒í╒╢╓ä╒╢╒Ñ╓Ç, ╒¡╒í╒╢╒ú╒í╓Ç╒╛╒í╒« ╒┤╒┐╒í╒«╒╕╒▓╒╕╓é╒⌐╒╡╒╕╓é╒╢:",
        "explanationAz": "Hal├╝sinasiyalar, hezeyanlar, poz─ƒun d├╝┼ƒ├╝nc╔Ö."
      },
      {
        "id": "q14-4",
        "question": "A phobia is:",
        "questionKa": "ßâñßâ¥ßâæßâÿßâÉ ßâÉßâáßâÿßâí:",
        "options": [
          "Normal fear",
          "Irrational excessive fear",
          "Temporary anxiety",
          "Mood disorder"
        ],
        "optionsKa": [
          "ßâ£ßâ¥ßâáßâ¢ßâÉßâÜßâúßâáßâÿ ßâ¿ßâÿßâ¿ßâÿ",
          "ßâÿßâáßâÉßâ¬ßâÿßâ¥ßâ£ßâÉßâÜßâúßâáßâÿ ßâûßâößâôßâ¢ßâößâóßâÿ ßâ¿ßâÿßâ¿ßâÿ",
          "ßâôßâáßâ¥ßâößâæßâÿßâùßâÿ ßâ¿ßâñßâ¥ßâùßâòßâÉ",
          "ßâÆßâÉßâ£ßâ¼ßâºßâ¥ßâæßâÿßâí ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Intense, irrational fears.",
        "explanationKa": "ßâÿßâ£ßâóßâößâ£ßâíßâÿßâúßâáßâÿ, ßâÿßâáßâÉßâ¬ßâÿßâ¥ßâ£ßâÉßâÜßâúßâáßâÿ ßâ¿ßâÿßâ¿ßâößâæßâÿ.",
        "optionsRu": [
          "╨¥╨╛╤Ç╨╝╨░╨╗╤î╨╜╤ï╨╣ ╤ü╤é╤Ç╨░╤à",
          "╨ÿ╤Ç╤Ç╨░╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╤ï╨╣ ╤ç╤Ç╨╡╨╖╨╝╨╡╤Ç╨╜╤ï╨╣ ╤ü╤é╤Ç╨░╤à",
          "╨Æ╤Ç╨╡╨╝╨╡╨╜╨╜╨╛╨╡ ╨▒╨╡╤ü╨┐╨╛╨║╨╛╨╣╤ü╤é╨▓╨╛",
          "╨á╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨╛ ╨╜╨░╤ü╤é╤Ç╨╛╨╡╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╒ì╒╕╒╛╒╕╓Ç╒í╒»╒í╒╢ ╒╛╒í╒¡",
          "╘╗╒╝╒í╓ü╒½╒╕╒╢╒í╒¼ ╒╣╒í╓â╒½╓ü ╒í╒╛╒Ñ╒¼╒½ ╒╛╒í╒¡",
          "╘║╒í╒┤╒í╒╢╒í╒»╒í╒╛╒╕╓Ç ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒Å╓Ç╒í╒┤╒í╒ñ╓Ç╒╕╓é╒⌐╒╡╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Normal qorxu",
          "M╔Öntiqsiz h╔Öddind╔Ön art─▒q qorxu",
          "M├╝v╔Öqq╔Öti narahatl─▒q",
          "╞Åhval poz─ƒunlu─ƒu"
        ],
        "questionRu": "╨ñ╨╛╨▒╨╕╤Å ΓÇô ╤ì╤é╨╛:",
        "questionHy": "╒û╒╕╒ó╒½╒í╒╢ ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╢ ╒º.",
        "explanationHy": "╘╗╒╢╒┐╒Ñ╒╢╒╜╒½╒╛, ╒½╒╝╒í╓ü╒½╒╕╒╢╒í╒¼ ╒╛╒í╒¡╒Ñ╓Ç.",
        "explanationRu": "╨í╨╕╨╗╤î╨╜╤ï╨╡, ╨╕╤Ç╤Ç╨░╤å╨╕╨╛╨╜╨░╨╗╤î╨╜╤ï╨╡ ╤ü╤é╤Ç╨░╤à╨╕.",
        "explanationAz": "G├╝cl├╝, irrasional qorxular.",
        "questionAz": "Fobiya budur:"
      },
      {
        "id": "q14-5",
        "question": "Bipolar disorder:",
        "questionKa": "ßâæßâÿßâ₧ßâ¥ßâÜßâÉßâáßâúßâÜßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÉ:",
        "options": [
          "Only depression",
          "Alternating mania and depression",
          "Constant mania",
          "Anxiety"
        ],
        "optionsKa": [
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâôßâößâ₧ßâáßâößâíßâÿßâÉ",
          "ßâ¢ßâÉßâ£ßâÿßâÿßâíßâÉ ßâôßâÉ ßâôßâößâ₧ßâáßâößâíßâÿßâÿßâí ßâ¢ßâ¥ßâ£ßâÉßâ¬ßâòßâÜßâößâ¥ßâæßâÉ",
          "ßâ¢ßâúßâôßâ¢ßâÿßâòßâÿ ßâ¢ßâÉßâ£ßâÿßâÉ",
          "ßâ¿ßâñßâ¥ßâùßâòßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Alternating manic and depressive episodes.",
        "explanationKa": "ßâ¢ßâÉßâ£ßâÿßâÉßâÖßâÉßâÜßâúßâáßâÿ ßâôßâÉ ßâôßâößâ₧ßâáßâößâíßâÿßâúßâÜßâÿ ßâößâ₧ßâÿßâûßâ¥ßâôßâößâæßâÿßâí ßâ¢ßâ¥ßâ£ßâÉßâ¬ßâòßâÜßâößâ¥ßâæßâÉ.",
        "optionsRu": [
          "╨ó╨╛╨╗╤î╨║╨╛ ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╤Å",
          "╨º╨╡╤Ç╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨╝╨░╨╜╨╕╨╕ ╨╕ ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╨╕",
          "╨ƒ╨╛╤ü╤é╨╛╤Å╨╜╨╜╨░╤Å ╨╝╨░╨╜╨╕╤Å",
          "╨æ╨╡╤ü╨┐╨╛╨║╨╛╨╣╤ü╤é╨▓╨╛"
        ],
        "optionsHy": [
          "╒ä╒½╒í╒╡╒╢ ╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í",
          "╘▒╒╡╒¼╒¿╒╢╒┐╓Ç╒í╒╢╓ä╒í╒╡╒½╒╢ ╒┤╒╕╒¼╒╕╓é╓ü╓ä ╓ç ╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í",
          "╘▒╒╢╒¿╒╢╒ñ╒░╒í╒┐ ╒┤╒╕╒¼╒╕╓é╓ü╓ä",
          "╘▒╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Yaln─▒z depressiya",
          "Alternativ mani v╔Ö depressiya",
          "Daimi maniya",
          "Narahatl─▒q"
        ],
        "questionRu": "╨æ╨╕╨┐╨╛╨╗╤Å╤Ç╨╜╨╛╨╡ ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨╛:",
        "questionAz": "Bipolyar poz─ƒunluq:",
        "questionHy": "╘╡╓Ç╒»╒ó╓ç╒Ñ╒╝ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤.",
        "explanationHy": "╘▒╒╡╒¼╒¿╒╢╒┐╓Ç╒í╒╢╓ä╒í╒╡╒½╒╢ ╒┤╒í╒╢╒½╒í╒»╒í╒¼ ╓ç ╒ñ╒Ñ╒║╓Ç╒Ñ╒╜╒½╒╛ ╒ñ╓Ç╒╛╒í╒ú╒╢╒Ñ╓Ç.",
        "explanationRu": "╨º╨╡╤Ç╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨╝╨░╨╜╨╕╨░╨║╨░╨╗╤î╨╜╤ï╤à ╨╕ ╨┤╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╨▓╨╜╤ï╤à ╤ì╨┐╨╕╨╖╨╛╨┤╨╛╨▓.",
        "explanationAz": "Alternativ manik v╔Ö depressiv epizodlar."
      },
      {
        "id": "q14-6",
        "question": "PTSD develops after:",
        "questionKa": "PTSD ßâòßâÿßâùßâÉßâáßâôßâößâæßâÉ:",
        "options": [
          "Mild stress",
          "Traumatic event",
          "Normal bad day",
          "Puberty"
        ],
        "optionsKa": [
          "ßâ¢ßâíßâúßâæßâúßâÑßâÿ ßâíßâóßâáßâößâíßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ",
          "ßâóßâáßâÉßâòßâ¢ßâúßâÜßâÿ ßâ¢ßâ¥ßâòßâÜßâößâ£ßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ",
          "ßâ⌐ßâòßâößâúßâÜßâößâæßâáßâÿßâòßâÿ ßâ¬ßâúßâôßâÿ ßâôßâªßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ",
          "ßâ₧ßâúßâæßâößâáßâóßâÉßâóßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ"
        ],
        "correctIndex": 1,
        "explanation": "Following traumatic event exposure.",
        "explanationKa": "ßâóßâáßâÉßâòßâ¢ßâúßâÜ ßâ¢ßâ¥ßâòßâÜßâößâ£ßâÉßâíßâùßâÉßâ£ ßâ¿ßâößâ«ßâößâæßâÿßâí ßâ¿ßâößâ¢ßâôßâößâÆ.",
        "optionsRu": [
          "╨¢╨╡╨│╨║╨╕╨╣ ╤ü╤é╤Ç╨╡╤ü╤ü",
          "╨ó╤Ç╨░╨▓╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╤ü╨╛╨▒╤ï╤é╨╕╨╡",
          "╨₧╨▒╤ï╤ç╨╜╤ï╨╣ ╨┐╨╗╨╛╤à╨╛╨╣ ╨┤╨╡╨╜╤î",
          "╨ƒ╨╛╨╗╨╛╨▓╨╛╨╡ ╤ü╨╛╨╖╤Ç╨╡╨▓╨░╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╘╣╒Ñ╒⌐╓ç ╒╜╒⌐╓Ç╒Ñ╒╜",
          "╒Å╓Ç╒í╒╛╒┤╒í╒┐╒½╒» ╒½╓Ç╒í╒ñ╒í╓Ç╒▒╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ì╒╕╒╛╒╕╓Ç╒í╒»╒í╒╢ ╒╛╒í╒┐ ╓à╓Ç",
          "╒ì╒Ñ╒╝╒í╒»╒í╒╢ ╒░╒í╒╜╒╕╓é╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Y├╝ng├╝l stress",
          "Travmatik hadis╔Ö",
          "Normal pis g├╝n",
          "Yetkinlik"
        ],
        "questionHy": "PTSD-╒╢ ╒ª╒í╓Ç╒ú╒í╒╢╒╕╓é╒┤ ╒º ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒½╓ü ╒░╒Ñ╒┐╒╕.",
        "explanationHy": "╒Å╓Ç╒í╒╛╒┤╒í╒┐╒½╒» ╒½╓Ç╒í╒ñ╒í╓Ç╒▒╒╕╓é╒⌐╒╡╒í╒╢ ╒ó╒í╓ü╒í╒░╒í╒╡╒┐╒╕╓é╒┤╒½╓ü ╒░╒Ñ╒┐╒╕:",
        "explanationRu": "╨ƒ╨╛╤ü╨╗╨╡ ╨▓╨╛╨╖╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å ╤é╤Ç╨░╨▓╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨╛╨│╨╛ ╤ü╨╛╨▒╤ï╤é╨╕╤Å.",
        "questionRu": "╨ƒ╨ó╨í╨á ╤Ç╨░╨╖╨▓╨╕╨▓╨░╨╡╤é╤ü╤Å ╨┐╨╛╤ü╨╗╨╡:",
        "explanationAz": "Travmatik hadis╔Öy╔Ö m╔Öruz qald─▒qdan sonra.",
        "questionAz": "TSSB a┼ƒa─ƒ─▒dak─▒lardan sonra inki┼ƒaf edir:"
      },
      {
        "id": "q14-7",
        "question": "Diathesis-stress model:",
        "questionKa": "ßâôßâÿßâÉßâùßâößâû-ßâíßâóßâáßâößâíßâÿßâí ßâ¢ßâ¥ßâôßâößâÜßâÿ:",
        "options": [
          "Only genetics",
          "Only environment",
          "Predisposition + stress",
          "Random chance"
        ],
        "optionsKa": [
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâÆßâößâ£ßâößâóßâÿßâÖßâÉ",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâÆßâÉßâáßâößâ¢ßâ¥",
          "ßâ¢ßâÿßâôßâáßâößâÖßâÿßâÜßâößâæßâÉ + ßâíßâóßâáßâößâíßâÿ",
          "ßâ¿ßâößâ¢ßâùßâ«ßâòßâößâòßâÿßâùßâ¥ßâæßâÉ"
        ],
        "correctIndex": 2,
        "explanation": "Vulnerability interacts with stress.",
        "explanationKa": "ßâ¢ßâ¥ßâ¼ßâºßâòßâÜßâÉßâôßâ¥ßâæßâÉ ßâúßâáßâùßâÿßâößâáßâùßâÑßâ¢ßâößâôßâößâæßâí ßâíßâóßâáßâößâíßâùßâÉßâ£.",
        "optionsRu": [
          "╨ó╨╛╨╗╤î╨║╨╛ ╨│╨╡╨╜╨╡╤é╨╕╨║╨░",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨╛╨║╤Ç╤â╨╢╨░╤Ä╤ë╨░╤Å ╤ü╤Ç╨╡╨┤╨░",
          "╨ƒ╤Ç╨╡╨┤╤Ç╨░╤ü╨┐╨╛╨╗╨╛╨╢╨╡╨╜╨╜╨╛╤ü╤é╤î + ╤ü╤é╤Ç╨╡╤ü╤ü",
          "╨í╨╗╤â╤ç╨░╨╣╨╜╤ï╨╣ ╤ê╨░╨╜╤ü"
        ],
        "optionsHy": [
          "╒ä╒½╒í╒╡╒╢ ╒ú╒Ñ╒╢╒Ñ╒┐╒½╒»╒í",
          "╒ä╒½╒í╒╡╒╢ ╒┤╒½╒╗╒í╒╛╒í╒╡╓Ç",
          "╒å╒í╒¡╒í╒┐╓Ç╒í╒┤╒í╒ñ╓Ç╒╛╒í╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢ + ╒╜╒⌐╓Ç╒Ñ╒╜",
          "╒è╒í╒┐╒í╒░╒í╒»╒í╒╢ ╒░╒╢╒í╓Ç╒í╒╛╒╕╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Yaln─▒z genetika",
          "Yaln─▒z m├╝hit",
          "Meyil + stress",
          "T╔Ösad├╝fi ┼ƒans"
        ],
        "explanationHy": "╘╜╒╕╓ü╒Ñ╒¼╒½╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╓â╒╕╒¡╒í╒ª╒ñ╒╕╓é╒┤ ╒º ╒╜╒⌐╓Ç╒Ñ╒╜╒½ ╒░╒Ñ╒┐:",
        "questionRu": "╨£╨╛╨┤╨╡╨╗╤î ╨┤╨╕╨░╤é╨╡╨╖╨░-╤ü╤é╤Ç╨╡╤ü╤ü╨░:",
        "explanationRu": "╨ú╤Å╨╖╨▓╨╕╨╝╨╛╤ü╤é╤î ╨▓╨╖╨░╨╕╨╝╨╛╨┤╨╡╨╣╤ü╤é╨▓╤â╨╡╤é ╤ü╨╛ ╤ü╤é╤Ç╨╡╤ü╤ü╨╛╨╝.",
        "questionHy": "╘┤╒½╒í╒⌐╒Ñ╒ª-╒╜╒⌐╓Ç╒Ñ╒╜ ╒┤╒╕╒ñ╒Ñ╒¼.",
        "questionAz": "Diatez-stress modeli:",
        "explanationAz": "Z╔Öiflik stressl╔Ö qar┼ƒ─▒l─▒ql─▒ t╔Ösir g├╢st╔Örir."
      },
      {
        "id": "q14-8",
        "question": "OCD involves:",
        "questionKa": "ßâ¥ßâæßâíßâößâíßâÿßâúßâá-ßâÖßâ¥ßâ¢ßâ₧ßâúßâÜßâíßâÿßâúßâáßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÉ ßâ¢ßâ¥ßâÿßâ¬ßâÉßâòßâí:",
        "options": [
          "Obsessions and compulsions",
          "Only sadness",
          "Social withdrawal",
          "Memory loss"
        ],
        "optionsKa": [
          "ßâ¥ßâæßâíßâößâíßâÿßâößâæßâí ßâôßâÉ ßâÖßâ¥ßâ¢ßâ₧ßâúßâÜßâíßâÿßâößâæßâí",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâíßâößâòßâôßâÉßâí",
          "ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâá ßâÿßâûßâ¥ßâÜßâÉßâ¬ßâÿßâÉßâí",
          "ßâ¢ßâößâ«ßâíßâÿßâößâáßâößâæßâÿßâí ßâôßâÉßâÖßâÉßâáßâÆßâòßâÉßâí"
        ],
        "correctIndex": 0,
        "explanation": "Intrusive thoughts and repetitive behaviors.",
        "explanationKa": "ßâÿßâ£ßâóßâáßâúßâûßâÿßâúßâÜßâÿ ßâÉßâûßâáßâößâæßâÿ ßâôßâÉ ßâÆßâÉßâ£ßâ¢ßâößâ¥ßâáßâößâæßâÉßâôßâÿ ßâÑßâ¬ßâößâòßâößâæßâÿ.",
        "optionsRu": [
          "╨¥╨░╨▓╤Å╨╖╤ç╨╕╨▓╤ï╨╡ ╨╕╨┤╨╡╨╕ ╨╕ ╨┐╤Ç╨╕╨╜╤â╨╢╨┤╨╡╨╜╨╕╤Å",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨┐╨╡╤ç╨░╨╗╤î",
          "╨í╨╛╤å╨╕╨░╨╗╤î╨╜╤ï╨╣ ╤â╤à╨╛╨┤",
          "╨ƒ╨╛╤é╨╡╤Ç╤Å ╨┐╨░╨╝╤Å╤é╨╕"
        ],
        "optionsHy": [
          "╒ò╒ó╒╜╒Ñ╒╜╒½╒í╒╢╒Ñ╓Ç ╓ç ╒║╒í╓Ç╒┐╒í╒ñ╓Ç╒í╒╢╓ä╒╢╒Ñ╓Ç",
          "╒ä╒½╒í╒╡╒╢ ╒┐╒¡╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ì╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒░╒Ñ╒╝╒í╓ü╒╕╓é╒┤",
          "╒Ç╒½╒╖╒╕╒▓╒╕╓é╒⌐╒╡╒í╒╢ ╒»╒╕╓Ç╒╕╓é╒╜╒┐"
        ],
        "optionsAz": [
          "Obsesyonlar v╔Ö m╔Öcburiyy╔Ötl╔Ör",
          "Yaln─▒z k╔Öd╔Ör",
          "Sosial ├º╔Ökilm╔Ö",
          "Yadda┼ƒ itkisi"
        ],
        "explanationHy": "╒å╒Ñ╓Ç╒¡╒╕╓é╒¬╒╕╒▓ ╒┤╒┐╓ä╒Ñ╓Ç ╓ç ╒»╓Ç╒»╒╢╒╛╒╕╒▓ ╒╛╒í╓Ç╓ä╒í╒ú╒½╒«:",
        "questionRu": "╨₧╨Ü╨á ╨▓╨║╨╗╤Ä╤ç╨░╨╡╤é ╨▓ ╤ü╨╡╨▒╤Å:",
        "questionHy": "OCD-╒╢ ╒╢╒Ñ╓Ç╒í╒╝╒╕╓é╒┤ ╒º.",
        "explanationRu": "╨¥╨░╨▓╤Å╨╖╤ç╨╕╨▓╤ï╨╡ ╨╝╤ï╤ü╨╗╨╕ ╨╕ ╨┐╨╛╨▓╤é╨╛╤Ç╤Å╤Ä╤ë╨╡╨╡╤ü╤Å ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡.",
        "questionAz": "OKB daxildir:",
        "explanationAz": "─░ntruziv d├╝┼ƒ├╝nc╔Öl╔Ör v╔Ö t╔Ökrarlanan davran─▒┼ƒlar."
      },
      {
        "id": "q14-9",
        "question": "GAD is:",
        "questionKa": "ßâÆßâößâ£ßâößâáßâÉßâÜßâÿßâûßâößâæßâúßâÜßâÿ ßâ¿ßâñßâ¥ßâùßâòßâÿßâí ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÉ ßâÉßâáßâÿßâí:",
        "options": [
          "Specific fears",
          "Excessive worry about many things",
          "Panic attacks only",
          "Delusions"
        ],
        "optionsKa": [
          "ßâÖßâ¥ßâ£ßâÖßâáßâößâóßâúßâÜßâÿ ßâ¿ßâÿßâ¿ßâößâæßâÿ",
          "ßâæßâößâòßâá ßâáßâÉßâ¢ßâößâûßâö ßâûßâößâôßâ¢ßâößâóßâÿ ßâ¿ßâößâ¿ßâñßâ¥ßâùßâößâæßâÉ",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ₧ßâÉßâ£ßâÿßâÖßâÿßâí ßâ¿ßâößâóßâößâòßâößâæßâÿ",
          "ßâæßâ¥ßâôßâòßâößâæßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Chronic, excessive worry.",
        "explanationKa": "ßâÑßâáßâ¥ßâ£ßâÿßâÖßâúßâÜßâÿ, ßâûßâößâôßâ¢ßâößâóßâÿ ßâ¿ßâößâ¿ßâñßâ¥ßâùßâößâæßâÉ.",
        "optionsRu": [
          "╨Ü╨╛╨╜╨║╤Ç╨╡╤é╨╜╤ï╨╡ ╤ü╤é╤Ç╨░╤à╨╕",
          "╨º╤Ç╨╡╨╖╨╝╨╡╤Ç╨╜╨╛╨╡ ╨▒╨╡╤ü╨┐╨╛╨║╨╛╨╣╤ü╤é╨▓╨╛ ╨┐╨╛ ╨┐╨╛╨▓╨╛╨┤╤â ╨╝╨╜╨╛╨│╨╕╤à ╨▓╨╡╤ë╨╡╨╣",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨┐╨░╨╜╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨░╤é╨░╨║╨╕",
          "╨╖╨░╨▒╨╗╤â╨╢╨┤╨╡╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╒Ç╒í╒┐╒╕╓é╒» ╒╛╒í╒¡╒Ñ╓Ç",
          "╒ç╒í╒┐ ╒ó╒í╒╢╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç ╒╣╒í╓â╒í╒ª╒í╒╢╓ü ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╒½╒í╒╡╒╢ ╒¡╒╕╓é╒│╒í╒║╒½ ╒░╒í╓Ç╒▒╒í╒»╒╕╓é╒┤╒╢╒Ñ╓Ç",
          "╒è╒í╒┐╓Ç╒í╒╢╓ä╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "X├╝susi qorxular",
          "├çox ┼ƒeyl╔Ör ├╝├º├╝n h╔Öddind╔Ön art─▒q narahat├º─▒l─▒q",
          "Yaln─▒z panik atak",
          "Sanr─▒lar"
        ],
        "questionRu": "╨ô╨É╨ö ΓÇô ╤ì╤é╨╛:",
        "explanationRu": "╨Ñ╤Ç╨╛╨╜╨╕╤ç╨╡╤ü╨║╨╛╨╡, ╤ç╤Ç╨╡╨╖╨╝╨╡╤Ç╨╜╨╛╨╡ ╨▒╨╡╤ü╨┐╨╛╨║╨╛╨╣╤ü╤é╨▓╨╛.",
        "questionHy": "GAD-╒╢ ╒º.",
        "explanationHy": "╒ö╓Ç╒╕╒╢╒½╒», ╒╣╒í╓â╒½╓ü ╒í╒╛╒Ñ╒¼╒½ ╒í╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢:",
        "explanationAz": "Xroniki, h╔Öddind╔Ön art─▒q narahatl─▒q.",
        "questionAz": "GAD budur:"
      },
      {
        "id": "q14-10",
        "question": "Medical model views disorders as:",
        "questionKa": "ßâíßâÉßâ¢ßâößâôßâÿßâ¬ßâÿßâ£ßâ¥ ßâ¢ßâ¥ßâôßâößâÜßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâößâæßâí ßâÆßâÉßâ£ßâÿßâ«ßâÿßâÜßâÉßâòßâí ßâáßâ¥ßâÆßâ¥ßâáßâ¬:",
        "options": [
          "Moral failures",
          "Biological diseases",
          "Personal choices",
          "Spiritual"
        ],
        "optionsKa": [
          "ßâ¢ßâ¥ßâáßâÉßâÜßâúßâá ßâ¼ßâÉßâáßâúßâ¢ßâÉßâóßâößâæßâÜßâ¥ßâæßâÉßâí",
          "ßâæßâÿßâ¥ßâÜßâ¥ßâÆßâÿßâúßâá ßâôßâÉßâÉßâòßâÉßâôßâößâæßâößâæßâí",
          "ßâ₧ßâÿßâáßâÉßâô ßâÉßâáßâ⌐ßâößâòßâÉßâ£ßâí",
          "ßâíßâúßâÜßâÿßâößâáßâí"
        ],
        "correctIndex": 1,
        "explanation": "Disorders as biological illnesses.",
        "explanationKa": "ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâößâæßâÿ ßâáßâ¥ßâÆßâ¥ßâáßâ¬ ßâæßâÿßâ¥ßâÜßâ¥ßâÆßâÿßâúßâáßâÿ ßâôßâÉßâÉßâòßâÉßâôßâößâæßâößâæßâÿ.",
        "optionsRu": [
          "╨£╨╛╤Ç╨░╨╗╤î╨╜╤ï╨╡ ╨╜╨╡╤â╨┤╨░╤ç╨╕",
          "╨æ╨╕╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨╖╨░╨▒╨╛╨╗╨╡╨▓╨░╨╜╨╕╤Å",
          "╨¢╨╕╤ç╨╜╤ï╨╣ ╨▓╤ï╨▒╨╛╤Ç",
          "╨ö╤â╤à╨╛╨▓╨╜╤ï╨╣"
        ],
        "optionsHy": [
          "╘▓╒í╓Ç╒╕╒╡╒í╒»╒í╒╢ ╒▒╒í╒¡╒╕╒▓╒╕╓é╒┤╒╢╒Ñ╓Ç",
          "╘┐╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒í╒»╒í╒╢ ╒░╒½╒╛╒í╒╢╒ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
          "╘▒╒╢╒▒╒╢╒í╒»╒í╒╢ ╒¿╒╢╒┐╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç",
          "╒Ç╒╕╒ú╓ç╒╕╓Ç"
        ],
        "optionsAz": [
          "M╔Ön╔Övi u─ƒursuzluqlar",
          "Bioloji x╔Öst╔Ölikl╔Ör",
          "┼₧╔Öxsi se├ºiml╔Ör",
          "Ruhani"
        ],
        "questionRu": "╨£╨╡╨┤╨╕╤å╨╕╨╜╤ü╨║╨░╤Å ╨╝╨╛╨┤╨╡╨╗╤î ╤Ç╨░╤ü╤ü╨╝╨░╤é╤Ç╨╕╨▓╨░╨╡╤é ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░ ╨║╨░╨║:",
        "explanationRu": "╨á╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░ ╨║╨░╨║ ╨▒╨╕╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╨▒╨╛╨╗╨╡╨╖╨╜╨╕.",
        "questionHy": "╘▓╒¬╒╖╒»╒í╒»╒í╒╢ ╒┤╒╕╒ñ╒Ñ╒¼╒¿ ╒ñ╒½╒┐╒í╓Ç╒»╒╕╓é╒┤ ╒º ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿ ╒╕╓Ç╒║╒Ñ╒╜.",
        "explanationHy": "╘╜╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç╒¿ ╒╕╓Ç╒║╒Ñ╒╜ ╒»╒Ñ╒╢╒╜╒í╒ó╒í╒╢╒í╒»╒í╒╢ ╒░╒½╒╛╒í╒╢╒ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç.",
        "explanationAz": "Bioloji x╔Öst╔Ölikl╔Ör kimi poz─ƒunluqlar.",
        "questionAz": "Tibbi model pozuntulara a┼ƒa─ƒ─▒dak─▒ kimi bax─▒r:"
      }
    ],
    "titleHy": "╒Ç╒╕╒ú╒Ñ╒ó╒í╒╢╒í╒»╒í╒╢ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤╒╢╒Ñ╓Ç ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤ç╨╡╤ü╨║╨╕╨╡ ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░ ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleAz": "Psixoloji poz─ƒunluqlar - Viktorina"
  },
  {
    "id": "ch15-quiz",
    "chapterId": 15,
    "title": "Therapies ΓÇö Quiz",
    "titleKa": "ßâùßâößâáßâÉßâ₧ßâÿßâößâæßâÿ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q15-1",
        "question": "CBT focuses on:",
        "questionKa": "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâá-ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâúßâÜßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâößâæßâúßâÜßâÿßâÉ:",
        "options": [
          "Dreams",
          "Changing thoughts and behaviors",
          "Free association",
          "Medication"
        ],
        "optionsKa": [
          "ßâíßâÿßâûßâ¢ßâáßâößâæßâûßâö",
          "ßâÉßâûßâáßâößâæßâÿßâíßâÉ ßâôßâÉ ßâÑßâ¬ßâößâòßâößâæßâÿßâí ßâ¿ßâößâ¬ßâòßâÜßâÉßâûßâö",
          "ßâùßâÉßâòßâÿßâíßâúßâñßâÉßâÜ ßâÉßâíßâ¥ßâ¬ßâÿßâÉßâ¬ßâÿßâÉßâûßâö",
          "ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâößâæßâûßâö"
        ],
        "correctIndex": 1,
        "explanation": "Restructuring negative thoughts and behaviors.",
        "explanationKa": "ßâúßâÉßâáßâºßâ¥ßâñßâÿßâùßâÿ ßâÉßâûßâáßâößâæßâÿßâíßâÉ ßâôßâÉ ßâÑßâ¬ßâößâòßâößâæßâÿßâí ßâáßâößâíßâóßâáßâúßâÑßâóßâúßâáßâÿßâûßâÉßâ¬ßâÿßâÉ.",
        "optionsRu": [
          "╨£╨╡╤ç╤é╤ï",
          "╨ÿ╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╡ ╨╝╤ï╤ü╨╗╨╡╨╣ ╨╕ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Å",
          "╨í╨▓╨╛╨▒╨╛╨┤╨╜╨░╤Å ╨░╤ü╤ü╨╛╤å╨╕╨░╤å╨╕╤Å",
          "╨£╨╡╨┤╨╕╨║╨░╨╝╨╡╨╜╤é"
        ],
        "optionsHy": [
          "╘╡╓Ç╒í╒ª╒╢╒Ñ╓Ç",
          "╒ä╒┐╓ä╒Ñ╓Ç╒½ ╓ç ╒╛╒í╓Ç╓ä╒í╒ú╒«╒½ ╓â╒╕╓â╒╕╒¡╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘▒╒ª╒í╒┐ ╒┤╒½╒í╒╛╒╕╓Ç╒╕╓é╒┤",
          "╘┤╒Ñ╒▓╒╕╓Ç╒í╒╡╓ä"
        ],
        "optionsAz": [
          "X╔Öyallar",
          "D├╝┼ƒ├╝nc╔Öl╔Öri v╔Ö davran─▒┼ƒlar─▒ d╔Öyi┼ƒdirm╔Ök",
          "Pulsuz birl╔Ö┼ƒm╔Ö",
          "D╔Örman"
        ],
        "questionRu": "╨Ü╨ƒ╨ó ╤ä╨╛╨║╤â╤ü╨╕╤Ç╤â╨╡╤é╤ü╤Å ╨╜╨░:",
        "explanationHy": "╘▓╒í╓ü╒í╒╜╒í╒»╒í╒╢ ╒┤╒┐╓ä╒Ñ╓Ç╒½ ╓ç ╒╛╒í╓Ç╓ä╒í╒ú╒«╒½ ╒╛╒Ñ╓Ç╒í╒»╒í╒ª╒┤╒í╒╛╒╕╓Ç╒╕╓é╒┤:",
        "questionHy": "CBT-╒╢ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╒╢╒╕╓é╒┤ ╒º.",
        "explanationRu": "╨á╨╡╤ü╤é╤Ç╤â╨║╤é╤â╤Ç╨╕╨╖╨░╤å╨╕╤Å ╨╜╨╡╨│╨░╤é╨╕╨▓╨╜╤ï╤à ╨╝╤ï╤ü╨╗╨╡╨╣ ╨╕ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Å.",
        "explanationAz": "M╔Önfi d├╝┼ƒ├╝nc╔Öl╔Örin v╔Ö davran─▒┼ƒlar─▒n yenid╔Ön qurulmas─▒.",
        "questionAz": "CBT diqq╔Öt m╔Örk╔Özind╔Ödir:"
      },
      {
        "id": "q15-2",
        "question": "Systematic desensitization treats:",
        "questionKa": "ßâíßâÿßâíßâóßâößâ¢ßâÉßâóßâúßâáßâÿ ßâôßâößâíßâößâ£ßâíßâÿßâóßâÿßâûßâÉßâ¬ßâÿßâÉ ßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâæßâí:",
        "options": [
          "Depression",
          "Phobias via gradual exposure",
          "Schizophrenia",
          "ADHD"
        ],
        "optionsKa": [
          "ßâôßâößâ₧ßâáßâößâíßâÿßâÉßâí",
          "ßâñßâ¥ßâæßâÿßâößâæßâí ßâùßâÉßâ£ßâôßâÉßâùßâÉßâ£ßâ¥ßâæßâÿßâùßâÿ ßâûßâößâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâÿßâù",
          "ßâ¿ßâÿßâûßâ¥ßâñßâáßâößâ£ßâÿßâÉßâí",
          "ADHD-ßâí"
        ],
        "correctIndex": 1,
        "explanation": "Gradual exposure paired with relaxation.",
        "explanationKa": "ßâùßâÉßâ£ßâôßâÉßâùßâÉßâ£ßâ¥ßâæßâÿßâùßâÿ ßâûßâößâ¢ßâ¥ßâÑßâ¢ßâößâôßâößâæßâÉ ßâáßâößâÜßâÉßâÑßâíßâÉßâ¬ßâÿßâÉßâíßâùßâÉßâ£ ßâößâáßâùßâÉßâô.",
        "optionsRu": [
          "╨ö╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╤Å",
          "╨ñ╨╛╨▒╨╕╨╕ ╤ç╨╡╤Ç╨╡╨╖ ╨┐╨╛╤ü╤é╨╡╨┐╨╡╨╜╨╜╨╛╨╡ ╨▓╨╛╨╖╨┤╨╡╨╣╤ü╤é╨▓╨╕╨╡",
          "╨¿╨╕╨╖╨╛╤ä╤Ç╨╡╨╜╨╕╤Å",
          "╨í╨ö╨Æ╨ô"
        ],
        "optionsHy": [
          "╘┤╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í",
          "╒û╒╕╒ó╒½╒í╒╢╒Ñ╓Ç ╒í╒╜╒┐╒½╒│╒í╒╢╒í╒»╒í╒╢ ╒í╒ª╒ñ╒Ñ╓ü╒╕╓é╒⌐╒╡╒í╒╢ ╒┤╒½╒╗╒╕╓ü╒╕╒╛",
          "╒ç╒½╒ª╒╕╓å╓Ç╒Ñ╒╢╒½╒í",
          "ADHD"
        ],
        "optionsAz": [
          "Depressiya",
          "T╔Ödric╔Ön m╔Öruz qalma yolu il╔Ö fobiyalar",
          "┼₧izofreniya",
          "DEHB"
        ],
        "explanationHy": "╘▒╒╜╒┐╒½╒│╒í╒╢╒í╒ó╒í╓Ç ╒┤╒Ñ╓Ç╒»╒í╓ü╒╕╓é╒┤ ╒ª╒╕╓é╒ú╒í╒»╓ü╒╛╒í╒« ╒⌐╒╕╓é╒¼╒í╓ü╒┤╒í╒╢ ╒░╒Ñ╒┐:",
        "questionAz": "Sistematik desensitizasiya m├╝alic╔Ö edir:",
        "explanationAz": "T╔Ödric╔Ön if┼ƒa istirah╔Ötl╔Ö birl╔Ö┼ƒdirilir.",
        "questionHy": "╒Ç╒í╒┤╒í╒»╒í╓Ç╒ú╒╛╒í╒« ╒ñ╒Ñ╒ª╒Ñ╒╢╒╜╒½╒┐╒½╒ª╒í╓ü╒½╒í╒╢ ╒ó╒╕╓é╒¬╒╕╓é╒┤ ╒º.",
        "questionRu": "╨í╨╕╤ü╤é╨╡╨╝╨░╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╨┤╨╡╤ü╨╡╨╜╤ü╨╕╨▒╨╕╨╗╨╕╨╖╨░╤å╨╕╤Å ╨╗╨╡╤ç╨╕╤é:",
        "explanationRu": "╨ƒ╨╛╤ü╤é╨╡╨┐╨╡╨╜╨╜╨╛╨╡ ╨▓╨╛╨╖╨┤╨╡╨╣╤ü╤é╨▓╨╕╨╡ ╨▓ ╤ü╨╛╤ç╨╡╤é╨░╨╜╨╕╨╕ ╤ü ╤Ç╨░╤ü╤ü╨╗╨░╨▒╨╗╨╡╨╜╨╕╨╡╨╝."
      },
      {
        "id": "q15-3",
        "question": "Client-centered therapy by:",
        "questionKa": "ßâÖßâÜßâÿßâößâ£ßâóßâûßâö ßâ¥ßâáßâÿßâößâ£ßâóßâÿßâáßâößâæßâúßâÜßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ ßâ¿ßâößâÑßâ¢ßâ£ßâÉ:",
        "options": [
          "Freud",
          "Skinner",
          "Carl Rogers",
          "Beck"
        ],
        "optionsKa": [
          "ßâñßâáßâ¥ßâÿßâôßâ¢ßâÉ",
          "ßâíßâÖßâÿßâ£ßâößâáßâ¢ßâÉ",
          "ßâÖßâÉßâáßâÜ ßâáßâ¥ßâ»ßâößâáßâíßâ¢ßâÉ",
          "ßâæßâößâÖßâ¢ßâÉ"
        ],
        "correctIndex": 2,
        "explanation": "Rogers created person-centered therapy.",
        "explanationKa": "ßâáßâ¥ßâ»ßâößâáßâíßâ¢ßâÉ ßâ¿ßâößâÑßâ¢ßâ£ßâÉ ßâ₧ßâÿßâáßâ¥ßâòßâ£ßâößâæßâÉßâûßâö ßâ¥ßâáßâÿßâößâ£ßâóßâÿßâáßâößâæßâúßâÜßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ.",
        "optionsRu": [
          "╨ñ╤Ç╨╡╨╣╨┤",
          "╨í╨║╨╕╨╜╨╜╨╡╤Ç",
          "╨Ü╨░╤Ç╨╗ ╨á╨╛╨┤╨╢╨╡╤Ç╤ü",
          "╨æ╨╡╨║"
        ],
        "optionsHy": [
          "╒û╓Ç╒Ñ╒╡╒ñ╒¿",
          "╒ì╓ä╒½╒╢╒╢╒Ñ╓Ç",
          "╘┐╒í╓Ç╒¼ ╒î╒╕╒╗╒Ñ╓Ç╒╜",
          "╘▓╒Ñ╒»"
        ],
        "optionsAz": [
          "Freyd",
          "Skinner",
          "Karl Rocers",
          "Bek"
        ],
        "questionHy": "╒Ç╒í╒│╒í╒¡╒╕╓Ç╒ñ╒í╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í╒¥",
        "explanationHy": "╒î╒╕╒╗╒Ñ╓Ç╒╜╒¿ ╒╜╒┐╒Ñ╒▓╒«╒Ñ╓ü ╒í╒╢╒▒╒í╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í╓ë",
        "questionAz": "M├╝┼ƒt╔Öri m╔Örk╔Özli terapiya:",
        "explanationAz": "Rogers insan m╔Örk╔Özli terapiya yaratd─▒.",
        "questionRu": "╨Ü╨╗╨╕╨╡╨╜╤é-╤å╨╡╨╜╤é╤Ç╨╕╤Ç╨╛╨▓╨░╨╜╨╜╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å:",
        "explanationRu": "╨á╨╛╨┤╨╢╨╡╤Ç╤ü ╤ü╨╛╨╖╨┤╨░╨╗ ╨╗╨╕╤ç╨╜╨╛╤ü╤é╨╜╨╛-╨╛╤Ç╨╕╨╡╨╜╤é╨╕╤Ç╨╛╨▓╨░╨╜╨╜╤â╤Ä ╤é╨╡╤Ç╨░╨┐╨╕╤Ä."
      },
      {
        "id": "q15-4",
        "question": "SSRIs increase:",
        "questionKa": "SSRI-ßâößâæßâÿ ßâûßâáßâôßâÿßâí:",
        "options": [
          "Dopamine",
          "Serotonin availability",
          "All brain activity",
          "Neuron death"
        ],
        "optionsKa": [
          "ßâôßâ¥ßâñßâÉßâ¢ßâÿßâ£ßâí",
          "ßâíßâößâáßâ¥ßâóßâ¥ßâ£ßâÿßâ£ßâÿßâí ßâ«ßâößâÜßâ¢ßâÿßâíßâÉßâ¼ßâòßâôßâ¥ßâ¢ßâ¥ßâæßâÉßâí",
          "ßâóßâòßâÿßâ£ßâÿßâí ßâ¢ßâùßâößâÜ ßâÉßâÑßâóßâÿßâòßâ¥ßâæßâÉßâí",
          "ßâ£ßâößâÿßâáßâ¥ßâ£ßâößâæßâÿßâí ßâíßâÿßâÖßâòßâôßâÿßâÜßâí"
        ],
        "correctIndex": 1,
        "explanation": "SSRIs block serotonin reabsorption.",
        "explanationKa": "SSRI-ßâößâæßâÿ ßâæßâÜßâ¥ßâÖßâÉßâòßâí ßâíßâößâáßâ¥ßâóßâ¥ßâ£ßâÿßâ£ßâÿßâí ßâ«ßâößâÜßâÉßâ«ßâÉßâÜ ßâ¿ßâößâ¼ßâ¥ßâòßâÉßâí.",
        "optionsRu": [
          "╨ö╨╛╤ä╨░╨╝╨╕╨╜",
          "╨¥╨░╨╗╨╕╤ç╨╕╨╡ ╤ü╨╡╤Ç╨╛╤é╨╛╨╜╨╕╨╜╨░",
          "╨Æ╤ü╤Å ╨╝╨╛╨╖╨│╨╛╨▓╨░╤Å ╨┤╨╡╤Å╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╤î",
          "╨í╨╝╨╡╤Ç╤é╤î ╨╜╨╡╨╣╤Ç╨╛╨╜╨░"
        ],
        "optionsHy": [
          "╘┤╒╕╒║╒í╒┤╒½╒╢",
          "╒ì╒Ñ╓Ç╒╕╒┐╒╕╒╢╒½╒╢╒½ ╒í╒╝╒»╒í╒╡╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╒ê╓é╒▓╒Ñ╒▓╒½ ╒í╒┤╒ó╒╕╒▓╒╗ ╒ú╒╕╓Ç╒«╒╕╓é╒╢╒Ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╒å╒Ñ╒╡╓Ç╒╕╒╢╒½ ╒┤╒í╒░╒¿"
        ],
        "optionsAz": [
          "Dopamin",
          "Serotoninin m├╢vcudlu─ƒu",
          "B├╝t├╝n beyin f╔Öaliyy╔Öti",
          "Neyron ├╢l├╝m├╝"
        ],
        "questionRu": "╨í╨ÿ╨₧╨ù╨í ╤â╨▓╨╡╨╗╨╕╤ç╨╕╨▓╨░╤Ä╤é:",
        "questionHy": "SSRI-╒╢╒Ñ╓Ç╒½ ╒í╒╛╒Ñ╒¼╒í╓ü╒╕╓é╒┤.",
        "explanationRu": "╨í╨ÿ╨₧╨ù╨í ╨▒╨╗╨╛╨║╨╕╤Ç╤â╤Ä╤é ╤Ç╨╡╨░╨▒╤ü╨╛╤Ç╨▒╤å╨╕╤Ä ╤ü╨╡╤Ç╨╛╤é╨╛╨╜╨╕╨╜╨░.",
        "explanationHy": "SSRI-╒╢╒Ñ╓Ç╒¿ ╒í╓Ç╒ú╒Ñ╒¼╒í╓â╒í╒»╒╕╓é╒┤ ╒Ñ╒╢ ╒╜╒Ñ╓Ç╒╕╒┐╒╕╒╢╒½╒╢╒½ ╒╝╒Ñ╒í╒ó╒╜╒╕╓Ç╒ó╓ü╒½╒í╒╢:",
        "questionAz": "SSRI art─▒r:",
        "explanationAz": "SSRI-l╔Ör serotoninin reabsorbsiyas─▒n─▒ mane╔Ö t├╢r╔Ödir."
      },
      {
        "id": "q15-5",
        "question": "Free association is used in:",
        "questionKa": "ßâùßâÉßâòßâÿßâíßâúßâñßâÉßâÜßâÿ ßâÉßâíßâ¥ßâ¬ßâÿßâÉßâ¬ßâÿßâÉ ßâÆßâÉßâ¢ßâ¥ßâÿßâºßâößâ£ßâößâæßâÉ:",
        "options": [
          "CBT",
          "Behavioral",
          "Psychoanalysis",
          "Group therapy"
        ],
        "optionsKa": [
          "ßâÖßâ¥ßâÆßâ£ßâÿßâóßâúßâá-ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâúßâÜ ßâùßâößâáßâÉßâ₧ßâÿßâÉßâ¿ßâÿ",
          "ßâæßâÿßâ░ßâößâòßâÿßâ¥ßâáßâúßâÜßâ¿ßâÿ",
          "ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâûßâ¿ßâÿ",
          "ßâ»ßâÆßâúßâñßâúßâá ßâùßâößâáßâÉßâ₧ßâÿßâÉßâ¿ßâÿ"
        ],
        "correctIndex": 2,
        "explanation": "A psychoanalytic technique.",
        "explanationKa": "ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâóßâÿßâÖßâúßâáßâÿ ßâóßâößâÑßâ£ßâÿßâÖßâÉ.",
        "optionsRu": [
          "╨ù╨æ╨ó",
          "╨ƒ╨╛╨▓╨╡╨┤╨╡╨╜╤ç╨╡╤ü╨║╨╕╨╣",
          "╨ƒ╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╨╖",
          "╨ô╤Ç╤â╨┐╨┐╨╛╨▓╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å"
        ],
        "optionsHy": [
          "CBT",
          "╒Ä╒í╓Ç╓ä╒í╒ú╒«╒í╒╡╒½╒╢",
          "╒Ç╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘╜╒┤╒ó╒í╒╡╒½╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í"
        ],
        "optionsAz": [
          "CBT",
          "Davran─▒┼ƒ",
          "Psixoanaliz",
          "Qrup terapiyas─▒"
        ],
        "questionRu": "╨í╨▓╨╛╨▒╨╛╨┤╨╜╨░╤Å ╨░╤ü╤ü╨╛╤å╨╕╨░╤å╨╕╤Å ╨╕╤ü╨┐╨╛╨╗╤î╨╖╤â╨╡╤é╤ü╤Å ╨▓:",
        "questionHy": "╘▒╒ª╒í╒┐ ╒í╒╜╒╕╓ü╒½╒í╓ü╒½╒í╒╢ ╓à╒ú╒┐╒í╒ú╒╕╓Ç╒«╒╛╒╕╓é╒┤ ╒º ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╕╓é╒┤.",
        "questionAz": "Pulsuz birl╔Ö┼ƒm╔Ö a┼ƒa─ƒ─▒dak─▒ hallarda istifad╔Ö olunur:",
        "explanationHy": "╒Ç╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒í╒»╒í╒╢ ╒┐╒Ñ╒¡╒╢╒½╒»╒í.",
        "explanationRu": "╨ƒ╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╤é╨╕╤ç╨╡╤ü╨║╨░╤Å ╤é╨╡╤à╨╜╨╕╨║╨░.",
        "explanationAz": "Psixoanalitik texnika."
      },
      {
        "id": "q15-6",
        "question": "Group therapy offers:",
        "questionKa": "ßâ»ßâÆßâúßâñßâúßâáßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ ßâíßâùßâÉßâòßâÉßâûßâ¥ßâæßâí:",
        "options": [
          "Lower cost only",
          "Shared experiences and skills practice",
          "Faster meds",
          "Solitary healing"
        ],
        "optionsKa": [
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâôßâÉßâæßâÉßâÜ ßâñßâÉßâíßâí",
          "ßâÆßâÉßâûßâÿßâÉßâáßâößâæßâúßâÜ ßâÆßâÉßâ¢ßâ¥ßâ¬ßâôßâÿßâÜßâößâæßâÉßâí ßâôßâÉ ßâúßâ£ßâÉßâáßâößâæßâÿßâí ßâ₧ßâáßâÉßâÑßâóßâÿßâÖßâÉßâí",
          "ßâíßâ¼ßâáßâÉßâñ ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâößâæßâí",
          "ßâ¢ßâÉßâáßâóßâ¥ßâ«ßâößâÜßâÉ ßâÆßâÉßâ£ßâÖßâúßâáßâ£ßâößâæßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Peer support and social practice.",
        "explanationKa": "ßâùßâÉßâ£ßâÉßâóßâ¥ßâÜßâùßâÉ ßâ¢ßâ«ßâÉßâáßâôßâÉßâ¡ßâößâáßâÉ ßâôßâÉ ßâíßâ¥ßâ¬ßâÿßâÉßâÜßâúßâáßâÿ ßâ₧ßâáßâÉßâÑßâóßâÿßâÖßâÉ.",
        "optionsRu": [
          "╨ó╨╛╨╗╤î╨║╨╛ ╨▒╨╛╨╗╨╡╨╡ ╨╜╨╕╨╖╨║╨░╤Å ╤ü╤é╨╛╨╕╨╝╨╛╤ü╤é╤î",
          "╨₧╨▒╨╝╨╡╨╜ ╨╛╨┐╤ï╤é╨╛╨╝ ╨╕ ╨┐╤Ç╨░╨║╤é╨╕╨║╨░ ╨╜╨░╨▓╤ï╨║╨╛╨▓",
          "╨æ╤ï╤ü╤é╤Ç╤ï╨╡ ╨╗╨╡╨║╨░╤Ç╤ü╤é╨▓╨░",
          "╨₧╨┤╨╕╨╜╨╛╤ç╨╜╨╛╨╡ ╨╕╤ü╤å╨╡╨╗╨╡╨╜╨╕╨╡"
        ],
        "optionsHy": [
          "╒ä╒½╒í╒╡╒╢ ╒í╒╛╒Ñ╒¼╒½ ╓ü╒í╒«╓Ç ╒í╓Ç╒¬╒Ñ╓ä",
          "╒Ç╒í╒┤╒í╒┐╒Ñ╒▓ ╓â╒╕╓Ç╒▒╒½ ╓ç ╒░╒┤╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒║╓Ç╒í╒»╒┐╒½╒»╒í",
          "╘▒╒╛╒Ñ╒¼╒½ ╒í╓Ç╒í╒ú ╒ñ╒Ñ╒▓╒í╒┤╒½╒╗╒╕╓ü╒╢╒Ñ╓Ç",
          "╒ä╒½╒í╒╡╒╢╒í╒» ╒í╒║╒í╓ä╒½╒╢╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Yaln─▒z a┼ƒa─ƒ─▒ qiym╔Öt",
          "Payla┼ƒ─▒lan t╔Öcr├╝b╔Ö v╔Ö bacar─▒qlar",
          "Daha s├╝r╔Ötli d╔Örmanlar",
          "T╔Ök ┼ƒ╔Öfa"
        ],
        "explanationRu": "╨ƒ╨╛╨┤╨┤╨╡╤Ç╨╢╨║╨░ ╨║╨╛╨╗╨╗╨╡╨│ ╨╕ ╤ü╨╛╤å╨╕╨░╨╗╤î╨╜╨░╤Å ╨┐╤Ç╨░╨║╤é╨╕╨║╨░.",
        "questionRu": "╨ô╤Ç╤â╨┐╨┐╨╛╨▓╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å ╨┐╤Ç╨╡╨┤╨╗╨░╨│╨░╨╡╤é:",
        "questionAz": "Qrup terapiyas─▒ t╔Öklif edir:",
        "explanationHy": "╘│╒╕╓Ç╒«╒¿╒╢╒»╒Ñ╓Ç╒╢╒Ñ╓Ç╒½ ╒í╒╗╒í╒»╓ü╒╕╓é╒⌐╒╡╒╕╓é╒╢ ╓ç ╒╜╒╕╓ü╒½╒í╒¼╒í╒»╒í╒╢ ╒║╓Ç╒í╒»╒┐╒½╒»╒í:",
        "questionHy": "╘╜╒┤╒ó╒í╒╡╒½╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í╒╢ ╒í╒╝╒í╒╗╒í╓Ç╒»╒╕╓é╒┤ ╒º.",
        "explanationAz": "H╔Ömya┼ƒ─▒d d╔Öst╔Öyi v╔Ö sosial t╔Öcr├╝b╔Ö."
      },
      {
        "id": "q15-7",
        "question": "Exposure therapy based on:",
        "questionKa": "ßâößâÑßâíßâ₧ßâ¥ßâûßâÿßâ¬ßâÿßâúßâáßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâÉ ßâôßâÉßâñßâúßâ½ßâ£ßâößâæßâúßâÜßâÿßâÉ:",
        "options": [
          "Psychoanalysis",
          "Classical conditioning extinction",
          "Humanism",
          "Trait theory"
        ],
        "optionsKa": [
          "ßâñßâíßâÿßâÑßâ¥ßâÉßâ£ßâÉßâÜßâÿßâûßâûßâö",
          "ßâÖßâÜßâÉßâíßâÿßâÖßâúßâáßâÿ ßâÖßâ¥ßâ£ßâôßâÿßâ¬ßâÿßâ¥ßâ£ßâÿßâáßâößâæßâÿßâí ßâ⌐ßâÉßâÑßâáßâ¥ßâæßâÉßâûßâö",
          "ßâ░ßâúßâ¢ßâÉßâ£ßâÿßâûßâ¢ßâûßâö",
          "ßâùßâòßâÿßâíßâößâæßâÉßâùßâÉ ßâùßâößâ¥ßâáßâÿßâÉßâûßâö"
        ],
        "correctIndex": 1,
        "explanation": "Extinction of fear response.",
        "explanationKa": "ßâ¿ßâÿßâ¿ßâÿßâí ßâáßâößâÉßâÑßâ¬ßâÿßâÿßâí ßâ⌐ßâÉßâÑßâáßâ¥ßâæßâÉ.",
        "optionsRu": [
          "╨ƒ╤ü╨╕╤à╨╛╨░╨╜╨░╨╗╨╕╨╖",
          "╨Ü╨╗╨░╤ü╤ü╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨║╨╛╨╜╨┤╨╕╤å╨╕╨╛╨╜╨╜╨╛╨╡ ╨▓╤ï╨╝╨╕╤Ç╨░╨╜╨╕╨╡",
          "╨ô╤â╨╝╨░╨╜╨╕╨╖╨╝",
          "╨ó╨╡╨╛╤Ç╨╕╤Å ╤ç╨╡╤Ç╤é"
        ],
        "optionsHy": [
          "╒Ç╒╕╒ú╒Ñ╒╛╒Ñ╓Ç╒¼╒╕╓é╒«╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘┤╒í╒╜╒í╒»╒í╒╢ ╒»╒╕╒╢╒ñ╒½╓ü╒½╒╕╒╢╒Ñ╓Ç╒╢╒Ñ╓Ç╒½ ╒╕╒╣╒╢╒╣╒í╓ü╒╕╓é╒┤",
          "╒Ç╒╕╓é╒┤╒í╒╢╒½╒ª╒┤",
          "╒Ç╒í╒┐╒»╒í╒╢╒½╒╖╒╢╒Ñ╓Ç╒½ ╒┐╒Ñ╒╜╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "Psixoanaliz",
          "Klassik kondisionerin yox olmas─▒",
          "Humanizm",
          "X├╝susiyy╔Öt n╔Öz╔Öriyy╔Ösi"
        ],
        "explanationRu": "╨ú╨│╨░╤ü╨░╨╜╨╕╨╡ ╤Ç╨╡╨░╨║╤å╨╕╨╕ ╤ü╤é╤Ç╨░╤à╨░.",
        "questionRu": "╨¡╨║╤ü╨┐╨╛╨╖╨╕╤å╨╕╨╛╨╜╨╜╨░╤Å ╤é╨╡╤Ç╨░╨┐╨╕╤Å, ╨╛╤ü╨╜╨╛╨▓╨░╨╜╨╜╨░╤Å ╨╜╨░:",
        "explanationHy": "╒Ä╒í╒¡╒½ ╒í╓Ç╒▒╒í╒ú╒í╒╢╓ä╒½ ╒╛╒Ñ╓Ç╒í╓ü╒╕╓é╒┤.",
        "questionHy": "╘╖╓ä╒╜╒║╒╕╒ª╒½╓ü╒½╒╕╒╢ ╒⌐╒Ñ╓Ç╒í╒║╒½╒í╒¥ ╒░╒½╒┤╒╢╒╛╒í╒«.",
        "questionAz": "Ekspozisiya terapiyas─▒na ╔Ösaslan─▒r:",
        "explanationAz": "Qorxu reaksiyas─▒n─▒n yox olmas─▒."
      },
      {
        "id": "q15-8",
        "question": "Lithium treats:",
        "questionKa": "ßâÜßâÿßâùßâÿßâúßâ¢ßâÿ ßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâæßâí:",
        "options": [
          "Depression",
          "Anxiety",
          "Bipolar disorder",
          "Schizophrenia"
        ],
        "optionsKa": [
          "ßâôßâößâ₧ßâáßâößâíßâÿßâÉßâí",
          "ßâ¿ßâñßâ¥ßâùßâòßâÉßâí",
          "ßâæßâÿßâ₧ßâ¥ßâÜßâÉßâáßâúßâÜ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÉßâí",
          "ßâ¿ßâÿßâûßâ¥ßâñßâáßâößâ£ßâÿßâÉßâí"
        ],
        "correctIndex": 2,
        "explanation": "First-line for bipolar disorder.",
        "explanationKa": "ßâ₧ßâÿßâáßâòßâößâÜßâÿ ßâáßâÿßâÆßâÿßâí ßâ¢ßâÖßâúßâáßâ£ßâÉßâÜßâ¥ßâæßâÉ ßâæßâÿßâ₧ßâ¥ßâÜßâÉßâáßâúßâÜßâÿ ßâÉßâ¿ßâÜßâÿßâÜßâ¥ßâæßâÿßâíßâùßâòßâÿßâí.",
        "optionsRu": [
          "╨ö╨╡╨┐╤Ç╨╡╤ü╤ü╨╕╤Å",
          "╨æ╨╡╤ü╨┐╨╛╨║╨╛╨╣╤ü╤é╨▓╨╛",
          "╨æ╨╕╨┐╨╛╨╗╤Å╤Ç╨╜╨╛╨╡ ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨╛",
          "╨¿╨╕╨╖╨╛╤ä╤Ç╨╡╨╜╨╕╤Å"
        ],
        "optionsHy": [
          "╘┤╒Ñ╒║╓Ç╒Ñ╒╜╒½╒í",
          "╘▒╒╢╒░╒í╒╢╒ú╒╜╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╘╡╓Ç╒»╒ó╓ç╒Ñ╒╝ ╒¡╒í╒╢╒ú╒í╓Ç╒╕╓é╒┤",
          "╒ç╒½╒ª╒╕╓å╓Ç╒Ñ╒╢╒½╒í"
        ],
        "optionsAz": [
          "Depressiya",
          "Narahatl─▒q",
          "Bipolyar poz─ƒunluq",
          "┼₧izofreniya"
        ],
        "explanationRu": "╨ƒ╨╡╤Ç╨▓╨░╤Å ╨╗╨╕╨╜╨╕╤Å ╨╗╨╡╤ç╨╡╨╜╨╕╤Å ╨▒╨╕╨┐╨╛╨╗╤Å╤Ç╨╜╨╛╨│╨╛ ╤Ç╨░╤ü╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨░.",
        "explanationHy": "╘▒╒╝╒í╒╗╒½╒╢ ╒ú╒½╒« ╒Ñ╓Ç╒»╒ó╓ç╒Ñ╒╝ ╒¡╒í╒╢╒ú╒í╓Ç╒┤╒í╒╢ ╒░╒í╒┤╒í╓Ç.",
        "questionHy": "╘╝╒½╒⌐╒½╒╕╓é╒┤╒╕╒╛ ╒ó╒╕╓é╒¬╒╕╓é╒┤.",
        "questionRu": "╨¢╨╕╤é╨╕╨╣ ╨╗╨╡╤ç╨╕╤é:",
        "questionAz": "Litium m├╝alic╔Ö edir:",
        "explanationAz": "Bipolyar poz─ƒunluq ├╝├º├╝n birinci s─▒ra."
      },
      {
        "id": "q15-9",
        "question": "Eclectic approach:",
        "questionKa": "ßâößâÖßâÜßâößâÑßâóßâÿßâÖßâúßâáßâÿ ßâ¢ßâÿßâôßâÆßâ¥ßâ¢ßâÉ:",
        "options": [
          "One method",
          "Integrating various techniques",
          "Rejecting evidence",
          "Only medication"
        ],
        "optionsKa": [
          "ßâößâáßâùßâÿ ßâ¢ßâößâùßâ¥ßâôßâÿ",
          "ßâíßâ«ßâòßâÉßâôßâÉßâíßâ«ßâòßâÉ ßâóßâößâÑßâ£ßâÿßâÖßâÿßâí ßâÿßâ£ßâóßâößâÆßâáßâÉßâ¬ßâÿßâÉ",
          "ßâ¢ßâóßâÖßâÿßâ¬ßâößâæßâúßâÜßâößâæßâößâæßâÿßâí ßâúßâÉßâáßâºßâ¥ßâñßâÉ",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâößâæßâÿ"
        ],
        "correctIndex": 1,
        "explanation": "Combining different techniques.",
        "explanationKa": "ßâíßâ«ßâòßâÉßâôßâÉßâíßâ«ßâòßâÉ ßâóßâößâÑßâ£ßâÿßâÖßâÿßâí ßâÖßâ¥ßâ¢ßâæßâÿßâ£ßâÉßâ¬ßâÿßâÉ.",
        "optionsRu": [
          "╨₧╨┤╨╕╨╜ ╨╝╨╡╤é╨╛╨┤",
          "╨ÿ╨╜╤é╨╡╨│╤Ç╨░╤å╨╕╤Å ╤Ç╨░╨╖╨╗╨╕╤ç╨╜╤ï╤à ╤é╨╡╤à╨╜╨╕╨║",
          "╨₧╤é╨▓╨╡╤Ç╨╢╨╡╨╜╨╕╨╡ ╨┤╨╛╨║╨░╨╖╨░╤é╨╡╨╗╤î╤ü╤é╨▓",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨╗╨╡╨║╨░╤Ç╤ü╤é╨▓╨░"
        ],
        "optionsHy": [
          "╒ä╒Ñ╒» ╒┤╒Ñ╒⌐╒╕╒ñ",
          "╒Å╒í╓Ç╒ó╒Ñ╓Ç ╒┐╒Ñ╒¡╒╢╒½╒»╒í╒╡╒½ ╒½╒╢╒┐╒Ñ╒ú╓Ç╒╕╓é╒┤",
          "╘▒╒║╒í╓ü╒╕╓é╒╡╓ü╒╢╒Ñ╓Ç╒½ ╒┤╒Ñ╓Ç╒¬╒╕╓é╒┤",
          "╒ä╒½╒í╒╡╒╢ ╒ñ╒Ñ╒▓╒╕╓Ç╒í╒╡╓ä"
        ],
        "optionsAz": [
          "Bir ├╝sul",
          "M├╝xt╔Ölif texnikalar─▒n inteqrasiyas─▒",
          "S├╝butlar─▒ r╔Ödd etm╔Ök",
          "Yaln─▒z d╔Örman"
        ],
        "explanationRu": "╨í╨╛╤ç╨╡╤é╨░╨╜╨╕╨╡ ╤Ç╨░╨╖╨╜╤ï╤à ╤é╨╡╤à╨╜╨╕╨║.",
        "questionHy": "╘╖╒»╒¼╒Ñ╒»╒┐╒½╒» ╒┤╒╕╒┐╒Ñ╓ü╒╕╓é╒┤.",
        "questionRu": "╨¡╨║╨╗╨╡╨║╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╨┐╨╛╨┤╤à╨╛╨┤:",
        "explanationHy": "╒Å╒í╓Ç╒ó╒Ñ╓Ç ╒┐╒Ñ╒¡╒╢╒½╒»╒í╒╡╒½ ╒░╒í╒┤╒í╒ñ╓Ç╒╕╓é╒┤.",
        "explanationAz": "M├╝xt╔Ölif texnikalar─▒n birl╔Ö┼ƒm╔Ösi.",
        "questionAz": "Eklektik yana┼ƒma:"
      },
      {
        "id": "q15-10",
        "question": "Therapy works best when:",
        "questionKa": "ßâùßâößâáßâÉßâ₧ßâÿßâÉ ßâíßâÉßâúßâÖßâößâùßâößâíßâ¥ßâô ßâ¢ßâúßâ¿ßâÉßâ¥ßâæßâí, ßâáßâ¥ßâ¬ßâÉ:",
        "options": [
          "One session",
          "Strong therapeutic alliance",
          "Client passive",
          "No diagnosis"
        ],
        "optionsKa": [
          "ßâößâáßâùßâÿ ßâíßâößâíßâÿßâÉ",
          "ßâ½ßâÜßâÿßâößâáßâÿ ßâùßâößâáßâÉßâ₧ßâÿßâúßâÜßâÿ ßâÉßâÜßâÿßâÉßâ£ßâíßâÿ",
          "ßâÖßâÜßâÿßâößâ£ßâóßâÿ ßâ₧ßâÉßâíßâÿßâúßâáßâÿßâÉ",
          "ßâôßâÿßâÉßâÆßâ£ßâ¥ßâûßâÿ ßâÉßâá ßâÉßâáßâÿßâí"
        ],
        "correctIndex": 1,
        "explanation": "The relationship is the strongest predictor.",
        "explanationKa": "ßâúßâáßâùßâÿßâößâáßâùßâ¥ßâæßâÉ ßâºßâòßâößâÜßâÉßâûßâö ßâ½ßâÜßâÿßâößâáßâÿ ßâ₧ßâáßâößâôßâÿßâÑßâóßâ¥ßâáßâÿßâÉ.",
        "optionsRu": [
          "╨₧╨┤╨╕╨╜ ╤ü╨╡╨░╨╜╤ü",
          "╨í╨╕╨╗╤î╨╜╤ï╨╣ ╤é╨╡╤Ç╨░╨┐╨╡╨▓╤é╨╕╤ç╨╡╤ü╨║╨╕╨╣ ╨░╨╗╤î╤Å╨╜╤ü",
          "╨ƒ╨░╤ü╤ü╨╕╨▓╨╜╤ï╨╣ ╨║╨╗╨╕╨╡╨╜╤é",
          "╨¥╨╡╤é ╨┤╨╕╨░╨│╨╜╨╛╨╖╨░"
        ],
        "optionsHy": [
          "╒ä╒Ñ╒» ╒╢╒½╒╜╒┐",
          "╒ê╓é╒¬╒Ñ╒▓ ╒⌐╒Ñ╓Ç╒í╒║╓ç╒┐╒½╒» ╒ñ╒í╒╖╒½╒╢╓ä",
          "╒Ç╒í╒│╒í╒¡╒╕╓Ç╒ñ╒½ ╒║╒í╒╜╒½╒╛",
          "╒ê╒╣ ╒┤╒½ ╒í╒¡╒┐╒╕╓Ç╒╕╒╖╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Bir seans",
          "G├╝cl├╝ terapevtik ittifaq",
          "M├╝┼ƒt╔Öri passiv",
          "Diaqnoz yoxdur"
        ],
        "questionHy": "╘╣╒Ñ╓Ç╒í╒║╒½╒í╒╢ ╒¼╒í╒╛╒í╒ú╒╕╓é╒╡╒╢╒╜ ╒í╒╖╒¡╒í╒┐╒╕╓é╒┤ ╒º, ╒Ñ╓Ç╒ó.",
        "questionRu": "╨ó╨╡╤Ç╨░╨┐╨╕╤Å ╤Ç╨░╨▒╨╛╤é╨░╨╡╤é ╨╗╤â╤ç╤ê╨╡ ╨▓╤ü╨╡╨│╨╛, ╨║╨╛╨│╨┤╨░:",
        "questionAz": "Terapiya a┼ƒa─ƒ─▒dak─▒ hallarda ╔Ön yax┼ƒ─▒ n╔Ötic╔Ö verir:",
        "explanationHy": "╒Ç╒í╓Ç╒í╒ó╒Ñ╓Ç╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒¿ ╒í╒┤╒Ñ╒╢╒í╒╕╓é╒¬╒Ñ╒▓ ╒»╒í╒╢╒¡╒í╒┐╒Ñ╒╜╒╕╓é╒┤╒╢ ╒Ñ╒╢:",
        "explanationRu": "╨₧╤é╨╜╨╛╤ê╨╡╨╜╨╕╤Å ΓÇô ╤ü╨░╨╝╤ï╨╣ ╤ü╨╕╨╗╤î╨╜╤ï╨╣ ╨┐╤Ç╨╡╨┤╤ü╨║╨░╨╖╨░╤é╨╡╨╗╤î.",
        "explanationAz": "╞Ålaq╔Ö ╔Ön g├╝cl├╝ proqnozla┼ƒd─▒r─▒c─▒d─▒r."
      }
    ],
    "titleRu": "╨ó╨╡╤Ç╨░╨┐╨╕╤Å ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleHy": "╘╣╒Ñ╓Ç╒í╒║╒½╒í╒╢╒Ñ╓Ç ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleAz": "Terapiyalar - Viktorina"
  },
  {
    "id": "ch16-quiz",
    "chapterId": 16,
    "title": "Applied Psychology ΓÇö Quiz",
    "titleKa": "ßâÆßâÉßâ¢ßâ¥ßâºßâößâ£ßâößâæßâÿßâùßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ΓÇö ßâòßâÿßâÑßâóßâ¥ßâáßâÿßâ£ßâÉ",
    "questions": [
      {
        "id": "q16-1",
        "question": "I/O psychology applies principles to:",
        "questionKa": "ßâ¥ßâáßâÆßâÉßâ£ßâÿßâûßâÉßâ¬ßâÿßâúßâÜßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâ₧ßâáßâÿßâ£ßâ¬ßâÿßâ₧ßâößâæßâí ßâÿßâºßâößâ£ßâößâæßâí:",
        "options": [
          "Hospitals",
          "The workplace",
          "Animals",
          "Children only"
        ],
        "optionsKa": [
          "ßâíßâÉßâÉßâòßâÉßâôßâ¢ßâºßâ¥ßâñßâ¥ßâößâæßâ¿ßâÿ",
          "ßâíßâÉßâ¢ßâúßâ¿ßâÉßâ¥ ßâÉßâôßâÆßâÿßâÜßâûßâö",
          "ßâ¬ßâ«ßâ¥ßâòßâößâÜßâößâæßâûßâö",
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâæßâÉßâòßâ¿ßâòßâößâæßâûßâö"
        ],
        "correctIndex": 1,
        "explanation": "Industrial-Organizational psychology focuses on the workplace.",
        "explanationKa": "ßâ¥ßâáßâÆßâÉßâ£ßâÿßâûßâÉßâ¬ßâÿßâúßâÜßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâößâæßâúßâÜßâÿßâÉ ßâíßâÉßâ¢ßâúßâ¿ßâÉßâ¥ ßâÉßâôßâÆßâÿßâÜßâûßâö.",
        "optionsRu": [
          "╨æ╨╛╨╗╤î╨╜╨╕╤å╤ï",
          "╨á╨░╨▒╨╛╤ç╨╡╨╡ ╨╝╨╡╤ü╤é╨╛",
          "╨û╨╕╨▓╨╛╤é╨╜╤ï╨╡",
          "╨ó╨╛╨╗╤î╨║╨╛ ╨┤╨╡╤é╨╕"
        ],
        "optionsHy": [
          "╒Ç╒½╒╛╒í╒╢╒ñ╒í╒╢╒╕╓ü╒╢╒Ñ╓Ç",
          "╘▒╒╖╒¡╒í╒┐╒í╒╛╒í╒╡╓Ç╒¿",
          "╘┐╒Ñ╒╢╒ñ╒í╒╢╒½╒╢╒Ñ╓Ç",
          "╒ä╒½╒í╒╡╒╢ ╒Ñ╓Ç╒Ñ╒¡╒í╒╢╒Ñ╓Ç"
        ],
        "optionsAz": [
          "X╔Öst╔Öxanalar",
          "─░┼ƒ yeri",
          "Heyvanlar",
          "Yaln─▒z u┼ƒaqlar"
        ],
        "explanationHy": "╘▒╓Ç╒ñ╒╡╒╕╓é╒╢╒í╒ó╒Ñ╓Ç╒í╒»╒í╒╢-╒»╒í╒ª╒┤╒í╒»╒Ñ╓Ç╒║╒╣╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╒╢╒╕╓é╒┤ ╒º ╒í╒╖╒¡╒í╒┐╒í╒╛╒í╒╡╓Ç╒½ ╒╛╓Ç╒í:",
        "questionHy": "I/O ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒½╓Ç╒í╒╝╒╕╓é╒┤ ╒º ╒╜╒»╒ª╒ó╒╕╓é╒╢╓ä╒╢╒Ñ╓Ç╒¥",
        "explanationRu": "╨ƒ╤Ç╨╛╨╝╤ï╤ê╨╗╨╡╨╜╨╜╨╛-╨╛╤Ç╨│╨░╨╜╨╕╨╖╨░╤å╨╕╨╛╨╜╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╤ä╨╛╨║╤â╤ü╨╕╤Ç╤â╨╡╤é╤ü╤Å ╨╜╨░ ╤Ç╨░╨▒╨╛╤ç╨╡╨╝ ╨╝╨╡╤ü╤é╨╡.",
        "questionRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╨▓╨▓╨╛╨┤╨░-╨▓╤ï╨▓╨╛╨┤╨░ ╨┐╤Ç╨╕╨╝╨╡╨╜╤Å╨╡╤é ╨┐╤Ç╨╕╨╜╤å╨╕╨┐╤ï ╨║:",
        "questionAz": "I/O psixologiyas─▒ prinsipl╔Öri a┼ƒa─ƒ─▒dak─▒lara t╔Ötbiq edir:",
        "explanationAz": "S╔Önaye-t╔Ö┼ƒkilati psixologiya i┼ƒ yerin╔Ö diqq╔Öt yetirir."
      },
      {
        "id": "q16-2",
        "question": "Growth mindset was proposed by:",
        "questionKa": "ßâûßâáßâôßâÿßâí ßâÉßâûßâáßâ¥ßâòßâ£ßâößâæßâÉ ßâ¿ßâößâ¢ßâ¥ßâùßâÉßâòßâÉßâûßâößâæßâúßâÜßâÿßâÉ:",
        "options": [
          "Seligman",
          "Csikszentmihalyi",
          "Carol Dweck",
          "Duckworth"
        ],
        "optionsKa": [
          "ßâíßâößâÜßâÿßâÆßâ¢ßâÉßâ£ßâÿßâí ßâ¢ßâÿßâößâá",
          "ßâ⌐ßâÿßâÑßâíßâößâ£ßâóßâ¢ßâÿßâ░ßâÉßâÿßâí ßâ¢ßâÿßâößâá",
          "ßâÖßâößâáßâ¥ßâÜ ßâôßâúßâößâÖßâÿßâí ßâ¢ßâÿßâößâá",
          "ßâôßâÉßâÖßâúßâ¥ßâáßâùßâÿßâí ßâ¢ßâÿßâößâá"
        ],
        "correctIndex": 2,
        "explanation": "Dweck showed believing intelligence is malleable improves performance.",
        "explanationKa": "ßâôßâúßâößâÖßâ¢ßâÉ ßâÉßâ⌐ßâòßâößâ£ßâÉ, ßâáßâ¥ßâ¢ ßâÿßâ£ßâóßâößâÜßâößâÑßâóßâÿßâí ßâ¢ßâ¥ßâÑßâ£ßâÿßâÜßâ¥ßâæßâÿßâí ßâáßâ¼ßâ¢ßâößâ£ßâÉ ßâÉßâúßâ¢ßâ»ßâ¥ßâæßâößâíßâößâæßâí ßâ¿ßâößâíßâáßâúßâÜßâößâæßâÉßâí.",
        "optionsRu": [
          "╨í╨╡╨╗╨╕╨│╨╝╨░╨╜",
          "╨º╨╕╨║╤ü╨╡╨╜╤é╨╝╨╕╤à╨░╨╣╨╕",
          "╨Ü╤ì╤Ç╨╛╨╗ ╨ö╨▓╨╡╨║",
          "╨ö╨░╨║╨▓╨╛╤Ç╤é"
        ],
        "optionsHy": [
          "╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢",
          "╒ë╒½╒»╒╜╒ª╒Ñ╒╢╒┐╒┤╒½╒░╒í╒¼╒½",
          "╒ö╒Ñ╓Ç╒╕╒¼ ╘┤╒╕╓é╒Ñ╓ä",
          "╘┤╒í╓ä╒╛╒╕╓Ç╒⌐"
        ],
        "optionsAz": [
          "Seliqman",
          "Csikszentmihalyi",
          "Carol Dweck",
          "Duckworth"
        ],
        "explanationHy": "Dweck-╒¿ ╓ü╒╕╓é╒╡╓ü ╒┐╒╛╒Ñ╓ü, ╒╕╓Ç ╒░╒í╒╛╒í╒┐╒í╒¼╒¿, ╒╕╓Ç ╒ó╒í╒╢╒í╒»╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒│╒»╒╕╓é╒╢ ╒º, ╒ó╒í╓Ç╒Ñ╒¼╒í╒╛╒╕╓é╒┤ ╒º ╒»╒í╒┐╒í╓Ç╒╕╓é╒┤╒¿:",
        "questionRu": "╨£╤ï╤ê╨╗╨╡╨╜╨╕╨╡ ╤Ç╨╛╤ü╤é╨░ ╨▒╤ï╨╗╨╛ ╨┐╤Ç╨╡╨┤╨╗╨╛╨╢╨╡╨╜╨╛:",
        "questionHy": "╘▒╒│╒½ ╒┤╒┐╒í╒«╒Ñ╒¼╒í╒»╒Ñ╓Ç╒║╒╢ ╒í╒╝╒í╒╗╒í╓Ç╒»╒╛╒Ñ╒¼ ╒º.",
        "explanationRu": "╨ö╨▓╨╡╨║ ╨┐╨╛╨║╨░╨╖╨░╨╗╨░, ╤ç╤é╨╛ ╨▓╨╡╤Ç╨░ ╨▓ ╨┐╨╛╨┤╨░╤é╨╗╨╕╨▓╨╛╤ü╤é╤î ╨╕╨╜╤é╨╡╨╗╨╗╨╡╨║╤é╨░ ╨┐╨╛╨▓╤ï╤ê╨░╨╡╤é ╨┐╤Ç╨╛╨╕╨╖╨▓╨╛╨┤╨╕╤é╨╡╨╗╤î╨╜╨╛╤ü╤é╤î.",
        "explanationAz": "Dweck, z╔Ökan─▒n ├ºevik oldu─ƒuna inanma─ƒ─▒n performans─▒ yax┼ƒ─▒la┼ƒd─▒rd─▒─ƒ─▒n─▒ g├╢st╔Ördi.",
        "questionAz": "B├╢y├╝m╔Ö zehniyy╔Öti t╔Öklif etdi:"
      },
      {
        "id": "q16-3",
        "question": "Positive psychology focuses on:",
        "questionKa": "ßâ₧ßâ¥ßâûßâÿßâóßâÿßâúßâáßâÿ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâñßâ¥ßâÖßâúßâíßâÿßâáßâößâæßâúßâÜßâÿßâÉ:",
        "options": [
          "Mental illness",
          "Strengths and optimal functioning",
          "Diagnosis",
          "Medication"
        ],
        "optionsKa": [
          "ßâñßâíßâÿßâÑßâÿßâÖßâúßâá ßâôßâÉßâÉßâòßâÉßâôßâößâæßâÉßâûßâö",
          "ßâ½ßâÜßâÿßâößâá ßâ¢ßâ«ßâÉßâáßâößâößâæßâíßâÉ ßâôßâÉ ßâ¥ßâ₧ßâóßâÿßâ¢ßâÉßâÜßâúßâá ßâñßâúßâ£ßâÑßâ¬ßâÿßâ¥ßâ£ßâÿßâáßâößâæßâÉßâûßâö",
          "ßâôßâÿßâÉßâÆßâ£ßâ¥ßâûßâûßâö",
          "ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâößâæßâûßâö"
        ],
        "correctIndex": 1,
        "explanation": "Studying what makes life worth living.",
        "explanationKa": "ßâáßâÉ ßâ«ßâôßâÿßâí ßâ¬ßâ«ßâ¥ßâòßâáßâößâæßâÉßâí ßâªßâÿßâáßâößâæßâúßâÜßâí.",
        "optionsRu": [
          "╨ƒ╤ü╨╕╤à╨╕╤ç╨╡╤ü╨║╨╛╨╡ ╨╖╨░╨▒╨╛╨╗╨╡╨▓╨░╨╜╨╕╨╡",
          "╨í╨╕╨╗╤î╨╜╤ï╨╡ ╤ü╤é╨╛╤Ç╨╛╨╜╤ï ╨╕ ╨╛╨┐╤é╨╕╨╝╨░╨╗╤î╨╜╨╛╨╡ ╤ä╤â╨╜╨║╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡",
          "╨ö╨╕╨░╨│╨╜╨╛╤ü╤é╨╕╨║╨░",
          "╨£╨╡╨┤╨╕╨║╨░╨╝╨╡╨╜╤é"
        ],
        "optionsHy": [
          "╒Ç╒╕╒ú╒Ñ╒»╒í╒╢ ╒░╒½╒╛╒í╒╢╒ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ê╓é╒¬╒Ñ╒▓ ╒»╒╕╒▓╒┤╒Ñ╓Ç╒¿ ╓ç ╓à╒║╒┐╒½╒┤╒í╒¼ ╒ú╒╕╓Ç╒«╒╕╓é╒╢╒Ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿",
          "╘▒╒¡╒┐╒╕╓Ç╒╕╒╖╒╕╓é╒┤",
          "╘┤╒Ñ╒▓╒╕╓Ç╒í╒╡╓ä"
        ],
        "optionsAz": [
          "Ruhi x╔Öst╔Ölik",
          "G├╝cl╔Ör v╔Ö optimal i┼ƒl╔Öm╔Ö",
          "Diaqnoz",
          "D╔Örman"
        ],
        "explanationRu": "╨ÿ╨╖╤â╤ç╨╡╨╜╨╕╨╡ ╤é╨╛╨│╨╛, ╤ç╤é╨╛ ╨┤╨╡╨╗╨░╨╡╤é ╨╢╨╕╨╖╨╜╤î ╤ü╤é╨╛╤Å╤ë╨╡╨╣.",
        "questionRu": "╨ƒ╨╛╨╖╨╕╤é╨╕╨▓╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╤ä╨╛╨║╤â╤ü╨╕╤Ç╤â╨╡╤é╤ü╤Å ╨╜╨░:",
        "explanationHy": "╒ê╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒Ñ╒¼, ╒⌐╒Ñ ╒½╒╢╒╣╒╢ ╒º ╒»╒╡╒í╒╢╓ä╒╢ ╒í╓Ç╒¬╒Ñ ╒í╒║╓Ç╒Ñ╒¼:",
        "questionHy": "╘┤╓Ç╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒Ñ╒╢╒┐╓Ç╒╕╒╢╒í╒╢╒╕╓é╒┤ ╒º.",
        "explanationAz": "H╔Öyat─▒ ya┼ƒama─ƒa d╔Öy╔Ör ed╔Ön ┼ƒeyl╔Öri ├╢yr╔Önm╔Ök.",
        "questionAz": "M├╝sb╔Öt psixologiya diqq╔Öt m╔Örk╔Özind╔Ödir:"
      },
      {
        "id": "q16-4",
        "question": "Flow state was described by:",
        "questionKa": "ßâ£ßâÉßâÖßâÉßâôßâÿßâí ßâ¢ßâôßâÆßâ¥ßâ¢ßâÉßâáßâößâ¥ßâæßâÉ ßâÉßâªßâ¼ßâößâáßâÉ:",
        "options": [
          "Seligman",
          "Csikszentmihalyi",
          "Dweck",
          "Duckworth"
        ],
        "optionsKa": [
          "ßâíßâößâÜßâÿßâÆßâ¢ßâÉßâ£ßâ¢ßâÉ",
          "ßâ⌐ßâÿßâÑßâíßâößâ£ßâóßâ¢ßâÿßâ░ßâÉßâÿßâ¢",
          "ßâôßâúßâößâÖßâ¢ßâÉ",
          "ßâôßâÉßâÖßâúßâ¥ßâáßâùßâ¢ßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Csikszentmihalyi described the state of complete absorption.",
        "explanationKa": "ßâ⌐ßâÿßâÑßâíßâößâ£ßâóßâ¢ßâÿßâ░ßâÉßâÿßâ¢ ßâÉßâªßâ¼ßâößâáßâÉ ßâíßâáßâúßâÜßâÿ ßâ⌐ßâÉßâ½ßâÿßâáßâòßâÿßâí ßâ¢ßâôßâÆßâ¥ßâ¢ßâÉßâáßâößâ¥ßâæßâÉ.",
        "optionsRu": [
          "╨í╨╡╨╗╨╕╨│╨╝╨░╨╜",
          "╨º╨╕╨║╤ü╨╡╨╜╤é╨╝╨╕╤à╨░╨╣╨╕",
          "╨ö╨▓╨╡╨║",
          "╨ö╨░╨║╨▓╨╛╤Ç╤é"
        ],
        "optionsHy": [
          "╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢",
          "╒ë╒½╒»╒╜╒ª╒Ñ╒╢╒┐╒┤╒½╒░╒í╒¼╒½",
          "Dweck",
          "╘┤╒í╓ä╒╛╒╕╓Ç╒⌐"
        ],
        "optionsAz": [
          "Seliqman",
          "Csikszentmihalyi",
          "Dweck",
          "Duckworth"
        ],
        "questionRu": "╨í╨╛╤ü╤é╨╛╤Å╨╜╨╕╨╡ ╨┐╨╛╤é╨╛╨║╨░ ╨╛╨┐╨╕╤ü╤ï╨▓╨░╨╗╨╛╤ü╤î:",
        "explanationHy": "Csikszentmihalyi-╒╢ ╒╢╒»╒í╓Ç╒í╒ú╓Ç╒Ñ╒¼ ╒º ╒í╒┤╒ó╒╕╒▓╒╗╒í╒»╒í╒╢ ╒»╒¼╒í╒╢╒┤╒í╒╢ ╒╛╒½╒│╒í╒»╒¿:",
        "explanationRu": "╨º╨╕╨║╤ü╨╡╨╜╤é╨╝╨╕╤à╨░╨╣╨╕ ╨╛╨┐╨╕╤ü╨░╨╗ ╤ü╨╛╤ü╤é╨╛╤Å╨╜╨╕╨╡ ╨┐╨╛╨╗╨╜╨╛╨│╨╛ ╨┐╨╛╨│╨╗╨╛╤ë╨╡╨╜╨╕╤Å.",
        "explanationAz": "Csikszentmihalyi tam udma v╔Öziyy╔Ötini t╔Ösvir etdi.",
        "questionHy": "╒Ç╒╕╒╜╓ä╒½ ╒╛╒½╒│╒í╒»╒¿ ╒╢╒»╒í╓Ç╒í╒ú╓Ç╒╛╒Ñ╒¼ ╒º ╒░╒Ñ╒┐╓ç╒╡╒í╒¼╒╕╒╛.",
        "questionAz": "Ax─▒n v╔Öziyy╔Öti a┼ƒa─ƒ─▒dak─▒larla t╔Ösvir edilmi┼ƒdir:"
      },
      {
        "id": "q16-5",
        "question": "Forensic psychology intersects psychology and:",
        "questionKa": "ßâíßâÉßâíßâÉßâ¢ßâÉßâáßâùßâÜßâ¥ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâÉßâÖßâÉßâòßâ¿ßâÿßâáßâößâæßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉßâí ßâôßâÉ:",
        "options": [
          "Education",
          "Law",
          "Business",
          "Medicine"
        ],
        "optionsKa": [
          "ßâÆßâÉßâ£ßâÉßâùßâÜßâößâæßâÉßâí",
          "ßâíßâÉßâ¢ßâÉßâáßâùßâÉßâÜßâí",
          "ßâæßâÿßâûßâ£ßâößâíßâí",
          "ßâ¢ßâößâôßâÿßâ¬ßâÿßâ£ßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Forensic psychology applies psychology to legal contexts.",
        "explanationKa": "ßâíßâÉßâíßâÉßâ¢ßâÉßâáßâùßâÜßâ¥ ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâÿßâºßâößâ£ßâößâæßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉßâí ßâíßâÉßâ¢ßâÉßâáßâùßâÜßâößâæßâáßâÿßâò ßâÖßâ¥ßâ£ßâóßâößâÑßâíßâóßâ¿ßâÿ.",
        "optionsRu": [
          "╨₧╨▒╤Ç╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡",
          "╨ù╨░╨║╨╛╨╜",
          "╨æ╨╕╨╖╨╜╨╡╤ü",
          "╨¢╨╡╨║╨░╤Ç╤ü╤é╨▓╨╛"
        ],
        "optionsHy": [
          "╘┐╓Ç╒⌐╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╓à╓Ç╒Ñ╒╢╓ä",
          "╘▓╒½╒ª╒╢╒Ñ╒╜",
          "╘┤╒Ñ╒▓"
        ],
        "optionsAz": [
          "T╔Öhsil",
          "Qanun",
          "Biznes",
          "D╔Örman"
        ],
        "explanationAz": "M╔Öhk╔Öm╔Ö psixologiyas─▒ psixologiyan─▒ h├╝quqi kontekstl╔Ör╔Ö t╔Ötbiq edir.",
        "explanationRu": "╨í╤â╨┤╨╡╨▒╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╨┐╤Ç╨╕╨╝╨╡╨╜╤Å╨╡╤é ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Ä ╨║ ╤Ä╤Ç╨╕╨┤╨╕╤ç╨╡╤ü╨║╨╛╨╝╤â ╨║╨╛╨╜╤é╨╡╨║╤ü╤é╤â.",
        "explanationHy": "╘┤╒í╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒½╓Ç╒í╒╝╒╕╓é╒┤ ╒º ╒½╓Ç╒í╒╛╒í╒»╒í╒╢ ╒░╒í╒┤╒í╒┐╒Ñ╓ä╒╜╒┐╒Ñ╓Ç╒╕╓é╒┤:",
        "questionRu": "╨í╤â╨┤╨╡╨▒╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╨┐╨╡╤Ç╨╡╤ü╨╡╨║╨░╨╡╤é ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Ä ╨╕:",
        "questionHy": "╘┤╒í╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒░╒í╒┐╒╕╓é╒┤ ╒º ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╓ç.",
        "questionAz": "M╔Öhk╔Öm╔Ö psixologiyas─▒ psixologiya il╔Ö k╔Ösi┼ƒir v╔Ö:"
      },
      {
        "id": "q16-6",
        "question": "Structured interviews are preferred because they:",
        "questionKa": "ßâíßâóßâáßâúßâÑßâóßâúßâáßâÿßâûßâößâæßâúßâÜßâÿ ßâÿßâ£ßâóßâößâáßâòßâÿßâúßâößâæßâÿ ßâíßâÉßâíßâúßâáßâòßâößâÜßâÿßâÉ, ßâáßâÉßâôßâÆßâÉßâ£:",
        "options": [
          "Are shorter",
          "Reduce bias and improve prediction",
          "Cost less",
          "Are informal"
        ],
        "optionsKa": [
          "ßâúßâñßâáßâ¥ ßâ¢ßâ¥ßâÖßâÜßâößâÉ",
          "ßâÉßâ¢ßâ¬ßâÿßâáßâößâæßâí ßâ¢ßâÿßâÖßâößâáßâ½ßâ¥ßâößâæßâÉßâí ßâôßâÉ ßâÉßâúßâ¢ßâ»ßâ¥ßâæßâößâíßâößâæßâí ßâ₧ßâáßâ¥ßâÆßâ£ßâ¥ßâûßâí",
          "ßâ£ßâÉßâÖßâÜßâößâæßâÿ ßâªßâÿßâáßâí",
          "ßâÉßâáßâÉßâñßâ¥ßâáßâ¢ßâÉßâÜßâúßâáßâÿßâÉ"
        ],
        "correctIndex": 1,
        "explanation": "Structured interviews are more valid and reduce interviewer bias.",
        "explanationKa": "ßâíßâóßâáßâúßâÑßâóßâúßâáßâÿßâûßâößâæßâúßâÜßâÿ ßâÿßâ£ßâóßâößâáßâòßâÿßâúßâößâæßâÿ ßâúßâñßâáßâ¥ ßâòßâÉßâÜßâÿßâôßâúßâáßâÿßâÉ ßâôßâÉ ßâÉßâ¢ßâ¬ßâÿßâáßâößâæßâí ßâ¢ßâÿßâÖßâößâáßâ½ßâ¥ßâößâæßâÉßâí.",
        "optionsRu": [
          "╨║╨╛╤Ç╨╛╤ç╨╡",
          "╨ú╨╝╨╡╨╜╤î╤ê╨╕╤é╨╡ ╨┐╤Ç╨╡╨┤╨▓╨╖╤Å╤é╨╛╤ü╤é╤î ╨╕ ╤â╨╗╤â╤ç╤ê╨╕╤é╨╡ ╨┐╤Ç╨╛╨│╨╜╨╛╨╖╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡",
          "╨í╤é╨╛╨╕╨╝╨╛╤ü╤é╤î ╨╝╨╡╨╜╤î╤ê╨╡",
          "╨¥╨╡╤ä╨╛╤Ç╨╝╨░╨╗╤î╨╜╤ï"
        ],
        "optionsHy": [
          "╘▒╒╛╒Ñ╒¼╒½ ╒»╒í╓Ç╒│ ╒Ñ╒╢",
          "╒å╒╛╒í╒ª╒Ñ╓ü╓Ç╒Ñ╓ä ╒»╒╕╒▓╒┤╒╢╒í╒»╒í╒¼╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╓ç ╒ó╒í╓Ç╒Ñ╒¼╒í╒╛╒Ñ╓ä ╒»╒í╒╢╒¡╒í╒┐╒Ñ╒╜╒╕╓é╒┤╒¿",
          "╘▒╓Ç╒¬╒Ñ╓ä ╒í╒╛╒Ñ╒¼╒½ ╓ä╒½╒╣",
          "╒ê╒╣ ╓å╒╕╓Ç╒┤╒í╒¼ ╒Ñ╒╢"
        ],
        "optionsAz": [
          "Daha q─▒sad─▒rlar",
          "Q╔Ör╔Özliyi azald─▒n v╔Ö proqnozu yax┼ƒ─▒la┼ƒd─▒r─▒n",
          "Daha az x╔Örc",
          "Qeyri-r╔Ösmidirl╔Ör"
        ],
        "explanationAz": "Strukturla┼ƒd─▒r─▒lm─▒┼ƒ m├╝sahib╔Öl╔Ör daha etibarl─▒d─▒r v╔Ö m├╝sahib╔Ö ver╔Önin q╔Ör╔Özliyini azald─▒r.",
        "questionAz": "Strukturla┼ƒd─▒r─▒lm─▒┼ƒ m├╝sahib╔Öl╔Ör╔Ö ├╝st├╝nl├╝k verilir, ├º├╝nki bunlar:",
        "explanationRu": "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨╕╤Ç╨╛╨▓╨░╨╜╨╜╤ï╨╡ ╨╕╨╜╤é╨╡╤Ç╨▓╤î╤Ä ╨▒╨╛╨╗╨╡╨╡ ╨┤╨╛╤ü╤é╨╛╨▓╨╡╤Ç╨╜╤ï ╨╕ ╤â╨╝╨╡╨╜╤î╤ê╨░╤Ä╤é ╨┐╤Ç╨╡╨┤╨▓╨╖╤Å╤é╨╛╤ü╤é╤î ╨╕╨╜╤é╨╡╤Ç╨▓╤î╤Ä╨╡╤Ç╨░.",
        "questionRu": "╨í╤é╤Ç╤â╨║╤é╤â╤Ç╨╕╤Ç╨╛╨▓╨░╨╜╨╜╤ï╨╡ ╨╕╨╜╤é╨╡╤Ç╨▓╤î╤Ä ╨┐╤Ç╨╡╨┤╨┐╨╛╤ç╤é╨╕╤é╨╡╨╗╤î╨╜╨╡╨╡, ╨┐╨╛╤é╨╛╨╝╤â ╤ç╤é╨╛ ╨╛╨╜╨╕:",
        "explanationHy": "╘┐╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒í╒╡╒½╒╢ ╒░╒í╓Ç╓ü╒í╒ª╓Ç╒╕╓é╒╡╓ü╒╢╒Ñ╓Ç╒╢ ╒í╒╛╒Ñ╒¼╒½ ╒░╒½╒┤╒╢╒í╒╛╒╕╓Ç ╒Ñ╒╢ ╓ç ╒╢╒╛╒í╒ª╒Ñ╓ü╒╢╒╕╓é╒┤ ╒Ñ╒╢ ╒░╒í╓Ç╓ü╒í╒ª╓Ç╒╕╓é╓ü╒í╒╛╒í╓Ç╒½ ╒»╒╕╒▓╒┤╒╢╒í╒»╒í╒¼╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿:",
        "questionHy": "╒å╒í╒¡╒¿╒╢╒┐╓Ç╒Ñ╒¼╒½ ╒Ñ╒╢ ╒»╒í╒╝╒╕╓é╓ü╒╛╒í╒«╓ä╒í╒╡╒½╒╢ ╒░╒í╓Ç╓ü╒í╒ª╓Ç╒╕╓é╒╡╓ü╒╢╒Ñ╓Ç╒¿, ╓ä╒í╒╢╒½ ╒╕╓Ç ╒ñ╓Ç╒í╒╢╓ä."
      },
      {
        "id": "q16-7",
        "question": "Grit research was done by:",
        "questionKa": "ßâíßâÿßâƒßâÿßâ£ßâƒßâÿßâÜßâÿßâí ßâÖßâòßâÜßâößâòßâÉ ßâ⌐ßâÉßâÉßâóßâÉßâáßâÉ:",
        "options": [
          "Seligman",
          "Csikszentmihalyi",
          "Dweck",
          "Angela Duckworth"
        ],
        "optionsKa": [
          "ßâíßâößâÜßâÿßâÆßâ¢ßâÉßâ£ßâ¢ßâÉ",
          "ßâ⌐ßâÿßâÑßâíßâößâ£ßâóßâ¢ßâÿßâ░ßâÉßâÿßâ¢",
          "ßâôßâúßâößâÖßâ¢ßâÉ",
          "ßâÉßâ£ßâ»ßâößâÜßâÉ ßâôßâÉßâÖßâúßâ¥ßâáßâùßâ¢ßâÉ"
        ],
        "correctIndex": 3,
        "explanation": "Duckworth studied perseverance and passion for long-term goals.",
        "explanationKa": "ßâôßâÉßâÖßâúßâ¥ßâáßâùßâ¢ßâÉ ßâ¿ßâößâÿßâíßâ¼ßâÉßâòßâÜßâÉ ßâ¿ßâößâúßâ₧ßâ¥ßâòßâáßâ¥ßâæßâÉ ßâôßâÉ ßâòßâ£ßâößâæßâÉ ßâÆßâáßâ½ßâößâÜßâòßâÉßâôßâÿßâÉßâ£ßâÿ ßâ¢ßâÿßâûßâ£ßâößâæßâÿßâíßâùßâòßâÿßâí.",
        "optionsRu": [
          "╨í╨╡╨╗╨╕╨│╨╝╨░╨╜",
          "╨º╨╕╨║╤ü╨╡╨╜╤é╨╝╨╕╤à╨░╨╣╨╕",
          "╨ö╨▓╨╡╨║",
          "╨É╨╜╨┤╨╢╨╡╨╗╨░ ╨ö╨░╨║╨▓╨╛╤Ç╤é"
        ],
        "optionsHy": [
          "╒ì╒Ñ╒¼╒½╒ú╒┤╒í╒╢",
          "╒ë╒½╒»╒╜╒ª╒Ñ╒╢╒┐╒┤╒½╒░╒í╒¼╒½",
          "Dweck",
          "╘▒╒╢╒¬╒Ñ╒¼╒í ╘┤╒í╓ä╒╛╒╕╓Ç╒⌐"
        ],
        "optionsAz": [
          "Seliqman",
          "Csikszentmihalyi",
          "Dweck",
          "Angela Duckworth"
        ],
        "explanationHy": "╘┤╒í╓ä╒╛╒╕╓Ç╒⌐╒╢ ╒╕╓é╒╜╒╕╓é╒┤╒╢╒í╒╜╒½╓Ç╒Ñ╒¼ ╒º ╒░╒í╒┤╒í╒╝╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢ ╒╕╓é ╒»╒½╓Ç╓ä╒¿ ╒Ñ╓Ç╒»╒í╓Ç╒í╒¬╒í╒┤╒»╒Ñ╒┐ ╒╢╒║╒í╒┐╒í╒»╒╢╒Ñ╓Ç╒½ ╒░╒í╒┤╒í╓Ç:",
        "explanationRu": "╨ö╨░╨║╨▓╨╛╤Ç╤é ╨╕╨╖╤â╤ç╨░╨╗ ╨╜╨░╤ü╤é╨╛╨╣╤ç╨╕╨▓╨╛╤ü╤é╤î ╨╕ ╤ü╤é╤Ç╨░╤ü╤é╤î ╨║ ╨┤╨╛╨╗╨│╨╛╤ü╤Ç╨╛╤ç╨╜╤ï╨╝ ╤å╨╡╨╗╤Å╨╝.",
        "questionRu": "╨ÿ╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡ ╨╖╨╡╤Ç╨╜╨╕╤ü╤é╨╛╤ü╤é╨╕ ╨▒╤ï╨╗╨╛ ╨┐╤Ç╨╛╨▓╨╡╨┤╨╡╨╜╨╛:",
        "questionHy": "╘│╓Ç╒½╒┐ ╒░╒Ñ╒┐╒í╒ª╒╕╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒»╒í╒┐╒í╓Ç╒╛╒Ñ╒¼ ╒º.",
        "explanationAz": "Duckworth ╔Özmkarl─▒q v╔Ö uzunm├╝dd╔Ötli m╔Öqs╔Ödl╔Ör ├╝├º├╝n ehtiras ├╢yr╔Öndi.",
        "questionAz": "Qum t╔Ödqiqat─▒ a┼ƒa─ƒ─▒dak─▒lar t╔Ör╔Öfind╔Ön apar─▒lm─▒┼ƒd─▒r:"
      },
      {
        "id": "q16-8",
        "question": "Collectivistic cultures emphasize:",
        "questionKa": "ßâÖßâ¥ßâÜßâößâÑßâóßâÿßâòßâÿßâíßâóßâúßâáßâÿ ßâÖßâúßâÜßâóßâúßâáßâößâæßâÿ ßâ«ßâÉßâûßâí ßâúßâíßâòßâÉßâ¢ßâí:",
        "options": [
          "Individual achievement",
          "Group harmony",
          "Competition",
          "Personal freedom"
        ],
        "optionsKa": [
          "ßâÿßâ£ßâôßâÿßâòßâÿßâôßâúßâÉßâÜßâúßâá ßâ¢ßâÿßâªßâ¼ßâößâòßâÉßâí",
          "ßâ»ßâÆßâúßâñßâúßâá ßâ░ßâÉßâáßâ¢ßâ¥ßâ£ßâÿßâÉßâí",
          "ßâÖßâ¥ßâ£ßâÖßâúßâáßâößâ£ßâ¬ßâÿßâÉßâí",
          "ßâ₧ßâÿßâáßâÉßâô ßâùßâÉßâòßâÿßâíßâúßâñßâÜßâößâæßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Collectivistic cultures value group goals over individual ones.",
        "explanationKa": "ßâÖßâ¥ßâÜßâößâÑßâóßâÿßâòßâÿßâíßâóßâúßâáßâÿ ßâÖßâúßâÜßâóßâúßâáßâößâæßâÿ ßâÉßâñßâÉßâíßâößâæßâí ßâ»ßâÆßâúßâñßâúßâá ßâ¢ßâÿßâûßâ£ßâößâæßâí ßâÿßâ£ßâôßâÿßâòßâÿßâôßâúßâÉßâÜßâúßâáßâûßâö ßâ¢ßâößâóßâÉßâô.",
        "optionsRu": [
          "╨ÿ╨╜╨┤╨╕╨▓╨╕╨┤╤â╨░╨╗╤î╨╜╤ï╨╡ ╨┤╨╛╤ü╤é╨╕╨╢╨╡╨╜╨╕╤Å",
          "╨ô╤Ç╤â╨┐╨┐╨╛╨▓╨░╤Å ╨│╨░╤Ç╨╝╨╛╨╜╨╕╤Å",
          "╨í╨╛╤Ç╨╡╨▓╨╜╨╛╨▓╨░╨╜╨╕╨╡",
          "╨¢╨╕╤ç╨╜╨░╤Å ╤ü╨▓╨╛╨▒╨╛╨┤╨░"
        ],
        "optionsHy": [
          "╘▒╒╢╒░╒í╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒▒╒Ñ╒╝╓ä╒ó╒Ñ╓Ç╒╕╓é╒┤",
          "╘╜╒┤╒ó╒í╒╡╒½╒╢ ╒╢╒Ñ╓Ç╒ñ╒í╒╖╒╢╒í╒»╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒ä╓Ç╓ü╒╕╓é╒╡╒⌐",
          "╘▒╒╢╒▒╒╢╒í╒»╒í╒╢ ╒í╒ª╒í╒┐╒╕╓é╒⌐╒╡╒╕╓é╒╢"
        ],
        "optionsAz": [
          "F╔Ördi nailiyy╔Öt",
          "Qrup harmoniyas─▒",
          "M├╝sabiq╔Ö",
          "┼₧╔Öxsi azadl─▒q"
        ],
        "explanationRu": "╨Ü╨╛╨╗╨╗╨╡╨║╤é╨╕╨▓╨╕╤ü╤é╤ü╨║╨╕╨╡ ╨║╤â╨╗╤î╤é╤â╤Ç╤ï ╤å╨╡╨╜╤Å╤é ╨│╤Ç╤â╨┐╨┐╨╛╨▓╤ï╨╡ ╤å╨╡╨╗╨╕ ╨▓╤ï╤ê╨╡ ╨╕╨╜╨┤╨╕╨▓╨╕╨┤╤â╨░╨╗╤î╨╜╤ï╤à.",
        "questionRu": "╨Ü╨╛╨╗╨╗╨╡╨║╤é╨╕╨▓╨╕╤ü╤é╤ü╨║╨╕╨╡ ╨║╤â╨╗╤î╤é╤â╤Ç╤ï ╨┐╨╛╨┤╤ç╨╡╤Ç╨║╨╕╨▓╨░╤Ä╤é:",
        "explanationHy": "╘┐╒╕╒¼╒Ñ╒»╒┐╒½╒╛╒½╒╜╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒┤╒╖╒í╒»╒╕╓é╒╡╒⌐╒╢╒Ñ╓Ç╒¿ ╒ú╒╢╒í╒░╒í╒┐╒╕╓é╒┤ ╒Ñ╒╢ ╒¡╒┤╒ó╒í╒╡╒½╒╢ ╒╢╒║╒í╒┐╒í╒»╒╢╒Ñ╓Ç╒¿, ╓ä╒í╒╢ ╒í╒╢╒░╒í╒┐╒í╒»╒í╒╢╒╢╒Ñ╓Ç╒¿:",
        "questionHy": "╘┐╒╕╒¼╒Ñ╒»╒┐╒½╒╛╒½╒╜╒┐╒í╒»╒í╒╢ ΓÇïΓÇï╒┤╒╖╒í╒»╒╕╓é╒╡╒⌐╒╢╒Ñ╓Ç╒¿ ╒╖╒Ñ╒╖╒┐╒╕╓é╒┤ ╒Ñ╒╢.",
        "explanationAz": "Kollektivist m╔Öd╔Öniyy╔Ötl╔Ör qrup m╔Öqs╔Ödl╔Örini f╔Ördi olanlardan ├╝st├╝n tutur.",
        "questionAz": "Kollektivist m╔Öd╔Öniyy╔Ötl╔Ör vur─ƒulay─▒r:"
      },
      {
        "id": "q16-9",
        "question": "The IKEA effect shows people:",
        "questionKa": "IKEA ßâößâñßâößâÑßâóßâÿ ßâÉßâ⌐ßâòßâößâ£ßâößâæßâí, ßâáßâ¥ßâ¢ ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâÿ:",
        "options": [
          "Prefer cheap furniture",
          "Value self-built items more",
          "Dislike assembly",
          "Buy impulsively"
        ],
        "optionsKa": [
          "ßâÉßâ¢ßâ»ßâ¥ßâæßâÿßâ£ßâößâæßâößâ£ ßâÿßâÉßâñ ßâÉßâòßâößâ»ßâí",
          "ßâùßâòßâÿßâùßâ£ßâÉßâ¿ßâößâ£ ßâ£ßâÿßâòßâùßâößâæßâí ßâ¢ßâößâóßâÉßâô ßâÉßâñßâÉßâíßâößâæßâößâ£",
          "ßâÉßâá ßâ¢ßâ¥ßâíßâ¼ßâ¥ßâ£ßâù ßâÉßâ¼ßâºßâ¥ßâæßâÉ",
          "ßâÿßâ¢ßâ₧ßâúßâÜßâíßâúßâáßâÉßâô ßâºßâÿßâôßâúßâÜßâ¥ßâæßâößâ£"
        ],
        "correctIndex": 1,
        "explanation": "People overvalue things they helped create.",
        "explanationKa": "ßâÉßâôßâÉßâ¢ßâÿßâÉßâ£ßâößâæßâÿ ßâûßâößâôßâ¢ßâößâóßâÉßâô ßâÉßâñßâÉßâíßâößâæßâößâ£ ßâáßâÉßâ¢ßâößâí, ßâáßâÿßâí ßâ¿ßâößâÑßâ¢ßâ£ßâÉßâ¿ßâÿßâ¬ ßâ¢ßâ¥ßâ£ßâÉßâ¼ßâÿßâÜßâößâ¥ßâæßâôßâ£ßâößâ£.",
        "optionsRu": [
          "╨ƒ╤Ç╨╡╨┤╨┐╨╛╤ç╨╕╤é╨░╤Ä ╨┤╨╡╤ê╨╡╨▓╤â╤Ä ╨╝╨╡╨▒╨╡╨╗╤î",
          "╨æ╨╛╨╗╤î╤ê╨╡ ╤å╨╡╨╜╨╕╤é╨╡ ╨┐╤Ç╨╡╨┤╨╝╨╡╤é╤ï, ╤ü╨┤╨╡╨╗╨░╨╜╨╜╤ï╨╡ ╤ü╨▓╨╛╨╕╨╝╨╕ ╤Ç╤â╨║╨░╨╝╨╕",
          "╨¥╨╡ ╨╜╤Ç╨░╨▓╨╕╤é╤ü╤Å ╤ü╨▒╨╛╤Ç╨║╨░",
          "╨ƒ╨╛╨║╤â╨┐╨░╨╣╤é╨╡ ╨╕╨╝╨┐╤â╨╗╤î╤ü╨╕╨▓╨╜╨╛"
        ],
        "optionsHy": [
          "╒å╒í╒¡╒¿╒╢╒┐╓Ç╒Ñ╓ä ╒º╒¬╒í╒╢ ╒»╒í╒░╒╕╓é╒╡╓ä",
          "╘▒╒╛╒Ñ╒¼╒½ ╒╖╒í╒┐ ╒ú╒╢╒í╒░╒í╒┐╒Ñ╓ä ╒╜╒Ñ╓â╒í╒»╒í╒╢ ╒▒╒Ñ╒╝╓ä╒Ñ╓Ç╒╕╒╛ ╒║╒í╒┐╓Ç╒í╒╜╒┐╒╛╒í╒« ╒½╓Ç╒Ñ╓Ç╒¿",
          "╒ë╒░╒í╒╛╒í╒╢╒Ñ╒¼ ╒¬╒╕╒▓╒╕╒╛╒¿",
          "╘│╒╢╒Ñ╒¼ ╒½╒┤╒║╒╕╓é╒¼╒╜╒½╒╛"
        ],
        "optionsAz": [
          "Ucuz mebell╔Ör╔Ö ├╝st├╝nl├╝k verin",
          "├ûz-├╢z├╝n╔Ö tikilmi┼ƒ ╔Ö┼ƒyalara daha ├ºox d╔Öy╔Ör verin",
          "M╔Öclisi b╔Öy╔Önm╔Öm╔Ök",
          "D├╝rt├╝sel olaraq sat─▒n al─▒n"
        ],
        "questionRu": "╨¡╤ä╤ä╨╡╨║╤é ╨ÿ╨Ü╨ò╨É ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╨╡╤é ╨╗╤Ä╨┤╤Å╨╝:",
        "explanationRu": "╨¢╤Ä╨┤╨╕ ╨┐╨╡╤Ç╨╡╨╛╤å╨╡╨╜╨╕╨▓╨░╤Ä╤é ╨▓╨╡╤ë╨╕, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╛╨╜╨╕ ╨┐╨╛╨╝╨╛╨│╨╗╨╕ ╤ü╨╛╨╖╨┤╨░╤é╤î.",
        "questionHy": "IKEA ╒º╓å╒Ñ╒»╒┐╒¿ ╓ü╒╕╓é╒╡╓ü ╒º ╒┐╒í╒¼╒½╒╜ ╒┤╒í╓Ç╒ñ╒»╒í╒╢╓ü.",
        "explanationHy": "╒ä╒í╓Ç╒ñ╒½╒» ╒ú╒Ñ╓Ç╒í╒ú╒╢╒í╒░╒í╒┐╒╕╓é╒┤ ╒Ñ╒╢ ╒í╒╡╒╢ ╒ó╒í╒╢╒Ñ╓Ç╒¿, ╒╕╓Ç╒╕╒╢╓ä ╓à╒ú╒╢╒Ñ╒¼ ╒Ñ╒╢ ╒╜╒┐╒Ñ╒▓╒«╒Ñ╒¼:",
        "questionAz": "IKEA effekti insanlara g├╢st╔Örir:",
        "explanationAz": "─░nsanlar yaratma─ƒa k├╢m╔Ök etdikl╔Öri ┼ƒeyl╔Öri y├╝ks╔Ök qiym╔Ötl╔Öndirirl╔Ör."
      },
      {
        "id": "q16-10",
        "question": "Health psychology promotes:",
        "questionKa": "ßâ»ßâÉßâ£ßâ¢ßâáßâùßâößâÜßâ¥ßâæßâÿßâí ßâñßâíßâÿßâÑßâ¥ßâÜßâ¥ßâÆßâÿßâÉ ßâ«ßâößâÜßâí ßâúßâ¼ßâºßâ¥ßâæßâí:",
        "options": [
          "Only medication",
          "Healthy behaviors and illness prevention",
          "Surgery",
          "Hospitalization"
        ],
        "optionsKa": [
          "ßâ¢ßâ«ßâ¥ßâÜßâ¥ßâô ßâ¢ßâößâôßâÿßâÖßâÉßâ¢ßâößâ£ßâóßâößâæßâí",
          "ßâ»ßâÉßâ£ßâíßâÉßâª ßâÑßâ¬ßâößâòßâößâæßâíßâÉ ßâôßâÉ ßâôßâÉßâÉßâòßâÉßâôßâößâæßâößâæßâÿßâí ßâ₧ßâáßâößâòßâößâ£ßâ¬ßâÿßâÉßâí",
          "ßâÑßâÿßâáßâúßâáßâÆßâÿßâÉßâí",
          "ßâ░ßâ¥ßâíßâ₧ßâÿßâóßâÉßâÜßâÿßâûßâÉßâ¬ßâÿßâÉßâí"
        ],
        "correctIndex": 1,
        "explanation": "Promoting behavior change and preventing illness.",
        "explanationKa": "ßâÑßâ¬ßâößâòßâÿßâí ßâ¬ßâòßâÜßâÿßâÜßâößâæßâÿßâíßâÉ ßâôßâÉ ßâôßâÉßâÉßâòßâÉßâôßâößâæßâößâæßâÿßâí ßâ₧ßâáßâößâòßâößâ£ßâ¬ßâÿßâÿßâí ßâ«ßâößâÜßâ¿ßâößâ¼ßâºßâ¥ßâæßâÉ.",
        "optionsRu": [
          "╨ó╨╛╨╗╤î╨║╨╛ ╨╗╨╡╨║╨░╤Ç╤ü╤é╨▓╨░",
          "╨ù╨┤╨╛╤Ç╨╛╨▓╨╛╨╡ ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨╕ ╨┐╤Ç╨╛╤ä╨╕╨╗╨░╨║╤é╨╕╨║╨░ ╨╖╨░╨▒╨╛╨╗╨╡╨▓╨░╨╜╨╕╨╣",
          "╨₧╨┐╨╡╤Ç╨░╤å╨╕╤Å",
          "╨ô╨╛╤ü╨┐╨╕╤é╨░╨╗╨╕╨╖╨░╤å╨╕╤Å"
        ],
        "optionsHy": [
          "╒ä╒½╒í╒╡╒╢ ╒ñ╒Ñ╒▓╒╕╓Ç╒í╒╡╓ä",
          "╘▒╒╝╒╕╒▓╒╗ ╒╛╒í╓Ç╓ä╒í╒ú╒½╒« ╓ç ╒░╒½╒╛╒í╒╢╒ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒»╒í╒╢╒¡╒í╓Ç╒ú╒Ñ╒¼╒╕╓é╒┤",
          "╒Ä╒½╓Ç╒í╒ó╒╕╓é╒¬╒╕╓é╒⌐╒╡╒╕╓é╒╢",
          "╒Ç╒╕╒╜╒║╒½╒┐╒í╒¼╒í╓ü╒╕╓é╒┤"
        ],
        "optionsAz": [
          "Yaln─▒z d╔Örman",
          "Sa─ƒlam davran─▒┼ƒlar v╔Ö x╔Öst╔Ölikl╔Örin qar┼ƒ─▒s─▒n─▒n al─▒nmas─▒",
          "C╔Örrahiyy╔Ö",
          "X╔Öst╔Öxanaya yerl╔Ö┼ƒdirm╔Ö"
        ],
        "explanationRu": "╨í╨╛╨┤╨╡╨╣╤ü╤é╨▓╨╕╨╡ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╤Ä ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤Å ╨╕ ╨┐╤Ç╨╡╨┤╨╛╤é╨▓╤Ç╨░╤ë╨╡╨╜╨╕╤Ä ╨╖╨░╨▒╨╛╨╗╨╡╨▓╨░╨╜╨╕╨╣.",
        "questionRu": "╨ƒ╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ╨╖╨┤╨╛╤Ç╨╛╨▓╤î╤Å ╤ü╨┐╨╛╤ü╨╛╨▒╤ü╤é╨▓╤â╨╡╤é:",
        "explanationHy": "╒Ä╒í╓Ç╓ä╒í╒ú╒«╒½ ╓â╒╕╓â╒╕╒¡╒╕╓é╒⌐╒╡╒í╒╢ ╒¡╒⌐╒í╒╢╒╕╓é╒┤ ╓ç ╒░╒½╒╛╒í╒╢╒ñ╒╕╓é╒⌐╒╡╒╕╓é╒╢╒╢╒Ñ╓Ç╒½ ╒»╒í╒╢╒¡╒í╓Ç╒ú╒Ñ╒¼╒╕╓é╒┤:",
        "questionHy": "╘▒╒╝╒╕╒▓╒╗╒╕╓é╒⌐╒╡╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢╒¿ ╒╢╒║╒í╒╜╒┐╒╕╓é╒┤ ╒º.",
        "explanationAz": "Davran─▒┼ƒ d╔Öyi┼ƒikliyini t╔Ö┼ƒviq etm╔Ök v╔Ö x╔Öst╔Öliyin qar┼ƒ─▒s─▒n─▒ almaq.",
        "questionAz": "Sa─ƒlaml─▒q psixologiyas─▒ k├╢m╔Ök edir:"
      }
    ],
    "titleHy": "╘┐╒½╓Ç╒í╒╝╒í╒»╒í╒╢ ╒░╒╕╒ú╒Ñ╒ó╒í╒╢╒╕╓é╒⌐╒╡╒╕╓é╒╢ ΓÇö ╒Ä╒½╒»╒┐╒╕╓Ç╒½╒╢╒í",
    "titleRu": "╨ƒ╤Ç╨╕╨║╨╗╨░╨┤╨╜╨░╤Å ╨┐╤ü╨╕╤à╨╛╨╗╨╛╨│╨╕╤Å ΓÇö ╨Æ╨╕╨║╤é╨╛╤Ç╨╕╨╜╨░",
    "titleAz": "T╔Ötbiqi Psixologiya - Viktorina"
  }
];

export const PSYCHOLOGISTS: Psychologist[] = [
  { name: 'Sigmund Freud', years: '1856\u20131939', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg', nationality: 'Austrian', field: 'Psychoanalysis', contribution: 'Father of Psychoanalysis', details: 'Developed psychoanalytic theory, proposing that unconscious conflicts drive behavior. Introduced the id, ego, superego, defense mechanisms, dream analysis, and psychosexual stages.' },
  { name: 'B.F. Skinner', years: '1904\u20131990', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/B.F._Skinner_at_Harvard_circa_1950.jpg/220px-B.F._Skinner_at_Harvard_circa_1950.jpg', nationality: 'American', field: 'Behaviorism', contribution: 'Pioneer of Operant Conditioning', details: 'Developed operant conditioning theory. Invented the Skinner Box and introduced schedules of reinforcement.' },
  { name: 'Carl Rogers', years: '1902\u20131987', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Carl_Ransom_Rogers.jpg/220px-Carl_Ransom_Rogers.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Founder of Client-Centered Therapy', details: 'Pioneered person-centered therapy. Emphasized unconditional positive regard, empathy, and congruence.' },
  { name: 'Jean Piaget', years: '1896\u20131980', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jean_Piaget_in_Ann_Arbor.png/220px-Jean_Piaget_in_Ann_Arbor.png', nationality: 'Swiss', field: 'Developmental Psychology', contribution: 'Theory of Cognitive Development', details: 'Proposed four stages of cognitive development: sensorimotor, preoperational, concrete operational, and formal operational.' },
  { name: 'Ivan Pavlov', years: '1849\u20131936', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_%28Nobel%29.png/220px-Ivan_Pavlov_%28Nobel%29.png', nationality: 'Russian', field: 'Behavioral Psychology', contribution: 'Discovery of Classical Conditioning', details: 'While studying digestion in dogs, discovered classical conditioning\u2014learning through association.' },
  { name: 'Abraham Maslow', years: '1908\u20131970', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg/220px-Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Hierarchy of Needs', details: 'Created the hierarchy of needs\u2014from basic physiological needs to self-actualization. Co-founded humanistic psychology.' },
  { name: 'Philip Zimbardo', years: '1933\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg/220px-Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Stanford Prison Experiment', details: 'Conducted the Stanford Prison Experiment (1971), demonstrating how social roles and situational forces influence behavior.' },
  { name: 'Albert Bandura', years: '1925\u20132021', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Albert_Bandura_in_his_Stanford_University_office_2005.jpg/220px-Albert_Bandura_in_his_Stanford_University_office_2005.jpg', nationality: 'Canadian-American', field: 'Social Learning', contribution: 'Social Learning Theory & Self-Efficacy', details: 'Demonstrated observational learning through Bobo doll experiment. Developed self-efficacy concept.' },
  { name: 'Elizabeth Loftus', years: '1944\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Elizabeth_Loftus.jpg/220px-Elizabeth_Loftus.jpg', nationality: 'American', field: 'Cognitive Psychology', contribution: 'False Memory Research', details: 'Showed memories can be altered through suggestion and misinformation.' },
  { name: 'Stanley Milgram', years: '1933\u20131984', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Stanley_Milgram_1974.jpg/220px-Stanley_Milgram_1974.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Obedience Experiments', details: 'Showed ordinary people will follow authority figures even when asked to harm others.' },
  { name: 'Erik Erikson', years: '1902\u20131994', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Erik_Erikson.png/220px-Erik_Erikson.png', nationality: 'German-American', field: 'Developmental Psychology', contribution: 'Psychosocial Development Theory', details: 'Proposed eight stages of psychosocial development spanning the entire lifespan.' },
  { name: 'Carl Jung', years: '1875\u20131961', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/220px-CGJung.jpg', nationality: 'Swiss', field: 'Analytical Psychology', contribution: 'Collective Unconscious & Archetypes', details: 'Proposed the collective unconscious, archetypes, introversion/extraversion, and individuation.' },
  { name: 'Lev Vygotsky', years: '1896\u20131934', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lev_Vygotsky_1896-1934.jpg/220px-Lev_Vygotsky_1896-1934.jpg', nationality: 'Russian', field: 'Developmental Psychology', contribution: 'Zone of Proximal Development', details: 'Proposed learning is fundamentally social. His ZPD and scaffolding concepts transformed education.' },
  { name: 'Mary Ainsworth', years: '1913\u20131999', photo: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Mary_Ainsworth.jpg', nationality: 'Canadian-American', field: 'Developmental Psychology', contribution: 'Attachment Theory Research', details: 'Developed the Strange Situation experiment, identifying secure, avoidant, and anxious attachment styles.' },
  { name: 'Daniel Kahneman', years: '1934\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Daniel_KAHNEMAN.jpg/220px-Daniel_KAHNEMAN.jpg', nationality: 'Israeli-American', field: 'Cognitive Psychology', contribution: 'Behavioral Economics & Thinking Biases', details: 'Nobel Prize winner. Demonstrated systematic biases. Wrote "Thinking, Fast and Slow."' },
  { name: 'Martin Seligman', years: '1942\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Martin_Seligman.jpg/220px-Martin_Seligman.jpg', nationality: 'American', field: 'Positive Psychology', contribution: 'Learned Helplessness & Positive Psychology', details: 'Discovered learned helplessness. Founded positive psychology. Developed PERMA model of flourishing.' }
];

export const FACTS: Fact[] = [
  { id: 1, text: 'Your brain uses about 20% of your body\'s total energy, despite being only 2% of your body weight.', textKa: '\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E2\u10D5\u10D8\u10DC\u10D8 \u10E1\u10EE\u10D4\u10E3\u10DA\u10D8\u10E1 \u10DB\u10D7\u10DA\u10D8\u10D0\u10DC\u10D8 \u10D4\u10DC\u10D4\u10E0\u10D2\u10D8\u10D8\u10E1 20%-\u10E1 \u10DB\u10DD\u10D8\u10EE\u10DB\u10D0\u10E0\u10E1, \u10DB\u10D8\u10E3\u10EE\u10D4\u10D3\u10D0\u10D5\u10D0\u10D3 \u10D8\u10DB\u10D8\u10E1\u10D0, \u10E0\u10DD\u10DB \u10E1\u10EE\u10D4\u10E3\u10DA\u10D8\u10E1 \u10EC\u10DD\u10DC\u10D8\u10E1 \u10DB\u10EE\u10DD\u10DA\u10DD\u10D3 2%-\u10E1 \u10E8\u10D4\u10D0\u10D3\u10D2\u10D4\u10DC\u10E1.', source: 'Neuroscience', category: 'Brain', icon: 'fluent:brain-circuit-20-filled' },
  { id: 2, text: 'The average person has about 6,200 thoughts per day, according to a 2020 study.', textKa: '\u10E1\u10D0\u10E8\u10E3\u10D0\u10DA\u10DD \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10E1 \u10D3\u10E6\u10D4\u10E8\u10D8 \u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 6,200 \u10D0\u10D6\u10E0\u10D8 \u10D0\u10E5\u10D5\u10E1, 2020 \u10EC\u10DA\u10D8\u10E1 \u10D9\u10D5\u10DA\u10D4\u10D5\u10D8\u10E1 \u10DB\u10D8\u10EE\u10D4\u10D3\u10D5\u10D8\u10D7.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:head-lightbulb-outline' },
  { id: 3, text: 'Memories are distributed across networks of neurons, not stored in one place.', textKa: '\u10DB\u10DD\u10D2\u10DD\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8 \u10DC\u10D4\u10D8\u10E0\u10DD\u10DC\u10D4\u10D1\u10D8\u10E1 \u10E5\u10E1\u10D4\u10DA\u10D4\u10D1\u10E8\u10D8\u10D0 \u10D2\u10D0\u10DC\u10D0\u10EC\u10D8\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8, \u10D3\u10D0 \u10D0\u10E0\u10D0 \u10D4\u10E0\u10D7 \u10D0\u10D3\u10D2\u10D8\u10DA\u10D0\u10E1.', source: 'Memory Research', category: 'Memory', icon: 'mdi:memory' },
  { id: 4, text: 'The "doorway effect": Walking through a doorway makes you forget what you were thinking.', textKa: '"\u10D9\u10D0\u10E0\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8": \u10D9\u10D0\u10E0\u10E8\u10D8 \u10D2\u10D0\u10D5\u10DA\u10D0 \u10D2\u10D0\u10D2\u10D0\u10D5\u10D8\u10EC\u10E7\u10D4\u10D1\u10D8\u10DC\u10D4\u10D1\u10E1 \u10E0\u10D0\u10D6\u10D4 \u10E4\u10D8\u10E5\u10E0\u10DD\u10D1\u10D3\u10D8\u10D7.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:door-open' },
  { id: 5, text: 'We consciously process about 50 bits per second, despite senses receiving millions.', textKa: '\u10E8\u10D4\u10D2\u10DC\u10D4\u10D1\u10E3\u10DA\u10D0\u10D3 \u10EC\u10D0\u10DB\u10E8\u10D8 \u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 50 \u10D1\u10D8\u10E2\u10E1 \u10EC\u10D0\u10DB\u10E8\u10D8, \u10DB\u10D8\u10E3\u10EE\u10D4\u10D3\u10D0\u10D5\u10D0\u10D3 \u10D8\u10DB\u10D8\u10E1\u10D0, \u10E0\u10DD\u10DB \u10D2\u10E0\u10EB\u10DC\u10DD\u10D1\u10D4\u10D1\u10D8 \u10DB\u10D8\u10DA\u10D8\u10DD\u10DC\u10DD\u10D1\u10D8\u10D7 \u10D8\u10E6\u10D4\u10D1\u10E1.', source: 'Perception Research', category: 'Perception', icon: 'mdi:eye-settings-outline' },
  { id: 6, text: 'In Milgram\'s experiment, 65% administered what they believed were lethal shocks under authority.', textKa: '\u10DB\u10D8\u10DA\u10D2\u10E0\u10D0\u10DB\u10D8\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10E8\u10D8 65%-\u10DB\u10D0 \u10DB\u10D8\u10E1\u10EA\u10D0 \u10E1\u10D0\u10E8\u10D8\u10E8\u10D8 \u10D4\u10DA\u10D4\u10E5\u10E2\u10E0\u10DD\u10E8\u10DD\u10D9\u10D8, \u10E0\u10DD\u10DB\u10D4\u10DA\u10D8\u10EA \u10E1\u10D0\u10E1\u10D8\u10D9\u10D5\u10D3\u10D8\u10DA\u10DD\u10D3 \u10DB\u10D8\u10D8\u10E9\u10DC\u10D8\u10D0.', source: 'Social Psychology', category: 'Social', icon: 'mdi:flash-alert-outline' },
  { id: 7, text: 'The placebo effect works even when people know they are taking a placebo.', textKa: '\u10DE\u10DA\u10D0\u10EA\u10D4\u10D1\u10DD\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8 \u10DB\u10E3\u10E8\u10D0\u10DD\u10D1\u10E1 \u10DB\u10D0\u10E8\u10D8\u10DC\u10D0\u10EA, \u10E0\u10DD\u10EA\u10D0 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10DB\u10D0 \u10D8\u10EA\u10D8\u10D0\u10DC, \u10E0\u10DD\u10DB \u10DE\u10DA\u10D0\u10EA\u10D4\u10D1\u10DD\u10E1 \u10D8\u10E6\u10D4\u10D1\u10D4\u10DC.', source: 'Health Psychology', category: 'Health', icon: 'mdi:pill' },
  { id: 8, text: 'Babies recognize their mother\'s voice from birth, having listened in the womb.', textKa: '\u10E9\u10D5\u10D8\u10DA\u10D4\u10D1\u10D8 \u10D3\u10D4\u10D3\u10D8\u10E1 \u10EE\u10DB\u10D0\u10E1 \u10D3\u10D0\u10D1\u10D0\u10D3\u10D4\u10D1\u10D8\u10D3\u10D0\u10DC \u10D0\u10DB\u10DD\u10D8\u10EA\u10DC\u10DD\u10D1\u10D4\u10DC, \u10E0\u10D0\u10D3\u10D2\u10D0\u10DC \u10E1\u10D0\u10E8\u10D5\u10D8\u10DA\u10DD\u10E1\u10DC\u10DD\u10E8\u10D8 \u10E3\u10E1\u10DB\u10D4\u10DC\u10D3\u10DC\u10D4\u10DC.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:baby-carriage' },
  { id: 9, text: 'Even forced smiling can improve your mood via the facial feedback hypothesis.', textKa: '\u10D8\u10EB\u10E3\u10DA\u10D4\u10D1\u10D8\u10D7\u10D8 \u10E6\u10D8\u10DB\u10D8\u10DA\u10D8\u10EA \u10D9\u10D8 \u10E8\u10D4\u10E3\u10EB\u10DA\u10D8\u10D0 \u10D2\u10D0\u10DC\u10EC\u10E7\u10DD\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E3\u10DB\u10EF\u10DD\u10D1\u10D4\u10E1\u10D4\u10D1\u10D0, \u10E1\u10D0\u10EE\u10D8\u10E1 \u10E3\u10D9\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D8 \u10D0\u10E0\u10E1\u10D4\u10D1\u10DD\u10D1\u10D8\u10E1 \u10F0\u10D8\u10DE\u10DD\u10D7\u10D4\u10D6\u10D8\u10E1 \u10DB\u10D8\u10EE\u10D4\u10D3\u10D5\u10D8\u10D7.', source: 'Emotion Research', category: 'Emotion', icon: 'mdi:emoticon-happy-outline' },
  { id: 10, text: 'Dunning-Kruger effect: People with low knowledge overestimate competence; experts underestimate.', textKa: '\u10D3\u10D0\u10DC\u10D8\u10DC\u10D2-\u10D9\u10E0\u10E3\u10D2\u10D4\u10E0\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10DB\u10EA\u10D8\u10E0\u10D4 \u10EA\u10DD\u10D3\u10DC\u10D8\u10E1 \u10DB\u10E5\u10DD\u10DC\u10D4 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8 \u10D2\u10D0\u10D3\u10D0\u10D0\u10ED\u10D0\u10E0\u10D1\u10D4\u10D1\u10D4\u10DC \u10D9\u10DD\u10DB\u10DE\u10D4\u10E2\u10D4\u10DC\u10EA\u10D8\u10D0\u10E1, \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10E2\u10D4\u10D1\u10D8 \u10D9\u10D8 \u10D0\u10DC\u10D0\u10EA\u10D5\u10D0\u10DA\u10D4\u10D1\u10D4\u10DC.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:chart-bell-curve-cumulative' },
  { id: 11, text: 'Your unconscious processes 11 million info pieces per second; conscious handles about 40.', textKa: '\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E5\u10D5\u10D4\u10EA\u10DC\u10DD\u10D1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 \u10EC\u10D0\u10DB\u10E8\u10D8 11 \u10DB\u10D8\u10DA\u10D8\u10DD\u10DC \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA \u10D8\u10DC\u10E4\u10DD\u10E0\u10DB\u10D0\u10EA\u10D8\u10D0\u10E1 \u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10E1; \u10EA\u10DC\u10DD\u10D1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 \u10DB\u10EE\u10DD\u10DA\u10DD\u10D3 40-\u10E1.', source: 'Cognitive Neuroscience', category: 'Brain', icon: 'mdi:head-sync-outline' },
  { id: 12, text: 'Missing one night of sleep can impair memory by up to 40%.', textKa: '\u10D4\u10E0\u10D7\u10D8 \u10E6\u10D0\u10DB\u10D8\u10E1 \u10EB\u10D8\u10DA\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E2\u10DD\u10D5\u10D4\u10D1\u10D0\u10DB \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 40%-\u10DB\u10D3\u10D4 \u10D2\u10D0\u10D0\u10E3\u10D0\u10E0\u10D4\u10E1\u10DD\u10E1.', source: 'Sleep Research', category: 'Memory', icon: 'mdi:power-sleep' },
  { id: 13, text: 'Mirror neurons fire when you act AND when you watch others act\u2014the basis of empathy.', textKa: '\u10E1\u10D0\u10E0\u10D9\u10D8\u10E1 \u10DC\u10D4\u10D8\u10E0\u10DD\u10DC\u10D4\u10D1\u10D8 \u10D0\u10E5\u10E2\u10D8\u10E3\u10E0\u10D3\u10D4\u10D1\u10D0, \u10E0\u10DD\u10CA \u10DB\u10DD\u10E5\u10DB\u10D4\u10D3\u10D4\u10D1\u10D7 \u10D3\u10D0 \u10E0\u10DD\u10CA \u10E1\u10EE\u10D5\u10D4\u10D1\u10E1 \u10E3\u10E7\u10E3\u10E0\u10D4\u10D1\u10D7\u2014\u10D4\u10DB\u10DE\u10D0\u10D7\u10D8\u10D8\u10E1 \u10E1\u10D0\u10E4\u10E3\u10EB\u10D5\u10D4\u10DA\u10D8.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:mirror-variant' },
  { id: 14, text: 'The Stanford Prison Experiment was stopped after 6 days of a planned 2-week run.', textKa: '\u10E1\u10E2\u10D4\u10DC\u10E4\u10DD\u10E0\u10D3\u10D8\u10E1 \u10EA\u10D8\u10EE\u10D8\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10D3\u10D0\u10D2\u10D4\u10D2\u10DB\u10D8\u10DA\u10D8 2 \u10D9\u10D5\u10D8\u10E0\u10D8\u10D3\u10D0\u10DC \u10DB\u10EE\u10DD\u10DA\u10DD\u10D3 6 \u10D3\u10E6\u10D4\u10E8\u10D8 \u10E8\u10D4\u10EC\u10E7\u10D3\u10D0.', source: 'Social Psychology', category: 'Social', icon: 'mdi:shield-alert-outline' },
  { id: 15, text: 'Fear of public speaking affects ~75% of people\u2014more common than fear of death.', textKa: '\u10E1\u10D0\u10EF\u10D0\u10E0\u10DD\u10D3 \u10D2\u10D0\u10DB\u10DD\u10E1\u10D5\u10DA\u10D8\u10E1 \u10E8\u10D8\u10E8\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8\u10E1 ~75%-\u10E1 \u10D0\u10EC\u10E3\u10EE\u10D4\u10D1\u10E1\u2014\u10D8\u10E1 \u10E1\u10D8\u10D9\u10D5\u10D3\u10D8\u10DA\u10D8\u10E1 \u10E8\u10D8\u10E8\u10D6\u10D4 \u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0.', source: 'Clinical Psychology', category: 'Anxiety', icon: 'mdi:microphone-off' },
  { id: 16, text: 'Halo effect: Attractive people are rated as more intelligent, kind, and competent.', textKa: '\u10F0\u10D0\u10DA\u10DD\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10DB\u10D8\u10DB\u10D6\u10D8\u10D3\u10D5\u10D4\u10DA \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10E1 \u10E3\u10E4\u10E0\u10DD \u10D2\u10DD\u10DC\u10D8\u10D4\u10E0\u10D0\u10D3, \u10D9\u10D4\u10D7\u10D8\u10DA\u10D0\u10D3 \u10D3\u10D0 \u10D9\u10DD\u10DB\u10DE\u10D4\u10E2\u10D4\u10DC\u10E2\u10E3\u10E0\u10D0\u10D3 \u10D0\u10E4\u10D0\u10E1\u10D4\u10D1\u10D4\u10DC.', source: 'Social Psychology', category: 'Social', icon: 'mdi:star-circle-outline' },
  { id: 17, text: 'Oxytocin, released during hugging and bonding, promotes trust and empathy.', textKa: '\u10DD\u10E5\u10E1\u10D8\u10E2\u10DD\u10EA\u10D8\u10DC\u10D8, \u10E0\u10DD\u10DB\u10D4\u10DA\u10D8\u10EA \u10D2\u10D0\u10DB\u10DD\u10D8\u10E7\u10DD\u10E4\u10D0 \u10E9\u10D0\u10EE\u10E3\u10E2\u10D4\u10D1\u10D8\u10E1\u10D0\u10E1 \u10D3\u10D0 \u10DB\u10D8\u10D1\u10DB\u10D8\u10E1\u10D0\u10E1, \u10EE\u10D4\u10DA\u10E1 \u10E3\u10EC\u10E7\u10DD\u10D1\u10E1 \u10DC\u10D3\u10DD\u10D1\u10D0\u10E1\u10D0 \u10D3\u10D0 \u10D4\u10DB\u10DE\u10D0\u10D7\u10D8\u10D0\u10E1.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:heart-pulse' },
  { id: 18, text: 'It takes 1/10th of a second to form a first impression\u2014and they tend to be accurate.', textKa: '\u10DE\u10D8\u10E0\u10D5\u10D4\u10DA\u10D8 \u10E8\u10D7\u10D0\u10D1\u10D4\u10ED\u10D3\u10D8\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E9\u10D0\u10DB\u10DD\u10E7\u10D0\u10DA\u10D8\u10D1\u10D4\u10D1\u10D0\u10E1 \u10EC\u10D0\u10DB\u10D8\u10E1 1/10 \u10E1\u10ED\u10D8\u10E0\u10D3\u10D4\u10D1\u10D0\u2014\u10D3\u10D0 \u10D8\u10E1\u10D8\u10DC\u10D8 \u10EE\u10E8\u10D8\u10E0\u10D0\u10D3 \u10D6\u10E3\u10E1\u10E2\u10D8\u10D0.', source: 'Social Psychology', category: 'Social', icon: 'mdi:timer-outline' },
  { id: 19, text: 'Securely attached children have better relationships and self-esteem in adulthood.', textKa: '\u10E3\u10E1\u10D0\u10E4\u10E0\u10D7\u10EE\u10DD\u10D3 \u10DB\u10D8\u10D1\u10DB\u10E3\u10DA \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10DB\u10DD\u10D6\u10E0\u10D3\u10D8\u10DA\u10DD\u10D1\u10D0\u10E8\u10D8 \u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10D8 \u10E3\u10E0\u10D7\u10D8\u10D4\u10E0\u10D7\u10DD\u10D1\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10D7\u10D5\u10D8\u10D7\u10E8\u10D4\u10E4\u10D0\u10E1\u10D4\u10D1\u10D0 \u10D0\u10E5\u10D5\u10D7.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:human-female-boy' },
  { id: 20, text: 'Zeigarnik effect: We remember uncompleted tasks better because they stay active in memory.', textKa: '\u10D6\u10D4\u10D8\u10D2\u10D0\u10E0\u10DC\u10D8\u10D9\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10D3\u10D0\u10E3\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D4\u10DA \u10D3\u10D0\u10D5\u10D0\u10DA\u10D4\u10D1\u10D4\u10D1\u10E1 \u10E3\u10D9\u10D4\u10D7 \u10D5\u10D8\u10DB\u10D0\u10EE\u10E1\u10DD\u10D5\u10E0\u10D4\u10D1\u10D7, \u10E0\u10D0\u10D3\u10D2\u10D0\u10DC \u10D8\u10E1\u10D8\u10DC\u10D8 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0\u10E8\u10D8 \u10D0\u10E5\u10E2\u10D8\u10E3\u10E0\u10D8 \u10E0\u10E9\u10D4\u10D1\u10D0.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:checkbox-blank-circle-outline' },
  { id: 21, text: 'Synesthesia causes some people to see colors when hearing music or associate numbers with colors.', textKa: '\u10E1\u10D8\u10DC\u10D4\u10E1\u10D7\u10D4\u10D6\u10D8\u10D0 \u10D6\u10DD\u10D2\u10D8\u10D4\u10E0\u10D7 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10E1 \u10D0\u10EF\u10D4\u10DC\u10E1 \u10E4\u10D4\u10E0\u10D4\u10D1\u10E1 \u10D3\u10D0\u10D8\u10DC\u10D0\u10EE\u10DD\u10E1 \u10DB\u10E3\u10E1\u10D8\u10D9\u10D8\u10E1 \u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D8\u10E1\u10D0\u10E1 \u10D0\u10DC \u10E0\u10D8\u10EA\u10EE\u10D5\u10D4\u10D1\u10D8 \u10E4\u10D4\u10E0\u10D4\u10D1\u10D7\u10D0\u10DC \u10D3\u10D0\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10DD\u10E1.', source: 'Perception Research', category: 'Perception', icon: 'mdi:palette-outline' },
  { id: 22, text: 'The brain can\'t feel pain\u2014brain surgery can be performed while the patient is awake.', textKa: '\u10E2\u10D5\u10D8\u10DC\u10E1 \u10E2\u10D9\u10D8\u10D5\u10D8\u10DA\u10D8\u10E1 \u10E8\u10D4\u10D2\u10E0\u10EB\u10DC\u10D4\u10D1\u10D0 \u10D0\u10E0 \u10E8\u10D4\u10E3\u10EB\u10DA\u10D8\u10D0\u2014\u10E2\u10D5\u10D8\u10DC\u10D8\u10E1 \u10DD\u10DE\u10D4\u10E0\u10D0\u10EA\u10D8\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10DE\u10D0\u10EA\u10D8\u10D4\u10DC\u10E2\u10D8\u10E1 \u10E4\u10EE\u10D8\u10D6\u10D4\u10DA\u10DD\u10D1\u10D8\u10E1\u10D0\u10E1.', source: 'Neuroscience', category: 'Brain', icon: 'fluent:brain-circuit-20-filled' },
  { id: 23, text: 'Humans can detect over 1 trillion distinct smells, far more than previously thought.', textKa: '\u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10E1 \u10E8\u10D4\u10E3\u10EB\u10DA\u10D8\u10D0 1 \u10E2\u10E0\u10D8\u10DA\u10D8\u10DD\u10DC\u10D6\u10D4 \u10DB\u10D4\u10E2\u10D8 \u10D2\u10D0\u10DC\u10E1\u10EE\u10D5\u10D0\u10D5\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E3\u10DC\u10D8\u10E1 \u10D0\u10DB\u10DD\u10EA\u10DC\u10DD\u10D1\u10D0, \u10D2\u10D0\u10EA\u10D8\u10DA\u10D4\u10D1\u10D8\u10D7 \u10DB\u10D4\u10E2\u10D8 \u10D5\u10D8\u10D3\u10E0\u10D4 \u10D5\u10D8\u10D3\u10E0\u10D4 \u10E4\u10D8\u10E5\u10E0\u10DD\u10D1\u10D3\u10DC\u10D4\u10DC.', source: 'Perception Research', category: 'Perception', icon: 'mdi:scent' },
  { id: 24, text: 'Cognitive Behavioral Therapy (CBT) is as effective as medication for many anxiety disorders.', textKa: '\u10D9\u10DD\u10D2\u10DC\u10D8\u10E2\u10E3\u10E0\u10D8-\u10D1\u10D8\u10F0\u10D4\u10D5\u10D8\u10DD\u10E0\u10D0\u10DA\u10E3\u10E0\u10D8 \u10D7\u10D4\u10E0\u10D0\u10DE\u10D8\u10D0 (CBT) \u10D8\u10E1\u10D4\u10D5\u10D4 \u10D4\u10E4\u10D4\u10E5\u10E2\u10E3\u10E0\u10D8\u10D0 \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10DB\u10D4\u10D3\u10D8\u10D9\u10D0\u10DB\u10D4\u10DC\u10E2\u10D4\u10D1\u10D8, \u10D1\u10D4\u10D5\u10E0\u10D8 \u10E8\u10E4\u10DD\u10D7\u10D5\u10D8\u10D7\u10D8 \u10D0\u10E8\u10DA\u10D8\u10DA\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D9\u10E3\u10E0\u10DC\u10D0\u10DA\u10DD\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1.', source: 'Clinical Psychology', category: 'Health', icon: 'mdi:head-heart-outline' },
  { id: 25, text: 'Children learn language at an extraordinary rate\u2014about 10 new words per day between ages 2 and 6.', textKa: '\u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10D8 \u10D4\u10DC\u10D0\u10E1 \u10D0\u10E0\u10D0\u10E9\u10D5\u10D4\u10E3\u10DA\u10D4\u10D1\u10E0\u10D8\u10D5\u10D8 \u10E2\u10D4\u10DB\u10DE\u10D8\u10D7 \u10E1\u10EC\u10D0\u10D5\u10DA\u10DD\u10D1\u10D4\u10DC\u2014\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 10 \u10D0\u10EE\u10D0\u10DA \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0\u10E1 \u10D3\u10E6\u10D4\u10E8\u10D8 2-\u10D3\u10D0\u10DC 6 \u10EC\u10DA\u10D0\u10DB\u10D3\u10D4.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:message-text-outline' },
  { id: 26, text: 'Stockholm syndrome: Hostages may develop emotional bonds with their captors as a survival mechanism.', textKa: '\u10E1\u10E2\u10DD\u10D9\u10F0\u10DD\u10DA\u10DB\u10D8\u10E1 \u10E1\u10D8\u10DC\u10D3\u10E0\u10DD\u10DB\u10D8: \u10DB\u10EB\u10D4\u10D5\u10DA\u10D4\u10D1\u10DB\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10D4\u10DB\u10DD\u10EA\u10D8\u10E3\u10E0\u10D8 \u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D8 \u10D2\u10D0\u10DC\u10D0\u10D5\u10D8\u10D7\u10D0\u10E0\u10DD\u10DC \u10D2\u10D0\u10DB\u10E2\u10D0\u10EA\u10D4\u10D1\u10D4\u10DA\u10D7\u10D0\u10DC, \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10D2\u10D0\u10D3\u10D0\u10E0\u10E9\u10D4\u10DC\u10D8\u10E1 \u10DB\u10D4\u10E5\u10D0\u10DC\u10D8\u10D6\u10DB\u10D8.', source: 'Clinical Psychology', category: 'Social', icon: 'mdi:link-variant' },
  { id: 27, text: 'Your brain generates about 12-25 watts of electricity\u2014enough to power a low-wattage LED bulb.', textKa: '\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E2\u10D5\u10D8\u10DC\u10D8 \u10D2\u10D0\u10DB\u10DD\u10D8\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10E1 \u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 12-25 \u10D5\u10D0\u10E2 \u10D4\u10DA\u10D4\u10E5\u10E2\u10E0\u10DD\u10DD\u10D1\u10D0\u10E1\u2014\u10E1\u10D0\u10D9\u10DB\u10D0\u10E0\u10D8\u10E1\u10D8 LED \u10DC\u10D0\u10D7\u10E3\u10E0\u10D8\u10E1 \u10D2\u10D0\u10E1\u10D0\u10DC\u10D0\u10D7\u10D4\u10D1\u10DA\u10D0\u10D3.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:lightbulb-on-outline' },
  { id: 28, text: 'Multitasking reduces productivity by up to 40%\u2014your brain rapidly switches, not truly parallel-processes.', textKa: '\u10DB\u10E3\u10DA\u10E2\u10D8\u10E2\u10D0\u10E1\u10D9\u10D8\u10DC\u10D2\u10D8 \u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10D8\u10E3\u10DA\u10DD\u10D1\u10D0\u10E1 40%-\u10D8\u10D7 \u10D0\u10DB\u10EA\u10D8\u10E0\u10D4\u10D1\u10E1\u2014\u10E2\u10D5\u10D8\u10DC\u10D8 \u10E1\u10EC\u10E0\u10D0\u10E4\u10D0\u10D3 \u10D2\u10D0\u10D3\u10D0\u10E0\u10D7\u10D0\u10D5\u10E1, \u10D3\u10D0 \u10D0\u10E0 \u10DE\u10D0\u10E0\u10D0\u10DA\u10D4\u10DA\u10E3\u10E0\u10D0\u10D3 \u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10E1.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:swap-horizontal-circle-outline' },
  { id: 29, text: 'Laughter is 30 times more likely in social situations than when alone\u2014it\'s primarily social.', textKa: '\u10E1\u10D8\u10EA\u10D8\u10DA\u10D8 30-\u10EF\u10D4\u10E0 \u10E3\u10E4\u10E0\u10DD \u10EE\u10E8\u10D8\u10E0\u10D8\u10D0 \u10E1\u10DD\u10EA\u10D8\u10D0\u10DA\u10E3\u10E0 \u10E1\u10D8\u10E2\u10E3\u10D0\u10EA\u10D8\u10D4\u10D1\u10E8\u10D8 \u10D5\u10D8\u10D3\u10E0\u10D4 \u10DB\u10D0\u10E0\u10E2\u10DD\u10DD\u10D1\u10D8\u10E1\u10D0\u10E1\u2014\u10D8\u10E1 \u10E3\u10DE\u10D8\u10E0\u10D5\u10D4\u10DA\u10D4\u10E1\u10D0\u10D3 \u10E1\u10DD\u10EA\u10D8\u10D0\u10DA\u10E3\u10E0\u10D8 \u10E4\u10D4\u10DC\u10DD\u10DB\u10D4\u10DC\u10D8\u10D0.', source: 'Social Psychology', category: 'Emotion', icon: 'mdi:emoticon-lol-outline' },
  { id: 30, text: 'The serial position effect: We best remember the first and last items in a list.', textKa: '\u10E1\u10D4\u10E0\u10D8\u10E3\u10DA\u10D8 \u10DE\u10DD\u10D6\u10D8\u10EA\u10D8\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10E1\u10D8\u10D8\u10E1 \u10DE\u10D8\u10E0\u10D5\u10D4\u10DA \u10D3\u10D0 \u10D1\u10DD\u10DA\u10DD \u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D4\u10D1\u10E1 \u10E1\u10D0\u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10DD\u10D3 \u10D5\u10D8\u10DB\u10D0\u10EE\u10E1\u10DD\u10D5\u10E0\u10D4\u10D1\u10D7.', source: 'Memory Research', category: 'Memory', icon: 'mdi:format-list-numbered' },
  { id: 31, text: 'Bilingual people may delay the onset of dementia by an average of 4-5 years.', textKa: '\u10DD\u10E0\u10D4\u10DC\u10DD\u10D5\u10D0\u10DC\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8 \u10D3\u10D4\u10DB\u10D4\u10DC\u10EA\u10D8\u10D8\u10E1 \u10D3\u10D0\u10EC\u10E7\u10D4\u10D1\u10D0\u10E1 \u10E1\u10D0\u10E8\u10E3\u10D0\u10DA\u10DD\u10D3 4-5 \u10EC\u10DA\u10D8\u10D7 \u10D0\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10D4\u10DC.', source: 'Cognitive Neuroscience', category: 'Brain', icon: 'mdi:translate' },
  { id: 32, text: 'Emotional memories are stored more vividly because the amygdala strengthens the memory trace.', textKa: '\u10D4\u10DB\u10DD\u10EA\u10D8\u10E3\u10E0\u10D8 \u10DB\u10DD\u10D2\u10DD\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8 \u10E3\u10E4\u10E0\u10DD \u10DC\u10D0\u10D7\u10DA\u10D0\u10D3 \u10D8\u10DC\u10D0\u10EE\u10D4\u10D1\u10D0, \u10E0\u10D0\u10D3\u10D2\u10D0\u10DC \u10D0\u10DB\u10D8\u10D2\u10D3\u10D0\u10DA\u10D0 \u10D0\u10EB\u10DA\u10D8\u10D4\u10E0\u10D4\u10D1\u10E1 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D9\u10D5\u10D0\u10DA\u10E1.', source: 'Memory Research', category: 'Memory', icon: 'mdi:heart-flash' },
  { id: 33, text: 'Sleep deprivation for just 17 hours impairs cognitive function as much as a blood alcohol level of 0.05%.', textKa: '17 \u10E1\u10D0\u10D0\u10D7\u10D8\u10D0\u10DC\u10D8 \u10EB\u10D8\u10DA\u10D8\u10E1 \u10D3\u10D4\u10E4\u10D8\u10EA\u10D8\u10E2\u10D8 \u10D9\u10DD\u10D2\u10DC\u10D8\u10E2\u10E3\u10E0 \u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0\u10E1 \u10D8\u10E1\u10D4 \u10D0\u10E3\u10D0\u10E0\u10D4\u10E1\u10D4\u10D1\u10E1, \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10E1\u10D8\u10E1\u10EE\u10DA\u10E8\u10D8 \u10D0\u10DA\u10D9\u10DD\u10F0\u10DD\u10DA\u10D8\u10E1 \u10D3\u10DD\u10DC\u10D4 0.05%.', source: 'Sleep Research', category: 'Health', icon: 'mdi:weather-night' },
  { id: 34, text: 'Phobias can be inherited\u2014studies show fear responses can be passed through epigenetic changes.', textKa: '\u10E4\u10DD\u10D1\u10D8\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10DB\u10D4\u10DB\u10D9\u10D5\u10D8\u10D3\u10E0\u10D4\u10DD\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10D8\u10EA\u10D4\u10E1\u2014\u10D9\u10D5\u10DA\u10D4\u10D5\u10D4\u10D1\u10D8 \u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10E1, \u10E0\u10DD\u10DB \u10E8\u10D8\u10E8\u10D8\u10E1 \u10E0\u10D4\u10D0\u10E5\u10EA\u10D8\u10D4\u10D1\u10D8 \u10D4\u10DE\u10D8\u10D2\u10D4\u10DC\u10D4\u10E2\u10D8\u10D9\u10E3\u10E0\u10D8 \u10EA\u10D5\u10DA\u10D8\u10DA\u10D4\u10D1\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10D4\u10EA\u10D4\u10DB\u10D0.', source: 'Biological Psychology', category: 'Anxiety', icon: 'mdi:spider-thread' },
  { id: 35, text: 'The peak-end rule: We judge experiences mainly by their most intense moment and their ending.', textKa: '\u10DE\u10D8\u10D9\u10D8\u10E1\u10D0 \u10D3\u10D0 \u10D3\u10D0\u10E1\u10D0\u10E1\u10E0\u10E3\u10DA\u10D8\u10E1 \u10EC\u10D4\u10E1\u10D8: \u10D2\u10D0\u10DB\u10DD\u10EA\u10D3\u10D8\u10DA\u10D4\u10D1\u10D4\u10D1\u10E1 \u10D5\u10D0\u10E4\u10D0\u10E1\u10D4\u10D1\u10D7 \u10EB\u10D8\u10E0\u10D8\u10D7\u10D0\u10D3\u10D0\u10D3 \u10DB\u10D0\u10D7\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10D8\u10DC\u10E2\u10D4\u10DC\u10E1\u10D8\u10E3\u10E0\u10D8 \u10DB\u10DD\u10DB\u10D4\u10DC\u10E2\u10D8\u10D7\u10D0 \u10D3\u10D0 \u10D3\u10D0\u10E1\u10D0\u10E1\u10E0\u10E3\u10DA\u10D8\u10D7.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:chart-timeline-variant-shimmer' }
]

export const STORIES: Story[] = [
  {
    id: 1,
    title: 'Pavlov\'s Accidental Discovery',
    titleKa: '\u10DE\u10D0\u10D5\u10DA\u10DD\u10D5\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D8\u10D7\u10D8 \u10D0\u10E6\u10DB\u10DD\u10E9\u10D4\u10DC\u10D0',
    chapterId: 6,
    icon: 'mdi:bell-ring-outline',
    content: 'In the 1890s, Russian physiologist Ivan Pavlov was conducting research on the digestive systems of dogs at the Institute of Experimental Medicine in St. Petersburg. His work was meticulous\u2014he had surgically implanted tubes in dogs\' cheeks to precisely measure saliva output when food was presented.\n\nBut something unexpected kept disrupting his carefully controlled experiments. The dogs began salivating before any food appeared. They drooled when they heard the footsteps of the lab assistant. They salivated at the sight of the food bowl, or even when they heard the door open.\n\nRather than dismissing this as a nuisance, Pavlov recognized he had stumbled upon something extraordinary. He called these premature responses "psychic secretions" and redesigned his entire research program to study them.\n\nPavlov began systematically pairing a neutral stimulus\u2014a metronome (often misremembered as a bell)\u2014with the presentation of food. After repeated pairings, the dogs would salivate at the sound of the metronome alone, with no food in sight.\n\nHe documented the entire process with scientific rigor: acquisition (learning the association), extinction (unlearning it when food stops coming), spontaneous recovery (the response returning after a rest period), and generalization (responding to similar sounds).\n\nThis accidental discovery became the foundation of classical conditioning and earned Pavlov the Nobel Prize in Physiology in 1904. His work influenced generations of psychologists, from John Watson to modern neuroscientists studying how the brain forms associations.',
    contentKa: '1890-\u10D8\u10D0\u10DC \u10EC\u10DA\u10D4\u10D1\u10E8\u10D8, \u10E0\u10E3\u10E1\u10D8 \u10E4\u10D8\u10D6\u10D8\u10DD\u10DA\u10DD\u10D2\u10D8 \u10D8\u10D5\u10D0\u10DC \u10DE\u10D0\u10D5\u10DA\u10DD\u10D5\u10D8 \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E1\u10D0\u10ED\u10DB\u10DA\u10D8\u10E1 \u10E1\u10D8\u10E1\u10E2\u10D4\u10DB\u10D0\u10E1 \u10D8\u10D9\u10D5\u10DA\u10D4\u10D5\u10D3\u10D0 \u10E1\u10D0\u10DC\u10D9\u10E2-\u10DE\u10D4\u10E2\u10D4\u10E0\u10D1\u10E3\u10E0\u10D2\u10E8\u10D8. \u10DB\u10D0\u10DC \u10E8\u10D4\u10DC\u10D8\u10E8\u10DC\u10D0, \u10E0\u10DD\u10DB \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10E1 \u10D3\u10D0\u10D8\u10EC\u10E7\u10D4\u10D1\u10D3\u10DC\u10D4\u10DC \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4\u10CA \u2014 \u10DA\u10D0\u10D1\u10DD\u10E0\u10D0\u10DC\u10E2\u10D8\u10E1 \u10DC\u10D0\u10D1\u10D8\u10EF\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10D2\u10DD\u10DC\u10D8\u10E1\u10D0\u10E1. \u10DE\u10D0\u10D5\u10DA\u10DD\u10D5\u10DB\u10D0 \u10D0\u10DB\u10D0\u10E8\u10D8 \u10DB\u10D4\u10E2\u10E0\u10DD\u10DC\u10DD\u10DB\u10D8\u10E1 \u10EE\u10DB\u10D0 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10E1 \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D0 \u10D3\u10D0 \u10D0\u10E6\u10DB\u10DD\u10D0\u10E9\u10D8\u10DC\u10D0 \u10D9\u10DA\u10D0\u10E1\u10D8\u10D9\u10E3\u10E0\u10D8 \u10D2\u10D0\u10DC\u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D0.',
    moral: 'Great discoveries emerge when curious minds pay attention to the unexpected. Pavlov could have ignored the dogs\' early salivation, but instead he asked "why?" and changed psychology forever.',
    moralKa: '\u10D3\u10D8\u10D3\u10D8 \u10D0\u10E6\u10DB\u10DD\u10E9\u10D4\u10DC\u10D4\u10D1\u10D8 \u10D8\u10D1\u10D0\u10D3\u10D4\u10D1\u10D0, \u10E0\u10DD\u10CA \u10EA\u10DC\u10DD\u10D1\u10D8\u10E1\u10DB\u10DD\u10E7\u10D5\u10D0\u10E0\u10D4 \u10D2\u10DD\u10DC\u10D4\u10D1\u10D0 \u10E7\u10E3\u10E0\u10D0\u10D3\u10E6\u10D4\u10D1\u10D0\u10E1 \u10DB\u10DD\u10E3\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10E1 \u10DB\u10D8\u10D0\u10E5\u10EA\u10D4\u10D5\u10E1.'
  },
  {
    id: 2,
    title: 'The Story of Phineas Gage',
    titleKa: '\u10E4\u10D8\u10DC\u10D4\u10D0\u10E1 \u10D2\u10D4\u10D8\u10EF\u10D8\u10E1 \u10D8\u10E1\u10E2\u10DD\u10E0\u10D8\u10D0',
    chapterId: 3,
    icon: 'fluent:brain-circuit-20-filled',
    content: 'On September 13, 1848, 25-year-old Phineas Gage was working as a railroad construction foreman in Cavendish, Vermont. His crew was blasting rock to clear a path for new rail tracks. Gage\'s job was to pack explosive powder into drilled holes using a specially made iron tamping rod\u201443 inches long, 1.25 inches in diameter, and weighing over 13 pounds.\n\nIn a moment of distraction\u2014perhaps he turned to speak to a colleague\u2014Gage struck the iron rod against the rock before sand had been poured as a buffer. The powder ignited. The explosion launched the iron rod like a missile straight through his skull, entering below his left cheekbone and exiting through the top of his head, landing 80 feet away.\n\nAstonishingly, Gage did not die. He was conscious within minutes, able to walk and talk. The local physician, Dr. John Harlow, treated the gruesome wound. Gage physically recovered over the following months, but something fundamental had changed.\n\nBefore the accident, Gage was described as reliable, well-balanced, and a shrewd businessman\u2014"the most efficient and capable foreman." Afterward, his personality was unrecognizable. He became profane, impulsive, disrespectful, and unable to follow through on plans. Friends said he was "no longer Gage."\n\nHis case became one of the most important in neuroscience history. It provided the first strong evidence that specific brain regions\u2014particularly the prefrontal cortex\u2014are responsible for personality, decision-making, and social behavior. Modern neuroimaging has confirmed the rod destroyed much of his left frontal lobe, especially areas involved in emotional regulation and planning.',
    contentKa: '1848 \u10EC\u10D4\u10DA\u10E1, \u10E4\u10D8\u10DC\u10D4\u10D0\u10E1 \u10D2\u10D4\u10D8\u10EF\u10D8 \u10E0\u10D9\u10D8\u10DC\u10D8\u10D2\u10D6\u10D8\u10E1 \u10DB\u10E8\u10D4\u10DC\u10D4\u10D1\u10DA\u10DD\u10D1\u10D8\u10E1 \u10DD\u10E1\u10E2\u10D0\u10E2\u10D8 \u10D8\u10E7\u10DD. \u10D0\u10E4\u10D4\u10D7\u10E5\u10D4\u10D1\u10D8\u10E1\u10D0\u10E1 \u10E0\u10D9\u10D8\u10DC\u10D8\u10E1 \u10E6\u10D4\u10E0\u10EB\u10D8 \u10DB\u10D8\u10E1 \u10D7\u10D0\u10D5\u10D8\u10E1 \u10E5\u10D0\u10DA\u10D0\u10E8\u10D8 \u10E8\u10D4\u10D5\u10D8\u10D3\u10D0 \u10D3\u10D0 \u10D7\u10D0\u10D5\u10D8\u10E1 \u10D6\u10D4\u10DB\u10DD\u10D3\u10D0\u10DC \u10D2\u10D0\u10DB\u10DD\u10D5\u10D8\u10D3\u10D0. \u10D2\u10D4\u10D8\u10EF\u10D8 \u10D2\u10D0\u10D3\u10D0\u10E0\u10E9\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10DB\u10D8\u10E1\u10D8 \u10DE\u10D8\u10E0\u10DD\u10D5\u10DC\u10D4\u10D1\u10D0 \u10E1\u10E0\u10E3\u10DA\u10D8\u10D0\u10D3 \u10E8\u10D4\u10D8\u10EA\u10D5\u10D0\u10DA\u10D0. \u10D4\u10E1 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D0 \u10DC\u10D4\u10D8\u10E0\u10DD\u10DB\u10D4\u10EA\u10DC\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D8\u10E1\u10E2\u10DD\u10E0\u10D8\u10D0\u10E8\u10D8 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D5\u10D0\u10DC\u10D8 \u10D2\u10D0\u10EE\u10D3\u10D0.',
    moral: 'The brain is the seat of personality\u2014damage to specific areas transforms who we are. Gage\'s case taught us that our sense of self is rooted in biology.',
    moralKa: '\u10E2\u10D5\u10D8\u10DC\u10D8 \u10DE\u10D8\u10E0\u10DD\u10D5\u10DC\u10D4\u10D1\u10D8\u10E1 \u10E1\u10D0\u10D3\u10D2\u10E3\u10E0\u10D8\u10D0\u2014\u10D9\u10DD\u10DC\u10D9\u10E0\u10D4\u10E2\u10E3\u10DA\u10D8 \u10E3\u10D1\u10DC\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10D6\u10D8\u10D0\u10DC\u10D4\u10D1\u10D0 \u10D2\u10D5\u10D0\u10E5\u10CA\u10D4\u10D5\u10E1 \u10E1\u10EE\u10D5\u10D0 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D0\u10D3.'
  },
  {
    id: 3,
    title: 'Little Albert and the White Rat',
    titleKa: '\u10DE\u10D0\u10E2\u10D0\u10E0\u10D0 \u10D0\u10DA\u10D1\u10D4\u10E0\u10E2\u10D8 \u10D3\u10D0 \u10D7\u10D4\u10D7\u10E0\u10D8 \u10D5\u10D8\u10E0\u10D7\u10EE\u10D0',
    chapterId: 6,
    icon: 'mdi:emoticon-cry-outline',
    content: 'In 1920, John B. Watson and Rosalie Rayner conducted one of psychology\'s most controversial experiments at Johns Hopkins University. Their subject was a 9-month-old infant known as "Little Albert."\n\nAlbert was described as a healthy, stable baby who showed no fear of animals. Watson and Rayner presented him with a white laboratory rat, and Albert reached for it with curiosity and delight. He showed the same calm response to a rabbit, a dog, a monkey, masks, and even burning newspapers.\n\nThen the conditioning began. Each time Albert reached for the white rat, Watson struck a steel bar with a hammer directly behind the infant\'s head, producing a terrifying noise. Albert burst into tears.\n\nAfter just seven pairings of the rat with the loud noise, Albert\'s behavior had fundamentally changed. Now, the mere sight of the white rat\u2014without any noise\u2014caused him to cry, crawl away rapidly, and show visible distress.\n\nMore remarkably, his fear generalized. Albert became afraid of a rabbit, a dog, a fur coat, a Santa Claus mask with a white beard, and even cotton wool. Anything white and furry triggered the same terror.\n\nWatson and Rayner never "unconditioned" Albert\'s fear. The experiment was stopped when Albert\'s mother, a wet nurse at the hospital, left with her child. Albert\'s true identity remained a mystery for decades. Recent research suggests he was Douglas Merritte, who sadly died of hydrocephalus at age six.\n\nThe experiment proved that emotional responses can be learned through classical conditioning. But it also raised profound ethical questions that eventually led to strict research protections for human subjects.',
    contentKa: '1920 \u10EC\u10D4\u10DA\u10E1, \u10EF\u10DD\u10DC \u10E3\u10DD\u10E2\u10E1\u10DD\u10DC\u10DB\u10D0 \u10D3\u10D0 \u10E0\u10DD\u10D6\u10D0\u10DA\u10D8 \u10E0\u10D4\u10D8\u10DC\u10D4\u10E0\u10DB\u10D0 \u10E9\u10D0\u10D0\u10E2\u10D0\u10E0\u10D4\u10E1 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10E1\u10D0\u10D9\u10D0\u10DB\u10D0\u10D7\u10DD \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8. \u10DB\u10D0\u10D7 9 \u10D7\u10D5\u10D8\u10E1 \u10E9\u10D5\u10D8\u10DA\u10E1 \u10D7\u10D4\u10D7\u10E0\u10D8 \u10D5\u10D8\u10E0\u10D7\u10EE\u10D0 \u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10E1 \u10EE\u10DB\u10D0\u10DB\u10D0\u10E3\u10DA \u10E1\u10D0\u10E8\u10D8\u10DC\u10D4\u10DA \u10EE\u10DB\u10D0\u10E1\u10D7\u10D0\u10DC \u10D4\u10E0\u10D7\u10D0\u10D3. 7 \u10D3\u10D0\u10EC\u10E7\u10D5\u10D8\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2, \u10D0\u10DA\u10D1\u10D4\u10E0\u10E2\u10D8 \u10D5\u10D8\u10E0\u10D7\u10EE\u10D0\u10E1 \u10EE\u10D4\u10D3\u10D0\u10D5\u10D3\u10D0 \u10EE\u10DB\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4\u10CA. \u10D4\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10D0\u10DB\u10E2\u10D9\u10D8\u10EA\u10D4\u10D1\u10D3\u10D0, \u10E0\u10DD\u10DB \u10D4\u10DB\u10DD\u10EA\u10D8\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D0.',
    moral: 'Fears can be learned through association. This historic experiment also taught us the importance of ethical guidelines in research.',
    moralKa: '\u10E8\u10D8\u10E8\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10D0\u10E1\u10DD\u10EA\u10D8\u10D0\u10EA\u10D8\u10D8\u10D7 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D0. \u10D4\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10D4\u10D7\u10D8\u10D9\u10E3\u10E0\u10D8 \u10EC\u10D4\u10E1\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0\u10E1\u10D0\u10EA \u10D2\u10D5\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10D0.'
  },
  {
    id: 4,
    title: 'The Invisible Gorilla',
    titleKa: '\u10E3\u10EE\u10D8\u10DA\u10D0\u10D5\u10D8 \u10D2\u10DD\u10E0\u10D8\u10DA\u10D0',
    chapterId: 4,
    icon: 'mdi:eye-off-outline',
    content: 'In 1999, psychologists Daniel Simons and Christopher Chabris designed an experiment that would challenge our most basic assumptions about awareness. They asked participants to watch a short video of six people\u2014three in white shirts, three in black\u2014passing basketballs to each other.\n\nThe task was simple: count the number of passes made by the white-shirted team. Participants focused intently, tracking each throw.\n\nHalfway through the video, something extraordinary happened. A person in a full gorilla costume walked slowly into the center of the frame, faced the camera, thumped its chest, and walked out. The gorilla was visible for a full nine seconds.\n\nWhen asked afterward, roughly half the participants had absolutely no idea a gorilla had appeared. They were shocked when shown the video again. Some refused to believe it was the same video.\n\nThe experiment demonstrated what Simons and Chabris called "inattentional blindness"\u2014the failure to notice fully visible but unexpected objects when our attention is focused elsewhere. It\'s not that our eyes didn\'t see the gorilla; our brain simply didn\'t process it because it wasn\'t relevant to the counting task.\n\nThis research has profound real-world implications. Radiologists can miss tumors on X-rays when focused on something else. Drivers may not see pedestrians when distracted. Eyewitnesses miss critical details during crimes.\n\nThe invisible gorilla reminds us that seeing and noticing are two fundamentally different cognitive processes, and that our confident sense of awareness is largely an illusion.',
    contentKa: '1999 \u10EC\u10D4\u10DA\u10E1, \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D4\u10D1\u10DB\u10D0 \u10DB\u10DD\u10DC\u10D0\u10EC\u10D8\u10DA\u10D4\u10D4\u10D1\u10E1 \u10E1\u10D7\u10EE\u10DD\u10D5\u10D4\u10E1 \u10D5\u10D8\u10D3\u10D4\u10DD\u10E8\u10D8 \u10D1\u10D0\u10E1\u10D9\u10D4\u10E2\u10D1\u10DD\u10DA\u10D8\u10E1 \u10D2\u10D0\u10D3\u10D0\u10EA\u10D4\u10DB\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10D7\u10D5\u10DA\u10D0 \u10D3\u10D0\u10D4\u10D5\u10D0\u10DA\u10D0. \u10D5\u10D8\u10D3\u10D4\u10DD\u10E8\u10D8 \u10D2\u10DD\u10E0\u10D8\u10DA\u10D0\u10E1 \u10D9\u10DD\u10E1\u10E2\u10D8\u10E3\u10DB\u10E8\u10D8 \u10D2\u10D0\u10DB\u10DD\u10EC\u10E7\u10DD\u10D1\u10D8\u10DA\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8 \u10D2\u10D0\u10D8\u10D0\u10E0\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10DB\u10DD\u10DC\u10D0\u10EC\u10D8\u10DA\u10D4\u10D4\u10D1\u10D8\u10E1 \u10DC\u10D0\u10EE\u10D4\u10D5\u10D0\u10E0\u10DB\u10D0 \u10D5\u10D4\u10E0 \u10E8\u10D4\u10DC\u10D8\u10E8\u10DC\u10D0. \u10D4\u10E1 \u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10E1, \u10E0\u10DD\u10DB \u10EC\u10D4\u10DC\u10D0 \u10D3\u10D0 \u10E8\u10D4\u10DB\u10E9\u10DC\u10D4\u10D5\u10D0 \u10E1\u10E0\u10E3\u10DA\u10D8\u10D0\u10D3 \u10D2\u10D0\u10DC\u10E1\u10EE\u10D5\u10D0\u10D5\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DE\u10E0\u10DD\u10EA\u10D4\u10E1\u10D4\u10D1\u10D8\u10D0.',
    moral: 'Our attention is far more limited than we think. We can look directly at something and still fail to see it if our focus is elsewhere.',
    moralKa: '\u10E9\u10D5\u10D4\u10DC\u10D8 \u10E7\u10E3\u10E0\u10D0\u10D3\u10E6\u10D4\u10D1\u10D0 \u10D2\u10D0\u10EA\u10D8\u10DA\u10D4\u10D1\u10D8\u10D7 \u10E3\u10E4\u10E0\u10DD \u10E8\u10D4\u10D6\u10E6\u10E3\u10D3\u10E3\u10DA\u10D8\u10D0, \u10D5\u10D8\u10D3\u10E0\u10D4 \u10D2\u10D5\u10D2\u10DD\u10DC\u10D8\u10D0.'
  },
  {
    id: 5,
    title: 'Harlow\'s Monkeys and the Need for Love',
    titleKa: '\u10F0\u10D0\u10E0\u10DA\u10DD\u10E3\u10E1 \u10DB\u10D0\u10D8\u10DB\u10E3\u10DC\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10E1\u10D8\u10E7\u10D5\u10D0\u10E0\u10E3\u10DA\u10D8\u10E1 \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D4\u10D1\u10D0',
    chapterId: 9,
    icon: 'mdi:heart-outline',
    content: 'In the 1950s and 60s, psychologist Harry Harlow conducted experiments at the University of Wisconsin that would forever change our understanding of love and attachment. At the time, the prevailing view\u2014promoted by behaviorists like Watson\u2014was that infants bonded with mothers primarily because mothers provided food.\n\nHarlow challenged this assumption by separating infant rhesus monkeys from their biological mothers and giving them two surrogate "mothers." One was made of bare wire mesh with a feeding bottle attached. The other was made of soft terry cloth with no food source.\n\nIf the behaviorists were right, the babies should have preferred the wire mother who provided nourishment. But that\'s not what happened.\n\nThe infant monkeys spent nearly all their time clinging to the soft cloth mother. They went to the wire mother only briefly to feed, then immediately returned to the cloth surrogate. When frightened by a mechanical spider or other threats, they ran to the cloth mother for comfort, clinging desperately.\n\nEven more telling: monkeys raised with only the wire mother developed severe psychological problems. They rocked back and forth, showed signs of depression, were aggressive, and had difficulty socializing with other monkeys. Those with the cloth mother, while not perfectly adjusted, were significantly healthier emotionally.\n\nLater experiments showed that monkeys deprived of all maternal contact became profoundly disturbed as adults\u2014unable to parent their own offspring, some refusing to nurse or even harming their babies.\n\nHarlow\'s work, though ethically controversial by today\'s standards, provided irrefutable evidence that emotional comfort, touch, and security are as fundamental as food and water for healthy development.',
    contentKa: '1950-60-\u10D8\u10D0\u10DC \u10EC\u10DA\u10D4\u10D1\u10E8\u10D8, \u10F0\u10D0\u10E0\u10D8 \u10F0\u10D0\u10E0\u10DA\u10DD\u10E3\u10DB\u10D0 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D4\u10D1\u10D8 \u10E9\u10D0\u10D0\u10E2\u10D0\u10E0\u10D0 \u10E0\u10D4\u10D6\u10E3\u10E1\u10D8\u10E1 \u10DB\u10D0\u10D8\u10DB\u10E3\u10DC\u10D4\u10D1\u10D6\u10D4. \u10DB\u10D0\u10DC \u10E9\u10D5\u10D8\u10DA\u10D4\u10D1\u10E1 \u10DD\u10E0\u10D8 \u10E1\u10E3\u10E0\u10DD\u10D2\u10D0\u10E2\u10D8 \u10D3\u10D4\u10D3\u10D0 \u10DB\u10D8\u10E1\u10EA\u10D0: \u10DB\u10D0\u10D5\u10D7\u10E3\u10DA\u10EE\u10D0\u10D5\u10DA\u10DD\u10D5\u10D0\u10DC\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D8\u10D7 \u10D3\u10D0 \u10E0\u10D1\u10D8\u10DA\u10D8 \u10E5\u10E1\u10DD\u10D5\u10D8\u10DA\u10D8\u10D0\u10DC\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4. \u10E9\u10D5\u10D8\u10DA\u10D4\u10D1\u10DB\u10D0 \u10E0\u10D1\u10D8\u10DA \u10D3\u10D4\u10D3\u10D0 \u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10E1\u2014\u10D4\u10DB\u10DD\u10EA\u10D8\u10E3\u10E0\u10D8 \u10D9\u10DD\u10DB\u10E4\u10DD\u10E0\u10E2\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D6\u10D4 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D5\u10D0\u10DC\u10D8\u10D0.',
    moral: 'Love, comfort, and physical touch are fundamental needs that shape healthy development\u2014not luxuries, but biological necessities.',
    moralKa: '\u10E1\u10D8\u10E7\u10D5\u10D0\u10E0\u10E3\u10DA\u10D8, \u10D9\u10DD\u10DB\u10E4\u10DD\u10E0\u10E2\u10D8 \u10D3\u10D0 \u10E4\u10D8\u10D6\u10D8\u10D9\u10E3\u10E0\u10D8 \u10E8\u10D4\u10EE\u10D4\u10D1\u10D0 \u10E4\u10E3\u10DC\u10D3\u10D0\u10DB\u10D4\u10DC\u10E2\u10E3\u10E0\u10D8 \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D4\u10D1\u10D4\u10D1\u10D8\u10D0 \u10EF\u10D0\u10DC\u10E1\u10D0\u10E6\u10D8 \u10D2\u10D0\u10DC\u10D5\u10D8\u10D7\u10D0\u10E0\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1.'
  },
  {
    id: 6,
    title: 'The Marshmallow Test',
    titleKa: '\u10DB\u10D0\u10E0\u10E8\u10DB\u10D4\u10DA\u10DD\u10E3\u10E1 \u10E2\u10D4\u10E1\u10E2\u10D8',
    chapterId: 10,
    icon: 'mdi:cookie-outline',
    content: 'In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment. He brought preschool children, typically 4 to 5 years old, into a room one at a time. On the table sat a single marshmallow (or cookie or pretzel\u2014the child could choose their preferred treat).\n\nThe researcher told the child: "You can eat this marshmallow right now. But if you wait until I come back, you can have two marshmallows instead." Then the researcher left the room for about 15 minutes.\n\nHidden cameras recorded what happened next, and the footage became some of psychology\'s most delightful viewing. Some children ate the marshmallow the instant the door closed. Others tried creative strategies: covering their eyes, turning around, singing to themselves, petting the marshmallow like a tiny animal, or licking it and putting it back.\n\nAbout one-third of the children managed to wait the full 15 minutes. Two-thirds could not resist.\n\nYears later, Mischel followed up with the children\u2014now teenagers and adults. The results were striking. Children who had waited longer scored significantly higher on SATs (210 points higher on average), were described as more competent by parents, handled stress better, were less likely to abuse substances, and maintained healthier body weights.\n\nFollow-up studies spanning four decades showed that the ability to delay gratification in childhood predicted better outcomes across nearly every measure of life success.\n\nHowever, later research has added nuance. A 2018 study by Tyler Watts showed that socioeconomic factors and home environment strongly influence the ability to delay gratification\u2014children from stable, resource-rich homes may simply have more reason to trust that the second marshmallow will actually appear.',
    contentKa: '1960-70-\u10D8\u10D0\u10DC \u10EC\u10DA\u10D4\u10D1\u10E8\u10D8, \u10E1\u10E2\u10D4\u10DC\u10E4\u10DD\u10E0\u10D3\u10D8\u10E1 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10DB\u10D0 \u10E3\u10DD\u10DA\u10E2\u10D4\u10E0 \u10DB\u10D8\u10E8\u10D4\u10DA\u10DB\u10D0 \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10DB\u10D0\u10E0\u10E2\u10D8\u10D5\u10D8 \u10D0\u10E0\u10E9\u10D4\u10D5\u10D0\u10DC\u10D8\u10E1 \u10EC\u10D8\u10DC\u10D0\u10E8\u10D4 \u10D3\u10D0\u10D0\u10E7\u10D4\u10DC\u10D0: \u10E8\u10D4\u10EC\u10D0\u10DB\u10D4 \u10D0\u10EE\u10DA\u10D0 \u10D0\u10DC \u10D3\u10D0\u10D4\u10DA\u10DD\u10D3\u10DD \u10D3\u10D0 \u10DD\u10E0\u10D8 \u10DB\u10D8\u10D8\u10E6\u10DD. \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10D8\u10E1 1/3-\u10DB\u10D0 \u10DB\u10DD\u10D8\u10D7\u10DB\u10D8\u10DC\u10D0 15 \u10EC\u10E3\u10D7\u10D8. \u10D0\u10D7\u10EC\u10DA\u10D4\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10D0\u10E6\u10DB\u10DD\u10E9\u10DC\u10D3\u10D0, \u10E0\u10DD\u10DB \u10DB\u10DD\u10D7\u10DB\u10D8\u10DC\u10D4 \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10D8 \u10E8\u10D4\u10D3\u10D4\u10D2\u10D4\u10D1\u10D8 \u10F0\u10E5\u10DD\u10DC\u10D3\u10D0\u10D7 \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D0\u10E8\u10D8.',
    moral: 'Delayed gratification is a powerful predictor of life success, though environment and trust also play critical roles.',
    moralKa: '\u10D3\u10D0\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D3\u10D0\u10D9\u10DB\u10D0\u10E7\u10DD\u10E4\u10D8\u10DA\u10D4\u10D1\u10D0 \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D8\u10E1 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10E1 \u10EB\u10DA\u10D8\u10D4\u10E0\u10D8 \u10DE\u10E0\u10DD\u10D2\u10DC\u10DD\u10D6\u10D0\u10E2\u10DD\u10E0\u10D8\u10D0.'
  },
  {
    id: 7,
    title: 'Kitty Genovese and Bystander Apathy',
    titleKa: '\u10D9\u10D8\u10E2\u10D8 \u10EF\u10D4\u10DC\u10DD\u10D5\u10D4\u10D6\u10D4 \u10D3\u10D0 \u10D7\u10D5\u10D0\u10DA\u10D7\u10DB\u10EE\u10D8\u10DA\u10D5\u10D4\u10DA\u10D8\u10E1 \u10D0\u10DE\u10D0\u10D7\u10D8\u10D0',
    chapterId: 12,
    icon: 'mdi:account-alert-outline',
    content: 'On March 13, 1964, 28-year-old Catherine "Kitty" Genovese was returning to her apartment in Kew Gardens, Queens, New York, at about 3:15 AM after finishing her shift as a bar manager. As she walked from her car, she was attacked by Winston Moseley.\n\nKitty screamed for help. Lights went on in the apartment building. A neighbor yelled from a window. Moseley ran away\u2014but returned ten minutes later to attack her again in a stairwell, where he stabbed, robbed, and ultimately killed her.\n\nThe New York Times reported that 38 witnesses watched or heard the attack and did nothing\u2014a claim that became the defining story of urban apathy. The headline shocked the nation.\n\nPsychologists John Darley and Bibb Latan\u00e9 were deeply troubled by the story. Rather than simply condemning the witnesses as uncaring, they hypothesized that the very number of witnesses might have been the problem. They designed a series of experiments to test this.\n\nIn one study, participants were placed in separate rooms and communicated via intercom. When one "participant" (actually a recording) simulated having a seizure, those who believed they were the only one who could hear it responded quickly\u201485% within one minute. But when participants believed four others were also listening, only 31% responded.\n\nDarley and Latan\u00e9 called this the "bystander effect"\u2014the finding that the presence of others reduces individual helping behavior through two mechanisms: diffusion of responsibility ("someone else will help") and pluralistic ignorance ("nobody else seems concerned, so it must not be serious").\n\nNote: Later research revealed that the original Times story was significantly exaggerated\u2014fewer people witnessed the attack than claimed, and some did call police. But the research it inspired has been robustly confirmed.',
    contentKa: '1964 \u10EC\u10D4\u10DA\u10E1, \u10D9\u10D8\u10E2\u10D8 \u10EF\u10D4\u10DC\u10DD\u10D5\u10D4\u10D6\u10D4 \u10DC\u10D8\u10E3-\u10D8\u10DD\u10E0\u10D9\u10E8\u10D8 \u10D7\u10D0\u10D5\u10E1 \u10D3\u10D0\u10E1\u10EE\u10DB\u10E3\u10DA\u10D4\u10E1 \u10D3\u10E0\u10DD\u10E1 \u10DB\u10DD\u10D8\u10D9\u10DA\u10D0. \u10DB\u10E0\u10D0\u10D5\u10D0\u10DA\u10DB\u10D0 \u10D4\u10E1\u10DB\u10D0 \u10D3\u10D0\u10D8\u10DC\u10D0\u10EE\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10D0\u10E0\u10D0\u10D5\u10D8\u10DC \u10D3\u10D0\u10D4\u10EE\u10DB\u10D0\u10E0\u10D0. \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D4\u10D1\u10DB\u10D0 \u10D3\u10D0\u10E0\u10DA\u10D8\u10DB \u10D3\u10D0 \u10DA\u10D0\u10E2\u10D0\u10DC\u10D4\u10DB \u10D0\u10E6\u10DB\u10DD\u10D0\u10E9\u10D8\u10DC\u10D4\u10E1 "\u10D7\u10D5\u10D0\u10DA\u10D7\u10DB\u10EE\u10D8\u10DA\u10D5\u10D4\u10DA\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8"\u2014\u10E0\u10D0\u10CA \u10DB\u10D4\u10E2\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8\u10D0 \u10D3\u10D0\u10DB\u10E1\u10EC\u10E0\u10D4, \u10DB\u10D8\u10D7 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D0\u10D3 \u10D7\u10D8\u10D7\u10DD\u10D4\u10E3\u10DA\u10D8 \u10D3\u10D0\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D0\u10DA\u10D1\u10D0\u10D7\u10DD\u10D1\u10D0 \u10DB\u10EA\u10D8\u10E0\u10D3\u10D4\u10D1\u10D0.',
    moral: 'The more people present during an emergency, the less likely any individual is to help\u2014a counterintuitive finding with life-saving implications.',
    moralKa: '\u10E0\u10D0\u10CA \u10DB\u10D4\u10E2\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8 \u10D0\u10E0\u10D8\u10E1 \u10E1\u10D0\u10D2\u10D0\u10DC\u10D2\u10D0\u10E8\u10DD \u10E1\u10D8\u10E2\u10E3\u10D0\u10EA\u10D8\u10D0\u10E8\u10D8, \u10DB\u10D8\u10D7 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D0\u10D3\u10D8\u10D0 \u10D7\u10D8\u10D7\u10DD\u10D4\u10E3\u10DA\u10D8\u10E1 \u10D3\u10D0\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D0.'
  },
  {
    id: 8,
    title: 'Seligman and the Dogs Who Gave Up',
    titleKa: '\u10E1\u10D4\u10DA\u10D8\u10D2\u10DB\u10D0\u10DC\u10D8 \u10D3\u10D0 \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D8, \u10E0\u10DD\u10DB\u10DA\u10D4\u10D1\u10DB\u10D0\u10CA \u10D3\u10D0\u10DC\u10D4\u10D1\u10D3\u10D4\u10E1',
    chapterId: 10,
    icon: 'mdi:emoticon-sad-outline',
    content: 'In 1967, Martin Seligman and Steven Maier were graduate students at the University of Pennsylvania conducting research on learning. Their experiment would accidentally reveal one of psychology\'s most important concepts.\n\nThe experiment had three groups of dogs. Group 1 received mild electric shocks they could stop by pressing a panel with their noses. Group 2 received the same shocks but had no way to stop them\u2014they were "yoked" to Group 1, receiving the exact same pattern of shocks regardless of what they did. Group 3 received no shocks at all.\n\nLater, all three groups were placed in a shuttle box\u2014a chamber divided by a low barrier the dogs could easily jump over. Shocks were delivered to one side, and the dogs simply needed to jump to the other side to escape.\n\nGroups 1 and 3 quickly learned to jump the barrier. But Group 2\u2014the dogs who had previously been unable to escape\u2014didn\'t even try. They lay down, whimpered, and passively accepted the shock. Two-thirds of them made no attempt to escape, even though the barrier was right there.\n\nSeligman called this "learned helplessness"\u2014the state in which, after experiencing uncontrollable negative events, an organism stops trying to change its situation even when escape becomes possible.\n\nThe implications extended far beyond dogs. Seligman proposed that learned helplessness was a key model for understanding human depression. People who experience repeated failures or uncontrollable negative events may develop a pervasive belief that their actions don\'t matter\u2014leading to passivity, sadness, and withdrawal.\n\nThis insight led Seligman to develop new therapeutic approaches. Crucially, he discovered that learned helplessness could be reversed through "immunization"\u2014earlier experiences of mastery and control. This eventually led him to found the field of positive psychology, studying not just what makes people sick but what makes them flourish.',
    contentKa: '1967 \u10EC\u10D4\u10DA\u10E1, \u10DB\u10D0\u10E0\u10E2\u10D8\u10DC \u10E1\u10D4\u10DA\u10D8\u10D2\u10DB\u10D0\u10DC\u10DB\u10D0 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10E9\u10D0\u10D0\u10E2\u10D0\u10E0\u10D0 \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D6\u10D4, \u10E0\u10DD\u10DB\u10DA\u10D4\u10D1\u10E1\u10D0\u10CA \u10D4\u10DA\u10D4\u10E5\u10E2\u10E0\u10DD\u10E8\u10DD\u10D9\u10D8\u10E1\u10D2\u10D0\u10DC \u10D7\u10D0\u10D5\u10D8\u10E1 \u10D3\u10D0\u10E6\u10EC\u10D4\u10D5\u10D0 \u10D0\u10E0 \u10E8\u10D4\u10D4\u10EB\u10DA\u10DD\u10D7. \u10DB\u10DD\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8\u10D7 \u10DB\u10D0\u10D7 \u10D7\u10D0\u10D5\u10D8\u10E1 \u10D3\u10D0\u10E6\u10EC\u10D4\u10D5\u10D0\u10CA \u10E8\u10D4\u10D4\u10EB\u10DA\u10DD\u10D7, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10D0\u10E0 \u10E1\u10EA\u10D0\u10D3\u10D4\u10E1. \u10E1\u10D4\u10DA\u10D8\u10D2\u10DB\u10D0\u10DC\u10DB\u10D0 \u10D0\u10DB\u10D0\u10E1 "\u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10DA\u10D8 \u10E3\u10EB\u10DA\u10E3\u10E0\u10DD\u10D1\u10D0" \u10E3\u10EC\u10DD\u10D3\u10D0 \u10D3\u10D0 \u10D4\u10E1 \u10D3\u10D4\u10DE\u10E0\u10D4\u10E1\u10D8\u10D8\u10E1 \u10D2\u10D0\u10D2\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DD\u10D3\u10D4\u10DA\u10D0\u10D3 \u10D8\u10E5\u10CA\u10D0. \u10DB\u10DD\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8\u10D7 \u10DB\u10D0\u10DC \u10DE\u10DD\u10D6\u10D8\u10E2\u10D8\u10E3\u10E0\u10D8 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D8\u10D0 \u10D3\u10D0\u10D0\u10D0\u10E0\u10E1\u10D0.',
    moral: 'Repeated failure can teach us to stop trying\u2014but helplessness can be unlearned. Experiences of mastery and control can reverse it.',
    moralKa: '\u10D2\u10D0\u10DC\u10DB\u10D4\u10DD\u10E0\u10D4\u10D1\u10E3\u10DA\u10DB\u10D0 \u10EC\u10D0\u10E0\u10E3\u10DB\u10D0\u10E2\u10D4\u10D1\u10D4\u10D1\u10DB\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10D2\u10D5\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10DD\u10E1 \u10D3\u10D0\u10DC\u10D4\u10D1\u10D3\u10D4\u10E1, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10E3\u10EB\u10DA\u10E3\u10E0\u10DD\u10D1\u10D0\u10E1 \u10D2\u10D0\u10D3\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0.'
  },
  {
    id: 9,
    title: 'The Case of H.M.: A Life Without Memory',
    titleKa: 'H.M.-\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D0: \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D0 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4',
    chapterId: 7,
    icon: 'mdi:head-question-outline',
    content: 'Henry Gustav Molaison\u2014known for decades in scientific literature only as "H.M." to protect his privacy\u2014is perhaps the most studied individual in the history of neuroscience. His story begins with tragedy and becomes a cornerstone of memory research.\n\nH.M. suffered from severe, debilitating epilepsy that began after a bicycle accident at age seven. By his mid-twenties, the seizures had become so frequent and violent that he could not hold a job or live independently.\n\nIn 1953, neurosurgeon William Beecher Scoville performed an experimental operation. He removed large portions of H.M.\'s medial temporal lobes bilaterally\u2014including most of his hippocampus on both sides.\n\nThe surgery was a medical success: the seizures were dramatically reduced. But the side effect was devastating. H.M. could no longer form new long-term memories. He could remember events from his childhood, his parents\' names, and facts from before the surgery. But anything that happened after 1953 vanished within minutes.\n\nH.M. would read the same magazine over and over, enjoying it fresh each time. He could not recognize the researchers who visited him daily for years. Every day, his father\'s death was news to him again. He described his existence as "like waking from a dream... every day is alone in itself."\n\nYet H.M.\'s memory was not entirely destroyed. He could learn new motor skills\u2014like tracing a star in a mirror\u2014and improve with practice, even though he had no memory of having practiced. This proved that different types of memory (declarative vs. procedural) involve different brain systems.\n\nH.M. cooperated with researchers for over 50 years until his death in 2008. His brain was donated to science, sliced into 2,401 thin sections, and digitized for future study. His case single-handedly established the hippocampus as critical for memory formation and reshaped our understanding of how memories are made.',
    contentKa: '\u10F0\u10D4\u10DC\u10E0\u10D8 \u10DB\u10DD\u10DA\u10D4\u10D8\u10D6\u10DD\u10DC\u10D8 (H.M.) \u10DC\u10D4\u10D8\u10E0\u10DD\u10DB\u10D4\u10EA\u10DC\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D8\u10E1\u10E2\u10DD\u10E0\u10D8\u10D0\u10E8\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10E8\u10D4\u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10DA\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8\u10D0. 1953 \u10EC\u10D4\u10DA\u10E1 \u10D4\u10DE\u10D8\u10DA\u10D4\u10E4\u10E1\u10D8\u10D8\u10E1 \u10E1\u10D0\u10DB\u10D9\u10E3\u10E0\u10DC\u10D0\u10DA\u10DD\u10D3, \u10E5\u10D8\u10E0\u10E3\u10E0\u10D2\u10DB\u10D0 \u10F0\u10D8\u10DE\u10DD\u10D9\u10D0\u10DB\u10DE\u10D8 \u10D0\u10DB\u10DD\u10D0\u10ED\u10E0\u10D0. \u10D9\u10E0\u10E3\u10DC\u10E9\u10EE\u10D4\u10D1\u10D8 \u10E8\u10D4\u10DB\u10EA\u10D8\u10E0\u10D3\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10D0\u10EE\u10D0\u10DA\u10D8 \u10D2\u10E0\u10EB\u10D4\u10DA\u10D5\u10D0\u10D3\u10D8\u10D0\u10DC\u10D8 \u10DB\u10DD\u10D2\u10DD\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8\u10E1 \u10E9\u10D0\u10DB\u10DD\u10E7\u10D0\u10DA\u10D8\u10D1\u10D4\u10D1\u10D0 \u10D5\u10D4\u10E0 \u10E8\u10D4\u10EB\u10DA\u10DD. \u10DB\u10D8\u10E1\u10DB\u10D0 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D0\u10DB \u10D3\u10D0\u10D0\u10DB\u10E2\u10D9\u10D8\u10EA\u10D0, \u10E0\u10DD\u10DB \u10F0\u10D8\u10DE\u10DD\u10D9\u10D0\u10DB\u10DE\u10D8 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E4\u10DD\u10E0\u10DB\u10D8\u10E0\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D0\u10E3\u10EA\u10D8\u10DA\u10D4\u10D1\u10D4\u10DA\u10D8\u10D0.',
    moral: 'The hippocampus is critical for memory formation\u2014and different types of memory involve separate brain systems.',
    moralKa: '\u10F0\u10D8\u10DE\u10DD\u10D9\u10D0\u10DB\u10DE\u10D8 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E4\u10DD\u10E0\u10DB\u10D8\u10E0\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D0\u10E3\u10EA\u10D8\u10DA\u10D4\u10D1\u10D4\u10DA\u10D8\u10D0, \u10D3\u10D0 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E1\u10EE\u10D5\u10D0\u10D3\u10D0\u10E1\u10EE\u10D5\u10D0 \u10E2\u10D8\u10DE\u10D4\u10D1\u10D8 \u10E1\u10EE\u10D5\u10D0\u10D3\u10D0\u10E1\u10EE\u10D5\u10D0 \u10E2\u10D5\u10D8\u10DC\u10D8\u10E1 \u10E1\u10D8\u10E1\u10E2\u10D4\u10DB\u10D4\u10D1\u10E1 \u10D8\u10E7\u10D4\u10DC\u10D4\u10D1\u10E1.'
  },
  {
    id: 10,
    title: 'Rosenhan\'s "Being Sane in Insane Places"',
    titleKa: '\u10E0\u10DD\u10D6\u10D4\u10DC\u10F0\u10D0\u10DC\u10D8\u10E1 "\u10D2\u10DD\u10DC\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 \u10D2\u10D8\u10DF\u10E3\u10E0 \u10D0\u10D3\u10D2\u10D8\u10DA\u10D4\u10D1\u10E8\u10D8"',
    chapterId: 14,
    icon: 'mdi:hospital-building',
    content: 'In 1973, Stanford psychologist David Rosenhan published one of the most provocative and influential studies in the history of psychiatry: "On Being Sane in Insane Places."\n\nRosenhan recruited eight mentally healthy volunteers\u2014including himself, a psychology graduate student, a pediatrician, a psychiatrist, a painter, and a housewife\u2014to present themselves at twelve different psychiatric hospitals across the United States.\n\nEach pseudo-patient reported a single symptom: they heard a voice saying "empty," "hollow," or "thud." They gave false names and occupations but otherwise described their life histories and emotional states truthfully. All were diagnosed with psychiatric disorders (most commonly schizophrenia) and admitted.\n\nOnce inside, all pseudo-patients immediately stopped reporting any symptoms and behaved completely normally. They took notes openly, cooperated with staff, and told doctors they felt fine. Yet not a single one was identified as healthy by staff.\n\nTheir hospitalizations lasted from 7 to 52 days, averaging 19 days. When discharged, they received the diagnosis "schizophrenia, in remission"\u2014meaning the label stuck even upon release.\n\nIronically, real patients often recognized the pseudo-patients were not mentally ill. "You\'re not crazy. You\'re a journalist or a professor," they said. But staff never questioned the diagnoses.\n\nIn a follow-up study, Rosenhan told a hospital that pseudo-patients would attempt admission over the next three months. Staff confidently identified 41 patients as impostors. In reality, Rosenhan had sent no one.\n\nThe study\'s conclusion was searing: psychiatric institutions cannot reliably distinguish the sane from the insane. Diagnostic labels, once applied, color all subsequent perception and behavior of both patients and staff. The study contributed to major reforms in psychiatric diagnosis and the development of more rigorous diagnostic criteria.',
    contentKa: '1973 \u10EC\u10D4\u10DA\u10E1, \u10E1\u10E2\u10D4\u10DC\u10E4\u10DD\u10E0\u10D3\u10D8\u10E1 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10DB\u10D0 \u10E0\u10DD\u10D6\u10D4\u10DC\u10F0\u10D0\u10DC\u10DB\u10D0 8 \u10EF\u10D0\u10DC\u10E1\u10D0\u10E6\u10D8 \u10DB\u10DD\u10EE\u10D0\u10DA\u10D8\u10E1\u10D4 12 \u10E4\u10E1\u10D8\u10E5\u10D8\u10D0\u10E2\u10E0\u10D8\u10E3\u10DA \u10E1\u10D0\u10D0\u10D5\u10D0\u10D3\u10DB\u10E7\u10DD\u10E4\u10DD\u10E8\u10D8 \u10D2\u10D0\u10D2\u10D6\u10D0\u10D5\u10DC\u10D0. \u10DB\u10D0\u10D7 \u10E8\u10D8\u10D6\u10DD\u10E4\u10E0\u10D4\u10DC\u10D8\u10D0 \u10D3\u10D0\u10E3\u10E1\u10D5\u10D4\u10E1 \u10D3\u10D0 7-\u10D3\u10D0\u10DC 52 \u10D3\u10E6\u10D4\u10DB\u10D3\u10D4 \u10D3\u10D0\u10E0\u10E9\u10DC\u10D4\u10DC. \u10D0\u10E0\u10D0\u10D5\u10D8\u10DC \u10DE\u10D4\u10E0\u10E1\u10DD\u10DC\u10D0\u10DA\u10DB\u10D0 \u10D5\u10D4\u10E0 \u10D0\u10DB\u10DD\u10D8\u10EA\u10DC\u10DD \u10D8\u10E1\u10D8\u10DC\u10D8 \u10EF\u10D0\u10DC\u10E1\u10D0\u10E6\u10D0\u10D3. \u10D4\u10E1 \u10D9\u10D5\u10DA\u10D4\u10D5\u10D0\u10DB \u10D3\u10D8\u10D0\u10D2\u10DC\u10DD\u10E1\u10E2\u10D8\u10D9\u10D8\u10E1 \u10E1\u10D4\u10E0\u10D8\u10DD\u10D6\u10E3\u10DA \u10E0\u10D4\u10E4\u10DD\u10E0\u10DB\u10D4\u10D1\u10E1 \u10E8\u10D4\u10E3\u10EC\u10E7\u10DD.',
    moral: 'Labels are powerful\u2014once categorized, everything is seen through that lens. Psychiatric diagnosis must be approached with extreme rigor and humility.',
    moralKa: '\u10D8\u10D0\u10E0\u10DA\u10D8\u10E7\u10D4\u10D1\u10D8 \u10EB\u10D0\u10DA\u10D8\u10D0\u10DC \u10EB\u10DA\u10D8\u10D4\u10E0\u10D8\u10D0\u2014\u10D4\u10E0\u10D7\u10EE\u10D4\u10DA \u10D9\u10D0\u10E2\u10D4\u10D2\u10DD\u10E0\u10D8\u10D6\u10D4\u10D1\u10E3\u10DA\u10D8, \u10E7\u10D5\u10D4\u10DA\u10D0\u10E4\u10D4\u10E0\u10D8 \u10D0\u10DB \u10DA\u10D8\u10DC\u10D6\u10D8\u10D7 \u10D0\u10E6\u10D8\u10E5\u10DB\u10D4\u10D1\u10D0.'
  }
]

export const MEMORY_CARDS: MemoryCard[] = [
  { id: 1, term: 'Psychology', definition: 'The scientific study of behavior and mental processes', category: 'Basics' },
  { id: 2, term: 'Neuron', definition: 'A nerve cell that transmits electrical and chemical signals', category: 'Biology' },
  { id: 3, term: 'Classical Conditioning', definition: 'Learning through association of stimuli (Pavlov)', category: 'Learning' },
  { id: 4, term: 'Operant Conditioning', definition: 'Learning through consequences: reinforcement and punishment (Skinner)', category: 'Learning' },
  { id: 5, term: 'Hippocampus', definition: 'Brain structure essential for forming new long-term memories', category: 'Biology' },
  { id: 6, term: 'Cognitive Dissonance', definition: 'Discomfort from holding contradictory beliefs or attitudes', category: 'Social' },
  { id: 7, term: 'Maslow\'s Hierarchy', definition: 'Five-level model of motivation from basic needs to self-actualization', category: 'Motivation' },
  { id: 8, term: 'Big Five (OCEAN)', definition: 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', category: 'Personality' },
  { id: 9, term: 'Attachment Theory', definition: 'The bond between infant and caregiver shaping later relationships', category: 'Development' },
  { id: 10, term: 'Confirmation Bias', definition: 'Tendency to seek information that supports existing beliefs', category: 'Cognition' },
  { id: 11, term: 'Dopamine', definition: 'Neurotransmitter involved in reward, motivation, and pleasure', category: 'Biology' },
  { id: 12, term: 'REM Sleep', definition: 'Sleep stage with rapid eye movements and vivid dreaming', category: 'Consciousness' },
  { id: 13, term: 'Bystander Effect', definition: 'Less likely to help when others are present', category: 'Social' },
  { id: 14, term: 'Placebo Effect', definition: 'Improvement from belief in treatment rather than treatment itself', category: 'Research' },
  { id: 15, term: 'Schema', definition: 'Mental framework for organizing and interpreting information', category: 'Cognition' },
  { id: 16, term: 'Amygdala', definition: 'Brain structure for processing emotions, especially fear', category: 'Biology' },
  { id: 17, term: 'Self-Efficacy', definition: 'Belief in your ability to succeed at specific tasks (Bandura)', category: 'Personality' },
  { id: 18, term: 'Learned Helplessness', definition: 'Giving up after repeated failures even when escape is possible', category: 'Motivation' },
  { id: 19, term: 'Transference', definition: 'Redirecting feelings about one person onto the therapist', category: 'Therapy' },
  { id: 20, term: 'Heuristic', definition: 'Mental shortcut for quick decisions that can lead to errors', category: 'Cognition' },
  { id: 21, term: 'Synapse', definition: 'The gap between neurons where neurotransmitters cross', category: 'Biology' },
  { id: 22, term: 'Extinction', definition: 'Weakening of conditioned response when reinforcement stops', category: 'Learning' },
  { id: 23, term: 'Superego', definition: 'The moral conscience in Freud\'s personality structure', category: 'Personality' },
  { id: 24, term: 'Neuroplasticity', definition: 'Brain\'s ability to reorganize and form new neural connections', category: 'Biology' }
];
