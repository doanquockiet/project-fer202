import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Coffees } from "../../data/coffee";
import { Button, Card } from "react-bootstrap";
import ProductCoffee from "./ProductCoffee";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function CoffeeDetail() {
  const { id } = useParams();
  const newpage = Coffees.find((newpage) => newpage?.id == id);
  console.log(newpage);
  const navigate = useNavigate();
  return (
    <div claasName="page-coffee">
      <div className="header">
        <Header />
      </div>
      <div className="container p-4">
        <Card
          style={{
            border: "1px solid white",
            textAlign: "start",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="top"
            src={newpage.image}
            style={{ width: "50%" }}
          />
          <Card.Body>
            <Card.Title>{newpage.title}</Card.Title>
            <Card.Text style={{ color: "orange" }}>{newpage.price}</Card.Text>
            <Button
              style={{
                width: "100%",
                backgroundColor: "orange",
                border: "1px solid orange",
              }}
              onClick={() => navigate(`/`)}
            >
              Đặt giao tận nơi
            </Button>
          </Card.Body>
        </Card>
        <Card.Img
          src={newpage.image}
          style={{ width: "60px", marginTop: "20px" }}
        />
        <div style={{ marginTop: "30px", marginBottom: "100px" }}>
          <h2>Mô tả sản phẩm</h2>
          <Card.Text style={{ fontSize: "20px" }}>
            {newpage.description}
          </Card.Text>
        </div>
        <hr />
        <h2>Sản Phẩm Liên Quan </h2>
        <ProductCoffee />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
