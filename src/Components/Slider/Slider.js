import React, { Component } from 'react'
import mainbuilding from '../public_html/img/Main building.jpg'
import oneimg from '../public_html/img/6.jpeg'
import prakriticover from '../public_html/img/Prakriti cover.jpg'
import '../public_html/css/nivo-slider-theme.css'
import SimpleImageSlider from "react-simple-image-slider";
import { Zoom, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import ScriptTag from 'react-script-tag';

const images = [
  mainbuilding  ,
  oneimg ,
  prakriticover
];

const textt = [
  mainbuilding  ,
  oneimg ,
  prakriticover
];

const zoomOutProperties = {
  indicators: true,
  scale: 0.4,
  
}

export default class Slider extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "../public_html/lib/nivo-slider/js/jquery.nivo.slider.js";
    script.async = true;
  
    document.body.appendChild(script);
  }

    render() {

     
        return (
            <div>



<div className="slide-container">
        <Zoom scale={0.40} {...zoomOutProperties}>
          {
            
            images.map((each, index) => <img key={index}  style={{width: "100%", height:"100%"}} src={each} />)
          }
        </Zoom>
        <Slide style={{width: "100%", height:"100%"}} {...zoomOutProperties}>
      
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${images[0]})`,backgroundSize:'20% 100vh'}}>
            <div  style={{width: "100%", height:"100%"}}  >Slide 1</div>
            </div>
          </div>
          <div className="each-slide" style={{'backgroundImage': `url(${images[1]})`}}>
            <div>
              <div    >Slide 2
              <p>alksjdflkajsldkfjaljksdf</p></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${images[2]})`}}>
            <div  style={{width: "100%", height:"100%"}} >Slide 3</div>
            </div>
          </div>
        </Slide>
      </div>


                <div id="home" class="slider-area" style={{overflow:'hidden'}}>
    <div class="bend niceties preview-2" style={{overflow: 'hidden'}}>
       
        
      {/* direction 1 */}
      <div id="slider-direction-1" class="slider-direction slider-one">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content">
                {/* layer 1 */}
                <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                    
                    <h1 class="title1">IIT KHARAGPUR</h1> 
                    </div>
                <div class="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                    <h2 class="title1">Along With</h2>
                
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* direction 2 */}
      <div id="slider-direction-2" class="slider-direction slider-two">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content text-center">
                {/* layer 1 */}
                
                {/* layer 2 */}
                <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                    <h1 class="title1"> Agricultural & Food Engineering Department</h1>
                  </div>
                <div class="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <h2 class="title1">Presents</h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* direction 3 */}
      <div id="slider-direction-3" class="slider-direction slider-two">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content">
                {/* layer 1 */}
                {/*<div class="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <h2 class="title1">Presents</h2>
                </div>*/}
                {/* layer 2 */}
                <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                   
                  <h1 class="title2"></h1> <h1 class="title2"></h1>
                  <h1 class="title2"></h1>
               
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>   

            </div>
        )
    }
}
