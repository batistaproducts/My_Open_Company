// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';

/**
 * @component Footer
 * @description Renderiza o rodapé simples da página com informações de direitos autorais.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} My Open Company. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
