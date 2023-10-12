function getComputerChoice() {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function sanitisedString(string) {
  // if(string === null){
  //   string = "";
  // }
  let lowerCase = string.toLowerCase();
  let trimmedString = lowerCase.trim();
  let sanitisedString = trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
  return sanitisedString;
}

function singleRoundOfGame(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You Lose! ${playerSelection} beats ${computerSelection}`;
  }

  return `Draw! ${playerSelection} cannot beat ${computerSelection}`;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  function displayUserChoice(playerSelection, computerSelection) {
    console.log(`You have chosen: ${playerSelection}\nComputer has chosen: ${computerSelection}`);
  }

  function displayRoundResults(num, winner) {
    console.log(`Results of round ${num + 1}:\n${winner} Won!\nComputer: ${computerScore}\nPlayer: ${playerScore}`);
  }

  let i = 0;
  while (i < 5) {
    alert(`Round ${i + 1}`);
    let input = prompt("Please enter either Rock/Paper/Scissors");
    let correctInput = sanitisedString(input);

    if ((correctInput === "Rock") || (correctInput === "Paper") || (correctInput === "Scissors")) {
      let playerSelection = correctInput;

      let computerSelection = getComputerChoice();
      console.log(`Round: ${i + 1}`);
      displayUserChoice(playerSelection, computerSelection);

      let result = singleRoundOfGame(playerSelection, computerSelection);
      if (result.includes("You Lose!")) {
        console.log(result);
        computerScore++;
        displayRoundResults(i, "Computer");
        console.log("\n");
      } else if (result.includes("You Win!")) {
        console.log(result);
        playerScore++;
        displayRoundResults(i, "You");
        console.log("\n");
      } else {
        console.log(result);
        computerScore++;
        playerScore++;
        console.log(`Results of round ${i + 1}:\nDraw!\nComputer: ${computerScore}\nPlayer: ${playerScore}`);
        console.log("\n");
      }
      i++;
    } else {
      alert("Incorrect input. Please re-enter");
      continue;
    }
  }

  if (playerScore > computerScore) {
    return "You Won!";
  } else if (computerScore > playerScore) {
    return "Computer Won!";
  } else {
    return "Draw!";
  }
}

const btn = document.querySelectorAll(".btn");
const resultContainer = document.querySelector(".result-container");
const displayResult = document.createElement("p");
const roundResult = document.querySelector("#round");
const displayRound = document.createElement("span");
let counter = 0;

function updateRound(){
  counter++;
  displayRound.textContent = counter.toString();
  return roundResult.appendChild(displayRound);
}


btn.forEach( (button) => {
  button.addEventListener("click", function(e){
    const playerChoice = e.target.textContent
    const computerChoice = getComputerChoice();
    const result = singleRoundOfGame(playerChoice, computerChoice);
    displayResult.textContent = result;
    resultContainer.appendChild(displayResult);
    updateRound();
  });
});



// console.log(game());
