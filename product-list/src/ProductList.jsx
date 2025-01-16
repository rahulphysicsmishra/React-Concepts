import React from "react"
import ProductCard from "./ProductCard"

const ProductList = ({products}) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {products.map((product)=>(
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductList