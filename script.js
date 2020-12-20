const grid = document.querySelector('.grid');
let randomMode = false;

function generateGrid() {
  const MAX_CELLS_IN_ROW = 100;

  // Prompt user for number of squares per row
  let cellsInRow = prompt("How many cells would you like per row?");
  
  // If input is not a valid number 
  while (isNaN(cellsInRow)) {
    alert("Sorry, you must enter a number for the grid size.");
    cellsInRow = prompt("How many cells would you like per row?");  
  }
  
  // If cell amount exceeds limit, alert user and retry input prompt
  while (cellsInRow > MAX_CELLS_IN_ROW || isNaN(cellsInRow)) {
    alert("Sorry, there can only be up to " + MAX_CELLS_IN_ROW + " cells per row. Please try again");
    cellsInRow = prompt("How many cells would you like per row?");  
  }

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

  // Add hover event listeners to each grid item
  addHoverEvents();
}

generateGrid();

  // EVENT LISTENERS
  function addHoverEvents() {
  // Hover event - changes background colour of cells upon mouseenter event
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell  => {
      cell.addEventListener('mouseenter', function() {
        if(randomMode) {
          this.style.backgroundColor = getRandomColour();
        }
        else {
          this.style.backgroundColor = "green";
        }
      }
    );
  });
}

// Reset button event - regenerates a grid when clicked
const resetButton = document.querySelector('.btn-reset');
resetButton.addEventListener('click', function() {
  grid.innerHTML = "";
  generateGrid();
});

// Random mode button event - toggles into random and regular colour mode 
const modeButton = document.querySelector('.btn-toggle-mode');
modeButton.addEventListener('click', function() {
  // Toggle random mode status
  randomMode = !randomMode;

  // Update button text to suggest alternative colour mode
  if(randomMode) {
    modeButton.textContent = 'Regular Mode';
  } else {
    modeButton.textContent = 'Random Mode';
  }

});

modeButton.style.backgroundColor = "orange";

// getRandomColour function 
function getRandomColour() {
  let red = Math.ceil(Math.random() * 256);
  let green = Math.ceil(Math.random() * 256);
  let blue = Math.ceil(Math.random() * 256);

  
  return `rgb(${red}, ${blue}, ${green})`;
}

