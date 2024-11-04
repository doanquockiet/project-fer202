import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/Banner";
import BestSeller from "../../components/BestSeller";
import TraXanhTayBac from "../../components/TraXanhTayBac";
import ChuyenNha from "../PageChuyenNha";

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
