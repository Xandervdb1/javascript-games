let buttons = document.querySelectorAll(".buttoncontainer button");
let computerOptions = ["rock", "paper", "scissors"];
let choices = document.querySelector(".choices"); 

let playerChoice;

const game = (e) => {
    if (e.target.classList[0] === "choice") {
        playerChoice = e.target.classList[1];
        if (playerChoice === "rock") {
            let rock = document.createElement("p");
            rock.innerText = "Player's choice: 🪨";
            while (choices.firstChild) {
                choices.removeChild(choices.firstChild);
            }
            choices.appendChild(rock);
        } else if (playerChoice === "paper") {
            let paper = document.createElement("p");
            paper.innerText = "Player's choice: 📃";
            while (choices.firstChild) {
                choices.removeChild(choices.firstChild);
            }
            choices.appendChild(paper);
        } else if (playerChoice === "scissors") {
            let scissors = document.createElement("p");
            scissors.innerText = "Player's choice: ✂️";
            while (choices.firstChild) {
                choices.removeChild(choices.firstChild);
            }
            choices.appendChild(scissors);
        }
    } else {
        let randomIndex = Math.floor(Math.random() * computerOptions.length);
        let computerChoice = computerOptions[randomIndex];
        
        if (computerChoice === "rock") {
            let rock = document.createElement("p");
            rock.innerText = "Computer's choice 🪨"
            choices.appendChild(rock);
        } else if (computerChoice === "paper") {
            let paper = document.createElement("p");
            paper.innerText = "Computer's choice 📃"
            choices.appendChild(paper);
        } else if (computerChoice === "scissors") {
            let scissors = document.createElement("p");
            scissors.innerText = "Computer's choice ✂️"
            choices.appendChild(scissors);
        }

        if (playerChoice == computerChoice) {
            console.log("tie");
        } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
            console.log("win");
        } else {
            console.log("loss");
        }
    }

}

for (const button of buttons) {
    button.addEventListener("click", game);
}