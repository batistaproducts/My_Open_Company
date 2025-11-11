import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  onClick: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-700/50 flex flex-col"
    >
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-400 mb-2">{post.date} - {post.author}</p>
        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
        <p className="text-gray-300 text-base mb-4 flex-grow">{post.summary}</p>
        <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">
          Leia mais &rarr;
        </span>
      </div>
    </div>
  );
};

export default BlogPostCard;
