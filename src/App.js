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

function App() {
  const products = [
    {
      name: "Britisih Shorthair",
      price: 250,
      id: 1,
      img: "./images/britishShorthair.jpg",
    },
    {
      name: "Scottish Fold",
      price: 350,
      id: 2,
      img: "./images/scottishFold.jpg",
    },
    {
      name: "Birman",
      price: 150,
      id: 3,
      img: "./images/birman.jpg",
    },
    {
      name: "Japanese Bobtail",
      price: 100,
      id: 4,
      img: "./images/bobtail.jpg",
    },
    {
      name: "Bombay",
      price: 400,
      id: 5,
      img: "./images/bombayCat.jpg",
    },
    {
      name: "Calico",
      price: 150,
      id: 6,
      img: "./images/calico.jpg",
    },
    {
      name: "Maine Coon",
      price: 550,
      id: 7,
      img: "./images/maineCoon.jpg",
    },
    {
      name: "Munchkin",
      price: 900,
      id: 8,
      img: "./images/munchkin.jpg",
    },
    {
      name: "Persian",
      price: 450,
      id: 9,
      img: "./images/persian.jpg",
    },
    {
      name: "Ragdoll",
      price: 1000,
      id: 10,
      img: "./images/ragdoll.jpg",
    },
    {
      name: "Turkish Van",
      price: 850,
      id: 11,
      img: "./images/turkishVan.jpg",
    },
  ];
  //<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className= "titleContainer">
            <NavLink to = "/"  className={({ isActive }) => (isActive ? "title" : "title")}>Fake-PetShop</NavLink>
          </div>
          <div className= "links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/cart"
            >
              My Cart ({cart.length} items)
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={
              <Product products={products} setCart={setCart} cart={cart} />
            }
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
