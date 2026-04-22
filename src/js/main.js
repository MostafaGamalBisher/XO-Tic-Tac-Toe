let currentPlayer = 'X';
const NUMBER_OF_ROWS = 3;
const turns = NUMBER_OF_ROWS ** 2;
let turnsCounter = 0;
const container = document.querySelector('.container');

document.documentElement.style.setProperty('--grid-rows', NUMBER_OF_ROWS);

const createBoardArray = () => {
  const board = [];

  for (let row = 0; row < NUMBER_OF_ROWS; row++) {
    board.push(Array.from({ length: NUMBER_OF_ROWS }, () => '_'));
  }
  return board;
};

let gameboard = createBoardArray();

const resetButton = document.querySelector('#reset');

const getCellPlacement = (index, numOfRows) => {
  const row = Math.floor(index / numOfRows);
  const col = index % numOfRows;

  return [row, col];
};

const checkRows = (mark) => {
  let column = 0;
  for (let row = 0; row < NUMBER_OF_ROWS; row++) {
    while (column < NUMBER_OF_ROWS) {
      if (gameboard[row][column] !== mark) {
        column = 0;
        break;
      }
      column++;
    }

    if (column === NUMBER_OF_ROWS) {
      return true;
    }
  }
};

const checkColumns = (mark) => {
  let row = 0;

  for (let column = 0; column < NUMBER_OF_ROWS; column++) {
    while (row < NUMBER_OF_ROWS) {
      if (gameboard[row][column] !== mark) {
        row = 0;
        break;
      }
      row++;
    }

    if (row === NUMBER_OF_ROWS) {
      return true;
    }
  }
};

const checkDiagonals = (mark) => {
  let count = 0;

  while (count < NUMBER_OF_ROWS) {
    if (gameboard[count][count] !== mark) {
      count = 0;
      break;
    }
    count++;
  }

  if (count === NUMBER_OF_ROWS) {
    return true;
  }
};

const checkReverseDiagonals = (mark) => {
  let count = 0;

  while (count < NUMBER_OF_ROWS) {
    if (gameboard[count][NUMBER_OF_ROWS - count - 1] !== mark) {
      count = 0;
      break;
    }
    count++;
  }

  if (count === NUMBER_OF_ROWS) {
    return true;
  }
};

const checkWin = (cPlayer) => {
  if (checkRows(cPlayer)) {
    return true;
  }

  if (checkColumns(cPlayer)) {
    return true;
  }

  if (checkDiagonals(cPlayer)) {
    return true;
  }

  if (checkReverseDiagonals(cPlayer)) {
    return true;
  }
};

const resetBoard = () => {
  document.querySelector('.board').remove();
  createBoard();
  gameboard = createBoardArray();

  currentPlayer = 'X';
  turnsCounter = 0;
};

const runWinEvent = (cPlayer) => {
  setTimeout(() => {
    alert(`Player ${cPlayer} won!`);
    resetBoard();
  }, 100);
};

const runDrawEvent = () => {
  setTimeout(() => {
    alert('Draw');
    resetBoard();
  }, 100);
};

const drawMarkIncell = (cell, cPlayer) => {
  cell.querySelector('.value').textContent = cPlayer;
  cell.classList.add(`cell--${cPlayer}`);
};

const cellClickHandler = (cell, index) => {
  const [row, col] = getCellPlacement(index, NUMBER_OF_ROWS);

  if (gameboard[row][col] !== '_') {
    return;
  }

  turnsCounter++;
  gameboard[row][col] = currentPlayer;
  drawMarkIncell(cell, currentPlayer);

  if (checkWin(currentPlayer)) {
    runWinEvent(currentPlayer);
  } else {
    if (turnsCounter === turns) {
      runDrawEvent();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
};

const createCell = (index) => {
  const cell = document.createElement('div');
  const valueSpan = document.createElement('span');

  cell.classList.add('cell');
  cell.setAttribute('role', 'button');
  cell.setAttribute('tabindex', index + 1);
  valueSpan.classList.add('value');

  cell.appendChild(valueSpan);

  cell.addEventListener('click', () => cellClickHandler(cell, index));
  cell.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      cellClickHandler(cell, index);
      return;
    }

    let targetIndex = index;

    if (e.key === 'ArrowRight') {
      targetIndex = index + 1;
    } else if (e.key === 'ArrowLeft') {
      targetIndex = index - 1;
    } else if (e.key === 'ArrowDown') {
      targetIndex = index + NUMBER_OF_ROWS;
    } else if (e.key === 'ArrowUp') {
      targetIndex = index - NUMBER_OF_ROWS;
    }

    if (targetIndex !== index) {
      const cells = document.querySelectorAll('.cell');

      if (targetIndex >= turns || targetIndex < 0) {
        return;
      } else {
        cells[targetIndex].focus();
      }
    }
  });

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

resetButton.addEventListener('click', resetBoard);

createBoard();
