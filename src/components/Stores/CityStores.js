// CityStores.js
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreCard from "./StoreCard";

const CityStores = ({ stores }) => {
  return (
    <Row className="gy-4">
      {stores.map((store, index) => (
        <Col md={6} key={index}>
          <StoreCard store={store} />
        </Col>
      ))}
    </Row>
  );
};

export default CityStores;
