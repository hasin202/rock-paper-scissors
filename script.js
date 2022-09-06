// // console.log(getComputerChoice());

// function ready(callback) {
//   // in case the document is already rendered
//   if (document.readyState != "loading") callback();
//   else if (document.addEventListener)
//     document.addEventListener("DOMContentLoaded", callback);
//   else
//     document.attachEvent("onreadystatechange", function () {
//       if (document.readyState == "complete") callback();
//     });
// }

// const choice = document.querySelector(".buttons");
// choice.addEventListener("click", (event) => {
//   const player_rps_option = getPlayerChoice(event);
//   if (player_rps_option === undefined) {
//     return;
//   } else {
//     playRound(getComputerChoice(), getPlayerChoice(event));
//   }
// });

// ready(function () {
//   console.log(getPlayerChoice());
//   //   playRound(getComputerChoice, getPlayerChoice);
// });

//---------------------------------------------------------------------
let playerScore = 0;
let compScore = 0;

const getComputerChoice = () => {
  let optionsArray = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * optionsArray.length);
  return optionsArray[randomNumber];
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
  console.log(`comp choice: ${computerChoice}`);
  console.log(`plyr choice: ${playerChoice.toLowerCase()}`);

  if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
    // console.log("you win");
    playerScore++;
    console.log(`main, plyr score: ${playerScore}`);
  }
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

  let title = document.createElement("div");
  title.className = " font-bold text-white text-5xl";
  title.textContent = "ROCK PAPER SCISSORS";

  document.getElementById("text-output-container").appendChild(title);
  const choice = document.querySelector(".buttons");
  choice.addEventListener("click", (event) => {
    const player_rps_option = getPlayerChoice(event);
    if (player_rps_option === undefined) {
      return;
    } else {
      playRound(getComputerChoice(), getPlayerChoice(event));
    }
  });
});
