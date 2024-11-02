// StoreCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const StoreCard = ({ store }) => {
  return (
    <Card className="store-card mb-4">
      <Carousel>
        {store.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{store.name}</Card.Title>
        <Button variant="light" className="mb-3" style={{ color: "red" }}>
          Xem bản đồ
        </Button>
        <Card.Text>
          <strong>Địa chỉ:</strong> {store.address}
          <br />
          <strong>Giờ mở cửa:</strong> {store.time}
        </Card.Text>
        <div className="d-flex mb-3">
          {store.features.map((feature, index) => (
            <div key={index} className="me-3">
              {feature.icon} {feature.name}
            </div>
          ))}
        </div>
        <ListGroup horizontal>
          <ListGroup.Item action href="#">
            Facebook
          </ListGroup.Item>
          <ListGroup.Item action href="#">
            Zalo
          </ListGroup.Item>
          <ListGroup.Item action href="#">
            Instagram
          </ListGroup.Item>
          <ListGroup.Item action href="#">
            Copy Link
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default StoreCard;
