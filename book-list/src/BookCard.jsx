import React from "react"
import "./Book.css"
const BookCard = ({name, description, image }) => {
    return (
        <div className="book-card">
            <h2>{name}</h2>
            <img src={image} alt={name} className="responsive-img" />
            <p>{description}</p>
        </div>
    )
}

export default BookCard