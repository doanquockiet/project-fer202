import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const CloudFeePage = () => {
  return (
    <div className="Cam-Hung-CloudFee">
      <div className="header">
        <Header />
      </div>
      <div className="main-page">
        <div className="banner">
          <img
            className="w-100 h-100"
            src="assets/imagesCamHungCloudFee/camHungCloudFee.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <div class="content-title text-center">
            <p class="d-flex justify-content-center fs-4 text-white">
              Được kết hợp từ
              <p style={{ fontWeight: "bold", color: "white" }}>
                &nbsp;Cloud (đám mây)
              </p>
              &nbsp;và
              <p style={{ fontWeight: "bold", color: "white" }}>
                &nbsp;Cloud cofFee (cà phê)
              </p>
              <p style={{ fontWeight: "bold", color: "white" }}>
                &nbsp;CloudFee
              </p>
            </p>
            <p className="fs-4 text-white justify-content-center">
              gợi mở về một thế hệ cà phê mới, êm mượt như mây.
            </p>
          </div>
        </div>
        <div class="content-CremeBrulee d-flex justify-content-center my-5 d-flex">
          <div class="cloud-fee d-flex p-4 container">
            <div className="text-cremebrulee container p-5 text-center">
              <h1 class="title">CLOUDFEE</h1>
              <h2 class="subtitle ">Creme Brulee</h2>
              <p class="description text-white">
                Thức uống "chiều chuộng bản thân" bậc nhất cho những ai thích vị
                ngọt ngào hay muốn thưởng thức sự kết hợp độc đáo giữa món tráng
                miệng và thức uống.
              </p>
              <p class="tagline font-italic">
                Êm mượt như mây, Chill là ghiền ngay!
              </p>
            </div>
            <img
              className="w-100 h-100"
              src="assets/imagesCamHungCloudFee/creme-brulee.webp"
              alt="CloudFee drink"
              class="image rounded-3 me-4"
            />
          </div>
        </div>
        <div class="content-Creamy d-flex justify-content-center my-5 d-flex">
          <div class="cloud-fee d-flex p-4 container">
            <img
              className="w-100 h-100"
              src="assets/imagesCamHungCloudFee/creamy.webp"
              alt="CloudFee drink"
              class="image rounded-3 me-4"
            />
            <div className="text-creamy container p-5 text-center">
              <h1 class="title">CLOUDFEE</h1>
              <h2 class="subtitle ">Creamy</h2>
              <p class="description text-white">
                Thức uống "đánh thức" năng lượng ngày mới hợp cho những ai mới
                bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá
                thêm nhiều hương vị mới.
              </p>
              <p class="tagline font-italic">
                Êm mượt như mây, Tươi ngày mới ngay!
              </p>
            </div>
          </div>
        </div>
        <div className="content-video justify-content-center">
          <div className="video-title text-center fs-4 ">
            <h1>CÀ PHÊ CÓ DÀNH CHO TẤT CẢ </h1>
            <h1>MỌI NGƯỜI?</h1>
          </div>
        </div>
        <div className="content-video justify-content-center">
          <div className="video">
            <iframe
              className="justify-content-center"
              width="998"
              height="559"
              src="https://www.youtube.com/embed/t5I96ycncPA"
              title="CloudFee: Cà phê có dành cho tất cả mọi người?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="content-video justify-content-center">
          <div className="video-description container text-center text-white">
            <p>
              Bạn có biết, mỗi ngày có hơn 2 tỷ cốc cà phê được uống trên toàn
              thế giới? Có người pha cùng sữa, có người rót thêm kem béo, hay
              kết hợp cùng… rượu whiskey, nhưng không phải ai cũng có thể thưởng
              thức cà phê một cách ngon lành. Bằng niềm khao khát mang ẩm thực
              thế giới vào từng ly cà phê bản địa, Edward Teonadi - Giám đốc
              phát triển sản phẩm tại The Coffee House đã tạo nên thế hệ cà phê
              mới mang tên CloudFee. Và giờ đây, bất kỳ ai ghé Nhà cũng có thể
              tìm thấy hương vị cà phê cho riêng mình.
            </p>
          </div>
        </div>
        <div className="content-bartender">
          <div class="cloud-fee d-flex p-4 container">
            <img
              className="w-100 h-100"
              src="assets/imagesCamHungCloudFee/bartender.webp"
              alt="CloudFee drink"
              class="image rounded-3 me-4"
            />
            <div className="text-creamy container p-5 text-center">
              <h1 class="title">CÀ PHÊ NGON CHỈ CÓ </h1>
              <h1 class="title"> VỊ ĐẮNG?</h1>
              <p class="description text-white">
                Từ ý tưởng về CloudFee của Edward, anh Phạm Phúc Thịnh - barista
                của The Coffee House nhận ra: Cà phê không nhất thiết phải đắng,
                phải chua thì mới ngon. Đôi khi một chút biến tấu, một chút ngọt
                ngào để yêu chiều bản thân mới thật sự quan trọng. Và đó là cách
                CloudFee Creme Brulee ra đời.
              </p>
              <p class="tagline font-italic">Xem Video nghe Thịnh kể chuyện!</p>
            </div>
          </div>
        </div>
        <div className="content-bartender">
          <div class="cloud-fee d-flex p-4 container">
            <div className="text-creamy container p-5 text-center">
              <h1 class="title">CÀ PHÊ ĐÂU CHỈ LÀ </h1>
              <h1 class="title">THỨC UỐNG</h1>
              <p class="description text-white">
                Trong ly cà phê dành cho người mình thương có gì? Khi nghe
                Edward chia sẻ về thế hệ cà phê mới CloudFee, anh Nguyễn Hoàng
                Hiếu - barista của The Coffee House chợt nhớ tới vợ mình. Cô
                ngại vị đắng của cà phê, nhưng cần một thức uống tỉnh táo mỗi
                sáng. Và CloudFee Creamy là món quà anh tặng cho người phụ nữ
                anh yêu.
              </p>
              <p class="tagline font-italic">Hiếu bật mí trong video này!</p>
            </div>
            <img
              className="w-100 h-100"
              src="assets/imagesCamHungCloudFee/bartender-2.webp"
              alt="CloudFee drink"
              class="image rounded-3 me-4"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default CloudFeePage;
