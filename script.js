// console.log("Hello World");

//Create variable for array of answers
const possibleAnswers = ["ROCK", "PAPER", "SCISSORS"]


//Create function to generate random answer
function getComputerChoice() {

//Create variable for random selection of answer
const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

return randomAnswer;

}

//Create function to play one round of game
function playRound(playerSelection, computerSelection) {

  playerSelection = prompt("Rock, Paper, or Scissors").toUpperCase();
  computerSelection = getComputerChoice();

  console.log("You Chose: " + playerSelection);
  console.log("Computer Chose: " + computerSelection);
  console.log("Score:")
  console.log("You --> 1")
  console.log("Computer --> 1")
  console.log()

//If else statements to cover each selection option
  if (
    playerSelection === "ROCK" && computerSelection === "SCISSORS"
  ) {
    return "You Win! Rock beats Scissors"
    // console.log("You Win! Rock beats Scissors")
  } else if (
    playerSelection === "ROCK" && computerSelection === "PAPER"
  ) {
    return "You Lose! Paper beats Rock"
    // console.log("You Lose! Paper beats Rock")
  } else if (
    playerSelection === "SCISSORS" && computerSelection === "ROCK"
  ) {
    return "You Lose! Rock beats Scissors"
    // console.log("You Lose! Rock beats Scissors")
  } else if (
    playerSelection === "SCISSORS" && computerSelection === "PAPER"
  ) {
    return "You Win! Scissors beats Paper"
    // console.log("You Win! Scissors beats Paper")
  }  else if (
    playerSelection === "PAPER" && computerSelection === "ROCK"
  ) {
    return "You Win! Paper beats Rock"
    // console.log("You Win! Paper beats Rock")
  } else if (
    playerSelection === "PAPER" && computerSelection === "SCISSORS"
  ) {
    return "You Lose! Scissors beats Paper"
    // console.log("You Lose! Scissors beats Paper")
  } else {
    return "It's a draw"
    // console.log("It's a draw")
  }


}
// playRound()

function game() {

  for (let i = 0; i < 1; i++) {
    playRound();
 }
}

game()

// playRound(prompt(), prompt())



// let playerSelection = prompt("Pick Rock, Paper, or Scissors").toUpperCase

//Call play round
// playRound(prompt("Pick Rock, Paper, or Scissors").toUpperCase(), "SCISSORS")

// getComputerChoice();






