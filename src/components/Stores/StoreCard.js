import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup, Carousel } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLink } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import "./stores.css";

const StoreCard = ({ store }) => {
  return (
    <Card className="store-card mb-2 h-100">
      <Link to={`/store/${store.id}`}>
        <Carousel>
          {store.imgStore.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="caroimg d-block w-100"
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Link>
      <Card.Body className="d-flex flex-column">
        <Link to={`/store/${store.id}`} className="text-decoration-none">
          <Card.Title className="store-card-title">{store.name}</Card.Title>
        </Link>
        <div>
          <Button
            variant="secondary"
            className="mb-3 w-100"
            style={{ backgroundColor: "#cccccc", color: "red", border: "none" }}
          >
            Xem bản đồ
          </Button>
          <div className="mb-3">
            <strong>Chia sẻ :</strong>
            <ListGroup className="d-flex flex-row ">
              <ListGroup.Item action className="border-0 me-3 p-0">
                <FaFacebook size={24} color="#4267B2" />
              </ListGroup.Item>
              <ListGroup.Item action className="border-0 me-3 p-0">
                <SiZalo size={24} color="#0068FF" />
              </ListGroup.Item>
              <ListGroup.Item action className="border-0 me-3 p-0">
                <FaInstagram size={24} color="#E1306C" />
              </ListGroup.Item>
              <ListGroup.Item action className="border-0 p-0">
                <FaLink size={24} color="#000" />
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="border border-bottom-6 mb-3" />
          <Card.Text className="text-black">
            <strong>Địa chỉ:</strong> {store.address}
            <br />
            <strong>Giờ mở cửa:</strong> {store.time}
          </Card.Text>
          <div className="d-flex ">
            {store.features.map((feature, index) => (
              <div key={index} className="me-3">
                {feature.icon} {feature.name}
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreCard;
