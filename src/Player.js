import { drawCard } from './index';

class Player {
  moves = 5;
  cards = [];
  total = 0;

  constructor(playerName) {
    this.playerName = playerName;
  }

  draw = function () {
    if (this.moves > 0) {
      const card = drawCard();
      this.cards.push(card);
      this._addToTotal();
      this.moves = this.moves - 1;
    }
  };

  _addToTotal = function () {
    let counter = 0;
    this.cards.forEach((c) => {
      const number = c.innerHTML.slice(2);
      if (['J', 'K', 'Q'].includes(number)) {
        counter = counter + 10;
      } else {
        counter = counter + parseInt(number);
      }
    });
    this.total = counter;
  };
}

export default Player;
