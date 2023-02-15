const container = document.querySelector('.container');
const resetButton = document.querySelector('button');
const colorPicker = document.querySelector('#color-picker');

let currentColor = 'black';
let mouseDown = false;

const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const width = window.innerWidth - 20;
  const height = window.innerHeight - 300;
  const gridSize = Math.min(width, height);

  for (let i = 0; i < amtOfGrids; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < amtOfGrids; j++) {
      let widthAndHeight = gridSize / amtOfGrids;
      let column = document.createElement('div');
      column.classList.add('column');
      column.style.width = `${widthAndHeight}px`;
      column.style.height = `${widthAndHeight}px`;
      column.addEventListener('mousedown', () => {
        mouseDown = true;
        column.style.backgroundColor = currentColor;
      });
      column.addEventListener('mouseup', () => {
        mouseDown = false;
      });
      column.addEventListener('mouseenter', () => {
        if (mouseDown) {
          column.style.backgroundColor = currentColor;
        }
      });
      row.appendChild(column);
    }
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
};

createGrid(16);

resetButton.addEventListener('click', () => {
  let userSize = prompt('What dimensions do you want?');

  while (userSize === '' || isNaN(userSize) || userSize < 1) {
    userSize = prompt('Please enter a valid number greater than 0');
  }

  userSize = parseInt(userSize);

  while (userSize > 100) {
    userSize = prompt('Number cannot be over 100');
  }

  const wrapper = document.querySelector('.wrapper');
  wrapper.remove();
  createGrid(userSize);
});

colorPicker.addEventListener('input', (event) => {
  currentColor = event.target.value;
});
