//---------------------------------------------------------------------

let playerScore = 0;
let compScore = 0;
let gameMessage = "";
let compChoiceBox;
let playerChoiceBox;
let choice;
let plyrChoice;

const displayCompChoice = (compChoice) => {
  if (compChoiceBox === undefined) {
    compChoiceBox = document.createElement("div");
    compChoiceBox.className =
      "flex flex-col justify-center items-center px-4 py-2 font-light text-white text-4xl border border-white rounded";

    const compChoiceTitle = document.createElement("p");
    compChoiceTitle.className = "font-semibold text-2xl";
    compChoiceTitle.innerHTML = "COMP";
    compChoiceBox.append(compChoiceTitle);

    choice = document.createElement("p");
    choice.className = "block";
    compChoiceBox.appendChild(choice);
    document.getElementById("card-container").appendChild(compChoiceBox);
  }

  choice.innerHTML = `${compChoice}`;
};

const displayPlayerChoice = (playerChoice) => {
  if (playerChoiceBox === undefined) {
    playerChoiceBox = document.createElement("div");
    playerChoiceBox.className =
      "flex flex-col justify-center items-center px-4 py-2 font-light text-white text-4xl border border-white rounded";

    const playerChoiceTitle = document.createElement("p");
    playerChoiceTitle.className = "font-semibold text-2xl";
    playerChoiceTitle.innerHTML = "YOU";
    playerChoiceBox.append(playerChoiceTitle);

    plyrChoice = document.createElement("p");
    playerChoiceBox.appendChild(plyrChoice);
    document.getElementById("card-container").appendChild(playerChoiceBox);
  }
  plyrChoice.innerHTML = `${playerChoice}`;
};

const getComputerChoice = () => {
  let optionsArray = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * optionsArray.length);

  const compChoice = optionsArray[randomNumber];

  displayCompChoice(compChoice);

  return compChoice;
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
  console.log("---------------------");
  console.log(`plyr scr: ${playerScore}`);
  console.log(`comp scr: ${compScore}`);
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
