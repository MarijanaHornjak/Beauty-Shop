import React from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ closeMenuHandler }) => {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/" onClick={closeMenuHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={closeMenuHandler}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" onClick={closeMenuHandler}>
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
