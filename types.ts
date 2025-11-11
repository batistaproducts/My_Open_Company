export interface Product {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  url: string;
  isPaid: boolean;
  hasDonation: boolean;
  category: 'Development' | 'Design' | 'Productivity';
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}
