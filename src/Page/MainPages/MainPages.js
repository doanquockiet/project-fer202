import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import StoreList from "../../components/Stores/StoreList.js";
import CityStores from "../../components/Stores/CityStores.js";
import stores from "../../assets/stores.js";
import banner from "../../assets/images/banner2.png";
import "./MainPages.css";
import Header from "../../components/Layout/Header/index.jsx";
import Footer from "../../components/Layout/Footer/index.jsx";

const MainPage = () => {
  const [selectedCity, setSelectedCity] = useState("TP Hồ Chí Minh");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [visibleStoresCount, setVisibleStoresCount] = useState(4);
  const cities = stores.reduce((acc, store) => {
    const cityName = store.city;
    const existingCity = acc.find((city) => city.name === cityName);

    if (existingCity) {
      existingCity.count += 1;
    } else {
      acc.push({ name: cityName, count: 1 });
    }

    return acc;
  }, []);

  const cityStores = stores.filter(
    (store) =>
      store.city === selectedCity &&
      (selectedDistrict === "" || store.district === selectedDistrict)
  );

  const districts = [
    ...new Set(
      stores
        .filter((store) => store.city === selectedCity)
        .map((store) => store.district)
    ),
  ];

  const visibleStores = cityStores.slice(0, visibleStoresCount);

  const handleShowMore = () => {
    setVisibleStoresCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <Header />
      <img src={banner} alt="Promotional Banner" className="banner-image" />
      <Container className="pt-5 pb-4">
        <Row>
          <Col md={2} className="text-center">
            <h5>Theo khu vực</h5>
            <StoreList
              cities={cities}
              onSelectCity={setSelectedCity}
              selectedCity={selectedCity}
            />
          </Col>
          <Col
            md={1}
            className="d-flex justify-content-center align-items-center"
          >
            <hr className="divider" />
          </Col>
          <Col md={9}>
            <h5>
              Khám phá {cityStores.length} cửa hàng của chúng tôi ở{" "}
              {selectedCity}
            </h5>
            <Form.Select
              aria-label="Select District"
              className="mb-4"
              onChange={(e) => setSelectedDistrict(e.target.value)}
              value={selectedDistrict}
            >
              <option value="">Quận/Huyện</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </Form.Select>
            <CityStores stores={visibleStores} />
            {visibleStoresCount < cityStores.length && (
              <Row className="mt-5 p">
                <Col className="d-flex justify-content-center">
                  <Button onClick={handleShowMore} variant="light">
                    Xem thêm
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MainPage;
