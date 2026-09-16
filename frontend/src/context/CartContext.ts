import { createContext } from "react";

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image?: string;
  code?: string;
}

export interface CartItem extends CartProduct {
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);
