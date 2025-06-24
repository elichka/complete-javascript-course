'use strict';

//starting condition

let winner = false;
let winningScore = 20;

const newGame = function () {
  let players = document.querySelectorAll('.player');
  players.forEach(player => {
    player.classList.remove('player--active', 'player--winner');
    player.querySelector('.score').textContent = 0;
    player.querySelector('.score').textContent = 0;
    player.querySelector('.current-score').textContent = 0;
  });
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.dice').style.visibility = 'hidden';
  winner = false;
};

const switchPlayers = function () {
  let players = document.querySelectorAll('.player');
  players.forEach(player => {
    //console.log(player);
    player.classList.toggle('player--active');
  });
};

const holdScore = function () {
  if (winner) return;
  let activePlayerSelector = document.querySelector(
    'section.player.player--active'
  );
  let score =
    Number(activePlayerSelector.querySelector('.score').textContent) +
    Number(activePlayerSelector.querySelector('.current-score').textContent);
  activePlayerSelector.querySelector('.score').textContent = score;
  if (score >= winningScore) {
    activePlayerSelector.classList.remove('player--active');
    activePlayerSelector.classList.add('player--winner');
    winner = true;
  } else {
    activePlayerSelector.querySelector('.current-score').textContent = 0;
    switchPlayers();
  }
};

window.onload = function () {
  newGame();
};
//document.querySelector('body').addEventListener('load', newGame);
document.querySelector('.btn--new').addEventListener('click', newGame);

const rollDice = function () {
  //console.log(winner);
  if (winner) return;
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  let diceImage = `dice-${diceRoll}.png`;
  //console.log('diceRoll:', diceRoll, diceImage);
  document.querySelector('.dice').removeAttribute('style');
  document.querySelector('.dice').src = diceImage;
  //console.log(document.querySelector('.dice').style.visiblity);

  //identify active player
  let activePlayerSelector = document.querySelector(
    'section.player.player--active'
  );
  let currentScore = Number(
    activePlayerSelector.querySelector('.current-score').textContent
  );
  //console.log(activePlayerSelector);
  if (diceRoll !== 1) {
    currentScore = currentScore + diceRoll;
    activePlayerSelector.querySelector('.current-score').textContent =
      currentScore;
    //console.log('activePlayerScore: ', currentScore);
  } else {
    activePlayerSelector.querySelector('.current-score').textContent = 0;
    switchPlayers();
  }

  //switchPlayers();
};

document.querySelector('.btn--roll').addEventListener('click', rollDice);

document.querySelector('.btn--hold').addEventListener('click', holdScore);
