import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Product({ products, setCart, cart }) {
  let navigate = useNavigate();
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
    if (e.target.value === "" || parseInt(e.target.value)<0) {
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
      cartCopy[index].quantity = parseInt(cartItem.quantity) + parseInt(product.quantity);
      setCart(cartCopy);
    }
  }
  function navigateToProducts() {
    navigate("/products");
  }

  return (
    <div className= "productDetail">
      <form className="productForm" onSubmit={onFormSubmit}>
        <p className= "productDetailName">{product && product.name}</p>
        <img src={`../${product.img}`} alt="" />
        <p className="productDetailPrice">Price: {product && product.quantity * product.price}$</p>
        <span className="productDetailQuantity">Quantity</span>
        <div>
          <button type="button" onClick={buttonClick} className = "productDetailButtons">
            -
          </button>
          <input
            type="number"
            onChange={handleQuantityChange}
            value={product.quantity}
            className = "projectDetailInput"
          />
          <button type="button" onClick={buttonClick} className = "productDetailButtons">
            +
          </button>
        </div>
        <button className = "productDetailSubmit" type="submit">Add to Cart</button>
      </form>
      <button onClick={navigateToProducts} className = "projectDetailBack">Back</button>
    </div>
  );
}
