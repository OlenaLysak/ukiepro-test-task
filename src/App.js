import React, { useState, useEffect } from 'react';

//Style
import styles from './App.module.css';

//Components
import ToggleButton from './components/Buttons/ToggleButton';
import List from './components/List/List';

//Context
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${styles.App} ${
        isDarkTheme ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <header className={styles.AppHeader}>Ukiepro Test Task</header>
      <ToggleButton />
      <List />
    </div>
  );
}

export default App;
