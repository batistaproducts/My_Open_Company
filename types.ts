// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

/**
 * @interface Product
 * @description Define a estrutura de dados para um produto.
 * Isso garante que todos os objetos de produto na aplicação tenham as mesmas propriedades e tipos.
 */
export interface Product {
  id: number; // Identificador único do produto.
  title: string; // Título do produto.
  description: string; // Descrição curta exibida nos cards.
  longDescription: string; // Descrição longa exibida no modal.
  imageUrl: string; // URL da imagem do produto.
  url: string; // URL para acessar o produto.
  isPaid: boolean; // Flag para indicar se o produto é pago.
  hasDonation: boolean; // Flag para indicar se o produto aceita doações.
  category: 'Development' | 'Design' | 'Productivity'; // Categoria do produto.
}

/**
 * @interface BlogPost
 * @description Define a estrutura de dados para uma postagem de blog.
 * Garante consistência para todos os objetos de postagem de blog.
 */
export interface BlogPost {
  id: number; // Identificador único da postagem.
  title: string; // Título da postagem.
  summary: string; // Resumo curto exibido nos cards do blog.
  content: string; // Conteúdo completo da postagem.
  imageUrl: string; // URL da imagem da postagem.
  author: string; // Autor da postagem.
  date: string; // Data de publicação.
}
