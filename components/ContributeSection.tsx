import React from 'react';
import { GitHubIcon, HeartIcon, MessageIcon } from './icons';

const ContributeSection: React.FC = () => {
    
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo seu feedback!");
    (e.target as HTMLFormElement).reset();
  };
    
  return (
    <section id="contribute" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Como Contribuir</h2>
          <p className="mt-4 text-lg text-gray-400">Sua ajuda é fundamental para o crescimento do nosso ecossistema.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card de Doação */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center">
            <div className="bg-yellow-500/20 p-4 rounded-full mb-4">
                <HeartIcon />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Apoie-nos</h3>
            <p className="text-gray-400 mb-6 flex-grow">Sua doação nos ajuda a manter os servidores, desenvolver novos recursos e continuar oferecendo ferramentas gratuitas.</p>
            <a href="#" className="mt-auto w-full text-center bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-700 transition-colors duration-300">
              Fazer uma Doação
            </a>
          </div>

          {/* Card de Contribuição Open Source */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center">
            <div className="bg-green-500/20 p-4 rounded-full mb-4">
                <GitHubIcon />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Seja um Colaborador</h3>
            <p className="text-gray-400 mb-6 flex-grow">Você é um desenvolvedor? Ajude-nos a melhorar nossos produtos. Contribua com código, reporte bugs ou sugira novas funcionalidades.</p>
            <a href="#" className="mt-auto w-full text-center bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              Ver Repositórios
            </a>
          </div>

          {/* Formulário de Feedback */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 md:col-span-2 lg:col-span-1">
             <div className="flex justify-center mb-4">
                <div className="bg-blue-500/20 p-4 rounded-full">
                    <MessageIcon />
                </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">Envie seu Feedback</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="email" placeholder="Seu email" required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Sua mensagem..." required rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;
