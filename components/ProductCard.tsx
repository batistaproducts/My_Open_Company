
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-700/50 flex flex-col md:flex-row"
    >
      <img className="h-48 w-full md:h-auto md:w-48 object-cover" src={product.imageUrl} alt={product.title} />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
          <p className="text-gray-400 text-base mb-4">{product.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 pt-4">
          {product.isPaid ? (
            <span className="inline-block bg-blue-500/20 text-blue-300 rounded-full px-3 py-1 text-sm font-semibold">Pago</span>
          ) : (
            <span className="inline-block bg-green-500/20 text-green-300 rounded-full px-3 py-1 text-sm font-semibold">Gratuito</span>
          )}
          {product.hasDonation && (
            <span className="inline-block bg-yellow-500/20 text-yellow-300 rounded-full px-3 py-1 text-sm font-semibold">Apoie-nos</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
