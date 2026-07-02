import ProductCard from "./ProductCard";
import type { Product } from "../types/productProps";
interface productListProps {
    products: Product[];
    onAddCart: (product: Product) => void;
};

export default function ProductList({products, onAddCart}: productListProps){
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (    
                <ProductCard
                key={product.id}
                product={product}
                onAddCart={() => onAddCart(product)}
                />
            ))}
        </div>
    )
}