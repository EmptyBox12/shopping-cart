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
      newCart[index].quantity = parseInt(newCart[index].quantity) + 1;
      setCart(newCart);
    }
  }

  return (
    <div className="cartPage">
      <div className="cartItemsContainer">
        {cart.map((item) => {
          return (
            <div key={item.id} className="cartItem">
              <button className="removeButton" onClick={() => deleteItem(item)}>
                Remove
              </button>
              <div className="cartItemContent">
                <div className="cartItemFirst">
                  <img src={item.img} alt="" />
                  <div className="cartItemLeft">
                    <span>{item.name}</span>
                    <span className="cartItemQuantity">
                      Quantity:{item.quantity}
                    </span>
                  </div>
                </div>
                <div className="cartItemRight">
                  Price: {item.price * parseInt(item.quantity) || 0}
                  <div>
                    <button
                      className="productDetailButtons"
                      onClick={(e) => clickButton(item, e)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="projectDetailInput"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item, e)}
                    />
                    <button
                      className="productDetailButtons"
                      onClick={(e) => clickButton(item, e)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkoutContainer">
        Total: 
        {cart.reduce((acc, current) => {
          return acc + current.price * current.quantity;
        }, 0)}$
        <button className= "productDetailSubmit">Checkout</button>
      </div>
    </div>
  );
}
