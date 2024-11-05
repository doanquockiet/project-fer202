import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const BestSeller = () => {
  const bestSellers = useSelector((state) => state.bestseller.products);

  const bannerProducts = bestSellers.filter(
    (product) => product.id === 1 || product.id === 2
  );

  const otherBestSellers = bestSellers.filter(
    (product) => product.id !== 1 && product.id !== 2
  );
  return (
    <div className="bestseller container">
      <div className="top-row">
        <NavLink className="banner" to={"/menu"}>
          <img
            src="assets/banner_seller.jpg"
            alt="Banner"
            className="banner-image"
          />
        </NavLink>
        {bannerProducts.map((product) => (
          <div key={product.id} className="banner-product-item">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="card-img-top"
            />
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.price}</p>
            <span className="badge">Best Seller</span>
          </div>
        ))}
      </div>

      <div className="bottom-row">
        {otherBestSellers.map((product) => (
          <div key={product.id} className="bestseller-item">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="card-img-top"
            />
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
