import { useEffect, useState, useCallback } from "react";

function GridLightsGame() {
  const [gridSize, setGridSize] = useState(3); // Initial grid size
  const [clickedTiles, setClickedTiles] = useState([]);
  const [removeTiles, setRemoveTiles] = useState(false);
  const [level, setLevel] = useState(1); // Current level
  const [timer, setTimer] = useState(20); // Timer for each level
  const [gameOver, setGameOver] = useState(false);

  // Calculate the center tile index (disabled)
  const centerTile = gridSize % 2 === 1 ? Math.floor((gridSize * gridSize) / 2) : null;

  // Handle tile clicks
  const handleTileClick = useCallback(
    (index) => {
      if (index !== centerTile && !clickedTiles.includes(index)) {
        const updatedTiles = [...clickedTiles, index];
        setClickedTiles(updatedTiles);

        // Check if all clickable tiles are clicked
        if (updatedTiles.length === gridSize * gridSize - 1) {
          setRemoveTiles(true);
        }
      }
    },
    [clickedTiles, centerTile, gridSize]
  );

  // Effect to handle tile removal
  useEffect(() => {
    let interval;

    if (removeTiles) {
      interval = setInterval(() => {
        setClickedTiles((prev) => {
          if (prev.length === 0) {
            clearInterval(interval);
            setRemoveTiles(false);
            setLevel((prevLevel) => prevLevel + 1); // Increase level
            setGridSize((prevSize) => prevSize + 1); // Expand grid
            setTimer(20); // Reset timer for new level
            return prev;
          }
          return prev.slice(0, -1); // Remove the last tile
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [removeTiles]);

  // Effect to handle countdown timer
  useEffect(() => {
    if (timer === 0) {
      setGameOver(true); // Game over if timer reaches 0
    }
    if (!gameOver && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, gameOver]);

  // Reset game on game over
  const resetGame = () => {
    setGridSize(3);
    setClickedTiles([]);
    setRemoveTiles(false);
    setLevel(1);
    setTimer(20);
    setGameOver(false);
  };

  // Render the tiles
  const renderTiles = () => {
    const totalTiles = gridSize * gridSize;
    return Array.from({ length: totalTiles }, (_, index) => (
      <div
        key={index}
        style={{
          width: `${300 / gridSize}px`,
          height: `${300 / gridSize}px`,
          margin: "2px",
          backgroundColor: clickedTiles.includes(index) && index !== centerTile ? "green" : "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: index === centerTile ? "not-allowed" : "pointer",
          border: "1px solid #aaa",
        }}
        onClick={() => handleTileClick(index)}
      >
        {index === centerTile ? "X" : ""}
      </div>
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#eef2f3",
      }}
    >
      <h1>Grid Lights Game</h1>
      <div style={{ marginBottom: "20px" }}>
        <p>Level: {level}</p>
        <p>Timer: {timer}s</p>
      </div>

      {gameOver ? (
        <div style={{ textAlign: "center" }}>
          <h2>Game Over!</h2>
          <button onClick={resetGame} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Restart
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "fit-content",
            border: "2px solid #333",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#fff",
          }}
        >
          {renderTiles()}
        </div>
      )}
    </div>
  );
}

export default GridLightsGame;
