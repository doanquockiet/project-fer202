import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./stores.css";
const StoreList = ({ cities, onSelectCity, selectedCity }) => {
  return (
    <ListGroup variant="flush">
      {cities.map((city) => (
        <ListGroup.Item
          action
          key={city.name}
          onClick={() => onSelectCity(city.name)}
          className={selectedCity === city.name ? "selected-city" : ""}
        >
          {city.name} ({city.count})
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default StoreList;
