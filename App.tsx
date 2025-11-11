// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React, { useState, useMemo } from 'react';
import { Product, BlogPost } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import FounderSection from './components/FounderSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ContributeSection from './components/ContributeSection';
import BlogSection from './components/BlogSection';
import BlogPostModal from './components/BlogPostModal';

// Dados estáticos dos produtos. Em uma aplicação real, isso viria de uma API.
const productsData: Product[] = [
  {
    id: 1,
    title: "My Open Board",
    description: "Project Board 100% GRATUITO e com a sua cara!",
    longDescription: "Chega de JIRA! Venha para o My Open Board! Um project board 100% gratuito!",
    imageUrl: "https://i.imgur.com/kZ5A73z.png",
    url: "https://myopenboard.vercel.app",
    isPaid: false,
    hasDonation: true,
    category: 'Productivity',
  },
  {
    id: 2,
    title: "Meio a Meio",
    description: "A sua ferramenta de intermediação comercial (Imóveis, veículos e bens)",
    longDescription: "Meio a Meio é a sua ferramenta definitiva para intermediação comercial, facilitando a negociação e a gestão de imóveis, veículos e outros bens. Conecte compradores e vendedores de forma segura e eficiente.",
    imageUrl: "https://picsum.photos/seed/meioameio/600/400",
    url: "#",
    isPaid: true,
    hasDonation: false,
    category: 'Productivity',
  },
  {
    id: 3,
    title: "My CV Analyser",
    description: "Analisador de CV x Vagas",
    longDescription: "O My CV Analyser é uma ferramenta inteligente que compara seu currículo com descrições de vagas de emprego. Faça o upload do seu CV e da vaga desejada para receber uma análise detalhada de compatibilidade, identificando pontos fortes e áreas para melhorar suas chances de ser contratado.",
    imageUrl: "https://picsum.photos/seed/cv-analyser/600/400",
    url: "#",
    isPaid: false,
    hasDonation: true,
    category: 'Productivity',
  },
  {
    id: 4,
    title: "DataWeave",
    description: "No-code data integration and automation platform.",
    longDescription: "Connect your apps and automate your workflows with DataWeave. Our no-code platform allows you to build complex integrations between hundreds of services without writing a single line of code. Perfect for streamlining business processes and saving valuable time.",
    imageUrl: "https://picsum.photos/seed/dataweave/600/400",
    url: "#",
    isPaid: true,
    hasDonation: false,
    category: 'Productivity',
  },
];

// Dados estáticos das postagens do blog.
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Open Source Collaboration",
    summary: "Discover how open-source is evolving and what it means for developers and companies worldwide.",
    content: "The landscape of open-source is in a constant state of flux. In this article, we delve into the emerging trends, from AI-powered code suggestions to decentralized governance models. We believe the future is more collaborative, inclusive, and powerful than ever before. Join us as we explore how My Open Company is embracing these changes to build better tools for everyone.",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
    author: "Antonio Batista",
    date: "October 26, 2023",
  },
  {
    id: 2,
    title: "Why We Believe in a Hybrid Model: Free & Paid Tools",
    summary: "A look into our philosophy of blending free, open-source software with premium, paid products.",
    content: "At My Open Company, we champion a sustainable ecosystem. This means offering powerful free tools to the community while developing premium products that fund our innovation and growth. This hybrid model allows us to support individual developers and hobbyists while providing enterprise-grade solutions for businesses. Learn more about our vision for a balanced and thriving software world.",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
    author: "Jane Doe",
    date: "October 15, 2023",
  },
];

/**
 * @component App
 * @description O componente principal que orquestra toda a aplicação.
 * Gerencia o estado global, como o produto ou post selecionado para o modal,
 * e a lógica de busca e filtro de produtos.
 */
const App: React.FC = () => {
  // Estado para controlar qual produto está selecionado para ser exibido no modal.
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // Estado para controlar qual post de blog está selecionado.
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  // Estado para o termo de busca inserido pelo usuário.
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para o filtro de preço (todos, gratuitos, pagos).
  const [priceFilter, setPriceFilter] = useState('all'); // 'all', 'free', 'paid'

  // Funções para abrir e fechar o modal de produtos.
  const handleOpenModal = (product: Product) => setSelectedProduct(product);
  const handleCloseModal = () => setSelectedProduct(null);
  
  // Funções para abrir e fechar o modal de postagens do blog.
  const handleOpenPostModal = (post: BlogPost) => setSelectedPost(post);
  const handleClosePostModal = () => setSelectedPost(null);

  // Memoiza a lista de produtos filtrados para otimizar o desempenho.
  // A lista só é recalculada quando o termo de busca ou o filtro de preço mudam.
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      // Verifica se o título ou a descrição do produto correspondem ao termo de busca (insensível a maiúsculas/minúsculas).
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      // Verifica se o produto corresponde ao filtro de preço selecionado.
      const matchesFilter = priceFilter === 'all' || 
                            (priceFilter === 'free' && !product.isPaid) || 
                            (priceFilter === 'paid' && product.isPaid);
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, priceFilter]);

  // Renderiza a estrutura da página, passando os dados e funções necessários para os componentes filhos.
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Elemento de fundo com gradiente */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-white via-blue-50 to-blue-100/60 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProductsSection 
            products={filteredProducts} 
            onCardClick={handleOpenModal}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <ContributeSection />
          <BlogSection posts={blogPostsData} onPostClick={handleOpenPostModal} />
          <FounderSection />
        </main>
        <Footer />
        {/* Modais são renderizados aqui, mas só são visíveis quando um item é selecionado. */}
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        <BlogPostModal post={selectedPost} onClose={handleClosePostModal} />
      </div>
    </div>
  );
};

export default App;