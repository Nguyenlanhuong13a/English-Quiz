import * as THREE from 'three';

// Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-canvas').appendChild(renderer.domElement);

// Load background texture
const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load('background.png');
const backgroundGeometry = new THREE.PlaneGeometry(16, 9);
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture });
const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
backgroundMesh.position.z = -5;

// Scale the background to cover the full screen
const scaleY = 2;
const scaleX = scaleY * (window.innerWidth / window.innerHeight);
backgroundMesh.scale.set(scaleX, scaleY, 1);

scene.add(backgroundMesh);

// Create heart particles
const heartShape = new THREE.Shape();
heartShape.moveTo(0, 0);
heartShape.bezierCurveTo(0, 0.5, 0.5, 1, 1, 1);
heartShape.bezierCurveTo(1.5, 1, 2, 0.5, 2, 0);
heartShape.bezierCurveTo(2, -0.5, 1.5, -1.5, 1, -2);
heartShape.bezierCurveTo(0.5, -1.5, 0, -0.5, 0, 0);

const heartGeometry = new THREE.ShapeGeometry(heartShape);
const heartMaterial = new THREE.MeshBasicMaterial({ color: 0xff69b4, side: THREE.DoubleSide });

const hearts = [];
const heartCount = 20;

for (let i = 0; i < heartCount; i++) {
    const heart = new THREE.Mesh(heartGeometry, heartMaterial.clone());
    heart.scale.set(0.1, 0.1, 0.1);
    heart.position.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3,
        Math.random()
    );
    heart.userData = {
        speed: Math.random() * 0.01 + 0.005,
        amplitude: Math.random() * 0.5 + 0.5,
        phase: Math.random() * Math.PI * 2
    };
    hearts.push(heart);
    scene.add(heart);
}

camera.position.z = 5;

// Animation
const animate = () => {
    requestAnimationFrame(animate);
    
    // Animate hearts
    const time = Date.now() * 0.001;
    hearts.forEach(heart => {
        heart.position.y += heart.userData.speed;
        heart.position.x += Math.sin(time + heart.userData.phase) * 0.01 * heart.userData.amplitude;
        heart.rotation.z += 0.02;
        
        // Reset position when heart goes off screen
        if (heart.position.y > 2) {
            heart.position.y = -2;
            heart.position.x = (Math.random() - 0.5) * 5;
        }
    });
    
    renderer.render(scene, camera);
};

animate();

// Quiz questions
const questions = [
    {
        question: "Which word best describes a person who is 'loquacious'?",
        options: ["Talkative", "Quiet", "Thoughtful", "Angry"],
        correct: 0
    },
    {
        question: "What is the meaning of 'ephemeral'?",
        options: ["Lasting forever", "Short-lived", "Beautiful", "Dangerous"],
        correct: 1
    },
    {
        question: "Choose the correct usage of the subjunctive mood:",
        options: [
            "If I was rich, I will buy a mansion",
            "If I were rich, I would buy a mansion",
            "If I am rich, I would buy a mansion",
            "If I were rich, I will buy a mansion"
        ],
        correct: 1
    },
    {
        question: "What does 'surreptitious' mean?",
        options: ["Open", "Secretive", "Loud", "Friendly"],
        correct: 1
    },
    {
        question: "Which sentence demonstrates correct parallel structure?",
        options: [
            "She likes swimming, to dance, and running",
            "She likes swimming, dancing, and running",
            "She likes to swim, dance, and to run",
            "She likes swimming, dance, and to run"
        ],
        correct: 1
    },
    {
        question: "What is the meaning of 'ubiquitous'?",
        options: ["Rare", "Present everywhere", "Unique", "Hidden"],
        correct: 1
    },
    {
        question: "Which word is a synonym for 'perfidious'?",
        options: ["Loyal", "Treacherous", "Perfect", "Careful"],
        correct: 1
    },
    {
        question: "Identify the correct usage of the past perfect tense:",
        options: [
            "I have eaten lunch before he arrived",
            "I had eaten lunch before he arrived",
            "I ate lunch before he arrived",
            "I was eating lunch before he arrived"
        ],
        correct: 1
    },
    {
        question: "What does 'pellucid' mean?",
        options: ["Opaque", "Transparent", "Colorful", "Dark"],
        correct: 1
    },
    {
        question: "Choose the correct form of the verb in this subjunctive sentence: 'It is essential that he ___ on time.'",
        options: ["is", "be", "was", "being"],
        correct: 1
    },
    {
        question: "What is the meaning of 'perspicacious'?",
        options: ["Dull", "Having good judgment", "Confused", "Emotional"],
        correct: 1
    },
    {
        question: "Which sentence contains a split infinitive?",
        options: [
            "To quickly run to the store",
            "To run quickly to the store",
            "Quickly to run to the store",
            "To run to the store quickly"
        ],
        correct: 0
    },
    {
        question: "What does 'ineffable' mean?",
        options: ["Expressible", "Too great to be expressed", "Efficient", "Ineffective"],
        correct: 1
    },
    {
        question: "Which word is an example of an oxymoron?",
        options: ["Bright sun", "Dark night", "Deafening silence", "Heavy rain"],
        correct: 2
    },
    {
        question: "What is the meaning of 'quotidian'?",
        options: ["Rare", "Daily", "Quarterly", "Yearly"],
        correct: 1
    },
    {
        question: "Choose the correct usage of 'whom':",
        options: [
            "Whom is going to the party?",
            "To whom should I address this letter?",
            "Whom went to the store?",
            "I don't know whom is responsible"
        ],
        correct: 1
    },
    {
        question: "What does 'mellifluous' mean?",
        options: ["Harsh-sounding", "Sweet-sounding", "Loud", "Silent"],
        correct: 1
    },
    {
        question: "Which sentence demonstrates correct use of the semicolon?",
        options: [
            "He was tired; and hungry",
            "He was tired; he went to bed early",
            "He was tired; went to bed early",
            "He was tired; because he worked late"
        ],
        correct: 1
    },
    {
        question: "What is the meaning of 'ephemeral'?",
        options: ["Lasting", "Temporary", "Ancient", "Modern"],
        correct: 1
    },
    {
        question: "Identify the correct use of the past perfect continuous tense:",
        options: [
            "I have been working here for five years",
            "I had been working here for five years when she joined",
            "I was working here for five years",
            "I worked here for five years"
        ],
        correct: 1
    }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 600; // 10 minutes in seconds
let wrongAnswers = [];

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const userNameInput = document.getElementById('user-name');
const startQuizBtn = document.getElementById('start-quiz-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('quiz-screen');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');
const timerElement = document.getElementById('time');
const resultName = document.getElementById('result-name');
const strengthsElement = document.getElementById('strengths');
const weaknessesElement = document.getElementById('weaknesses');

// Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1346656795841789962/yx6yXT_C5Wv_uUILkbh18FNf-4yNN7n-lQoW-hSOkBiI0CSOpZW4O0Ie8kdVS4HFGpML';

// Function to check if webhook is valid
const testWebhook = async () => {
    try {
        const response = await fetch(DISCORD_WEBHOOK_URL);
        if (!response.ok) {
            console.error('Discord webhook is not valid:', response.status);
            return false;
        }
        return true;
    } catch (error) {
        console.error('Error testing Discord webhook:', error);
        return false;
    }
};

// Shuffle array function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Start quiz
startQuizBtn.addEventListener('click', () => {
    if (!userNameInput.value.trim()) {
        alert('Please enter your name');
        return;
    }
    // Shuffle questions and their options
    questions.forEach(question => {
        const correctAnswer = question.options[question.correct];
        shuffleArray(question.options);
        question.correct = question.options.indexOf(correctAnswer);
    });
    shuffleArray(questions);
    
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    startTimer();
    preventTabSwitching();
    displayQuestion();
});

// Timer function
const startTimer = () => {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult();
        }
    }, 1000);
};

// Prevent tab switching
const preventTabSwitching = () => {
    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && timeLeft > 0) {
            document.querySelector('.quiz-content').style.opacity = '0.1';
            alert('Warning: Please do not switch tabs during the quiz!');
            document.querySelector('.quiz-content').style.opacity = '1';
        }
    });

    // Prevent Alt+Tab
    document.addEventListener('keydown', (e) => {
        if ((e.key === 'Tab' || e.keyCode === 9) && timeLeft > 0) {
            e.preventDefault();
            return false;
        }
        if ((e.altKey || e.ctrlKey) && timeLeft > 0) {
            e.preventDefault();
            return false;
        }
    });

    // Prevent right-click
    document.addEventListener('contextmenu', (e) => {
        if (timeLeft > 0) {
            e.preventDefault();
            return false;
        }
    });

    // Request fullscreen when starting quiz
    try {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } catch (error) {
        console.error('Error requesting fullscreen:', error);
    }
};

// Send results to Discord
const sendToDiscord = async () => {
    try {
        const isWebhookValid = await testWebhook();
        if (!isWebhookValid) {
            console.error('Discord webhook is not valid');
            return;
        }

        let userIP = 'Unknown';
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            if (response.ok) {
                const data = await response.json();
                userIP = data.ip;
            }
        } catch (error) {
            console.error('Error fetching IP:', error);
        }

        const currentDate = new Date().toLocaleString();
        const timeTaken = 600 - timeLeft;
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;

        const message = {
            embeds: [{
                title: '📝 Advanced English Quiz Results',
                description: `**${userNameInput.value}** has completed the quiz!\nIP Address: ${userIP}`,
                color: score >= 15 ? 0x00ff00 : score >= 10 ? 0xffff00 : 0xff0000,
                thumbnail: {
                    url: 'https://i.imgur.com/4M34hi2.png'
                },
                fields: [
                    {
                        name: '🎯 Score',
                        value: `${score}/20 (${(score/20*100).toFixed(1)}%)`,
                        inline: true
                    },
                    {
                        name: '⏱️ Time Taken',
                        value: `${minutes}m ${seconds}s`,
                        inline: true
                    },
                    {
                        name: '📊 Performance',
                        value: score >= 15 ? 'Excellent! 🌟' : score >= 10 ? 'Good! 👍' : 'Needs Improvement 📚',
                        inline: true
                    }
                ],
                footer: {
                    text: `Submitted on ${currentDate}`
                }
            }]
        };

        // Add wrong answers if any
        if (wrongAnswers.length > 0) {
            message.embeds[0].fields.push({
                name: '❌ Incorrect Answers',
                value: wrongAnswers.map((wa, index) => 
                    `**${index + 1}.** ${wa.question}\n➤ Your answer: ${wa.userAnswer}\n➤ Correct: ${wa.correctAnswer}\n`
                ).join('\n').slice(0, 1024)
            });
        }

        const webhookResponse = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        });

        if (!webhookResponse.ok) {
            throw new Error(`HTTP error! status: ${webhookResponse.status}`);
        }

        console.log('Results sent to Discord successfully');

    } catch (error) {
        console.error('Error sending results to Discord:', error);
    }
};

// Display question
const displayQuestion = () => {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    // Update progress bar
    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
};

// Check answer
const checkAnswer = (selectedIndex) => {
    const question = questions[currentQuestion];
    const buttons = optionsContainer.getElementsByClassName('option-btn');

    // Disable all buttons
    Array.from(buttons).forEach(button => button.style.pointerEvents = 'none');

    // Show correct/wrong answers
    buttons[selectedIndex].classList.add(selectedIndex === question.correct ? 'correct' : 'wrong');
    buttons[question.correct].classList.add('correct');

    if (selectedIndex === question.correct) {
        score++;
    } else {
        wrongAnswers.push({
            question: question.question,
            userAnswer: question.options[selectedIndex],
            correctAnswer: question.options[question.correct]
        });
    }

    // Move to next question after delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }, 1500);
};

// Show final result
const showResult = () => {
    clearInterval(timer);
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultName.textContent = userNameInput.value;
    scoreElement.textContent = score;

    // Analyze performance
    const strengthsList = [];
    const weaknessesList = [];

    if (score >= 15) strengthsList.push('Excellent overall performance!');
    if (score >= 10) strengthsList.push('Good grasp of advanced vocabulary');
    if (timeLeft > 300) strengthsList.push('Efficient time management');
    if (wrongAnswers.length === 0) strengthsList.push('Perfect accuracy!');

    if (score < 10) weaknessesList.push('Need to improve vocabulary knowledge');
    if (timeLeft < 300) weaknessesList.push('Could work on time management');
    if (wrongAnswers.length > 10) weaknessesList.push('Review grammar rules');

    strengthsElement.innerHTML = strengthsList.map(s => `<p>${s}</p>`).join('');
    weaknessesElement.innerHTML = weaknessesList.map(w => `<p>${w}</p>`).join('');

    // Send results to Discord
    sendToDiscord();
}

// Restart quiz
restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    timeLeft = 600; // Reset timer to 10 minutes
    wrongAnswers = [];
    startTimer(); // Start the timer again
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    displayQuestion();
});

// Start quiz
displayQuestion();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});