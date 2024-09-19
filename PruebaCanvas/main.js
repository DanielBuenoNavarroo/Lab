window.addEventListener("keypress", keyEvent);
const CANVAS_SIZE = 175;
const OBJECT_SIZE = 25;
const INITIAL_X = (CANVAS_SIZE - OBJECT_SIZE) / 2;
const INITIAL_Y = 0;
const MAP_ROWS = CANVAS_SIZE / OBJECT_SIZE;
const MAP_COLUMNS = CANVAS_SIZE / OBJECT_SIZE;
let map = [...Array(MAP_ROWS * MAP_COLUMNS)].fill(0);
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x;
let y;
let mapX;
let mapY;
resetVars();
draw();

function keyEvent(e) {
  console.log(e.key);
  switch (e.key) {
    case "a":
      if (x > 0 && map[mapX - 1] === 0) {
        errase();
        x -= OBJECT_SIZE;
        map[mapX] = 0;
        mapX--;
        map[mapX] = 1;
      }
      break;
    case "d":
      if (x < CANVAS_SIZE - OBJECT_SIZE && map[mapX + 1] === 0) {
        errase();
        x += OBJECT_SIZE;
        map[mapX] = 0;
        mapX++;
        map[mapX] = 1;
      }
      break;
  }
  draw();
}

function draw() {
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(x, y, OBJECT_SIZE, OBJECT_SIZE);
}

function errase() {
  ctx.clearRect(x, y, OBJECT_SIZE, OBJECT_SIZE);
}

function movePiece() {
  if (y < CANVAS_SIZE - OBJECT_SIZE) {
    errase();
    y += OBJECT_SIZE;
    mapY++;
  } else {
    resetVars();
  }
  draw();
}

function resetVars() {
  x = INITIAL_X;
  y = INITIAL_Y;
  mapX = Math.trunc(MAP_COLUMNS / 2);
  mapY = 0;
}

function setMap() {
  
}

// setInterval(() => {
//   movePiece();
// }, 750);