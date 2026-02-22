// Dette er JavaScript-filen
// Åpne nettleseren og trykk F12 → Console

console.log("Script i egen fil fungerer også");

// Finne elementer på siden
let button = document.querySelector("#myButton");
let output = document.querySelector("#output");

// Variabel
let clickCount = 0;

// Event listener
button.addEventListener("click", function () {
    clickCount = clickCount + 1;

    console.log("Knappen er trykket", clickCount, "ganger");

    output.textContent = "Antall klikk: " + clickCount;
});

// Fargeknapp
let colorButton = document.querySelector("#colorButton");  
  
function getRandomColor() {  
let red = Math.floor(Math.random() * 256);  
let green = Math.floor(Math.random() * 256);  
let blue = Math.floor(Math.random() * 256);  
  
return "rgb(" + red + "," + green + "," + blue + ")";  
}  
  
colorButton.addEventListener("click", function () {  
document.body.style.backgroundColor = getRandomColor();  
});

// Si hei
let nameInput = document.querySelector("#nameInput");
let greetButton = document.querySelector("#greetButton");

greetButton.addEventListener("click", function () {
    let name = nameInput.value;

    if (name === "") {
        outputName.textContent = "Du har ikke skrevet noe navn";
    } else {
        outputName.textContent = "Hei, " + name + "!";
    }
});

// Poengteller
let score = 0;

let scoreDisplay = document.querySelector("#scoreDisplay");
let addPoint = document.querySelector("#addPoint");
let resetScore = document.querySelector("#resetScore");

function updateScore() {
    scoreDisplay.textContent = "Poeng: " + score;
}

addPoint.addEventListener("click", function () {
    score = score + 1;
    updateScore();
});

resetScore.addEventListener("click", function () {
    score = 0;
    updateScore();
});

// Spilliste
let games = ["TornCity", "Cyberpunk 2077", "Skyrim", "The Witcher 3"];

let gameList = document.querySelector("#gameList");
let showGames = document.querySelector("#showGames");

showGames.addEventListener("click", function () {

    gameList.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        let li = document.createElement("li");
        li.textContent = games[i];
        gameList.appendChild(li);
    }
});

// Modusbytte
let darkModeButton = document.querySelector("#darkModeButton");

darkModeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "";
    document.body.classList.toggle("dark-mode");
});
