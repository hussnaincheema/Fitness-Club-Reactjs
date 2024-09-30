import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs_header">
        <span className="stroke_text">Explore our</span>
        <span>Programs</span>
        <span className="stroke_text">to shape you</span>
      </div>

      <div className="programs_categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join_now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow Image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
