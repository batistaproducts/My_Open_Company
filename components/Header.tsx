import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-gray-900/70 border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
            <span className="text-xl font-bold text-white tracking-wider hidden sm:block">
              My Open
            </span>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <button onClick={() => scrollTo('products')} className="text-gray-300 hover:text-white transition-colors duration-300">Produtos</button>
            <button onClick={() => scrollTo('contribute')} className="text-gray-300 hover:text-white transition-colors duration-300">Contribuir</button>
            <button onClick={() => scrollTo('blog')} className="text-gray-300 hover:text-white transition-colors duration-300">Blog</button>
            <button onClick={() => scrollTo('founder')} className="text-gray-300 hover:text-white transition-colors duration-300">Fundador</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;