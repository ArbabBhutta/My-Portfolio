import React from 'react'
import './projects.css'

export default function PROJECTS() {
  return (
   <>
     <div className='container-fluid'>
        <div className="row">
            <h1 style={{textAlign:'center'}}>Recent Projects</h1>
            <div className="col-sm-4">
                <img src={require('../../IMAGES/shop.jpg')}  alt='project' width= "100%" height = "250px"/>
                <h2><a href="https://arbabbhutta.github.io/React_Shop">E-Commerce</a></h2>
            </div>
            <div className="col-sm-4">
            <img src={require('../../IMAGES/chat.jpg')}  alt='project' width= "100%" height = "250px"/>
                <h2><a href=" https://arbabbhutta.github.io/Group-Chat-App">Group Chat App</a></h2>
            </div>
            <div className="col-sm-4">
            <img src={require('../../IMAGES/blog.jpg')}  alt='project' width= "100%" height = "250px"/>
                <h2><a href="https://arbabbhutta.github.io/BLogging_React">Blogging Site</a></h2>
            </div>
        </div>
        {/* <div className="row">
            <div className="col-sm-4">
                <img src={require('../../IMAGES/weather.jpg')} alt='project' width= "100%" height = "250px"/>
                <h2>Weather App</h2>
            </div>
            <div className="col-sm-4">
            <img src={require('../../IMAGES/port.jpg')}  alt='project' width= "100%" height = "250px"/>
                <h2>Portfolio Site</h2>
            </div>
           
        </div> */}

      </div>
   </>
  )
}
