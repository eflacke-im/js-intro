// Dette er JavaScript-filen
// Åpne nettleseren og trykk F12 → Console

console.log("Scriptet er lastet");

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
