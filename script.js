'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 200;

// document.querySelector('.guess').value = 2;
// console.log(document.querySelector('.guess'));

const secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreNumber = 20;

document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if (!guess || guess >= 21 || guess < 0) {
      document.querySelector('.message').textContent =
        '⛔ Please try again checking a number';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      //When secret number is matched
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // When guessed number is higher than secret number
    } else if (guess > secretNumber) {
      if (scoreNumber > 1) {
        document.querySelector('.message').textContent =
          ' 📈 Too high... Try again!';
        scoreNumber--;
        document.querySelector('.score').textContent = scoreNumber;
      } else {
        document.querySelector('.message').textContent =
          '😥 You lost the game! Try again';
        document.querySelector('.score').textContent = 0;
      }
      // When guessed number is smaller than secret number
    } else if (guess < secretNumber) {
      if (scoreNumber > 1) {
        document.querySelector('.message').textContent =
          ' 📉 Too low... Try again!';
        scoreNumber--;
        document.querySelector('.score').textContent = scoreNumber;
      } else {
        document.querySelector('.message').textContent =
          '😥 You lost the game! Try again';
        document.querySelector('.score').textContent = 0;
      }
    }
  },

  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    scoreNumber = 20;
    document.querySelector('.score').textContent = scoreNumber;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
  })
);
