import { createDeck } from './deck';
import Player from './Player';
import './main.css';
import { getAvailableCards, resetCards } from './cards';

export const app = document.getElementById('app');
const deck = createDeck();

const player1 = new Player('player1');
const dealer = new Player('dealer');

const hitButton = document.getElementById('hit');
const newGameButton = document.getElementById('newGame');
const standButton = document.getElementById('standButton');

const playerScore = document.getElementById('playerScore');
const dealerScore = document.getElementById('dealerScore');

const drawPlayerCard = (player) => {
  const cards = document.querySelectorAll('.deck-card');
  const availableCards = getAvailableCards(cards);

  if (player === 'player1') {
    player1.draw(availableCards);
    playerScore.innerText = `${player1.total}`;
    const playerCards = document.getElementById('playerCards');
    const lastCard = player1.cards[player1.cards.length - 1];
    const span = document.createElement('span');
    span.innerHTML = lastCard.innerHTML;
    const div = playerCards.children[player1.cards.length - 1];
    div.appendChild(span);
    handleWin();
  } else {
    dealer.draw(availableCards);
    dealerScore.innerText = `${dealer.total}`;

    const dealerCards = document.getElementById('dealerCards');
    const lastCard = dealer.cards[dealer.cards.length - 1];
    const span = document.createElement('span');
    span.innerHTML = lastCard.innerHTML;
    const div = dealerCards.children[dealer.cards.length - 1];
    div.appendChild(span);
    handleWin();
  }
};

hitButton.addEventListener('click', () => drawPlayerCard('player1'));

app.appendChild(deck);

const resetBoard = () => {
  const playerCards = document.getElementById('playerCards');
  Array.from(playerCards.children).forEach((element) => {
    element.innerHTML = '';
  });
  const dealerCards = document.getElementById('dealerCards');
  Array.from(dealerCards.children).forEach((element) => {
    element.innerHTML = '';
  });
};

const newGame = () => {
  let isPlayer = false;
  let counter = 0;
  player1.reset();
  dealer.reset();
  hitButton.removeAttribute('disabled');
  standButton.removeAttribute('disabled');
  document.getElementById('dealerInfo').style.color = '#fff';
  document.getElementById('playerInfo').style.color = '#fff';
  resetCards(document.querySelectorAll('.deck-card'));
  resetBoard();
  dealerScore.innerText = '0';
  playerScore.innerText = '0';
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      if (isPlayer) {
        drawPlayerCard('player1');
        isPlayer = false;
      } else {
        drawPlayerCard('dealer');
        isPlayer = true;
      }
    }, (counter += 500));
  }
  clearTimeout();
};

const playerWin = (player) => {
  disableButtons();
  const span = document.createElement('span');
  span.innerHTML = '🎉';
  if (player === 'player1') {
    document.getElementById('playerInfo').style.color = '#39d039';
  } else {
    document.getElementById('dealerInfo').style.color = '#39d039';
  }
};

const disableButtons = () => {
  hitButton.setAttribute('disabled', true);
  standButton.setAttribute('disabled', true);
};

const stand = () => {
  if (dealer.total > player1.total && dealer.total < 21) {
    playerWin('dealer');
    return;
  }

  if (player1.total > dealer.total) {
    drawPlayerCard('dealer');
    stand();
  }

  handleWin();
};

const handleWin = () => {
  const player1Total = player1.total;
  const dealerTotal = dealer.total;

  if (player1.cards.length === 5) {
    playerWin('player1');
  }

  if (dealerTotal === 21) {
    playerWin('dealer');
  }

  if (player1Total === 21) {
    playerWin('player1');
  }

  if (player1Total > 21) {
    playerWin('dealer');
  }

  if (dealerTotal > 21) {
    playerWin('player1');
  }

  if (dealerTotal === player1Total) {
    disableButtons();
  }
};

standButton.addEventListener('click', stand);
newGameButton.addEventListener('click', newGame);

newGame();
