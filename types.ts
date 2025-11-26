export interface Artwork {
  id: string;
  title: string;
  category: 'Oil' | 'Acrylic' | 'Watercolor' | 'Sketch' | 'Sculpture' | 'Mixed Media';
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