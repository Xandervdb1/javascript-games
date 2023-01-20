const cards = document.querySelectorAll(".card");
const cardscontainer = document.querySelector(".imagecontainer");
const amountcards = cardscontainer.children.length;
let cardsturned = 0;
let turnedcards = [];

for (let i = amountcards; i > 0; i--) {
    cardscontainer.appendChild(cardscontainer.children[Math.random() * i | 0]);
}

const clickHandler = (e) => {
    if (cardsturned == 2) {
        cardsturned = 0;
        for (let card of cards) {
            if (card.classList[1] == "flipcard") {
                card.classList = "card";
            }
        }
    }
    e.currentTarget.classList.toggle("flipcard");
    cardsturned ++;
}

for (let card of cards) {
    card.addEventListener("click", clickHandler)
}