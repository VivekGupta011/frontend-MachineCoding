import { useState, useEffect } from "react";

function PaginationBasic() {
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [buttonList, setButtonList] = useState([]);
  const [activePage, setActivePage] = useState(0); // Track the active page

  const DATA_TO_DISPLAY = 10;

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array.push(`Data ${i + 1}`);
    }
    let tempArray = array.slice(0, DATA_TO_DISPLAY);
    setActiveData(tempArray);

    let totalNumberOfButtons = Math.ceil(array.length / DATA_TO_DISPLAY);
    let buttonArray = [];
    for (let i = 0; i < totalNumberOfButtons; i++) {
      buttonArray.push(i);
    }

    setData(array);
    setButtonList(buttonArray);
  }, []);

  const handleClick = (index) => {
    let tempData = data.slice(
      index * DATA_TO_DISPLAY,
      index * DATA_TO_DISPLAY + DATA_TO_DISPLAY
    );
    setActiveData(tempData);
    setActivePage(index); // Update the active page
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
          width: "350px",
          border: "2px solid #333",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {activeData.map((data, index) => (
            <div
              key={index}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              {data}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {buttonList.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              style={{
                padding: "5px 10px",
                border: item === activePage ? "2px solid #007BFF" : "1px solid #333",
                borderRadius: "5px",
                backgroundColor: item === activePage ? "#007BFF" : "#f0f0f0",
                color: item === activePage ? "#fff" : "#333",
                cursor: "pointer",
              }}
            >
              {item + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaginationBasic;
