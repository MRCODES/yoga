import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import Main from 'src/pages/Home/Main.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

