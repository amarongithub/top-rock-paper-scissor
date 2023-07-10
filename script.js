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
const buttonCardRock = document.createElement("div");
const buttonCardPaper = document.createElement("div");
const buttonCardScissors = document.createElement("div");
const scoreContainer = document.createElement("div");

const paraCardRock = document.createElement("p");
const paraCardPaper = document.createElement("p");
const paraCardScissors = document.createElement("p");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const para = document.createElement("p");
const paraResult = document.createElement("p");
const paraScore = document.createElement("p");
const winner = document.createElement("p");
const gameStatus = document.createElement("p");

rockButton.style.backgroundImage = "url('./images/rock.png')";
paperButton.style.backgroundImage = "url('./images/paper.png')";
scissorsButton.style.backgroundImage = "url('./images/scissors.png')";

container.classList.add("container");
buttonContainer.classList.add("buttonContainer");
buttonCardRock.classList.add("buttonCards");
buttonCardPaper.classList.add("buttonCards");
buttonCardScissors.classList.add("buttonCards");
scoreContainer.classList.add("scoreContainer");

paraCardRock.textContent = "Rock";
paraCardPaper.textContent = "Paper";
paraCardScissors.textContent = "Scissors";
para.style.cssText = "font-weight: 600";
paraScore.style.cssText = "font-weight: 600; font-size: 16px";
winner.style.cssText = "color: #1971c2;font-size: 32px;font-weight: 700";
gameStatus.style.cssText = "font-weight: 700; color: #e8590c";

para.textContent = "Chose Rock, Paper or Scissors";
paraResult.textContent = "May the best player win!";
paraScore.textContent = "Player Score: 0 and Computer Score: 0";

buttonCardRock.appendChild(paraCardRock);
buttonCardRock.appendChild(rockButton);
buttonCardPaper.appendChild(paraCardPaper);
buttonCardPaper.appendChild(paperButton);
buttonCardScissors.appendChild(paraCardScissors);
buttonCardScissors.appendChild(scissorsButton);
buttonContainer.appendChild(buttonCardRock);
buttonContainer.appendChild(buttonCardPaper);
buttonContainer.appendChild(buttonCardScissors);
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
