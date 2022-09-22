let playerScore = 0;
let computerScore = 0;
let outcome;
let gameResults;
// let rockInputs = ['Rock', 'rock']

function getComputerChoice() {
    randomNumber = Math.floor(Math.random()* 3) + 1
    let computerChoice;
    // console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    } else if (randomNumber === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}
// console.log(getComputerChoice());

function playRound(choice) {
    let playersSelect = choice;
    let computerSelection = getComputerChoice();
    if (playersSelect === 'Rock' && computerSelection === 'Scissors') {
        outcome = `Your opponent picked ${computerSelection}. You win! Rock beats Scissors!`;
        playerScore += 1;
        return outcome && playerScore;
    } else if (playersSelect === 'Paper' && computerSelection === 'Rock') {
        playerScore += 1;
        outcome = `Your opponent selected ${computerSelection}. You win! Paper beats Rock!`
        return outcome && playerScore;
    } else if (playersSelect === 'Scissors' && computerSelection === 'Paper') {
        outcome = `Your opponent selected ${computerSelection}. You win! Scissors beats Paper!`;
        playerScore += 1;
        return outcome && playerScore;
    } else if (playersSelect === 'Scissors' && computerSelection === 'Rock') {
        outcome = `Your opponent selected ${computerSelection}. You lose! Rock beats Scissors!`;
        computerScore += 1;
        return outcome && computerScore;
    } else if (playersSelect === 'Rock' && computerSelection === 'Paper') {
        outcome = `Your opponent selected ${computerSelection}. You lose! Paper beats Rock!`;
        computerScore += 1;
        return outcome && computerScore;
    } else if (playersSelect === 'Paper' && computerSelection === 'Scissors') {
        outcome = `Your opponent selected ${computerSelection}. You lose! Scissors beats Paper!`;
        computerScore += 1;
        return outcome && computerScore;
    } else if (playersSelect === computerSelection) {
        outcome = `Your opponent selected ${computerSelection} as well. Draw! No point awarded!`;
        return outcome;
    } else {
        outcome = `${playersSelect} is not a valid answer. No points awarded.`;
        return outcome;
    }
 };
  


const resultsContainer = document.querySelector('#results-container');

let currentResults = document.createElement('div');
currentResults.setAttribute('id', 'current-results');
resultsContainer.appendChild(currentResults);

const runningScoreContainer = document.querySelector('#running-score-container');

let runningScore = document.createElement('div');
runningScore.setAttribute('id', 'running-score');
runningScoreContainer.appendChild(runningScore);

let endGame = document.createElement('div');
endGame.setAttribute('id', 'game-end');
runningScoreContainer.appendChild(endGame);

function gameEnd() {
    if (playerScore === 5 && computerScore < 5) {
        gameResults = `Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. You win!`;
        return gameResults;
    } else if (playerScore < 5 && computerScore === 5) {
        gameResults = `Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. You lose!`;
        return gameResults;
    } else {
    }
};

function disableBtns() {
    if (playerScore === 5 && computerScore < 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (playerScore < 5 && computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else {
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    }
}



const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function(e) {
    playRound('Rock');
    currentResults.textContent = outcome;
    runningScore.textContent = `Current score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}`;
    gameEnd();
    endGame.textContent = gameResults;
    disableBtns();
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function(e) {
    playRound('Paper');
    currentResults.textContent = outcome;
    runningScore.textContent = `Current score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}`;
    gameEnd();
    endGame.textContent = gameResults;
    disableBtns();
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function(e) {
    playRound('Scissors');
    currentResults.textContent = outcome;
    runningScore.textContent = `Current score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}`;
    gameEnd();
    endGame.textContent = gameResults;
    disableBtns();
});

