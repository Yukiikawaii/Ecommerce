import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartDrawer from "./components/CartDrawer";
import type { Product } from "./types/productProps";
import { productApi } from "./sevices/productApi";
import { ShoppingBag } from "lucide-react";
export interface CartItem extends Product {
    quantity: number;
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-300 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white text-lg font-semibold"><ShoppingBag/></p>
        <p className="text-sm text-neutral-400">
          &copy; {year} Developed by Yukii
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App(){
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        productApi().then((data) => setProducts(data))
    }, []);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) return removeFromCart(id);
        setCart((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };
    
    const checkout = () => {
        setCart([]);
        setIsCartOpen(false);
        alert("Item checked out!")
    }
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return(
    <div className="min-h-screen flex flex-col">
        <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
        <div className="flex-1">
            <Home products={products} onAddCart={addToCart} />
        </div>
           <Footer />
        <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            checkout={checkout}
        />
    </div>
)
}