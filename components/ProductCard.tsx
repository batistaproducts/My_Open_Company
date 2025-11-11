// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';
import { Product } from '../types';

/**
 * @interface ProductCardProps
 * @description Define as propriedades para o componente ProductCard.
 */
interface ProductCardProps {
  product: Product; // O objeto de produto a ser exibido.
  onClick: () => void; // A função a ser chamada quando o card for clicado.
}

/**
 * @component ProductCard
 * @description Renderiza um card visual para um único produto.
 * Exibe a imagem, título, descrição e tags do produto.
 * É clicável para abrir um modal com mais detalhes.
 */
const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200 flex flex-col md:flex-row"
    >
      {/* Imagem do produto */}
      <img className="h-48 w-full md:h-auto md:w-48 object-cover" src={product.imageUrl} alt={product.title} />
      <div className="p-6 flex flex-col justify-between">
        <div>
          {/* Título e descrição */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
          <p className="text-gray-600 text-base mb-4">{product.description}</p>
        </div>
        {/* Tags de status (Pago/Gratuito, Apoie-nos) */}
        <div className="flex flex-wrap gap-2 pt-4">
          {product.isPaid ? (
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">Pago</span>
          ) : (
            <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">Gratuito</span>
          )}
          {product.hasDonation && (
            <span className="inline-block bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-semibold">Apoie-nos</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
