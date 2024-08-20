const canvasWidth = 800;
const canvasHeight = 600;
let score = 0;
let ball = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  speedX: 5,
  speedY: 5,
  radius: 10
};
let paddle = {
  width: 10,
  height: 100,
  x: 0,
  y: 0
};
let opponentPaddle = {
  width: 10,
  height: 100,
  x: canvasWidth - 10,
  y: 0
};

function gameLogic() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  if (ball.x <= 0 || ball.x + ball.radius >= canvasWidth) {
    ball.speedX = -ball.speedX;
  }

  if (ball.y <= 0 || ball.y + ball.radius >= canvasHeight) {
    ball.speedY = -ball.speedY;
  }

  if (checkCollision(paddle, ball)) {
    ball.speedX = -ball.speedX;
    score++;
  }

  if (checkCollision(opponentPaddle, ball)) {
    ball.speedX = -ball.speedX;
  }

  if (ball.x <= 0) {
    score = 0;
    resetBall();
  }

  if (ball.x + ball.radius >= canvasWidth) {
    score = 0;
    resetBall();
  }

  renderGame();
  requestAnimationFrame(gameLogic);
}

function checkCollision(paddle, ball) {
  return (ball.x <= paddle.x + paddle.width && 
    ball.y >= paddle.y && 
    ball.y <= paddle.y + paddle.height);
}

function resetBall() {
  ball.x = canvasWidth / 2;
  ball.y = canvasHeight / 2;
  ball.speedX = -ball.speedX;
}

function userInputHandler(inputStream) {
  if (inputStream['ArrowUp']) {
    paddle.y -= 10;
  }

  if (inputStream['ArrowDown']) {
    paddle.y += 10;
  }

  if (paddle.y < 0) {
    paddle.y = 0;
  }

  if (paddle.y > canvasHeight - paddle.height) {
    paddle.y = canvasHeight - paddle.height;
  }
}

export { gameLogic, userInputHandler };