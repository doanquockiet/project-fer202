import React, { useState } from 'react'
import Header from '../../components/Layout/Header'
import './styleChuyenNha.css'
import BlogPost from '../../components/BlogPost';
import Footer from '../../components/Layout/Footer';
const ChuyenNhaPage = () => {
    const blogPosts = [
        {
            image: "assets/imagesChuyenNha/chuyennha-6.jpg",
            title: "BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG HIỆN ĐẠI CỦA GIỚI TRẺ",
            date: "01/11/2023",
            excerpt: "Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại...",
            link: "#",
        },
        {
            image: "assets/imagesChuyenNha/chuyennha-2.jpg",
            title: "CHỈ CHỌN CÀ PHÊ MỖI SÁNG NHƯNG CŨNG KHIẾN CUỘC SỐNG CỦA BẠN THÊM THÚ VỊ, TẠI SAO KHÔNG?",
            date: "30/10/2023",
            excerpt: "Thực chất, bạn không nhất thiết phải làm gì to tát để tạo nên một...",
            link: "#",
        },
        {
            image: "assets/imagesChuyenNha/chuyennha-3.jpg",
            title: "SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ CỦA THE COFFEE HOUSE ĐÃ QUAY TRỞ LẠI",
            date: "12/02/2023",
            excerpt: "Mới đây, các 'tín đồ' cà phê đang bàn tán xôn xao về SIGNATURE -...",
            link: "#",
        }
    ];

    const [activeTab, setActiveTab] = useState("Tất Cả"); 

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="page_header">
                <div className="container">
                    <h2 className='text-center '>Chuyện Nhà</h2>

                    <div className="page_contetn text-center">
                        <span> "&nbsp;The Coffee House sẽ là&nbsp;nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia<br /> thân tình bên những tách cà phê, ly trà đượm hương,&nbsp;truyền cảm hứng về lối sống hiện đại."</span>
                    </div>
                </div>
                <div className="tabs_chuyennha">
                    <div className="container">
                        <ul className="page_tabs mt-3">
                            {["Tất Cả", "Coffeeholic", "Teaholic", "Blog"].map((tab) => (
                                <li
                                    key={tab}
                                    onClick={() => handleTabClick(tab)}
                                    className={activeTab === tab ? "active" : ""}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container d-flex">
                <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                    <div class="featured_article_0 coffee_story_article">
                        <img src="assets/imagesChuyenNha/chuyennha-1.png" alt="" />
                        <div class="article_content">
                            <h3 className='mt-2'><a href="!#">NGƯỢC LÊN TÂY BẮC GÓI VỊ MỘC VỀ XUÔI</a></h3>
                            <p class="article_published_at">
                                <span>16/08/2023</span></p>
                            <p class="article_excerpt">Những dải ruộng bậc thang, các cô gái Thái với điệu múa xòe hoa, muôn cung đường ngợp mùa hoa… đó là rẻo cao Tây Bắc luôn làm say lòng...</p>
                            <ul class="article_hashtag ">
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <div class="featured_article">
                        <img src="assets/imagesChuyenNha/chuyennha-3.jpg" alt="" />
                        <div class="article_content">
                            <h3 className='mt-3'><a href="!#">SIGNATURE BY THE COFFEE HOUSE  - "DẤU ẤN" MỚI CỦA NHÀ CÀ PHÊ</a></h3>
                            <p class="article_published_at">
                                <span>19/01/2023</span></p>
                            <p class="article_excerpt">Ngày 11.01.2023, Chuỗi The Coffee House thông báo cửa hàng SIGNATURE by The Coffee House chính thức khai trương tại trung tâm thương mại Crescent Mall, Nguyễn Văn Linh, Quận...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="log d-flex">
                <div className="img-null col-md-4 ">
                    <img src="assets/imagesChuyenNha/chuyennha-1.png" alt="" />
                </div>
                <div className=" col-md-8 blog_section">
                    <h2>Coffeeholic</h2>
                    {blogPosts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>

        </>
    )
}

export default ChuyenNhaPage
