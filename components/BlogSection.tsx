// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';
import { BlogPost } from '../types';
import BlogPostCard from './BlogPostCard';

/**
 * @interface BlogSectionProps
 * @description Define as propriedades para o componente BlogSection.
 */
interface BlogSectionProps {
  posts: BlogPost[]; // Array de postagens de blog a serem exibidas.
  onPostClick: (post: BlogPost) => void; // Função chamada ao clicar em uma postagem.
}

/**
 * @component BlogSection
 * @description Exibe uma seção com as últimas postagens do blog.
 */
const BlogSection: React.FC<BlogSectionProps> = ({ posts, onPostClick }) => {
  return (
    <section id="blog" className="py-20 bg-gray-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Blog & Notícias</h2>
          <p className="mt-4 text-lg text-gray-600">Fique por dentro das últimas novidades e artigos da nossa equipe.</p>
        </div>
        {/* Grade para exibir os cards de postagens do blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} onClick={() => onPostClick(post)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
