import React from "react";
import "./Skills.css";
export default function SKILSS() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 ">
            <div class="parallax2">
            <h1 className="mt-5 mb-5" style={{textAlign:"center"}}>My Programming Skills</h1>

              <div className="skills_div">
                <div>
                  <div className="skills">
                    <div className="skill mb-5">
                      <div className="skill-name">HTML</div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: "90%" }} />
                      </div>
                    </div>
                    <div className="skill mb-5">
                      <div className="skill-name">CSS</div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: "80%" }} />
                      </div>
                    </div>
                    <div className="skill mb-5">
                      <div className="skill-name">BOOTSTRAP</div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div className="skill mb-5">
                      <div className="skill-name">JAVASCRIPT</div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: "80%" }} />
                      </div>
                    </div>
                    <div className="skill mb-5">
                      <div className="skill-name">REACT JS</div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: "80%" }} />
                      </div>
                    </div>
                    <div className="skill mb-5">
                      <div className="skill-name">JQUERY</div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: "70%" }} />
                      </div>
                    </div>
                    <div className="skill mb-5">
                      <div className="skill-name">PYTHON</div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: "70%" }} />
                      </div>
                    </div>
                    {/* Add more skills here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
