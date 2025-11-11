// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';
import { LinkedInIcon } from './icons';

/**
 * @component FounderSection
 * @description Apresenta informações sobre o fundador da empresa, incluindo foto, nome, cargo e um link para o LinkedIn.
 */
const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Foto do fundador */}
          <div className="flex-shrink-0">
            <img 
              className="h-40 w-40 rounded-full object-cover ring-4 ring-blue-500/50" 
              src="https://media.licdn.com/dms/image/v2/D4D03AQGV8YW6CLV-xw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673022348596?e=1764201600&v=beta&t=Hq0WoSPuBKdQmG2gdce9Zp2dDf6zexjoQ6vME6aYdV8" 
              alt="Antonio Batista"
            />
          </div>
          {/* Informações textuais */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Antonio Batista</h2>
            <p className="text-xl text-blue-600 font-medium mt-1 mb-4">Fundador & Desenvolvedor Principal</p>
            <p className="text-gray-600 max-w-2xl mb-6">
              Apaixonado por tecnologia e inovação, Antonio dedica-se a criar ferramentas que resolvem problemas reais. Com um foco em código aberto e colaboração, ele lidera a visão da My Open Company para construir um ecossistema de software acessível e poderoso.
            </p>
            <a 
              href="https://LinkedIn.com/in/antonio-batista1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-300"
            >
              <LinkedInIcon />
              Conecte-se no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
