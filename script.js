let playerScore = 0;
let computerScore = 0;
let playerChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let computerChoices = [...playerChoices];
let playerSelection;
let computerSelection;
let roundsPlayed = 0;
let maxRounds = 5;

function startGame() {
    const username = document.getElementById('username').value;
    document.getElementById('instructions').innerHTML = `<strong>Welcome, ${username}!</strong><br>Please choose your move.`;
    document.getElementById('choices').style.display = 'block';
    document.getElementById('scoreboard').style.display = 'block';
    document.getElementById('playAgainBtn').style.display = 'none';
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        playRound();
    });
});

function playRound() {
    let result = determineWinner(playerSelection, computerSelection);
    updateScores(result);
    checkGameOver();
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if ((player === 'rock' && computer === 'scissors') || 
        (player === 'paper' && computer === 'rock') || 
        (player === 'scissors' && computer === 'paper') || 
        (player === 'lizard' && computer === 'spock') || 
        (player === 'spock' && computer === 'rock')) 
    {
        return 'player';
    }
    return 'computer';
}

function updateScores(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    document.getElementById('player-score').textContent = `Player Score: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
}

function checkGameOver() {
    roundsPlayed++;
    if (roundsPlayed >= maxRounds) {
        document.getElementById('choices').style.display = 'none';
        document.getElementById('result').innerHTML = `<strong>Game Over!</strong><br>Player Score: ${playerScore}<br>Computer Score: ${computerScore}`;
        document.getElementById('playAgainBtn').style.display = 'block';
    }
}

document.getElementById('playAgainBtn').addEventListener('click', () => {
    location.reload();
});