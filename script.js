// selecting div with class container
const container = document.querySelector(".container");
// change grid button 
const gridButton = document.querySelector('.btn-change-grid');
// change color button
const colorButton = document.querySelector('.btn-change-color');
const getColorButton = document.querySelector('.btn-color');
// setting the grid size
let gridSize;
// setting custom color background
let customBackground = ["808080"];
// getting head element
let headElement = document.getElementsByTagName('head')[0];

// function for changing grid
function changeGrid() {
  gridSize = prompt('How many grid do you want?');
  if(gridSize > 100 || gridSize < 0) {
    alert("Grid size can choose between 0 and 100");
  } else {
    container.innerHTML = '';
  for (let i = 0; i < gridSize; i++) {
    const divContainer = document.createElement('div')
    divContainer.classList.add('div-container');
    container.appendChild(divContainer);
    for (let j = 0; j < gridSize; j++) {
      const divBlock = document.createElement('div')
      divBlock.classList.add('div-block');
      divContainer.appendChild(divBlock);
    }
  }
  // getting the div-block element
  const divBlocks = document.querySelectorAll('.div-block');
  divBlocks.forEach(block => block.addEventListener('mouseover', hoverMouse));
  }
}

// function for mouse hover
function hoverMouse(e) {

  if(customBackground.length == 1) {
    // default is grey background
    e.target.classList.add('grey-bg');
  } else {
    

    // e.target.classList.add(`${customBackground.length}-bg`);
    e.target.setAttribute("style", `background-color: ${customBackground.slice(customBackground.length - 1)}`)
  }

}

// color change function
function colorChanger() {
  customBackground.push(this.value);
}

// ask user for grid size
gridButton.addEventListener('click', changeGrid);

// color button event
getColorButton.addEventListener('change', colorChanger);