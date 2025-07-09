import { useState } from 'react'
import './App.css'
import data from './data.json'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = "container">
      <h1>Products Filter</h1>
      <div className = "filters-panel">
        <input type = "text" placeholder = "Search By Name" />
        <input type = "number" placeholder = "Min Price" min = "0" />
        <input type = "number" placeholder="Max Price" min = "0" />
        <input type = "number" placeholder = "Min Discount" min = "0" />
        <button className = "filter-btn">Filter </button>
      </div>
      <div className = "product-list">
        {data.map((product,idx)=>(
          <div className = "product-card">
            <h2>{product.name}</h2>
            <p>Price: <span className = "price">{product.price} rs</span></p>
            <p>Discount: <span className = "discount">{product.discount}%</span></p>
            </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
