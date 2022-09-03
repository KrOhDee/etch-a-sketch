const container = document.querySelector('.container');
//let promptNum = parseInt(prompt("Enter the number of squares per side that you would like", '0'));
const resetButton = document.querySelector('button');

const createGrid = (amtOfGrids) => {
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

for (let i = 0; i < amtOfGrids; i++ ) {
    let row = document.createElement('div');
    row.classList.add('row');

for (let j = 0; j < amtOfGrids; j++ ) {
    let widthAndHeight = 960 / amtOfGrids;
    let column = document.createElement('div');
    column.classList.add('column');
    column.style.width = `${widthAndHeight}px`;
    column.style.height = `${widthAndHeight}px`;
    column.addEventListener('mouseenter', () => {
        column.style.backgroundColor = 'black';
    })
    row.appendChild(column);
}
    wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

createGrid(16);

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('What dimensions do you want?'));

    while (userSize > 100) {
        userSize = Number(prompt('Number cannot be over 100'));
    }
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    createGrid(userSize);
})



