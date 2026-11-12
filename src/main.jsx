import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.querySelector('#app');

if (!rootElement) {
  throw new Error('Missing #app root element');
}

createRoot(rootElement).render(createElement(App));
