import React from 'react';
import './stylecard.css';

const CardProduct = ({ products, onProductClick }) => {
  return (
    <div className='block_menu_item'>
      {products.map((productGroup, index) => (
        <div key={index} className='product_group'>
          <h3 className='block_menu_item_title'>
            <span className='section_heading'>{productGroup.title}</span>
          </h3>
          <div className='flex_wrap display_flex menu_lists menu_list_collection'>
            {productGroup.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='menu_item'
                onClick={() => onProductClick(item)} 
              >
                <div className='menu_item_image'>
                  <a href="!#" onClick={(e) => e.preventDefault()}>
                    <img src={item.image} alt={item.name} />
                  </a>
                </div>
                <div className='menu_item_info'>
                  <h3>
                    <a href="!#" onClick={(e) => e.preventDefault()}>{item.name}</a>
                  </h3>
                  <div className='price_product_item'>{item.price} đ</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
