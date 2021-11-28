import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Product({ products, setCart, cart }) {
  let { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    id: "",
    quantity: 1,
  });

  useEffect(() => {
    setProduct({
      ...products.find((item) => item.id === parseInt(id)),
      quantity: 1,
    });
  }, [id, products]);

  function buttonClick(e) {
    if (e.target.textContent === "-") {
      if (product.quantity - 1 > 0) {
        setProduct({ ...product, quantity: parseInt(product.quantity) - 1 });
      }
    } else if (e.target.textContent === "+") {
      setProduct({ ...product, quantity: parseInt(product.quantity) + 1 });
    }
  }
  function handleQuantityChange(e) {
    if (isNaN(parseInt(e.target.value))) {
      setProduct({ ...product, quantity: "" });
    } else {
      setProduct({ ...product, quantity: e.target.value });
    }
  }
  function onFormSubmit(e) {
    e.preventDefault();
    let cartItem = cart.find((item) => item.id === product.id);
    let index = cart.findIndex((item) => item.id === product.id);
    if (!cartItem) {
      setCart((prevValue) => prevValue.concat(product));
    } else if (cartItem) {
      let cartCopy = [...cart];
      cartCopy[index].quantity = cartItem.quantity + product.quantity;
      setCart(cartCopy);
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <p>{product && product.name}</p>
        <p>Price: {product && product.quantity * product.price}</p>
        <div>
          <button type="button" onClick={buttonClick}>
            -
          </button>
          <input
            type="text"
            onChange={handleQuantityChange}
            value={product.quantity}
          />
          <button type="button" onClick={buttonClick}>
            +
          </button>
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}
