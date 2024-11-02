import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Banner from "../../Banner";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/logo.jpg" alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/coffee">
                  Cà phê
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tea">
                  Trà
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/menu"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>

                <div className="dropdown-menu mega-menu">
                  <div className="row">
                    <div className="col-sm-2">
                      <h6>Tất Cả</h6>
                    </div>
                    <div className="col-sm-2">
                      <h6>Cà Phê</h6>
                      <a className="dropdown-item" href="#">
                        Cà Phê Highlight
                      </a>
                      <a className="dropdown-item" href="#">
                        Cà Phê Việt Nam
                      </a>
                      <a className="dropdown-item" href="#">
                        Cà Phê Máy
                      </a>
                      <a className="dropdown-item" href="#">
                        Cold Brew
                      </a>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trái Cây Xay 0°C</h6>
                      <a className="dropdown-item" href="#">
                        Trái Cây
                      </a>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trà Trái Cây - HiTea</h6>
                      <a className="dropdown-item" href="#">
                        Trà Trái Cây
                      </a>
                      <a className="dropdown-item" href="#">
                        Hi-Tea
                      </a>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trà Sữa</h6>
                      <a className="dropdown-item" href="#">
                        Trà Sữa
                      </a>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trà Xanh - Chocolate</h6>
                      <a className="dropdown-item" href="#">
                        Trà Xanh Tây Bắc
                      </a>
                      <a className="dropdown-item" href="#">
                        Chocolate
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Chuyện Nhà
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cảm hứng CloudFee
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cua-hang">
                  Cửa hàng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
