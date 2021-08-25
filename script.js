// making a rock paper scissor game(RPS). will be played in the console

//create a function called computerPlay that will randomly pick RP or S
function computerPlay() {
    let computerChocies = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random()*computerChocies.length);
    let computersPick = computerChocies[randomNumber];
    return computersPick;
}


// write a new function called game().
function game(){
    
}
//have it play 5 rounds
//have it keep score
//have it tell you the winner and loser at the end
//can use a loop or call the playRound() function 5 times

//use prompt to get user input
function UserInput() {
    let userPick = prompt("Please pick Rock, paper or scissor", "");
    let userPickToLowercase = userPick.toLowerCase();
//check to see if they put in a correct type of choice
    if(userPickToLowercase == "rock" || userPickToLowercase == "paper" || userPickToLowercase == "scissor"){
        console.log(userPickToLowercase);
        return;
    }
    alert("wrong answer");
    UserInput();  
    
}
//make parameter case sensitive so you can use rock,ROCK, RoCk etc

//write a function that plays one round of RPS
//should have 2 parameter playerSelection and computerSelection
//then a return string that declares a winner. like you lose, paper beats rock

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));