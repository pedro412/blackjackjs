import { createDeck } from './deck';
import Player from './Player';
import './main.css';

const app = document.getElementById('app');
const deck = createDeck();

console.log(deck);

app.appendChild(deck);

const cards = document.querySelectorAll('.deck-card');
let avaibleCards = cards;

const totalCardsNode = document.createElement('div');
const totalCardsTitle = document.createElement('h3');

const setReamainingCards = (number) => {
  totalCardsTitle.innerHTML = `Remaining cards: ${number}`;
  totalCardsNode.appendChild(totalCardsTitle);
  app.appendChild(totalCardsNode);
};

const getAvailableCards = () => {
  const avaibleCards = [];
  cards.forEach((c) => {
    if (!c.classList.contains('used')) {
      avaibleCards.push(c);
    }
  });
  setReamainingCards(avaibleCards.length);
  return avaibleCards;
};

export const drawCard = () => {
  const numberOfAvailableCards = avaibleCards.length;
  const randomNumber = Math.floor(Math.random() * numberOfAvailableCards) + 1;
  const card = avaibleCards[randomNumber];
  card.classList.add('used');
  avaibleCards = getAvailableCards();
  return card;
};

setReamainingCards(avaibleCards.length);

const board = document.createElement('div');
board.classList.add('board');

const player1Board = document.createElement('div');
player1Board.classList.add('player-board');

const dealerBoard = document.createElement('div');
dealerBoard.classList.add('player-board');

board.appendChild(dealerBoard);
board.appendChild(player1Board);

app.appendChild(board);

const player1 = new Player('player 1');
const dealer = new Player('dealer');

console.log(player1, dealer);
