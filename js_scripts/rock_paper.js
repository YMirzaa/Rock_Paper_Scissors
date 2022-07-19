function playRound(playerSelection, computerSelection, player_score, computer_score) {

    const PLAYER_WINS = "Player Wins";
    const COMPUTER_WINS = "Computer Wins";
    
    if(playerSelection=== "rock" && computerSelection === "scissors"){
        player_score+=1;
        return PLAYER_WINS;

    }else if(playerSelection=== "rock" && computerSelection === "rock"){
        return "Draw";
    }else if(playerSelection=== "rock" && computerSelection === "paper"){
        computer_score+=1;
        return COMPUTER_WINS;
    }
    else if(playerSelection=== "paper" && computerSelection === "scissors"){
        computer_score+=1;
        return COMPUTER_WINS;
    }else if(playerSelection=== "paper" && computerSelection === "rock"){
        player_score+=1;
        return PLAYER_WINS;
    }else if(playerSelection=== "paper" && computerSelection === "paper"){
        return "Draw";
    }
    else if(playerSelection=== "scissors" && computerSelection === "scissors"){
        return "Draw";
    }else if(playerSelection=== "scissors" && computerSelection === "rock"){
        computer_score+=1;
        return COMPUTER_WINS;
    }else if(playerSelection=== "scissors" && computerSelection === "paper"){
        player_score+=1;
        return PLAYER_WINS;
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


const result = document.querySelector("#result");
const computerScoreNumber = document.querySelector("#Computer_Score");
const playerScoreNumber = document.querySelector("#Player_Score");
let  computer_score = 0, player_score =0;

const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
    button.addEventListener('click', ()=>{
        let playerSelection;
        let computerSelection = getComputerChoice();
        if(button.id === "rock"){
            playerSelection = "rock";
        }else if(button.id ==="paper"){
            playerSelection = "paper";
        }else if(button.id ==="scissors"){
            playerSelection = "scissors";
        }

        let resultString = playRound(playerSelection, computerSelection,computer_score, player_score);
        
        if (resultString ==="Player Wins"){
            player_score+=1;
        }else if(resultString ==="Computer Wins"){
            computer_score+=1;
        }

        if(player_score ===5){
            resultString ="Player Wins The Game";
        }else if(computer_score ===5){
            resultString ="Computer Wins The Game";
        }

        result.textContent = resultString;
        computerScoreNumber.textContent = `Computer Score = ${computer_score}`;
        playerScoreNumber.textContent = `Player Score = ${player_score}`;
    });
});




// const playerSelection = getUserInput();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

