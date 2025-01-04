import React, { useState } from "react";
import Styles from "./portfolio.module.css";
import Portfolio1 from "../../assets/port1.png";
import Portfolio2 from "../../assets/port2.png";
import Portfolio3 from "../../assets/port3.png";
import DarkStarLine from "../DarkStarLine/DarkStarLine";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio1,
    Portfolio2,
    Portfolio3,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={`${Styles.portfolioSection}`}>
        <h1>PORTFOLIO COMPONENT</h1>
        <DarkStarLine />

        <div className="container mt-5">
          <div className="row g-3">
            {images.map((image, index) => (
              <div className="col-lg-4 cold-md-6" key={index}>
                <div className="position-relative">
                  <img
                    src={image}
                    className="img-fluid rounded"
                    alt={`Portfolio ${index + 1}`}
                  />
                  <div
                    className={`${Styles.imgLayer} position-absolute rounded`}
                    onClick={() => handleImageClick(image)}
                  >
                    <span>
                      <i className={`${Styles.plusIcon} fa fa-plus`}></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={Styles.overlay} onClick={handleOverlayClick}>
          <img
            src={selectedImage}
            className={Styles.enlargedImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
