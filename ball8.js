// BALL 8 MAGIC
const ballAnswers = [
    "img/ANSWER10.png",
    "img/ANSWER1.png",
    "img/ANSWER2.png", 
    "img/ANSWER3.png",
    "img/ANSWER4.png",
    "img/ANSWER5.png",
    "img/ANSWER6.png",
    "img/ANSWER8.png",
    "img/ANSWER9.png",
];

const ballButton = document.getElementById("ballButton");
const answerArea = document.getElementById("answerArea");

function randomResponse() {
    
    answerArea.innerHTML = "";

    const randomIndex = Math.floor(Math.random() * ballAnswers.length);
    const answerGiven = ballAnswers[randomIndex];

    const imageElement = document.createElement("img");
    imageElement.src = answerGiven; 
    imageElement.alt = "Ball 8 Magic answer";
    imageElement.classList.add("ball-answer");

    answerArea.appendChild(imageElement);
}


ballButton.addEventListener("click", randomResponse);