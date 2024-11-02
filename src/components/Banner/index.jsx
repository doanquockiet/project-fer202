import Carousel from "react-bootstrap/Carousel";
import "./style.css";
function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img src="/assets/banner1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/banner2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/banner3.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/banner4.jpg" alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
