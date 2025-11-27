export interface Artwork {
  id: string;
  title: string;
  category: 'Wildlife' | 'Abstract' | 'Botanical' | 'Portrait';
  price: number;
  description: string;
  imageUrl: string;
  dimensions: string;
  year: string;
  isSold?: boolean;
  available?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  imageUrl?: string;
}

export interface CartItem extends Artwork {
  quantity: number;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  time?: string;
  location?: string;
  description?: string;
  type?: 'exhibition' | 'workshop' | 'open-studio' | 'sale' | 'other';
}