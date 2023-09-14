import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import NAVBAR from "./Components/NAVBAR/NAVBAR";
import ABOUT from './Components/About/ABOUT';
import SKILSS from './Components/Skills/SKILSS';
import PROJECTS from './Components/Projects/PROJECTS';
import CONTACT from './Components/Contact/CONTACT';
import FOOTER from './Components/Footer/FOOTER';
function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <NAVBAR />
      <ABOUT/>
      <SKILSS/>
      <PROJECTS/>
      <CONTACT/>
      <FOOTER/>
    </div>
  );
}

export default App;
