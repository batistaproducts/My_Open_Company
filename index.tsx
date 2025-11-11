// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Encontra o elemento 'root' no HTML, que servirá como ponto de montagem para a aplicação React.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Cria a raiz da aplicação React no elemento 'root'.
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente principal 'App' dentro do 'StrictMode'.
// O StrictMode ajuda a identificar potenciais problemas na aplicação.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
