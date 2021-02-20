import React, { Component } from "react";
import mainbuilding from "../public_html/img/777_1.jpg";
import oneimg from "../public_html/img/6.jpeg";
import leaf from "../public_html/img/dargad.PNG"
import prakriticover from "../public_html/img/Prakriti_cover_1.jpg";
import "../public_html/css/nivo-slider-theme.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Link as Lin } from "react-scroll";
import { Link } from "react-router-dom";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "IIT KHARAGPUR",
    description: "ALONG WITH",
    //	button: 'Read More',
    image: mainbuilding,
    color: 'white',
    //	user: 'Luan Gjokaj',
    //	userProfile: 'https://i.imgur.com/JSW6mEk.png'
  },
  {
    title: "Agricultural & Food Engineering Department",
    description: "Presents",
    //	button: 'Discover',
    color: 'black',
    image: oneimg,
    //	user: 'Erich Behrens',
    //	userProfile: 'https://i.imgur.com/0Clfnu7.png'
  },
  {
    //	title: 'Phasellus volutpat metus',
    	descri:
    	'Prakriti is an Agri and Food Innovation Fest organized by the students of  the Department of Agricultural and Food Engineering, IIT Kharagpur,targeting the amalgamation of academia and industry associated with the agricultural and food sector. We aim to provide  a conduit for budding innovators . . ',
      button: 'Read more',
      color: 'red',
    image: leaf,
    //	user: 'Bruno Vizovskyy',
    //userProfile: 'https://i.imgur.com/4KeKvtH.png'
  },
];

const images = [mainbuilding, oneimg, prakriticover];

export default class iSlider extends Component {
  render() {
    return (
      <div>
 
        <div style={{background: `url('https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/dargad.PNG') center`,backgroundSize:'cover',minWidth:'100vw',minHeight:'100vh'}}>
       <br/> <br/>    <br/> <br/>    <br/> <br/>  
        <p style={{paddingLeft:'6vw',paddingRight:'20vw',textAlign:'left',letterSpacing:'1.5px',fontsize:'1em',fontFamily:'Arial',fontWeight:'lighter',lineHeight:'5vh',backgroundColor:'rgb(242, 246, 250,0.4)'}}>
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
         {/*} <Slider autoplay={1600} touchDisabled='true'>
            {content.map((item, index) => (
              <div
                key={index}
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                }}
             
              >
                {" "}
                
                <div
                  className="center"
                  style={{
                    position: "absolute",
                    top: "40vh",
                    left: "0vw",
                    right: "0vw",
                  }}
                >
                  <h1>
                    <strong style={{color: item.color}}>{item.title}</strong>
                  </h1>
                  <h3>
                    <strong style={{color: item.color}}>{item.description}</strong>
                  </h3>
                  <p style={{position:'absolute',top:'-20vh',left:'20vw',maxWidth:'50vw',textAlign:'left',color:'rgba(30, 130, 76, .8)',letterSpacing:'1.5px',fontsize:'1em',fontFamily:'Arial',fontWeight:'lighter'}}>{item.descri} <p ><Lin to="about" spy={true} smooth={true}>
                <Link to="/" onClick={() => {
                  window.scroll({
                    left: 0,
                    top:1000,
                    behavior: "smooth",
                  });
                }}>{item.button}</Link>
              </Lin> </p></p>
                 
                </div>
              </div>
            ))}
              </Slider>*/}
        </div>
      </div>
    );
  }
}

{
  /*<div id="home" class="slider-area" style={{overflow: "hidden"}}>
    <div class="bend niceties preview-2" style={{overflow: "hidden"}}>
        <div id="ensign-nivoslider" class="slides" style={{overflow: "hidden"}}>
          <img src={images[0]} alt="" title="#slider-direction-1" style={{overflow: "hidden"}}/>
        <img src={images[1]} alt="" title="#slider-direction-2" style={{overflow: "hidden"}}/>
        <img src={images[2]} alt="" title="#slider-direction-3" style={{overflow: "hidden"}}/>
      </div>
        
      {/* direction 1 */
}
{
  /*<div id="slider-direction-1" class="slider-direction slider-one">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content">
                {/* layer 1 */
}
{
  /* <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                    
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

      {/* direction 2 */
}
{
  /* <div id="slider-direction-2" class="slider-direction slider-two">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content text-center">
                {/* layer 1 */
}

{
  /* layer 2 */
}
{
  /*  <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
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

      {/* direction 3 */
}
{
  /*<div id="slider-direction-3" class="slider-direction slider-two">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="slider-content">
                {/* layer 1 */
}
{
  /*<div class="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <h2 class="title1">Presents</h2>
                </div>*/
}
{
  /* layer 2 */
}
{
  /*  <div class="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                   
                  <h1 class="title2"></h1> <h1 class="title2"></h1>
                  <h1 class="title2"></h1>
               
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
*/
}
