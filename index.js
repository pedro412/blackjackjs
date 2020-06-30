const cards = document.querySelectorAll('.deck-card');
let avaibleCards = cards;

const getAvailableCards = () => {
  const avaibleCards = [];
  cards.forEach((c) => {
    if (!c.classList.contains('used')) {
      avaibleCards.push(c);
    }
  });

  return avaibleCards;
};

const drawCard = () => {
  const numberOfAvailableCards = avaibleCards.length;
  const randomNumber = Math.floor(Math.random() * numberOfAvailableCards) + 1;
  const card = avaibleCards[randomNumber];
  card.classList.add('used');
  avaibleCards = getAvailableCards();
  return card;
};

class Player {
  moves = 5;
  cards = [];
  total = 0;

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

const player1 = new Player();
const dealer = new Player();
