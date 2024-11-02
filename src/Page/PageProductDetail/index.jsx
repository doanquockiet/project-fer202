import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

const PageDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [selectSize, setSelectSize] = useState('');
  const [selectToppings, setSelectToppings] = useState([]); // Multiple toppings selection

  if (!product) {
    return <p>Product not found!</p>;
  }

  // Handle size selection
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

          {/* Size Selection */}
          <div className="choose-size">
            <p>Chọn size (bắt buộc)</p>
            <div className="option-size d-flex">
              <button
                onClick={() => handleSizeClick('small')}
                className={selectSize === 'small' ? 'active' : ''}
              >
                Nhỏ + 0 đ
              </button>
              <button
                onClick={() => handleSizeClick('medium')}
                className={selectSize === 'medium' ? 'active' : ''}
              >
                Vừa + 6.000 đ
              </button>
              <button
                onClick={() => handleSizeClick('large')}
                className={selectSize === 'large' ? 'active' : ''}
              >
                Lớn + 16.000 đ
              </button>
            </div>
          </div>

          {/* Topping Selection */}
          <div className="choose-topping">
            <p>Chọn Topping</p>
            <div className="option-topping">
              <button
                onClick={() => handleToppingClick('caramel')}
                className={selectToppings.includes('caramel') ? 'active' : ''}
              >
                Sốt Caramel + 10.000 đ
              </button>
              <button
                onClick={() => handleToppingClick('espresso')}
                className={selectToppings.includes('espresso') ? 'active' : ''}
              >
                Shot Espresso + 10.000 đ
              </button>
              <button
                onClick={() => handleToppingClick('pearl')}
                className={selectToppings.includes('pearl') ? 'active' : ''}
              >
                Trân Châu Trắng + 10.000 đ
              </button>
            </div>
          </div>

          {/* Order Button */}
          <div className="button-order">
            <button>Đặt Giao Tận Nơi</button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="motasanpham container">
        <hr className="hr" />
        <h3>Mô tả sản phẩm</h3>
        <p>{product.description}</p>
        <hr className="hr2" />
      </div>
    </>
  );
};

export default PageDetail;
