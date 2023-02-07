import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearCart,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleClearCart}>
            Clear All
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">Your Cart is empty.</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div className="cart-items-list">
            <img className="cart-items-img" src={item.image} alt={item.name} />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * {item.price}$
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">{totalPrice}$</div>
      </div>
    </div>
  );
};

export default Cart;
