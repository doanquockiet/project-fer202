import React from "react";
import { useParams } from "react-router-dom";
import stores from "../../assets/stores";
import { FaFacebook, FaInstagram, FaLink } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import Header from "../Layout/Header/index";
import Footer from "../Layout/Footer";

const DetailsPage = () => {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id === parseInt(storeId, 10));
  const nearbyStores = stores.filter(
    (s) => s.district === store.district && s.id !== store.id
  );

  return (
    <div>
      <Header />
      <div className="border-top"></div>
      <Container className="pt-5 pb-4">
        <Row>
          <Col md={6}>
            {store.imgStore.map((image, index) => (
              <img
                key={index}
                className="img-fluid mb-3"
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            ))}
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  {store.name}
                </Card.Title>
                <Card.Text className="mt-3 mb-3">{store.description}</Card.Text>

                <p>
                  <strong>Địa chỉ:</strong>
                  <br />
                  {store.address}
                </p>

                <p>
                  <strong>Giờ mở cửa:</strong>
                  <br /> {store.time}
                </p>

                <div className="d-flex mb-3">
                  {store.features.map((feature, index) => (
                    <span key={index} className="me-3">
                      {feature.icon} {feature.name}
                    </span>
                  ))}
                </div>

                <div className="d-flex justify-content-around mb-4">
                  <FaFacebook size={24} color="#4267B2" />
                  <SiZalo size={24} color="#0068FF" />
                  <FaInstagram size={24} color="#E1306C" />
                  <FaLink size={24} color="#000" />
                </div>
              </Card.Body>
            </Card>

            <div className="my-4 p-3 border rounded bg-light">
              <h6 className="mb-3">Sản phẩm thưởng thức tại nhà</h6>
              <Button
                className="w-100"
                style={{
                  backgroundColor: "#FFF9DB",
                  color: "brown",
                  border: "none",
                }}
              >
                Xem tất cả sản phẩm
              </Button>
            </div>

            {nearbyStores.length > 0 && (
              <div className="my-4">
                <h6 className="mb-3">The Coffee House lân cận</h6>
                <ListGroup variant="flush">
                  {nearbyStores.map((nearbyStore) => (
                    <ListGroup.Item
                      key={nearbyStore.id}
                      className="d-flex align-items-center"
                    >
                      <img
                        src={nearbyStore.imgStore[0]?.src}
                        alt={nearbyStore.imgStore[0]?.alt}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          marginRight: "15px",
                        }}
                        className="rounded"
                      />
                      <div>
                        <strong>{nearbyStore.name}</strong>
                        <p className="mb-0">{nearbyStore.address}</p>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DetailsPage;
