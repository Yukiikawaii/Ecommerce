
import { ShoppingBag, Sparkles } from "lucide-react";
import ProductList from "../components/ProductList";
import About from "./About";
import Contact from "./Contact";
import type { Product } from "../types/productProps";

interface HomeProps {
    products: Product[];
    onAddCart: (product: Product) => void;
}

export default function Home({ products, onAddCart }: HomeProps){
    return(
        <div>
    
            <section id="home" className="bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                        <Sparkles size={16} />
                        New arrivals every week
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 max-w-2xl">
                        Shop smarter, <span className="text-purple-500">not harder</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-md mb-8">
                        Discover curated products at prices that make sense.
                    </p>
                    <a 
                        href="#products"
                        className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        <ShoppingBag size={18} />
                        Shop Now
                    </a>
                </div>
            </section>

            <section id="products" className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Our Products
                </h2>
             <ProductList products={products} onAddCart={onAddCart} />
            </section>

         
            <section id="about">
                <About />
            </section>

          
            <section id="contact">
                <Contact />
            </section>
        </div>
        
    )
}