//---------------------------------------------------------------------

let playerScore = 0;
let compScore = 0;
let gameMessage = "";
let compChoiceBox;
let playerChoiceBox;
let displayCompChoiceElement;
let displayPlayerChoiceElement;
let displayPlayerScore;
let displayCompScore;

const displayCompChoice = (compRPSChoice) => {
  if (compChoiceBox === undefined) {
    compChoiceBox = document.createElement("div");
    compChoiceBox.className =
      "flex flex-col justify-center items-center px-4 py-2 font-light text-white text-4xl border border-white rounded gap-y-4";

    const compChoiceTitle = document.createElement("p");
    compChoiceTitle.className = "font-semibold text-2xl";
    compChoiceTitle.innerHTML = "COMP";
    compChoiceBox.append(compChoiceTitle);

    displayCompChoiceElement = document.createElement("p");
    compChoiceBox.appendChild(displayCompChoiceElement);
    document.getElementById("card-container").appendChild(compChoiceBox);
  }

  displayCompChoiceElement.innerHTML = `${compRPSChoice}`;
};

const displayPlayerChoice = (playerChoice) => {
  if (playerChoiceBox === undefined) {
    playerChoiceBox = document.createElement("div");
    playerChoiceBox.className =
      "flex flex-col justify-center items-center px-4 py-2 font-light text-white text-4xl border border-white rounded gap-y-4";

    const playerChoiceTitle = document.createElement("p");
    playerChoiceTitle.className = "font-semibold text-2xl";
    playerChoiceTitle.innerHTML = "YOU";
    playerChoiceBox.append(playerChoiceTitle);

    displayPlayerChoiceElement = document.createElement("p");
    playerChoiceBox.appendChild(displayPlayerChoiceElement);
    document.getElementById("card-container").appendChild(playerChoiceBox);
  }
  displayPlayerChoiceElement.innerHTML = `${playerChoice}`;
};

const getComputerChoice = () => {
  let optionsArray = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * optionsArray.length);

  const compRPSChoice = optionsArray[randomNumber];

  displayCompChoice(compRPSChoice);

  return compRPSChoice;
};

const getPlayerChoice = (event) => {
  const playerChoice = event.target.closest("button");
  if (!playerChoice) {
    return;
  }
  const rps_choice = playerChoice.textContent
    .replace(/[\n\r]+|[\s]{2,}/g, " ")
    .trim()
    .toLowerCase();

  displayPlayerChoice(rps_choice);

  return rps_choice;
};

const displayWinner = (winner) => {
  document.querySelector(".buttons").innerHTML = "";
  document.getElementById("card-container").className = "hidden";
  // console.log(document.querySelector(".buttons"));
};

const playRound = (computerChoice, playerChoice) => {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    compScore++;
  }
  if (!displayPlayerScore) {
    displayPlayerScore = document.createElement("p");
    playerChoiceBox.append(displayPlayerScore);
  }

  if (!displayCompScore) {
    displayCompScore = document.createElement("p");
    compChoiceBox.append(displayCompScore);
  }

  displayPlayerScore.innerHTML = `Score: ${playerScore}`;
  displayCompScore.innerHTML = `Score: ${compScore}`;

  console.log("---------------------");
  console.log(`plyr scr: ${playerScore}`);
  console.log(`comp scr: ${compScore}`);

  if (compScore === 5) {
    displayWinner("The computer won");
  }
  if (playerScore === 5) {
    displayWinner("You won");
  }
};

const displayButtons = (weapon) => {
  const btn = document.createElement("button");
  btn.className =
    "w-80 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white rounded text-6xl hover:bg-blue-500 hover:shadow-blue-500/50";
  btn.innerHTML = `${weapon}`;
  document.querySelector(".buttons").appendChild(btn);
};

function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

ready(function () {
  displayButtons("ROCK");
  displayButtons("PAPER");
  displayButtons("SCISSORS");
  const rps_choice = document.querySelector(".buttons");
  rps_choice.addEventListener("click", (event) => {
    const player_rps_option = getPlayerChoice(event);
    if (player_rps_option === undefined) {
      return;
    } else {
      playRound(getComputerChoice(), getPlayerChoice(event));
    }
  });
});
