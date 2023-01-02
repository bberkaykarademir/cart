import { useEffect, useState } from "react";
import React from "react";
import data from "./data";
import CartItem from "./CartItem";

const App = () => {
  const [cart, setCart] = useState(data);
  const increase = (id, value) => {
    setCart(
      cart.map((item) => (item.id == id ? { ...item, amount: value } : item))
    );
  };
  const decrease = (id, value) => {
    setCart(
      cart.map((item) => (item.id == id ? { ...item, amount: value } : item))
    );
  };
  const remove = (id) => {
    setCart(
      cart.map((item) => (item.id == id ? { ...item, amount: 0 } : item))
    );
  };
  const clear=()=>{
    setCart([])
  }
  return (
    <div className="container">
      <h1>Your Bag</h1>
      {cart.map((item, index) => {
        return (
          <CartItem remove={remove} decrease={decrease} increase={increase} key={index} item={item} id={index} />
        );
      })}
      <div className="line"></div>
      <div className="totalsec">
        <p>Total</p>
        <p className="total">
          {cart
            .reduce((acc, item) => acc + item.amount * item.price, 0)
            .toFixed(2)}
          $
        </p>
      </div>
      <button onClick={clear} className="clear">CLEAR CART</button>
    </div>
  );
};

export default App;
