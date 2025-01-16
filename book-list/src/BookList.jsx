import React from "react"
import BookCard from "./BookCard"
import "./Book.css"

const BookList = ({books}) => {
    return (
        <div className="book-list">
            {books.map((book)=>(
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    )
}

export default BookList