const currentPlayer = 'X';
const NUMBER_OF_ROWS = 3;
const turns = NUMBER_OF_ROWS ** 2;
const turnsCounter = 0;
const container = document.querySelector('.container');

document.documentElement.style.setProperty('--grid-rows', NUMBER_OF_ROWS);

const gameboard = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_'],
];

const getCellPlacement = (index, numOfRows) => {
  const row = Math.floor(index / numOfRows);
  const column = index % numOfRows;

  return [row, column];
};

const cellClickHandler = (e, index) => {
  const [row, col] = getCellPlacement(index, NUMBER_OF_ROWS);

  console.log(row, col);
  console.log(e.target);
};

const createCell = (index) => {
  const cell = document.createElement('div');
  const valueSpan = document.createElement('span');

  cell.classList.add('cell');
  cell.setAttribute('role', 'button');
  cell.setAttribute('tabindex', index + 1);
  valueSpan.classList.add('value');

  cell.appendChild(valueSpan);

  cell.addEventListener('click', (e) => cellClickHandler(e, index));

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
