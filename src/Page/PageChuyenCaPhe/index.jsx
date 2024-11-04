import Header from "../../components/Layout/Header";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { coffeeDetails } from "../../data/chuyencaphe.js";
import Footer from "../../components/Layout/Footer/index.jsx";
const ChuyenCaPhe = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container body">
        <div className="banner">
          <img src="/assets/banner-hat-ca-phe.jpg" alt="Banner" />
        </div>
        <div className="content-title">
          <div className="title-chuyen-ca-phe d-flex">
            <p style={{ borderRight: "4px solid", paddingRight: "18px" }}>
              MẺ RANG GIỚI HẠN ĐẮK NÔNG x CẦU ĐẤT
            </p>
            <p> THE COFFE HOUSE</p>
          </div>
        </div>
        <div className="content-body container">
          <div className="img-chuyen-ca-phe">
            <img src="/assets/chuyen-ca-phe.webp" alt="Chuyen Ca Phe" />
          </div>
          <div className="container">
            <h1>{coffeeDetails.title}</h1>
            <h2>{coffeeDetails.subtitle}</h2>
            <p>{coffeeDetails.description}</p>
            {coffeeDetails.details.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
            <p>{coffeeDetails.conclusion}</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default ChuyenCaPhe;
