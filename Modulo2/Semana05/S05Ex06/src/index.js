import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//associa à div root do public/index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//no root.render manda renderizar a div e o componente App
//no React, não posso ter mais de uma tag solta, o restante é encapsulado. Aqui, a tag App está encapsulada entre </>
//react = jsx javascript parecido com xml

reportWebVitals();
