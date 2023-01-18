const learners = ['Ada','Basile', 'Beatrice', 'Céline', 'Claire', 'David', 'Freke', 'James', 'Jean', 'Jitske', 'Jordy', 'Juraj', 'Lisa', 'Marieke', 'Nick', 'Niels', 'Pious', 'Rachid', 'Raoul', 'Sander', 'Sarah', 'Seppe', 'Sofie', 'Sven', 'Tesse', 'Thomas', 'Toon', 'Vincent', 'Ward', 'Xander', 'Yousra'];
let maxNumber = learners.length;

function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomInt(maxNumber);
console.log(randomNumber);