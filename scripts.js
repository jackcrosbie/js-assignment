const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    let player = button.textContent.toUpperCase();
    let computer = computerPlay();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    let result = singleRound(computer, player);
    resultText.textContent = `Result: ${result}`;
    updateScores(result);
}));  
   
function computerPlay() {
    var computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function singleRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let result;
    
    if (computerSelection === playerSelection) {
      result = "It's a draw!";
    } else if (computerSelection === "ROCK") {
      if (playerSelection === "PAPER") {
        result = "You win!";
      } else {
        result = "You lose!";
      }
    } else if (computerSelection === "PAPER") {
      if (playerSelection === "ROCK") {
        result = "You lose!";
      } else {
        result = "You win!";
      }
    } else if (computerSelection === "SCISSORS") {
      if (playerSelection === "ROCK") {
        result = "You win!";
      } else {
        result = "You lose!";
      }
    }
    return result;
}

function updateScores(result) {
    if (result === "You win!") {
      playerScore++;
    } else if (result === "You lose!") {
      computerScore++;
    }
  
    document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    checkWinner();
}

function checkWinner() {
    if (playerScore === 5) {
      resultText.textContent = "Player wins the game!";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      resultText.textContent = "Computer wins the game!";
      playerScore = 0;
      computerScore = 0;
    }
  }
