// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';
import { BlogPost } from '../types';
import { CloseIcon, TwitterIcon, FacebookIcon, LinkedInIcon } from './icons';

/**
 * @interface BlogPostModalProps
 * @description Define as propriedades para o componente BlogPostModal.
 */
interface BlogPostModalProps {
  post: BlogPost | null; // A postagem a ser exibida, ou null se o modal estiver fechado.
  onClose: () => void; // Função para fechar o modal.
}

/**
 * @component BlogPostModal
 * @description Exibe o conteúdo completo de uma postagem de blog em um modal.
 */
const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  // Não renderiza nada se nenhuma postagem for selecionada.
  if (!post) return null;

  return (
    // Overlay do modal
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Conteúdo do modal */}
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900">
            <CloseIcon />
          </button>
          {/* Cabeçalho do post */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{post.title}</h2>
          <p className="text-gray-500 mb-6">{post.author} - {post.date}</p>
          {/* Conteúdo do post */}
          <div className="prose prose-lg text-gray-700 max-w-none">
            {post.content}
          </div>
          {/* Seção de compartilhamento */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
            <p className="text-gray-900 font-semibold">Compartilhe:</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors"><FacebookIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Estilos para a animação de entrada */}
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogPostModal;
