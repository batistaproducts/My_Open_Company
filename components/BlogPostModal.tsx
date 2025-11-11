import React from 'react';
import { BlogPost } from '../types';
import { CloseIcon, TwitterIcon, FacebookIcon, LinkedInIcon } from './icons';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <CloseIcon />
          </button>
          <h2 className="text-4xl font-extrabold text-white mb-2">{post.title}</h2>
          <p className="text-gray-400 mb-6">{post.author} - {post.date}</p>
          <div className="prose prose-invert prose-lg text-gray-300 max-w-none">
            {post.content}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 flex justify-between items-center">
            <p className="text-white font-semibold">Compartilhe:</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>
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
