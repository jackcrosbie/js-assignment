const choices = ['Rock', 'Paper', 'Scissors']

function computerPlay(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

console.log(computerPlay(choices))


function singleRound(playerSelection, computerSelection) {
    let playerSelection = "";
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));