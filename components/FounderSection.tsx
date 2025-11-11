
import React from 'react';
import { LinkedInIcon } from './icons';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-xl shadow-lg border border-gray-700/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img 
              className="h-40 w-40 rounded-full object-cover ring-4 ring-blue-500/50" 
              src="https://picsum.photos/seed/founder/200/200" 
              alt="Antonio Batista"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Antonio Batista</h2>
            <p className="text-xl text-blue-400 font-medium mt-1 mb-4">Fundador & Desenvolvedor Principal</p>
            <p className="text-gray-300 max-w-2xl mb-6">
              Apaixonado por tecnologia e inovação, Antonio dedica-se a criar ferramentas que resolvem problemas reais. Com um foco em código aberto e colaboração, ele lidera a visão da My Open Company para construir um ecossistema de software acessível e poderoso.
            </p>
            <a 
              href="https://LinkedIn.com/in/antonio-batista1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300"
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
