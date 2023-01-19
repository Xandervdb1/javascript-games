let buttons = document.querySelectorAll(".buttoncontainer button");
let computerOptions = ["rock", "paper", "scissors"];
let choices = document.querySelector(".choices"); 

const game = (e) => {
    
    if (e.target.classList[0] === "choice") {
        let playerChoice = e.target.classList[1];
        if (playerChoice === "rock") {
            let rock = document.createElement("p");
            rock.innerText = "🪨";
            while (choices.firstChild) {
                choices.removeChild(choices.firstChild);
            }
            choices.appendChild(rock);
        } else if (playerChoice === "paper") {
            let paper = document.createElement("p");
            paper.innerText = "📃";
            while (choices.firstChild) {
                choices.removeChild(choices.firstChild);
            }
            choices.appendChild(paper);
        } else if (playerChoice === "scissors") {
            let scissors = document.createElement("p");
            scissors.innerText = "✂️";
            while (choices.firstChild) {
                choices.removeChild(choices.firstChild);
            }
            choices.appendChild(scissors);
        }
    } else {
        let randomIndex = Math.floor(Math.random() * (computerOptions.length + 1));
        let computerChoice = computerOptions[randomIndex];
        console.log(computerChoice);
    }

}

for (const button of buttons) {
    button.addEventListener("click", game);
}