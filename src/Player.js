import { drawCard } from './cards';

class Player {
  moves = 5;
  cards = [];
  total = 0;

  constructor(playerName) {
    this.playerName = playerName;
  }

  draw = function (availableCards) {
    if (this.moves > 0) {
      const card = drawCard(availableCards);
      this.cards.push(card);
      this._addToTotal();
      this.moves = this.moves - 1;
    }
  };

  _addToTotal = function () {
    let counter = 0;
    this.cards.forEach((c) => {
      const number = c.innerHTML.slice(2).trim();

      if (['J', 'K', 'Q'].includes(number)) {
        counter = counter + 10;
      } else if (['A'].includes(number)) {
        if (counter + 11 > 21) {
          counter = counter + 1;
        } else {
          counter = counter + 11;
        }
      } else {
        counter = counter + parseInt(number);
      }
    });
    this.total = counter;
  };
}

export default Player;
