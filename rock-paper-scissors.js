// JavaScript code goes on this page

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    window.alert("The result is a tie!");
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      window.alert("You Win! Rock beats Scissors.");
    } else {
      window.alert("You Lose! Paper beats Rock.");
    }
  } else if ( userChoice === "scissors" )
    if (computerChoice ==== "paper"){
    window.alert("You Win! Scissors beats paper.")
  }else {
    window.alert("You lose! Rock beats scissor")
  } else if (userChoice === "paper") {
    if (computerChoice === "rock"){
      window.alert("You Win! Paper beats rock.")
    } else (
      window.alert("You lose! Scissors beats paper.")
    }
  }
