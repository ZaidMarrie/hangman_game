function pickWord() {
    let words = ["futile", "blunt", "float"]
    return words[Math.floor(Math.random() * words.length)]
}

// Answer array setup function
function setupAnswerArray(word) {
    let answer = []
    for (let i = 0; i < word.length; i++) {
        answer[i] = "_"
    }
    return answer
}

// Function shows players progress
function showPlayerProgress(answerArray) {
    alert(answerArray)
}

// Function get the players guess 
function getGuess() {
    return prompt("Please enter a letter, or cancel to quit")
}

// Function updates game state 
var updateGameState = function (guess, word, answerArray) {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
    let count = 0; 
    for (let j = 0; j < word.length; j++) {
        if (answerArray[j] == "_" && guess == word[j]) {
            answerArray[j] = guess
        } if (answerArray[j] == guess) {
            count++;
        }
    }
    return count
};

// Function shows answer and congratulates player
function showAnswerAndCongratulatePlayer(answerArray) {
    answerArray.join("")
    if (answerArray == word) {
        alert(answerArray)
        alert("Great work, the answer is " + word + "!")
    } else {
        alert("Sorry, you ran out of moves. Try Again")
    }
};


var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);