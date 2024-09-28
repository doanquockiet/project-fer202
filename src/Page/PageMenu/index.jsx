import React, { useState } from 'react';
import menuData from '../../data/dataMenu';
import style from './style.module.css';
import CardProduct from '../../components/CardProduct';

const PageMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
    setSelectedType(null);
  };

  const handleTypeClick = (typeIndex) => {
    setSelectedType(typeIndex);
  };

  const category = menuData.categories[selectedCategory] || {};
  const type = category.types ? category.types[selectedType] : {};

  // Lấy tất cả sản phẩm nếu chọn "Tất Cả" hoặc lấy sản phẩm theo loại đã chọn
  const products = selectedType !== null
    ? [{ title: type.type, items: type.items }]
    : selectedCategory !== null
      ? category.types.map((type) => ({ title: type.type, items: type.items }))
      : menuData.categories.flatMap((category) =>
          category.types.map((type) => ({ title: type.type, items: type.items }))
        );

  return (
    <div className={style.collection_wrap}>
      <div className="container">
        <div className={`row ${style.row}`}>
          <div className={`col-md-3 ${style.boder_left}`}>
            <aside className={style.sidebar_menu}>
              <ul className={style.ul_listnone}>
                <li>
                  <a
                    className={`${style.menu_scroll_link} ${selectedCategory === null ? style.active : ''}`}
                   href="!#"
                    onClick={() => handleCategoryClick(null)}
                  >
                    Tất Cả
                  </a>
                </li>
                {menuData.categories && menuData.categories.length > 0 &&
                  menuData.categories.map((item, index) => (
                    <li key={index}>
                      <a
                        className={`${style.menu_scroll_link} ${selectedCategory === index ? style.active : ''}`}
                        href="!#"
                        onClick={() => handleCategoryClick(index)}
                      >
                        {item.name}
                      </a>
                      {selectedCategory === index && (
                        <ul className={`${style.menu_type} ${style.ul_listnone}`}>
                          {item.types && item.types.map((type, typeIndex) => (
                            <li key={typeIndex}>
                              <a
                                className={`${style.menu_type_link} ${selectedType === typeIndex ? style.activeType : ''}`}
                                href="!#"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTypeClick(typeIndex);
                                }}
                              >
                                {type.type}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))
                }
              </ul>
            </aside>
          </div>
          <div className={`col-md-9`}>
            <CardProduct products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMenu;
