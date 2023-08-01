import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ToggleButton = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button style={{ cursor: 'pointer' }} onClick={toggleTheme}>
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ToggleButton;
