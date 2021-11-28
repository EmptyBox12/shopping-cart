import React from 'react'
import { useNavigate } from 'react-router';

export default function Products({products}) {
  let navigate = useNavigate();
  function navigateToDetails(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div>
      {products.map(product =>{
        return (
          <div key = {product.id} onClick = {()=> navigateToDetails(product.id)}>
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        );
      })}
    </div>
  )
}
