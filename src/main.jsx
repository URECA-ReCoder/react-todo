import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../src/index.css';
import TodoList from './Pages/TodoList.jsx';

createRoot(document.getElementById('root')).render(<TodoList />);
