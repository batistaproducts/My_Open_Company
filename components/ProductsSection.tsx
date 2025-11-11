// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

/**
 * @interface ProductsSectionProps
 * @description Define as propriedades que o componente ProductsSection recebe.
 */
interface ProductsSectionProps {
  products: Product[]; // Array de produtos a serem exibidos.
  onCardClick: (product: Product) => void; // Função chamada ao clicar em um card de produto.
  searchTerm: string; // O termo de busca atual.
  setSearchTerm: (term: string) => void; // Função para atualizar o termo de busca.
  priceFilter: string; // O filtro de preço atual ('all', 'free', 'paid').
  setPriceFilter: (filter: 'all' | 'free' | 'paid') => void; // Função para atualizar o filtro de preço.
}

/**
 * @component ProductsSection
 * @description Exibe a lista de produtos, juntamente com os controles de busca e filtro.
 */
const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onCardClick, searchTerm, setSearchTerm, priceFilter, setPriceFilter }) => {
  return (
    <section id="products" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Nossos Produtos</h2>
          <p className="mt-4 text-lg text-gray-600">Uma coleção de ferramentas projetadas para impulsionar sua criatividade e produtividade.</p>
        </div>

        {/* Controles de busca e filtro */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
          />
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg border border-gray-200">
            <button onClick={() => setPriceFilter('all')} className={`px-4 py-1 rounded-md text-sm font-medium transition ${priceFilter === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}>Todos</button>
            <button onClick={() => setPriceFilter('free')} className={`px-4 py-1 rounded-md text-sm font-medium transition ${priceFilter === 'free' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}>Gratuitos</button>
            <button onClick={() => setPriceFilter('paid')} className={`px-4 py-1 rounded-md text-sm font-medium transition ${priceFilter === 'paid' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}>Pagos</button>
          </div>
        </div>

        {/* Grade de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.length > 0 ? (
            // Mapeia e renderiza um ProductCard para cada produto na lista filtrada.
            products.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => onCardClick(product)} />
            ))
          ) : (
            // Mensagem exibida quando nenhum produto corresponde à busca/filtro.
            <p className="text-gray-500 text-center col-span-full">Nenhum produto encontrado. Tente ajustar sua busca.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
