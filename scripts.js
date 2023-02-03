const choices = ['ROCK', 'PAPER', 'SCISSORS']

function computerPlay() {
    var computerChoice = [Math.floor(Math.random() * choices.length)];
    return choices[computerChoice];
}


function singleRound(computerSelection, playerSelection){
    console.log("Your choice: " + playerSelection + "\nComputer's choice: " + computerSelection);
    //In event of a tie
    if(computerSelection == playerSelection){
        console.log("You Tied");
    }
    //Winning selections
    if(computerSelection == "ROCK"){
        if(playerSelection == "PAPER"){
            console.log("Congratulations! you've won");           
        } else if(playerSelection == "SCISSOR"){
            console.log("You lose, Rock beats Scissors!");
        }
    } else if(computerSelection == "PAPER"){
        if(playerSelection == "ROCK"){
            console.log("You lose, Paper beats Rock!");       
        } else if(playerSelection == "SCISSOR"){
            console.log("Congratulations! you've won");
        }
    } else if(computerSelection == "SCISSOR"){
        if(playerSelection == "ROCK"){
            console.log("Congratulations! you've won");           
        } else if(playerSelection == "PAPER"){
            console.log("You lose, Scissor beats Paper!");
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));