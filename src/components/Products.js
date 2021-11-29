import React from 'react'
import { useNavigate } from 'react-router';

export default function Products({products}) {
  let navigate = useNavigate();
  function navigateToDetails(id) {
    navigate(`/products/${id}`);
  }
  
  return (
    <div className = "productPage">
      {products.map(product =>{
        return (
          <div className = "product" key = {product.id} onClick = {()=> navigateToDetails(product.id)}>
            <span className = "productsTitle">{product.name}</span>
            <img src= {product.img} alt="cat" />
            <span>{product.price}$</span>
          </div>
        );
      })}
    </div>
  )
}
