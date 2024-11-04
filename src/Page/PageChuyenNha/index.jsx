import React from "react";
import "./style.css";
import chuyenNhaData from "../../data/chuyennha.js";

const ChuyenNha = () => {
  return (
    <div className="container chuyennha">
      <div
        className="title container"
        style={{ display: "block", textAlign: "center" }}
      >
        <h1 className="chuyennha-title">Chuyện Nhà</h1>
      </div>
      {chuyenNhaData.map((section, index) => (
        <div className="section container" key={index}>
          <h2
            className="section-title container"
            style={{ borderLeft: "5px solid #e57905" }}
          >
            {section.section}
          </h2>
          <div className="grid">
            {section.items.map((item, itemIndex) => (
              <div className="grid-item container " key={itemIndex}>
                <img src={item.image} alt={item.title} />
                <h3 className="grid-title">
                  {item.title.length > 48
                    ? `${item.title.substring(0, 38)}...`
                    : item.title}
                </h3>
                <p className="grid-date">{item.date}</p>
                <p className="grid-description">
                  {item.description.length > 48
                    ? `${item.description.substring(0, 90)}...`
                    : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChuyenNha;
