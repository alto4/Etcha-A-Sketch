const grid = document.querySelector('.grid');

function generateGrid() {
  const MAX_CELLS_IN_ROW = 60;

  // Prompt user for number of squares per row
  let cellsInRow = prompt("How many cells would you like per row?");
  
  // If cell amount exceeds limit, alert user and retry input prompt
  while (cellsInRow > MAX_CELLS_IN_ROW) {
    alert("Sorry, there can only be up to " + MAX_CELLS_IN_ROW + " cells per row. Please try again");
    cellsInRow = prompt("How many cells would you like per row?");  
  }

  grid.style.backgroundColor = 'gray';
  grid.style.width = '550px';
  grid.style.height = '550px';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = `repeat(${cellsInRow}, 1fr)`;
  
  if(cellsInRow > 10) {
    grid.style.gridGap = '1px';
    grid.style.border = '1px solid gray';
  } else {
    grid.style.gridGap = '4px';
    grid.style.border = '4px solid gray';
  }

    for (let i = 0; i < (cellsInRow * cellsInRow); i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.setAttribute('data-cell', i + 1);
    gridCell.style.backgroundColor = '#333';

    grid.appendChild(gridCell);
  }
}


generateGrid();
// Hover event
const cells = document.querySelectorAll('.cell');
cells.forEach(cell  => {
    cell.addEventListener('mouseenter', function() {
      this.style.backgroundColor = "green";
    }
  );
});