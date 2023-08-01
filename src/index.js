import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Context
import MyContextProvider from './context/MyContext';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MyContextProvider>
  </React.StrictMode>
);
