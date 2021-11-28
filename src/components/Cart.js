import React from 'react'

export default function Cart({cart, setCart}) {
  return (
    <div>
      {cart.map((item) => {
        return (
          <div key ={item.id}>
            Name:{item.name} 
            Quantitiy:{item.quantity}
            Price: {item.price*parseInt(item.quantity)}
          </div>
        );
      })}
    </div>
  )
}
