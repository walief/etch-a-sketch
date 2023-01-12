function generateGrid(size) {
    var grid = document.getElementById('grid');
    for (var i = 0; i < size; i++) {
        var column = document.createElement('div');
        column.className = 'column';
        for (var j = 0; j < size; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            column.appendChild(cell);
        }
        grid.appendChild(column);
        clearGrid(); // fix for opacity weirdness
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function handleMouseOver(event) {
            /* cell.setAttribute('style', 'opacity: 50%'); */
            cell.style.opacity *= 0.6;
        });
    });

}

function setGridSize(size) {

}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.setAttribute('style', 'opacity: 100%');
    });
};

function deleteGrid() {
    var e = document.getElementById('grid');
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}

let gridSize = 16;
generateGrid(gridSize);

var resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', (event) => {
    deleteGrid();
    generateGrid(gridSize);
});

var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', (event) => {
    clearGrid();
});

var newGridBtn = document.getElementById('new-grid');
newGridBtn.addEventListener('click', (event) => {
    var gridSize = prompt('Enter a new grid size');
    if (gridSize >= 16 && gridSize <= 100) {
        deleteGrid();
        generateGrid(gridSize);
    }
    else {
        alert('Don\'t mess with me!');
        return
    }
});
