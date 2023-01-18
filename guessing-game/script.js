//A secret number will be generated. To make things fair, the number should be between 1 and (learners in the class)
const learners = ['Ada','Basile', 'Beatrice', 'Céline', 'Claire', 'David', 'Freke', 'James', 'Jean', 'Jitske', 'Jordy', 'Juraj', 'Lisa', 'Marieke', 'Nick', 'Niels', 'Pious', 'Rachid', 'Raoul', 'Sander', 'Sarah', 'Seppe', 'Sofie', 'Sven', 'Tesse', 'Thomas', 'Toon', 'Vincent', 'Ward', 'Xander', 'Yousra'];
let maxNumber = learners.length;


//A user can enter a guess (what html element can be useful for this?)

//When he or she pushes the "play" button, the number will be compared to the secret number
let playButton = document.querySelector(".play-button");

let buttonEvent = (e) => {
    e.preventDefault();

    //make random number
    function getRandomInt(max) {
        return Math.ceil(Math.random() * max);
    }
    let randomNumber = getRandomInt(maxNumber);

    //grab userinput
    let userInput = document.querySelector(".userInput").value;
    userInput = parseInt(userInput);
    
    if (userInput < 1 || userInput > maxNumber) {
        alert("Pick a number between 1 and 31");
    } else if (randomNumber === userInput) {
        alert("Awesome! You number " + userInput + " was correct. You can be named many things, hungry not being one of them.");
    } else {
        alert("Bummer... You guessed " + userInput + " and the secret number was " + randomNumber + ".");
    }
}

playButton.addEventListener("click", buttonEvent);