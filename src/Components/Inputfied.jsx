import { useState } from "react";
import "../App.css";

function Inputfied() {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  // handle input change
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value=event.target.value;
    setInputFields(values);
  };
  // add input fields
  const addInputFields = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  // remove input fields
  const removeInputFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <>
      <div>
        <h1>Dynamic Input Fields</h1>
        {/* <form> */}
          {inputFields.map((inputField, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={inputField.value}
                onChange={(event) => {
                  handleInputChange(index, event);
                }}
                placeholder={`Input ${index + 1}`}
                style={{ marginRight: "10px" }}
              />

              <button type="button" onClick={() => removeInputFields(index)}>
                Remove
              </button>
            </div>
          ))}
        {/* </form> */}
        <button
          type="button"
          onClick={addInputFields}
          style={{ marginTop: "10px" }}
        >
          Add Input
        </button>
      </div>
    </>
  );
}

export default Inputfied;
