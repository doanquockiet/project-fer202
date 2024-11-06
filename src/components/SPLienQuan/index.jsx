import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sqlienquan.css';

const SanPhamLQ = ({ dataLqs }) => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/detail', { state: { product } });
    };

    return (
        <div className="container sqlineuqan">
            <h3>Sản phẩm liên quan</h3>
            <div className="row">
                {dataLqs.map((dataLq, index) => (
                    <div key={index} className="col-md-2">
                        <div
                            className="related-product-card"
                            onClick={() => handleProductClick(dataLq)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={dataLq.image} className='w-75' alt={dataLq.name} />
                            <h4>{dataLq.name}</h4>
                            <p>{dataLq.price} đ</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SanPhamLQ;
