
import React from 'react';
import { Product } from '../types';
import { CloseIcon } from './icons';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row transform transition-transform duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-1/2 w-full">
            <img src={product.imageUrl} alt={product.title} className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>
        <div className="p-8 md:w-1/2 w-full relative flex flex-col">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <CloseIcon />
          </button>
          <h2 className="text-3xl font-bold text-white mb-4">{product.title}</h2>
          <p className="text-gray-300 mb-6 flex-grow">{product.longDescription}</p>
          <div className="mt-auto pt-6">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Acessar
            </a>
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

export default ProductModal;
