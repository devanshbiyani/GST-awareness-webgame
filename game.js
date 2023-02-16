const player = document.querySelector('.player');
const playerImage = document.querySelector('#player-image');
const maze = document.querySelector('.maze');
const squares = document.querySelectorAll('.square');
let isGameOver = false;

playerImage.addEventListener('change', () => {
  player.style.backgroundImage = `url(${playerImage.value})`;
});

document.addEventListener('keydown', (event) => {
  if (isGameOver) return;

  const key = event.key;
  const playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));

  if (key === 'ArrowRight' && playerLeft < 250) {
    player.style.left = `${playerLeft + 50}px`;
  } else if (key === 'ArrowLeft' && playerLeft > 0) {
    player.style.left = `${playerLeft - 50}px`;
  }

  // Collision detection
  const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
  const playerLeftOffset = player.offsetLeft;
  const playerRightOffset = player.offsetLeft + player.offsetWidth;
  const playerBottomOffset = player.offsetTop + player.offsetHeight;
  
  squares.forEach((square) => {
    const squareTop = square.offsetTop;
    const squareLeftOffset = square.offsetLeft;
    const squareRightOffset = square.offsetLeft + square.offsetWidth;
    const squareBottomOffset = square.offsetTop + square.offsetHeight;
    
    if (
      playerTop <= squareBottomOffset &&
      playerBottomOffset >= squareTop &&
      playerRightOffset >= squareLeftOffset &&
      playerLeftOffset <= squareRightOffset
    ) {
      // Collision detected
      isGameOver = true;
      alert('Game over!');
    }
  });
});
