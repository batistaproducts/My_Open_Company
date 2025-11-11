// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';
import { BlogPost } from '../types';

/**
 * @interface BlogPostCardProps
 * @description Define as propriedades para o componente BlogPostCard.
 */
interface BlogPostCardProps {
  post: BlogPost; // O objeto de postagem a ser exibido.
  onClick: () => void; // Função a ser chamada quando o card é clicado.
}

/**
 * @component BlogPostCard
 * @description Renderiza um card de visualização para uma única postagem de blog.
 */
const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200 flex flex-col"
    >
      {/* Imagem de destaque da postagem */}
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
      <div className="p-6 flex flex-col flex-grow">
        {/* Metadados da postagem (data e autor) */}
        <p className="text-sm text-gray-500 mb-2">{post.date} - {post.author}</p>
        {/* Título e resumo */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-base mb-4 flex-grow">{post.summary}</p>
        {/* Link para ler mais */}
        <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
          Leia mais &rarr;
        </span>
      </div>
    </div>
  );
};

export default BlogPostCard;
