import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleLinkClick = () => {
      window.scrollTo(0, 0);
    };

    const links = document.querySelectorAll(".footer a");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [pathname]);
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Giới thiệu</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/chuyen-nha" className="text-white">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Khuyến mãi
                </Link>
              </li>
              <li>
                <Link to="/chuyen-ca-phe" className="text-white">
                  Chuyện cà phê
                </Link>
              </li>
              <li>
                <Link to="/cua-hang" className="text-white">
                  Cửa Hàng
                </Link>
              </li>
              <li>
                <Link to="/tuyen-dung" className="text-white">
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Điều khoản</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms" className="text-white">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white">
                  Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link to="/invoice-guide" className="text-white">
                  Hướng dẫn xuất hóa đơn GTGT
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Liên hệ</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-phone-alt"></i> Đặt hàng: 1800 6936
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 67 Đinh Bộ Lĩnh, P.26,
                Q.Bình Thạnh, TP.Hồ Chí Minh
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="mb-3">
              <h5>The Coffee House</h5>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Coffee.House.2014&tabs&width=250&height=150"
                width="250"
                height="150"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="social-icons">
              <Link to="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <hr className="bg-white" />
            <p className="mb-0">
              Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN
            </p>
            <p className="mb-0">
              Mã số DN: 0312867172, Địa chỉ: 86-88 Cao Thắng, Quận 3, TP.HCM
            </p>
            <p className="mb-0">
              © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi
              quyền bảo lưu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
