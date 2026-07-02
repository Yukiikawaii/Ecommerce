// CartDrawer.tsx
import { X, Trash2, Plus, Minus } from "lucide-react";
import type { CartItem } from "../App";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cart: CartItem[];
    onRemove: (id: number) => void;
    onUpdateQuantity: (id: number, quantity: number) => void;
}

export default function CartDrawer({ isOpen, onClose, cart, onRemove, onUpdateQuantity }: CartDrawerProps){
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Your Cart</h2>
                    <button onClick={onClose} aria-label="Close cart">
                        <X size={22} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                    {cart.length === 0 && (
                        <p className="text-gray-400 text-center mt-8">Your cart is empty</p>
                    )}

                    {cart.map((item) => (
                        <div key={item.id} className="flex gap-3 items-center">
                            <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-contain bg-purple-50 rounded-md" />
                            <div className="flex-1">
                                <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                                <p className="text-purple-600 font-semibold text-sm">${item.price}</p>

                                <div className="flex items-center gap-2 mt-1">
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                                        <Minus size={14} />
                                    </button>
                                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={14} />
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => onRemove(item.id)} aria-label="Remove item">
                                <Trash2 size={18} className="text-gray-400 hover:text-red-500" />
                            </button>
                        </div>
                    ))}
                </div>

                {cart.length > 0 && (
                    <div className="border-t p-4">
                        <div className="flex justify-between mb-4 font-semibold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}