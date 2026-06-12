import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_ID ?? '');

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
