const QUESTIONS_PER_LEVEL = 5;

const levels = [
    {
    id: 1,
    title: "Number Kingdom",
    icon: "🏰",
    skill: "6-digit numbers and place value",
    points: 3,
    questions: [
        { title: "Place Value", story: "Hollyberry Cookie found 456,782 gems.", question: "What is the value of the digit 5?", answers: ["5", "500", "50,000", "500,000"], correct: 2 },
        { title: "Word Form", story: "GingerBrave wrote the number 203,415 on a map.", question: "Which is the correct word form?", answers: ["Two hundred three thousand, four hundred fifteen", "Twenty-three thousand, four hundred fifteen", "Two thousand, three hundred fifteen", "Two hundred thirty thousand, forty-five"], correct: 0 },
        { title: "Compare Numbers", story: "Two kingdoms counted their coins: 678,901 and 687,091.", question: "Which number is greater?", answers: ["678,901", "687,091", "They are equal", "Cannot be compared"], correct: 1 },
        { title: "Expanded Form", story: "Wizard Cookie sees the number 345,209.", question: "Which is the expanded form?", answers: ["300,000 + 40,000 + 5,000 + 200 + 9", "300,000 + 4,000 + 500 + 20 + 9", "30,000 + 4,000 + 5,000 + 200 + 9", "300,000 + 40,000 + 5,000 + 20 + 9"], correct: 0 },
        { title: "Ordering", story: "Three treasure chests have 120,450, 102,540, and 125,040 coins.", question: "Which order is from least to greatest?", answers: ["102,540; 120,450; 125,040", "125,040; 120,450; 102,540", "120,450; 102,540; 125,040", "102,540; 125,040; 120,450"], correct: 0 },
        { title: "Counting by 10,000", story: "A magic counter starts at 230,000 and jumps by 10,000.", question: "What comes next? 230,000, 240,000, 250,000, ____", answers: ["251,000", "260,000", "350,000", "240,100"], correct: 1 },
        { title: "Digit Value", story: "Strawberry Cookie found the number 782,146.", question: "What is the value of the digit 8?", answers: ["8", "800", "8,000", "80,000"], correct: 3 },
        { title: "Round Number Sense", story: "A sign shows 599,999 visitors.", question: "Which number is 1 more?", answers: ["599,998", "600,000", "699,999", "590,000"], correct: 1 },
        { title: "Decompose", story: "A cookie robot decomposes 640,305.", question: "Which decomposition is correct?", answers: ["600,000 + 40,000 + 300 + 5", "600,000 + 4,000 + 300 + 5", "60,000 + 40,000 + 300 + 5", "600,000 + 40,000 + 3,000 + 5"], correct: 0 },
        { title: "Number Pattern", story: "The kingdom gate code counts by 100,000.", question: "What comes next? 100,000, 200,000, 300,000, ____", answers: ["310,000", "400,000", "301,000", "1,000,000"], correct: 1 },
        { title: "Read Number", story: "A scroll shows 901,070.", question: "How do you read it?", answers: ["Nine hundred one thousand, seventy", "Ninety thousand, one hundred seventy", "Nine hundred ten thousand, seventy", "Nine thousand, one hundred seventy"], correct: 0 },
        { title: "Greatest Number", story: "Pick the greatest number for the treasure vault.", question: "Which is greatest?", answers: ["451,902", "459,120", "450,999", "459,012"], correct: 1 },
        { title: "Smallest Number", story: "Choose the smallest magic crystal number.", question: "Which is smallest?", answers: ["305,018", "350,018", "305,180", "300,518"], correct: 3 },
        { title: "Missing Digit", story: "The code is 56_,210 and must be greater than 568,210.", question: "Which digit makes it true?", answers: ["5", "6", "7", "8"], correct: 2 },
        { title: "Place Value Clue", story: "A number has 4 in the hundred-thousands place.", question: "Which number matches?", answers: ["45,123", "405,123", "54,123", "104,523"], correct: 1 },
        { title: "Count Back", story: "The counter goes down by 1,000.", question: "What comes next? 87,000, 86,000, 85,000, ____", answers: ["84,000", "80,000", "85,100", "75,000"], correct: 0 },
        { title: "Standard Form", story: "The clue says: 700,000 + 60,000 + 2,000 + 90 + 1.", question: "What is the number?", answers: ["762,091", "706,291", "762,901", "760,291"], correct: 0 },
        { title: "Compare Symbols", story: "Use the correct symbol for 345,678 and 354,678.", question: "Which is true?", answers: ["345,678 > 354,678", "345,678 < 354,678", "345,678 = 354,678", "345,678 + 354,678"], correct: 1 },
        { title: "Odd One Out", story: "One number does not belong in ascending order.", question: "Which order is correct?", answers: ["210,000; 201,000; 220,000", "201,000; 210,000; 220,000", "220,000; 210,000; 201,000", "210,000; 220,000; 201,000"], correct: 1 },
        { title: "Digit Challenge", story: "A cookie spy sees 918,634.", question: "Which digit is in the thousands place?", answers: ["9", "1", "8", "6"], correct: 2 }
    ]
    },
    {
    id: 2,
    title: "Frozen Negative Cave",
    icon: "❄️",
    skill: "Negative numbers",
    points: 3,
    questions: [
        { title: "Below Zero", story: "Frost Cookie is on floor 3 and walks down 7 floors.", question: "Which floor does Frost Cookie reach?", answers: ["4", "-4", "10", "-10"], correct: 1 },
        { title: "Count Back", story: "A frozen counter moves backward.", question: "What comes next? 3, 2, 1, 0, ____", answers: ["1", "-1", "2", "-2"], correct: 1 },
        { title: "Temperature Drop", story: "The temperature is 2°C and drops 5 degrees.", question: "What is the new temperature?", answers: ["7°C", "3°C", "-3°C", "-7°C"], correct: 2 },
        { title: "Number Line", story: "A character moves from -2 to the right by 5 spaces.", question: "Where does the character land?", answers: ["-7", "3", "5", "-3"], correct: 1 },
        { title: "Compare Negatives", story: "Two caves have temperatures of -4°C and -9°C.", question: "Which temperature is warmer?", answers: ["-4°C", "-9°C", "They are equal", "0°C"], correct: 0 },
        { title: "Order Numbers", story: "Order the frozen steps from least to greatest.", question: "Which order is correct?", answers: ["-1, -3, 0, 2", "-3, -1, 0, 2", "2, 0, -1, -3", "0, -1, -3, 2"], correct: 1 },
        { title: "Zero Crossing", story: "A cookie starts at 4 and moves left 6 spaces.", question: "Where does it land?", answers: ["2", "-2", "10", "-10"], correct: 1 },
        { title: "Missing Number", story: "Complete the sequence.", question: "2, 1, 0, -1, ____", answers: ["-2", "2", "1", "0"], correct: 0 },
        { title: "Compare", story: "Pick the true statement.", question: "Which is true?", answers: ["-5 > -2", "-2 > -5", "-9 > 0", "0 < -1"], correct: 1 },
        { title: "Elevator", story: "An elevator starts on floor -3 and goes up 4 floors.", question: "What floor is it on?", answers: ["-7", "1", "7", "-1"], correct: 1 },
        { title: "Treasure Depth", story: "A treasure is at -8 meters and another is at -3 meters.", question: "Which treasure is deeper?", answers: ["-8 meters", "-3 meters", "Both", "0 meters"], correct: 0 },
        { title: "Step Pattern", story: "A staircase goes down by 2 each step.", question: "What comes next? 4, 2, 0, -2, ____", answers: ["-4", "4", "-1", "2"], correct: 0 },
        { title: "Number Line Distance", story: "A cookie walks from 0 to -6.", question: "How many steps did it walk?", answers: ["0", "3", "6", "-6"], correct: 2 },
        { title: "Warmest", story: "Choose the warmest temperature.", question: "Which is warmest?", answers: ["-10°C", "-1°C", "-5°C", "-8°C"], correct: 1 },
        { title: "Coldest", story: "Choose the coldest temperature.", question: "Which is coldest?", answers: ["-2°C", "-12°C", "0°C", "-7°C"], correct: 1 },
        { title: "Add Movement", story: "Start at -1 and move right 3 spaces.", question: "Where do you land?", answers: ["-4", "2", "3", "-2"], correct: 1 },
        { title: "Subtract Movement", story: "Start at 1 and move left 4 spaces.", question: "Where do you land?", answers: ["5", "-3", "3", "-5"], correct: 1 },
        { title: "True or False", story: "A cookie compares two numbers.", question: "Is -6 less than -2?", answers: ["Yes", "No", "Only sometimes", "They are equal"], correct: 0 },
        { title: "Complete Sequence", story: "A countdown goes through zero.", question: "1, 0, -1, -2, ____", answers: ["-3", "3", "0", "2"], correct: 0 },
        { title: "Negative Boss Clue", story: "The boss says: I am less than -4 but greater than -7.", question: "Which number could it be?", answers: ["-3", "-5", "-8", "0"], correct: 1 }
    ]
    },
    {
    id: 3,
    title: "Addition Arena",
    icon: "⚔️",
    skill: "Addition and rounding",
    points: 3,
    questions: [
        { title: "Magic Beans", story: "Espresso Cookie collected 45,782 magic beans and 32,419 sugar crystals.", question: "How many items did he collect altogether?", answers: ["78,201", "77,101", "88,201", "13,363"], correct: 0 },
        { title: "Add Coins", story: "Two treasure bags have 23,456 and 12,789 coins.", question: "What is the total?", answers: ["36,245", "35,245", "34,245", "46,245"], correct: 0 },
        { title: "Rounding Check", story: "Estimate 67,891 + 12,204 by rounding to the nearest thousand.", question: "Which estimate is best?", answers: ["80,000", "70,000", "90,000", "60,000"], correct: 0 },
        { title: "Kingdom Supplies", story: "The kingdom has 105,340 berries and receives 24,660 more.", question: "How many berries are there now?", answers: ["130,000", "129,000", "131,000", "120,000"], correct: 0 },
        { title: "Formal Addition", story: "Add the two numbers carefully.", question: "58,907 + 6,438 = ?", answers: ["65,345", "64,345", "66,345", "52,469"], correct: 0 },
        { title: "Mental Estimate", story: "Estimate 49,800 + 20,100.", question: "Which is closest?", answers: ["50,000", "70,000", "90,000", "20,000"], correct: 1 },
        { title: "Carry Challenge", story: "A chest has 76,999 gems and another has 1,002 gems.", question: "What is the total?", answers: ["78,001", "77,001", "76,001", "79,001"], correct: 0 },
        { title: "Add Six Digits", story: "The scoreboard shows 123,456 and then adds 234,567.", question: "What is the total?", answers: ["358,023", "357,023", "368,023", "347,023"], correct: 0 },
        { title: "Check by Rounding", story: "Round 34,562 + 18,777 to the nearest thousand.", question: "Which estimate is best?", answers: ["53,000", "54,000", "52,000", "60,000"], correct: 1 },
        { title: "Three Numbers", story: "Add 12,000 + 8,500 + 300.", question: "What is the sum?", answers: ["20,800", "20,500", "19,800", "21,300"], correct: 0 },
        { title: "Cookie Market", story: "A market sold 45,120 cookies in the morning and 38,450 in the afternoon.", question: "How many cookies were sold?", answers: ["83,570", "82,570", "84,670", "73,570"], correct: 0 },
        { title: "Star Points", story: "A player earns 9,876 points and then 8,765 points.", question: "What is the total?", answers: ["18,641", "17,641", "19,641", "1,111"], correct: 0 },
        { title: "Estimate First", story: "Estimate 81,249 + 19,601.", question: "Which estimate is closest?", answers: ["90,000", "100,000", "110,000", "80,000"], correct: 1 },
        { title: "Add with Zeros", story: "The vault has 200,005 coins and receives 30,095 coins.", question: "What is the total?", answers: ["230,100", "230,000", "233,100", "230,900"], correct: 0 },
        { title: "Big Addition", story: "Add 456,789 and 123,456.", question: "What is the sum?", answers: ["580,245", "579,245", "570,245", "590,245"], correct: 0 },
        { title: "Almost 100,000", story: "A score is 99,999 and increases by 1.", question: "What is the new score?", answers: ["100,000", "99,000", "100,999", "99,998"], correct: 0 },
        { title: "Addition Check", story: "Pick the correct sum.", question: "25,675 + 14,325 = ?", answers: ["40,000", "39,000", "41,000", "30,000"], correct: 0 },
        { title: "Rounding", story: "Round 25,675 to the nearest thousand.", question: "What is it?", answers: ["25,000", "26,000", "20,000", "30,000"], correct: 1 },
        { title: "Add Thousands", story: "A kingdom has 345,000 crystals and gets 22,000 more.", question: "What is the total?", answers: ["367,000", "357,000", "377,000", "323,000"], correct: 0 },
        { title: "Hidden Sum", story: "The missing total is from 61,234 + 28,111.", question: "What is the total?", answers: ["89,345", "88,345", "90,345", "79,345"], correct: 0 }
    ]
    },
    {
    id: 4,
    title: "Subtraction Tower",
    icon: "🛡️",
    skill: "Subtraction",
    points: 3,
    questions: [
        { title: "Kingdom Upgrade", story: "Dark Cacao Cookie had 98,000 coins and spent 47,582 coins.", question: "How many coins remain?", answers: ["50,418", "51,418", "40,418", "145,582"], correct: 0 },
        { title: "Gem Difference", story: "A chest had 75,430 gems. 23,210 were used.", question: "How many gems are left?", answers: ["52,220", "51,220", "53,220", "98,640"], correct: 0 },
        { title: "Borrowing", story: "Solve carefully using the written method.", question: "60,000 - 24,789 = ?", answers: ["35,211", "36,211", "34,211", "84,789"], correct: 0 },
        { title: "Difference", story: "Two scores are 123,456 and 111,111.", question: "What is the difference?", answers: ["12,345", "13,345", "11,345", "234,567"], correct: 0 },
        { title: "Market Loss", story: "A shop had 45,000 candies and sold 18,750.", question: "How many candies remain?", answers: ["26,250", "27,250", "25,250", "63,750"], correct: 0 },
        { title: "Subtraction Check", story: "A player has 87,654 points and loses 7,654.", question: "How many points remain?", answers: ["80,000", "81,000", "79,000", "95,308"], correct: 0 },
        { title: "Big Difference", story: "Subtract 234,567 from 456,789.", question: "What is the difference?", answers: ["222,222", "221,222", "223,222", "691,356"], correct: 0 },
        { title: "Zero Challenge", story: "The vault has 100,000 coins and spends 1 coin.", question: "How many are left?", answers: ["99,999", "100,001", "99,000", "0"], correct: 0 },
        { title: "Estimate Difference", story: "Estimate 78,901 - 29,876 to the nearest thousand.", question: "Which estimate is best?", answers: ["49,000", "50,000", "40,000", "60,000"], correct: 0 },
        { title: "Missing Amount", story: "A cookie needs 50,000 stars but has 32,500.", question: "How many more stars are needed?", answers: ["17,500", "18,500", "82,500", "16,500"], correct: 0 },
        { title: "Subtract Thousands", story: "A kingdom has 345,000 crystals and uses 22,000.", question: "What is left?", answers: ["323,000", "367,000", "333,000", "322,000"], correct: 0 },
        { title: "Distance", story: "Two towns are at markers 85,000 and 47,000.", question: "How far apart are they?", answers: ["38,000", "37,000", "39,000", "132,000"], correct: 0 },
        { title: "Subtraction with Regrouping", story: "Solve the subtraction.", question: "72,304 - 18,926 = ?", answers: ["53,378", "54,378", "52,378", "91,230"], correct: 0 },
        { title: "Coins Spent", story: "A cookie has 25,675 coins and spends 14,325.", question: "How many coins remain?", answers: ["11,350", "10,350", "12,350", "40,000"], correct: 0 },
        { title: "Subtract from Six Digits", story: "A score of 305,018 loses 4,500 points.", question: "What is the new score?", answers: ["300,518", "301,518", "309,518", "304,568"], correct: 0 },
        { title: "Compare Difference", story: "Find the difference between 90,000 and 45,500.", question: "What is it?", answers: ["44,500", "45,500", "46,500", "135,500"], correct: 0 },
        { title: "Leftover Supplies", story: "There are 12,345 supplies. 6,789 are used.", question: "How many remain?", answers: ["5,556", "6,556", "5,666", "19,134"], correct: 0 },
        { title: "Quick Difference", story: "Solve 88,888 - 8,888.", question: "What is the answer?", answers: ["80,000", "81,000", "79,000", "97,776"], correct: 0 },
        { title: "Rounding Check", story: "Round first: 51,200 - 20,900.", question: "Which estimate is best?", answers: ["30,000", "20,000", "40,000", "70,000"], correct: 0 },
        { title: "Boss Difference", story: "A boss had 500,000 health points and lost 125,000.", question: "How many health points remain?", answers: ["375,000", "425,000", "325,000", "625,000"], correct: 0 }
    ]
    }
];

let score = 0;
let completedLevels = [];
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let currentQuizQuestions = [];
let answered = false;
let startTime = null;
let timerInterval = null;
let elapsedSeconds = 0;
let playerName = "Math Hero";

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function startNewQuest() {
    const inputName = document.getElementById("player-name").value.trim();
    playerName = inputName || "Math Hero";
    score = 0;
    completedLevels = [];
    elapsedSeconds = 0;
    startTimer();
    updateScore();
    showLevels();
}

function startTimer() {
    clearInterval(timerInterval);
    startTime = Date.now() - elapsedSeconds * 1000;
    timerInterval = setInterval(() => {
    elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = formatTime(elapsedSeconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}

function showLevels() {
    renderLevels();
    showScreen("levels-screen");
}

function renderLevels() {
    const container = document.getElementById("levels");
    container.innerHTML = "";

    levels.forEach((level, index) => {
    const isUnlocked = index === 0 || completedLevels.includes(levels[index - 1].id);
    const isCompleted = completedLevels.includes(level.id);

    const card = document.createElement("div");
    card.className = "level-card" + (isUnlocked ? "" : " locked");
    card.innerHTML = `
        <div class="level-icon">${isCompleted ? "✅" : level.icon}</div>
        <h3>Level ${level.id}: ${level.title}</h3>
        <p>${level.skill}</p>
        <p><strong>5 random questions</strong></p>
    `;

    if (isUnlocked && !isCompleted) {
        card.onclick = () => startLevel(index);
    }

    container.appendChild(card);
    });

    updateProgress();
}

function startLevel(index) {
    currentLevelIndex = index;
    currentQuestionIndex = 0;
    currentQuizQuestions = getRandomQuestions(levels[index].questions, QUESTIONS_PER_LEVEL);
    loadQuestion();
    showScreen("quiz-screen");
}

function getRandomQuestions(questionBank, amount) {
    return [...questionBank].sort(() => Math.random() - 0.5).slice(0, amount);
}

function loadQuestion() {
    answered = false;
    const level = levels[currentLevelIndex];
    const currentQuestion = currentQuizQuestions[currentQuestionIndex];

    document.getElementById("mission-label").textContent = `Level ${level.id} • Question ${currentQuestionIndex + 1}/${QUESTIONS_PER_LEVEL} • +${level.points} points`;
    document.getElementById("question-title").textContent = currentQuestion.title;
    document.getElementById("story").textContent = currentQuestion.story;
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.onclick = () => checkAnswer(button, index);
    answersContainer.appendChild(button);
    });
}

function checkAnswer(button, selectedIndex) {
    if (answered) return;
    answered = true;

    const level = levels[currentLevelIndex];
    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons[currentQuestion.correct].classList.add("correct");

    if (selectedIndex === currentQuestion.correct) {
    button.classList.add("correct");
    feedback.textContent = `Correct! You earned ${level.points} points! ⭐`;
    score += level.points;
    updateScore();
    } else {
    button.classList.add("wrong");
    feedback.textContent = "Good try! Look at the correct answer and keep going. 💛";
    }

    document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
    const level = levels[currentLevelIndex];

    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    } else {
    if (!completedLevels.includes(level.id)) {
        completedLevels.push(level.id);
    }

    if (completedLevels.length === levels.length) {
        showFinalScreen();
    } else {
        showLevels();
    }
    }
}

function updateScore() {
    document.getElementById("score").textContent = score;
}

function updateProgress() {
    const progress = (completedLevels.length / levels.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;
}

function showFinalScreen() {
    stopTimer();
    document.getElementById("final-score").textContent = score;
    document.getElementById("final-time").textContent = formatTime(elapsedSeconds);

    const maxScore = levels.length * QUESTIONS_PER_LEVEL * 3;
    let rank = "Cookie Apprentice 🍪";
    if (score >= maxScore * 0.6) rank = "Math Knight ⚔️";
    if (score >= maxScore * 0.85) rank = "Master Cookie Mathematician 👑";

    document.getElementById("rank").textContent = rank;
    saveLeaderboardScore(score, elapsedSeconds, rank);
    showScreen("final-screen");
}

function saveLeaderboardScore(finalScore, finalTime, rank) {
    const leaderboard = getLeaderboard();
    const newEntry = {
    name: playerName,
    score: finalScore,
    time: finalTime,
    timeText: formatTime(finalTime),
    rank: rank,
    date: new Date().toLocaleDateString()
    };

    leaderboard.push(newEntry);

    leaderboard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.time - b.time;
    });

    localStorage.setItem("cookieMathLeaderboard", JSON.stringify(leaderboard.slice(0, 10)));
}

function getLeaderboard() {
    return JSON.parse(localStorage.getItem("cookieMathLeaderboard")) || [];
}

function showLeaderboard() {
    const leaderboard = getLeaderboard();
    const container = document.getElementById("leaderboard-table");

    if (leaderboard.length === 0) {
    container.innerHTML = `<p class="empty-message">No scores yet. Start a quest to save your first score!</p>`;
    } else {
    container.innerHTML = `
        <table>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time</th>
            <th>Rank</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            ${leaderboard.map((entry, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
                <td>${entry.timeText}</td>
                <td>${entry.rank}</td>
                <td>${entry.date}</td>
            </tr>
            `).join("")}
        </tbody>
        </table>
    `;
    }

    showScreen("leaderboard-screen");
}

function clearLeaderboard() {
    const confirmClear = confirm("Are you sure you want to clear all saved scores?");
    if (!confirmClear) return;
    localStorage.removeItem("cookieMathLeaderboard");
    showLeaderboard();
}

function restartGame() {
    score = 0;
    completedLevels = [];
    elapsedSeconds = 0;
    document.getElementById("timer").textContent = "00:00";
    updateScore();
    showScreen("home-screen");
}