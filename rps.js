function getComputerChoice() {
    ComputerChoice = getRandomInt(0, 3);

    if (ComputerChoice === 0) {
        return "rock";
    }
    else if (ComputerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }


}

function game(playerSelection, computerSelection) {
    pS = playerSelection;
    cS = computerSelection;
    
    if (pS.localeCompare(cS) === 0)
    {
        console.log("Tie!");
    }
    else if (pS.localeCompare("rock") === 0 && cS.localeCompare("scissors") === 0)
    {
        console.log("You win! rock beats scissors.")
    }
    else if (pS.localeCompare("paper") === 0 && cS.localeCompare("rock") === 0)
    {
        console.log("You win! paper beats rock.")
    }
    else if (pS.localeCompare("scissors") === 0 && cS.localeCompare("paper") === 0)
    {
        console.log("You win! scissors beats paper.")
    }
    else
    {
        console.log('You lose! ${cS} beats ${pS}');
    }
    return;
}