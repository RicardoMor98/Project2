const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let computerScore = 0;

function generateComputerMove() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) return "tie";
    if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper') ||
        (playerMove === 'lizard' && computerMove === 'spock') ||
        (playerMove === 'spock' && computerMove === 'scissors')
    ) return "win";
    if (
        (playerMove === 'rock' && computerMove === 'lizard') ||
        (playerMove === 'paper' && computerMove === 'lizard') ||
        (playerMove === 'scissors' && computerMove === 'spock') ||
        (playerMove === 'lizard' && computerMove === 'paper') ||
        (playerMove === 'spock' && computerMove === 'rock')
    ) return "lose";
    return "invalid";
}

// Implement game rules here

document.addEventListener('DOMContentLoaded', () => {
    const optionsDiv = document.getElementById('options');
    moves.forEach(move => {
        const option = document.createElement('div');
        option.innerHTML = `<input type="radio" id="${move}" name="choice" value="${move}">
                            <label for="${move}">${move}</label>`;
        optionsDiv.appendChild(option);
    });

    document.getElementById('submit').addEventListener('click', () => {
        const playerMove = document.querySelector('input[name="choice"]:checked').value;
        const computerMove = generateComputerMove();
        document.getElementById('computer-move').innerText = computerMove;

        const result = determineWinner(playerMove, computerMove);
        switch (result) {
            case "win":
                playerScore++;
                break;
            case "lose":
                computerScore++;
                break;
            default:
                break;
        }
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('computer-score').innerText = computerScore;
    });
});

// Implement game logic here