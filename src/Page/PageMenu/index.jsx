import { useState } from 'react';
import menuData from '../../data/dataMenu';
import style from './style.module.css';

const PageMenu = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const [activeType, setActiveType] = useState(null);

    const showCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
        setActiveType(null); // Reset activeType when changing category
    };

    const handleTypeClick = (typeIndex) => {
        setActiveType(typeIndex);
    };

    return (
        <div className={style.collection_wrap}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3">
                        <aside className={style.sidebar_menu}>
                            <ul className={style.ul_listnone}>
                                <li>
                                    <a
                                        className={`${style.menu_scroll_link} ${openCategory === null ? style.active : ''}`}
                                        href="javascript:void(0)"
                                        onClick={() => showCategory(null)} // Show all categories when clicked
                                    >
                                        Tất Cả
                                    </a>
                                </li>
                                {menuData.categories && menuData.categories.length > 0 &&
                                    menuData.categories.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                className={`${style.menu_scroll_link} ${openCategory === index ? style.active : ''}`}
                                                onClick={() => showCategory(index)}
                                            >
                                                {item.name}
                                            </a>
                                            {openCategory === index && (
                                                <ul className={`${style.menu_type} ${style.ul_listnone}`}>
                                                    {item.types && item.types.map((type, typeIndex) => (
                                                        <li key={typeIndex}>
                                                            <a
                                                                className={`${style.menu_type_link} ${activeType === typeIndex ? style.activeType : ''}`}
                                                                onClick={(e) => {
                                                                    e.stopPropagation(); // Prevent the event from bubbling up to the category
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
                    <div className="col-md-9">
                        aaaaaaaaaa
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageMenu;
