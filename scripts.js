const choices = ['Rock', 'Paper', 'Scissors']

function computerPlay(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

console.log(computerPlay(choices))

function singleRound(playerSelection, computerSelection) {
    
}