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
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess || guess >= 21 || guess < 0) {
    document.querySelector('.message').textContent =
      '⛔ Please try again checking a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent =
      ' 📈 Too high... Try again!';
    scoreNumber--;
    document.querySelector('.score').textContent = scoreNumber;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent =
      ' 📉 Too low... Try again!';
    scoreNumber--;
    document.querySelector('.score').textContent = scoreNumber;
  }
});
