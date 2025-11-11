import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductsSectionProps {
  products: Product[];
  onCardClick: (product: Product) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  priceFilter: string;
  setPriceFilter: (filter: 'all' | 'free' | 'paid') => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onCardClick, searchTerm, setSearchTerm, priceFilter, setPriceFilter }) => {
  return (
    <section id="products" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Nossos Produtos</h2>
          <p className="mt-4 text-lg text-gray-400">Uma coleção de ferramentas projetadas para impulsionar sua criatividade e produtividade.</p>
        </div>

        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <div className="flex gap-2 p-1 bg-gray-800 rounded-lg">
            <button onClick={() => setPriceFilter('all')} className={`px-4 py-1 rounded-md text-sm font-medium transition ${priceFilter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Todos</button>
            <button onClick={() => setPriceFilter('free')} className={`px-4 py-1 rounded-md text-sm font-medium transition ${priceFilter === 'free' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Gratuitos</button>
            <button onClick={() => setPriceFilter('paid')} className={`px-4 py-1 rounded-md text-sm font-medium transition ${priceFilter === 'paid' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Pagos</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => onCardClick(product)} />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">Nenhum produto encontrado. Tente ajustar sua busca.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
