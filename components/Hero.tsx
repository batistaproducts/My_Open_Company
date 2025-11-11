// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';

/**
 * @component Hero
 * @description A seção de destaque principal da página inicial.
 * Apresenta o título principal, uma breve descrição da empresa e um botão de chamada para ação (CTA).
 */
const Hero: React.FC = () => {
  // Função que rola a página suavemente até a seção de produtos.
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título principal com destaque em gradiente */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tighter mb-6">
          Construindo o Futuro das Ferramentas{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Open Source
          </span>
        </h1>
        {/* Breve descrição da empresa */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
          My Open Company é um conglomerado de produtos e ferramentas, unindo o poder do código aberto e soluções premium para capacitar criadores, desenvolvedores e empresas.
        </p>
        {/* Botão de chamada para ação (CTA) */}
        <button 
          onClick={scrollToProducts}
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50">
          Explore nossos produtos
        </button>
      </div>
    </section>
  );
};

export default Hero;
