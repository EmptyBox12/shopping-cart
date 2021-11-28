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
//<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />

function App() {
  const products = [{}];
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
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
