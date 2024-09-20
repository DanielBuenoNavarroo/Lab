window.addEventListener("keypress", keyEvent);
const CANVAS_WIDTH = 350;
const CANVAS_HEIGHT = 500;
const OBJECT_SIZE = 25;
const INITIAL_X = (CANVAS_WIDTH) / 2;
const INITIAL_Y = 0;
const MAP_ROWS = CANVAS_WIDTH / OBJECT_SIZE;
const MAP_COLUMNS = CANVAS_HEIGHT / OBJECT_SIZE;
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
      if (x > 0 && map[mapY * 7 + mapX - 1] === 0) {
        errase();
        x -= OBJECT_SIZE;
        map[mapY * 7 + mapX] = 0;
        mapX--;
        map[mapY * 7 + mapX] = 1;
      }
      break;
    case "d":
      if (x < CANVAS_WIDTH - OBJECT_SIZE && map[mapY * 7 + mapX + 1] === 0) {
        errase();
        x += OBJECT_SIZE;
        map[mapY * 7 + mapX] = 0;
        mapX++;
        map[mapY * 7 + mapX] = 1;
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
  if (y < CANVAS_HEIGHT - OBJECT_SIZE) {
    if (map[(mapY + 1) * 7 + mapX] === 0) {
      errase();
      y += OBJECT_SIZE;
      map[mapY * 7 + mapX] = 0;
      mapY++;
      map[mapY * 7 + mapX] = 1;
    } else {
      map[(mapY + 1) * 7 + mapX] = 0;
      resetVars();
    }
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

setInterval(() => {
  movePiece();
}, 750);
