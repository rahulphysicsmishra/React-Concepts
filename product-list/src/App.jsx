import React from 'react'
import ProductList from './ProductList'


const products = [
  {
    id: 1,
    title: "Iphone",
    price: 50000,
    description: "Apple mobile phone",
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg",
  },
  {
    id: 2,
    title: "Macbook",
    price: 100000,
    description: "Best world class laptop by apple",
    image: "https://media.wired.com/photos/643d7e61cdba28f045ac3f59/master/pass/macbook_sec_GettyImages-1368668740.jpg",
  },
  {
    id: 3,
    title: "Bose Headset",
    price: 40000,
    description: "Bose Headset with top quality",
    image: "https://images-cdn.ubuy.co.in/653a97c611501021ed3fab72-bose-quietcomfort-ultra-wireless-noise.jpg",
  }
]

function App() {


  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <ProductList products={products} />
    </div>
  )
}

export default App
