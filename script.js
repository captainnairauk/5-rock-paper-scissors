const btn = document.querySelectorAll(".btn");
const resultContainer = document.querySelector(".result-container");
const displayResult = document.createElement("p");
const roundResult = document.querySelector("#round");
const displayRound = document.createElement("span");
const playerResult = document.querySelector("#playerScore");
const displayPlayerScore = document.createElement("span");
const computerResult = document.querySelector("#computerScore");
const displayComputerScore = document.createElement("span");
const resetButton = document.querySelector("#reset-btn");
let counter = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function sanitisedString(string) {
  if (string === null) {
    string = "";
  }
  let lowerCase = string.toLowerCase();
  let trimmedString = lowerCase.trim();
  let sanitisedString =
    trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
  return sanitisedString;
}

function singleRoundOfGame(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return `You Lose! As you've selected : ${playerSelection}, Computer has selected: ${computerSelection}. ${computerSelection} beats ${playerSelection}`;
  }

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You Win! As you've selected : ${playerSelection}, Computer has selected: ${computerSelection}. ${playerSelection} beats ${computerSelection}`;
  }

  if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You Win! As you've selected : ${playerSelection}, Computer has selected: ${computerSelection}. ${playerSelection} beats ${computerSelection}`;
  }

  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You Lose! As you've selected : ${playerSelection}, Computer has selected: ${computerSelection}. ${computerSelection} beats ${playerSelection}`;
  }

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You Lose! As you've selected : ${playerSelection}, Computer has selected: ${computerSelection}. ${computerSelection} beats ${playerSelection}`;
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You Lose! As you've selected : ${playerSelection}, Computer has selected: ${computerSelection}. ${playerSelection} beats ${computerSelection}`;
  }

  return `Draw! As you've selected : ${playerSelection}, Computer has selected: ${computerSelection}. ${playerSelection} cannot beat ${computerSelection}`;
}

function displayRoundResults(event) {
  const playerChoice = event.target.textContent;
  const computerChoice = getComputerChoice();
  const result = singleRoundOfGame(playerChoice, computerChoice);
  displayResult.textContent = result;

  if (displayResult.textContent.includes("You Lose!")) {
    computerScore++;
  } else if (displayResult.textContent.includes("You Win!")) {
    playerScore++;
  } else {
    computerScore++;
    playerScore++;
  }
  return resultContainer.appendChild(displayResult);
}

function updateRound() {
  counter++;
  displayRound.textContent = counter.toString();
  return roundResult.appendChild(displayRound);
}

function displayUserScore() {
  displayPlayerScore.textContent = playerScore.toString();
  return playerResult.appendChild(displayPlayerScore);
}

function displayCompScore() {
  displayComputerScore.textContent = computerScore.toString();
  return computerResult.appendChild(displayComputerScore);
}

function declareWinner(playerScore, computerScore) {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore >= 5) {
      displayResult.textContent = "You Won!";
      btn.forEach(el => el.setAttribute('disabled', true));
      return resultContainer.appendChild(displayResult);
    }
    if (computerScore >= 5) {
      displayResult.textContent = "Computer Won!";
      btn.forEach(el => el.setAttribute('disabled', true));
      return resultContainer.appendChild(displayResult);
    }
  }
}

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    displayRoundResults(e);
    updateRound();
    displayUserScore();
    displayCompScore();
    declareWinner(playerScore, computerScore);
  });
});

resetButton.addEventListener("click", function () {
  window.location.reload();
});
