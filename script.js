// making a rock paper scissor game(RPS). will be played in the console

// write a new function called game().
//have it play 5 rounds
function game(){
    console.log(computerPlay());
    console.log(computerPlay());
    console.log(computerPlay());
    console.log(computerPlay());
    console.log(computerPlay());
    }

//have it keep score
//have it tell you the winner and loser at the end
//can use a loop or call the playRound() function 5 times

//use prompt to get user input
function userInput() {
    let userPick = prompt("Please pick Rock, paper or scissor", "");
//make parameter case sensitive so you can use rock,ROCK, RoCk etc
    let userPickToLowercase = userPick.toLowerCase();
//check to see if they put in a correct type of choice
//userPickToLowercase !== "rock" || userPickToLowercase !== "paper" || userPickToLowercase !== "scissor"
    if (userPickToLowercase == "") {
        alert("pick the right thing blank");
        userInput();
        return;
    } else if (userPickToLowercase !== "rock") {
        alert("pick the right thing, wrong input");
        userInput();
        return;
    } else if (userPickToLowercase == "rock"){
        console.log(userPickToLowercase);
        return;
    } 
    
}


//write a function that plays one round of RPS
//should have 2 parameter playerSelection and computerSelection
//then a return string that declares a winner. like you lose, paper beats rock
//create a function called computerPlay that will randomly pick RP or S
function computerPlay() {
    let computerChocies = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random()*computerChocies.length);
    let computersPick = computerChocies[randomNumber];
    return computersPick;
}


function playRound(playerSelection, computerSelection) {
    userInput();
    let = ComputerPlay = "paper"
    if (userInput == "rock" && ComputerPlay == "paper")
    alert("computer wins")
  }
  
  let playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));