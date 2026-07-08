import { ShoppingCart, Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

type CartProps = {
    cartCount: number;
    onCartClick: () => void;
};

export default function Navbar({ cartCount, onCartClick }: CartProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("home");

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `transition-all duration-200 ${
            isActive
                ? "text-purple-500 border-b-2 border-purple-500"
                : "hover:text-purple-500"
        }`;

    const navLinks = [
        { id: "home", label: "Home", href: "#home" },
        { id: "products", label: "Products", href: "#products" },
        { id: "about", label: "About", href: "#about" },
        { id: "contact", label: "Contact", href: "#contact" }
    ];

    const handleLinkClick = (id: string) => {
        setActiveLink(id);
        setIsOpen(false);
    };

    return (
        <div className="sticky top-0 bg-purple-50 shadow-md">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between px-8 h-16">
               
                    <div className="flex flex-row">
                        <h2 className="text-purple-500 transition-all hover:scale-125 cursor-pointer">
                            <ShoppingBag size={30} />
                        </h2>
                    </div>

                    <nav className="hidden sm:flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={navLinkClass({
                                    isActive: activeLink === link.id
                                })}
                                onClick={() => handleLinkClick(link.id)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                 
                    <div className="flex gap-3">
                        <button
                            className="relative hover:scale-120 transition-all duration-200 cursor-pointer`"
                            onClick={onCartClick}
                            aria-label="View cart"
                        >
                            <ShoppingCart size={25} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full px-1">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="transition hover:scale-120 cursor-pointer sm:hidden"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

            
                {isOpen && (
                    <div className="absolute left-0 right-0 top-16 z-50 flex flex-col p-4 bg-purple-100 shadow-md sm:hidden gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={navLinkClass({
                                    isActive: activeLink === link.id
                                })}
                                onClick={() => handleLinkClick(link.id)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}