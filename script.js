let num = 32; // variable to store the grid value
const board = document.querySelector('#board');
const title = document.querySelector('#title');


// function to add the grid
function createBoard(number) {
  const n = number * number;

  title.textContent = `${number}x${number}`;

  for (let i = 1; i <= n; i++) {
    let item = document.createElement('div');
    item.setAttribute('class', 'item');

    item.addEventListener('mouseenter', pointerColor);

    board.style.cssText = `grid-template-columns: repeat(${number}, auto);
        grid-template-rows: repeat(${number}, auto);`;
    board.append(item);
  }
}


// random pointer color
const randomBtn = document.querySelector('#random');
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// random color button
function randomColor() {
  function random() {
    return Math.floor(Math.random() * (values.length));
  };
  let hexColor = '';
  hexColor += values[random()] + values[random()] + values[random()] +
  values[random()] + values[random()] + values[random()]
  return `#${hexColor}`;
}

function pointerColor (e) {
  if (randomBtn.getAttribute('class') === 'btn btn-primary') {
    let color = randomColor();
    this.style.backgroundColor = `${color}`;
  } else {
    this.style.backgroundColor = '#559198';
  }
}

randomBtn.addEventListener('click', function () {
    if (randomBtn.classList.contains('btn-primary')) {
      randomBtn.removeAttribute('class', 'btn-primary');
      randomBtn.setAttribute('class', 'btn');
    } else {
      randomBtn.setAttribute('class', 'btn btn-primary');
    }
});


// clear button
const clearBtn = document.querySelector('#clear');

function clearBoard() {
  const childs = board.childNodes;
  childs.forEach(e => e.style.backgroundColor = 'white');
}

clearBtn.addEventListener('click', clearBoard);


// change grid size
const changeBtn = document.querySelector('#change');

function changeSize() {
  num = Math.round(parseInt(prompt('Enter a number between 2 and 64'), 10));
  if (num < 2 || num > 64 || isNaN(num)) changeSize();
  while (board.firstChild) board.removeChild(board.firstChild); // removes the current board
  createBoard(num);
};

changeBtn.addEventListener('click', changeSize);


// create the initial 32x32 board
createBoard(num);
