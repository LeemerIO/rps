function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    // The maximum is exclusive and the minimum is inclusive
  }
  
function getComputerChoice() 
{
    let ComputerChoice = getRandomInt(0, 3);
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

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection;
    let cS = computerSelection;
    
    if (pS.localeCompare(cS) === 0)
    {
        console.log("Tie!");
        return 2;
    }
    else if (pS.localeCompare("rock") === 0 && cS.localeCompare("scissors") === 0)
    {
        console.log("You win! rock beats scissors.");
        return 1;
    }
    else if (pS.localeCompare("paper") === 0 && cS.localeCompare("rock") === 0)
    {
        console.log("You win! paper beats rock.");
        return 1;
    }
    else if (pS.localeCompare("scissors") === 0 && cS.localeCompare("paper") === 0)
    {
        console.log("You win! scissors beats paper.");
        return 1;
    }
    else
    {
        console.log('You lose!', cS, 'beats', pS);
        return 0;
    }
}

function game() 
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let c = getComputerChoice();
        let p = prompt("Rock, Paper, or Scissors?: ");

        let winner = playRound(p, c);

        if (winner === 1)
        {
            playerScore += 1;
        }
        else if (winner === 0)
        {
            computerScore += 1;
        }
        
        console.log('You: ', playerScore,'\nComputer:', computerScore)
    }

    if (playerScore === computerScore)
    {
        console.log("Tie!!!");
    }
    else if (playerScore > computerScore)
    {
        console.log("You win!!!");
    }
    else 
    {
        console.log("You lose!");
    }
}

game();