import React from "react";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import { Route, Routes } from "react-router-dom";

const AllRoutes = ({
  products,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearCart,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/products"
          exact
          element={
            <Products products={products} handleAddProduct={handleAddProduct} />
          }
        />
        <Route path="/contact" exact element={<Contact />} />

        <Route
          path="/cart"
          exact
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleClearCart={handleClearCart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
