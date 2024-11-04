import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const TraXanhTayBac = () => {
  const handleButtonClick = () => {
    window.location.href = "https://order.thecoffeehouse.com/tra-xanh-tay-bac";
  };
  return (
    <div className="tea container">
      <div className="banner">
        <img
          style={{ width: "100%", height: "100%" }}
          src="assets/traxanhtaybac.png"
          alt="Banner Trà xanh Tây Bắc"
        />
      </div>
      <div className="description">
        <img
          style={{ width: "90%", height: "100%" }}
          src="assets/titleTraXanh.jpg"
          alt="Trà xanh Tây Bắc"
        />
        <p className="text container">
          Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ những ngọn núi
          cao, nguồn nước mát lạnh, bao bọc bởi màu và sương cùng nền nhiệt độ
          mát mẻ quanh năm, những búp trà ở Tây Bắc mập mạp và xanh mướt, hơi tụ
          dày và dường chắc, sinh khí, và tinh hoa đất trời. Chính khí hậu đặc
          trưng cùng phương pháp canh tác của đồng bào dân tộc nơi đây đã tạo ra
          Trà Xanh vị mộc đê đương, dễ uống.
        </p>
        <button
          className="btn btn-success container"
          onClick={handleButtonClick}
          style={{ width: "70%" }}
        >
          Thử ngay
        </button>
      </div>
    </div>
  );
};

export default TraXanhTayBac;
