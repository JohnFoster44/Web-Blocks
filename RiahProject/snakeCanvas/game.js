informationOverlay = document.querySelector(".information");
score = document.querySelector(".score");
var GameState = {
    Start: 1,
    Playing: 2,
    GameOver: 3
  };
  
  var Direction = {
    North: 1,
    East: 2,
    South: 3,
    West: 4
  };
  
  var Game = {
    score: 0,
    state: GameState.Start,
    context: undefined,
    size: {
      width: 20,
      height: 20
    },
    blockSize: {
      width: 25,
      height: 25
    },
    snake: {
      position: {
        x: 0,
        y: 0
      },
      direction: Direction.East,
      pendingDirection: undefined,
      blocks: []
    },
    food: undefined,
  }
  
  window.onload = initializeGame;
  
  function initializeGame() {
    Game.context = gameCanvas.getContext('2d');
  
    Game.state = GameState.Start;
    updateGameState();
  
    // register listener for click to start
    informationOverlay.addEventListener('click', (e) => {
      switch(Game.state) {
        case GameState.Start:
        case GameState.GameOver:
          Game.state = GameState.Playing;
          updateGameState();
          break;
      }
    });
  
    document.addEventListener('keydown', (e) => {
      switch(Game.state) {
        case GameState.Playing:
          switch(e.code) {
            case 'ArrowUp':
              if (Game.snake.direction === Direction.South) return;
              Game.snake.pendingDirection = Direction.North;
              break;
  
            case 'ArrowRight':
              if (Game.snake.direction === Direction.West) return;
              Game.snake.pendingDirection = Direction.East;
              break;
  
            case 'ArrowDown':
              if (Game.snake.direction === Direction.North) return;
              Game.snake.pendingDirection = Direction.South;
              break;
  
            case 'ArrowLeft':
              if (Game.snake.direction === Direction.East) return;
              Game.snake.pendingDirection = Direction.West;
              break;
          }
          break;
      }
    });
  }
  
  function updateGameState() {
    switch(Game.state) {
      case GameState.Start:
        // show headings and overlay
        // set heading text
        informationOverlay.style.display = 'block';
        heading.innerHTML = 'START GAME';
        line1.innerHTML = '(click to start)';
        line2.innerHTML = '';
        score.innerHTML = '';
        break;
  
      case GameState.Playing:
        // hide headings and overlay
        // initialize game state
        // start game timer
        informationOverlay.style.display = 'none';
        startGame();
        break;
  
       case GameState.GameOver:
        // show headings and overlay
        // set heading text
        informationOverlay.style.display = 'block';
        heading.innerHTML = 'GAME OVER';
        line1.innerHTML = '(click to start)';
        line2.innerHTML = 'score: ' + Game.score;
        score.innerHTML = '';
        break;
    }
  }
  
  function startGame() {
    // initialize canvas
    // initialize snake
    // start game timer
  
    Game.score = 0;
    Game.food = undefined;
  
    Game.snake.position = {
      x: 5,
      y: 1
    };
  
    Game.snake.direction = Direction.East;
  
    Game.snake.blocks = [
      {
        x: 1,
        y: 1
      }
    ];
  
    startGameStep();
  }
  
  function startGameStep() {
    var stepInterval = window.setInterval(() => {
      step();
  
      if (Game.state !== GameState.Playing) {
        window.clearInterval(stepInterval);
        updateGameState();
      }
    }, 200);
  }
  
  function step() {
    // advance snake position
    advanceSnake();
  
    // check snake state
    // check box collisions
    checkCollisionBox();
    // check snake collisions
    checkCollisionSnake();
    // check food collisions
    checkCollisionFood();
  
    updateScore();
  
    // prepare canvas for redraw
    clearCanvas();
    // draw snake blocks
    drawSnake();
    // initialize and draw food
    placeFood();
    drawFood();
  }
  
  function updateScore() {
    score.innerHTML = 'SCORE: ' + Game.score;
  }
  
  function advanceSnake() {
    if (Game.snake.pendingDirection) {
      Game.snake.direction = Game.snake.pendingDirection;
      Game.snake.pendingDirection = undefined;
    }
  
    // create new block at head
    var x = Game.snake.position.x;
    var y = Game.snake.position.y;
  
    switch(Game.snake.direction) {
      case Direction.North: y -= 1; break;
      case Direction.East: x += 1; break;
      case Direction.South: y += 1; break;
      case Direction.West: x -= 1; break;
    }
  
    Game.snake.position = {
      x: x,
      y: y
    };
  
    Game.snake.blocks.push(Game.snake.position);
  
    // remove block at tail
    Game.snake.blocks.shift();
  }
  
  function clearCanvas() {
    Game.context.clearRect(0, 0, 500, 500);
  }
  
  function drawSnake() {
    Game.context.fillStyle = '#0f380f';
    for (var block of Game.snake.blocks) {
      var x = (Game.blockSize.width * block.x) + 1;
      var y = (Game.blockSize.height * block.y) + 1;
      var width = Game.blockSize.width - 2;
      var height = Game.blockSize.height - 2;
  
      Game.context.fillRect(x, y, width, height);
    }
  }
  
  function placeFood() {
    while (!Game.food) {
      // create new food block
      var x = Math.floor(Math.random() * Game.size.width);
      var y = Math.floor(Math.random() * Game.size.height);
  
      var onSnake = false;
  
      for (var block of Game.snake.blocks) {
        if (block.x === x && block.y === y) {
          onSnake = true;
          break;
        }
      }
  
      if (!onSnake) {
        Game.food = {
          x: x,
          y: y
        }
      }
    }
  }
  
  function drawFood() {
    // draw food block
    Game.context.fillStyle = '#306230';
  
    var x = (Game.blockSize.width * Game.food.x) + 1;
    var y = (Game.blockSize.height * Game.food.y) + 1;
    var width = Game.blockSize.width - 2;
    var height = Game.blockSize.height - 2;
  
    Game.context.fillRect(x, y, width, height);
  }
  
  function checkCollisionBox() {
    if (Game.snake.position.x < 0
      || Game.snake.position.x >= Game.size.width
      || Game.snake.position.y < 0
      || Game.snake.position.y >= Game.size.height) {
      // snake intersects box
      Game.state = GameState.GameOver;
    }
  }
  
  function checkCollisionSnake() {
    for (var i = 0; i < Game.snake.blocks.length - 1; i++) {
      var block = Game.snake.blocks[i];
      if (Game.snake.position.x === block.x
        && Game.snake.position.y === block.y) {
        // snake intersects itself
        Game.state = GameState.GameOver;
        return;
      }
    }
  }
  
  function checkCollisionFood() {
    if (Game.food === undefined) {
      return;
    }
  
    if (Game.snake.position.x === Game.food.x
      && Game.snake.position.y === Game.food.y) {
      Game.score += 1;
      Game.food = undefined;
  
      // duplicate block at tail of snake
      Game.snake.blocks.unshift(Game.snake.blocks[0]);
    }
  }