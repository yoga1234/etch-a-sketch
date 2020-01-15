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
// set if the user setting a custom color
let customColor = "default";
// selecting random color button
let randomColorButton = document.querySelector('.random-color-button');
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

  if(customColor == "default") {
    // default is grey background
    e.target.classList.add('grey-bg');
  } else if(customColor == "custom") {
    // dynamically create background style
    e.target.setAttribute("style", `background-color: ${customBackground.slice(customBackground.length - 1)}`)
  } else if(customColor == "rainbow"){
    e.target.setAttribute("style", "background-color: #" + (Math.random()*0xFFFFFF<<0).toString(16));

    // '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

}

// color change function
function colorChanger() {
  customBackground.push(this.value);
  customColor = "custom";
}

// random color function
function randomColor(){
  customColor = "rainbow";
}

// ask user for grid size
gridButton.addEventListener('click', changeGrid);

// color button event
getColorButton.addEventListener('change', colorChanger);

// event listener for random color button
randomColorButton.addEventListener('click', randomColor);