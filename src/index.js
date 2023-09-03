import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// index.css has to be higher in hierarchy thats why you have to place it at last.
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

