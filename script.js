// Pick a random word
let words = ["dynamic", "futile", "variety", "float", "mentor", "blunt"]
let word = words[Math.floor(Math.random() * words.length)]

// Create the initial state of our secret word
let answerArray = []
for(let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Keep track of player progress
let remainingLetters = word.length;

let remainingAttempts = 10;


// Main game loop
while (remainingLetters > 0 && remainingAttempts > 0) {
    // Show the players progress
    alert(answerArray.join(" "));
    // Get a guess from player and make string lower case
    let guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
    
    // Quit the game if the player no longer wants to play
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        // If the guess is not one letter
        alert("Please enter a single letter:");
    } else {
        // If the guess is in the word
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess
                remainingLetters--;
            }
        }
    }
    remainingAttempts--;
    alert("You have " + remainingAttempts + " tries left")
}


// Congratulate the player on guessing the word
alert(answerArray.join(" "))
alert("Good job! The answer was " + word)
    
