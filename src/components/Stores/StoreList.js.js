// StoreList.js
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const StoreList = ({ cities, onSelectCity }) => {
  return (
    <ListGroup variant="flush" className="text-center">
      {cities.map((city) => (
        <ListGroup.Item
          action
          key={city.name}
          onClick={() => onSelectCity(city.name)}
        >
          {city.name} ({city.count})
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default StoreList;
