let num = 64; // variable to store the grid value
const board = document.querySelector('#board');
const title = document.querySelector('#title');


// function to add the grid
function createBoard(number) {
  title.textContent = `${number}x${number}`;
  const n = number * number;
  for (let i = 1; i <= n; i++) {
    let item = document.createElement('div');
    item.setAttribute('class', 'item');
    // item.textContent = `${i}`;
    item.addEventListener('mouseenter', function () {
      item.style.backgroundColor = 'black';
    });
    board.style.cssText = `grid-template-columns: repeat(${number}, auto);
        grid-template-rows: repeat(${number}, auto);`;
    board.append(item);
  }
}


// clear button
const clearBtn = document.querySelector('#clear');
function clearBoard() {
  let childs = board.childNodes;
  childs.forEach(e => e.style.backgroundColor = 'white' );
}
clearBtn.addEventListener('click', clearBoard);


// change grid size
const changeBtn = document.querySelector('#change');

function changeSize () {
  num = Math.round(parseInt(prompt('Enter a number between 2 and 64'), 10));
  if (num < 2 || num > 64 || isNaN(num)) changeSize();
  while (board.firstChild) board.removeChild(board.firstChild); // removes the current board
  createBoard(num);
};

changeBtn.addEventListener('click', changeSize);


// create the initial 32x32 board
createBoard(num);
