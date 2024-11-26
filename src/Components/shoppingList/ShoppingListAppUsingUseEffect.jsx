import React, { useState, useEffect } from "react";
import axios from "axios";

const ShoppingListApp = () => {
  // State for the shopping list
  const [shoppingList, setShoppingList] = useState([]);

  // State for query input and suggestions
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions inside useEffect
  useEffect(() => {
    console.log("hello");
    const fetchSuggestions = async () => {
      if (query.length >= 2) {
        try {
          const response = await axios.get(
            `https://api.frontendeval.com/fake/food/${query}`
          );
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    // fetchSuggestions() // Debounce time: 500ms
    const debounceFetch = setTimeout(fetchSuggestions, 500); // Debounce time: 500ms

    return () => clearTimeout(debounceFetch); // Cleanup to prevent multiple calls  This is most important line Vivek other wise keep calling for each words text!
  }, [query]); // Dependency array includes `query`

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Add item to the shopping list
  const addItem = (item) => {
    setShoppingList((prevList) => [
      ...prevList,
      { name: item, checked: false },
    ]);
    setQuery(""); // Clear input
    setSuggestions([]); // Clear suggestions
  };

  // Toggle the checked state of an item
  const toggleCheck = (index) => {
    const newList = shoppingList.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setShoppingList(newList);
  };

  // Delete item from the shopping list
  const deleteItem = (index) => {
    setShoppingList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for items..."
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => addItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Shopping List */}
      <div>
        <ul>
          {shoppingList.map((item, index) => (
            <li
              key={index}
              className="shopping-item"
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.name}
              <button onClick={() => toggleCheck(index)}>
                {item.checked ? "✓" : "Check"}
              </button>
              <button onClick={() => deleteItem(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .App {
          font-family: Arial, sans-serif;
          max-width: 500px;
          margin: 0 auto;
        }

        input {
          padding: 10px;
          margin: 10px 0;
          width: 100%;
          box-sizing: border-box;
        }

        .suggestions {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .suggestions li {
          padding: 10px;
          cursor: pointer;
          border-bottom: 1px solid #ccc;
        }

        .suggestions li:hover {
          background-color: #f0f0f0;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        .shopping-item {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        button {
          margin-left: 10px;
          padding: 5px 10px;
        }
      `}</style>
    </div>
  );
};

export default ShoppingListApp;
