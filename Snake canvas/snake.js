const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

let snake = [];
snake[0] = { x: 9 * box, y: 10 * box
};
  
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
};

let score = 0;
let d;

document.addEventListener("keydown", direction);

function direction(event) {
  let key = event.keyCode;
  if (key == 37 && d != "RIGHT") {
    d = "LEFT";
  } else if (key == 38 && d != "DOWN") {
    d = "UP";
  } else if (key == 39 && d != "LEFT") {
    d = "RIGHT";
  } else if (key == 40 && d != "UP") {
    d = "DOWN";
  }
}

function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}

function draw() {
    ctx.rect(0,0,800,800)
    ctx.fillStyle = "#a0a840"
    ctx.fill()

    // snake
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
      
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
//   food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x,food.y,box,box);
}

// call draw function every 100 ms

let game = setInterval(draw, 500);
