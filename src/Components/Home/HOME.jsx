import React from 'react'
import NAVBAR from './../NAVBAR/NAVBAR';
import ABOUT from '../About/ABOUT';
import SKILSS from '../Skills/SKILSS';
import PROJECTS from '../Projects/PROJECTS';
import CONTACT from '../Contact/CONTACT';
import FOOTER from '../Footer/FOOTER';

export default function HOME() {
  return (
    <div>
      <ABOUT/>
      <SKILSS/>
      <PROJECTS/>
      <CONTACT/>
      <FOOTER/>

    </div>
  )
}
