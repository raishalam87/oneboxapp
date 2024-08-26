// src/components/ThemeToggle.js
import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ setTheme }) => {
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      Switch to {document.body.classList.contains('light-mode') ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeToggle;
