import React from "react";
import Navbar from "../Navbar/Navbar";
import TeamPics from "../TeamPics/TeamPics";
import "./AboutPage.css";
import { FaHeart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Navbar></Navbar>
      <div className="AboutInfo">
        <span style={{ "font-weight": "bold" }}>
          We tailor furniture packages, ready for delivery.
        </span>
        <br></br>
        <span>
          Our philosophy is to create and deliver appropriate, elegant, and
          contemporary interiors by styling coordinated furniture packages that
          delight our clients and supports their brand. <br></br>
          <br></br>Our commitment is to work alongside our clients to bring a
          unique identity to every project and ensure we deliver intuitive,
          innovative, and authentic interior designs. We have a strong
          professional team with industry expertise, knowledge of emerging
          trends, combined with an extensive library of suppliers, manufacturers
          & industry contacts. From when you receive the keys, time is of the
          essence. We suggest to all our clients to get us involved as soon as
          possible in the projects team to ensure we can respond with a fast
          turnaround. <br></br>
          <br></br>
          <span style={{ "font-weight": "bold" }}>
            Don't panic - we're professionals.
          </span>{" "}
          <br></br>
          <br></br>
          Our approach reflects that we are interior architectural designers who
          love creating beautiful spaces that people love. <br></br>
        </span>{" "}
        <br></br> <br></br>
        <span
          style={{
            "align-self": "center",
            "font-weight": "bold",
            "font-size": "large",
          }}
        >
          MEET THE TEAM
        </span>
        <TeamPics></TeamPics>
        <span
          style={{
            "align-self": "center",
            "font-weight": "bold",
            "font-size": "large",
          }}
        >
          Get in touch, we’d love to chat!
        </span>
        <br></br>
        <span>
          We provide the first consultant meeting free of charge, so we can get
          to know each other. We look forward to working with you!
        </span>
        <button className="contactbutton">CONTACT</button>
        <span
          style={{
            "align-self": "center",
            "margin-bottom": "2rem",
            "align-content": "center",
            "align-items": "flex-end",
            display: "flex",
          }}
        >
          Supply Interiors
          <BiCopyright />
          </span>
          <span
          style={{
            "align-self": "center",
            "margin-bottom": "2rem",
          }}
        >
          website made with <FiCoffee /> & <FaHeart /> by tom mann
        </span>
      </div>
    </div>
  );
};

export default AboutPage;
