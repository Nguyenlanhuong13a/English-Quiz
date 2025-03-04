// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizBody = document.getElementById('quiz-body');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const totalQuestionsResultElement = document.getElementById('total-questions-result');
const scorePercentageElement = document.getElementById('score-percentage');
const correctAnswersElement = document.getElementById('correct-answers');
const timeLeftElement = document.getElementById('time-left');
const timeTakenElement = document.getElementById('time-taken');

// Quiz Variables
let shuffledQuestions, currentQuestionIndex;
let score = 0;
let timer;
let timeLeft; // Time for each question
let startTime, endTime;
let quizCompleted = false;

// Event Listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', startQuiz);

// Initialize the quiz
function startQuiz() {
    welcomeScreen.style.display = 'none';
    resultsScreen.style.display = 'none';
    quizBody.style.display = 'block';
    quizBody.classList.add('fade-in');
    
    // Reset quiz state
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    quizCompleted = false;
    
    // Update total questions display
    totalQuestionsElement.textContent = questions.length;
    totalQuestionsResultElement.textContent = questions.length;
    
    // Start timer for the first question
    setNextQuestion();
}

// Set up the next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
    // Update current question number
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Reset timer for the new question
    resetTimer();
}

// Display the current question and its answers
function showQuestion(question) {
    questionText.textContent = question.question;
    
    // Create answer buttons
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Reset the question container for the next question
function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    // Process the answer
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        
        // Highlight the correct answer
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct) {
                button.classList.add('correct');
            }
        });
    }
    
    // Disable all answer buttons after selection
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    
    // Show next button or end quiz
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.style.display = 'block';
    } else {
        endQuiz();
    }
}

// Start the timer for each question
function startTimer() {
    timeLeft = 60; // Reset time for each question
    timeLeftElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
        
        if (timeLeft <= 10) {
            timeLeftElement.style.color = '#dc3545';
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!quizCompleted) {
                endQuiz();
            }
        }
    }, 1000);
}

// Reset the timer for the new question
function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// End the quiz and show results
function endQuiz() {
    quizCompleted = true;
    clearInterval(timer);
    endTime = new Date();
    
    // Calculate time taken
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    
    // Calculate score percentage
    const scorePercentage = Math.floor((score / questions.length) * 100);
    
    // Update results screen
    scorePercentageElement.textContent = scorePercentage + '%';
    correctAnswersElement.textContent = score;
    timeTakenElement.textContent = timeTaken;
    
    // Show results screen
    quizBody.style.display = 'none';
    resultsScreen.style.display = 'block';
    resultsScreen.classList.add('fade-in');
}

// Add a progress bar to the quiz
function addProgressBar() {
    const quizInfo = document.querySelector('.quiz-info');
    
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');
    
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    
    progressContainer.appendChild(progressBar);
    quizBody.insertBefore(progressContainer, quizInfo.nextSibling);
}

// Initialize the quiz when the page loads
window.addEventListener('DOMContentLoaded', () => {
    addProgressBar();
});
