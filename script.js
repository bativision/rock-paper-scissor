function computerPlay() {
    let choices = ["rock", "paper", "scissor"];
    let play = choices[Math.floor(Math.random() * choices.length)];
    return play;
}

let playerScore = 0;
let computerScore = 0;

function playRound(e) {
    let playerSelection = e;
    let computerSelection = computerPlay();

    if(playerScore == 5 || computerScore == 5){
        playerScore = 0;
        computerScore = 0;
    }

    if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissor" && computerSelection == "scissor")) {
        result = "It's a draw!"
        updateScoreboard(playerScore, computerScore, result)
    } else if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")) {
        playerScore += 1;
        result = "You won the round!"
        updateScoreboard(playerScore, computerScore, result);
    } else {
        computerScore += 1;
        result = "You lost the round!"
        updateScoreboard(playerScore, computerScore, result);
    }
}

function updateScoreboard(playerScore, computerScore, result){
    const resultText = document.createElement("div");
    resultText.textContent = result;
    const score = document.querySelector("#score");
    score.textContent = playerScore + " : " + computerScore;
    if(playerScore == 5){
        score.appendChild(winnerText);
    } else if(computerScore == 5) {
        score.appendChild(loserText)
    }
    if(playerScore < 5 && computerScore < 5){
        score.appendChild(resultText);
    }
}



/* Here begins the DOM Code */

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", function(){
    playRound("rock");
});

paper.addEventListener("click", function(){
    playRound("paper");
});

scissor.addEventListener("click", function(){
    playRound("scissor");
});


const winnerText = document.createElement("div");
winnerText.textContent = "Congratulations, you have won!"

const loserText = document.createElement("div");
loserText.textContent = "Too bad! You lost! Try again."