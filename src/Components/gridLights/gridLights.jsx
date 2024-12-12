import { useEffect, useState } from "react";

function GridLights() {
  const [clickedTiles, setClickedTiles] = useState([]);
  const [removeTiles, setRemoveTiles] = useState(false);

  const handleClick = (i) => {
    if (i !== 4 && !clickedTiles.includes(i)) {
      setClickedTiles((prev) => {
        let newTileArray = [...prev, i];
        console.log("newTileArray", newTileArray);

        if (newTileArray.length === 8) {
          setRemoveTiles(true);
        }
        return newTileArray;
      });
    }
  };

  console.log("clickedTiles", clickedTiles);

  useEffect(() => {
    let interval;

    if (removeTiles) {
      interval = setInterval(() => {
        setClickedTiles((prev) => {
          if (prev.length === 0) {
            clearInterval(interval);
            setRemoveTiles(false);
            return prev;
          }
          let newTileArray = prev.slice(0, -1);
        //   let newTileArray = prev.pop();  we can not use pop() because ae na original array me changes karta h aur delete value return karta h
        // slice hmesag delete ke bad bad new array return karta h
          return newTileArray;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [removeTiles]);

  const renderTiles = () => {
    let cells = [];
    for (let i = 0; i < 9; i++) {
      cells.push(
        <div
          key={i}
          style={{
            width: "100px",
            height: "100px",
            margin: "5px",
            backgroundColor: clickedTiles.includes(i) && i !== 4 ? "green" : "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={() => handleClick(i)}
        >
          {`Hello ${i}`}
        </div>
      );
    }
    return cells;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "330px",
        }}
      >
        {renderTiles()}
      </div>
    </div>
  );
}

export default GridLights;
