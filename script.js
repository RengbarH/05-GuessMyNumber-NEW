'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;

const manipulateDom = function (position, message) {
  document.querySelector('.' + position).textContent = message;
};

const missedScore = function (sign, message) {
  if (scoreNumber + '' + sign + '' + 1) {
    document.querySelector('.message').textContent = message;
    scoreNumber--;
    document.querySelector('.score').textContent = scoreNumber;
  } else {
    document.querySelector('.message').textContent =
      '😥 You lost the game! Try again';
    document.querySelector('.score').textContent = 0;
  }
};

document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if (!guess || guess >= 21 || guess < 0) {
      manipulateDom('message', '⛔ Please try again checking a number');
      document.querySelector('body').style.backgroundColor = '#ff0000';
      //When secret number is matched
    } else if (guess === secretNumber) {
      manipulateDom('message', '🎉 Correct number');
      manipulateDom('number', secretNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (scoreNumber > highScore) {
        highScore = scoreNumber;
        manipulateDom('highscore', highScore);
      }

      // When guessed number is higher than secret number
    } else if (guess > secretNumber) {
      missedScore('>', '📈 Too high... Try again!');
      // When guessed number is smaller than secret number
    } else if (guess < secretNumber) {
      missedScore('<', ' 📉 Too low... Try again!');
    }
  },

  document.querySelector('.again').addEventListener('click', function () {
    manipulateDom('message', 'Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    scoreNumber = 20;
    manipulateDom('score', scoreNumber);
    manipulateDom('number', secretNumber);
    manipulateDom('number', '?');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    secretNumber = Math.floor(Math.random() * 20) + 1;
  })
);
