import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-presentation">
        <div className="home-presentation-text">
          <h1>Paeonia Beauty</h1>
          <p>developed by dermatologists</p>
          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            incidunt repellat deleniti at necessitatibus, inventore reiciendis
            quos ipsa ex tenetur?
          </p>
        </div>
      </div>
      <div className="home-image">
        <Link to="/products" className="shop-button">
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Home;
