import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
//components
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Products from "./components/Products";
import Cart from "./components/Cart";
//<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />

function App() {
  const products = [
    {
      name: "Britisih Shorthair",
      price: 250,
      id: 1,
    },
    {
      name: "Scottish Fold",
      price: 350,
      id: 2,
    },
  ];
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
            to="/cart"
          >
            My Cart
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={<Product products={products} setCart={setCart} cart = {cart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
