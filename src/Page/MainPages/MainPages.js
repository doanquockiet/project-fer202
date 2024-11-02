// MainPage.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import StoreList from "../../components/Stores/StoreList.js.js";
import CityStores from "../../components/Stores/CityStores.js";
import stores from "../../assets/stores.js";
import banner from "../../assets/images/banner2.png";
import "./MainPages.css";
import Header from "../../components/Layout/Header/index.jsx";
import Footer from "../../components/Layout/Footer/index.jsx";

const MainPage = () => {
  const [selectedCity, setSelectedCity] = useState("Nha Trang");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Calculate the number of stores for each city dynamically
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

  // Filter stores by the selected city and selected district
  const cityStores = stores.filter(
    (store) =>
      store.city === selectedCity &&
      (selectedDistrict === "" || store.district === selectedDistrict)
  );

  // Get unique districts for the selected city
  const districts = [
    ...new Set(
      stores
        .filter((store) => store.city === selectedCity)
        .map((store) => store.district)
    ),
  ];

  return (
    <Container fluid>
      <div>
        {" "}
        <Header />
      </div>

      <img src={banner} alt="Promotional Banner" className="banner-image" />
      <Row>
        <Col md={3} className="text-center">
          <h5>Theo khu vực</h5>
          <StoreList cities={cities} onSelectCity={setSelectedCity} />
        </Col>
        <Col md={9}>
          <h5>
            Khám phá {cityStores.length} cửa hàng của chúng tôi ở {selectedCity}
          </h5>

          {/* Province/District Filter Dropdown */}
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

          <CityStores stores={cityStores} />
        </Col>
      </Row>
      <div>
        {" "}
        <Footer />
      </div>
    </Container>
  );
};

export default MainPage;
