function playRound(playerSelection, computerSelection) {
    if(playerSelection=== "rock" && computerSelection === "scissors"){
        return "Player Wins";
    }else if(playerSelection=== "rock" && computerSelection === "rock"){
        return "Draw";
    }else if(playerSelection=== "rock" && computerSelection === "paper"){
        return "Computer Wins";
    }
    else if(playerSelection=== "paper" && computerSelection === "scissors"){
        return "Computer Wins";
    }else if(playerSelection=== "paper" && computerSelection === "rock"){
        return "Player Wins";
    }else if(playerSelection=== "paper" && computerSelection === "paper"){
        return "Draw";
    }
    else if(playerSelection=== "scissors" && computerSelection === "scissors"){
        return "Draw";
    }else if(playerSelection=== "scissors" && computerSelection === "rock"){
        return "Computer Wins";
    }else if(playerSelection=== "scissors" && computerSelection === "paper"){
        return "Player Wins";
    }
}
 
function getComputerChoice(){
    let computerChoise = Math.floor(Math.random() * 3); 
    switch (computerChoise){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
    
function getUserInput(){
    let userInput = prompt("Choose Rock or Paper or Scissors by typing");
    let lowerUserInput = userInput.toLowerCase();
    switch (lowerUserInput){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "Wrong Input";
    }

}
for (let i = 0; i < 5; i++) {
    const playerSelection = getUserInput();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
 }
