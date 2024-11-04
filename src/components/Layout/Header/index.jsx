import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <NavLink
            className="navbar-brand"
            style={{ background: "none" }}
            to="/"
          >
            <img
              src={require("../Header/img/logo.jpg")}
              alt="logo"
              className="logo"
            />
          </NavLink>
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
                <NavLink className="nav-link" to="/coffee">
                  Cà phê
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tea">
                  Trà
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/menu"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </NavLink>
                <div className="dropdown-menu mega-menu">
                  <div className="row">
                    <div className="col-sm-2">
                      <h6>Tất Cả</h6>
                    </div>
                    <div className="col-sm-2">
                      <h6>Cà Phê</h6>
                      <NavLink className="dropdown-item" to="/menu">
                        Cà Phê Việt Nam
                      </NavLink>
                      <NavLink className="dropdown-item" to="/menu">
                        Cà Phê Máy
                      </NavLink>
                      <NavLink className="dropdown-item" to="/menu">
                        Cold Brew
                      </NavLink>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trái Cây Xay 0°C</h6>
                      <NavLink className="dropdown-item" to="/menu">
                        Trái Cây
                      </NavLink>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trà Trái Cây - HiTea</h6>
                      <NavLink className="dropdown-item" to="/menu">
                        Trà Trái Cây
                      </NavLink>
                      <NavLink className="dropdown-item" to="/menu">
                        Hi-Tea
                      </NavLink>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trà Sữa</h6>
                      <NavLink className="dropdown-item" to="/menu">
                        Trà Sữa
                      </NavLink>
                    </div>
                    <div className="col-sm-2">
                      <h6>Trà Xanh - Chocolate</h6>
                      <NavLink className="dropdown-item" to="/menu">
                        Trà Xanh Tây Bắc
                      </NavLink>
                      <NavLink className="dropdown-item" to="/menu">
                        Chocolate
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chuyen-nha">
                  Chuyện Nhà
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Cảm hứng CloudFee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cua-hang">
                  Cửa hàng
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="https://tuyendung.thecoffeehouse.com/"
                >
                  Tuyển dụng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
