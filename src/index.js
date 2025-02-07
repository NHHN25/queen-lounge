// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// src/index.js
import './index.css';

// Import Bootstrap CSS if not already imported (from Step 1)
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
