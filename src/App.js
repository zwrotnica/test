import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListView from "./pages/ListView";
import CheckoutView from "./pages/CheckoutView";
import { useSelector } from "react-redux";

export default function App() {
  const basket = useSelector((state) => state.basket.value);

  return (
    <div className="App">
      <Router>
        <nav>
          <div>
            <Link to="/">All items</Link>
          </div>
          <div>
            <Link to="/checkout">Basket ({basket.length})</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/checkout" element={<CheckoutView />} />
        </Routes>
      </Router>
    </div>
  );
}
