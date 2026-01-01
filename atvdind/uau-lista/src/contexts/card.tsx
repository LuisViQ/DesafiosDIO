import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@cart_items_v1";

export type CartItem = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

export type AddableItem = Omit<CartItem, "quantity">;

type CartContextProps = {
  items: CartItem[];
  isReady: boolean; // true quando terminar de carregar do storage
  addItem: (item: AddableItem, qty?: number) => void;
  decreaseItem: (id: number, qty?: number) => void; // diminui quantidade (se zerar, remove)
  removeItem: (id: number) => void; // remove direto
  clearCart: () => void;
  total: number;
  itemsCount: number; // total de unidades (somando quantity)
};

const CartContext = createContext<CartContextProps | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);

  // 1) Carregar carrinho salvo ao iniciar
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as CartItem[];

          // sanitização básica (evitar crash por dados quebrados)
          if (Array.isArray(parsed)) setItems(parsed);
        }
      } catch {
        // se der ruim, só começa vazio
        setItems([]);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  // 2) Salvar sempre que items mudar (depois que estiver pronto)
  useEffect(() => {
    if (!isReady) return;

    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // falhou salvar? paciência… mas não quebra o app
      }
    })();
  }, [items, isReady]);

  const addItem = (item: AddableItem, qty: number = 1) => {
    const q = qty < 1 ? 1 : qty;

    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id);

      if (found) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + q } : p
        );
      }

      return [...prev, { ...item, quantity: q }];
    });
  };

  const decreaseItem = (id: number, qty: number = 1) => {
    const q = qty < 1 ? 1 : qty;

    setItems((prev) => {
      const next = prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - q } : p))
        .filter((p) => p.quantity > 0);

      return next;
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setItems([]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const itemsCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const value: CartContextProps = {
    items,
    isReady,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
    total,
    itemsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Hook pra facilitar uso
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>");
  return ctx;
}
