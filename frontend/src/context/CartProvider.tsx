import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import {
  CartContext,
  type CartItem,
  type CartProduct,
} from "./CartContext";

const CART_STORAGE_KEY = "dialac-cart-v1";

function isStoredCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Partial<CartItem>;

  return (
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0 &&
    (item.image === undefined || typeof item.image === "string") &&
    (item.code === undefined || typeof item.code === "string")
  );
}

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!storedCart) return [];

    const parsedCart: unknown = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart.filter(isStoredCartItem) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const synchronizeCart = (event: StorageEvent) => {
      if (event.key === CART_STORAGE_KEY) {
        setItems(readStoredCart());
      }
    };

    window.addEventListener("storage", synchronizeCart);
    return () => window.removeEventListener("storage", synchronizeCart);
  }, []);

  const addProduct = useCallback((product: CartProduct) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id,
      );

      if (!existingItem) {
        return [...currentItems, { ...product, quantity: 1 }];
      }

      return currentItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  }, []);

  const removeProduct = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (!Number.isFinite(quantity)) return;

    const normalizedQuantity = Math.max(0, Math.floor(quantity));

    setItems((currentItems) => {
      if (normalizedQuantity === 0) {
        return currentItems.filter((item) => item.id !== productId);
      }

      return currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: normalizedQuantity }
          : item,
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    [items],
  );

  const contextValue = useMemo(
    () => ({
      items,
      totalItems,
      totalPrice,
      addProduct,
      removeProduct,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      totalItems,
      totalPrice,
      addProduct,
      removeProduct,
      updateQuantity,
      clearCart,
    ],
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;