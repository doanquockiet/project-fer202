import React from "react";
import products from "../../data/bestseller.js";
import "./style.css";

const BestSeller = () => {
  const bestSellers = products.filter((product) => product.isBestSeller);
  const bannerProducts = bestSellers.filter(
    (product) => product.id === 1 || product.id === 2
  );

  return (
    <div className="bestseller container  ">
      <div className="top-row">
        <div className="banner">
          <img
            src="assets/banner_seller.jpg"
            alt="Banner"
            className="banner-image"
          />
        </div>
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
        {bestSellers
          .filter((product) => product.id !== 1 && product.id !== 2)
          .map((product) => (
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
