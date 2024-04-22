import { Product } from "./product";

export interface ProductStore {
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}
