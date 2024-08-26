// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Onebox from './components/Onebox';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <ThemeToggle setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onebox" element={<Onebox />} />
      </Routes>
    </div>
  );
}

export default App;
