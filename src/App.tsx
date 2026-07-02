// App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartDrawer from "./components/CartDrawer";
import type { Product } from "./types/productProps";
import { productApi } from "./sevices/productApi";
export interface CartItem extends Product {
    quantity: number;
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

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return(
        <div>
            <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
            <Home products={products} onAddCart={addToCart} />
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
            />
        </div>
    )
}