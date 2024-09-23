import React, { useState, useEffect } from 'react';

const SnakeGame = () => {
  // Grid and Snake settings
  const gridSize = 15;
  const initialSnake = [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }];
  const initialDirection = { x: 1, y: 0 };

  // Game State
  const [snake, setSnake] = useState(initialSnake); // Snake's body
  const [direction, setDirection] = useState(initialDirection); // Current movement direction
  const [apple, setApple] = useState(randomApplePosition()); // Apple position
  const [score, setScore] = useState(0); // Game score
  const [gameOver, setGameOver] = useState(false); // Game over state

  // Start the game loop with setInterval
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, 200); // Speed of snake movement (200ms)

    return () => clearInterval(interval);
  }, [snake, direction, gameOver]);

  // Handle key presses (arrow keys or WASD)
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  // Move the snake based on the current direction
  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    // Update the head position
    head.x += direction.x;
    head.y += direction.y;

    // Check if the snake hits the walls or itself
    if (checkCollision(head)) {
      setGameOver(true);
      return;
    }

    // Insert the new head at the front of the snake
    newSnake.unshift(head);

    // Check if snake eats the apple
    if (head.x === apple.x && head.y === apple.y) {
      setScore(score + 1);
      setApple(randomApplePosition());
    } else {
      // Remove the tail if no apple is eaten (snake moves forward)
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  // Randomly generate a new apple position
  function randomApplePosition() {
    let newApple;
    do {
      newApple = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
    } while (isCellOccupied(newApple)); // Ensure apple does not spawn on the snake
    return newApple;
  }

  // Check if the snake head collides with the walls or itself
  const checkCollision = (head) => {
    // Wall collision
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      return true;
    }
    // Self-collision
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    return false;
  };

  // Check if a cell is occupied by the snake
  const isCellOccupied = (position) => {
    return snake.some((segment) => segment.x === position.x && segment.y === position.y);
  };

  // Render the grid with snake and apple
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Snake Game</h1>
      <h2>Score: {score}</h2>
      {gameOver && <h2>Game Over! Press F5 to Restart.</h2>}

      <div
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${gridSize}, 20px)`,
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
          gap: '2px',
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, i) => {
          const x = i % gridSize;
          const y = Math.floor(i / gridSize);

          const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
          const isApple = apple.x === x && apple.y === y;

          return (
            <div
              key={i}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: isSnake ? 'green' : isApple ? 'red' : '#ccc',
              }}
            ></div>
          );
        })}
      </div>

      {/* Inline styles */}
      <style jsx>{`
        h1 {
          font-family: Arial, sans-serif;
        }

        div.grid {
          display: grid;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default SnakeGame;
