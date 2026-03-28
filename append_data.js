const fs = require("fs");
const p = "src/app/data/book-data.ts";
let c = fs.readFileSync(p, "utf-8");

c += `

export const QUIZZES: Quiz[] = [
  {
    id: 'ch1-quiz', chapterId: 1, title: 'What is Psychology? \\u2014 Quiz',
    questions: [
      { id: 'q1-1', question: 'Who established the first psychology laboratory in 1879?', options: ['Sigmund Freud', 'Wilhelm Wundt', 'William James', 'John Watson'], correctIndex: 1, explanation: 'Wilhelm Wundt founded the first psychology lab at the University of Leipzig in 1879.' },
      { id: 'q1-2', question: 'Psychology is best defined as the scientific study of:', options: ['The mind only', 'Behavior and mental processes', 'Emotions', 'Brain chemistry'], correctIndex: 1, explanation: 'Psychology is the scientific study of both behavior and mental processes.' },
      { id: 'q1-3', question: 'Which perspective emphasizes observable behavior?', options: ['Psychoanalytic', 'Humanistic', 'Behavioral', 'Cognitive'], correctIndex: 2, explanation: 'Behaviorism focuses on observable, measurable behaviors.' },
      { id: 'q1-4', question: 'The psychoanalytic approach was developed by:', options: ['Carl Rogers', 'Sigmund Freud', 'Abraham Maslow', 'Ivan Pavlov'], correctIndex: 1, explanation: 'Sigmund Freud developed psychoanalysis.' },
      { id: 'q1-5', question: 'Which school used introspection as its primary method?', options: ['Functionalism', 'Structuralism', 'Gestalt', 'Behaviorism'], correctIndex: 1, explanation: 'Structuralism used introspection to analyze conscious experience.' },
      { id: 'q1-6', question: 'The humanistic perspective emphasizes:', options: ['Unconscious desires', 'Free will and self-actualization', 'Stimulus-response', 'Brain chemistry'], correctIndex: 1, explanation: 'Humanistic psychology focuses on personal growth and free will.' },
      { id: 'q1-7', question: 'William James is associated with:', options: ['Structuralism', 'Functionalism', 'Behaviorism', 'Gestalt'], correctIndex: 1, explanation: 'William James founded functionalism.' },
      { id: 'q1-8', question: 'The cognitive perspective focuses on:', options: ['Brain structures', 'Mental processes like thinking and memory', 'Social influences', 'Childhood experiences'], correctIndex: 1, explanation: 'Cognitive psychology studies internal mental processes.' },
      { id: 'q1-9', question: 'The biopsychosocial model includes:', options: ['Biology only', 'Psychology only', 'Social factors only', 'Biological, psychological, and social factors'], correctIndex: 3, explanation: 'It integrates all three factors.' },
      { id: 'q1-10', question: 'Which is NOT a goal of psychology?', options: ['Describe behavior', 'Explain behavior', 'Control the economy', 'Predict behavior'], correctIndex: 2, explanation: 'The four goals are to describe, explain, predict, and influence behavior.' }
    ]
  },
  {
    id: 'ch2-quiz', chapterId: 2, title: 'Research Methods \\u2014 Quiz',
    questions: [
      { id: 'q2-1', question: 'The variable manipulated by the researcher is the:', options: ['Dependent variable', 'Independent variable', 'Control variable', 'Confounding variable'], correctIndex: 1, explanation: 'The independent variable is what the researcher manipulates.' },
      { id: 'q2-2', question: 'A positive correlation means:', options: ['One causes the other', 'As one increases the other decreases', 'Both increase together', 'No relationship'], correctIndex: 2, explanation: 'Both variables move in the same direction.' },
      { id: 'q2-3', question: 'The placebo effect demonstrates:', options: ['Power of belief on outcomes', 'Experiments fail', 'Drugs never work', 'Correlation equals causation'], correctIndex: 0, explanation: 'Improvement from belief in treatment.' },
      { id: 'q2-4', question: 'Which method establishes cause and effect?', options: ['Survey', 'Case study', 'Experiment', 'Observation'], correctIndex: 2, explanation: 'Only experiments can establish cause-and-effect.' },
      { id: 'q2-5', question: 'Random assignment helps to:', options: ['Increase sample', 'Equalize groups', 'Make results public', 'Speed research'], correctIndex: 1, explanation: 'Random assignment ensures groups are equivalent.' },
      { id: 'q2-6', question: 'A double-blind study means:', options: ['No one knows hypothesis', 'Neither side knows assignments', 'Two experiments run', 'Both eyes covered'], correctIndex: 1, explanation: 'Neither participants nor researchers know group assignments.' },
      { id: 'q2-7', question: 'Correlation does not equal causation means:', options: ['Correlations are useless', 'Being related does not mean causation', 'All research is flawed', 'Experiments unnecessary'], correctIndex: 1, explanation: 'Correlation does not prove direct causation.' },
      { id: 'q2-8', question: 'Informed consent means participants:', options: ['Are paid well', 'Understand and agree voluntarily', 'Must finish the study', 'Are students'], correctIndex: 1, explanation: 'Participants must understand and agree voluntarily.' },
      { id: 'q2-9', question: 'Which provides most in-depth info about one individual?', options: ['Survey', 'Experiment', 'Case study', 'Correlation study'], correctIndex: 2, explanation: 'Case studies are deeply detailed.' },
      { id: 'q2-10', question: 'The mean is:', options: ['Most frequent score', 'Middle score', 'Arithmetic average', 'Range of scores'], correctIndex: 2, explanation: 'The mean is the arithmetic average.' }
    ]
  },
  {
    id: 'ch3-quiz', chapterId: 3, title: 'Biological Bases \\u2014 Quiz',
    questions: [
      { id: 'q3-1', question: 'The gap between two neurons is the:', options: ['Axon terminal', 'Synapse', 'Dendrite', 'Myelin sheath'], correctIndex: 1, explanation: 'The synapse is the gap between neurons.' },
      { id: 'q3-2', question: 'Which neurotransmitter is linked to pleasure and reward?', options: ['Serotonin', 'GABA', 'Dopamine', 'Acetylcholine'], correctIndex: 2, explanation: 'Dopamine plays a key role in reward.' },
      { id: 'q3-3', question: 'The cerebral cortex has how many lobes?', options: ['Two', 'Three', 'Four', 'Five'], correctIndex: 2, explanation: 'Four lobes: frontal, parietal, temporal, occipital.' },
      { id: 'q3-4', question: 'Broca\\'s area controls:', options: ['Vision', 'Speech production', 'Hearing', 'Movement'], correctIndex: 1, explanation: 'Broca\\'s area controls speech production.' },
      { id: 'q3-5', question: 'Fight-or-flight is activated by:', options: ['Parasympathetic NS', 'Sympathetic NS', 'Somatic NS', 'Central NS'], correctIndex: 1, explanation: 'The sympathetic nervous system activates fight-or-flight.' },
      { id: 'q3-6', question: 'Myelin sheath serves to:', options: ['Generate neurotransmitters', 'Speed up transmission', 'Store memories', 'Connect hemispheres'], correctIndex: 1, explanation: 'Myelin insulates axons for faster signals.' },
      { id: 'q3-7', question: 'Hippocampus is associated with:', options: ['Emotion regulation', 'Memory formation', 'Visual processing', 'Motor control'], correctIndex: 1, explanation: 'The hippocampus is essential for forming memories.' },
      { id: 'q3-8', question: 'Which connects the two hemispheres?', options: ['Cerebellum', 'Corpus callosum', 'Thalamus', 'Hypothalamus'], correctIndex: 1, explanation: 'The corpus callosum connects the hemispheres.' },
      { id: 'q3-9', question: 'Endorphins are chemicals that:', options: ['Increase pain', 'Reduce pain and produce pleasure', 'Cause depression', 'Slow neurons'], correctIndex: 1, explanation: 'Endorphins are natural painkillers.' },
      { id: 'q3-10', question: 'Neuroplasticity is the brain\\'s ability to:', options: ['Remain unchanged', 'Form new connections', 'Only work in childhood', 'Produce hormones'], correctIndex: 1, explanation: 'The brain can form new neural connections throughout life.' }
    ]
  },
  {
    id: 'ch4-quiz', chapterId: 4, title: 'Sensation and Perception \\u2014 Quiz',
    questions: [
      { id: 'q4-1', question: 'Minimum stimulation detected 50% of the time:', options: ['Difference threshold', 'Absolute threshold', 'Signal detection', 'Weber\\'s law'], correctIndex: 1, explanation: 'Absolute threshold: minimum detected 50% of the time.' },
      { id: 'q4-2', question: 'Which Gestalt principle groups nearby objects?', options: ['Similarity', 'Proximity', 'Closure', 'Continuity'], correctIndex: 1, explanation: 'Proximity: nearby objects are grouped.' },
      { id: 'q4-3', question: 'Rods in the retina are for:', options: ['Color vision', 'Dim light vision', 'Detail focus', 'Depth perception'], correctIndex: 1, explanation: 'Rods function in dim light.' },
      { id: 'q4-4', question: 'Converting stimuli to neural signals is:', options: ['Perception', 'Transduction', 'Accommodation', 'Adaptation'], correctIndex: 1, explanation: 'Transduction converts physical energy to signals.' },
      { id: 'q4-5', question: 'Sound frequency determines:', options: ['Loudness', 'Pitch', 'Timbre', 'Duration'], correctIndex: 1, explanation: 'Frequency determines pitch.' },
      { id: 'q4-6', question: 'The blind spot exists because:', options: ['No cones there', 'No receptors where optic nerve exits', 'Imperfect lens', 'Light damage'], correctIndex: 1, explanation: 'No receptors where the optic nerve exits.' },
      { id: 'q4-7', question: 'Top-down processing is guided by:', options: ['Raw sensory data', 'Expectations and prior knowledge', 'Stimulus intensity', 'Receptor cells'], correctIndex: 1, explanation: 'Experience and knowledge guide top-down processing.' },
      { id: 'q4-8', question: 'Sensory adaptation is:', options: ['Learning new skills', 'Decreased sensitivity to constant stimulus', 'Increased pain', 'Improved vision'], correctIndex: 1, explanation: 'Reduced sensitivity to unchanging stimuli.' },
      { id: 'q4-9', question: 'Binocular depth cues require:', options: ['One eye', 'Both eyes', 'Hearing', 'Touch'], correctIndex: 1, explanation: 'Both eyes needed for binocular depth cues.' },
      { id: 'q4-10', question: 'Opponent-process theory explains:', options: ['3D vision', 'Color via opposing pairs', 'Smell adaptation', 'Pain'], correctIndex: 1, explanation: 'Color perception through three opposing pairs.' }
    ]
  },
  {
    id: 'ch5-quiz', chapterId: 5, title: 'Consciousness \\u2014 Quiz',
    questions: [
      { id: 'q5-1', question: 'REM sleep features:', options: ['Deep relaxation', 'Rapid eye movements and vivid dreams', 'No brain activity', 'Sleepwalking'], correctIndex: 1, explanation: 'REM: rapid eye movements and vivid dreaming.' },
      { id: 'q5-2', question: 'Freud said dreams represent:', options: ['Random neural firing', 'Wish fulfillment', 'Memory consolidation', 'Nothing meaningful'], correctIndex: 1, explanation: 'Freud: dreams are disguised wish fulfillment.' },
      { id: 'q5-3', question: 'Circadian rhythm is approximately:', options: ['12 hours', '24 hours', '48 hours', '8 hours'], correctIndex: 1, explanation: 'Roughly 24-hour cycle.' },
      { id: 'q5-4', question: 'Sleep deprivation impairs:', options: ['Physical strength', 'Concentration and decisions', 'Height', 'Hearing'], correctIndex: 1, explanation: 'Sleep loss impairs cognitive function.' },
      { id: 'q5-5', question: 'Activation-synthesis says dreams are:', options: ['Unconscious wishes', 'Brain interpreting random neural activity', 'Supernatural', 'Repressed memories'], correctIndex: 1, explanation: 'Brain makes sense of random neural signals.' },
      { id: 'q5-6', question: 'Narcolepsy involves:', options: ['Inability to sleep', 'Sudden sleep attacks', 'Snoring', 'Nightmares only'], correctIndex: 1, explanation: 'Sudden uncontrollable episodes of falling asleep.' },
      { id: 'q5-7', question: 'Hypnosis is best described as:', options: ['Heightened suggestibility', 'Deep sleep', 'Unconsciousness', 'Anesthesia'], correctIndex: 0, explanation: 'Heightened suggestibility and focused attention.' },
      { id: 'q5-8', question: 'Melatonin regulates:', options: ['Hunger', 'Sleep', 'Growth', 'Adrenaline'], correctIndex: 1, explanation: 'Melatonin regulates the sleep-wake cycle.' },
      { id: 'q5-9', question: 'Tolerance means:', options: ['You dislike it', 'Need more for same effect', 'Addicted', 'No longer exists'], correctIndex: 1, explanation: 'Needing more to achieve the same effect.' },
      { id: 'q5-10', question: 'Delta waves are associated with:', options: ['Alertness', 'REM sleep', 'Deep non-REM sleep', 'Light sleep'], correctIndex: 2, explanation: 'Delta waves characterize deep non-REM sleep.' }
    ]
  },
  {
    id: 'ch6-quiz', chapterId: 6, title: 'Learning \\u2014 Quiz',
    questions: [
      { id: 'q6-1', question: 'In Pavlov\\'s experiment, the bell started as a:', options: ['Conditioned stimulus', 'Unconditioned stimulus', 'Neutral stimulus', 'Conditioned response'], correctIndex: 2, explanation: 'The bell was initially neutral.' },
      { id: 'q6-2', question: 'Negative reinforcement involves:', options: ['Punishment', 'Adding unpleasant stimulus', 'Removing unpleasant stimulus', 'Ignoring behavior'], correctIndex: 2, explanation: 'Removing aversive stimulus strengthens behavior.' },
      { id: 'q6-3', question: 'Bandura\\'s Bobo doll showed:', options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Habituation'], correctIndex: 2, explanation: 'Children learned aggression by watching.' },
      { id: 'q6-4', question: 'Extinction occurs when:', options: ['CS presented without US repeatedly', 'Punishment applied', 'Organism dies', 'Response strengthens'], correctIndex: 0, explanation: 'CS without US weakens the response.' },
      { id: 'q6-5', question: 'Variable-ratio schedule produces:', options: ['Slow responding', 'High steady responding', 'Quick extinction', 'No responding'], correctIndex: 1, explanation: 'Variable-ratio produces highest response rates.' },
      { id: 'q6-6', question: 'Shaping involves:', options: ['Punishing all behaviors', 'Reinforcing successive approximations', 'Ignoring organism', 'Only classical conditioning'], correctIndex: 1, explanation: 'Reinforcing progressively closer behaviors.' },
      { id: 'q6-7', question: 'Little Albert learned fear through:', options: ['Operant conditioning', 'Classical conditioning', 'Maturation', 'Insight'], correctIndex: 1, explanation: 'Watson used classical conditioning.' },
      { id: 'q6-8', question: 'Positive punishment example:', options: ['Taking away a toy', 'Getting a speeding ticket', 'Removing a shock', 'Getting a reward'], correctIndex: 1, explanation: 'Adding an aversive consequence.' },
      { id: 'q6-9', question: 'Latent learning was shown by:', options: ['Pavlov', 'Skinner', 'Tolman', 'Bandura'], correctIndex: 2, explanation: 'Tolman showed rats formed cognitive maps.' },
      { id: 'q6-10', question: 'Stimulus generalization means:', options: ['Responding to exact stimuli only', 'Responding to similar stimuli', 'No response', 'Faster extinction'], correctIndex: 1, explanation: 'Responding to stimuli similar to the conditioned one.' }
    ]
  },
  {
    id: 'ch7-quiz', chapterId: 7, title: 'Memory \\u2014 Quiz',
    questions: [
      { id: 'q7-1', question: 'Sensory memory lasts:', options: ['A few seconds', 'A fraction of a second to seconds', 'Minutes', 'Hours'], correctIndex: 1, explanation: 'Very brief duration.' },
      { id: 'q7-2', question: 'Short-term memory capacity:', options: ['2 items', '7 +/- 2 items', '15 items', 'Unlimited'], correctIndex: 1, explanation: 'Miller\\'s magic number: 7 plus or minus 2.' },
      { id: 'q7-3', question: 'Elaborative rehearsal involves:', options: ['Simple repetition', 'Connecting to existing knowledge', 'Forgetting', 'Writing only'], correctIndex: 1, explanation: 'Connecting new info to existing memories.' },
      { id: 'q7-4', question: 'Ebbinghaus\\' forgetting curve shows:', options: ['Linear forgetting', 'Rapid then leveling off', 'No natural forgetting', 'Steady increase'], correctIndex: 1, explanation: 'Forgetting is rapid at first, then levels off.' },
      { id: 'q7-5', question: 'Retrograde amnesia is:', options: ['Can\\'t form new memories', 'Loss of past memories', 'Loss of procedural memory', 'Loss of language'], correctIndex: 1, explanation: 'Inability to recall previously stored memories.' },
      { id: 'q7-6', question: 'Primacy effect is better recall of:', options: ['End items', 'Beginning items', 'Middle items', 'Random items'], correctIndex: 1, explanation: 'Better recall of items at the beginning.' },
      { id: 'q7-7', question: 'Implicit memory includes:', options: ['Conscious recall', 'Skills and habits', 'Episodic only', 'Semantic only'], correctIndex: 1, explanation: 'Implicit: procedural skills and habits.' },
      { id: 'q7-8', question: 'Loftus demonstrated:', options: ['Perfect recall', 'False memories can be created', 'Photographic memory', 'Memory never changes'], correctIndex: 1, explanation: 'Misleading info alters memories.' },
      { id: 'q7-9', question: 'Method of loci is a:', options: ['Type of forgetting', 'Mnemonic using locations', 'Brain structure', 'Memory disorder'], correctIndex: 1, explanation: 'Associate items with familiar locations.' },
      { id: 'q7-10', question: 'LTP is:', options: ['Memory loss', 'Strengthening neural connections', 'Amnesia', 'Short-term storage'], correctIndex: 1, explanation: 'Synaptic connections strengthen with repeated use.' }
    ]
  },
  {
    id: 'ch8-quiz', chapterId: 8, title: 'Cognition and Intelligence \\u2014 Quiz',
    questions: [
      { id: 'q8-1', question: 'A heuristic is:', options: ['Guaranteed solution', 'Mental shortcut', 'Memory type', 'Brain structure'], correctIndex: 1, explanation: 'Quick mental shortcuts for decisions.' },
      { id: 'q8-2', question: 'Confirmation bias is:', options: ['Seeking confirming info', 'Considering all evidence', 'Changing opinions', 'Ignoring all info'], correctIndex: 0, explanation: 'We search for info confirming our beliefs.' },
      { id: 'q8-3', question: 'Gardner proposed:', options: ['Single intelligence', 'Multiple intelligences', 'IQ is meaningless', 'Emotional intelligence only'], correctIndex: 1, explanation: 'Multiple types of intelligence.' },
      { id: 'q8-4', question: 'Sapir-Whorf hypothesis:', options: ['Language has no effect', 'Language influences thinking', 'Languages are identical', 'Thought determines language'], correctIndex: 1, explanation: 'Language shapes perception and thinking.' },
      { id: 'q8-5', question: 'IQ 100 means:', options: ['Genius', 'Below average', 'Average', 'Disability'], correctIndex: 2, explanation: 'IQ 100 is the average.' },
      { id: 'q8-6', question: 'Functional fixedness is:', options: ['Seeing only typical uses', 'Great problem-solving', 'Math skill', 'Learning disability'], correctIndex: 0, explanation: 'Inability to see alternative uses.' },
      { id: 'q8-7', question: 'Availability heuristic bases judgments on:', options: ['Logic', 'Ease of recall', 'Expert opinions', 'Random chance'], correctIndex: 1, explanation: 'Judgments based on how easily examples come to mind.' },
      { id: 'q8-8', question: 'Sternberg\\'s triarchic theory:', options: ['Verbal, math, spatial', 'Analytical, creative, practical', 'Musical, kinesthetic, interpersonal', 'Emotional, social, rational'], correctIndex: 1, explanation: 'Analytical, creative, and practical intelligence.' },
      { id: 'q8-9', question: 'Algorithms vs heuristics:', options: ['Faster', 'Guarantee correct solution', 'Are shortcuts', 'Never work'], correctIndex: 1, explanation: 'Algorithms guarantee a solution.' },
      { id: 'q8-10', question: 'The Flynn effect:', options: ['Declining IQ', 'Rising IQ over generations', 'Stable IQ', 'Gender IQ differences'], correctIndex: 1, explanation: 'IQ scores rise across generations.' }
    ]
  },
  {
    id: 'ch9-quiz', chapterId: 9, title: 'Human Development \\u2014 Quiz',
    questions: [
      { id: 'q9-1', question: 'Object permanence is in Piaget\\'s:', options: ['Preoperational', 'Sensorimotor', 'Concrete operational', 'Formal operational'], correctIndex: 1, explanation: 'Develops in the sensorimotor stage.' },
      { id: 'q9-2', question: 'Erikson\\'s identity crisis occurs in:', options: ['Infancy', 'Early childhood', 'Adolescence', 'Adulthood'], correctIndex: 2, explanation: 'Identity vs. role confusion in adolescence.' },
      { id: 'q9-3', question: 'Secure attachment was described by:', options: ['Freud', 'Ainsworth', 'Piaget', 'Skinner'], correctIndex: 1, explanation: 'Ainsworth identified attachment styles.' },
      { id: 'q9-4', question: 'ZPD was proposed by:', options: ['Piaget', 'Vygotsky', 'Erikson', 'Kohlberg'], correctIndex: 1, explanation: 'Vygotsky proposed the Zone of Proximal Development.' },
      { id: 'q9-5', question: 'Kohlberg focuses on:', options: ['Cognitive development', 'Moral development', 'Physical development', 'Emotional development'], correctIndex: 1, explanation: 'Three levels of moral reasoning.' },
      { id: 'q9-6', question: 'Preoperational children show:', options: ['Abstract thinking', 'Egocentrism', 'Conservation', 'Logical reasoning'], correctIndex: 1, explanation: 'Egocentrism and symbolic play.' },
      { id: 'q9-7', question: 'Teratogens are:', options: ['Vitamins', 'Harmful agents causing birth defects', 'Genes', 'Hormones'], correctIndex: 1, explanation: 'Substances that harm prenatal development.' },
      { id: 'q9-8', question: 'Harlow showed importance of:', options: ['Food over comfort', 'Contact comfort', 'Primate intelligence', 'Visual learning'], correctIndex: 1, explanation: 'Contact comfort matters more than food.' },
      { id: 'q9-9', question: 'Conservation means:', options: ['Protecting nature', 'Quantity stays same despite shape change', 'Memory rehearsal', 'Energy limit'], correctIndex: 1, explanation: 'Properties remain constant despite appearance.' },
      { id: 'q9-10', question: 'Erikson\\'s first crisis:', options: ['Autonomy vs. shame', 'Trust vs. mistrust', 'Initiative vs. guilt', 'Industry vs. inferiority'], correctIndex: 1, explanation: 'Trust vs. mistrust in infancy.' }
    ]
  },
  {
    id: 'ch10-quiz', chapterId: 10, title: 'Motivation and Emotion \\u2014 Quiz',
    questions: [
      { id: 'q10-1', question: 'Top of Maslow\\'s hierarchy:', options: ['Safety', 'Esteem', 'Self-actualization', 'Love'], correctIndex: 2, explanation: 'Self-actualization is the highest level.' },
      { id: 'q10-2', question: 'James-Lange theory:', options: ['Emotions cause physical response', 'Physical response causes emotions', 'They occur simultaneously', 'Emotions are cognitive'], correctIndex: 1, explanation: 'We feel emotions because of body responses.' },
      { id: 'q10-3', question: 'Intrinsic motivation comes from:', options: ['External rewards', 'Internal satisfaction', 'Social pressure', 'Money'], correctIndex: 1, explanation: 'Internal enjoyment and satisfaction.' },
      { id: 'q10-4', question: 'Set-point theory says:', options: ['Body maintains a natural weight range', 'Eat anything freely', 'Metabolism irrelevant', 'Exercise unnecessary'], correctIndex: 0, explanation: 'Body works to maintain a natural weight range.' },
      { id: 'q10-5', question: 'Ekman found emotions are:', options: ['Culturally unique', 'Universal', 'Only learned', 'Different everywhere'], correctIndex: 1, explanation: 'Basic expressions are universal.' },
      { id: 'q10-6', question: 'Yerkes-Dodson law:', options: ['More arousal better', 'Moderate arousal optimal', 'Low arousal best', 'Arousal irrelevant'], correctIndex: 1, explanation: 'Moderate arousal leads to optimal performance.' },
      { id: 'q10-7', question: 'Cannon-Bard says:', options: ['Body causes emotions', 'Emotions and arousal occur simultaneously', 'We label arousal', 'Emotions unnecessary'], correctIndex: 1, explanation: 'Experience and arousal happen simultaneously.' },
      { id: 'q10-8', question: 'Overjustification effect:', options: ['External rewards decrease intrinsic motivation', 'Too much motivation fails', 'More money more effort', 'Emotions too strong'], correctIndex: 0, explanation: 'External rewards can reduce intrinsic motivation.' },
      { id: 'q10-9', question: 'Which theory: label arousal to identify emotions?', options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer', 'Evolutionary'], correctIndex: 2, explanation: 'Emotion = arousal + cognitive label.' },
      { id: 'q10-10', question: 'Maslow is known for:', options: ['Behaviorism', 'Hierarchy of needs', 'Psychoanalysis', 'CBT'], correctIndex: 1, explanation: 'The hierarchy of needs.' }
    ]
  },
  {
    id: 'ch11-quiz', chapterId: 11, title: 'Personality \\u2014 Quiz',
    questions: [
      { id: 'q11-1', question: 'Freud\\'s id operates on:', options: ['Reality principle', 'Pleasure principle', 'Moral principle', 'Social principle'], correctIndex: 1, explanation: 'Id seeks immediate gratification.' },
      { id: 'q11-2', question: 'Big Five excludes:', options: ['Openness', 'Conscientiousness', 'Intelligence', 'Neuroticism'], correctIndex: 2, explanation: 'Intelligence is not a Big Five trait.' },
      { id: 'q11-3', question: 'Rogers emphasized:', options: ['Defense mechanisms', 'Unconditional positive regard', 'Conditioning', 'Dream analysis'], correctIndex: 1, explanation: 'Unconditional positive regard is essential.' },
      { id: 'q11-4', question: 'Projection means:', options: ['Denying reality', 'Attributing own feelings to others', 'Returning to earlier stage', 'Channeling impulses'], correctIndex: 1, explanation: 'Projecting unacceptable feelings onto others.' },
      { id: 'q11-5', question: 'Self-efficacy refers to:', options: ['Self-esteem', 'Belief in ability to succeed', 'Personality type', 'Intelligence'], correctIndex: 1, explanation: 'Belief in capability to perform.' },
      { id: 'q11-6', question: 'Freud\\'s stages exclude:', options: ['Oral', 'Anal', 'Cognitive', 'Phallic'], correctIndex: 2, explanation: 'Cognitive is Piaget, not Freud.' },
      { id: 'q11-7', question: 'Rorschach test uses:', options: ['True/false', 'Inkblots', 'Sentences', 'Drawings'], correctIndex: 1, explanation: 'Ambiguous inkblots for personality assessment.' },
      { id: 'q11-8', question: 'Ego operates on:', options: ['Pleasure principle', 'Moral principle', 'Reality principle', 'Unconscious'], correctIndex: 2, explanation: 'Ego mediates between id and reality.' },
      { id: 'q11-9', question: 'Locus of control:', options: ['Brain location', 'Whether outcomes are internal or external', 'Coordination', 'Self-esteem'], correctIndex: 1, explanation: 'Internal vs external locus.' },
      { id: 'q11-10', question: 'Adler proposed:', options: ['Collective unconscious', 'Inferiority complex', 'Self-actualization', 'Operant conditioning'], correctIndex: 1, explanation: 'Inferiority feelings motivate growth.' }
    ]
  },
  {
    id: 'ch12-quiz', chapterId: 12, title: 'Social Psychology \\u2014 Quiz',
    questions: [
      { id: 'q12-1', question: 'Asch tested conformity with:', options: ['Colors', 'Line lengths', 'Sounds', 'Weights'], correctIndex: 1, explanation: 'Participants conformed about line lengths.' },
      { id: 'q12-2', question: 'Milgram found:', options: ['Refused to shock', 'Often obeyed authority', 'Never followed orders', 'Enjoyed it'], correctIndex: 1, explanation: '65% obeyed authority.' },
      { id: 'q12-3', question: 'Bystander effect:', options: ['More bystanders help', 'Less likely to help with others present', 'Only men help', 'Crowd size helps'], correctIndex: 1, explanation: 'Diffusion of responsibility.' },
      { id: 'q12-4', question: 'Cognitive dissonance:', options: ['Attitude-behavior agreement', 'Discomfort from contradictions', 'Memory error', 'Personality disorder'], correctIndex: 1, explanation: 'Discomfort when attitudes conflict with behavior.' },
      { id: 'q12-5', question: 'Fundamental attribution error:', options: ['Overestimate situation', 'Overestimate personality for others', 'Equal weighing', 'Self-blame'], correctIndex: 1, explanation: 'We overemphasize others\\' traits.' },
      { id: 'q12-6', question: 'Stanford Prison Experiment by:', options: ['Milgram', 'Asch', 'Zimbardo', 'Bandura'], correctIndex: 2, explanation: 'Philip Zimbardo conducted it.' },
      { id: 'q12-7', question: 'Groupthink leads to:', options: ['Better decisions', 'Poor decisions from harmony desire', 'Creativity', 'Individuality'], correctIndex: 1, explanation: 'Consensus overrides realistic appraisal.' },
      { id: 'q12-8', question: 'Mere exposure effect:', options: ['Dislike familiar things', 'Repeated exposure increases liking', 'First impressions only', 'Advertising fails'], correctIndex: 1, explanation: 'Familiarity increases liking.' },
      { id: 'q12-9', question: 'Social loafing:', options: ['Working harder in groups', 'Less effort in groups', 'Leadership', 'Role confusion'], correctIndex: 1, explanation: 'People exert less effort in groups.' },
      { id: 'q12-10', question: 'Deindividuation:', options: ['More self-aware', 'Lose self-awareness in groups', 'Groups become cautious', 'Individuals lead'], correctIndex: 1, explanation: 'Loss of self-awareness in group situations.' }
    ]
  },
  {
    id: 'ch13-quiz', chapterId: 13, title: 'Stress and Coping \\u2014 Quiz',
    questions: [
      { id: 'q13-1', question: 'GAS stages:', options: ['Start, middle, end', 'Alarm, resistance, exhaustion', 'Stress, cope, recover', 'Fight, flight, freeze'], correctIndex: 1, explanation: 'Alarm, resistance, exhaustion.' },
      { id: 'q13-2', question: 'Type A personality:', options: ['Relaxed', 'Competitive, urgent, hostile', 'Introverted', 'Low motivation'], correctIndex: 1, explanation: 'Type A: competitive and time-pressured.' },
      { id: 'q13-3', question: 'Problem-focused coping:', options: ['Managing emotions', 'Addressing the stressor directly', 'Avoiding', 'Denial'], correctIndex: 1, explanation: 'Directly tackling the problem.' },
      { id: 'q13-4', question: 'Immune system weakened by:', options: ['Exercise', 'Chronic stress', 'Good nutrition', 'Sleep'], correctIndex: 1, explanation: 'Chronic stress suppresses immunity.' },
      { id: 'q13-5', question: 'Burnout features:', options: ['High energy', 'Exhaustion and depersonalization', 'Physical injury', 'Productivity'], correctIndex: 1, explanation: 'Emotional exhaustion and cynicism.' },
      { id: 'q13-6', question: 'Social support helps by:', options: ['Eliminating stress', 'Providing emotional and practical help', 'Replacing medicine', 'Raising blood pressure'], correctIndex: 1, explanation: 'Providing emotional comfort and practical help.' },
      { id: 'q13-7', question: 'Cortisol comes from:', options: ['Thyroid', 'Adrenal glands', 'Pituitary', 'Pineal'], correctIndex: 1, explanation: 'Adrenal glands produce cortisol.' },
      { id: 'q13-8', question: 'Emotion-focused coping:', options: ['Making a plan', 'Relaxation and emotional support', 'Solving problem', 'Confronting'], correctIndex: 1, explanation: 'Managing emotional response to stress.' },
      { id: 'q13-9', question: 'Daily hassles vs. major events:', options: ['Only major events matter', 'Hassles can be equally harmful', 'Hassles irrelevant', 'Major events no impact'], correctIndex: 1, explanation: 'Accumulated hassles are very harmful.' },
      { id: 'q13-10', question: 'Resilience:', options: ['Avoiding all stress', 'Recovery after adversity', 'Physical toughness', 'No negative emotions'], correctIndex: 1, explanation: 'Capacity to recover and adapt.' }
    ]
  },
  {
    id: 'ch14-quiz', chapterId: 14, title: 'Psychological Disorders \\u2014 Quiz',
    questions: [
      { id: 'q14-1', question: 'DSM-5 is:', options: ['Therapy technique', 'Diagnostic manual', 'Medication', 'Test'], correctIndex: 1, explanation: 'Standard classification for mental disorders.' },
      { id: 'q14-2', question: 'Major depression involves:', options: ['Brief sadness', 'Persistent depressed mood 2+ weeks', 'Constant happiness', 'Physical only'], correctIndex: 1, explanation: 'At least two weeks of depressed mood.' },
      { id: 'q14-3', question: 'Schizophrenia features:', options: ['Multiple personalities', 'Hallucinations and delusions', 'Extreme anxiety', 'Memory loss only'], correctIndex: 1, explanation: 'Hallucinations, delusions, disordered thinking.' },
      { id: 'q14-4', question: 'A phobia is:', options: ['Normal fear', 'Irrational excessive fear', 'Temporary anxiety', 'Mood disorder'], correctIndex: 1, explanation: 'Intense, irrational fears.' },
      { id: 'q14-5', question: 'Bipolar disorder:', options: ['Only depression', 'Alternating mania and depression', 'Constant mania', 'Anxiety'], correctIndex: 1, explanation: 'Alternating manic and depressive episodes.' },
      { id: 'q14-6', question: 'PTSD develops after:', options: ['Mild stress', 'Traumatic event', 'Normal bad day', 'Puberty'], correctIndex: 1, explanation: 'Following traumatic event exposure.' },
      { id: 'q14-7', question: 'Diathesis-stress model:', options: ['Only genetics', 'Only environment', 'Predisposition + stress', 'Random chance'], correctIndex: 2, explanation: 'Vulnerability interacts with stress.' },
      { id: 'q14-8', question: 'OCD involves:', options: ['Obsessions and compulsions', 'Only sadness', 'Social withdrawal', 'Memory loss'], correctIndex: 0, explanation: 'Intrusive thoughts and repetitive behaviors.' },
      { id: 'q14-9', question: 'GAD is:', options: ['Specific fears', 'Excessive worry about many things', 'Panic attacks only', 'Delusions'], correctIndex: 1, explanation: 'Chronic, excessive worry.' },
      { id: 'q14-10', question: 'Medical model views disorders as:', options: ['Moral failures', 'Biological diseases', 'Personal choices', 'Spiritual'], correctIndex: 1, explanation: 'Disorders as biological illnesses.' }
    ]
  },
  {
    id: 'ch15-quiz', chapterId: 15, title: 'Therapies \\u2014 Quiz',
    questions: [
      { id: 'q15-1', question: 'CBT focuses on:', options: ['Dreams', 'Changing thoughts and behaviors', 'Free association', 'Medication'], correctIndex: 1, explanation: 'Restructuring negative thoughts and behaviors.' },
      { id: 'q15-2', question: 'Systematic desensitization treats:', options: ['Depression', 'Phobias via gradual exposure', 'Schizophrenia', 'ADHD'], correctIndex: 1, explanation: 'Gradual exposure paired with relaxation.' },
      { id: 'q15-3', question: 'Client-centered therapy by:', options: ['Freud', 'Skinner', 'Carl Rogers', 'Beck'], correctIndex: 2, explanation: 'Rogers created person-centered therapy.' },
      { id: 'q15-4', question: 'SSRIs increase:', options: ['Dopamine', 'Serotonin availability', 'All brain activity', 'Neuron death'], correctIndex: 1, explanation: 'SSRIs block serotonin reabsorption.' },
      { id: 'q15-5', question: 'Free association is used in:', options: ['CBT', 'Behavioral', 'Psychoanalysis', 'Group therapy'], correctIndex: 2, explanation: 'A psychoanalytic technique.' },
      { id: 'q15-6', question: 'Group therapy offers:', options: ['Lower cost only', 'Shared experiences and skills practice', 'Faster meds', 'Solitary healing'], correctIndex: 1, explanation: 'Peer support and social practice.' },
      { id: 'q15-7', question: 'Exposure therapy based on:', options: ['Psychoanalysis', 'Classical conditioning extinction', 'Humanism', 'Trait theory'], correctIndex: 1, explanation: 'Extinction of fear response.' },
      { id: 'q15-8', question: 'Lithium treats:', options: ['Depression', 'Anxiety', 'Bipolar disorder', 'Schizophrenia'], correctIndex: 2, explanation: 'First-line for bipolar disorder.' },
      { id: 'q15-9', question: 'Eclectic approach:', options: ['One method', 'Integrating various techniques', 'Rejecting evidence', 'Only medication'], correctIndex: 1, explanation: 'Combining different techniques.' },
      { id: 'q15-10', question: 'Therapy works best when:', options: ['One session', 'Strong therapeutic alliance', 'Client passive', 'No diagnosis'], correctIndex: 1, explanation: 'The relationship is the strongest predictor.' }
    ]
  }
];

export const PSYCHOLOGISTS: Psychologist[] = [
  { name: 'Sigmund Freud', years: '1856\\u20131939', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg', nationality: 'Austrian', field: 'Psychoanalysis', contribution: 'Father of Psychoanalysis', details: 'Developed psychoanalytic theory, proposing that unconscious conflicts drive behavior. Introduced the id, ego, superego, defense mechanisms, dream analysis, and psychosexual stages.' },
  { name: 'B.F. Skinner', years: '1904\\u20131990', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/B.F._Skinner_at_Harvard_circa_1950.jpg/220px-B.F._Skinner_at_Harvard_circa_1950.jpg', nationality: 'American', field: 'Behaviorism', contribution: 'Pioneer of Operant Conditioning', details: 'Developed operant conditioning theory. Invented the Skinner Box and introduced schedules of reinforcement.' },
  { name: 'Carl Rogers', years: '1902\\u20131987', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Carl_Rogers.jpg/220px-Carl_Rogers.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Founder of Client-Centered Therapy', details: 'Pioneered person-centered therapy. Emphasized unconditional positive regard, empathy, and congruence.' },
  { name: 'Jean Piaget', years: '1896\\u20131980', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jean_Piaget_in_Ann_Arbor.png/220px-Jean_Piaget_in_Ann_Arbor.png', nationality: 'Swiss', field: 'Developmental Psychology', contribution: 'Theory of Cognitive Development', details: 'Proposed four stages of cognitive development: sensorimotor, preoperational, concrete operational, and formal operational.' },
  { name: 'Ivan Pavlov', years: '1849\\u20131936', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_%28Nobel%29.png/220px-Ivan_Pavlov_%28Nobel%29.png', nationality: 'Russian', field: 'Behavioral Psychology', contribution: 'Discovery of Classical Conditioning', details: 'While studying digestion in dogs, discovered classical conditioning\\u2014learning through association.' },
  { name: 'Abraham Maslow', years: '1908\\u20131970', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Abraham_Maslow.jpg/220px-Abraham_Maslow.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Hierarchy of Needs', details: 'Created the hierarchy of needs\\u2014from basic physiological needs to self-actualization. Co-founded humanistic psychology.' },
  { name: 'Philip Zimbardo', years: '1933\\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg/220px-Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Stanford Prison Experiment', details: 'Conducted the Stanford Prison Experiment (1971), demonstrating how social roles and situational forces influence behavior.' },
  { name: 'Albert Bandura', years: '1925\\u20132021', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Albert_Bandura_in_his_Stanford_University_office_2005.jpg/220px-Albert_Bandura_in_his_Stanford_University_office_2005.jpg', nationality: 'Canadian-American', field: 'Social Learning', contribution: 'Social Learning Theory & Self-Efficacy', details: 'Demonstrated observational learning through Bobo doll experiment. Developed self-efficacy concept.' },
  { name: 'Elizabeth Loftus', years: '1944\\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Elizabeth_Loftus.jpg/220px-Elizabeth_Loftus.jpg', nationality: 'American', field: 'Cognitive Psychology', contribution: 'False Memory Research', details: 'Showed memories can be altered through suggestion and misinformation.' },
  { name: 'Stanley Milgram', years: '1933\\u20131984', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Stanley_Milgram.jpg/220px-Stanley_Milgram.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Obedience Experiments', details: 'Showed ordinary people will follow authority figures even when asked to harm others.' },
  { name: 'Erik Erikson', years: '1902\\u20131994', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Erik_Erikson.png/220px-Erik_Erikson.png', nationality: 'German-American', field: 'Developmental Psychology', contribution: 'Psychosocial Development Theory', details: 'Proposed eight stages of psychosocial development spanning the entire lifespan.' },
  { name: 'Carl Jung', years: '1875\\u20131961', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/220px-CGJung.jpg', nationality: 'Swiss', field: 'Analytical Psychology', contribution: 'Collective Unconscious & Archetypes', details: 'Proposed the collective unconscious, archetypes, introversion/extraversion, and individuation.' },
  { name: 'Lev Vygotsky', years: '1896\\u20131934', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lev_Vygotsky_1896-1934.jpg/220px-Lev_Vygotsky_1896-1934.jpg', nationality: 'Russian', field: 'Developmental Psychology', contribution: 'Zone of Proximal Development', details: 'Proposed learning is fundamentally social. His ZPD and scaffolding concepts transformed education.' },
  { name: 'Mary Ainsworth', years: '1913\\u20131999', photo: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Mary_Ainsworth.jpg', nationality: 'Canadian-American', field: 'Developmental Psychology', contribution: 'Attachment Theory Research', details: 'Developed the Strange Situation experiment, identifying secure, avoidant, and anxious attachment styles.' },
  { name: 'Daniel Kahneman', years: '1934\\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Daniel_KAHNEMAN.jpg/220px-Daniel_KAHNEMAN.jpg', nationality: 'Israeli-American', field: 'Cognitive Psychology', contribution: 'Behavioral Economics & Thinking Biases', details: 'Nobel Prize winner. Demonstrated systematic biases. Wrote "Thinking, Fast and Slow."' },
  { name: 'Martin Seligman', years: '1942\\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Martin_Seligman.jpg/220px-Martin_Seligman.jpg', nationality: 'American', field: 'Positive Psychology', contribution: 'Learned Helplessness & Positive Psychology', details: 'Discovered learned helplessness. Founded positive psychology. Developed PERMA model of flourishing.' }
];

export const FACTS: Fact[] = [
  { id: 1, text: 'Your brain uses about 20% of your body\\'s total energy, despite being only 2% of your body weight.', source: 'Neuroscience', category: 'Brain', icon: 'fluent:brain-circuit-20-filled' },
  { id: 2, text: 'The average person has about 6,200 thoughts per day, according to a 2020 study.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:head-lightbulb-outline' },
  { id: 3, text: 'Memories are distributed across networks of neurons, not stored in one place.', source: 'Memory Research', category: 'Memory', icon: 'mdi:memory' },
  { id: 4, text: 'The "doorway effect": Walking through a doorway makes you forget what you were thinking.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:door-open' },
  { id: 5, text: 'We consciously process about 50 bits per second, despite senses receiving millions.', source: 'Perception Research', category: 'Perception', icon: 'mdi:eye-settings-outline' },
  { id: 6, text: 'In Milgram\\'s experiment, 65% administered what they believed were lethal shocks under authority.', source: 'Social Psychology', category: 'Social', icon: 'mdi:flash-alert-outline' },
  { id: 7, text: 'The placebo effect works even when people know they are taking a placebo.', source: 'Health Psychology', category: 'Health', icon: 'mdi:pill' },
  { id: 8, text: 'Babies recognize their mother\\'s voice from birth, having listened in the womb.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:baby-carriage' },
  { id: 9, text: 'Even forced smiling can improve your mood via the facial feedback hypothesis.', source: 'Emotion Research', category: 'Emotion', icon: 'mdi:emoticon-happy-outline' },
  { id: 10, text: 'Dunning-Kruger Effect: Low-knowledge people overestimate competence; experts underestimate.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:chart-bell-curve-cumulative' },
  { id: 11, text: 'Your unconscious processes 11 million info pieces per second; conscious handles about 40.', source: 'Cognitive Neuroscience', category: 'Brain', icon: 'mdi:head-sync-outline' },
  { id: 12, text: 'Missing one night of sleep can impair memory by up to 40%.', source: 'Sleep Research', category: 'Memory', icon: 'mdi:power-sleep' },
  { id: 13, text: 'Mirror neurons fire when you act AND when you watch others act\\u2014the basis of empathy.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:mirror-variant' },
  { id: 14, text: 'The Stanford Prison Experiment was stopped after 6 days of a planned 2-week run.', source: 'Social Psychology', category: 'Social', icon: 'mdi:shield-alert-outline' },
  { id: 15, text: 'Fear of public speaking affects ~75% of people\\u2014more common than fear of death.', source: 'Clinical Psychology', category: 'Anxiety', icon: 'mdi:microphone-off' },
  { id: 16, text: 'Halo Effect: Attractive people are rated as more intelligent and kind.', source: 'Social Psychology', category: 'Social', icon: 'mdi:star-circle-outline' },
  { id: 17, text: 'Oxytocin, released during hugging and bonding, promotes trust and empathy.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:heart-pulse' },
  { id: 18, text: 'It takes 1/10th of a second to form a first impression\\u2014and they tend to be accurate.', source: 'Social Psychology', category: 'Social', icon: 'mdi:timer-outline' },
  { id: 19, text: 'Securely attached children have better relationships and self-esteem in adulthood.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:human-female-boy' },
  { id: 20, text: 'Zeigarnik Effect: We remember uncompleted tasks better because they stay active.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:checkbox-blank-circle-outline' }
];

export const STORIES: Story[] = [
  { id: 1, title: 'Pavlov\\'s Accidental Discovery', chapterId: 6, icon: 'mdi:bell-ring-outline', content: 'Ivan Pavlov was studying digestion in dogs when he noticed something unusual. The dogs began salivating not just when food was placed in their mouths, but when they saw the lab assistant. Intrigued, Pavlov paired a bell with food delivery. After several pairings, the dogs salivated at the bell alone.', moral: 'Great discoveries emerge when curious minds pay attention to the unexpected.' },
  { id: 2, title: 'The Story of Phineas Gage', chapterId: 3, icon: 'fluent:brain-circuit-20-filled', content: 'In 1848, railroad foreman Phineas Gage survived an iron rod blasting through his skull, destroying his left frontal lobe. He physically recovered but became impulsive and profane\\u2014a transformed personality.', moral: 'The brain is the seat of personality\\u2014damage to specific areas transforms who we are.' },
  { id: 3, title: 'Little Albert and the White Rat', chapterId: 6, icon: 'mdi:emoticon-cry-outline', content: 'In 1920, John Watson paired a white rat with a loud noise to show emotions can be learned. Baby Albert soon cried at the sight of the rat and other white furry things.', moral: 'Fears can be learned through association\\u2014ethical guidelines exist to prevent harm.' },
  { id: 4, title: 'The Invisible Gorilla', chapterId: 4, icon: 'mdi:eye-off-outline', content: 'In a 1999 experiment, participants counting basketball passes missed a gorilla walking through the scene. About 50% were completely blind to it.', moral: 'Our attention is far more limited than we think.' },
  { id: 5, title: 'Harlow\\'s Monkeys and the Need for Love', chapterId: 9, icon: 'mdi:heart-outline', content: 'Harry Harlow gave infant monkeys two surrogates: wire with milk, soft cloth without. The babies clung to the soft mother, proving emotional comfort trumps food.', moral: 'Love and comfort are fundamental needs shaping development.' },
  { id: 6, title: 'The Marshmallow Test', chapterId: 10, icon: 'mdi:cookie-outline', content: 'Walter Mischel offered preschoolers one marshmallow now or two after 15 minutes. Those who waited had better life outcomes decades later.', moral: 'Delayed gratification is a powerful predictor of life success.' },
  { id: 7, title: 'Kitty Genovese and Bystander Apathy', chapterId: 12, icon: 'mdi:account-alert-outline', content: 'In 1964, neighbors reportedly ignored Kitty Genovese\\'s attack. This led Darley and Latan\\u00e9 to discover the bystander effect: responsibility diffuses in groups.', moral: 'The more people present, the less likely anyone is to help.' },
  { id: 8, title: 'Seligman and the Dogs Who Gave Up', chapterId: 10, icon: 'mdi:emoticon-sad-outline', content: 'Dogs receiving inescapable shocks stopped trying to escape\\u2014even when escape was later possible. Seligman called this "learned helplessness."', moral: 'Repeated failure can make us stop trying\\u2014but it can be unlearned.' },
  { id: 9, title: 'The Case of H.M.: A Life Without Memory', chapterId: 7, icon: 'mdi:head-question-outline', content: 'Henry Molaison\\'s surgery removed parts of his hippocampus. The seizures stopped, but he could never form new long-term memories again.', moral: 'The hippocampus is critical for memory\\u2014specific brain structures serve specific functions.' },
  { id: 10, title: 'Rosenhan\\'s "Being Sane in Insane Places"', chapterId: 14, icon: 'mdi:hospital-building', content: 'In 1973, Rosenhan got healthy people admitted to psychiatric hospitals by faking voices. Once labeled, staff interpreted all normal behavior as pathological.', moral: 'Labels are powerful\\u2014once categorized, everything is seen through that lens.' }
];

export const MEMORY_CARDS: MemoryCard[] = [
  { id: 1, term: 'Psychology', definition: 'The scientific study of behavior and mental processes', category: 'Basics' },
  { id: 2, term: 'Neuron', definition: 'A nerve cell that transmits electrical and chemical signals', category: 'Biology' },
  { id: 3, term: 'Classical Conditioning', definition: 'Learning through association of stimuli (Pavlov)', category: 'Learning' },
  { id: 4, term: 'Operant Conditioning', definition: 'Learning through consequences: reinforcement and punishment (Skinner)', category: 'Learning' },
  { id: 5, term: 'Hippocampus', definition: 'Brain structure essential for forming new long-term memories', category: 'Biology' },
  { id: 6, term: 'Cognitive Dissonance', definition: 'Discomfort from holding contradictory beliefs or attitudes', category: 'Social' },
  { id: 7, term: 'Maslow\\'s Hierarchy', definition: 'Five-level model of motivation from basic needs to self-actualization', category: 'Motivation' },
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
  { id: 23, term: 'Superego', definition: 'The moral conscience in Freud\\'s personality structure', category: 'Personality' },
  { id: 24, term: 'Neuroplasticity', definition: 'Brain\\'s ability to reorganize and form new neural connections', category: 'Biology' }
];
`;

fs.writeFileSync(p, c, "utf-8");
console.log("Done! Lines:", c.split("\\n").length);
