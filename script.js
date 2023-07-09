"use strict";

const choice = ["rock", "paper", "scissors"];

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
    return "It's a tie."
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `Player wins as paper wins over rock.`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `Computer wins as scissors wins over paper.`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `Player wins as rock wins over scissors.`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `Computer wins as paper wins over rock.`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `Player wins as scissors wins over paper.`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `Computer wins as rock wins over scissors.`;
  }
}

function game() {
  // for (let gameTurn = 1; gameTurn <= 5; gameTurn++) {
    // const playerSelection = prompt("Enter rock, paper, scissors").toLowerCase();
    const playerSelection = getComputerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(
      `Player chose ${playerSelection} and computer chose ${computerSelection}  \n${result}`
    );
  // }
}

game();
