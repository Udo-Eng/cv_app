import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// This is where react is hooked to the Browser DOM 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


