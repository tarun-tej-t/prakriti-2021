import React, { Component } from "react";


import "../public_html/css/nivo-slider-theme.css";
import "react-animated-slider/build/horizontal.css";
import { Link as Lin } from "react-scroll";
//import { Link } from "react-router-dom";
import "./slider-animations.css";
import "./styles.css";





export default class iSlider extends Component {
  render() {
    return (
      <div>
 
        <div style={{background: `url('https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/whole.png') center`,backgroundSize:'cover',minWidth:'100vw',minHeight:'100vh'}}>
       <br/> <br/>    <br/> <br/>    <br/> <br/>  <br/> 
        <p style={{paddingLeft:'6vw',paddingRight:'20vw',textAlign:'left',letterSpacing:'1.5px',fontsize:'1em',fontFamily:'Arial',fontWeight:'lighter',lineHeight:'5vh',backgroundColor:'rgb(242, 246, 250,0.0)'}}>
          Prakriti is an Agri and Food Innovation Fest organized by the students of
          
          the Department <br/> of Agricultural and Food Engineering, IIT Kharagpur,
         
          targeting the amalgamation <br/> of academia and industry associated
         
          with the agricultural and food sector.<br/> We aim to provide
          
          a conduit for budding innovators . .
          <button type="button" class="btn btn-sm read-more-button">
            <Lin to="about" spy={true} smooth={true} onClick={() => {
                  window.scroll({
                    left: 0,
                    top:1000,
                    behavior: "smooth",
                  });
                }} style={{color:'white'}}> Read more
              </Lin>
         </button>
        </p>
        
        </div>
      </div>
    );
  }
}
