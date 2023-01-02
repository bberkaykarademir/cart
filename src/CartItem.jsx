import React from "react";

const CartItem = ({ item, id, increase, decrease, remove }) => {
  var value = item.amount;
  if (item.amount > 0) {
    return (
      <div className="unique">
        <div className="productsec">
          <img src={item.img} />
          <div className="details">
            <h4>{item.title}</h4>
            <p className="price">${(item.price * item.amount).toFixed(2)}</p>
            <button
              onClick={() => {
                remove(id, value);
              }}
              className="remove"
            >
              remove
            </button>
          </div>
        </div>
        <div className="amountsec">
          <button
            onClick={() => {
              if (value < 15) {
                value++;
                increase(id, value);
              }
            }}
            className="amountbutton"
          >
            +
          </button>
          <p className="amount">{item.amount}</p>
          <button
            onClick={() => {
              value--;
              decrease(id, value);
            }}
            className="amountbutton"
          >
            -
          </button>
        </div>
      </div>
    );
  }
};

export default CartItem;
