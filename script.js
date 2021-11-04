// making a rock paper scissor game(RPS).

//use prompt to get user input
let userResponse = null;
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

//create a function called computerPlay that will randomly pick RP or S
let computerResponse = null;

function computerPlay() {
    let computerChocies = ["rock", "paper", "scissor"];
    let randomNumber = Math.floor(Math.random()*computerChocies.length);
    let computersPick = computerChocies[randomNumber];
    computerResponse = computersPick;
    return computersPick;
}

//then a return string that declares a winner. like you lose, paper beats rock
let userScore = 0;
let computerScore = 0;

function winnerAlerts() {
  if (userResponse === "rock" && computerResponse === "scissor") {
    userScore++;
    alert("You " + userResponse + " | Me " + computerResponse + " - Rock wins! Point to you")
    } else if (computerResponse === "rock" && userResponse === "scissor") {
        alert("Rock wins! Point to me")
        computerScore++;
    } else if (computerResponse === "paper" && userResponse === "rock"){
        alert("You " + userResponse + " | Me " + computerResponse + " - Paper wins! Point to me")
        computerScore++;
    } else if (userResponse === "paper" && computerResponse === "rock") {
        alert("You " + userResponse + " | Me " + computerResponse + " - Paper wins! Point to you")
        userScore++;
       } else if (userResponse === "scissor" && computerResponse === "paper") {
        alert("You " + userResponse + " | Me " + computerResponse + " - Scissor wins! Point to you")
        userScore++;
       } else if (computerResponse === "scissor" && userResponse === "paper"){
        alert("You " + userResponse + " | Me " + computerResponse + " - Scissor wins! Point to me")
        computerScore++;
       } else if (userResponse === "scissor" && computerResponse === "scissor" || computerResponse === "paper" && userResponse === "paper" || computerResponse === "rock" && userResponse === "rock") {
        alert("You " + userResponse + " | Me " + computerResponse + " - TIE! We are all winners! No points given")
       }
}
//can use a loop or call the playRound() function 5 times
function playRound() {
  //have it play 5 rounds
  let counter = 5;
while (counter > 0) {
  userInput();
  computerPlay();
  winnerAlerts();
//have it keep score
//have it tell you the winner and loser at the end
  alert((counter - 1) + " games to go. Score stands at | You " + userScore + " - Me " + computerScore)
  counter--;
  console.log("user:" + userResponse + "| Computer:" + computerResponse)
    }
    if (counter == 0 && userScore > computerScore){
        alert("Game Over. YOU WIN! Final Score | You: " + userScore + " - Me: " + computerScore);
    } else if (counter == 0 && computerScore > userScore) {
        alert("Game Over. I WIN! Final Score | Me: " + computerScore + " - You: " + userScore);
    } else if (counter == 0 && computerScore === userScore) {
        alert("Game Over. WE BOTH WIN! Final Score | You: " + userScore + " - Me: " + computerScore);
    }
}
