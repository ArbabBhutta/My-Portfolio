import React from "react";
import './NAV.css'
import HERO_SECTION from './../Hero_Section/HERO_SECTION';
export default function NAVBAR() {
  return (
    <div className="NavHolder">
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid text-light">
        
            Portfolio.
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
         
        </div>
      </nav>
      <HERO_SECTION/>
    </div>
  );
}
