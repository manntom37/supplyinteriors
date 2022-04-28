import React, { useState } from "react";
import "./Gallery.css";
import image1 from "../../img/interiordesign.png";
import { GalleryData } from "./GalleryData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="gallery">
        <div>
          {GalleryData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} className="images"></img>
                )}
              </div>
            );
          })}
        </div>

        <div className="prevnext">
          <FaArrowAltCircleLeft onClick={prevSlide} className="arrows"/>

          <FaArrowAltCircleRight onClick={nextSlide}  className="arrows" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
