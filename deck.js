const symbols = ['♠', '♥', '♦', '♣'];

const app = document.getElementById('app');

symbols.forEach((symbol) => {
  const node = document.createElement('div');
  node.classList.add('deck-set');
  for (let i = 2; i < 15; i++) {
    const cardNode = document.createElement('div');
    cardNode.classList.add('deck-card');
    switch (i) {
      case 11:
        cardNode.innerHTML = `${symbol} J`;
        break;

      case 12:
        cardNode.innerHTML = `${symbol} Q`;
        break;

      case 13:
        cardNode.innerHTML = `${symbol} K`;
        break;

      case 14:
        cardNode.innerHTML = `${symbol} A`;
        break;

      default:
        cardNode.innerHTML = `${symbol} ${i}`;
        break;
    }

    node.appendChild(cardNode);
  }
  app.appendChild(node);
});
