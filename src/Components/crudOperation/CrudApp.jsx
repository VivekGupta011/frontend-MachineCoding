import React, { useState } from 'react';

const CrudApp = () => {
  // Initial state for items and input fields
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Handle input change for new item
  const handleNewItemChange = (e) => setNewItem(e.target.value);

  // Add a new item (Create operation)
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem(''); // Clear input field
    }
  };

  // Handle delete item (Delete operation)
  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Handle editing an item (Update operation)
  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  // Save the edited item
  const handleSaveEdit = () => {
    const updatedItems = [...items];
    updatedItems[editIndex] = editValue;
    setItems(updatedItems);
    setEditIndex(null); // Clear edit state
  };

  // Handle input change for editing
  const handleEditChange = (e) => setEditValue(e.target.value);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h3>Next.js CRUD App</h3>

      {/* Create Section */}
      <div>
        <input
          type="text"
          value={newItem}
          onChange={handleNewItemChange}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Read and Edit Section */}
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {/* If editing this item, show input field */}
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {item}
                <button
                  style={{ marginLeft: '10px' }}
                  onClick={() => handleEditItem(index)}
                >
                  Edit
                </button>
                <button
                  style={{ marginLeft: '10px' }}
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
