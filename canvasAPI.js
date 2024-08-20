const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasWidth;
let canvasHeight;
let inputStream = {};

function initCanvas() {
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  canvas.addEventListener('keydown', (event) => {
    inputStream[event.key] = true;
  });
  canvas.addEventListener('keyup', (event) => {
    inputStream[event.key] = false;
  });
  canvas.focus();
}

function renderGame() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // Game rendering logic will be implemented here
}

function handleInput() {
  return inputStream;
}

initCanvas();

export { renderGame, handleInput };