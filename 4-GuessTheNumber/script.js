let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // checks validity of your guess number and proceeds
    if (isNaN(guess)) alert('please enter a valid number');
    else if (guess < 1 || guess > 100) alert('please enter a valid number');
    else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMsg(`Game Over! the Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // compares your guess with the random number
    if (guess > randomNumber) displayMsg('the number is too high!');
    else if (guess < randomNumber) displayMsg('the number is too low!');
    else displayMsg('you Win!!');
}

function displayGuess(guess) {
    //it's clean up & display your previous guess
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
    // shows a message either your guess is right or wrong
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    // if numGuess(no f guess you made) is becomes 11 then end the game (game over)
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `<button id='newGame'>start new Game</button>`
    startOver.appendChild(p);
    playGame = false;
    newgame();
}

function newgame() {
    // it starts the new game
    const startGame = document.querySelector('#newGame');
    startGame.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
