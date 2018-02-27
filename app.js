// Game value
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');


// Assign min & max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listner

//click event will reload automaticly 
game.addEventListener('mousedown', function (e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`You win!!! ${winningNum} is correct!`, 'green');

    gameOver(true, `You win!!! ${winningNum} is correct!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game Over, you lost! Number ${winningNum} was the correct answer!`);

    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`Wrong answer you have ${guessesLeft} guesses left. `, 'red')
    }
  }
});

//Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//Get Wining Num
function getRandomNum(min, max) {
  let result = Math.floor(Math.random()*(max-min+1)+min);
  console.log(result);
 return result
}


// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}