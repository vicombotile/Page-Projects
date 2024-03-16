let min = 0;
let max = 10;
const rndNum = Math.floor(Math.random() * (max - min + 1) + min)

let running = true;
while (running) {
    let attempts = 0;
    let guess = window.prompt("Guess a number between " + min + " and " + max)
    guess = Number(guess)
    if (isNaN(guess)) {
        window.alert("Please enter a valid number")
    }
    if (guess < rndNum || guess > rndNum) {
        window.alert("Wrong Guess")
        attempts += 1
    } else {
        window.alert("Correct Guess")
        attempts = 0
        running = false
    }
}