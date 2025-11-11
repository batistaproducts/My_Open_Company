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

const productsData: Product[] = [
  {
    id: 1,
    title: "My Open Board",
    description: "A collaborative open-source whiteboard for teams.",
    longDescription: "My Open Board is a powerful, real-time collaborative whiteboard designed for teams of all sizes. Brainstorm ideas, plan projects, and visualize workflows with an infinite canvas. It's free, open-source, and self-hostable, putting you in control of your data.",
    imageUrl: "https://picsum.photos/seed/myopenboard/600/400",
    url: "https://myopenboard.vercel.app",
    isPaid: false,
    hasDonation: true,
    category: 'Productivity',
  },
  {
    id: 2,
    title: "CodeSphere",
    description: "An AI-powered code snippet manager for developers.",
    longDescription: "CodeSphere revolutionizes how you manage your code snippets. With AI-driven organization and search, you can find the code you need in seconds. Sync across all your devices and collaborate with your team seamlessly. Boost your productivity and write better code, faster.",
    imageUrl: "https://picsum.photos/seed/codesphere/600/400",
    url: "#",
    isPaid: true,
    hasDonation: false,
    category: 'Development',
  },
  {
    id: 3,
    title: "PixelFlow",
    description: "A free, web-based design tool for creating stunning graphics.",
    longDescription: "PixelFlow is the ultimate free design tool for marketers, creators, and entrepreneurs. Create social media posts, presentations, posters, and more with our easy-to-use drag-and-drop interface and vast library of templates and assets.",
    imageUrl: "https://picsum.photos/seed/pixelflow/600/400",
    url: "#",
    isPaid: false,
    hasDonation: true,
    category: 'Design',
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


const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all'); // 'all', 'free', 'paid'

  const handleOpenModal = (product: Product) => setSelectedProduct(product);
  const handleCloseModal = () => setSelectedProduct(null);
  
  const handleOpenPostModal = (post: BlogPost) => setSelectedPost(post);
  const handleClosePostModal = () => setSelectedPost(null);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = priceFilter === 'all' || 
                            (priceFilter === 'free' && !product.isPaid) || 
                            (priceFilter === 'paid' && product.isPaid);
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, priceFilter]);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/40 z-0"></div>
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
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        <BlogPostModal post={selectedPost} onClose={handleClosePostModal} />
      </div>
    </div>
  );
};

export default App;
