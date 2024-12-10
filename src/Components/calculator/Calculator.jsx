import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    "C",
    "<-",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
    "%",
  ];

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch (error) {
        setResult("error");
      }
    } else if (value == "C") {
      setInput("");
      setResult("");
    } else if (value === "<-") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    // this will perfectly align in center with any addtional css (you can delete all app.css and index.css)
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full height of the viewport
      }}
    >
      <div
        style={{ width: "300px", marging: "50px auto", textAlign: "center" }}
      >
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid black",
            backgroundColor: "#f0f0f0",
            textAlign: "right",
          }}
        >
          <div style={{ fontSize: "20px", minHeight: "30px" }}>
            {input || "0"}
          </div>

          <div style={{ fontSize: "16px", color: "gray" }}>
            {result != "" ? `=${result}` : ""}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "10px",
          }}
        >
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              style={{
                padding: "15px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#e6e6e6",
                cursor: "pointer",
              }}
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
