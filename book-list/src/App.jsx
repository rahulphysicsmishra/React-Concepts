import React from "react"
import BookList from "./BookList"

const books = [
  {
    id: 1,
    name: "Python Programming",
    description: "A book on how to learn python programming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyktpPq8qdbxHqk7yEaDsHa652tk-gGqP0g&s",
  },
  {
    id: 2,
    name: "Java Programming",
    description: "A book on how to learn java programming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKqb-dXwp5hJScrr8wqfeGnKDXajLnSIxew&s",
  },
]

function App() {

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      <BookList books={books} />
    </div>
  )
}

export default App
