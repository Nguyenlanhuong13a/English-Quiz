// Advanced English Quiz Questions
const questions = [
    // Vocabulary Questions
    {
        category: 'vocabulary',
        question: 'Which word is a synonym for "ubiquitous"?',
        choices: [
            'Rare',
            'Omnipresent',
            'Unique',
            'Transparent'
        ],
        correctAnswer: 1,
        explanation: 'Ubiquitous means existing or being everywhere at the same time. Omnipresent is a synonym meaning present everywhere at the same time.'
    },
    {
        category: 'vocabulary',
        question: 'What does the word "ephemeral" mean?',
        choices: [
            'Lasting for a very short time',
            'Extremely important',
            'Visually stunning',
            'Morally wrong'
        ],
        correctAnswer: 0,
        explanation: 'Ephemeral means lasting for a very short time or transitory. For example, ephemeral flowers bloom for just a few days.'
    },
    {
        category: 'vocabulary',
        question: 'Choose the correct meaning of "juxtaposition":',
        choices: [
            'A legal document',
            'The act of placing two things next to each other for comparison',
            'A type of architectural design',
            'A medical procedure'
        ],
        correctAnswer: 1,
        explanation: 'Juxtaposition refers to the act of placing two or more things side by side, often to compare or contrast them or create an interesting effect.'
    },
    {
        category: 'vocabulary',
        question: 'What is the meaning of "perfunctory"?',
        choices: [
            'Perfect and complete',
            'Done with minimal effort or care',
            'Extremely detailed',
            'Relating to perfume'
        ],
        correctAnswer: 1,
        explanation: 'Perfunctory describes something carried out with minimal effort or care, just as a formality or routine, without real interest or enthusiasm.'
    },
    {
        category: 'vocabulary',
        question: 'Which of these is an antonym for "verbose"?',
        choices: [
            'Concise',
            'Eloquent',
            'Wordy',
            'Descriptive'
        ],
        correctAnswer: 0,
        explanation: 'Verbose means using or containing more words than needed. Concise, meaning expressing much in few words, is its antonym.'
    },
    {
        category: 'vocabulary',
        question: 'What does "sycophant" mean?',
        choices: [
            'A musical instrument',
            'A type of ancient currency',
            'A person who flatters someone important for personal gain',
            'A rare tropical disease'
        ],
        correctAnswer: 2,
        explanation: 'A sycophant is a person who acts obsequiously toward someone important in order to gain advantage; in other words, a bootlicker or yes-man.'
    },
    {
        category: 'vocabulary',
        question: 'Choose the correct meaning of "equivocal":',
        choices: [
            'Equal in value',
            'Related to horses',
            'Open to more than one interpretation',
            'Perfectly balanced'
        ],
        correctAnswer: 2,
        explanation: 'Equivocal means open to multiple interpretations; ambiguous or unclear. It can also refer to statements that are deliberately unclear or misleading.'
    },
    {
        category: 'vocabulary',
        question: 'What is the definition of "esoteric"?',
        choices: [
            'Intended for or likely to be understood by only a small number of people',
            'Relating to the outside world',
            'Extremely common knowledge',
            'Scientifically proven'
        ],
        correctAnswer: 0,
        explanation: 'Esoteric refers to knowledge that is understood by or meant for a select few people with specialized knowledge or interest; obscure or mysterious.'
    },
    {
        category: 'vocabulary',
        question: 'Which word means "to make amends for"?',
        choices: [
            'Exacerbate',
            'Atone',
            'Replenish',
            'Admonish'
        ],
        correctAnswer: 1,
        explanation: 'To atone means to make amends or reparation for a wrong or injury one has done. It involves compensating for an error or appeasing someone.'
    },
    {
        category: 'vocabulary',
        question: 'What does "cacophony" refer to?',
        choices: [
            'A type of tropical fruit',
            'A harsh, discordant mixture of sounds',
            'An ancient writing system',
            'A religious ceremony'
        ],
        correctAnswer: 1,
        explanation: 'Cacophony refers to a harsh, jarring mixture of sounds; dissonance. It\'s the opposite of euphony, which is a pleasing sound.'
    },
    
    // Grammar Questions
    {
        category: 'grammar',
        question: 'Which sentence contains a split infinitive?',
        choices: [
            'She quickly ran to the store.',
            'He wanted to quickly finish the assignment.',
            'They completed the project quickly.',
            'We should finish this quickly.'
        ],
        correctAnswer: 1,
        explanation: 'A split infinitive occurs when a word or phrase comes between "to" and the verb. In "to quickly finish," the adverb "quickly" splits the infinitive "to finish."'
    },
    {
        category: 'grammar',
        question: 'Identify the sentence with correct subject-verb agreement:',
        choices: [
            'The team of researchers have published their findings.',
            'The team of researchers has published their findings.',
            'The team of researchers have published its findings.',
            'The team of researchers has published its findings.'
        ],
        correctAnswer: 1,
        explanation: 'When the subject is a collective noun like "team," it takes a singular verb ("has"). However, the pronoun can be plural ("their") if emphasizing the individuals in the group.'
    },
    {
        category: 'grammar',
        question: 'Which sentence uses the subjunctive mood correctly?',
        choices: [
            'I wish I was taller.',
            'If I was you, I would accept the offer.',
            'I suggest that he takes the medicine immediately.',
            'It is essential that she be present at the meeting.'
        ],
        correctAnswer: 3,
        explanation: 'The subjunctive mood is used for hypothetical or non-factual situations. After expressions like "it is essential that," use the base form of the verb ("be") regardless of the subject.'
    },
    {
        category: 'grammar',
        question: 'Which sentence contains a dangling modifier?',
        choices: [
            'Walking down the street, the birds sang loudly.',
            'She saw a cat while walking down the street.',
            'While walking down the street, she saw a cat.',
            'The birds sang loudly as she walked down the street.'
        ],
        correctAnswer: 0,
        explanation: 'In "Walking down the street, the birds sang loudly," the modifier "walking down the street" has nothing to modify since birds can\'t walk down the street. This is a dangling modifier.'
    },
    {
        category: 'grammar',
        question: 'Which of the following is a complex sentence?',
        choices: [
            'I went to the store and bought some milk.',
            'I went to the store; I bought some milk.',
            'Although I was tired, I went to the store.',
            'I went to the store but forgot to buy milk.'
        ],
        correctAnswer: 2,
        explanation: 'A complex sentence contains an independent clause and at least one dependent clause. "Although I was tired" is a dependent clause, and "I went to the store" is an independent clause.'
    },
    {
        category: 'grammar',
        question: 'Identify the sentence with correct parallel structure:',
        choices: [
            'She likes swimming, to hike, and riding bicycles.',
            'She likes swimming, hiking, and riding bicycles.',
            'She likes to swim, hiking, and to ride bicycles.',
            'She likes to swim, to hike, and riding bicycles.'
        ],
        correctAnswer: 1,
        explanation: 'Parallel structure means using the same pattern of words for two or more ideas. In the correct answer, all three activities use the "-ing" form (gerunds).'
    },
    {
        category: 'grammar',
        question: 'Which sentence uses the past perfect tense correctly?',
        choices: [
            'By the time he arrived, she left.',
            'By the time he arrived, she has left.',
            'By the time he arrived, she had left.',
            'By the time he arrived, she was leaving.'
        ],
        correctAnswer: 2,
        explanation: 'The past perfect tense (had + past participle) is used to indicate that an action was completed before another action in the past. It shows the sequence of two past events.'
    },
    {
        category: 'grammar',
        question: 'Which sentence contains a misplaced modifier?',
        choices: [
            'She almost failed every exam this semester.',
            'She failed almost every exam this semester.',
            'The professor only gave extensions to students with valid excuses.',
            'The professor gave extensions only to students with valid excuses.'
        ],
        correctAnswer: 0,
        explanation: '"Almost failed every exam" means she passed all exams but came close to failing them. If the intended meaning is that she failed most exams, the correct phrasing is "failed almost every exam."'
    },
    {
        category: 'grammar',
        question: 'Which of these sentences uses the semicolon correctly?',
        choices: [
            'I have three cats; named Whiskers, Mittens, and Fluffy.',
            'Some people enjoy winter sports; such as skiing and snowboarding.',
            'The meeting was postponed; the CEO was ill.',
            'They couldn\'t attend the conference; because their flight was canceled.'
        ],
        correctAnswer: 2,
        explanation: 'A semicolon is used to join two independent clauses (complete sentences) without a conjunction. Both "The meeting was postponed" and "the CEO was ill" are complete sentences.'
    },
    {
        category: 'grammar',
        question: 'Identify the sentence with the correct use of "who" and "whom":',
        choices: [
            'Who did you give the book to?',
            'Whom did you give the book to?',
            'Who should I talk to about this issue?',
            'This is the person who I spoke with yesterday.'
        ],
        correctAnswer: 1,
        explanation: 'Use "whom" when referring to the object of a verb or preposition. In "Whom did you give the book to?", "whom" is the object of the preposition "to" (To whom did you give the book?).'
    }
];

// Export the questions array
const categorizedQuestions = {
    vocabulary: questions.filter(q => q.category === 'vocabulary'),
    grammar: questions.filter(q => q.category === 'grammar')
};

// Make questions available to other scripts
const quizQuestions = {
    allQuestions: questions,
    categorizedQuestions: categorizedQuestions
};