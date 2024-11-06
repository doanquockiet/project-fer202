import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory, setType } from "../../redux/store/menuSlice";
import style from "./style.module.css";
import CardProduct from "../../components/CardProduct";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import menuData from "../../data/dataMenu";

const PageMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCategory, selectedType, products } = useSelector((state) => state.menu);

  const handleCategoryClick = (index) => {
    dispatch(setCategory(index));
  };

  const handleTypeClick = (typeIndex) => {
    dispatch(setType(typeIndex));
  };

  const handleProductClick = (product, relatedProducts) => {
    navigate("/detail", { state: { product, relatedProducts } });
  };

  return (
    <div className={style.collection_wrap}>
      <div className="container">
        <div>
          <Header />
        </div>
        <div className={`row ${style.row}`}>
          <div className={`col-md-3 ${style.boder_left}`}>
            <aside className={style.sidebar_menu}>
              <ul className={style.ul_listnone}>
                <li>
                  <span
                    className={`${style.menu_scroll_link} ${selectedCategory === null ? style.active : ""
                      }`}
                    onClick={() => handleCategoryClick(null)}
                    role="button"
                  >
                    Tất Cả
                  </span>
                </li>
                {menuData.categories.map((item, index) => (
                  <li key={index}>
                    <span
                      className={`${style.menu_scroll_link} ${selectedCategory === index ? style.active : ""
                        }`}
                      onClick={() => handleCategoryClick(index)}
                      role="button"
                    >
                      {item.name}
                    </span>
                    {selectedCategory === index && (
                      <ul className={`${style.menu_type} ${style.ul_listnone}`}>
                        {item.types.map((type, typeIndex) => (
                          <li key={typeIndex}>
                            <span
                              className={`${style.menu_type_link} ${selectedType === typeIndex ? style.activeType : ""
                                }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTypeClick(typeIndex);
                              }}
                              role="button"
                            >
                              {type.type}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <div className={`col-md-9`}>
            <CardProduct products={products} onProductClick={handleProductClick} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PageMenu;
