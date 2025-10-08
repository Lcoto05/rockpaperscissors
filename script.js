let humanScore = 0;

let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    
    if(num === 0){
        return "rock"
    } else if(num === 1){
        return "paper"
    }else{
        return "scissors"
    }
    
}

const bodyref = document.querySelector("body")

const score_button_container = document.createElement("div")


let scoreDiv = document.createElement("div");
let computerResults = document.createElement("h2");
computerResults.textContent = "Computer: " + computerScore;
let humanResults = document.createElement("h2");
humanResults.textContent = "You: " + humanScore;
let gameDesc = document.createElement("p");

scoreDiv.appendChild(computerResults);
scoreDiv.appendChild(humanResults);
scoreDiv.appendChild(gameDesc);
bodyref.appendChild(scoreDiv);

function isWin(){
    if(computerScore === 5){
    gameDesc.textContent = "You lose! The robots have taken over!"
    setButtonsDisabled(true);
    humanScore = 0;
    computerScore = 0;
    createRestartButton();
} else if(humanScore === 5){
    gameDesc.textContent = "You win! You've saved us from the robot uprising!"
    setButtonsDisabled(true);
    humanScore = 0;
    computerScore = 0;   
    createRestartButton();
}
}

function createRestartButton() {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Play Again";
  bodyref.appendChild(restartBtn);
  score_button_container.appendChild(restartBtn)
  restartBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    computerResults.textContent = "Computer: " + computerScore;
    humanResults.textContent = "You: " + humanScore;
    gameDesc.textContent = "Rematch!";
    restartBtn.remove();
    setButtonsDisabled(false);
  });
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice==='paper'){
        gameDesc.textContent="You lose! Paper beats Rock";
        computerResults.textContent = `Computer:  ${computerScore+=1}`;
    } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        gameDesc.textContent="You win! Rock beats scissors";
        humanResults.textContent = `You: ${humanScore+=1}`;  
    } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        gameDesc.textContent="You lose! Rock beats scissors";
        computerResults.textContent = `Computer:  ${computerScore+=1}`;
    } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        gameDesc.textContent="You win! Scissors beats paper";
         humanResults.textContent = `You: ${humanScore+=1}`;
    } else if(humanChoice === 'paper' && computerChoice === 'rock'){
        gameDesc.textContent="You win! Paper beats rock";
         humanResults.textContent = `You: ${humanScore+=1}`;
    } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        gameDesc.textContent="You lose! Scissors beats paper";
        computerResults.textContent = `Computer:  ${computerScore+=1}`;
    }else{
        gameDesc.textContent="You tie!"
    }
}



const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const container = document.createElement("div")


rockBtn.textContent = "Rock"
paperBtn.textContent = "Paper"
scissorsBtn.textContent = "Scissors"

bodyref.appendChild(rockBtn)
bodyref.appendChild(paperBtn)
bodyref.appendChild(scissorsBtn)

rockBtn.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
    isWin();
});
paperBtn.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
    isWin();
});
scissorsBtn.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
     isWin();
})

function setButtonsDisabled(state) {
  rockBtn.disabled = state;
  paperBtn.disabled = state;
  scissorsBtn.disabled = state;
}

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

score_button_container.appendChild(container)
score_button_container.appendChild(scoreDiv)
score_button_container.id = "score_btns"
bodyref.appendChild(score_button_container)
