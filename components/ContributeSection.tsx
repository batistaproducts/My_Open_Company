// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React, { useState } from 'react';
import { GitHubIcon, HeartIcon, MessageIcon } from './icons';

/**
 * @component ContributeSection
 * @description Apresenta as diferentes formas de contribuir para a empresa/comunidade,
 * como doações, contribuição de código e envio de feedback.
 */
const ContributeSection: React.FC = () => {
    
  // Estados para controlar os valores dos campos do formulário de feedback.
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário de feedback.
  // Constrói um link 'mailto:' para abrir o cliente de e-mail padrão do usuário.
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o recarregamento da página.
    
    const subject = encodeURIComponent("Feedback - My Open Company");
    const body = encodeURIComponent(`Email do remetente: ${email}\n\nMensagem:\n${message}`);
    
    // Abre o cliente de e-mail.
    window.location.href = `mailto:antoniobatistaproducts@gmail.com?subject=${subject}&body=${body}`;

    // Limpa o formulário após a tentativa de envio.
    setEmail('');
    setMessage('');
  };
    
  return (
    <section id="contribute" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Como Contribuir</h2>
          <p className="mt-4 text-lg text-gray-600">Sua ajuda é fundamental para o crescimento do nosso ecossistema.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card de Doação */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md flex flex-col items-center text-center">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
                <HeartIcon />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Apoie-nos</h3>
            <p className="text-gray-600 mb-6 flex-grow">Sua doação nos ajuda a manter os servidores, desenvolver novos recursos e continuar oferecendo ferramentas gratuitas.</p>
            <a href="https://apoia.se/myopenboard" className="mt-auto w-full text-center bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
              Fazer uma Doação
            </a>
          </div>

          {/* Card de Contribuição Open Source */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md flex flex-col items-center text-center">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                <GitHubIcon />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Seja um Colaborador</h3>
            <p className="text-gray-600 mb-6 flex-grow">Você é um desenvolvedor? Ajude-nos a melhorar nossos produtos. Contribua com código, reporte bugs ou sugira novas funcionalidades.</p>
            <a href="#" className="mt-auto w-full text-center bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              Ver Repositórios
            </a>
          </div>

          {/* Formulário de Feedback */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md md:col-span-2 lg:col-span-1">
             <div className="flex justify-center mb-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                    <MessageIcon />
                </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Envie seu Feedback</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder="Seu email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <textarea 
                placeholder="Sua mensagem..." 
                required 
                rows={4} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
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
