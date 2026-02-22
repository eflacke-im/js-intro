# # JavaScript – Introduksjon (VG1 IM / IKM1003)

Dette opplegget er bygget tilsvarende Python-opplegget vi allerede har brukt.
Fokus er på **grunnleggende programmering**, lav terskel og rask mestring.

Vi bruker **kun nettleser + VS Code**.
Økt 1-4 kjøres i console. Fra 5 kjøres i VS Code med Live Server.

---
## ØKT 1 – Variabler, datatyper og if-setninger (felles + oppgaver)

### Felles gjennomgang
```javascript
let navn = "Ola";
let alder = 16;
let elev = true;

console.log(navn);
console.log(alder);

if (alder >= 16) {
    console.log("Du er gammel nok");
} else {
    console.log("Du er for ung");
}
```

Snakk om:
- `let` vs `const` (Variabel: 'let' kan endres, og 'const' er konstant)
- string, number, boolean
- if / else

---

## ØKT 2 – Løkker (loops)

### Felles gjennomgang
```javascript
//Først denne
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Så denne etterpå
let teller = 0;
while (teller < 5) {
    console.log(teller);
    teller++;
}
```

Forklar:
- for-loop
- while-loop
- teller-variabel

---

## ØKT 3 – Funksjoner

### Felles gjennomgang
```javascript
function siHei(navn) {
    console.log("Hei " + navn);
}

function leggSammen(a, b) {
    return a + b;
}

siHei("Ola");
let sum = leggSammen(3, 5);
console.log(sum);
```

Forklar:
- parametere
- returverdi
- gjenbruk av kode

---

## ØKT 4 – Arrays og objects

### Felles gjennomgang
```javascript
//Først denne
let spill = ["TornCity", "Cuberpunk 2077", "Skyrim"];

for (let i = 0; i < spill.length; i++) {
    console.log(spill[i]);
}

//Deretter denne
let elev = {
    navn: "Ola",
    alder: 16,
    klasse: "IM1"
};

console.log(elev.navn);

//Legg så til flere "log" for alle parametere
```

Forklar:
- array = liste
- object = samling av egenskaper
- dot-notation (eks. 'elev.navn')

---

## ØKT 5 – JavaScript og HTML

### Felles gjennomgang
Lag en: _'index.html'_ med følgende innhold
```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>JavaScript intro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>JavaScript – intro</h1>
    <p id="output">Trykk på knappen</p>
    <button id="myButton">Klikk meg</button>
    <script> console.log("Script i koden fungerer"); </script>
    <script src="script.js"></script>
</body>
</html>
```
Og en _'style.css'_ med følgende innhold
```css
body {
	  background-color: #e6c890;
	  color: black;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
}
```
Før vi legger inn JS-fila kan vi bevise at det fungerer å ha script i HTML-fila.
Og så en _'script.js'_ med følgende innhold
```javascript
console.log("Script i egen fil fungerer også");

// Finner elementer på siden
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
```

Åpne nettleseren og trykk F12 → Console og se hva som skjer der

Forklar:
- `querySelector`
- events
- click

---
## Utvidelse 1: Endre farge på siden

### Legg til i HTML
```html
    <br><br>
    <h2>Fargegenerator</h2>
    <button id="colorButton">Endre bakgrunnsfarge</button>
```
### Legg til i script.js
```javascript
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
```

---
## Utvidelse 2: Input + dynamisk tekst

### Legg til i HTML
```html
    <br><br>
    <h2>Navneknapp</h2>
    <input type="text" id="nameInput" placeholder="Skriv navnet ditt">  
    <button id="greetButton">Si hei</button>
    <p id="outputName">Du må skrive inn et navn.</p>
```
### Legg til i script.js
```javascript
// Navneknapp
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
```

---

## Utvidelse 3: En enkel poengteller (mini-scoreboard)

### Legg til i HTML
```html
    <br><br>
    <h2>Poengteller</h2>  
    <p id="scoreDisplay">Poeng: 0</p>  
    <button id="addPoint">+1 poeng</button>  
    <button id="resetScore">Nullstill</button>
```
### Legg til i script.js
```javascript
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
```

---
## Utvidelse 4: Array + dynamisk liste (mer “ekte” web)
### Legg til i HTML
```html
    <br><br>
    <h2>Spilliste</h2>  
    <ul id="gameList"></ul>  
    <button id="showGames">Vis spill</button>
```
### Legg til i script.js
```javascript
// Spilliste
let games = ["CS2", "Valorant", "Rocket League", "Minecraft"];

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
```

---
## Utvidelse 5: Enkel “mørk modus”
### Legg til i CSS
```css
.dark-mode {  
    background-color: #222;  
    color: white;  
}
```
### Legg til i HTML
```html
    <br><br>
    <h2>Modusbytte</h2>  
    <button id="darkModeButton">Mørk modus</button>
```
### Legg til i script.js
```javascript
// Modusbytte
let darkModeButton = document.querySelector("#darkModeButton");

darkModeButton.addEventListener("click", function () {
	document.body.style.backgroundColor = ""; // Fjerner tilfeldig bakgrunn - Legg til etterpå
	document.body.classList.toggle("dark-mode"); // Toggle dark mode
});
```
- CSS og JS kan konkurrere. Inline style vinner over class.
---
