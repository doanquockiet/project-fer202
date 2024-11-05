import React, { useEffect, useState } from 'react'
import './styleTuyendung.css'
import { CiSearch } from "react-icons/ci";
import { LuBuilding } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Footer from '../../components/Layout/Footer';
const TuyenDung = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('Tất cả');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/')
            .then(response => response.json())
            .then(data => {
                setCities(data);
            })
            .catch(error => console.error('Error fetching cities:', error));
    }, []);

    const handleCitySelect = (cityName) => {
        setSelectedCity(cityName);
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="header d-flex">
                <div className="header-logo">
                    <img src="assets/logo-tuyendung.webp" alt="" />
                </div>
                <div className="header-tab align-items-center d-flex">
                    <div className="header-tab-item">
                        <span>< IoStorefrontOutline /></span>
                        <p>Việc làm cửa hàng</p>

                    </div>
                    <div className="header-tab-item">
                        <span><LuBuilding /></span>
                        <p>Việc làm văn phòng</p>
                    </div>
                    <div className="header-tab-item">
                        <span><CiSearch /></span>
                        <p>Tra cứu kết quả</p>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="searchContainer">
                    <div className="searchBox">
                        <div className="searchInput">
                            <div className="textSmall">Bạn đang tìm kiếm</div>
                            <input placeholder="Việc làm, vị trí ứng tuyển..." />
                        </div>
                        <div className="searchAddress">
                            <div className="textSmall">Nơi bạn muốn làm việc</div>
                            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <span>{selectedCity}</span>
                                <span className="dropdownIcon">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M18 9.7L16.6 8.3 12 12.9 7.4 8.3 6 9.7 12 15.7 18 9.7Z" fill="#9E9E9E" />
                                    </svg>
                                </span>
                            </div>
                            {isDropdownOpen && (
                                <div className="dropdownMenu">
                                    <div onClick={() => handleCitySelect('Tất cả')}>Tất cả</div>
                                    {cities.map(city => (
                                        <div
                                            key={city.code}
                                            onClick={() => handleCitySelect(city.name)}
                                            className="dropdownItem"
                                        >
                                            <p> {city.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="searchBtn" style={{ background: '#E57905', color: '#FFF' }}>
                            <span>Tìm kiếm</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_job">
                <div className="title">
                    <div className="icon">
                        <FaStar />
                    </div>
                    <div className="content">
                        <p>Barista</p>
                    </div>
                </div>
            </div>
            <div className="content-page  d-flex  align-items-center justify-content-center">
                <div className="card-content  col-md-3 m-lg-4">
                    <div className="item_card">
                        <img className='w-100' src="assets/khoi-cua-hang.webp" alt="" />
                    </div>
                    <div className="title-card">
                        <h3>Khối Cửa Hàng</h3>
                        <ul>
                            <li>Store Manager "Quản lý cửa hàng"</li>
                            <li>Giám sát ca</li>
                            <li>Barista</li>
                        </ul>
                    </div>
                    <div className="">
                        <a href="https://tuyendung.thecoffeehouse.com/viec-lam-cua-hang" target='blank'>
                            <Button className='text-center button-link align-items-center w-100' variant='warning'>Xem Tất Cả Công Việc Của Khối Cửa Hàng</Button>

                        </a>
                    </div>

                </div>
                <div className="card-content col-md-3">
                    <div className="item_card">
                        <img className='w-100' src="assets/khoi-van-phong.webp" alt="" />
                    </div>
                    <div className="title-card">
                        <h3>Khối Văn Phòng</h3>
                        <ul>
                            <li> Manager "Quản lý nhân sự"</li>
                            <li>Giám sát ca</li>
                            <li>Barista</li>
                        </ul>
                        <div className="">
                            <a href="https://tuyendung.thecoffeehouse.com/viec-lam-van-phong" target='blank'>
                                <Button className='text-center button-link align-items-center w-100' variant='warning'>Xem Tất Cả Công Việc Của Khối Văn Phòng</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default TuyenDung
