import React from 'react';
import { BlogPost } from '../types';
import BlogPostCard from './BlogPostCard';

interface BlogSectionProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts, onPostClick }) => {
  return (
    <section id="blog" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Blog & Notícias</h2>
          <p className="mt-4 text-lg text-gray-400">Fique por dentro das últimas novidades e artigos da nossa equipe.</p>
        </div>
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
