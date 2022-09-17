let playerScore = 0;
let computerScore = 0;

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

function playRound() {
    let playersSelect = prompt('Please make your choice: Rock, Paper, or Scissors? ');
    let computerSelection = getComputerChoice();
    if (playersSelect === 'Rock' && computerSelection === 'Scissors') {
        console.log(`Your opponent picked ${computerSelection}. You win! Rock beats Scissors!`);
        alert(`Your opponent picked ${computerSelection}. You win! Rock beats Scissors!`);
        playerScore += 1;
        return playerScore;
    } else if (playersSelect === 'Paper' && computerSelection === 'Rock') {
        console.log(`Your opponent selected ${computerSelection}. You win! Paper beats Rock!`);
        alert(`Your opponent selected ${computerSelection}. You win! Paper beats Rock!`);
        playerScore += 1;
        return playerScore;
    } else if (playersSelect === 'Scissors' && computerSelection === 'Paper') {
        console.log(`Your opponent selected ${computerSelection}. You win! Scissors beats Paper!`);
        alert(`Your opponent selected ${computerSelection}. You win! Scissors beats Paper!`);
        playerScore += 1;
        return playerScore;
    } else if (playersSelect === 'Scissors' && computerSelection === 'Rock') {
        console.log(`Your opponent selected ${computerSelection}. You lose! Rock beats Scissors!`);
        alert(`Your opponent selected ${computerSelection}. You lose! Rock beats Scissors!`);
        computerScore += 1;
        return computerScore;
    } else if (playersSelect === 'Rock' && computerSelection === 'Paper') {
        console.log(`Your opponent selected ${computerSelection}. You lose! Paper beats Rock!`);
        alert(`Your opponent selected ${computerSelection}. You lose! Paper beats Rock!`);
        computerScore += 1;
        return computerScore;
    } else if (playersSelect === 'Paper' && computerSelection === 'Scissors') {
        console.log(`Your opponent selected ${computerSelection}. You lose! Scissors beats Paper!`);
        alert(`Your opponent selected ${computerSelection}. You lose! Scissors beats Paper!`);
        computerScore += 1;
        return computerScore;
    } else if (playersSelect === computerSelection) {
        console.log(`Your opponent selected ${computerSelection} as well. Draw! No point awarded!`);
        alert(`Your opponent selected ${computerSelection} as well. Draw! No point awarded!`);
    }
 }
  
 // playRound();
 
 function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        alert(`Current score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}`);
        console.log(`Current score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}`);
    }
    if (playerScore > computerScore) {
        alert(`Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. You win!`);
        console.log(`Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. You win!`);
    } else if (playerScore < computerScore) {
        alert(`Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. You lose!`);
        console.log(`Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. You lose!`);
    } else {
        alert(`Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. Tie Game!`);
        console.log(`Final Score: Player's Score = ${playerScore}, Opponent's Score = ${computerScore}. Tie Game!`);
    }
    let replayGame = prompt('Would you like to play again? Please enter Yes or No.');
    if (replayGame === 'Yes') {
        game();
    } else if (replayGame === 'No') {
        alert('Thank you for playing!');
        console.log('Thank you for playing!');
    } else {
        alert('Invalid Answer. Please enter Yes or No.');
        console.log('Invalid Answer. Please enter Yes or No.');
        replayGame;
    }
 }
 
 game();