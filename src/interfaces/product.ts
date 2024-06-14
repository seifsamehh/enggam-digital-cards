export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  country?: string;
  discount?: number;
  quantity?: number;
  related?: string;
}
