//---------------------------------------------------------------------

let playerScore = 0;
let compScore = 0;
let gameMessage = "";
let compChoiceBox;
let choice;

const displayCompChoice = (compChoice) => {
  if (compChoiceBox === undefined) {
    // compChoiceBox = document.createElement("div");
    // compChoiceBox.id = "compBox";
    // compChoiceBox.className =
    //   "flex justify-center items-center px-4 py-2 font-light text-white text-4xl border border-white rounded";
    // document.getElementById("text-output-container").appendChild(compChoiceBox);

    // compChoiceTitle = document.createElement("p");
    // compChoiceTitle.className = "font-light text-white text-4xl";
    // compChoiceTitle.innerHTML = `<p>COMPUTER</p>`;
    // document.getElementById("compBox").appendChild(compChoiceTitle);

    compChoiceBox = document.createElement("div");
    compChoiceBox.className =
      "flex flex-col justify-center items-center px-4 py-2 font-light text-white text-4xl border border-white rounded";

    const compChoiceTitle = document.createElement("p");
    compChoiceTitle.className = "font-semibold text-2xl";
    compChoiceTitle.innerHTML = "COMPUTER";
    compChoiceTitle.className = "block";
    console.log(compChoiceTitle);
    compChoiceBox.append(compChoiceTitle);

    choice = document.createElement("p");
    choice.className = "block";
    // choice.innerHTML = `${compChoice}`;
    compChoiceBox.appendChild(choice);
    document.getElementById("text-output-container").appendChild(compChoiceBox);
  }

  choice.innerHTML = `${compChoice}`;

  // document.getElementById("text-output-container").appendChild(compChoiceBox);
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
    .trim();

  return rps_choice;
};

const playRound = (computerChoice, playerChoice) => {
  // console.log(`comp choice: ${computerChoice}`);
  // console.log(`plyr choice: ${playerChoice.toLowerCase()}`);

  if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
    playerScore++;
  }
  if (playerChoice.toLowerCase() === "rock" && computerChoice === "paper") {
    compScore++;
  }
  if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
    playerScore++;
  }
  if (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
    compScore++;
  }
  if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
    playerScore++;
  }
  if (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
    compScore++;
  }
  // console.log(`main, plyr score: ${playerScore}`);
  // console.log(`main, comp score: ${compScore}`);
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
  console.log("---------------------");

  // let title = document.createElement("div");
  // title.className = " font-bold text-white text-5xl";

  // title.textContent = "ROCK PAPER SCISSORS";
  // document.getElementById("text-output-container").appendChild(title);

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
