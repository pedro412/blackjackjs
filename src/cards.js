export const getAvailableCards = (cards) => {
  const avaibleCards = [];
  cards?.forEach((c) => {
    if (!c.classList.contains('used')) {
      avaibleCards.push(c);
    }
  });
  return avaibleCards;
};

export const drawCard = (avaibleCards) => {
  const randomNumber =
    Math.floor(Math.random() * (avaibleCards.length - 1)) + 1;
  const card = avaibleCards[randomNumber];
  card.classList.add('used');
  avaibleCards = getAvailableCards();
  return card;
};

export const resetCards = (cards) => {
  cards?.forEach((c) => {
    if (c.classList.contains('used')) {
      c.classList.remove('used');
    }
  });
};
