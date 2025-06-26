'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
// getElementbyID supposed to be faster
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHOld = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  diceEl.classList.add('hidden');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.Generate a random dice roll.
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if rolled 1: if true, switch to next player
    if (dice !== 1) {
      // if not 1 -  add  dice value to the current score
      currentScore += dice;
      //current0El.textContent = currentScore; //CHANGE LATER

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // reset current score to 0 and switch player.

      switchPlayer();
    }
  }
});

btnHOld.addEventListener('click', function () {
  if (playing) {
    // Function to perform when active user clicks on  HOLD button
    // 1. first add currentscore to the score of the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // if score is at least 100  end the game player won..
      playing = false;
      diceEl.classList.add('hidden');
      // console.log( `Winning player: ${activePlayer} and Winning score: ${scores[activePlayer]}`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // else -> switch to another player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
