import { useEffect, useState, useCallback } from "react";

function GridLights() {
  const [clickedTiles, setClickedTiles] = useState([]);
  const [isRemovingTiles, setIsRemovingTiles] = useState(false);

  // Handle tile clicks
  const handleTileClick = useCallback((index) => {
    if (index !== 4 && !clickedTiles.includes(index)) {
      const updatedTiles = [...clickedTiles, index];
      setClickedTiles(updatedTiles);

      // Start tile removal if all outer tiles are clicked
      if (updatedTiles.length === 8) {
        setIsRemovingTiles(true);
      }
    }
  }, [clickedTiles]);

  // Effect to handle tile removal
  useEffect(() => {
    let intervalId;

    if (isRemovingTiles) {
      intervalId = setInterval(() => {
        setClickedTiles((prev) => {
          if (prev.length === 0) {
            clearInterval(intervalId);
            setIsRemovingTiles(false);
            return prev;
          }
          return prev.slice(0, -1); // Remove the last tile
        });
      }, 100);
    }

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [isRemovingTiles]);

  // Render the tiles
  const renderTiles = () => {
    return Array.from({ length: 9 }, (_, index) => (
      <div
        key={index}
        style={{
          width: "100px",
          height: "100px",
          margin: "5px",
          backgroundColor: clickedTiles.includes(index) && index !== 4 ? "green" : "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: index === 4 ? "not-allowed" : "pointer",
          border: "1px solid #aaa",
        }}
        onClick={() => handleTileClick(index)}
      >
        {index === 4 ? "X" : `Tile ${index}`}
      </div>
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#eef2f3",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "330px",
          border: "2px solid #333",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#fff",
        }}
      >
        {renderTiles()}
      </div>
    </div>
  );
}

export default GridLights;
