import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css'; // Normalize.css import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
