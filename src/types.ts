export interface MenuItem {
  id: string;
  name: string;
  category: 'almoco' | 'pizzas' | 'bebidas' | 'drinks' | 'petiscos' | 'cafes';
  description: string;
  price?: string;
  highlight?: boolean;
  tag?: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  avatarBg?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  notes?: string;
}
