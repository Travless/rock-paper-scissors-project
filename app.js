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
    } else {
        console.log(`Your opponent selected ${computerSelection} as well. Draw! No point awarded!`);
        alert(`Your opponent selected ${computerSelection} as well. Draw! No point awarded!`);
    }
 }
  
 // playRound();
 