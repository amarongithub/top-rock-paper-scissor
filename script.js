"use strict";

const choice = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // if (playerSelection === computerSelection) {
  //   return `${
  //     gameTurn === 5 ? "It's a tie. Game Over!" : "It's a tie, try again."
  //   }`;
  if (playerSelection === computerSelection) {
    return "It's a tie.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return `Player wins as paper wins over rock.`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return `Computer wins as scissors wins over paper.`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return `Player wins as rock wins over scissors.`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    return `Computer wins as paper wins over rock.`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return `Player wins as scissors wins over paper.`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return `Computer wins as rock wins over scissors.`;
  }
}

function game(playerChoice) {
  if (playerScore < 5 && computerScore < 5) {
    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    para.textContent = `Player chose ${playerSelection} and computer chose ${computerSelection}`;
    paraResult.textContent = `${result}`;
    paraScore.textContent = `Player Score: ${playerScore} and Compute Score: ${computerScore}`;
  }

  if (playerScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (playerScore === 5) {
      winner.textContent = "Player Wins!";
      gameStatus.textContent = "Game Over!";
    } else {
      winner.textContent = "Computer Wins!";
      gameStatus.textContent = "Game Over!";
    }
  }
}

const container = document.createElement("div");
const buttonContainer = document.createElement("div");
const scoreContainer = document.createElement("div");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const para = document.createElement("p");
const paraResult = document.createElement("p");
const paraScore = document.createElement("p");
const winner = document.createElement("h4");
const gameStatus = document.createElement("h2");

container.classList.add("container");
buttonContainer.classList.add("buttonContainer");
scoreContainer.classList.add("scoreContainer");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
paraScore.textContent = "Player Score: 0 and Computer Score: 0";

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
scoreContainer.appendChild(para);
scoreContainer.appendChild(paraResult);
scoreContainer.appendChild(paraScore);
scoreContainer.appendChild(winner);
scoreContainer.appendChild(gameStatus);

container.appendChild(buttonContainer);
container.appendChild(scoreContainer);
document.body.appendChild(container);

rockButton.addEventListener("click", () => {
  game("rock");
});
paperButton.addEventListener("click", () => {
  game("paper");
});
scissorsButton.addEventListener("click", () => {
  game("scissors");
});
// game();
