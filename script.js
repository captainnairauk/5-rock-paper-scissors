function getComputerChoice() {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function capitalize(string) {
  let lowerCase = string.toLowerCase();
  let sanitisedString = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
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
    let correctInput = capitalize(input);

    if ((correctInput.includes("Rock")) || (correctInput.includes("Paper")) || (correctInput.includes("Scissors"))) {
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

console.log(game());