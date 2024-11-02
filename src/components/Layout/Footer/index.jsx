import "./style.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Giới thiệu</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Khuyến mãi
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Chuyện cà phê
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Cửa Hàng
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Điều khoản</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Chính sách bảo mật thông tin
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Hướng dẫn xuất hóa đơn GTGT
                </a>
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
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="social-icons">
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
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
