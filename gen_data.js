const fs = require("fs");
const path = "src/app/data/book-data.ts";

// Read current content
let content = fs.readFileSync(path, "utf-8");

// Append quizzes
content += `

export const QUIZZES: Quiz[] = [
  {
    id: 'ch1-quiz', chapterId: 1, title: 'What is Psychology? \u2014 Quiz',
    questions: [
      { id: 'q1-1', question: 'Who established the first psychology laboratory in 1879?', options: ['Sigmund Freud', 'Wilhelm Wundt', 'William James', 'John Watson'], correctIndex: 1, explanation: 'Wilhelm Wundt founded the first psychology lab at the University of Leipzig in 1879.' },
      { id: 'q1-2', question: 'Psychology is best defined as the scientific study of:', options: ['The mind only', 'Behavior and mental processes', 'Emotions', 'Brain chemistry'], correctIndex: 1, explanation: 'Psychology is the scientific study of both behavior and mental processes.' },
      { id: 'q1-3', question: 'Which perspective emphasizes observable behavior over internal mental states?', options: ['Psychoanalytic', 'Humanistic', 'Behavioral', 'Cognitive'], correctIndex: 2, explanation: 'Behaviorism focuses on observable, measurable behaviors.' },
      { id: 'q1-4', question: 'The psychoanalytic approach was developed by:', options: ['Carl Rogers', 'Sigmund Freud', 'Abraham Maslow', 'Ivan Pavlov'], correctIndex: 1, explanation: 'Sigmund Freud developed psychoanalysis.' },
      { id: 'q1-5', question: 'Which school of thought used introspection as its primary method?', options: ['Functionalism', 'Structuralism', 'Gestalt', 'Behaviorism'], correctIndex: 1, explanation: 'Structuralism used introspection to analyze conscious experience.' },
      { id: 'q1-6', question: 'The humanistic perspective emphasizes:', options: ['Unconscious desires', 'Free will and self-actualization', 'Stimulus-response', 'Brain chemistry'], correctIndex: 1, explanation: 'Humanistic psychology focuses on personal growth and free will.' },
      { id: 'q1-7', question: 'William James is associated with which school?', options: ['Structuralism', 'Functionalism', 'Behaviorism', 'Gestalt'], correctIndex: 1, explanation: 'William James founded functionalism.' },
      { id: 'q1-8', question: 'The cognitive perspective focuses primarily on:', options: ['Brain structures', 'Mental processes like thinking and memory', 'Social influences', 'Childhood experiences'], correctIndex: 1, explanation: 'Cognitive psychology studies internal mental processes.' },
      { id: 'q1-9', question: 'The biopsychosocial model suggests behavior is influenced by:', options: ['Biology only', 'Psychology only', 'Social factors only', 'Biological, psychological, and social factors'], correctIndex: 3, explanation: 'The biopsychosocial model integrates all three factors.' },
      { id: 'q1-10', question: 'Which is NOT a goal of psychology?', options: ['Describe behavior', 'Explain behavior', 'Control the economy', 'Predict behavior'], correctIndex: 2, explanation: 'The four goals are to describe, explain, predict, and influence behavior.' }
    ]
  },
  {
    id: 'ch2-quiz', chapterId: 2, title: 'Research Methods \u2014 Quiz',
    questions: [
      { id: 'q2-1', question: 'The variable manipulated by the researcher is the:', options: ['Dependent variable', 'Independent variable', 'Control variable', 'Confounding variable'], correctIndex: 1, explanation: 'The independent variable is what the researcher manipulates.' },
      { id: 'q2-2', question: 'A positive correlation means:', options: ['One causes the other', 'As one increases the other decreases', 'Both variables increase together', 'No relationship'], correctIndex: 2, explanation: 'Positive correlation: both variables move in the same direction.' },
      { id: 'q2-3', question: 'The placebo effect demonstrates:', options: ['The power of belief on outcomes', 'Experiments fail', 'Drugs never work', 'Correlation equals causation'], correctIndex: 0, explanation: 'Placebo effect: improvement from belief in treatment.' },
      { id: 'q2-4', question: 'Which method can establish cause and effect?', options: ['Survey', 'Case study', 'Experiment', 'Naturalistic observation'], correctIndex: 2, explanation: 'Only experiments can establish cause-and-effect.' },
      { id: 'q2-5', question: 'Random assignment helps to:', options: ['Increase sample size', 'Equalize groups before treatment', 'Make results public', 'Speed up research'], correctIndex: 1, explanation: 'Random assignment ensures groups are equivalent.' },
      { id: 'q2-6', question: 'A double-blind study means:', options: ['No one knows the hypothesis', 'Neither participants nor researchers know who gets treatment', 'Two experiments run simultaneously', 'Both eyes covered'], correctIndex: 1, explanation: 'Double-blind: neither side knows group assignments.' },
      { id: 'q2-7', question: '"Correlation does not equal causation" means:', options: ['Correlations are useless', 'Being related does not mean one causes the other', 'All research is flawed', 'Experiments are unnecessary'], correctIndex: 1, explanation: 'Correlation does not prove direct causation.' },
      { id: 'q2-8', question: 'Informed consent means participants:', options: ['Are paid well', 'Understand the study and agree voluntarily', 'Must finish the study', 'Are psychology students'], correctIndex: 1, explanation: 'Participants must understand and agree voluntarily.' },
      { id: 'q2-9', question: 'Which provides the most in-depth information about one individual?', options: ['Survey', 'Experiment', 'Case study', 'Correlation study'], correctIndex: 2, explanation: 'Case studies examine one individual in great detail.' },
      { id: 'q2-10', question: 'The mean is:', options: ['Most frequent score', 'Middle score', 'Arithmetic average', 'Range of scores'], correctIndex: 2, explanation: 'The mean is the arithmetic average.' }
    ]
  },
  {
    id: 'ch3-quiz', chapterId: 3, title: 'Biological Bases of Behavior \u2014 Quiz',
    questions: [
      { id: 'q3-1', question: 'The gap between two neurons is called the:', options: ['Axon terminal', 'Synapse', 'Dendrite', 'Myelin sheath'], correctIndex: 1, explanation: 'The synapse is the gap between neurons.' },
      { id: 'q3-2', question: 'Which neurotransmitter is associated with pleasure and reward?', options: ['Serotonin', 'GABA', 'Dopamine', 'Acetylcholine'], correctIndex: 2, explanation: 'Dopamine plays a key role in reward and motivation.' },
      { id: 'q3-3', question: 'The cerebral cortex has how many lobes?', options: ['Two', 'Three', 'Four', 'Five'], correctIndex: 2, explanation: 'Four lobes: frontal, parietal, temporal, and occipital.' },
      { id: 'q3-4', question: "Broca's area is responsible for:", options: ['Vision', 'Speech production', 'Hearing', 'Movement'], correctIndex: 1, explanation: "Broca's area controls speech production." },
      { id: 'q3-5', question: 'Fight-or-flight is activated by the:', options: ['Parasympathetic nervous system', 'Sympathetic nervous system', 'Somatic nervous system', 'Central nervous system'], correctIndex: 1, explanation: 'The sympathetic nervous system activates fight-or-flight.' },
      { id: 'q3-6', question: 'The myelin sheath serves to:', options: ['Generate neurotransmitters', 'Speed up neural transmission', 'Store memories', 'Connect hemispheres'], correctIndex: 1, explanation: 'Myelin insulates axons for faster transmission.' },
      { id: 'q3-7', question: 'The hippocampus is most associated with:', options: ['Emotion regulation', 'Memory formation', 'Visual processing', 'Motor control'], correctIndex: 1, explanation: 'The hippocampus is essential for forming new memories.' },
      { id: 'q3-8', question: 'Which structure connects the two hemispheres?', options: ['Cerebellum', 'Corpus callosum', 'Thalamus', 'Hypothalamus'], correctIndex: 1, explanation: 'The corpus callosum connects left and right hemispheres.' },
      { id: 'q3-9', question: 'Endorphins are chemicals that:', options: ['Increase pain', 'Reduce pain and produce pleasure', 'Cause depression', 'Slow neurons'], correctIndex: 1, explanation: "Endorphins are the body's natural painkillers." },
      { id: 'q3-10', question: "Neuroplasticity refers to the brain's ability to:", options: ['Remain unchanged', 'Reorganize and form new connections', 'Only function in childhood', 'Produce new hormones'], correctIndex: 1, explanation: 'Neuroplasticity is the ability to form new neural connections.' }
    ]
  },
  {
    id: 'ch4-quiz', chapterId: 4, title: 'Sensation and Perception \u2014 Quiz',
    questions: [
      { id: 'q4-1', question: 'The minimum stimulation needed to detect a stimulus 50% of the time:', options: ['Difference threshold', 'Absolute threshold', 'Signal detection', "Weber's law"], correctIndex: 1, explanation: 'Absolute threshold: minimum intensity detected 50% of the time.' },
      { id: 'q4-2', question: 'Which Gestalt principle groups nearby objects together?', options: ['Similarity', 'Proximity', 'Closure', 'Continuity'], correctIndex: 1, explanation: 'Proximity: nearby objects are grouped together.' },
      { id: 'q4-3', question: 'Rods in the retina are responsible for:', options: ['Color vision', 'Vision in dim light', 'Focusing on details', 'Depth perception'], correctIndex: 1, explanation: 'Rods function in dim light and detect grayscale.' },
      { id: 'q4-4', question: 'Converting physical stimuli to neural signals is called:', options: ['Perception', 'Transduction', 'Accommodation', 'Adaptation'], correctIndex: 1, explanation: 'Transduction converts physical energy into neural signals.' },
      { id: 'q4-5', question: 'Sound wave frequency determines its:', options: ['Loudness', 'Pitch', 'Timbre', 'Duration'], correctIndex: 1, explanation: 'Frequency determines the pitch of a sound.' },
      { id: 'q4-6', question: 'The blind spot exists because:', options: ['We lack cones there', 'No photoreceptors where the optic nerve exits', 'The lens is imperfect', 'Damage from light'], correctIndex: 1, explanation: 'No receptors exist where the optic nerve exits.' },
      { id: 'q4-7', question: 'Top-down processing is guided by:', options: ['Raw sensory data', 'Expectations and prior knowledge', 'Stimulus intensity', 'Receptor cells'], correctIndex: 1, explanation: 'Top-down uses experience and knowledge to interpret input.' },
      { id: 'q4-8', question: 'Sensory adaptation refers to:', options: ['Learning new skills', 'Decreased sensitivity to a constant stimulus', 'Increased pain sensitivity', 'Improved vision over time'], correctIndex: 1, explanation: 'Adaptation: less sensitivity to unchanging stimuli.' },
      { id: 'q4-9', question: 'Binocular cues for depth require:', options: ['One eye', 'Both eyes', 'Hearing', 'Touch'], correctIndex: 1, explanation: 'Binocular cues need both eyes for depth perception.' },
      { id: 'q4-10', question: 'Opponent-process theory explains:', options: ['3D vision', 'Color vision through opposing pairs', 'Smell adaptation', 'How pain works'], correctIndex: 1, explanation: 'Color perception via three opposing pairs.' }
    ]
  },
  {
    id: 'ch5-quiz', chapterId: 5, title: 'States of Consciousness \u2014 Quiz',
    questions: [
      { id: 'q5-1', question: 'REM sleep is characterized by:', options: ['Deep relaxation', 'Rapid eye movements and vivid dreams', 'No brain activity', 'Sleepwalking'], correctIndex: 1, explanation: 'REM features rapid eye movements and vivid dreaming.' },
      { id: 'q5-2', question: 'According to Freud, dreams represent:', options: ['Random neural firing', 'Wish fulfillment of unconscious desires', 'Memory consolidation', 'Nothing meaningful'], correctIndex: 1, explanation: 'Freud believed dreams are disguised wish fulfillment.' },
      { id: 'q5-3', question: 'The circadian rhythm is approximately:', options: ['12 hours', '24 hours', '48 hours', '8 hours'], correctIndex: 1, explanation: 'Circadian rhythm follows a roughly 24-hour cycle.' },
      { id: 'q5-4', question: 'Sleep deprivation most directly impairs:', options: ['Physical strength', 'Concentration and decision-making', 'Height', 'Hearing'], correctIndex: 1, explanation: 'Sleep loss impairs attention and decision-making.' },
      { id: 'q5-5', question: 'Activation-synthesis hypothesis suggests dreams result from:', options: ['Unconscious wishes', 'Brain making sense of random neural activity', 'Supernatural forces', 'Repressed memories'], correctIndex: 1, explanation: 'Dreams are the brain interpreting random neural signals.' },
      { id: 'q5-6', question: 'Narcolepsy is characterized by:', options: ['Inability to sleep', 'Sudden uncontrollable attacks of sleep', 'Snoring loudly', 'Nightmares only'], correctIndex: 1, explanation: 'Narcolepsy involves sudden sleep attacks.' },
      { id: 'q5-7', question: 'Hypnosis is best described as:', options: ['Heightened suggestibility and focused attention', 'Deep sleep', 'Unconsciousness', 'Anesthesia'], correctIndex: 0, explanation: 'Hypnosis is heightened suggestibility, not sleep.' },
      { id: 'q5-8', question: 'Melatonin helps regulate:', options: ['Hunger', 'Sleep', 'Growth', 'Adrenaline'], correctIndex: 1, explanation: 'Melatonin regulates the sleep-wake cycle.' },
      { id: 'q5-9', question: 'Tolerance to a substance means:', options: ['You dislike it', 'You need more for the same effect', 'You are addicted', 'It no longer exists'], correctIndex: 1, explanation: 'Tolerance: needing more to achieve the same effect.' },
      { id: 'q5-10', question: 'Delta waves are associated with:', options: ['Alertness', 'REM sleep', 'Deep non-REM sleep (Stage 3)', 'Light sleep'], correctIndex: 2, explanation: 'Delta waves characterize deep non-REM sleep.' }
    ]
  },
  {
    id: 'ch6-quiz', chapterId: 6, title: 'Learning \u2014 Quiz',
    questions: [
      { id: 'q6-1', question: "In Pavlov's experiment, the bell was initially a:", options: ['Conditioned stimulus', 'Unconditioned stimulus', 'Neutral stimulus', 'Conditioned response'], correctIndex: 2, explanation: "The bell started as a neutral stimulus." },
      { id: 'q6-2', question: 'Negative reinforcement involves:', options: ['Punishment', 'Adding something unpleasant', 'Removing something unpleasant to increase behavior', 'Ignoring behavior'], correctIndex: 2, explanation: 'Negative reinforcement: removing aversive stimulus.' },
      { id: 'q6-3', question: "Bandura's Bobo doll experiment demonstrated:", options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Habituation'], correctIndex: 2, explanation: 'Children learned aggression by watching adults.' },
      { id: 'q6-4', question: 'Extinction in classical conditioning occurs when:', options: ['CS is presented without US repeatedly', 'Punishment is applied', 'The organism dies', 'Response gets stronger'], correctIndex: 0, explanation: 'Extinction: CS presented without US weakens response.' },
      { id: 'q6-5', question: 'A variable-ratio schedule produces:', options: ['Slow steady responding', 'High steady rate of responding', 'Quick extinction', 'No responding'], correctIndex: 1, explanation: 'Variable-ratio schedules produce the highest response rates.' },
      { id: 'q6-6', question: 'Shaping involves:', options: ['Punishing all behaviors', 'Reinforcing successive approximations', 'Ignoring the organism', 'Only classical conditioning'], correctIndex: 1, explanation: 'Shaping reinforces progressively closer behaviors.' },
      { id: 'q6-7', question: 'Little Albert learned to fear white rats through:', options: ['Operant conditioning', 'Classical conditioning', 'Maturation', 'Insight learning'], correctIndex: 1, explanation: 'Watson used classical conditioning.' },
      { id: 'q6-8', question: 'Which is positive punishment?', options: ['Taking away a toy', 'Getting a speeding ticket', 'Removing a shock', 'Getting a reward'], correctIndex: 1, explanation: 'Positive punishment adds an aversive consequence.' },
      { id: 'q6-9', question: 'Latent learning was demonstrated by:', options: ['Pavlov', 'Skinner', 'Tolman', 'Bandura'], correctIndex: 2, explanation: 'Tolman showed rats formed cognitive maps.' },
      { id: 'q6-10', question: 'Stimulus generalization means:', options: ['Responding only to exact stimuli', 'Responding to similar stimuli', 'No response', 'Faster extinction'], correctIndex: 1, explanation: 'Responding to stimuli similar to the conditioned one.' }
    ]
  },
  {
    id: 'ch7-quiz', chapterId: 7, title: 'Memory \u2014 Quiz',
    questions: [
      { id: 'q7-1', question: 'Sensory memory lasts approximately:', options: ['A few seconds', 'A fraction of a second to a few seconds', 'Several minutes', 'Hours'], correctIndex: 1, explanation: 'Sensory memory is very brief.' },
      { id: 'q7-2', question: 'Short-term memory capacity is approximately:', options: ['2 items', '7 +/- 2 items', '15 items', 'Unlimited'], correctIndex: 1, explanation: "Miller's magic number: 7 plus or minus 2." },
      { id: 'q7-3', question: 'Elaborative rehearsal involves:', options: ['Simple repetition', 'Connecting new info to existing knowledge', 'Forgetting', 'Writing only'], correctIndex: 1, explanation: 'Connecting new info to existing memories.' },
      { id: 'q7-4', question: "Ebbinghaus' forgetting curve shows:", options: ['Linear forgetting', 'Rapid initial forgetting then leveling off', 'No natural forgetting', 'Steady increase'], correctIndex: 1, explanation: 'Forgetting is rapid at first, then levels off.' },
      { id: 'q7-5', question: 'Retrograde amnesia is loss of:', options: ['Ability to form new memories', 'Previously stored memories', 'Procedural memory', 'Language skills'], correctIndex: 1, explanation: 'Retrograde: inability to recall past memories.' },
      { id: 'q7-6', question: 'The primacy effect is better recall of:', options: ['End items', 'Beginning items', 'Middle items', 'Random items'], correctIndex: 1, explanation: 'Primacy: better recall of list beginnings.' },
      { id: 'q7-7', question: 'Implicit memory includes:', options: ['Conscious recall', 'Skills, habits, and conditioned responses', 'Episodic memories only', 'Semantic memories only'], correctIndex: 1, explanation: 'Implicit: procedural skills and habits.' },
      { id: 'q7-8', question: "Loftus' research demonstrated:", options: ['Perfect recall', 'False memories can be created', 'Photographic memory exists', 'Memory never changes'], correctIndex: 1, explanation: 'Misleading info can alter memories.' },
      { id: 'q7-9', question: 'The method of loci is a:', options: ['Type of forgetting', 'Mnemonic using spatial memory', 'Brain structure', 'Memory disorder'], correctIndex: 1, explanation: 'Loci: associate items with familiar locations.' },
      { id: 'q7-10', question: 'Long-term potentiation (LTP) is:', options: ['Memory loss', 'Strengthening of neural connections', 'A type of amnesia', 'Short-term storage'], correctIndex: 1, explanation: 'LTP: synaptic connections strengthen with use.' }
    ]
  },
  {
    id: 'ch8-quiz', chapterId: 8, title: 'Cognition and Intelligence \u2014 Quiz',
    questions: [
      { id: 'q8-1', question: 'A heuristic is:', options: ['A guaranteed solution', 'A mental shortcut', 'A type of memory', 'A brain structure'], correctIndex: 1, explanation: 'Heuristics are quick mental shortcuts.' },
      { id: 'q8-2', question: 'Confirmation bias is the tendency to:', options: ['Seek info confirming existing beliefs', 'Consider all evidence equally', 'Change opinions frequently', 'Ignore all info'], correctIndex: 0, explanation: 'We search for info that confirms our beliefs.' },
      { id: 'q8-3', question: 'Howard Gardner proposed:', options: ['Single general intelligence', 'Multiple intelligences', 'IQ is meaningless', 'Emotional intelligence only'], correctIndex: 1, explanation: 'Gardner identified multiple types of intelligence.' },
      { id: 'q8-4', question: 'The Sapir-Whorf hypothesis suggests:', options: ['Language has no effect on thought', 'Language influences perception and thinking', 'All languages are identical', 'Thought determines language'], correctIndex: 1, explanation: 'Language shapes how we perceive and think.' },
      { id: 'q8-5', question: 'An IQ of 100 means:', options: ['Genius level', 'Below average', 'Average intelligence', 'Mental disability'], correctIndex: 2, explanation: 'IQ 100 represents the average.' },
      { id: 'q8-6', question: 'Functional fixedness is:', options: ['Seeing an object only in its typical use', 'Excellent problem-solving', 'A math skill', 'A learning disability'], correctIndex: 0, explanation: 'Inability to see alternative uses for objects.' },
      { id: 'q8-7', question: 'Availability heuristic bases judgments on:', options: ['Logic and statistics', 'How easily examples come to mind', 'Expert opinions', 'Random chance'], correctIndex: 1, explanation: 'Judgments based on ease of recall.' },
      { id: 'q8-8', question: "Sternberg's triarchic theory includes:", options: ['Verbal, math, spatial', 'Analytical, creative, practical', 'Musical, kinesthetic, interpersonal', 'Emotional, social, rational'], correctIndex: 1, explanation: 'Sternberg: analytical, creative, and practical intelligence.' },
      { id: 'q8-9', question: 'Algorithms differ from heuristics because they:', options: ['Are faster', 'Guarantee a correct solution', 'Are mental shortcuts', 'Never work'], correctIndex: 1, explanation: 'Algorithms guarantee a solution but can be slow.' },
      { id: 'q8-10', question: 'The Flynn effect refers to:', options: ['Declining IQ over time', 'Rising IQ scores over generations', 'Stable IQ across life', 'Gender differences in IQ'], correctIndex: 1, explanation: 'IQ scores have risen persistently across generations.' }
    ]
  },
  {
    id: 'ch9-quiz', chapterId: 9, title: 'Human Development \u2014 Quiz',
    questions: [
      { id: 'q9-1', question: "Object permanence is acquired during Piaget's:", options: ['Preoperational stage', 'Sensorimotor stage', 'Concrete operational stage', 'Formal operational stage'], correctIndex: 1, explanation: 'Object permanence develops in the sensorimotor stage.' },
      { id: 'q9-2', question: "Erikson's identity vs. role confusion occurs during:", options: ['Infancy', 'Early childhood', 'Adolescence', 'Adulthood'], correctIndex: 2, explanation: 'Identity crisis occurs in adolescence.' },
      { id: 'q9-3', question: 'Secure attachment was described by:', options: ['Freud', 'Mary Ainsworth', 'Piaget', 'Skinner'], correctIndex: 1, explanation: 'Ainsworth identified attachment styles.' },
      { id: 'q9-4', question: 'Zone of proximal development was proposed by:', options: ['Piaget', 'Vygotsky', 'Erikson', 'Kohlberg'], correctIndex: 1, explanation: "Vygotsky proposed the ZPD concept." },
      { id: 'q9-5', question: "Kohlberg's theory focuses on:", options: ['Cognitive development', 'Moral development', 'Physical development', 'Emotional development'], correctIndex: 1, explanation: 'Kohlberg proposed three levels of moral reasoning.' },
      { id: 'q9-6', question: 'Preoperational stage child is characterized by:', options: ['Abstract thinking', 'Egocentrism and symbolic play', 'Conservation ability', 'Logical reasoning'], correctIndex: 1, explanation: 'Preoperational children are egocentric.' },
      { id: 'q9-7', question: 'Teratogens are:', options: ['Beneficial vitamins', 'Agents that can cause birth defects', 'Types of genes', 'Growth hormones'], correctIndex: 1, explanation: 'Teratogens harm prenatal development.' },
      { id: 'q9-8', question: "Harlow's monkey experiments demonstrated:", options: ['Food over comfort', 'Contact comfort in attachment', 'Intelligence in primates', 'Visual learning'], correctIndex: 1, explanation: 'Contact comfort matters more than nourishment for attachment.' },
      { id: 'q9-9', question: 'Conservation means understanding that:', options: ['We should protect nature', 'Quantity stays same despite shape changes', 'Memory needs rehearsal', 'Energy is limited'], correctIndex: 1, explanation: 'Properties remain the same despite appearance changes.' },
      { id: 'q9-10', question: "Erikson's first psychosocial crisis is:", options: ['Autonomy vs. shame', 'Trust vs. mistrust', 'Initiative vs. guilt', 'Industry vs. inferiority'], correctIndex: 1, explanation: 'Trust vs. mistrust is the first stage.' }
    ]
  },
  {
    id: 'ch10-quiz', chapterId: 10, title: 'Motivation and Emotion \u2014 Quiz',
    questions: [
      { id: 'q10-1', question: "The highest level of Maslow's hierarchy is:", options: ['Safety needs', 'Esteem needs', 'Self-actualization', 'Love and belonging'], correctIndex: 2, explanation: 'Self-actualization is at the top.' },
      { id: 'q10-2', question: 'The James-Lange theory states:', options: ['Emotions cause physical responses', 'Physical responses cause emotions', 'They occur simultaneously', 'Emotions are purely cognitive'], correctIndex: 1, explanation: 'We feel emotions because of our body response.' },
      { id: 'q10-3', question: 'Intrinsic motivation comes from:', options: ['External rewards', 'Internal satisfaction', 'Social pressure', 'Money'], correctIndex: 1, explanation: 'Intrinsic motivation arises from internal enjoyment.' },
      { id: 'q10-4', question: 'Set-point theory suggests:', options: ['A natural body weight range the body maintains', 'Eat anything without gaining weight', 'Metabolism irrelevant', 'Exercise unnecessary'], correctIndex: 0, explanation: 'Body works to maintain a natural weight range.' },
      { id: 'q10-5', question: "Ekman's research found facial expressions of emotions are:", options: ['Culturally unique', 'Universal across cultures', 'Only learned through media', 'Different everywhere'], correctIndex: 1, explanation: 'Basic emotional expressions are universal.' },
      { id: 'q10-6', question: 'Yerkes-Dodson law states:', options: ['More arousal always helps', 'Moderate arousal is optimal', 'Low arousal is best', 'Arousal irrelevant'], correctIndex: 1, explanation: 'Moderate arousal leads to optimal performance.' },
      { id: 'q10-7', question: 'Cannon-Bard theory proposes:', options: ['Body changes cause emotions', 'Emotions and arousal occur simultaneously', 'We label arousal to create emotions', 'Emotions are unnecessary'], correctIndex: 1, explanation: 'Emotional experience and arousal happen simultaneously.' },
      { id: 'q10-8', question: 'Overjustification effect occurs when:', options: ['External rewards decrease intrinsic motivation', 'Too much motivation leads to failure', 'People work harder for money', 'Emotions are too strong'], correctIndex: 0, explanation: 'External rewards can reduce intrinsic motivation.' },
      { id: 'q10-9', question: 'Which theory says we label our arousal to identify emotions?', options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer two-factor', 'Evolutionary theory'], correctIndex: 2, explanation: 'Schachter-Singer: emotion = arousal + cognitive label.' },
      { id: 'q10-10', question: 'Maslow is best known for:', options: ['Behaviorism', 'Hierarchy of needs', 'Psychoanalysis', 'Cognitive therapy'], correctIndex: 1, explanation: 'Maslow developed the hierarchy of needs.' }
    ]
  },
  {
    id: 'ch11-quiz', chapterId: 11, title: 'Personality \u2014 Quiz',
    questions: [
      { id: 'q11-1', question: "Freud's id operates on the:", options: ['Reality principle', 'Pleasure principle', 'Moral principle', 'Social principle'], correctIndex: 1, explanation: 'The id seeks immediate gratification.' },
      { id: 'q11-2', question: 'Big Five traits include all EXCEPT:', options: ['Openness', 'Conscientiousness', 'Intelligence', 'Neuroticism'], correctIndex: 2, explanation: 'Intelligence is not one of the Big Five (OCEAN).' },
      { id: 'q11-3', question: 'Carl Rogers emphasized:', options: ['Defense mechanisms', 'Unconditional positive regard', 'Classical conditioning', 'Dream analysis'], correctIndex: 1, explanation: 'Rogers: unconditional positive regard is essential.' },
      { id: 'q11-4', question: 'Projection is a defense mechanism where a person:', options: ['Denies reality', 'Attributes own feelings to others', 'Returns to earlier stage', 'Channels impulses productively'], correctIndex: 1, explanation: 'Projecting your unacceptable feelings onto others.' },
      { id: 'q11-5', question: "Bandura's self-efficacy refers to:", options: ['Overall self-esteem', 'Belief in ability to succeed at specific tasks', 'Personality type', 'Intelligence level'], correctIndex: 1, explanation: 'Belief in your capability to perform.' },
      { id: 'q11-6', question: "Freud's psychosexual stages include all EXCEPT:", options: ['Oral stage', 'Anal stage', 'Cognitive stage', 'Phallic stage'], correctIndex: 2, explanation: '"Cognitive" is Piaget, not Freud.' },
      { id: 'q11-7', question: 'The Rorschach test uses:', options: ['True/false questions', 'Inkblots', 'Sentence completion', 'Drawing tasks'], correctIndex: 1, explanation: 'Rorschach uses ambiguous inkblots.' },
      { id: 'q11-8', question: 'The ego operates on the:', options: ['Pleasure principle', 'Moral principle', 'Reality principle', 'Unconscious principle'], correctIndex: 2, explanation: 'Ego mediates between id and reality.' },
      { id: 'q11-9', question: 'Locus of control refers to:', options: ['Brain location for control', 'Whether outcomes are controlled by you or external forces', 'Physical coordination', 'Self-esteem level'], correctIndex: 1, explanation: 'Internal vs external locus of control.' },
      { id: 'q11-10', question: 'Alfred Adler proposed:', options: ['Collective unconscious', 'Inferiority complex', 'Self-actualization', 'Operant conditioning'], correctIndex: 1, explanation: 'Adler: feelings of inferiority motivate growth.' }
    ]
  },
  {
    id: 'ch12-quiz', chapterId: 12, title: 'Social Psychology \u2014 Quiz',
    questions: [
      { id: 'q12-1', question: "In Asch's conformity experiment, participants conformed about:", options: ['Colors', 'Line lengths', 'Sounds', 'Weights'], correctIndex: 1, explanation: 'Participants agreed with wrong line length judgments.' },
      { id: 'q12-2', question: "Milgram's study found participants:", options: ['Refused to shock others', 'Often obeyed authority even to harm others', 'Never followed instructions', 'Only liked the experiment'], correctIndex: 1, explanation: 'About 65% obeyed authority to deliver shocks.' },
      { id: 'q12-3', question: 'The bystander effect suggests:', options: ['More bystanders always help', 'People are less likely to help when others are present', 'Only men help', 'Helping increases with crowd size'], correctIndex: 1, explanation: 'Others present reduces individual helping.' },
      { id: 'q12-4', question: 'Cognitive dissonance is:', options: ['Agreement between attitudes and behavior', 'Discomfort from contradictory beliefs', 'A memory error', 'A personality disorder'], correctIndex: 1, explanation: 'Discomfort when attitudes and behaviors conflict.' },
      { id: 'q12-5', question: 'Fundamental attribution error is:', options: ['Overestimating situational factors', 'Overestimating personality traits for others', 'Equally weighing all factors', 'Blaming ourselves'], correctIndex: 1, explanation: "We overemphasize others' personality traits." },
      { id: 'q12-6', question: 'Stanford Prison Experiment was conducted by:', options: ['Milgram', 'Asch', 'Philip Zimbardo', 'Bandura'], correctIndex: 2, explanation: 'Zimbardo conducted the Stanford Prison Experiment.' },
      { id: 'q12-7', question: 'Groupthink leads to:', options: ['Better decisions', 'Poor decisions due to desire for harmony', 'More creativity', 'Individual thinking'], correctIndex: 1, explanation: 'Group consensus overrides realistic appraisal.' },
      { id: 'q12-8', question: 'Mere exposure effect means:', options: ['We dislike familiar things', 'Repeated exposure increases liking', 'First impressions are everything', 'Advertising fails'], correctIndex: 1, explanation: 'Familiarity breeds liking.' },
      { id: 'q12-9', question: 'Social loafing is:', options: ['Working harder in groups', 'Less effort in a group', 'A leadership style', 'Role confusion'], correctIndex: 1, explanation: 'People exert less effort in groups.' },
      { id: 'q12-10', question: 'Deindividuation occurs when:', options: ['People become more self-aware', 'People lose self-awareness in groups', 'Groups become cautious', 'Individuals lead groups'], correctIndex: 1, explanation: 'Loss of self-awareness in group situations.' }
    ]
  },
  {
    id: 'ch13-quiz', chapterId: 13, title: 'Stress, Health, and Coping \u2014 Quiz',
    questions: [
      { id: 'q13-1', question: "Selye's General Adaptation Syndrome stages:", options: ['Start, middle, end', 'Alarm, resistance, exhaustion', 'Stress, cope, recover', 'Fight, flight, freeze'], correctIndex: 1, explanation: 'Three stages: alarm, resistance, exhaustion.' },
      { id: 'q13-2', question: 'Type A personality is characterized by:', options: ['Relaxation and patience', 'Competitiveness, urgency, hostility', 'Introversion and calmness', 'Low motivation'], correctIndex: 1, explanation: 'Type A: competitive, time-pressured, hostile.' },
      { id: 'q13-3', question: 'Problem-focused coping involves:', options: ['Managing emotions', 'Directly addressing the stressor', 'Avoiding the problem', 'Denial'], correctIndex: 1, explanation: 'Directly tackling the problem causing stress.' },
      { id: 'q13-4', question: 'The immune system can be weakened by:', options: ['Exercise', 'Chronic stress', 'Good nutrition', 'Sleep'], correctIndex: 1, explanation: 'Chronic stress suppresses immune function.' },
      { id: 'q13-5', question: 'Burnout is characterized by:', options: ['High energy', 'Emotional exhaustion and depersonalization', 'Physical injury', 'Increased productivity'], correctIndex: 1, explanation: 'Burnout: exhaustion, cynicism, reduced accomplishment.' },
      { id: 'q13-6', question: 'Social support helps health by:', options: ['Eliminating all stress', 'Providing emotional and tangible assistance', 'Replacing medical treatment', 'Increasing blood pressure'], correctIndex: 1, explanation: 'Support buffers against stress.' },
      { id: 'q13-7', question: 'Cortisol is produced by the:', options: ['Thyroid gland', 'Adrenal glands', 'Pituitary gland', 'Pineal gland'], correctIndex: 1, explanation: 'Adrenal glands produce cortisol.' },
      { id: 'q13-8', question: 'Emotion-focused coping includes:', options: ['Making a plan', 'Relaxation and seeking emotional support', 'Solving the problem', 'Confronting the stressor'], correctIndex: 1, explanation: 'Managing emotional response to stress.' },
      { id: 'q13-9', question: 'Daily hassles vs major events: research shows:', options: ['Only major events cause stress', 'Daily hassles can be as harmful', 'Hassles irrelevant', 'Major events have no impact'], correctIndex: 1, explanation: 'Accumulated hassles are significantly harmful.' },
      { id: 'q13-10', question: 'Resilience refers to:', options: ['Avoiding all stress', 'Ability to recover after adversity', 'Physical toughness', 'Never experiencing negative emotions'], correctIndex: 1, explanation: 'Capacity to recover and adapt positively.' }
    ]
  },
  {
    id: 'ch14-quiz', chapterId: 14, title: 'Psychological Disorders \u2014 Quiz',
    questions: [
      { id: 'q14-1', question: 'The DSM-5 is:', options: ['A therapy technique', 'Diagnostic manual for mental disorders', 'A medication', 'A personality test'], correctIndex: 1, explanation: 'The standard classification system for disorders.' },
      { id: 'q14-2', question: 'Major depressive disorder involves:', options: ['Brief sadness', 'Persistent depressed mood lasting at least two weeks', 'Constant happiness', 'Physical symptoms only'], correctIndex: 1, explanation: 'Persistent depressed mood for at least two weeks.' },
      { id: 'q14-3', question: 'Schizophrenia is characterized by:', options: ['Multiple personalities', 'Hallucinations, delusions, disordered thinking', 'Extreme anxiety', 'Memory loss only'], correctIndex: 1, explanation: 'Hallucinations, delusions, and disorganized thinking.' },
      { id: 'q14-4', question: 'A phobia is:', options: ['A normal fear', 'Irrational excessive fear of specific things', 'Temporary anxiety', 'A mood disorder'], correctIndex: 1, explanation: 'Intense, irrational fears causing avoidance.' },
      { id: 'q14-5', question: 'Bipolar disorder involves:', options: ['Only depression', 'Alternating mania and depression', 'Constant mania', 'Anxiety and phobias'], correctIndex: 1, explanation: 'Alternating episodes of mania and depression.' },
      { id: 'q14-6', question: 'PTSD can develop after:', options: ['Mild stress', 'Experiencing or witnessing trauma', 'A normal bad day', 'Puberty'], correctIndex: 1, explanation: 'PTSD follows exposure to traumatic events.' },
      { id: 'q14-7', question: 'Diathesis-stress model proposes disorders result from:', options: ['Only genetics', 'Only environment', 'Biological predisposition activated by stress', 'Random chance'], correctIndex: 2, explanation: 'Vulnerability interacts with stressful events.' },
      { id: 'q14-8', question: 'OCD involves:', options: ['Obsessions and compulsions', 'Only sadness', 'Social withdrawal', 'Memory loss'], correctIndex: 0, explanation: 'Intrusive thoughts and repetitive behaviors.' },
      { id: 'q14-9', question: 'GAD is characterized by:', options: ['Specific fears', 'Persistent excessive worry about many things', 'Panic attacks only', 'Delusions'], correctIndex: 1, explanation: 'Chronic, excessive worry about multiple areas.' },
      { id: 'q14-10', question: 'Medical model views disorders as:', options: ['Moral failures', 'Diseases with biological causes', 'Personal choices', 'Spiritual problems'], correctIndex: 1, explanation: 'Treating disorders as biological illnesses.' }
    ]
  },
  {
    id: 'ch15-quiz', chapterId: 15, title: 'Therapies \u2014 Quiz',
    questions: [
      { id: 'q15-1', question: 'CBT focuses on:', options: ['Dream analysis', 'Changing dysfunctional thoughts and behaviors', 'Free association', 'Medication only'], correctIndex: 1, explanation: 'CBT restructures negative thoughts and behaviors.' },
      { id: 'q15-2', question: 'Systematic desensitization treats:', options: ['Depression', 'Phobias through gradual exposure with relaxation', 'Schizophrenia', 'ADHD'], correctIndex: 1, explanation: 'Gradual exposure paired with relaxation.' },
      { id: 'q15-3', question: 'Client-centered therapy was developed by:', options: ['Freud', 'Skinner', 'Carl Rogers', 'Aaron Beck'], correctIndex: 2, explanation: 'Rogers created person-centered therapy.' },
      { id: 'q15-4', question: 'SSRIs work by:', options: ['Blocking dopamine', 'Increasing serotonin availability', 'Reducing all brain activity', 'Eliminating neurons'], correctIndex: 1, explanation: 'SSRIs block serotonin reabsorption.' },
      { id: 'q15-5', question: 'Free association is used in:', options: ['Cognitive therapy', 'Behavioral therapy', 'Psychoanalysis', 'Group therapy'], correctIndex: 2, explanation: 'A psychoanalytic technique for revealing the unconscious.' },
      { id: 'q15-6', question: 'Group therapy offers:', options: ['Lower cost only', 'Shared experiences and social skills practice', 'Faster medication effects', 'Solitary healing'], correctIndex: 1, explanation: 'Peer support and social skills practice.' },
      { id: 'q15-7', question: 'Exposure therapy is based on:', options: ['Psychoanalysis', 'Classical conditioning extinction', 'Humanistic theory', 'Trait theory'], correctIndex: 1, explanation: 'Repeated exposure leads to fear extinction.' },
      { id: 'q15-8', question: 'Lithium primarily treats:', options: ['Depression', 'Anxiety', 'Bipolar disorder', 'Schizophrenia'], correctIndex: 2, explanation: 'Lithium is the first-line treatment for bipolar.' },
      { id: 'q15-9', question: 'Eclectic approach involves:', options: ['One method only', 'Integrating various therapeutic techniques', 'Rejecting all evidence', 'Only medication'], correctIndex: 1, explanation: 'Combining techniques from different orientations.' },
      { id: 'q15-10', question: 'Psychotherapy is most effective when:', options: ['Applied for one session', 'There is a strong therapeutic alliance', 'Client does not participate', 'No diagnosis is made'], correctIndex: 1, explanation: 'Therapeutic relationship is the strongest predictor.' }
    ]
  }
];
`;

// Psychologists with real Wikipedia image URLs
content += `
export const PSYCHOLOGISTS: Psychologist[] = [
  { name: 'Sigmund Freud', years: '1856\u20131939', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg', nationality: 'Austrian', field: 'Psychoanalysis', contribution: 'Father of Psychoanalysis', details: 'Developed psychoanalytic theory, proposing that unconscious conflicts drive behavior. Introduced concepts of the id, ego, and superego; defense mechanisms; dream analysis; and psychosexual stages of development.' },
  { name: 'B.F. Skinner', years: '1904\u20131990', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/B.F._Skinner_at_Harvard_circa_1950.jpg/220px-B.F._Skinner_at_Harvard_circa_1950.jpg', nationality: 'American', field: 'Behaviorism', contribution: 'Pioneer of Operant Conditioning', details: 'Developed operant conditioning theory, demonstrating how behavior is shaped by reinforcement and punishment. Invented the Skinner Box and introduced schedules of reinforcement.' },
  { name: 'Carl Rogers', years: '1902\u20131987', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Carl_Rogers.jpg/220px-Carl_Rogers.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Founder of Client-Centered Therapy', details: 'Pioneered humanistic psychology and person-centered therapy. Emphasized unconditional positive regard, empathy, and congruence. Believed people have an innate tendency toward self-actualization.' },
  { name: 'Jean Piaget', years: '1896\u20131980', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jean_Piaget_in_Ann_Arbor.png/220px-Jean_Piaget_in_Ann_Arbor.png', nationality: 'Swiss', field: 'Developmental Psychology', contribution: 'Theory of Cognitive Development', details: 'Proposed four stages of cognitive development: sensorimotor, preoperational, concrete operational, and formal operational. Transformed understanding of child development.' },
  { name: 'Ivan Pavlov', years: '1849\u20131936', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_%28Nobel%29.png/220px-Ivan_Pavlov_%28Nobel%29.png', nationality: 'Russian', field: 'Behavioral Psychology', contribution: 'Discovery of Classical Conditioning', details: 'While studying digestion in dogs, discovered classical conditioning\u2014learning through association. His experiments with bells and salivation became the foundation of behavioral psychology.' },
  { name: 'Abraham Maslow', years: '1908\u20131970', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Abraham_Maslow.jpg/220px-Abraham_Maslow.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Hierarchy of Needs', details: 'Created the hierarchy of needs\u2014a five-level model of human motivation from basic physiological needs to self-actualization. Co-founded humanistic psychology.' },
  { name: 'Philip Zimbardo', years: '1933\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg/220px-Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Stanford Prison Experiment', details: 'Conducted the Stanford Prison Experiment (1971), demonstrating how social roles and situational forces dramatically influence behavior. Wrote "Psychology and Life."' },
  { name: 'Albert Bandura', years: '1925\u20132021', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Albert_Bandura_in_his_Stanford_University_office_2005.jpg/220px-Albert_Bandura_in_his_Stanford_University_office_2005.jpg', nationality: 'Canadian-American', field: 'Social Learning', contribution: 'Social Learning Theory & Self-Efficacy', details: 'Demonstrated observational learning through the Bobo doll experiment. Developed social learning theory and the concept of self-efficacy.' },
  { name: 'Elizabeth Loftus', years: '1944\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Elizabeth_Loftus.jpg/220px-Elizabeth_Loftus.jpg', nationality: 'American', field: 'Cognitive Psychology', contribution: 'False Memory Research', details: 'Pioneering researcher in the malleability of human memory. Demonstrated that memories can be altered through suggestion and misinformation.' },
  { name: 'Stanley Milgram', years: '1933\u20131984', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Stanley_Milgram.jpg/220px-Stanley_Milgram.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Obedience Experiments', details: 'Conducted groundbreaking obedience experiments showing ordinary people will follow authority figures even when asked to harm others.' },
  { name: 'Erik Erikson', years: '1902\u20131994', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Erik_Erikson.png/220px-Erik_Erikson.png', nationality: 'German-American', field: 'Developmental Psychology', contribution: 'Psychosocial Development Theory', details: 'Proposed eight stages of psychosocial development spanning the entire lifespan, from trust vs. mistrust to integrity vs. despair.' },
  { name: 'Carl Jung', years: '1875\u20131961', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/220px-CGJung.jpg', nationality: 'Swiss', field: 'Analytical Psychology', contribution: 'Collective Unconscious & Archetypes', details: 'Developed analytical psychology, proposing the collective unconscious\u2014shared ancestral memories. Introduced archetypes, introversion/extraversion, and individuation.' },
  { name: 'Lev Vygotsky', years: '1896\u20131934', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lev_Vygotsky_1896-1934.jpg/220px-Lev_Vygotsky_1896-1934.jpg', nationality: 'Russian', field: 'Developmental Psychology', contribution: 'Zone of Proximal Development', details: 'Proposed that learning is fundamentally social. His ZPD describes the gap between what a child can do alone and with guidance. Died at 37 but left an enormous legacy.' },
  { name: 'Mary Ainsworth', years: '1913\u20131999', photo: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Mary_Ainsworth.jpg', nationality: 'Canadian-American', field: 'Developmental Psychology', contribution: 'Attachment Theory Research', details: 'Developed the Strange Situation experiment, identifying three main attachment styles: secure, avoidant, and anxious/ambivalent.' },
  { name: 'Daniel Kahneman', years: '1934\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Daniel_KAHNEMAN.jpg/220px-Daniel_KAHNEMAN.jpg', nationality: 'Israeli-American', field: 'Cognitive Psychology', contribution: 'Behavioral Economics & Thinking Biases', details: 'Nobel Prize winner who demonstrated systematic biases in human judgment. His book "Thinking, Fast and Slow" introduced System 1 and System 2 thinking.' },
  { name: 'Martin Seligman', years: '1942\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Martin_Seligman.jpg/220px-Martin_Seligman.jpg', nationality: 'American', field: 'Positive Psychology', contribution: 'Learned Helplessness & Positive Psychology', details: 'Discovered learned helplessness and founded positive psychology. Developed the PERMA model of flourishing.' }
];
`;

// Facts with visually distinct Iconify icons
content += `
export const FACTS: Fact[] = [
  { id: 1, text: 'Your brain uses about 20% of your body\\'s total energy, despite being only 2% of your body weight.', source: 'Neuroscience', category: 'Brain', icon: 'fluent:brain-circuit-20-filled' },
  { id: 2, text: 'The average person has about 6,200 thoughts per day, according to a 2020 study at Queen\\'s University.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:head-lightbulb-outline' },
  { id: 3, text: 'Memories are not stored in a single location\u2014they are distributed across networks of neurons throughout the brain.', source: 'Memory Research', category: 'Memory', icon: 'mdi:memory' },
  { id: 4, text: 'The "doorway effect": Walking through a doorway can cause you to forget what you were thinking.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:door-open' },
  { id: 5, text: 'We can only consciously process about 50 bits of information per second, despite our senses receiving millions.', source: 'Perception Research', category: 'Perception', icon: 'mdi:eye-settings-outline' },
  { id: 6, text: 'In Milgram\\'s experiment, 65% of participants administered what they believed were lethal electric shocks when ordered by an authority figure.', source: 'Social Psychology', category: 'Social', icon: 'mdi:flash-alert-outline' },
  { id: 7, text: 'The placebo effect can be so powerful that even when people know they are taking a placebo, they still experience benefits.', source: 'Health Psychology', category: 'Health', icon: 'mdi:pill' },
  { id: 8, text: 'Babies can recognize their mother\\'s voice from birth, having listened to her in the womb for months.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:baby-carriage' },
  { id: 9, text: 'Smiling (even forced) can actually improve your mood through the facial feedback hypothesis.', source: 'Emotion Research', category: 'Emotion', icon: 'mdi:emoticon-happy-outline' },
  { id: 10, text: 'The "Dunning-Kruger Effect": People with limited knowledge tend to overestimate their competence, while experts underestimate theirs.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:chart-bell-curve-cumulative' },
  { id: 11, text: 'Your unconscious mind processes about 11 million pieces of information per second, while your conscious mind handles about 40.', source: 'Cognitive Neuroscience', category: 'Brain', icon: 'mdi:head-sync-outline' },
  { id: 12, text: 'Sleep is when your brain consolidates memories. Missing one night can impair memory by up to 40%.', source: 'Sleep Research', category: 'Memory', icon: 'mdi:power-sleep' },
  { id: 13, text: 'Mirror neurons fire both when you perform an action and when you watch someone else perform it, forming the basis of empathy.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:mirror-variant' },
  { id: 14, text: 'The Stanford Prison Experiment was planned for 2 weeks but stopped after 6 days due to the guards\\' cruel behavior.', source: 'Social Psychology', category: 'Social', icon: 'mdi:shield-alert-outline' },
  { id: 15, text: 'Fear of public speaking affects approximately 75% of the population, more common than fear of death.', source: 'Clinical Psychology', category: 'Anxiety', icon: 'mdi:microphone-off' },
  { id: 16, text: 'The "Halo Effect": If you perceive someone as attractive, you are more likely to rate them as intelligent and kind.', source: 'Social Psychology', category: 'Social', icon: 'mdi:star-circle-outline' },
  { id: 17, text: 'Oxytocin, the "love hormone," is released during hugging, bonding, and social interaction, promoting trust.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:heart-pulse' },
  { id: 18, text: 'It takes only 1/10th of a second to form a first impression\u2014and those impressions tend to be surprisingly accurate.', source: 'Social Psychology', category: 'Social', icon: 'mdi:timer-outline' },
  { id: 19, text: 'Children with secure attachments in infancy tend to have better relationships and higher self-esteem in adulthood.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:human-female-boy' },
  { id: 20, text: 'The "Zeigarnik Effect": We remember uncompleted tasks better than completed ones because our brain keeps them active.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:checkbox-blank-circle-outline' }
];
`;

// Stories with visually distinct icons
content += `
export const STORIES: Story[] = [
  {
    id: 1, title: 'Pavlov\\'s Accidental Discovery', chapterId: 6, icon: 'mdi:bell-ring-outline',
    content: 'Ivan Pavlov was studying digestion in dogs when he noticed something unusual. The dogs began salivating not just when food was placed in their mouths, but when they saw the lab assistant who usually fed them. Intrigued, Pavlov began pairing a bell with food delivery. After several pairings, the dogs salivated at the sound of the bell alone.',
    moral: 'Great discoveries often emerge when curious minds pay attention to the unexpected.'
  },
  {
    id: 2, title: 'The Story of Phineas Gage', chapterId: 3, icon: 'fluent:brain-circuit-20-filled',
    content: 'In 1848, railroad foreman Phineas Gage survived a horrific accident when an iron rod blasted through his skull, destroying much of his left frontal lobe. Physically he recovered, but his personality changed dramatically. Once responsible and well-liked, he became impulsive and profane.',
    moral: 'The brain is the seat of personality\u2014damage to specific areas can transform who we are.'
  },
  {
    id: 3, title: 'Little Albert and the White Rat', chapterId: 6, icon: 'mdi:emoticon-cry-outline',
    content: 'In 1920, psychologist John Watson wanted to prove that emotions could be learned. He introduced 9-month-old "Little Albert" to a white rat, which the baby was not afraid of. Then Watson made a loud frightening noise every time Albert touched the rat. Soon, Albert cried at the sight of the rat.',
    moral: 'Fears can be learned through association\u2014and ethical guidelines exist to prevent harm.'
  },
  {
    id: 4, title: 'The Invisible Gorilla', chapterId: 4, icon: 'mdi:eye-off-outline',
    content: 'In a famous 1999 experiment, Simons and Chabris asked participants to count basketball passes by players in white shirts. About 50% of participants completely missed a person in a gorilla suit walking through the middle of the game.',
    moral: 'Our attention is far more limited than we think\u2014we can be blind to the obvious.'
  },
  {
    id: 5, title: 'Harlow\\'s Monkeys and the Need for Love', chapterId: 9, icon: 'mdi:heart-outline',
    content: 'Harry Harlow separated infant monkeys from their mothers and gave them two surrogates: a wire one with milk and a soft cloth one without food. The babies overwhelmingly clung to the soft mother, proving emotional comfort is more important than food.',
    moral: 'Love and comfort are fundamental needs that shape development from the earliest moments.'
  },
  {
    id: 6, title: 'The Marshmallow Test', chapterId: 10, icon: 'mdi:cookie-outline',
    content: 'Walter Mischel offered preschoolers a choice: one marshmallow now, or two if they could wait 15 minutes alone. Follow-up studies found that children who waited had better life outcomes: higher SAT scores, better social skills, and lower BMI.',
    moral: 'The ability to delay gratification is one of the most powerful predictors of life success.'
  },
  {
    id: 7, title: 'Kitty Genovese and Bystander Apathy', chapterId: 12, icon: 'mdi:account-alert-outline',
    content: 'In 1964, Kitty Genovese was attacked in New York. Reportedly, 38 neighbors heard or saw the attack but did not call police. Psychologists Darley and Latan\\u00E9 later showed this "bystander effect" occurs because responsibility diffuses in groups.',
    moral: 'In emergencies, the more people present, the less likely any individual is to help.'
  },
  {
    id: 8, title: 'Seligman and the Dogs Who Gave Up', chapterId: 10, icon: 'mdi:emoticon-sad-outline',
    content: 'Martin Seligman discovered that dogs who received inescapable shocks eventually stopped trying to avoid them\u2014even when escape was later possible. He called this "learned helplessness" and connected it to human depression.',
    moral: 'Repeated failure can make us stop trying\u2014but learned helplessness can be unlearned.'
  },
  {
    id: 9, title: 'The Case of H.M.: A Life Without Memory', chapterId: 7, icon: 'mdi:head-question-outline',
    content: 'In 1953, Henry Molaison had surgery to cure severe epilepsy. The procedure removed parts of his temporal lobes, including his hippocampus. The seizures stopped, but H.M. could no longer form new long-term memories.',
    moral: 'The hippocampus is critical for memory formation\u2014specific brain structures serve specific functions.'
  },
  {
    id: 10, title: 'Rosenhan\\'s "Being Sane in Insane Places"', chapterId: 14, icon: 'mdi:hospital-building',
    content: 'In 1973, David Rosenhan and seven associates got themselves admitted to psychiatric hospitals by claiming to hear voices. Once admitted, they behaved normally. Yet staff treated all their behavior as signs of mental illness, and they were hospitalized for an average of 19 days.',
    moral: 'Labels are powerful\u2014once you are categorized, everything you do is interpreted through that lens.'
  }
];
`;

// Memory cards
content += `
export const MEMORY_CARDS: MemoryCard[] = [
  { id: 1, term: 'Psychology', definition: 'The scientific study of behavior and mental processes', category: 'Basics' },
  { id: 2, term: 'Neuron', definition: 'A nerve cell that transmits electrical and chemical signals', category: 'Biology' },
  { id: 3, term: 'Classical Conditioning', definition: 'Learning through association of stimuli (Pavlov)', category: 'Learning' },
  { id: 4, term: 'Operant Conditioning', definition: 'Learning through consequences: reinforcement and punishment (Skinner)', category: 'Learning' },
  { id: 5, term: 'Hippocampus', definition: 'Brain structure essential for forming new long-term memories', category: 'Biology' },
  { id: 6, term: 'Cognitive Dissonance', definition: 'Discomfort from holding contradictory beliefs or attitudes', category: 'Social' },
  { id: 7, term: 'Maslow\\'s Hierarchy', definition: 'Five-level model of human motivation from basic needs to self-actualization', category: 'Motivation' },
  { id: 8, term: 'Big Five (OCEAN)', definition: 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', category: 'Personality' },
  { id: 9, term: 'Attachment Theory', definition: 'The bond between infant and caregiver that shapes later relationships', category: 'Development' },
  { id: 10, term: 'Confirmation Bias', definition: 'Tendency to seek information that supports existing beliefs', category: 'Cognition' },
  { id: 11, term: 'Dopamine', definition: 'Neurotransmitter involved in reward, motivation, and pleasure', category: 'Biology' },
  { id: 12, term: 'REM Sleep', definition: 'Sleep stage with rapid eye movements and vivid dreaming', category: 'Consciousness' },
  { id: 13, term: 'Bystander Effect', definition: 'Less likely to help when others are present', category: 'Social' },
  { id: 14, term: 'Placebo Effect', definition: 'Improvement from belief in treatment rather than the treatment itself', category: 'Research' },
  { id: 15, term: 'Schema', definition: 'Mental framework that helps organize and interpret information', category: 'Cognition' },
  { id: 16, term: 'Amygdala', definition: 'Brain structure involved in processing emotions, especially fear', category: 'Biology' },
  { id: 17, term: 'Self-Efficacy', definition: 'Belief in your ability to succeed at specific tasks (Bandura)', category: 'Personality' },
  { id: 18, term: 'Learned Helplessness', definition: 'Giving up after repeated failures even when escape is possible (Seligman)', category: 'Motivation' },
  { id: 19, term: 'Transference', definition: 'Redirecting feelings about one person onto the therapist', category: 'Therapy' },
  { id: 20, term: 'Heuristic', definition: 'Mental shortcut for quick decision-making that can lead to errors', category: 'Cognition' },
  { id: 21, term: 'Synapse', definition: 'The gap between neurons where neurotransmitters cross', category: 'Biology' },
  { id: 22, term: 'Extinction', definition: 'The weakening of a conditioned response when reinforcement stops', category: 'Learning' },
  { id: 23, term: 'Superego', definition: 'The moral conscience in Freud\\'s personality structure', category: 'Personality' },
  { id: 24, term: 'Neuroplasticity', definition: 'The brain\\'s ability to reorganize and form new neural connections', category: 'Biology' }
];
`;

fs.writeFileSync(path, content, "utf-8");
console.log("All data written successfully. Lines:", content.split("\\n").length);
`;

fs.writeFileSync("gen_data.js", script, "utf-8");
console.log("Script created");
