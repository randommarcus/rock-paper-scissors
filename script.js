console.log("Welcome to a game of Rock, Paper, & Scissors!!");

let computerChoice = " ";
let humanChoice = " ";
let computerScore = 0;
let humanScore = 0;

function playGame(){
    for (let i=1; i<=5 ; i++){
        console.log("Round "+i);
        getHumanChoice();
        getComputerChoice();
        playRound(computerChoice, humanChoice);
    }
    if (computerScore > humanScore){
        console.log("You Lost the Game :(");
    }    
    else if (humanScore > computerScore){
        console.log("You Won the Game :)");
    }
    else{
        console.log("The Game is Tied :|");
    } 
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice = 0){
        computerChoice = "rock";
    }
    else if (choice = 1){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("What do you choose? Rock, Paper, or Scissors?");
    humanChoice = choice.toLowerCase();
}


function playRound(computerChoice, humanChoice) {
    if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock")){
        console.log("Computer Won!!");
        computerScore += 1;
    }  
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        console.log("You Won!!");
        humanScore += 1;
    }
    else {
        console.log ("That's a tie!!");
    }
}

playGame();