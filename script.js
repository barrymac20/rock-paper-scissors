//Variables
const possibleAnswers = ["ROCK", "PAPER", "SCISSORS"]; 
const buttons = document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', playRound)
})
const player = document.getElementById('player-score');
const computer = document.getElementById('computer-score');
const matchResult = document.getElementById('match-result');
let playerScore = 0;
let computerScore = 0;

//Get random answer
function getComputerChoice() {
  const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
  return randomAnswer;
  //console.log(randomAnswer)
}

//Play one round
function playRound(e, computerSelection) {

  playerSelection = e.target.value.toLowerCase();
  // console.log(playerSelection);
  computerSelection = getComputerChoice().toLowerCase();
  // console.log(computerSelection);

  if (playerScore < 5 && computerScore < 5) {

  if (playerSelection === computerSelection) {
    roundResult = "Draw";
  }
  else if (
    playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock"
  ) {
    roundResult = "Player Wins";
    playerScore++;
  } else {
    roundResult = "Computer Wins";
    computerScore++;
  }
  player.textContent = `Player Score: ${playerScore}`
  computer.textContent = `Computer Score: ${computerScore}`;
  // return roundResult;
  // console.log(playerScore)
  // } while (playerScore < 5)
} else {
  if (playerScore === 5) {
  matchResult.textContent = 'You win'
  } else {
    matchResult.textContent = 'Computer Wins'
  }
}
}
  

//Play multiple rounds
// function game() {
//   playerScore=0;
//   computerScore=0

//   for (let i = 0; i < 5; i++) {
//     playRound();
//     console.log(`Round ${i+1} Score:`);
//     console.log(`Player --> ${playerScore} `);
//     console.log(`Computer --> ${computerScore}`);
//   }

//   if (playerScore>computerScore) {
//     matchResult = "Player Wins";
//   } else if (playerScore<computerScore) {
//     matchResult = "Computer Wins";
//   } else {
//     matchResult = "Draw Match";
//   }
//   // return matchResult;
//   console.log(matchResult)
// }