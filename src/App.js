import React, { useState } from "react";
import "./App.css";
import data from "./Back/Data/Data";
import HamburgerMenu from "./Front/HamburgerMenu/HamburgerMenu";
import Header from "./Front/Header/Header";
import AllRoutes from "./Front/Routes/AllRoutes";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const closeMenuHandler = () => {
    setMenuIsOpen(false);
  };

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleClearCart = () => {
    setCartItems([]);
  };
  return (
    <div>
      <Header
        openMenuHandler={openMenuHandler}
        menuIsOpen={menuIsOpen}
        cartItems={cartItems}
      />
      {menuIsOpen && <HamburgerMenu closeMenuHandler={closeMenuHandler} />}
      <AllRoutes
        products={products}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
