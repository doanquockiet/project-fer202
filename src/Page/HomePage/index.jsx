import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/Banner";
import BestSeller from "../../components/BestSeller";
import TraXanhTayBac from "../../components/TraXanhTayBac";
import ChuyenNha from "../PageChuyenNha";
import PopupContact from "../../components/PopUpContact";
import "./style.css";

const HomePage = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="main-body">
        <div className="popup">
          <PopupContact />
        </div>
        <BestSeller />
        <TraXanhTayBac />
        <ChuyenNha />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
