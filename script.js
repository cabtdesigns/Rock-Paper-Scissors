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
let userResponse = null;
//use prompt to get user input
function userInput() {
    let userPick = prompt("Want to play a game? Pick rock, paper or scissor", "");
//make parameter case sensitive so you can use rock,ROCK, RoCk etc
    let userPickToLowercase = userPick.toLowerCase();
//check to see if they put in a correct type of choice
if (userPickToLowercase == "") {
        alert("Please fill in an answer");
        userInput();
        return;
    } else if (userPickToLowercase !== "rock" && userPickToLowercase !== "paper" && userPickToLowercase !== "scissor") {
        alert("You have to choose rock, paper or scissors");
        userInput();
        return;
    } else if (userPickToLowercase == "rock" || userPickToLowercase == "paper" || userPickToLowercase == "scissor"){
        userResponse = userPickToLowercase; 
    }
    
}


//write a function that plays one round of RPS
//should have 2 parameter playerSelection and computerSelection
//then a return string that declares a winner. like you lose, paper beats rock
//create a function called computerPlay that will randomly pick RP or S
let computerResponse = null;

function computerPlay() {
    let computerChocies = ["rock", "paper", "scissor"];
    let randomNumber = Math.floor(Math.random()*computerChocies.length);
    let computersPick = computerChocies[randomNumber];
    computerResponse = computersPick;
    return computersPick;
}

function winnerAlerts() {
  if (userResponse === "rock" && computerResponse === "scissor" || computerResponse === "rock" && userResponse === "scissor") {
     alert("rock wins!")
    } else if (userResponse === "paper" && computerResponse === "rock" || computerResponse === "paper" && userResponse === "rock") {
        alert("paper wins!")
       } else if (userResponse === "scissor" && computerResponse === "paper" || computerResponse === "scissor" && userResponse === "paper") {
        alert("scissor wins!")
       } else if (userResponse === "scissor" && computerResponse === "scissor" || computerResponse === "paper" && userResponse === "paper" || computerResponse === "rock" && userResponse === "rock") {
        alert("TIE! We are all winners!")
       }
}

function testAlerts() {
    let one = "scissor";
    let two = "rock";
    if (one === "rock" && two === "scissor" || two === "rock" && one === "scissor") {
        alert("rock beats scissor");
    }
}

function playRound() {
  // your code here!
  userInput();
  computerPlay();
  console.log(userResponse + "|" + computerResponse)
  winnerAlerts();
}

const playerSelection = "userInput";
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

// rock beats scissor
// paper beats rock
// scissor beats paper