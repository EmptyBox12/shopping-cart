import React from "react";

export default function Cart({ cart, setCart }) {
  function deleteItem(item) {
    let newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
  }
  function handleQuantityChange(item, e) {
    let newCart = [...cart];
    let index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (e.target.value === "" || parseInt(e.target.value) < 0) {
      newCart[index].quantity = "";
      setCart(newCart);
    } else {
      newCart[index].quantity = e.target.value;
      setCart(newCart);
    }
  }
  function clickButton(item, e) {
    let newCart = [...cart];
    let index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (e.target.textContent === "-") {
      if (item.quantity - 1 > 0) {
        newCart[index].quantity -= 1;
        setCart(newCart);
      }
    } else if (e.target.textContent === "+") {
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  }

  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={() => deleteItem(item)}>Remove</button>
            <img src={item.img} alt="" />
            Name:{item.name}
            Quantitiy:{item.quantity}
            Price: {item.price * parseInt(item.quantity) || 0}
            <button onClick={(e) => clickButton(item, e)}>-</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item, e)}
            />
            <button onClick={(e) => clickButton(item, e)}>+</button>
          </div>
        );
      })}
    </div>
  );
}
