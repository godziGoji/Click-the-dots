let dot = document.getElementById("dot");
let gameArea = document.getElementById("game-area");
let scoreText = document.getElementById("score");
let score = 0;

function moveDot() {
  let maxX = gameArea.clientWidth - dot.clientWidth;
  let maxY = gameArea.clientHeight - dot.clientHeight;
  let randX = Math.random() * maxX;
  let randY = Math.random() * maxY;

  dot.style.left = `${randX}px`;
  dot.style.top = `${randY}px`;
}

dot.addEventListener("click", () => {
  score++;
  scoreText.textContent = `Score: ${score}`;
  moveDot();
});

moveDot();
