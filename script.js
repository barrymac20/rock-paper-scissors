// Variables
let playerScore = 0;
let computerScore = 0;
const possibleAnswers = ["ROCK", "PAPER", "SCISSORS"]; 
const playerPick = document.getElementById('player-pick');
const computerPick = document.getElementById('computer-pick');
const roundResult = document.getElementById('round-result');
const resultReason = document.getElementById('result-reason');
const player = document.getElementById('player-score');
const computer = document.getElementById('computer-score');
const matchResult = document.getElementById('match-result');
const buttons = document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', playRound);;
  button.addEventListener('click', buttonPressed)
})

// image changes visually when clicked
function buttonPressed(e) {
  e.target.classList.add('pressed');
  setTimeout(() => {
    e.target.classList.remove('pressed')
  }, 100);
}

// Get random answer for computer choice
function getComputerChoice() {
  const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
  return randomAnswer;
}

// Play Round
function playRound(e, computerSelection) {
  // Set selection variables
  playerSelection = e.target.alt.toUpperCase();
  computerSelection = getComputerChoice().toUpperCase();

  if (playerScore < 5 && computerScore < 5) {
      
    if (playerSelection === computerSelection) {
      roundWinner = "This round is a Tie";
      winnerReason = `${playerSelection} ties with ${computerSelection}`
      }
      else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
        playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "ROCK"
      ) {
        roundWinner = `You Win This Round`;
        winnerReason = `${playerSelection} beats ${computerSelection}`;
        playerScore++;
      } else {
        roundWinner = `Computer Wins This Round`;
        winnerReason = `${computerSelection} beats ${playerSelection}`
        computerScore++;
      }
      roundResult.textContent = `${roundWinner}`;
      resultReason.textContent = `${winnerReason}`;
      
      playerPick.textContent = `${playerSelection}`;
      computerPick.textContent = `${computerSelection}`;
      
      player.textContent = `Player Score: ${playerScore}`;
      computer.textContent = `Computer Score: ${computerScore}`;
  } 
    
  if (playerScore === 5 || computerScore === 5) {
      announceWinner();
  }
}

// Announce winner
function announceWinner() {
  if (playerScore === 5) {
    matchResult.textContent = 'You win the game'
  } else {
    matchResult.textContent = 'Computer Wins the game'
  }
}