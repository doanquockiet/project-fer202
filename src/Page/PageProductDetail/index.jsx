import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import menuData from "../../data/dataMenu";
import "./style.css";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import SanPhamLQ from "../../components/SPLienQuan";

const PageDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [selectSize, setSelectSize] = useState("");
  const [selectToppings, setSelectToppings] = useState([]);
  const [sanPhamLienQuan, setSanPhamLienQuan] = useState([]);

  useEffect(() => {
    if (product) {
      const timLienquan = () => {
        const related = [];
        menuData.categories.forEach((category) => {
          category.types.forEach((type) => {
            if (type.items.some((item) => item.id === product.id)) {
              related.push(...type.items.filter((item) => item.id !== product.id));
            }
          });
        });
        setSanPhamLienQuan(related.slice(0, 5));
      };
      timLienquan();
    }
  }, [product]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleSizeClick = (size) => {
    setSelectSize(size);
  };

  const handleToppingClick = (topping) => {
    setSelectToppings((prevToppings) =>
      prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping)
        : [...prevToppings, topping]
    );
  };

  return (
    <>
      <Header />
      <div className="container d-flex mt-3">
        <div className="product-img col-md-6">
          <img src={product.image} alt={product.name} />
          <div className="thumbnail-img thnai mt-3">
            <img src={product.image} alt={`${product.name} thumbnail`} />
          </div>
        </div>

        <div className="product-info col-md-6">
          <h4>{product.name}</h4>
          <p className="price-product">{product.price} đ</p>

          <div className="choose-size">
            <p>Chọn size (bắt buộc)</p>
            <div className="option-size d-flex">
              {product.size.map((size, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeClick(size)}
                  className={selectSize === size ? "active" : ""}
                >
                  {size} + {index === 0 ? "0 đ" : index === 1 ? "6.000 đ" : "16.000 đ"}
                </button>
              ))}
            </div>
          </div>

          <div className="choose-topping">
            <p>Chọn Topping</p>
            <div className="option-topping">
              <button
                onClick={() => handleToppingClick("caramel")}
                className={selectToppings.includes("caramel") ? "active" : ""}
              >
                Sốt Caramel + 10.000 đ
              </button>
              <button
                onClick={() => handleToppingClick("espresso")}
                className={selectToppings.includes("espresso") ? "active" : ""}
              >
                Shot Espresso + 10.000 đ
              </button>
              <button
                onClick={() => handleToppingClick("pearl")}
                className={selectToppings.includes("pearl") ? "active" : ""}
              >
                Trân Châu Trắng + 10.000 đ
              </button>
            </div>
          </div>

          <div className="button-order">
            <button>Đặt Giao Tận Nơi</button>
          </div>
        </div>
      </div>

      <div className="motasanpham container">
        <hr className="hr" />
        <h3>Mô tả sản phẩm</h3>
        <p>{product.description}</p>
        <hr className="hr2" />
      </div>
      <SanPhamLQ dataLqs={sanPhamLienQuan} />
      <Footer />
    </>
  );
};

export default PageDetail;
