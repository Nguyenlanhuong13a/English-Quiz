// DOM Elements
const homeElement = document.getElementById('home');
const quizElement = document.getElementById('quiz');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const choiceTexts = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterElement = document.getElementById('question-counter');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const timeTakenElement = document.getElementById('time-taken');
const strengthsList = document.getElementById('strengths-list');
const weaknessesList = document.getElementById('weaknesses-list');
const questionsContainer = document.getElementById('questions-container');

// Quiz variables
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timer;
let timeRemaining = 600; // 10 minutes in seconds
let userAnswers = [];
let quizStartTime;

// Constants
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 20;

// Start quiz
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', () => {
    window.location.reload();
});

function startQuiz() {
    questionCounter = 0;
    score = 0;
    // Use the questions from the quizQuestions object
    availableQuestions = [...quizQuestions.allQuestions];
    userAnswers = [];
    quizStartTime = new Date();
    
    homeElement.classList.add('hide');
    quizElement.classList.remove('hide');
    
    startTimer();
    getNewQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeRemaining <= 0) {
            endQuiz();
        }
    }, 1000);
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        endQuiz();
        return;
    }
    
    questionCounter++;
    questionCounterElement.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    
    choiceTexts.forEach(choice => {
        const number = choice.dataset['number'];
        // Update to use the choices array instead of choice1, choice2, etc.
        choice.innerText = currentQuestion.choices[number - 1];
    });
    
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choiceTexts.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = parseInt(selectedChoice.dataset['number']) - 1;
        
        // Update to use correctAnswer property
        const classToApply = selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect';
        
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        
        // Store user's answer
        userAnswers.push({
            question: currentQuestion.question,
            userAnswer: selectedAnswer,
            correctAnswer: currentQuestion.correctAnswer,
            isCorrect: selectedAnswer === currentQuestion.correctAnswer,
            category: currentQuestion.category,
            explanation: currentQuestion.explanation
        });
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

function incrementScore(num) {
    score += num;
    scoreElement.innerText = score;
}

function endQuiz() {
    clearInterval(timer);
    
    quizElement.classList.add('hide');
    resultElement.classList.remove('hide');
    
    // Calculate time taken
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - quizStartTime) / 1000); // in seconds
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    finalScoreElement.innerText = score;
    timeTakenElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Analyze performance
    analyzePerformance();
    
    // Display question review
    displayQuestionReview();
}

function analyzePerformance() {
    // Clear previous analysis
    strengthsList.innerHTML = '';
    weaknessesList.innerHTML = '';
    
    // Group questions by category
    const categories = {};
    userAnswers.forEach(answer => {
        if (!categories[answer.category]) {
            categories[answer.category] = {
                total: 0,
                correct: 0
            };
        }
        
        categories[answer.category].total++;
        if (answer.isCorrect) {
            categories[answer.category].correct++;
        }
    });
    
    // Determine strengths and weaknesses
    for (const category in categories) {
        const percentage = (categories[category].correct / categories[category].total) * 100;
        
        if (percentage >= 70) {
            const li = document.createElement('li');
            li.innerText = `${category}: ${percentage.toFixed(0)}% correct`;
            strengthsList.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.innerText = `${category}: ${percentage.toFixed(0)}% correct`;
            weaknessesList.appendChild(li);
        }
    }
    
    // If no strengths or weaknesses, display a message
    if (strengthsList.children.length === 0) {
        const li = document.createElement('li');
        li.innerText = 'No particular strengths identified';
        strengthsList.appendChild(li);
    }
    
    if (weaknessesList.children.length === 0) {
        const li = document.createElement('li');
        li.innerText = 'No particular weaknesses identified';
        weaknessesList.appendChild(li);
    }
}

function displayQuestionReview() {
    questionsContainer.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-review-item');
        
        const questionStatus = answer.isCorrect ? 
            '<span class="correct-answer"><i class="fas fa-check"></i> Correct</span>' : 
            '<span class="wrong-answer"><i class="fas fa-times"></i> Incorrect</span>';
        
        questionDiv.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${answer.question} ${questionStatus}</p>
            <p>Your answer: ${answer.userAnswer !== undefined ? currentQuestion.choices[answer.userAnswer] : 'Not answered'}</p>
            ${!answer.isCorrect ? `<p>Correct answer: ${currentQuestion.choices[answer.correctAnswer]}</p>` : ''}
            <p><strong>Explanation:</strong> ${answer.explanation}</p>
        `;
        
        questionsContainer.appendChild(questionDiv);
    });
}