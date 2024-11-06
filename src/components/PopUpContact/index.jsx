import React, { useState } from "react";
import { LuHeadphones } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const PopupContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="headset-container">
      <div className="headset-icon" onClick={togglePopup}>
        <LuHeadphones />
      </div>
      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content p-4 rounded shadow bg-white text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p>Gọi hỗ trợ số 0123456789</p>
            <div className="d-flex justify-content-center gap-2 mt-3">
              <button className="btn btn-outline-warning btn-call">
                Gọi ngay
              </button>

              <button
                className="btn btn-warning btn-cancel"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupContact;
