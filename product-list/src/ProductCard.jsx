import React from "react"

const ProductCard = ({image, title, description, price}) => {
    return (
        <div
        style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
            <h2>{title}</h2>
            <p>{price}</p>
            <img src={image} alt= {title} style={{ width: "100%", borderRadius: "10px" }} />
            <p>{description}</p>
        </div>
    )
}

export default ProductCard