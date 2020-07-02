import { createDeck } from './deck';
import Player from './Player';
import './main.css';
import { drawCard, getAvailableCards } from './cards';

export const app = document.getElementById('app');
const deck = createDeck();

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

const boton = document.createElement('button');
boton.classList.add('btn-primary');
boton.innerText = 'HIT';
boton.addEventListener('click', () => {
  const cards = document.querySelectorAll('.deck-card');
  const availableCards = getAvailableCards(cards);
  player1.draw(availableCards);
  score.innerText = `Total: ${player1.total}`;
});

player1Board.appendChild(boton);

const score = document.createElement('h3');
score.innerText = player1.total;

const name = document.createElement('h2');
name.innerText = 'Your cards';
player1Board.appendChild(name);

player1Board.appendChild(score);

app.appendChild(deck);
