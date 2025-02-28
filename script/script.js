let score = 0;
let timeLeft = 3;
let gameInterval;
let storyModal = document.getElementById('story-modal');
let rulesModal = document.getElementById('rules-modal');
let nextButton = document.getElementById('next-button');
let startButton = document.getElementById('start-button');
let gameOverModal = document.getElementById('game-over-modal');
let tryAgainButton = document.getElementById('try-again-button');
let fish = document.getElementById('fish');
let timerDisplay = document.getElementById('timer');
let scoreDisplay = document.getElementById('score');
let finalScoreMessage = document.getElementById('final-score-message');

// Mostrar el modal de la historia al cargar el juego
window.onload = function() {
    storyModal.style.display = 'block';
};

// Avanzar del modal de historia al de reglas
nextButton.addEventListener('click', function() {
    storyModal.style.display = 'none';
    rulesModal.style.display = 'block';
});

// Iniciar el juego al hacer clic en "Start Game"
startButton.addEventListener('click', function() {
    rulesModal.style.display = 'none'; // Ocultar el modal de reglas
    startGame(); // Iniciar el juego
});

// Función para iniciar el juego
function startGame() {
    score = 0;
    timeLeft = 3;
    scoreDisplay.innerText = 'Score: ' + score;
    timerDisplay.innerText = 'Time: ' + timeLeft;
    fish.style.display = 'block'; // Muestra el pez
    moveFish();
    gameInterval = setInterval(updateTimer, 1000);
}

// Función para mover el pez
function moveFish() {
    let gameArea = document.getElementById('game-area');
    let areaWidth = gameArea.clientWidth - 50; // Ajusta según el tamaño del pez
    let areaHeight = gameArea.clientHeight - 50; // Ajusta según el tamaño del pez

    let newLeft = Math.random() * areaWidth;
    let newTop = Math.random() * areaHeight;

    fish.style.left = newLeft + 'px';
    fish.style.top = newTop + 'px';
}

// Actualizar el cronómetro
function updateTimer() {
    timeLeft--;
    timerDisplay.innerText = 'Time: ' + timeLeft;

    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        showGameOver();
    }

    if (score === 600) {
        clearInterval(gameInterval);
        alert("You win!");
    }
}

// Mostrar el modal de Game Over
function showGameOver() {
    finalScoreMessage.innerText = 'Tu puntuación final es: ' + score;
    gameOverModal.style.display = 'block';
}

// Manejar el clic en el pez
fish.addEventListener('click', function() {
    score += 3; // Incrementar la puntuación
    scoreDisplay.innerText = 'Score: ' + score; // Mostrar nueva puntuación
    timeLeft = 3; // Reiniciar el cronómetro
    moveFish(); // Mover el pez
});
let diver = document.getElementById('diver');
let jailModal = document.getElementById('jail-modal');
let closeJailButton = document.getElementById('close-jail-modal');