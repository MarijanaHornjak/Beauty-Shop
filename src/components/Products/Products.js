import React from "react";
import "./Products.css";

const Products = ({ products, handleAddProduct }) => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="card">
            <div className="card-image">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <div>
                <h1>{product.name}</h1>

                <h2>{product.price}$</h2>
              </div>

              <button
                className="add-to-cart_button"
                onClick={() => handleAddProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
