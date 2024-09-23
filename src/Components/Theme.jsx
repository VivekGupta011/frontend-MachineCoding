import React, { useState } from 'react';

// Inline CSS for light and dark themes
const styles = {
  container: {
    width: '90vw', // Use viewport width to ensure full width
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
};

const ThemeToggle = () => {
  // State to manage the theme mode, starting with 'light'
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}
    >
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button
        style={{
          ...styles.button,
          backgroundColor: theme === 'light' ? '#000000' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#000000',
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
