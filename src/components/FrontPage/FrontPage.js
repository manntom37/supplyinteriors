import React from "react";
import Gallery from "../Gallery/Gallery";
import Navbar from "../Navbar/Navbar";
import "./FrontPage.css";
import { GalleryData } from "../Gallery/GalleryData";

const FrontPage = () => {
  return (
    <div className="FrontPage">
      <Navbar></Navbar>
      <Gallery slides={GalleryData}></Gallery>
    </div>
  );
};

export default FrontPage;
