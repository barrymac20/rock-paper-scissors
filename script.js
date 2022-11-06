const possibleAnswers = ["ROCK", "PAPER", "SCISSORS"] //Create variable for array of answers
let playerScore = 0
let computerScore =0


//Get random answer
function getComputerChoice() {
  const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
  return randomAnswer;
}

//Play one round
function playRound(playerSelection, computerSelection) {

  playerSelection = prompt("Rock, Paper, or Scissors").toUpperCase();
  computerSelection = getComputerChoice();

  if (
    playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
    playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
    playerSelection === "PAPER" && computerSelection === "ROCK"
  ) {
    roundResult = "Player Wins";
    playerScore++;
  } else if (
    playerSelection === "ROCK" && computerSelection === "PAPER" || 
    playerSelection === "SCISSORS" && computerSelection === "ROCK" ||
    playerSelection === "PAPER" && computerSelection === "SCISSORS"
  ) {
    roundResult = "Computer Wins";
    computerScore++;
  } else {
    roundResult = "Draw";
  }
  return roundResult;
  }

//Play multiple rounds
function game() {
  playerScore=0;
  computerScore=0

  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Round ${i+1} Score:`);
    console.log(`Player --> ${playerScore} `);
    console.log(`Computer --> ${computerScore}`);
  }

  if (playerScore>computerScore) {
    matchResult = "Player Wins";
  } else if (playerScore<computerScore) {
    matchResult = "Computer Wins";
  } else {
    matchResult = "Draw Match";
  }
  return matchResult;
}

game()