import type { Product } from "../types/productProps";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
    product: Product;
    onAddCart: () => void;
};

export default function ProductCard({ product, onAddCart }: ProductCardProps){
    return(
        <div className="h-full">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col group">
                
                <div className="overflow-hidden aspect-square bg-purple-50">
                    <img 
                        src={product.images[0]} 
                        alt={product.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="p-4 flex flex-col flex-1">
                    <h1 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-1 mb-2">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-500">{product.rating}</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2">
                        <p className="text-lg font-bold text-purple-600">
                            ${product.price}
                        </p>

                        <button 
                            onClick={onAddCart}
                            className="flex items-center gap-1 bg-purple-500 hover:bg-purple-600 text-white text-xs font-medium px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer"
                        >
                            <ShoppingCart size={14} />
                            Add
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}