let gridInt = 16;

const containerQuery = document.querySelector("#container");
const btnQuery = document.querySelector("#btnNewCanvas");

btnQuery.addEventListener("click", () => {  
  clearCanvas();
  askInt();
  newCanvas(gridInt);
});

const drawingBox = document.createElement("div");

function clearCanvas() {
  const itemsQuery = document.querySelectorAll(".items");

  for (let i = 0; i < itemsQuery.length; i++){
    itemsQuery[i].remove();
  }
}

function askInt() {
  gridInt = prompt("Please enter a number from 4 to 100.");
}

function newCanvas(x) {
  if (x<4 || x>100)
  {
    alert("Error! Please enter a number from 4 to 100.");
    askInt();
    newCanvas(gridInt);
  }
  
  for (let i = 0; i < gridInt; i++){
  sqBlock = document.createElement("div");
  sqBlock.setAttribute("class", "containerSquares");
  for (let j = 0; j <gridInt; j++){
    const sqHorizontal = document.createElement("div");
    sqHorizontal.setAttribute("class", "items");
    let newHeight = 800/gridInt;
    let newWidth = 800/gridInt;
    sqHorizontal.style.height = `${newHeight}px`;
    sqHorizontal.style.width = `${newWidth}px`;
    sqHorizontal.addEventListener("mouseover", (e) => {
      e.target.style.background = '#000000';
    });
    sqBlock.appendChild(sqHorizontal);
  }
  containerQuery.appendChild(sqBlock);
  }
}

newCanvas(gridInt);