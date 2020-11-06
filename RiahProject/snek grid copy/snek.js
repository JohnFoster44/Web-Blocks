import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed, getSnakeHead, snakeIntersection
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

import {outsideGrid} from "./grid.js";

let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
//  game over restert CHANGE FOR RIAH
  if (gameOver){
    if(confirm('You DIED, Press OK to restart')){
      window.location = "/"
    }
    return
  }

  window.requestAnimationFrame(main);
  const secLastRender = (currentTime - lastRenderTime) / 1000;
  if (secLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main); 

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}


function checkDeath(){
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}