import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="ContactPage">
        <Navbar></Navbar>
        <div className="ContactInfo">
          <span className="ContactText">
            <span style={{ "font-weight": "bold", "font-size": "larger" }}>
              Get In Contact:
            </span>
            <br></br>
            <br></br>
            <span>
              Mobile: (+44) 07 963 559 837 <br></br>
              <br></br>Tel:(+44) 0113 216 0403<br></br>
              <br></br>
              Email: design@supplyinteriors.com
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <span style={{ "font-weight": "bold", "font-size": "larger" }}>
                Or, visit us by appointment only at:
              </span>{" "}
              <br></br>
              <br></br>
              12 Kendal Lane <br></br>
              <br></br> Leeds, West Yorkshire <br></br>
              <br></br> LS3 1AY
            </span>
          </span>
          <br></br>
          <br></br>
          <span style={{ "font-weight": "bold", "font-size": "larger" }}>
            Alternatively, contact us here: <br></br>
            <br></br>
          </span>
          <form>
            <input type="text" name="name" placeholder="Name" />

            <input type="email" name="email" placeholder="Email" />

            <textarea placeholder="Message"></textarea>

            <input type="submit" className="sendbutton" value="Submit" />
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
