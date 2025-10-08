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

function getHumanChoice() {
    choice = prompt('Rock, paper, or scissors?')
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice==='paper'){
        console.log("You lose! Paper beats Rock");
        computerScore+=1;
    } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win! Rock beats scissors");
        humanScore+=1;  
    } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log("You lose! Rock beats scissors");
        computerScore+=1;
    } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You win! Scissors beats paper");
        humanScore+=1;
    } else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win! Paper beats rock");
        humanScore+=1;
    } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lose! Scissors beats paper");
        computerScore+=1;
    }else{
        console.log("You tie!")
    }
}

function playGame(num = 5){
    for(let i = 0; i < 5; i++){
        if (num === 5 || num > 0){
            playRound(getHumanChoice(), getComputerChoice());
            num-=1;
        }
    }
}




playGame()