import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n'; // Import i18n configuration
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
