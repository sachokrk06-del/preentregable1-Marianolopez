import React from 'react'
import {getProduct} from "../../data/data.js"
import { useState, useEffect } from 'react'

const ItemListContainer = ({saludo}) => {

  const [Product, setProduct] = useState([])

  useEffect(() =>{
    getProduct()
      .then((data)=>{
        setProduct(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h2>{saludo}</h2>

      {Product.map((Product)=>(
        <div key={Product.id}>
          <p>{Product.name}</p>
          <p>stock: {Product.stock}</p>
        </div>
      ))}

    </div>
  )
}

export default ItemListContainer