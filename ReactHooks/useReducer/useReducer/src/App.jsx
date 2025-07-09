import { useState,useReducer } from 'react'
import './App.css'
import data from './data.json'
function App() {
  const initialState = {
    newName:"",
    minPrice:"",
    maxPrice:"",
    newDiscount:""
  }

        const filterProducts = (state,action)=>{
    switch(action.type){
      case "name":
        return {
          ...state,
          newName:action.payload
        }
      case "Min-Price":
        return{
          ...state,
          minPrice:action.payload
        }
        case "max-price":
          return {
            ...state,
            maxPrice:action.payload
          }
        case "discount":
          return {
            ...state,
            newDiscount:action.payload
          }
        default: return state
    }
  }

  const [{newName,minPrice,maxPrice,newDiscount},dispatch] = useReducer(filterProducts,initialState);

  const sortByPriceName = (e)=>{
    dispatch({
      type:"name",
      payload:e.target.value
    })
  }
  const sortByMinPrice = (e)=>{
    dispatch({
      type:"Min-Price",
      payload:e.target.value
    })
  }
  const sortByMaxPrice = (e)=>{
    dispatch({
      type:"max-price",
      payload:e.target.value
    })
  }
  const sortByDiscount = (e)=>{
    dispatch({
      type:"discount",
      payload:e.target.value
    })
  }
  
  

    const filterByName = newName!="" ? 
    data.filter(({name})=>name.includes(newName)):data;
    const filterByMinPrice = minPrice>0 ? 
    filterByName.filter((product)=>product.price>=minPrice):filterByName;
    const filterByMaxPrice = maxPrice>0 ? 
    filterByMinPrice.filter((product)=>product.price<=maxPrice):filterByMinPrice;
    const filterByDiscount = newDiscount>0?
    filterByMaxPrice.filter(({discount})=>discount>=newDiscount):filterByMaxPrice



  return (
    <>
    <div className = "container">
      <h1>Products Filter</h1>
      <div className = "filters-panel">
        <input type = "text" placeholder = "Search By Name" onChange={sortByPriceName} />
        <input type = "number" placeholder = "Min Price" min = "0" onChange={sortByMinPrice} />
        <input type = "number" placeholder="Max Price"  min = "0" onChange = {sortByMaxPrice}/>
        <input type = "number" placeholder = "Min Discount" onChange={sortByDiscount} min = "0" />
        <button className = "filter-btn">Filter </button>
      </div>
      <div className = "product-list">

        {filterByDiscount && filterByDiscount.map((product)=>(
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
