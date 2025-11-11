// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';
import Logo from './Logo';

/**
 * @component Header
 * @description Renderiza o cabeçalho da página, incluindo o logo e a navegação principal.
 * O cabeçalho é fixo no topo da página para fácil acesso.
 */
const Header: React.FC = () => {
  // Função para rolar suavemente até uma seção específica da página.
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e nome da empresa, clicável para voltar ao topo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
            <span className="text-xl font-bold text-gray-800 tracking-wider hidden sm:block">
              My Open
            </span>
          </div>
          {/* Navegação principal para as seções da página */}
          <nav className="hidden md:flex md:space-x-8">
            <button onClick={() => scrollTo('products')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Produtos</button>
            <button onClick={() => scrollTo('contribute')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Contribuir</button>
            <button onClick={() => scrollTo('blog')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Blog</button>
            <button onClick={() => scrollTo('founder')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Fundador</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
