import React from "react"
import ProductCard from "./ProductCard"

const ProductList = ({products}) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {products.map((product)=>(
                <ProductCard key={product.id} {...product} /> // Instead of explicitly listing each property, the spread operator does it automatically, making your code shorter and cleaner.
            ))}
        </div>
    )
}

export default ProductList