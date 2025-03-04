// Array of 20 advanced English vocabulary and grammar questions
const questions = [
    {
        question: "Which of the following sentences contains a gerund phrase used as a subject?",
        answers: [
            { text: "Swimming in the ocean is my favorite activity.", correct: true },
            { text: "I enjoy swimming in the ocean.", correct: false },
            { text: "She swims in the ocean every morning.", correct: false },
            { text: "To swim in the ocean requires courage.", correct: false }
        ],
        explanation: "In 'Swimming in the ocean is my favorite activity,' the gerund phrase 'Swimming in the ocean' functions as the subject of the sentence."
    },
    {
        question: "Which word best describes someone who is 'loquacious'?",
        answers: [
            { text: "Talkative", correct: true },
            { text: "Intelligent", correct: false },
            { text: "Attractive", correct: false },
            { text: "Suspicious", correct: false }
        ],
        explanation: "'Loquacious' means tending to talk a great deal; garrulous or talkative."
    },
    {
        question: "Identify the sentence with the correct use of the subjunctive mood:",
        answers: [
            { text: "I wish I was taller.", correct: false },
            { text: "I wish I were taller.", correct: true },
            { text: "I wish I am taller.", correct: false },
            { text: "I wish I have been taller.", correct: false }
        ],
        explanation: "The subjunctive mood is used to express wishes, hypothetical situations, or conditions contrary to fact. 'I wish I were taller' correctly uses the subjunctive form 'were' instead of 'was'."
    },
    {
        question: "What is the meaning of the word 'ephemeral'?",
        answers: [
            { text: "Lasting for a very short time", correct: true },
            { text: "Extremely powerful", correct: false },
            { text: "Highly intelligent", correct: false },
            { text: "Deeply emotional", correct: false }
        ],
        explanation: "'Ephemeral' means lasting for a very short time or transitory."
    },
    {
        question: "Which sentence contains a split infinitive?",
        answers: [
            { text: "She decided to carefully review the document.", correct: true },
            { text: "She decided to review the document carefully.", correct: false },
            { text: "Carefully, she decided to review the document.", correct: false },
            { text: "She carefully decided to review the document.", correct: false }
        ],
        explanation: "A split infinitive occurs when a word or phrase comes between 'to' and the verb. In 'to carefully review,' the adverb 'carefully' splits the infinitive 'to review'."
    },
    {
        question: "What does the word 'ubiquitous' mean?",
        answers: [
            { text: "Present, appearing, or found everywhere", correct: true },
            { text: "Extremely rare or uncommon", correct: false },
            { text: "Highly controversial", correct: false },
            { text: "Exceptionally large", correct: false }
        ],
        explanation: "'Ubiquitous' means present, appearing, or found everywhere."
    },
    {
        question: "Which of the following is an example of a dangling modifier?",
        answers: [
            { text: "Walking down the street, the birds were singing loudly.", correct: true },
            { text: "Walking down the street, I heard the birds singing loudly.", correct: false },
            { text: "The birds were singing loudly as I walked down the street.", correct: false },
            { text: "I heard the birds singing loudly while walking down the street.", correct: false }
        ],
        explanation: "In 'Walking down the street, the birds were singing loudly,' the modifier 'Walking down the street' is dangling because it doesn't logically modify 'the birds' (birds don't walk down streets)."
    },
    {
        question: "What is the meaning of 'sycophant'?",
        answers: [
            { text: "A person who acts obsequiously toward someone important to gain advantage", correct: true },
            { text: "A person who speaks multiple languages", correct: false },
            { text: "A person who studies ancient civilizations", correct: false },
            { text: "A person who has a fear of enclosed spaces", correct: false }
        ],
        explanation: "A 'sycophant' is a person who acts obsequiously toward someone important in order to gain advantage; a flatterer or yes-man."
    },
    {
        question: "Which sentence uses the past perfect tense correctly?",
        answers: [
            { text: "By the time he arrived, she had already left.", correct: true },
            { text: "By the time he arrived, she already left.", correct: false },
            { text: "By the time he arrived, she has already left.", correct: false },
            { text: "By the time he arrived, she was already leaving.", correct: false }
        ],
        explanation: "The past perfect tense (had + past participle) is used to indicate that an action was completed before another action in the past. 'She had already left' correctly uses this tense."
    },
    {
        question: "What is the meaning of 'perfunctory'?",
        answers: [
            { text: "Carried out with minimal effort or care", correct: true },
            { text: "Done with great attention to detail", correct: false },
            { text: "Performed with exceptional skill", correct: false },
            { text: "Completed with unnecessary complexity", correct: false }
        ],
        explanation: "'Perfunctory' means carried out with minimal effort or care, merely as a routine or duty; hasty and superficial."
    },
    {
        question: "Identify the sentence with correct parallel structure:",
        answers: [
            { text: "She enjoys swimming, hiking, and to ride bicycles.", correct: false },
            { text: "She enjoys swimming, hiking, and riding bicycles.", correct: true },
            { text: "She enjoys swimming, to hike, and riding bicycles.", correct: false },
            { text: "She enjoys to swim, hiking, and to ride bicycles.", correct: false }
        ],
        explanation: "Parallel structure requires using the same pattern of words for two or more ideas in a sentence. 'Swimming, hiking, and riding' all use the -ing form, maintaining parallelism."
    },
    {
        question: "What does 'equivocate' mean?",
        answers: [
            { text: "To use ambiguous language to conceal the truth or avoid commitment", correct: true },
            { text: "To speak with perfect clarity", correct: false },
            { text: "To make equal in value or worth", correct: false },
            { text: "To solve a complex mathematical equation", correct: false }
        ],
        explanation: "To 'equivocate' means to use ambiguous language to conceal the truth or avoid committing oneself clearly."
    },
    {
        question: "Which of the following sentences contains a misplaced modifier?",
        answers: [
            { text: "She almost failed every subject on her report card.", correct: false },
            { text: "She failed almost every subject on her report card.", correct: true },
            { text: "Almost every subject on her report card was failed by her.", correct: false },
            { text: "Every subject on her report card was almost failed by her.", correct: false }
        ],
        explanation: "In 'She almost failed every subject,' the modifier 'almost' is misplaced because it suggests she didn't actually fail any subjects but came close. 'She failed almost every subject' correctly places the modifier to indicate she failed most but not all subjects."
    },
    {
        question: "What is the meaning of 'obfuscate'?",
        answers: [
            { text: "To make obscure, unclear, or unintelligible", correct: true },
            { text: "To simplify or clarify", correct: false },
            { text: "To strengthen or reinforce", correct: false },
            { text: "To celebrate or commemorate", correct: false }
        ],
        explanation: "To 'obfuscate' means to render obscure, unclear, or unintelligible; to deliberately make something difficult to understand."
    },
    {
        question: "Which sentence correctly uses the subjunctive mood after 'if'?",
        answers: [
            { text: "If I was you, I would accept the offer.", correct: false },
            { text: "If I were you, I would accept the offer.", correct: true },
            { text: "If I am you, I would accept the offer.", correct: false },
            { text: "If I be you, I would accept the offer.", correct: false }
        ],
        explanation: "The subjunctive mood is used after 'if' in contrary-to-fact conditions. 'If I were you' is correct because the speaker is not and cannot be the other person."
    },
    {
        question: "What does 'pernicious' mean?",
        answers: [
            { text: "Having a harmful effect, especially in a gradual or subtle way", correct: true },
            { text: "Extremely beneficial or advantageous", correct: false },
            { text: "Relating to the study of birds", correct: false },
            { text: "Occurring periodically or repeatedly", correct: false }
        ],
        explanation: "'Pernicious' means having a harmful effect, especially in a gradual or subtle way; destructive or injurious."
    },
    {
        question: "Which sentence contains a correctly placed participle phrase?",
        answers: [
            { text: "Exhausted from the long journey, the bed looked inviting.", correct: false },
            { text: "Exhausted from the long journey, I found the bed inviting.", correct: true },
            { text: "The bed looked inviting, exhausted from the long journey.", correct: false },
            { text: "I found the bed, exhausted from the long journey, inviting.", correct: false }
        ],
        explanation: "A participle phrase should modify the appropriate noun or pronoun. In 'Exhausted from the long journey, I found the bed inviting,' the phrase correctly modifies 'I' (the person who was exhausted)."
    },
    {
        question: "What is the meaning of 'insidious'?",
        answers: [
            { text: "Proceeding in a gradual, subtle way, but with harmful effects", correct: true },
            { text: "Openly hostile or aggressive", correct: false },
            { text: "Extremely intelligent or clever", correct: false },
            { text: "Lacking any harmful intent", correct: false }
        ],
        explanation: "'Insidious' means proceeding in a gradual, subtle way, but with harmful effects; treacherous or deceptive."
    },
    {
        question: "Which sentence uses the correct form of the comparative adjective?",
        answers: [
            { text: "This book is more better than the last one I read.", correct: false },
            { text: "This book is more good than the last one I read.", correct: false },
            { text: "This book is better than the last one I read.", correct: true },
            { text: "This book is gooder than the last one I read.", correct: false }
        ],
        explanation: "For the adjective 'good,' the correct comparative form is 'better,' not 'more good,' 'more better,' or 'gooder.'"
    },
    {
        question: "What does the word 'esoteric' mean?",
        answers: [
            { text: "Intended for or likely to be understood by only a small number of people with specialized knowledge", correct: true },
            { text: "Easily understood by everyone", correct: false },
            { text: "Related to the external features of something", correct: false },
            { text: "Extremely common or widespread", correct: false }
        ],
        explanation: "'Esoteric' means intended for or likely to be understood by only a small number of people with specialized knowledge or interest."
    }
];
