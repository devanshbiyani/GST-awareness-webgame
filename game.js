// Define canvas and context
const canvas = document.getElementById("maze-canvas");
const ctx = canvas.getContext("2d");

// Define maze properties
const mazeWidth = 600;
const mazeHeight = 400;
const cellSize = 40;

// Define player properties
const playerWidth = 20;
const playerHeight = 20;
let playerX = 0;
let playerY = 0;

// Define start button and instructions
const startBtn = document.getElementById("start-btn");
const instructions = document.getElementById("instructions");

// Define maze and player objects
let maze = {};
let player = {};

// Start the game when the button is clicked
startBtn.addEventListener("click", startGame);

function startGame() {
  // Remove the start button and instructions
  startBtn.style.display = "none";
  instructions.style.display = "none";

  // Generate the first level of the maze
  const level = 1;
  generateMaze(level);

  // Move the player when the arrow keys are pressed
  document.addEventListener("keydown", movePlayer);
}

function generateMaze(level) {
  // Define the maze generation algorithm here
  // This function should create a 2D array that represents the maze
  // Each cell in the maze should be either a wall or a path
  // The maze should have a start point and an end point
  // The necessary documents should be placed at specific locations in the maze
  // The player should start at the start point

  // Draw the maze on the canvas
  for (let x = 0; x < mazeWidth; x += cellSize) {
    for (let y = 0; y < mazeHeight; y += cellSize) {
      if (maze[x / cellSize][y / cellSize] === "wall") {
        ctx.fillStyle = "black";
      } else {
        ctx.fillStyle = "white";
      }
      ctx.fillRect(x, y, cellSize, cellSize);
    }
  }

  // Draw the player at the start point
  player = {
    x: start.x * cellSize + cellSize / 2 - playerWidth / 2,
    y: start.y * cellSize + cellSize / 2 - playerHeight / 2,
  };
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, playerWidth, playerHeight);
    // Set the canvas dimensions
    canvas.width = mazeWidth;
    canvas.height = mazeHeight;
  
    // Generate the maze and set the player and end positions
    maze = generateRandomMaze(mazeWidth / cellSize, mazeHeight / cellSize);
    player.x = start.x * cellSize;
    player.y = start.y * cellSize;
    end.x = Math.floor(Math.random() * mazeWidth / cellSize) * cellSize;
    end.y = Math.floor(Math.random() * mazeHeight / cellSize) * cellSize;
  
    // Start the game loop
    gameLoop();
  }
  


function movePlayer(e) {
  switch (e.keyCode) {
    case 37: // left arrow
      if (player.x > 0 && maze[(player.x - 1) / cellSize][player.y / cellSize] !== "wall") {
        player.x -= cellSize;
      }
      break;
    case 38: // up arrow
      if (player.y > 0 && maze[player.x / cellSize][(player.y - 1) / cellSize] !== "wall") {
        player.y -= cellSize;
      }
      break;
    case 39: // right arrow
      if (player.x < mazeWidth - cellSize && maze[(player.x + 1) / cellSize][player.y / cellSize] !== "wall") {
        player.x += cellSize;
      }
      break;
    case 40: // down arrow
      if (player.y < mazeHeight - cellSize && maze[player.x / cellSize][(player.y + 1) / cellSize] !== "wall") {
        player.y += cellSize;
      }
      break;
  }

  // Clear the canvas and redraw the maze and player
    ctx.clearRect(0, 0, mazeWidth, mazeHeight);
for (let x = 0; x < mazeWidth; x += cellSize) {
for (let y = 0; y < mazeHeight; y += cellSize) {
if (maze[x / cellSize][y / cellSize] === "wall") {
ctx.fillStyle = "black";
} else {
ctx.fillStyle = "white";
}
ctx.fillRect(x, y, cellSize, cellSize);
}
}
ctx.fillStyle = "red";
ctx.fillRect(player.x, player.y, playerWidth, playerHeight);

// Check if the player has reached the end of the maze
if (player.x / cellSize === end.x && player.y / cellSize === end.y) {
// If so, generate the next level
const nextLevel = level + 1;
generateMaze(nextLevel);
}
}
