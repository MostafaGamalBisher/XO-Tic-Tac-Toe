const currentPlayer = 'X';
const NUMBER_OF_ROWS = 3;
const turns = NUMBER_OF_ROWS ** 2;
const turnsCounter = 0;
const container = document.querySelector('.container');

document.documentElement.style.setProperty('--grid-rows', NUMBER_OF_ROWS);

const cellClickHandler = (event, index) => {
  const row = Math.floor(index / NUMBER_OF_ROWS);
  const column = index % NUMBER_OF_ROWS;

  console.log({ row });
  console.log({ column });
};

const createCell = (index) => {
  const cell = document.createElement('div');
  const valueSpan = document.createElement('span');

  cell.classList.add('cell');
  cell.setAttribute('role', 'button');
  cell.setAttribute('tabindex', index + 1);
  valueSpan.classList.add('value');

  cell.appendChild(valueSpan);

  cell.addEventListener('click', (event) => cellClickHandler(event, index));

  return cell;
};

const createBoard = () => {
  const board = document.createElement('div');

  board.classList.add('board');

  for (let i = 0; i < NUMBER_OF_ROWS ** 2; i++) {
    board.appendChild(createCell(i));
  }
  container.insertAdjacentElement('afterbegin', board);
};

createBoard();
