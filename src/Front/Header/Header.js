import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ openMenuHandler, menuIsOpen, cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Paeonia Beauty
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <NavLink to="/" className="nav-home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-products">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart" className="cart">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="cart-number">
                <sup> {cartItems.lenght === 0 ? "" : cartItems.length} </sup>
              </span>
            </NavLink>
          </li>
          <li>
            <button className="menu-button" onClick={openMenuHandler}>
              {menuIsOpen ? (
                <span class="material-symbols-outlined">close</span>
              ) : (
                <span class="material-symbols-outlined">menu</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
