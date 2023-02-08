const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerPlay();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = singleRound();
}));

function computerPlay() {
    var computerChoice = [Math.floor(Math.random() * choices.length)];
    return choices[computerChoice];
}

function singleRound(computerSelection, playerSelection){
    console.log("Your choice: " + playerSelection + "\nComputer: " + computerSelection);
    //In event of a tie
    if(computerSelection == playerSelection) {
        console.log("You drew");
    }
    //Winning selections
    if(computerSelection == "ROCK"){
        if(playerSelection.toUpperCase() == "PAPER") {
            userScore++;
            console.log("Congratulations! you've won");           
        } else if(playerSelection.toUpperCase() == "SCISSORS") {
            computerScore++;
            console.log("You lose, Rock beats Scissors!");
        }
    } else if(computerSelection == "PAPER"){
        if(playerSelection.toUpperCase() == "ROCK"){
            computerSelection++;
            console.log("You lose, Paper beats Rock!");       
        } else if(playerSelection.toUpperCase() == "SCISSORS"){
            userScore++;
            console.log("Congratulations! you've won");
        }
    } else if(computerSelection == "SCISSORS"){
        if(playerSelection.toUpperCase() == "ROCK"){
            userScore++;
            console.log("Congratulations! you've won");           
        } else if(playerSelection.toUpperCase() == "PAPER"){
            computerScore++;
            console.log("You lose, Scissors beats Paper!");
        }
    }
}

/* function game() {
    singleRound();
    for(let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        console.log(singleRound(playerSelection, computerSelection))
        console.log("your score = " + userScore);
        console.log("Computer's score = " + computerScore);
       }
}

const computerSelection = computerPlay();
const playerSelection = "ROCK";
let userScore = parseInt(0);
let computerScore = parseInt(0);

game(); */
