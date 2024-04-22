import { ProductStore } from "@/interfaces/productStore";
import { create } from "zustand";

const initialState: ProductStore = {
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
};

export const useProductStore = create<ProductStore>((set, get) => ({
  ...initialState,
  addToCart: (product) => {
    const currentProducts = get().products;
    const updatedProducts = [...currentProducts, product];

    set({ products: updatedProducts });
  },
  removeFromCart: (productId: string) => {
    const currentProducts = get().products;
    const updatedProducts = currentProducts.filter((p) => p.id !== productId);
    set({ products: updatedProducts });
  },
  clearCart: () => set(initialState),
}));
