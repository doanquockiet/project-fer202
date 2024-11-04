import React from "react";
import { Row, Col } from "react-bootstrap";
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
