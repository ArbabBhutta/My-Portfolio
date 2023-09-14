import React from "react";
import "./About.css";

export default function ABOUT() {
  return (
    <div className="container-fluid">
      <div className="row rowA">
        <div className="col-sm-12 ">
          <div class="parallax">
            <div className="about_div mt-5 mb-5">
              <p className="about_para">
              <h1 className="about_heading"> About Me</h1>

                As a dedicated front-end developer, I possess a profound
                enthusiasm for translating design concepts into interactive
                digital experiences. My journey in the world of web development
                is a testament to my unwavering commitment to staying at the
                forefront of industry trends. Armed with a strong foundation in
                HTML, CSS, , JavaScript and REACT JS, I continuously refine my skills to
                master emerging frameworks and technologies, ensuring that every
                project I undertake is cutting-edge and innovative. My approach
                to front-end development is deeply rooted in user-centered
                design principles. With an acute attention to detail, I
                meticulously craft pixel-perfect interfaces that seamlessly
                merge aesthetic appeal with exceptional functionality.
                Responsive and mobile-first design are second nature to me,
                guaranteeing that the websites I build provide an optimal
                experience across various devices and screen sizes.
                Collaboration lies at the heart of my process. I thrive in
                cross-functional teams, effectively communicating with
                designers, back-end developers, and stakeholders to ensure
                cohesive and harmonious project execution. My ability to
                transform wireframes and mockups into living, breathing websites
                showcases my knack for turning vision into reality.
                
              <a href={require("../Hero_Section/Arbab_Resume.pdf")} download={"Arbab_Resume.pdf"}><button className="cv_btn mt-3 mb-2">Download CV</button></a>

              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
