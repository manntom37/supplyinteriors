import React from "react";
import "./TeamsPics.css";

const TeamPics = () => {
  return (
    <>
      <div className="teampics">
        <div className="picturediv">
          <img src="http://supplyinteriors.com/wpimages/wpcb5ec000_05_06.jpg"></img>
          <div className="picturedivinfo">
            <span>
              <span style={{ "font-weight": "bold" }}>Ann Clements</span>
              <br></br>I have been designing commercial interiors for twenty
              years mainly in England, New Zealand and Europe. I have an
              Interior Architectural design degree and a Masters in Business.
            </span>
          </div>
        </div>
        <div className="picturediv">
          <img src="http://supplyinteriors.com/wpimages/wpca0a9d23_05_06.jpg"></img>
          <div className="picturedivinfo">
            {" "}
            <span>
              <span style={{ "font-weight": "bold" }}>Joel Miller</span>
              <br></br>I am a young, energetic designer who recently graduated
              from Sheffield Hallam University. I have a strong interest in the
              design of Hospitality.
            </span>
          </div>
        </div>
        <div className="picturediv">
          <img src="http://supplyinteriors.com/wpimages/wp9a152fbf_05_06.jpg"></img>{" "}
          <div className="picturedivinfo">
            <span>
              <span style={{ "font-weight": "bold" }}>Chris Taylor</span>
              <br></br>
              My main objective is to deliver projects clients love, on time and
              within budget. Strong client relationships are built easily with
              me.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPics;
