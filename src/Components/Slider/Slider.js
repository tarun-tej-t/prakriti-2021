import React, { Component } from 'react'
import mainbuilding from '../public_html/img/Main building.jpg'
import oneimg from '../public_html/img/6.jpeg'
import prakriticover from '../public_html/img/Prakriti cover.jpg'
import '../public_html/css/nivo-slider-theme.css'






const images = [
  mainbuilding  ,
  oneimg ,
  prakriticover
];


export default class Slider extends Component {
    
    render() {
     
        return (
            <div>
  
            </div>
        )
    }
}


{/*<div id="home" class="slider-area" style={{overflow: "hidden"}}>
    <div class="bend niceties preview-2" style={{overflow: "hidden"}}>
        <div id="ensign-nivoslider" class="slides" style={{overflow: "hidden"}}>
          <img src={images[0]} alt="" title="#slider-direction-1" style={{overflow: "hidden"}}/>
        <img src={images[1]} alt="" title="#slider-direction-2" style={{overflow: "hidden"}}/>
        <img src={images[2]} alt="" title="#slider-direction-3" style={{overflow: "hidden"}}/>
      </div>
        
      {/* direction 1 */}
      {/*<div id="slider-direction-1" class="slider-direction slider-one">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content">
                {/* layer 1 */}
               {/* <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                    
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
     {/* <div id="slider-direction-2" class="slider-direction slider-two">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content text-center">
                {/* layer 1 */}
                
                {/* layer 2 */}
              {/*  <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
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
      {/*<div id="slider-direction-3" class="slider-direction slider-two">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content">
                {/* layer 1 */}
                {/*<div class="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <h2 class="title1">Presents</h2>
                </div>*/}
                {/* layer 2 */}
              {/*  <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                   
                  <h1 class="title2"></h1> <h1 class="title2"></h1>
                  <h1 class="title2"></h1>
               
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
*/}